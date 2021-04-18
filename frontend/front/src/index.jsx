import React from 'react'
import ReactDom from 'react-dom'
import Tarefa from './Tarefa'

ReactDom.render(
    <div className="container">
        <Tarefa/>
    </div>
    , document.getElementById("root")
)