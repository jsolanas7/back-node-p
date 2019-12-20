
//==========================
//{{PORT}}
//==========================

process.env.PORT = process.env.PORT || 4500;

//==========================
//{{Entorno}}
//==========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//==========================
//{{DATA-BASE}}
//==========================

let urlDB;

if(process.env.NODE_ENV === 'dev'){
    // urlDB = 'mongodb://localhost:27017/mantelmaDB'
    urlDB = 'mongodb+srv://admin:admin@cluster0-k9gxz.mongodb.net/panelaTestDB?retryWrites=true&w=majority';
}else{
    // urlDB = process.env.MONGO_URI
    urlDB = 'mongodb+srv://admin:admin@cluster0-k9gxz.mongodb.net/panelaTestDB?retryWrites=true&w=majority';
}

process.env.URLDB = urlDB;