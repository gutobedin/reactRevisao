import React from 'react'
const PredioForm = (props) => {

    const handleInputChange = (event) => {
        const { id, value } = event.target
        props.setPredio({ ...props.predio, [id]: value })
    }

    return (
        <form>
            <div class="form-group">
                <label class="d-flex justify-content-center">Nome</label>
                <input class="form-control m-2" type="text" id="nome"
                    value={props.predio.nome} onChange={handleInputChange} />
            </div>
            <div class="form-group">
                <label class="d-flex justify-content-center">Sigla</label>
                <input class="form-control m-2" type="text" id="sigla"
                    value={props.predio.sigla} onChange={handleInputChange} />
            </div>
            <div class="form-group">
                <label class="d-flex justify-content-center">Andares</label>
                <input class="form-control m-2" type="text" id="andares"
                    value={props.predio.andares} onChange={handleInputChange} />
            </div>
            <div class="form-group">
                <label class="d-flex justify-content-center">Rua</label>
                <input class="form-control m-2" type="text" id="rua"
                    value={props.predio.rua} onChange={handleInputChange} />
            </div>
            <div class="form-group">
                <button type="button" onClick={props.salvar}
                    className="btn btn-primary btn-sm m-2">Salvar</button>
                <button type="button" onClick={props.cancelar}
                    className="btn btn-primary btn-sm">Cancelar</button>
            </div>
        </form>
    )
}
export default PredioForm