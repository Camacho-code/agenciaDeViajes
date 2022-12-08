//const express = require('express'); // Common JS
import express from "express"; // version Nativa
import router from "./routes/index.js";
import db from "./config/db.js";


const app = express();

//coenctar Base de Datos
db.authenticate()
  .then(() => console.log("Base de datos conectda"))
  .catch((error) => console.log(error));

//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set("view engine", "pug");

// obtener año actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nombreSitio = "Agencia de Viajes";
  next();
});

//Activar body parser para leer los datos del formualrio
app.use(express.urlencoded({extended:true}));

//Definir la carpeta publica
app.use(express.static("public"));

//Agregar router
app.use("/", router);

app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
