/**
 * Drive tree export: lists every folder and file under one or more roots
 * into this spreadsheet. Reads metadata only, never file contents.
 *
 * Use: open a new Google Sheet → Extensions → Apps Script → paste this file,
 * put your folder or shared-drive IDs in ROOT_IDS, run start(), approve access.
 * It keeps going on its own (a one-minute trigger) until the "_status" tab says DONE.
 * Then File → Download → CSV with the "tree" tab selected.
 */

// The ID is the last part of a folder link: drive.google.com/drive/folders/<ID>
// A shared drive's ID works the same way.
const ROOT_IDS = [
  'PASTE_FOLDER_OR_SHARED_DRIVE_ID_HERE',
];

// true keeps only the domain of each owner (e.g. @gmail.com) instead of the full address.
const HIDE_OWNER_NAMES = false;

const TIME_BUDGET_MS = 4.5 * 60 * 1000;
const FLUSH_EVERY = 500;
const HEADER = ['path', 'name', 'kind', 'mimeType', 'ext', 'sizeBytes', 'created', 'modified',
  'owner', 'sharing', 'depth', 'id', 'url', 'shortcutTarget'];

function start() {
  const tree = sheet_('tree'), queue = sheet_('_queue');
  tree.clear(); queue.clear();
  tree.appendRow(HEADER);
  tree.setFrozenRows(1);
  const items = [];
  ROOT_IDS.forEach(id => {
    const f = DriveApp.getFolderById(id);
    const path = f.getName();
    tree.appendRow(folderRow_(f, path, 0));
    items.push([id, path, 0, 'files', '']);
  });
  saveQueue_(items);
  status_('RUNNING', 0);
  ensureTrigger_();
  run();
}

function run() {
  const t0 = Date.now();
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(1000)) return;
  try {
    const tree = sheet_('tree');
    let queue = loadQueue_();
    let buf = [];
    const flush = () => {
      if (!buf.length) return;
      tree.getRange(tree.getLastRow() + 1, 1, buf.length, HEADER.length).setValues(buf);
      buf = [];
    };
    const outOfTime = () => Date.now() - t0 > TIME_BUDGET_MS;

    while (queue.length && !outOfTime()) {
      const item = queue[0];
      const [id, path, depth, stage, token] = item;
      const folder = DriveApp.getFolderById(id);

      if (stage === 'files') {
        const it = token ? DriveApp.continueFileIterator(token) : folder.getFiles();
        while (it.hasNext() && !outOfTime()) {
          buf.push(fileRow_(it.next(), path, depth + 1));
          if (buf.length >= FLUSH_EVERY) flush();
        }
        if (it.hasNext()) { item[4] = it.getContinuationToken(); break; }
        item[3] = 'folders'; item[4] = '';
      }

      if (item[3] === 'folders') {
        const it = item[4] ? DriveApp.continueFolderIterator(item[4]) : folder.getFolders();
        while (it.hasNext() && !outOfTime()) {
          const sub = it.next();
          const subPath = path + '/' + sub.getName();
          buf.push(folderRow_(sub, subPath, depth + 1));
          queue.push([sub.getId(), subPath, depth + 1, 'files', '']);
          if (buf.length >= FLUSH_EVERY) flush();
        }
        if (it.hasNext()) { item[4] = it.getContinuationToken(); break; }
        queue.shift();
      }
    }

    flush();
    saveQueue_(queue);
    const rows = tree.getLastRow() - 1;
    if (queue.length) {
      status_('RUNNING', rows, queue.length);
    } else {
      status_('DONE', rows);
      ScriptApp.getProjectTriggers().forEach(tr => ScriptApp.deleteTrigger(tr));
    }
  } finally {
    lock.releaseLock();
  }
}

// ---------- rows ----------

function folderRow_(f, path, depth) {
  return [path, f.getName(), 'folder', 'folder', '', '', f.getDateCreated(), f.getLastUpdated(),
    owner_(f), sharing_(f), depth, f.getId(), f.getUrl(), ''];
}

function fileRow_(f, parentPath, depth) {
  const name = f.getName(), mime = f.getMimeType();
  const dot = name.lastIndexOf('.');
  let target = '';
  if (mime === 'application/vnd.google-apps.shortcut') {
    try { target = f.getTargetId(); } catch (e) {}
  }
  return [parentPath + '/' + name, name, 'file', mime, dot > 0 ? name.slice(dot + 1).toLowerCase() : '',
    f.getSize(), f.getDateCreated(), f.getLastUpdated(), owner_(f), sharing_(f), depth, f.getId(), f.getUrl(), target];
}

function owner_(f) {
  try {
    const o = f.getOwner();
    if (!o) return '(shared drive)';
    const e = o.getEmail();
    return HIDE_OWNER_NAMES ? e.slice(e.indexOf('@')) : e;
  } catch (e) { return '(shared drive)'; }
}

function sharing_(f) {
  try { return f.getSharingAccess() + ' / ' + f.getSharingPermission(); } catch (e) { return ''; }
}

// ---------- state ----------

function sheet_(name) {
  const ss = SpreadsheetApp.getActive();
  return ss.getSheetByName(name) || ss.insertSheet(name);
}

function loadQueue_() {
  const q = sheet_('_queue'), n = q.getLastRow();
  if (!n) return [];
  return q.getRange(1, 1, n, 5).getValues().map(r => [String(r[0]), String(r[1]), Number(r[2]), String(r[3]), String(r[4])]);
}

function saveQueue_(items) {
  const q = sheet_('_queue');
  q.clear();
  if (items.length) q.getRange(1, 1, items.length, 5).setValues(items);
}

function status_(state, rows, left) {
  const s = sheet_('_status');
  s.clear();
  s.getRange(1, 1, 4, 2).setValues([
    ['state', state],
    ['rows written', rows],
    ['folders left', left || 0],
    ['updated', new Date()],
  ]);
}

function ensureTrigger_() {
  if (ScriptApp.getProjectTriggers().some(t => t.getHandlerFunction() === 'run')) return;
  ScriptApp.newTrigger('run').timeBased().everyMinutes(1).create();
}

// Run this to stop early; start() again later begins from scratch.
function stop() {
  ScriptApp.getProjectTriggers().forEach(tr => ScriptApp.deleteTrigger(tr));
  status_('STOPPED', sheet_('tree').getLastRow() - 1, loadQueue_().length);
}
