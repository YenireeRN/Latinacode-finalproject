import React, { useState, useEffect } from "react";
import "../styles.css";

const Settings = () => {
  const [oldPin, setOldPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmNewPin, setConfirmNewPin] = useState("");
  const [message, setMessage] = useState("");

  //from localStorage
  useEffect(() => {
    const storedPin = localStorage.getItem("pin");
    if (storedPin) {
      setOldPin(storedPin);
    }
  }, []);

  const handleOldPinSettings = (e) => {
    setOldPin(e.target.value);
  };

  const handleNewPinSettings = (e) => {
    setNewPin(e.target.value);
  };

  const handleConfirmNewPinSettings = (e) => {
    setConfirmNewPin(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (oldPin === "1234" && newPin === confirmNewPin) {
      try {
        localStorage.setItem("pin", newPin);
        alert("Tu PIN ha sido actualizado");
      } catch (error) {
        alert("Error al cambiar el PIN.");
      }
    } else {
      alert("Asegurate de que los nuevos PIN coincidan");
    }
  };

  return (
    <>
      <p>Ingresa el antiguo PIN y elige uno nuevo para actualizarlo:</p>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>Antiguo PIN:</label>
          <input type="password" onChange={handleOldPinSettings} />
          <label>Nuevo PIN:</label>
          <input
            type="password"
            value={newPin}
            onChange={handleNewPinSettings}
          />
          <label>Confirmar nuevo PIN:</label>
          <input
            type="password"
            value={confirmNewPin}
            onChange={handleConfirmNewPinSettings}
          />
          <button type="submit">Cambiar PIN</button>
        </form>
      </div>
      <p>{message}</p>
    </>
  );
};

export default Settings;
