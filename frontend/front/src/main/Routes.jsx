import React from 'react'

//rotas
import {Router, Route, Redirect, Switch} from 'react-router-dom'

import Tarefa from '../Tarefa'
import About from '../About'

import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

//componente de função
export default props => (
    <Router history={history}>
        <Switch>
            <Route path="/tarefas" component={Tarefa}/>
            <Route path="/about" component={About}/>
            <Redirect from="*" to="/tarefas"/>
        </Switch>
    </Router>
)