import React, {Component} from 'react'

export default class Menu extends Component {

    render(){
        return (
            <nav className="navbar navbar-inverse bg-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <a className="nav-bar-brand" href="/">
                            <i className="fa fa-calender-check-o"></i> TodoApp
                        </a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li><a href="/tarefas"> Tarefas</a></li>
                            <li><a href="/about"> Sobre</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}