exports.ids=[6],exports.modules={41:function(t,e,n){"use strict";var r=n(17),c=n.n(r);const o={get:t=>new Promise((e,n)=>{c.a.get(t).then(t=>{e(t)}).catch(t=>{n(t)})})};e.a=o},96:function(t,e,n){"use strict";n.r(e);var r=n(41);e.default=function(param){return new Promise(function(t,e){var n="";n=param.artist&&""!=param.artist.artistName?`?artistName=${param.artist.artistName}&songName=${param.songName}`:`?searchValue=${param.searchValue}`,r.a.get("http://localhost:3001/searchSong"+n).then(function(e){t(e.data.result)}).catch(function(t){e(t)})})}}};
//# sourceMappingURL=1436576e5532e0fafaf7.js.map