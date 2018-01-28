import React, {Component} from 'react'
import Dialog from '../component/dialog'

class Home extends Component{
    constructor () {
        super()
        this.tips = this.tips.bind(this)
        this.callback = this.callback.bind(this)
    }
    tips () {
        this.refs.dialog.open()
    }
    callback () {
        console.log('你要干啥吗?')
    }
    render () {
        return <div>
                    <h1 onClick={this.tips}>请点击</h1>
                    <Dialog ref='dialog' callback={this.callback}>
                    </Dialog>
                </div>
    }
}

export default Home