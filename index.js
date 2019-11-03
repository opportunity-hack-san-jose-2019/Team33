const express = require('express');
const cors = require('cors');
const csvjson = require('csvjson');
const readFile = require('fs').readFile;
const writeFile = require('fs').writeFile;
const csvParser = require('csv-parser');
const fs =require('fs');
var csv = require("csvtojson");

const app = express();
app.use(cors());
app.use(express.json());


function runPython()
{
  const { spawn } = require('child_process')

  const logOutput = (name) => (data) => console.log(`[${name}] ${data.toString()}`)
  
  function run() {
    const process = spawn('python', ['./recModule.py']);
  
    process.stdout.on(
      'data',
      logOutput('stdout')
    ); 
  
    process.stderr.on(
      'data',
      logOutput('stderr')
    );
  }
  
  (() => {
    try {
      run()
      // process.exit(0)
    } catch (e) {
      console.error(e.stack);
      process.exit(1);
    }
  })();

  // csv().fromFile('./Suggestions.csv').then((jsonObj)=>{ console.log(jsonObj); 
  // })

  //  const jsonArray=await csv().fromFile('./Suggestions.csv');
}


const PORT = 5000;

app.get('/', (req, res) => {
    callName();
})
app.listen(PORT, () =>
{
    console.log('server working on ' + PORT);
});




app.get('/submitted', (req,res)=>{

  res.json()
})

app.post('/submitted', (req, res) => {
    console.log('something');
// res.body;
// res.json.body;
let csvdata = csvjson.toCSV(req.body, {
    headers: 'key'
});
writeFile('newStudent.csv',csvdata, (err)=> {
    if(err)
    {
        console.log(err);
    }
    console.log('WOHOOOOOOOO');
})

fs.createReadStream('newStudent.csv')
  .pipe(csvParser())
  .on('data', (row) => {
    // console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

  runPython();

  res.send()
});
