import React,{Component} from 'react'

import Routes from './main/Routes'
import Menu from './template/Menu'

export default class App extends Component {

    render(){
        return (
            <div>
                <Menu/>
                <div className="container">
                    <Routes/>
                </div>
            </div>
        )
    }

}