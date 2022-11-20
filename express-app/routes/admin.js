const express =  require('express');
const router =  express.Router();  // express objesi oluşturuyoruz.
const path = require('path');      // hmtl sayfasını yollamak için pcdeki yerini ogrenmek lazım



// /admin/add-procuct => GET
router.get('/add-product',(req, res, next) => { //linke tıklayıp gelirse
    console.log("middleware 1 çalıştırıldı.");

    // basınca product sayfasına gönderecek
    //sendFile ile istediğimiz html sayfasını yolunu vererek ekrana yansıtabiliyoruruz
    res.sendFile( path.join(__dirname,"../","views","add-product.html") ); // __dirname admin.js yolunu verir
            
});


// /admin/add-procuct => POST
router.post('/add-product', (req, res, next) => {   // form aracılığı ile buraya geldi ise
    // database kayıt 
    console.log(req.body);  // konsolda yazılan değeri göstertiyor
    res.redirect('/');  // kullanıcıyı sonra ana dizine gönderiyor
    });

module.exports = router;

        