const fs = require('fs');
const fetch = require('node-fetch');

const DEPLOYED_README_URL = 'https://wasim-rana-euxe.vercel.app/README.md'; 
const LOCAL_README_PATH = './README.md'; 
async function updateReadme() {
  try {
    const response = await fetch(DEPLOYED_README_URL);
    const content = await response.text();

    md
    fs.writeFileSync(LOCAL_README_PATH, content, 'utf8');
    console.log('README.md updated locally!');
  } catch (error) {
    console.error('Error updating README:', error);
  }
}

updateReadme();
