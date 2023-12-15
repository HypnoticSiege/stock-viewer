console.clear();
console.log('Stock Market Viewer');
console.log(`Made by Luis Quezada - https://quezada.nl`);
console.log('This app is made for educational purposes only and is not intended for commercial use.')
console.log(``);

async function main() {
    console.log(`[BOOT] Starting system & loading modules...`);
    console.log(`---------------------------------`);
    console.log(`[INFO] Starting Express Server...`);
    await require('./app');
    console.log(``);
}

main();