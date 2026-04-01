const cp = require('child_process');

try {
  // Get all new commits on main
  const log = cp.execSync('git log --format="%H|%s"').toString().split('\n').filter(Boolean);
  
  // Get all remote branches
  const branchesOutput = cp.execSync('git branch -r').toString().split('\n').map(b=>b.trim()).filter(Boolean);
  
  // Also get local branches just in case
  const localBranchesOutput = cp.execSync('git branch').toString().split('\n').map(b=>b.replace('*', '').trim()).filter(Boolean);
  
  const targetBranches = new Set([...branchesOutput, ...localBranchesOutput]);

  for (const line of log) {
    const parts = line.split('|');
    if (parts.length < 2) continue;
    const hash = parts[0];
    const msg = parts[1];
    
    // Extract SCRUM-XXX
    const match = msg.match(/(SCRUM-\d+)/);
    if (match) {
      const ticket = match[1];
      
      // Find a branch that contains this ticket
      const matchedBranches = Array.from(targetBranches).filter(b => b.includes(ticket));
      
      for (let branch of matchedBranches) {
        // Strip 'origin/' if it's a remote branch
        if (branch.startsWith('origin/')) {
          branch = branch.replace('origin/', '');
        }
        
        // Skip main or master
        if (branch === 'main' || branch === 'master' || branch === 'HEAD' || branch.includes('->')) continue;
        
        console.log(`Fixing branch ${branch} to point to new commit ${hash} (${ticket})`);
        
        try {
          // Force branch to point to this hash
          cp.execSync(`git branch -f ${branch} ${hash}`);
          // Force push it to origin
          console.log(`Pushing ${branch}...`);
          cp.execSync(`git push -f origin ${branch}`);
        } catch(e) {
          console.error(`Failed to push ${branch}`);
        }
      }
    }
  }
  console.log("ALL BRANCHES FIXED!");
} catch(e) {
  console.error(e);
}
