const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan')
const db = require('./database/connection');
const authRouter = require('./routes/v1/auth.routes');
require('dotenv').config();
const path = require("path");
//Swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerSpec = {
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Expo API",
            version:"1.0.0"
        },
        servers:[
            {
                url:'http://localhost:8040/'
            }
        ],
    },
    apis: [`${path.join(__dirname,"./routes/v1/*.js")}`]
}

db.connectDb();
app.use(express.json());
app.use(cors({
    origin:'*'
}));
app.use(morgan('dev'));
app.use("/v1/doc",swaggerUI.serve,swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
app.use('/v1',authRouter);
app.listen(process.env.PORT || 3030, ()=>{
    console.log("Server running in port" + process.env.PORT);
})
