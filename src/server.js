require("dotenv").config();
import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import logger from "../logger";

logger.log('info', 'Hello created log files!', { 'foo': 'bar' });
logger.info('Hello created log files!', { 'foo': 'bar' })

let app = express();

//config view Engine
configViewEngine(app);

//init all web routes
initWebRoutes(app);

app.get('/hoidanit', (req, res) => {
   setTimeout(function () {
      throw new Error('We crashed!!!!!');
   }, 10);
})


let port = process.env.PORT || 8080;

let a = process.env.NODE_ENV
let b = app.get('env') // returns 'development' if NODE_ENV is not defined

console.log("check a:  ", a, "check b:  ", b)


app.listen(port, () => {
   console.log(`HoiDanIT app is running at the port ${port}`);
});