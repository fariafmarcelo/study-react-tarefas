import React, {Component} from 'react'
import axios from 'axios'

export default class TarefaForm extends Component {

    constructor(){

        super()

        this.state = {
            descricao: "",
            realizada: false,
            criadaEm: undefined,
            quem: "",
            onde: "",
            prioridade: 0,
            lista: []
        }

        this.buscaTarefas()

    }

    buscaTarefas(){
        axios.get(`http://localhost:3003/api/tarefas`).then(
            resp => this.setState({lista: resp.data})
        )
    }

    criaLinhasTabela(){
        return (
            this.state.lista.map( cadaTarefa => (
                <tr key={cadaTarefa._id}>
                    <td>{cadaTarefa.descricao}</td>
                    <td>{cadaTarefa.criadaEm}</td>
                    <td>{cadaTarefa.quem}</td>
                    <td>{cadaTarefa.onde}</td>
                    <td>{cadaTarefa.prioridade}</td>
                    <td><button type="button" onClick={ e => this.remover()} className="btn btn-danger">Remover</button></td>
                </tr>
            ))
        )
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
            realizada: this.state.realizada,
            criadaEm: this.state.criadaEm,
            quem: this.state.quem,
            onde: this.state.onde,
            prioridade: this.state.prioridade
        }

        axios.post(
            `http://localhost:3003/api/tarefas`, newTask
        ).then(resposta => console.log(`Funcionou ${resposta.data}`))

    }

    remover(){
        axios.delete(
            `http://localhost:3003/api/tarefas`
        )
    }

    render(){
        return (
            <div className="form">
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
                <div>
                    <hr></hr>
                    <h3>Lista de Tarefas</h3>
                    <hr></hr>
                    <table className="table">
                        <thead>
                            <tr>
                                <th> Descrição </th>
                                <th> Criada Em </th>
                                <th> Quem </th>
                                <th> Onde </th>
                                <th> Prioridade </th>
                                <th> Ações </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.criaLinhasTabela()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}