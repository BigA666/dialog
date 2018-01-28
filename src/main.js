import React from 'react'
import ReactDOM from 'react-dom'
import Home from './view/home.jsx'

if(NODE_ENV == 'development'){
    console.log('现在是开发环境')
}else{
    console.log('现在是生产环境')
}

ReactDOM.render(
    <Home/>,
    document.querySelector('#root')
)