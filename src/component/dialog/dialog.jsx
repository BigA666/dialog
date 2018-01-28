import React, {Component} from 'react'
import './dialog.css'
import Masker from './masker.jsx'
import Title from './title.jsx'
import Message from './message.jsx'
import ButtonParent from './ButtonParent.jsx'
import Button from './Button.jsx'
/* *
 *Dialog Component 
 * @callback function 点击确定按钮的回调
 * 
 * @open function 唤起弹出框组件
*/
class Dialog extends Component{
    constructor () {
        super()
        this.state = {
            isShow: false
        }
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
    }

    open () {
        this.setState((state) => {
            state.isShow = true 
            return state
        })
    }

    close () {
       
        this.setState((state) => {
            state.isShow = false
            return state
        })
        this.props.callback()
    }

    render () { 
        
        return (this.state.isShow && <div className='dialog' >
            <Masker>
                <Title>确定要删除？<span className='close' onClick={this.close}>x</span></Title>
                <Message>
                    不知道
                </Message>
                <ButtonParent>
                    <Button close={this.close}>确定</Button>
                    <Button close={this.close}>取消</Button>
                </ButtonParent>
            </Masker>
        </div>)
    }
}

export default Dialog
