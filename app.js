const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

const mongoUrl="mongodb+srv://Cristian_J:mN92iYhTBj1t8GOQ@cluster0.31odnwv.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((e) => console.log(e));


app.listen(5000, () => {
  console.log("Servidor funcionando");
});

app.post("/post", async (req, res) => {
    console.log(req.body);
    const {data} = req.body;

    try{
        if(data == "Cristian_J"){
            res.send({status:"ok"});
        }else{
            res.send({status:"Usuario no encontrado"});
        }

    } catch (error){
        res.send({status:"Algo salió mal, intenta de nuevo"});
    }

});

require("./usuario_info");

const Usuario = mongoose.model("Información de usuario");

app.post("/register", async (req, res) => {
    const { nombre, email, telefono } = req.body;
  
    try {
      await Usuario.create({
        us_nombre:nombre,
        us_email:email,
        us_telefono: telefono,
      });
      res.send({ status: "ok" });
    } catch (error) {
      res.send({ status: "error" });
    }
  });

  //HOLA PRUEBA3 JS







