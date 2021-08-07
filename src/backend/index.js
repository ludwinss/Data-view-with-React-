const express=require('express');
const XLSX=require('xlsx');
const path=require('path')

const app=express();

// settings
app.set('port',5000);

// middlewares
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

// routes
app.get('/api', (req, res) => {
    let tmpArray={}
    let excel = XLSX.readFile(path.join(__dirname,'public','tmp','Data Assessment.xlsx'));
    excel.SheetNames.forEach((value,index)=>{
        var row =XLSX.utils.sheet_to_json(excel.Sheets[value])
        tmpArray[value]=row;
    })
    res.send(tmpArray)
})
app.listen(app.get('port'),(err)=>{
  if(err) console.error(err);
  else console.log('Connect to port:',app.get('port'))
})

