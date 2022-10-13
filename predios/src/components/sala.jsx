import axios from "axios"
import { useState } from "react"

export default function Sala() {
    const [salas, setSalas] = useState([])


    axios.get('http://localhost:3000/sala')
        .then(response => {
            console.log(response)
            setSalas(response.data)
        })
        .catch(error => { console.log(error) });

    return (
        <div>
            <div class="d-flex justify-content-md-center p-2">
                <button class="btn btn-primary btn-sm" >Inserir</button>
            </div>

            <table class="table table-striped table-bordered table-condensed table-hover">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Descricao</th>
                        <th>Capacidade</th>
                        <th>Andar</th>
                        <th>Localizacao</th>
                        <th>Predio</th>
                        <th>Operações</th>

                    </tr>
                </thead>
                <tbody>
                    {salas.length > 0 ? (salas.map((u, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{u.descricao}</td>
                            <td>{u.capacidade}</td>
                            <td>{u.andar}</td>
                            <td>{u.localizacao}</td>
                            <td>{u.predio}</td>
                            <td>
                                <button class="btn btn-primary btn-sm">Editar</button>
                                <button class="btn btn-danger btn-sm">Excluir</button>
                            </td>
                        </tr>
                    ))) : (
                        <tr>
                            <td colSpan={3}>Nenhum usuário.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}