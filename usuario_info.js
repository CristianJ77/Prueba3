const mongoose = require("mongoose");

const Usuario_info = new mongoose.Schema(
  {
    us_nombre: String,
    us_email: { type: String, unique: true },
    us_telefono: String,
  },
  {
    collection: "Usuario Info",
  }
);

mongoose.model("Información de usuario", Usuario_info);