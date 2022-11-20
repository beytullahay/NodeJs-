# NodeJs-
----------------------------------------------

http://localhost:3000/

----------------------------------------------

NPM(node package manager)

npm init --yes               // bu kod ile default şekilde npm paketi oluşturulabilir. 
npm i webpack --save-dev     // sadece uygulamayı yazarken kullan. Pc ye yükleme
npm i live-server --global   // bu şekilde yapınca ise pcye yüklenir ve tüm farklı projelerde çalışır. Başka pcde çalışmaz bu şekil paket.

npm list -g  		   // global paketleri görüntüler
npm list -g --debth 0  // sadece üst paketleri gösterir, altları göstermez

npm uninstall jquery  // bu kod ile paketi silebiliriz.


npm install nodemon --save-dev      // bu paket sayesinde terminale node app.js yazmak zorunda kalmıyoruz her çalıştırdığımızda.
npm install nodemon --g             // global oluşturmak daha mantıklı sürekli lazım oluyor diye	

sonra package.json'a gidip script altına "start": "nodemon app.js" yazdıktan sonra terminale npm start yazarak çalıştırırız
artık ctrl s yaptıgımızda otomatik çalışır.

----------------------------------------------

Express.js Framework
npm i express  // yükleme işlemi standart 


----------------------------------------------
