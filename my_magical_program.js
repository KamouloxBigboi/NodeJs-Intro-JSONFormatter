const fs = require('fs');
let input = process.argv.slice(2);
let output = process.argv[3].slice(2);
//let help = process.argv[2];

function formatJson(input) {
    let rawData = fs.readFileSync(input, { encoding:'utf-8', flag:'r' });
    let data = JSON.parse(rawData);
    let formattedData = JSON.stringify(data, null, 2)

    console.log(formattedData);
    ///////// process.argv[3] correspond au 2ème argument de l'entrée /////////////////////////
    fs.writeFileSync(output, formattedData)
}
// if ((help === '--help') && (output = 0)) {
//     console.log("To format your json file into a pretty-print file, type your json file as first argument, then output as second argument")
// } else {
try { 
    formatJson(input[0]);
} catch (err) {
    console.log(err);
}       
//}