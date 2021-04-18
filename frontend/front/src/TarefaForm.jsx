import React, {Component} from 'react'
import axios from 'axios'

export default class TarefaForm extends Component {

    constructor(){
        super()
        this.state = {
            descricao: "",
            quem: "",
            onde: "",
            prioridade: 0
        }
    }

    setDescricao(e){
        this.setState({
            descricao: e.target.value
        })
    }
    setQuem(e){
        this.setState({
            quem: e.target.value
        })
    }
    setOnde(e){
        this.setState({
            onde: e.target.value
        })
    }
    setPrioridade(e){
        this.setState({
            prioridade: e.target.value
        })
    }

    cadastrar(){

        const newTask = {
            descricao: this.state.descricao,
            quem: this.state.quem,
            onde: this.state.onde,
            prioridade: this.state.prioridade
        }

        axios.post(
            `https://localhost:3003/api/tarefas`, newTask
        ).then(resposta => console.log(`Funcionou ${resposta.data}`))

    }

    render(){
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="descricao"> Descrição </label>
                    <input className="form-control" onChange={e => this.setDescricao(e) } type="text" id="descricao" value={this.state.descricao}/>
                </div>
                <div className="form-group">
                    <label htmlFor="quem"> Quem </label>
                    <input className="form-control" onChange={e => this.setQuem(e) } type="text" id="quem" value={this.state.quem}/>
                </div>
                <div className="form-group">
                    <label htmlFor="onde"> Onde </label>
                    <input className="form-control" onChange={e => this.setOnde(e) } type="text" id="onde" value={this.state.onde}/>
                </div>
                <div className="form-group">
                    <label htmlFor="prioridade"> Prioridade </label>
                    <input className="form-control" onChange={e => this.setPrioridade(e) } type="number" id="prioridade" value={this.state.prioridade}/>
                </div>
                <div className="form-group">
                    <button type="button" onClick={ e => this.cadastrar() } className="btn btn-default"> Cadastro </button>
                </div>
            </form>
        )
    }

}