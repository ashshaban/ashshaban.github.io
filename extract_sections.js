const fs = require('fs');

const oldHtml = fs.readFileSync('old/index.html', 'utf8');
const lines = oldHtml.split('\n');

const getLines = (start, end) => lines.slice(start - 1, end).join('\n');

const timeline = getLines(1595, 1697);
const politics = getLines(1699, 1803);
const techno = getLines(1902, 2105);
const certs = getLines(2107, 2245);
const honors = getLines(2247, 2336);
const gallery = getLines(2338, 2724);

const divider = getLines(1587, 1593);

fs.writeFileSync('scratch/sections_raw.html', [divider, timeline, politics, techno, certs, honors, gallery].join('\n\n'));
console.log('Sections extracted to scratch/sections_raw.html');
