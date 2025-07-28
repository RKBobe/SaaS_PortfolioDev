// generate-index.js
const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, 'projects');
const output = [];

fs.readdirSync(basePath).forEach((dir) => {
  const overviewPath = path.join(basePath, dir, 'overview.md');
  if (fs.existsSync(overviewPath)) {
    output.push({
      id: dir,
      title: formatTitle(dir),
      path: `projects/${dir}/overview.md`
    });
  }
});

fs.writeFileSync(
  path.join(basePath, 'index.json'),
  JSON.stringify(output, null, 2)
);

function formatTitle(name) {
  return name
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase()); // e.g. "db-config" ➜ "Db Config"
}

console.log('✅ projects/index.json generated!');
