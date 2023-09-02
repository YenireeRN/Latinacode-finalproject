import React, { useState } from "react";
import Emend from "./Settings";
import Checkup from "./Checkup";
import { NavLink } from "react-router-dom";
import Buy from "./Buy";
import Funds from "./Funds";
import Statuslist from "./Statuslist";
import "../styles.css";

const Menu = (props) => {
  const [settings, setEmend] = useState("");
  const [checkup, setCheckup] = useState("");
  const [buy, setBuy] = useState("");
  const [sell, setSell] = useState("");
  const [funds, setFunds] = useState("");
  const [status, setStatus] = useState("");

  function op_emend() {
    setEmend("1");
    setCheckup("0");
    setBuy("0");
    setFunds("0");
    setStatus("0");
  }

  function op_checkup() {
    setEmend("0");
    setCheckup("1");
    setBuy("0");
    setFunds("0");
    setStatus("0");
  }

  function op_buy() {
    setEmend("0");
    setCheckup("0");
    setBuy("1");
    setSell("0");
    setFunds("0");
    setStatus("0");
  }

  function op_funds() {
    setEmend("0");
    setCheckup("0");
    setBuy("0");
    setFunds("1");
    setStatus("0");
  }

  function op_status() {
    setEmend("0");
    setCheckup("0");
    setBuy("0");
    setFunds("0");
    setStatus("1");
  }

  function cerrarSesion() {
    document.getElementById("caja_menu").style.display = "none";
    alert("Sesion Finalizada... Vuelve pronto!");
    document.getElementById("form_login").style.display = "block";
    document.getElementById("nombrecompleto").value = "";
    document.getElementById("usuario").value = "";
    document.getElementById("pin").value = "";
  }

  return (
    <div id="caja_menu">
      <nav className="sidebar">
        <div className="logo">
          <span class="material-symbols-outlined">face</span>
          <h2>Yenito Bank</h2>
        </div>
        <NavLink className="logo" to="" onClick={op_checkup}>
          <span class="material-symbols-outlined">arrow_outward</span>
          <h2>Acciones</h2>
        </NavLink>
        <NavLink className="logo" to="" onClick={op_buy}>
          <span class="material-symbols-outlined">swipe_up</span>
          <h2>Compra</h2>
        </NavLink>
        <NavLink className="logo" to="" onClick={op_funds}>
          <span class="material-symbols-outlined">browse_activity</span>
          <h2>Saldo</h2>
        </NavLink>
        <NavLink className="logo" to="" onClick={op_status}>
          <span class="material-symbols-outlined">settings_accessibility</span>
          <h2>Cuenta</h2>
        </NavLink>
        <NavLink className="logo" to="" onClick={op_emend}>
          <span class="material-symbols-outlined">
            <span class="material-symbols-outlined">settings_applications</span>
          </span>
          <h2>Ajustes</h2>
        </NavLink>

        <a className="logout" href=" " onClick={cerrarSesion}>
          <span class="material-symbols-outlined">logout</span>
        </a>
      </nav>
      <h2 className="saludo"> Bienvenidx, {props.nombre} !</h2>

      {settings === "1" && <settings />}
      {checkup === "1" && <Checkup />}
      {buy === "1" && <Buy />}
      {funds === "1" && <Funds />}
      {status === "1" && <Statuslist />}
    </div>
  );
};

export default Menu;
