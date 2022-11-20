const express =  require('express');
const router =  express.Router();  // express objesi oluşturuyoruz.
const path = require('path');      // hmtl sayfasını yollamak için pcdeki yerini ogrenmek lazım

router.get('/',(req, res, next) => {
    console.log("middleware 2 çalıştırıldı.");

    //sendFile ile istediğimiz html sayfasını yolunu vererek ekrana yansıtabiliyoruruz
    res.sendFile( path.join(__dirname,"../","views","index.html") ); // __dirname admin.js yolunu verir
});

module.exports = router;