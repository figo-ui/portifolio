const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'temp_ref/src');
const destDir = path.join(__dirname, 'src');

function copyAndPatch(src, dest) {
  if (fs.statSync(src).isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(file => {
      copyAndPatch(path.join(src, file), path.join(dest, file));
    });
  } else if (src.endsWith('.tsx') || src.endsWith('.ts')) {
    let content = fs.readFileSync(src, 'utf8');
    
    // Patch react-router-dom Link -> next/link
    content = content.replace(/import\s+\{\s*Link\s*\}\s+from\s+['"]react-router-dom['"];?/g, 'import Link from "next/link";');
    
    // Patch Link to props
    content = content.replace(/<Link\s+to=/g, '<Link href=');

    // Add use client
    if (src.endsWith('.tsx') && !content.startsWith('"use client"')) {
      content = '"use client";\n' + content;
    }
    
    fs.writeFileSync(dest, content);
  }
}

// Ensure destination directories exist
if (!fs.existsSync(path.join(destDir, 'components'))) fs.mkdirSync(path.join(destDir, 'components'));
if (!fs.existsSync(path.join(destDir, 'utils'))) fs.mkdirSync(path.join(destDir, 'utils'));

// Copy Canvas, Sections, Utils, Hoc, Types
copyAndPatch(path.join(srcDir, 'components/canvas'), path.join(destDir, 'components/canvas'));
copyAndPatch(path.join(srcDir, 'components/sections'), path.join(destDir, 'components/sections'));
copyAndPatch(path.join(srcDir, 'components/atoms'), path.join(destDir, 'components/atoms'));
copyAndPatch(path.join(srcDir, 'components/layout'), path.join(destDir, 'components/layout'));
copyAndPatch(path.join(srcDir, 'components/index.ts'), path.join(destDir, 'components/index.ts'));
copyAndPatch(path.join(srcDir, 'utils'), path.join(destDir, 'utils'));
copyAndPatch(path.join(srcDir, 'hoc'), path.join(destDir, 'hoc'));
copyAndPatch(path.join(srcDir, 'types'), path.join(destDir, 'types'));

console.log("Porting completed!");
