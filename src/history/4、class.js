import React, { Component } from "react"; //Component 是属于基类，React是大类，两者都要可以这样写入同一个import中
import ReactDom from 'react-dom/client'


// 父类提供一个可以改变自己状态的方法

// React.Component 是父类，提供了 例如 setState

const Root = ReactDom.createRoot(window.root)

class Clock extends Component {

    // constructor(props) {
    //     // console.log(props);//{name: 'zhangsan'}
    //     super()
    //     // this.state = {
    //     //     age: 30,
    //     //     address: 'shengzhen'
    //     // }
    // }
    state = { //es7
        age: 30,
        address: 'shengzhen',
        date: new Date().toLocaleString()
    }
    componentDidMount() {
        setInterval(() => { //必须是箭头符号才能保留当前的this
            this.setState({ //必须传入一个对象
                date: new Date().toLocaleString() //需要改变成什么
            })
        }, 1000)
    }
    handleClick = () => {
        // console.log(this);
        Root.unmount(window.root)
    }
    render() {
        return <div>
            {this.props.name}
            今年{this.state.age}岁,住在
            {this.state.address},现在的时间是:
            {this.state.date}
            <span onClick={this.handleClick}> 关闭组件</span>
        </div>
    }

}

Root.render(<Clock name='zhangsan' />)