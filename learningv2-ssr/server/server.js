import express from 'express'
import fs from 'fs'
import path from 'path'

import React from 'react';
import ReactDOMServer from 'react-dom/server'
import App from '../src/App'
import { store } from '../src/redux/store';
import { Provider } from "react-redux";

const PORT = process.env.PORT || 5000
const app = express();

app.use('^/$',(req,res,next)=>{
    fs.readFile(path.resolve('./build/index.html'),'utf-8',(err,data) => {
        if(err){
            console.log(err)
            return res.status(500).send(`Some error occured`)
        }
        return res.send(data.replace(
            '<div id="root"></div>',
            `<div id="root">${ReactDOMServer.renderToString(<Provider store={store}><App/></Provider>)}</div>`
            )
        );

    });
});

app.use(express.static(path.resolve(__dirname,'..','build')))

app.listen(PORT, () => {
    console.log(`App is listening on port : ${PORT}`)
})