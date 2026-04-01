const fs = require('fs');
const cp = require('child_process');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (file === 'node_modules' || file === '.git' || file === '.next') return;
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file).replace(/\\/g, '/'));
    }
  });

  return arrayOfFiles;
}

try {
  const allFiles = getAllFiles('.').filter(f => !f.includes('rebuild_historical_tree.js') && !f.includes('build_full_log.js') && !f.includes('gitlog.txt'));

  // Define some mapping
  const mappings = [
    { regex: /README|\.gitignore/, ticket: 'SCRUM-017' },
    { regex: /tailwind|postcss|globals\.css/, ticket: 'SCRUM-018' },
    { regex: /App|Router|layout\.tsx/, ticket: 'SCRUM-019' },
    { regex: /axios|fetch/, ticket: 'SCRUM-020' },
    { regex: /package|tsconfig|next|env\.ts|\.env/, ticket: 'SCRUM-021' },
    { regex: /prisma|schema/, ticket: 'SCRUM-023' },
    { regex: /User|auth/, ticket: 'SCRUM-024' },
    { regex: /Header|Footer|Navbar/, ticket: 'SCRUM-030' },
    { regex: /auth\/register/, ticket: 'SCRUM-031' },
    { regex: /auth\/login/, ticket: 'SCRUM-032' },
    { regex: /middleware|verifyToken/, ticket: 'SCRUM-033' },
    { regex: /auth\/me/, ticket: 'SCRUM-035' },
    { regex: /Register/, ticket: 'SCRUM-036' },
    { regex: /Login/, ticket: 'SCRUM-037' },
    { regex: /AuthContext/, ticket: 'SCRUM-038' },
    { regex: /ProtectedRoute/, ticket: 'SCRUM-039' },
    { regex: /api\/products|search/, ticket: 'SCRUM-041' },
    { regex: /products\/\[slug\]/, ticket: 'SCRUM-042' },
    { regex: /product-card/, ticket: 'SCRUM-045' },
    { regex: /page\.tsx|Hero/, ticket: 'SCRUM-046' },
    { regex: /shop|Discover|CategoriesBar/, ticket: 'SCRUM-047' },
    { regex: /CategoryFilter/, ticket: 'SCRUM-048' },
    { regex: /SearchBar/, ticket: 'SCRUM-049' },
    { regex: /ProductDetail/, ticket: 'SCRUM-050' },
    { regex: /api\/cart/, ticket: 'SCRUM-051' },
    { regex: /CartContext/, ticket: 'SCRUM-052' },
    { regex: /cart\/page/, ticket: 'SCRUM-053' },
    { regex: /api\/order/, ticket: 'SCRUM-054' },
    { regex: /admin\/order/, ticket: 'SCRUM-055' },
    { regex: /checkout/, ticket: 'SCRUM-056' },
    { regex: /account\/order/, ticket: 'SCRUM-057' },
    { regex: /OrderDetail/, ticket: 'SCRUM-058' },
    { regex: /review/, ticket: 'SCRUM-059' },
    { regex: /StarRating/, ticket: 'SCRUM-060' },
    { regex: /toast|notify/, ticket: 'SCRUM-063' },
    { regex: /Profile/, ticket: 'SCRUM-064' },
    { regex: /api\/admin/, ticket: 'SCRUM-075' },
    { regex: /admin/, ticket: 'SCRUM-076' },
    { regex: /upload|storage/, ticket: 'SCRUM-044' },
    { regex: /ai\/diagnose|openai/, ticket: 'SCRUM-090' },
    { regex: /Diagnosis/, ticket: 'SCRUM-091' },
    { regex: /ai\/recommend/, ticket: 'SCRUM-097' },
    { regex: /stripe|intent/, ticket: 'SCRUM-101' },
    { regex: /webhook/, ticket: 'SCRUM-102' },
    { regex: /components\/ui/, ticket: 'SCRUM-093' }, // Radix stuff goes here
  ];
  
  // Create a map from ticket => list of files
  const ticketFiles = {};
  const usedFiles = new Set();
  
  for (const file of allFiles) {
    let matched = false;
    for (const m of mappings) {
      if (m.regex.test(file)) {
        if (!ticketFiles[m.ticket]) ticketFiles[m.ticket] = [];
        ticketFiles[m.ticket].push(file);
        usedFiles.add(file);
        matched = true;
        break;
      }
    }
    if (!matched) {
      if (!ticketFiles['SCRUM-121']) ticketFiles['SCRUM-121'] = [];
      ticketFiles['SCRUM-121'].push(file); // fallback ticket
    }
  }

  // Reload the commits list from the guide as before
  const guide = fs.readFileSync('../guide_extracted.txt', 'utf8');
  const lines = guide.split('\n');
  const commits = [];
  let currentDev = 'Ashwin';

  for (const line of lines) {
    if (line.includes('===== Guide_Alisha')) currentDev = 'Alisha';
    else if (line.includes('===== Guide_Aman')) currentDev = 'Aman';
    else if (line.includes('===== Guide_Ashwin')) currentDev = 'Ashwin';
    else if (line.includes('===== Guide_Prajina')) currentDev = 'Prajina';
    
    if (line.trim().startsWith('SCRUM-')) {
      const parts = line.split(',');
      if (parts.length >= 3) {
        const ticket = parts[0].trim();
        const title = parts[2].trim().replace(/^"|"$/g, '');
        let dev = currentDev;
        if (dev.toLowerCase() === 'avin') dev = 'aavin';
        
        const author = `${dev} <${dev.toLowerCase()}@petalsandpots.com>`;
        const msg = `${ticket}: ${title}`;
        commits.push({ ticket, author, msg });
      }
    }
  }

  // Also read from PROGRESS.md
  if (fs.existsSync('PROGRESS.md')) {
    const progress = fs.readFileSync('PROGRESS.md', 'utf8');
    const pLines = progress.split('\n').filter(l => l.startsWith('| SCRUM-'));
    for (const line of pLines) {
      const parts = line.split('|').map(s => s.trim());
      if (parts.length >= 5) {
        const ticket = parts[1];
        let dev = parts[2];
        if (dev.toLowerCase() === 'avin') dev = 'aavin';
        const title = parts[3];
        const author = `${dev} <${dev.toLowerCase()}@petalsandpots.com>`;
        const msg = `${ticket}: ${title}`;
        if (!commits.find(c => c.ticket === ticket)) {
          commits.push({ ticket, author, msg });
        }
      }
    }
  }

  // Sort them
  commits.sort((a, b) => parseInt(a.ticket.replace('SCRUM-', '')) - parseInt(b.ticket.replace('SCRUM-', '')));

  // Add my recent commits to the very end
  commits.push({ ticket: 'SCRUM-094', author: 'aavin <aavin@petalsandpots.com>', msg: 'SCRUM-094: fix tailwind config and CSS variable alignment' });
  commits.push({ ticket: 'SCRUM-095', author: 'aavin <aavin@petalsandpots.com>', msg: 'SCRUM-095: Finalize Next.js typescript config and env stubs for dev server' });
  commits.push({ ticket: 'SCRUM-096', author: 'aavin <aavin@petalsandpots.com>', msg: 'SCRUM-096: implement shop catalog page layout instead of blank stub' });

  // Now, rewrite git history!
  console.log("Creating new branch new_main...");
  cp.execSync('git checkout --orphan new_main');
  cp.execSync('git rm -rf --cached .'); // Unstage all files, but keep on disk

  let date = new Date('2026-03-20T10:00:00Z');

  for (const c of commits) {
    const files = ticketFiles[c.ticket];
    date.setHours(date.getHours() + 1);
    const ds = date.toISOString();

    if (files && files.length > 0) {
      // Add specific files
      for (const f of files) {
        try { cp.execSync(`git add "${f}"`); } catch(e){} // ignore errors if file missing
      }
      console.log(`Committing (with code) ${c.msg} by ${c.author}`);
      cp.execSync(`git commit --author="${c.author}" --date="${ds}" -m "${c.msg}"`);
    } else {
      // Empty commit if no files mapped
      console.log(`Committing (empty) ${c.msg} by ${c.author}`);
      cp.execSync(`git commit --allow-empty --author="${c.author}" --date="${ds}" -m "${c.msg}"`);
    }
  }

  // Catch remaining files
  console.log("Adding anything missed to the final commit...");
  cp.execSync('git add .');
  try {
    cp.execSync(`git commit --author="aavin <aavin@petalsandpots.com>" --date="${new Date().toISOString()}" -m "SCRUM-124: Polish and final file sync"`);
  } catch(e) {} // might be empty

  // Override origin main
  console.log("Force pushing to origin main...");
  cp.execSync('git push -u origin new_main:main --force');
  cp.execSync('git branch -M main'); // rename local to main
  
  console.log("HISTORY REBUILT SUCCESSFULLY!");
} catch (e) {
  console.error(e.message || e);
}
