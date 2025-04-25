const { exec } = require('child_process');
const path = require('path');

// Start backend server
const backend = exec('npm run start', { cwd: path.join(__dirname, '..') });

// Start frontend server
const frontend = exec('npm run dev', { cwd: path.join(__dirname, '../..') });

backend.stdout.on('data', (data) => {
  console.log(`Backend: ${data}`);
});

backend.stderr.on('data', (data) => {
  console.error(`Backend error: ${data}`);
});

frontend.stdout.on('data', (data) => {
  console.log(`Frontend: ${data}`);
});

frontend.stderr.on('data', (data) => {
  console.error(`Frontend error: ${data}`);
});