#!/usr/bin/env node
// Postinstall: writes a CJS compatibility shim into uuid v14's dist-cjs/.
// uuid v14 is ESM-only, but google-gax and @google-cloud/storage (firebase-admin
// deps) use require('uuid'). The bun patch adds "require" to the exports map;
// this script supplies the actual CJS file that export points to.

const fs = require('node:fs');
const path = require('node:path');

const uuidDir = path.join(__dirname, '..', 'node_modules', 'uuid');
const cjsDir = path.join(uuidDir, 'dist-cjs');

if (!fs.existsSync(path.join(cjsDir, 'index.js'))) {
  fs.mkdirSync(cjsDir, { recursive: true });

  fs.writeFileSync(
    path.join(cjsDir, 'package.json'),
    '{"type":"commonjs"}\n',
  );

  fs.writeFileSync(
    path.join(cjsDir, 'index.js'),
    `'use strict';

const crypto = require('crypto');

function bytesToHex(bytes) {
  return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
}

function uuidFromBytes(bytes) {
  const h = bytesToHex(bytes);
  return \`\${h.slice(0, 8)}-\${h.slice(8, 12)}-\${h.slice(12, 16)}-\${h.slice(16, 20)}-\${h.slice(20, 32)}\`;
}

function fillBuf(uuid, buf, offset) {
  const bytes = Buffer.from(uuid.replace(/-/g, ''), 'hex');
  const off = offset || 0;
  for (let i = 0; i < 16; i++) buf[off + i] = bytes[i];
  return buf;
}

function v4(options, buf, offset) {
  const uuid = crypto.randomUUID();
  return buf ? fillBuf(uuid, buf, offset) : uuid;
}

function v1(options, buf, offset) {
  const uuid = crypto.randomUUID();
  return buf ? fillBuf(uuid, buf, offset) : uuid;
}

function v3() {
  throw new Error('uuid.v3() is not supported in the CJS compatibility shim');
}

function v5() {
  throw new Error('uuid.v5() is not supported in the CJS compatibility shim');
}

function v6(options, buf, offset) {
  const uuid = crypto.randomUUID();
  return buf ? fillBuf(uuid, buf, offset) : uuid;
}

function v7(options, buf, offset) {
  const ts = Date.now();
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  bytes[0] = (ts / 2 ** 40) & 0xff;
  bytes[1] = (ts / 2 ** 32) & 0xff;
  bytes[2] = (ts / 2 ** 24) & 0xff;
  bytes[3] = (ts / 2 ** 16) & 0xff;
  bytes[4] = (ts / 2 ** 8) & 0xff;
  bytes[5] = ts & 0xff;
  bytes[6] = (bytes[6] & 0x0f) | 0x70;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const uuid = uuidFromBytes(bytes);
  return buf ? fillBuf(uuid, buf, offset) : uuid;
}

function validate(str) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(str);
}

function version(uuid) {
  if (!validate(uuid)) throw new TypeError('Invalid UUID');
  return Number.parseInt(uuid.slice(14, 15), 16);
}

function parse(uuid) {
  if (!validate(uuid)) throw new TypeError('Invalid UUID');
  return new Uint8Array(Buffer.from(uuid.replace(/-/g, ''), 'hex'));
}

function stringify(bytes, offset) {
  const off = offset || 0;
  const h = bytesToHex(bytes.slice(off, off + 16));
  return \`\${h.slice(0, 8)}-\${h.slice(8, 12)}-\${h.slice(12, 16)}-\${h.slice(16, 20)}-\${h.slice(20, 32)}\`;
}

const NIL = '00000000-0000-0000-0000-000000000000';
const MAX = 'ffffffff-ffff-ffff-ffff-ffffffffffff';

module.exports = { v1, v3, v4, v5, v6, v7, NIL, MAX, validate, version, parse, stringify };
`,
  );

  console.log('uuid: wrote CJS compatibility shim to node_modules/uuid/dist-cjs/');
}
