import React, { Component } from 'react';
import ReactDom from 'react-dom/client'

const Root = ReactDom.createRoot(window.root)

class Form extends Component {
    constructor() {
        super();
    }
    state = {
        username: 'zhangsan',
        password: '1234'
    }
    handlerChange = (e) => {
        // console.log(e);
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (<div>
            <form>
                用户名： <input type='text' name='username' value={this.state.username} onChange={this.handlerChange}></input>
                密码： <input type='text' name='password' value={this.state.password} onChange={this.handlerChange}></input>
            </form>
        </div>)
    }
}

class FormNotControll extends Component {
    checkValue = (e) => {
        e.preventDefault(); //开发过程中，添加阻止默认事件的方法，不然看不到结果
        alert(this.username.value + ',' + this.password.value)
    }
    render() {
        return (<div>
            <form onSubmit={this.checkValue}>
                用户名： <input type='text' name='username' required ref={(val) => this.username = val}></input>
                密码： <input type='text' name='password' required ref={(val) => this.password = val} ></input>
                <button type='submit'> 提交</button>
            </form>
        </div>)
    }
}

Root.render(<><Form /><FormNotControll /></>)