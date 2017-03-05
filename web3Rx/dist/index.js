!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic("2", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  ;
  (function(root, undefined) {
    'use strict';
    var NODE_JS = typeof(module) != 'undefined';
    if (NODE_JS) {
      root = global;
      if (root.JS_SHA3_TEST) {
        root.navigator = {userAgent: 'Chrome'};
      }
    }
    var CHROME = (root.JS_SHA3_TEST || !NODE_JS) && navigator.userAgent.indexOf('Chrome') != -1;
    var HEX_CHARS = '0123456789abcdef'.split('');
    var KECCAK_PADDING = [1, 256, 65536, 16777216];
    var PADDING = [6, 1536, 393216, 100663296];
    var SHIFT = [0, 8, 16, 24];
    var RC = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
    var blocks = [],
        s = [];
    var keccak_224 = function(message) {
      return keccak(message, 224, KECCAK_PADDING);
    };
    var keccak_256 = function(message) {
      return keccak(message, 256, KECCAK_PADDING);
    };
    var keccak_384 = function(message) {
      return keccak(message, 384, KECCAK_PADDING);
    };
    var sha3_224 = function(message) {
      return keccak(message, 224, PADDING);
    };
    var sha3_256 = function(message) {
      return keccak(message, 256, PADDING);
    };
    var sha3_384 = function(message) {
      return keccak(message, 384, PADDING);
    };
    var sha3_512 = function(message) {
      return keccak(message, 512, PADDING);
    };
    var keccak = function(message, bits, padding) {
      var notString = typeof(message) != 'string';
      if (notString && message.constructor == root.ArrayBuffer) {
        message = new Uint8Array(message);
      }
      if (bits === undefined) {
        bits = 512;
        padding = KECCAK_PADDING;
      }
      var block,
          code,
          end = false,
          index = 0,
          start = 0,
          length = message.length,
          n,
          i,
          h,
          l,
          c0,
          c1,
          c2,
          c3,
          c4,
          c5,
          c6,
          c7,
          c8,
          c9,
          b0,
          b1,
          b2,
          b3,
          b4,
          b5,
          b6,
          b7,
          b8,
          b9,
          b10,
          b11,
          b12,
          b13,
          b14,
          b15,
          b16,
          b17,
          b18,
          b19,
          b20,
          b21,
          b22,
          b23,
          b24,
          b25,
          b26,
          b27,
          b28,
          b29,
          b30,
          b31,
          b32,
          b33,
          b34,
          b35,
          b36,
          b37,
          b38,
          b39,
          b40,
          b41,
          b42,
          b43,
          b44,
          b45,
          b46,
          b47,
          b48,
          b49;
      var blockCount = (1600 - bits * 2) / 32;
      var byteCount = blockCount * 4;
      for (i = 0; i < 50; ++i) {
        s[i] = 0;
      }
      block = 0;
      do {
        blocks[0] = block;
        for (i = 1; i < blockCount + 1; ++i) {
          blocks[i] = 0;
        }
        if (notString) {
          for (i = start; index < length && i < byteCount; ++index) {
            blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
          }
        } else {
          for (i = start; index < length && i < byteCount; ++index) {
            code = message.charCodeAt(index);
            if (code < 0x80) {
              blocks[i >> 2] |= code << SHIFT[i++ & 3];
            } else if (code < 0x800) {
              blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
            } else if (code < 0xd800 || code >= 0xe000) {
              blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
            } else {
              code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
              blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
            }
          }
        }
        start = i - byteCount;
        if (index == length) {
          blocks[i >> 2] |= padding[i & 3];
          ++index;
        }
        block = blocks[blockCount];
        if (index > length && i < byteCount) {
          blocks[blockCount - 1] |= 0x80000000;
          end = true;
        }
        for (i = 0; i < blockCount; ++i) {
          s[i] ^= blocks[i];
        }
        for (n = 0; n < 48; n += 2) {
          c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
          c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
          c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
          c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
          c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
          c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
          c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
          c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
          c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
          c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];
          h = c8 ^ ((c2 << 1) | (c3 >>> 31));
          l = c9 ^ ((c3 << 1) | (c2 >>> 31));
          s[0] ^= h;
          s[1] ^= l;
          s[10] ^= h;
          s[11] ^= l;
          s[20] ^= h;
          s[21] ^= l;
          s[30] ^= h;
          s[31] ^= l;
          s[40] ^= h;
          s[41] ^= l;
          h = c0 ^ ((c4 << 1) | (c5 >>> 31));
          l = c1 ^ ((c5 << 1) | (c4 >>> 31));
          s[2] ^= h;
          s[3] ^= l;
          s[12] ^= h;
          s[13] ^= l;
          s[22] ^= h;
          s[23] ^= l;
          s[32] ^= h;
          s[33] ^= l;
          s[42] ^= h;
          s[43] ^= l;
          h = c2 ^ ((c6 << 1) | (c7 >>> 31));
          l = c3 ^ ((c7 << 1) | (c6 >>> 31));
          s[4] ^= h;
          s[5] ^= l;
          s[14] ^= h;
          s[15] ^= l;
          s[24] ^= h;
          s[25] ^= l;
          s[34] ^= h;
          s[35] ^= l;
          s[44] ^= h;
          s[45] ^= l;
          h = c4 ^ ((c8 << 1) | (c9 >>> 31));
          l = c5 ^ ((c9 << 1) | (c8 >>> 31));
          s[6] ^= h;
          s[7] ^= l;
          s[16] ^= h;
          s[17] ^= l;
          s[26] ^= h;
          s[27] ^= l;
          s[36] ^= h;
          s[37] ^= l;
          s[46] ^= h;
          s[47] ^= l;
          h = c6 ^ ((c0 << 1) | (c1 >>> 31));
          l = c7 ^ ((c1 << 1) | (c0 >>> 31));
          s[8] ^= h;
          s[9] ^= l;
          s[18] ^= h;
          s[19] ^= l;
          s[28] ^= h;
          s[29] ^= l;
          s[38] ^= h;
          s[39] ^= l;
          s[48] ^= h;
          s[49] ^= l;
          b0 = s[0];
          b1 = s[1];
          b32 = (s[11] << 4) | (s[10] >>> 28);
          b33 = (s[10] << 4) | (s[11] >>> 28);
          b14 = (s[20] << 3) | (s[21] >>> 29);
          b15 = (s[21] << 3) | (s[20] >>> 29);
          b46 = (s[31] << 9) | (s[30] >>> 23);
          b47 = (s[30] << 9) | (s[31] >>> 23);
          b28 = (s[40] << 18) | (s[41] >>> 14);
          b29 = (s[41] << 18) | (s[40] >>> 14);
          b20 = (s[2] << 1) | (s[3] >>> 31);
          b21 = (s[3] << 1) | (s[2] >>> 31);
          b2 = (s[13] << 12) | (s[12] >>> 20);
          b3 = (s[12] << 12) | (s[13] >>> 20);
          b34 = (s[22] << 10) | (s[23] >>> 22);
          b35 = (s[23] << 10) | (s[22] >>> 22);
          b16 = (s[33] << 13) | (s[32] >>> 19);
          b17 = (s[32] << 13) | (s[33] >>> 19);
          b48 = (s[42] << 2) | (s[43] >>> 30);
          b49 = (s[43] << 2) | (s[42] >>> 30);
          b40 = (s[5] << 30) | (s[4] >>> 2);
          b41 = (s[4] << 30) | (s[5] >>> 2);
          b22 = (s[14] << 6) | (s[15] >>> 26);
          b23 = (s[15] << 6) | (s[14] >>> 26);
          b4 = (s[25] << 11) | (s[24] >>> 21);
          b5 = (s[24] << 11) | (s[25] >>> 21);
          b36 = (s[34] << 15) | (s[35] >>> 17);
          b37 = (s[35] << 15) | (s[34] >>> 17);
          b18 = (s[45] << 29) | (s[44] >>> 3);
          b19 = (s[44] << 29) | (s[45] >>> 3);
          b10 = (s[6] << 28) | (s[7] >>> 4);
          b11 = (s[7] << 28) | (s[6] >>> 4);
          b42 = (s[17] << 23) | (s[16] >>> 9);
          b43 = (s[16] << 23) | (s[17] >>> 9);
          b24 = (s[26] << 25) | (s[27] >>> 7);
          b25 = (s[27] << 25) | (s[26] >>> 7);
          b6 = (s[36] << 21) | (s[37] >>> 11);
          b7 = (s[37] << 21) | (s[36] >>> 11);
          b38 = (s[47] << 24) | (s[46] >>> 8);
          b39 = (s[46] << 24) | (s[47] >>> 8);
          b30 = (s[8] << 27) | (s[9] >>> 5);
          b31 = (s[9] << 27) | (s[8] >>> 5);
          b12 = (s[18] << 20) | (s[19] >>> 12);
          b13 = (s[19] << 20) | (s[18] >>> 12);
          b44 = (s[29] << 7) | (s[28] >>> 25);
          b45 = (s[28] << 7) | (s[29] >>> 25);
          b26 = (s[38] << 8) | (s[39] >>> 24);
          b27 = (s[39] << 8) | (s[38] >>> 24);
          b8 = (s[48] << 14) | (s[49] >>> 18);
          b9 = (s[49] << 14) | (s[48] >>> 18);
          s[0] = b0 ^ (~b2 & b4);
          s[1] = b1 ^ (~b3 & b5);
          s[10] = b10 ^ (~b12 & b14);
          s[11] = b11 ^ (~b13 & b15);
          s[20] = b20 ^ (~b22 & b24);
          s[21] = b21 ^ (~b23 & b25);
          s[30] = b30 ^ (~b32 & b34);
          s[31] = b31 ^ (~b33 & b35);
          s[40] = b40 ^ (~b42 & b44);
          s[41] = b41 ^ (~b43 & b45);
          s[2] = b2 ^ (~b4 & b6);
          s[3] = b3 ^ (~b5 & b7);
          s[12] = b12 ^ (~b14 & b16);
          s[13] = b13 ^ (~b15 & b17);
          s[22] = b22 ^ (~b24 & b26);
          s[23] = b23 ^ (~b25 & b27);
          s[32] = b32 ^ (~b34 & b36);
          s[33] = b33 ^ (~b35 & b37);
          s[42] = b42 ^ (~b44 & b46);
          s[43] = b43 ^ (~b45 & b47);
          s[4] = b4 ^ (~b6 & b8);
          s[5] = b5 ^ (~b7 & b9);
          s[14] = b14 ^ (~b16 & b18);
          s[15] = b15 ^ (~b17 & b19);
          s[24] = b24 ^ (~b26 & b28);
          s[25] = b25 ^ (~b27 & b29);
          s[34] = b34 ^ (~b36 & b38);
          s[35] = b35 ^ (~b37 & b39);
          s[44] = b44 ^ (~b46 & b48);
          s[45] = b45 ^ (~b47 & b49);
          s[6] = b6 ^ (~b8 & b0);
          s[7] = b7 ^ (~b9 & b1);
          s[16] = b16 ^ (~b18 & b10);
          s[17] = b17 ^ (~b19 & b11);
          s[26] = b26 ^ (~b28 & b20);
          s[27] = b27 ^ (~b29 & b21);
          s[36] = b36 ^ (~b38 & b30);
          s[37] = b37 ^ (~b39 & b31);
          s[46] = b46 ^ (~b48 & b40);
          s[47] = b47 ^ (~b49 & b41);
          s[8] = b8 ^ (~b0 & b2);
          s[9] = b9 ^ (~b1 & b3);
          s[18] = b18 ^ (~b10 & b12);
          s[19] = b19 ^ (~b11 & b13);
          s[28] = b28 ^ (~b20 & b22);
          s[29] = b29 ^ (~b21 & b23);
          s[38] = b38 ^ (~b30 & b32);
          s[39] = b39 ^ (~b31 & b33);
          s[48] = b48 ^ (~b40 & b42);
          s[49] = b49 ^ (~b41 & b43);
          s[0] ^= RC[n];
          s[1] ^= RC[n + 1];
        }
      } while (!end);
      var hex = '';
      if (CHROME) {
        b0 = s[0];
        b1 = s[1];
        b2 = s[2];
        b3 = s[3];
        b4 = s[4];
        b5 = s[5];
        b6 = s[6];
        b7 = s[7];
        b8 = s[8];
        b9 = s[9];
        b10 = s[10];
        b11 = s[11];
        b12 = s[12];
        b13 = s[13];
        b14 = s[14];
        b15 = s[15];
        hex += HEX_CHARS[(b0 >> 4) & 0x0F] + HEX_CHARS[b0 & 0x0F] + HEX_CHARS[(b0 >> 12) & 0x0F] + HEX_CHARS[(b0 >> 8) & 0x0F] + HEX_CHARS[(b0 >> 20) & 0x0F] + HEX_CHARS[(b0 >> 16) & 0x0F] + HEX_CHARS[(b0 >> 28) & 0x0F] + HEX_CHARS[(b0 >> 24) & 0x0F] + HEX_CHARS[(b1 >> 4) & 0x0F] + HEX_CHARS[b1 & 0x0F] + HEX_CHARS[(b1 >> 12) & 0x0F] + HEX_CHARS[(b1 >> 8) & 0x0F] + HEX_CHARS[(b1 >> 20) & 0x0F] + HEX_CHARS[(b1 >> 16) & 0x0F] + HEX_CHARS[(b1 >> 28) & 0x0F] + HEX_CHARS[(b1 >> 24) & 0x0F] + HEX_CHARS[(b2 >> 4) & 0x0F] + HEX_CHARS[b2 & 0x0F] + HEX_CHARS[(b2 >> 12) & 0x0F] + HEX_CHARS[(b2 >> 8) & 0x0F] + HEX_CHARS[(b2 >> 20) & 0x0F] + HEX_CHARS[(b2 >> 16) & 0x0F] + HEX_CHARS[(b2 >> 28) & 0x0F] + HEX_CHARS[(b2 >> 24) & 0x0F] + HEX_CHARS[(b3 >> 4) & 0x0F] + HEX_CHARS[b3 & 0x0F] + HEX_CHARS[(b3 >> 12) & 0x0F] + HEX_CHARS[(b3 >> 8) & 0x0F] + HEX_CHARS[(b3 >> 20) & 0x0F] + HEX_CHARS[(b3 >> 16) & 0x0F] + HEX_CHARS[(b3 >> 28) & 0x0F] + HEX_CHARS[(b3 >> 24) & 0x0F] + HEX_CHARS[(b4 >> 4) & 0x0F] + HEX_CHARS[b4 & 0x0F] + HEX_CHARS[(b4 >> 12) & 0x0F] + HEX_CHARS[(b4 >> 8) & 0x0F] + HEX_CHARS[(b4 >> 20) & 0x0F] + HEX_CHARS[(b4 >> 16) & 0x0F] + HEX_CHARS[(b4 >> 28) & 0x0F] + HEX_CHARS[(b4 >> 24) & 0x0F] + HEX_CHARS[(b5 >> 4) & 0x0F] + HEX_CHARS[b5 & 0x0F] + HEX_CHARS[(b5 >> 12) & 0x0F] + HEX_CHARS[(b5 >> 8) & 0x0F] + HEX_CHARS[(b5 >> 20) & 0x0F] + HEX_CHARS[(b5 >> 16) & 0x0F] + HEX_CHARS[(b5 >> 28) & 0x0F] + HEX_CHARS[(b5 >> 24) & 0x0F] + HEX_CHARS[(b6 >> 4) & 0x0F] + HEX_CHARS[b6 & 0x0F] + HEX_CHARS[(b6 >> 12) & 0x0F] + HEX_CHARS[(b6 >> 8) & 0x0F] + HEX_CHARS[(b6 >> 20) & 0x0F] + HEX_CHARS[(b6 >> 16) & 0x0F] + HEX_CHARS[(b6 >> 28) & 0x0F] + HEX_CHARS[(b6 >> 24) & 0x0F];
        if (bits >= 256) {
          hex += HEX_CHARS[(b7 >> 4) & 0x0F] + HEX_CHARS[b7 & 0x0F] + HEX_CHARS[(b7 >> 12) & 0x0F] + HEX_CHARS[(b7 >> 8) & 0x0F] + HEX_CHARS[(b7 >> 20) & 0x0F] + HEX_CHARS[(b7 >> 16) & 0x0F] + HEX_CHARS[(b7 >> 28) & 0x0F] + HEX_CHARS[(b7 >> 24) & 0x0F];
        }
        if (bits >= 384) {
          hex += HEX_CHARS[(b8 >> 4) & 0x0F] + HEX_CHARS[b8 & 0x0F] + HEX_CHARS[(b8 >> 12) & 0x0F] + HEX_CHARS[(b8 >> 8) & 0x0F] + HEX_CHARS[(b8 >> 20) & 0x0F] + HEX_CHARS[(b8 >> 16) & 0x0F] + HEX_CHARS[(b8 >> 28) & 0x0F] + HEX_CHARS[(b8 >> 24) & 0x0F] + HEX_CHARS[(b9 >> 4) & 0x0F] + HEX_CHARS[b9 & 0x0F] + HEX_CHARS[(b9 >> 12) & 0x0F] + HEX_CHARS[(b9 >> 8) & 0x0F] + HEX_CHARS[(b9 >> 20) & 0x0F] + HEX_CHARS[(b9 >> 16) & 0x0F] + HEX_CHARS[(b9 >> 28) & 0x0F] + HEX_CHARS[(b9 >> 24) & 0x0F] + HEX_CHARS[(b10 >> 4) & 0x0F] + HEX_CHARS[b10 & 0x0F] + HEX_CHARS[(b10 >> 12) & 0x0F] + HEX_CHARS[(b10 >> 8) & 0x0F] + HEX_CHARS[(b10 >> 20) & 0x0F] + HEX_CHARS[(b10 >> 16) & 0x0F] + HEX_CHARS[(b10 >> 28) & 0x0F] + HEX_CHARS[(b10 >> 24) & 0x0F] + HEX_CHARS[(b11 >> 4) & 0x0F] + HEX_CHARS[b11 & 0x0F] + HEX_CHARS[(b11 >> 12) & 0x0F] + HEX_CHARS[(b11 >> 8) & 0x0F] + HEX_CHARS[(b11 >> 20) & 0x0F] + HEX_CHARS[(b11 >> 16) & 0x0F] + HEX_CHARS[(b11 >> 28) & 0x0F] + HEX_CHARS[(b11 >> 24) & 0x0F];
        }
        if (bits == 512) {
          hex += HEX_CHARS[(b12 >> 4) & 0x0F] + HEX_CHARS[b12 & 0x0F] + HEX_CHARS[(b12 >> 12) & 0x0F] + HEX_CHARS[(b12 >> 8) & 0x0F] + HEX_CHARS[(b12 >> 20) & 0x0F] + HEX_CHARS[(b12 >> 16) & 0x0F] + HEX_CHARS[(b12 >> 28) & 0x0F] + HEX_CHARS[(b12 >> 24) & 0x0F] + HEX_CHARS[(b13 >> 4) & 0x0F] + HEX_CHARS[b13 & 0x0F] + HEX_CHARS[(b13 >> 12) & 0x0F] + HEX_CHARS[(b13 >> 8) & 0x0F] + HEX_CHARS[(b13 >> 20) & 0x0F] + HEX_CHARS[(b13 >> 16) & 0x0F] + HEX_CHARS[(b13 >> 28) & 0x0F] + HEX_CHARS[(b13 >> 24) & 0x0F] + HEX_CHARS[(b14 >> 4) & 0x0F] + HEX_CHARS[b14 & 0x0F] + HEX_CHARS[(b14 >> 12) & 0x0F] + HEX_CHARS[(b14 >> 8) & 0x0F] + HEX_CHARS[(b14 >> 20) & 0x0F] + HEX_CHARS[(b14 >> 16) & 0x0F] + HEX_CHARS[(b14 >> 28) & 0x0F] + HEX_CHARS[(b14 >> 24) & 0x0F] + HEX_CHARS[(b15 >> 4) & 0x0F] + HEX_CHARS[b15 & 0x0F] + HEX_CHARS[(b15 >> 12) & 0x0F] + HEX_CHARS[(b15 >> 8) & 0x0F] + HEX_CHARS[(b15 >> 20) & 0x0F] + HEX_CHARS[(b15 >> 16) & 0x0F] + HEX_CHARS[(b15 >> 28) & 0x0F] + HEX_CHARS[(b15 >> 24) & 0x0F];
        }
      } else {
        for (i = 0, n = bits / 32; i < n; ++i) {
          h = s[i];
          hex += HEX_CHARS[(h >> 4) & 0x0F] + HEX_CHARS[h & 0x0F] + HEX_CHARS[(h >> 12) & 0x0F] + HEX_CHARS[(h >> 8) & 0x0F] + HEX_CHARS[(h >> 20) & 0x0F] + HEX_CHARS[(h >> 16) & 0x0F] + HEX_CHARS[(h >> 28) & 0x0F] + HEX_CHARS[(h >> 24) & 0x0F];
        }
      }
      return hex;
    };
    if (!root.JS_SHA3_TEST && NODE_JS) {
      module.exports = {
        sha3_512: sha3_512,
        sha3_384: sha3_384,
        sha3_256: sha3_256,
        sha3_224: sha3_224,
        keccak_512: keccak,
        keccak_384: keccak_384,
        keccak_256: keccak_256,
        keccak_224: keccak_224
      };
    } else if (root) {
      root.sha3_512 = sha3_512;
      root.sha3_384 = sha3_384;
      root.sha3_256 = sha3_256;
      root.sha3_224 = sha3_224;
      root.keccak_512 = keccak;
      root.keccak_384 = keccak_384;
      root.keccak_256 = keccak_256;
      root.keccak_224 = keccak_224;
    }
  }(this));
  return module.exports;
});

$__System.registerDynamic("3", ["2", "4"], true, function($__require, exports, module) {
  var Buffer = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  const Sha3 = $__require('2');
  const hashLengths = [224, 256, 384, 512];
  var hash = function(bitcount) {
    if (bitcount !== undefined && hashLengths.indexOf(bitcount) == -1)
      throw new Error('Unsupported hash length');
    this.content = [];
    this.bitcount = bitcount ? 'keccak_' + bitcount : 'keccak_512';
  };
  hash.prototype.update = function(i) {
    if (Buffer.isBuffer(i))
      this.content.push(i);
    else if (typeof i === 'string')
      this.content.push(new Buffer(i));
    else
      throw new Error('Unsupported argument to update');
    return this;
  };
  hash.prototype.digest = function(encoding) {
    var result = Sha3[this.bitcount](Buffer.concat(this.content));
    if (encoding === 'hex')
      return result;
    else if (encoding === 'binary' || encoding === undefined)
      return new Buffer(result, 'hex').toString('binary');
    else
      throw new Error('Unsupported encoding for digest: ' + encoding);
  };
  module.exports = {SHA3Hash: hash};
  return module.exports;
});

$__System.registerDynamic("5", ["3"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require('3').SHA3Hash;
  return module.exports;
});

$__System.registerDynamic("6", ["4"], true, function($__require, exports, module) {
  "use strict";
  var Buffer = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  var toString = Object.prototype.toString;
  exports.isArray = function(value, message) {
    if (!Array.isArray(value))
      throw TypeError(message);
  };
  exports.isBoolean = function(value, message) {
    if (toString.call(value) !== '[object Boolean]')
      throw TypeError(message);
  };
  exports.isBuffer = function(value, message) {
    if (!Buffer.isBuffer(value))
      throw TypeError(message);
  };
  exports.isFunction = function(value, message) {
    if (toString.call(value) !== '[object Function]')
      throw TypeError(message);
  };
  exports.isNumber = function(value, message) {
    if (toString.call(value) !== '[object Number]')
      throw TypeError(message);
  };
  exports.isObject = function(value, message) {
    if (toString.call(value) !== '[object Object]')
      throw TypeError(message);
  };
  exports.isBufferLength = function(buffer, length, message) {
    if (buffer.length !== length)
      throw RangeError(message);
  };
  exports.isBufferLength2 = function(buffer, length1, length2, message) {
    if (buffer.length !== length1 && buffer.length !== length2)
      throw RangeError(message);
  };
  exports.isLengthGTZero = function(value, message) {
    if (value.length === 0)
      throw RangeError(message);
  };
  exports.isNumberInInterval = function(number, x, y, message) {
    if (number <= x || number >= y)
      throw RangeError(message);
  };
  return module.exports;
});

$__System.registerDynamic("7", ["4"], true, function($__require, exports, module) {
  var Buffer = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  function check(buffer) {
    if (buffer.length < 8)
      return false;
    if (buffer.length > 72)
      return false;
    if (buffer[0] !== 0x30)
      return false;
    if (buffer[1] !== buffer.length - 2)
      return false;
    if (buffer[2] !== 0x02)
      return false;
    var lenR = buffer[3];
    if (lenR === 0)
      return false;
    if (5 + lenR >= buffer.length)
      return false;
    if (buffer[4 + lenR] !== 0x02)
      return false;
    var lenS = buffer[5 + lenR];
    if (lenS === 0)
      return false;
    if ((6 + lenR + lenS) !== buffer.length)
      return false;
    if (buffer[4] & 0x80)
      return false;
    if (lenR > 1 && (buffer[4] === 0x00) && !(buffer[5] & 0x80))
      return false;
    if (buffer[lenR + 6] & 0x80)
      return false;
    if (lenS > 1 && (buffer[lenR + 6] === 0x00) && !(buffer[lenR + 7] & 0x80))
      return false;
    return true;
  }
  function decode(buffer) {
    if (buffer.length < 8)
      throw new Error('DER sequence length is too short');
    if (buffer.length > 72)
      throw new Error('DER sequence length is too long');
    if (buffer[0] !== 0x30)
      throw new Error('Expected DER sequence');
    if (buffer[1] !== buffer.length - 2)
      throw new Error('DER sequence length is invalid');
    if (buffer[2] !== 0x02)
      throw new Error('Expected DER integer');
    var lenR = buffer[3];
    if (lenR === 0)
      throw new Error('R length is zero');
    if (5 + lenR >= buffer.length)
      throw new Error('R length is too long');
    if (buffer[4 + lenR] !== 0x02)
      throw new Error('Expected DER integer (2)');
    var lenS = buffer[5 + lenR];
    if (lenS === 0)
      throw new Error('S length is zero');
    if ((6 + lenR + lenS) !== buffer.length)
      throw new Error('S length is invalid');
    if (buffer[4] & 0x80)
      throw new Error('R value is negative');
    if (lenR > 1 && (buffer[4] === 0x00) && !(buffer[5] & 0x80))
      throw new Error('R value excessively padded');
    if (buffer[lenR + 6] & 0x80)
      throw new Error('S value is negative');
    if (lenS > 1 && (buffer[lenR + 6] === 0x00) && !(buffer[lenR + 7] & 0x80))
      throw new Error('S value excessively padded');
    return {
      r: buffer.slice(4, 4 + lenR),
      s: buffer.slice(6 + lenR)
    };
  }
  function encode(r, s) {
    var lenR = r.length;
    var lenS = s.length;
    if (lenR === 0)
      throw new Error('R length is zero');
    if (lenS === 0)
      throw new Error('S length is zero');
    if (lenR > 33)
      throw new Error('R length is too long');
    if (lenS > 33)
      throw new Error('S length is too long');
    if (r[0] & 0x80)
      throw new Error('R value is negative');
    if (s[0] & 0x80)
      throw new Error('S value is negative');
    if (lenR > 1 && (r[0] === 0x00) && !(r[1] & 0x80))
      throw new Error('R value excessively padded');
    if (lenS > 1 && (s[0] === 0x00) && !(s[1] & 0x80))
      throw new Error('S value excessively padded');
    var signature = new Buffer(6 + lenR + lenS);
    signature[0] = 0x30;
    signature[1] = signature.length - 2;
    signature[2] = 0x02;
    signature[3] = r.length;
    r.copy(signature, 4);
    signature[4 + lenR] = 0x02;
    signature[5 + lenR] = s.length;
    s.copy(signature, 6 + lenR);
    return signature;
  }
  module.exports = {
    check: check,
    decode: decode,
    encode: encode
  };
  return module.exports;
});

$__System.registerDynamic("8", ["7", "4"], true, function($__require, exports, module) {
  "use strict";
  var Buffer = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  var bip66 = $__require('7');
  var EC_PRIVKEY_EXPORT_DER_COMPRESSED = new Buffer([0x30, 0x81, 0xd3, 0x02, 0x01, 0x01, 0x04, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xa0, 0x81, 0x85, 0x30, 0x81, 0x82, 0x02, 0x01, 0x01, 0x30, 0x2c, 0x06, 0x07, 0x2a, 0x86, 0x48, 0xcE, 0x3d, 0x01, 0x01, 0x02, 0x21, 0x00, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xfE, 0xff, 0xff, 0xfc, 0x2f, 0x30, 0x06, 0x04, 0x01, 0x00, 0x04, 0x01, 0x07, 0x04, 0x21, 0x02, 0x79, 0xbE, 0x66, 0x7E, 0xf9, 0xdc, 0xbb, 0xac, 0x55, 0xa0, 0x62, 0x95, 0xcE, 0x87, 0x0b, 0x07, 0x02, 0x9b, 0xfc, 0xdb, 0x2d, 0xcE, 0x28, 0xd9, 0x59, 0xf2, 0x81, 0x5b, 0x16, 0xf8, 0x17, 0x98, 0x02, 0x21, 0x00, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xfE, 0xba, 0xaE, 0xdc, 0xE6, 0xaf, 0x48, 0xa0, 0x3b, 0xbf, 0xd2, 0x5E, 0x8c, 0xd0, 0x36, 0x41, 0x41, 0x02, 0x01, 0x01, 0xa1, 0x24, 0x03, 0x22, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
  var EC_PRIVKEY_EXPORT_DER_UNCOMPRESSED = new Buffer([0x30, 0x82, 0x01, 0x13, 0x02, 0x01, 0x01, 0x04, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xa0, 0x81, 0xa5, 0x30, 0x81, 0xa2, 0x02, 0x01, 0x01, 0x30, 0x2c, 0x06, 0x07, 0x2a, 0x86, 0x48, 0xcE, 0x3d, 0x01, 0x01, 0x02, 0x21, 0x00, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xfE, 0xff, 0xff, 0xfc, 0x2f, 0x30, 0x06, 0x04, 0x01, 0x00, 0x04, 0x01, 0x07, 0x04, 0x41, 0x04, 0x79, 0xbE, 0x66, 0x7E, 0xf9, 0xdc, 0xbb, 0xac, 0x55, 0xa0, 0x62, 0x95, 0xcE, 0x87, 0x0b, 0x07, 0x02, 0x9b, 0xfc, 0xdb, 0x2d, 0xcE, 0x28, 0xd9, 0x59, 0xf2, 0x81, 0x5b, 0x16, 0xf8, 0x17, 0x98, 0x48, 0x3a, 0xda, 0x77, 0x26, 0xa3, 0xc4, 0x65, 0x5d, 0xa4, 0xfb, 0xfc, 0x0E, 0x11, 0x08, 0xa8, 0xfd, 0x17, 0xb4, 0x48, 0xa6, 0x85, 0x54, 0x19, 0x9c, 0x47, 0xd0, 0x8f, 0xfb, 0x10, 0xd4, 0xb8, 0x02, 0x21, 0x00, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xfE, 0xba, 0xaE, 0xdc, 0xE6, 0xaf, 0x48, 0xa0, 0x3b, 0xbf, 0xd2, 0x5E, 0x8c, 0xd0, 0x36, 0x41, 0x41, 0x02, 0x01, 0x01, 0xa1, 0x44, 0x03, 0x42, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
  var ZERO_BUFFER_32 = new Buffer([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
  exports.privateKeyExport = function(privateKey, publicKey, compressed) {
    var result = new Buffer(compressed ? EC_PRIVKEY_EXPORT_DER_COMPRESSED : EC_PRIVKEY_EXPORT_DER_UNCOMPRESSED);
    privateKey.copy(result, compressed ? 8 : 9);
    publicKey.copy(result, compressed ? 181 : 214);
    return result;
  };
  exports.privateKeyImport = function(privateKey) {
    var length = privateKey.length;
    var index = 0;
    if (length < index + 1 || privateKey[index] !== 0x30)
      return;
    index += 1;
    if (length < index + 1 || !(privateKey[index] & 0x80))
      return;
    var lenb = privateKey[index] & 0x7f;
    index += 1;
    if (lenb < 1 || lenb > 2)
      return;
    if (length < index + lenb)
      return;
    var len = privateKey[index + lenb - 1] | (lenb > 1 ? privateKey[index + lenb - 2] << 8 : 0);
    index += lenb;
    if (length < index + len)
      return;
    if (length < index + 3 || privateKey[index] !== 0x02 || privateKey[index + 1] !== 0x01 || privateKey[index + 2] !== 0x01) {
      return;
    }
    index += 3;
    if (length < index + 2 || privateKey[index] !== 0x04 || privateKey[index + 1] > 0x20 || length < index + 2 + privateKey[index + 1]) {
      return;
    }
    return privateKey.slice(index + 2, index + 2 + privateKey[index + 1]);
  };
  exports.signatureExport = function(sigObj) {
    var r = Buffer.concat([new Buffer([0]), sigObj.r]);
    for (var lenR = 33,
        posR = 0; lenR > 1 && r[posR] === 0x00 && !(r[posR + 1] & 0x80); --lenR, ++posR)
      ;
    var s = Buffer.concat([new Buffer([0]), sigObj.s]);
    for (var lenS = 33,
        posS = 0; lenS > 1 && s[posS] === 0x00 && !(s[posS + 1] & 0x80); --lenS, ++posS)
      ;
    return bip66.encode(r.slice(posR), s.slice(posS));
  };
  exports.signatureImport = function(sig) {
    var r = new Buffer(ZERO_BUFFER_32);
    var s = new Buffer(ZERO_BUFFER_32);
    try {
      var sigObj = bip66.decode(sig);
      if (sigObj.r.length === 33 && sigObj.r[0] === 0x00)
        sigObj.r = sigObj.r.slice(1);
      if (sigObj.r.length > 32)
        throw new Error('R length is too long');
      if (sigObj.s.length === 33 && sigObj.s[0] === 0x00)
        sigObj.s = sigObj.s.slice(1);
      if (sigObj.s.length > 32)
        throw new Error('S length is too long');
    } catch (err) {
      return;
    }
    sigObj.r.copy(r, 32 - sigObj.r.length);
    sigObj.s.copy(s, 32 - sigObj.s.length);
    return {
      r: r,
      s: s
    };
  };
  exports.signatureImportLax = function(sig) {
    var r = new Buffer(ZERO_BUFFER_32);
    var s = new Buffer(ZERO_BUFFER_32);
    var length = sig.length;
    var index = 0;
    if (sig[index++] !== 0x30)
      return;
    var lenbyte = sig[index++];
    if (lenbyte & 0x80) {
      index += lenbyte - 0x80;
      if (index > length)
        return;
    }
    if (sig[index++] !== 0x02)
      return;
    var rlen = sig[index++];
    if (rlen & 0x80) {
      lenbyte = rlen - 0x80;
      if (index + lenbyte > length)
        return;
      for (; lenbyte > 0 && sig[index] === 0x00; index += 1, lenbyte -= 1)
        ;
      for (rlen = 0; lenbyte > 0; index += 1, lenbyte -= 1)
        rlen = (rlen << 8) + sig[index];
    }
    if (rlen > length - index)
      return;
    var rindex = index;
    index += rlen;
    if (sig[index++] !== 0x02)
      return;
    var slen = sig[index++];
    if (slen & 0x80) {
      lenbyte = slen - 0x80;
      if (index + lenbyte > length)
        return;
      for (; lenbyte > 0 && sig[index] === 0x00; index += 1, lenbyte -= 1)
        ;
      for (slen = 0; lenbyte > 0; index += 1, lenbyte -= 1)
        slen = (slen << 8) + sig[index];
    }
    if (slen > length - index)
      return;
    var sindex = index;
    index += slen;
    for (; rlen > 0 && sig[rindex] === 0x00; rlen -= 1, rindex += 1)
      ;
    if (rlen > 32)
      return;
    var rvalue = sig.slice(rindex, rindex + rlen);
    rvalue.copy(r, 32 - rvalue.length);
    for (; slen > 0 && sig[sindex] === 0x00; slen -= 1, sindex += 1)
      ;
    if (slen > 32)
      return;
    var svalue = sig.slice(sindex, sindex + slen);
    svalue.copy(s, 32 - svalue.length);
    return {
      r: r,
      s: s
    };
  };
  return module.exports;
});

$__System.registerDynamic("9", ["6", "8", "a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var assert = $__require('6');
  var der = $__require('8');
  var messages = $__require('a');
  function initCompressedValue(value, defaultValue) {
    if (value === undefined)
      return defaultValue;
    assert.isBoolean(value, messages.COMPRESSED_TYPE_INVALID);
    return value;
  }
  module.exports = function(secp256k1) {
    return {
      privateKeyVerify: function(privateKey) {
        assert.isBuffer(privateKey, messages.EC_PRIVATE_KEY_TYPE_INVALID);
        return privateKey.length === 32 && secp256k1.privateKeyVerify(privateKey);
      },
      privateKeyExport: function(privateKey, compressed) {
        assert.isBuffer(privateKey, messages.EC_PRIVATE_KEY_TYPE_INVALID);
        assert.isBufferLength(privateKey, 32, messages.EC_PRIVATE_KEY_LENGTH_INVALID);
        compressed = initCompressedValue(compressed, true);
        var publicKey = secp256k1.privateKeyExport(privateKey, compressed);
        return der.privateKeyExport(privateKey, publicKey, compressed);
      },
      privateKeyImport: function(privateKey) {
        assert.isBuffer(privateKey, messages.EC_PRIVATE_KEY_TYPE_INVALID);
        privateKey = der.privateKeyImport(privateKey);
        if (privateKey && privateKey.length === 32 && secp256k1.privateKeyVerify(privateKey))
          return privateKey;
        throw new Error(messages.EC_PRIVATE_KEY_IMPORT_DER_FAIL);
      },
      privateKeyTweakAdd: function(privateKey, tweak) {
        assert.isBuffer(privateKey, messages.EC_PRIVATE_KEY_TYPE_INVALID);
        assert.isBufferLength(privateKey, 32, messages.EC_PRIVATE_KEY_LENGTH_INVALID);
        assert.isBuffer(tweak, messages.TWEAK_TYPE_INVALID);
        assert.isBufferLength(tweak, 32, messages.TWEAK_LENGTH_INVALID);
        return secp256k1.privateKeyTweakAdd(privateKey, tweak);
      },
      privateKeyTweakMul: function(privateKey, tweak) {
        assert.isBuffer(privateKey, messages.EC_PRIVATE_KEY_TYPE_INVALID);
        assert.isBufferLength(privateKey, 32, messages.EC_PRIVATE_KEY_LENGTH_INVALID);
        assert.isBuffer(tweak, messages.TWEAK_TYPE_INVALID);
        assert.isBufferLength(tweak, 32, messages.TWEAK_LENGTH_INVALID);
        return secp256k1.privateKeyTweakMul(privateKey, tweak);
      },
      publicKeyCreate: function(privateKey, compressed) {
        assert.isBuffer(privateKey, messages.EC_PRIVATE_KEY_TYPE_INVALID);
        assert.isBufferLength(privateKey, 32, messages.EC_PRIVATE_KEY_LENGTH_INVALID);
        compressed = initCompressedValue(compressed, true);
        return secp256k1.publicKeyCreate(privateKey, compressed);
      },
      publicKeyConvert: function(publicKey, compressed) {
        assert.isBuffer(publicKey, messages.EC_PUBLIC_KEY_TYPE_INVALID);
        assert.isBufferLength2(publicKey, 33, 65, messages.EC_PUBLIC_KEY_LENGTH_INVALID);
        compressed = initCompressedValue(compressed, true);
        return secp256k1.publicKeyConvert(publicKey, compressed);
      },
      publicKeyVerify: function(publicKey) {
        assert.isBuffer(publicKey, messages.EC_PUBLIC_KEY_TYPE_INVALID);
        return secp256k1.publicKeyVerify(publicKey);
      },
      publicKeyTweakAdd: function(publicKey, tweak, compressed) {
        assert.isBuffer(publicKey, messages.EC_PUBLIC_KEY_TYPE_INVALID);
        assert.isBufferLength2(publicKey, 33, 65, messages.EC_PUBLIC_KEY_LENGTH_INVALID);
        assert.isBuffer(tweak, messages.TWEAK_TYPE_INVALID);
        assert.isBufferLength(tweak, 32, messages.TWEAK_LENGTH_INVALID);
        compressed = initCompressedValue(compressed, true);
        return secp256k1.publicKeyTweakAdd(publicKey, tweak, compressed);
      },
      publicKeyTweakMul: function(publicKey, tweak, compressed) {
        assert.isBuffer(publicKey, messages.EC_PUBLIC_KEY_TYPE_INVALID);
        assert.isBufferLength2(publicKey, 33, 65, messages.EC_PUBLIC_KEY_LENGTH_INVALID);
        assert.isBuffer(tweak, messages.TWEAK_TYPE_INVALID);
        assert.isBufferLength(tweak, 32, messages.TWEAK_LENGTH_INVALID);
        compressed = initCompressedValue(compressed, true);
        return secp256k1.publicKeyTweakMul(publicKey, tweak, compressed);
      },
      publicKeyCombine: function(publicKeys, compressed) {
        assert.isArray(publicKeys, messages.EC_PUBLIC_KEYS_TYPE_INVALID);
        assert.isLengthGTZero(publicKeys, messages.EC_PUBLIC_KEYS_LENGTH_INVALID);
        for (var i = 0; i < publicKeys.length; ++i) {
          assert.isBuffer(publicKeys[i], messages.EC_PUBLIC_KEY_TYPE_INVALID);
          assert.isBufferLength2(publicKeys[i], 33, 65, messages.EC_PUBLIC_KEY_LENGTH_INVALID);
        }
        compressed = initCompressedValue(compressed, true);
        return secp256k1.publicKeyCombine(publicKeys, compressed);
      },
      signatureNormalize: function(signature) {
        assert.isBuffer(signature, messages.ECDSA_SIGNATURE_TYPE_INVALID);
        assert.isBufferLength(signature, 64, messages.ECDSA_SIGNATURE_LENGTH_INVALID);
        return secp256k1.signatureNormalize(signature);
      },
      signatureExport: function(signature) {
        assert.isBuffer(signature, messages.ECDSA_SIGNATURE_TYPE_INVALID);
        assert.isBufferLength(signature, 64, messages.ECDSA_SIGNATURE_LENGTH_INVALID);
        var sigObj = secp256k1.signatureExport(signature);
        return der.signatureExport(sigObj);
      },
      signatureImport: function(sig) {
        assert.isBuffer(sig, messages.ECDSA_SIGNATURE_TYPE_INVALID);
        assert.isLengthGTZero(sig, messages.ECDSA_SIGNATURE_LENGTH_INVALID);
        var sigObj = der.signatureImport(sig);
        if (sigObj)
          return secp256k1.signatureImport(sigObj);
        throw new Error(messages.ECDSA_SIGNATURE_PARSE_DER_FAIL);
      },
      signatureImportLax: function(sig) {
        assert.isBuffer(sig, messages.ECDSA_SIGNATURE_TYPE_INVALID);
        assert.isLengthGTZero(sig, messages.ECDSA_SIGNATURE_LENGTH_INVALID);
        var sigObj = der.signatureImportLax(sig);
        if (sigObj)
          return secp256k1.signatureImport(sigObj);
        throw new Error(messages.ECDSA_SIGNATURE_PARSE_DER_FAIL);
      },
      sign: function(message, privateKey, options) {
        assert.isBuffer(message, messages.MSG32_TYPE_INVALID);
        assert.isBufferLength(message, 32, messages.MSG32_LENGTH_INVALID);
        assert.isBuffer(privateKey, messages.EC_PRIVATE_KEY_TYPE_INVALID);
        assert.isBufferLength(privateKey, 32, messages.EC_PRIVATE_KEY_LENGTH_INVALID);
        var data = null;
        var noncefn = null;
        if (options !== undefined) {
          assert.isObject(options, messages.OPTIONS_TYPE_INVALID);
          if (options.data !== undefined) {
            assert.isBuffer(options.data, messages.OPTIONS_DATA_TYPE_INVALID);
            assert.isBufferLength(options.data, 32, messages.OPTIONS_DATA_LENGTH_INVALID);
            data = options.data;
          }
          if (options.noncefn !== undefined) {
            assert.isFunction(options.noncefn, messages.OPTIONS_NONCEFN_TYPE_INVALID);
            noncefn = options.noncefn;
          }
        }
        return secp256k1.sign(message, privateKey, noncefn, data);
      },
      verify: function(message, signature, publicKey) {
        assert.isBuffer(message, messages.MSG32_TYPE_INVALID);
        assert.isBufferLength(message, 32, messages.MSG32_LENGTH_INVALID);
        assert.isBuffer(signature, messages.ECDSA_SIGNATURE_TYPE_INVALID);
        assert.isBufferLength(signature, 64, messages.ECDSA_SIGNATURE_LENGTH_INVALID);
        assert.isBuffer(publicKey, messages.EC_PUBLIC_KEY_TYPE_INVALID);
        assert.isBufferLength2(publicKey, 33, 65, messages.EC_PUBLIC_KEY_LENGTH_INVALID);
        return secp256k1.verify(message, signature, publicKey);
      },
      recover: function(message, signature, recovery, compressed) {
        assert.isBuffer(message, messages.MSG32_TYPE_INVALID);
        assert.isBufferLength(message, 32, messages.MSG32_LENGTH_INVALID);
        assert.isBuffer(signature, messages.ECDSA_SIGNATURE_TYPE_INVALID);
        assert.isBufferLength(signature, 64, messages.ECDSA_SIGNATURE_LENGTH_INVALID);
        assert.isNumber(recovery, messages.RECOVERY_ID_TYPE_INVALID);
        assert.isNumberInInterval(recovery, -1, 4, messages.RECOVERY_ID_VALUE_INVALID);
        compressed = initCompressedValue(compressed, true);
        return secp256k1.recover(message, signature, recovery, compressed);
      },
      ecdh: function(publicKey, privateKey) {
        assert.isBuffer(publicKey, messages.EC_PUBLIC_KEY_TYPE_INVALID);
        assert.isBufferLength2(publicKey, 33, 65, messages.EC_PUBLIC_KEY_LENGTH_INVALID);
        assert.isBuffer(privateKey, messages.EC_PRIVATE_KEY_TYPE_INVALID);
        assert.isBufferLength(privateKey, 32, messages.EC_PRIVATE_KEY_LENGTH_INVALID);
        return secp256k1.ecdh(publicKey, privateKey);
      },
      ecdhUnsafe: function(publicKey, privateKey, compressed) {
        assert.isBuffer(publicKey, messages.EC_PUBLIC_KEY_TYPE_INVALID);
        assert.isBufferLength2(publicKey, 33, 65, messages.EC_PUBLIC_KEY_LENGTH_INVALID);
        assert.isBuffer(privateKey, messages.EC_PRIVATE_KEY_TYPE_INVALID);
        assert.isBufferLength(privateKey, 32, messages.EC_PRIVATE_KEY_LENGTH_INVALID);
        compressed = initCompressedValue(compressed, true);
        return secp256k1.ecdhUnsafe(publicKey, privateKey, compressed);
      }
    };
  };
  return module.exports;
});

$__System.registerDynamic("b", [], false, function() {
  return {
    "name": "elliptic",
    "version": "6.3.1",
    "description": "EC cryptography",
    "main": "lib/elliptic.js",
    "files": [
      "lib"
    ],
    "scripts": {
      "jscs": "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",
      "jshint": "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",
      "lint": "npm run jscs && npm run jshint",
      "unit": "istanbul test _mocha --reporter=spec test/index.js",
      "test": "npm run lint && npm run unit",
      "version": "grunt dist && git add dist/"
    },
    "repository": {
      "type": "git",
      "url": "git@github.com:indutny/elliptic"
    },
    "keywords": [
      "EC",
      "Elliptic",
      "curve",
      "Cryptography"
    ],
    "author": "Fedor Indutny <fedor@indutny.com>",
    "license": "MIT",
    "bugs": {
      "url": "https://github.com/indutny/elliptic/issues"
    },
    "homepage": "https://github.com/indutny/elliptic",
    "devDependencies": {
      "brfs": "^1.4.3",
      "coveralls": "^2.11.3",
      "grunt": "^0.4.5",
      "grunt-browserify": "^5.0.0",
      "grunt-contrib-connect": "^1.0.0",
      "grunt-contrib-copy": "^1.0.0",
      "grunt-contrib-uglify": "^1.0.1",
      "grunt-mocha-istanbul": "^3.0.1",
      "grunt-saucelabs": "^8.6.2",
      "istanbul": "^0.4.2",
      "jscs": "^2.9.0",
      "jshint": "^2.6.0",
      "mocha": "^2.1.0"
    },
    "dependencies": {
      "bn.js": "^4.4.0",
      "brorand": "^1.0.1",
      "hash.js": "^1.0.0",
      "inherits": "^2.0.1"
    }
  };
});

$__System.registerDynamic("c", ["d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var utils = exports;
  var BN = $__require('d');
  utils.assert = function assert(val, msg) {
    if (!val)
      throw new Error(msg || 'Assertion failed');
  };
  function toArray(msg, enc) {
    if (Array.isArray(msg))
      return msg.slice();
    if (!msg)
      return [];
    var res = [];
    if (typeof msg !== 'string') {
      for (var i = 0; i < msg.length; i++)
        res[i] = msg[i] | 0;
      return res;
    }
    if (!enc) {
      for (var i = 0; i < msg.length; i++) {
        var c = msg.charCodeAt(i);
        var hi = c >> 8;
        var lo = c & 0xff;
        if (hi)
          res.push(hi, lo);
        else
          res.push(lo);
      }
    } else if (enc === 'hex') {
      msg = msg.replace(/[^a-z0-9]+/ig, '');
      if (msg.length % 2 !== 0)
        msg = '0' + msg;
      for (var i = 0; i < msg.length; i += 2)
        res.push(parseInt(msg[i] + msg[i + 1], 16));
    }
    return res;
  }
  utils.toArray = toArray;
  function zero2(word) {
    if (word.length === 1)
      return '0' + word;
    else
      return word;
  }
  utils.zero2 = zero2;
  function toHex(msg) {
    var res = '';
    for (var i = 0; i < msg.length; i++)
      res += zero2(msg[i].toString(16));
    return res;
  }
  utils.toHex = toHex;
  utils.encode = function encode(arr, enc) {
    if (enc === 'hex')
      return toHex(arr);
    else
      return arr;
  };
  function getNAF(num, w) {
    var naf = [];
    var ws = 1 << (w + 1);
    var k = num.clone();
    while (k.cmpn(1) >= 0) {
      var z;
      if (k.isOdd()) {
        var mod = k.andln(ws - 1);
        if (mod > (ws >> 1) - 1)
          z = (ws >> 1) - mod;
        else
          z = mod;
        k.isubn(z);
      } else {
        z = 0;
      }
      naf.push(z);
      var shift = (k.cmpn(0) !== 0 && k.andln(ws - 1) === 0) ? (w + 1) : 1;
      for (var i = 1; i < shift; i++)
        naf.push(0);
      k.iushrn(shift);
    }
    return naf;
  }
  utils.getNAF = getNAF;
  function getJSF(k1, k2) {
    var jsf = [[], []];
    k1 = k1.clone();
    k2 = k2.clone();
    var d1 = 0;
    var d2 = 0;
    while (k1.cmpn(-d1) > 0 || k2.cmpn(-d2) > 0) {
      var m14 = (k1.andln(3) + d1) & 3;
      var m24 = (k2.andln(3) + d2) & 3;
      if (m14 === 3)
        m14 = -1;
      if (m24 === 3)
        m24 = -1;
      var u1;
      if ((m14 & 1) === 0) {
        u1 = 0;
      } else {
        var m8 = (k1.andln(7) + d1) & 7;
        if ((m8 === 3 || m8 === 5) && m24 === 2)
          u1 = -m14;
        else
          u1 = m14;
      }
      jsf[0].push(u1);
      var u2;
      if ((m24 & 1) === 0) {
        u2 = 0;
      } else {
        var m8 = (k2.andln(7) + d2) & 7;
        if ((m8 === 3 || m8 === 5) && m14 === 2)
          u2 = -m24;
        else
          u2 = m24;
      }
      jsf[1].push(u2);
      if (2 * d1 === u1 + 1)
        d1 = 1 - d1;
      if (2 * d2 === u2 + 1)
        d2 = 1 - d2;
      k1.iushrn(1);
      k2.iushrn(1);
    }
    return jsf;
  }
  utils.getJSF = getJSF;
  function cachedProperty(obj, name, computer) {
    var key = '_' + name;
    obj.prototype[name] = function cachedProperty() {
      return this[key] !== undefined ? this[key] : this[key] = computer.call(this);
    };
  }
  utils.cachedProperty = cachedProperty;
  function parseBytes(bytes) {
    return typeof bytes === 'string' ? utils.toArray(bytes, 'hex') : bytes;
  }
  utils.parseBytes = parseBytes;
  function intFromLE(bytes) {
    return new BN(bytes, 'hex', 'le');
  }
  utils.intFromLE = intFromLE;
  return module.exports;
});

$__System.registerDynamic("e", ["@empty"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var r;
  module.exports = function rand(len) {
    if (!r)
      r = new Rand(null);
    return r.generate(len);
  };
  function Rand(rand) {
    this.rand = rand;
  }
  module.exports.Rand = Rand;
  Rand.prototype.generate = function generate(len) {
    return this._rand(len);
  };
  if (typeof window === 'object') {
    if (window.crypto && window.crypto.getRandomValues) {
      Rand.prototype._rand = function _rand(n) {
        var arr = new Uint8Array(n);
        window.crypto.getRandomValues(arr);
        return arr;
      };
    } else if (window.msCrypto && window.msCrypto.getRandomValues) {
      Rand.prototype._rand = function _rand(n) {
        var arr = new Uint8Array(n);
        window.msCrypto.getRandomValues(arr);
        return arr;
      };
    } else {
      Rand.prototype._rand = function() {
        throw new Error('Not implemented yet');
      };
    }
  } else {
    try {
      var crypto = $__require('@empty');
      Rand.prototype._rand = function _rand(n) {
        return crypto.randomBytes(n);
      };
    } catch (e) {
      Rand.prototype._rand = function _rand(n) {
        var res = new Uint8Array(n);
        for (var i = 0; i < res.length; i++)
          res[i] = this.rand.getByte();
        return res;
      };
    }
  }
  return module.exports;
});

$__System.registerDynamic("f", ["11", "10"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var hash = $__require('11');
  var elliptic = $__require('10');
  var utils = elliptic.utils;
  var assert = utils.assert;
  function HmacDRBG(options) {
    if (!(this instanceof HmacDRBG))
      return new HmacDRBG(options);
    this.hash = options.hash;
    this.predResist = !!options.predResist;
    this.outLen = this.hash.outSize;
    this.minEntropy = options.minEntropy || this.hash.hmacStrength;
    this.reseed = null;
    this.reseedInterval = null;
    this.K = null;
    this.V = null;
    var entropy = utils.toArray(options.entropy, options.entropyEnc);
    var nonce = utils.toArray(options.nonce, options.nonceEnc);
    var pers = utils.toArray(options.pers, options.persEnc);
    assert(entropy.length >= (this.minEntropy / 8), 'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits');
    this._init(entropy, nonce, pers);
  }
  module.exports = HmacDRBG;
  HmacDRBG.prototype._init = function init(entropy, nonce, pers) {
    var seed = entropy.concat(nonce).concat(pers);
    this.K = new Array(this.outLen / 8);
    this.V = new Array(this.outLen / 8);
    for (var i = 0; i < this.V.length; i++) {
      this.K[i] = 0x00;
      this.V[i] = 0x01;
    }
    this._update(seed);
    this.reseed = 1;
    this.reseedInterval = 0x1000000000000;
  };
  HmacDRBG.prototype._hmac = function hmac() {
    return new hash.hmac(this.hash, this.K);
  };
  HmacDRBG.prototype._update = function update(seed) {
    var kmac = this._hmac().update(this.V).update([0x00]);
    if (seed)
      kmac = kmac.update(seed);
    this.K = kmac.digest();
    this.V = this._hmac().update(this.V).digest();
    if (!seed)
      return;
    this.K = this._hmac().update(this.V).update([0x01]).update(seed).digest();
    this.V = this._hmac().update(this.V).digest();
  };
  HmacDRBG.prototype.reseed = function reseed(entropy, entropyEnc, add, addEnc) {
    if (typeof entropyEnc !== 'string') {
      addEnc = add;
      add = entropyEnc;
      entropyEnc = null;
    }
    entropy = utils.toBuffer(entropy, entropyEnc);
    add = utils.toBuffer(add, addEnc);
    assert(entropy.length >= (this.minEntropy / 8), 'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits');
    this._update(entropy.concat(add || []));
    this.reseed = 1;
  };
  HmacDRBG.prototype.generate = function generate(len, enc, add, addEnc) {
    if (this.reseed > this.reseedInterval)
      throw new Error('Reseed is required');
    if (typeof enc !== 'string') {
      addEnc = add;
      add = enc;
      enc = null;
    }
    if (add) {
      add = utils.toArray(add, addEnc);
      this._update(add);
    }
    var temp = [];
    while (temp.length < len) {
      this.V = this._hmac().update(this.V).digest();
      temp = temp.concat(this.V);
    }
    var res = temp.slice(0, len);
    this._update(add);
    this.reseed++;
    return utils.encode(res, enc);
  };
  return module.exports;
});

$__System.registerDynamic("12", ["d", "10"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var BN = $__require('d');
  var elliptic = $__require('10');
  var utils = elliptic.utils;
  var getNAF = utils.getNAF;
  var getJSF = utils.getJSF;
  var assert = utils.assert;
  function BaseCurve(type, conf) {
    this.type = type;
    this.p = new BN(conf.p, 16);
    this.red = conf.prime ? BN.red(conf.prime) : BN.mont(this.p);
    this.zero = new BN(0).toRed(this.red);
    this.one = new BN(1).toRed(this.red);
    this.two = new BN(2).toRed(this.red);
    this.n = conf.n && new BN(conf.n, 16);
    this.g = conf.g && this.pointFromJSON(conf.g, conf.gRed);
    this._wnafT1 = new Array(4);
    this._wnafT2 = new Array(4);
    this._wnafT3 = new Array(4);
    this._wnafT4 = new Array(4);
    var adjustCount = this.n && this.p.div(this.n);
    if (!adjustCount || adjustCount.cmpn(100) > 0) {
      this.redN = null;
    } else {
      this._maxwellTrick = true;
      this.redN = this.n.toRed(this.red);
    }
  }
  module.exports = BaseCurve;
  BaseCurve.prototype.point = function point() {
    throw new Error('Not implemented');
  };
  BaseCurve.prototype.validate = function validate() {
    throw new Error('Not implemented');
  };
  BaseCurve.prototype._fixedNafMul = function _fixedNafMul(p, k) {
    assert(p.precomputed);
    var doubles = p._getDoubles();
    var naf = getNAF(k, 1);
    var I = (1 << (doubles.step + 1)) - (doubles.step % 2 === 0 ? 2 : 1);
    I /= 3;
    var repr = [];
    for (var j = 0; j < naf.length; j += doubles.step) {
      var nafW = 0;
      for (var k = j + doubles.step - 1; k >= j; k--)
        nafW = (nafW << 1) + naf[k];
      repr.push(nafW);
    }
    var a = this.jpoint(null, null, null);
    var b = this.jpoint(null, null, null);
    for (var i = I; i > 0; i--) {
      for (var j = 0; j < repr.length; j++) {
        var nafW = repr[j];
        if (nafW === i)
          b = b.mixedAdd(doubles.points[j]);
        else if (nafW === -i)
          b = b.mixedAdd(doubles.points[j].neg());
      }
      a = a.add(b);
    }
    return a.toP();
  };
  BaseCurve.prototype._wnafMul = function _wnafMul(p, k) {
    var w = 4;
    var nafPoints = p._getNAFPoints(w);
    w = nafPoints.wnd;
    var wnd = nafPoints.points;
    var naf = getNAF(k, w);
    var acc = this.jpoint(null, null, null);
    for (var i = naf.length - 1; i >= 0; i--) {
      for (var k = 0; i >= 0 && naf[i] === 0; i--)
        k++;
      if (i >= 0)
        k++;
      acc = acc.dblp(k);
      if (i < 0)
        break;
      var z = naf[i];
      assert(z !== 0);
      if (p.type === 'affine') {
        if (z > 0)
          acc = acc.mixedAdd(wnd[(z - 1) >> 1]);
        else
          acc = acc.mixedAdd(wnd[(-z - 1) >> 1].neg());
      } else {
        if (z > 0)
          acc = acc.add(wnd[(z - 1) >> 1]);
        else
          acc = acc.add(wnd[(-z - 1) >> 1].neg());
      }
    }
    return p.type === 'affine' ? acc.toP() : acc;
  };
  BaseCurve.prototype._wnafMulAdd = function _wnafMulAdd(defW, points, coeffs, len, jacobianResult) {
    var wndWidth = this._wnafT1;
    var wnd = this._wnafT2;
    var naf = this._wnafT3;
    var max = 0;
    for (var i = 0; i < len; i++) {
      var p = points[i];
      var nafPoints = p._getNAFPoints(defW);
      wndWidth[i] = nafPoints.wnd;
      wnd[i] = nafPoints.points;
    }
    for (var i = len - 1; i >= 1; i -= 2) {
      var a = i - 1;
      var b = i;
      if (wndWidth[a] !== 1 || wndWidth[b] !== 1) {
        naf[a] = getNAF(coeffs[a], wndWidth[a]);
        naf[b] = getNAF(coeffs[b], wndWidth[b]);
        max = Math.max(naf[a].length, max);
        max = Math.max(naf[b].length, max);
        continue;
      }
      var comb = [points[a], null, null, points[b]];
      if (points[a].y.cmp(points[b].y) === 0) {
        comb[1] = points[a].add(points[b]);
        comb[2] = points[a].toJ().mixedAdd(points[b].neg());
      } else if (points[a].y.cmp(points[b].y.redNeg()) === 0) {
        comb[1] = points[a].toJ().mixedAdd(points[b]);
        comb[2] = points[a].add(points[b].neg());
      } else {
        comb[1] = points[a].toJ().mixedAdd(points[b]);
        comb[2] = points[a].toJ().mixedAdd(points[b].neg());
      }
      var index = [-3, -1, -5, -7, 0, 7, 5, 1, 3];
      var jsf = getJSF(coeffs[a], coeffs[b]);
      max = Math.max(jsf[0].length, max);
      naf[a] = new Array(max);
      naf[b] = new Array(max);
      for (var j = 0; j < max; j++) {
        var ja = jsf[0][j] | 0;
        var jb = jsf[1][j] | 0;
        naf[a][j] = index[(ja + 1) * 3 + (jb + 1)];
        naf[b][j] = 0;
        wnd[a] = comb;
      }
    }
    var acc = this.jpoint(null, null, null);
    var tmp = this._wnafT4;
    for (var i = max; i >= 0; i--) {
      var k = 0;
      while (i >= 0) {
        var zero = true;
        for (var j = 0; j < len; j++) {
          tmp[j] = naf[j][i] | 0;
          if (tmp[j] !== 0)
            zero = false;
        }
        if (!zero)
          break;
        k++;
        i--;
      }
      if (i >= 0)
        k++;
      acc = acc.dblp(k);
      if (i < 0)
        break;
      for (var j = 0; j < len; j++) {
        var z = tmp[j];
        var p;
        if (z === 0)
          continue;
        else if (z > 0)
          p = wnd[j][(z - 1) >> 1];
        else if (z < 0)
          p = wnd[j][(-z - 1) >> 1].neg();
        if (p.type === 'affine')
          acc = acc.mixedAdd(p);
        else
          acc = acc.add(p);
      }
    }
    for (var i = 0; i < len; i++)
      wnd[i] = null;
    if (jacobianResult)
      return acc;
    else
      return acc.toP();
  };
  function BasePoint(curve, type) {
    this.curve = curve;
    this.type = type;
    this.precomputed = null;
  }
  BaseCurve.BasePoint = BasePoint;
  BasePoint.prototype.eq = function eq() {
    throw new Error('Not implemented');
  };
  BasePoint.prototype.validate = function validate() {
    return this.curve.validate(this);
  };
  BaseCurve.prototype.decodePoint = function decodePoint(bytes, enc) {
    bytes = utils.toArray(bytes, enc);
    var len = this.p.byteLength();
    if ((bytes[0] === 0x04 || bytes[0] === 0x06 || bytes[0] === 0x07) && bytes.length - 1 === 2 * len) {
      if (bytes[0] === 0x06)
        assert(bytes[bytes.length - 1] % 2 === 0);
      else if (bytes[0] === 0x07)
        assert(bytes[bytes.length - 1] % 2 === 1);
      var res = this.point(bytes.slice(1, 1 + len), bytes.slice(1 + len, 1 + 2 * len));
      return res;
    } else if ((bytes[0] === 0x02 || bytes[0] === 0x03) && bytes.length - 1 === len) {
      return this.pointFromX(bytes.slice(1, 1 + len), bytes[0] === 0x03);
    }
    throw new Error('Unknown point format');
  };
  BasePoint.prototype.encodeCompressed = function encodeCompressed(enc) {
    return this.encode(enc, true);
  };
  BasePoint.prototype._encode = function _encode(compact) {
    var len = this.curve.p.byteLength();
    var x = this.getX().toArray('be', len);
    if (compact)
      return [this.getY().isEven() ? 0x02 : 0x03].concat(x);
    return [0x04].concat(x, this.getY().toArray('be', len));
  };
  BasePoint.prototype.encode = function encode(enc, compact) {
    return utils.encode(this._encode(compact), enc);
  };
  BasePoint.prototype.precompute = function precompute(power) {
    if (this.precomputed)
      return this;
    var precomputed = {
      doubles: null,
      naf: null,
      beta: null
    };
    precomputed.naf = this._getNAFPoints(8);
    precomputed.doubles = this._getDoubles(4, power);
    precomputed.beta = this._getBeta();
    this.precomputed = precomputed;
    return this;
  };
  BasePoint.prototype._hasDoubles = function _hasDoubles(k) {
    if (!this.precomputed)
      return false;
    var doubles = this.precomputed.doubles;
    if (!doubles)
      return false;
    return doubles.points.length >= Math.ceil((k.bitLength() + 1) / doubles.step);
  };
  BasePoint.prototype._getDoubles = function _getDoubles(step, power) {
    if (this.precomputed && this.precomputed.doubles)
      return this.precomputed.doubles;
    var doubles = [this];
    var acc = this;
    for (var i = 0; i < power; i += step) {
      for (var j = 0; j < step; j++)
        acc = acc.dbl();
      doubles.push(acc);
    }
    return {
      step: step,
      points: doubles
    };
  };
  BasePoint.prototype._getNAFPoints = function _getNAFPoints(wnd) {
    if (this.precomputed && this.precomputed.naf)
      return this.precomputed.naf;
    var res = [this];
    var max = (1 << wnd) - 1;
    var dbl = max === 1 ? null : this.dbl();
    for (var i = 1; i < max; i++)
      res[i] = res[i - 1].add(dbl);
    return {
      wnd: wnd,
      points: res
    };
  };
  BasePoint.prototype._getBeta = function _getBeta() {
    return null;
  };
  BasePoint.prototype.dblp = function dblp(k) {
    var r = this;
    for (var i = 0; i < k; i++)
      r = r.dbl();
    return r;
  };
  return module.exports;
});

$__System.registerDynamic("13", ["14", "10", "d", "15"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var curve = $__require('14');
  var elliptic = $__require('10');
  var BN = $__require('d');
  var inherits = $__require('15');
  var Base = curve.base;
  var assert = elliptic.utils.assert;
  function ShortCurve(conf) {
    Base.call(this, 'short', conf);
    this.a = new BN(conf.a, 16).toRed(this.red);
    this.b = new BN(conf.b, 16).toRed(this.red);
    this.tinv = this.two.redInvm();
    this.zeroA = this.a.fromRed().cmpn(0) === 0;
    this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0;
    this.endo = this._getEndomorphism(conf);
    this._endoWnafT1 = new Array(4);
    this._endoWnafT2 = new Array(4);
  }
  inherits(ShortCurve, Base);
  module.exports = ShortCurve;
  ShortCurve.prototype._getEndomorphism = function _getEndomorphism(conf) {
    if (!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)
      return;
    var beta;
    var lambda;
    if (conf.beta) {
      beta = new BN(conf.beta, 16).toRed(this.red);
    } else {
      var betas = this._getEndoRoots(this.p);
      beta = betas[0].cmp(betas[1]) < 0 ? betas[0] : betas[1];
      beta = beta.toRed(this.red);
    }
    if (conf.lambda) {
      lambda = new BN(conf.lambda, 16);
    } else {
      var lambdas = this._getEndoRoots(this.n);
      if (this.g.mul(lambdas[0]).x.cmp(this.g.x.redMul(beta)) === 0) {
        lambda = lambdas[0];
      } else {
        lambda = lambdas[1];
        assert(this.g.mul(lambda).x.cmp(this.g.x.redMul(beta)) === 0);
      }
    }
    var basis;
    if (conf.basis) {
      basis = conf.basis.map(function(vec) {
        return {
          a: new BN(vec.a, 16),
          b: new BN(vec.b, 16)
        };
      });
    } else {
      basis = this._getEndoBasis(lambda);
    }
    return {
      beta: beta,
      lambda: lambda,
      basis: basis
    };
  };
  ShortCurve.prototype._getEndoRoots = function _getEndoRoots(num) {
    var red = num === this.p ? this.red : BN.mont(num);
    var tinv = new BN(2).toRed(red).redInvm();
    var ntinv = tinv.redNeg();
    var s = new BN(3).toRed(red).redNeg().redSqrt().redMul(tinv);
    var l1 = ntinv.redAdd(s).fromRed();
    var l2 = ntinv.redSub(s).fromRed();
    return [l1, l2];
  };
  ShortCurve.prototype._getEndoBasis = function _getEndoBasis(lambda) {
    var aprxSqrt = this.n.ushrn(Math.floor(this.n.bitLength() / 2));
    var u = lambda;
    var v = this.n.clone();
    var x1 = new BN(1);
    var y1 = new BN(0);
    var x2 = new BN(0);
    var y2 = new BN(1);
    var a0;
    var b0;
    var a1;
    var b1;
    var a2;
    var b2;
    var prevR;
    var i = 0;
    var r;
    var x;
    while (u.cmpn(0) !== 0) {
      var q = v.div(u);
      r = v.sub(q.mul(u));
      x = x2.sub(q.mul(x1));
      var y = y2.sub(q.mul(y1));
      if (!a1 && r.cmp(aprxSqrt) < 0) {
        a0 = prevR.neg();
        b0 = x1;
        a1 = r.neg();
        b1 = x;
      } else if (a1 && ++i === 2) {
        break;
      }
      prevR = r;
      v = u;
      u = r;
      x2 = x1;
      x1 = x;
      y2 = y1;
      y1 = y;
    }
    a2 = r.neg();
    b2 = x;
    var len1 = a1.sqr().add(b1.sqr());
    var len2 = a2.sqr().add(b2.sqr());
    if (len2.cmp(len1) >= 0) {
      a2 = a0;
      b2 = b0;
    }
    if (a1.negative) {
      a1 = a1.neg();
      b1 = b1.neg();
    }
    if (a2.negative) {
      a2 = a2.neg();
      b2 = b2.neg();
    }
    return [{
      a: a1,
      b: b1
    }, {
      a: a2,
      b: b2
    }];
  };
  ShortCurve.prototype._endoSplit = function _endoSplit(k) {
    var basis = this.endo.basis;
    var v1 = basis[0];
    var v2 = basis[1];
    var c1 = v2.b.mul(k).divRound(this.n);
    var c2 = v1.b.neg().mul(k).divRound(this.n);
    var p1 = c1.mul(v1.a);
    var p2 = c2.mul(v2.a);
    var q1 = c1.mul(v1.b);
    var q2 = c2.mul(v2.b);
    var k1 = k.sub(p1).sub(p2);
    var k2 = q1.add(q2).neg();
    return {
      k1: k1,
      k2: k2
    };
  };
  ShortCurve.prototype.pointFromX = function pointFromX(x, odd) {
    x = new BN(x, 16);
    if (!x.red)
      x = x.toRed(this.red);
    var y2 = x.redSqr().redMul(x).redIAdd(x.redMul(this.a)).redIAdd(this.b);
    var y = y2.redSqrt();
    if (y.redSqr().redSub(y2).cmp(this.zero) !== 0)
      throw new Error('invalid point');
    var isOdd = y.fromRed().isOdd();
    if (odd && !isOdd || !odd && isOdd)
      y = y.redNeg();
    return this.point(x, y);
  };
  ShortCurve.prototype.validate = function validate(point) {
    if (point.inf)
      return true;
    var x = point.x;
    var y = point.y;
    var ax = this.a.redMul(x);
    var rhs = x.redSqr().redMul(x).redIAdd(ax).redIAdd(this.b);
    return y.redSqr().redISub(rhs).cmpn(0) === 0;
  };
  ShortCurve.prototype._endoWnafMulAdd = function _endoWnafMulAdd(points, coeffs, jacobianResult) {
    var npoints = this._endoWnafT1;
    var ncoeffs = this._endoWnafT2;
    for (var i = 0; i < points.length; i++) {
      var split = this._endoSplit(coeffs[i]);
      var p = points[i];
      var beta = p._getBeta();
      if (split.k1.negative) {
        split.k1.ineg();
        p = p.neg(true);
      }
      if (split.k2.negative) {
        split.k2.ineg();
        beta = beta.neg(true);
      }
      npoints[i * 2] = p;
      npoints[i * 2 + 1] = beta;
      ncoeffs[i * 2] = split.k1;
      ncoeffs[i * 2 + 1] = split.k2;
    }
    var res = this._wnafMulAdd(1, npoints, ncoeffs, i * 2, jacobianResult);
    for (var j = 0; j < i * 2; j++) {
      npoints[j] = null;
      ncoeffs[j] = null;
    }
    return res;
  };
  function Point(curve, x, y, isRed) {
    Base.BasePoint.call(this, curve, 'affine');
    if (x === null && y === null) {
      this.x = null;
      this.y = null;
      this.inf = true;
    } else {
      this.x = new BN(x, 16);
      this.y = new BN(y, 16);
      if (isRed) {
        this.x.forceRed(this.curve.red);
        this.y.forceRed(this.curve.red);
      }
      if (!this.x.red)
        this.x = this.x.toRed(this.curve.red);
      if (!this.y.red)
        this.y = this.y.toRed(this.curve.red);
      this.inf = false;
    }
  }
  inherits(Point, Base.BasePoint);
  ShortCurve.prototype.point = function point(x, y, isRed) {
    return new Point(this, x, y, isRed);
  };
  ShortCurve.prototype.pointFromJSON = function pointFromJSON(obj, red) {
    return Point.fromJSON(this, obj, red);
  };
  Point.prototype._getBeta = function _getBeta() {
    if (!this.curve.endo)
      return;
    var pre = this.precomputed;
    if (pre && pre.beta)
      return pre.beta;
    var beta = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
    if (pre) {
      var curve = this.curve;
      var endoMul = function(p) {
        return curve.point(p.x.redMul(curve.endo.beta), p.y);
      };
      pre.beta = beta;
      beta.precomputed = {
        beta: null,
        naf: pre.naf && {
          wnd: pre.naf.wnd,
          points: pre.naf.points.map(endoMul)
        },
        doubles: pre.doubles && {
          step: pre.doubles.step,
          points: pre.doubles.points.map(endoMul)
        }
      };
    }
    return beta;
  };
  Point.prototype.toJSON = function toJSON() {
    if (!this.precomputed)
      return [this.x, this.y];
    return [this.x, this.y, this.precomputed && {
      doubles: this.precomputed.doubles && {
        step: this.precomputed.doubles.step,
        points: this.precomputed.doubles.points.slice(1)
      },
      naf: this.precomputed.naf && {
        wnd: this.precomputed.naf.wnd,
        points: this.precomputed.naf.points.slice(1)
      }
    }];
  };
  Point.fromJSON = function fromJSON(curve, obj, red) {
    if (typeof obj === 'string')
      obj = JSON.parse(obj);
    var res = curve.point(obj[0], obj[1], red);
    if (!obj[2])
      return res;
    function obj2point(obj) {
      return curve.point(obj[0], obj[1], red);
    }
    var pre = obj[2];
    res.precomputed = {
      beta: null,
      doubles: pre.doubles && {
        step: pre.doubles.step,
        points: [res].concat(pre.doubles.points.map(obj2point))
      },
      naf: pre.naf && {
        wnd: pre.naf.wnd,
        points: [res].concat(pre.naf.points.map(obj2point))
      }
    };
    return res;
  };
  Point.prototype.inspect = function inspect() {
    if (this.isInfinity())
      return '<EC Point Infinity>';
    return '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' y: ' + this.y.fromRed().toString(16, 2) + '>';
  };
  Point.prototype.isInfinity = function isInfinity() {
    return this.inf;
  };
  Point.prototype.add = function add(p) {
    if (this.inf)
      return p;
    if (p.inf)
      return this;
    if (this.eq(p))
      return this.dbl();
    if (this.neg().eq(p))
      return this.curve.point(null, null);
    if (this.x.cmp(p.x) === 0)
      return this.curve.point(null, null);
    var c = this.y.redSub(p.y);
    if (c.cmpn(0) !== 0)
      c = c.redMul(this.x.redSub(p.x).redInvm());
    var nx = c.redSqr().redISub(this.x).redISub(p.x);
    var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
    return this.curve.point(nx, ny);
  };
  Point.prototype.dbl = function dbl() {
    if (this.inf)
      return this;
    var ys1 = this.y.redAdd(this.y);
    if (ys1.cmpn(0) === 0)
      return this.curve.point(null, null);
    var a = this.curve.a;
    var x2 = this.x.redSqr();
    var dyinv = ys1.redInvm();
    var c = x2.redAdd(x2).redIAdd(x2).redIAdd(a).redMul(dyinv);
    var nx = c.redSqr().redISub(this.x.redAdd(this.x));
    var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
    return this.curve.point(nx, ny);
  };
  Point.prototype.getX = function getX() {
    return this.x.fromRed();
  };
  Point.prototype.getY = function getY() {
    return this.y.fromRed();
  };
  Point.prototype.mul = function mul(k) {
    k = new BN(k, 16);
    if (this._hasDoubles(k))
      return this.curve._fixedNafMul(this, k);
    else if (this.curve.endo)
      return this.curve._endoWnafMulAdd([this], [k]);
    else
      return this.curve._wnafMul(this, k);
  };
  Point.prototype.mulAdd = function mulAdd(k1, p2, k2) {
    var points = [this, p2];
    var coeffs = [k1, k2];
    if (this.curve.endo)
      return this.curve._endoWnafMulAdd(points, coeffs);
    else
      return this.curve._wnafMulAdd(1, points, coeffs, 2);
  };
  Point.prototype.jmulAdd = function jmulAdd(k1, p2, k2) {
    var points = [this, p2];
    var coeffs = [k1, k2];
    if (this.curve.endo)
      return this.curve._endoWnafMulAdd(points, coeffs, true);
    else
      return this.curve._wnafMulAdd(1, points, coeffs, 2, true);
  };
  Point.prototype.eq = function eq(p) {
    return this === p || this.inf === p.inf && (this.inf || this.x.cmp(p.x) === 0 && this.y.cmp(p.y) === 0);
  };
  Point.prototype.neg = function neg(_precompute) {
    if (this.inf)
      return this;
    var res = this.curve.point(this.x, this.y.redNeg());
    if (_precompute && this.precomputed) {
      var pre = this.precomputed;
      var negate = function(p) {
        return p.neg();
      };
      res.precomputed = {
        naf: pre.naf && {
          wnd: pre.naf.wnd,
          points: pre.naf.points.map(negate)
        },
        doubles: pre.doubles && {
          step: pre.doubles.step,
          points: pre.doubles.points.map(negate)
        }
      };
    }
    return res;
  };
  Point.prototype.toJ = function toJ() {
    if (this.inf)
      return this.curve.jpoint(null, null, null);
    var res = this.curve.jpoint(this.x, this.y, this.curve.one);
    return res;
  };
  function JPoint(curve, x, y, z) {
    Base.BasePoint.call(this, curve, 'jacobian');
    if (x === null && y === null && z === null) {
      this.x = this.curve.one;
      this.y = this.curve.one;
      this.z = new BN(0);
    } else {
      this.x = new BN(x, 16);
      this.y = new BN(y, 16);
      this.z = new BN(z, 16);
    }
    if (!this.x.red)
      this.x = this.x.toRed(this.curve.red);
    if (!this.y.red)
      this.y = this.y.toRed(this.curve.red);
    if (!this.z.red)
      this.z = this.z.toRed(this.curve.red);
    this.zOne = this.z === this.curve.one;
  }
  inherits(JPoint, Base.BasePoint);
  ShortCurve.prototype.jpoint = function jpoint(x, y, z) {
    return new JPoint(this, x, y, z);
  };
  JPoint.prototype.toP = function toP() {
    if (this.isInfinity())
      return this.curve.point(null, null);
    var zinv = this.z.redInvm();
    var zinv2 = zinv.redSqr();
    var ax = this.x.redMul(zinv2);
    var ay = this.y.redMul(zinv2).redMul(zinv);
    return this.curve.point(ax, ay);
  };
  JPoint.prototype.neg = function neg() {
    return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
  };
  JPoint.prototype.add = function add(p) {
    if (this.isInfinity())
      return p;
    if (p.isInfinity())
      return this;
    var pz2 = p.z.redSqr();
    var z2 = this.z.redSqr();
    var u1 = this.x.redMul(pz2);
    var u2 = p.x.redMul(z2);
    var s1 = this.y.redMul(pz2.redMul(p.z));
    var s2 = p.y.redMul(z2.redMul(this.z));
    var h = u1.redSub(u2);
    var r = s1.redSub(s2);
    if (h.cmpn(0) === 0) {
      if (r.cmpn(0) !== 0)
        return this.curve.jpoint(null, null, null);
      else
        return this.dbl();
    }
    var h2 = h.redSqr();
    var h3 = h2.redMul(h);
    var v = u1.redMul(h2);
    var nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v);
    var ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));
    var nz = this.z.redMul(p.z).redMul(h);
    return this.curve.jpoint(nx, ny, nz);
  };
  JPoint.prototype.mixedAdd = function mixedAdd(p) {
    if (this.isInfinity())
      return p.toJ();
    if (p.isInfinity())
      return this;
    var z2 = this.z.redSqr();
    var u1 = this.x;
    var u2 = p.x.redMul(z2);
    var s1 = this.y;
    var s2 = p.y.redMul(z2).redMul(this.z);
    var h = u1.redSub(u2);
    var r = s1.redSub(s2);
    if (h.cmpn(0) === 0) {
      if (r.cmpn(0) !== 0)
        return this.curve.jpoint(null, null, null);
      else
        return this.dbl();
    }
    var h2 = h.redSqr();
    var h3 = h2.redMul(h);
    var v = u1.redMul(h2);
    var nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v);
    var ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));
    var nz = this.z.redMul(h);
    return this.curve.jpoint(nx, ny, nz);
  };
  JPoint.prototype.dblp = function dblp(pow) {
    if (pow === 0)
      return this;
    if (this.isInfinity())
      return this;
    if (!pow)
      return this.dbl();
    if (this.curve.zeroA || this.curve.threeA) {
      var r = this;
      for (var i = 0; i < pow; i++)
        r = r.dbl();
      return r;
    }
    var a = this.curve.a;
    var tinv = this.curve.tinv;
    var jx = this.x;
    var jy = this.y;
    var jz = this.z;
    var jz4 = jz.redSqr().redSqr();
    var jyd = jy.redAdd(jy);
    for (var i = 0; i < pow; i++) {
      var jx2 = jx.redSqr();
      var jyd2 = jyd.redSqr();
      var jyd4 = jyd2.redSqr();
      var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));
      var t1 = jx.redMul(jyd2);
      var nx = c.redSqr().redISub(t1.redAdd(t1));
      var t2 = t1.redISub(nx);
      var dny = c.redMul(t2);
      dny = dny.redIAdd(dny).redISub(jyd4);
      var nz = jyd.redMul(jz);
      if (i + 1 < pow)
        jz4 = jz4.redMul(jyd4);
      jx = nx;
      jz = nz;
      jyd = dny;
    }
    return this.curve.jpoint(jx, jyd.redMul(tinv), jz);
  };
  JPoint.prototype.dbl = function dbl() {
    if (this.isInfinity())
      return this;
    if (this.curve.zeroA)
      return this._zeroDbl();
    else if (this.curve.threeA)
      return this._threeDbl();
    else
      return this._dbl();
  };
  JPoint.prototype._zeroDbl = function _zeroDbl() {
    var nx;
    var ny;
    var nz;
    if (this.zOne) {
      var xx = this.x.redSqr();
      var yy = this.y.redSqr();
      var yyyy = yy.redSqr();
      var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
      s = s.redIAdd(s);
      var m = xx.redAdd(xx).redIAdd(xx);
      var t = m.redSqr().redISub(s).redISub(s);
      var yyyy8 = yyyy.redIAdd(yyyy);
      yyyy8 = yyyy8.redIAdd(yyyy8);
      yyyy8 = yyyy8.redIAdd(yyyy8);
      nx = t;
      ny = m.redMul(s.redISub(t)).redISub(yyyy8);
      nz = this.y.redAdd(this.y);
    } else {
      var a = this.x.redSqr();
      var b = this.y.redSqr();
      var c = b.redSqr();
      var d = this.x.redAdd(b).redSqr().redISub(a).redISub(c);
      d = d.redIAdd(d);
      var e = a.redAdd(a).redIAdd(a);
      var f = e.redSqr();
      var c8 = c.redIAdd(c);
      c8 = c8.redIAdd(c8);
      c8 = c8.redIAdd(c8);
      nx = f.redISub(d).redISub(d);
      ny = e.redMul(d.redISub(nx)).redISub(c8);
      nz = this.y.redMul(this.z);
      nz = nz.redIAdd(nz);
    }
    return this.curve.jpoint(nx, ny, nz);
  };
  JPoint.prototype._threeDbl = function _threeDbl() {
    var nx;
    var ny;
    var nz;
    if (this.zOne) {
      var xx = this.x.redSqr();
      var yy = this.y.redSqr();
      var yyyy = yy.redSqr();
      var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
      s = s.redIAdd(s);
      var m = xx.redAdd(xx).redIAdd(xx).redIAdd(this.curve.a);
      var t = m.redSqr().redISub(s).redISub(s);
      nx = t;
      var yyyy8 = yyyy.redIAdd(yyyy);
      yyyy8 = yyyy8.redIAdd(yyyy8);
      yyyy8 = yyyy8.redIAdd(yyyy8);
      ny = m.redMul(s.redISub(t)).redISub(yyyy8);
      nz = this.y.redAdd(this.y);
    } else {
      var delta = this.z.redSqr();
      var gamma = this.y.redSqr();
      var beta = this.x.redMul(gamma);
      var alpha = this.x.redSub(delta).redMul(this.x.redAdd(delta));
      alpha = alpha.redAdd(alpha).redIAdd(alpha);
      var beta4 = beta.redIAdd(beta);
      beta4 = beta4.redIAdd(beta4);
      var beta8 = beta4.redAdd(beta4);
      nx = alpha.redSqr().redISub(beta8);
      nz = this.y.redAdd(this.z).redSqr().redISub(gamma).redISub(delta);
      var ggamma8 = gamma.redSqr();
      ggamma8 = ggamma8.redIAdd(ggamma8);
      ggamma8 = ggamma8.redIAdd(ggamma8);
      ggamma8 = ggamma8.redIAdd(ggamma8);
      ny = alpha.redMul(beta4.redISub(nx)).redISub(ggamma8);
    }
    return this.curve.jpoint(nx, ny, nz);
  };
  JPoint.prototype._dbl = function _dbl() {
    var a = this.curve.a;
    var jx = this.x;
    var jy = this.y;
    var jz = this.z;
    var jz4 = jz.redSqr().redSqr();
    var jx2 = jx.redSqr();
    var jy2 = jy.redSqr();
    var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));
    var jxd4 = jx.redAdd(jx);
    jxd4 = jxd4.redIAdd(jxd4);
    var t1 = jxd4.redMul(jy2);
    var nx = c.redSqr().redISub(t1.redAdd(t1));
    var t2 = t1.redISub(nx);
    var jyd8 = jy2.redSqr();
    jyd8 = jyd8.redIAdd(jyd8);
    jyd8 = jyd8.redIAdd(jyd8);
    jyd8 = jyd8.redIAdd(jyd8);
    var ny = c.redMul(t2).redISub(jyd8);
    var nz = jy.redAdd(jy).redMul(jz);
    return this.curve.jpoint(nx, ny, nz);
  };
  JPoint.prototype.trpl = function trpl() {
    if (!this.curve.zeroA)
      return this.dbl().add(this);
    var xx = this.x.redSqr();
    var yy = this.y.redSqr();
    var zz = this.z.redSqr();
    var yyyy = yy.redSqr();
    var m = xx.redAdd(xx).redIAdd(xx);
    var mm = m.redSqr();
    var e = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
    e = e.redIAdd(e);
    e = e.redAdd(e).redIAdd(e);
    e = e.redISub(mm);
    var ee = e.redSqr();
    var t = yyyy.redIAdd(yyyy);
    t = t.redIAdd(t);
    t = t.redIAdd(t);
    t = t.redIAdd(t);
    var u = m.redIAdd(e).redSqr().redISub(mm).redISub(ee).redISub(t);
    var yyu4 = yy.redMul(u);
    yyu4 = yyu4.redIAdd(yyu4);
    yyu4 = yyu4.redIAdd(yyu4);
    var nx = this.x.redMul(ee).redISub(yyu4);
    nx = nx.redIAdd(nx);
    nx = nx.redIAdd(nx);
    var ny = this.y.redMul(u.redMul(t.redISub(u)).redISub(e.redMul(ee)));
    ny = ny.redIAdd(ny);
    ny = ny.redIAdd(ny);
    ny = ny.redIAdd(ny);
    var nz = this.z.redAdd(e).redSqr().redISub(zz).redISub(ee);
    return this.curve.jpoint(nx, ny, nz);
  };
  JPoint.prototype.mul = function mul(k, kbase) {
    k = new BN(k, kbase);
    return this.curve._wnafMul(this, k);
  };
  JPoint.prototype.eq = function eq(p) {
    if (p.type === 'affine')
      return this.eq(p.toJ());
    if (this === p)
      return true;
    var z2 = this.z.redSqr();
    var pz2 = p.z.redSqr();
    if (this.x.redMul(pz2).redISub(p.x.redMul(z2)).cmpn(0) !== 0)
      return false;
    var z3 = z2.redMul(this.z);
    var pz3 = pz2.redMul(p.z);
    return this.y.redMul(pz3).redISub(p.y.redMul(z3)).cmpn(0) === 0;
  };
  JPoint.prototype.eqXToP = function eqXToP(x) {
    var zs = this.z.redSqr();
    var rx = x.toRed(this.curve.red).redMul(zs);
    if (this.x.cmp(rx) === 0)
      return true;
    var xc = x.clone();
    var t = this.curve.redN.redMul(zs);
    for (; ; ) {
      xc.iadd(this.curve.n);
      if (xc.cmp(this.curve.p) >= 0)
        return false;
      rx.redIAdd(t);
      if (this.x.cmp(rx) === 0)
        return true;
    }
    return false;
  };
  JPoint.prototype.inspect = function inspect() {
    if (this.isInfinity())
      return '<EC JPoint Infinity>';
    return '<EC JPoint x: ' + this.x.toString(16, 2) + ' y: ' + this.y.toString(16, 2) + ' z: ' + this.z.toString(16, 2) + '>';
  };
  JPoint.prototype.isInfinity = function isInfinity() {
    return this.z.cmpn(0) === 0;
  };
  return module.exports;
});

$__System.registerDynamic("16", ["14", "d", "15", "10"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var curve = $__require('14');
  var BN = $__require('d');
  var inherits = $__require('15');
  var Base = curve.base;
  var elliptic = $__require('10');
  var utils = elliptic.utils;
  function MontCurve(conf) {
    Base.call(this, 'mont', conf);
    this.a = new BN(conf.a, 16).toRed(this.red);
    this.b = new BN(conf.b, 16).toRed(this.red);
    this.i4 = new BN(4).toRed(this.red).redInvm();
    this.two = new BN(2).toRed(this.red);
    this.a24 = this.i4.redMul(this.a.redAdd(this.two));
  }
  inherits(MontCurve, Base);
  module.exports = MontCurve;
  MontCurve.prototype.validate = function validate(point) {
    var x = point.normalize().x;
    var x2 = x.redSqr();
    var rhs = x2.redMul(x).redAdd(x2.redMul(this.a)).redAdd(x);
    var y = rhs.redSqrt();
    return y.redSqr().cmp(rhs) === 0;
  };
  function Point(curve, x, z) {
    Base.BasePoint.call(this, curve, 'projective');
    if (x === null && z === null) {
      this.x = this.curve.one;
      this.z = this.curve.zero;
    } else {
      this.x = new BN(x, 16);
      this.z = new BN(z, 16);
      if (!this.x.red)
        this.x = this.x.toRed(this.curve.red);
      if (!this.z.red)
        this.z = this.z.toRed(this.curve.red);
    }
  }
  inherits(Point, Base.BasePoint);
  MontCurve.prototype.decodePoint = function decodePoint(bytes, enc) {
    return this.point(utils.toArray(bytes, enc), 1);
  };
  MontCurve.prototype.point = function point(x, z) {
    return new Point(this, x, z);
  };
  MontCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
    return Point.fromJSON(this, obj);
  };
  Point.prototype.precompute = function precompute() {};
  Point.prototype._encode = function _encode() {
    return this.getX().toArray('be', this.curve.p.byteLength());
  };
  Point.fromJSON = function fromJSON(curve, obj) {
    return new Point(curve, obj[0], obj[1] || curve.one);
  };
  Point.prototype.inspect = function inspect() {
    if (this.isInfinity())
      return '<EC Point Infinity>';
    return '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' z: ' + this.z.fromRed().toString(16, 2) + '>';
  };
  Point.prototype.isInfinity = function isInfinity() {
    return this.z.cmpn(0) === 0;
  };
  Point.prototype.dbl = function dbl() {
    var a = this.x.redAdd(this.z);
    var aa = a.redSqr();
    var b = this.x.redSub(this.z);
    var bb = b.redSqr();
    var c = aa.redSub(bb);
    var nx = aa.redMul(bb);
    var nz = c.redMul(bb.redAdd(this.curve.a24.redMul(c)));
    return this.curve.point(nx, nz);
  };
  Point.prototype.add = function add() {
    throw new Error('Not supported on Montgomery curve');
  };
  Point.prototype.diffAdd = function diffAdd(p, diff) {
    var a = this.x.redAdd(this.z);
    var b = this.x.redSub(this.z);
    var c = p.x.redAdd(p.z);
    var d = p.x.redSub(p.z);
    var da = d.redMul(a);
    var cb = c.redMul(b);
    var nx = diff.z.redMul(da.redAdd(cb).redSqr());
    var nz = diff.x.redMul(da.redISub(cb).redSqr());
    return this.curve.point(nx, nz);
  };
  Point.prototype.mul = function mul(k) {
    var t = k.clone();
    var a = this;
    var b = this.curve.point(null, null);
    var c = this;
    for (var bits = []; t.cmpn(0) !== 0; t.iushrn(1))
      bits.push(t.andln(1));
    for (var i = bits.length - 1; i >= 0; i--) {
      if (bits[i] === 0) {
        a = a.diffAdd(b, c);
        b = b.dbl();
      } else {
        b = a.diffAdd(b, c);
        a = a.dbl();
      }
    }
    return b;
  };
  Point.prototype.mulAdd = function mulAdd() {
    throw new Error('Not supported on Montgomery curve');
  };
  Point.prototype.jumlAdd = function jumlAdd() {
    throw new Error('Not supported on Montgomery curve');
  };
  Point.prototype.eq = function eq(other) {
    return this.getX().cmp(other.getX()) === 0;
  };
  Point.prototype.normalize = function normalize() {
    this.x = this.x.redMul(this.z.redInvm());
    this.z = this.curve.one;
    return this;
  };
  Point.prototype.getX = function getX() {
    this.normalize();
    return this.x.fromRed();
  };
  return module.exports;
});

$__System.registerDynamic("17", ["14", "10", "d", "15"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var curve = $__require('14');
  var elliptic = $__require('10');
  var BN = $__require('d');
  var inherits = $__require('15');
  var Base = curve.base;
  var assert = elliptic.utils.assert;
  function EdwardsCurve(conf) {
    this.twisted = (conf.a | 0) !== 1;
    this.mOneA = this.twisted && (conf.a | 0) === -1;
    this.extended = this.mOneA;
    Base.call(this, 'edwards', conf);
    this.a = new BN(conf.a, 16).umod(this.red.m);
    this.a = this.a.toRed(this.red);
    this.c = new BN(conf.c, 16).toRed(this.red);
    this.c2 = this.c.redSqr();
    this.d = new BN(conf.d, 16).toRed(this.red);
    this.dd = this.d.redAdd(this.d);
    assert(!this.twisted || this.c.fromRed().cmpn(1) === 0);
    this.oneC = (conf.c | 0) === 1;
  }
  inherits(EdwardsCurve, Base);
  module.exports = EdwardsCurve;
  EdwardsCurve.prototype._mulA = function _mulA(num) {
    if (this.mOneA)
      return num.redNeg();
    else
      return this.a.redMul(num);
  };
  EdwardsCurve.prototype._mulC = function _mulC(num) {
    if (this.oneC)
      return num;
    else
      return this.c.redMul(num);
  };
  EdwardsCurve.prototype.jpoint = function jpoint(x, y, z, t) {
    return this.point(x, y, z, t);
  };
  EdwardsCurve.prototype.pointFromX = function pointFromX(x, odd) {
    x = new BN(x, 16);
    if (!x.red)
      x = x.toRed(this.red);
    var x2 = x.redSqr();
    var rhs = this.c2.redSub(this.a.redMul(x2));
    var lhs = this.one.redSub(this.c2.redMul(this.d).redMul(x2));
    var y2 = rhs.redMul(lhs.redInvm());
    var y = y2.redSqrt();
    if (y.redSqr().redSub(y2).cmp(this.zero) !== 0)
      throw new Error('invalid point');
    var isOdd = y.fromRed().isOdd();
    if (odd && !isOdd || !odd && isOdd)
      y = y.redNeg();
    return this.point(x, y);
  };
  EdwardsCurve.prototype.pointFromY = function pointFromY(y, odd) {
    y = new BN(y, 16);
    if (!y.red)
      y = y.toRed(this.red);
    var y2 = y.redSqr();
    var lhs = y2.redSub(this.one);
    var rhs = y2.redMul(this.d).redAdd(this.one);
    var x2 = lhs.redMul(rhs.redInvm());
    if (x2.cmp(this.zero) === 0) {
      if (odd)
        throw new Error('invalid point');
      else
        return this.point(this.zero, y);
    }
    var x = x2.redSqrt();
    if (x.redSqr().redSub(x2).cmp(this.zero) !== 0)
      throw new Error('invalid point');
    if (x.isOdd() !== odd)
      x = x.redNeg();
    return this.point(x, y);
  };
  EdwardsCurve.prototype.validate = function validate(point) {
    if (point.isInfinity())
      return true;
    point.normalize();
    var x2 = point.x.redSqr();
    var y2 = point.y.redSqr();
    var lhs = x2.redMul(this.a).redAdd(y2);
    var rhs = this.c2.redMul(this.one.redAdd(this.d.redMul(x2).redMul(y2)));
    return lhs.cmp(rhs) === 0;
  };
  function Point(curve, x, y, z, t) {
    Base.BasePoint.call(this, curve, 'projective');
    if (x === null && y === null && z === null) {
      this.x = this.curve.zero;
      this.y = this.curve.one;
      this.z = this.curve.one;
      this.t = this.curve.zero;
      this.zOne = true;
    } else {
      this.x = new BN(x, 16);
      this.y = new BN(y, 16);
      this.z = z ? new BN(z, 16) : this.curve.one;
      this.t = t && new BN(t, 16);
      if (!this.x.red)
        this.x = this.x.toRed(this.curve.red);
      if (!this.y.red)
        this.y = this.y.toRed(this.curve.red);
      if (!this.z.red)
        this.z = this.z.toRed(this.curve.red);
      if (this.t && !this.t.red)
        this.t = this.t.toRed(this.curve.red);
      this.zOne = this.z === this.curve.one;
      if (this.curve.extended && !this.t) {
        this.t = this.x.redMul(this.y);
        if (!this.zOne)
          this.t = this.t.redMul(this.z.redInvm());
      }
    }
  }
  inherits(Point, Base.BasePoint);
  EdwardsCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
    return Point.fromJSON(this, obj);
  };
  EdwardsCurve.prototype.point = function point(x, y, z, t) {
    return new Point(this, x, y, z, t);
  };
  Point.fromJSON = function fromJSON(curve, obj) {
    return new Point(curve, obj[0], obj[1], obj[2]);
  };
  Point.prototype.inspect = function inspect() {
    if (this.isInfinity())
      return '<EC Point Infinity>';
    return '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' y: ' + this.y.fromRed().toString(16, 2) + ' z: ' + this.z.fromRed().toString(16, 2) + '>';
  };
  Point.prototype.isInfinity = function isInfinity() {
    return this.x.cmpn(0) === 0 && this.y.cmp(this.z) === 0;
  };
  Point.prototype._extDbl = function _extDbl() {
    var a = this.x.redSqr();
    var b = this.y.redSqr();
    var c = this.z.redSqr();
    c = c.redIAdd(c);
    var d = this.curve._mulA(a);
    var e = this.x.redAdd(this.y).redSqr().redISub(a).redISub(b);
    var g = d.redAdd(b);
    var f = g.redSub(c);
    var h = d.redSub(b);
    var nx = e.redMul(f);
    var ny = g.redMul(h);
    var nt = e.redMul(h);
    var nz = f.redMul(g);
    return this.curve.point(nx, ny, nz, nt);
  };
  Point.prototype._projDbl = function _projDbl() {
    var b = this.x.redAdd(this.y).redSqr();
    var c = this.x.redSqr();
    var d = this.y.redSqr();
    var nx;
    var ny;
    var nz;
    if (this.curve.twisted) {
      var e = this.curve._mulA(c);
      var f = e.redAdd(d);
      if (this.zOne) {
        nx = b.redSub(c).redSub(d).redMul(f.redSub(this.curve.two));
        ny = f.redMul(e.redSub(d));
        nz = f.redSqr().redSub(f).redSub(f);
      } else {
        var h = this.z.redSqr();
        var j = f.redSub(h).redISub(h);
        nx = b.redSub(c).redISub(d).redMul(j);
        ny = f.redMul(e.redSub(d));
        nz = f.redMul(j);
      }
    } else {
      var e = c.redAdd(d);
      var h = this.curve._mulC(this.c.redMul(this.z)).redSqr();
      var j = e.redSub(h).redSub(h);
      nx = this.curve._mulC(b.redISub(e)).redMul(j);
      ny = this.curve._mulC(e).redMul(c.redISub(d));
      nz = e.redMul(j);
    }
    return this.curve.point(nx, ny, nz);
  };
  Point.prototype.dbl = function dbl() {
    if (this.isInfinity())
      return this;
    if (this.curve.extended)
      return this._extDbl();
    else
      return this._projDbl();
  };
  Point.prototype._extAdd = function _extAdd(p) {
    var a = this.y.redSub(this.x).redMul(p.y.redSub(p.x));
    var b = this.y.redAdd(this.x).redMul(p.y.redAdd(p.x));
    var c = this.t.redMul(this.curve.dd).redMul(p.t);
    var d = this.z.redMul(p.z.redAdd(p.z));
    var e = b.redSub(a);
    var f = d.redSub(c);
    var g = d.redAdd(c);
    var h = b.redAdd(a);
    var nx = e.redMul(f);
    var ny = g.redMul(h);
    var nt = e.redMul(h);
    var nz = f.redMul(g);
    return this.curve.point(nx, ny, nz, nt);
  };
  Point.prototype._projAdd = function _projAdd(p) {
    var a = this.z.redMul(p.z);
    var b = a.redSqr();
    var c = this.x.redMul(p.x);
    var d = this.y.redMul(p.y);
    var e = this.curve.d.redMul(c).redMul(d);
    var f = b.redSub(e);
    var g = b.redAdd(e);
    var tmp = this.x.redAdd(this.y).redMul(p.x.redAdd(p.y)).redISub(c).redISub(d);
    var nx = a.redMul(f).redMul(tmp);
    var ny;
    var nz;
    if (this.curve.twisted) {
      ny = a.redMul(g).redMul(d.redSub(this.curve._mulA(c)));
      nz = f.redMul(g);
    } else {
      ny = a.redMul(g).redMul(d.redSub(c));
      nz = this.curve._mulC(f).redMul(g);
    }
    return this.curve.point(nx, ny, nz);
  };
  Point.prototype.add = function add(p) {
    if (this.isInfinity())
      return p;
    if (p.isInfinity())
      return this;
    if (this.curve.extended)
      return this._extAdd(p);
    else
      return this._projAdd(p);
  };
  Point.prototype.mul = function mul(k) {
    if (this._hasDoubles(k))
      return this.curve._fixedNafMul(this, k);
    else
      return this.curve._wnafMul(this, k);
  };
  Point.prototype.mulAdd = function mulAdd(k1, p, k2) {
    return this.curve._wnafMulAdd(1, [this, p], [k1, k2], 2, false);
  };
  Point.prototype.jmulAdd = function jmulAdd(k1, p, k2) {
    return this.curve._wnafMulAdd(1, [this, p], [k1, k2], 2, true);
  };
  Point.prototype.normalize = function normalize() {
    if (this.zOne)
      return this;
    var zi = this.z.redInvm();
    this.x = this.x.redMul(zi);
    this.y = this.y.redMul(zi);
    if (this.t)
      this.t = this.t.redMul(zi);
    this.z = this.curve.one;
    this.zOne = true;
    return this;
  };
  Point.prototype.neg = function neg() {
    return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg());
  };
  Point.prototype.getX = function getX() {
    this.normalize();
    return this.x.fromRed();
  };
  Point.prototype.getY = function getY() {
    this.normalize();
    return this.y.fromRed();
  };
  Point.prototype.eq = function eq(other) {
    return this === other || this.getX().cmp(other.getX()) === 0 && this.getY().cmp(other.getY()) === 0;
  };
  Point.prototype.eqXToP = function eqXToP(x) {
    var rx = x.toRed(this.curve.red).redMul(this.z);
    if (this.x.cmp(rx) === 0)
      return true;
    var xc = x.clone();
    var t = this.curve.redN.redMul(this.z);
    for (; ; ) {
      xc.iadd(this.curve.n);
      if (xc.cmp(this.curve.p) >= 0)
        return false;
      rx.redIAdd(t);
      if (this.x.cmp(rx) === 0)
        return true;
    }
    return false;
  };
  Point.prototype.toP = Point.prototype.normalize;
  Point.prototype.mixedAdd = Point.prototype.add;
  return module.exports;
});

$__System.registerDynamic("14", ["12", "13", "16", "17"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var curve = exports;
  curve.base = $__require('12');
  curve.short = $__require('13');
  curve.mont = $__require('16');
  curve.edwards = $__require('17');
  return module.exports;
});

$__System.registerDynamic("18", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = {
    doubles: {
      step: 4,
      points: [['e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a', 'f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821'], ['8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508', '11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf'], ['175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739', 'd3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695'], ['363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640', '4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9'], ['8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c', '4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36'], ['723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda', '96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f'], ['eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa', '5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999'], ['100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0', 'cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09'], ['e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d', '9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d'], ['feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d', 'e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088'], ['da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1', '9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d'], ['53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0', '5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8'], ['8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047', '10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a'], ['385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862', '283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453'], ['6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7', '7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160'], ['3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd', '56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0'], ['85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83', '7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6'], ['948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a', '53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589'], ['6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8', 'bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17'], ['e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d', '4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda'], ['e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725', '7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd'], ['213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754', '4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2'], ['4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c', '17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6'], ['fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6', '6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f'], ['76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39', 'c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01'], ['c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891', '893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3'], ['d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b', 'febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f'], ['b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03', '2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7'], ['e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d', 'eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78'], ['a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070', '7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1'], ['90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4', 'e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150'], ['8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da', '662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82'], ['e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11', '1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc'], ['8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e', 'efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b'], ['e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41', '2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51'], ['b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef', '67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45'], ['d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8', 'db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120'], ['324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d', '648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84'], ['4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96', '35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d'], ['9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd', 'ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d'], ['6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5', '9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8'], ['a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266', '40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8'], ['7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71', '34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac'], ['928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac', 'c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f'], ['85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751', '1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962'], ['ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e', '493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907'], ['827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241', 'c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec'], ['eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3', 'be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d'], ['e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f', '4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414'], ['1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19', 'aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd'], ['146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be', 'b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0'], ['fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9', '6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811'], ['da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2', '8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1'], ['a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13', '7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c'], ['174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c', 'ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73'], ['959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba', '2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd'], ['d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151', 'e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405'], ['64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073', 'd99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589'], ['8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458', '38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e'], ['13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b', '69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27'], ['bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366', 'd3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1'], ['8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa', '40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482'], ['8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0', '620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945'], ['dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787', '7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573'], ['f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e', 'ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82']]
    },
    naf: {
      wnd: 7,
      points: [['f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9', '388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672'], ['2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4', 'd8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6'], ['5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc', '6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da'], ['acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe', 'cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37'], ['774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb', 'd984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b'], ['f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8', 'ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81'], ['d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e', '581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58'], ['defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34', '4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77'], ['2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c', '85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a'], ['352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5', '321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c'], ['2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f', '2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67'], ['9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714', '73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402'], ['daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729', 'a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55'], ['c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db', '2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482'], ['6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4', 'e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82'], ['1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5', 'b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396'], ['605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479', '2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49'], ['62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d', '80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf'], ['80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f', '1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a'], ['7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb', 'd0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7'], ['d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9', 'eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933'], ['49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963', '758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a'], ['77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74', '958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6'], ['f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530', 'e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37'], ['463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b', '5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e'], ['f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247', 'cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6'], ['caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1', 'cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476'], ['2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120', '4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40'], ['7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435', '91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61'], ['754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18', '673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683'], ['e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8', '59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5'], ['186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb', '3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b'], ['df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f', '55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417'], ['5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143', 'efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868'], ['290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba', 'e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a'], ['af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45', 'f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6'], ['766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a', '744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996'], ['59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e', 'c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e'], ['f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8', 'e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d'], ['7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c', '30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2'], ['948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519', 'e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e'], ['7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab', '100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437'], ['3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca', 'ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311'], ['d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf', '8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4'], ['1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610', '68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575'], ['733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4', 'f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d'], ['15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c', 'd56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d'], ['a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940', 'edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629'], ['e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980', 'a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06'], ['311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3', '66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374'], ['34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf', '9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee'], ['f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63', '4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1'], ['d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448', 'fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b'], ['32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf', '5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661'], ['7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5', '8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6'], ['ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6', '8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e'], ['16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5', '5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d'], ['eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99', 'f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc'], ['78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51', 'f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4'], ['494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5', '42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c'], ['a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5', '204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b'], ['c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997', '4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913'], ['841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881', '73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154'], ['5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5', '39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865'], ['36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66', 'd2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc'], ['336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726', 'ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224'], ['8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede', '6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e'], ['1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94', '60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6'], ['85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31', '3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511'], ['29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51', 'b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b'], ['a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252', 'ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2'], ['4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5', 'cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c'], ['d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b', '6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3'], ['ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4', '322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d'], ['af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f', '6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700'], ['e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889', '2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4'], ['591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246', 'b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196'], ['11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984', '998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4'], ['3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a', 'b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257'], ['cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030', 'bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13'], ['c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197', '6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096'], ['c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593', 'c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38'], ['a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef', '21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f'], ['347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38', '60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448'], ['da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a', '49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a'], ['c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111', '5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4'], ['4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502', '7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437'], ['3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea', 'be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7'], ['cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26', '8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d'], ['b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986', '39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a'], ['d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e', '62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54'], ['48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4', '25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77'], ['dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda', 'ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517'], ['6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859', 'cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10'], ['e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f', 'f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125'], ['eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c', '6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e'], ['13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942', 'fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1'], ['ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a', '1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2'], ['b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80', '5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423'], ['ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d', '438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8'], ['8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1', 'cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758'], ['52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63', 'c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375'], ['e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352', '6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d'], ['7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193', 'ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec'], ['5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00', '9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0'], ['32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58', 'ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c'], ['e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7', 'd3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4'], ['8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8', 'c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f'], ['4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e', '67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649'], ['3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d', 'cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826'], ['674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b', '299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5'], ['d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f', 'f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87'], ['30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6', '462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b'], ['be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297', '62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc'], ['93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a', '7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c'], ['b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c', 'ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f'], ['d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52', '4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a'], ['d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb', 'bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46'], ['463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065', 'bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f'], ['7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917', '603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03'], ['74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9', 'cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08'], ['30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3', '553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8'], ['9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57', '712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373'], ['176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66', 'ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3'], ['75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8', '9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8'], ['809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721', '9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1'], ['1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180', '4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9']]
    }
  };
  return module.exports;
});

$__System.registerDynamic("19", ["11", "10", "18"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var curves = exports;
  var hash = $__require('11');
  var elliptic = $__require('10');
  var assert = elliptic.utils.assert;
  function PresetCurve(options) {
    if (options.type === 'short')
      this.curve = new elliptic.curve.short(options);
    else if (options.type === 'edwards')
      this.curve = new elliptic.curve.edwards(options);
    else
      this.curve = new elliptic.curve.mont(options);
    this.g = this.curve.g;
    this.n = this.curve.n;
    this.hash = options.hash;
    assert(this.g.validate(), 'Invalid curve');
    assert(this.g.mul(this.n).isInfinity(), 'Invalid curve, G*N != O');
  }
  curves.PresetCurve = PresetCurve;
  function defineCurve(name, options) {
    Object.defineProperty(curves, name, {
      configurable: true,
      enumerable: true,
      get: function() {
        var curve = new PresetCurve(options);
        Object.defineProperty(curves, name, {
          configurable: true,
          enumerable: true,
          value: curve
        });
        return curve;
      }
    });
  }
  defineCurve('p192', {
    type: 'short',
    prime: 'p192',
    p: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',
    a: 'ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc',
    b: '64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1',
    n: 'ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831',
    hash: hash.sha256,
    gRed: false,
    g: ['188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012', '07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811']
  });
  defineCurve('p224', {
    type: 'short',
    prime: 'p224',
    p: 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',
    a: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe',
    b: 'b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4',
    n: 'ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d',
    hash: hash.sha256,
    gRed: false,
    g: ['b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21', 'bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34']
  });
  defineCurve('p256', {
    type: 'short',
    prime: null,
    p: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff',
    a: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc',
    b: '5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b',
    n: 'ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551',
    hash: hash.sha256,
    gRed: false,
    g: ['6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296', '4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5']
  });
  defineCurve('p384', {
    type: 'short',
    prime: null,
    p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'fffffffe ffffffff 00000000 00000000 ffffffff',
    a: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'fffffffe ffffffff 00000000 00000000 fffffffc',
    b: 'b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f ' + '5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef',
    n: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 ' + 'f4372ddf 581a0db2 48b0a77a ecec196a ccc52973',
    hash: hash.sha384,
    gRed: false,
    g: ['aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 ' + '5502f25d bf55296c 3a545e38 72760ab7', '3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 ' + '0a60b1ce 1d7e819d 7a431d7c 90ea0e5f']
  });
  defineCurve('p521', {
    type: 'short',
    prime: null,
    p: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'ffffffff ffffffff ffffffff ffffffff ffffffff',
    a: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'ffffffff ffffffff ffffffff ffffffff fffffffc',
    b: '00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b ' + '99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd ' + '3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00',
    n: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 ' + 'f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409',
    hash: hash.sha512,
    gRed: false,
    g: ['000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 ' + '053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 ' + 'a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66', '00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 ' + '579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 ' + '3fad0761 353c7086 a272c240 88be9476 9fd16650']
  });
  defineCurve('curve25519', {
    type: 'mont',
    prime: 'p25519',
    p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
    a: '76d06',
    b: '0',
    n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
    hash: hash.sha256,
    gRed: false,
    g: ['9']
  });
  defineCurve('ed25519', {
    type: 'edwards',
    prime: 'p25519',
    p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
    a: '-1',
    c: '1',
    d: '52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3',
    n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
    hash: hash.sha256,
    gRed: false,
    g: ['216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a', '6666666666666666666666666666666666666666666666666666666666666658']
  });
  var pre;
  try {
    pre = $__require('18');
  } catch (e) {
    pre = undefined;
  }
  defineCurve('secp256k1', {
    type: 'short',
    prime: 'k256',
    p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
    a: '0',
    b: '7',
    n: 'ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141',
    h: '1',
    hash: hash.sha256,
    beta: '7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee',
    lambda: '5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72',
    basis: [{
      a: '3086d221a7d46bcde86c90e49284eb15',
      b: '-e4437ed6010e88286f547fa90abfe4c3'
    }, {
      a: '114ca50f7a8e2f3f657c1108d9d44cfd8',
      b: '3086d221a7d46bcde86c90e49284eb15'
    }],
    gRed: false,
    g: ['79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798', '483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8', pre]
  });
  return module.exports;
});

$__System.registerDynamic("1a", ["d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var BN = $__require('d');
  function KeyPair(ec, options) {
    this.ec = ec;
    this.priv = null;
    this.pub = null;
    if (options.priv)
      this._importPrivate(options.priv, options.privEnc);
    if (options.pub)
      this._importPublic(options.pub, options.pubEnc);
  }
  module.exports = KeyPair;
  KeyPair.fromPublic = function fromPublic(ec, pub, enc) {
    if (pub instanceof KeyPair)
      return pub;
    return new KeyPair(ec, {
      pub: pub,
      pubEnc: enc
    });
  };
  KeyPair.fromPrivate = function fromPrivate(ec, priv, enc) {
    if (priv instanceof KeyPair)
      return priv;
    return new KeyPair(ec, {
      priv: priv,
      privEnc: enc
    });
  };
  KeyPair.prototype.validate = function validate() {
    var pub = this.getPublic();
    if (pub.isInfinity())
      return {
        result: false,
        reason: 'Invalid public key'
      };
    if (!pub.validate())
      return {
        result: false,
        reason: 'Public key is not a point'
      };
    if (!pub.mul(this.ec.curve.n).isInfinity())
      return {
        result: false,
        reason: 'Public key * N != O'
      };
    return {
      result: true,
      reason: null
    };
  };
  KeyPair.prototype.getPublic = function getPublic(compact, enc) {
    if (typeof compact === 'string') {
      enc = compact;
      compact = null;
    }
    if (!this.pub)
      this.pub = this.ec.g.mul(this.priv);
    if (!enc)
      return this.pub;
    return this.pub.encode(enc, compact);
  };
  KeyPair.prototype.getPrivate = function getPrivate(enc) {
    if (enc === 'hex')
      return this.priv.toString(16, 2);
    else
      return this.priv;
  };
  KeyPair.prototype._importPrivate = function _importPrivate(key, enc) {
    this.priv = new BN(key, enc || 16);
    this.priv = this.priv.umod(this.ec.curve.n);
  };
  KeyPair.prototype._importPublic = function _importPublic(key, enc) {
    if (key.x || key.y) {
      this.pub = this.ec.curve.point(key.x, key.y);
      return;
    }
    this.pub = this.ec.curve.decodePoint(key, enc);
  };
  KeyPair.prototype.derive = function derive(pub) {
    return pub.mul(this.priv).getX();
  };
  KeyPair.prototype.sign = function sign(msg, enc, options) {
    return this.ec.sign(msg, this, enc, options);
  };
  KeyPair.prototype.verify = function verify(msg, signature) {
    return this.ec.verify(msg, signature, this);
  };
  KeyPair.prototype.inspect = function inspect() {
    return '<Key priv: ' + (this.priv && this.priv.toString(16, 2)) + ' pub: ' + (this.pub && this.pub.inspect()) + ' >';
  };
  return module.exports;
});

$__System.registerDynamic("1b", ["d", "10"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var BN = $__require('d');
  var elliptic = $__require('10');
  var utils = elliptic.utils;
  var assert = utils.assert;
  function Signature(options, enc) {
    if (options instanceof Signature)
      return options;
    if (this._importDER(options, enc))
      return;
    assert(options.r && options.s, 'Signature without r or s');
    this.r = new BN(options.r, 16);
    this.s = new BN(options.s, 16);
    if (options.recoveryParam === undefined)
      this.recoveryParam = null;
    else
      this.recoveryParam = options.recoveryParam;
  }
  module.exports = Signature;
  function Position() {
    this.place = 0;
  }
  function getLength(buf, p) {
    var initial = buf[p.place++];
    if (!(initial & 0x80)) {
      return initial;
    }
    var octetLen = initial & 0xf;
    var val = 0;
    for (var i = 0,
        off = p.place; i < octetLen; i++, off++) {
      val <<= 8;
      val |= buf[off];
    }
    p.place = off;
    return val;
  }
  function rmPadding(buf) {
    var i = 0;
    var len = buf.length - 1;
    while (!buf[i] && !(buf[i + 1] & 0x80) && i < len) {
      i++;
    }
    if (i === 0) {
      return buf;
    }
    return buf.slice(i);
  }
  Signature.prototype._importDER = function _importDER(data, enc) {
    data = utils.toArray(data, enc);
    var p = new Position();
    if (data[p.place++] !== 0x30) {
      return false;
    }
    var len = getLength(data, p);
    if ((len + p.place) !== data.length) {
      return false;
    }
    if (data[p.place++] !== 0x02) {
      return false;
    }
    var rlen = getLength(data, p);
    var r = data.slice(p.place, rlen + p.place);
    p.place += rlen;
    if (data[p.place++] !== 0x02) {
      return false;
    }
    var slen = getLength(data, p);
    if (data.length !== slen + p.place) {
      return false;
    }
    var s = data.slice(p.place, slen + p.place);
    if (r[0] === 0 && (r[1] & 0x80)) {
      r = r.slice(1);
    }
    if (s[0] === 0 && (s[1] & 0x80)) {
      s = s.slice(1);
    }
    this.r = new BN(r);
    this.s = new BN(s);
    this.recoveryParam = null;
    return true;
  };
  function constructLength(arr, len) {
    if (len < 0x80) {
      arr.push(len);
      return;
    }
    var octets = 1 + (Math.log(len) / Math.LN2 >>> 3);
    arr.push(octets | 0x80);
    while (--octets) {
      arr.push((len >>> (octets << 3)) & 0xff);
    }
    arr.push(len);
  }
  Signature.prototype.toDER = function toDER(enc) {
    var r = this.r.toArray();
    var s = this.s.toArray();
    if (r[0] & 0x80)
      r = [0].concat(r);
    if (s[0] & 0x80)
      s = [0].concat(s);
    r = rmPadding(r);
    s = rmPadding(s);
    while (!s[0] && !(s[1] & 0x80)) {
      s = s.slice(1);
    }
    var arr = [0x02];
    constructLength(arr, r.length);
    arr = arr.concat(r);
    arr.push(0x02);
    constructLength(arr, s.length);
    var backHalf = arr.concat(s);
    var res = [0x30];
    constructLength(res, backHalf.length);
    res = res.concat(backHalf);
    return utils.encode(res, enc);
  };
  return module.exports;
});

$__System.registerDynamic("1c", ["d", "10", "1a", "1b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var BN = $__require('d');
  var elliptic = $__require('10');
  var utils = elliptic.utils;
  var assert = utils.assert;
  var KeyPair = $__require('1a');
  var Signature = $__require('1b');
  function EC(options) {
    if (!(this instanceof EC))
      return new EC(options);
    if (typeof options === 'string') {
      assert(elliptic.curves.hasOwnProperty(options), 'Unknown curve ' + options);
      options = elliptic.curves[options];
    }
    if (options instanceof elliptic.curves.PresetCurve)
      options = {curve: options};
    this.curve = options.curve.curve;
    this.n = this.curve.n;
    this.nh = this.n.ushrn(1);
    this.g = this.curve.g;
    this.g = options.curve.g;
    this.g.precompute(options.curve.n.bitLength() + 1);
    this.hash = options.hash || options.curve.hash;
  }
  module.exports = EC;
  EC.prototype.keyPair = function keyPair(options) {
    return new KeyPair(this, options);
  };
  EC.prototype.keyFromPrivate = function keyFromPrivate(priv, enc) {
    return KeyPair.fromPrivate(this, priv, enc);
  };
  EC.prototype.keyFromPublic = function keyFromPublic(pub, enc) {
    return KeyPair.fromPublic(this, pub, enc);
  };
  EC.prototype.genKeyPair = function genKeyPair(options) {
    if (!options)
      options = {};
    var drbg = new elliptic.hmacDRBG({
      hash: this.hash,
      pers: options.pers,
      entropy: options.entropy || elliptic.rand(this.hash.hmacStrength),
      nonce: this.n.toArray()
    });
    var bytes = this.n.byteLength();
    var ns2 = this.n.sub(new BN(2));
    do {
      var priv = new BN(drbg.generate(bytes));
      if (priv.cmp(ns2) > 0)
        continue;
      priv.iaddn(1);
      return this.keyFromPrivate(priv);
    } while (true);
  };
  EC.prototype._truncateToN = function truncateToN(msg, truncOnly) {
    var delta = msg.byteLength() * 8 - this.n.bitLength();
    if (delta > 0)
      msg = msg.ushrn(delta);
    if (!truncOnly && msg.cmp(this.n) >= 0)
      return msg.sub(this.n);
    else
      return msg;
  };
  EC.prototype.sign = function sign(msg, key, enc, options) {
    if (typeof enc === 'object') {
      options = enc;
      enc = null;
    }
    if (!options)
      options = {};
    key = this.keyFromPrivate(key, enc);
    msg = this._truncateToN(new BN(msg, 16));
    var bytes = this.n.byteLength();
    var bkey = key.getPrivate().toArray('be', bytes);
    var nonce = msg.toArray('be', bytes);
    var drbg = new elliptic.hmacDRBG({
      hash: this.hash,
      entropy: bkey,
      nonce: nonce,
      pers: options.pers,
      persEnc: options.persEnc
    });
    var ns1 = this.n.sub(new BN(1));
    for (var iter = 0; true; iter++) {
      var k = options.k ? options.k(iter) : new BN(drbg.generate(this.n.byteLength()));
      k = this._truncateToN(k, true);
      if (k.cmpn(1) <= 0 || k.cmp(ns1) >= 0)
        continue;
      var kp = this.g.mul(k);
      if (kp.isInfinity())
        continue;
      var kpX = kp.getX();
      var r = kpX.umod(this.n);
      if (r.cmpn(0) === 0)
        continue;
      var s = k.invm(this.n).mul(r.mul(key.getPrivate()).iadd(msg));
      s = s.umod(this.n);
      if (s.cmpn(0) === 0)
        continue;
      var recoveryParam = (kp.getY().isOdd() ? 1 : 0) | (kpX.cmp(r) !== 0 ? 2 : 0);
      if (options.canonical && s.cmp(this.nh) > 0) {
        s = this.n.sub(s);
        recoveryParam ^= 1;
      }
      return new Signature({
        r: r,
        s: s,
        recoveryParam: recoveryParam
      });
    }
  };
  EC.prototype.verify = function verify(msg, signature, key, enc) {
    msg = this._truncateToN(new BN(msg, 16));
    key = this.keyFromPublic(key, enc);
    signature = new Signature(signature, 'hex');
    var r = signature.r;
    var s = signature.s;
    if (r.cmpn(1) < 0 || r.cmp(this.n) >= 0)
      return false;
    if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0)
      return false;
    var sinv = s.invm(this.n);
    var u1 = sinv.mul(msg).umod(this.n);
    var u2 = sinv.mul(r).umod(this.n);
    if (!this.curve._maxwellTrick) {
      var p = this.g.mulAdd(u1, key.getPublic(), u2);
      if (p.isInfinity())
        return false;
      return p.getX().umod(this.n).cmp(r) === 0;
    }
    var p = this.g.jmulAdd(u1, key.getPublic(), u2);
    if (p.isInfinity())
      return false;
    return p.eqXToP(r);
  };
  EC.prototype.recoverPubKey = function(msg, signature, j, enc) {
    assert((3 & j) === j, 'The recovery param is more than two bits');
    signature = new Signature(signature, enc);
    var n = this.n;
    var e = new BN(msg);
    var r = signature.r;
    var s = signature.s;
    var isYOdd = j & 1;
    var isSecondKey = j >> 1;
    if (r.cmp(this.curve.p.umod(this.curve.n)) >= 0 && isSecondKey)
      throw new Error('Unable to find sencond key candinate');
    if (isSecondKey)
      r = this.curve.pointFromX(r.add(this.curve.n), isYOdd);
    else
      r = this.curve.pointFromX(r, isYOdd);
    var eNeg = n.sub(e);
    var rInv = signature.r.invm(n);
    return this.g.mulAdd(eNeg, r, s).mul(rInv);
  };
  EC.prototype.getKeyRecoveryParam = function(e, signature, Q, enc) {
    signature = new Signature(signature, enc);
    if (signature.recoveryParam !== null)
      return signature.recoveryParam;
    for (var i = 0; i < 4; i++) {
      var Qprime;
      try {
        Qprime = this.recoverPubKey(e, signature, i);
      } catch (e) {
        continue;
      }
      if (Qprime.eq(Q))
        return i;
    }
    throw new Error('Unable to find valid recovery factor');
  };
  return module.exports;
});

$__System.registerDynamic("1d", ["15"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var utils = exports;
  var inherits = $__require('15');
  function toArray(msg, enc) {
    if (Array.isArray(msg))
      return msg.slice();
    if (!msg)
      return [];
    var res = [];
    if (typeof msg === 'string') {
      if (!enc) {
        for (var i = 0; i < msg.length; i++) {
          var c = msg.charCodeAt(i);
          var hi = c >> 8;
          var lo = c & 0xff;
          if (hi)
            res.push(hi, lo);
          else
            res.push(lo);
        }
      } else if (enc === 'hex') {
        msg = msg.replace(/[^a-z0-9]+/ig, '');
        if (msg.length % 2 !== 0)
          msg = '0' + msg;
        for (var i = 0; i < msg.length; i += 2)
          res.push(parseInt(msg[i] + msg[i + 1], 16));
      }
    } else {
      for (var i = 0; i < msg.length; i++)
        res[i] = msg[i] | 0;
    }
    return res;
  }
  utils.toArray = toArray;
  function toHex(msg) {
    var res = '';
    for (var i = 0; i < msg.length; i++)
      res += zero2(msg[i].toString(16));
    return res;
  }
  utils.toHex = toHex;
  function htonl(w) {
    var res = (w >>> 24) | ((w >>> 8) & 0xff00) | ((w << 8) & 0xff0000) | ((w & 0xff) << 24);
    return res >>> 0;
  }
  utils.htonl = htonl;
  function toHex32(msg, endian) {
    var res = '';
    for (var i = 0; i < msg.length; i++) {
      var w = msg[i];
      if (endian === 'little')
        w = htonl(w);
      res += zero8(w.toString(16));
    }
    return res;
  }
  utils.toHex32 = toHex32;
  function zero2(word) {
    if (word.length === 1)
      return '0' + word;
    else
      return word;
  }
  utils.zero2 = zero2;
  function zero8(word) {
    if (word.length === 7)
      return '0' + word;
    else if (word.length === 6)
      return '00' + word;
    else if (word.length === 5)
      return '000' + word;
    else if (word.length === 4)
      return '0000' + word;
    else if (word.length === 3)
      return '00000' + word;
    else if (word.length === 2)
      return '000000' + word;
    else if (word.length === 1)
      return '0000000' + word;
    else
      return word;
  }
  utils.zero8 = zero8;
  function join32(msg, start, end, endian) {
    var len = end - start;
    assert(len % 4 === 0);
    var res = new Array(len / 4);
    for (var i = 0,
        k = start; i < res.length; i++, k += 4) {
      var w;
      if (endian === 'big')
        w = (msg[k] << 24) | (msg[k + 1] << 16) | (msg[k + 2] << 8) | msg[k + 3];
      else
        w = (msg[k + 3] << 24) | (msg[k + 2] << 16) | (msg[k + 1] << 8) | msg[k];
      res[i] = w >>> 0;
    }
    return res;
  }
  utils.join32 = join32;
  function split32(msg, endian) {
    var res = new Array(msg.length * 4);
    for (var i = 0,
        k = 0; i < msg.length; i++, k += 4) {
      var m = msg[i];
      if (endian === 'big') {
        res[k] = m >>> 24;
        res[k + 1] = (m >>> 16) & 0xff;
        res[k + 2] = (m >>> 8) & 0xff;
        res[k + 3] = m & 0xff;
      } else {
        res[k + 3] = m >>> 24;
        res[k + 2] = (m >>> 16) & 0xff;
        res[k + 1] = (m >>> 8) & 0xff;
        res[k] = m & 0xff;
      }
    }
    return res;
  }
  utils.split32 = split32;
  function rotr32(w, b) {
    return (w >>> b) | (w << (32 - b));
  }
  utils.rotr32 = rotr32;
  function rotl32(w, b) {
    return (w << b) | (w >>> (32 - b));
  }
  utils.rotl32 = rotl32;
  function sum32(a, b) {
    return (a + b) >>> 0;
  }
  utils.sum32 = sum32;
  function sum32_3(a, b, c) {
    return (a + b + c) >>> 0;
  }
  utils.sum32_3 = sum32_3;
  function sum32_4(a, b, c, d) {
    return (a + b + c + d) >>> 0;
  }
  utils.sum32_4 = sum32_4;
  function sum32_5(a, b, c, d, e) {
    return (a + b + c + d + e) >>> 0;
  }
  utils.sum32_5 = sum32_5;
  function assert(cond, msg) {
    if (!cond)
      throw new Error(msg || 'Assertion failed');
  }
  utils.assert = assert;
  utils.inherits = inherits;
  function sum64(buf, pos, ah, al) {
    var bh = buf[pos];
    var bl = buf[pos + 1];
    var lo = (al + bl) >>> 0;
    var hi = (lo < al ? 1 : 0) + ah + bh;
    buf[pos] = hi >>> 0;
    buf[pos + 1] = lo;
  }
  exports.sum64 = sum64;
  function sum64_hi(ah, al, bh, bl) {
    var lo = (al + bl) >>> 0;
    var hi = (lo < al ? 1 : 0) + ah + bh;
    return hi >>> 0;
  }
  ;
  exports.sum64_hi = sum64_hi;
  function sum64_lo(ah, al, bh, bl) {
    var lo = al + bl;
    return lo >>> 0;
  }
  ;
  exports.sum64_lo = sum64_lo;
  function sum64_4_hi(ah, al, bh, bl, ch, cl, dh, dl) {
    var carry = 0;
    var lo = al;
    lo = (lo + bl) >>> 0;
    carry += lo < al ? 1 : 0;
    lo = (lo + cl) >>> 0;
    carry += lo < cl ? 1 : 0;
    lo = (lo + dl) >>> 0;
    carry += lo < dl ? 1 : 0;
    var hi = ah + bh + ch + dh + carry;
    return hi >>> 0;
  }
  ;
  exports.sum64_4_hi = sum64_4_hi;
  function sum64_4_lo(ah, al, bh, bl, ch, cl, dh, dl) {
    var lo = al + bl + cl + dl;
    return lo >>> 0;
  }
  ;
  exports.sum64_4_lo = sum64_4_lo;
  function sum64_5_hi(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
    var carry = 0;
    var lo = al;
    lo = (lo + bl) >>> 0;
    carry += lo < al ? 1 : 0;
    lo = (lo + cl) >>> 0;
    carry += lo < cl ? 1 : 0;
    lo = (lo + dl) >>> 0;
    carry += lo < dl ? 1 : 0;
    lo = (lo + el) >>> 0;
    carry += lo < el ? 1 : 0;
    var hi = ah + bh + ch + dh + eh + carry;
    return hi >>> 0;
  }
  ;
  exports.sum64_5_hi = sum64_5_hi;
  function sum64_5_lo(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
    var lo = al + bl + cl + dl + el;
    return lo >>> 0;
  }
  ;
  exports.sum64_5_lo = sum64_5_lo;
  function rotr64_hi(ah, al, num) {
    var r = (al << (32 - num)) | (ah >>> num);
    return r >>> 0;
  }
  ;
  exports.rotr64_hi = rotr64_hi;
  function rotr64_lo(ah, al, num) {
    var r = (ah << (32 - num)) | (al >>> num);
    return r >>> 0;
  }
  ;
  exports.rotr64_lo = rotr64_lo;
  function shr64_hi(ah, al, num) {
    return ah >>> num;
  }
  ;
  exports.shr64_hi = shr64_hi;
  function shr64_lo(ah, al, num) {
    var r = (ah << (32 - num)) | (al >>> num);
    return r >>> 0;
  }
  ;
  exports.shr64_lo = shr64_lo;
  return module.exports;
});

$__System.registerDynamic("1e", ["11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var hash = $__require('11');
  var utils = hash.utils;
  var assert = utils.assert;
  function BlockHash() {
    this.pending = null;
    this.pendingTotal = 0;
    this.blockSize = this.constructor.blockSize;
    this.outSize = this.constructor.outSize;
    this.hmacStrength = this.constructor.hmacStrength;
    this.padLength = this.constructor.padLength / 8;
    this.endian = 'big';
    this._delta8 = this.blockSize / 8;
    this._delta32 = this.blockSize / 32;
  }
  exports.BlockHash = BlockHash;
  BlockHash.prototype.update = function update(msg, enc) {
    msg = utils.toArray(msg, enc);
    if (!this.pending)
      this.pending = msg;
    else
      this.pending = this.pending.concat(msg);
    this.pendingTotal += msg.length;
    if (this.pending.length >= this._delta8) {
      msg = this.pending;
      var r = msg.length % this._delta8;
      this.pending = msg.slice(msg.length - r, msg.length);
      if (this.pending.length === 0)
        this.pending = null;
      msg = utils.join32(msg, 0, msg.length - r, this.endian);
      for (var i = 0; i < msg.length; i += this._delta32)
        this._update(msg, i, i + this._delta32);
    }
    return this;
  };
  BlockHash.prototype.digest = function digest(enc) {
    this.update(this._pad());
    assert(this.pending === null);
    return this._digest(enc);
  };
  BlockHash.prototype._pad = function pad() {
    var len = this.pendingTotal;
    var bytes = this._delta8;
    var k = bytes - ((len + this.padLength) % bytes);
    var res = new Array(k + this.padLength);
    res[0] = 0x80;
    for (var i = 1; i < k; i++)
      res[i] = 0;
    len <<= 3;
    if (this.endian === 'big') {
      for (var t = 8; t < this.padLength; t++)
        res[i++] = 0;
      res[i++] = 0;
      res[i++] = 0;
      res[i++] = 0;
      res[i++] = 0;
      res[i++] = (len >>> 24) & 0xff;
      res[i++] = (len >>> 16) & 0xff;
      res[i++] = (len >>> 8) & 0xff;
      res[i++] = len & 0xff;
    } else {
      res[i++] = len & 0xff;
      res[i++] = (len >>> 8) & 0xff;
      res[i++] = (len >>> 16) & 0xff;
      res[i++] = (len >>> 24) & 0xff;
      res[i++] = 0;
      res[i++] = 0;
      res[i++] = 0;
      res[i++] = 0;
      for (var t = 8; t < this.padLength; t++)
        res[i++] = 0;
    }
    return res;
  };
  return module.exports;
});

$__System.registerDynamic("1f", ["11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var hash = $__require('11');
  var utils = hash.utils;
  var assert = utils.assert;
  var rotr32 = utils.rotr32;
  var rotl32 = utils.rotl32;
  var sum32 = utils.sum32;
  var sum32_4 = utils.sum32_4;
  var sum32_5 = utils.sum32_5;
  var rotr64_hi = utils.rotr64_hi;
  var rotr64_lo = utils.rotr64_lo;
  var shr64_hi = utils.shr64_hi;
  var shr64_lo = utils.shr64_lo;
  var sum64 = utils.sum64;
  var sum64_hi = utils.sum64_hi;
  var sum64_lo = utils.sum64_lo;
  var sum64_4_hi = utils.sum64_4_hi;
  var sum64_4_lo = utils.sum64_4_lo;
  var sum64_5_hi = utils.sum64_5_hi;
  var sum64_5_lo = utils.sum64_5_lo;
  var BlockHash = hash.common.BlockHash;
  var sha256_K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
  var sha512_K = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];
  var sha1_K = [0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xCA62C1D6];
  function SHA256() {
    if (!(this instanceof SHA256))
      return new SHA256();
    BlockHash.call(this);
    this.h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    this.k = sha256_K;
    this.W = new Array(64);
  }
  utils.inherits(SHA256, BlockHash);
  exports.sha256 = SHA256;
  SHA256.blockSize = 512;
  SHA256.outSize = 256;
  SHA256.hmacStrength = 192;
  SHA256.padLength = 64;
  SHA256.prototype._update = function _update(msg, start) {
    var W = this.W;
    for (var i = 0; i < 16; i++)
      W[i] = msg[start + i];
    for (; i < W.length; i++)
      W[i] = sum32_4(g1_256(W[i - 2]), W[i - 7], g0_256(W[i - 15]), W[i - 16]);
    var a = this.h[0];
    var b = this.h[1];
    var c = this.h[2];
    var d = this.h[3];
    var e = this.h[4];
    var f = this.h[5];
    var g = this.h[6];
    var h = this.h[7];
    assert(this.k.length === W.length);
    for (var i = 0; i < W.length; i++) {
      var T1 = sum32_5(h, s1_256(e), ch32(e, f, g), this.k[i], W[i]);
      var T2 = sum32(s0_256(a), maj32(a, b, c));
      h = g;
      g = f;
      f = e;
      e = sum32(d, T1);
      d = c;
      c = b;
      b = a;
      a = sum32(T1, T2);
    }
    this.h[0] = sum32(this.h[0], a);
    this.h[1] = sum32(this.h[1], b);
    this.h[2] = sum32(this.h[2], c);
    this.h[3] = sum32(this.h[3], d);
    this.h[4] = sum32(this.h[4], e);
    this.h[5] = sum32(this.h[5], f);
    this.h[6] = sum32(this.h[6], g);
    this.h[7] = sum32(this.h[7], h);
  };
  SHA256.prototype._digest = function digest(enc) {
    if (enc === 'hex')
      return utils.toHex32(this.h, 'big');
    else
      return utils.split32(this.h, 'big');
  };
  function SHA224() {
    if (!(this instanceof SHA224))
      return new SHA224();
    SHA256.call(this);
    this.h = [0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4];
  }
  utils.inherits(SHA224, SHA256);
  exports.sha224 = SHA224;
  SHA224.blockSize = 512;
  SHA224.outSize = 224;
  SHA224.hmacStrength = 192;
  SHA224.padLength = 64;
  SHA224.prototype._digest = function digest(enc) {
    if (enc === 'hex')
      return utils.toHex32(this.h.slice(0, 7), 'big');
    else
      return utils.split32(this.h.slice(0, 7), 'big');
  };
  function SHA512() {
    if (!(this instanceof SHA512))
      return new SHA512();
    BlockHash.call(this);
    this.h = [0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372, 0xfe94f82b, 0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1, 0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19, 0x137e2179];
    this.k = sha512_K;
    this.W = new Array(160);
  }
  utils.inherits(SHA512, BlockHash);
  exports.sha512 = SHA512;
  SHA512.blockSize = 1024;
  SHA512.outSize = 512;
  SHA512.hmacStrength = 192;
  SHA512.padLength = 128;
  SHA512.prototype._prepareBlock = function _prepareBlock(msg, start) {
    var W = this.W;
    for (var i = 0; i < 32; i++)
      W[i] = msg[start + i];
    for (; i < W.length; i += 2) {
      var c0_hi = g1_512_hi(W[i - 4], W[i - 3]);
      var c0_lo = g1_512_lo(W[i - 4], W[i - 3]);
      var c1_hi = W[i - 14];
      var c1_lo = W[i - 13];
      var c2_hi = g0_512_hi(W[i - 30], W[i - 29]);
      var c2_lo = g0_512_lo(W[i - 30], W[i - 29]);
      var c3_hi = W[i - 32];
      var c3_lo = W[i - 31];
      W[i] = sum64_4_hi(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo);
      W[i + 1] = sum64_4_lo(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo);
    }
  };
  SHA512.prototype._update = function _update(msg, start) {
    this._prepareBlock(msg, start);
    var W = this.W;
    var ah = this.h[0];
    var al = this.h[1];
    var bh = this.h[2];
    var bl = this.h[3];
    var ch = this.h[4];
    var cl = this.h[5];
    var dh = this.h[6];
    var dl = this.h[7];
    var eh = this.h[8];
    var el = this.h[9];
    var fh = this.h[10];
    var fl = this.h[11];
    var gh = this.h[12];
    var gl = this.h[13];
    var hh = this.h[14];
    var hl = this.h[15];
    assert(this.k.length === W.length);
    for (var i = 0; i < W.length; i += 2) {
      var c0_hi = hh;
      var c0_lo = hl;
      var c1_hi = s1_512_hi(eh, el);
      var c1_lo = s1_512_lo(eh, el);
      var c2_hi = ch64_hi(eh, el, fh, fl, gh, gl);
      var c2_lo = ch64_lo(eh, el, fh, fl, gh, gl);
      var c3_hi = this.k[i];
      var c3_lo = this.k[i + 1];
      var c4_hi = W[i];
      var c4_lo = W[i + 1];
      var T1_hi = sum64_5_hi(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo, c4_hi, c4_lo);
      var T1_lo = sum64_5_lo(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo, c4_hi, c4_lo);
      var c0_hi = s0_512_hi(ah, al);
      var c0_lo = s0_512_lo(ah, al);
      var c1_hi = maj64_hi(ah, al, bh, bl, ch, cl);
      var c1_lo = maj64_lo(ah, al, bh, bl, ch, cl);
      var T2_hi = sum64_hi(c0_hi, c0_lo, c1_hi, c1_lo);
      var T2_lo = sum64_lo(c0_hi, c0_lo, c1_hi, c1_lo);
      hh = gh;
      hl = gl;
      gh = fh;
      gl = fl;
      fh = eh;
      fl = el;
      eh = sum64_hi(dh, dl, T1_hi, T1_lo);
      el = sum64_lo(dl, dl, T1_hi, T1_lo);
      dh = ch;
      dl = cl;
      ch = bh;
      cl = bl;
      bh = ah;
      bl = al;
      ah = sum64_hi(T1_hi, T1_lo, T2_hi, T2_lo);
      al = sum64_lo(T1_hi, T1_lo, T2_hi, T2_lo);
    }
    sum64(this.h, 0, ah, al);
    sum64(this.h, 2, bh, bl);
    sum64(this.h, 4, ch, cl);
    sum64(this.h, 6, dh, dl);
    sum64(this.h, 8, eh, el);
    sum64(this.h, 10, fh, fl);
    sum64(this.h, 12, gh, gl);
    sum64(this.h, 14, hh, hl);
  };
  SHA512.prototype._digest = function digest(enc) {
    if (enc === 'hex')
      return utils.toHex32(this.h, 'big');
    else
      return utils.split32(this.h, 'big');
  };
  function SHA384() {
    if (!(this instanceof SHA384))
      return new SHA384();
    SHA512.call(this);
    this.h = [0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a, 0x3070dd17, 0x152fecd8, 0xf70e5939, 0x67332667, 0xffc00b31, 0x8eb44a87, 0x68581511, 0xdb0c2e0d, 0x64f98fa7, 0x47b5481d, 0xbefa4fa4];
  }
  utils.inherits(SHA384, SHA512);
  exports.sha384 = SHA384;
  SHA384.blockSize = 1024;
  SHA384.outSize = 384;
  SHA384.hmacStrength = 192;
  SHA384.padLength = 128;
  SHA384.prototype._digest = function digest(enc) {
    if (enc === 'hex')
      return utils.toHex32(this.h.slice(0, 12), 'big');
    else
      return utils.split32(this.h.slice(0, 12), 'big');
  };
  function SHA1() {
    if (!(this instanceof SHA1))
      return new SHA1();
    BlockHash.call(this);
    this.h = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
    this.W = new Array(80);
  }
  utils.inherits(SHA1, BlockHash);
  exports.sha1 = SHA1;
  SHA1.blockSize = 512;
  SHA1.outSize = 160;
  SHA1.hmacStrength = 80;
  SHA1.padLength = 64;
  SHA1.prototype._update = function _update(msg, start) {
    var W = this.W;
    for (var i = 0; i < 16; i++)
      W[i] = msg[start + i];
    for (; i < W.length; i++)
      W[i] = rotl32(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
    var a = this.h[0];
    var b = this.h[1];
    var c = this.h[2];
    var d = this.h[3];
    var e = this.h[4];
    for (var i = 0; i < W.length; i++) {
      var s = ~~(i / 20);
      var t = sum32_5(rotl32(a, 5), ft_1(s, b, c, d), e, W[i], sha1_K[s]);
      e = d;
      d = c;
      c = rotl32(b, 30);
      b = a;
      a = t;
    }
    this.h[0] = sum32(this.h[0], a);
    this.h[1] = sum32(this.h[1], b);
    this.h[2] = sum32(this.h[2], c);
    this.h[3] = sum32(this.h[3], d);
    this.h[4] = sum32(this.h[4], e);
  };
  SHA1.prototype._digest = function digest(enc) {
    if (enc === 'hex')
      return utils.toHex32(this.h, 'big');
    else
      return utils.split32(this.h, 'big');
  };
  function ch32(x, y, z) {
    return (x & y) ^ ((~x) & z);
  }
  function maj32(x, y, z) {
    return (x & y) ^ (x & z) ^ (y & z);
  }
  function p32(x, y, z) {
    return x ^ y ^ z;
  }
  function s0_256(x) {
    return rotr32(x, 2) ^ rotr32(x, 13) ^ rotr32(x, 22);
  }
  function s1_256(x) {
    return rotr32(x, 6) ^ rotr32(x, 11) ^ rotr32(x, 25);
  }
  function g0_256(x) {
    return rotr32(x, 7) ^ rotr32(x, 18) ^ (x >>> 3);
  }
  function g1_256(x) {
    return rotr32(x, 17) ^ rotr32(x, 19) ^ (x >>> 10);
  }
  function ft_1(s, x, y, z) {
    if (s === 0)
      return ch32(x, y, z);
    if (s === 1 || s === 3)
      return p32(x, y, z);
    if (s === 2)
      return maj32(x, y, z);
  }
  function ch64_hi(xh, xl, yh, yl, zh, zl) {
    var r = (xh & yh) ^ ((~xh) & zh);
    if (r < 0)
      r += 0x100000000;
    return r;
  }
  function ch64_lo(xh, xl, yh, yl, zh, zl) {
    var r = (xl & yl) ^ ((~xl) & zl);
    if (r < 0)
      r += 0x100000000;
    return r;
  }
  function maj64_hi(xh, xl, yh, yl, zh, zl) {
    var r = (xh & yh) ^ (xh & zh) ^ (yh & zh);
    if (r < 0)
      r += 0x100000000;
    return r;
  }
  function maj64_lo(xh, xl, yh, yl, zh, zl) {
    var r = (xl & yl) ^ (xl & zl) ^ (yl & zl);
    if (r < 0)
      r += 0x100000000;
    return r;
  }
  function s0_512_hi(xh, xl) {
    var c0_hi = rotr64_hi(xh, xl, 28);
    var c1_hi = rotr64_hi(xl, xh, 2);
    var c2_hi = rotr64_hi(xl, xh, 7);
    var r = c0_hi ^ c1_hi ^ c2_hi;
    if (r < 0)
      r += 0x100000000;
    return r;
  }
  function s0_512_lo(xh, xl) {
    var c0_lo = rotr64_lo(xh, xl, 28);
    var c1_lo = rotr64_lo(xl, xh, 2);
    var c2_lo = rotr64_lo(xl, xh, 7);
    var r = c0_lo ^ c1_lo ^ c2_lo;
    if (r < 0)
      r += 0x100000000;
    return r;
  }
  function s1_512_hi(xh, xl) {
    var c0_hi = rotr64_hi(xh, xl, 14);
    var c1_hi = rotr64_hi(xh, xl, 18);
    var c2_hi = rotr64_hi(xl, xh, 9);
    var r = c0_hi ^ c1_hi ^ c2_hi;
    if (r < 0)
      r += 0x100000000;
    return r;
  }
  function s1_512_lo(xh, xl) {
    var c0_lo = rotr64_lo(xh, xl, 14);
    var c1_lo = rotr64_lo(xh, xl, 18);
    var c2_lo = rotr64_lo(xl, xh, 9);
    var r = c0_lo ^ c1_lo ^ c2_lo;
    if (r < 0)
      r += 0x100000000;
    return r;
  }
  function g0_512_hi(xh, xl) {
    var c0_hi = rotr64_hi(xh, xl, 1);
    var c1_hi = rotr64_hi(xh, xl, 8);
    var c2_hi = shr64_hi(xh, xl, 7);
    var r = c0_hi ^ c1_hi ^ c2_hi;
    if (r < 0)
      r += 0x100000000;
    return r;
  }
  function g0_512_lo(xh, xl) {
    var c0_lo = rotr64_lo(xh, xl, 1);
    var c1_lo = rotr64_lo(xh, xl, 8);
    var c2_lo = shr64_lo(xh, xl, 7);
    var r = c0_lo ^ c1_lo ^ c2_lo;
    if (r < 0)
      r += 0x100000000;
    return r;
  }
  function g1_512_hi(xh, xl) {
    var c0_hi = rotr64_hi(xh, xl, 19);
    var c1_hi = rotr64_hi(xl, xh, 29);
    var c2_hi = shr64_hi(xh, xl, 6);
    var r = c0_hi ^ c1_hi ^ c2_hi;
    if (r < 0)
      r += 0x100000000;
    return r;
  }
  function g1_512_lo(xh, xl) {
    var c0_lo = rotr64_lo(xh, xl, 19);
    var c1_lo = rotr64_lo(xl, xh, 29);
    var c2_lo = shr64_lo(xh, xl, 6);
    var r = c0_lo ^ c1_lo ^ c2_lo;
    if (r < 0)
      r += 0x100000000;
    return r;
  }
  return module.exports;
});

$__System.registerDynamic("20", ["11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var hash = $__require('11');
  var utils = hash.utils;
  var rotl32 = utils.rotl32;
  var sum32 = utils.sum32;
  var sum32_3 = utils.sum32_3;
  var sum32_4 = utils.sum32_4;
  var BlockHash = hash.common.BlockHash;
  function RIPEMD160() {
    if (!(this instanceof RIPEMD160))
      return new RIPEMD160();
    BlockHash.call(this);
    this.h = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
    this.endian = 'little';
  }
  utils.inherits(RIPEMD160, BlockHash);
  exports.ripemd160 = RIPEMD160;
  RIPEMD160.blockSize = 512;
  RIPEMD160.outSize = 160;
  RIPEMD160.hmacStrength = 192;
  RIPEMD160.padLength = 64;
  RIPEMD160.prototype._update = function update(msg, start) {
    var A = this.h[0];
    var B = this.h[1];
    var C = this.h[2];
    var D = this.h[3];
    var E = this.h[4];
    var Ah = A;
    var Bh = B;
    var Ch = C;
    var Dh = D;
    var Eh = E;
    for (var j = 0; j < 80; j++) {
      var T = sum32(rotl32(sum32_4(A, f(j, B, C, D), msg[r[j] + start], K(j)), s[j]), E);
      A = E;
      E = D;
      D = rotl32(C, 10);
      C = B;
      B = T;
      T = sum32(rotl32(sum32_4(Ah, f(79 - j, Bh, Ch, Dh), msg[rh[j] + start], Kh(j)), sh[j]), Eh);
      Ah = Eh;
      Eh = Dh;
      Dh = rotl32(Ch, 10);
      Ch = Bh;
      Bh = T;
    }
    T = sum32_3(this.h[1], C, Dh);
    this.h[1] = sum32_3(this.h[2], D, Eh);
    this.h[2] = sum32_3(this.h[3], E, Ah);
    this.h[3] = sum32_3(this.h[4], A, Bh);
    this.h[4] = sum32_3(this.h[0], B, Ch);
    this.h[0] = T;
  };
  RIPEMD160.prototype._digest = function digest(enc) {
    if (enc === 'hex')
      return utils.toHex32(this.h, 'little');
    else
      return utils.split32(this.h, 'little');
  };
  function f(j, x, y, z) {
    if (j <= 15)
      return x ^ y ^ z;
    else if (j <= 31)
      return (x & y) | ((~x) & z);
    else if (j <= 47)
      return (x | (~y)) ^ z;
    else if (j <= 63)
      return (x & z) | (y & (~z));
    else
      return x ^ (y | (~z));
  }
  function K(j) {
    if (j <= 15)
      return 0x00000000;
    else if (j <= 31)
      return 0x5a827999;
    else if (j <= 47)
      return 0x6ed9eba1;
    else if (j <= 63)
      return 0x8f1bbcdc;
    else
      return 0xa953fd4e;
  }
  function Kh(j) {
    if (j <= 15)
      return 0x50a28be6;
    else if (j <= 31)
      return 0x5c4dd124;
    else if (j <= 47)
      return 0x6d703ef3;
    else if (j <= 63)
      return 0x7a6d76e9;
    else
      return 0x00000000;
  }
  var r = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13];
  var rh = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11];
  var s = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6];
  var sh = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
  return module.exports;
});

$__System.registerDynamic("21", ["11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var hmac = exports;
  var hash = $__require('11');
  var utils = hash.utils;
  var assert = utils.assert;
  function Hmac(hash, key, enc) {
    if (!(this instanceof Hmac))
      return new Hmac(hash, key, enc);
    this.Hash = hash;
    this.blockSize = hash.blockSize / 8;
    this.outSize = hash.outSize / 8;
    this.inner = null;
    this.outer = null;
    this._init(utils.toArray(key, enc));
  }
  module.exports = Hmac;
  Hmac.prototype._init = function init(key) {
    if (key.length > this.blockSize)
      key = new this.Hash().update(key).digest();
    assert(key.length <= this.blockSize);
    for (var i = key.length; i < this.blockSize; i++)
      key.push(0);
    for (var i = 0; i < key.length; i++)
      key[i] ^= 0x36;
    this.inner = new this.Hash().update(key);
    for (var i = 0; i < key.length; i++)
      key[i] ^= 0x6a;
    this.outer = new this.Hash().update(key);
  };
  Hmac.prototype.update = function update(msg, enc) {
    this.inner.update(msg, enc);
    return this;
  };
  Hmac.prototype.digest = function digest(enc) {
    this.outer.update(this.inner.digest());
    return this.outer.digest(enc);
  };
  return module.exports;
});

$__System.registerDynamic("11", ["1d", "1e", "1f", "20", "21"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var hash = exports;
  hash.utils = $__require('1d');
  hash.common = $__require('1e');
  hash.sha = $__require('1f');
  hash.ripemd = $__require('20');
  hash.hmac = $__require('21');
  hash.sha1 = hash.sha.sha1;
  hash.sha256 = hash.sha.sha256;
  hash.sha224 = hash.sha.sha224;
  hash.sha384 = hash.sha.sha384;
  hash.sha512 = hash.sha.sha512;
  hash.ripemd160 = hash.ripemd.ripemd160;
  return module.exports;
});

$__System.registerDynamic("22", ["10"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var elliptic = $__require('10');
  var utils = elliptic.utils;
  var assert = utils.assert;
  var parseBytes = utils.parseBytes;
  var cachedProperty = utils.cachedProperty;
  function KeyPair(eddsa, params) {
    this.eddsa = eddsa;
    this._secret = parseBytes(params.secret);
    if (eddsa.isPoint(params.pub))
      this._pub = params.pub;
    else
      this._pubBytes = parseBytes(params.pub);
  }
  KeyPair.fromPublic = function fromPublic(eddsa, pub) {
    if (pub instanceof KeyPair)
      return pub;
    return new KeyPair(eddsa, {pub: pub});
  };
  KeyPair.fromSecret = function fromSecret(eddsa, secret) {
    if (secret instanceof KeyPair)
      return secret;
    return new KeyPair(eddsa, {secret: secret});
  };
  KeyPair.prototype.secret = function secret() {
    return this._secret;
  };
  cachedProperty(KeyPair, 'pubBytes', function pubBytes() {
    return this.eddsa.encodePoint(this.pub());
  });
  cachedProperty(KeyPair, 'pub', function pub() {
    if (this._pubBytes)
      return this.eddsa.decodePoint(this._pubBytes);
    return this.eddsa.g.mul(this.priv());
  });
  cachedProperty(KeyPair, 'privBytes', function privBytes() {
    var eddsa = this.eddsa;
    var hash = this.hash();
    var lastIx = eddsa.encodingLength - 1;
    var a = hash.slice(0, eddsa.encodingLength);
    a[0] &= 248;
    a[lastIx] &= 127;
    a[lastIx] |= 64;
    return a;
  });
  cachedProperty(KeyPair, 'priv', function priv() {
    return this.eddsa.decodeInt(this.privBytes());
  });
  cachedProperty(KeyPair, 'hash', function hash() {
    return this.eddsa.hash().update(this.secret()).digest();
  });
  cachedProperty(KeyPair, 'messagePrefix', function messagePrefix() {
    return this.hash().slice(this.eddsa.encodingLength);
  });
  KeyPair.prototype.sign = function sign(message) {
    assert(this._secret, 'KeyPair can only verify');
    return this.eddsa.sign(message, this);
  };
  KeyPair.prototype.verify = function verify(message, sig) {
    return this.eddsa.verify(message, sig, this);
  };
  KeyPair.prototype.getSecret = function getSecret(enc) {
    assert(this._secret, 'KeyPair is public only');
    return utils.encode(this.secret(), enc);
  };
  KeyPair.prototype.getPublic = function getPublic(enc) {
    return utils.encode(this.pubBytes(), enc);
  };
  module.exports = KeyPair;
  return module.exports;
});

$__System.registerDynamic("23", ["d", "10"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var BN = $__require('d');
  var elliptic = $__require('10');
  var utils = elliptic.utils;
  var assert = utils.assert;
  var cachedProperty = utils.cachedProperty;
  var parseBytes = utils.parseBytes;
  function Signature(eddsa, sig) {
    this.eddsa = eddsa;
    if (typeof sig !== 'object')
      sig = parseBytes(sig);
    if (Array.isArray(sig)) {
      sig = {
        R: sig.slice(0, eddsa.encodingLength),
        S: sig.slice(eddsa.encodingLength)
      };
    }
    assert(sig.R && sig.S, 'Signature without R or S');
    if (eddsa.isPoint(sig.R))
      this._R = sig.R;
    if (sig.S instanceof BN)
      this._S = sig.S;
    this._Rencoded = Array.isArray(sig.R) ? sig.R : sig.Rencoded;
    this._Sencoded = Array.isArray(sig.S) ? sig.S : sig.Sencoded;
  }
  cachedProperty(Signature, 'S', function S() {
    return this.eddsa.decodeInt(this.Sencoded());
  });
  cachedProperty(Signature, 'R', function R() {
    return this.eddsa.decodePoint(this.Rencoded());
  });
  cachedProperty(Signature, 'Rencoded', function Rencoded() {
    return this.eddsa.encodePoint(this.R());
  });
  cachedProperty(Signature, 'Sencoded', function Sencoded() {
    return this.eddsa.encodeInt(this.S());
  });
  Signature.prototype.toBytes = function toBytes() {
    return this.Rencoded().concat(this.Sencoded());
  };
  Signature.prototype.toHex = function toHex() {
    return utils.encode(this.toBytes(), 'hex').toUpperCase();
  };
  module.exports = Signature;
  return module.exports;
});

$__System.registerDynamic("24", ["11", "10", "22", "23"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var hash = $__require('11');
  var elliptic = $__require('10');
  var utils = elliptic.utils;
  var assert = utils.assert;
  var parseBytes = utils.parseBytes;
  var KeyPair = $__require('22');
  var Signature = $__require('23');
  function EDDSA(curve) {
    assert(curve === 'ed25519', 'only tested with ed25519 so far');
    if (!(this instanceof EDDSA))
      return new EDDSA(curve);
    var curve = elliptic.curves[curve].curve;
    this.curve = curve;
    this.g = curve.g;
    this.g.precompute(curve.n.bitLength() + 1);
    this.pointClass = curve.point().constructor;
    this.encodingLength = Math.ceil(curve.n.bitLength() / 8);
    this.hash = hash.sha512;
  }
  module.exports = EDDSA;
  EDDSA.prototype.sign = function sign(message, secret) {
    message = parseBytes(message);
    var key = this.keyFromSecret(secret);
    var r = this.hashInt(key.messagePrefix(), message);
    var R = this.g.mul(r);
    var Rencoded = this.encodePoint(R);
    var s_ = this.hashInt(Rencoded, key.pubBytes(), message).mul(key.priv());
    var S = r.add(s_).umod(this.curve.n);
    return this.makeSignature({
      R: R,
      S: S,
      Rencoded: Rencoded
    });
  };
  EDDSA.prototype.verify = function verify(message, sig, pub) {
    message = parseBytes(message);
    sig = this.makeSignature(sig);
    var key = this.keyFromPublic(pub);
    var h = this.hashInt(sig.Rencoded(), key.pubBytes(), message);
    var SG = this.g.mul(sig.S());
    var RplusAh = sig.R().add(key.pub().mul(h));
    return RplusAh.eq(SG);
  };
  EDDSA.prototype.hashInt = function hashInt() {
    var hash = this.hash();
    for (var i = 0; i < arguments.length; i++)
      hash.update(arguments[i]);
    return utils.intFromLE(hash.digest()).umod(this.curve.n);
  };
  EDDSA.prototype.keyFromPublic = function keyFromPublic(pub) {
    return KeyPair.fromPublic(this, pub);
  };
  EDDSA.prototype.keyFromSecret = function keyFromSecret(secret) {
    return KeyPair.fromSecret(this, secret);
  };
  EDDSA.prototype.makeSignature = function makeSignature(sig) {
    if (sig instanceof Signature)
      return sig;
    return new Signature(this, sig);
  };
  EDDSA.prototype.encodePoint = function encodePoint(point) {
    var enc = point.getY().toArray('le', this.encodingLength);
    enc[this.encodingLength - 1] |= point.getX().isOdd() ? 0x80 : 0;
    return enc;
  };
  EDDSA.prototype.decodePoint = function decodePoint(bytes) {
    bytes = utils.parseBytes(bytes);
    var lastIx = bytes.length - 1;
    var normed = bytes.slice(0, lastIx).concat(bytes[lastIx] & ~0x80);
    var xIsOdd = (bytes[lastIx] & 0x80) !== 0;
    var y = utils.intFromLE(normed);
    return this.curve.pointFromY(y, xIsOdd);
  };
  EDDSA.prototype.encodeInt = function encodeInt(num) {
    return num.toArray('le', this.encodingLength);
  };
  EDDSA.prototype.decodeInt = function decodeInt(bytes) {
    return utils.intFromLE(bytes);
  };
  EDDSA.prototype.isPoint = function isPoint(val) {
    return val instanceof this.pointClass;
  };
  return module.exports;
});

$__System.registerDynamic("10", ["b", "c", "e", "f", "14", "19", "1c", "24"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var elliptic = exports;
  elliptic.version = $__require('b').version;
  elliptic.utils = $__require('c');
  elliptic.rand = $__require('e');
  elliptic.hmacDRBG = $__require('f');
  elliptic.curve = $__require('14');
  elliptic.curves = $__require('19');
  elliptic.ec = $__require('1c');
  elliptic.eddsa = $__require('24');
  return module.exports;
});

$__System.registerDynamic("a", [], false, function() {
  return {
    "COMPRESSED_TYPE_INVALID": "compressed should be a boolean",
    "EC_PRIVATE_KEY_TYPE_INVALID": "private key should be a Buffer",
    "EC_PRIVATE_KEY_LENGTH_INVALID": "private key length is invalid",
    "EC_PRIVATE_KEY_TWEAK_ADD_FAIL": "tweak out of range or resulting private key is invalid",
    "EC_PRIVATE_KEY_TWEAK_MUL_FAIL": "tweak out of range",
    "EC_PRIVATE_KEY_EXPORT_DER_FAIL": "couldn't export to DER format",
    "EC_PRIVATE_KEY_IMPORT_DER_FAIL": "couldn't import from DER format",
    "EC_PUBLIC_KEYS_TYPE_INVALID": "public keys should be an Array",
    "EC_PUBLIC_KEYS_LENGTH_INVALID": "public keys Array should have at least 1 element",
    "EC_PUBLIC_KEY_TYPE_INVALID": "public key should be a Buffer",
    "EC_PUBLIC_KEY_LENGTH_INVALID": "public key length is invalid",
    "EC_PUBLIC_KEY_PARSE_FAIL": "the public key could not be parsed or is invalid",
    "EC_PUBLIC_KEY_CREATE_FAIL": "private was invalid, try again",
    "EC_PUBLIC_KEY_TWEAK_ADD_FAIL": "tweak out of range or resulting public key is invalid",
    "EC_PUBLIC_KEY_TWEAK_MUL_FAIL": "tweak out of range",
    "EC_PUBLIC_KEY_COMBINE_FAIL": "the sum of the public keys is not valid",
    "ECDH_FAIL": "scalar was invalid (zero or overflow)",
    "ECDSA_SIGNATURE_TYPE_INVALID": "signature should be a Buffer",
    "ECDSA_SIGNATURE_LENGTH_INVALID": "signature length is invalid",
    "ECDSA_SIGNATURE_PARSE_FAIL": "couldn't parse signature",
    "ECDSA_SIGNATURE_PARSE_DER_FAIL": "couldn't parse DER signature",
    "ECDSA_SIGNATURE_SERIALIZE_DER_FAIL": "couldn't serialize signature to DER format",
    "ECDSA_SIGN_FAIL": "nonce generation function failed or private key is invalid",
    "ECDSA_RECOVER_FAIL": "couldn't recover public key from signature",
    "MSG32_TYPE_INVALID": "message should be a Buffer",
    "MSG32_LENGTH_INVALID": "message length is invalid",
    "OPTIONS_TYPE_INVALID": "options should be an Object",
    "OPTIONS_DATA_TYPE_INVALID": "options.data should be a Buffer",
    "OPTIONS_DATA_LENGTH_INVALID": "options.data length is invalid",
    "OPTIONS_NONCEFN_TYPE_INVALID": "options.noncefn should be a Function",
    "RECOVERY_ID_TYPE_INVALID": "recovery should be a Number",
    "RECOVERY_ID_VALUE_INVALID": "recovery should have value between -1 and 4",
    "TWEAK_TYPE_INVALID": "tweak should be a Buffer",
    "TWEAK_LENGTH_INVALID": "tweak length is invalid"
  };
});

$__System.registerDynamic("25", ["26", "d", "10", "a", "4"], true, function($__require, exports, module) {
  "use strict";
  var Buffer = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  var createHash = $__require('26');
  var BN = $__require('d');
  var EC = $__require('10').ec;
  var messages = $__require('a');
  var ec = new EC('secp256k1');
  var ecparams = ec.curve;
  function loadCompressedPublicKey(first, xBuffer) {
    var x = new BN(xBuffer);
    if (x.cmp(ecparams.p) >= 0)
      return null;
    x = x.toRed(ecparams.red);
    var y = x.redSqr().redIMul(x).redIAdd(ecparams.b).redSqrt();
    if ((first === 0x03) !== y.isOdd())
      y = y.redNeg();
    return ec.keyPair({pub: {
        x: x,
        y: y
      }});
  }
  function loadUncompressedPublicKey(first, xBuffer, yBuffer) {
    var x = new BN(xBuffer);
    var y = new BN(yBuffer);
    if (x.cmp(ecparams.p) >= 0 || y.cmp(ecparams.p) >= 0)
      return null;
    x = x.toRed(ecparams.red);
    y = y.toRed(ecparams.red);
    if ((first === 0x06 || first === 0x07) && y.isOdd() !== (first === 0x07))
      return null;
    var x3 = x.redSqr().redIMul(x);
    if (!y.redSqr().redISub(x3.redIAdd(ecparams.b)).isZero())
      return null;
    return ec.keyPair({pub: {
        x: x,
        y: y
      }});
  }
  function loadPublicKey(publicKey) {
    var first = publicKey[0];
    switch (first) {
      case 0x02:
      case 0x03:
        if (publicKey.length !== 33)
          return null;
        return loadCompressedPublicKey(first, publicKey.slice(1, 33));
      case 0x04:
      case 0x06:
      case 0x07:
        if (publicKey.length !== 65)
          return null;
        return loadUncompressedPublicKey(first, publicKey.slice(1, 33), publicKey.slice(33, 65));
      default:
        return null;
    }
  }
  exports.privateKeyVerify = function(privateKey) {
    var bn = new BN(privateKey);
    return bn.cmp(ecparams.n) < 0 && !bn.isZero();
  };
  exports.privateKeyExport = function(privateKey, compressed) {
    var d = new BN(privateKey);
    if (d.cmp(ecparams.n) >= 0 || d.isZero())
      throw new Error(messages.EC_PRIVATE_KEY_EXPORT_DER_FAIL);
    return new Buffer(ec.keyFromPrivate(privateKey).getPublic(compressed, true));
  };
  exports.privateKeyTweakAdd = function(privateKey, tweak) {
    var bn = new BN(tweak);
    if (bn.cmp(ecparams.n) >= 0)
      throw new Error(messages.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);
    bn.iadd(new BN(privateKey));
    if (bn.cmp(ecparams.n) >= 0)
      bn.isub(ecparams.n);
    if (bn.isZero())
      throw new Error(messages.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);
    return bn.toArrayLike(Buffer, 'be', 32);
  };
  exports.privateKeyTweakMul = function(privateKey, tweak) {
    var bn = new BN(tweak);
    if (bn.cmp(ecparams.n) >= 0 || bn.isZero())
      throw new Error(messages.EC_PRIVATE_KEY_TWEAK_MUL_FAIL);
    bn.imul(new BN(privateKey));
    if (bn.cmp(ecparams.n))
      bn = bn.umod(ecparams.n);
    return bn.toArrayLike(Buffer, 'be', 32);
  };
  exports.publicKeyCreate = function(privateKey, compressed) {
    var d = new BN(privateKey);
    if (d.cmp(ecparams.n) >= 0 || d.isZero())
      throw new Error(messages.EC_PUBLIC_KEY_CREATE_FAIL);
    return new Buffer(ec.keyFromPrivate(privateKey).getPublic(compressed, true));
  };
  exports.publicKeyConvert = function(publicKey, compressed) {
    var pair = loadPublicKey(publicKey);
    if (pair === null)
      throw new Error(messages.EC_PUBLIC_KEY_PARSE_FAIL);
    return new Buffer(pair.getPublic(compressed, true));
  };
  exports.publicKeyVerify = function(publicKey) {
    return loadPublicKey(publicKey) !== null;
  };
  exports.publicKeyTweakAdd = function(publicKey, tweak, compressed) {
    var pair = loadPublicKey(publicKey);
    if (pair === null)
      throw new Error(messages.EC_PUBLIC_KEY_PARSE_FAIL);
    tweak = new BN(tweak);
    if (tweak.cmp(ecparams.n) >= 0)
      throw new Error(messages.EC_PUBLIC_KEY_TWEAK_ADD_FAIL);
    return new Buffer(ecparams.g.mul(tweak).add(pair.pub).encode(true, compressed));
  };
  exports.publicKeyTweakMul = function(publicKey, tweak, compressed) {
    var pair = loadPublicKey(publicKey);
    if (pair === null)
      throw new Error(messages.EC_PUBLIC_KEY_PARSE_FAIL);
    tweak = new BN(tweak);
    if (tweak.cmp(ecparams.n) >= 0 || tweak.isZero())
      throw new Error(messages.EC_PUBLIC_KEY_TWEAK_MUL_FAIL);
    return new Buffer(pair.pub.mul(tweak).encode(true, compressed));
  };
  exports.publicKeyCombine = function(publicKeys, compressed) {
    var pairs = new Array(publicKeys.length);
    for (var i = 0; i < publicKeys.length; ++i) {
      pairs[i] = loadPublicKey(publicKeys[i]);
      if (pairs[i] === null)
        throw new Error(messages.EC_PUBLIC_KEY_PARSE_FAIL);
    }
    var point = pairs[0].pub;
    for (var j = 1; j < pairs.length; ++j)
      point = point.add(pairs[j].pub);
    if (point.isInfinity())
      throw new Error(messages.EC_PUBLIC_KEY_COMBINE_FAIL);
    return new Buffer(point.encode(true, compressed));
  };
  exports.signatureNormalize = function(signature) {
    var r = new BN(signature.slice(0, 32));
    var s = new BN(signature.slice(32, 64));
    if (r.cmp(ecparams.n) >= 0 || s.cmp(ecparams.n) >= 0)
      throw new Error(messages.ECDSA_SIGNATURE_PARSE_FAIL);
    var result = new Buffer(signature);
    if (s.cmp(ec.nh) === 1)
      ecparams.n.sub(s).toArrayLike(Buffer, 'be', 32).copy(result, 32);
    return result;
  };
  exports.signatureExport = function(signature) {
    var r = signature.slice(0, 32);
    var s = signature.slice(32, 64);
    if (new BN(r).cmp(ecparams.n) >= 0 || new BN(s).cmp(ecparams.n) >= 0)
      throw new Error(messages.ECDSA_SIGNATURE_PARSE_FAIL);
    return {
      r: r,
      s: s
    };
  };
  exports.signatureImport = function(sigObj) {
    var r = new BN(sigObj.r);
    if (r.cmp(ecparams.n) >= 0)
      r = new BN(0);
    var s = new BN(sigObj.s);
    if (s.cmp(ecparams.n) >= 0)
      s = new BN(0);
    return Buffer.concat([r.toArrayLike(Buffer, 'be', 32), s.toArrayLike(Buffer, 'be', 32)]);
  };
  exports.sign = function(message, privateKey, noncefn, data) {
    if (typeof noncefn === 'function') {
      var getNonce = noncefn;
      noncefn = function(counter) {
        var nonce = getNonce(message, privateKey, null, data, counter);
        if (!Buffer.isBuffer(nonce) || nonce.length !== 32)
          throw new Error(messages.ECDSA_SIGN_FAIL);
        return new BN(nonce);
      };
    }
    var d = new BN(privateKey);
    if (d.cmp(ecparams.n) >= 0 || d.isZero())
      throw new Error(messages.ECDSA_SIGN_FAIL);
    var result = ec.sign(message, privateKey, {
      canonical: true,
      k: noncefn,
      pers: data
    });
    return {
      signature: Buffer.concat([result.r.toArrayLike(Buffer, 'be', 32), result.s.toArrayLike(Buffer, 'be', 32)]),
      recovery: result.recoveryParam
    };
  };
  exports.verify = function(message, signature, publicKey) {
    var sigObj = {
      r: signature.slice(0, 32),
      s: signature.slice(32, 64)
    };
    var sigr = new BN(sigObj.r);
    var sigs = new BN(sigObj.s);
    if (sigr.cmp(ecparams.n) >= 0 || sigs.cmp(ecparams.n) >= 0)
      throw new Error(messages.ECDSA_SIGNATURE_PARSE_FAIL);
    if (sigs.cmp(ec.nh) === 1 || sigr.isZero() || sigs.isZero())
      return false;
    var pair = loadPublicKey(publicKey);
    if (pair === null)
      throw new Error(messages.EC_PUBLIC_KEY_PARSE_FAIL);
    return ec.verify(message, sigObj, {
      x: pair.pub.x,
      y: pair.pub.y
    });
  };
  exports.recover = function(message, signature, recovery, compressed) {
    var sigObj = {
      r: signature.slice(0, 32),
      s: signature.slice(32, 64)
    };
    var sigr = new BN(sigObj.r);
    var sigs = new BN(sigObj.s);
    if (sigr.cmp(ecparams.n) >= 0 || sigs.cmp(ecparams.n) >= 0)
      throw new Error(messages.ECDSA_SIGNATURE_PARSE_FAIL);
    try {
      if (sigr.isZero() || sigs.isZero())
        throw new Error();
      var point = ec.recoverPubKey(message, sigObj, recovery);
      return new Buffer(point.encode(true, compressed));
    } catch (err) {
      throw new Error(messages.ECDSA_RECOVER_FAIL);
    }
  };
  exports.ecdh = function(publicKey, privateKey) {
    var shared = exports.ecdhUnsafe(publicKey, privateKey, true);
    return createHash('sha256').update(shared).digest();
  };
  exports.ecdhUnsafe = function(publicKey, privateKey, compressed) {
    var pair = loadPublicKey(publicKey);
    if (pair === null)
      throw new Error(messages.EC_PUBLIC_KEY_PARSE_FAIL);
    var scalar = new BN(privateKey);
    if (scalar.cmp(ecparams.n) >= 0 || scalar.isZero())
      throw new Error(messages.ECDH_FAIL);
    return new Buffer(pair.pub.mul(scalar).encode(true, compressed));
  };
  return module.exports;
});

$__System.registerDynamic("27", ["9", "25"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require('9')($__require('25'));
  return module.exports;
});

$__System.registerDynamic("28", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function isBuffer(arg) {
    return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
  };
  return module.exports;
});

$__System.registerDynamic("29", ["2a", "28"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var process = $__require('2a');
  var formatRegExp = /%[sdj%]/g;
  exports.format = function(f) {
    if (!isString(f)) {
      var objects = [];
      for (var i = 0; i < arguments.length; i++) {
        objects.push(inspect(arguments[i]));
      }
      return objects.join(' ');
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function(x) {
      if (x === '%%')
        return '%';
      if (i >= len)
        return x;
      switch (x) {
        case '%s':
          return String(args[i++]);
        case '%d':
          return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
        default:
          return x;
      }
    });
    for (var x = args[i]; i < len; x = args[++i]) {
      if (isNull(x) || !isObject(x)) {
        str += ' ' + x;
      } else {
        str += ' ' + inspect(x);
      }
    }
    return str;
  };
  exports.deprecate = function(fn, msg) {
    if (isUndefined(global.process)) {
      return function() {
        return exports.deprecate(fn, msg).apply(this, arguments);
      };
    }
    if (process.noDeprecation === true) {
      return fn;
    }
    var warned = false;
    function deprecated() {
      if (!warned) {
        if (process.throwDeprecation) {
          throw new Error(msg);
        } else if (process.traceDeprecation) {
          console.trace(msg);
        } else {
          console.error(msg);
        }
        warned = true;
      }
      return fn.apply(this, arguments);
    }
    return deprecated;
  };
  var debugs = {};
  var debugEnviron;
  exports.debuglog = function(set) {
    if (isUndefined(debugEnviron))
      debugEnviron = process.env.NODE_DEBUG || '';
    set = set.toUpperCase();
    if (!debugs[set]) {
      if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
        var pid = process.pid;
        debugs[set] = function() {
          var msg = exports.format.apply(exports, arguments);
          console.error('%s %d: %s', set, pid, msg);
        };
      } else {
        debugs[set] = function() {};
      }
    }
    return debugs[set];
  };
  function inspect(obj, opts) {
    var ctx = {
      seen: [],
      stylize: stylizeNoColor
    };
    if (arguments.length >= 3)
      ctx.depth = arguments[2];
    if (arguments.length >= 4)
      ctx.colors = arguments[3];
    if (isBoolean(opts)) {
      ctx.showHidden = opts;
    } else if (opts) {
      exports._extend(ctx, opts);
    }
    if (isUndefined(ctx.showHidden))
      ctx.showHidden = false;
    if (isUndefined(ctx.depth))
      ctx.depth = 2;
    if (isUndefined(ctx.colors))
      ctx.colors = false;
    if (isUndefined(ctx.customInspect))
      ctx.customInspect = true;
    if (ctx.colors)
      ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
  }
  exports.inspect = inspect;
  inspect.colors = {
    'bold': [1, 22],
    'italic': [3, 23],
    'underline': [4, 24],
    'inverse': [7, 27],
    'white': [37, 39],
    'grey': [90, 39],
    'black': [30, 39],
    'blue': [34, 39],
    'cyan': [36, 39],
    'green': [32, 39],
    'magenta': [35, 39],
    'red': [31, 39],
    'yellow': [33, 39]
  };
  inspect.styles = {
    'special': 'cyan',
    'number': 'yellow',
    'boolean': 'yellow',
    'undefined': 'grey',
    'null': 'bold',
    'string': 'green',
    'date': 'magenta',
    'regexp': 'red'
  };
  function stylizeWithColor(str, styleType) {
    var style = inspect.styles[styleType];
    if (style) {
      return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
    } else {
      return str;
    }
  }
  function stylizeNoColor(str, styleType) {
    return str;
  }
  function arrayToHash(array) {
    var hash = {};
    array.forEach(function(val, idx) {
      hash[val] = true;
    });
    return hash;
  }
  function formatValue(ctx, value, recurseTimes) {
    if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
      var ret = value.inspect(recurseTimes, ctx);
      if (!isString(ret)) {
        ret = formatValue(ctx, ret, recurseTimes);
      }
      return ret;
    }
    var primitive = formatPrimitive(ctx, value);
    if (primitive) {
      return primitive;
    }
    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);
    if (ctx.showHidden) {
      keys = Object.getOwnPropertyNames(value);
    }
    if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
      return formatError(value);
    }
    if (keys.length === 0) {
      if (isFunction(value)) {
        var name = value.name ? ': ' + value.name : '';
        return ctx.stylize('[Function' + name + ']', 'special');
      }
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
      }
      if (isDate(value)) {
        return ctx.stylize(Date.prototype.toString.call(value), 'date');
      }
      if (isError(value)) {
        return formatError(value);
      }
    }
    var base = '',
        array = false,
        braces = ['{', '}'];
    if (isArray(value)) {
      array = true;
      braces = ['[', ']'];
    }
    if (isFunction(value)) {
      var n = value.name ? ': ' + value.name : '';
      base = ' [Function' + n + ']';
    }
    if (isRegExp(value)) {
      base = ' ' + RegExp.prototype.toString.call(value);
    }
    if (isDate(value)) {
      base = ' ' + Date.prototype.toUTCString.call(value);
    }
    if (isError(value)) {
      base = ' ' + formatError(value);
    }
    if (keys.length === 0 && (!array || value.length == 0)) {
      return braces[0] + base + braces[1];
    }
    if (recurseTimes < 0) {
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
      } else {
        return ctx.stylize('[Object]', 'special');
      }
    }
    ctx.seen.push(value);
    var output;
    if (array) {
      output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    } else {
      output = keys.map(function(key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
      });
    }
    ctx.seen.pop();
    return reduceToSingleString(output, base, braces);
  }
  function formatPrimitive(ctx, value) {
    if (isUndefined(value))
      return ctx.stylize('undefined', 'undefined');
    if (isString(value)) {
      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
      return ctx.stylize(simple, 'string');
    }
    if (isNumber(value))
      return ctx.stylize('' + value, 'number');
    if (isBoolean(value))
      return ctx.stylize('' + value, 'boolean');
    if (isNull(value))
      return ctx.stylize('null', 'null');
  }
  function formatError(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
  }
  function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for (var i = 0,
        l = value.length; i < l; ++i) {
      if (hasOwnProperty(value, String(i))) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
      } else {
        output.push('');
      }
    }
    keys.forEach(function(key) {
      if (!key.match(/^\d+$/)) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
      }
    });
    return output;
  }
  function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name,
        str,
        desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || {value: value[key]};
    if (desc.get) {
      if (desc.set) {
        str = ctx.stylize('[Getter/Setter]', 'special');
      } else {
        str = ctx.stylize('[Getter]', 'special');
      }
    } else {
      if (desc.set) {
        str = ctx.stylize('[Setter]', 'special');
      }
    }
    if (!hasOwnProperty(visibleKeys, key)) {
      name = '[' + key + ']';
    }
    if (!str) {
      if (ctx.seen.indexOf(desc.value) < 0) {
        if (isNull(recurseTimes)) {
          str = formatValue(ctx, desc.value, null);
        } else {
          str = formatValue(ctx, desc.value, recurseTimes - 1);
        }
        if (str.indexOf('\n') > -1) {
          if (array) {
            str = str.split('\n').map(function(line) {
              return '  ' + line;
            }).join('\n').substr(2);
          } else {
            str = '\n' + str.split('\n').map(function(line) {
              return '   ' + line;
            }).join('\n');
          }
        }
      } else {
        str = ctx.stylize('[Circular]', 'special');
      }
    }
    if (isUndefined(name)) {
      if (array && key.match(/^\d+$/)) {
        return str;
      }
      name = JSON.stringify('' + key);
      if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
        name = name.substr(1, name.length - 2);
        name = ctx.stylize(name, 'name');
      } else {
        name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
        name = ctx.stylize(name, 'string');
      }
    }
    return name + ': ' + str;
  }
  function reduceToSingleString(output, base, braces) {
    var numLinesEst = 0;
    var length = output.reduce(function(prev, cur) {
      numLinesEst++;
      if (cur.indexOf('\n') >= 0)
        numLinesEst++;
      return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
    }, 0);
    if (length > 60) {
      return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
    }
    return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
  }
  function isArray(ar) {
    return Array.isArray(ar);
  }
  exports.isArray = isArray;
  function isBoolean(arg) {
    return typeof arg === 'boolean';
  }
  exports.isBoolean = isBoolean;
  function isNull(arg) {
    return arg === null;
  }
  exports.isNull = isNull;
  function isNullOrUndefined(arg) {
    return arg == null;
  }
  exports.isNullOrUndefined = isNullOrUndefined;
  function isNumber(arg) {
    return typeof arg === 'number';
  }
  exports.isNumber = isNumber;
  function isString(arg) {
    return typeof arg === 'string';
  }
  exports.isString = isString;
  function isSymbol(arg) {
    return typeof arg === 'symbol';
  }
  exports.isSymbol = isSymbol;
  function isUndefined(arg) {
    return arg === void 0;
  }
  exports.isUndefined = isUndefined;
  function isRegExp(re) {
    return isObject(re) && objectToString(re) === '[object RegExp]';
  }
  exports.isRegExp = isRegExp;
  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }
  exports.isObject = isObject;
  function isDate(d) {
    return isObject(d) && objectToString(d) === '[object Date]';
  }
  exports.isDate = isDate;
  function isError(e) {
    return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
  }
  exports.isError = isError;
  function isFunction(arg) {
    return typeof arg === 'function';
  }
  exports.isFunction = isFunction;
  function isPrimitive(arg) {
    return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
  }
  exports.isPrimitive = isPrimitive;
  exports.isBuffer = $__require('28');
  function objectToString(o) {
    return Object.prototype.toString.call(o);
  }
  function pad(n) {
    return n < 10 ? '0' + n.toString(10) : n.toString(10);
  }
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function timestamp() {
    var d = new Date();
    var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
    return [d.getDate(), months[d.getMonth()], time].join(' ');
  }
  exports.log = function() {
    console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
  };
  if (typeof Object.create === 'function') {
    exports.inherits = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }});
    };
  } else {
    exports.inherits = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function() {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    };
  }
  exports._extend = function(origin, add) {
    if (!add || !isObject(add))
      return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while (i--) {
      origin[keys[i]] = add[keys[i]];
    }
    return origin;
  };
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  return module.exports;
});

$__System.registerDynamic("2b", ["29"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var util = $__require('29');
  var pSlice = Array.prototype.slice;
  var hasOwn = Object.prototype.hasOwnProperty;
  var assert = module.exports = ok;
  assert.AssertionError = function AssertionError(options) {
    this.name = 'AssertionError';
    this.actual = options.actual;
    this.expected = options.expected;
    this.operator = options.operator;
    if (options.message) {
      this.message = options.message;
      this.generatedMessage = false;
    } else {
      this.message = getMessage(this);
      this.generatedMessage = true;
    }
    var stackStartFunction = options.stackStartFunction || fail;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, stackStartFunction);
    } else {
      var err = new Error();
      if (err.stack) {
        var out = err.stack;
        var fn_name = stackStartFunction.name;
        var idx = out.indexOf('\n' + fn_name);
        if (idx >= 0) {
          var next_line = out.indexOf('\n', idx + 1);
          out = out.substring(next_line + 1);
        }
        this.stack = out;
      }
    }
  };
  util.inherits(assert.AssertionError, Error);
  function replacer(key, value) {
    if (util.isUndefined(value)) {
      return '' + value;
    }
    if (util.isNumber(value) && !isFinite(value)) {
      return value.toString();
    }
    if (util.isFunction(value) || util.isRegExp(value)) {
      return value.toString();
    }
    return value;
  }
  function truncate(s, n) {
    if (util.isString(s)) {
      return s.length < n ? s : s.slice(0, n);
    } else {
      return s;
    }
  }
  function getMessage(self) {
    return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' + self.operator + ' ' + truncate(JSON.stringify(self.expected, replacer), 128);
  }
  function fail(actual, expected, message, operator, stackStartFunction) {
    throw new assert.AssertionError({
      message: message,
      actual: actual,
      expected: expected,
      operator: operator,
      stackStartFunction: stackStartFunction
    });
  }
  assert.fail = fail;
  function ok(value, message) {
    if (!value)
      fail(value, true, message, '==', assert.ok);
  }
  assert.ok = ok;
  assert.equal = function equal(actual, expected, message) {
    if (actual != expected)
      fail(actual, expected, message, '==', assert.equal);
  };
  assert.notEqual = function notEqual(actual, expected, message) {
    if (actual == expected) {
      fail(actual, expected, message, '!=', assert.notEqual);
    }
  };
  assert.deepEqual = function deepEqual(actual, expected, message) {
    if (!_deepEqual(actual, expected)) {
      fail(actual, expected, message, 'deepEqual', assert.deepEqual);
    }
  };
  function _deepEqual(actual, expected) {
    if (actual === expected) {
      return true;
    } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
      if (actual.length != expected.length)
        return false;
      for (var i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i])
          return false;
      }
      return true;
    } else if (util.isDate(actual) && util.isDate(expected)) {
      return actual.getTime() === expected.getTime();
    } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
      return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase;
    } else if (!util.isObject(actual) && !util.isObject(expected)) {
      return actual == expected;
    } else {
      return objEquiv(actual, expected);
    }
  }
  function isArguments(object) {
    return Object.prototype.toString.call(object) == '[object Arguments]';
  }
  function objEquiv(a, b) {
    if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b))
      return false;
    if (a.prototype !== b.prototype)
      return false;
    if (util.isPrimitive(a) || util.isPrimitive(b)) {
      return a === b;
    }
    var aIsArgs = isArguments(a),
        bIsArgs = isArguments(b);
    if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
      return false;
    if (aIsArgs) {
      a = pSlice.call(a);
      b = pSlice.call(b);
      return _deepEqual(a, b);
    }
    var ka = objectKeys(a),
        kb = objectKeys(b),
        key,
        i;
    if (ka.length != kb.length)
      return false;
    ka.sort();
    kb.sort();
    for (i = ka.length - 1; i >= 0; i--) {
      if (ka[i] != kb[i])
        return false;
    }
    for (i = ka.length - 1; i >= 0; i--) {
      key = ka[i];
      if (!_deepEqual(a[key], b[key]))
        return false;
    }
    return true;
  }
  assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
    if (_deepEqual(actual, expected)) {
      fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
    }
  };
  assert.strictEqual = function strictEqual(actual, expected, message) {
    if (actual !== expected) {
      fail(actual, expected, message, '===', assert.strictEqual);
    }
  };
  assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
    if (actual === expected) {
      fail(actual, expected, message, '!==', assert.notStrictEqual);
    }
  };
  function expectedException(actual, expected) {
    if (!actual || !expected) {
      return false;
    }
    if (Object.prototype.toString.call(expected) == '[object RegExp]') {
      return expected.test(actual);
    } else if (actual instanceof expected) {
      return true;
    } else if (expected.call({}, actual) === true) {
      return true;
    }
    return false;
  }
  function _throws(shouldThrow, block, expected, message) {
    var actual;
    if (util.isString(expected)) {
      message = expected;
      expected = null;
    }
    try {
      block();
    } catch (e) {
      actual = e;
    }
    message = (expected && expected.name ? ' (' + expected.name + ').' : '.') + (message ? ' ' + message : '.');
    if (shouldThrow && !actual) {
      fail(actual, expected, 'Missing expected exception' + message);
    }
    if (!shouldThrow && expectedException(actual, expected)) {
      fail(actual, expected, 'Got unwanted exception' + message);
    }
    if ((shouldThrow && actual && expected && !expectedException(actual, expected)) || (!shouldThrow && actual)) {
      throw actual;
    }
  }
  assert.throws = function(block, error, message) {
    _throws.apply(this, [true].concat(pSlice.call(arguments)));
  };
  assert.doesNotThrow = function(block, message) {
    _throws.apply(this, [false].concat(pSlice.call(arguments)));
  };
  assert.ifError = function(err) {
    if (err) {
      throw err;
    }
  };
  var objectKeys = Object.keys || function(obj) {
    var keys = [];
    for (var key in obj) {
      if (hasOwn.call(obj, key))
        keys.push(key);
    }
    return keys;
  };
  return module.exports;
});

$__System.registerDynamic("2c", ["2b", "4"], true, function($__require, exports, module) {
  var Buffer = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  const assert = $__require('2b');
  exports.encode = function(input) {
    if (input instanceof Array) {
      var output = [];
      for (var i = 0; i < input.length; i++) {
        output.push(exports.encode(input[i]));
      }
      var buf = Buffer.concat(output);
      return Buffer.concat([encodeLength(buf.length, 192), buf]);
    } else {
      input = toBuffer(input);
      if (input.length === 1 && input[0] < 128) {
        return input;
      } else {
        return Buffer.concat([encodeLength(input.length, 128), input]);
      }
    }
  };
  function safeParseInt(v, base) {
    if (v.slice(0, 2) === '00') {
      throw (new Error('invalid RLP: extra zeros'));
    }
    return parseInt(v, base);
  }
  function encodeLength(len, offset) {
    if (len < 56) {
      return new Buffer([len + offset]);
    } else {
      var hexLength = intToHex(len);
      var lLength = hexLength.length / 2;
      var firstByte = intToHex(offset + 55 + lLength);
      return new Buffer(firstByte + hexLength, 'hex');
    }
  }
  exports.decode = function(input, stream) {
    if (!input || input.length === 0) {
      return new Buffer([]);
    }
    input = toBuffer(input);
    var decoded = _decode(input);
    if (stream) {
      return decoded;
    }
    assert.equal(decoded.remainder.length, 0, 'invalid remainder');
    return decoded.data;
  };
  exports.getLength = function(input) {
    if (!input || input.length === 0) {
      return new Buffer([]);
    }
    input = toBuffer(input);
    var firstByte = input[0];
    if (firstByte <= 0x7f) {
      return input.length;
    } else if (firstByte <= 0xb7) {
      return firstByte - 0x7f;
    } else if (firstByte <= 0xbf) {
      return firstByte - 0xb6;
    } else if (firstByte <= 0xf7) {
      return firstByte - 0xbf;
    } else {
      var llength = firstByte - 0xf6;
      var length = safeParseInt(input.slice(1, llength).toString('hex'), 16);
      return llength + length;
    }
  };
  function _decode(input) {
    var length,
        llength,
        data,
        innerRemainder,
        d;
    var decoded = [];
    var firstByte = input[0];
    if (firstByte <= 0x7f) {
      return {
        data: input.slice(0, 1),
        remainder: input.slice(1)
      };
    } else if (firstByte <= 0xb7) {
      length = firstByte - 0x7f;
      if (firstByte === 0x80) {
        data = new Buffer([]);
      } else {
        data = input.slice(1, length);
      }
      if (length === 2 && data[0] < 0x80) {
        throw new Error('invalid rlp encoding: byte must be less 0x80');
      }
      return {
        data: data,
        remainder: input.slice(length)
      };
    } else if (firstByte <= 0xbf) {
      llength = firstByte - 0xb6;
      length = safeParseInt(input.slice(1, llength).toString('hex'), 16);
      data = input.slice(llength, length + llength);
      if (data.length < length) {
        throw (new Error('invalid RLP'));
      }
      return {
        data: data,
        remainder: input.slice(length + llength)
      };
    } else if (firstByte <= 0xf7) {
      length = firstByte - 0xbf;
      innerRemainder = input.slice(1, length);
      while (innerRemainder.length) {
        d = _decode(innerRemainder);
        decoded.push(d.data);
        innerRemainder = d.remainder;
      }
      return {
        data: decoded,
        remainder: input.slice(length)
      };
    } else {
      llength = firstByte - 0xf6;
      length = safeParseInt(input.slice(1, llength).toString('hex'), 16);
      var totalLength = llength + length;
      if (totalLength > input.length) {
        throw new Error('invalid rlp: total length is larger than the data');
      }
      innerRemainder = input.slice(llength, totalLength);
      if (innerRemainder.length === 0) {
        throw new Error('invalid rlp, List has a invalid length');
      }
      while (innerRemainder.length) {
        d = _decode(innerRemainder);
        decoded.push(d.data);
        innerRemainder = d.remainder;
      }
      return {
        data: decoded,
        remainder: input.slice(totalLength)
      };
    }
  }
  function isHexPrefixed(str) {
    return str.slice(0, 2) === '0x';
  }
  function stripHexPrefix(str) {
    if (typeof str !== 'string') {
      return str;
    }
    return isHexPrefixed(str) ? str.slice(2) : str;
  }
  function intToHex(i) {
    var hex = i.toString(16);
    if (hex.length % 2) {
      hex = '0' + hex;
    }
    return hex;
  }
  function padToEven(a) {
    if (a.length % 2)
      a = '0' + a;
    return a;
  }
  function intToBuffer(i) {
    var hex = intToHex(i);
    return new Buffer(hex, 'hex');
  }
  function toBuffer(v) {
    if (!Buffer.isBuffer(v)) {
      if (typeof v === 'string') {
        if (isHexPrefixed(v)) {
          v = new Buffer(padToEven(stripHexPrefix(v)), 'hex');
        } else {
          v = new Buffer(v);
        }
      } else if (typeof v === 'number') {
        if (!v) {
          v = new Buffer([]);
        } else {
          v = intToBuffer(v);
        }
      } else if (v === null || v === undefined) {
        v = new Buffer([]);
      } else if (v.toArray) {
        v = new Buffer(v.toArray());
      } else {
        throw new Error('invalid type');
      }
    }
    return v;
  }
  return module.exports;
});

$__System.registerDynamic("d", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  (function(module, exports) {
    'use strict';
    function assert(val, msg) {
      if (!val)
        throw new Error(msg || 'Assertion failed');
    }
    function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function() {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
    function BN(number, base, endian) {
      if (BN.isBN(number)) {
        return number;
      }
      this.negative = 0;
      this.words = null;
      this.length = 0;
      this.red = null;
      if (number !== null) {
        if (base === 'le' || base === 'be') {
          endian = base;
          base = 10;
        }
        this._init(number || 0, base || 10, endian || 'be');
      }
    }
    if (typeof module === 'object') {
      module.exports = BN;
    } else {
      exports.BN = BN;
    }
    BN.BN = BN;
    BN.wordSize = 26;
    var Buffer;
    try {
      Buffer = $__require('buf' + 'fer').Buffer;
    } catch (e) {}
    BN.isBN = function isBN(num) {
      if (num instanceof BN) {
        return true;
      }
      return num !== null && typeof num === 'object' && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
    };
    BN.max = function max(left, right) {
      if (left.cmp(right) > 0)
        return left;
      return right;
    };
    BN.min = function min(left, right) {
      if (left.cmp(right) < 0)
        return left;
      return right;
    };
    BN.prototype._init = function init(number, base, endian) {
      if (typeof number === 'number') {
        return this._initNumber(number, base, endian);
      }
      if (typeof number === 'object') {
        return this._initArray(number, base, endian);
      }
      if (base === 'hex') {
        base = 16;
      }
      assert(base === (base | 0) && base >= 2 && base <= 36);
      number = number.toString().replace(/\s+/g, '');
      var start = 0;
      if (number[0] === '-') {
        start++;
      }
      if (base === 16) {
        this._parseHex(number, start);
      } else {
        this._parseBase(number, base, start);
      }
      if (number[0] === '-') {
        this.negative = 1;
      }
      this.strip();
      if (endian !== 'le')
        return;
      this._initArray(this.toArray(), base, endian);
    };
    BN.prototype._initNumber = function _initNumber(number, base, endian) {
      if (number < 0) {
        this.negative = 1;
        number = -number;
      }
      if (number < 0x4000000) {
        this.words = [number & 0x3ffffff];
        this.length = 1;
      } else if (number < 0x10000000000000) {
        this.words = [number & 0x3ffffff, (number / 0x4000000) & 0x3ffffff];
        this.length = 2;
      } else {
        assert(number < 0x20000000000000);
        this.words = [number & 0x3ffffff, (number / 0x4000000) & 0x3ffffff, 1];
        this.length = 3;
      }
      if (endian !== 'le')
        return;
      this._initArray(this.toArray(), base, endian);
    };
    BN.prototype._initArray = function _initArray(number, base, endian) {
      assert(typeof number.length === 'number');
      if (number.length <= 0) {
        this.words = [0];
        this.length = 1;
        return this;
      }
      this.length = Math.ceil(number.length / 3);
      this.words = new Array(this.length);
      for (var i = 0; i < this.length; i++) {
        this.words[i] = 0;
      }
      var j,
          w;
      var off = 0;
      if (endian === 'be') {
        for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
          w = number[i] | (number[i - 1] << 8) | (number[i - 2] << 16);
          this.words[j] |= (w << off) & 0x3ffffff;
          this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
          off += 24;
          if (off >= 26) {
            off -= 26;
            j++;
          }
        }
      } else if (endian === 'le') {
        for (i = 0, j = 0; i < number.length; i += 3) {
          w = number[i] | (number[i + 1] << 8) | (number[i + 2] << 16);
          this.words[j] |= (w << off) & 0x3ffffff;
          this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
          off += 24;
          if (off >= 26) {
            off -= 26;
            j++;
          }
        }
      }
      return this.strip();
    };
    function parseHex(str, start, end) {
      var r = 0;
      var len = Math.min(str.length, end);
      for (var i = start; i < len; i++) {
        var c = str.charCodeAt(i) - 48;
        r <<= 4;
        if (c >= 49 && c <= 54) {
          r |= c - 49 + 0xa;
        } else if (c >= 17 && c <= 22) {
          r |= c - 17 + 0xa;
        } else {
          r |= c & 0xf;
        }
      }
      return r;
    }
    BN.prototype._parseHex = function _parseHex(number, start) {
      this.length = Math.ceil((number.length - start) / 6);
      this.words = new Array(this.length);
      for (var i = 0; i < this.length; i++) {
        this.words[i] = 0;
      }
      var j,
          w;
      var off = 0;
      for (i = number.length - 6, j = 0; i >= start; i -= 6) {
        w = parseHex(number, i, i + 6);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] |= w >>> (26 - off) & 0x3fffff;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
      if (i + 6 !== start) {
        w = parseHex(number, start, i + 6);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] |= w >>> (26 - off) & 0x3fffff;
      }
      this.strip();
    };
    function parseBase(str, start, end, mul) {
      var r = 0;
      var len = Math.min(str.length, end);
      for (var i = start; i < len; i++) {
        var c = str.charCodeAt(i) - 48;
        r *= mul;
        if (c >= 49) {
          r += c - 49 + 0xa;
        } else if (c >= 17) {
          r += c - 17 + 0xa;
        } else {
          r += c;
        }
      }
      return r;
    }
    BN.prototype._parseBase = function _parseBase(number, base, start) {
      this.words = [0];
      this.length = 1;
      for (var limbLen = 0,
          limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base) {
        limbLen++;
      }
      limbLen--;
      limbPow = (limbPow / base) | 0;
      var total = number.length - start;
      var mod = total % limbLen;
      var end = Math.min(total, total - mod) + start;
      var word = 0;
      for (var i = start; i < end; i += limbLen) {
        word = parseBase(number, i, i + limbLen, base);
        this.imuln(limbPow);
        if (this.words[0] + word < 0x4000000) {
          this.words[0] += word;
        } else {
          this._iaddn(word);
        }
      }
      if (mod !== 0) {
        var pow = 1;
        word = parseBase(number, i, number.length, base);
        for (i = 0; i < mod; i++) {
          pow *= base;
        }
        this.imuln(pow);
        if (this.words[0] + word < 0x4000000) {
          this.words[0] += word;
        } else {
          this._iaddn(word);
        }
      }
    };
    BN.prototype.copy = function copy(dest) {
      dest.words = new Array(this.length);
      for (var i = 0; i < this.length; i++) {
        dest.words[i] = this.words[i];
      }
      dest.length = this.length;
      dest.negative = this.negative;
      dest.red = this.red;
    };
    BN.prototype.clone = function clone() {
      var r = new BN(null);
      this.copy(r);
      return r;
    };
    BN.prototype._expand = function _expand(size) {
      while (this.length < size) {
        this.words[this.length++] = 0;
      }
      return this;
    };
    BN.prototype.strip = function strip() {
      while (this.length > 1 && this.words[this.length - 1] === 0) {
        this.length--;
      }
      return this._normSign();
    };
    BN.prototype._normSign = function _normSign() {
      if (this.length === 1 && this.words[0] === 0) {
        this.negative = 0;
      }
      return this;
    };
    BN.prototype.inspect = function inspect() {
      return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
    };
    var zeros = ['', '0', '00', '000', '0000', '00000', '000000', '0000000', '00000000', '000000000', '0000000000', '00000000000', '000000000000', '0000000000000', '00000000000000', '000000000000000', '0000000000000000', '00000000000000000', '000000000000000000', '0000000000000000000', '00000000000000000000', '000000000000000000000', '0000000000000000000000', '00000000000000000000000', '000000000000000000000000', '0000000000000000000000000'];
    var groupSizes = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
    var groupBases = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    BN.prototype.toString = function toString(base, padding) {
      base = base || 10;
      padding = padding | 0 || 1;
      var out;
      if (base === 16 || base === 'hex') {
        out = '';
        var off = 0;
        var carry = 0;
        for (var i = 0; i < this.length; i++) {
          var w = this.words[i];
          var word = (((w << off) | carry) & 0xffffff).toString(16);
          carry = (w >>> (24 - off)) & 0xffffff;
          if (carry !== 0 || i !== this.length - 1) {
            out = zeros[6 - word.length] + word + out;
          } else {
            out = word + out;
          }
          off += 2;
          if (off >= 26) {
            off -= 26;
            i--;
          }
        }
        if (carry !== 0) {
          out = carry.toString(16) + out;
        }
        while (out.length % padding !== 0) {
          out = '0' + out;
        }
        if (this.negative !== 0) {
          out = '-' + out;
        }
        return out;
      }
      if (base === (base | 0) && base >= 2 && base <= 36) {
        var groupSize = groupSizes[base];
        var groupBase = groupBases[base];
        out = '';
        var c = this.clone();
        c.negative = 0;
        while (!c.isZero()) {
          var r = c.modn(groupBase).toString(base);
          c = c.idivn(groupBase);
          if (!c.isZero()) {
            out = zeros[groupSize - r.length] + r + out;
          } else {
            out = r + out;
          }
        }
        if (this.isZero()) {
          out = '0' + out;
        }
        while (out.length % padding !== 0) {
          out = '0' + out;
        }
        if (this.negative !== 0) {
          out = '-' + out;
        }
        return out;
      }
      assert(false, 'Base should be between 2 and 36');
    };
    BN.prototype.toNumber = function toNumber() {
      var ret = this.words[0];
      if (this.length === 2) {
        ret += this.words[1] * 0x4000000;
      } else if (this.length === 3 && this.words[2] === 0x01) {
        ret += 0x10000000000000 + (this.words[1] * 0x4000000);
      } else if (this.length > 2) {
        assert(false, 'Number can only safely store up to 53 bits');
      }
      return (this.negative !== 0) ? -ret : ret;
    };
    BN.prototype.toJSON = function toJSON() {
      return this.toString(16);
    };
    BN.prototype.toBuffer = function toBuffer(endian, length) {
      assert(typeof Buffer !== 'undefined');
      return this.toArrayLike(Buffer, endian, length);
    };
    BN.prototype.toArray = function toArray(endian, length) {
      return this.toArrayLike(Array, endian, length);
    };
    BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
      var byteLength = this.byteLength();
      var reqLength = length || Math.max(1, byteLength);
      assert(byteLength <= reqLength, 'byte array longer than desired length');
      assert(reqLength > 0, 'Requested array length <= 0');
      this.strip();
      var littleEndian = endian === 'le';
      var res = new ArrayType(reqLength);
      var b,
          i;
      var q = this.clone();
      if (!littleEndian) {
        for (i = 0; i < reqLength - byteLength; i++) {
          res[i] = 0;
        }
        for (i = 0; !q.isZero(); i++) {
          b = q.andln(0xff);
          q.iushrn(8);
          res[reqLength - i - 1] = b;
        }
      } else {
        for (i = 0; !q.isZero(); i++) {
          b = q.andln(0xff);
          q.iushrn(8);
          res[i] = b;
        }
        for (; i < reqLength; i++) {
          res[i] = 0;
        }
      }
      return res;
    };
    if (Math.clz32) {
      BN.prototype._countBits = function _countBits(w) {
        return 32 - Math.clz32(w);
      };
    } else {
      BN.prototype._countBits = function _countBits(w) {
        var t = w;
        var r = 0;
        if (t >= 0x1000) {
          r += 13;
          t >>>= 13;
        }
        if (t >= 0x40) {
          r += 7;
          t >>>= 7;
        }
        if (t >= 0x8) {
          r += 4;
          t >>>= 4;
        }
        if (t >= 0x02) {
          r += 2;
          t >>>= 2;
        }
        return r + t;
      };
    }
    BN.prototype._zeroBits = function _zeroBits(w) {
      if (w === 0)
        return 26;
      var t = w;
      var r = 0;
      if ((t & 0x1fff) === 0) {
        r += 13;
        t >>>= 13;
      }
      if ((t & 0x7f) === 0) {
        r += 7;
        t >>>= 7;
      }
      if ((t & 0xf) === 0) {
        r += 4;
        t >>>= 4;
      }
      if ((t & 0x3) === 0) {
        r += 2;
        t >>>= 2;
      }
      if ((t & 0x1) === 0) {
        r++;
      }
      return r;
    };
    BN.prototype.bitLength = function bitLength() {
      var w = this.words[this.length - 1];
      var hi = this._countBits(w);
      return (this.length - 1) * 26 + hi;
    };
    function toBitArray(num) {
      var w = new Array(num.bitLength());
      for (var bit = 0; bit < w.length; bit++) {
        var off = (bit / 26) | 0;
        var wbit = bit % 26;
        w[bit] = (num.words[off] & (1 << wbit)) >>> wbit;
      }
      return w;
    }
    BN.prototype.zeroBits = function zeroBits() {
      if (this.isZero())
        return 0;
      var r = 0;
      for (var i = 0; i < this.length; i++) {
        var b = this._zeroBits(this.words[i]);
        r += b;
        if (b !== 26)
          break;
      }
      return r;
    };
    BN.prototype.byteLength = function byteLength() {
      return Math.ceil(this.bitLength() / 8);
    };
    BN.prototype.toTwos = function toTwos(width) {
      if (this.negative !== 0) {
        return this.abs().inotn(width).iaddn(1);
      }
      return this.clone();
    };
    BN.prototype.fromTwos = function fromTwos(width) {
      if (this.testn(width - 1)) {
        return this.notn(width).iaddn(1).ineg();
      }
      return this.clone();
    };
    BN.prototype.isNeg = function isNeg() {
      return this.negative !== 0;
    };
    BN.prototype.neg = function neg() {
      return this.clone().ineg();
    };
    BN.prototype.ineg = function ineg() {
      if (!this.isZero()) {
        this.negative ^= 1;
      }
      return this;
    };
    BN.prototype.iuor = function iuor(num) {
      while (this.length < num.length) {
        this.words[this.length++] = 0;
      }
      for (var i = 0; i < num.length; i++) {
        this.words[i] = this.words[i] | num.words[i];
      }
      return this.strip();
    };
    BN.prototype.ior = function ior(num) {
      assert((this.negative | num.negative) === 0);
      return this.iuor(num);
    };
    BN.prototype.or = function or(num) {
      if (this.length > num.length)
        return this.clone().ior(num);
      return num.clone().ior(this);
    };
    BN.prototype.uor = function uor(num) {
      if (this.length > num.length)
        return this.clone().iuor(num);
      return num.clone().iuor(this);
    };
    BN.prototype.iuand = function iuand(num) {
      var b;
      if (this.length > num.length) {
        b = num;
      } else {
        b = this;
      }
      for (var i = 0; i < b.length; i++) {
        this.words[i] = this.words[i] & num.words[i];
      }
      this.length = b.length;
      return this.strip();
    };
    BN.prototype.iand = function iand(num) {
      assert((this.negative | num.negative) === 0);
      return this.iuand(num);
    };
    BN.prototype.and = function and(num) {
      if (this.length > num.length)
        return this.clone().iand(num);
      return num.clone().iand(this);
    };
    BN.prototype.uand = function uand(num) {
      if (this.length > num.length)
        return this.clone().iuand(num);
      return num.clone().iuand(this);
    };
    BN.prototype.iuxor = function iuxor(num) {
      var a;
      var b;
      if (this.length > num.length) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }
      for (var i = 0; i < b.length; i++) {
        this.words[i] = a.words[i] ^ b.words[i];
      }
      if (this !== a) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }
      this.length = a.length;
      return this.strip();
    };
    BN.prototype.ixor = function ixor(num) {
      assert((this.negative | num.negative) === 0);
      return this.iuxor(num);
    };
    BN.prototype.xor = function xor(num) {
      if (this.length > num.length)
        return this.clone().ixor(num);
      return num.clone().ixor(this);
    };
    BN.prototype.uxor = function uxor(num) {
      if (this.length > num.length)
        return this.clone().iuxor(num);
      return num.clone().iuxor(this);
    };
    BN.prototype.inotn = function inotn(width) {
      assert(typeof width === 'number' && width >= 0);
      var bytesNeeded = Math.ceil(width / 26) | 0;
      var bitsLeft = width % 26;
      this._expand(bytesNeeded);
      if (bitsLeft > 0) {
        bytesNeeded--;
      }
      for (var i = 0; i < bytesNeeded; i++) {
        this.words[i] = ~this.words[i] & 0x3ffffff;
      }
      if (bitsLeft > 0) {
        this.words[i] = ~this.words[i] & (0x3ffffff >> (26 - bitsLeft));
      }
      return this.strip();
    };
    BN.prototype.notn = function notn(width) {
      return this.clone().inotn(width);
    };
    BN.prototype.setn = function setn(bit, val) {
      assert(typeof bit === 'number' && bit >= 0);
      var off = (bit / 26) | 0;
      var wbit = bit % 26;
      this._expand(off + 1);
      if (val) {
        this.words[off] = this.words[off] | (1 << wbit);
      } else {
        this.words[off] = this.words[off] & ~(1 << wbit);
      }
      return this.strip();
    };
    BN.prototype.iadd = function iadd(num) {
      var r;
      if (this.negative !== 0 && num.negative === 0) {
        this.negative = 0;
        r = this.isub(num);
        this.negative ^= 1;
        return this._normSign();
      } else if (this.negative === 0 && num.negative !== 0) {
        num.negative = 0;
        r = this.isub(num);
        num.negative = 1;
        return r._normSign();
      }
      var a,
          b;
      if (this.length > num.length) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }
      var carry = 0;
      for (var i = 0; i < b.length; i++) {
        r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
        this.words[i] = r & 0x3ffffff;
        carry = r >>> 26;
      }
      for (; carry !== 0 && i < a.length; i++) {
        r = (a.words[i] | 0) + carry;
        this.words[i] = r & 0x3ffffff;
        carry = r >>> 26;
      }
      this.length = a.length;
      if (carry !== 0) {
        this.words[this.length] = carry;
        this.length++;
      } else if (a !== this) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }
      return this;
    };
    BN.prototype.add = function add(num) {
      var res;
      if (num.negative !== 0 && this.negative === 0) {
        num.negative = 0;
        res = this.sub(num);
        num.negative ^= 1;
        return res;
      } else if (num.negative === 0 && this.negative !== 0) {
        this.negative = 0;
        res = num.sub(this);
        this.negative = 1;
        return res;
      }
      if (this.length > num.length)
        return this.clone().iadd(num);
      return num.clone().iadd(this);
    };
    BN.prototype.isub = function isub(num) {
      if (num.negative !== 0) {
        num.negative = 0;
        var r = this.iadd(num);
        num.negative = 1;
        return r._normSign();
      } else if (this.negative !== 0) {
        this.negative = 0;
        this.iadd(num);
        this.negative = 1;
        return this._normSign();
      }
      var cmp = this.cmp(num);
      if (cmp === 0) {
        this.negative = 0;
        this.length = 1;
        this.words[0] = 0;
        return this;
      }
      var a,
          b;
      if (cmp > 0) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }
      var carry = 0;
      for (var i = 0; i < b.length; i++) {
        r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
        carry = r >> 26;
        this.words[i] = r & 0x3ffffff;
      }
      for (; carry !== 0 && i < a.length; i++) {
        r = (a.words[i] | 0) + carry;
        carry = r >> 26;
        this.words[i] = r & 0x3ffffff;
      }
      if (carry === 0 && i < a.length && a !== this) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }
      this.length = Math.max(this.length, i);
      if (a !== this) {
        this.negative = 1;
      }
      return this.strip();
    };
    BN.prototype.sub = function sub(num) {
      return this.clone().isub(num);
    };
    function smallMulTo(self, num, out) {
      out.negative = num.negative ^ self.negative;
      var len = (self.length + num.length) | 0;
      out.length = len;
      len = (len - 1) | 0;
      var a = self.words[0] | 0;
      var b = num.words[0] | 0;
      var r = a * b;
      var lo = r & 0x3ffffff;
      var carry = (r / 0x4000000) | 0;
      out.words[0] = lo;
      for (var k = 1; k < len; k++) {
        var ncarry = carry >>> 26;
        var rword = carry & 0x3ffffff;
        var maxJ = Math.min(k, num.length - 1);
        for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
          var i = (k - j) | 0;
          a = self.words[i] | 0;
          b = num.words[j] | 0;
          r = a * b + rword;
          ncarry += (r / 0x4000000) | 0;
          rword = r & 0x3ffffff;
        }
        out.words[k] = rword | 0;
        carry = ncarry | 0;
      }
      if (carry !== 0) {
        out.words[k] = carry | 0;
      } else {
        out.length--;
      }
      return out.strip();
    }
    var comb10MulTo = function comb10MulTo(self, num, out) {
      var a = self.words;
      var b = num.words;
      var o = out.words;
      var c = 0;
      var lo;
      var mid;
      var hi;
      var a0 = a[0] | 0;
      var al0 = a0 & 0x1fff;
      var ah0 = a0 >>> 13;
      var a1 = a[1] | 0;
      var al1 = a1 & 0x1fff;
      var ah1 = a1 >>> 13;
      var a2 = a[2] | 0;
      var al2 = a2 & 0x1fff;
      var ah2 = a2 >>> 13;
      var a3 = a[3] | 0;
      var al3 = a3 & 0x1fff;
      var ah3 = a3 >>> 13;
      var a4 = a[4] | 0;
      var al4 = a4 & 0x1fff;
      var ah4 = a4 >>> 13;
      var a5 = a[5] | 0;
      var al5 = a5 & 0x1fff;
      var ah5 = a5 >>> 13;
      var a6 = a[6] | 0;
      var al6 = a6 & 0x1fff;
      var ah6 = a6 >>> 13;
      var a7 = a[7] | 0;
      var al7 = a7 & 0x1fff;
      var ah7 = a7 >>> 13;
      var a8 = a[8] | 0;
      var al8 = a8 & 0x1fff;
      var ah8 = a8 >>> 13;
      var a9 = a[9] | 0;
      var al9 = a9 & 0x1fff;
      var ah9 = a9 >>> 13;
      var b0 = b[0] | 0;
      var bl0 = b0 & 0x1fff;
      var bh0 = b0 >>> 13;
      var b1 = b[1] | 0;
      var bl1 = b1 & 0x1fff;
      var bh1 = b1 >>> 13;
      var b2 = b[2] | 0;
      var bl2 = b2 & 0x1fff;
      var bh2 = b2 >>> 13;
      var b3 = b[3] | 0;
      var bl3 = b3 & 0x1fff;
      var bh3 = b3 >>> 13;
      var b4 = b[4] | 0;
      var bl4 = b4 & 0x1fff;
      var bh4 = b4 >>> 13;
      var b5 = b[5] | 0;
      var bl5 = b5 & 0x1fff;
      var bh5 = b5 >>> 13;
      var b6 = b[6] | 0;
      var bl6 = b6 & 0x1fff;
      var bh6 = b6 >>> 13;
      var b7 = b[7] | 0;
      var bl7 = b7 & 0x1fff;
      var bh7 = b7 >>> 13;
      var b8 = b[8] | 0;
      var bl8 = b8 & 0x1fff;
      var bh8 = b8 >>> 13;
      var b9 = b[9] | 0;
      var bl9 = b9 & 0x1fff;
      var bh9 = b9 >>> 13;
      out.negative = self.negative ^ num.negative;
      out.length = 19;
      lo = Math.imul(al0, bl0);
      mid = Math.imul(al0, bh0);
      mid = (mid + Math.imul(ah0, bl0)) | 0;
      hi = Math.imul(ah0, bh0);
      var w0 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
      c = (((hi + (mid >>> 13)) | 0) + (w0 >>> 26)) | 0;
      w0 &= 0x3ffffff;
      lo = Math.imul(al1, bl0);
      mid = Math.imul(al1, bh0);
      mid = (mid + Math.imul(ah1, bl0)) | 0;
      hi = Math.imul(ah1, bh0);
      lo = (lo + Math.imul(al0, bl1)) | 0;
      mid = (mid + Math.imul(al0, bh1)) | 0;
      mid = (mid + Math.imul(ah0, bl1)) | 0;
      hi = (hi + Math.imul(ah0, bh1)) | 0;
      var w1 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
      c = (((hi + (mid >>> 13)) | 0) + (w1 >>> 26)) | 0;
      w1 &= 0x3ffffff;
      lo = Math.imul(al2, bl0);
      mid = Math.imul(al2, bh0);
      mid = (mid + Math.imul(ah2, bl0)) | 0;
      hi = Math.imul(ah2, bh0);
      lo = (lo + Math.imul(al1, bl1)) | 0;
      mid = (mid + Math.imul(al1, bh1)) | 0;
      mid = (mid + Math.imul(ah1, bl1)) | 0;
      hi = (hi + Math.imul(ah1, bh1)) | 0;
      lo = (lo + Math.imul(al0, bl2)) | 0;
      mid = (mid + Math.imul(al0, bh2)) | 0;
      mid = (mid + Math.imul(ah0, bl2)) | 0;
      hi = (hi + Math.imul(ah0, bh2)) | 0;
      var w2 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
      c = (((hi + (mid >>> 13)) | 0) + (w2 >>> 26)) | 0;
      w2 &= 0x3ffffff;
      lo = Math.imul(al3, bl0);
      mid = Math.imul(al3, bh0);
      mid = (mid + Math.imul(ah3, bl0)) | 0;
      hi = Math.imul(ah3, bh0);
      lo = (lo + Math.imul(al2, bl1)) | 0;
      mid = (mid + Math.imul(al2, bh1)) | 0;
      mid = (mid + Math.imul(ah2, bl1)) | 0;
      hi = (hi + Math.imul(ah2, bh1)) | 0;
      lo = (lo + Math.imul(al1, bl2)) | 0;
      mid = (mid + Math.imul(al1, bh2)) | 0;
      mid = (mid + Math.imul(ah1, bl2)) | 0;
      hi = (hi + Math.imul(ah1, bh2)) | 0;
      lo = (lo + Math.imul(al0, bl3)) | 0;
      mid = (mid + Math.imul(al0, bh3)) | 0;
      mid = (mid + Math.imul(ah0, bl3)) | 0;
      hi = (hi + Math.imul(ah0, bh3)) | 0;
      var w3 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
      c = (((hi + (mid >>> 13)) | 0) + (w3 >>> 26)) | 0;
      w3 &= 0x3ffffff;
      lo = Math.imul(al4, bl0);
      mid = Math.imul(al4, bh0);
      mid = (mid + Math.imul(ah4, bl0)) | 0;
      hi = Math.imul(ah4, bh0);
      lo = (lo + Math.imul(al3, bl1)) | 0;
      mid = (mid + Math.imul(al3, bh1)) | 0;
      mid = (mid + Math.imul(ah3, bl1)) | 0;
      hi = (hi + Math.imul(ah3, bh1)) | 0;
      lo = (lo + Math.imul(al2, bl2)) | 0;
      mid = (mid + Math.imul(al2, bh2)) | 0;
      mid = (mid + Math.imul(ah2, bl2)) | 0;
      hi = (hi + Math.imul(ah2, bh2)) | 0;
      lo = (lo + Math.imul(al1, bl3)) | 0;
      mid = (mid + Math.imul(al1, bh3)) | 0;
      mid = (mid + Math.imul(ah1, bl3)) | 0;
      hi = (hi + Math.imul(ah1, bh3)) | 0;
      lo = (lo + Math.imul(al0, bl4)) | 0;
      mid = (mid + Math.imul(al0, bh4)) | 0;
      mid = (mid + Math.imul(ah0, bl4)) | 0;
      hi = (hi + Math.imul(ah0, bh4)) | 0;
      var w4 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
      c = (((hi + (mid >>> 13)) | 0) + (w4 >>> 26)) | 0;
      w4 &= 0x3ffffff;
      lo = Math.imul(al5, bl0);
      mid = Math.imul(al5, bh0);
      mid = (mid + Math.imul(ah5, bl0)) | 0;
      hi = Math.imul(ah5, bh0);
      lo = (lo + Math.imul(al4, bl1)) | 0;
      mid = (mid + Math.imul(al4, bh1)) | 0;
      mid = (mid + Math.imul(ah4, bl1)) | 0;
      hi = (hi + Math.imul(ah4, bh1)) | 0;
      lo = (lo + Math.imul(al3, bl2)) | 0;
      mid = (mid + Math.imul(al3, bh2)) | 0;
      mid = (mid + Math.imul(ah3, bl2)) | 0;
      hi = (hi + Math.imul(ah3, bh2)) | 0;
      lo = (lo + Math.imul(al2, bl3)) | 0;
      mid = (mid + Math.imul(al2, bh3)) | 0;
      mid = (mid + Math.imul(ah2, bl3)) | 0;
      hi = (hi + Math.imul(ah2, bh3)) | 0;
      lo = (lo + Math.imul(al1, bl4)) | 0;
      mid = (mid + Math.imul(al1, bh4)) | 0;
      mid = (mid + Math.imul(ah1, bl4)) | 0;
      hi = (hi + Math.imul(ah1, bh4)) | 0;
      lo = (lo + Math.imul(al0, bl5)) | 0;
      mid = (mid + Math.imul(al0, bh5)) | 0;
      mid = (mid + Math.imul(ah0, bl5)) | 0;
      hi = (hi + Math.imul(ah0, bh5)) | 0;
      var w5 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
      c = (((hi + (mid >>> 13)) | 0) + (w5 >>> 26)) | 0;
      w5 &= 0x3ffffff;
      lo = Math.imul(al6, bl0);
      mid = Math.imul(al6, bh0);
      mid = (mid + Math.imul(ah6, bl0)) | 0;
      hi = Math.imul(ah6, bh0);
      lo = (lo + Math.imul(al5, bl1)) | 0;
      mid = (mid + Math.imul(al5, bh1)) | 0;
      mid = (mid + Math.imul(ah5, bl1)) | 0;
      hi = (hi + Math.imul(ah5, bh1)) | 0;
      lo = (lo + Math.imul(al4, bl2)) | 0;
      mid = (mid + Math.imul(al4, bh2)) | 0;
      mid = (mid + Math.imul(ah4, bl2)) | 0;
      hi = (hi + Math.imul(ah4, bh2)) | 0;
      lo = (lo + Math.imul(al3, bl3)) | 0;
      mid = (mid + Math.imul(al3, bh3)) | 0;
      mid = (mid + Math.imul(ah3, bl3)) | 0;
      hi = (hi + Math.imul(ah3, bh3)) | 0;
      lo = (lo + Math.imul(al2, bl4)) | 0;
      mid = (mid + Math.imul(al2, bh4)) | 0;
      mid = (mid + Math.imul(ah2, bl4)) | 0;
      hi = (hi + Math.imul(ah2, bh4)) | 0;
      lo = (lo + Math.imul(al1, bl5)) | 0;
      mid = (mid + Math.imul(al1, bh5)) | 0;
      mid = (mid + Math.imul(ah1, bl5)) | 0;
      hi = (hi + Math.imul(ah1, bh5)) | 0;
      lo = (lo + Math.imul(al0, bl6)) | 0;
      mid = (mid + Math.imul(al0, bh6)) | 0;
      mid = (mid + Math.imul(ah0, bl6)) | 0;
      hi = (hi + Math.imul(ah0, bh6)) | 0;
      var w6 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
      c = (((hi + (mid >>> 13)) | 0) + (w6 >>> 26)) | 0;
      w6 &= 0x3ffffff;
      lo = Math.imul(al7, bl0);
      mid = Math.imul(al7, bh0);
      mid = (mid + Math.imul(ah7, bl0)) | 0;
      hi = Math.imul(ah7, bh0);
      lo = (lo + Math.imul(al6, bl1)) | 0;
      mid = (mid + Math.imul(al6, bh1)) | 0;
      mid = (mid + Math.imul(ah6, bl1)) | 0;
      hi = (hi + Math.imul(ah6, bh1)) | 0;
      lo = (lo + Math.imul(al5, bl2)) | 0;
      mid = (mid + Math.imul(al5, bh2)) | 0;
      mid = (mid + Math.imul(ah5, bl2)) | 0;
      hi = (hi + Math.imul(ah5, bh2)) | 0;
      lo = (lo + Math.imul(al4, bl3)) | 0;
      mid = (mid + Math.imul(al4, bh3)) | 0;
      mid = (mid + Math.imul(ah4, bl3)) | 0;
      hi = (hi + Math.imul(ah4, bh3)) | 0;
      lo = (lo + Math.imul(al3, bl4)) | 0;
      mid = (mid + Math.imul(al3, bh4)) | 0;
      mid = (mid + Math.imul(ah3, bl4)) | 0;
      hi = (hi + Math.imul(ah3, bh4)) | 0;
      lo = (lo + Math.imul(al2, bl5)) | 0;
      mid = (mid + Math.imul(al2, bh5)) | 0;
      mid = (mid + Math.imul(ah2, bl5)) | 0;
      hi = (hi + Math.imul(ah2, bh5)) | 0;
      lo = (lo + Math.imul(al1, bl6)) | 0;
      mid = (mid + Math.imul(al1, bh6)) | 0;
      mid = (mid + Math.imul(ah1, bl6)) | 0;
      hi = (hi + Math.imul(ah1, bh6)) | 0;
      lo = (lo + Math.imul(al0, bl7)) | 0;
      mid = (mid + Math.imul(al0, bh7)) | 0;
      mid = (mid + Math.imul(ah0, bl7)) | 0;
      hi = (hi + Math.imul(ah0, bh7)) | 0;
      var w7 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
      c = (((hi + (mid >>> 13)) | 0) + (w7 >>> 26)) | 0;
      w7 &= 0x3ffffff;
      lo = Math.imul(al8, bl0);
      mid = Math.imul(al8, bh0);
      mid = (mid + Math.imul(ah8, bl0)) | 0;
      hi = Math.imul(ah8, bh0);
      lo = (lo + Math.imul(al7, bl1)) | 0;
      mid = (mid + Math.imul(al7, bh1)) | 0;
      mid = (mid + Math.imul(ah7, bl1)) | 0;
      hi = (hi + Math.imul(ah7, bh1)) | 0;
      lo = (lo + Math.imul(al6, bl2)) | 0;
      mid = (mid + Math.imul(al6, bh2)) | 0;
      mid = (mid + Math.imul(ah6, bl2)) | 0;
      hi = (hi + Math.imul(ah6, bh2)) | 0;
      lo = (lo + Math.imul(al5, bl3)) | 0;
      mid = (mid + Math.imul(al5, bh3)) | 0;
      mid = (mid + Math.imul(ah5, bl3)) | 0;
      hi = (hi + Math.imul(ah5, bh3)) | 0;
      lo = (lo + Math.imul(al4, bl4)) | 0;
      mid = (mid + Math.imul(al4, bh4)) | 0;
      mid = (mid + Math.imul(ah4, bl4)) | 0;
      hi = (hi + Math.imul(ah4, bh4)) | 0;
      lo = (lo + Math.imul(al3, bl5)) | 0;
      mid = (mid + Math.imul(al3, bh5)) | 0;
      mid = (mid + Math.imul(ah3, bl5)) | 0;
      hi = (hi + Math.imul(ah3, bh5)) | 0;
      lo = (lo + Math.imul(al2, bl6)) | 0;
      mid = (mid + Math.imul(al2, bh6)) | 0;
      mid = (mid + Math.imul(ah2, bl6)) | 0;
      hi = (hi + Math.imul(ah2, bh6)) | 0;
      lo = (lo + Math.imul(al1, bl7)) | 0;
      mid = (mid + Math.imul(al1, bh7)) | 0;
      mid = (mid + Math.imul(ah1, bl7)) | 0;
      hi = (hi + Math.imul(ah1, bh7)) | 0;
      lo = (lo + Math.imul(al0, bl8)) | 0;
      mid = (mid + Math.imul(al0, bh8)) | 0;
      mid = (mid + Math.imul(ah0, bl8)) | 0;
      hi = (hi + Math.imul(ah0, bh8)) | 0;
      var w8 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
      c = (((hi + (mid >>> 13)) | 0) + (w8 >>> 26)) | 0;
      w8 &= 0x3ffffff;
      lo = Math.imul(al9, bl0);
      mid = Math.imul(al9, bh0);
      mid = (mid + Math.imul(ah9, bl0)) | 0;
      hi = Math.imul(ah9, bh0);
      lo = (lo + Math.imul(al8, bl1)) | 0;
      mid = (mid + Math.imul(al8, bh1)) | 0;
      mid = (mid + Math.imul(ah8, bl1)) | 0;
      hi = (hi + Math.imul(ah8, bh1)) | 0;
      lo = (lo + Math.imul(al7, bl2)) | 0;
      mid = (mid + Math.imul(al7, bh2)) | 0;
      mid = (mid + Math.imul(ah7, bl2)) | 0;
      hi = (hi + Math.imul(ah7, bh2)) | 0;
      lo = (lo + Math.imul(al6, bl3)) | 0;
      mid = (mid + Math.imul(al6, bh3)) | 0;
      mid = (mid + Math.imul(ah6, bl3)) | 0;
      hi = (hi + Math.imul(ah6, bh3)) | 0;
      lo = (lo + Math.imul(al5, bl4)) | 0;
      mid = (mid + Math.imul(al5, bh4)) | 0;
      mid = (mid + Math.imul(ah5, bl4)) | 0;
      hi = (hi + Math.imul(ah5, bh4)) | 0;
      lo = (lo + Math.imul(al4, bl5)) | 0;
      mid = (mid + Math.imul(al4, bh5)) | 0;
      mid = (mid + Math.imul(ah4, bl5)) | 0;
      hi = (hi + Math.imul(ah4, bh5)) | 0;
      lo = (lo + Math.imul(al3, bl6)) | 0;
      mid = (mid + Math.imul(al3, bh6)) | 0;
      mid = (mid + Math.imul(ah3, bl6)) | 0;
      hi = (hi + Math.imul(ah3, bh6)) | 0;
      lo = (lo + Math.imul(al2, bl7)) | 0;
      mid = (mid + Math.imul(al2, bh7)) | 0;
      mid = (mid + Math.imul(ah2, bl7)) | 0;
      hi = (hi + Math.imul(ah2, bh7)) | 0;
      lo = (lo + Math.imul(al1, bl8)) | 0;
      mid = (mid + Math.imul(al1, bh8)) | 0;
      mid = (mid + Math.imul(ah1, bl8)) | 0;
      hi = (hi + Math.imul(ah1, bh8)) | 0;
      lo = (lo + Math.imul(al0, bl9)) | 0;
      mid = (mid + Math.imul(al0, bh9)) | 0;
      mid = (mid + Math.imul(ah0, bl9)) | 0;
      hi = (hi + Math.imul(ah0, bh9)) | 0;
      var w9 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
      c = (((hi + (mid >>> 13)) | 0) + (w9 >>> 26)) | 0;
      w9 &= 0x3ffffff;
      lo = Math.imul(al9, bl1);
      mid = Math.imul(al9, bh1);
      mid = (mid + Math.imul(ah9, bl1)) | 0;
      hi = Math.imul(ah9, bh1);
      lo = (lo + Math.imul(al8, bl2)) | 0;
      mid = (mid + Math.imul(al8, bh2)) | 0;
      mid = (mid + Math.imul(ah8, bl2)) | 0;
      hi = (hi + Math.imul(ah8, bh2)) | 0;
      lo = (lo + Math.imul(al7, bl3)) | 0;
      mid = (mid + Math.imul(al7, bh3)) | 0;
      mid = (mid + Math.imul(ah7, bl3)) | 0;
      hi = (hi + Math.imul(ah7, bh3)) | 0;
      lo = (lo + Math.imul(al6, bl4)) | 0;
      mid = (mid + Math.imul(al6, bh4)) | 0;
      mid = (mid + Math.imul(ah6, bl4)) | 0;
      hi = (hi + Math.imul(ah6, bh4)) | 0;
      lo = (lo + Math.imul(al5, bl5)) | 0;
      mid = (mid + Math.imul(al5, bh5)) | 0;
      mid = (mid + Math.imul(ah5, bl5)) | 0;
      hi = (hi + Math.imul(ah5, bh5)) | 0;
      lo = (lo + Math.imul(al4, bl6)) | 0;
      mid = (mid + Math.imul(al4, bh6)) | 0;
      mid = (mid + Math.imul(ah4, bl6)) | 0;
      hi = (hi + Math.imul(ah4, bh6)) | 0;
      lo = (lo + Math.imul(al3, bl7)) | 0;
      mid = (mid + Math.imul(al3, bh7)) | 0;
      mid = (mid + Math.imul(ah3, bl7)) | 0;
      hi = (hi + Math.imul(ah3, bh7)) | 0;
      lo = (lo + Math.imul(al2, bl8)) | 0;
      mid = (mid + Math.imul(al2, bh8)) | 0;
      mid = (mid + Math.imul(ah2, bl8)) | 0;
      hi = (hi + Math.imul(ah2, bh8)) | 0;
      lo = (lo + Math.imul(al1, bl9)) | 0;
      mid = (mid + Math.imul(al1, bh9)) | 0;
      mid = (mid + Math.imul(ah1, bl9)) | 0;
      hi = (hi + Math.imul(ah1, bh9)) | 0;
      var w10 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
      c = (((hi + (mid >>> 13)) | 0) + (w10 >>> 26)) | 0;
      w10 &= 0x3ffffff;
      lo = Math.imul(al9, bl2);
      mid = Math.imul(al9, bh2);
      mid = (mid + Math.imul(ah9, bl2)) | 0;
      hi = Math.imul(ah9, bh2);
      lo = (lo + Math.imul(al8, bl3)) | 0;
      mid = (mid + Math.imul(al8, bh3)) | 0;
      mid = (mid + Math.imul(ah8, bl3)) | 0;
      hi = (hi + Math.imul(ah8, bh3)) | 0;
      lo = (lo + Math.imul(al7, bl4)) | 0;
      mid = (mid + Math.imul(al7, bh4)) | 0;
      mid = (mid + Math.imul(ah7, bl4)) | 0;
      hi = (hi + Math.imul(ah7, bh4)) | 0;
      lo = (lo + Math.imul(al6, bl5)) | 0;
      mid = (mid + Math.imul(al6, bh5)) | 0;
      mid = (mid + Math.imul(ah6, bl5)) | 0;
      hi = (hi + Math.imul(ah6, bh5)) | 0;
      lo = (lo + Math.imul(al5, bl6)) | 0;
      mid = (mid + Math.imul(al5, bh6)) | 0;
      mid = (mid + Math.imul(ah5, bl6)) | 0;
      hi = (hi + Math.imul(ah5, bh6)) | 0;
      lo = (lo + Math.imul(al4, bl7)) | 0;
      mid = (mid + Math.imul(al4, bh7)) | 0;
      mid = (mid + Math.imul(ah4, bl7)) | 0;
      hi = (hi + Math.imul(ah4, bh7)) | 0;
      lo = (lo + Math.imul(al3, bl8)) | 0;
      mid = (mid + Math.imul(al3, bh8)) | 0;
      mid = (mid + Math.imul(ah3, bl8)) | 0;
      hi = (hi + Math.imul(ah3, bh8)) | 0;
      lo = (lo + Math.imul(al2, bl9)) | 0;
      mid = (mid + Math.imul(al2, bh9)) | 0;
      mid = (mid + Math.imul(ah2, bl9)) | 0;
      hi = (hi + Math.imul(ah2, bh9)) | 0;
      var w11 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
      c = (((hi + (mid >>> 13)) | 0) + (w11 >>> 26)) | 0;
      w11 &= 0x3ffffff;
      lo = Math.imul(al9, bl3);
      mid = Math.imul(al9, bh3);
      mid = (mid + Math.imul(ah9, bl3)) | 0;
      hi = Math.imul(ah9, bh3);
      lo = (lo + Math.imul(al8, bl4)) | 0;
      mid = (mid + Math.imul(al8, bh4)) | 0;
      mid = (mid + Math.imul(ah8, bl4)) | 0;
      hi = (hi + Math.imul(ah8, bh4)) | 0;
      lo = (lo + Math.imul(al7, bl5)) | 0;
      mid = (mid + Math.imul(al7, bh5)) | 0;
      mid = (mid + Math.imul(ah7, bl5)) | 0;
      hi = (hi + Math.imul(ah7, bh5)) | 0;
      lo = (lo + Math.imul(al6, bl6)) | 0;
      mid = (mid + Math.imul(al6, bh6)) | 0;
      mid = (mid + Math.imul(ah6, bl6)) | 0;
      hi = (hi + Math.imul(ah6, bh6)) | 0;
      lo = (lo + Math.imul(al5, bl7)) | 0;
      mid = (mid + Math.imul(al5, bh7)) | 0;
      mid = (mid + Math.imul(ah5, bl7)) | 0;
      hi = (hi + Math.imul(ah5, bh7)) | 0;
      lo = (lo + Math.imul(al4, bl8)) | 0;
      mid = (mid + Math.imul(al4, bh8)) | 0;
      mid = (mid + Math.imul(ah4, bl8)) | 0;
      hi = (hi + Math.imul(ah4, bh8)) | 0;
      lo = (lo + Math.imul(al3, bl9)) | 0;
      mid = (mid + Math.imul(al3, bh9)) | 0;
      mid = (mid + Math.imul(ah3, bl9)) | 0;
      hi = (hi + Math.imul(ah3, bh9)) | 0;
      var w12 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
      c = (((hi + (mid >>> 13)) | 0) + (w12 >>> 26)) | 0;
      w12 &= 0x3ffffff;
      lo = Math.imul(al9, bl4);
      mid = Math.imul(al9, bh4);
      mid = (mid + Math.imul(ah9, bl4)) | 0;
      hi = Math.imul(ah9, bh4);
      lo = (lo + Math.imul(al8, bl5)) | 0;
      mid = (mid + Math.imul(al8, bh5)) | 0;
      mid = (mid + Math.imul(ah8, bl5)) | 0;
      hi = (hi + Math.imul(ah8, bh5)) | 0;
      lo = (lo + Math.imul(al7, bl6)) | 0;
      mid = (mid + Math.imul(al7, bh6)) | 0;
      mid = (mid + Math.imul(ah7, bl6)) | 0;
      hi = (hi + Math.imul(ah7, bh6)) | 0;
      lo = (lo + Math.imul(al6, bl7)) | 0;
      mid = (mid + Math.imul(al6, bh7)) | 0;
      mid = (mid + Math.imul(ah6, bl7)) | 0;
      hi = (hi + Math.imul(ah6, bh7)) | 0;
      lo = (lo + Math.imul(al5, bl8)) | 0;
      mid = (mid + Math.imul(al5, bh8)) | 0;
      mid = (mid + Math.imul(ah5, bl8)) | 0;
      hi = (hi + Math.imul(ah5, bh8)) | 0;
      lo = (lo + Math.imul(al4, bl9)) | 0;
      mid = (mid + Math.imul(al4, bh9)) | 0;
      mid = (mid + Math.imul(ah4, bl9)) | 0;
      hi = (hi + Math.imul(ah4, bh9)) | 0;
      var w13 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
      c = (((hi + (mid >>> 13)) | 0) + (w13 >>> 26)) | 0;
      w13 &= 0x3ffffff;
      lo = Math.imul(al9, bl5);
      mid = Math.imul(al9, bh5);
      mid = (mid + Math.imul(ah9, bl5)) | 0;
      hi = Math.imul(ah9, bh5);
      lo = (lo + Math.imul(al8, bl6)) | 0;
      mid = (mid + Math.imul(al8, bh6)) | 0;
      mid = (mid + Math.imul(ah8, bl6)) | 0;
      hi = (hi + Math.imul(ah8, bh6)) | 0;
      lo = (lo + Math.imul(al7, bl7)) | 0;
      mid = (mid + Math.imul(al7, bh7)) | 0;
      mid = (mid + Math.imul(ah7, bl7)) | 0;
      hi = (hi + Math.imul(ah7, bh7)) | 0;
      lo = (lo + Math.imul(al6, bl8)) | 0;
      mid = (mid + Math.imul(al6, bh8)) | 0;
      mid = (mid + Math.imul(ah6, bl8)) | 0;
      hi = (hi + Math.imul(ah6, bh8)) | 0;
      lo = (lo + Math.imul(al5, bl9)) | 0;
      mid = (mid + Math.imul(al5, bh9)) | 0;
      mid = (mid + Math.imul(ah5, bl9)) | 0;
      hi = (hi + Math.imul(ah5, bh9)) | 0;
      var w14 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
      c = (((hi + (mid >>> 13)) | 0) + (w14 >>> 26)) | 0;
      w14 &= 0x3ffffff;
      lo = Math.imul(al9, bl6);
      mid = Math.imul(al9, bh6);
      mid = (mid + Math.imul(ah9, bl6)) | 0;
      hi = Math.imul(ah9, bh6);
      lo = (lo + Math.imul(al8, bl7)) | 0;
      mid = (mid + Math.imul(al8, bh7)) | 0;
      mid = (mid + Math.imul(ah8, bl7)) | 0;
      hi = (hi + Math.imul(ah8, bh7)) | 0;
      lo = (lo + Math.imul(al7, bl8)) | 0;
      mid = (mid + Math.imul(al7, bh8)) | 0;
      mid = (mid + Math.imul(ah7, bl8)) | 0;
      hi = (hi + Math.imul(ah7, bh8)) | 0;
      lo = (lo + Math.imul(al6, bl9)) | 0;
      mid = (mid + Math.imul(al6, bh9)) | 0;
      mid = (mid + Math.imul(ah6, bl9)) | 0;
      hi = (hi + Math.imul(ah6, bh9)) | 0;
      var w15 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
      c = (((hi + (mid >>> 13)) | 0) + (w15 >>> 26)) | 0;
      w15 &= 0x3ffffff;
      lo = Math.imul(al9, bl7);
      mid = Math.imul(al9, bh7);
      mid = (mid + Math.imul(ah9, bl7)) | 0;
      hi = Math.imul(ah9, bh7);
      lo = (lo + Math.imul(al8, bl8)) | 0;
      mid = (mid + Math.imul(al8, bh8)) | 0;
      mid = (mid + Math.imul(ah8, bl8)) | 0;
      hi = (hi + Math.imul(ah8, bh8)) | 0;
      lo = (lo + Math.imul(al7, bl9)) | 0;
      mid = (mid + Math.imul(al7, bh9)) | 0;
      mid = (mid + Math.imul(ah7, bl9)) | 0;
      hi = (hi + Math.imul(ah7, bh9)) | 0;
      var w16 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
      c = (((hi + (mid >>> 13)) | 0) + (w16 >>> 26)) | 0;
      w16 &= 0x3ffffff;
      lo = Math.imul(al9, bl8);
      mid = Math.imul(al9, bh8);
      mid = (mid + Math.imul(ah9, bl8)) | 0;
      hi = Math.imul(ah9, bh8);
      lo = (lo + Math.imul(al8, bl9)) | 0;
      mid = (mid + Math.imul(al8, bh9)) | 0;
      mid = (mid + Math.imul(ah8, bl9)) | 0;
      hi = (hi + Math.imul(ah8, bh9)) | 0;
      var w17 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
      c = (((hi + (mid >>> 13)) | 0) + (w17 >>> 26)) | 0;
      w17 &= 0x3ffffff;
      lo = Math.imul(al9, bl9);
      mid = Math.imul(al9, bh9);
      mid = (mid + Math.imul(ah9, bl9)) | 0;
      hi = Math.imul(ah9, bh9);
      var w18 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
      c = (((hi + (mid >>> 13)) | 0) + (w18 >>> 26)) | 0;
      w18 &= 0x3ffffff;
      o[0] = w0;
      o[1] = w1;
      o[2] = w2;
      o[3] = w3;
      o[4] = w4;
      o[5] = w5;
      o[6] = w6;
      o[7] = w7;
      o[8] = w8;
      o[9] = w9;
      o[10] = w10;
      o[11] = w11;
      o[12] = w12;
      o[13] = w13;
      o[14] = w14;
      o[15] = w15;
      o[16] = w16;
      o[17] = w17;
      o[18] = w18;
      if (c !== 0) {
        o[19] = c;
        out.length++;
      }
      return out;
    };
    if (!Math.imul) {
      comb10MulTo = smallMulTo;
    }
    function bigMulTo(self, num, out) {
      out.negative = num.negative ^ self.negative;
      out.length = self.length + num.length;
      var carry = 0;
      var hncarry = 0;
      for (var k = 0; k < out.length - 1; k++) {
        var ncarry = hncarry;
        hncarry = 0;
        var rword = carry & 0x3ffffff;
        var maxJ = Math.min(k, num.length - 1);
        for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
          var i = k - j;
          var a = self.words[i] | 0;
          var b = num.words[j] | 0;
          var r = a * b;
          var lo = r & 0x3ffffff;
          ncarry = (ncarry + ((r / 0x4000000) | 0)) | 0;
          lo = (lo + rword) | 0;
          rword = lo & 0x3ffffff;
          ncarry = (ncarry + (lo >>> 26)) | 0;
          hncarry += ncarry >>> 26;
          ncarry &= 0x3ffffff;
        }
        out.words[k] = rword;
        carry = ncarry;
        ncarry = hncarry;
      }
      if (carry !== 0) {
        out.words[k] = carry;
      } else {
        out.length--;
      }
      return out.strip();
    }
    function jumboMulTo(self, num, out) {
      var fftm = new FFTM();
      return fftm.mulp(self, num, out);
    }
    BN.prototype.mulTo = function mulTo(num, out) {
      var res;
      var len = this.length + num.length;
      if (this.length === 10 && num.length === 10) {
        res = comb10MulTo(this, num, out);
      } else if (len < 63) {
        res = smallMulTo(this, num, out);
      } else if (len < 1024) {
        res = bigMulTo(this, num, out);
      } else {
        res = jumboMulTo(this, num, out);
      }
      return res;
    };
    function FFTM(x, y) {
      this.x = x;
      this.y = y;
    }
    FFTM.prototype.makeRBT = function makeRBT(N) {
      var t = new Array(N);
      var l = BN.prototype._countBits(N) - 1;
      for (var i = 0; i < N; i++) {
        t[i] = this.revBin(i, l, N);
      }
      return t;
    };
    FFTM.prototype.revBin = function revBin(x, l, N) {
      if (x === 0 || x === N - 1)
        return x;
      var rb = 0;
      for (var i = 0; i < l; i++) {
        rb |= (x & 1) << (l - i - 1);
        x >>= 1;
      }
      return rb;
    };
    FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N) {
      for (var i = 0; i < N; i++) {
        rtws[i] = rws[rbt[i]];
        itws[i] = iws[rbt[i]];
      }
    };
    FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N, rbt) {
      this.permute(rbt, rws, iws, rtws, itws, N);
      for (var s = 1; s < N; s <<= 1) {
        var l = s << 1;
        var rtwdf = Math.cos(2 * Math.PI / l);
        var itwdf = Math.sin(2 * Math.PI / l);
        for (var p = 0; p < N; p += l) {
          var rtwdf_ = rtwdf;
          var itwdf_ = itwdf;
          for (var j = 0; j < s; j++) {
            var re = rtws[p + j];
            var ie = itws[p + j];
            var ro = rtws[p + j + s];
            var io = itws[p + j + s];
            var rx = rtwdf_ * ro - itwdf_ * io;
            io = rtwdf_ * io + itwdf_ * ro;
            ro = rx;
            rtws[p + j] = re + ro;
            itws[p + j] = ie + io;
            rtws[p + j + s] = re - ro;
            itws[p + j + s] = ie - io;
            if (j !== l) {
              rx = rtwdf * rtwdf_ - itwdf * itwdf_;
              itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
              rtwdf_ = rx;
            }
          }
        }
      }
    };
    FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
      var N = Math.max(m, n) | 1;
      var odd = N & 1;
      var i = 0;
      for (N = N / 2 | 0; N; N = N >>> 1) {
        i++;
      }
      return 1 << i + 1 + odd;
    };
    FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
      if (N <= 1)
        return;
      for (var i = 0; i < N / 2; i++) {
        var t = rws[i];
        rws[i] = rws[N - i - 1];
        rws[N - i - 1] = t;
        t = iws[i];
        iws[i] = -iws[N - i - 1];
        iws[N - i - 1] = -t;
      }
    };
    FFTM.prototype.normalize13b = function normalize13b(ws, N) {
      var carry = 0;
      for (var i = 0; i < N / 2; i++) {
        var w = Math.round(ws[2 * i + 1] / N) * 0x2000 + Math.round(ws[2 * i] / N) + carry;
        ws[i] = w & 0x3ffffff;
        if (w < 0x4000000) {
          carry = 0;
        } else {
          carry = w / 0x4000000 | 0;
        }
      }
      return ws;
    };
    FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
      var carry = 0;
      for (var i = 0; i < len; i++) {
        carry = carry + (ws[i] | 0);
        rws[2 * i] = carry & 0x1fff;
        carry = carry >>> 13;
        rws[2 * i + 1] = carry & 0x1fff;
        carry = carry >>> 13;
      }
      for (i = 2 * len; i < N; ++i) {
        rws[i] = 0;
      }
      assert(carry === 0);
      assert((carry & ~0x1fff) === 0);
    };
    FFTM.prototype.stub = function stub(N) {
      var ph = new Array(N);
      for (var i = 0; i < N; i++) {
        ph[i] = 0;
      }
      return ph;
    };
    FFTM.prototype.mulp = function mulp(x, y, out) {
      var N = 2 * this.guessLen13b(x.length, y.length);
      var rbt = this.makeRBT(N);
      var _ = this.stub(N);
      var rws = new Array(N);
      var rwst = new Array(N);
      var iwst = new Array(N);
      var nrws = new Array(N);
      var nrwst = new Array(N);
      var niwst = new Array(N);
      var rmws = out.words;
      rmws.length = N;
      this.convert13b(x.words, x.length, rws, N);
      this.convert13b(y.words, y.length, nrws, N);
      this.transform(rws, _, rwst, iwst, N, rbt);
      this.transform(nrws, _, nrwst, niwst, N, rbt);
      for (var i = 0; i < N; i++) {
        var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
        iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
        rwst[i] = rx;
      }
      this.conjugate(rwst, iwst, N);
      this.transform(rwst, iwst, rmws, _, N, rbt);
      this.conjugate(rmws, _, N);
      this.normalize13b(rmws, N);
      out.negative = x.negative ^ y.negative;
      out.length = x.length + y.length;
      return out.strip();
    };
    BN.prototype.mul = function mul(num) {
      var out = new BN(null);
      out.words = new Array(this.length + num.length);
      return this.mulTo(num, out);
    };
    BN.prototype.mulf = function mulf(num) {
      var out = new BN(null);
      out.words = new Array(this.length + num.length);
      return jumboMulTo(this, num, out);
    };
    BN.prototype.imul = function imul(num) {
      return this.clone().mulTo(num, this);
    };
    BN.prototype.imuln = function imuln(num) {
      assert(typeof num === 'number');
      assert(num < 0x4000000);
      var carry = 0;
      for (var i = 0; i < this.length; i++) {
        var w = (this.words[i] | 0) * num;
        var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
        carry >>= 26;
        carry += (w / 0x4000000) | 0;
        carry += lo >>> 26;
        this.words[i] = lo & 0x3ffffff;
      }
      if (carry !== 0) {
        this.words[i] = carry;
        this.length++;
      }
      return this;
    };
    BN.prototype.muln = function muln(num) {
      return this.clone().imuln(num);
    };
    BN.prototype.sqr = function sqr() {
      return this.mul(this);
    };
    BN.prototype.isqr = function isqr() {
      return this.imul(this.clone());
    };
    BN.prototype.pow = function pow(num) {
      var w = toBitArray(num);
      if (w.length === 0)
        return new BN(1);
      var res = this;
      for (var i = 0; i < w.length; i++, res = res.sqr()) {
        if (w[i] !== 0)
          break;
      }
      if (++i < w.length) {
        for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
          if (w[i] === 0)
            continue;
          res = res.mul(q);
        }
      }
      return res;
    };
    BN.prototype.iushln = function iushln(bits) {
      assert(typeof bits === 'number' && bits >= 0);
      var r = bits % 26;
      var s = (bits - r) / 26;
      var carryMask = (0x3ffffff >>> (26 - r)) << (26 - r);
      var i;
      if (r !== 0) {
        var carry = 0;
        for (i = 0; i < this.length; i++) {
          var newCarry = this.words[i] & carryMask;
          var c = ((this.words[i] | 0) - newCarry) << r;
          this.words[i] = c | carry;
          carry = newCarry >>> (26 - r);
        }
        if (carry) {
          this.words[i] = carry;
          this.length++;
        }
      }
      if (s !== 0) {
        for (i = this.length - 1; i >= 0; i--) {
          this.words[i + s] = this.words[i];
        }
        for (i = 0; i < s; i++) {
          this.words[i] = 0;
        }
        this.length += s;
      }
      return this.strip();
    };
    BN.prototype.ishln = function ishln(bits) {
      assert(this.negative === 0);
      return this.iushln(bits);
    };
    BN.prototype.iushrn = function iushrn(bits, hint, extended) {
      assert(typeof bits === 'number' && bits >= 0);
      var h;
      if (hint) {
        h = (hint - (hint % 26)) / 26;
      } else {
        h = 0;
      }
      var r = bits % 26;
      var s = Math.min((bits - r) / 26, this.length);
      var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
      var maskedWords = extended;
      h -= s;
      h = Math.max(0, h);
      if (maskedWords) {
        for (var i = 0; i < s; i++) {
          maskedWords.words[i] = this.words[i];
        }
        maskedWords.length = s;
      }
      if (s === 0) {} else if (this.length > s) {
        this.length -= s;
        for (i = 0; i < this.length; i++) {
          this.words[i] = this.words[i + s];
        }
      } else {
        this.words[0] = 0;
        this.length = 1;
      }
      var carry = 0;
      for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
        var word = this.words[i] | 0;
        this.words[i] = (carry << (26 - r)) | (word >>> r);
        carry = word & mask;
      }
      if (maskedWords && carry !== 0) {
        maskedWords.words[maskedWords.length++] = carry;
      }
      if (this.length === 0) {
        this.words[0] = 0;
        this.length = 1;
      }
      return this.strip();
    };
    BN.prototype.ishrn = function ishrn(bits, hint, extended) {
      assert(this.negative === 0);
      return this.iushrn(bits, hint, extended);
    };
    BN.prototype.shln = function shln(bits) {
      return this.clone().ishln(bits);
    };
    BN.prototype.ushln = function ushln(bits) {
      return this.clone().iushln(bits);
    };
    BN.prototype.shrn = function shrn(bits) {
      return this.clone().ishrn(bits);
    };
    BN.prototype.ushrn = function ushrn(bits) {
      return this.clone().iushrn(bits);
    };
    BN.prototype.testn = function testn(bit) {
      assert(typeof bit === 'number' && bit >= 0);
      var r = bit % 26;
      var s = (bit - r) / 26;
      var q = 1 << r;
      if (this.length <= s)
        return false;
      var w = this.words[s];
      return !!(w & q);
    };
    BN.prototype.imaskn = function imaskn(bits) {
      assert(typeof bits === 'number' && bits >= 0);
      var r = bits % 26;
      var s = (bits - r) / 26;
      assert(this.negative === 0, 'imaskn works only with positive numbers');
      if (this.length <= s) {
        return this;
      }
      if (r !== 0) {
        s++;
      }
      this.length = Math.min(s, this.length);
      if (r !== 0) {
        var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
        this.words[this.length - 1] &= mask;
      }
      return this.strip();
    };
    BN.prototype.maskn = function maskn(bits) {
      return this.clone().imaskn(bits);
    };
    BN.prototype.iaddn = function iaddn(num) {
      assert(typeof num === 'number');
      assert(num < 0x4000000);
      if (num < 0)
        return this.isubn(-num);
      if (this.negative !== 0) {
        if (this.length === 1 && (this.words[0] | 0) < num) {
          this.words[0] = num - (this.words[0] | 0);
          this.negative = 0;
          return this;
        }
        this.negative = 0;
        this.isubn(num);
        this.negative = 1;
        return this;
      }
      return this._iaddn(num);
    };
    BN.prototype._iaddn = function _iaddn(num) {
      this.words[0] += num;
      for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++) {
        this.words[i] -= 0x4000000;
        if (i === this.length - 1) {
          this.words[i + 1] = 1;
        } else {
          this.words[i + 1]++;
        }
      }
      this.length = Math.max(this.length, i + 1);
      return this;
    };
    BN.prototype.isubn = function isubn(num) {
      assert(typeof num === 'number');
      assert(num < 0x4000000);
      if (num < 0)
        return this.iaddn(-num);
      if (this.negative !== 0) {
        this.negative = 0;
        this.iaddn(num);
        this.negative = 1;
        return this;
      }
      this.words[0] -= num;
      if (this.length === 1 && this.words[0] < 0) {
        this.words[0] = -this.words[0];
        this.negative = 1;
      } else {
        for (var i = 0; i < this.length && this.words[i] < 0; i++) {
          this.words[i] += 0x4000000;
          this.words[i + 1] -= 1;
        }
      }
      return this.strip();
    };
    BN.prototype.addn = function addn(num) {
      return this.clone().iaddn(num);
    };
    BN.prototype.subn = function subn(num) {
      return this.clone().isubn(num);
    };
    BN.prototype.iabs = function iabs() {
      this.negative = 0;
      return this;
    };
    BN.prototype.abs = function abs() {
      return this.clone().iabs();
    };
    BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
      var len = num.length + shift;
      var i;
      this._expand(len);
      var w;
      var carry = 0;
      for (i = 0; i < num.length; i++) {
        w = (this.words[i + shift] | 0) + carry;
        var right = (num.words[i] | 0) * mul;
        w -= right & 0x3ffffff;
        carry = (w >> 26) - ((right / 0x4000000) | 0);
        this.words[i + shift] = w & 0x3ffffff;
      }
      for (; i < this.length - shift; i++) {
        w = (this.words[i + shift] | 0) + carry;
        carry = w >> 26;
        this.words[i + shift] = w & 0x3ffffff;
      }
      if (carry === 0)
        return this.strip();
      assert(carry === -1);
      carry = 0;
      for (i = 0; i < this.length; i++) {
        w = -(this.words[i] | 0) + carry;
        carry = w >> 26;
        this.words[i] = w & 0x3ffffff;
      }
      this.negative = 1;
      return this.strip();
    };
    BN.prototype._wordDiv = function _wordDiv(num, mode) {
      var shift = this.length - num.length;
      var a = this.clone();
      var b = num;
      var bhi = b.words[b.length - 1] | 0;
      var bhiBits = this._countBits(bhi);
      shift = 26 - bhiBits;
      if (shift !== 0) {
        b = b.ushln(shift);
        a.iushln(shift);
        bhi = b.words[b.length - 1] | 0;
      }
      var m = a.length - b.length;
      var q;
      if (mode !== 'mod') {
        q = new BN(null);
        q.length = m + 1;
        q.words = new Array(q.length);
        for (var i = 0; i < q.length; i++) {
          q.words[i] = 0;
        }
      }
      var diff = a.clone()._ishlnsubmul(b, 1, m);
      if (diff.negative === 0) {
        a = diff;
        if (q) {
          q.words[m] = 1;
        }
      }
      for (var j = m - 1; j >= 0; j--) {
        var qj = (a.words[b.length + j] | 0) * 0x4000000 + (a.words[b.length + j - 1] | 0);
        qj = Math.min((qj / bhi) | 0, 0x3ffffff);
        a._ishlnsubmul(b, qj, j);
        while (a.negative !== 0) {
          qj--;
          a.negative = 0;
          a._ishlnsubmul(b, 1, j);
          if (!a.isZero()) {
            a.negative ^= 1;
          }
        }
        if (q) {
          q.words[j] = qj;
        }
      }
      if (q) {
        q.strip();
      }
      a.strip();
      if (mode !== 'div' && shift !== 0) {
        a.iushrn(shift);
      }
      return {
        div: q || null,
        mod: a
      };
    };
    BN.prototype.divmod = function divmod(num, mode, positive) {
      assert(!num.isZero());
      if (this.isZero()) {
        return {
          div: new BN(0),
          mod: new BN(0)
        };
      }
      var div,
          mod,
          res;
      if (this.negative !== 0 && num.negative === 0) {
        res = this.neg().divmod(num, mode);
        if (mode !== 'mod') {
          div = res.div.neg();
        }
        if (mode !== 'div') {
          mod = res.mod.neg();
          if (positive && mod.negative !== 0) {
            mod.iadd(num);
          }
        }
        return {
          div: div,
          mod: mod
        };
      }
      if (this.negative === 0 && num.negative !== 0) {
        res = this.divmod(num.neg(), mode);
        if (mode !== 'mod') {
          div = res.div.neg();
        }
        return {
          div: div,
          mod: res.mod
        };
      }
      if ((this.negative & num.negative) !== 0) {
        res = this.neg().divmod(num.neg(), mode);
        if (mode !== 'div') {
          mod = res.mod.neg();
          if (positive && mod.negative !== 0) {
            mod.isub(num);
          }
        }
        return {
          div: res.div,
          mod: mod
        };
      }
      if (num.length > this.length || this.cmp(num) < 0) {
        return {
          div: new BN(0),
          mod: this
        };
      }
      if (num.length === 1) {
        if (mode === 'div') {
          return {
            div: this.divn(num.words[0]),
            mod: null
          };
        }
        if (mode === 'mod') {
          return {
            div: null,
            mod: new BN(this.modn(num.words[0]))
          };
        }
        return {
          div: this.divn(num.words[0]),
          mod: new BN(this.modn(num.words[0]))
        };
      }
      return this._wordDiv(num, mode);
    };
    BN.prototype.div = function div(num) {
      return this.divmod(num, 'div', false).div;
    };
    BN.prototype.mod = function mod(num) {
      return this.divmod(num, 'mod', false).mod;
    };
    BN.prototype.umod = function umod(num) {
      return this.divmod(num, 'mod', true).mod;
    };
    BN.prototype.divRound = function divRound(num) {
      var dm = this.divmod(num);
      if (dm.mod.isZero())
        return dm.div;
      var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
      var half = num.ushrn(1);
      var r2 = num.andln(1);
      var cmp = mod.cmp(half);
      if (cmp < 0 || r2 === 1 && cmp === 0)
        return dm.div;
      return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
    };
    BN.prototype.modn = function modn(num) {
      assert(num <= 0x3ffffff);
      var p = (1 << 26) % num;
      var acc = 0;
      for (var i = this.length - 1; i >= 0; i--) {
        acc = (p * acc + (this.words[i] | 0)) % num;
      }
      return acc;
    };
    BN.prototype.idivn = function idivn(num) {
      assert(num <= 0x3ffffff);
      var carry = 0;
      for (var i = this.length - 1; i >= 0; i--) {
        var w = (this.words[i] | 0) + carry * 0x4000000;
        this.words[i] = (w / num) | 0;
        carry = w % num;
      }
      return this.strip();
    };
    BN.prototype.divn = function divn(num) {
      return this.clone().idivn(num);
    };
    BN.prototype.egcd = function egcd(p) {
      assert(p.negative === 0);
      assert(!p.isZero());
      var x = this;
      var y = p.clone();
      if (x.negative !== 0) {
        x = x.umod(p);
      } else {
        x = x.clone();
      }
      var A = new BN(1);
      var B = new BN(0);
      var C = new BN(0);
      var D = new BN(1);
      var g = 0;
      while (x.isEven() && y.isEven()) {
        x.iushrn(1);
        y.iushrn(1);
        ++g;
      }
      var yp = y.clone();
      var xp = x.clone();
      while (!x.isZero()) {
        for (var i = 0,
            im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1)
          ;
        if (i > 0) {
          x.iushrn(i);
          while (i-- > 0) {
            if (A.isOdd() || B.isOdd()) {
              A.iadd(yp);
              B.isub(xp);
            }
            A.iushrn(1);
            B.iushrn(1);
          }
        }
        for (var j = 0,
            jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1)
          ;
        if (j > 0) {
          y.iushrn(j);
          while (j-- > 0) {
            if (C.isOdd() || D.isOdd()) {
              C.iadd(yp);
              D.isub(xp);
            }
            C.iushrn(1);
            D.iushrn(1);
          }
        }
        if (x.cmp(y) >= 0) {
          x.isub(y);
          A.isub(C);
          B.isub(D);
        } else {
          y.isub(x);
          C.isub(A);
          D.isub(B);
        }
      }
      return {
        a: C,
        b: D,
        gcd: y.iushln(g)
      };
    };
    BN.prototype._invmp = function _invmp(p) {
      assert(p.negative === 0);
      assert(!p.isZero());
      var a = this;
      var b = p.clone();
      if (a.negative !== 0) {
        a = a.umod(p);
      } else {
        a = a.clone();
      }
      var x1 = new BN(1);
      var x2 = new BN(0);
      var delta = b.clone();
      while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
        for (var i = 0,
            im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1)
          ;
        if (i > 0) {
          a.iushrn(i);
          while (i-- > 0) {
            if (x1.isOdd()) {
              x1.iadd(delta);
            }
            x1.iushrn(1);
          }
        }
        for (var j = 0,
            jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1)
          ;
        if (j > 0) {
          b.iushrn(j);
          while (j-- > 0) {
            if (x2.isOdd()) {
              x2.iadd(delta);
            }
            x2.iushrn(1);
          }
        }
        if (a.cmp(b) >= 0) {
          a.isub(b);
          x1.isub(x2);
        } else {
          b.isub(a);
          x2.isub(x1);
        }
      }
      var res;
      if (a.cmpn(1) === 0) {
        res = x1;
      } else {
        res = x2;
      }
      if (res.cmpn(0) < 0) {
        res.iadd(p);
      }
      return res;
    };
    BN.prototype.gcd = function gcd(num) {
      if (this.isZero())
        return num.abs();
      if (num.isZero())
        return this.abs();
      var a = this.clone();
      var b = num.clone();
      a.negative = 0;
      b.negative = 0;
      for (var shift = 0; a.isEven() && b.isEven(); shift++) {
        a.iushrn(1);
        b.iushrn(1);
      }
      do {
        while (a.isEven()) {
          a.iushrn(1);
        }
        while (b.isEven()) {
          b.iushrn(1);
        }
        var r = a.cmp(b);
        if (r < 0) {
          var t = a;
          a = b;
          b = t;
        } else if (r === 0 || b.cmpn(1) === 0) {
          break;
        }
        a.isub(b);
      } while (true);
      return b.iushln(shift);
    };
    BN.prototype.invm = function invm(num) {
      return this.egcd(num).a.umod(num);
    };
    BN.prototype.isEven = function isEven() {
      return (this.words[0] & 1) === 0;
    };
    BN.prototype.isOdd = function isOdd() {
      return (this.words[0] & 1) === 1;
    };
    BN.prototype.andln = function andln(num) {
      return this.words[0] & num;
    };
    BN.prototype.bincn = function bincn(bit) {
      assert(typeof bit === 'number');
      var r = bit % 26;
      var s = (bit - r) / 26;
      var q = 1 << r;
      if (this.length <= s) {
        this._expand(s + 1);
        this.words[s] |= q;
        return this;
      }
      var carry = q;
      for (var i = s; carry !== 0 && i < this.length; i++) {
        var w = this.words[i] | 0;
        w += carry;
        carry = w >>> 26;
        w &= 0x3ffffff;
        this.words[i] = w;
      }
      if (carry !== 0) {
        this.words[i] = carry;
        this.length++;
      }
      return this;
    };
    BN.prototype.isZero = function isZero() {
      return this.length === 1 && this.words[0] === 0;
    };
    BN.prototype.cmpn = function cmpn(num) {
      var negative = num < 0;
      if (this.negative !== 0 && !negative)
        return -1;
      if (this.negative === 0 && negative)
        return 1;
      this.strip();
      var res;
      if (this.length > 1) {
        res = 1;
      } else {
        if (negative) {
          num = -num;
        }
        assert(num <= 0x3ffffff, 'Number is too big');
        var w = this.words[0] | 0;
        res = w === num ? 0 : w < num ? -1 : 1;
      }
      if (this.negative !== 0)
        return -res | 0;
      return res;
    };
    BN.prototype.cmp = function cmp(num) {
      if (this.negative !== 0 && num.negative === 0)
        return -1;
      if (this.negative === 0 && num.negative !== 0)
        return 1;
      var res = this.ucmp(num);
      if (this.negative !== 0)
        return -res | 0;
      return res;
    };
    BN.prototype.ucmp = function ucmp(num) {
      if (this.length > num.length)
        return 1;
      if (this.length < num.length)
        return -1;
      var res = 0;
      for (var i = this.length - 1; i >= 0; i--) {
        var a = this.words[i] | 0;
        var b = num.words[i] | 0;
        if (a === b)
          continue;
        if (a < b) {
          res = -1;
        } else if (a > b) {
          res = 1;
        }
        break;
      }
      return res;
    };
    BN.prototype.gtn = function gtn(num) {
      return this.cmpn(num) === 1;
    };
    BN.prototype.gt = function gt(num) {
      return this.cmp(num) === 1;
    };
    BN.prototype.gten = function gten(num) {
      return this.cmpn(num) >= 0;
    };
    BN.prototype.gte = function gte(num) {
      return this.cmp(num) >= 0;
    };
    BN.prototype.ltn = function ltn(num) {
      return this.cmpn(num) === -1;
    };
    BN.prototype.lt = function lt(num) {
      return this.cmp(num) === -1;
    };
    BN.prototype.lten = function lten(num) {
      return this.cmpn(num) <= 0;
    };
    BN.prototype.lte = function lte(num) {
      return this.cmp(num) <= 0;
    };
    BN.prototype.eqn = function eqn(num) {
      return this.cmpn(num) === 0;
    };
    BN.prototype.eq = function eq(num) {
      return this.cmp(num) === 0;
    };
    BN.red = function red(num) {
      return new Red(num);
    };
    BN.prototype.toRed = function toRed(ctx) {
      assert(!this.red, 'Already a number in reduction context');
      assert(this.negative === 0, 'red works only with positives');
      return ctx.convertTo(this)._forceRed(ctx);
    };
    BN.prototype.fromRed = function fromRed() {
      assert(this.red, 'fromRed works only with numbers in reduction context');
      return this.red.convertFrom(this);
    };
    BN.prototype._forceRed = function _forceRed(ctx) {
      this.red = ctx;
      return this;
    };
    BN.prototype.forceRed = function forceRed(ctx) {
      assert(!this.red, 'Already a number in reduction context');
      return this._forceRed(ctx);
    };
    BN.prototype.redAdd = function redAdd(num) {
      assert(this.red, 'redAdd works only with red numbers');
      return this.red.add(this, num);
    };
    BN.prototype.redIAdd = function redIAdd(num) {
      assert(this.red, 'redIAdd works only with red numbers');
      return this.red.iadd(this, num);
    };
    BN.prototype.redSub = function redSub(num) {
      assert(this.red, 'redSub works only with red numbers');
      return this.red.sub(this, num);
    };
    BN.prototype.redISub = function redISub(num) {
      assert(this.red, 'redISub works only with red numbers');
      return this.red.isub(this, num);
    };
    BN.prototype.redShl = function redShl(num) {
      assert(this.red, 'redShl works only with red numbers');
      return this.red.shl(this, num);
    };
    BN.prototype.redMul = function redMul(num) {
      assert(this.red, 'redMul works only with red numbers');
      this.red._verify2(this, num);
      return this.red.mul(this, num);
    };
    BN.prototype.redIMul = function redIMul(num) {
      assert(this.red, 'redMul works only with red numbers');
      this.red._verify2(this, num);
      return this.red.imul(this, num);
    };
    BN.prototype.redSqr = function redSqr() {
      assert(this.red, 'redSqr works only with red numbers');
      this.red._verify1(this);
      return this.red.sqr(this);
    };
    BN.prototype.redISqr = function redISqr() {
      assert(this.red, 'redISqr works only with red numbers');
      this.red._verify1(this);
      return this.red.isqr(this);
    };
    BN.prototype.redSqrt = function redSqrt() {
      assert(this.red, 'redSqrt works only with red numbers');
      this.red._verify1(this);
      return this.red.sqrt(this);
    };
    BN.prototype.redInvm = function redInvm() {
      assert(this.red, 'redInvm works only with red numbers');
      this.red._verify1(this);
      return this.red.invm(this);
    };
    BN.prototype.redNeg = function redNeg() {
      assert(this.red, 'redNeg works only with red numbers');
      this.red._verify1(this);
      return this.red.neg(this);
    };
    BN.prototype.redPow = function redPow(num) {
      assert(this.red && !num.red, 'redPow(normalNum)');
      this.red._verify1(this);
      return this.red.pow(this, num);
    };
    var primes = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function MPrime(name, p) {
      this.name = name;
      this.p = new BN(p, 16);
      this.n = this.p.bitLength();
      this.k = new BN(1).iushln(this.n).isub(this.p);
      this.tmp = this._tmp();
    }
    MPrime.prototype._tmp = function _tmp() {
      var tmp = new BN(null);
      tmp.words = new Array(Math.ceil(this.n / 13));
      return tmp;
    };
    MPrime.prototype.ireduce = function ireduce(num) {
      var r = num;
      var rlen;
      do {
        this.split(r, this.tmp);
        r = this.imulK(r);
        r = r.iadd(this.tmp);
        rlen = r.bitLength();
      } while (rlen > this.n);
      var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
      if (cmp === 0) {
        r.words[0] = 0;
        r.length = 1;
      } else if (cmp > 0) {
        r.isub(this.p);
      } else {
        r.strip();
      }
      return r;
    };
    MPrime.prototype.split = function split(input, out) {
      input.iushrn(this.n, 0, out);
    };
    MPrime.prototype.imulK = function imulK(num) {
      return num.imul(this.k);
    };
    function K256() {
      MPrime.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
    }
    inherits(K256, MPrime);
    K256.prototype.split = function split(input, output) {
      var mask = 0x3fffff;
      var outLen = Math.min(input.length, 9);
      for (var i = 0; i < outLen; i++) {
        output.words[i] = input.words[i];
      }
      output.length = outLen;
      if (input.length <= 9) {
        input.words[0] = 0;
        input.length = 1;
        return;
      }
      var prev = input.words[9];
      output.words[output.length++] = prev & mask;
      for (i = 10; i < input.length; i++) {
        var next = input.words[i] | 0;
        input.words[i - 10] = ((next & mask) << 4) | (prev >>> 22);
        prev = next;
      }
      prev >>>= 22;
      input.words[i - 10] = prev;
      if (prev === 0 && input.length > 10) {
        input.length -= 10;
      } else {
        input.length -= 9;
      }
    };
    K256.prototype.imulK = function imulK(num) {
      num.words[num.length] = 0;
      num.words[num.length + 1] = 0;
      num.length += 2;
      var lo = 0;
      for (var i = 0; i < num.length; i++) {
        var w = num.words[i] | 0;
        lo += w * 0x3d1;
        num.words[i] = lo & 0x3ffffff;
        lo = w * 0x40 + ((lo / 0x4000000) | 0);
      }
      if (num.words[num.length - 1] === 0) {
        num.length--;
        if (num.words[num.length - 1] === 0) {
          num.length--;
        }
      }
      return num;
    };
    function P224() {
      MPrime.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
    }
    inherits(P224, MPrime);
    function P192() {
      MPrime.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
    }
    inherits(P192, MPrime);
    function P25519() {
      MPrime.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
    }
    inherits(P25519, MPrime);
    P25519.prototype.imulK = function imulK(num) {
      var carry = 0;
      for (var i = 0; i < num.length; i++) {
        var hi = (num.words[i] | 0) * 0x13 + carry;
        var lo = hi & 0x3ffffff;
        hi >>>= 26;
        num.words[i] = lo;
        carry = hi;
      }
      if (carry !== 0) {
        num.words[num.length++] = carry;
      }
      return num;
    };
    BN._prime = function prime(name) {
      if (primes[name])
        return primes[name];
      var prime;
      if (name === 'k256') {
        prime = new K256();
      } else if (name === 'p224') {
        prime = new P224();
      } else if (name === 'p192') {
        prime = new P192();
      } else if (name === 'p25519') {
        prime = new P25519();
      } else {
        throw new Error('Unknown prime ' + name);
      }
      primes[name] = prime;
      return prime;
    };
    function Red(m) {
      if (typeof m === 'string') {
        var prime = BN._prime(m);
        this.m = prime.p;
        this.prime = prime;
      } else {
        assert(m.gtn(1), 'modulus must be greater than 1');
        this.m = m;
        this.prime = null;
      }
    }
    Red.prototype._verify1 = function _verify1(a) {
      assert(a.negative === 0, 'red works only with positives');
      assert(a.red, 'red works only with red numbers');
    };
    Red.prototype._verify2 = function _verify2(a, b) {
      assert((a.negative | b.negative) === 0, 'red works only with positives');
      assert(a.red && a.red === b.red, 'red works only with red numbers');
    };
    Red.prototype.imod = function imod(a) {
      if (this.prime)
        return this.prime.ireduce(a)._forceRed(this);
      return a.umod(this.m)._forceRed(this);
    };
    Red.prototype.neg = function neg(a) {
      if (a.isZero()) {
        return a.clone();
      }
      return this.m.sub(a)._forceRed(this);
    };
    Red.prototype.add = function add(a, b) {
      this._verify2(a, b);
      var res = a.add(b);
      if (res.cmp(this.m) >= 0) {
        res.isub(this.m);
      }
      return res._forceRed(this);
    };
    Red.prototype.iadd = function iadd(a, b) {
      this._verify2(a, b);
      var res = a.iadd(b);
      if (res.cmp(this.m) >= 0) {
        res.isub(this.m);
      }
      return res;
    };
    Red.prototype.sub = function sub(a, b) {
      this._verify2(a, b);
      var res = a.sub(b);
      if (res.cmpn(0) < 0) {
        res.iadd(this.m);
      }
      return res._forceRed(this);
    };
    Red.prototype.isub = function isub(a, b) {
      this._verify2(a, b);
      var res = a.isub(b);
      if (res.cmpn(0) < 0) {
        res.iadd(this.m);
      }
      return res;
    };
    Red.prototype.shl = function shl(a, num) {
      this._verify1(a);
      return this.imod(a.ushln(num));
    };
    Red.prototype.imul = function imul(a, b) {
      this._verify2(a, b);
      return this.imod(a.imul(b));
    };
    Red.prototype.mul = function mul(a, b) {
      this._verify2(a, b);
      return this.imod(a.mul(b));
    };
    Red.prototype.isqr = function isqr(a) {
      return this.imul(a, a.clone());
    };
    Red.prototype.sqr = function sqr(a) {
      return this.mul(a, a);
    };
    Red.prototype.sqrt = function sqrt(a) {
      if (a.isZero())
        return a.clone();
      var mod3 = this.m.andln(3);
      assert(mod3 % 2 === 1);
      if (mod3 === 3) {
        var pow = this.m.add(new BN(1)).iushrn(2);
        return this.pow(a, pow);
      }
      var q = this.m.subn(1);
      var s = 0;
      while (!q.isZero() && q.andln(1) === 0) {
        s++;
        q.iushrn(1);
      }
      assert(!q.isZero());
      var one = new BN(1).toRed(this);
      var nOne = one.redNeg();
      var lpow = this.m.subn(1).iushrn(1);
      var z = this.m.bitLength();
      z = new BN(2 * z * z).toRed(this);
      while (this.pow(z, lpow).cmp(nOne) !== 0) {
        z.redIAdd(nOne);
      }
      var c = this.pow(z, q);
      var r = this.pow(a, q.addn(1).iushrn(1));
      var t = this.pow(a, q);
      var m = s;
      while (t.cmp(one) !== 0) {
        var tmp = t;
        for (var i = 0; tmp.cmp(one) !== 0; i++) {
          tmp = tmp.redSqr();
        }
        assert(i < m);
        var b = this.pow(c, new BN(1).iushln(m - i - 1));
        r = r.redMul(b);
        c = b.redSqr();
        t = t.redMul(c);
        m = i;
      }
      return r;
    };
    Red.prototype.invm = function invm(a) {
      var inv = a._invmp(this.m);
      if (inv.negative !== 0) {
        inv.negative = 0;
        return this.imod(inv).redNeg();
      } else {
        return this.imod(inv);
      }
    };
    Red.prototype.pow = function pow(a, num) {
      if (num.isZero())
        return new BN(1);
      if (num.cmpn(1) === 0)
        return a.clone();
      var windowSize = 4;
      var wnd = new Array(1 << windowSize);
      wnd[0] = new BN(1).toRed(this);
      wnd[1] = a;
      for (var i = 2; i < wnd.length; i++) {
        wnd[i] = this.mul(wnd[i - 1], a);
      }
      var res = wnd[0];
      var current = 0;
      var currentLen = 0;
      var start = num.bitLength() % 26;
      if (start === 0) {
        start = 26;
      }
      for (i = num.length - 1; i >= 0; i--) {
        var word = num.words[i];
        for (var j = start - 1; j >= 0; j--) {
          var bit = (word >> j) & 1;
          if (res !== wnd[0]) {
            res = this.sqr(res);
          }
          if (bit === 0 && current === 0) {
            currentLen = 0;
            continue;
          }
          current <<= 1;
          current |= bit;
          currentLen++;
          if (currentLen !== windowSize && (i !== 0 || j !== 0))
            continue;
          res = this.mul(res, wnd[current]);
          currentLen = 0;
          current = 0;
        }
        start = 26;
      }
      return res;
    };
    Red.prototype.convertTo = function convertTo(num) {
      var r = num.umod(this.m);
      return r === num ? r.clone() : r;
    };
    Red.prototype.convertFrom = function convertFrom(num) {
      var res = num.clone();
      res.red = null;
      return res;
    };
    BN.mont = function mont(num) {
      return new Mont(num);
    };
    function Mont(m) {
      Red.call(this, m);
      this.shift = this.m.bitLength();
      if (this.shift % 26 !== 0) {
        this.shift += 26 - (this.shift % 26);
      }
      this.r = new BN(1).iushln(this.shift);
      this.r2 = this.imod(this.r.sqr());
      this.rinv = this.r._invmp(this.m);
      this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
      this.minv = this.minv.umod(this.r);
      this.minv = this.r.sub(this.minv);
    }
    inherits(Mont, Red);
    Mont.prototype.convertTo = function convertTo(num) {
      return this.imod(num.ushln(this.shift));
    };
    Mont.prototype.convertFrom = function convertFrom(num) {
      var r = this.imod(num.mul(this.rinv));
      r.red = null;
      return r;
    };
    Mont.prototype.imul = function imul(a, b) {
      if (a.isZero() || b.isZero()) {
        a.words[0] = 0;
        a.length = 1;
        return a;
      }
      var t = a.imul(b);
      var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
      var u = t.isub(c).iushrn(this.shift);
      var res = u;
      if (u.cmp(this.m) >= 0) {
        res = u.isub(this.m);
      } else if (u.cmpn(0) < 0) {
        res = u.iadd(this.m);
      }
      return res._forceRed(this);
    };
    Mont.prototype.mul = function mul(a, b) {
      if (a.isZero() || b.isZero())
        return new BN(0)._forceRed(this);
      var t = a.mul(b);
      var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
      var u = t.isub(c).iushrn(this.shift);
      var res = u;
      if (u.cmp(this.m) >= 0) {
        res = u.isub(this.m);
      } else if (u.cmpn(0) < 0) {
        res = u.iadd(this.m);
      }
      return res._forceRed(this);
    };
    Mont.prototype.invm = function invm(a) {
      var res = this.imod(a._invmp(this.m).mul(this.r2));
      return res._forceRed(this);
    };
  })(typeof module === 'undefined' || module, this);
  return module.exports;
});

$__System.registerDynamic("2d", ["4"], true, function($__require, exports, module) {
  "use strict";
  var Buffer = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  var intSize = 4;
  var zeroBuffer = new Buffer(intSize);
  zeroBuffer.fill(0);
  var chrsz = 8;
  function toArray(buf, bigEndian) {
    if ((buf.length % intSize) !== 0) {
      var len = buf.length + (intSize - (buf.length % intSize));
      buf = Buffer.concat([buf, zeroBuffer], len);
    }
    var arr = [];
    var fn = bigEndian ? buf.readInt32BE : buf.readInt32LE;
    for (var i = 0; i < buf.length; i += intSize) {
      arr.push(fn.call(buf, i));
    }
    return arr;
  }
  function toBuffer(arr, size, bigEndian) {
    var buf = new Buffer(size);
    var fn = bigEndian ? buf.writeInt32BE : buf.writeInt32LE;
    for (var i = 0; i < arr.length; i++) {
      fn.call(buf, arr[i], i * 4, true);
    }
    return buf;
  }
  function hash(buf, fn, hashSize, bigEndian) {
    if (!Buffer.isBuffer(buf))
      buf = new Buffer(buf);
    var arr = fn(toArray(buf, bigEndian), buf.length * chrsz);
    return toBuffer(arr, hashSize, bigEndian);
  }
  exports.hash = hash;
  return module.exports;
});

$__System.registerDynamic("2e", ["2d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var helpers = $__require('2d');
  function core_md5(x, len) {
    x[len >> 5] |= 0x80 << ((len) % 32);
    x[(((len + 64) >>> 9) << 4) + 14] = len;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for (var i = 0; i < x.length; i += 16) {
      var olda = a;
      var oldb = b;
      var oldc = c;
      var oldd = d;
      a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
      d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
      b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
      a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
      d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
      c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
      d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = safe_add(a, olda);
      b = safe_add(b, oldb);
      c = safe_add(c, oldc);
      d = safe_add(d, oldd);
    }
    return Array(a, b, c, d);
  }
  function md5_cmn(q, a, b, x, s, t) {
    return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
  }
  function md5_ff(a, b, c, d, x, s, t) {
    return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
  }
  function md5_gg(a, b, c, d, x, s, t) {
    return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
  }
  function md5_hh(a, b, c, d, x, s, t) {
    return md5_cmn(b ^ c ^ d, a, b, x, s, t);
  }
  function md5_ii(a, b, c, d, x, s, t) {
    return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
  }
  function safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
  }
  function bit_rol(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
  }
  module.exports = function md5(buf) {
    return helpers.hash(buf, core_md5, 16);
  };
  return module.exports;
});

$__System.registerDynamic("2f", ["4"], true, function($__require, exports, module) {
  var Buffer = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  var zl = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13];
  var zr = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11];
  var sl = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6];
  var sr = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
  var hl = [0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E];
  var hr = [0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000];
  function bytesToWords(bytes) {
    var words = [];
    for (var i = 0,
        b = 0; i < bytes.length; i++, b += 8) {
      words[b >>> 5] |= bytes[i] << (24 - b % 32);
    }
    return words;
  }
  function wordsToBytes(words) {
    var bytes = [];
    for (var b = 0; b < words.length * 32; b += 8) {
      bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
    }
    return bytes;
  }
  function processBlock(H, M, offset) {
    for (var i = 0; i < 16; i++) {
      var offset_i = offset + i;
      var M_offset_i = M[offset_i];
      M[offset_i] = ((((M_offset_i << 8) | (M_offset_i >>> 24)) & 0x00ff00ff) | (((M_offset_i << 24) | (M_offset_i >>> 8)) & 0xff00ff00));
    }
    var al,
        bl,
        cl,
        dl,
        el;
    var ar,
        br,
        cr,
        dr,
        er;
    ar = al = H[0];
    br = bl = H[1];
    cr = cl = H[2];
    dr = dl = H[3];
    er = el = H[4];
    var t;
    for (i = 0; i < 80; i += 1) {
      t = (al + M[offset + zl[i]]) | 0;
      if (i < 16) {
        t += f1(bl, cl, dl) + hl[0];
      } else if (i < 32) {
        t += f2(bl, cl, dl) + hl[1];
      } else if (i < 48) {
        t += f3(bl, cl, dl) + hl[2];
      } else if (i < 64) {
        t += f4(bl, cl, dl) + hl[3];
      } else {
        t += f5(bl, cl, dl) + hl[4];
      }
      t = t | 0;
      t = rotl(t, sl[i]);
      t = (t + el) | 0;
      al = el;
      el = dl;
      dl = rotl(cl, 10);
      cl = bl;
      bl = t;
      t = (ar + M[offset + zr[i]]) | 0;
      if (i < 16) {
        t += f5(br, cr, dr) + hr[0];
      } else if (i < 32) {
        t += f4(br, cr, dr) + hr[1];
      } else if (i < 48) {
        t += f3(br, cr, dr) + hr[2];
      } else if (i < 64) {
        t += f2(br, cr, dr) + hr[3];
      } else {
        t += f1(br, cr, dr) + hr[4];
      }
      t = t | 0;
      t = rotl(t, sr[i]);
      t = (t + er) | 0;
      ar = er;
      er = dr;
      dr = rotl(cr, 10);
      cr = br;
      br = t;
    }
    t = (H[1] + cl + dr) | 0;
    H[1] = (H[2] + dl + er) | 0;
    H[2] = (H[3] + el + ar) | 0;
    H[3] = (H[4] + al + br) | 0;
    H[4] = (H[0] + bl + cr) | 0;
    H[0] = t;
  }
  function f1(x, y, z) {
    return ((x) ^ (y) ^ (z));
  }
  function f2(x, y, z) {
    return (((x) & (y)) | ((~x) & (z)));
  }
  function f3(x, y, z) {
    return (((x) | (~(y))) ^ (z));
  }
  function f4(x, y, z) {
    return (((x) & (z)) | ((y) & (~(z))));
  }
  function f5(x, y, z) {
    return ((x) ^ ((y) | (~(z))));
  }
  function rotl(x, n) {
    return (x << n) | (x >>> (32 - n));
  }
  function ripemd160(message) {
    var H = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0];
    if (typeof message === 'string') {
      message = new Buffer(message, 'utf8');
    }
    var m = bytesToWords(message);
    var nBitsLeft = message.length * 8;
    var nBitsTotal = message.length * 8;
    m[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
    m[(((nBitsLeft + 64) >>> 9) << 4) + 14] = ((((nBitsTotal << 8) | (nBitsTotal >>> 24)) & 0x00ff00ff) | (((nBitsTotal << 24) | (nBitsTotal >>> 8)) & 0xff00ff00));
    for (var i = 0; i < m.length; i += 16) {
      processBlock(H, m, i);
    }
    for (i = 0; i < 5; i++) {
      var H_i = H[i];
      H[i] = (((H_i << 8) | (H_i >>> 24)) & 0x00ff00ff) | (((H_i << 24) | (H_i >>> 8)) & 0xff00ff00);
    }
    var digestbytes = wordsToBytes(H);
    return new Buffer(digestbytes);
  }
  module.exports = ripemd160;
  return module.exports;
});

$__System.registerDynamic("30", ["15", "31", "2a", "4"], true, function($__require, exports, module) {
  var process = $__require("2a"),
      Buffer = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  var inherits = $__require('15');
  var Hash = $__require('31');
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0];
  var W = new Array(80);
  function Sha() {
    this.init();
    this._w = W;
    Hash.call(this, 64, 56);
  }
  inherits(Sha, Hash);
  Sha.prototype.init = function() {
    this._a = 0x67452301;
    this._b = 0xefcdab89;
    this._c = 0x98badcfe;
    this._d = 0x10325476;
    this._e = 0xc3d2e1f0;
    return this;
  };
  function rotl5(num) {
    return (num << 5) | (num >>> 27);
  }
  function rotl30(num) {
    return (num << 30) | (num >>> 2);
  }
  function ft(s, b, c, d) {
    if (s === 0)
      return (b & c) | ((~b) & d);
    if (s === 2)
      return (b & c) | (b & d) | (c & d);
    return b ^ c ^ d;
  }
  Sha.prototype._update = function(M) {
    var W = this._w;
    var a = this._a | 0;
    var b = this._b | 0;
    var c = this._c | 0;
    var d = this._d | 0;
    var e = this._e | 0;
    for (var i = 0; i < 16; ++i)
      W[i] = M.readInt32BE(i * 4);
    for (; i < 80; ++i)
      W[i] = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
    for (var j = 0; j < 80; ++j) {
      var s = ~~(j / 20);
      var t = (rotl5(a) + ft(s, b, c, d) + e + W[j] + K[s]) | 0;
      e = d;
      d = c;
      c = rotl30(b);
      b = a;
      a = t;
    }
    this._a = (a + this._a) | 0;
    this._b = (b + this._b) | 0;
    this._c = (c + this._c) | 0;
    this._d = (d + this._d) | 0;
    this._e = (e + this._e) | 0;
  };
  Sha.prototype._hash = function() {
    var H = new Buffer(20);
    H.writeInt32BE(this._a | 0, 0);
    H.writeInt32BE(this._b | 0, 4);
    H.writeInt32BE(this._c | 0, 8);
    H.writeInt32BE(this._d | 0, 12);
    H.writeInt32BE(this._e | 0, 16);
    return H;
  };
  module.exports = Sha;
  return module.exports;
});

$__System.registerDynamic("32", ["15", "31", "2a", "4"], true, function($__require, exports, module) {
  var process = $__require("2a"),
      Buffer = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  var inherits = $__require('15');
  var Hash = $__require('31');
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0];
  var W = new Array(80);
  function Sha1() {
    this.init();
    this._w = W;
    Hash.call(this, 64, 56);
  }
  inherits(Sha1, Hash);
  Sha1.prototype.init = function() {
    this._a = 0x67452301;
    this._b = 0xefcdab89;
    this._c = 0x98badcfe;
    this._d = 0x10325476;
    this._e = 0xc3d2e1f0;
    return this;
  };
  function rotl1(num) {
    return (num << 1) | (num >>> 31);
  }
  function rotl5(num) {
    return (num << 5) | (num >>> 27);
  }
  function rotl30(num) {
    return (num << 30) | (num >>> 2);
  }
  function ft(s, b, c, d) {
    if (s === 0)
      return (b & c) | ((~b) & d);
    if (s === 2)
      return (b & c) | (b & d) | (c & d);
    return b ^ c ^ d;
  }
  Sha1.prototype._update = function(M) {
    var W = this._w;
    var a = this._a | 0;
    var b = this._b | 0;
    var c = this._c | 0;
    var d = this._d | 0;
    var e = this._e | 0;
    for (var i = 0; i < 16; ++i)
      W[i] = M.readInt32BE(i * 4);
    for (; i < 80; ++i)
      W[i] = rotl1(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16]);
    for (var j = 0; j < 80; ++j) {
      var s = ~~(j / 20);
      var t = (rotl5(a) + ft(s, b, c, d) + e + W[j] + K[s]) | 0;
      e = d;
      d = c;
      c = rotl30(b);
      b = a;
      a = t;
    }
    this._a = (a + this._a) | 0;
    this._b = (b + this._b) | 0;
    this._c = (c + this._c) | 0;
    this._d = (d + this._d) | 0;
    this._e = (e + this._e) | 0;
  };
  Sha1.prototype._hash = function() {
    var H = new Buffer(20);
    H.writeInt32BE(this._a | 0, 0);
    H.writeInt32BE(this._b | 0, 4);
    H.writeInt32BE(this._c | 0, 8);
    H.writeInt32BE(this._d | 0, 12);
    H.writeInt32BE(this._e | 0, 16);
    return H;
  };
  module.exports = Sha1;
  return module.exports;
});

$__System.registerDynamic("33", ["15", "34", "31", "2a", "4"], true, function($__require, exports, module) {
  var process = $__require("2a"),
      Buffer = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  var inherits = $__require('15');
  var Sha256 = $__require('34');
  var Hash = $__require('31');
  var W = new Array(64);
  function Sha224() {
    this.init();
    this._w = W;
    Hash.call(this, 64, 56);
  }
  inherits(Sha224, Sha256);
  Sha224.prototype.init = function() {
    this._a = 0xc1059ed8;
    this._b = 0x367cd507;
    this._c = 0x3070dd17;
    this._d = 0xf70e5939;
    this._e = 0xffc00b31;
    this._f = 0x68581511;
    this._g = 0x64f98fa7;
    this._h = 0xbefa4fa4;
    return this;
  };
  Sha224.prototype._hash = function() {
    var H = new Buffer(28);
    H.writeInt32BE(this._a, 0);
    H.writeInt32BE(this._b, 4);
    H.writeInt32BE(this._c, 8);
    H.writeInt32BE(this._d, 12);
    H.writeInt32BE(this._e, 16);
    H.writeInt32BE(this._f, 20);
    H.writeInt32BE(this._g, 24);
    return H;
  };
  module.exports = Sha224;
  return module.exports;
});

$__System.registerDynamic("34", ["15", "31", "2a", "4"], true, function($__require, exports, module) {
  var process = $__require("2a"),
      Buffer = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  var inherits = $__require('15');
  var Hash = $__require('31');
  var K = [0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
  var W = new Array(64);
  function Sha256() {
    this.init();
    this._w = W;
    Hash.call(this, 64, 56);
  }
  inherits(Sha256, Hash);
  Sha256.prototype.init = function() {
    this._a = 0x6a09e667;
    this._b = 0xbb67ae85;
    this._c = 0x3c6ef372;
    this._d = 0xa54ff53a;
    this._e = 0x510e527f;
    this._f = 0x9b05688c;
    this._g = 0x1f83d9ab;
    this._h = 0x5be0cd19;
    return this;
  };
  function ch(x, y, z) {
    return z ^ (x & (y ^ z));
  }
  function maj(x, y, z) {
    return (x & y) | (z & (x | y));
  }
  function sigma0(x) {
    return (x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10);
  }
  function sigma1(x) {
    return (x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7);
  }
  function gamma0(x) {
    return (x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ (x >>> 3);
  }
  function gamma1(x) {
    return (x >>> 17 | x << 15) ^ (x >>> 19 | x << 13) ^ (x >>> 10);
  }
  Sha256.prototype._update = function(M) {
    var W = this._w;
    var a = this._a | 0;
    var b = this._b | 0;
    var c = this._c | 0;
    var d = this._d | 0;
    var e = this._e | 0;
    var f = this._f | 0;
    var g = this._g | 0;
    var h = this._h | 0;
    for (var i = 0; i < 16; ++i)
      W[i] = M.readInt32BE(i * 4);
    for (; i < 64; ++i)
      W[i] = (gamma1(W[i - 2]) + W[i - 7] + gamma0(W[i - 15]) + W[i - 16]) | 0;
    for (var j = 0; j < 64; ++j) {
      var T1 = (h + sigma1(e) + ch(e, f, g) + K[j] + W[j]) | 0;
      var T2 = (sigma0(a) + maj(a, b, c)) | 0;
      h = g;
      g = f;
      f = e;
      e = (d + T1) | 0;
      d = c;
      c = b;
      b = a;
      a = (T1 + T2) | 0;
    }
    this._a = (a + this._a) | 0;
    this._b = (b + this._b) | 0;
    this._c = (c + this._c) | 0;
    this._d = (d + this._d) | 0;
    this._e = (e + this._e) | 0;
    this._f = (f + this._f) | 0;
    this._g = (g + this._g) | 0;
    this._h = (h + this._h) | 0;
  };
  Sha256.prototype._hash = function() {
    var H = new Buffer(32);
    H.writeInt32BE(this._a, 0);
    H.writeInt32BE(this._b, 4);
    H.writeInt32BE(this._c, 8);
    H.writeInt32BE(this._d, 12);
    H.writeInt32BE(this._e, 16);
    H.writeInt32BE(this._f, 20);
    H.writeInt32BE(this._g, 24);
    H.writeInt32BE(this._h, 28);
    return H;
  };
  module.exports = Sha256;
  return module.exports;
});

$__System.registerDynamic("35", ["15", "36", "31", "2a", "4"], true, function($__require, exports, module) {
  var process = $__require("2a"),
      Buffer = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  var inherits = $__require('15');
  var SHA512 = $__require('36');
  var Hash = $__require('31');
  var W = new Array(160);
  function Sha384() {
    this.init();
    this._w = W;
    Hash.call(this, 128, 112);
  }
  inherits(Sha384, SHA512);
  Sha384.prototype.init = function() {
    this._ah = 0xcbbb9d5d;
    this._bh = 0x629a292a;
    this._ch = 0x9159015a;
    this._dh = 0x152fecd8;
    this._eh = 0x67332667;
    this._fh = 0x8eb44a87;
    this._gh = 0xdb0c2e0d;
    this._hh = 0x47b5481d;
    this._al = 0xc1059ed8;
    this._bl = 0x367cd507;
    this._cl = 0x3070dd17;
    this._dl = 0xf70e5939;
    this._el = 0xffc00b31;
    this._fl = 0x68581511;
    this._gl = 0x64f98fa7;
    this._hl = 0xbefa4fa4;
    return this;
  };
  Sha384.prototype._hash = function() {
    var H = new Buffer(48);
    function writeInt64BE(h, l, offset) {
      H.writeInt32BE(h, offset);
      H.writeInt32BE(l, offset + 4);
    }
    writeInt64BE(this._ah, this._al, 0);
    writeInt64BE(this._bh, this._bl, 8);
    writeInt64BE(this._ch, this._cl, 16);
    writeInt64BE(this._dh, this._dl, 24);
    writeInt64BE(this._eh, this._el, 32);
    writeInt64BE(this._fh, this._fl, 40);
    return H;
  };
  module.exports = Sha384;
  return module.exports;
});

$__System.registerDynamic("31", ["2a", "4"], true, function($__require, exports, module) {
  var process = $__require("2a"),
      Buffer = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  function Hash(blockSize, finalSize) {
    this._block = new Buffer(blockSize);
    this._finalSize = finalSize;
    this._blockSize = blockSize;
    this._len = 0;
    this._s = 0;
  }
  Hash.prototype.update = function(data, enc) {
    if (typeof data === 'string') {
      enc = enc || 'utf8';
      data = new Buffer(data, enc);
    }
    var l = this._len += data.length;
    var s = this._s || 0;
    var f = 0;
    var buffer = this._block;
    while (s < l) {
      var t = Math.min(data.length, f + this._blockSize - (s % this._blockSize));
      var ch = (t - f);
      for (var i = 0; i < ch; i++) {
        buffer[(s % this._blockSize) + i] = data[i + f];
      }
      s += ch;
      f += ch;
      if ((s % this._blockSize) === 0) {
        this._update(buffer);
      }
    }
    this._s = s;
    return this;
  };
  Hash.prototype.digest = function(enc) {
    var l = this._len * 8;
    this._block[this._len % this._blockSize] = 0x80;
    this._block.fill(0, this._len % this._blockSize + 1);
    if (l % (this._blockSize * 8) >= this._finalSize * 8) {
      this._update(this._block);
      this._block.fill(0);
    }
    this._block.writeInt32BE(l, this._blockSize - 4);
    var hash = this._update(this._block) || this._hash();
    return enc ? hash.toString(enc) : hash;
  };
  Hash.prototype._update = function() {
    throw new Error('_update must be implemented by subclass');
  };
  module.exports = Hash;
  return module.exports;
});

$__System.registerDynamic("36", ["15", "31", "2a", "4"], true, function($__require, exports, module) {
  var process = $__require("2a"),
      Buffer = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  var inherits = $__require('15');
  var Hash = $__require('31');
  var K = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];
  var W = new Array(160);
  function Sha512() {
    this.init();
    this._w = W;
    Hash.call(this, 128, 112);
  }
  inherits(Sha512, Hash);
  Sha512.prototype.init = function() {
    this._ah = 0x6a09e667;
    this._bh = 0xbb67ae85;
    this._ch = 0x3c6ef372;
    this._dh = 0xa54ff53a;
    this._eh = 0x510e527f;
    this._fh = 0x9b05688c;
    this._gh = 0x1f83d9ab;
    this._hh = 0x5be0cd19;
    this._al = 0xf3bcc908;
    this._bl = 0x84caa73b;
    this._cl = 0xfe94f82b;
    this._dl = 0x5f1d36f1;
    this._el = 0xade682d1;
    this._fl = 0x2b3e6c1f;
    this._gl = 0xfb41bd6b;
    this._hl = 0x137e2179;
    return this;
  };
  function Ch(x, y, z) {
    return z ^ (x & (y ^ z));
  }
  function maj(x, y, z) {
    return (x & y) | (z & (x | y));
  }
  function sigma0(x, xl) {
    return (x >>> 28 | xl << 4) ^ (xl >>> 2 | x << 30) ^ (xl >>> 7 | x << 25);
  }
  function sigma1(x, xl) {
    return (x >>> 14 | xl << 18) ^ (x >>> 18 | xl << 14) ^ (xl >>> 9 | x << 23);
  }
  function Gamma0(x, xl) {
    return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ (x >>> 7);
  }
  function Gamma0l(x, xl) {
    return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ (x >>> 7 | xl << 25);
  }
  function Gamma1(x, xl) {
    return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ (x >>> 6);
  }
  function Gamma1l(x, xl) {
    return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ (x >>> 6 | xl << 26);
  }
  function getCarry(a, b) {
    return (a >>> 0) < (b >>> 0) ? 1 : 0;
  }
  Sha512.prototype._update = function(M) {
    var W = this._w;
    var ah = this._ah | 0;
    var bh = this._bh | 0;
    var ch = this._ch | 0;
    var dh = this._dh | 0;
    var eh = this._eh | 0;
    var fh = this._fh | 0;
    var gh = this._gh | 0;
    var hh = this._hh | 0;
    var al = this._al | 0;
    var bl = this._bl | 0;
    var cl = this._cl | 0;
    var dl = this._dl | 0;
    var el = this._el | 0;
    var fl = this._fl | 0;
    var gl = this._gl | 0;
    var hl = this._hl | 0;
    for (var i = 0; i < 32; i += 2) {
      W[i] = M.readInt32BE(i * 4);
      W[i + 1] = M.readInt32BE(i * 4 + 4);
    }
    for (; i < 160; i += 2) {
      var xh = W[i - 15 * 2];
      var xl = W[i - 15 * 2 + 1];
      var gamma0 = Gamma0(xh, xl);
      var gamma0l = Gamma0l(xl, xh);
      xh = W[i - 2 * 2];
      xl = W[i - 2 * 2 + 1];
      var gamma1 = Gamma1(xh, xl);
      var gamma1l = Gamma1l(xl, xh);
      var Wi7h = W[i - 7 * 2];
      var Wi7l = W[i - 7 * 2 + 1];
      var Wi16h = W[i - 16 * 2];
      var Wi16l = W[i - 16 * 2 + 1];
      var Wil = (gamma0l + Wi7l) | 0;
      var Wih = (gamma0 + Wi7h + getCarry(Wil, gamma0l)) | 0;
      Wil = (Wil + gamma1l) | 0;
      Wih = (Wih + gamma1 + getCarry(Wil, gamma1l)) | 0;
      Wil = (Wil + Wi16l) | 0;
      Wih = (Wih + Wi16h + getCarry(Wil, Wi16l)) | 0;
      W[i] = Wih;
      W[i + 1] = Wil;
    }
    for (var j = 0; j < 160; j += 2) {
      Wih = W[j];
      Wil = W[j + 1];
      var majh = maj(ah, bh, ch);
      var majl = maj(al, bl, cl);
      var sigma0h = sigma0(ah, al);
      var sigma0l = sigma0(al, ah);
      var sigma1h = sigma1(eh, el);
      var sigma1l = sigma1(el, eh);
      var Kih = K[j];
      var Kil = K[j + 1];
      var chh = Ch(eh, fh, gh);
      var chl = Ch(el, fl, gl);
      var t1l = (hl + sigma1l) | 0;
      var t1h = (hh + sigma1h + getCarry(t1l, hl)) | 0;
      t1l = (t1l + chl) | 0;
      t1h = (t1h + chh + getCarry(t1l, chl)) | 0;
      t1l = (t1l + Kil) | 0;
      t1h = (t1h + Kih + getCarry(t1l, Kil)) | 0;
      t1l = (t1l + Wil) | 0;
      t1h = (t1h + Wih + getCarry(t1l, Wil)) | 0;
      var t2l = (sigma0l + majl) | 0;
      var t2h = (sigma0h + majh + getCarry(t2l, sigma0l)) | 0;
      hh = gh;
      hl = gl;
      gh = fh;
      gl = fl;
      fh = eh;
      fl = el;
      el = (dl + t1l) | 0;
      eh = (dh + t1h + getCarry(el, dl)) | 0;
      dh = ch;
      dl = cl;
      ch = bh;
      cl = bl;
      bh = ah;
      bl = al;
      al = (t1l + t2l) | 0;
      ah = (t1h + t2h + getCarry(al, t1l)) | 0;
    }
    this._al = (this._al + al) | 0;
    this._bl = (this._bl + bl) | 0;
    this._cl = (this._cl + cl) | 0;
    this._dl = (this._dl + dl) | 0;
    this._el = (this._el + el) | 0;
    this._fl = (this._fl + fl) | 0;
    this._gl = (this._gl + gl) | 0;
    this._hl = (this._hl + hl) | 0;
    this._ah = (this._ah + ah + getCarry(this._al, al)) | 0;
    this._bh = (this._bh + bh + getCarry(this._bl, bl)) | 0;
    this._ch = (this._ch + ch + getCarry(this._cl, cl)) | 0;
    this._dh = (this._dh + dh + getCarry(this._dl, dl)) | 0;
    this._eh = (this._eh + eh + getCarry(this._el, el)) | 0;
    this._fh = (this._fh + fh + getCarry(this._fl, fl)) | 0;
    this._gh = (this._gh + gh + getCarry(this._gl, gl)) | 0;
    this._hh = (this._hh + hh + getCarry(this._hl, hl)) | 0;
  };
  Sha512.prototype._hash = function() {
    var H = new Buffer(64);
    function writeInt64BE(h, l, offset) {
      H.writeInt32BE(h, offset);
      H.writeInt32BE(l, offset + 4);
    }
    writeInt64BE(this._ah, this._al, 0);
    writeInt64BE(this._bh, this._bl, 8);
    writeInt64BE(this._ch, this._cl, 16);
    writeInt64BE(this._dh, this._dl, 24);
    writeInt64BE(this._eh, this._el, 32);
    writeInt64BE(this._fh, this._fl, 40);
    writeInt64BE(this._gh, this._gl, 48);
    writeInt64BE(this._hh, this._hl, 56);
    return H;
  };
  module.exports = Sha512;
  return module.exports;
});

$__System.registerDynamic("37", ["30", "32", "33", "34", "35", "36", "2a"], true, function($__require, exports, module) {
  var process = $__require("2a");
  var define,
      global = this || self,
      GLOBAL = global;
  var exports = module.exports = function SHA(algorithm) {
    algorithm = algorithm.toLowerCase();
    var Algorithm = exports[algorithm];
    if (!Algorithm)
      throw new Error(algorithm + ' is not supported (we accept pull requests)');
    return new Algorithm();
  };
  exports.sha = $__require('30');
  exports.sha1 = $__require('32');
  exports.sha224 = $__require('33');
  exports.sha256 = $__require('34');
  exports.sha384 = $__require('35');
  exports.sha512 = $__require('36');
  return module.exports;
});

$__System.registerDynamic("38", ["39", "3a", "3b", "3c", "3d", "2a"], true, function($__require, exports, module) {
  var process = $__require("2a");
  var define,
      global = this || self,
      GLOBAL = global;
  var Stream = (function() {
    try {
      return $__require('st' + 'ream');
    } catch (_) {}
  }());
  exports = module.exports = $__require('39');
  exports.Stream = Stream || exports;
  exports.Readable = exports;
  exports.Writable = $__require('3a');
  exports.Duplex = $__require('3b');
  exports.Transform = $__require('3c');
  exports.PassThrough = $__require('3d');
  if (!process.browser && process.env.READABLE_STREAM === 'disable' && Stream) {
    module.exports = Stream;
  }
  return module.exports;
});

$__System.registerDynamic("3e", ["3a", "2a"], true, function($__require, exports, module) {
  var process = $__require("2a");
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require('3a');
  return module.exports;
});

$__System.registerDynamic("3f", ["3b", "2a"], true, function($__require, exports, module) {
  var process = $__require("2a");
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require('3b');
  return module.exports;
});

$__System.registerDynamic("40", ["3c", "2a"], true, function($__require, exports, module) {
  var process = $__require("2a");
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require('3c');
  return module.exports;
});

$__System.registerDynamic("41", ["42", "43", "2a"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("2a");
  var define,
      global = this || self,
      GLOBAL = global;
  var Buffer = $__require('42').Buffer;
  var bufferShim = $__require('43');
  module.exports = BufferList;
  function BufferList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  BufferList.prototype.push = function(v) {
    var entry = {
      data: v,
      next: null
    };
    if (this.length > 0)
      this.tail.next = entry;
    else
      this.head = entry;
    this.tail = entry;
    ++this.length;
  };
  BufferList.prototype.unshift = function(v) {
    var entry = {
      data: v,
      next: this.head
    };
    if (this.length === 0)
      this.tail = entry;
    this.head = entry;
    ++this.length;
  };
  BufferList.prototype.shift = function() {
    if (this.length === 0)
      return;
    var ret = this.head.data;
    if (this.length === 1)
      this.head = this.tail = null;
    else
      this.head = this.head.next;
    --this.length;
    return ret;
  };
  BufferList.prototype.clear = function() {
    this.head = this.tail = null;
    this.length = 0;
  };
  BufferList.prototype.join = function(s) {
    if (this.length === 0)
      return '';
    var p = this.head;
    var ret = '' + p.data;
    while (p = p.next) {
      ret += s + p.data;
    }
    return ret;
  };
  BufferList.prototype.concat = function(n) {
    if (this.length === 0)
      return bufferShim.alloc(0);
    if (this.length === 1)
      return this.head.data;
    var ret = bufferShim.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;
    while (p) {
      p.data.copy(ret, i);
      i += p.data.length;
      p = p.next;
    }
    return ret;
  };
  return module.exports;
});

$__System.registerDynamic("39", ["45", "46", "44", "42", "43", "47", "15", "@empty", "41", "3b", "48", "2a", "4"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("2a"),
      Buffer = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = Readable;
  var processNextTick = $__require('45');
  var isArray = $__require('46');
  Readable.ReadableState = ReadableState;
  var EE = $__require('44').EventEmitter;
  var EElistenerCount = function(emitter, type) {
    return emitter.listeners(type).length;
  };
  var Stream;
  (function() {
    try {
      Stream = $__require('st' + 'ream');
    } catch (_) {} finally {
      if (!Stream)
        Stream = $__require('44').EventEmitter;
    }
  })();
  var Buffer = $__require('42').Buffer;
  var bufferShim = $__require('43');
  var util = $__require('47');
  util.inherits = $__require('15');
  var debugUtil = $__require('@empty');
  var debug = void 0;
  if (debugUtil && debugUtil.debuglog) {
    debug = debugUtil.debuglog('stream');
  } else {
    debug = function() {};
  }
  var BufferList = $__require('41');
  var StringDecoder;
  util.inherits(Readable, Stream);
  function prependListener(emitter, event, fn) {
    if (typeof emitter.prependListener === 'function') {
      return emitter.prependListener(event, fn);
    } else {
      if (!emitter._events || !emitter._events[event])
        emitter.on(event, fn);
      else if (isArray(emitter._events[event]))
        emitter._events[event].unshift(fn);
      else
        emitter._events[event] = [fn, emitter._events[event]];
    }
  }
  var Duplex;
  function ReadableState(options, stream) {
    Duplex = Duplex || $__require('3b');
    options = options || {};
    this.objectMode = !!options.objectMode;
    if (stream instanceof Duplex)
      this.objectMode = this.objectMode || !!options.readableObjectMode;
    var hwm = options.highWaterMark;
    var defaultHwm = this.objectMode ? 16 : 16 * 1024;
    this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
    this.highWaterMark = ~~this.highWaterMark;
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    this.sync = true;
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.defaultEncoding = options.defaultEncoding || 'utf8';
    this.ranOut = false;
    this.awaitDrain = 0;
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
      if (!StringDecoder)
        StringDecoder = $__require('48').StringDecoder;
      this.decoder = new StringDecoder(options.encoding);
      this.encoding = options.encoding;
    }
  }
  var Duplex;
  function Readable(options) {
    Duplex = Duplex || $__require('3b');
    if (!(this instanceof Readable))
      return new Readable(options);
    this._readableState = new ReadableState(options, this);
    this.readable = true;
    if (options && typeof options.read === 'function')
      this._read = options.read;
    Stream.call(this);
  }
  Readable.prototype.push = function(chunk, encoding) {
    var state = this._readableState;
    if (!state.objectMode && typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;
      if (encoding !== state.encoding) {
        chunk = bufferShim.from(chunk, encoding);
        encoding = '';
      }
    }
    return readableAddChunk(this, state, chunk, encoding, false);
  };
  Readable.prototype.unshift = function(chunk) {
    var state = this._readableState;
    return readableAddChunk(this, state, chunk, '', true);
  };
  Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
  };
  function readableAddChunk(stream, state, chunk, encoding, addToFront) {
    var er = chunkInvalid(state, chunk);
    if (er) {
      stream.emit('error', er);
    } else if (chunk === null) {
      state.reading = false;
      onEofChunk(stream, state);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (state.ended && !addToFront) {
        var e = new Error('stream.push() after EOF');
        stream.emit('error', e);
      } else if (state.endEmitted && addToFront) {
        var _e = new Error('stream.unshift() after end event');
        stream.emit('error', _e);
      } else {
        var skipAdd;
        if (state.decoder && !addToFront && !encoding) {
          chunk = state.decoder.write(chunk);
          skipAdd = !state.objectMode && chunk.length === 0;
        }
        if (!addToFront)
          state.reading = false;
        if (!skipAdd) {
          if (state.flowing && state.length === 0 && !state.sync) {
            stream.emit('data', chunk);
            stream.read(0);
          } else {
            state.length += state.objectMode ? 1 : chunk.length;
            if (addToFront)
              state.buffer.unshift(chunk);
            else
              state.buffer.push(chunk);
            if (state.needReadable)
              emitReadable(stream);
          }
        }
        maybeReadMore(stream, state);
      }
    } else if (!addToFront) {
      state.reading = false;
    }
    return needMoreData(state);
  }
  function needMoreData(state) {
    return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
  }
  Readable.prototype.setEncoding = function(enc) {
    if (!StringDecoder)
      StringDecoder = $__require('48').StringDecoder;
    this._readableState.decoder = new StringDecoder(enc);
    this._readableState.encoding = enc;
    return this;
  };
  var MAX_HWM = 0x800000;
  function computeNewHighWaterMark(n) {
    if (n >= MAX_HWM) {
      n = MAX_HWM;
    } else {
      n--;
      n |= n >>> 1;
      n |= n >>> 2;
      n |= n >>> 4;
      n |= n >>> 8;
      n |= n >>> 16;
      n++;
    }
    return n;
  }
  function howMuchToRead(n, state) {
    if (n <= 0 || state.length === 0 && state.ended)
      return 0;
    if (state.objectMode)
      return 1;
    if (n !== n) {
      if (state.flowing && state.length)
        return state.buffer.head.data.length;
      else
        return state.length;
    }
    if (n > state.highWaterMark)
      state.highWaterMark = computeNewHighWaterMark(n);
    if (n <= state.length)
      return n;
    if (!state.ended) {
      state.needReadable = true;
      return 0;
    }
    return state.length;
  }
  Readable.prototype.read = function(n) {
    debug('read', n);
    n = parseInt(n, 10);
    var state = this._readableState;
    var nOrig = n;
    if (n !== 0)
      state.emittedReadable = false;
    if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
      debug('read: emitReadable', state.length, state.ended);
      if (state.length === 0 && state.ended)
        endReadable(this);
      else
        emitReadable(this);
      return null;
    }
    n = howMuchToRead(n, state);
    if (n === 0 && state.ended) {
      if (state.length === 0)
        endReadable(this);
      return null;
    }
    var doRead = state.needReadable;
    debug('need readable', doRead);
    if (state.length === 0 || state.length - n < state.highWaterMark) {
      doRead = true;
      debug('length less than watermark', doRead);
    }
    if (state.ended || state.reading) {
      doRead = false;
      debug('reading or ended', doRead);
    } else if (doRead) {
      debug('do read');
      state.reading = true;
      state.sync = true;
      if (state.length === 0)
        state.needReadable = true;
      this._read(state.highWaterMark);
      state.sync = false;
      if (!state.reading)
        n = howMuchToRead(nOrig, state);
    }
    var ret;
    if (n > 0)
      ret = fromList(n, state);
    else
      ret = null;
    if (ret === null) {
      state.needReadable = true;
      n = 0;
    } else {
      state.length -= n;
    }
    if (state.length === 0) {
      if (!state.ended)
        state.needReadable = true;
      if (nOrig !== n && state.ended)
        endReadable(this);
    }
    if (ret !== null)
      this.emit('data', ret);
    return ret;
  };
  function chunkInvalid(state, chunk) {
    var er = null;
    if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
      er = new TypeError('Invalid non-string/buffer chunk');
    }
    return er;
  }
  function onEofChunk(stream, state) {
    if (state.ended)
      return;
    if (state.decoder) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) {
        state.buffer.push(chunk);
        state.length += state.objectMode ? 1 : chunk.length;
      }
    }
    state.ended = true;
    emitReadable(stream);
  }
  function emitReadable(stream) {
    var state = stream._readableState;
    state.needReadable = false;
    if (!state.emittedReadable) {
      debug('emitReadable', state.flowing);
      state.emittedReadable = true;
      if (state.sync)
        processNextTick(emitReadable_, stream);
      else
        emitReadable_(stream);
    }
  }
  function emitReadable_(stream) {
    debug('emit readable');
    stream.emit('readable');
    flow(stream);
  }
  function maybeReadMore(stream, state) {
    if (!state.readingMore) {
      state.readingMore = true;
      processNextTick(maybeReadMore_, stream, state);
    }
  }
  function maybeReadMore_(stream, state) {
    var len = state.length;
    while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
      debug('maybeReadMore read 0');
      stream.read(0);
      if (len === state.length)
        break;
      else
        len = state.length;
    }
    state.readingMore = false;
  }
  Readable.prototype._read = function(n) {
    this.emit('error', new Error('not implemented'));
  };
  Readable.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state = this._readableState;
    switch (state.pipesCount) {
      case 0:
        state.pipes = dest;
        break;
      case 1:
        state.pipes = [state.pipes, dest];
        break;
      default:
        state.pipes.push(dest);
        break;
    }
    state.pipesCount += 1;
    debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    var endFn = doEnd ? onend : cleanup;
    if (state.endEmitted)
      processNextTick(endFn);
    else
      src.once('end', endFn);
    dest.on('unpipe', onunpipe);
    function onunpipe(readable) {
      debug('onunpipe');
      if (readable === src) {
        cleanup();
      }
    }
    function onend() {
      debug('onend');
      dest.end();
    }
    var ondrain = pipeOnDrain(src);
    dest.on('drain', ondrain);
    var cleanedUp = false;
    function cleanup() {
      debug('cleanup');
      dest.removeListener('close', onclose);
      dest.removeListener('finish', onfinish);
      dest.removeListener('drain', ondrain);
      dest.removeListener('error', onerror);
      dest.removeListener('unpipe', onunpipe);
      src.removeListener('end', onend);
      src.removeListener('end', cleanup);
      src.removeListener('data', ondata);
      cleanedUp = true;
      if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
        ondrain();
    }
    var increasedAwaitDrain = false;
    src.on('data', ondata);
    function ondata(chunk) {
      debug('ondata');
      increasedAwaitDrain = false;
      var ret = dest.write(chunk);
      if (false === ret && !increasedAwaitDrain) {
        if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
          debug('false write response, pause', src._readableState.awaitDrain);
          src._readableState.awaitDrain++;
          increasedAwaitDrain = true;
        }
        src.pause();
      }
    }
    function onerror(er) {
      debug('onerror', er);
      unpipe();
      dest.removeListener('error', onerror);
      if (EElistenerCount(dest, 'error') === 0)
        dest.emit('error', er);
    }
    prependListener(dest, 'error', onerror);
    function onclose() {
      dest.removeListener('finish', onfinish);
      unpipe();
    }
    dest.once('close', onclose);
    function onfinish() {
      debug('onfinish');
      dest.removeListener('close', onclose);
      unpipe();
    }
    dest.once('finish', onfinish);
    function unpipe() {
      debug('unpipe');
      src.unpipe(dest);
    }
    dest.emit('pipe', src);
    if (!state.flowing) {
      debug('pipe resume');
      src.resume();
    }
    return dest;
  };
  function pipeOnDrain(src) {
    return function() {
      var state = src._readableState;
      debug('pipeOnDrain', state.awaitDrain);
      if (state.awaitDrain)
        state.awaitDrain--;
      if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
        state.flowing = true;
        flow(src);
      }
    };
  }
  Readable.prototype.unpipe = function(dest) {
    var state = this._readableState;
    if (state.pipesCount === 0)
      return this;
    if (state.pipesCount === 1) {
      if (dest && dest !== state.pipes)
        return this;
      if (!dest)
        dest = state.pipes;
      state.pipes = null;
      state.pipesCount = 0;
      state.flowing = false;
      if (dest)
        dest.emit('unpipe', this);
      return this;
    }
    if (!dest) {
      var dests = state.pipes;
      var len = state.pipesCount;
      state.pipes = null;
      state.pipesCount = 0;
      state.flowing = false;
      for (var _i = 0; _i < len; _i++) {
        dests[_i].emit('unpipe', this);
      }
      return this;
    }
    var i = indexOf(state.pipes, dest);
    if (i === -1)
      return this;
    state.pipes.splice(i, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1)
      state.pipes = state.pipes[0];
    dest.emit('unpipe', this);
    return this;
  };
  Readable.prototype.on = function(ev, fn) {
    var res = Stream.prototype.on.call(this, ev, fn);
    if (ev === 'data') {
      if (this._readableState.flowing !== false)
        this.resume();
    } else if (ev === 'readable') {
      var state = this._readableState;
      if (!state.endEmitted && !state.readableListening) {
        state.readableListening = state.needReadable = true;
        state.emittedReadable = false;
        if (!state.reading) {
          processNextTick(nReadingNextTick, this);
        } else if (state.length) {
          emitReadable(this, state);
        }
      }
    }
    return res;
  };
  Readable.prototype.addListener = Readable.prototype.on;
  function nReadingNextTick(self) {
    debug('readable nexttick read 0');
    self.read(0);
  }
  Readable.prototype.resume = function() {
    var state = this._readableState;
    if (!state.flowing) {
      debug('resume');
      state.flowing = true;
      resume(this, state);
    }
    return this;
  };
  function resume(stream, state) {
    if (!state.resumeScheduled) {
      state.resumeScheduled = true;
      processNextTick(resume_, stream, state);
    }
  }
  function resume_(stream, state) {
    if (!state.reading) {
      debug('resume read 0');
      stream.read(0);
    }
    state.resumeScheduled = false;
    state.awaitDrain = 0;
    stream.emit('resume');
    flow(stream);
    if (state.flowing && !state.reading)
      stream.read(0);
  }
  Readable.prototype.pause = function() {
    debug('call pause flowing=%j', this._readableState.flowing);
    if (false !== this._readableState.flowing) {
      debug('pause');
      this._readableState.flowing = false;
      this.emit('pause');
    }
    return this;
  };
  function flow(stream) {
    var state = stream._readableState;
    debug('flow', state.flowing);
    while (state.flowing && stream.read() !== null) {}
  }
  Readable.prototype.wrap = function(stream) {
    var state = this._readableState;
    var paused = false;
    var self = this;
    stream.on('end', function() {
      debug('wrapped end');
      if (state.decoder && !state.ended) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length)
          self.push(chunk);
      }
      self.push(null);
    });
    stream.on('data', function(chunk) {
      debug('wrapped data');
      if (state.decoder)
        chunk = state.decoder.write(chunk);
      if (state.objectMode && (chunk === null || chunk === undefined))
        return;
      else if (!state.objectMode && (!chunk || !chunk.length))
        return;
      var ret = self.push(chunk);
      if (!ret) {
        paused = true;
        stream.pause();
      }
    });
    for (var i in stream) {
      if (this[i] === undefined && typeof stream[i] === 'function') {
        this[i] = function(method) {
          return function() {
            return stream[method].apply(stream, arguments);
          };
        }(i);
      }
    }
    var events = ['error', 'close', 'destroy', 'pause', 'resume'];
    forEach(events, function(ev) {
      stream.on(ev, self.emit.bind(self, ev));
    });
    self._read = function(n) {
      debug('wrapped _read', n);
      if (paused) {
        paused = false;
        stream.resume();
      }
    };
    return self;
  };
  Readable._fromList = fromList;
  function fromList(n, state) {
    if (state.length === 0)
      return null;
    var ret;
    if (state.objectMode)
      ret = state.buffer.shift();
    else if (!n || n >= state.length) {
      if (state.decoder)
        ret = state.buffer.join('');
      else if (state.buffer.length === 1)
        ret = state.buffer.head.data;
      else
        ret = state.buffer.concat(state.length);
      state.buffer.clear();
    } else {
      ret = fromListPartial(n, state.buffer, state.decoder);
    }
    return ret;
  }
  function fromListPartial(n, list, hasStrings) {
    var ret;
    if (n < list.head.data.length) {
      ret = list.head.data.slice(0, n);
      list.head.data = list.head.data.slice(n);
    } else if (n === list.head.data.length) {
      ret = list.shift();
    } else {
      ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
    }
    return ret;
  }
  function copyFromBufferString(n, list) {
    var p = list.head;
    var c = 1;
    var ret = p.data;
    n -= ret.length;
    while (p = p.next) {
      var str = p.data;
      var nb = n > str.length ? str.length : n;
      if (nb === str.length)
        ret += str;
      else
        ret += str.slice(0, n);
      n -= nb;
      if (n === 0) {
        if (nb === str.length) {
          ++c;
          if (p.next)
            list.head = p.next;
          else
            list.head = list.tail = null;
        } else {
          list.head = p;
          p.data = str.slice(nb);
        }
        break;
      }
      ++c;
    }
    list.length -= c;
    return ret;
  }
  function copyFromBuffer(n, list) {
    var ret = bufferShim.allocUnsafe(n);
    var p = list.head;
    var c = 1;
    p.data.copy(ret);
    n -= p.data.length;
    while (p = p.next) {
      var buf = p.data;
      var nb = n > buf.length ? buf.length : n;
      buf.copy(ret, ret.length - n, 0, nb);
      n -= nb;
      if (n === 0) {
        if (nb === buf.length) {
          ++c;
          if (p.next)
            list.head = p.next;
          else
            list.head = list.tail = null;
        } else {
          list.head = p;
          p.data = buf.slice(nb);
        }
        break;
      }
      ++c;
    }
    list.length -= c;
    return ret;
  }
  function endReadable(stream) {
    var state = stream._readableState;
    if (state.length > 0)
      throw new Error('"endReadable()" called on non-empty stream');
    if (!state.endEmitted) {
      state.ended = true;
      processNextTick(endReadableNT, state, stream);
    }
  }
  function endReadableNT(state, stream) {
    if (!state.endEmitted && state.length === 0) {
      state.endEmitted = true;
      stream.readable = false;
      stream.emit('end');
    }
  }
  function forEach(xs, f) {
    for (var i = 0,
        l = xs.length; i < l; i++) {
      f(xs[i], i);
    }
  }
  function indexOf(xs, x) {
    for (var i = 0,
        l = xs.length; i < l; i++) {
      if (xs[i] === x)
        return i;
    }
    return -1;
  }
  return module.exports;
});

$__System.registerDynamic("45", ["2a"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("2a");
  var define,
      global = this || self,
      GLOBAL = global;
  if (!process.version || process.version.indexOf('v0.') === 0 || process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
    module.exports = nextTick;
  } else {
    module.exports = process.nextTick;
  }
  function nextTick(fn, arg1, arg2, arg3) {
    if (typeof fn !== 'function') {
      throw new TypeError('"callback" argument must be a function');
    }
    var len = arguments.length;
    var args,
        i;
    switch (len) {
      case 0:
      case 1:
        return process.nextTick(fn);
      case 2:
        return process.nextTick(function afterTickOne() {
          fn.call(null, arg1);
        });
      case 3:
        return process.nextTick(function afterTickTwo() {
          fn.call(null, arg1, arg2);
        });
      case 4:
        return process.nextTick(function afterTickThree() {
          fn.call(null, arg1, arg2, arg3);
        });
      default:
        args = new Array(len - 1);
        i = 0;
        while (i < args.length) {
          args[i++] = arguments[i];
        }
        return process.nextTick(function afterTick() {
          fn.apply(null, args);
        });
    }
  }
  return module.exports;
});

$__System.registerDynamic("49", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = deprecate;
  function deprecate(fn, msg) {
    if (config('noDeprecation')) {
      return fn;
    }
    var warned = false;
    function deprecated() {
      if (!warned) {
        if (config('throwDeprecation')) {
          throw new Error(msg);
        } else if (config('traceDeprecation')) {
          console.trace(msg);
        } else {
          console.warn(msg);
        }
        warned = true;
      }
      return fn.apply(this, arguments);
    }
    return deprecated;
  }
  function config(name) {
    try {
      if (!global.localStorage)
        return false;
    } catch (_) {
      return false;
    }
    var val = global.localStorage[name];
    if (null == val)
      return false;
    return String(val).toLowerCase() === 'true';
  }
  return module.exports;
});

$__System.registerDynamic("44", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  function EventEmitter() {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || undefined;
  }
  module.exports = EventEmitter;
  EventEmitter.EventEmitter = EventEmitter;
  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._maxListeners = undefined;
  EventEmitter.defaultMaxListeners = 10;
  EventEmitter.prototype.setMaxListeners = function(n) {
    if (!isNumber(n) || n < 0 || isNaN(n))
      throw TypeError('n must be a positive number');
    this._maxListeners = n;
    return this;
  };
  EventEmitter.prototype.emit = function(type) {
    var er,
        handler,
        len,
        args,
        i,
        listeners;
    if (!this._events)
      this._events = {};
    if (type === 'error') {
      if (!this._events.error || (isObject(this._events.error) && !this._events.error.length)) {
        er = arguments[1];
        if (er instanceof Error) {
          throw er;
        }
        throw TypeError('Uncaught, unspecified "error" event.');
      }
    }
    handler = this._events[type];
    if (isUndefined(handler))
      return false;
    if (isFunction(handler)) {
      switch (arguments.length) {
        case 1:
          handler.call(this);
          break;
        case 2:
          handler.call(this, arguments[1]);
          break;
        case 3:
          handler.call(this, arguments[1], arguments[2]);
          break;
        default:
          args = Array.prototype.slice.call(arguments, 1);
          handler.apply(this, args);
      }
    } else if (isObject(handler)) {
      args = Array.prototype.slice.call(arguments, 1);
      listeners = handler.slice();
      len = listeners.length;
      for (i = 0; i < len; i++)
        listeners[i].apply(this, args);
    }
    return true;
  };
  EventEmitter.prototype.addListener = function(type, listener) {
    var m;
    if (!isFunction(listener))
      throw TypeError('listener must be a function');
    if (!this._events)
      this._events = {};
    if (this._events.newListener)
      this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
    if (!this._events[type])
      this._events[type] = listener;
    else if (isObject(this._events[type]))
      this._events[type].push(listener);
    else
      this._events[type] = [this._events[type], listener];
    if (isObject(this._events[type]) && !this._events[type].warned) {
      if (!isUndefined(this._maxListeners)) {
        m = this._maxListeners;
      } else {
        m = EventEmitter.defaultMaxListeners;
      }
      if (m && m > 0 && this._events[type].length > m) {
        this._events[type].warned = true;
        console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
        if (typeof console.trace === 'function') {
          console.trace();
        }
      }
    }
    return this;
  };
  EventEmitter.prototype.on = EventEmitter.prototype.addListener;
  EventEmitter.prototype.once = function(type, listener) {
    if (!isFunction(listener))
      throw TypeError('listener must be a function');
    var fired = false;
    function g() {
      this.removeListener(type, g);
      if (!fired) {
        fired = true;
        listener.apply(this, arguments);
      }
    }
    g.listener = listener;
    this.on(type, g);
    return this;
  };
  EventEmitter.prototype.removeListener = function(type, listener) {
    var list,
        position,
        length,
        i;
    if (!isFunction(listener))
      throw TypeError('listener must be a function');
    if (!this._events || !this._events[type])
      return this;
    list = this._events[type];
    length = list.length;
    position = -1;
    if (list === listener || (isFunction(list.listener) && list.listener === listener)) {
      delete this._events[type];
      if (this._events.removeListener)
        this.emit('removeListener', type, listener);
    } else if (isObject(list)) {
      for (i = length; i-- > 0; ) {
        if (list[i] === listener || (list[i].listener && list[i].listener === listener)) {
          position = i;
          break;
        }
      }
      if (position < 0)
        return this;
      if (list.length === 1) {
        list.length = 0;
        delete this._events[type];
      } else {
        list.splice(position, 1);
      }
      if (this._events.removeListener)
        this.emit('removeListener', type, listener);
    }
    return this;
  };
  EventEmitter.prototype.removeAllListeners = function(type) {
    var key,
        listeners;
    if (!this._events)
      return this;
    if (!this._events.removeListener) {
      if (arguments.length === 0)
        this._events = {};
      else if (this._events[type])
        delete this._events[type];
      return this;
    }
    if (arguments.length === 0) {
      for (key in this._events) {
        if (key === 'removeListener')
          continue;
        this.removeAllListeners(key);
      }
      this.removeAllListeners('removeListener');
      this._events = {};
      return this;
    }
    listeners = this._events[type];
    if (isFunction(listeners)) {
      this.removeListener(type, listeners);
    } else if (listeners) {
      while (listeners.length)
        this.removeListener(type, listeners[listeners.length - 1]);
    }
    delete this._events[type];
    return this;
  };
  EventEmitter.prototype.listeners = function(type) {
    var ret;
    if (!this._events || !this._events[type])
      ret = [];
    else if (isFunction(this._events[type]))
      ret = [this._events[type]];
    else
      ret = this._events[type].slice();
    return ret;
  };
  EventEmitter.prototype.listenerCount = function(type) {
    if (this._events) {
      var evlistener = this._events[type];
      if (isFunction(evlistener))
        return 1;
      else if (evlistener)
        return evlistener.length;
    }
    return 0;
  };
  EventEmitter.listenerCount = function(emitter, type) {
    return emitter.listenerCount(type);
  };
  function isFunction(arg) {
    return typeof arg === 'function';
  }
  function isNumber(arg) {
    return typeof arg === 'number';
  }
  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }
  function isUndefined(arg) {
    return arg === void 0;
  }
  return module.exports;
});

$__System.registerDynamic("43", ["42", "4"], true, function($__require, exports, module) {
  "use strict";
  var Buffer = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  var buffer = $__require('42');
  var Buffer = buffer.Buffer;
  var SlowBuffer = buffer.SlowBuffer;
  var MAX_LEN = buffer.kMaxLength || 2147483647;
  exports.alloc = function alloc(size, fill, encoding) {
    if (typeof Buffer.alloc === 'function') {
      return Buffer.alloc(size, fill, encoding);
    }
    if (typeof encoding === 'number') {
      throw new TypeError('encoding must not be number');
    }
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    if (size > MAX_LEN) {
      throw new RangeError('size is too large');
    }
    var enc = encoding;
    var _fill = fill;
    if (_fill === undefined) {
      enc = undefined;
      _fill = 0;
    }
    var buf = new Buffer(size);
    if (typeof _fill === 'string') {
      var fillBuf = new Buffer(_fill, enc);
      var flen = fillBuf.length;
      var i = -1;
      while (++i < size) {
        buf[i] = fillBuf[i % flen];
      }
    } else {
      buf.fill(_fill);
    }
    return buf;
  };
  exports.allocUnsafe = function allocUnsafe(size) {
    if (typeof Buffer.allocUnsafe === 'function') {
      return Buffer.allocUnsafe(size);
    }
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    if (size > MAX_LEN) {
      throw new RangeError('size is too large');
    }
    return new Buffer(size);
  };
  exports.from = function from(value, encodingOrOffset, length) {
    if (typeof Buffer.from === 'function' && (!global.Uint8Array || Uint8Array.from !== Buffer.from)) {
      return Buffer.from(value, encodingOrOffset, length);
    }
    if (typeof value === 'number') {
      throw new TypeError('"value" argument must not be a number');
    }
    if (typeof value === 'string') {
      return new Buffer(value, encodingOrOffset);
    }
    if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
      var offset = encodingOrOffset;
      if (arguments.length === 1) {
        return new Buffer(value);
      }
      if (typeof offset === 'undefined') {
        offset = 0;
      }
      var len = length;
      if (typeof len === 'undefined') {
        len = value.byteLength - offset;
      }
      if (offset >= value.byteLength) {
        throw new RangeError('\'offset\' is out of bounds');
      }
      if (len > value.byteLength - offset) {
        throw new RangeError('\'length\' is out of bounds');
      }
      return new Buffer(value.slice(offset, offset + len));
    }
    if (Buffer.isBuffer(value)) {
      var out = new Buffer(value.length);
      value.copy(out, 0, 0, value.length);
      return out;
    }
    if (value) {
      if (Array.isArray(value) || (typeof ArrayBuffer !== 'undefined' && value.buffer instanceof ArrayBuffer) || 'length' in value) {
        return new Buffer(value);
      }
      if (value.type === 'Buffer' && Array.isArray(value.data)) {
        return new Buffer(value.data);
      }
    }
    throw new TypeError('First argument must be a string, Buffer, ' + 'ArrayBuffer, Array, or array-like object.');
  };
  exports.allocUnsafeSlow = function allocUnsafeSlow(size) {
    if (typeof Buffer.allocUnsafeSlow === 'function') {
      return Buffer.allocUnsafeSlow(size);
    }
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    if (size >= MAX_LEN) {
      throw new RangeError('size is too large');
    }
    return new SlowBuffer(size);
  };
  return module.exports;
});

$__System.registerDynamic("3a", ["45", "47", "15", "49", "44", "42", "43", "3b", "2a", "4"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("2a"),
      Buffer = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = Writable;
  var processNextTick = $__require('45');
  var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
  Writable.WritableState = WritableState;
  var util = $__require('47');
  util.inherits = $__require('15');
  var internalUtil = {deprecate: $__require('49')};
  var Stream;
  (function() {
    try {
      Stream = $__require('st' + 'ream');
    } catch (_) {} finally {
      if (!Stream)
        Stream = $__require('44').EventEmitter;
    }
  })();
  var Buffer = $__require('42').Buffer;
  var bufferShim = $__require('43');
  util.inherits(Writable, Stream);
  function nop() {}
  function WriteReq(chunk, encoding, cb) {
    this.chunk = chunk;
    this.encoding = encoding;
    this.callback = cb;
    this.next = null;
  }
  var Duplex;
  function WritableState(options, stream) {
    Duplex = Duplex || $__require('3b');
    options = options || {};
    this.objectMode = !!options.objectMode;
    if (stream instanceof Duplex)
      this.objectMode = this.objectMode || !!options.writableObjectMode;
    var hwm = options.highWaterMark;
    var defaultHwm = this.objectMode ? 16 : 16 * 1024;
    this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
    this.highWaterMark = ~~this.highWaterMark;
    this.needDrain = false;
    this.ending = false;
    this.ended = false;
    this.finished = false;
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;
    this.defaultEncoding = options.defaultEncoding || 'utf8';
    this.length = 0;
    this.writing = false;
    this.corked = 0;
    this.sync = true;
    this.bufferProcessing = false;
    this.onwrite = function(er) {
      onwrite(stream, er);
    };
    this.writecb = null;
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null;
    this.pendingcb = 0;
    this.prefinished = false;
    this.errorEmitted = false;
    this.bufferedRequestCount = 0;
    this.corkedRequestsFree = new CorkedRequest(this);
  }
  WritableState.prototype.getBuffer = function writableStateGetBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while (current) {
      out.push(current);
      current = current.next;
    }
    return out;
  };
  (function() {
    try {
      Object.defineProperty(WritableState.prototype, 'buffer', {get: internalUtil.deprecate(function() {
          return this.getBuffer();
        }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')});
    } catch (_) {}
  })();
  var Duplex;
  function Writable(options) {
    Duplex = Duplex || $__require('3b');
    if (!(this instanceof Writable) && !(this instanceof Duplex))
      return new Writable(options);
    this._writableState = new WritableState(options, this);
    this.writable = true;
    if (options) {
      if (typeof options.write === 'function')
        this._write = options.write;
      if (typeof options.writev === 'function')
        this._writev = options.writev;
    }
    Stream.call(this);
  }
  Writable.prototype.pipe = function() {
    this.emit('error', new Error('Cannot pipe, not readable'));
  };
  function writeAfterEnd(stream, cb) {
    var er = new Error('write after end');
    stream.emit('error', er);
    processNextTick(cb, er);
  }
  function validChunk(stream, state, chunk, cb) {
    var valid = true;
    var er = false;
    if (chunk === null) {
      er = new TypeError('May not write null values to stream');
    } else if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
      er = new TypeError('Invalid non-string/buffer chunk');
    }
    if (er) {
      stream.emit('error', er);
      processNextTick(cb, er);
      valid = false;
    }
    return valid;
  }
  Writable.prototype.write = function(chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;
    if (typeof encoding === 'function') {
      cb = encoding;
      encoding = null;
    }
    if (Buffer.isBuffer(chunk))
      encoding = 'buffer';
    else if (!encoding)
      encoding = state.defaultEncoding;
    if (typeof cb !== 'function')
      cb = nop;
    if (state.ended)
      writeAfterEnd(this, cb);
    else if (validChunk(this, state, chunk, cb)) {
      state.pendingcb++;
      ret = writeOrBuffer(this, state, chunk, encoding, cb);
    }
    return ret;
  };
  Writable.prototype.cork = function() {
    var state = this._writableState;
    state.corked++;
  };
  Writable.prototype.uncork = function() {
    var state = this._writableState;
    if (state.corked) {
      state.corked--;
      if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest)
        clearBuffer(this, state);
    }
  };
  Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    if (typeof encoding === 'string')
      encoding = encoding.toLowerCase();
    if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1))
      throw new TypeError('Unknown encoding: ' + encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
  };
  function decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
      chunk = bufferShim.from(chunk, encoding);
    }
    return chunk;
  }
  function writeOrBuffer(stream, state, chunk, encoding, cb) {
    chunk = decodeChunk(state, chunk, encoding);
    if (Buffer.isBuffer(chunk))
      encoding = 'buffer';
    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark;
    if (!ret)
      state.needDrain = true;
    if (state.writing || state.corked) {
      var last = state.lastBufferedRequest;
      state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
      if (last) {
        last.next = state.lastBufferedRequest;
      } else {
        state.bufferedRequest = state.lastBufferedRequest;
      }
      state.bufferedRequestCount += 1;
    } else {
      doWrite(stream, state, false, len, chunk, encoding, cb);
    }
    return ret;
  }
  function doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (writev)
      stream._writev(chunk, state.onwrite);
    else
      stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
  }
  function onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync)
      processNextTick(cb, er);
    else
      cb(er);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
  }
  function onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
  }
  function onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    onwriteStateUpdate(state);
    if (er)
      onwriteError(stream, state, sync, er, cb);
    else {
      var finished = needFinish(state);
      if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
        clearBuffer(stream, state);
      }
      if (sync) {
        asyncWrite(afterWrite, stream, state, finished, cb);
      } else {
        afterWrite(stream, state, finished, cb);
      }
    }
  }
  function afterWrite(stream, state, finished, cb) {
    if (!finished)
      onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    finishMaybe(stream, state);
  }
  function onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
      state.needDrain = false;
      stream.emit('drain');
    }
  }
  function clearBuffer(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;
    if (stream._writev && entry && entry.next) {
      var l = state.bufferedRequestCount;
      var buffer = new Array(l);
      var holder = state.corkedRequestsFree;
      holder.entry = entry;
      var count = 0;
      while (entry) {
        buffer[count] = entry;
        entry = entry.next;
        count += 1;
      }
      doWrite(stream, state, true, state.length, buffer, '', holder.finish);
      state.pendingcb++;
      state.lastBufferedRequest = null;
      if (holder.next) {
        state.corkedRequestsFree = holder.next;
        holder.next = null;
      } else {
        state.corkedRequestsFree = new CorkedRequest(state);
      }
    } else {
      while (entry) {
        var chunk = entry.chunk;
        var encoding = entry.encoding;
        var cb = entry.callback;
        var len = state.objectMode ? 1 : chunk.length;
        doWrite(stream, state, false, len, chunk, encoding, cb);
        entry = entry.next;
        if (state.writing) {
          break;
        }
      }
      if (entry === null)
        state.lastBufferedRequest = null;
    }
    state.bufferedRequestCount = 0;
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
  }
  Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new Error('not implemented'));
  };
  Writable.prototype._writev = null;
  Writable.prototype.end = function(chunk, encoding, cb) {
    var state = this._writableState;
    if (typeof chunk === 'function') {
      cb = chunk;
      chunk = null;
      encoding = null;
    } else if (typeof encoding === 'function') {
      cb = encoding;
      encoding = null;
    }
    if (chunk !== null && chunk !== undefined)
      this.write(chunk, encoding);
    if (state.corked) {
      state.corked = 1;
      this.uncork();
    }
    if (!state.ending && !state.finished)
      endWritable(this, state, cb);
  };
  function needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
  }
  function prefinish(stream, state) {
    if (!state.prefinished) {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
  function finishMaybe(stream, state) {
    var need = needFinish(state);
    if (need) {
      if (state.pendingcb === 0) {
        prefinish(stream, state);
        state.finished = true;
        stream.emit('finish');
      } else {
        prefinish(stream, state);
      }
    }
    return need;
  }
  function endWritable(stream, state, cb) {
    state.ending = true;
    finishMaybe(stream, state);
    if (cb) {
      if (state.finished)
        processNextTick(cb);
      else
        stream.once('finish', cb);
    }
    state.ended = true;
    stream.writable = false;
  }
  function CorkedRequest(state) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function(err) {
      var entry = _this.entry;
      _this.entry = null;
      while (entry) {
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
      }
      if (state.corkedRequestsFree) {
        state.corkedRequestsFree.next = _this;
      } else {
        state.corkedRequestsFree = _this;
      }
    };
  }
  return module.exports;
});

$__System.registerDynamic("3b", ["45", "47", "15", "39", "3a", "2a"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("2a");
  var define,
      global = this || self,
      GLOBAL = global;
  var objectKeys = Object.keys || function(obj) {
    var keys = [];
    for (var key in obj) {
      keys.push(key);
    }
    return keys;
  };
  module.exports = Duplex;
  var processNextTick = $__require('45');
  var util = $__require('47');
  util.inherits = $__require('15');
  var Readable = $__require('39');
  var Writable = $__require('3a');
  util.inherits(Duplex, Readable);
  var keys = objectKeys(Writable.prototype);
  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method])
      Duplex.prototype[method] = Writable.prototype[method];
  }
  function Duplex(options) {
    if (!(this instanceof Duplex))
      return new Duplex(options);
    Readable.call(this, options);
    Writable.call(this, options);
    if (options && options.readable === false)
      this.readable = false;
    if (options && options.writable === false)
      this.writable = false;
    this.allowHalfOpen = true;
    if (options && options.allowHalfOpen === false)
      this.allowHalfOpen = false;
    this.once('end', onend);
  }
  function onend() {
    if (this.allowHalfOpen || this._writableState.ended)
      return;
    processNextTick(onEndNT, this);
  }
  function onEndNT(self) {
    self.end();
  }
  function forEach(xs, f) {
    for (var i = 0,
        l = xs.length; i < l; i++) {
      f(xs[i], i);
    }
  }
  return module.exports;
});

$__System.registerDynamic("3c", ["3b", "47", "15", "2a"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("2a");
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = Transform;
  var Duplex = $__require('3b');
  var util = $__require('47');
  util.inherits = $__require('15');
  util.inherits(Transform, Duplex);
  function TransformState(stream) {
    this.afterTransform = function(er, data) {
      return afterTransform(stream, er, data);
    };
    this.needTransform = false;
    this.transforming = false;
    this.writecb = null;
    this.writechunk = null;
    this.writeencoding = null;
  }
  function afterTransform(stream, er, data) {
    var ts = stream._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (!cb)
      return stream.emit('error', new Error('no writecb in Transform class'));
    ts.writechunk = null;
    ts.writecb = null;
    if (data !== null && data !== undefined)
      stream.push(data);
    cb(er);
    var rs = stream._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) {
      stream._read(rs.highWaterMark);
    }
  }
  function Transform(options) {
    if (!(this instanceof Transform))
      return new Transform(options);
    Duplex.call(this, options);
    this._transformState = new TransformState(this);
    var stream = this;
    this._readableState.needReadable = true;
    this._readableState.sync = false;
    if (options) {
      if (typeof options.transform === 'function')
        this._transform = options.transform;
      if (typeof options.flush === 'function')
        this._flush = options.flush;
    }
    this.once('prefinish', function() {
      if (typeof this._flush === 'function')
        this._flush(function(er) {
          done(stream, er);
        });
      else
        done(stream);
    });
  }
  Transform.prototype.push = function(chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
  };
  Transform.prototype._transform = function(chunk, encoding, cb) {
    throw new Error('Not implemented');
  };
  Transform.prototype._write = function(chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
      var rs = this._readableState;
      if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
        this._read(rs.highWaterMark);
    }
  };
  Transform.prototype._read = function(n) {
    var ts = this._transformState;
    if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
      ts.transforming = true;
      this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else {
      ts.needTransform = true;
    }
  };
  function done(stream, er) {
    if (er)
      return stream.emit('error', er);
    var ws = stream._writableState;
    var ts = stream._transformState;
    if (ws.length)
      throw new Error('Calling transform done when ws.length != 0');
    if (ts.transforming)
      throw new Error('Calling transform done when still transforming');
    return stream.push(null);
  }
  return module.exports;
});

$__System.registerDynamic("47", ["4"], true, function($__require, exports, module) {
  var Buffer = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  function isArray(arg) {
    if (Array.isArray) {
      return Array.isArray(arg);
    }
    return objectToString(arg) === '[object Array]';
  }
  exports.isArray = isArray;
  function isBoolean(arg) {
    return typeof arg === 'boolean';
  }
  exports.isBoolean = isBoolean;
  function isNull(arg) {
    return arg === null;
  }
  exports.isNull = isNull;
  function isNullOrUndefined(arg) {
    return arg == null;
  }
  exports.isNullOrUndefined = isNullOrUndefined;
  function isNumber(arg) {
    return typeof arg === 'number';
  }
  exports.isNumber = isNumber;
  function isString(arg) {
    return typeof arg === 'string';
  }
  exports.isString = isString;
  function isSymbol(arg) {
    return typeof arg === 'symbol';
  }
  exports.isSymbol = isSymbol;
  function isUndefined(arg) {
    return arg === void 0;
  }
  exports.isUndefined = isUndefined;
  function isRegExp(re) {
    return objectToString(re) === '[object RegExp]';
  }
  exports.isRegExp = isRegExp;
  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }
  exports.isObject = isObject;
  function isDate(d) {
    return objectToString(d) === '[object Date]';
  }
  exports.isDate = isDate;
  function isError(e) {
    return (objectToString(e) === '[object Error]' || e instanceof Error);
  }
  exports.isError = isError;
  function isFunction(arg) {
    return typeof arg === 'function';
  }
  exports.isFunction = isFunction;
  function isPrimitive(arg) {
    return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
  }
  exports.isPrimitive = isPrimitive;
  exports.isBuffer = Buffer.isBuffer;
  function objectToString(o) {
    return Object.prototype.toString.call(o);
  }
  return module.exports;
});

$__System.registerDynamic("3d", ["3c", "47", "15", "2a"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("2a");
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = PassThrough;
  var Transform = $__require('3c');
  var util = $__require('47');
  util.inherits = $__require('15');
  util.inherits(PassThrough, Transform);
  function PassThrough(options) {
    if (!(this instanceof PassThrough))
      return new PassThrough(options);
    Transform.call(this, options);
  }
  PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
  };
  return module.exports;
});

$__System.registerDynamic("4a", ["3d", "2a"], true, function($__require, exports, module) {
  var process = $__require("2a");
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require('3d');
  return module.exports;
});

$__System.registerDynamic("4b", ["44", "15", "38", "3e", "3f", "40", "4a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = Stream;
  var EE = $__require('44').EventEmitter;
  var inherits = $__require('15');
  inherits(Stream, EE);
  Stream.Readable = $__require('38');
  Stream.Writable = $__require('3e');
  Stream.Duplex = $__require('3f');
  Stream.Transform = $__require('40');
  Stream.PassThrough = $__require('4a');
  Stream.Stream = Stream;
  function Stream() {
    EE.call(this);
  }
  Stream.prototype.pipe = function(dest, options) {
    var source = this;
    function ondata(chunk) {
      if (dest.writable) {
        if (false === dest.write(chunk) && source.pause) {
          source.pause();
        }
      }
    }
    source.on('data', ondata);
    function ondrain() {
      if (source.readable && source.resume) {
        source.resume();
      }
    }
    dest.on('drain', ondrain);
    if (!dest._isStdio && (!options || options.end !== false)) {
      source.on('end', onend);
      source.on('close', onclose);
    }
    var didOnEnd = false;
    function onend() {
      if (didOnEnd)
        return;
      didOnEnd = true;
      dest.end();
    }
    function onclose() {
      if (didOnEnd)
        return;
      didOnEnd = true;
      if (typeof dest.destroy === 'function')
        dest.destroy();
    }
    function onerror(er) {
      cleanup();
      if (EE.listenerCount(this, 'error') === 0) {
        throw er;
      }
    }
    source.on('error', onerror);
    dest.on('error', onerror);
    function cleanup() {
      source.removeListener('data', ondata);
      dest.removeListener('drain', ondrain);
      source.removeListener('end', onend);
      source.removeListener('close', onclose);
      source.removeListener('error', onerror);
      dest.removeListener('error', onerror);
      source.removeListener('end', cleanup);
      source.removeListener('close', cleanup);
      dest.removeListener('close', cleanup);
    }
    source.on('end', cleanup);
    source.on('close', cleanup);
    dest.on('close', cleanup);
    dest.emit('pipe', source);
    return dest;
  };
  return module.exports;
});

$__System.registerDynamic("15", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  if (typeof Object.create === 'function') {
    module.exports = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }});
    };
  } else {
    module.exports = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function() {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    };
  }
  return module.exports;
});

$__System.registerDynamic("48", ["42", "4"], true, function($__require, exports, module) {
  var Buffer = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  var Buffer = $__require('42').Buffer;
  var isBufferEncoding = Buffer.isEncoding || function(encoding) {
    switch (encoding && encoding.toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'binary':
      case 'base64':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
      case 'raw':
        return true;
      default:
        return false;
    }
  };
  function assertEncoding(encoding) {
    if (encoding && !isBufferEncoding(encoding)) {
      throw new Error('Unknown encoding: ' + encoding);
    }
  }
  var StringDecoder = exports.StringDecoder = function(encoding) {
    this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
    assertEncoding(encoding);
    switch (this.encoding) {
      case 'utf8':
        this.surrogateSize = 3;
        break;
      case 'ucs2':
      case 'utf16le':
        this.surrogateSize = 2;
        this.detectIncompleteChar = utf16DetectIncompleteChar;
        break;
      case 'base64':
        this.surrogateSize = 3;
        this.detectIncompleteChar = base64DetectIncompleteChar;
        break;
      default:
        this.write = passThroughWrite;
        return;
    }
    this.charBuffer = new Buffer(6);
    this.charReceived = 0;
    this.charLength = 0;
  };
  StringDecoder.prototype.write = function(buffer) {
    var charStr = '';
    while (this.charLength) {
      var available = (buffer.length >= this.charLength - this.charReceived) ? this.charLength - this.charReceived : buffer.length;
      buffer.copy(this.charBuffer, this.charReceived, 0, available);
      this.charReceived += available;
      if (this.charReceived < this.charLength) {
        return '';
      }
      buffer = buffer.slice(available, buffer.length);
      charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
      var charCode = charStr.charCodeAt(charStr.length - 1);
      if (charCode >= 0xD800 && charCode <= 0xDBFF) {
        this.charLength += this.surrogateSize;
        charStr = '';
        continue;
      }
      this.charReceived = this.charLength = 0;
      if (buffer.length === 0) {
        return charStr;
      }
      break;
    }
    this.detectIncompleteChar(buffer);
    var end = buffer.length;
    if (this.charLength) {
      buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
      end -= this.charReceived;
    }
    charStr += buffer.toString(this.encoding, 0, end);
    var end = charStr.length - 1;
    var charCode = charStr.charCodeAt(end);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      var size = this.surrogateSize;
      this.charLength += size;
      this.charReceived += size;
      this.charBuffer.copy(this.charBuffer, size, 0, size);
      buffer.copy(this.charBuffer, 0, 0, size);
      return charStr.substring(0, end);
    }
    return charStr;
  };
  StringDecoder.prototype.detectIncompleteChar = function(buffer) {
    var i = (buffer.length >= 3) ? 3 : buffer.length;
    for (; i > 0; i--) {
      var c = buffer[buffer.length - i];
      if (i == 1 && c >> 5 == 0x06) {
        this.charLength = 2;
        break;
      }
      if (i <= 2 && c >> 4 == 0x0E) {
        this.charLength = 3;
        break;
      }
      if (i <= 3 && c >> 3 == 0x1E) {
        this.charLength = 4;
        break;
      }
    }
    this.charReceived = i;
  };
  StringDecoder.prototype.end = function(buffer) {
    var res = '';
    if (buffer && buffer.length)
      res = this.write(buffer);
    if (this.charReceived) {
      var cr = this.charReceived;
      var buf = this.charBuffer;
      var enc = this.encoding;
      res += buf.slice(0, cr).toString(enc);
    }
    return res;
  };
  function passThroughWrite(buffer) {
    return buffer.toString(this.encoding);
  }
  function utf16DetectIncompleteChar(buffer) {
    this.charReceived = buffer.length % 2;
    this.charLength = this.charReceived ? 2 : 0;
  }
  function base64DetectIncompleteChar(buffer) {
    this.charReceived = buffer.length % 3;
    this.charLength = this.charReceived ? 3 : 0;
  }
  return module.exports;
});

$__System.registerDynamic("4c", ["4b", "15", "48", "4"], true, function($__require, exports, module) {
  var Buffer = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  var Transform = $__require('4b').Transform;
  var inherits = $__require('15');
  var StringDecoder = $__require('48').StringDecoder;
  module.exports = CipherBase;
  inherits(CipherBase, Transform);
  function CipherBase(hashMode) {
    Transform.call(this);
    this.hashMode = typeof hashMode === 'string';
    if (this.hashMode) {
      this[hashMode] = this._finalOrDigest;
    } else {
      this.final = this._finalOrDigest;
    }
    this._decoder = null;
    this._encoding = null;
  }
  CipherBase.prototype.update = function(data, inputEnc, outputEnc) {
    if (typeof data === 'string') {
      data = new Buffer(data, inputEnc);
    }
    var outData = this._update(data);
    if (this.hashMode) {
      return this;
    }
    if (outputEnc) {
      outData = this._toString(outData, outputEnc);
    }
    return outData;
  };
  CipherBase.prototype.setAutoPadding = function() {};
  CipherBase.prototype.getAuthTag = function() {
    throw new Error('trying to get auth tag in unsupported state');
  };
  CipherBase.prototype.setAuthTag = function() {
    throw new Error('trying to set auth tag in unsupported state');
  };
  CipherBase.prototype.setAAD = function() {
    throw new Error('trying to set aad in unsupported state');
  };
  CipherBase.prototype._transform = function(data, _, next) {
    var err;
    try {
      if (this.hashMode) {
        this._update(data);
      } else {
        this.push(this._update(data));
      }
    } catch (e) {
      err = e;
    } finally {
      next(err);
    }
  };
  CipherBase.prototype._flush = function(done) {
    var err;
    try {
      this.push(this._final());
    } catch (e) {
      err = e;
    } finally {
      done(err);
    }
  };
  CipherBase.prototype._finalOrDigest = function(outputEnc) {
    var outData = this._final() || new Buffer('');
    if (outputEnc) {
      outData = this._toString(outData, outputEnc, true);
    }
    return outData;
  };
  CipherBase.prototype._toString = function(value, enc, final) {
    if (!this._decoder) {
      this._decoder = new StringDecoder(enc);
      this._encoding = enc;
    }
    if (this._encoding !== enc) {
      throw new Error('can\'t switch encodings');
    }
    var out = this._decoder.write(value);
    if (final) {
      out += this._decoder.end();
    }
    return out;
  };
  return module.exports;
});

$__System.registerDynamic("26", ["15", "2e", "2f", "37", "4c", "4"], true, function($__require, exports, module) {
  "use strict";
  var Buffer = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  var inherits = $__require('15');
  var md5 = $__require('2e');
  var rmd160 = $__require('2f');
  var sha = $__require('37');
  var Base = $__require('4c');
  function HashNoConstructor(hash) {
    Base.call(this, 'digest');
    this._hash = hash;
    this.buffers = [];
  }
  inherits(HashNoConstructor, Base);
  HashNoConstructor.prototype._update = function(data) {
    this.buffers.push(data);
  };
  HashNoConstructor.prototype._final = function() {
    var buf = Buffer.concat(this.buffers);
    var r = this._hash(buf);
    this.buffers = null;
    return r;
  };
  function Hash(hash) {
    Base.call(this, 'digest');
    this._hash = hash;
  }
  inherits(Hash, Base);
  Hash.prototype._update = function(data) {
    this._hash.update(data);
  };
  Hash.prototype._final = function() {
    return this._hash.digest();
  };
  module.exports = function createHash(alg) {
    alg = alg.toLowerCase();
    if ('md5' === alg)
      return new HashNoConstructor(md5);
    if ('rmd160' === alg || 'ripemd160' === alg)
      return new HashNoConstructor(rmd160);
    return new Hash(sha(alg));
  };
  return module.exports;
});

$__System.registerDynamic("4d", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  exports.toByteArray = toByteArray;
  exports.fromByteArray = fromByteArray;
  var lookup = [];
  var revLookup = [];
  var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
  function init() {
    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    for (var i = 0,
        len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    revLookup['-'.charCodeAt(0)] = 62;
    revLookup['_'.charCodeAt(0)] = 63;
  }
  init();
  function toByteArray(b64) {
    var i,
        j,
        l,
        tmp,
        placeHolders,
        arr;
    var len = b64.length;
    if (len % 4 > 0) {
      throw new Error('Invalid string. Length must be a multiple of 4');
    }
    placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
    arr = new Arr(len * 3 / 4 - placeHolders);
    l = placeHolders > 0 ? len - 4 : len;
    var L = 0;
    for (i = 0, j = 0; i < l; i += 4, j += 3) {
      tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
      arr[L++] = (tmp >> 16) & 0xFF;
      arr[L++] = (tmp >> 8) & 0xFF;
      arr[L++] = tmp & 0xFF;
    }
    if (placeHolders === 2) {
      tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
      arr[L++] = tmp & 0xFF;
    } else if (placeHolders === 1) {
      tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
      arr[L++] = (tmp >> 8) & 0xFF;
      arr[L++] = tmp & 0xFF;
    }
    return arr;
  }
  function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
  }
  function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for (var i = start; i < end; i += 3) {
      tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
      output.push(tripletToBase64(tmp));
    }
    return output.join('');
  }
  function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3;
    var output = '';
    var parts = [];
    var maxChunkLength = 16383;
    for (var i = 0,
        len2 = len - extraBytes; i < len2; i += maxChunkLength) {
      parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
    }
    if (extraBytes === 1) {
      tmp = uint8[len - 1];
      output += lookup[tmp >> 2];
      output += lookup[(tmp << 4) & 0x3F];
      output += '==';
    } else if (extraBytes === 2) {
      tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
      output += lookup[tmp >> 10];
      output += lookup[(tmp >> 4) & 0x3F];
      output += lookup[(tmp << 2) & 0x3F];
      output += '=';
    }
    parts.push(output);
    return parts.join('');
  }
  return module.exports;
});

$__System.registerDynamic("4e", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e,
        m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? (nBytes - 1) : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & ((1 << (-nBits)) - 1);
    s >>= (-nBits);
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
    m = e & ((1 << (-nBits)) - 1);
    e >>= (-nBits);
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : ((s ? -1 : 1) * Infinity);
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  };
  exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e,
        m,
        c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
    var i = isLE ? 0 : (nBytes - 1);
    var d = isLE ? 1 : -1;
    var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }
      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }
    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
    e = (e << mLen) | m;
    eLen += mLen;
    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
    buffer[offset + i - d] |= s * 128;
  };
  return module.exports;
});

$__System.registerDynamic("46", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var toString = {}.toString;
  module.exports = Array.isArray || function(arr) {
    return toString.call(arr) == '[object Array]';
  };
  return module.exports;
});

$__System.registerDynamic("42", ["4d", "4e", "46", "2a"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("2a");
  var define,
      global = this || self,
      GLOBAL = global;
  var base64 = $__require('4d');
  var ieee754 = $__require('4e');
  var isArray = $__require('46');
  exports.Buffer = Buffer;
  exports.SlowBuffer = SlowBuffer;
  exports.INSPECT_MAX_BYTES = 50;
  Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
  exports.kMaxLength = kMaxLength();
  function typedArraySupport() {
    try {
      var arr = new Uint8Array(1);
      arr.__proto__ = {
        __proto__: Uint8Array.prototype,
        foo: function() {
          return 42;
        }
      };
      return arr.foo() === 42 && typeof arr.subarray === 'function' && arr.subarray(1, 1).byteLength === 0;
    } catch (e) {
      return false;
    }
  }
  function kMaxLength() {
    return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
  }
  function createBuffer(that, length) {
    if (kMaxLength() < length) {
      throw new RangeError('Invalid typed array length');
    }
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      that = new Uint8Array(length);
      that.__proto__ = Buffer.prototype;
    } else {
      if (that === null) {
        that = new Buffer(length);
      }
      that.length = length;
    }
    return that;
  }
  function Buffer(arg, encodingOrOffset, length) {
    if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
      return new Buffer(arg, encodingOrOffset, length);
    }
    if (typeof arg === 'number') {
      if (typeof encodingOrOffset === 'string') {
        throw new Error('If encoding is specified then the first argument must be a string');
      }
      return allocUnsafe(this, arg);
    }
    return from(this, arg, encodingOrOffset, length);
  }
  Buffer.poolSize = 8192;
  Buffer._augment = function(arr) {
    arr.__proto__ = Buffer.prototype;
    return arr;
  };
  function from(that, value, encodingOrOffset, length) {
    if (typeof value === 'number') {
      throw new TypeError('"value" argument must not be a number');
    }
    if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
      return fromArrayBuffer(that, value, encodingOrOffset, length);
    }
    if (typeof value === 'string') {
      return fromString(that, value, encodingOrOffset);
    }
    return fromObject(that, value);
  }
  Buffer.from = function(value, encodingOrOffset, length) {
    return from(null, value, encodingOrOffset, length);
  };
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    Buffer.prototype.__proto__ = Uint8Array.prototype;
    Buffer.__proto__ = Uint8Array;
    if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
      Object.defineProperty(Buffer, Symbol.species, {
        value: null,
        configurable: true
      });
    }
  }
  function assertSize(size) {
    if (typeof size !== 'number') {
      throw new TypeError('"size" argument must be a number');
    } else if (size < 0) {
      throw new RangeError('"size" argument must not be negative');
    }
  }
  function alloc(that, size, fill, encoding) {
    assertSize(size);
    if (size <= 0) {
      return createBuffer(that, size);
    }
    if (fill !== undefined) {
      return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
    }
    return createBuffer(that, size);
  }
  Buffer.alloc = function(size, fill, encoding) {
    return alloc(null, size, fill, encoding);
  };
  function allocUnsafe(that, size) {
    assertSize(size);
    that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT) {
      for (var i = 0; i < size; ++i) {
        that[i] = 0;
      }
    }
    return that;
  }
  Buffer.allocUnsafe = function(size) {
    return allocUnsafe(null, size);
  };
  Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(null, size);
  };
  function fromString(that, string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') {
      encoding = 'utf8';
    }
    if (!Buffer.isEncoding(encoding)) {
      throw new TypeError('"encoding" must be a valid string encoding');
    }
    var length = byteLength(string, encoding) | 0;
    that = createBuffer(that, length);
    var actual = that.write(string, encoding);
    if (actual !== length) {
      that = that.slice(0, actual);
    }
    return that;
  }
  function fromArrayLike(that, array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    that = createBuffer(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }
  function fromArrayBuffer(that, array, byteOffset, length) {
    array.byteLength;
    if (byteOffset < 0 || array.byteLength < byteOffset) {
      throw new RangeError('\'offset\' is out of bounds');
    }
    if (array.byteLength < byteOffset + (length || 0)) {
      throw new RangeError('\'length\' is out of bounds');
    }
    if (byteOffset === undefined && length === undefined) {
      array = new Uint8Array(array);
    } else if (length === undefined) {
      array = new Uint8Array(array, byteOffset);
    } else {
      array = new Uint8Array(array, byteOffset, length);
    }
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      that = array;
      that.__proto__ = Buffer.prototype;
    } else {
      that = fromArrayLike(that, array);
    }
    return that;
  }
  function fromObject(that, obj) {
    if (Buffer.isBuffer(obj)) {
      var len = checked(obj.length) | 0;
      that = createBuffer(that, len);
      if (that.length === 0) {
        return that;
      }
      obj.copy(that, 0, 0, len);
      return that;
    }
    if (obj) {
      if ((typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
        if (typeof obj.length !== 'number' || isnan(obj.length)) {
          return createBuffer(that, 0);
        }
        return fromArrayLike(that, obj);
      }
      if (obj.type === 'Buffer' && isArray(obj.data)) {
        return fromArrayLike(that, obj.data);
      }
    }
    throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
  }
  function checked(length) {
    if (length >= kMaxLength()) {
      throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
    }
    return length | 0;
  }
  function SlowBuffer(length) {
    if (+length != length) {
      length = 0;
    }
    return Buffer.alloc(+length);
  }
  Buffer.isBuffer = function isBuffer(b) {
    return !!(b != null && b._isBuffer);
  };
  Buffer.compare = function compare(a, b) {
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
      throw new TypeError('Arguments must be Buffers');
    }
    if (a === b)
      return 0;
    var x = a.length;
    var y = b.length;
    for (var i = 0,
        len = Math.min(x, y); i < len; ++i) {
      if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
      }
    }
    if (x < y)
      return -1;
    if (y < x)
      return 1;
    return 0;
  };
  Buffer.isEncoding = function isEncoding(encoding) {
    switch (String(encoding).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'latin1':
      case 'binary':
      case 'base64':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return true;
      default:
        return false;
    }
  };
  Buffer.concat = function concat(list, length) {
    if (!isArray(list)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    if (list.length === 0) {
      return Buffer.alloc(0);
    }
    var i;
    if (length === undefined) {
      length = 0;
      for (i = 0; i < list.length; ++i) {
        length += list[i].length;
      }
    }
    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for (i = 0; i < list.length; ++i) {
      var buf = list[i];
      if (!Buffer.isBuffer(buf)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      buf.copy(buffer, pos);
      pos += buf.length;
    }
    return buffer;
  };
  function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) {
      return string.length;
    }
    if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
      return string.byteLength;
    }
    if (typeof string !== 'string') {
      string = '' + string;
    }
    var len = string.length;
    if (len === 0)
      return 0;
    var loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return len;
        case 'utf8':
        case 'utf-8':
        case undefined:
          return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return len * 2;
        case 'hex':
          return len >>> 1;
        case 'base64':
          return base64ToBytes(string).length;
        default:
          if (loweredCase)
            return utf8ToBytes(string).length;
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer.byteLength = byteLength;
  function slowToString(encoding, start, end) {
    var loweredCase = false;
    if (start === undefined || start < 0) {
      start = 0;
    }
    if (start > this.length) {
      return '';
    }
    if (end === undefined || end > this.length) {
      end = this.length;
    }
    if (end <= 0) {
      return '';
    }
    end >>>= 0;
    start >>>= 0;
    if (end <= start) {
      return '';
    }
    if (!encoding)
      encoding = 'utf8';
    while (true) {
      switch (encoding) {
        case 'hex':
          return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
          return utf8Slice(this, start, end);
        case 'ascii':
          return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
          return latin1Slice(this, start, end);
        case 'base64':
          return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return utf16leSlice(this, start, end);
        default:
          if (loweredCase)
            throw new TypeError('Unknown encoding: ' + encoding);
          encoding = (encoding + '').toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer.prototype._isBuffer = true;
  function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
  }
  Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 16-bits');
    }
    for (var i = 0; i < len; i += 2) {
      swap(this, i, i + 1);
    }
    return this;
  };
  Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 32-bits');
    }
    for (var i = 0; i < len; i += 4) {
      swap(this, i, i + 3);
      swap(this, i + 1, i + 2);
    }
    return this;
  };
  Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 64-bits');
    }
    for (var i = 0; i < len; i += 8) {
      swap(this, i, i + 7);
      swap(this, i + 1, i + 6);
      swap(this, i + 2, i + 5);
      swap(this, i + 3, i + 4);
    }
    return this;
  };
  Buffer.prototype.toString = function toString() {
    var length = this.length | 0;
    if (length === 0)
      return '';
    if (arguments.length === 0)
      return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
  };
  Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b))
      throw new TypeError('Argument must be a Buffer');
    if (this === b)
      return true;
    return Buffer.compare(this, b) === 0;
  };
  Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
    if (this.length > 0) {
      str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
      if (this.length > max)
        str += ' ... ';
    }
    return '<Buffer ' + str + '>';
  };
  Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (!Buffer.isBuffer(target)) {
      throw new TypeError('Argument must be a Buffer');
    }
    if (start === undefined) {
      start = 0;
    }
    if (end === undefined) {
      end = target ? target.length : 0;
    }
    if (thisStart === undefined) {
      thisStart = 0;
    }
    if (thisEnd === undefined) {
      thisEnd = this.length;
    }
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
      throw new RangeError('out of range index');
    }
    if (thisStart >= thisEnd && start >= end) {
      return 0;
    }
    if (thisStart >= thisEnd) {
      return -1;
    }
    if (start >= end) {
      return 1;
    }
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target)
      return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for (var i = 0; i < len; ++i) {
      if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
      }
    }
    if (x < y)
      return -1;
    if (y < x)
      return 1;
    return 0;
  };
  function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    if (buffer.length === 0)
      return -1;
    if (typeof byteOffset === 'string') {
      encoding = byteOffset;
      byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) {
      byteOffset = 0x7fffffff;
    } else if (byteOffset < -0x80000000) {
      byteOffset = -0x80000000;
    }
    byteOffset = +byteOffset;
    if (isNaN(byteOffset)) {
      byteOffset = dir ? 0 : (buffer.length - 1);
    }
    if (byteOffset < 0)
      byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
      if (dir)
        return -1;
      else
        byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
      if (dir)
        byteOffset = 0;
      else
        return -1;
    }
    if (typeof val === 'string') {
      val = Buffer.from(val, encoding);
    }
    if (Buffer.isBuffer(val)) {
      if (val.length === 0) {
        return -1;
      }
      return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
      val = val & 0xFF;
      if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
        if (dir) {
          return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
        } else {
          return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
      }
      return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
  }
  function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== undefined) {
      encoding = String(encoding).toLowerCase();
      if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
        if (arr.length < 2 || val.length < 2) {
          return -1;
        }
        indexSize = 2;
        arrLength /= 2;
        valLength /= 2;
        byteOffset /= 2;
      }
    }
    function read(buf, i) {
      if (indexSize === 1) {
        return buf[i];
      } else {
        return buf.readUInt16BE(i * indexSize);
      }
    }
    var i;
    if (dir) {
      var foundIndex = -1;
      for (i = byteOffset; i < arrLength; i++) {
        if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
          if (foundIndex === -1)
            foundIndex = i;
          if (i - foundIndex + 1 === valLength)
            return foundIndex * indexSize;
        } else {
          if (foundIndex !== -1)
            i -= i - foundIndex;
          foundIndex = -1;
        }
      }
    } else {
      if (byteOffset + valLength > arrLength)
        byteOffset = arrLength - valLength;
      for (i = byteOffset; i >= 0; i--) {
        var found = true;
        for (var j = 0; j < valLength; j++) {
          if (read(arr, i + j) !== read(val, j)) {
            found = false;
            break;
          }
        }
        if (found)
          return i;
      }
    }
    return -1;
  }
  Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
  };
  Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
  };
  Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
  };
  function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) {
      length = remaining;
    } else {
      length = Number(length);
      if (length > remaining) {
        length = remaining;
      }
    }
    var strLen = string.length;
    if (strLen % 2 !== 0)
      throw new TypeError('Invalid hex string');
    if (length > strLen / 2) {
      length = strLen / 2;
    }
    for (var i = 0; i < length; ++i) {
      var parsed = parseInt(string.substr(i * 2, 2), 16);
      if (isNaN(parsed))
        return i;
      buf[offset + i] = parsed;
    }
    return i;
  }
  function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
  }
  function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
  }
  function latin1Write(buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length);
  }
  function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
  }
  function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
  }
  Buffer.prototype.write = function write(string, offset, length, encoding) {
    if (offset === undefined) {
      encoding = 'utf8';
      length = this.length;
      offset = 0;
    } else if (length === undefined && typeof offset === 'string') {
      encoding = offset;
      length = this.length;
      offset = 0;
    } else if (isFinite(offset)) {
      offset = offset | 0;
      if (isFinite(length)) {
        length = length | 0;
        if (encoding === undefined)
          encoding = 'utf8';
      } else {
        encoding = length;
        length = undefined;
      }
    } else {
      throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    }
    var remaining = this.length - offset;
    if (length === undefined || length > remaining)
      length = remaining;
    if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
      throw new RangeError('Attempt to write outside buffer bounds');
    }
    if (!encoding)
      encoding = 'utf8';
    var loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case 'hex':
          return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
          return utf8Write(this, string, offset, length);
        case 'ascii':
          return asciiWrite(this, string, offset, length);
        case 'latin1':
        case 'binary':
          return latin1Write(this, string, offset, length);
        case 'base64':
          return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return ucs2Write(this, string, offset, length);
        default:
          if (loweredCase)
            throw new TypeError('Unknown encoding: ' + encoding);
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  };
  Buffer.prototype.toJSON = function toJSON() {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
      return base64.fromByteArray(buf);
    } else {
      return base64.fromByteArray(buf.slice(start, end));
    }
  }
  function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while (i < end) {
      var firstByte = buf[i];
      var codePoint = null;
      var bytesPerSequence = (firstByte > 0xEF) ? 4 : (firstByte > 0xDF) ? 3 : (firstByte > 0xBF) ? 2 : 1;
      if (i + bytesPerSequence <= end) {
        var secondByte,
            thirdByte,
            fourthByte,
            tempCodePoint;
        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 0x80) {
              codePoint = firstByte;
            }
            break;
          case 2:
            secondByte = buf[i + 1];
            if ((secondByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
              if (tempCodePoint > 0x7F) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 3:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
              if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 4:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            fourthByte = buf[i + 3];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
              if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                codePoint = tempCodePoint;
              }
            }
        }
      }
      if (codePoint === null) {
        codePoint = 0xFFFD;
        bytesPerSequence = 1;
      } else if (codePoint > 0xFFFF) {
        codePoint -= 0x10000;
        res.push(codePoint >>> 10 & 0x3FF | 0xD800);
        codePoint = 0xDC00 | codePoint & 0x3FF;
      }
      res.push(codePoint);
      i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
  }
  var MAX_ARGUMENTS_LENGTH = 0x1000;
  function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints);
    }
    var res = '';
    var i = 0;
    while (i < len) {
      res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    }
    return res;
  }
  function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i] & 0x7F);
    }
    return ret;
  }
  function latin1Slice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i]);
    }
    return ret;
  }
  function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0)
      start = 0;
    if (!end || end < 0 || end > len)
      end = len;
    var out = '';
    for (var i = start; i < end; ++i) {
      out += toHex(buf[i]);
    }
    return out;
  }
  function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    for (var i = 0; i < bytes.length; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res;
  }
  Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
      start += len;
      if (start < 0)
        start = 0;
    } else if (start > len) {
      start = len;
    }
    if (end < 0) {
      end += len;
      if (end < 0)
        end = 0;
    } else if (end > len) {
      end = len;
    }
    if (end < start)
      end = start;
    var newBuf;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      newBuf = this.subarray(start, end);
      newBuf.__proto__ = Buffer.prototype;
    } else {
      var sliceLen = end - start;
      newBuf = new Buffer(sliceLen, undefined);
      for (var i = 0; i < sliceLen; ++i) {
        newBuf[i] = this[i + start];
      }
    }
    return newBuf;
  };
  function checkOffset(offset, ext, length) {
    if ((offset % 1) !== 0 || offset < 0)
      throw new RangeError('offset is not uint');
    if (offset + ext > length)
      throw new RangeError('Trying to access beyond buffer length');
  }
  Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    return val;
  };
  Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      checkOffset(offset, byteLength, this.length);
    }
    var val = this[offset + --byteLength];
    var mul = 1;
    while (byteLength > 0 && (mul *= 0x100)) {
      val += this[offset + --byteLength] * mul;
    }
    return val;
  };
  Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 1, this.length);
    return this[offset];
  };
  Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    return this[offset] | (this[offset + 1] << 8);
  };
  Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    return (this[offset] << 8) | this[offset + 1];
  };
  Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ((this[offset]) | (this[offset + 1] << 8) | (this[offset + 2] << 16)) + (this[offset + 3] * 0x1000000);
  };
  Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return (this[offset] * 0x1000000) + ((this[offset + 1] << 16) | (this[offset + 2] << 8) | this[offset + 3]);
  };
  Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    mul *= 0x80;
    if (val >= mul)
      val -= Math.pow(2, 8 * byteLength);
    return val;
  };
  Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkOffset(offset, byteLength, this.length);
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while (i > 0 && (mul *= 0x100)) {
      val += this[offset + --i] * mul;
    }
    mul *= 0x80;
    if (val >= mul)
      val -= Math.pow(2, 8 * byteLength);
    return val;
  };
  Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80))
      return (this[offset]);
    return ((0xff - this[offset] + 1) * -1);
  };
  Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    var val = this[offset] | (this[offset + 1] << 8);
    return (val & 0x8000) ? val | 0xFFFF0000 : val;
  };
  Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | (this[offset] << 8);
    return (val & 0x8000) ? val | 0xFFFF0000 : val;
  };
  Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return (this[offset]) | (this[offset + 1] << 8) | (this[offset + 2] << 16) | (this[offset + 3] << 24);
  };
  Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return (this[offset] << 24) | (this[offset + 1] << 16) | (this[offset + 2] << 8) | (this[offset + 3]);
  };
  Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
  };
  Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
  };
  Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
  };
  Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
  };
  function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min)
      throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length)
      throw new RangeError('Index out of range');
  }
  Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
      checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
      checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 1, 0xff, 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT)
      value = Math.floor(value);
    this[offset] = (value & 0xff);
    return offset + 1;
  };
  function objectWriteUInt16(buf, value, offset, littleEndian) {
    if (value < 0)
      value = 0xffff + value + 1;
    for (var i = 0,
        j = Math.min(buf.length - offset, 2); i < j; ++i) {
      buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>> (littleEndian ? i : 1 - i) * 8;
    }
  }
  Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2;
  };
  Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 8);
      this[offset + 1] = (value & 0xff);
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2;
  };
  function objectWriteUInt32(buf, value, offset, littleEndian) {
    if (value < 0)
      value = 0xffffffff + value + 1;
    for (var i = 0,
        j = Math.min(buf.length - offset, 4); i < j; ++i) {
      buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
    }
  }
  Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset + 3] = (value >>> 24);
      this[offset + 2] = (value >>> 16);
      this[offset + 1] = (value >>> 8);
      this[offset] = (value & 0xff);
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4;
  };
  Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 24);
      this[offset + 1] = (value >>> 16);
      this[offset + 2] = (value >>> 8);
      this[offset + 3] = (value & 0xff);
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4;
  };
  Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);
      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
        sub = 1;
      }
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);
      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
        sub = 1;
      }
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 1, 0x7f, -0x80);
    if (!Buffer.TYPED_ARRAY_SUPPORT)
      value = Math.floor(value);
    if (value < 0)
      value = 0xff + value + 1;
    this[offset] = (value & 0xff);
    return offset + 1;
  };
  Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2;
  };
  Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 8);
      this[offset + 1] = (value & 0xff);
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2;
  };
  Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
      this[offset + 2] = (value >>> 16);
      this[offset + 3] = (value >>> 24);
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4;
  };
  Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (value < 0)
      value = 0xffffffff + value + 1;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 24);
      this[offset + 1] = (value >>> 16);
      this[offset + 2] = (value >>> 8);
      this[offset + 3] = (value & 0xff);
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4;
  };
  function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length)
      throw new RangeError('Index out of range');
    if (offset < 0)
      throw new RangeError('Index out of range');
  }
  function writeFloat(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
    }
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
  }
  Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
  };
  Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
  };
  function writeDouble(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
    }
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
  }
  Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
  };
  Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
  };
  Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!start)
      start = 0;
    if (!end && end !== 0)
      end = this.length;
    if (targetStart >= target.length)
      targetStart = target.length;
    if (!targetStart)
      targetStart = 0;
    if (end > 0 && end < start)
      end = start;
    if (end === start)
      return 0;
    if (target.length === 0 || this.length === 0)
      return 0;
    if (targetStart < 0) {
      throw new RangeError('targetStart out of bounds');
    }
    if (start < 0 || start >= this.length)
      throw new RangeError('sourceStart out of bounds');
    if (end < 0)
      throw new RangeError('sourceEnd out of bounds');
    if (end > this.length)
      end = this.length;
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }
    var len = end - start;
    var i;
    if (this === target && start < targetStart && targetStart < end) {
      for (i = len - 1; i >= 0; --i) {
        target[i + targetStart] = this[i + start];
      }
    } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
      for (i = 0; i < len; ++i) {
        target[i + targetStart] = this[i + start];
      }
    } else {
      Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
    }
    return len;
  };
  Buffer.prototype.fill = function fill(val, start, end, encoding) {
    if (typeof val === 'string') {
      if (typeof start === 'string') {
        encoding = start;
        start = 0;
        end = this.length;
      } else if (typeof end === 'string') {
        encoding = end;
        end = this.length;
      }
      if (val.length === 1) {
        var code = val.charCodeAt(0);
        if (code < 256) {
          val = code;
        }
      }
      if (encoding !== undefined && typeof encoding !== 'string') {
        throw new TypeError('encoding must be a string');
      }
      if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
        throw new TypeError('Unknown encoding: ' + encoding);
      }
    } else if (typeof val === 'number') {
      val = val & 255;
    }
    if (start < 0 || this.length < start || this.length < end) {
      throw new RangeError('Out of range index');
    }
    if (end <= start) {
      return this;
    }
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val)
      val = 0;
    var i;
    if (typeof val === 'number') {
      for (i = start; i < end; ++i) {
        this[i] = val;
      }
    } else {
      var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
      var len = bytes.length;
      for (i = 0; i < end - start; ++i) {
        this[i + start] = bytes[i % len];
      }
    }
    return this;
  };
  var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
  function base64clean(str) {
    str = stringtrim(str).replace(INVALID_BASE64_RE, '');
    if (str.length < 2)
      return '';
    while (str.length % 4 !== 0) {
      str = str + '=';
    }
    return str;
  }
  function stringtrim(str) {
    if (str.trim)
      return str.trim();
    return str.replace(/^\s+|\s+$/g, '');
  }
  function toHex(n) {
    if (n < 16)
      return '0' + n.toString(16);
    return n.toString(16);
  }
  function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for (var i = 0; i < length; ++i) {
      codePoint = string.charCodeAt(i);
      if (codePoint > 0xD7FF && codePoint < 0xE000) {
        if (!leadSurrogate) {
          if (codePoint > 0xDBFF) {
            if ((units -= 3) > -1)
              bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          } else if (i + 1 === length) {
            if ((units -= 3) > -1)
              bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          }
          leadSurrogate = codePoint;
          continue;
        }
        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1)
            bytes.push(0xEF, 0xBF, 0xBD);
          leadSurrogate = codePoint;
          continue;
        }
        codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
      } else if (leadSurrogate) {
        if ((units -= 3) > -1)
          bytes.push(0xEF, 0xBF, 0xBD);
      }
      leadSurrogate = null;
      if (codePoint < 0x80) {
        if ((units -= 1) < 0)
          break;
        bytes.push(codePoint);
      } else if (codePoint < 0x800) {
        if ((units -= 2) < 0)
          break;
        bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x10000) {
        if ((units -= 3) < 0)
          break;
        bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x110000) {
        if ((units -= 4) < 0)
          break;
        bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else {
        throw new Error('Invalid code point');
      }
    }
    return bytes;
  }
  function asciiToBytes(str) {
    var byteArray = [];
    for (var i = 0; i < str.length; ++i) {
      byteArray.push(str.charCodeAt(i) & 0xFF);
    }
    return byteArray;
  }
  function utf16leToBytes(str, units) {
    var c,
        hi,
        lo;
    var byteArray = [];
    for (var i = 0; i < str.length; ++i) {
      if ((units -= 2) < 0)
        break;
      c = str.charCodeAt(i);
      hi = c >> 8;
      lo = c % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }
    return byteArray;
  }
  function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
  }
  function blitBuffer(src, dst, offset, length) {
    for (var i = 0; i < length; ++i) {
      if ((i + offset >= dst.length) || (i >= src.length))
        break;
      dst[i + offset] = src[i];
    }
    return i;
  }
  function isnan(val) {
    return val !== val;
  }
  return module.exports;
});

$__System.registerDynamic("4", ["42"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require('42').Buffer;
  return module.exports;
});

$__System.registerDynamic("4f", ["5", "27", "2b", "2c", "d", "26", "2a", "4"], true, function($__require, exports, module) {
  var process = $__require("2a"),
      Buffer = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  const SHA3 = $__require('5');
  const secp256k1 = $__require('27');
  const assert = $__require('2b');
  const rlp = $__require('2c');
  const BN = $__require('d');
  const createHash = $__require('26');
  exports.MAX_INTEGER = new BN('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 16);
  exports.TWO_POW256 = new BN('10000000000000000000000000000000000000000000000000000000000000000', 16);
  exports.SHA3_NULL_S = 'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470';
  exports.SHA3_NULL = new Buffer(exports.SHA3_NULL_S, 'hex');
  exports.SHA3_RLP_ARRAY_S = '1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347';
  exports.SHA3_RLP_ARRAY = new Buffer(exports.SHA3_RLP_ARRAY_S, 'hex');
  exports.SHA3_RLP_S = '56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421';
  exports.SHA3_RLP = new Buffer(exports.SHA3_RLP_S, 'hex');
  exports.BN = BN;
  exports.rlp = rlp;
  exports.secp256k1 = secp256k1;
  exports.zeros = function(bytes) {
    var buf = new Buffer(bytes);
    buf.fill(0);
    return buf;
  };
  exports.setLengthLeft = exports.setLength = function(msg, length, right) {
    var buf = exports.zeros(length);
    msg = exports.toBuffer(msg);
    if (right) {
      if (msg.length < length) {
        msg.copy(buf);
        return buf;
      }
      return msg.slice(0, length);
    } else {
      if (msg.length < length) {
        msg.copy(buf, length - msg.length);
        return buf;
      }
      return msg.slice(-length);
    }
  };
  exports.setLengthRight = function(msg, length) {
    return exports.setLength(msg, length, true);
  };
  exports.unpad = exports.stripZeros = function(a) {
    a = exports.stripHexPrefix(a);
    var first = a[0];
    while (a.length > 0 && first.toString() === '0') {
      a = a.slice(1);
      first = a[0];
    }
    return a;
  };
  exports.toBuffer = function(v) {
    if (!Buffer.isBuffer(v)) {
      if (Array.isArray(v)) {
        v = new Buffer(v);
      } else if (typeof v === 'string') {
        if (exports.isHexPrefixed(v)) {
          v = new Buffer(exports.padToEven(exports.stripHexPrefix(v)), 'hex');
        } else {
          v = new Buffer(v);
        }
      } else if (typeof v === 'number') {
        v = exports.intToBuffer(v);
      } else if (v === null || v === undefined) {
        v = new Buffer([]);
      } else if (v.toArray) {
        v = new Buffer(v.toArray());
      } else {
        throw new Error('invalid type');
      }
    }
    return v;
  };
  exports.intToHex = function(i) {
    assert(i % 1 === 0, 'number is not a integer');
    assert(i >= 0, 'number must be positive');
    var hex = i.toString(16);
    if (hex.length % 2) {
      hex = '0' + hex;
    }
    return '0x' + hex;
  };
  exports.intToBuffer = function(i) {
    var hex = exports.intToHex(i);
    return new Buffer(hex.slice(2), 'hex');
  };
  exports.bufferToInt = function(buf) {
    return parseInt(exports.bufferToHex(buf), 16);
  };
  exports.bufferToHex = function(buf) {
    buf = exports.toBuffer(buf);
    if (buf.length === 0) {
      return 0;
    }
    return '0x' + buf.toString('hex');
  };
  exports.fromSigned = function(num) {
    return new BN(num).fromTwos(256);
  };
  exports.toUnsigned = function(num) {
    return new Buffer(num.toTwos(256).toArray());
  };
  exports.sha3 = function(a, bytes) {
    a = exports.toBuffer(a);
    if (!bytes)
      bytes = 256;
    var h = new SHA3(bytes);
    if (a) {
      h.update(a);
    }
    return new Buffer(h.digest('hex'), 'hex');
  };
  exports.sha256 = function(a) {
    a = exports.toBuffer(a);
    return createHash('sha256').update(a).digest();
  };
  exports.ripemd160 = function(a, padded) {
    a = exports.toBuffer(a);
    var hash = createHash('rmd160').update(a).digest();
    if (padded === true) {
      return exports.setLength(hash, 32);
    } else {
      return hash;
    }
  };
  exports.rlphash = function(a) {
    return exports.sha3(rlp.encode(a));
  };
  exports.isValidPrivate = function(privateKey) {
    return secp256k1.privateKeyVerify(privateKey);
  };
  exports.isValidPublic = function(publicKey, sanitize) {
    if (publicKey.length === 64) {
      return secp256k1.publicKeyVerify(Buffer.concat([new Buffer([4]), publicKey]));
    }
    if (!sanitize) {
      return false;
    }
    return secp256k1.publicKeyVerify(publicKey);
  };
  exports.pubToAddress = exports.publicToAddress = function(pubKey, sanitize) {
    pubKey = exports.toBuffer(pubKey);
    if (sanitize && (pubKey.length !== 64)) {
      pubKey = secp256k1.publicKeyConvert(pubKey, false).slice(1);
    }
    assert(pubKey.length === 64);
    return exports.sha3(pubKey).slice(-20);
  };
  var privateToPublic = exports.privateToPublic = function(privateKey) {
    privateKey = exports.toBuffer(privateKey);
    return secp256k1.publicKeyCreate(privateKey, false).slice(1);
  };
  exports.importPublic = function(publicKey) {
    publicKey = exports.toBuffer(publicKey);
    if (publicKey.length !== 64) {
      publicKey = secp256k1.publicKeyConvert(publicKey, false).slice(1);
    }
    return publicKey;
  };
  exports.ecsign = function(msgHash, privateKey) {
    var sig = secp256k1.sign(msgHash, privateKey);
    var ret = {};
    ret.r = sig.signature.slice(0, 32);
    ret.s = sig.signature.slice(32, 64);
    ret.v = sig.recovery + 27;
    return ret;
  };
  exports.ecrecover = function(msgHash, v, r, s) {
    var signature = Buffer.concat([exports.setLength(r, 32), exports.setLength(s, 32)], 64);
    var recovery = exports.bufferToInt(v) - 27;
    if (recovery !== 0 && recovery !== 1) {
      throw new Error('Invalid signature v value');
    }
    var senderPubKey = secp256k1.recover(msgHash, signature, recovery);
    return secp256k1.publicKeyConvert(senderPubKey, false).slice(1);
  };
  exports.toRpcSig = function(v, r, s) {
    return exports.bufferToHex(Buffer.concat([r, s, exports.toBuffer(v - 27)]));
  };
  exports.fromRpcSig = function(sig) {
    sig = exports.toBuffer(sig);
    var v = sig[64];
    if (v < 27) {
      v += 27;
    }
    return {
      v: v,
      r: sig.slice(0, 32),
      s: sig.slice(32, 64)
    };
  };
  exports.privateToAddress = function(privateKey) {
    return exports.publicToAddress(privateToPublic(privateKey));
  };
  exports.isValidAddress = function(address) {
    return /^0x[0-9a-fA-F]{40}$/i.test(address);
  };
  exports.toChecksumAddress = function(address) {
    address = exports.stripHexPrefix(address).toLowerCase();
    var hash = exports.sha3(address).toString('hex');
    var ret = '0x';
    for (var i = 0; i < address.length; i++) {
      if (parseInt(hash[i], 16) >= 8) {
        ret += address[i].toUpperCase();
      } else {
        ret += address[i];
      }
    }
    return ret;
  };
  exports.isValidChecksumAddress = function(address) {
    return exports.isValidAddress(address) && (exports.toChecksumAddress(address) === address);
  };
  exports.generateAddress = function(from, nonce) {
    from = exports.toBuffer(from);
    nonce = new BN(nonce);
    if (nonce.isZero()) {
      nonce = null;
    } else {
      nonce = new Buffer(nonce.toArray());
    }
    return exports.rlphash([from, nonce]).slice(-20);
  };
  exports.isPrecompiled = function(address) {
    var a = exports.unpad(address);
    return a.length === 1 && a[0] > 0 && a[0] < 5;
  };
  exports.isHexPrefixed = function(str) {
    return str.slice(0, 2) === '0x';
  };
  exports.stripHexPrefix = function(str) {
    if (typeof str !== 'string') {
      return str;
    }
    return exports.isHexPrefixed(str) ? str.slice(2) : str;
  };
  exports.addHexPrefix = function(str) {
    if (typeof str !== 'string') {
      return str;
    }
    return exports.isHexPrefixed(str) ? str : '0x' + str;
  };
  exports.padToEven = function(a) {
    if (a.length % 2)
      a = '0' + a;
    return a;
  };
  exports.baToJSON = function(ba) {
    if (Buffer.isBuffer(ba)) {
      return '0x' + ba.toString('hex');
    } else if (ba instanceof Array) {
      var array = [];
      for (var i = 0; i < ba.length; i++) {
        array.push(exports.baToJSON(ba[i]));
      }
      return array;
    }
  };
  exports.defineProperties = function(self, fields, data) {
    self.raw = [];
    self._fields = [];
    self.toJSON = function(label) {
      if (label) {
        var obj = {};
        self._fields.forEach(function(field) {
          obj[field] = '0x' + self[field].toString('hex');
        });
        return obj;
      }
      return exports.baToJSON(this.raw);
    };
    self.serialize = function serialize() {
      return rlp.encode(self.raw);
    };
    fields.forEach(function(field, i) {
      self._fields.push(field.name);
      function getter() {
        return self.raw[i];
      }
      function setter(v) {
        v = exports.toBuffer(v);
        if (v.toString('hex') === '00' && !field.allowZero) {
          v = new Buffer([]);
        }
        if (field.allowLess && field.length) {
          v = exports.stripZeros(v);
          assert(field.length >= v.length, 'The field ' + field.name + ' must not have more ' + field.length + ' bytes');
        } else if (!(field.allowZero && v.length === 0) && field.length) {
          assert(field.length === v.length, 'The field ' + field.name + ' must have byte length of ' + field.length);
        }
        self.raw[i] = v;
      }
      Object.defineProperty(self, field.name, {
        enumerable: true,
        configurable: true,
        get: getter,
        set: setter
      });
      if (field.default) {
        self[field.name] = field.default;
      }
      if (field.alias) {
        Object.defineProperty(self, field.alias, {
          enumerable: false,
          configurable: true,
          set: setter,
          get: getter
        });
      }
    });
    if (data) {
      if (typeof data === 'string') {
        data = new Buffer(exports.stripHexPrefix(data), 'hex');
      }
      if (Buffer.isBuffer(data)) {
        data = rlp.decode(data);
      }
      if (Array.isArray(data)) {
        if (data.length > self._fields.length) {
          throw (new Error('wrong number of fields in data'));
        }
        data.forEach(function(d, i) {
          self[self._fields[i]] = exports.toBuffer(d);
        });
      } else if (typeof data === 'object') {
        for (var prop in data) {
          if (self._fields.indexOf(prop) !== -1) {
            self[prop] = data[prop];
          }
        }
      } else {
        throw new Error('invalid data');
      }
    }
  };
  return module.exports;
});

$__System.registerDynamic("50", ["51", "2a"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("2a");
  var define,
      global = this || self,
      GLOBAL = global;
  var core_1 = $__require('51');
  exports.Stream = core_1.Stream;
  exports.MemoryStream = core_1.MemoryStream;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.default = core_1.Stream;
  return module.exports;
});

$__System.registerDynamic("52", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  ;
  (function() {
    var undefined;
    var VERSION = '4.17.2';
    var LARGE_ARRAY_SIZE = 200;
    var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
        FUNC_ERROR_TEXT = 'Expected a function';
    var HASH_UNDEFINED = '__lodash_hash_undefined__';
    var MAX_MEMOIZE_SIZE = 500;
    var PLACEHOLDER = '__lodash_placeholder__';
    var CLONE_DEEP_FLAG = 1,
        CLONE_FLAT_FLAG = 2,
        CLONE_SYMBOLS_FLAG = 4;
    var COMPARE_PARTIAL_FLAG = 1,
        COMPARE_UNORDERED_FLAG = 2;
    var WRAP_BIND_FLAG = 1,
        WRAP_BIND_KEY_FLAG = 2,
        WRAP_CURRY_BOUND_FLAG = 4,
        WRAP_CURRY_FLAG = 8,
        WRAP_CURRY_RIGHT_FLAG = 16,
        WRAP_PARTIAL_FLAG = 32,
        WRAP_PARTIAL_RIGHT_FLAG = 64,
        WRAP_ARY_FLAG = 128,
        WRAP_REARG_FLAG = 256,
        WRAP_FLIP_FLAG = 512;
    var DEFAULT_TRUNC_LENGTH = 30,
        DEFAULT_TRUNC_OMISSION = '...';
    var HOT_COUNT = 800,
        HOT_SPAN = 16;
    var LAZY_FILTER_FLAG = 1,
        LAZY_MAP_FLAG = 2,
        LAZY_WHILE_FLAG = 3;
    var INFINITY = 1 / 0,
        MAX_SAFE_INTEGER = 9007199254740991,
        MAX_INTEGER = 1.7976931348623157e+308,
        NAN = 0 / 0;
    var MAX_ARRAY_LENGTH = 4294967295,
        MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
        HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
    var wrapFlags = [['ary', WRAP_ARY_FLAG], ['bind', WRAP_BIND_FLAG], ['bindKey', WRAP_BIND_KEY_FLAG], ['curry', WRAP_CURRY_FLAG], ['curryRight', WRAP_CURRY_RIGHT_FLAG], ['flip', WRAP_FLIP_FLAG], ['partial', WRAP_PARTIAL_FLAG], ['partialRight', WRAP_PARTIAL_RIGHT_FLAG], ['rearg', WRAP_REARG_FLAG]];
    var argsTag = '[object Arguments]',
        arrayTag = '[object Array]',
        asyncTag = '[object AsyncFunction]',
        boolTag = '[object Boolean]',
        dateTag = '[object Date]',
        domExcTag = '[object DOMException]',
        errorTag = '[object Error]',
        funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]',
        mapTag = '[object Map]',
        numberTag = '[object Number]',
        nullTag = '[object Null]',
        objectTag = '[object Object]',
        promiseTag = '[object Promise]',
        proxyTag = '[object Proxy]',
        regexpTag = '[object RegExp]',
        setTag = '[object Set]',
        stringTag = '[object String]',
        symbolTag = '[object Symbol]',
        undefinedTag = '[object Undefined]',
        weakMapTag = '[object WeakMap]',
        weakSetTag = '[object WeakSet]';
    var arrayBufferTag = '[object ArrayBuffer]',
        dataViewTag = '[object DataView]',
        float32Tag = '[object Float32Array]',
        float64Tag = '[object Float64Array]',
        int8Tag = '[object Int8Array]',
        int16Tag = '[object Int16Array]',
        int32Tag = '[object Int32Array]',
        uint8Tag = '[object Uint8Array]',
        uint8ClampedTag = '[object Uint8ClampedArray]',
        uint16Tag = '[object Uint16Array]',
        uint32Tag = '[object Uint32Array]';
    var reEmptyStringLeading = /\b__p \+= '';/g,
        reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
        reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
        reUnescapedHtml = /[&<>"']/g,
        reHasEscapedHtml = RegExp(reEscapedHtml.source),
        reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
    var reEscape = /<%-([\s\S]+?)%>/g,
        reEvaluate = /<%([\s\S]+?)%>/g,
        reInterpolate = /<%=([\s\S]+?)%>/g;
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        reIsPlainProp = /^\w*$/,
        reLeadingDot = /^\./,
        rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
        reHasRegExpChar = RegExp(reRegExpChar.source);
    var reTrim = /^\s+|\s+$/g,
        reTrimStart = /^\s+/,
        reTrimEnd = /\s+$/;
    var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
        reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
        reSplitDetails = /,? & /;
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reEscapeChar = /\\(\\)?/g;
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    var reFlags = /\w*$/;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsOctal = /^0o[0-7]+$/i;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var reNoMatch = /($^)/;
    var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
    var rsAstralRange = '\\ud800-\\udfff',
        rsComboMarksRange = '\\u0300-\\u036f',
        reComboHalfMarksRange = '\\ufe20-\\ufe2f',
        rsComboSymbolsRange = '\\u20d0-\\u20ff',
        rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
        rsDingbatRange = '\\u2700-\\u27bf',
        rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
        rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
        rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
        rsPunctuationRange = '\\u2000-\\u206f',
        rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
        rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
        rsVarRange = '\\ufe0e\\ufe0f',
        rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['\u2019]",
        rsAstral = '[' + rsAstralRange + ']',
        rsBreak = '[' + rsBreakRange + ']',
        rsCombo = '[' + rsComboRange + ']',
        rsDigits = '\\d+',
        rsDingbat = '[' + rsDingbatRange + ']',
        rsLower = '[' + rsLowerRange + ']',
        rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
        rsFitz = '\\ud83c[\\udffb-\\udfff]',
        rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
        rsNonAstral = '[^' + rsAstralRange + ']',
        rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        rsUpper = '[' + rsUpperRange + ']',
        rsZWJ = '\\u200d';
    var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
        rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
        rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
        rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
        reOptMod = rsModifier + '?',
        rsOptVar = '[' + rsVarRange + ']?',
        rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
        rsOrdLower = '\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)',
        rsOrdUpper = '\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)',
        rsSeq = rsOptVar + reOptMod + rsOptJoin,
        rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
        rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
    var reApos = RegExp(rsApos, 'g');
    var reComboMark = RegExp(rsCombo, 'g');
    var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
    var reUnicodeWord = RegExp([rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')', rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')', rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower, rsUpper + '+' + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join('|'), 'g');
    var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var contextProps = ['Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array', 'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object', 'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap', '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'];
    var templateCounter = -1;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    var deburredLetters = {
      '\xc0': 'A',
      '\xc1': 'A',
      '\xc2': 'A',
      '\xc3': 'A',
      '\xc4': 'A',
      '\xc5': 'A',
      '\xe0': 'a',
      '\xe1': 'a',
      '\xe2': 'a',
      '\xe3': 'a',
      '\xe4': 'a',
      '\xe5': 'a',
      '\xc7': 'C',
      '\xe7': 'c',
      '\xd0': 'D',
      '\xf0': 'd',
      '\xc8': 'E',
      '\xc9': 'E',
      '\xca': 'E',
      '\xcb': 'E',
      '\xe8': 'e',
      '\xe9': 'e',
      '\xea': 'e',
      '\xeb': 'e',
      '\xcc': 'I',
      '\xcd': 'I',
      '\xce': 'I',
      '\xcf': 'I',
      '\xec': 'i',
      '\xed': 'i',
      '\xee': 'i',
      '\xef': 'i',
      '\xd1': 'N',
      '\xf1': 'n',
      '\xd2': 'O',
      '\xd3': 'O',
      '\xd4': 'O',
      '\xd5': 'O',
      '\xd6': 'O',
      '\xd8': 'O',
      '\xf2': 'o',
      '\xf3': 'o',
      '\xf4': 'o',
      '\xf5': 'o',
      '\xf6': 'o',
      '\xf8': 'o',
      '\xd9': 'U',
      '\xda': 'U',
      '\xdb': 'U',
      '\xdc': 'U',
      '\xf9': 'u',
      '\xfa': 'u',
      '\xfb': 'u',
      '\xfc': 'u',
      '\xdd': 'Y',
      '\xfd': 'y',
      '\xff': 'y',
      '\xc6': 'Ae',
      '\xe6': 'ae',
      '\xde': 'Th',
      '\xfe': 'th',
      '\xdf': 'ss',
      '\u0100': 'A',
      '\u0102': 'A',
      '\u0104': 'A',
      '\u0101': 'a',
      '\u0103': 'a',
      '\u0105': 'a',
      '\u0106': 'C',
      '\u0108': 'C',
      '\u010a': 'C',
      '\u010c': 'C',
      '\u0107': 'c',
      '\u0109': 'c',
      '\u010b': 'c',
      '\u010d': 'c',
      '\u010e': 'D',
      '\u0110': 'D',
      '\u010f': 'd',
      '\u0111': 'd',
      '\u0112': 'E',
      '\u0114': 'E',
      '\u0116': 'E',
      '\u0118': 'E',
      '\u011a': 'E',
      '\u0113': 'e',
      '\u0115': 'e',
      '\u0117': 'e',
      '\u0119': 'e',
      '\u011b': 'e',
      '\u011c': 'G',
      '\u011e': 'G',
      '\u0120': 'G',
      '\u0122': 'G',
      '\u011d': 'g',
      '\u011f': 'g',
      '\u0121': 'g',
      '\u0123': 'g',
      '\u0124': 'H',
      '\u0126': 'H',
      '\u0125': 'h',
      '\u0127': 'h',
      '\u0128': 'I',
      '\u012a': 'I',
      '\u012c': 'I',
      '\u012e': 'I',
      '\u0130': 'I',
      '\u0129': 'i',
      '\u012b': 'i',
      '\u012d': 'i',
      '\u012f': 'i',
      '\u0131': 'i',
      '\u0134': 'J',
      '\u0135': 'j',
      '\u0136': 'K',
      '\u0137': 'k',
      '\u0138': 'k',
      '\u0139': 'L',
      '\u013b': 'L',
      '\u013d': 'L',
      '\u013f': 'L',
      '\u0141': 'L',
      '\u013a': 'l',
      '\u013c': 'l',
      '\u013e': 'l',
      '\u0140': 'l',
      '\u0142': 'l',
      '\u0143': 'N',
      '\u0145': 'N',
      '\u0147': 'N',
      '\u014a': 'N',
      '\u0144': 'n',
      '\u0146': 'n',
      '\u0148': 'n',
      '\u014b': 'n',
      '\u014c': 'O',
      '\u014e': 'O',
      '\u0150': 'O',
      '\u014d': 'o',
      '\u014f': 'o',
      '\u0151': 'o',
      '\u0154': 'R',
      '\u0156': 'R',
      '\u0158': 'R',
      '\u0155': 'r',
      '\u0157': 'r',
      '\u0159': 'r',
      '\u015a': 'S',
      '\u015c': 'S',
      '\u015e': 'S',
      '\u0160': 'S',
      '\u015b': 's',
      '\u015d': 's',
      '\u015f': 's',
      '\u0161': 's',
      '\u0162': 'T',
      '\u0164': 'T',
      '\u0166': 'T',
      '\u0163': 't',
      '\u0165': 't',
      '\u0167': 't',
      '\u0168': 'U',
      '\u016a': 'U',
      '\u016c': 'U',
      '\u016e': 'U',
      '\u0170': 'U',
      '\u0172': 'U',
      '\u0169': 'u',
      '\u016b': 'u',
      '\u016d': 'u',
      '\u016f': 'u',
      '\u0171': 'u',
      '\u0173': 'u',
      '\u0174': 'W',
      '\u0175': 'w',
      '\u0176': 'Y',
      '\u0177': 'y',
      '\u0178': 'Y',
      '\u0179': 'Z',
      '\u017b': 'Z',
      '\u017d': 'Z',
      '\u017a': 'z',
      '\u017c': 'z',
      '\u017e': 'z',
      '\u0132': 'IJ',
      '\u0133': 'ij',
      '\u0152': 'Oe',
      '\u0153': 'oe',
      '\u0149': "'n",
      '\u017f': 's'
    };
    var htmlEscapes = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    var htmlUnescapes = {
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&#39;': "'"
    };
    var stringEscapes = {
      '\\': '\\',
      "'": "'",
      '\n': 'n',
      '\r': 'r',
      '\u2028': 'u2028',
      '\u2029': 'u2029'
    };
    var freeParseFloat = parseFloat,
        freeParseInt = parseInt;
    var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
    var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function('return this')();
    var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = (function() {
      try {
        return freeProcess && freeProcess.binding && freeProcess.binding('util');
      } catch (e) {}
    }());
    var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
        nodeIsDate = nodeUtil && nodeUtil.isDate,
        nodeIsMap = nodeUtil && nodeUtil.isMap,
        nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
        nodeIsSet = nodeUtil && nodeUtil.isSet,
        nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function addMapEntry(map, pair) {
      map.set(pair[0], pair[1]);
      return map;
    }
    function addSetEntry(set, value) {
      set.add(value);
      return set;
    }
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function arrayAggregator(array, setter, iteratee, accumulator) {
      var index = -1,
          length = array == null ? 0 : array.length;
      while (++index < length) {
        var value = array[index];
        setter(accumulator, value, iteratee(value), array);
      }
      return accumulator;
    }
    function arrayEach(array, iteratee) {
      var index = -1,
          length = array == null ? 0 : array.length;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEachRight(array, iteratee) {
      var length = array == null ? 0 : array.length;
      while (length--) {
        if (iteratee(array[length], length, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEvery(array, predicate) {
      var index = -1,
          length = array == null ? 0 : array.length;
      while (++index < length) {
        if (!predicate(array[index], index, array)) {
          return false;
        }
      }
      return true;
    }
    function arrayFilter(array, predicate) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    function arrayIncludesWith(array, value, comparator) {
      var index = -1,
          length = array == null ? 0 : array.length;
      while (++index < length) {
        if (comparator(value, array[index])) {
          return true;
        }
      }
      return false;
    }
    function arrayMap(array, iteratee) {
      var index = -1,
          length = array == null ? 0 : array.length,
          result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    function arrayPush(array, values) {
      var index = -1,
          length = values.length,
          offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1,
          length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    function arrayReduceRight(array, iteratee, accumulator, initAccum) {
      var length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[--length];
      }
      while (length--) {
        accumulator = iteratee(accumulator, array[length], length, array);
      }
      return accumulator;
    }
    function arraySome(array, predicate) {
      var index = -1,
          length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    var asciiSize = baseProperty('length');
    function asciiToArray(string) {
      return string.split('');
    }
    function asciiWords(string) {
      return string.match(reAsciiWord) || [];
    }
    function baseFindKey(collection, predicate, eachFunc) {
      var result;
      eachFunc(collection, function(value, key, collection) {
        if (predicate(value, key, collection)) {
          result = key;
          return false;
        }
      });
      return result;
    }
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length,
          index = fromIndex + (fromRight ? 1 : -1);
      while ((fromRight ? index-- : ++index < length)) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    function baseIndexOf(array, value, fromIndex) {
      return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    function baseIndexOfWith(array, value, fromIndex, comparator) {
      var index = fromIndex - 1,
          length = array.length;
      while (++index < length) {
        if (comparator(array[index], value)) {
          return index;
        }
      }
      return -1;
    }
    function baseIsNaN(value) {
      return value !== value;
    }
    function baseMean(array, iteratee) {
      var length = array == null ? 0 : array.length;
      return length ? (baseSum(array, iteratee) / length) : NAN;
    }
    function baseProperty(key) {
      return function(object) {
        return object == null ? undefined : object[key];
      };
    }
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? undefined : object[key];
      };
    }
    function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
      eachFunc(collection, function(value, index, collection) {
        accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection);
      });
      return accumulator;
    }
    function baseSortBy(array, comparer) {
      var length = array.length;
      array.sort(comparer);
      while (length--) {
        array[length] = array[length].value;
      }
      return array;
    }
    function baseSum(array, iteratee) {
      var result,
          index = -1,
          length = array.length;
      while (++index < length) {
        var current = iteratee(array[index]);
        if (current !== undefined) {
          result = result === undefined ? current : (result + current);
        }
      }
      return result;
    }
    function baseTimes(n, iteratee) {
      var index = -1,
          result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseToPairs(object, props) {
      return arrayMap(props, function(key) {
        return [key, object[key]];
      });
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function baseValues(object, props) {
      return arrayMap(props, function(key) {
        return object[key];
      });
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function charsStartIndex(strSymbols, chrSymbols) {
      var index = -1,
          length = strSymbols.length;
      while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
      return index;
    }
    function charsEndIndex(strSymbols, chrSymbols) {
      var index = strSymbols.length;
      while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
      return index;
    }
    function countHolders(array, placeholder) {
      var length = array.length,
          result = 0;
      while (length--) {
        if (array[length] === placeholder) {
          ++result;
        }
      }
      return result;
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    var escapeHtmlChar = basePropertyOf(htmlEscapes);
    function escapeStringChar(chr) {
      return '\\' + stringEscapes[chr];
    }
    function getValue(object, key) {
      return object == null ? undefined : object[key];
    }
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string);
    }
    function iteratorToArray(iterator) {
      var data,
          result = [];
      while (!(data = iterator.next()).done) {
        result.push(data.value);
      }
      return result;
    }
    function mapToArray(map) {
      var index = -1,
          result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function replaceHolders(array, placeholder) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];
      while (++index < length) {
        var value = array[index];
        if (value === placeholder || value === PLACEHOLDER) {
          array[index] = PLACEHOLDER;
          result[resIndex++] = index;
        }
      }
      return result;
    }
    function setToArray(set) {
      var index = -1,
          result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    function setToPairs(set) {
      var index = -1,
          result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = [value, value];
      });
      return result;
    }
    function strictIndexOf(array, value, fromIndex) {
      var index = fromIndex - 1,
          length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    function strictLastIndexOf(array, value, fromIndex) {
      var index = fromIndex + 1;
      while (index--) {
        if (array[index] === value) {
          return index;
        }
      }
      return index;
    }
    function stringSize(string) {
      return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
    }
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
    function unicodeSize(string) {
      var result = reUnicode.lastIndex = 0;
      while (reUnicode.test(string)) {
        ++result;
      }
      return result;
    }
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || [];
    }
    var runInContext = (function runInContext(context) {
      context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
      var Array = context.Array,
          Date = context.Date,
          Error = context.Error,
          Function = context.Function,
          Math = context.Math,
          Object = context.Object,
          RegExp = context.RegExp,
          String = context.String,
          TypeError = context.TypeError;
      var arrayProto = Array.prototype,
          funcProto = Function.prototype,
          objectProto = Object.prototype;
      var coreJsData = context['__core-js_shared__'];
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var idCounter = 0;
      var maskSrcKey = (function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
        return uid ? ('Symbol(src)_1.' + uid) : '';
      }());
      var nativeObjectToString = objectProto.toString;
      var objectCtorString = funcToString.call(Object);
      var oldDash = root._;
      var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
      var Buffer = moduleExports ? context.Buffer : undefined,
          Symbol = context.Symbol,
          Uint8Array = context.Uint8Array,
          allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
          getPrototype = overArg(Object.getPrototypeOf, Object),
          objectCreate = Object.create,
          propertyIsEnumerable = objectProto.propertyIsEnumerable,
          splice = arrayProto.splice,
          spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
          symIterator = Symbol ? Symbol.iterator : undefined,
          symToStringTag = Symbol ? Symbol.toStringTag : undefined;
      var defineProperty = (function() {
        try {
          var func = getNative(Object, 'defineProperty');
          func({}, '', {});
          return func;
        } catch (e) {}
      }());
      var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
          ctxNow = Date && Date.now !== root.Date.now && Date.now,
          ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
      var nativeCeil = Math.ceil,
          nativeFloor = Math.floor,
          nativeGetSymbols = Object.getOwnPropertySymbols,
          nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
          nativeIsFinite = context.isFinite,
          nativeJoin = arrayProto.join,
          nativeKeys = overArg(Object.keys, Object),
          nativeMax = Math.max,
          nativeMin = Math.min,
          nativeNow = Date.now,
          nativeParseInt = context.parseInt,
          nativeRandom = Math.random,
          nativeReverse = arrayProto.reverse;
      var DataView = getNative(context, 'DataView'),
          Map = getNative(context, 'Map'),
          Promise = getNative(context, 'Promise'),
          Set = getNative(context, 'Set'),
          WeakMap = getNative(context, 'WeakMap'),
          nativeCreate = getNative(Object, 'create');
      var metaMap = WeakMap && new WeakMap;
      var realNames = {};
      var dataViewCtorString = toSource(DataView),
          mapCtorString = toSource(Map),
          promiseCtorString = toSource(Promise),
          setCtorString = toSource(Set),
          weakMapCtorString = toSource(WeakMap);
      var symbolProto = Symbol ? Symbol.prototype : undefined,
          symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
          symbolToString = symbolProto ? symbolProto.toString : undefined;
      function lodash(value) {
        if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
          if (value instanceof LodashWrapper) {
            return value;
          }
          if (hasOwnProperty.call(value, '__wrapped__')) {
            return wrapperClone(value);
          }
        }
        return new LodashWrapper(value);
      }
      var baseCreate = (function() {
        function object() {}
        return function(proto) {
          if (!isObject(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result = new object;
          object.prototype = undefined;
          return result;
        };
      }());
      function baseLodash() {}
      function LodashWrapper(value, chainAll) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
        this.__index__ = 0;
        this.__values__ = undefined;
      }
      lodash.templateSettings = {
        'escape': reEscape,
        'evaluate': reEvaluate,
        'interpolate': reInterpolate,
        'variable': '',
        'imports': {'_': lodash}
      };
      lodash.prototype = baseLodash.prototype;
      lodash.prototype.constructor = lodash;
      LodashWrapper.prototype = baseCreate(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
      function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = MAX_ARRAY_LENGTH;
        this.__views__ = [];
      }
      function lazyClone() {
        var result = new LazyWrapper(this.__wrapped__);
        result.__actions__ = copyArray(this.__actions__);
        result.__dir__ = this.__dir__;
        result.__filtered__ = this.__filtered__;
        result.__iteratees__ = copyArray(this.__iteratees__);
        result.__takeCount__ = this.__takeCount__;
        result.__views__ = copyArray(this.__views__);
        return result;
      }
      function lazyReverse() {
        if (this.__filtered__) {
          var result = new LazyWrapper(this);
          result.__dir__ = -1;
          result.__filtered__ = true;
        } else {
          result = this.clone();
          result.__dir__ *= -1;
        }
        return result;
      }
      function lazyValue() {
        var array = this.__wrapped__.value(),
            dir = this.__dir__,
            isArr = isArray(array),
            isRight = dir < 0,
            arrLength = isArr ? array.length : 0,
            view = getView(0, arrLength, this.__views__),
            start = view.start,
            end = view.end,
            length = end - start,
            index = isRight ? end : (start - 1),
            iteratees = this.__iteratees__,
            iterLength = iteratees.length,
            resIndex = 0,
            takeCount = nativeMin(length, this.__takeCount__);
        if (!isArr || arrLength < LARGE_ARRAY_SIZE || (arrLength == length && takeCount == length)) {
          return baseWrapperValue(array, this.__actions__);
        }
        var result = [];
        outer: while (length-- && resIndex < takeCount) {
          index += dir;
          var iterIndex = -1,
              value = array[index];
          while (++iterIndex < iterLength) {
            var data = iteratees[iterIndex],
                iteratee = data.iteratee,
                type = data.type,
                computed = iteratee(value);
            if (type == LAZY_MAP_FLAG) {
              value = computed;
            } else if (!computed) {
              if (type == LAZY_FILTER_FLAG) {
                continue outer;
              } else {
                break outer;
              }
            }
          }
          result[resIndex++] = value;
        }
        return result;
      }
      LazyWrapper.prototype = baseCreate(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      function Hash(entries) {
        var index = -1,
            length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? undefined : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : undefined;
      }
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
      }
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
        return this;
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype['delete'] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function ListCache(entries) {
        var index = -1,
            length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      function listCacheDelete(key) {
        var data = this.__data__,
            index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      function listCacheGet(key) {
        var data = this.__data__,
            index = assocIndexOf(data, key);
        return index < 0 ? undefined : data[index][1];
      }
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      function listCacheSet(key, value) {
        var data = this.__data__,
            index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype['delete'] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function MapCache(entries) {
        var index = -1,
            length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          'hash': new Hash,
          'map': new (Map || ListCache),
          'string': new Hash
        };
      }
      function mapCacheDelete(key) {
        var result = getMapData(this, key)['delete'](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      function mapCacheSet(key, value) {
        var data = getMapData(this, key),
            size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype['delete'] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      function SetCache(values) {
        var index = -1,
            length = values == null ? 0 : values.length;
        this.__data__ = new MapCache;
        while (++index < length) {
          this.add(values[index]);
        }
      }
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      function stackClear() {
        this.__data__ = new ListCache;
        this.size = 0;
      }
      function stackDelete(key) {
        var data = this.__data__,
            result = data['delete'](key);
        this.size = data.size;
        return result;
      }
      function stackGet(key) {
        return this.__data__.get(key);
      }
      function stackHas(key) {
        return this.__data__.has(key);
      }
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype['delete'] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value),
            isArg = !isArr && isArguments(value),
            isBuff = !isArr && !isArg && isBuffer(value),
            isType = !isArr && !isArg && !isBuff && isTypedArray(value),
            skipIndexes = isArr || isArg || isBuff || isType,
            result = skipIndexes ? baseTimes(value.length, String) : [],
            length = result.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || (isBuff && (key == 'offset' || key == 'parent')) || (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) || isIndex(key, length)))) {
            result.push(key);
          }
        }
        return result;
      }
      function arraySample(array) {
        var length = array.length;
        return length ? array[baseRandom(0, length - 1)] : undefined;
      }
      function arraySampleSize(array, n) {
        return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
      }
      function arrayShuffle(array) {
        return shuffleSelf(copyArray(array));
      }
      function assignInDefaults(objValue, srcValue, key, object) {
        if (objValue === undefined || (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
          return srcValue;
        }
        return objValue;
      }
      function assignMergeValue(object, key, value) {
        if ((value !== undefined && !eq(object[key], value)) || (value === undefined && !(key in object))) {
          baseAssignValue(object, key, value);
        }
      }
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || (value === undefined && !(key in object))) {
          baseAssignValue(object, key, value);
        }
      }
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      function baseAggregator(collection, setter, iteratee, accumulator) {
        baseEach(collection, function(value, key, collection) {
          setter(accumulator, value, iteratee(value), collection);
        });
        return accumulator;
      }
      function baseAssign(object, source) {
        return object && copyObject(source, keys(source), object);
      }
      function baseAssignIn(object, source) {
        return object && copyObject(source, keysIn(source), object);
      }
      function baseAssignValue(object, key, value) {
        if (key == '__proto__' && defineProperty) {
          defineProperty(object, key, {
            'configurable': true,
            'enumerable': true,
            'value': value,
            'writable': true
          });
        } else {
          object[key] = value;
        }
      }
      function baseAt(object, paths) {
        var index = -1,
            length = paths.length,
            result = Array(length),
            skip = object == null;
        while (++index < length) {
          result[index] = skip ? undefined : get(object, paths[index]);
        }
        return result;
      }
      function baseClamp(number, lower, upper) {
        if (number === number) {
          if (upper !== undefined) {
            number = number <= upper ? number : upper;
          }
          if (lower !== undefined) {
            number = number >= lower ? number : lower;
          }
        }
        return number;
      }
      function baseClone(value, bitmask, customizer, key, object, stack) {
        var result,
            isDeep = bitmask & CLONE_DEEP_FLAG,
            isFlat = bitmask & CLONE_FLAT_FLAG,
            isFull = bitmask & CLONE_SYMBOLS_FLAG;
        if (customizer) {
          result = object ? customizer(value, key, object, stack) : customizer(value);
        }
        if (result !== undefined) {
          return result;
        }
        if (!isObject(value)) {
          return value;
        }
        var isArr = isArray(value);
        if (isArr) {
          result = initCloneArray(value);
          if (!isDeep) {
            return copyArray(value, result);
          }
        } else {
          var tag = getTag(value),
              isFunc = tag == funcTag || tag == genTag;
          if (isBuffer(value)) {
            return cloneBuffer(value, isDeep);
          }
          if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
            result = (isFlat || isFunc) ? {} : initCloneObject(value);
            if (!isDeep) {
              return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
            }
          } else {
            if (!cloneableTags[tag]) {
              return object ? value : {};
            }
            result = initCloneByTag(value, tag, baseClone, isDeep);
          }
        }
        stack || (stack = new Stack);
        var stacked = stack.get(value);
        if (stacked) {
          return stacked;
        }
        stack.set(value, result);
        var keysFunc = isFull ? (isFlat ? getAllKeysIn : getAllKeys) : (isFlat ? keysIn : keys);
        var props = isArr ? undefined : keysFunc(value);
        arrayEach(props || value, function(subValue, key) {
          if (props) {
            key = subValue;
            subValue = value[key];
          }
          assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
        return result;
      }
      function baseConforms(source) {
        var props = keys(source);
        return function(object) {
          return baseConformsTo(object, source, props);
        };
      }
      function baseConformsTo(object, source, props) {
        var length = props.length;
        if (object == null) {
          return !length;
        }
        object = Object(object);
        while (length--) {
          var key = props[length],
              predicate = source[key],
              value = object[key];
          if ((value === undefined && !(key in object)) || !predicate(value)) {
            return false;
          }
        }
        return true;
      }
      function baseDelay(func, wait, args) {
        if (typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return setTimeout(function() {
          func.apply(undefined, args);
        }, wait);
      }
      function baseDifference(array, values, iteratee, comparator) {
        var index = -1,
            includes = arrayIncludes,
            isCommon = true,
            length = array.length,
            result = [],
            valuesLength = values.length;
        if (!length) {
          return result;
        }
        if (iteratee) {
          values = arrayMap(values, baseUnary(iteratee));
        }
        if (comparator) {
          includes = arrayIncludesWith;
          isCommon = false;
        } else if (values.length >= LARGE_ARRAY_SIZE) {
          includes = cacheHas;
          isCommon = false;
          values = new SetCache(values);
        }
        outer: while (++index < length) {
          var value = array[index],
              computed = iteratee == null ? value : iteratee(value);
          value = (comparator || value !== 0) ? value : 0;
          if (isCommon && computed === computed) {
            var valuesIndex = valuesLength;
            while (valuesIndex--) {
              if (values[valuesIndex] === computed) {
                continue outer;
              }
            }
            result.push(value);
          } else if (!includes(values, computed, comparator)) {
            result.push(value);
          }
        }
        return result;
      }
      var baseEach = createBaseEach(baseForOwn);
      var baseEachRight = createBaseEach(baseForOwnRight, true);
      function baseEvery(collection, predicate) {
        var result = true;
        baseEach(collection, function(value, index, collection) {
          result = !!predicate(value, index, collection);
          return result;
        });
        return result;
      }
      function baseExtremum(array, iteratee, comparator) {
        var index = -1,
            length = array.length;
        while (++index < length) {
          var value = array[index],
              current = iteratee(value);
          if (current != null && (computed === undefined ? (current === current && !isSymbol(current)) : comparator(current, computed))) {
            var computed = current,
                result = value;
          }
        }
        return result;
      }
      function baseFill(array, value, start, end) {
        var length = array.length;
        start = toInteger(start);
        if (start < 0) {
          start = -start > length ? 0 : (length + start);
        }
        end = (end === undefined || end > length) ? length : toInteger(end);
        if (end < 0) {
          end += length;
        }
        end = start > end ? 0 : toLength(end);
        while (start < end) {
          array[start++] = value;
        }
        return array;
      }
      function baseFilter(collection, predicate) {
        var result = [];
        baseEach(collection, function(value, index, collection) {
          if (predicate(value, index, collection)) {
            result.push(value);
          }
        });
        return result;
      }
      function baseFlatten(array, depth, predicate, isStrict, result) {
        var index = -1,
            length = array.length;
        predicate || (predicate = isFlattenable);
        result || (result = []);
        while (++index < length) {
          var value = array[index];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten(value, depth - 1, predicate, isStrict, result);
            } else {
              arrayPush(result, value);
            }
          } else if (!isStrict) {
            result[result.length] = value;
          }
        }
        return result;
      }
      var baseFor = createBaseFor();
      var baseForRight = createBaseFor(true);
      function baseForOwn(object, iteratee) {
        return object && baseFor(object, iteratee, keys);
      }
      function baseForOwnRight(object, iteratee) {
        return object && baseForRight(object, iteratee, keys);
      }
      function baseFunctions(object, props) {
        return arrayFilter(props, function(key) {
          return isFunction(object[key]);
        });
      }
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0,
            length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return (index && index == length) ? object : undefined;
      }
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
      }
      function baseGetTag(value) {
        if (value == null) {
          return value === undefined ? undefinedTag : nullTag;
        }
        value = Object(value);
        return (symToStringTag && symToStringTag in value) ? getRawTag(value) : objectToString(value);
      }
      function baseGt(value, other) {
        return value > other;
      }
      function baseHas(object, key) {
        return object != null && hasOwnProperty.call(object, key);
      }
      function baseHasIn(object, key) {
        return object != null && key in Object(object);
      }
      function baseInRange(number, start, end) {
        return number >= nativeMin(start, end) && number < nativeMax(start, end);
      }
      function baseIntersection(arrays, iteratee, comparator) {
        var includes = comparator ? arrayIncludesWith : arrayIncludes,
            length = arrays[0].length,
            othLength = arrays.length,
            othIndex = othLength,
            caches = Array(othLength),
            maxLength = Infinity,
            result = [];
        while (othIndex--) {
          var array = arrays[othIndex];
          if (othIndex && iteratee) {
            array = arrayMap(array, baseUnary(iteratee));
          }
          maxLength = nativeMin(array.length, maxLength);
          caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120)) ? new SetCache(othIndex && array) : undefined;
        }
        array = arrays[0];
        var index = -1,
            seen = caches[0];
        outer: while (++index < length && result.length < maxLength) {
          var value = array[index],
              computed = iteratee ? iteratee(value) : value;
          value = (comparator || value !== 0) ? value : 0;
          if (!(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
            othIndex = othLength;
            while (--othIndex) {
              var cache = caches[othIndex];
              if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator))) {
                continue outer;
              }
            }
            if (seen) {
              seen.push(computed);
            }
            result.push(value);
          }
        }
        return result;
      }
      function baseInverter(object, setter, iteratee, accumulator) {
        baseForOwn(object, function(value, key, object) {
          setter(accumulator, iteratee(value), key, object);
        });
        return accumulator;
      }
      function baseInvoke(object, path, args) {
        path = castPath(path, object);
        object = parent(object, path);
        var func = object == null ? object : object[toKey(last(path))];
        return func == null ? undefined : apply(func, object, args);
      }
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      function baseIsArrayBuffer(value) {
        return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
      }
      function baseIsDate(value) {
        return isObjectLike(value) && baseGetTag(value) == dateTag;
      }
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray(object),
            othIsArr = isArray(other),
            objTag = arrayTag,
            othTag = arrayTag;
        if (!objIsArr) {
          objTag = getTag(object);
          objTag = objTag == argsTag ? objectTag : objTag;
        }
        if (!othIsArr) {
          othTag = getTag(other);
          othTag = othTag == argsTag ? objectTag : othTag;
        }
        var objIsObj = objTag == objectTag,
            othIsObj = othTag == objectTag,
            isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack);
          return (objIsArr || isTypedArray(object)) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
              othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object,
                othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack);
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack);
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      function baseIsMap(value) {
        return isObjectLike(value) && getTag(value) == mapTag;
      }
      function baseIsMatch(object, source, matchData, customizer) {
        var index = matchData.length,
            length = index,
            noCustomizer = !customizer;
        if (object == null) {
          return !length;
        }
        object = Object(object);
        while (index--) {
          var data = matchData[index];
          if ((noCustomizer && data[2]) ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index < length) {
          data = matchData[index];
          var key = data[0],
              objValue = object[key],
              srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === undefined && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack;
            if (customizer) {
              var result = customizer(objValue, srcValue, key, object, source, stack);
            }
            if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
              return false;
            }
          }
        }
        return true;
      }
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function baseIsRegExp(value) {
        return isObjectLike(value) && baseGetTag(value) == regexpTag;
      }
      function baseIsSet(value) {
        return isObjectLike(value) && getTag(value) == setTag;
      }
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      function baseIteratee(value) {
        if (typeof value == 'function') {
          return value;
        }
        if (value == null) {
          return identity;
        }
        if (typeof value == 'object') {
          return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
          if (hasOwnProperty.call(object, key) && key != 'constructor') {
            result.push(key);
          }
        }
        return result;
      }
      function baseKeysIn(object) {
        if (!isObject(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object),
            result = [];
        for (var key in object) {
          if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
            result.push(key);
          }
        }
        return result;
      }
      function baseLt(value, other) {
        return value < other;
      }
      function baseMap(collection, iteratee) {
        var index = -1,
            result = isArrayLike(collection) ? Array(collection.length) : [];
        baseEach(collection, function(value, key, collection) {
          result[++index] = iteratee(value, key, collection);
        });
        return result;
      }
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source || baseIsMatch(object, source, matchData);
        };
      }
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object) {
          var objValue = get(object, path);
          return (objValue === undefined && objValue === srcValue) ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      function baseMerge(object, source, srcIndex, customizer, stack) {
        if (object === source) {
          return;
        }
        baseFor(source, function(srcValue, key) {
          if (isObject(srcValue)) {
            stack || (stack = new Stack);
            baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
          } else {
            var newValue = customizer ? customizer(object[key], srcValue, (key + ''), object, source, stack) : undefined;
            if (newValue === undefined) {
              newValue = srcValue;
            }
            assignMergeValue(object, key, newValue);
          }
        }, keysIn);
      }
      function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = object[key],
            srcValue = source[key],
            stacked = stack.get(srcValue);
        if (stacked) {
          assignMergeValue(object, key, stacked);
          return;
        }
        var newValue = customizer ? customizer(objValue, srcValue, (key + ''), object, source, stack) : undefined;
        var isCommon = newValue === undefined;
        if (isCommon) {
          var isArr = isArray(srcValue),
              isBuff = !isArr && isBuffer(srcValue),
              isTyped = !isArr && !isBuff && isTypedArray(srcValue);
          newValue = srcValue;
          if (isArr || isBuff || isTyped) {
            if (isArray(objValue)) {
              newValue = objValue;
            } else if (isArrayLikeObject(objValue)) {
              newValue = copyArray(objValue);
            } else if (isBuff) {
              isCommon = false;
              newValue = cloneBuffer(srcValue, true);
            } else if (isTyped) {
              isCommon = false;
              newValue = cloneTypedArray(srcValue, true);
            } else {
              newValue = [];
            }
          } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
            newValue = objValue;
            if (isArguments(objValue)) {
              newValue = toPlainObject(objValue);
            } else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
              newValue = initCloneObject(srcValue);
            }
          } else {
            isCommon = false;
          }
        }
        if (isCommon) {
          stack.set(srcValue, newValue);
          mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          stack['delete'](srcValue);
        }
        assignMergeValue(object, key, newValue);
      }
      function baseNth(array, n) {
        var length = array.length;
        if (!length) {
          return;
        }
        n += n < 0 ? length : 0;
        return isIndex(n, length) ? array[n] : undefined;
      }
      function baseOrderBy(collection, iteratees, orders) {
        var index = -1;
        iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));
        var result = baseMap(collection, function(value, key, collection) {
          var criteria = arrayMap(iteratees, function(iteratee) {
            return iteratee(value);
          });
          return {
            'criteria': criteria,
            'index': ++index,
            'value': value
          };
        });
        return baseSortBy(result, function(object, other) {
          return compareMultiple(object, other, orders);
        });
      }
      function basePick(object, paths) {
        object = Object(object);
        return basePickBy(object, paths, function(value, path) {
          return hasIn(object, path);
        });
      }
      function basePickBy(object, paths, predicate) {
        var index = -1,
            length = paths.length,
            result = {};
        while (++index < length) {
          var path = paths[index],
              value = baseGet(object, path);
          if (predicate(value, path)) {
            baseSet(result, castPath(path, object), value);
          }
        }
        return result;
      }
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      function basePullAll(array, values, iteratee, comparator) {
        var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
            index = -1,
            length = values.length,
            seen = array;
        if (array === values) {
          values = copyArray(values);
        }
        if (iteratee) {
          seen = arrayMap(array, baseUnary(iteratee));
        }
        while (++index < length) {
          var fromIndex = 0,
              value = values[index],
              computed = iteratee ? iteratee(value) : value;
          while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
            if (seen !== array) {
              splice.call(seen, fromIndex, 1);
            }
            splice.call(array, fromIndex, 1);
          }
        }
        return array;
      }
      function basePullAt(array, indexes) {
        var length = array ? indexes.length : 0,
            lastIndex = length - 1;
        while (length--) {
          var index = indexes[length];
          if (length == lastIndex || index !== previous) {
            var previous = index;
            if (isIndex(index)) {
              splice.call(array, index, 1);
            } else {
              baseUnset(array, index);
            }
          }
        }
        return array;
      }
      function baseRandom(lower, upper) {
        return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
      }
      function baseRange(start, end, step, fromRight) {
        var index = -1,
            length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
            result = Array(length);
        while (length--) {
          result[fromRight ? length : ++index] = start;
          start += step;
        }
        return result;
      }
      function baseRepeat(string, n) {
        var result = '';
        if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
          return result;
        }
        do {
          if (n % 2) {
            result += string;
          }
          n = nativeFloor(n / 2);
          if (n) {
            string += string;
          }
        } while (n);
        return result;
      }
      function baseRest(func, start) {
        return setToString(overRest(func, start, identity), func + '');
      }
      function baseSample(collection) {
        return arraySample(values(collection));
      }
      function baseSampleSize(collection, n) {
        var array = values(collection);
        return shuffleSelf(array, baseClamp(n, 0, array.length));
      }
      function baseSet(object, path, value, customizer) {
        if (!isObject(object)) {
          return object;
        }
        path = castPath(path, object);
        var index = -1,
            length = path.length,
            lastIndex = length - 1,
            nested = object;
        while (nested != null && ++index < length) {
          var key = toKey(path[index]),
              newValue = value;
          if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined;
            if (newValue === undefined) {
              newValue = isObject(objValue) ? objValue : (isIndex(path[index + 1]) ? [] : {});
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      var baseSetData = !metaMap ? identity : function(func, data) {
        metaMap.set(func, data);
        return func;
      };
      var baseSetToString = !defineProperty ? identity : function(func, string) {
        return defineProperty(func, 'toString', {
          'configurable': true,
          'enumerable': false,
          'value': constant(string),
          'writable': true
        });
      };
      function baseShuffle(collection) {
        return shuffleSelf(values(collection));
      }
      function baseSlice(array, start, end) {
        var index = -1,
            length = array.length;
        if (start < 0) {
          start = -start > length ? 0 : (length + start);
        }
        end = end > length ? length : end;
        if (end < 0) {
          end += length;
        }
        length = start > end ? 0 : ((end - start) >>> 0);
        start >>>= 0;
        var result = Array(length);
        while (++index < length) {
          result[index] = array[index + start];
        }
        return result;
      }
      function baseSome(collection, predicate) {
        var result;
        baseEach(collection, function(value, index, collection) {
          result = predicate(value, index, collection);
          return !result;
        });
        return !!result;
      }
      function baseSortedIndex(array, value, retHighest) {
        var low = 0,
            high = array == null ? low : array.length;
        if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
          while (low < high) {
            var mid = (low + high) >>> 1,
                computed = array[mid];
            if (computed !== null && !isSymbol(computed) && (retHighest ? (computed <= value) : (computed < value))) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return high;
        }
        return baseSortedIndexBy(array, value, identity, retHighest);
      }
      function baseSortedIndexBy(array, value, iteratee, retHighest) {
        value = iteratee(value);
        var low = 0,
            high = array == null ? 0 : array.length,
            valIsNaN = value !== value,
            valIsNull = value === null,
            valIsSymbol = isSymbol(value),
            valIsUndefined = value === undefined;
        while (low < high) {
          var mid = nativeFloor((low + high) / 2),
              computed = iteratee(array[mid]),
              othIsDefined = computed !== undefined,
              othIsNull = computed === null,
              othIsReflexive = computed === computed,
              othIsSymbol = isSymbol(computed);
          if (valIsNaN) {
            var setLow = retHighest || othIsReflexive;
          } else if (valIsUndefined) {
            setLow = othIsReflexive && (retHighest || othIsDefined);
          } else if (valIsNull) {
            setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
          } else if (valIsSymbol) {
            setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
          } else if (othIsNull || othIsSymbol) {
            setLow = false;
          } else {
            setLow = retHighest ? (computed <= value) : (computed < value);
          }
          if (setLow) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return nativeMin(high, MAX_ARRAY_INDEX);
      }
      function baseSortedUniq(array, iteratee) {
        var index = -1,
            length = array.length,
            resIndex = 0,
            result = [];
        while (++index < length) {
          var value = array[index],
              computed = iteratee ? iteratee(value) : value;
          if (!index || !eq(computed, seen)) {
            var seen = computed;
            result[resIndex++] = value === 0 ? 0 : value;
          }
        }
        return result;
      }
      function baseToNumber(value) {
        if (typeof value == 'number') {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        return +value;
      }
      function baseToString(value) {
        if (typeof value == 'string') {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + '';
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : '';
        }
        var result = (value + '');
        return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
      }
      function baseUniq(array, iteratee, comparator) {
        var index = -1,
            includes = arrayIncludes,
            length = array.length,
            isCommon = true,
            result = [],
            seen = result;
        if (comparator) {
          isCommon = false;
          includes = arrayIncludesWith;
        } else if (length >= LARGE_ARRAY_SIZE) {
          var set = iteratee ? null : createSet(array);
          if (set) {
            return setToArray(set);
          }
          isCommon = false;
          includes = cacheHas;
          seen = new SetCache;
        } else {
          seen = iteratee ? [] : result;
        }
        outer: while (++index < length) {
          var value = array[index],
              computed = iteratee ? iteratee(value) : value;
          value = (comparator || value !== 0) ? value : 0;
          if (isCommon && computed === computed) {
            var seenIndex = seen.length;
            while (seenIndex--) {
              if (seen[seenIndex] === computed) {
                continue outer;
              }
            }
            if (iteratee) {
              seen.push(computed);
            }
            result.push(value);
          } else if (!includes(seen, computed, comparator)) {
            if (seen !== result) {
              seen.push(computed);
            }
            result.push(value);
          }
        }
        return result;
      }
      function baseUnset(object, path) {
        path = castPath(path, object);
        object = parent(object, path);
        return object == null || delete object[toKey(last(path))];
      }
      function baseUpdate(object, path, updater, customizer) {
        return baseSet(object, path, updater(baseGet(object, path)), customizer);
      }
      function baseWhile(array, predicate, isDrop, fromRight) {
        var length = array.length,
            index = fromRight ? length : -1;
        while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
        return isDrop ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length)) : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
      }
      function baseWrapperValue(value, actions) {
        var result = value;
        if (result instanceof LazyWrapper) {
          result = result.value();
        }
        return arrayReduce(actions, function(result, action) {
          return action.func.apply(action.thisArg, arrayPush([result], action.args));
        }, result);
      }
      function baseXor(arrays, iteratee, comparator) {
        var length = arrays.length;
        if (length < 2) {
          return length ? baseUniq(arrays[0]) : [];
        }
        var index = -1,
            result = Array(length);
        while (++index < length) {
          var array = arrays[index],
              othIndex = -1;
          while (++othIndex < length) {
            if (othIndex != index) {
              result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
            }
          }
        }
        return baseUniq(baseFlatten(result, 1), iteratee, comparator);
      }
      function baseZipObject(props, values, assignFunc) {
        var index = -1,
            length = props.length,
            valsLength = values.length,
            result = {};
        while (++index < length) {
          var value = index < valsLength ? values[index] : undefined;
          assignFunc(result, props[index], value);
        }
        return result;
      }
      function castArrayLikeObject(value) {
        return isArrayLikeObject(value) ? value : [];
      }
      function castFunction(value) {
        return typeof value == 'function' ? value : identity;
      }
      function castPath(value, object) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      var castRest = baseRest;
      function castSlice(array, start, end) {
        var length = array.length;
        end = end === undefined ? length : end;
        return (!start && end >= length) ? array : baseSlice(array, start, end);
      }
      var clearTimeout = ctxClearTimeout || function(id) {
        return root.clearTimeout(id);
      };
      function cloneBuffer(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length,
            result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
        buffer.copy(result);
        return result;
      }
      function cloneArrayBuffer(arrayBuffer) {
        var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array(result).set(new Uint8Array(arrayBuffer));
        return result;
      }
      function cloneDataView(dataView, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
        return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
      }
      function cloneMap(map, isDeep, cloneFunc) {
        var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
        return arrayReduce(array, addMapEntry, new map.constructor);
      }
      function cloneRegExp(regexp) {
        var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
        result.lastIndex = regexp.lastIndex;
        return result;
      }
      function cloneSet(set, isDeep, cloneFunc) {
        var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
        return arrayReduce(array, addSetEntry, new set.constructor);
      }
      function cloneSymbol(symbol) {
        return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
      }
      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      function compareAscending(value, other) {
        if (value !== other) {
          var valIsDefined = value !== undefined,
              valIsNull = value === null,
              valIsReflexive = value === value,
              valIsSymbol = isSymbol(value);
          var othIsDefined = other !== undefined,
              othIsNull = other === null,
              othIsReflexive = other === other,
              othIsSymbol = isSymbol(other);
          if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) || (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) || (valIsNull && othIsDefined && othIsReflexive) || (!valIsDefined && othIsReflexive) || !valIsReflexive) {
            return 1;
          }
          if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) || (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) || (othIsNull && valIsDefined && valIsReflexive) || (!othIsDefined && valIsReflexive) || !othIsReflexive) {
            return -1;
          }
        }
        return 0;
      }
      function compareMultiple(object, other, orders) {
        var index = -1,
            objCriteria = object.criteria,
            othCriteria = other.criteria,
            length = objCriteria.length,
            ordersLength = orders.length;
        while (++index < length) {
          var result = compareAscending(objCriteria[index], othCriteria[index]);
          if (result) {
            if (index >= ordersLength) {
              return result;
            }
            var order = orders[index];
            return result * (order == 'desc' ? -1 : 1);
          }
        }
        return object.index - other.index;
      }
      function composeArgs(args, partials, holders, isCurried) {
        var argsIndex = -1,
            argsLength = args.length,
            holdersLength = holders.length,
            leftIndex = -1,
            leftLength = partials.length,
            rangeLength = nativeMax(argsLength - holdersLength, 0),
            result = Array(leftLength + rangeLength),
            isUncurried = !isCurried;
        while (++leftIndex < leftLength) {
          result[leftIndex] = partials[leftIndex];
        }
        while (++argsIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result[holders[argsIndex]] = args[argsIndex];
          }
        }
        while (rangeLength--) {
          result[leftIndex++] = args[argsIndex++];
        }
        return result;
      }
      function composeArgsRight(args, partials, holders, isCurried) {
        var argsIndex = -1,
            argsLength = args.length,
            holdersIndex = -1,
            holdersLength = holders.length,
            rightIndex = -1,
            rightLength = partials.length,
            rangeLength = nativeMax(argsLength - holdersLength, 0),
            result = Array(rangeLength + rightLength),
            isUncurried = !isCurried;
        while (++argsIndex < rangeLength) {
          result[argsIndex] = args[argsIndex];
        }
        var offset = argsIndex;
        while (++rightIndex < rightLength) {
          result[offset + rightIndex] = partials[rightIndex];
        }
        while (++holdersIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result[offset + holders[holdersIndex]] = args[argsIndex++];
          }
        }
        return result;
      }
      function copyArray(source, array) {
        var index = -1,
            length = source.length;
        array || (array = Array(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
      function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index = -1,
            length = props.length;
        while (++index < length) {
          var key = props[index];
          var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
          if (newValue === undefined) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue(object, key, newValue);
          } else {
            assignValue(object, key, newValue);
          }
        }
        return object;
      }
      function copySymbols(source, object) {
        return copyObject(source, getSymbols(source), object);
      }
      function copySymbolsIn(source, object) {
        return copyObject(source, getSymbolsIn(source), object);
      }
      function createAggregator(setter, initializer) {
        return function(collection, iteratee) {
          var func = isArray(collection) ? arrayAggregator : baseAggregator,
              accumulator = initializer ? initializer() : {};
          return func(collection, setter, getIteratee(iteratee, 2), accumulator);
        };
      }
      function createAssigner(assigner) {
        return baseRest(function(object, sources) {
          var index = -1,
              length = sources.length,
              customizer = length > 1 ? sources[length - 1] : undefined,
              guard = length > 2 ? sources[2] : undefined;
          customizer = (assigner.length > 3 && typeof customizer == 'function') ? (length--, customizer) : undefined;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined : customizer;
            length = 1;
          }
          object = Object(object);
          while (++index < length) {
            var source = sources[index];
            if (source) {
              assigner(object, source, index, customizer);
            }
          }
          return object;
        });
      }
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike(collection)) {
            return eachFunc(collection, iteratee);
          }
          var length = collection.length,
              index = fromRight ? length : -1,
              iterable = Object(collection);
          while ((fromRight ? index-- : ++index < length)) {
            if (iteratee(iterable[index], index, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      function createBaseFor(fromRight) {
        return function(object, iteratee, keysFunc) {
          var index = -1,
              iterable = Object(object),
              props = keysFunc(object),
              length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      function createBind(func, bitmask, thisArg) {
        var isBind = bitmask & WRAP_BIND_FLAG,
            Ctor = createCtor(func);
        function wrapper() {
          var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
          return fn.apply(isBind ? thisArg : this, arguments);
        }
        return wrapper;
      }
      function createCaseFirst(methodName) {
        return function(string) {
          string = toString(string);
          var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;
          var chr = strSymbols ? strSymbols[0] : string.charAt(0);
          var trailing = strSymbols ? castSlice(strSymbols, 1).join('') : string.slice(1);
          return chr[methodName]() + trailing;
        };
      }
      function createCompounder(callback) {
        return function(string) {
          return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
        };
      }
      function createCtor(Ctor) {
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return new Ctor;
            case 1:
              return new Ctor(args[0]);
            case 2:
              return new Ctor(args[0], args[1]);
            case 3:
              return new Ctor(args[0], args[1], args[2]);
            case 4:
              return new Ctor(args[0], args[1], args[2], args[3]);
            case 5:
              return new Ctor(args[0], args[1], args[2], args[3], args[4]);
            case 6:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
            case 7:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
          }
          var thisBinding = baseCreate(Ctor.prototype),
              result = Ctor.apply(thisBinding, args);
          return isObject(result) ? result : thisBinding;
        };
      }
      function createCurry(func, bitmask, arity) {
        var Ctor = createCtor(func);
        function wrapper() {
          var length = arguments.length,
              args = Array(length),
              index = length,
              placeholder = getHolder(wrapper);
          while (index--) {
            args[index] = arguments[index];
          }
          var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder) ? [] : replaceHolders(args, placeholder);
          length -= holders.length;
          if (length < arity) {
            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
          }
          var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
          return apply(fn, this, args);
        }
        return wrapper;
      }
      function createFind(findIndexFunc) {
        return function(collection, predicate, fromIndex) {
          var iterable = Object(collection);
          if (!isArrayLike(collection)) {
            var iteratee = getIteratee(predicate, 3);
            collection = keys(collection);
            predicate = function(key) {
              return iteratee(iterable[key], key, iterable);
            };
          }
          var index = findIndexFunc(collection, predicate, fromIndex);
          return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
        };
      }
      function createFlow(fromRight) {
        return flatRest(function(funcs) {
          var length = funcs.length,
              index = length,
              prereq = LodashWrapper.prototype.thru;
          if (fromRight) {
            funcs.reverse();
          }
          while (index--) {
            var func = funcs[index];
            if (typeof func != 'function') {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
              var wrapper = new LodashWrapper([], true);
            }
          }
          index = wrapper ? index : length;
          while (++index < length) {
            func = funcs[index];
            var funcName = getFuncName(func),
                data = funcName == 'wrapper' ? getData(func) : undefined;
            if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
              wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            } else {
              wrapper = (func.length == 1 && isLaziable(func)) ? wrapper[funcName]() : wrapper.thru(func);
            }
          }
          return function() {
            var args = arguments,
                value = args[0];
            if (wrapper && args.length == 1 && isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
              return wrapper.plant(value).value();
            }
            var index = 0,
                result = length ? funcs[index].apply(this, args) : value;
            while (++index < length) {
              result = funcs[index].call(this, result);
            }
            return result;
          };
        });
      }
      function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
        var isAry = bitmask & WRAP_ARY_FLAG,
            isBind = bitmask & WRAP_BIND_FLAG,
            isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
            isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
            isFlip = bitmask & WRAP_FLIP_FLAG,
            Ctor = isBindKey ? undefined : createCtor(func);
        function wrapper() {
          var length = arguments.length,
              args = Array(length),
              index = length;
          while (index--) {
            args[index] = arguments[index];
          }
          if (isCurried) {
            var placeholder = getHolder(wrapper),
                holdersCount = countHolders(args, placeholder);
          }
          if (partials) {
            args = composeArgs(args, partials, holders, isCurried);
          }
          if (partialsRight) {
            args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
          }
          length -= holdersCount;
          if (isCurried && length < arity) {
            var newHolders = replaceHolders(args, placeholder);
            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
          }
          var thisBinding = isBind ? thisArg : this,
              fn = isBindKey ? thisBinding[func] : func;
          length = args.length;
          if (argPos) {
            args = reorder(args, argPos);
          } else if (isFlip && length > 1) {
            args.reverse();
          }
          if (isAry && ary < length) {
            args.length = ary;
          }
          if (this && this !== root && this instanceof wrapper) {
            fn = Ctor || createCtor(fn);
          }
          return fn.apply(thisBinding, args);
        }
        return wrapper;
      }
      function createInverter(setter, toIteratee) {
        return function(object, iteratee) {
          return baseInverter(object, setter, toIteratee(iteratee), {});
        };
      }
      function createMathOperation(operator, defaultValue) {
        return function(value, other) {
          var result;
          if (value === undefined && other === undefined) {
            return defaultValue;
          }
          if (value !== undefined) {
            result = value;
          }
          if (other !== undefined) {
            if (result === undefined) {
              return other;
            }
            if (typeof value == 'string' || typeof other == 'string') {
              value = baseToString(value);
              other = baseToString(other);
            } else {
              value = baseToNumber(value);
              other = baseToNumber(other);
            }
            result = operator(value, other);
          }
          return result;
        };
      }
      function createOver(arrayFunc) {
        return flatRest(function(iteratees) {
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          return baseRest(function(args) {
            var thisArg = this;
            return arrayFunc(iteratees, function(iteratee) {
              return apply(iteratee, thisArg, args);
            });
          });
        });
      }
      function createPadding(length, chars) {
        chars = chars === undefined ? ' ' : baseToString(chars);
        var charsLength = chars.length;
        if (charsLength < 2) {
          return charsLength ? baseRepeat(chars, length) : chars;
        }
        var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
        return hasUnicode(chars) ? castSlice(stringToArray(result), 0, length).join('') : result.slice(0, length);
      }
      function createPartial(func, bitmask, thisArg, partials) {
        var isBind = bitmask & WRAP_BIND_FLAG,
            Ctor = createCtor(func);
        function wrapper() {
          var argsIndex = -1,
              argsLength = arguments.length,
              leftIndex = -1,
              leftLength = partials.length,
              args = Array(leftLength + argsLength),
              fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
          while (++leftIndex < leftLength) {
            args[leftIndex] = partials[leftIndex];
          }
          while (argsLength--) {
            args[leftIndex++] = arguments[++argsIndex];
          }
          return apply(fn, isBind ? thisArg : this, args);
        }
        return wrapper;
      }
      function createRange(fromRight) {
        return function(start, end, step) {
          if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
            end = step = undefined;
          }
          start = toFinite(start);
          if (end === undefined) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
          return baseRange(start, end, step, fromRight);
        };
      }
      function createRelationalOperation(operator) {
        return function(value, other) {
          if (!(typeof value == 'string' && typeof other == 'string')) {
            value = toNumber(value);
            other = toNumber(other);
          }
          return operator(value, other);
        };
      }
      function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
        var isCurry = bitmask & WRAP_CURRY_FLAG,
            newHolders = isCurry ? holders : undefined,
            newHoldersRight = isCurry ? undefined : holders,
            newPartials = isCurry ? partials : undefined,
            newPartialsRight = isCurry ? undefined : partials;
        bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
        bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
        if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
          bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
        }
        var newData = [func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity];
        var result = wrapFunc.apply(undefined, newData);
        if (isLaziable(func)) {
          setData(result, newData);
        }
        result.placeholder = placeholder;
        return setWrapToString(result, func, bitmask);
      }
      function createRound(methodName) {
        var func = Math[methodName];
        return function(number, precision) {
          number = toNumber(number);
          precision = nativeMin(toInteger(precision), 292);
          if (precision) {
            var pair = (toString(number) + 'e').split('e'),
                value = func(pair[0] + 'e' + (+pair[1] + precision));
            pair = (toString(value) + 'e').split('e');
            return +(pair[0] + 'e' + (+pair[1] - precision));
          }
          return func(number);
        };
      }
      var createSet = !(Set && (1 / setToArray(new Set([, -0]))[1]) == INFINITY) ? noop : function(values) {
        return new Set(values);
      };
      function createToPairs(keysFunc) {
        return function(object) {
          var tag = getTag(object);
          if (tag == mapTag) {
            return mapToArray(object);
          }
          if (tag == setTag) {
            return setToPairs(object);
          }
          return baseToPairs(object, keysFunc(object));
        };
      }
      function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
        var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
        if (!isBindKey && typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var length = partials ? partials.length : 0;
        if (!length) {
          bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
          partials = holders = undefined;
        }
        ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
        arity = arity === undefined ? arity : toInteger(arity);
        length -= holders ? holders.length : 0;
        if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
          var partialsRight = partials,
              holdersRight = holders;
          partials = holders = undefined;
        }
        var data = isBindKey ? undefined : getData(func);
        var newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];
        if (data) {
          mergeData(newData, data);
        }
        func = newData[0];
        bitmask = newData[1];
        thisArg = newData[2];
        partials = newData[3];
        holders = newData[4];
        arity = newData[9] = newData[9] == null ? (isBindKey ? 0 : func.length) : nativeMax(newData[9] - length, 0);
        if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
          bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
        }
        if (!bitmask || bitmask == WRAP_BIND_FLAG) {
          var result = createBind(func, bitmask, thisArg);
        } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
          result = createCurry(func, bitmask, arity);
        } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
          result = createPartial(func, bitmask, thisArg, partials);
        } else {
          result = createHybrid.apply(undefined, newData);
        }
        var setter = data ? baseSetData : setData;
        return setWrapToString(setter(result, newData), func, bitmask);
      }
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
            arrLength = array.length,
            othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var stacked = stack.get(array);
        if (stacked && stack.get(other)) {
          return stacked == other;
        }
        var index = -1,
            result = true,
            seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;
        stack.set(array, other);
        stack.set(other, array);
        while (++index < arrLength) {
          var arrValue = array[index],
              othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
          }
          if (compared !== undefined) {
            if (compared) {
              continue;
            }
            result = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
          }
        }
        stack['delete'](array);
        stack['delete'](other);
        return result;
      }
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if ((object.byteLength != other.byteLength) || (object.byteOffset != other.byteOffset)) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if ((object.byteLength != other.byteLength) || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == (other + '');
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack['delete'](object);
            return result;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
            objProps = keys(object),
            objLength = objProps.length,
            othProps = keys(other),
            othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
          }
        }
        var stacked = stack.get(object);
        if (stacked && stack.get(other)) {
          return stacked == other;
        }
        var result = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key],
              othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === undefined ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack)) : compared)) {
            result = false;
            break;
          }
          skipCtor || (skipCtor = key == 'constructor');
        }
        if (result && !skipCtor) {
          var objCtor = object.constructor,
              othCtor = other.constructor;
          if (objCtor != othCtor && ('constructor' in object && 'constructor' in other) && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
            result = false;
          }
        }
        stack['delete'](object);
        stack['delete'](other);
        return result;
      }
      function flatRest(func) {
        return setToString(overRest(func, undefined, flatten), func + '');
      }
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn, getSymbolsIn);
      }
      var getData = !metaMap ? noop : function(func) {
        return metaMap.get(func);
      };
      function getFuncName(func) {
        var result = (func.name + ''),
            array = realNames[result],
            length = hasOwnProperty.call(realNames, result) ? array.length : 0;
        while (length--) {
          var data = array[length],
              otherFunc = data.func;
          if (otherFunc == null || otherFunc == func) {
            return data.name;
          }
        }
        return result;
      }
      function getHolder(func) {
        var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
        return object.placeholder;
      }
      function getIteratee() {
        var result = lodash.iteratee || iteratee;
        result = result === iteratee ? baseIteratee : result;
        return arguments.length ? result(arguments[0], arguments[1]) : result;
      }
      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
      }
      function getMatchData(object) {
        var result = keys(object),
            length = result.length;
        while (length--) {
          var key = result[length],
              value = object[key];
          result[length] = [key, value, isStrictComparable(value)];
        }
        return result;
      }
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : undefined;
      }
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag),
            tag = value[symToStringTag];
        try {
          value[symToStringTag] = undefined;
          var unmasked = true;
        } catch (e) {}
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
      var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
        var result = [];
        while (object) {
          arrayPush(result, getSymbols(object));
          object = getPrototype(object);
        }
        return result;
      };
      var getTag = baseGetTag;
      if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) || (Map && getTag(new Map) != mapTag) || (Promise && getTag(Promise.resolve()) != promiseTag) || (Set && getTag(new Set) != setTag) || (WeakMap && getTag(new WeakMap) != weakMapTag)) {
        getTag = function(value) {
          var result = baseGetTag(value),
              Ctor = result == objectTag ? value.constructor : undefined,
              ctorString = Ctor ? toSource(Ctor) : '';
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result;
        };
      }
      function getView(start, end, transforms) {
        var index = -1,
            length = transforms.length;
        while (++index < length) {
          var data = transforms[index],
              size = data.size;
          switch (data.type) {
            case 'drop':
              start += size;
              break;
            case 'dropRight':
              end -= size;
              break;
            case 'take':
              end = nativeMin(end, start + size);
              break;
            case 'takeRight':
              start = nativeMax(start, end - size);
              break;
          }
        }
        return {
          'start': start,
          'end': end
        };
      }
      function getWrapDetails(source) {
        var match = source.match(reWrapDetails);
        return match ? match[1].split(reSplitDetails) : [];
      }
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index = -1,
            length = path.length,
            result = false;
        while (++index < length) {
          var key = toKey(path[index]);
          if (!(result = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result || ++index != length) {
          return result;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
      }
      function initCloneArray(array) {
        var length = array.length,
            result = array.constructor(length);
        if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
          result.index = array.index;
          result.input = array.input;
        }
        return result;
      }
      function initCloneObject(object) {
        return (typeof object.constructor == 'function' && !isPrototype(object)) ? baseCreate(getPrototype(object)) : {};
      }
      function initCloneByTag(object, tag, cloneFunc, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
          case arrayBufferTag:
            return cloneArrayBuffer(object);
          case boolTag:
          case dateTag:
            return new Ctor(+object);
          case dataViewTag:
            return cloneDataView(object, isDeep);
          case float32Tag:
          case float64Tag:
          case int8Tag:
          case int16Tag:
          case int32Tag:
          case uint8Tag:
          case uint8ClampedTag:
          case uint16Tag:
          case uint32Tag:
            return cloneTypedArray(object, isDeep);
          case mapTag:
            return cloneMap(object, isDeep, cloneFunc);
          case numberTag:
          case stringTag:
            return new Ctor(object);
          case regexpTag:
            return cloneRegExp(object);
          case setTag:
            return cloneSet(object, isDeep, cloneFunc);
          case symbolTag:
            return cloneSymbol(object);
        }
      }
      function insertWrapDetails(source, details) {
        var length = details.length;
        if (!length) {
          return source;
        }
        var lastIndex = length - 1;
        details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
        details = details.join(length > 2 ? ', ' : ' ');
        return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
      }
      function isFlattenable(value) {
        return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      function isIndex(value, length) {
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (typeof value == 'number' || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function isIterateeCall(value, index, object) {
        if (!isObject(object)) {
          return false;
        }
        var type = typeof index;
        if (type == 'number' ? (isArrayLike(object) && isIndex(index, object.length)) : (type == 'string' && index in object)) {
          return eq(object[index], value);
        }
        return false;
      }
      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || (object != null && value in Object(object));
      }
      function isKeyable(value) {
        var type = typeof value;
        return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean') ? (value !== '__proto__') : (value === null);
      }
      function isLaziable(func) {
        var funcName = getFuncName(func),
            other = lodash[funcName];
        if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
          return false;
        }
        if (func === other) {
          return true;
        }
        var data = getData(other);
        return !!data && func === data[0];
      }
      function isMasked(func) {
        return !!maskSrcKey && (maskSrcKey in func);
      }
      var isMaskable = coreJsData ? isFunction : stubFalse;
      function isPrototype(value) {
        var Ctor = value && value.constructor,
            proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
        return value === proto;
      }
      function isStrictComparable(value) {
        return value === value && !isObject(value);
      }
      function matchesStrictComparable(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== undefined || (key in Object(object)));
        };
      }
      function memoizeCapped(func) {
        var result = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result.cache;
        return result;
      }
      function mergeData(data, source) {
        var bitmask = data[1],
            srcBitmask = source[1],
            newBitmask = bitmask | srcBitmask,
            isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
        var isCombo = ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) || ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) || ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));
        if (!(isCommon || isCombo)) {
          return data;
        }
        if (srcBitmask & WRAP_BIND_FLAG) {
          data[2] = source[2];
          newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
        }
        var value = source[3];
        if (value) {
          var partials = data[3];
          data[3] = partials ? composeArgs(partials, value, source[4]) : value;
          data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
        }
        value = source[5];
        if (value) {
          partials = data[5];
          data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
          data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
        }
        value = source[7];
        if (value) {
          data[7] = value;
        }
        if (srcBitmask & WRAP_ARY_FLAG) {
          data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
        }
        if (data[9] == null) {
          data[9] = source[9];
        }
        data[0] = source[0];
        data[1] = newBitmask;
        return data;
      }
      function mergeDefaults(objValue, srcValue, key, object, source, stack) {
        if (isObject(objValue) && isObject(srcValue)) {
          stack.set(srcValue, objValue);
          baseMerge(objValue, srcValue, undefined, mergeDefaults, stack);
          stack['delete'](srcValue);
        }
        return objValue;
      }
      function nativeKeysIn(object) {
        var result = [];
        if (object != null) {
          for (var key in Object(object)) {
            result.push(key);
          }
        }
        return result;
      }
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      function overRest(func, start, transform) {
        start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
        return function() {
          var args = arguments,
              index = -1,
              length = nativeMax(args.length - start, 0),
              array = Array(length);
          while (++index < length) {
            array[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform(array);
          return apply(func, this, otherArgs);
        };
      }
      function parent(object, path) {
        return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
      }
      function reorder(array, indexes) {
        var arrLength = array.length,
            length = nativeMin(indexes.length, arrLength),
            oldArray = copyArray(array);
        while (length--) {
          var index = indexes[length];
          array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
        }
        return array;
      }
      var setData = shortOut(baseSetData);
      var setTimeout = ctxSetTimeout || function(func, wait) {
        return root.setTimeout(func, wait);
      };
      var setToString = shortOut(baseSetToString);
      function setWrapToString(wrapper, reference, bitmask) {
        var source = (reference + '');
        return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
      }
      function shortOut(func) {
        var count = 0,
            lastCalled = 0;
        return function() {
          var stamp = nativeNow(),
              remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(undefined, arguments);
        };
      }
      function shuffleSelf(array, size) {
        var index = -1,
            length = array.length,
            lastIndex = length - 1;
        size = size === undefined ? length : size;
        while (++index < size) {
          var rand = baseRandom(index, lastIndex),
              value = array[rand];
          array[rand] = array[index];
          array[index] = value;
        }
        array.length = size;
        return array;
      }
      var stringToPath = memoizeCapped(function(string) {
        var result = [];
        if (reLeadingDot.test(string)) {
          result.push('');
        }
        string.replace(rePropName, function(match, number, quote, string) {
          result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
        });
        return result;
      });
      function toKey(value) {
        if (typeof value == 'string' || isSymbol(value)) {
          return value;
        }
        var result = (value + '');
        return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
      }
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {}
          try {
            return (func + '');
          } catch (e) {}
        }
        return '';
      }
      function updateWrapDetails(details, bitmask) {
        arrayEach(wrapFlags, function(pair) {
          var value = '_.' + pair[0];
          if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
            details.push(value);
          }
        });
        return details.sort();
      }
      function wrapperClone(wrapper) {
        if (wrapper instanceof LazyWrapper) {
          return wrapper.clone();
        }
        var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result.__actions__ = copyArray(wrapper.__actions__);
        result.__index__ = wrapper.__index__;
        result.__values__ = wrapper.__values__;
        return result;
      }
      function chunk(array, size, guard) {
        if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
          size = 1;
        } else {
          size = nativeMax(toInteger(size), 0);
        }
        var length = array == null ? 0 : array.length;
        if (!length || size < 1) {
          return [];
        }
        var index = 0,
            resIndex = 0,
            result = Array(nativeCeil(length / size));
        while (index < length) {
          result[resIndex++] = baseSlice(array, index, (index += size));
        }
        return result;
      }
      function compact(array) {
        var index = -1,
            length = array == null ? 0 : array.length,
            resIndex = 0,
            result = [];
        while (++index < length) {
          var value = array[index];
          if (value) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function concat() {
        var length = arguments.length;
        if (!length) {
          return [];
        }
        var args = Array(length - 1),
            array = arguments[0],
            index = length;
        while (index--) {
          args[index - 1] = arguments[index];
        }
        return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
      }
      var difference = baseRest(function(array, values) {
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
      });
      var differenceBy = baseRest(function(array, values) {
        var iteratee = last(values);
        if (isArrayLikeObject(iteratee)) {
          iteratee = undefined;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2)) : [];
      });
      var differenceWith = baseRest(function(array, values) {
        var comparator = last(values);
        if (isArrayLikeObject(comparator)) {
          comparator = undefined;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator) : [];
      });
      function drop(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = (guard || n === undefined) ? 1 : toInteger(n);
        return baseSlice(array, n < 0 ? 0 : n, length);
      }
      function dropRight(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = (guard || n === undefined) ? 1 : toInteger(n);
        n = length - n;
        return baseSlice(array, 0, n < 0 ? 0 : n);
      }
      function dropRightWhile(array, predicate) {
        return (array && array.length) ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
      }
      function dropWhile(array, predicate) {
        return (array && array.length) ? baseWhile(array, getIteratee(predicate, 3), true) : [];
      }
      function fill(array, value, start, end) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
          start = 0;
          end = length;
        }
        return baseFill(array, value, start, end);
      }
      function findIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax(length + index, 0);
        }
        return baseFindIndex(array, getIteratee(predicate, 3), index);
      }
      function findLastIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = length - 1;
        if (fromIndex !== undefined) {
          index = toInteger(fromIndex);
          index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
        }
        return baseFindIndex(array, getIteratee(predicate, 3), index, true);
      }
      function flatten(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, 1) : [];
      }
      function flattenDeep(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, INFINITY) : [];
      }
      function flattenDepth(array, depth) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        depth = depth === undefined ? 1 : toInteger(depth);
        return baseFlatten(array, depth);
      }
      function fromPairs(pairs) {
        var index = -1,
            length = pairs == null ? 0 : pairs.length,
            result = {};
        while (++index < length) {
          var pair = pairs[index];
          result[pair[0]] = pair[1];
        }
        return result;
      }
      function head(array) {
        return (array && array.length) ? array[0] : undefined;
      }
      function indexOf(array, value, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax(length + index, 0);
        }
        return baseIndexOf(array, value, index);
      }
      function initial(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseSlice(array, 0, -1) : [];
      }
      var intersection = baseRest(function(arrays) {
        var mapped = arrayMap(arrays, castArrayLikeObject);
        return (mapped.length && mapped[0] === arrays[0]) ? baseIntersection(mapped) : [];
      });
      var intersectionBy = baseRest(function(arrays) {
        var iteratee = last(arrays),
            mapped = arrayMap(arrays, castArrayLikeObject);
        if (iteratee === last(mapped)) {
          iteratee = undefined;
        } else {
          mapped.pop();
        }
        return (mapped.length && mapped[0] === arrays[0]) ? baseIntersection(mapped, getIteratee(iteratee, 2)) : [];
      });
      var intersectionWith = baseRest(function(arrays) {
        var comparator = last(arrays),
            mapped = arrayMap(arrays, castArrayLikeObject);
        comparator = typeof comparator == 'function' ? comparator : undefined;
        if (comparator) {
          mapped.pop();
        }
        return (mapped.length && mapped[0] === arrays[0]) ? baseIntersection(mapped, undefined, comparator) : [];
      });
      function join(array, separator) {
        return array == null ? '' : nativeJoin.call(array, separator);
      }
      function last(array) {
        var length = array == null ? 0 : array.length;
        return length ? array[length - 1] : undefined;
      }
      function lastIndexOf(array, value, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = length;
        if (fromIndex !== undefined) {
          index = toInteger(fromIndex);
          index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
        }
        return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
      }
      function nth(array, n) {
        return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
      }
      var pull = baseRest(pullAll);
      function pullAll(array, values) {
        return (array && array.length && values && values.length) ? basePullAll(array, values) : array;
      }
      function pullAllBy(array, values, iteratee) {
        return (array && array.length && values && values.length) ? basePullAll(array, values, getIteratee(iteratee, 2)) : array;
      }
      function pullAllWith(array, values, comparator) {
        return (array && array.length && values && values.length) ? basePullAll(array, values, undefined, comparator) : array;
      }
      var pullAt = flatRest(function(array, indexes) {
        var length = array == null ? 0 : array.length,
            result = baseAt(array, indexes);
        basePullAt(array, arrayMap(indexes, function(index) {
          return isIndex(index, length) ? +index : index;
        }).sort(compareAscending));
        return result;
      });
      function remove(array, predicate) {
        var result = [];
        if (!(array && array.length)) {
          return result;
        }
        var index = -1,
            indexes = [],
            length = array.length;
        predicate = getIteratee(predicate, 3);
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result.push(value);
            indexes.push(index);
          }
        }
        basePullAt(array, indexes);
        return result;
      }
      function reverse(array) {
        return array == null ? array : nativeReverse.call(array);
      }
      function slice(array, start, end) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
          start = 0;
          end = length;
        } else {
          start = start == null ? 0 : toInteger(start);
          end = end === undefined ? length : toInteger(end);
        }
        return baseSlice(array, start, end);
      }
      function sortedIndex(array, value) {
        return baseSortedIndex(array, value);
      }
      function sortedIndexBy(array, value, iteratee) {
        return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
      }
      function sortedIndexOf(array, value) {
        var length = array == null ? 0 : array.length;
        if (length) {
          var index = baseSortedIndex(array, value);
          if (index < length && eq(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function sortedLastIndex(array, value) {
        return baseSortedIndex(array, value, true);
      }
      function sortedLastIndexBy(array, value, iteratee) {
        return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
      }
      function sortedLastIndexOf(array, value) {
        var length = array == null ? 0 : array.length;
        if (length) {
          var index = baseSortedIndex(array, value, true) - 1;
          if (eq(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function sortedUniq(array) {
        return (array && array.length) ? baseSortedUniq(array) : [];
      }
      function sortedUniqBy(array, iteratee) {
        return (array && array.length) ? baseSortedUniq(array, getIteratee(iteratee, 2)) : [];
      }
      function tail(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseSlice(array, 1, length) : [];
      }
      function take(array, n, guard) {
        if (!(array && array.length)) {
          return [];
        }
        n = (guard || n === undefined) ? 1 : toInteger(n);
        return baseSlice(array, 0, n < 0 ? 0 : n);
      }
      function takeRight(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = (guard || n === undefined) ? 1 : toInteger(n);
        n = length - n;
        return baseSlice(array, n < 0 ? 0 : n, length);
      }
      function takeRightWhile(array, predicate) {
        return (array && array.length) ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
      }
      function takeWhile(array, predicate) {
        return (array && array.length) ? baseWhile(array, getIteratee(predicate, 3)) : [];
      }
      var union = baseRest(function(arrays) {
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
      });
      var unionBy = baseRest(function(arrays) {
        var iteratee = last(arrays);
        if (isArrayLikeObject(iteratee)) {
          iteratee = undefined;
        }
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
      });
      var unionWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == 'function' ? comparator : undefined;
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
      });
      function uniq(array) {
        return (array && array.length) ? baseUniq(array) : [];
      }
      function uniqBy(array, iteratee) {
        return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
      }
      function uniqWith(array, comparator) {
        comparator = typeof comparator == 'function' ? comparator : undefined;
        return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
      }
      function unzip(array) {
        if (!(array && array.length)) {
          return [];
        }
        var length = 0;
        array = arrayFilter(array, function(group) {
          if (isArrayLikeObject(group)) {
            length = nativeMax(group.length, length);
            return true;
          }
        });
        return baseTimes(length, function(index) {
          return arrayMap(array, baseProperty(index));
        });
      }
      function unzipWith(array, iteratee) {
        if (!(array && array.length)) {
          return [];
        }
        var result = unzip(array);
        if (iteratee == null) {
          return result;
        }
        return arrayMap(result, function(group) {
          return apply(iteratee, undefined, group);
        });
      }
      var without = baseRest(function(array, values) {
        return isArrayLikeObject(array) ? baseDifference(array, values) : [];
      });
      var xor = baseRest(function(arrays) {
        return baseXor(arrayFilter(arrays, isArrayLikeObject));
      });
      var xorBy = baseRest(function(arrays) {
        var iteratee = last(arrays);
        if (isArrayLikeObject(iteratee)) {
          iteratee = undefined;
        }
        return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
      });
      var xorWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == 'function' ? comparator : undefined;
        return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
      });
      var zip = baseRest(unzip);
      function zipObject(props, values) {
        return baseZipObject(props || [], values || [], assignValue);
      }
      function zipObjectDeep(props, values) {
        return baseZipObject(props || [], values || [], baseSet);
      }
      var zipWith = baseRest(function(arrays) {
        var length = arrays.length,
            iteratee = length > 1 ? arrays[length - 1] : undefined;
        iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
        return unzipWith(arrays, iteratee);
      });
      function chain(value) {
        var result = lodash(value);
        result.__chain__ = true;
        return result;
      }
      function tap(value, interceptor) {
        interceptor(value);
        return value;
      }
      function thru(value, interceptor) {
        return interceptor(value);
      }
      var wrapperAt = flatRest(function(paths) {
        var length = paths.length,
            start = length ? paths[0] : 0,
            value = this.__wrapped__,
            interceptor = function(object) {
              return baseAt(object, paths);
            };
        if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
          return this.thru(interceptor);
        }
        value = value.slice(start, +start + (length ? 1 : 0));
        value.__actions__.push({
          'func': thru,
          'args': [interceptor],
          'thisArg': undefined
        });
        return new LodashWrapper(value, this.__chain__).thru(function(array) {
          if (length && !array.length) {
            array.push(undefined);
          }
          return array;
        });
      });
      function wrapperChain() {
        return chain(this);
      }
      function wrapperCommit() {
        return new LodashWrapper(this.value(), this.__chain__);
      }
      function wrapperNext() {
        if (this.__values__ === undefined) {
          this.__values__ = toArray(this.value());
        }
        var done = this.__index__ >= this.__values__.length,
            value = done ? undefined : this.__values__[this.__index__++];
        return {
          'done': done,
          'value': value
        };
      }
      function wrapperToIterator() {
        return this;
      }
      function wrapperPlant(value) {
        var result,
            parent = this;
        while (parent instanceof baseLodash) {
          var clone = wrapperClone(parent);
          clone.__index__ = 0;
          clone.__values__ = undefined;
          if (result) {
            previous.__wrapped__ = clone;
          } else {
            result = clone;
          }
          var previous = clone;
          parent = parent.__wrapped__;
        }
        previous.__wrapped__ = value;
        return result;
      }
      function wrapperReverse() {
        var value = this.__wrapped__;
        if (value instanceof LazyWrapper) {
          var wrapped = value;
          if (this.__actions__.length) {
            wrapped = new LazyWrapper(this);
          }
          wrapped = wrapped.reverse();
          wrapped.__actions__.push({
            'func': thru,
            'args': [reverse],
            'thisArg': undefined
          });
          return new LodashWrapper(wrapped, this.__chain__);
        }
        return this.thru(reverse);
      }
      function wrapperValue() {
        return baseWrapperValue(this.__wrapped__, this.__actions__);
      }
      var countBy = createAggregator(function(result, value, key) {
        if (hasOwnProperty.call(result, key)) {
          ++result[key];
        } else {
          baseAssignValue(result, key, 1);
        }
      });
      function every(collection, predicate, guard) {
        var func = isArray(collection) ? arrayEvery : baseEvery;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      function filter(collection, predicate) {
        var func = isArray(collection) ? arrayFilter : baseFilter;
        return func(collection, getIteratee(predicate, 3));
      }
      var find = createFind(findIndex);
      var findLast = createFind(findLastIndex);
      function flatMap(collection, iteratee) {
        return baseFlatten(map(collection, iteratee), 1);
      }
      function flatMapDeep(collection, iteratee) {
        return baseFlatten(map(collection, iteratee), INFINITY);
      }
      function flatMapDepth(collection, iteratee, depth) {
        depth = depth === undefined ? 1 : toInteger(depth);
        return baseFlatten(map(collection, iteratee), depth);
      }
      function forEach(collection, iteratee) {
        var func = isArray(collection) ? arrayEach : baseEach;
        return func(collection, getIteratee(iteratee, 3));
      }
      function forEachRight(collection, iteratee) {
        var func = isArray(collection) ? arrayEachRight : baseEachRight;
        return func(collection, getIteratee(iteratee, 3));
      }
      var groupBy = createAggregator(function(result, value, key) {
        if (hasOwnProperty.call(result, key)) {
          result[key].push(value);
        } else {
          baseAssignValue(result, key, [value]);
        }
      });
      function includes(collection, value, fromIndex, guard) {
        collection = isArrayLike(collection) ? collection : values(collection);
        fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;
        var length = collection.length;
        if (fromIndex < 0) {
          fromIndex = nativeMax(length + fromIndex, 0);
        }
        return isString(collection) ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1) : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
      }
      var invokeMap = baseRest(function(collection, path, args) {
        var index = -1,
            isFunc = typeof path == 'function',
            result = isArrayLike(collection) ? Array(collection.length) : [];
        baseEach(collection, function(value) {
          result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
        });
        return result;
      });
      var keyBy = createAggregator(function(result, value, key) {
        baseAssignValue(result, key, value);
      });
      function map(collection, iteratee) {
        var func = isArray(collection) ? arrayMap : baseMap;
        return func(collection, getIteratee(iteratee, 3));
      }
      function orderBy(collection, iteratees, orders, guard) {
        if (collection == null) {
          return [];
        }
        if (!isArray(iteratees)) {
          iteratees = iteratees == null ? [] : [iteratees];
        }
        orders = guard ? undefined : orders;
        if (!isArray(orders)) {
          orders = orders == null ? [] : [orders];
        }
        return baseOrderBy(collection, iteratees, orders);
      }
      var partition = createAggregator(function(result, value, key) {
        result[key ? 0 : 1].push(value);
      }, function() {
        return [[], []];
      });
      function reduce(collection, iteratee, accumulator) {
        var func = isArray(collection) ? arrayReduce : baseReduce,
            initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
      }
      function reduceRight(collection, iteratee, accumulator) {
        var func = isArray(collection) ? arrayReduceRight : baseReduce,
            initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
      }
      function reject(collection, predicate) {
        var func = isArray(collection) ? arrayFilter : baseFilter;
        return func(collection, negate(getIteratee(predicate, 3)));
      }
      function sample(collection) {
        var func = isArray(collection) ? arraySample : baseSample;
        return func(collection);
      }
      function sampleSize(collection, n, guard) {
        if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
          n = 1;
        } else {
          n = toInteger(n);
        }
        var func = isArray(collection) ? arraySampleSize : baseSampleSize;
        return func(collection, n);
      }
      function shuffle(collection) {
        var func = isArray(collection) ? arrayShuffle : baseShuffle;
        return func(collection);
      }
      function size(collection) {
        if (collection == null) {
          return 0;
        }
        if (isArrayLike(collection)) {
          return isString(collection) ? stringSize(collection) : collection.length;
        }
        var tag = getTag(collection);
        if (tag == mapTag || tag == setTag) {
          return collection.size;
        }
        return baseKeys(collection).length;
      }
      function some(collection, predicate, guard) {
        var func = isArray(collection) ? arraySome : baseSome;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      var sortBy = baseRest(function(collection, iteratees) {
        if (collection == null) {
          return [];
        }
        var length = iteratees.length;
        if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
          iteratees = [];
        } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
          iteratees = [iteratees[0]];
        }
        return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
      });
      var now = ctxNow || function() {
        return root.Date.now();
      };
      function after(n, func) {
        if (typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        n = toInteger(n);
        return function() {
          if (--n < 1) {
            return func.apply(this, arguments);
          }
        };
      }
      function ary(func, n, guard) {
        n = guard ? undefined : n;
        n = (func && n == null) ? func.length : n;
        return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
      }
      function before(n, func) {
        var result;
        if (typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        n = toInteger(n);
        return function() {
          if (--n > 0) {
            result = func.apply(this, arguments);
          }
          if (n <= 1) {
            func = undefined;
          }
          return result;
        };
      }
      var bind = baseRest(function(func, thisArg, partials) {
        var bitmask = WRAP_BIND_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bind));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(func, bitmask, thisArg, partials, holders);
      });
      var bindKey = baseRest(function(object, key, partials) {
        var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bindKey));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(key, bitmask, object, partials, holders);
      });
      function curry(func, arity, guard) {
        arity = guard ? undefined : arity;
        var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
        result.placeholder = curry.placeholder;
        return result;
      }
      function curryRight(func, arity, guard) {
        arity = guard ? undefined : arity;
        var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
        result.placeholder = curryRight.placeholder;
        return result;
      }
      function debounce(func, wait, options) {
        var lastArgs,
            lastThis,
            maxWait,
            result,
            timerId,
            lastCallTime,
            lastInvokeTime = 0,
            leading = false,
            maxing = false,
            trailing = true;
        if (typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = 'maxWait' in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = 'trailing' in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs,
              thisArg = lastThis;
          lastArgs = lastThis = undefined;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime,
              timeSinceLastInvoke = time - lastInvokeTime,
              result = wait - timeSinceLastCall;
          return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime,
              timeSinceLastInvoke = time - lastInvokeTime;
          return (lastCallTime === undefined || (timeSinceLastCall >= wait) || (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = undefined;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = undefined;
          return result;
        }
        function cancel() {
          if (timerId !== undefined) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = undefined;
        }
        function flush() {
          return timerId === undefined ? result : trailingEdge(now());
        }
        function debounced() {
          var time = now(),
              isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === undefined) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      var defer = baseRest(function(func, args) {
        return baseDelay(func, 1, args);
      });
      var delay = baseRest(function(func, wait, args) {
        return baseDelay(func, toNumber(wait) || 0, args);
      });
      function flip(func) {
        return createWrap(func, WRAP_FLIP_FLAG);
      }
      function memoize(func, resolver) {
        if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments,
              key = resolver ? resolver.apply(this, args) : args[0],
              cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result = func.apply(this, args);
          memoized.cache = cache.set(key, result) || cache;
          return result;
        };
        memoized.cache = new (memoize.Cache || MapCache);
        return memoized;
      }
      memoize.Cache = MapCache;
      function negate(predicate) {
        if (typeof predicate != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return !predicate.call(this);
            case 1:
              return !predicate.call(this, args[0]);
            case 2:
              return !predicate.call(this, args[0], args[1]);
            case 3:
              return !predicate.call(this, args[0], args[1], args[2]);
          }
          return !predicate.apply(this, args);
        };
      }
      function once(func) {
        return before(2, func);
      }
      var overArgs = castRest(function(func, transforms) {
        transforms = (transforms.length == 1 && isArray(transforms[0])) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
        var funcsLength = transforms.length;
        return baseRest(function(args) {
          var index = -1,
              length = nativeMin(args.length, funcsLength);
          while (++index < length) {
            args[index] = transforms[index].call(this, args[index]);
          }
          return apply(func, this, args);
        });
      });
      var partial = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partial));
        return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
      });
      var partialRight = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partialRight));
        return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
      });
      var rearg = flatRest(function(func, indexes) {
        return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
      });
      function rest(func, start) {
        if (typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        start = start === undefined ? start : toInteger(start);
        return baseRest(func, start);
      }
      function spread(func, start) {
        if (typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        start = start === undefined ? 0 : nativeMax(toInteger(start), 0);
        return baseRest(function(args) {
          var array = args[start],
              otherArgs = castSlice(args, 0, start);
          if (array) {
            arrayPush(otherArgs, array);
          }
          return apply(func, this, otherArgs);
        });
      }
      function throttle(func, wait, options) {
        var leading = true,
            trailing = true;
        if (typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        if (isObject(options)) {
          leading = 'leading' in options ? !!options.leading : leading;
          trailing = 'trailing' in options ? !!options.trailing : trailing;
        }
        return debounce(func, wait, {
          'leading': leading,
          'maxWait': wait,
          'trailing': trailing
        });
      }
      function unary(func) {
        return ary(func, 1);
      }
      function wrap(value, wrapper) {
        return partial(castFunction(wrapper), value);
      }
      function castArray() {
        if (!arguments.length) {
          return [];
        }
        var value = arguments[0];
        return isArray(value) ? value : [value];
      }
      function clone(value) {
        return baseClone(value, CLONE_SYMBOLS_FLAG);
      }
      function cloneWith(value, customizer) {
        customizer = typeof customizer == 'function' ? customizer : undefined;
        return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
      }
      function cloneDeep(value) {
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
      }
      function cloneDeepWith(value, customizer) {
        customizer = typeof customizer == 'function' ? customizer : undefined;
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
      }
      function conformsTo(object, source) {
        return source == null || baseConformsTo(object, source, keys(source));
      }
      function eq(value, other) {
        return value === other || (value !== value && other !== other);
      }
      var gt = createRelationalOperation(baseGt);
      var gte = createRelationalOperation(function(value, other) {
        return value >= other;
      });
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
      };
      var isArray = Array.isArray;
      var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }
      function isBoolean(value) {
        return value === true || value === false || (isObjectLike(value) && baseGetTag(value) == boolTag);
      }
      var isBuffer = nativeIsBuffer || stubFalse;
      var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
      function isElement(value) {
        return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
      }
      function isEmpty(value) {
        if (value == null) {
          return true;
        }
        if (isArrayLike(value) && (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
          return !value.length;
        }
        var tag = getTag(value);
        if (tag == mapTag || tag == setTag) {
          return !value.size;
        }
        if (isPrototype(value)) {
          return !baseKeys(value).length;
        }
        for (var key in value) {
          if (hasOwnProperty.call(value, key)) {
            return false;
          }
        }
        return true;
      }
      function isEqual(value, other) {
        return baseIsEqual(value, other);
      }
      function isEqualWith(value, other, customizer) {
        customizer = typeof customizer == 'function' ? customizer : undefined;
        var result = customizer ? customizer(value, other) : undefined;
        return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
      }
      function isError(value) {
        if (!isObjectLike(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == errorTag || tag == domExcTag || (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
      }
      function isFinite(value) {
        return typeof value == 'number' && nativeIsFinite(value);
      }
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      function isInteger(value) {
        return typeof value == 'number' && value == toInteger(value);
      }
      function isLength(value) {
        return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == 'object' || type == 'function');
      }
      function isObjectLike(value) {
        return value != null && typeof value == 'object';
      }
      var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
      function isMatch(object, source) {
        return object === source || baseIsMatch(object, source, getMatchData(source));
      }
      function isMatchWith(object, source, customizer) {
        customizer = typeof customizer == 'function' ? customizer : undefined;
        return baseIsMatch(object, source, getMatchData(source), customizer);
      }
      function isNaN(value) {
        return isNumber(value) && value != +value;
      }
      function isNative(value) {
        if (isMaskable(value)) {
          throw new Error(CORE_ERROR_TEXT);
        }
        return baseIsNative(value);
      }
      function isNull(value) {
        return value === null;
      }
      function isNil(value) {
        return value == null;
      }
      function isNumber(value) {
        return typeof value == 'number' || (isObjectLike(value) && baseGetTag(value) == numberTag);
      }
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
        return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
      function isSafeInteger(value) {
        return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
      }
      var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
      function isString(value) {
        return typeof value == 'string' || (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
      }
      function isSymbol(value) {
        return typeof value == 'symbol' || (isObjectLike(value) && baseGetTag(value) == symbolTag);
      }
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      function isUndefined(value) {
        return value === undefined;
      }
      function isWeakMap(value) {
        return isObjectLike(value) && getTag(value) == weakMapTag;
      }
      function isWeakSet(value) {
        return isObjectLike(value) && baseGetTag(value) == weakSetTag;
      }
      var lt = createRelationalOperation(baseLt);
      var lte = createRelationalOperation(function(value, other) {
        return value <= other;
      });
      function toArray(value) {
        if (!value) {
          return [];
        }
        if (isArrayLike(value)) {
          return isString(value) ? stringToArray(value) : copyArray(value);
        }
        if (symIterator && value[symIterator]) {
          return iteratorToArray(value[symIterator]());
        }
        var tag = getTag(value),
            func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);
        return func(value);
      }
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
          var sign = (value < 0 ? -1 : 1);
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }
      function toInteger(value) {
        var result = toFinite(value),
            remainder = result % 1;
        return result === result ? (remainder ? result - remainder : result) : 0;
      }
      function toLength(value) {
        return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
      }
      function toNumber(value) {
        if (typeof value == 'number') {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
          value = isObject(other) ? (other + '') : other;
        }
        if (typeof value != 'string') {
          return value === 0 ? value : +value;
        }
        value = value.replace(reTrim, '');
        var isBinary = reIsBinary.test(value);
        return (isBinary || reIsOctal.test(value)) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : (reIsBadHex.test(value) ? NAN : +value);
      }
      function toPlainObject(value) {
        return copyObject(value, keysIn(value));
      }
      function toSafeInteger(value) {
        return baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
      }
      function toString(value) {
        return value == null ? '' : baseToString(value);
      }
      var assign = createAssigner(function(object, source) {
        if (isPrototype(source) || isArrayLike(source)) {
          copyObject(source, keys(source), object);
          return;
        }
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            assignValue(object, key, source[key]);
          }
        }
      });
      var assignIn = createAssigner(function(object, source) {
        copyObject(source, keysIn(source), object);
      });
      var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
        copyObject(source, keysIn(source), object, customizer);
      });
      var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
        copyObject(source, keys(source), object, customizer);
      });
      var at = flatRest(baseAt);
      function create(prototype, properties) {
        var result = baseCreate(prototype);
        return properties == null ? result : baseAssign(result, properties);
      }
      var defaults = baseRest(function(args) {
        args.push(undefined, assignInDefaults);
        return apply(assignInWith, undefined, args);
      });
      var defaultsDeep = baseRest(function(args) {
        args.push(undefined, mergeDefaults);
        return apply(mergeWith, undefined, args);
      });
      function findKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
      }
      function findLastKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
      }
      function forIn(object, iteratee) {
        return object == null ? object : baseFor(object, getIteratee(iteratee, 3), keysIn);
      }
      function forInRight(object, iteratee) {
        return object == null ? object : baseForRight(object, getIteratee(iteratee, 3), keysIn);
      }
      function forOwn(object, iteratee) {
        return object && baseForOwn(object, getIteratee(iteratee, 3));
      }
      function forOwnRight(object, iteratee) {
        return object && baseForOwnRight(object, getIteratee(iteratee, 3));
      }
      function functions(object) {
        return object == null ? [] : baseFunctions(object, keys(object));
      }
      function functionsIn(object) {
        return object == null ? [] : baseFunctions(object, keysIn(object));
      }
      function get(object, path, defaultValue) {
        var result = object == null ? undefined : baseGet(object, path);
        return result === undefined ? defaultValue : result;
      }
      function has(object, path) {
        return object != null && hasPath(object, path, baseHas);
      }
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      var invert = createInverter(function(result, value, key) {
        result[value] = key;
      }, constant(identity));
      var invertBy = createInverter(function(result, value, key) {
        if (hasOwnProperty.call(result, value)) {
          result[value].push(key);
        } else {
          result[value] = [key];
        }
      }, getIteratee);
      var invoke = baseRest(baseInvoke);
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      function mapKeys(object, iteratee) {
        var result = {};
        iteratee = getIteratee(iteratee, 3);
        baseForOwn(object, function(value, key, object) {
          baseAssignValue(result, iteratee(value, key, object), value);
        });
        return result;
      }
      function mapValues(object, iteratee) {
        var result = {};
        iteratee = getIteratee(iteratee, 3);
        baseForOwn(object, function(value, key, object) {
          baseAssignValue(result, key, iteratee(value, key, object));
        });
        return result;
      }
      var merge = createAssigner(function(object, source, srcIndex) {
        baseMerge(object, source, srcIndex);
      });
      var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
        baseMerge(object, source, srcIndex, customizer);
      });
      var omit = flatRest(function(object, paths) {
        var result = {};
        if (object == null) {
          return result;
        }
        var isDeep = false;
        paths = arrayMap(paths, function(path) {
          path = castPath(path, object);
          isDeep || (isDeep = path.length > 1);
          return path;
        });
        copyObject(object, getAllKeysIn(object), result);
        if (isDeep) {
          result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG);
        }
        var length = paths.length;
        while (length--) {
          baseUnset(result, paths[length]);
        }
        return result;
      });
      function omitBy(object, predicate) {
        return pickBy(object, negate(getIteratee(predicate)));
      }
      var pick = flatRest(function(object, paths) {
        return object == null ? {} : basePick(object, paths);
      });
      function pickBy(object, predicate) {
        if (object == null) {
          return {};
        }
        var props = arrayMap(getAllKeysIn(object), function(prop) {
          return [prop];
        });
        predicate = getIteratee(predicate);
        return basePickBy(object, props, function(value, path) {
          return predicate(value, path[0]);
        });
      }
      function result(object, path, defaultValue) {
        path = castPath(path, object);
        var index = -1,
            length = path.length;
        if (!length) {
          length = 1;
          object = undefined;
        }
        while (++index < length) {
          var value = object == null ? undefined : object[toKey(path[index])];
          if (value === undefined) {
            index = length;
            value = defaultValue;
          }
          object = isFunction(value) ? value.call(object) : value;
        }
        return object;
      }
      function set(object, path, value) {
        return object == null ? object : baseSet(object, path, value);
      }
      function setWith(object, path, value, customizer) {
        customizer = typeof customizer == 'function' ? customizer : undefined;
        return object == null ? object : baseSet(object, path, value, customizer);
      }
      var toPairs = createToPairs(keys);
      var toPairsIn = createToPairs(keysIn);
      function transform(object, iteratee, accumulator) {
        var isArr = isArray(object),
            isArrLike = isArr || isBuffer(object) || isTypedArray(object);
        iteratee = getIteratee(iteratee, 4);
        if (accumulator == null) {
          var Ctor = object && object.constructor;
          if (isArrLike) {
            accumulator = isArr ? new Ctor : [];
          } else if (isObject(object)) {
            accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
          } else {
            accumulator = {};
          }
        }
        (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
          return iteratee(accumulator, value, index, object);
        });
        return accumulator;
      }
      function unset(object, path) {
        return object == null ? true : baseUnset(object, path);
      }
      function update(object, path, updater) {
        return object == null ? object : baseUpdate(object, path, castFunction(updater));
      }
      function updateWith(object, path, updater, customizer) {
        customizer = typeof customizer == 'function' ? customizer : undefined;
        return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
      }
      function values(object) {
        return object == null ? [] : baseValues(object, keys(object));
      }
      function valuesIn(object) {
        return object == null ? [] : baseValues(object, keysIn(object));
      }
      function clamp(number, lower, upper) {
        if (upper === undefined) {
          upper = lower;
          lower = undefined;
        }
        if (upper !== undefined) {
          upper = toNumber(upper);
          upper = upper === upper ? upper : 0;
        }
        if (lower !== undefined) {
          lower = toNumber(lower);
          lower = lower === lower ? lower : 0;
        }
        return baseClamp(toNumber(number), lower, upper);
      }
      function inRange(number, start, end) {
        start = toFinite(start);
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        number = toNumber(number);
        return baseInRange(number, start, end);
      }
      function random(lower, upper, floating) {
        if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
          upper = floating = undefined;
        }
        if (floating === undefined) {
          if (typeof upper == 'boolean') {
            floating = upper;
            upper = undefined;
          } else if (typeof lower == 'boolean') {
            floating = lower;
            lower = undefined;
          }
        }
        if (lower === undefined && upper === undefined) {
          lower = 0;
          upper = 1;
        } else {
          lower = toFinite(lower);
          if (upper === undefined) {
            upper = lower;
            lower = 0;
          } else {
            upper = toFinite(upper);
          }
        }
        if (lower > upper) {
          var temp = lower;
          lower = upper;
          upper = temp;
        }
        if (floating || lower % 1 || upper % 1) {
          var rand = nativeRandom();
          return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
        }
        return baseRandom(lower, upper);
      }
      var camelCase = createCompounder(function(result, word, index) {
        word = word.toLowerCase();
        return result + (index ? capitalize(word) : word);
      });
      function capitalize(string) {
        return upperFirst(toString(string).toLowerCase());
      }
      function deburr(string) {
        string = toString(string);
        return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
      }
      function endsWith(string, target, position) {
        string = toString(string);
        target = baseToString(target);
        var length = string.length;
        position = position === undefined ? length : baseClamp(toInteger(position), 0, length);
        var end = position;
        position -= target.length;
        return position >= 0 && string.slice(position, end) == target;
      }
      function escape(string) {
        string = toString(string);
        return (string && reHasUnescapedHtml.test(string)) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
      }
      function escapeRegExp(string) {
        string = toString(string);
        return (string && reHasRegExpChar.test(string)) ? string.replace(reRegExpChar, '\\$&') : string;
      }
      var kebabCase = createCompounder(function(result, word, index) {
        return result + (index ? '-' : '') + word.toLowerCase();
      });
      var lowerCase = createCompounder(function(result, word, index) {
        return result + (index ? ' ' : '') + word.toLowerCase();
      });
      var lowerFirst = createCaseFirst('toLowerCase');
      function pad(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        if (!length || strLength >= length) {
          return string;
        }
        var mid = (length - strLength) / 2;
        return (createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars));
      }
      function padEnd(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        return (length && strLength < length) ? (string + createPadding(length - strLength, chars)) : string;
      }
      function padStart(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        return (length && strLength < length) ? (createPadding(length - strLength, chars) + string) : string;
      }
      function parseInt(string, radix, guard) {
        if (guard || radix == null) {
          radix = 0;
        } else if (radix) {
          radix = +radix;
        }
        return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
      }
      function repeat(string, n, guard) {
        if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
          n = 1;
        } else {
          n = toInteger(n);
        }
        return baseRepeat(toString(string), n);
      }
      function replace() {
        var args = arguments,
            string = toString(args[0]);
        return args.length < 3 ? string : string.replace(args[1], args[2]);
      }
      var snakeCase = createCompounder(function(result, word, index) {
        return result + (index ? '_' : '') + word.toLowerCase();
      });
      function split(string, separator, limit) {
        if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
          separator = limit = undefined;
        }
        limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
        if (!limit) {
          return [];
        }
        string = toString(string);
        if (string && (typeof separator == 'string' || (separator != null && !isRegExp(separator)))) {
          separator = baseToString(separator);
          if (!separator && hasUnicode(string)) {
            return castSlice(stringToArray(string), 0, limit);
          }
        }
        return string.split(separator, limit);
      }
      var startCase = createCompounder(function(result, word, index) {
        return result + (index ? ' ' : '') + upperFirst(word);
      });
      function startsWith(string, target, position) {
        string = toString(string);
        position = baseClamp(toInteger(position), 0, string.length);
        target = baseToString(target);
        return string.slice(position, position + target.length) == target;
      }
      function template(string, options, guard) {
        var settings = lodash.templateSettings;
        if (guard && isIterateeCall(string, options, guard)) {
          options = undefined;
        }
        string = toString(string);
        options = assignInWith({}, options, settings, assignInDefaults);
        var imports = assignInWith({}, options.imports, settings.imports, assignInDefaults),
            importsKeys = keys(imports),
            importsValues = baseValues(imports, importsKeys);
        var isEscaping,
            isEvaluating,
            index = 0,
            interpolate = options.interpolate || reNoMatch,
            source = "__p += '";
        var reDelimiters = RegExp((options.escape || reNoMatch).source + '|' + interpolate.source + '|' + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' + (options.evaluate || reNoMatch).source + '|$', 'g');
        var sourceURL = '//# sourceURL=' + ('sourceURL' in options ? options.sourceURL : ('lodash.templateSources[' + (++templateCounter) + ']')) + '\n';
        string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
          interpolateValue || (interpolateValue = esTemplateValue);
          source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
          if (escapeValue) {
            isEscaping = true;
            source += "' +\n__e(" + escapeValue + ") +\n'";
          }
          if (evaluateValue) {
            isEvaluating = true;
            source += "';\n" + evaluateValue + ";\n__p += '";
          }
          if (interpolateValue) {
            source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
          }
          index = offset + match.length;
          return match;
        });
        source += "';\n";
        var variable = options.variable;
        if (!variable) {
          source = 'with (obj) {\n' + source + '\n}\n';
        }
        source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source).replace(reEmptyStringMiddle, '$1').replace(reEmptyStringTrailing, '$1;');
        source = 'function(' + (variable || 'obj') + ') {\n' + (variable ? '' : 'obj || (obj = {});\n') + "var __t, __p = ''" + (isEscaping ? ', __e = _.escape' : '') + (isEvaluating ? ', __j = Array.prototype.join;\n' + "function print() { __p += __j.call(arguments, '') }\n" : ';\n') + source + 'return __p\n}';
        var result = attempt(function() {
          return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
        });
        result.source = source;
        if (isError(result)) {
          throw result;
        }
        return result;
      }
      function toLower(value) {
        return toString(value).toLowerCase();
      }
      function toUpper(value) {
        return toString(value).toUpperCase();
      }
      function trim(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined)) {
          return string.replace(reTrim, '');
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string),
            chrSymbols = stringToArray(chars),
            start = charsStartIndex(strSymbols, chrSymbols),
            end = charsEndIndex(strSymbols, chrSymbols) + 1;
        return castSlice(strSymbols, start, end).join('');
      }
      function trimEnd(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined)) {
          return string.replace(reTrimEnd, '');
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string),
            end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
        return castSlice(strSymbols, 0, end).join('');
      }
      function trimStart(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined)) {
          return string.replace(reTrimStart, '');
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string),
            start = charsStartIndex(strSymbols, stringToArray(chars));
        return castSlice(strSymbols, start).join('');
      }
      function truncate(string, options) {
        var length = DEFAULT_TRUNC_LENGTH,
            omission = DEFAULT_TRUNC_OMISSION;
        if (isObject(options)) {
          var separator = 'separator' in options ? options.separator : separator;
          length = 'length' in options ? toInteger(options.length) : length;
          omission = 'omission' in options ? baseToString(options.omission) : omission;
        }
        string = toString(string);
        var strLength = string.length;
        if (hasUnicode(string)) {
          var strSymbols = stringToArray(string);
          strLength = strSymbols.length;
        }
        if (length >= strLength) {
          return string;
        }
        var end = length - stringSize(omission);
        if (end < 1) {
          return omission;
        }
        var result = strSymbols ? castSlice(strSymbols, 0, end).join('') : string.slice(0, end);
        if (separator === undefined) {
          return result + omission;
        }
        if (strSymbols) {
          end += (result.length - end);
        }
        if (isRegExp(separator)) {
          if (string.slice(end).search(separator)) {
            var match,
                substring = result;
            if (!separator.global) {
              separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
            }
            separator.lastIndex = 0;
            while ((match = separator.exec(substring))) {
              var newEnd = match.index;
            }
            result = result.slice(0, newEnd === undefined ? end : newEnd);
          }
        } else if (string.indexOf(baseToString(separator), end) != end) {
          var index = result.lastIndexOf(separator);
          if (index > -1) {
            result = result.slice(0, index);
          }
        }
        return result + omission;
      }
      function unescape(string) {
        string = toString(string);
        return (string && reHasEscapedHtml.test(string)) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
      }
      var upperCase = createCompounder(function(result, word, index) {
        return result + (index ? ' ' : '') + word.toUpperCase();
      });
      var upperFirst = createCaseFirst('toUpperCase');
      function words(string, pattern, guard) {
        string = toString(string);
        pattern = guard ? undefined : pattern;
        if (pattern === undefined) {
          return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
        }
        return string.match(pattern) || [];
      }
      var attempt = baseRest(function(func, args) {
        try {
          return apply(func, undefined, args);
        } catch (e) {
          return isError(e) ? e : new Error(e);
        }
      });
      var bindAll = flatRest(function(object, methodNames) {
        arrayEach(methodNames, function(key) {
          key = toKey(key);
          baseAssignValue(object, key, bind(object[key], object));
        });
        return object;
      });
      function cond(pairs) {
        var length = pairs == null ? 0 : pairs.length,
            toIteratee = getIteratee();
        pairs = !length ? [] : arrayMap(pairs, function(pair) {
          if (typeof pair[1] != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return [toIteratee(pair[0]), pair[1]];
        });
        return baseRest(function(args) {
          var index = -1;
          while (++index < length) {
            var pair = pairs[index];
            if (apply(pair[0], this, args)) {
              return apply(pair[1], this, args);
            }
          }
        });
      }
      function conforms(source) {
        return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
      }
      function constant(value) {
        return function() {
          return value;
        };
      }
      function defaultTo(value, defaultValue) {
        return (value == null || value !== value) ? defaultValue : value;
      }
      var flow = createFlow();
      var flowRight = createFlow(true);
      function identity(value) {
        return value;
      }
      function iteratee(func) {
        return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
      }
      function matches(source) {
        return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
      }
      function matchesProperty(path, srcValue) {
        return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
      }
      var method = baseRest(function(path, args) {
        return function(object) {
          return baseInvoke(object, path, args);
        };
      });
      var methodOf = baseRest(function(object, args) {
        return function(path) {
          return baseInvoke(object, path, args);
        };
      });
      function mixin(object, source, options) {
        var props = keys(source),
            methodNames = baseFunctions(source, props);
        if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
          options = source;
          source = object;
          object = this;
          methodNames = baseFunctions(source, keys(source));
        }
        var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
            isFunc = isFunction(object);
        arrayEach(methodNames, function(methodName) {
          var func = source[methodName];
          object[methodName] = func;
          if (isFunc) {
            object.prototype[methodName] = function() {
              var chainAll = this.__chain__;
              if (chain || chainAll) {
                var result = object(this.__wrapped__),
                    actions = result.__actions__ = copyArray(this.__actions__);
                actions.push({
                  'func': func,
                  'args': arguments,
                  'thisArg': object
                });
                result.__chain__ = chainAll;
                return result;
              }
              return func.apply(object, arrayPush([this.value()], arguments));
            };
          }
        });
        return object;
      }
      function noConflict() {
        if (root._ === this) {
          root._ = oldDash;
        }
        return this;
      }
      function noop() {}
      function nthArg(n) {
        n = toInteger(n);
        return baseRest(function(args) {
          return baseNth(args, n);
        });
      }
      var over = createOver(arrayMap);
      var overEvery = createOver(arrayEvery);
      var overSome = createOver(arraySome);
      function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      function propertyOf(object) {
        return function(path) {
          return object == null ? undefined : baseGet(object, path);
        };
      }
      var range = createRange();
      var rangeRight = createRange(true);
      function stubArray() {
        return [];
      }
      function stubFalse() {
        return false;
      }
      function stubObject() {
        return {};
      }
      function stubString() {
        return '';
      }
      function stubTrue() {
        return true;
      }
      function times(n, iteratee) {
        n = toInteger(n);
        if (n < 1 || n > MAX_SAFE_INTEGER) {
          return [];
        }
        var index = MAX_ARRAY_LENGTH,
            length = nativeMin(n, MAX_ARRAY_LENGTH);
        iteratee = getIteratee(iteratee);
        n -= MAX_ARRAY_LENGTH;
        var result = baseTimes(length, iteratee);
        while (++index < n) {
          iteratee(index);
        }
        return result;
      }
      function toPath(value) {
        if (isArray(value)) {
          return arrayMap(value, toKey);
        }
        return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
      }
      function uniqueId(prefix) {
        var id = ++idCounter;
        return toString(prefix) + id;
      }
      var add = createMathOperation(function(augend, addend) {
        return augend + addend;
      }, 0);
      var ceil = createRound('ceil');
      var divide = createMathOperation(function(dividend, divisor) {
        return dividend / divisor;
      }, 1);
      var floor = createRound('floor');
      function max(array) {
        return (array && array.length) ? baseExtremum(array, identity, baseGt) : undefined;
      }
      function maxBy(array, iteratee) {
        return (array && array.length) ? baseExtremum(array, getIteratee(iteratee, 2), baseGt) : undefined;
      }
      function mean(array) {
        return baseMean(array, identity);
      }
      function meanBy(array, iteratee) {
        return baseMean(array, getIteratee(iteratee, 2));
      }
      function min(array) {
        return (array && array.length) ? baseExtremum(array, identity, baseLt) : undefined;
      }
      function minBy(array, iteratee) {
        return (array && array.length) ? baseExtremum(array, getIteratee(iteratee, 2), baseLt) : undefined;
      }
      var multiply = createMathOperation(function(multiplier, multiplicand) {
        return multiplier * multiplicand;
      }, 1);
      var round = createRound('round');
      var subtract = createMathOperation(function(minuend, subtrahend) {
        return minuend - subtrahend;
      }, 0);
      function sum(array) {
        return (array && array.length) ? baseSum(array, identity) : 0;
      }
      function sumBy(array, iteratee) {
        return (array && array.length) ? baseSum(array, getIteratee(iteratee, 2)) : 0;
      }
      lodash.after = after;
      lodash.ary = ary;
      lodash.assign = assign;
      lodash.assignIn = assignIn;
      lodash.assignInWith = assignInWith;
      lodash.assignWith = assignWith;
      lodash.at = at;
      lodash.before = before;
      lodash.bind = bind;
      lodash.bindAll = bindAll;
      lodash.bindKey = bindKey;
      lodash.castArray = castArray;
      lodash.chain = chain;
      lodash.chunk = chunk;
      lodash.compact = compact;
      lodash.concat = concat;
      lodash.cond = cond;
      lodash.conforms = conforms;
      lodash.constant = constant;
      lodash.countBy = countBy;
      lodash.create = create;
      lodash.curry = curry;
      lodash.curryRight = curryRight;
      lodash.debounce = debounce;
      lodash.defaults = defaults;
      lodash.defaultsDeep = defaultsDeep;
      lodash.defer = defer;
      lodash.delay = delay;
      lodash.difference = difference;
      lodash.differenceBy = differenceBy;
      lodash.differenceWith = differenceWith;
      lodash.drop = drop;
      lodash.dropRight = dropRight;
      lodash.dropRightWhile = dropRightWhile;
      lodash.dropWhile = dropWhile;
      lodash.fill = fill;
      lodash.filter = filter;
      lodash.flatMap = flatMap;
      lodash.flatMapDeep = flatMapDeep;
      lodash.flatMapDepth = flatMapDepth;
      lodash.flatten = flatten;
      lodash.flattenDeep = flattenDeep;
      lodash.flattenDepth = flattenDepth;
      lodash.flip = flip;
      lodash.flow = flow;
      lodash.flowRight = flowRight;
      lodash.fromPairs = fromPairs;
      lodash.functions = functions;
      lodash.functionsIn = functionsIn;
      lodash.groupBy = groupBy;
      lodash.initial = initial;
      lodash.intersection = intersection;
      lodash.intersectionBy = intersectionBy;
      lodash.intersectionWith = intersectionWith;
      lodash.invert = invert;
      lodash.invertBy = invertBy;
      lodash.invokeMap = invokeMap;
      lodash.iteratee = iteratee;
      lodash.keyBy = keyBy;
      lodash.keys = keys;
      lodash.keysIn = keysIn;
      lodash.map = map;
      lodash.mapKeys = mapKeys;
      lodash.mapValues = mapValues;
      lodash.matches = matches;
      lodash.matchesProperty = matchesProperty;
      lodash.memoize = memoize;
      lodash.merge = merge;
      lodash.mergeWith = mergeWith;
      lodash.method = method;
      lodash.methodOf = methodOf;
      lodash.mixin = mixin;
      lodash.negate = negate;
      lodash.nthArg = nthArg;
      lodash.omit = omit;
      lodash.omitBy = omitBy;
      lodash.once = once;
      lodash.orderBy = orderBy;
      lodash.over = over;
      lodash.overArgs = overArgs;
      lodash.overEvery = overEvery;
      lodash.overSome = overSome;
      lodash.partial = partial;
      lodash.partialRight = partialRight;
      lodash.partition = partition;
      lodash.pick = pick;
      lodash.pickBy = pickBy;
      lodash.property = property;
      lodash.propertyOf = propertyOf;
      lodash.pull = pull;
      lodash.pullAll = pullAll;
      lodash.pullAllBy = pullAllBy;
      lodash.pullAllWith = pullAllWith;
      lodash.pullAt = pullAt;
      lodash.range = range;
      lodash.rangeRight = rangeRight;
      lodash.rearg = rearg;
      lodash.reject = reject;
      lodash.remove = remove;
      lodash.rest = rest;
      lodash.reverse = reverse;
      lodash.sampleSize = sampleSize;
      lodash.set = set;
      lodash.setWith = setWith;
      lodash.shuffle = shuffle;
      lodash.slice = slice;
      lodash.sortBy = sortBy;
      lodash.sortedUniq = sortedUniq;
      lodash.sortedUniqBy = sortedUniqBy;
      lodash.split = split;
      lodash.spread = spread;
      lodash.tail = tail;
      lodash.take = take;
      lodash.takeRight = takeRight;
      lodash.takeRightWhile = takeRightWhile;
      lodash.takeWhile = takeWhile;
      lodash.tap = tap;
      lodash.throttle = throttle;
      lodash.thru = thru;
      lodash.toArray = toArray;
      lodash.toPairs = toPairs;
      lodash.toPairsIn = toPairsIn;
      lodash.toPath = toPath;
      lodash.toPlainObject = toPlainObject;
      lodash.transform = transform;
      lodash.unary = unary;
      lodash.union = union;
      lodash.unionBy = unionBy;
      lodash.unionWith = unionWith;
      lodash.uniq = uniq;
      lodash.uniqBy = uniqBy;
      lodash.uniqWith = uniqWith;
      lodash.unset = unset;
      lodash.unzip = unzip;
      lodash.unzipWith = unzipWith;
      lodash.update = update;
      lodash.updateWith = updateWith;
      lodash.values = values;
      lodash.valuesIn = valuesIn;
      lodash.without = without;
      lodash.words = words;
      lodash.wrap = wrap;
      lodash.xor = xor;
      lodash.xorBy = xorBy;
      lodash.xorWith = xorWith;
      lodash.zip = zip;
      lodash.zipObject = zipObject;
      lodash.zipObjectDeep = zipObjectDeep;
      lodash.zipWith = zipWith;
      lodash.entries = toPairs;
      lodash.entriesIn = toPairsIn;
      lodash.extend = assignIn;
      lodash.extendWith = assignInWith;
      mixin(lodash, lodash);
      lodash.add = add;
      lodash.attempt = attempt;
      lodash.camelCase = camelCase;
      lodash.capitalize = capitalize;
      lodash.ceil = ceil;
      lodash.clamp = clamp;
      lodash.clone = clone;
      lodash.cloneDeep = cloneDeep;
      lodash.cloneDeepWith = cloneDeepWith;
      lodash.cloneWith = cloneWith;
      lodash.conformsTo = conformsTo;
      lodash.deburr = deburr;
      lodash.defaultTo = defaultTo;
      lodash.divide = divide;
      lodash.endsWith = endsWith;
      lodash.eq = eq;
      lodash.escape = escape;
      lodash.escapeRegExp = escapeRegExp;
      lodash.every = every;
      lodash.find = find;
      lodash.findIndex = findIndex;
      lodash.findKey = findKey;
      lodash.findLast = findLast;
      lodash.findLastIndex = findLastIndex;
      lodash.findLastKey = findLastKey;
      lodash.floor = floor;
      lodash.forEach = forEach;
      lodash.forEachRight = forEachRight;
      lodash.forIn = forIn;
      lodash.forInRight = forInRight;
      lodash.forOwn = forOwn;
      lodash.forOwnRight = forOwnRight;
      lodash.get = get;
      lodash.gt = gt;
      lodash.gte = gte;
      lodash.has = has;
      lodash.hasIn = hasIn;
      lodash.head = head;
      lodash.identity = identity;
      lodash.includes = includes;
      lodash.indexOf = indexOf;
      lodash.inRange = inRange;
      lodash.invoke = invoke;
      lodash.isArguments = isArguments;
      lodash.isArray = isArray;
      lodash.isArrayBuffer = isArrayBuffer;
      lodash.isArrayLike = isArrayLike;
      lodash.isArrayLikeObject = isArrayLikeObject;
      lodash.isBoolean = isBoolean;
      lodash.isBuffer = isBuffer;
      lodash.isDate = isDate;
      lodash.isElement = isElement;
      lodash.isEmpty = isEmpty;
      lodash.isEqual = isEqual;
      lodash.isEqualWith = isEqualWith;
      lodash.isError = isError;
      lodash.isFinite = isFinite;
      lodash.isFunction = isFunction;
      lodash.isInteger = isInteger;
      lodash.isLength = isLength;
      lodash.isMap = isMap;
      lodash.isMatch = isMatch;
      lodash.isMatchWith = isMatchWith;
      lodash.isNaN = isNaN;
      lodash.isNative = isNative;
      lodash.isNil = isNil;
      lodash.isNull = isNull;
      lodash.isNumber = isNumber;
      lodash.isObject = isObject;
      lodash.isObjectLike = isObjectLike;
      lodash.isPlainObject = isPlainObject;
      lodash.isRegExp = isRegExp;
      lodash.isSafeInteger = isSafeInteger;
      lodash.isSet = isSet;
      lodash.isString = isString;
      lodash.isSymbol = isSymbol;
      lodash.isTypedArray = isTypedArray;
      lodash.isUndefined = isUndefined;
      lodash.isWeakMap = isWeakMap;
      lodash.isWeakSet = isWeakSet;
      lodash.join = join;
      lodash.kebabCase = kebabCase;
      lodash.last = last;
      lodash.lastIndexOf = lastIndexOf;
      lodash.lowerCase = lowerCase;
      lodash.lowerFirst = lowerFirst;
      lodash.lt = lt;
      lodash.lte = lte;
      lodash.max = max;
      lodash.maxBy = maxBy;
      lodash.mean = mean;
      lodash.meanBy = meanBy;
      lodash.min = min;
      lodash.minBy = minBy;
      lodash.stubArray = stubArray;
      lodash.stubFalse = stubFalse;
      lodash.stubObject = stubObject;
      lodash.stubString = stubString;
      lodash.stubTrue = stubTrue;
      lodash.multiply = multiply;
      lodash.nth = nth;
      lodash.noConflict = noConflict;
      lodash.noop = noop;
      lodash.now = now;
      lodash.pad = pad;
      lodash.padEnd = padEnd;
      lodash.padStart = padStart;
      lodash.parseInt = parseInt;
      lodash.random = random;
      lodash.reduce = reduce;
      lodash.reduceRight = reduceRight;
      lodash.repeat = repeat;
      lodash.replace = replace;
      lodash.result = result;
      lodash.round = round;
      lodash.runInContext = runInContext;
      lodash.sample = sample;
      lodash.size = size;
      lodash.snakeCase = snakeCase;
      lodash.some = some;
      lodash.sortedIndex = sortedIndex;
      lodash.sortedIndexBy = sortedIndexBy;
      lodash.sortedIndexOf = sortedIndexOf;
      lodash.sortedLastIndex = sortedLastIndex;
      lodash.sortedLastIndexBy = sortedLastIndexBy;
      lodash.sortedLastIndexOf = sortedLastIndexOf;
      lodash.startCase = startCase;
      lodash.startsWith = startsWith;
      lodash.subtract = subtract;
      lodash.sum = sum;
      lodash.sumBy = sumBy;
      lodash.template = template;
      lodash.times = times;
      lodash.toFinite = toFinite;
      lodash.toInteger = toInteger;
      lodash.toLength = toLength;
      lodash.toLower = toLower;
      lodash.toNumber = toNumber;
      lodash.toSafeInteger = toSafeInteger;
      lodash.toString = toString;
      lodash.toUpper = toUpper;
      lodash.trim = trim;
      lodash.trimEnd = trimEnd;
      lodash.trimStart = trimStart;
      lodash.truncate = truncate;
      lodash.unescape = unescape;
      lodash.uniqueId = uniqueId;
      lodash.upperCase = upperCase;
      lodash.upperFirst = upperFirst;
      lodash.each = forEach;
      lodash.eachRight = forEachRight;
      lodash.first = head;
      mixin(lodash, (function() {
        var source = {};
        baseForOwn(lodash, function(func, methodName) {
          if (!hasOwnProperty.call(lodash.prototype, methodName)) {
            source[methodName] = func;
          }
        });
        return source;
      }()), {'chain': false});
      lodash.VERSION = VERSION;
      arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
        lodash[methodName].placeholder = lodash;
      });
      arrayEach(['drop', 'take'], function(methodName, index) {
        LazyWrapper.prototype[methodName] = function(n) {
          var filtered = this.__filtered__;
          if (filtered && !index) {
            return new LazyWrapper(this);
          }
          n = n === undefined ? 1 : nativeMax(toInteger(n), 0);
          var result = this.clone();
          if (filtered) {
            result.__takeCount__ = nativeMin(n, result.__takeCount__);
          } else {
            result.__views__.push({
              'size': nativeMin(n, MAX_ARRAY_LENGTH),
              'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
            });
          }
          return result;
        };
        LazyWrapper.prototype[methodName + 'Right'] = function(n) {
          return this.reverse()[methodName](n).reverse();
        };
      });
      arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
        var type = index + 1,
            isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
        LazyWrapper.prototype[methodName] = function(iteratee) {
          var result = this.clone();
          result.__iteratees__.push({
            'iteratee': getIteratee(iteratee, 3),
            'type': type
          });
          result.__filtered__ = result.__filtered__ || isFilter;
          return result;
        };
      });
      arrayEach(['head', 'last'], function(methodName, index) {
        var takeName = 'take' + (index ? 'Right' : '');
        LazyWrapper.prototype[methodName] = function() {
          return this[takeName](1).value()[0];
        };
      });
      arrayEach(['initial', 'tail'], function(methodName, index) {
        var dropName = 'drop' + (index ? '' : 'Right');
        LazyWrapper.prototype[methodName] = function() {
          return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
        };
      });
      LazyWrapper.prototype.compact = function() {
        return this.filter(identity);
      };
      LazyWrapper.prototype.find = function(predicate) {
        return this.filter(predicate).head();
      };
      LazyWrapper.prototype.findLast = function(predicate) {
        return this.reverse().find(predicate);
      };
      LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
        if (typeof path == 'function') {
          return new LazyWrapper(this);
        }
        return this.map(function(value) {
          return baseInvoke(value, path, args);
        });
      });
      LazyWrapper.prototype.reject = function(predicate) {
        return this.filter(negate(getIteratee(predicate)));
      };
      LazyWrapper.prototype.slice = function(start, end) {
        start = toInteger(start);
        var result = this;
        if (result.__filtered__ && (start > 0 || end < 0)) {
          return new LazyWrapper(result);
        }
        if (start < 0) {
          result = result.takeRight(-start);
        } else if (start) {
          result = result.drop(start);
        }
        if (end !== undefined) {
          end = toInteger(end);
          result = end < 0 ? result.dropRight(-end) : result.take(end - start);
        }
        return result;
      };
      LazyWrapper.prototype.takeRightWhile = function(predicate) {
        return this.reverse().takeWhile(predicate).reverse();
      };
      LazyWrapper.prototype.toArray = function() {
        return this.take(MAX_ARRAY_LENGTH);
      };
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
            isTaker = /^(?:head|last)$/.test(methodName),
            lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
            retUnwrapped = isTaker || /^find/.test(methodName);
        if (!lodashFunc) {
          return;
        }
        lodash.prototype[methodName] = function() {
          var value = this.__wrapped__,
              args = isTaker ? [1] : arguments,
              isLazy = value instanceof LazyWrapper,
              iteratee = args[0],
              useLazy = isLazy || isArray(value);
          var interceptor = function(value) {
            var result = lodashFunc.apply(lodash, arrayPush([value], args));
            return (isTaker && chainAll) ? result[0] : result;
          };
          if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
            isLazy = useLazy = false;
          }
          var chainAll = this.__chain__,
              isHybrid = !!this.__actions__.length,
              isUnwrapped = retUnwrapped && !chainAll,
              onlyLazy = isLazy && !isHybrid;
          if (!retUnwrapped && useLazy) {
            value = onlyLazy ? value : new LazyWrapper(this);
            var result = func.apply(value, args);
            result.__actions__.push({
              'func': thru,
              'args': [interceptor],
              'thisArg': undefined
            });
            return new LodashWrapper(result, chainAll);
          }
          if (isUnwrapped && onlyLazy) {
            return func.apply(this, args);
          }
          result = this.thru(interceptor);
          return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
        };
      });
      arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
        var func = arrayProto[methodName],
            chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
            retUnwrapped = /^(?:pop|shift)$/.test(methodName);
        lodash.prototype[methodName] = function() {
          var args = arguments;
          if (retUnwrapped && !this.__chain__) {
            var value = this.value();
            return func.apply(isArray(value) ? value : [], args);
          }
          return this[chainName](function(value) {
            return func.apply(isArray(value) ? value : [], args);
          });
        };
      });
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var lodashFunc = lodash[methodName];
        if (lodashFunc) {
          var key = (lodashFunc.name + ''),
              names = realNames[key] || (realNames[key] = []);
          names.push({
            'name': methodName,
            'func': lodashFunc
          });
        }
      });
      realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
        'name': 'wrapper',
        'func': undefined
      }];
      LazyWrapper.prototype.clone = lazyClone;
      LazyWrapper.prototype.reverse = lazyReverse;
      LazyWrapper.prototype.value = lazyValue;
      lodash.prototype.at = wrapperAt;
      lodash.prototype.chain = wrapperChain;
      lodash.prototype.commit = wrapperCommit;
      lodash.prototype.next = wrapperNext;
      lodash.prototype.plant = wrapperPlant;
      lodash.prototype.reverse = wrapperReverse;
      lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
      lodash.prototype.first = lodash.prototype.head;
      if (symIterator) {
        lodash.prototype[symIterator] = wrapperToIterator;
      }
      return lodash;
    });
    var _ = runInContext();
    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
      root._ = _;
      define(function() {
        return _;
      });
    } else if (freeModule) {
      (freeModule.exports = _)._ = _;
      freeExports._ = _;
    } else {
      root._ = _;
    }
  }.call(this));
  return module.exports;
});

$__System.registerDynamic("53", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  !function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.RecursiveIterator = t() : e.RecursiveIterator = t();
  }(this, function() {
    return function(e) {
      function t(i) {
        if (r[i])
          return r[i].exports;
        var n = r[i] = {
          exports: {},
          id: i,
          loaded: !1
        };
        return e[i].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports;
      }
      var r = {};
      return t.m = e, t.c = r, t.p = "", t(0);
    }([function(e, t, r) {
      "use strict";
      var i = function(e) {
        if (Array.isArray(e)) {
          for (var t = 0,
              r = Array(e.length); t < e.length; t++)
            r[t] = e[t];
          return r;
        }
        return Array.from(e);
      },
          n = function(e, t, r) {
            t && Object.defineProperties(e, t), r && Object.defineProperties(e.prototype, r);
          },
          o = function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          },
          u = r(1),
          a = u.isObject,
          s = u.getKeys,
          f = "__bypassMode",
          c = "__ignoreCircular",
          l = "__maxDeep",
          h = "__cache",
          d = "__queue",
          p = "__state",
          v = {},
          b = function() {
            function e(t) {
              var r = void 0 === arguments[1] ? 0 : arguments[1],
                  i = void 0 !== arguments[2] && arguments[2],
                  n = void 0 === arguments[3] ? 100 : arguments[3];
              o(this, e), this[f] = r, this[c] = i, this[l] = n, this[h] = [], this[d] = [], this[p] = this.getState(void 0, t), this.__makeIterable();
            }
            return n(e, null, {
              next: {
                value: function() {
                  var e = this[p] || v,
                      t = e.node,
                      r = e.path,
                      n = e.deep;
                  if (this[l] > n && this.isNode(t))
                    if (this.isCircular(t)) {
                      if (!this[c])
                        throw new Error("Circular reference");
                    } else if (this.onStepInto(this[p])) {
                      var o,
                          u = this.getStatesOfChildNodes(t, r, n),
                          a = this[f] ? "push" : "unshift";
                      (o = this[d])[a].apply(o, i(u)), this[h].push(t);
                    }
                  var s = this[d].shift(),
                      b = !s;
                  return this[p] = s, b && this.destroy(), {
                    value: s,
                    done: b
                  };
                },
                writable: !0,
                configurable: !0
              },
              destroy: {
                value: function() {
                  this[d].length = 0, this[h].length = 0, this[p] = null;
                },
                writable: !0,
                configurable: !0
              },
              isNode: {
                value: function(e) {
                  return a(e);
                },
                writable: !0,
                configurable: !0
              },
              isLeaf: {
                value: function(e) {
                  return !this.isNode(e);
                },
                writable: !0,
                configurable: !0
              },
              isCircular: {
                value: function(e) {
                  return this[h].indexOf(e) !== -1;
                },
                writable: !0,
                configurable: !0
              },
              getStatesOfChildNodes: {
                value: function(e, t, r) {
                  var i = this;
                  return s(e).map(function(n) {
                    return i.getState(e, e[n], n, t.concat(n), r + 1);
                  });
                },
                writable: !0,
                configurable: !0
              },
              getState: {
                value: function(e, t, r) {
                  var i = void 0 === arguments[3] ? [] : arguments[3],
                      n = void 0 === arguments[4] ? 0 : arguments[4];
                  return {
                    parent: e,
                    node: t,
                    key: r,
                    path: i,
                    deep: n
                  };
                },
                writable: !0,
                configurable: !0
              },
              onStepInto: {
                value: function(e) {
                  return !0;
                },
                writable: !0,
                configurable: !0
              },
              __makeIterable: {
                value: function() {
                  var e = this;
                  try {
                    this[Symbol.iterator] = function() {
                      return e;
                    };
                  } catch (t) {}
                },
                writable: !0,
                configurable: !0
              }
            }), e;
          }();
      e.exports = b;
    }, function(e, t) {
      "use strict";
      function r(e) {
        return null !== e && "object" == typeof e;
      }
      function i(e) {
        if (!r(e))
          return !1;
        if (!("length" in e))
          return !1;
        var t = e.length;
        if (!n(t))
          return !1;
        if (t > 0)
          return t - 1 in e;
        for (var i in e)
          return !1;
      }
      function n(e) {
        return "number" == typeof e;
      }
      function o(e) {
        var t = Object.keys(e);
        if (u(e))
          ;
        else if (i(e)) {
          var r = t.indexOf("length");
          r > -1 && t.splice(r, 1);
        } else
          t = t.sort();
        return t;
      }
      t.isObject = r, t.isArrayLike = i, t.isNumber = n, t.getKeys = o;
      var u = t.isArray = Array.isArray;
      Object.defineProperty(t, "__esModule", {value: !0});
    }]);
  });
  return module.exports;
});

$__System.registerDynamic("54", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  function AstWalker() {}
  AstWalker.prototype.walk = function(ast, callback) {
    if (callback instanceof Function) {
      callback = {'*': callback};
    }
    if (!('*' in callback)) {
      callback['*'] = function() {
        return true;
      };
    }
    if (manageCallBack(ast, callback) && ast.children && ast.children.length > 0) {
      for (var k in ast.children) {
        var child = ast.children[k];
        this.walk(child, callback);
      }
    }
  };
  function manageCallBack(node, callback) {
    if (node.name in callback) {
      return callback[node.name](node);
    } else {
      return callback['*'](node);
    }
  }
  module.exports = AstWalker;
  return module.exports;
});

$__System.registerDynamic("51", ["2a"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("2a");
  var define,
      global = this || self,
      GLOBAL = global;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var NO = {};
  function noop() {}
  function copy(a) {
    var l = a.length;
    var b = Array(l);
    for (var i = 0; i < l; ++i) {
      b[i] = a[i];
    }
    return b;
  }
  exports.NO_IL = {
    _n: noop,
    _e: noop,
    _c: noop
  };
  function internalizeProducer(producer) {
    producer._start = function _start(il) {
      il.next = il._n;
      il.error = il._e;
      il.complete = il._c;
      this.start(il);
    };
    producer._stop = producer.stop;
  }
  function compose2(f1, f2) {
    return function composedFn(arg) {
      return f1(f2(arg));
    };
  }
  function and(f1, f2) {
    return function andFn(t) {
      return f1(t) && f2(t);
    };
  }
  var MergeProducer = (function() {
    function MergeProducer(insArr) {
      this.type = 'merge';
      this.insArr = insArr;
      this.out = NO;
      this.ac = 0;
    }
    MergeProducer.prototype._start = function(out) {
      this.out = out;
      var s = this.insArr;
      var L = s.length;
      this.ac = L;
      for (var i = 0; i < L; i++) {
        s[i]._add(this);
      }
    };
    MergeProducer.prototype._stop = function() {
      var s = this.insArr;
      var L = s.length;
      for (var i = 0; i < L; i++) {
        s[i]._remove(this);
      }
      this.out = NO;
    };
    MergeProducer.prototype._n = function(t) {
      var u = this.out;
      if (u === NO)
        return;
      u._n(t);
    };
    MergeProducer.prototype._e = function(err) {
      var u = this.out;
      if (u === NO)
        return;
      u._e(err);
    };
    MergeProducer.prototype._c = function() {
      if (--this.ac <= 0) {
        var u = this.out;
        if (u === NO)
          return;
        u._c();
      }
    };
    return MergeProducer;
  }());
  exports.MergeProducer = MergeProducer;
  var CombineListener = (function() {
    function CombineListener(i, out, p) {
      this.i = i;
      this.out = out;
      this.p = p;
      p.ils.push(this);
    }
    CombineListener.prototype._n = function(t) {
      var p = this.p,
          out = this.out;
      if (!out)
        return;
      if (p.up(t, this.i)) {
        out._n(p.vals);
      }
    };
    CombineListener.prototype._e = function(err) {
      var out = this.out;
      if (!out)
        return;
      out._e(err);
    };
    CombineListener.prototype._c = function() {
      var p = this.p;
      if (!p.out)
        return;
      if (--p.Nc === 0) {
        p.out._c();
      }
    };
    return CombineListener;
  }());
  exports.CombineListener = CombineListener;
  var CombineProducer = (function() {
    function CombineProducer(insArr) {
      this.type = 'combine';
      this.insArr = insArr;
      this.out = NO;
      this.ils = [];
      this.Nc = this.Nn = 0;
      this.vals = [];
    }
    CombineProducer.prototype.up = function(t, i) {
      var v = this.vals[i];
      var Nn = !this.Nn ? 0 : v === NO ? --this.Nn : this.Nn;
      this.vals[i] = t;
      return Nn === 0;
    };
    CombineProducer.prototype._start = function(out) {
      this.out = out;
      var s = this.insArr;
      var n = this.Nc = this.Nn = s.length;
      var vals = this.vals = new Array(n);
      if (n === 0) {
        out._n([]);
        out._c();
      } else {
        for (var i = 0; i < n; i++) {
          vals[i] = NO;
          s[i]._add(new CombineListener(i, out, this));
        }
      }
    };
    CombineProducer.prototype._stop = function() {
      var s = this.insArr;
      var n = s.length;
      for (var i = 0; i < n; i++) {
        s[i]._remove(this.ils[i]);
      }
      this.out = NO;
      this.ils = [];
      this.vals = [];
    };
    return CombineProducer;
  }());
  exports.CombineProducer = CombineProducer;
  var FromArrayProducer = (function() {
    function FromArrayProducer(a) {
      this.type = 'fromArray';
      this.a = a;
    }
    FromArrayProducer.prototype._start = function(out) {
      var a = this.a;
      for (var i = 0,
          l = a.length; i < l; i++) {
        out._n(a[i]);
      }
      out._c();
    };
    FromArrayProducer.prototype._stop = function() {};
    return FromArrayProducer;
  }());
  exports.FromArrayProducer = FromArrayProducer;
  var FromPromiseProducer = (function() {
    function FromPromiseProducer(p) {
      this.type = 'fromPromise';
      this.on = false;
      this.p = p;
    }
    FromPromiseProducer.prototype._start = function(out) {
      var prod = this;
      this.on = true;
      this.p.then(function(v) {
        if (prod.on) {
          out._n(v);
          out._c();
        }
      }, function(e) {
        out._e(e);
      }).then(null, function(err) {
        setTimeout(function() {
          throw err;
        });
      });
    };
    FromPromiseProducer.prototype._stop = function() {
      this.on = false;
    };
    return FromPromiseProducer;
  }());
  exports.FromPromiseProducer = FromPromiseProducer;
  var PeriodicProducer = (function() {
    function PeriodicProducer(period) {
      this.type = 'periodic';
      this.period = period;
      this.intervalID = -1;
      this.i = 0;
    }
    PeriodicProducer.prototype._start = function(stream) {
      var self = this;
      function intervalHandler() {
        stream._n(self.i++);
      }
      this.intervalID = setInterval(intervalHandler, this.period);
    };
    PeriodicProducer.prototype._stop = function() {
      if (this.intervalID !== -1)
        clearInterval(this.intervalID);
      this.intervalID = -1;
      this.i = 0;
    };
    return PeriodicProducer;
  }());
  exports.PeriodicProducer = PeriodicProducer;
  var DebugOperator = (function() {
    function DebugOperator(arg, ins) {
      this.type = 'debug';
      this.ins = ins;
      this.out = NO;
      this.s = noop;
      this.l = '';
      if (typeof arg === 'string') {
        this.l = arg;
      } else if (typeof arg === 'function') {
        this.s = arg;
      }
    }
    DebugOperator.prototype._start = function(out) {
      this.out = out;
      this.ins._add(this);
    };
    DebugOperator.prototype._stop = function() {
      this.ins._remove(this);
      this.out = NO;
    };
    DebugOperator.prototype._n = function(t) {
      var u = this.out;
      if (u === NO)
        return;
      var s = this.s,
          l = this.l;
      if (s !== noop) {
        try {
          s(t);
        } catch (e) {
          u._e(e);
        }
      } else if (l) {
        console.log(l + ':', t);
      } else {
        console.log(t);
      }
      u._n(t);
    };
    DebugOperator.prototype._e = function(err) {
      var u = this.out;
      if (u === NO)
        return;
      u._e(err);
    };
    DebugOperator.prototype._c = function() {
      var u = this.out;
      if (u === NO)
        return;
      u._c();
    };
    return DebugOperator;
  }());
  exports.DebugOperator = DebugOperator;
  var DropOperator = (function() {
    function DropOperator(max, ins) {
      this.type = 'drop';
      this.ins = ins;
      this.out = NO;
      this.max = max;
      this.dropped = 0;
    }
    DropOperator.prototype._start = function(out) {
      this.out = out;
      this.dropped = 0;
      this.ins._add(this);
    };
    DropOperator.prototype._stop = function() {
      this.ins._remove(this);
      this.out = NO;
    };
    DropOperator.prototype._n = function(t) {
      var u = this.out;
      if (u === NO)
        return;
      if (this.dropped++ >= this.max)
        u._n(t);
    };
    DropOperator.prototype._e = function(err) {
      var u = this.out;
      if (u === NO)
        return;
      u._e(err);
    };
    DropOperator.prototype._c = function() {
      var u = this.out;
      if (u === NO)
        return;
      u._c();
    };
    return DropOperator;
  }());
  exports.DropOperator = DropOperator;
  var OtherIL = (function() {
    function OtherIL(out, op) {
      this.out = out;
      this.op = op;
    }
    OtherIL.prototype._n = function(t) {
      this.op.end();
    };
    OtherIL.prototype._e = function(err) {
      this.out._e(err);
    };
    OtherIL.prototype._c = function() {
      this.op.end();
    };
    return OtherIL;
  }());
  var EndWhenOperator = (function() {
    function EndWhenOperator(o, ins) {
      this.type = 'endWhen';
      this.ins = ins;
      this.out = NO;
      this.o = o;
      this.oil = exports.NO_IL;
    }
    EndWhenOperator.prototype._start = function(out) {
      this.out = out;
      this.o._add(this.oil = new OtherIL(out, this));
      this.ins._add(this);
    };
    EndWhenOperator.prototype._stop = function() {
      this.ins._remove(this);
      this.o._remove(this.oil);
      this.out = NO;
      this.oil = exports.NO_IL;
    };
    EndWhenOperator.prototype.end = function() {
      var u = this.out;
      if (u === NO)
        return;
      u._c();
    };
    EndWhenOperator.prototype._n = function(t) {
      var u = this.out;
      if (u === NO)
        return;
      u._n(t);
    };
    EndWhenOperator.prototype._e = function(err) {
      var u = this.out;
      if (u === NO)
        return;
      u._e(err);
    };
    EndWhenOperator.prototype._c = function() {
      this.end();
    };
    return EndWhenOperator;
  }());
  exports.EndWhenOperator = EndWhenOperator;
  var FilterOperator = (function() {
    function FilterOperator(passes, ins) {
      this.type = 'filter';
      this.ins = ins;
      this.out = NO;
      this.passes = passes;
    }
    FilterOperator.prototype._start = function(out) {
      this.out = out;
      this.ins._add(this);
    };
    FilterOperator.prototype._stop = function() {
      this.ins._remove(this);
      this.out = NO;
    };
    FilterOperator.prototype._n = function(t) {
      var u = this.out;
      if (u === NO)
        return;
      try {
        if (this.passes(t))
          u._n(t);
      } catch (e) {
        u._e(e);
      }
    };
    FilterOperator.prototype._e = function(err) {
      var u = this.out;
      if (u === NO)
        return;
      u._e(err);
    };
    FilterOperator.prototype._c = function() {
      var u = this.out;
      if (u === NO)
        return;
      u._c();
    };
    return FilterOperator;
  }());
  exports.FilterOperator = FilterOperator;
  var FlattenListener = (function() {
    function FlattenListener(out, op) {
      this.out = out;
      this.op = op;
    }
    FlattenListener.prototype._n = function(t) {
      this.out._n(t);
    };
    FlattenListener.prototype._e = function(err) {
      this.out._e(err);
    };
    FlattenListener.prototype._c = function() {
      this.op.inner = NO;
      this.op.less();
    };
    return FlattenListener;
  }());
  var FlattenOperator = (function() {
    function FlattenOperator(ins) {
      this.type = 'flatten';
      this.ins = ins;
      this.out = NO;
      this.open = true;
      this.inner = NO;
      this.il = exports.NO_IL;
    }
    FlattenOperator.prototype._start = function(out) {
      this.out = out;
      this.open = true;
      this.inner = NO;
      this.il = exports.NO_IL;
      this.ins._add(this);
    };
    FlattenOperator.prototype._stop = function() {
      this.ins._remove(this);
      if (this.inner !== NO)
        this.inner._remove(this.il);
      this.out = NO;
      this.open = true;
      this.inner = NO;
      this.il = exports.NO_IL;
    };
    FlattenOperator.prototype.less = function() {
      var u = this.out;
      if (u === NO)
        return;
      if (!this.open && this.inner === NO)
        u._c();
    };
    FlattenOperator.prototype._n = function(s) {
      var u = this.out;
      if (u === NO)
        return;
      var _a = this,
          inner = _a.inner,
          il = _a.il;
      if (inner !== NO && il !== exports.NO_IL)
        inner._remove(il);
      (this.inner = s)._add(this.il = new FlattenListener(u, this));
    };
    FlattenOperator.prototype._e = function(err) {
      var u = this.out;
      if (u === NO)
        return;
      u._e(err);
    };
    FlattenOperator.prototype._c = function() {
      this.open = false;
      this.less();
    };
    return FlattenOperator;
  }());
  exports.FlattenOperator = FlattenOperator;
  var FoldOperator = (function() {
    function FoldOperator(f, seed, ins) {
      this.type = 'fold';
      this.ins = ins;
      this.out = NO;
      this.f = f;
      this.acc = this.seed = seed;
    }
    FoldOperator.prototype._start = function(out) {
      this.out = out;
      this.acc = this.seed;
      out._n(this.acc);
      this.ins._add(this);
    };
    FoldOperator.prototype._stop = function() {
      this.ins._remove(this);
      this.out = NO;
      this.acc = this.seed;
    };
    FoldOperator.prototype._n = function(t) {
      var u = this.out;
      if (u === NO)
        return;
      try {
        u._n(this.acc = this.f(this.acc, t));
      } catch (e) {
        u._e(e);
      }
    };
    FoldOperator.prototype._e = function(err) {
      var u = this.out;
      if (u === NO)
        return;
      u._e(err);
    };
    FoldOperator.prototype._c = function() {
      var u = this.out;
      if (u === NO)
        return;
      u._c();
    };
    return FoldOperator;
  }());
  exports.FoldOperator = FoldOperator;
  var LastOperator = (function() {
    function LastOperator(ins) {
      this.type = 'last';
      this.ins = ins;
      this.out = NO;
      this.has = false;
      this.val = NO;
    }
    LastOperator.prototype._start = function(out) {
      this.out = out;
      this.has = false;
      this.ins._add(this);
    };
    LastOperator.prototype._stop = function() {
      this.ins._remove(this);
      this.out = NO;
      this.val = NO;
    };
    LastOperator.prototype._n = function(t) {
      this.has = true;
      this.val = t;
    };
    LastOperator.prototype._e = function(err) {
      var u = this.out;
      if (u === NO)
        return;
      u._e(err);
    };
    LastOperator.prototype._c = function() {
      var u = this.out;
      if (u === NO)
        return;
      if (this.has) {
        u._n(this.val);
        u._c();
      } else {
        u._e('TODO show proper error');
      }
    };
    return LastOperator;
  }());
  exports.LastOperator = LastOperator;
  var MapFlattenInner = (function() {
    function MapFlattenInner(out, op) {
      this.out = out;
      this.op = op;
    }
    MapFlattenInner.prototype._n = function(r) {
      this.out._n(r);
    };
    MapFlattenInner.prototype._e = function(err) {
      this.out._e(err);
    };
    MapFlattenInner.prototype._c = function() {
      this.op.inner = NO;
      this.op.less();
    };
    return MapFlattenInner;
  }());
  var MapFlattenOperator = (function() {
    function MapFlattenOperator(mapOp) {
      this.type = mapOp.type + "+flatten";
      this.ins = mapOp.ins;
      this.out = NO;
      this.mapOp = mapOp;
      this.inner = NO;
      this.il = exports.NO_IL;
      this.open = true;
    }
    MapFlattenOperator.prototype._start = function(out) {
      this.out = out;
      this.inner = NO;
      this.il = exports.NO_IL;
      this.open = true;
      this.mapOp.ins._add(this);
    };
    MapFlattenOperator.prototype._stop = function() {
      this.mapOp.ins._remove(this);
      if (this.inner !== NO)
        this.inner._remove(this.il);
      this.out = NO;
      this.inner = NO;
      this.il = exports.NO_IL;
    };
    MapFlattenOperator.prototype.less = function() {
      if (!this.open && this.inner === NO) {
        var u = this.out;
        if (u === NO)
          return;
        u._c();
      }
    };
    MapFlattenOperator.prototype._n = function(v) {
      var u = this.out;
      if (u === NO)
        return;
      var _a = this,
          inner = _a.inner,
          il = _a.il;
      var s;
      try {
        s = this.mapOp.project(v);
      } catch (e) {
        u._e(e);
        return;
      }
      if (inner !== NO && il !== exports.NO_IL)
        inner._remove(il);
      (this.inner = s)._add(this.il = new MapFlattenInner(u, this));
    };
    MapFlattenOperator.prototype._e = function(err) {
      var u = this.out;
      if (u === NO)
        return;
      u._e(err);
    };
    MapFlattenOperator.prototype._c = function() {
      this.open = false;
      this.less();
    };
    return MapFlattenOperator;
  }());
  exports.MapFlattenOperator = MapFlattenOperator;
  var MapOperator = (function() {
    function MapOperator(project, ins) {
      this.type = 'map';
      this.ins = ins;
      this.out = NO;
      this.project = project;
    }
    MapOperator.prototype._start = function(out) {
      this.out = out;
      this.ins._add(this);
    };
    MapOperator.prototype._stop = function() {
      this.ins._remove(this);
      this.out = NO;
    };
    MapOperator.prototype._n = function(t) {
      var u = this.out;
      if (u === NO)
        return;
      try {
        u._n(this.project(t));
      } catch (e) {
        u._e(e);
      }
    };
    MapOperator.prototype._e = function(err) {
      var u = this.out;
      if (u === NO)
        return;
      u._e(err);
    };
    MapOperator.prototype._c = function() {
      var u = this.out;
      if (u === NO)
        return;
      u._c();
    };
    return MapOperator;
  }());
  exports.MapOperator = MapOperator;
  var FilterMapOperator = (function(_super) {
    __extends(FilterMapOperator, _super);
    function FilterMapOperator(passes, project, ins) {
      _super.call(this, project, ins);
      this.type = 'filter+map';
      this.passes = passes;
    }
    FilterMapOperator.prototype._n = function(v) {
      if (this.passes(v)) {
        _super.prototype._n.call(this, v);
      }
      ;
    };
    return FilterMapOperator;
  }(MapOperator));
  exports.FilterMapOperator = FilterMapOperator;
  var RememberOperator = (function() {
    function RememberOperator(ins) {
      this.type = 'remember';
      this.ins = ins;
      this.out = NO;
    }
    RememberOperator.prototype._start = function(out) {
      this.out = out;
      this.ins._add(out);
    };
    RememberOperator.prototype._stop = function() {
      this.ins._remove(this.out);
      this.out = NO;
    };
    return RememberOperator;
  }());
  exports.RememberOperator = RememberOperator;
  var ReplaceErrorOperator = (function() {
    function ReplaceErrorOperator(fn, ins) {
      this.type = 'replaceError';
      this.ins = ins;
      this.out = NO;
      this.fn = fn;
    }
    ReplaceErrorOperator.prototype._start = function(out) {
      this.out = out;
      this.ins._add(this);
    };
    ReplaceErrorOperator.prototype._stop = function() {
      this.ins._remove(this);
      this.out = NO;
    };
    ReplaceErrorOperator.prototype._n = function(t) {
      var u = this.out;
      if (u === NO)
        return;
      u._n(t);
    };
    ReplaceErrorOperator.prototype._e = function(err) {
      var u = this.out;
      if (u === NO)
        return;
      try {
        this.ins._remove(this);
        (this.ins = this.fn(err))._add(this);
      } catch (e) {
        u._e(e);
      }
    };
    ReplaceErrorOperator.prototype._c = function() {
      var u = this.out;
      if (u === NO)
        return;
      u._c();
    };
    return ReplaceErrorOperator;
  }());
  exports.ReplaceErrorOperator = ReplaceErrorOperator;
  var StartWithOperator = (function() {
    function StartWithOperator(ins, val) {
      this.type = 'startWith';
      this.ins = ins;
      this.out = NO;
      this.val = val;
    }
    StartWithOperator.prototype._start = function(out) {
      this.out = out;
      this.out._n(this.val);
      this.ins._add(out);
    };
    StartWithOperator.prototype._stop = function() {
      this.ins._remove(this.out);
      this.out = NO;
    };
    return StartWithOperator;
  }());
  exports.StartWithOperator = StartWithOperator;
  var TakeOperator = (function() {
    function TakeOperator(max, ins) {
      this.type = 'take';
      this.ins = ins;
      this.out = NO;
      this.max = max;
      this.taken = 0;
    }
    TakeOperator.prototype._start = function(out) {
      this.out = out;
      this.taken = 0;
      if (this.max <= 0) {
        out._c();
      } else {
        this.ins._add(this);
      }
    };
    TakeOperator.prototype._stop = function() {
      this.ins._remove(this);
      this.out = NO;
    };
    TakeOperator.prototype._n = function(t) {
      var u = this.out;
      if (u === NO)
        return;
      if (this.taken++ < this.max - 1) {
        u._n(t);
      } else {
        u._n(t);
        u._c();
      }
    };
    TakeOperator.prototype._e = function(err) {
      var u = this.out;
      if (u === NO)
        return;
      u._e(err);
    };
    TakeOperator.prototype._c = function() {
      var u = this.out;
      if (u === NO)
        return;
      u._c();
    };
    return TakeOperator;
  }());
  exports.TakeOperator = TakeOperator;
  var Stream = (function() {
    function Stream(producer) {
      this._prod = producer || NO;
      this._ils = [];
      this._stopID = NO;
      this._dl = NO;
      this._d = false;
      this._target = NO;
      this._err = NO;
    }
    Stream.prototype._n = function(t) {
      var a = this._ils;
      var L = a.length;
      if (this._d)
        this._dl._n(t);
      if (L == 1)
        a[0]._n(t);
      else {
        var b = copy(a);
        for (var i = 0; i < L; i++)
          b[i]._n(t);
      }
    };
    Stream.prototype._e = function(err) {
      if (this._err !== NO)
        return;
      this._err = err;
      var a = this._ils;
      var L = a.length;
      this._x();
      if (this._d)
        this._dl._e(err);
      if (L == 1)
        a[0]._e(err);
      else {
        var b = copy(a);
        for (var i = 0; i < L; i++)
          b[i]._e(err);
      }
    };
    Stream.prototype._c = function() {
      var a = this._ils;
      var L = a.length;
      this._x();
      if (this._d)
        this._dl._c();
      if (L == 1)
        a[0]._c();
      else {
        var b = copy(a);
        for (var i = 0; i < L; i++)
          b[i]._c();
      }
    };
    Stream.prototype._x = function() {
      if (this._ils.length === 0)
        return;
      if (this._prod !== NO)
        this._prod._stop();
      this._err = NO;
      this._ils = [];
    };
    Stream.prototype._stopNow = function() {
      this._prod._stop();
      this._err = NO;
      this._stopID = NO;
    };
    Stream.prototype._add = function(il) {
      var ta = this._target;
      if (ta !== NO)
        return ta._add(il);
      var a = this._ils;
      a.push(il);
      if (a.length > 1)
        return;
      if (this._stopID !== NO) {
        clearTimeout(this._stopID);
        this._stopID = NO;
      } else {
        var p = this._prod;
        if (p !== NO)
          p._start(this);
      }
    };
    Stream.prototype._remove = function(il) {
      var _this = this;
      var ta = this._target;
      if (ta !== NO)
        return ta._remove(il);
      var a = this._ils;
      var i = a.indexOf(il);
      if (i > -1) {
        a.splice(i, 1);
        if (this._prod !== NO && a.length <= 0) {
          this._err = NO;
          this._stopID = setTimeout(function() {
            return _this._stopNow();
          });
        } else if (a.length === 1) {
          this._pruneCycles();
        }
      }
    };
    Stream.prototype._pruneCycles = function() {
      if (this._hasNoSinks(this, [])) {
        this._remove(this._ils[0]);
      }
    };
    Stream.prototype._hasNoSinks = function(x, trace) {
      if (trace.indexOf(x) !== -1) {
        return true;
      } else if (x.out === this) {
        return true;
      } else if (x.out && x.out !== NO) {
        return this._hasNoSinks(x.out, trace.concat(x));
      } else if (x._ils) {
        for (var i = 0,
            N = x._ils.length; i < N; i++) {
          if (!this._hasNoSinks(x._ils[i], trace.concat(x))) {
            return false;
          }
        }
        return true;
      } else {
        return false;
      }
    };
    Stream.prototype.ctor = function() {
      return this instanceof MemoryStream ? MemoryStream : Stream;
    };
    Stream.prototype.addListener = function(listener) {
      if (typeof listener.next !== 'function' || typeof listener.error !== 'function' || typeof listener.complete !== 'function') {
        throw new Error('stream.addListener() requires all three next, error, ' + 'and complete functions.');
      }
      listener._n = listener.next;
      listener._e = listener.error;
      listener._c = listener.complete;
      this._add(listener);
    };
    Stream.prototype.removeListener = function(listener) {
      this._remove(listener);
    };
    Stream.create = function(producer) {
      if (producer) {
        if (typeof producer.start !== 'function' || typeof producer.stop !== 'function') {
          throw new Error('producer requires both start and stop functions');
        }
        internalizeProducer(producer);
      }
      return new Stream(producer);
    };
    Stream.createWithMemory = function(producer) {
      if (producer) {
        internalizeProducer(producer);
      }
      return new MemoryStream(producer);
    };
    Stream.never = function() {
      return new Stream({
        _start: noop,
        _stop: noop
      });
    };
    Stream.empty = function() {
      return new Stream({
        _start: function(il) {
          il._c();
        },
        _stop: noop
      });
    };
    Stream.throw = function(error) {
      return new Stream({
        _start: function(il) {
          il._e(error);
        },
        _stop: noop
      });
    };
    Stream.of = function() {
      var items = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        items[_i - 0] = arguments[_i];
      }
      return Stream.fromArray(items);
    };
    Stream.fromArray = function(array) {
      return new Stream(new FromArrayProducer(array));
    };
    Stream.fromPromise = function(promise) {
      return new Stream(new FromPromiseProducer(promise));
    };
    Stream.periodic = function(period) {
      return new Stream(new PeriodicProducer(period));
    };
    Stream.prototype._map = function(project) {
      var p = this._prod;
      var ctor = this.ctor();
      if (p instanceof FilterOperator) {
        return new ctor(new FilterMapOperator(p.passes, project, p.ins));
      }
      if (p instanceof FilterMapOperator) {
        return new ctor(new FilterMapOperator(p.passes, compose2(project, p.project), p.ins));
      }
      if (p instanceof MapOperator) {
        return new ctor(new MapOperator(compose2(project, p.project), p.ins));
      }
      return new ctor(new MapOperator(project, this));
    };
    Stream.prototype.map = function(project) {
      return this._map(project);
    };
    Stream.prototype.mapTo = function(projectedValue) {
      var s = this.map(function() {
        return projectedValue;
      });
      var op = s._prod;
      op.type = op.type.replace('map', 'mapTo');
      return s;
    };
    Stream.prototype.filter = function(passes) {
      var p = this._prod;
      if (p instanceof FilterOperator) {
        return new Stream(new FilterOperator(and(p.passes, passes), p.ins));
      }
      return new Stream(new FilterOperator(passes, this));
    };
    Stream.prototype.take = function(amount) {
      return new (this.ctor())(new TakeOperator(amount, this));
    };
    Stream.prototype.drop = function(amount) {
      return new Stream(new DropOperator(amount, this));
    };
    Stream.prototype.last = function() {
      return new Stream(new LastOperator(this));
    };
    Stream.prototype.startWith = function(initial) {
      return new MemoryStream(new StartWithOperator(this, initial));
    };
    Stream.prototype.endWhen = function(other) {
      return new (this.ctor())(new EndWhenOperator(other, this));
    };
    Stream.prototype.fold = function(accumulate, seed) {
      return new MemoryStream(new FoldOperator(accumulate, seed, this));
    };
    Stream.prototype.replaceError = function(replace) {
      return new (this.ctor())(new ReplaceErrorOperator(replace, this));
    };
    Stream.prototype.flatten = function() {
      var p = this._prod;
      return new Stream(p instanceof MapOperator && !(p instanceof FilterMapOperator) ? new MapFlattenOperator(p) : new FlattenOperator(this));
    };
    Stream.prototype.compose = function(operator) {
      return operator(this);
    };
    Stream.prototype.remember = function() {
      return new MemoryStream(new RememberOperator(this));
    };
    Stream.prototype.debug = function(labelOrSpy) {
      return new (this.ctor())(new DebugOperator(labelOrSpy, this));
    };
    Stream.prototype.imitate = function(target) {
      if (target instanceof MemoryStream) {
        throw new Error('A MemoryStream was given to imitate(), but it only ' + 'supports a Stream. Read more about this restriction here: ' + 'https://github.com/staltz/xstream#faq');
      }
      this._target = target;
      for (var ils = this._ils,
          N = ils.length,
          i = 0; i < N; i++) {
        target._add(ils[i]);
      }
      this._ils = [];
    };
    Stream.prototype.shamefullySendNext = function(value) {
      this._n(value);
    };
    Stream.prototype.shamefullySendError = function(error) {
      this._e(error);
    };
    Stream.prototype.shamefullySendComplete = function() {
      this._c();
    };
    Stream.prototype.setDebugListener = function(listener) {
      if (!listener) {
        this._d = false;
        this._dl = NO;
      } else {
        this._d = true;
        listener._n = listener.next;
        listener._e = listener.error;
        listener._c = listener.complete;
        this._dl = listener;
      }
    };
    Stream.merge = function merge() {
      var streams = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        streams[_i - 0] = arguments[_i];
      }
      return new Stream(new MergeProducer(streams));
    };
    Stream.combine = function combine() {
      var streams = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        streams[_i - 0] = arguments[_i];
      }
      return new Stream(new CombineProducer(streams));
    };
    return Stream;
  }());
  exports.Stream = Stream;
  var MemoryStream = (function(_super) {
    __extends(MemoryStream, _super);
    function MemoryStream(producer) {
      _super.call(this, producer);
      this._has = false;
    }
    MemoryStream.prototype._n = function(x) {
      this._v = x;
      this._has = true;
      _super.prototype._n.call(this, x);
    };
    MemoryStream.prototype._add = function(il) {
      if (this._has) {
        il._n(this._v);
      }
      _super.prototype._add.call(this, il);
    };
    MemoryStream.prototype._stopNow = function() {
      this._has = false;
      _super.prototype._stopNow.call(this);
    };
    MemoryStream.prototype._x = function() {
      this._has = false;
      _super.prototype._x.call(this);
    };
    MemoryStream.prototype.map = function(project) {
      return this._map(project);
    };
    MemoryStream.prototype.mapTo = function(projectedValue) {
      return _super.prototype.mapTo.call(this, projectedValue);
    };
    MemoryStream.prototype.take = function(amount) {
      return _super.prototype.take.call(this, amount);
    };
    MemoryStream.prototype.endWhen = function(other) {
      return _super.prototype.endWhen.call(this, other);
    };
    MemoryStream.prototype.replaceError = function(replace) {
      return _super.prototype.replaceError.call(this, replace);
    };
    MemoryStream.prototype.remember = function() {
      return this;
    };
    MemoryStream.prototype.debug = function(labelOrSpy) {
      return _super.prototype.debug.call(this, labelOrSpy);
    };
    return MemoryStream;
  }(Stream));
  exports.MemoryStream = MemoryStream;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.default = Stream;
  return module.exports;
});

$__System.registerDynamic("@system-env", [], false, function() {
  return {
    "production": true,
    "browser": true,
    "node": false,
    "dev": false,
    "default": true
  };
});

$__System.registerDynamic("2a", ["@system-env"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var productionEnv = $__require('@system-env').production;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue, 0);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {NODE_ENV: productionEnv ? 'production' : 'development'};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  return module.exports;
});

$__System.registerDynamic("55", ["51", "2a"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("2a");
  var define,
      global = this || self,
      GLOBAL = global;
  var core_1 = $__require('51');
  var FSInner = (function() {
    function FSInner(out, op) {
      this.out = out;
      this.op = op;
    }
    FSInner.prototype._n = function(t) {
      this.out._n(t);
    };
    FSInner.prototype._e = function(err) {
      this.out._e(err);
    };
    FSInner.prototype._c = function() {
      this.op.less();
    };
    return FSInner;
  }());
  var FlattenSeqOperator = (function() {
    function FlattenSeqOperator(ins) {
      this.ins = ins;
      this.type = 'flattenSequentially';
      this.open = true;
      this.active = false;
      this.seq = [];
      this.out = null;
    }
    FlattenSeqOperator.prototype._start = function(out) {
      this.out = out;
      this.ins._add(this);
    };
    FlattenSeqOperator.prototype._stop = function() {
      this.ins._remove(this);
      this.open = true;
      this.active = false;
      this.seq = [];
      this.out = null;
    };
    FlattenSeqOperator.prototype.less = function() {
      this.active = false;
      var seq = this.seq;
      if (seq.length > 0) {
        this._n(seq.shift());
      }
      if (!this.open && !this.active) {
        this.out._c();
      }
    };
    FlattenSeqOperator.prototype._n = function(s) {
      var u = this.out;
      if (!u)
        return;
      if (this.active) {
        this.seq.push(s);
      } else {
        this.active = true;
        s._add(new FSInner(u, this));
      }
    };
    FlattenSeqOperator.prototype._e = function(err) {
      var u = this.out;
      if (!u)
        return;
      u._e(err);
    };
    FlattenSeqOperator.prototype._c = function() {
      var u = this.out;
      if (!u)
        return;
      this.open = false;
      if (this.seq.length === 0) {
        u._c();
      }
    };
    return FlattenSeqOperator;
  }());
  exports.FlattenSeqOperator = FlattenSeqOperator;
  function flattenSequentially(ins) {
    return new core_1.Stream(new FlattenSeqOperator(ins));
  }
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.default = flattenSequentially;
  return module.exports;
});

$__System.register('1', ['50', '52', '53', '54', '55', '4f'], function (_export, _context) {
  "use strict";

  var ethutil, xs, _, RecursiveIterator, AstWalker, flattenSequentially, _classCallCheck, _createClass, MainWeb3Source, StorageRx, varUtil, BN$1, decoder, contractsUtil, BN, ABIrx, _slicedToArray, Web3Rx, web3RxExport;

  //import evm from 'ethereumjs-vm';
  //import {getTxSummary} from './get-tx-summary.js';


  function getTxByHash(tx_hash) {
    //const tx_hash = "0x38695d4cf020b49a2f8bec60484f0c333199ee77750941e1c39f73cae36ce5ae";
    var req_obj = {
      jsonrpc: "2.0",
      method: "eth_getTransactionByHash",
      params: [tx_hash],
      id: 11 // what id to use here?
    };

    var fetch_prom = function fetch_prom() {
      var prom_res = fetch('http://localhost:8545/', {
        method: 'POST',
        body: JSON.stringify(req_obj)
      }).then(function (response) {
        return response.json();
      });
      return prom_res;
    };

    var res$ = xs.fromPromise(fetch_prom()).map(function (res) {
      console.log('getTxByHash xs map res:', res);
      return res;
    });

    return res$;
  }

  function makeSockDriver(ws_address) {
    // makeSockDriver sets up the websocket connection.
    console.log('makeSockDriver ws_address:', ws_address);
    var sock = null;
    if (typeof ws_address === 'string') {
      sock = new WebSocket(ws_address);
    }

    function sockDriver(outgoing$) {
      // outgoing$ is the driver sink
      // it is used for sending outgoing messages to web3
      //  e.g. send tx, create contract, call contract method, etc.

      sock.onopen = function () {
        console.log('socket onopen.');
        if (outgoing$) {
          outgoing$.addListener({
            next: function next(outgoing) {
              console.log('sending msg outgoing. outgoing:', outgoing);
              sock.send(outgoing);
            },
            error: function error() {},
            complete: function complete() {}
          });
        }
      };

      var root_incoming$ = xs.create({
        start: function start(listener) {
          console.log('root sock listener created.');
          sock.onmessage = function (msg) {
            console.log('received message on root socket. msg:', msg);
            listener.next(msg);
          };
        },
        stop: function stop() {}
      });

      // MainWeb3Source sets up the web3 subscriptions over the socket
      // default blank namespace []
      var root_namespace = [];
      return new MainWeb3Source(sock, outgoing$, root_incoming$, root_namespace);
    }

    return sockDriver;
  }

  /*
  // ***************
  // this depends on an eth_getStorageObject rpc method.
  // the eth_getStorageObject method has been implemented in a geth patch
  // see fork at cdetrio/go-ethereum (geth-rx branch)
  
  the eth_getStorageObject rpc method should return a storage object like this:
  storage_obj: {
    '0x3fb53154734cd18f56721d3b645a64a067eb5a39bc23fa814836a6948b08e2a6': '0x6e756d2032207461736b20746f646f000000000000000000000000000000001e',
    '0x3fb53154734cd18f56721d3b645a64a067eb5a39bc23fa814836a6948b08e2a7': '0x00000000000000000000006430701987fdd4efb01d9aeeab7d2c8cae1807ba00',
    '0x3fb53154734cd18f56721d3b645a64a067eb5a39bc23fa814836a6948b08e2a8': '0x354ce76e567f2233bd45002c3b495238d12f475a76802d9cdca0d2a209908441',
    '0xd8b6389e4f29bb956579f3a5beffce11e08ad93a78f9cfa5737403ff9e2fa32a': '0x666972737420636f6e6372657465207461736b20746f646f0000000000000030',
    '0xd8b6389e4f29bb956579f3a5beffce11e08ad93a78f9cfa5737403ff9e2fa32b': '0x00000000000000000000006430701987fdd4efb01d9aeeab7d2c8cae1807ba00',
    '0xd8b6389e4f29bb956579f3a5beffce11e08ad93a78f9cfa5737403ff9e2fa32c': '0x4186c2ed2f75849d809eec9f94ef1faffc89fadfe26b1c405aeee1bdfc73f963' }
  
  storageRx transforms storage_obj, adding a 'confirmations' property to each storage key, like this:
  storageObservable.storageObject: {
    '0x3fb53154734cd18f56721d3b645a64a067eb5a39bc23fa814836a6948b08e2a6':
      {'value': '0x6e756d2032207461736b20746f646f000000000000000000000000000000001e', 'confirmations': '6'},
    '0x3fb53154734cd18f56721d3b645a64a067eb5a39bc23fa814836a6948b08e2a7':
      {'value': 0x00000000000000000000006430701987fdd4efb01d9aeeab7d2c8cae1807ba00', 'confirmations': '7'},
      ...
  }
  
  // TODO: use better schema / object structure for tracking confirmations (one that doesn't interfere with the storage decoder)
  */

  function incrementConfirmations(storage, add_confirms) {
    var storage_obj = storage.storageObject;
    _.each(storage_obj, function (value, key) {
      if (storage_obj[key].confirmations === 0) {
        storage_obj[key].confirmations = 1; // confirm after pending
      } else {
        storage_obj[key].confirmations = storage_obj[key].confirmations + add_confirms;
      }
    });
    storage.storageObject = storage_obj;
    return storage;
  }

  function findChanges(prev_storage, new_storage, add_confirms) {
    //console.log('findChanges prev_storage:', printObj(prev_storage));
    //console.log('findChanges new_storage:', printObj(new_storage));
    var prev_storage_obj = prev_storage.storageObject;
    var new_storage_obj = new_storage.storageObject;
    var storageObservable = {};
    _.each(new_storage_obj, function (value, key) {
      if (_.isUndefined(prev_storage_obj[key]) || prev_storage_obj[key]['value'] !== new_storage_obj[key]) {
        //if (prev_storage_obj[key]['value'] !== new_storage_obj[key]) {
        // for keys which changed or are new, set confirmations to 0 (pending) or 1 (new block)
        storageObservable[key] = {};
        storageObservable[key]['value'] = new_storage_obj[key];
        storageObservable[key]['confirmations'] = add_confirms;
      } else {
        // increment confirmations for keys which stayed the same
        storageObservable[key] = prev_storage_obj[key];
        storageObservable[key]['confirmations'] = prev_storage_obj[key]['confirmations'] + add_confirms;
      }
    });

    new_storage.storageObject = storageObservable;
    return new_storage;
  }

  function initStorageTracking(storage) {
    var storage_obj = storage.storageObject;
    var storage_tracking = {};
    _.each(storage_obj, function (value, key) {
      if (_.has(storage_obj[key], 'value') == false) {
        // key is newly added, i.e. pending
        storage_tracking[key] = {};
        //storage_tracking[key]['value'] = value;
        storage_tracking[key]['value'] = storage_obj[key];
        storage_tracking[key]['confirmations'] = 1;
      } else {
        storage_tracking[key] = storage_obj[key];
      }
    });

    storage.storageObject = storage_tracking;
    return storage;
  }

  // code from https://github.com/ethereum/remix/pull/104

  //var value = getValue(type, storageContent, location)
  function getConfirmations(type, storageContent, location) {
    var hexSlot;
    if (!isNaN(location.slot)) {
      hexSlot = location.slot.toString(16);
    } else {
      hexSlot = location.slot;
    }
    //console.log('hexSlot before formatHexKey:', hexSlot);
    hexSlot = formatHexKey(hexSlot);
    //console.log('hexSlot after formatHexKey:', hexSlot);
    var slotConfirmations = '';
    try {
      slotConfirmations = storageContent[hexSlot]['confirmations'];
    } catch (err) {
      console.log('storageContent key has no confirmations property. err:', err);
    }
    //var slotConfirmations = storageContent[hexSlot]['confirmations']
    //var slotValue = storageContent[hexSlot]['value']
    //slotValue['confirmations']
    //console.log('slotValue:', slotValue);
    /*
    if (!slotConfirmations) {
      return ''
    }
    */
    return slotConfirmations;
  }

  function getValue(type, storageContent, location) {
    console.log('getValue location:', location);
    var hexSlot;
    if (!isNaN(location.slot)) {
      hexSlot = location.slot.toString(16);
    } else {
      hexSlot = location.slot;
    }
    //console.log('hexSlot before formatHexKey:', hexSlot);
    hexSlot = formatHexKey(hexSlot);
    //console.log('hexSlot after formatHexKey:', hexSlot);
    //var slotValue = storageContent[hexSlot]
    console.log('storageContent:', storageContent);
    console.log('storageContent[hexSlot]:', storageContent[hexSlot]);
    var slotValue = '';
    try {
      slotValue = storageContent[hexSlot]['value'];
    } catch (err) {
      console.log('storageContent key has no value property. err:', err);
    }
    return slotValue;
  }

  function extractValue(slotValue, type, location) {
    //console.log('extractValue type:', type);
    slotValue = slotValue.replace('0x', '');
    // is offset in bytes, or in hex chars?
    var offset = slotValue.length - location.offset - type.memSize;
    //console.log('extractValue offset:', offset);
    if (offset >= 0) {
      return '0x' + slotValue.substr(offset, type.memSize);
    } else if (offset + type.memSize > 0) {
      return '0x' + slotValue.substr(0, type.memSize + offset);
    } else {
      return '0x0';
    }
  }

  function formatHexKey(hexSlot) {
    hexSlot = hexSlot.replace('0x', '');
    hexSlot = hexSlot.length > 1 ? hexSlot : '0' + hexSlot;
    hexSlot = '0x' + hexSlot;
    return hexSlot;
  }

  function getDynamicPointer(location) {
    var remoteSlot = new BN$1(location.slot).toString(16);
    remoteSlot = formatHexKey(remoteSlot);
    var key = ethutil.sha3(ethutil.setLengthLeft(remoteSlot, 32));
    return ethutil.bufferToHex(key);
  }

  function add(value1, value2) {
    return toBN(value1).add(toBN(value2));
  }

  function toBN(value) {
    if (value instanceof BN$1) {
      return value;
    } else if (value.indexOf && value.indexOf('0x') === 0) {
      value = new BN$1(value.replace('Ox', ''), 16);
    } else if (!isNaN(value)) {
      value = new BN$1(value);
    }
    return value;
  }

  function moveNextArray(location) {
    return {
      offset: 0,
      slot: location.slot + 1
    };
  }

  function moveNextItemInArray(type, location) {
    if (type.size === 'dynamic' || location.offset + type.memSize >= 64) {
      location.offset = 0;
      location.slot = add(location.slot, 1);
    } else if (type.isStruct) {
      location.offset = 0;
      location.slot = add(location.slot, type.membersSlotsUsed);
    } else {
      location.offset = location.offset + type.memSize;
    }
    return location;
  }

  function isNegative(value) {
    var binary = value.toString(2);
    return binary.length < 4 ? false : binary[0] === '1';
  }

  // code from https://github.com/ethereum/remix/pull/104

  function parseMappingKeyNames(ast) {
    var mapKeys = [];

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = new RecursiveIterator(ast)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        if (item.node) {
          if (item.node.name == "IndexAccess") {
            var map_key = {};
            map_key['mapping_name'] = item.node.children[0].attributes.value;
            map_key['key_name'] = item.node.children[1].attributes.value;
            // key_name may be a constant literal, or a solidity variable name

            // key_name may appear in multiple AST nodes. don't need duplicates..
            if (_.some(mapKeys, map_key) == false) {
              mapKeys.push(map_key);
            }
            // if the same key_name is used in multiple places (i.e. same key
            // name is used in different contract methods), we do want to pluck
            // it everywhere it appears. findMappingKeyBreakpoints will pluck it everywhere
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return mapKeys;
  }

  function findBreakpointsFromKeyNames(mapping_key_names, formatted_asm) {

    var map_key_pcs = mapping_key_names.map(function (mapKey) {
      var key_pcs = findMappingKeyBreakpoints(formatted_asm, mapKey['key_name']);
      var key = {
        'mappingName': mapKey['mapping_name'],
        'keyName': mapKey['key_name'],
        'keyPCs': key_pcs
      };
      return key;
    });
    console.log('mappings, keys, and their breakpoints:', map_key_pcs);
    /*
    map_key_pcs: [ { mappingName: 'TaskList',
        keyName: 'id',
        keyPCs: [ 627, 898, 910 ] },
      { mappingName: 'TaskList',
        keyName: '_id',
        keyPCs: [ 361, 933, 991 ] } ]
    */

    var mapkey_pcs = _.groupBy(map_key_pcs, function (mkpc) {
      return mkpc.mappingName;
    });
    /*
    grouped mapkey_pcs: { TaskList:
       [ { mappingName: 'TaskList', keyName: 'id', keyPCs: [Object] },
         { mappingName: 'TaskList', keyName: '_id', keyPCs: [Object] } ] }
    */

    // we don't care about the keyNames anymore, we only used them to get the PCs
    // so collapse the groups, we'll just have a mapping's name its PCs
    var mapping_pcs = [];
    _.forEach(mapkey_pcs, function (mkpcs, mappingName) {
      var mapping = {};
      mapping.mappingName = mappingName;
      mapping.keyPCs = mkpcs.reduce(function (memo, pcs) {
        return memo.concat(pcs.keyPCs);
      }, []);
      mapping_pcs.push(mapping);
    });

    return mapping_pcs;
  }

  // use solidity source mappings (tagged assembly) to find the program counters
  // (PCs, i.e. breakpoints) at which we can pluck a mapping key from the stack
  function findMappingKeyBreakpoints(asm, map_key) {
    var key_asm_lines = _.filter(asm, function (o) {
      return o[2] == map_key;
    });
    console.log('filter key_asm_lines:', key_asm_lines);
    //filter key_asm_lines: [ [ 627, 'DUP4 ', 'id' ], [ 898, 'DUP2 ', 'id' ], [ 910, 'DUP2 ', 'id' ] ]

    // mapping keys tend to be found at a DUP opcode
    // it is easier pluck at DUP pc + 1 (eg. 109 + 1 = 110) because
    // on the op after the DUP, the value is at the top of the stack

    var pluck_pcs = key_asm_lines.map(function (key_pc) {
      return key_pc[0] + 1;
    });
    return pluck_pcs;
  }

  // 'fullDeployment' param returns the asm of the deployment tx
  // deployment tx includes the bytecode of the constract constructor

  // 'runtimeOnly' param returns the asm of the deployed code
  // (does not include the contract constructor bytecode)

  // prepareContractAsm returns the EVM assembly code with PC (program counter) at
  // each opcode, and also its solidity source mapping
  function prepareContractAsm(asm_obj, full_or_runtime) {
    var constructor_asm = asm_obj['.code']; // fullDeployment asm
    var runtime_asm = asm_obj['.data'][0]['.code']; // runtimeOnly asm

    var constructor_instruction_size = getConstructorInstructionSize(constructor_asm);
    var constructor_instruction_size_bytes = Number(constructor_instruction_size).toString(16);
    // constructor_instruction_size is the size (in bytes) of the constructor
    // instructions. it is smaller than total_constructor_size_bytes (the size of
    // the constructor bytecode in the actual deployment tx), because
    // total_constructor_size_bytes includes additional bytes that specify the
    // runtime size and the constructor size.
    var runtime_size = getRuntimeSize(runtime_asm);
    var runtime_size_bytes = Number(runtime_size).toString(16);
    var runtime_size_holder = Math.ceil(runtime_size_bytes.length / 2);

    // runtime size and constructor size are values within the constructor bytecode
    // the constructor is executed in the deployment tx, and these values are used
    // as offsets where the EVM finds the start and end of the runtime bytecode
    // (the runtime bytecode is what is actually deployed to the contract address)
    // the runtime bytecode starts where the constructor bytecode ends (i.e. at
    // the offset total_constructor_size_bytes), and the runtime bytecode ends
    // at (total_constructor_size_bytes + runtime size).
    //          deployment bytecode:  [constructor bytecode][runtime bytecode]
    // total_constructor_size_bytes:  |____________________|
    //           runtime_size_bytes:                        |________________|

    var constructor_size_holder = 1 + 1; // '00' + '8f'
    // total_constructor_size_bytes was '8f'. not sure why the extra 00 was in the deployment tx bytecode?
    var total_constructor_size_bytes = Number(constructor_instruction_size + runtime_size_holder + constructor_size_holder).toString(16);

    var asm_code = runtime_asm;
    if (full_or_runtime === 'fullDeployment') {
      // option to include constructor asm. useful for plucking mapping keys
      // set in contract constructor (i.e. in the deployment tx)
      asm_code = constructor_asm.concat(runtime_asm);
    }
    if (full_or_runtime === 'runtimeOnly') {
      // only pluck keys set in contract methods. sufficient to find keys in any
      // tx other than the deployment tx
      asm_code = runtime_asm;
    }

    var pc = 0;
    var formatted_asm = asm_code.filter(function (op) {
      return op.name !== 'tag';
    }).map(function (op) {
      var op_pc = pc;
      var op_val = '';
      pc = pc + 1;
      if (op.name == "PUSH #[$]") {
        // need runtime size.
        op_val = runtime_size_bytes;
        pc = pc + Math.ceil(op_val.length / 2);
      } else if (op.name == "PUSH [$]") {
        // need the constructor size
        op_val = '00' + total_constructor_size_bytes; // not sure why the extra 00 in the deployment tx bytecode??
        pc = pc + Math.ceil(op_val.length / 2);
      } else if (op.name == "PUSH [tag]") {
        pc = pc + 2;
      } else if (op.value) {
        op_val = op.value;
        pc = pc + Math.ceil(op.value.length / 2);
      }

      return [op_pc, op.name + ' ' + op_val, op.source];
    });

    return formatted_asm;
  }

  function getConstructorInstructionSize(constructor_asm) {

    return constructor_asm.filter(function (op) {
      return op.name !== 'tag';
    }).reduce(function (memo, op) {
      var pc = 1;
      var op_val = '';
      // the contract constructor bytecode includes both the constructor size, and
      // the runtime size. these values aren't provided in solc's asm output, but
      // they are there in the bytecode of the deployment tx. since we are only
      // working from the asm, we don't have them yet (but will account for them later)
      if (op.name == "PUSH [$]") {
        // op.value here will be the constructor size
      } else if (op.name == "PUSH #[$]") {
        // when executed, op.value here will be the runtime size.
      } else if (op.value) {
        op_val = op.value;
        pc = pc + Math.ceil(op.value.length / 2);
      }

      //return [pc, op.name + ' ' + op_val, op.source];
      return pc + memo;
    }, 0);
  }

  function getRuntimeSize(runtime_asm) {
    return runtime_asm.filter(function (op) {
      return op.name !== 'tag';
    }).reduce(function (memo, op) {
      var pc = 1; // instruction is the first byte
      if (op.value) {
        pc = pc + Math.ceil(op.value.length / 2);
      }
      return pc + memo;
    }, 0);
  }

  // TODO: fix mapping storage offset calculation
  // problem with contracts.js and astWalker.js calculation of mapping storage offsets
  //
  // the mapping_abirx.storageOffset (from patched solc) for the TaskList
  // mapping is 3, but incorrect because the itemTask struct (declared right
  // before TaskList) doesn't have members that are actually set in storage.
  // the correct storageOffset for TaskList is 0
  // if the struct was set in storage (and not just declared), then 3 would be correct
  //
  // note that storageLocations calculated by contracts.js/astWalker.js is also incorrect
  // it calculates slot 1, but correct is 0.


  // TODO: fix `itemTask` workaround.
  // we need to get the "type" object of the Task struct, but varUtil.getType()
  // doesn't work on a StructDefinition, and it also doesn't work on the TaskList
  // mapping. for now we've declared a Task struct dummy variable `itemTask` in
  // the todos-struct.sol code, solely so we can use varUtil.getType() to get
  // the type object for our Task struct.

  //const STATE_DECLARATIONS = contractsUtil.getStateDefinition(contractSolcObj.sources, CONTRACT_NAME);
  //console.log('STATE_DECLARATIONS:', STATE_DECLARATIONS);
  /* STATE_DECLARATIONS:
  [ { attributes: { name: 'Task' },
      children: [ [Object], [Object], [Object], [Object] ],
      id: 140468288501336,
      name: 'StructDefinition',
      src: '22:108:0' },
    { attributes: { name: 'itemTask', type: 'struct Task storage ref' },
      children: [ [Object] ],
      id: 140468287447976,
      name: 'VariableDeclaration',
      src: '136:13:0' },
    { attributes:
       { name: 'TaskList',
         type: 'mapping(bytes32 => struct Task storage ref)' },
      children: [ [Object] ],
      id: 140468287448504,
      name: 'VariableDeclaration',
      src: '156:33:0' },
    { attributes: { constant: false, name: 'addTask', public: true },
      children: [ [Object], [Object], [Object] ],
      id: 140468287449816,
      name: 'FunctionDefinition',
      src: '196:282:0' },
    { attributes: { constant: false, name: 'setTaskCompleted', public: true },
      children: [ [Object], [Object], [Object] ],
      id: 140468287451816,
      name: 'FunctionDefinition',
      src: '484:122:0' },
    { attributes: { constant: false, name: 'editTaskTitle', public: true },
      children: [ [Object], [Object], [Object] ],
      id: 140468287453880,
      name: 'FunctionDefinition',
      src: '612:103:0' },
    { attributes: { constant: false, name: 'deleteTask', public: true },
      children: [ [Object], [Object], [Object] ],
      id: 140468287455240,
      name: 'FunctionDefinition',
      src: '721:70:0' } ]
  */

  // TODO: generalize struct_type.
  // for now STRUCT_TYPE is hardcoded for Task struct in todos-struct.sol
  //const STRUCT_TYPE = varUtil.getType(STATE_DECLARATIONS[1], STATE_DECLARATIONS);
  //console.log('struct_type:', struct_type);
  /*
  struct_type: { originalType: 'struct Task storage ref',
    innerType: 'struct Task',
    size: 'unapplicable',
    memSize: 'unapplicable',
    dim: [],
    members:
     [ { name: 'title', type: [Object], location: [Object] },
       { name: 'completed', type: [Object], location: [Object] },
       { name: 'owner', type: [Object], location: [Object] },
       { name: 'id', type: [Object], location: [Object] } ],
    slotsUsed: 1,
    membersSlotsUsed: 3,
    isStruct: true }
  */
  //console.log('struct_type.members:', struct_type.members);
  /*
  struct_type.members: [ { name: 'title',
      type:
       { originalType: 'string storage pointer',
         innerType: 'string',
         size: 'dynamic',
         memSize: 'dynamic',
         dim: [],
         slotsUsed: 1 },
      location: { slot: 0, offset: 0 } },
    { name: 'completed',
      type:
       { originalType: 'bool',
         innerType: 'bool',
         size: 8,
         memSize: 2,
         dim: [],
         slotsUsed: 1 },
      location: { slot: 1, offset: 0 } },
    { name: 'owner',
      type:
       { originalType: 'address',
         innerType: 'address',
         size: 160,
         memSize: 40,
         dim: [],
         slotsUsed: 1 },
      location: { slot: 1, offset: 2 } },
    { name: 'id',
      type:
       { originalType: 'bytes32',
         innerType: 'bytes',
         size: 256,
         memSize: 64,
         dim: [],
         isBytes: true,
         slotsUsed: 1 },
      location: { slot: 2, offset: 0 } } ]
  */

  function requestPluckTrace(tx_hash, mapping_pcs, rpc_url) {
    console.log('requestPluckTrace called.');

    var pc_conditionals = mapping_pcs['keyPCs'].map(function (key_pc) {
      return '(log.pc == ' + key_pc + ')';
    });
    var pc_conditional_expr = pc_conditionals.join(" || ");
    //pc_conditional_expr: (log.pc == 628) || (log.pc == 899) || (log.pc == 911) || (log.pc == 362) || (log.pc == 934) || (log.pc == 992)

    var req_obj = {
      jsonrpc: '2.0',
      method: 'debug_traceTransaction',
      params: [tx_hash, { "tracer": '{data: [], step: function(log) { if (' + pc_conditional_expr + ') this.data.push(log.stack.peek(0).Text(16)) }, result: function() { return this.data; }}'
      }],
      id: 1
    };

    var fetch_prom = function fetch_prom() {
      console.log('fetch_prom called.');
      var prom_res = fetch(rpc_url, {
        method: 'POST',
        body: JSON.stringify(req_obj)
      }).then(function (response) {
        return response.json();
      });
      return prom_res;
    };

    var res$ = xs.fromPromise(fetch_prom()).map(function (res) {
      console.log('requestPluckTrace xs map res:', res);
      return _.uniq(res.result);
    });

    return res$;
  }

  function concatTypedArrays(a, b) {
    // a, b TypedArray of same type
    var c = new a.constructor(a.length + b.length);
    c.set(a, 0);
    c.set(b, a.length);
    return c;
  }

  function pluckMappingKeys(txList$, mapping_pcs, rpc_url) {
    console.log('pluckMappingKeys called with txList$:', txList$);

    var plucked_keys$ = txList$.map(function (tx) {
      console.log('calling requestPluckTrace tx:', tx, new Date().toISOString());
      return requestPluckTrace(tx, mapping_pcs, rpc_url);
    }).compose(flattenSequentially); // returns an array of plucked keys

    var keysSeed = [];
    var keys$ = plucked_keys$.fold(function (prev_keys, new_keys) {
      // accumulate keys plucked from all transactions
      return prev_keys.concat(new_keys);
    }, keysSeed);
    //.drop(1) // drop seed

    return keys$;
  }

  function convertKeysToStorageLocations(mapping_keys_arr, mapping_storage_offset) {

    var mapping_key_p = ethutil.intToBuffer(mapping_storage_offset);
    mapping_key_p = ethutil.setLengthLeft(mapping_key_p, 32);

    var mapping_storage_locations = mapping_keys_arr.map(function (mapping_key_k) {
      var key_k = ethutil.toBuffer('0x' + mapping_key_k);
      key_k = ethutil.setLengthLeft(key_k, 32);

      // mapping storage location decribed http://solidity.readthedocs.io/en/develop/miscellaneous.html#layout-of-state-variables-in-storage
      // > the value corresponding to a mapping key k is located at keccak256(k . p) where . is concatenation.

      var mapping_key_buf = concatTypedArrays(key_k, mapping_key_p);
      var mapping_key_preimage = '0x' + mapping_key_buf.toString('hex');
      var storage_key = ethutil.sha3(mapping_key_preimage);
      storage_key = ethutil.bufferToHex(storage_key);
      //console.log('mapping storage_key:', storage_key);
      return storage_key;
    });

    return mapping_storage_locations;
  }

  //console.log('StorageRx:', StorageRx);
  //const storageRx = new StorageRx(WEB3_RPC, WEB3_WEBSOCKET);


  return {
    setters: [function (_2) {
      xs = _2.default;
    }, function (_3) {
      _ = _3.default;
    }, function (_4) {
      RecursiveIterator = _4.default;
    }, function (_5) {
      AstWalker = _5.default;
    }, function (_6) {
      flattenSequentially = _6.default;
    }, function (_f) {
      ethutil = _f.default;
    }],
    execute: function () {
      _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      MainWeb3Source = function () {
        function MainWeb3Source(sock, outgoing$, root_incoming$, namespace) {
          _classCallCheck(this, MainWeb3Source);

          this._sock = sock;
          this._outgoing$ = outgoing$;
          this._root_incoming$ = root_incoming$;
          this._namespace = namespace;
          this._subscription_id = null; // jsonrpc id, to match messages with subscriptions
          console.log('MainWeb3Source constructor sock:', sock);
        }

        _createClass(MainWeb3Source, [{
          key: "getSubscriptionId",
          value: function getSubscriptionId() {
            return this._subscription_id;
          }
        }, {
          key: "select",
          value: function select(selector) {
            var child_namespace = this._namespace.concat(selector);

            return new MainWeb3Source(this._sock, this._outgoing$, this._root_incoming$, child_namespace);
          }
        }, {
          key: "events",
          value: function events(event_type) {
            var self = this;
            var parent_namespace = this._namespace.slice(-1)[0];
            console.log('MainWeb3Source events parent_namespace:', parent_namespace);

            var NEW_BLOCK_SUB_ID = 1;
            var PENDING_TX_ID = 2;
            //const newBlockSubscription = JSON.stringify({"id": NEW_BLOCK_SUB_ID, "method": "eth_subscribe", "params": ["newBlocks", {}]});
            var newBlockSubscription = JSON.stringify({ "id": NEW_BLOCK_SUB_ID, "method": "eth_subscribe", "params": ["newHeads", {}] });
            var pendingTxSubscription = JSON.stringify({ "id": PENDING_TX_ID, "method": "eth_subscribe", "params": ["newPendingTransactions", {}] });

            function createEventSubscription(sub_id) {
              var subscription_watch_listener = {};
              subscription_watch_listener = {
                next: function next(msg) {
                  /*
                  if (data === undefined) {
                    console.log('subscription_watch_listener received data undefined.');
                    return;
                  }
                  */
                  console.log('The root Stream gave me msg:', msg);
                  var data = JSON.parse(msg.data);
                  if (data.id === sub_id) {
                    console.log('got eth_subscription. setting self._subscription_id');
                    self._subscription_id = data.result;
                    // removeListener will stop the stream producer
                    self._root_incoming$.removeListener(subscription_watch_listener);
                  }
                },
                error: function error(err) {
                  console.error('The root Stream gave me an error: ', err);
                },
                complete: function complete() {
                  console.log('The root Stream told me it is done.');
                }
              };

              self._root_incoming$.addListener(subscription_watch_listener);
            }

            if (parent_namespace === "blocks" && event_type === "new") {
              console.log('subscribing to new blocks.');

              // not sure whether to send messages using sock or $outgoing
              // must delay or else will send before sock has received onopen
              setTimeout(function () {
                self._sock.send(newBlockSubscription);
              }, 500);

              createEventSubscription(NEW_BLOCK_SUB_ID);

              var newBlockEvent$ = self._root_incoming$.map(function (msg) {
                return JSON.parse(msg.data);
              }).filter(function (data) {
                return data.method === "eth_subscription";
              })
              //.filter(self.getSubscriptionId() !== null)
              //.debug()
              .filter(function (data) {
                return data.params;
              }).filter(function (data) {
                return data.params.subscription === self.getSubscriptionId();
              }).map(function (data) {
                return data.params.result;
              });

              return newBlockEvent$;
            }

            if (parent_namespace === "txs" && event_type == "pending") {
              setTimeout(function () {
                self._sock.send(pendingTxSubscription);
              }, 500);

              createEventSubscription(PENDING_TX_ID);

              var pendingTxHash$ = self._root_incoming$.map(function (msg) {
                return JSON.parse(msg.data);
              }).filter(function (data) {
                return data.method === "eth_subscription";
              })
              //.filter(self.getSubscriptionId() !== null)
              .debug() // debug seems to prevent a problem with data.params being undefined
              .filter(function (data) {
                return data.params;
              }).filter(function (data) {
                return data.params.subscription === self.getSubscriptionId();
              }).map(function (data) {
                return data.params.result;
              });
              // here we do tx specific logic
              // instead of returning just the tx hash, we do getTransaction(hash)
              // and return that result
              // tx_hash = data.params.result
              //let txDetails$ = getTxByHash(tx_hash);
              // xs.fromPromise()
              //return pendingTxHash$; // streams only the tx hash

              var pendingTx$ = pendingTxHash$.map(function (txHash) {
                return getTxByHash(txHash); // returns a stream
              }).flatten().map(function (data) {
                var tx = data.result;
                // if tx.to is null, then its a create contract tx (confirm?)
                // should be able to get pending contract deployment address
                console.log('pendingTx$ getTxByHash tx after flatten:', tx);

                //console.log('getting tx summary.');
                //return getTxSummary(tx.hash) then flatten

                return tx;
              });

              return pendingTx$;
            }

            return this._root_incoming$;
          }
        }]);

        return MainWeb3Source;
      }();

      StorageRx = function () {
        function StorageRx(rpc_url, ws_url) {
          _classCallCheck(this, StorageRx);

          console.log('storageRx constructor.');
          this._ws_url = ws_url;
          this.RPC_URL = rpc_url;

          this._wsDriver = makeSockDriver(ws_url)();
          console.log('wsDriver:', this._wsDriver);

          this.NewHeads$ = this._wsDriver.select('blocks').events('new');
          this.PendingTx$ = this._wsDriver.select('txs').events('pending');
        }

        _createClass(StorageRx, [{
          key: 'getStorageObject',
          value: function getStorageObject(contract_address, block_num) {
            var self = this;

            var req_obj = {
              jsonrpc: "2.0",
              method: "eth_getStorageObject",
              params: [contract_address, block_num],
              id: 11 // use better id?
            };

            var fetch_prom = function fetch_prom() {
              var prom_res = fetch(self.RPC_URL, {
                method: 'POST',
                body: JSON.stringify(req_obj)
              }).then(function (response) {
                return response.json();
              });
              return prom_res;
            };

            var res$ = xs.fromPromise(fetch_prom()).map(function (res) {
              console.log('getStorageObject xs map res:', res);
              return res.result;
            });

            return res$;
          }
        }, {
          key: 'watch',
          value: function watch(contract_address) {
            console.log('storageRx watching contract address:', contract_address);
            var self = this;

            var newHeadStorage$ = self.NewHeads$.map(function (block) {
              var head_num = ethutil.toBuffer(block.number);
              return self.getStorageObject(contract_address, ethutil.bufferToInt(head_num)); // returns a stream
            }).flatten();

            var newPendingStorage$ = self.PendingTx$.map(function (pendingTx) {
              console.log('got pendingTx:', pendingTx);
              return pendingTx;
            }).filter(function (pendingTx) {
              return pendingTx.to === contract_address;
            }).map(function (pendingTx) {
              // pending storage should reflect changes from the pending tx
              return self.getStorageObject(contract_address, 'pending');
            }).flatten().map(function (pendingStorage) {
              console.log('got pendingStorage obj:', pendingStorage);
              pendingStorage.blockNumber = -1;
              return pendingStorage;
            });

            var startingStorage$ = self.getStorageObject(contract_address, 'latest');
            var headStorage$ = xs.merge(newHeadStorage$, startingStorage$);
            var storage$ = xs.merge(headStorage$, newPendingStorage$);

            var seedStorageObj = {
              'stateRoot': "0x00",
              'storageObject': {}
            };

            var storageObservable$ = storage$.fold(function (prev_storage, new_storage) {
              //console.log('prev_storage:', printObj(prev_storage));
              //console.log('new_storage:', printObj(new_storage));

              // on a pendingStorage, new_storage.blockNumber = -1?
              var pending = false;
              if (new_storage.blockNumber === -1) {
                pending = true;
              }

              var increment_by = new_storage.blockNumber - prev_storage.blockNumber;

              if (new_storage.stateRoot === prev_storage.stateRoot && pending == false) {
                // nothing changed, increment all confirmations
                var storageObs = incrementConfirmations(prev_storage, increment_by);
                storageObs.blockNumber = new_storage.blockNumber;
                return storageObs;
              } else if (prev_storage.stateRoot == "0x00") {
                //console.log('prev_storage.stateRoot is undefined! initializing');
                // initialization
                return initStorageTracking(_.cloneDeep(new_storage));
              } else {
                // state root is different
                var add_confirms = increment_by;
                if (pending) {
                  //console.log('pending is true.');
                  add_confirms = 0;
                }
                var _storageObs = findChanges(prev_storage, _.cloneDeep(new_storage), add_confirms);
                //console.log('findChanges returned storageObs:', printObj(storageObs));
                _storageObs.stateRoot = new_storage.stateRoot;
                if (pending) _storageObs.blockNumber = prev_storage.blockNumber;
                return _storageObs;
              }

              console.log('Pending tx event, but storage is unchanged. sending prev_storage.');
              return prev_storage;
            }, seedStorageObj).drop(1);

            return storageObservable$;
          } // close watch()


        }]);

        return StorageRx;
      }();

      varUtil = {
        /**
         * return parse the type and return an object representing the type
         *
         * @param {Object} variable - variable declaration given by the AST
         * @param {Object} stateDeclarations  - all state declarations given by the AST (including struct and enum type declaration)
         * @return {Object} - return parsed information about the current variable:
         *                    originalType: long type name given by the AST (ex: int[2] storage ref[2])
         *                    innerType: base type to decode (int, uint, bytes, etc..)
         *                    size: size of the type
         *                    memSize: size in the storage (hex)
         *                    dim: dim > 0 is array. contains the size of underlying array
         *                    slotUsed: number of slot used by the type (always > 0)
         *                    enum: contain enum value declaration for the current type (only for enum type)
         *                    members: contain members variable declaration for the current type (only for struct type)
         *                    isBytes: bool
         *                    isArray: bool
         *                    isStruct: bool
         */
        getType: function getType(variable, stateDeclarations) {
          var ret = {};
          ret.originalType = variable.attributes.type;
          ret.innerType = this.getInnerType(variable);
          ret.size = this.getSize(variable, ret.innerType);
          ret.memSize = isNaN(ret.size) ? ret.size : ret.size / 4;
          ret.dim = [];
          var dimension = this.getDim(variable, ret.innerType);
          if (ret.innerType === 'enum') {
            ret.enum = this.getEnum(variable, stateDeclarations);
          }
          if (ret.innerType === 'bytes') {
            ret.isBytes = true;
          }
          var membersParsing;
          if (ret.innerType.indexOf('struct') === 0) {
            membersParsing = this.getStructMembers(variable, stateDeclarations);
            ret.members = membersParsing.members;
            ret.slotsUsed = membersParsing.slotsUsed;
            ret.membersSlotsUsed = membersParsing.slotsUsed;
            ret.isStruct = true;
          }
          if (dimension.length > 0) {
            // array
            var slotUsed = 0;
            for (var k = 0; k < dimension.length; k++) {
              var arraySize = dimension[k];
              if (arraySize === 'dynamic') {
                slotUsed++;
                break;
              }

              try {
                arraySize = parseInt(arraySize);
                ret.dim.push(arraySize);
              } catch (e) {
                ret.dim.push(arraySize);
              }

              if (ret.members) {
                slotUsed += arraySize * membersParsing.slotsUsed;
              } else {
                var storageSize = isNaN(ret.memSize) ? 64 : ret.memSize;
                slotUsed += Math.ceil(arraySize * storageSize / 64);
              }
            }
            ret.slotsUsed = slotUsed;
            ret.dim.reverse();
            ret.isArray = true;
          } else {
            ret.slotsUsed = 1;
          }
          return ret;
        },

        /**
         * parse the size of the type
         *
         * @param {Object} variable - variable declaration
         * @param {String} innerType - base type
         * @return {Int|String} - return the size of the type
         *                        return 'unapplicable' if the size could not be determmined (struct)
         *                        return 'dynamic' if dynamic size
         */
        getSize: function getSize(variable, innerType) {
          if (innerType.indexOf('struct') === 0) {
            return 'unapplicable';
          }
          var type = variable.attributes.type;
          type = this.extractType(type);
          if (type.indexOf('[') !== -1) {
            type = type.substring(0, type.indexOf('['));
          }
          if (type === 'string' || type === 'bytes') {
            return 'dynamic';
          } else if (type === 'bool' || type === 'enum') {
            return 8;
          } else if (type === 'address') {
            return 160;
          }
          var size = type.replace(innerType, '');
          if (size !== '') {
            size = parseInt(size);
          }
          if (innerType === 'bytes') {
            size = 8 * size;
          }
          return size;
        },

        /**
         * parse the number of dimension of the type
         *
         * @param {Object} variable - variable declaration
         * @param {String} innerType - base type
         * @return [] containing the number of dimension of the given @arg variable
         *            return empty array for type that does not have dimension (int, uint, etc .. (not array))
         */
        getDim: function getDim(variable, innerType) {
          var ret = [];
          if (variable.attributes.type.indexOf('[') !== -1) {
            var squareBracket = /\[([0-9]+|\s*)\]/g;
            var type = variable.attributes.type;
            var dim = type.match(squareBracket);
            if (dim && dim.length > 0) {
              for (var k in dim) {
                if (dim[k] === '[]') {
                  ret.push('dynamic');
                } else {
                  ret.push(parseInt(dim[k].replace('[', '').replace(']', '')));
                }
              }
            }
          }
          return ret;
        },

        /**
         * retrieve enum declaration of the given @arg variable
         *
         * @param {Object} variable - variable declaration
         * @param {Object} stateDeclarations  - all state declarations given by the AST (including struct and enum type declaration)
         * @return [] containing all value declaration of the current enum type
         */
        getEnum: function getEnum(variable, stateDeclaration) {
          for (var k in stateDeclaration) {
            var dec = stateDeclaration[k];
            if (dec.name === 'EnumDefinition' && variable.attributes.type.indexOf('enum ' + dec.attributes.name) === 0) {
              return dec.children;
            }
          }
          return null;
        },

        /**
         * retrieve variable declared in the given @arg variable
         *
         * @param {Object} variable - variable declaration
         * @param {Object} stateDeclarations  - all state declarations given by the AST (including struct and enum type declaration)
         * @return [] containing all variables declaration of the current struct type
         */
        getStructMembers: function getStructMembers(variable, stateDeclaration) {
          var ret = [];
          for (var k in stateDeclaration) {
            var dec = stateDeclaration[k];
            if (dec.name === 'StructDefinition' && variable.attributes.type.indexOf('struct ' + dec.attributes.name) === 0) {
              var location = {
                offset: 0,
                slot: 0
              };
              for (var i in dec.children) {
                var member = dec.children[i];
                var type = this.getType(member, stateDeclaration);
                var loc = this.walkStorage(type, location);
                ret.push({
                  name: member.attributes.name,
                  type: type,
                  location: loc.currentLocation
                });
                location = loc.nextLocation;
              }
              break;
            }
          }
          return {
            members: ret,
            slotsUsed: loc.nextLocation.slot
          };
        },

        /**
         * determine if the given @arg type need to start from a new slot
         *
         * @param {Object} type - current type (object returned by the getType function)
         * @param {Object} location - location in storage of the type.
         * @return true if the type needs a new storage
         */
        typeNeedNewSlot: function typeNeedNewSlot(type, location) {
          return type.size === 'dynamic' || location.offset + type.memSize >= 64 || type.isArray || type.isStruct /* || type.isBytes*/;
        },

        /**
         * determine what will be the location of the current @arg type and the start location of the next type in storage
         *
         * @param {Object} type - current type (object returned by the getType function)
         * @param {Object} location - location in storage of the type.
         * @return {Object} return the location of the current type and the location of the next type in storage
         */
        walkStorage: function walkStorage(type, location) {
          if (location.offset > 0 && this.typeNeedNewSlot(type, location)) {
            location = {
              slot: location.slot + 1,
              offset: 0
            };
          }
          var currentLocation = {
            slot: location.slot,
            offset: location.offset
          };
          if (this.typeNeedNewSlot(type, location)) {
            location.offset = 0;
            location.slot = location.slot + type.slotsUsed;
          } else {
            location.offset = location.offset + type.memSize;
          }
          return {
            currentLocation: currentLocation,
            nextLocation: {
              slot: location.slot,
              offset: location.offset
            }
          };
        },

        /**
         * retrieve the innerType
         *
         * @param {Object} variable - variable declaration
         * @return {String} return the base type
         */
        getInnerType: function getInnerType(variable) {
          var types = ['uint', 'int', 'bytes', 'string', 'address', 'struct', 'bool', 'enum'];
          for (var k in types) {
            // for a Struct, variable.attributes does not have type property
            /*
            // a sruct only has attributes.name
            // compare a struct to a mapping (which has attributes.name and attributes.type)
            > stateDeclarations
            [ { attributes: { name: 'Task' },
            children: [ [Object], [Object], [Object], [Object] ],
            id: 140382932304968,
            name: 'StructDefinition',
            src: '22:108:0' },
            { attributes:
            { name: 'TaskList',
             type: 'mapping(bytes32 => struct Task storage ref)' },
            children: [ [Object] ],
            id: 140382932305416,
            name: 'VariableDeclaration',
            src: '177:33:0' },
            */
            if (this.extractType(variable.attributes.type).indexOf(types[k]) !== -1) {
              if (types[k] === 'struct') {
                var type = variable.attributes.type.split(' ');
                return type[0] + ' ' + type[1]; // struct <typename>
              } else {
                return types[k];
              }
            }
          }
        },

        /**
         * extract the first part of the full type
         *
         * @param {String} fullType - type given by the AST (ex: uint[2] storage ref[2])
         * @return {String} return the first part of the full type (uint[2] in that case)
         */
        extractType: function extractType(fullType) {
          if (fullType.indexOf(' ') !== -1) {
            fullType = fullType.split(' ')[0];
          }
          return fullType;
        },

        /**
         * check the type
         *
         * @param {Object} type - current type (object returned by the getType function)
         * @return {bool} true if type is an int
         */
        isInt: function isInt(type) {
          return type.innerType === 'int' || type.innerType === 'uint';
        },

        /**
         * check the type
         *
         * @param {Object} type - current type (object returned by the getType function)
         * @return {bool} true if type is an array
         */
        isArray: function isArray(type) {
          return type.isArray;
        },

        /**
           * check the type
           *
           * @param {Object} type - current type (object returned by the getType function)
           * @return {bool} true if type is a struct
           */
        isStruct: function isStruct(type) {
          return type.members instanceof Array;
        },

        /**
           * check the type
           *
           * @param {Object} type - current type (object returned by the getType function)
           * @return {bool} true if type is a bool
           */
        isBool: function isBool(type) {
          return type.innerType === 'bool';
        },

        /**
           * check the type
           *
           * @param {Object} type - current type (object returned by the getType function)
           * @return {bool} true if type is an address
           */
        isAddress: function isAddress(type) {
          return type.innerType === 'address';
        },

        /**
           * check the type
           *
           * @param {Object} type - current type (object returned by the getType function)
           * @return {bool} true if type is a bytes array
           */
        isBytes: function isBytes(type) {
          return type.innerType === 'bytes';
        },

        /**
           * check the type
           *
           * @param {Object} type - current type (object returned by the getType function)
           * @return {bool} true if type is and enum
           */
        isEnum: function isEnum(type) {
          return type.innerType === 'enum';
        },

        /**
           * check the type
           *
           * @param {Object} type - current type (object returned by the getType function)
           * @return {bool} true if type is a string
           */
        isString: function isString(type) {
          return type.innerType === 'string';
        }
      };
      BN$1 = ethutil.BN;
      decoder = {
        /**
         * decode array
         *
         * @param {Object} type - current type (object returned by the getType function)
         * @param {Map} storageContent - storage
         * @param {Object} location - location in the storage { offset, slot }
         * @return {Array} return the decoded array
         */
        decodeArray: function decodeArray(type, storageContent, location) {
          return this.decodeArrayItems(type, storageContent, 0, location);
        },

        /**
         * decode array items
         *
         * @param {Object} type - current type (object returned by the getType function)
         * @param {Map} storageContent - storage
         * @param {Object} location - location in the storage { offset, slot }
         * @return {Array} return the decoded array items
         */
        decodeArrayItems: function decodeArrayItems(type, storageContent, depth, location) {
          var ret = [];
          var size = type.dim[depth];
          if (size === 'dynamic') {
            size = storageContent[formatHexKey(location.slot.toString(16))];
            size = parseInt(size);
            var pointer = getDynamicPointer(location);
            location.offset = 0;
            location.slot = new BN$1(pointer.replace('0x', ''), 16);
          }
          if (type.dim.length - 1 > depth) {
            depth++;
            for (var k = 0; k < size; k++) {
              ret.push(this.decodeArrayItems(type, storageContent, depth, location));
              location = moveNextArray(location);
            }
          } else {
            for (var i = 0; i < size; i++) {
              ret.push(this.decodeType(type, storageContent, location));
              location = moveNextItemInArray(type, location);
            }
          }
          return ret;
        },

        /**
         * decode int/uint
         *
         * @param {Object} type - current type (object returned by the getType function)
         * @param {Map} storageContent - storage
         * @param {Object} location - location in the storage { offset, slot }
         * @return {String} return the decoded int/uint
         */
        decodeInt: function decodeInt(type, storageContent, location) {
          var value = getValue(type, storageContent, location);
          value = extractValue(value, type, location);
          var bigNumber = new BN$1(value.replace('0x', ''), 16);
          if (type.innerType === 'uint') {
            return bigNumber.toString(10);
          } else if (type.innerType === 'int') {
            if (isNegative(bigNumber)) {
              return '-' + bigNumber.sub(new BN$1(new Array(value.length + 1).join('f'), 16)).sub(new BN$1(1)).toString(10); // return utileth.fromSigned(utileth.toUnsigned(bigNumber)).toString(10)
            } else {
              return bigNumber.toString(10);
            }
          }
        },

        /**
         * decode struct
         *
         * @param {Object} type - current type (object returned by the getType function)
         * @param {Map} storageContent - storage
         * @param {Object} location - location in the storage { offset, slot }
         * @return {Map} return the decoded struct
         */
        decodeStruct: function decodeStruct(type, storageContent, location) {
          console.log('decodeStruct storageContent:', storageContent);
          var ret = {};
          for (var k in type.members) {
            var member = type.members[k];
            var member_location = {
              slot: add(member.location.slot, location.slot),
              offset: member.location.offset
            };
            console.log('decoding member member.name:', member.name);
            //console.log('decodeStruct member ' + member.name + ' has slot: ' + member_location.slot.toString(16));
            //ret[member.name] = this.decode(member.type, storageContent, member_location)
            var struct_member = {};
            struct_member['value'] = this.decode(member.type, storageContent, member_location);
            console.log('successfully decoded value.');
            struct_member['confirmations'] = getConfirmations(member.type, storageContent, member_location);
            ret[member.name] = struct_member;
            console.log('member successfully decoded:', member.name);
          }
          return ret;
        },

        /**
         * decode bool
         *
         * @param {Object} type - current type (object returned by the getType function)
         * @param {Map} storageContent - storage
         * @param {Object} location - location in the storage { offset, slot }
         * @return {Array} return the decoded bool
         */
        decodeBool: function decodeBool(type, storageContent, location) {
          var value = getValue(type, storageContent, location);
          value = extractValue(value, type, location);
          return value !== '0x00';
        },

        /**
         * decode enum
         *
         * @param {Object} type - current type (object returned by the getType function)
         * @param {Map} storageContent - storage
         * @param {Object} location - location in the storage { offset, slot }
         * @return {Array} return the decoded enum
         */
        decodeEnum: function decodeEnum(type, storageContent, location) {
          var value = getValue(type, storageContent, location);
          value = extractValue(value, type, location);
          value = parseInt(value);
          if (type.enum) {
            return type.enum[value].attributes.name;
          }
          return '';
        },

        /**
         * decode address
         *
         * @param {Object} type - current type (object returned by the getType function)
         * @param {Map} storageContent - storage
         * @param {Object} location - location in the storage { offset, slot }
         * @return {Array} return the decoded address
         */
        decodeAddress: function decodeAddress(type, storageContent, location) {
          var value = getValue(type, storageContent, location);
          //console.log('decodeAddress got value:', value);
          //console.log('decodeAddress extractValue:', extractValue(value, type, location));
          return extractValue(value, type, location);
        },

        /**
         * decode bytes array
         *
         * @param {Object} type - current type (object returned by the getType function)
         * @param {Map} storageContent - storage
         * @param {Object} location - location in the storage { offset, slot }
         * @return {Array} return the decoded bytes array
         */
        decodeBytes: function decodeBytes(type, storageContent, location) {
          console.log('decodeBytes type:', type);'';
          if (type.size === 'dynamic') {
            console.log('type.size is dynamic. calling decodeDynamicBytes');
            return this.decodeDynamicBytes(type, storageContent, location);
          } else {
            console.log('type.size is not dynamic. calling getValue');
            var value = getValue(type, storageContent, location);
            return extractValue(value, type, location);
          }
        },

        /**
         * decode dynamic bytes array
         *
         * @param {Object} type - current type (object returned by the getType function)
         * @param {Map} storageContent - storage
         * @param {Object} location - location in the storage { offset, slot }
         * @return {Array} return the decoded bytes array
         */
        decodeDynamicBytes: function decodeDynamicBytes(type, storageContent, location) {
          console.log('stateDecoder decodeDynamicBytes');
          var value = getValue(type, storageContent, location);
          //console.log('getValue returned value:', value);
          var key = getDynamicPointer(location);
          // getDynamicPointer does sha3(slot)
          //console.log('getDynamicPointer returned key:', key);
          //console.log('storageContent[key]:', storageContent[key]);
          if (storageContent[key]) {
            if (storageContent[key]['value'] && storageContent[key]['value'] !== '0x'
            // caused by strange solidity issue where an extra storage slot is written to with 0 vals
            && storageContent[key]['value'] !== '0x0000000000000000000000000000000000000000000000000000000000000000') {
              console.log('storageContent has key:', key);
              var ret = '';
              var length = parseInt(value) - 1;
              var slots = Math.ceil(length / 64);
              //var currentSlot = storageContent[key]
              var currentSlot = storageContent[key]['value'];
              console.log('currentSlot:', currentSlot);
              key = new BN$1(key.replace('0x', ''), 16);
              for (var k = 0; k < slots; k++) {
                ret += currentSlot.replace('0x', '');
                key = key.add(new BN$1(1));
                //currentSlot = storageContent['0x' + key.toString(16)]
                console.log('storageContent[0x + key.toString(16)]:', storageContent['0x' + key.toString(16)]);
                currentSlot = storageContent['0x' + key.toString(16)]['value'];
              }
              ret = ret.substr(0, length);
              console.log('returning from decodeDynamicBytes');
              return ret;
            }
          }

          console.log('storageContent has no key. parsing value..');
          var size = value.substr(value.length - 2, 2);
          return value.substr(0, parseInt(size, 16) + 2);
        },

        /**
         * decode string
         *
         * @param {Object} type - current type (object returned by the getType function)
         * @param {Map} storageContent - storage
         * @param {Object} location - location in the storage { offset, slot }
         * @return {Array} return the decoded string
         */
        decodeString: function decodeString(type, storageContent, location) {
          //console.log('decodeString storageContent:', storageContent);
          var value = this.decodeBytes(type, storageContent, location);
          //console.log('decodeBytes returned value:', value);
          value = value.replace('0x', '');
          var ret = '';
          for (var k = 0; k < value.length; k += 2) {
            var raw = value.substr(k, 2);
            var str = String.fromCharCode(parseInt(raw, 16));
            ret += str;
          }
          return ret;
        },

        /**
         * decode the given @arg type
         *
         * @param {Object} type - current type (object returned by the getType function)
         * @param {Map} storageContent - storage
         * @param {Object} location - location in the storage { offset, slot }
         * @return {Array} return the decoded type
         */
        decode: function decode(type, storageContent, location) {
          if (varUtil.isArray(type)) {
            return this.decodeArray(type, storageContent, location);
          } else {
            return this.decodeType(type, storageContent, location);
          }
        },

        /**
         * decode the given @arg type (the decode function should be used to decode array)
         *
         * @param {Object} type - current type (object returned by the getType function)
         * @param {Map} storageContent - storage
         * @param {Object} location - location in the storage { offset, slot }
         * @return {Array} return the decoded type
         */
        decodeType: function decodeType(type, storageContent, location) {
          console.log('decodeType type:', type);
          if (varUtil.isInt(type)) {
            return this.decodeInt(type, storageContent, location);
          } else if (varUtil.isStruct(type)) {
            return this.decodeStruct(type, storageContent, location);
          } else if (varUtil.isBool(type)) {
            return this.decodeBool(type, storageContent, location);
          } else if (varUtil.isAddress(type)) {
            return this.decodeAddress(type, storageContent, location);
          } else if (varUtil.isBytes(type)) {
            return this.decodeBytes(type, storageContent, location);
          } else if (varUtil.isEnum(type)) {
            return this.decodeEnum(type, storageContent, location);
          } else if (varUtil.isString(type)) {
            return this.decodeString(type, storageContent, location);
          }
        }
      };
      contractsUtil = {
        /**
         * return the state of the given @arg contractName
         *
         * @param {Map} storageContent  - contract storage
         * @param {astList} astList  - AST nodes of all the sources
         * @param {String} contractName  - contract for which state var should be resolved
         * @return {Map} - return the state of the contract
         */
        getSolidityState: function getSolidityState(storageContent, astList, contractName) {
          var locations = this.getStorageLocationOf(contractName, astList);
          return this.decodeState(locations, storageContent);
        },

        /**
         * decode the ctr state storage
         *
         * @param {Array} storage location  - location of all state variables
         * @param {Map} storageContent  - storage
         * @return {Map} - decoded state variable
         */
        decodeState: function decodeState(storageLocations, storageContent) {
          if (storageContent['0x']) {
            storageContent['0x00'] = storageContent['0x'];
          }
          var ret = {};
          for (var k in storageLocations) {
            var stateVar = storageLocations[k];
            var location = {
              slot: stateVar.location.slot,
              offset: stateVar.location.offset
            };
            ret[stateVar.name] = decoder.decode(stateVar.type, storageContent, location);
          }
          return ret;
        },

        /**
         * return all storage location variables of the given @arg contractName
         *
         * @param {String} contractName  - name of the contract
         * @param {Object} astList  - AST nodes of all the sources
         * @return {Object} - return the location of all contract variables in the storage
         */
        getStorageLocationOf: function getStorageLocationOf(contractName, astList) {
          var stateDeclarations = this.getStateDefinition(astList, contractName);
          var ret = [];
          var location = {
            offset: 0,
            slot: 0
          };
          for (var k in stateDeclarations) {
            var variable = stateDeclarations[k];
            if (variable.name === 'VariableDeclaration') {
              var type = varUtil.getType(variable, stateDeclarations);
              var loc = varUtil.walkStorage(type, location);
              ret.push({
                name: variable.attributes.name,
                type: type,
                location: loc.currentLocation
              });
              location = loc.nextLocation;
            }
          }
          return ret;
        },

        /**
         * return state var and type definition of the given contract
         *
         * @param {Object} astList  - AST nodes of all the sources
         * @param {String} contractName  - contract for which state var should be resolved
         * @return {Object} - return the AST node of found state var
         */
        getStateDefinition: function getStateDefinition(astList, contractName) {
          var id = this.getContractId(astList, contractName);
          if (id) {
            var stateVar = [];
            var contracts = this.getContractsDefinition(astList);
            var baseContracts = this.getBaseContracts(astList, id, contracts);
            for (var k in baseContracts) {
              var ctr = baseContracts[k];
              for (var i in ctr.children) {
                stateVar.push(ctr.children[i]);
              }
            }
            return stateVar;
          }
          return null;
        },

        /**
         * return contract id given its name
         *
         * @param {Object} astList  - AST nodes of all the sources
         * @param {String} contractName  - contract for which based contracts should be resolved
         * @return {Object} - return the AST node of found contract
         */
        getContractId: function getContractId(astList, contractName) {
          var id;
          this.walkAstList(astList, { 'ContractDefinition': function ContractDefinition(node) {
              if (node.attributes && node.attributes.name === contractName) {
                id = node.id;
              }
              return true;
            } });
          return id;
        },

        /**
         * return all the based contracts defined given @arg contract name
         *
         * @param {Object} astList  - AST nodes of all the sources
         * @param {Int} id  - contract id for which based contracts should be resolved
         * @param {Map} contracts  - all contracts defined in the current context
         * @return {Object} - return the AST node of found contract
         */
        getBaseContracts: function getBaseContracts(astList, id, contracts) {
          var contract = contracts[id];
          var baseContracts = [];
          for (var k in contract.attributes.linearizedBaseContracts) {
            var subId = contract.attributes.linearizedBaseContracts[k];
            baseContracts.unshift(contracts[subId]);
          }
          return baseContracts;
        },

        /**
         * return all contract definitions of the given @astList
         *
         * @param {Object} astList  - AST nodes of all the sources
         * @return {Object} - return the AST node of found contract
         */
        getContractsDefinition: function getContractsDefinition(astList) {
          var contracts = {};
          this.walkAstList(astList, { 'ContractDefinition': function ContractDefinition(node) {
              contracts[node.id] = node;
              return false;
            } });
          return contracts;
        },

        /**
         * walk the given @astList
         *
         * @param {Object} astList  - ASTs of all the sources
         * @param {Function} - callback used by AstWalker to compute response
         */
        walkAstList: function walkAstList(astList, callback) {
          var walker = new AstWalker();
          for (var k in astList) {
            walker.walk(astList[k].AST, callback);
          }
        }
      };
      BN = ethutil.BN;

      ABIrx = function () {
        function ABIrx(config) {
          _classCallCheck(this, ABIrx);

          var self = this;
          this.CONTRACT_NAME = config.contractName;
          this.CONTRACT_FILE = config.contractFile;
          this.SOL_ASM_ABI = config.solAsmAbi;

          var stateDeclarations = contractsUtil.getStateDefinition(self.SOL_ASM_ABI['sources'], self.CONTRACT_NAME);
          this.StateDeclarations = stateDeclarations;

          var mappingKeyNames = parseMappingKeyNames(self.SOL_ASM_ABI['sources'][self.CONTRACT_FILE]);
          // mappingKeyNames: [ { mapping_name: 'TaskList', key_name: 'id' },
          //  { mapping_name: 'TaskList', key_name: '_id' } ]

          var taggedAsm = prepareContractAsm(self.SOL_ASM_ABI['contracts'][self.CONTRACT_NAME]['asm'], 'runtimeOnly');
          var mappingKeyBreakpoints = findBreakpointsFromKeyNames(mappingKeyNames, taggedAsm);
          console.log('mappingKeyBreakpoints:', mappingKeyBreakpoints);

          this.mappingKeyBreakpoints = mappingKeyBreakpoints;
        }

        _createClass(ABIrx, [{
          key: 'decodeStorageMappings',
          value: function decodeStorageMappings(storage_key_locations, storage_obj, state_declaration_index) {
            var self = this;
            /*
            // the original decoder.decodeStruct() expected storage object with key-values formatted like '0xkey':'0xdeadbeef'
            storage_obj: {
              '0x3fb53154734cd18f56721d3b645a64a067eb5a39bc23fa814836a6948b08e2a6': '0x6e756d2032207461736b20746f646f000000000000000000000000000000001e',
              '0x3fb53154734cd18f56721d3b645a64a067eb5a39bc23fa814836a6948b08e2a7': '0x00000000000000000000006430701987fdd4efb01d9aeeab7d2c8cae1807ba00',
              '0x3fb53154734cd18f56721d3b645a64a067eb5a39bc23fa814836a6948b08e2a8': '0x354ce76e567f2233bd45002c3b495238d12f475a76802d9cdca0d2a209908441',
              '0xd8b6389e4f29bb956579f3a5beffce11e08ad93a78f9cfa5737403ff9e2fa32a': '0x666972737420636f6e6372657465207461736b20746f646f0000000000000030',
              '0xd8b6389e4f29bb956579f3a5beffce11e08ad93a78f9cfa5737403ff9e2fa32b': '0x00000000000000000000006430701987fdd4efb01d9aeeab7d2c8cae1807ba00',
              '0xd8b6389e4f29bb956579f3a5beffce11e08ad93a78f9cfa5737403ff9e2fa32c': '0x4186c2ed2f75849d809eec9f94ef1faffc89fadfe26b1c405aeee1bdfc73f963' }
             // but our storage object also has confirmations attached by storageRx, and
            // looks like: '0xkey': {'value':'0xdeadbeef', 'confirmations':3}
             // so decoder.decodeStruct() now has an ugly patch
            */

            // state_declaration_index is the solidity variable corresponding to the storage key we want to decode
            // state_declaration_index = 1 means it is the second declared variable in the contract code
            // TODO: fix this workaround. see expanded comment "todo: generalize struct_type"
            var structType = varUtil.getType(self.StateDeclarations[state_declaration_index], self.StateDeclarations);

            // can only decode storage locations for which we know the mapping keys
            var known_storage_key_locations = storage_key_locations.filter(function (key_loc) {
              return _.has(storage_obj, key_loc);
            });

            var structs_decoded = known_storage_key_locations.map(function (key_location) {
              var mapping_key_location = new BN(key_location.replace('0x', ''), 16);
              var struct_location = { 'slot': mapping_key_location, 'offset': 0 }; // TODO: offset should come from ABIrx
              var struct_val_decoded = decoder.decodeStruct(structType, storage_obj, struct_location);
              return [key_location, struct_val_decoded];
            });

            var storage_decoded = _.fromPairs(structs_decoded);
            return storage_decoded;
          }
        }]);

        return ABIrx;
      }();

      _slicedToArray = function () {
        function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;

          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);

              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }

          return _arr;
        }

        return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();

      Web3Rx = function () {
        function Web3Rx(config) {
          _classCallCheck(this, Web3Rx);

          this.RPC_URL = config.rpcUrl;
          this.WS_URL = config.wsUrl;

          this.StorageRx = new StorageRx(this.RPC_URL, this.WS_URL);
          this.PendingTx$ = this.StorageRx.PendingTx$;
        }

        _createClass(Web3Rx, [{
          key: 'watch',
          value: function watch(contract_address, abiRx, tx_list) {
            var self = this;
            var storage$ = self.StorageRx.watch(contract_address);

            var txArray$ = xs.fromArray(tx_list);
            var txHash$ = self.PendingTx$.map(function (pending_tx) {
              return pending_tx.hash;
            });
            var txsToPluck$ = xs.merge(txArray$, txHash$);

            var mappingPCs = abiRx.mappingKeyBreakpoints;

            // TODO: do all the mappings in a contract, not just the first mapping (mappingPCs[0])
            // pluck mapping keys using debug.traceTransactions
            var mappingKeys$ = pluckMappingKeys(txsToPluck$, mappingPCs[0], self.RPC_URL);

            // TODO: get this offset from abiRx
            // we want to watch the mapping `TaskList`, but our ABIrx doesn't yet calculate
            // the correct storage offset of mappings.
            var MAPPING_STORAGE_OFFSET = 3;

            var mappingKeyLocations$ = mappingKeys$.map(function (keys_arr) {
              return convertKeysToStorageLocations(keys_arr, MAPPING_STORAGE_OFFSET);
            });

            // state_declaration_index is the solidity variable corresponding to the storage key we want to decode
            // state_declaration_index = 1 means it is the second declared variable in the contract code
            // TODO: get this index from abiRx
            // the values of `TaskList` are `Task` structs. but our ABIrx doesn't yet
            // work with struct definitions. as a workaround, we use the index of a
            // declaration (`itemTask`) of the struct we want to decode.
            var STATE_DECLARATION_INDEX = 1;

            var storageAndKeys$ = xs.combine(storage$, mappingKeyLocations$).map(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2);

              var storage_obs = _ref2[0];
              var mapping_key_locations = _ref2[1];

              return abiRx.decodeStorageMappings(mapping_key_locations, storage_obs.storageObject, STATE_DECLARATION_INDEX);
            });

            return storageAndKeys$;
            //return decodeStorage(storage$, contract_ABIrx, mappingKeys$);
          }
        }]);

        return Web3Rx;
      }();

      web3RxExport = {
        //decodeStorage: web3Rx.decodeStorage,
        web3Rx: Web3Rx,
        StorageRx: StorageRx,
        ABIrx: ABIrx
      };

      _export('default', web3RxExport);
    }
  };
});
})
(function(factory) {
  module.exports = factory();
});