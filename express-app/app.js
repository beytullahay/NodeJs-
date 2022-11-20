const express = require('express');
const app = express();  // express objesi oluşturuyoruz.
const bodyParser = require('body-parser');   // yazılan veriyi alabilmek için instaal yaptık.
const adminRoutes = require('./routes/admin'); // admin.js i buraya eklemek için
const userRoutes = require('./routes/user'); // user.js i buraya eklemek için
const path = require('path');      // hmtl sayfasını yollamak için pcdeki yerini ogrenmek lazım

app.use(bodyParser.urlencoded({ extended: false })); // bunuda parse etmek için yazıyoruz
app.use(express.static(path.join(__dirname, 'public')));  // public'den img ve css dosyalarını nodejs kullanması için yaptık
                                                          // başka türlü olmuyormuş


//user routes
app.use("/admin", adminRoutes); // admin.js çağırıyoruz , /admin olayı ise admin yolu otomatik adminde gelsin
app.use(userRoutes); // user.js çağırıyoruz 

// kayıtlı olmayan bir adres girilirse hatayı gösterecek sayfa
app.use((req, res) => {
    res.status(404);
    res.sendFile(path.join(__dirname, "views", "404.html")); // __dirname admin.js yolunu verir
    
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});