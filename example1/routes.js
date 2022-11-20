
const fs = require('fs');  // dosya işlemleri
const qs = require('querystring'); // obje için

const routeHandler = (req,res) => { // req istek, res cevap

const url = req.url;
const method = req.method;

res.setHeader('Content-Type', 'text/html');

if (url === '/') {
    res.write(`

<html> 
    <head>
 <title> Enter message </title>
  </head>

  <body>
    <form method="POST" action="/log">
        <input type="text" name="message">
        <button type="submit">Save</button>
     </form>
  </body>
</html>

`);
    res.end();

}


if (url === '/log' && method === 'POST') { // url log ise ve methodu POST ise

    const body = [];

    req.on('data', (chunk) => {
        body.push(chunk);   //parça parça halindedir veri
        console.log(chunk);
    });


    req.on('end', () => {  // verinin son hali req.on ve end şeklinde alınır
        const bodyParsed = Buffer.concat(body).toString();  // alığ concat fonk ile stringe çevirip atadık
        const message = bodyParsed.split('=')[1];           // message: aaa gibi geliyorda ayırıp 2. kısmı aldık
        console.log(qs.parse(bodyParsed));                  // konsola tam halini yazdırdık
        fs.appendFileSync('message.txt', message);          // message.txt ye message ile atadığımız yeri yazdırdık
                                                            // appendfilesync ile append olunca üstüne yazar öncekileri silmez
    });


    fs.appendFileSync('message.txt', '\n');   
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
}

 }

 module.exports =routeHandler;  // dışarıya aktardık


