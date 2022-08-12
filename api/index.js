import ytdl from 'ytdl-core';
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above

(async function () {
    let info = await ytdl.getInfo('XZO593T4Jfg');
    let format = ytdl.filterFormats(info.formats, 'videoandaudio');
    console.log('Format found!', format);

})();
