import axios from "axios"
import { useState } from "react"

export default function Tipo() {
    const [tipos, setTipos] = useState([])


    axios.get('http://localhost:3000/tipo')
        .then(response => {
            console.log(response)
            setTipos(response.data)
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
                        <th>Id</th>
                        <th>Descricao</th>
                        <th>Operações</th>

                    </tr>
                </thead>
                <tbody>
                    {tipos.length > 0 ? (tipos.map((u, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{u.descricao}</td>
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