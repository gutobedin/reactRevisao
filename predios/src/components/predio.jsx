import axios from "axios"
import { useState } from "react"
import PredioForm from "./predioForm";

const [predios, setPredios] = useState([])


export default function Predio() {
    axios.get('http://localhost:3000/predio')
        .then(response => {
            console.log(response)
            setPredios(response.data)
        })
        .catch(error => { console.log(error) });


    const novo = { id: null, nome: '', sigla: '', andares: '', rua: '', }

    const [predio, setPredio] = useState(novo)

    const [operacao, setOperacao] = useState('listar')

    const inserir = () => {
        setPredio(novo);
        setOperacao('inserir');
    }

    const salvar = () => {
        console.log('Salvar ...');
        if (operacao === 'inserir') {
            predio.id = predios.length + 1
            setPredios([...predios, predio])
        } else if (operacao === 'editar') {
            setPredios(predios.map((find) => (find.id === predio.id ? predio : find)))
        }
        setOperacao('listar');
    }

    const cancelar = () => {
        console.log('Cancelou ...');
        setOperacao('listar');


    }


    if (operacao === 'inserir') {
        return (
            <PredioForm predio={predio} setPredio={setPredio}
                salvar={salvar} cancelar={cancelar} />
        )
    }

    else return (
        <div>
            <div class="d-flex justify-content-md-center p-2">
                <button class="btn btn-primary btn-sm" onClick={inserir} >Inserir</button>
            </div>

            <table class="table table-striped table-bordered table-condensed table-hover">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Nome</th>
                        <th>Sigla</th>
                        <th>Andares</th>
                        <th>Rua</th>
                        <th>Operações</th>
                    </tr>
                </thead>
                <tbody>
                    {predios.length > 0 ? (predios.map((u, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{u.nome}</td>
                            <td>{u.sigla}</td>
                            <td>{u.andares}</td>
                            <td>{u.rua}</td>
                            <td>
                                <button class="btn btn-primary btn-sm m-2">Editar</button>
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