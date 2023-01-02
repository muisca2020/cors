const cors = require('cors');
const express = require('express');
const app = express();

const whiteList = ['https://www.section.io', 'https://www.google.com'];

const corsOptions = {
    origin: (origin, callback) => {
        if(whiteList.indexOf(origin) !== -1){
            callback(null, true);
        } else {
            callback(new Error());
        }
    }
};

app.use(cors(
    {
        // Este primer ejemplo permite consultar esta api desde estos dos dominios
        //origin: ['https://www.section.io', 'https://www.google.com']
        
        // Esta otra configuración permite consultar la api desde cualquier dominio
        origin: '*',
        // Con esta otra configuración se indica los tipos de petición permitidos
        methods: ['GET', 'POST', 'DELETE', 'UPDATE']
    }
));

const ingredientes = [
    {
        "id": 1,
        "item": "huevos"
    },
    {
        "id": 2,
        "item": "leche"
    },
    {
        "id": 3,
        "item": "hot-cakes"
    },
    {
        "id": 4,
        "item": "chilaquiles"
    }
];

app.get("/ingredientes", cors(), (req, res) => {
    res.send(ingredientes);
});

app.listen(3004);