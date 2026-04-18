import { useEffect, useState } from "react";
import axios from "axios";

function Lista() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5159/api/Estudiantes")
        .then(res => setData(res.data));
}, []);

return (
    <table>
    <thead>
        <tr>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Edad</th>
            <th>Dirección</th>
            <th>Teléfono</th>
        </tr>
    </thead>
    <tbody>
        {data.map((e, i) => (
        <tr key={i}>
            <td>{e.nombres}</td>
            <td>{e.apellidos}</td>
            <td>{e.edad}</td>
            <td>{e.direccion}</td>
            <td>{e.telefono}</td>
        </tr>
        ))}
    </tbody>
    </table>
    );
}

export default Lista;
