import React, { useState } from "react";
import Menu from "./Menu";
import "../styles.css";

function Login() {
  const [login, setLogin] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [usuario, setUsuario] = useState("");
  const [pin, setPin] = useState("");

  function iniciarSesion(e) {
    e.preventDefault();

    if (
      nombrecompleto.length === 0 ||
      usuario.length === 0 ||
      pin.length === 0
    ) {
      alert("Ops, algo está faltando, por favor completa todos los datos!");
    } else {
      if (usuario === "Yenito" && pin === "1234") {
        localStorage.setItem("nombre y apellido", nombre); //Guarda
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("pin", pin);
        setLogin(true);
        document.getElementById("form_login").style.display = "none"; //ocultar el formulario
      } else {
        setLogin(false);
        alert("Error de usuario y/o PIN");
        setUsuario("");
        setPin("");
        document.getElementById("usuario").focus();
      }
    }
  }

  return (
    <div className="container">
      <form id="form_login" action="">
        <h1>Yenito Bank </h1>
        <label htmlFor="nombrecompleto">Nombre y Apellido:</label>
        <input
          type="text"
          id="nombrecompleto"
          placeholder="Escribe tu primer nombre y apellido."
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label htmlFor="usuario">Usuario:</label>
        <input
          type="text"
          id="usuario"
          placeholder="Escribe tu usuario"
          onChange={(e) => setUsuario(e.target.value)}
          required
        />

        <label htmlFor="pin">PIN:</label>
        <input
          type="password"
          id="pin"
          placeholder="Escribe tu PIN"
          onChange={(e) => setPin(e.target.value)}
          required
        />
        <button type="submit" onClick={iniciarSesion}>
          Iniciar Sesión
        </button>
      </form>
      {/* cuando inicie sesion muestra componente Menu */}
      {login && <Menu nombre={nombre} />}
    </div>
  );
}

export default Login;
