import { useState } from "react";
import axios from "axios";

    function Formulario() {
    const [form, setForm] = useState({
        nombres: "",
        apellidos: "",
        fechaNacimiento: "",
        direccion: "",
        telefono: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const guardar = async () => {
        await axios.post("https://localhost:5001/api/estudiantes", form);
        alert("Guardado");
    };

    return (
    <div>
        <input name="nombres" onChange={handleChange} placeholder="Nombres" />
        <input name="apellidos" onChange={handleChange} placeholder="Apellidos" />
        <input type="date" name="fechaNacimiento" onChange={handleChange} />
        <input name="direccion" onChange={handleChange} placeholder="Dirección" />
        <input name="telefono" onChange={handleChange} placeholder="Teléfono" />
        <button onClick={guardar}>Guardar</button>
        </div>
    );
}

export default Formulario;