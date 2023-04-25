import { Component } from 'react';
import ReactDom from 'react-dom/client'

const Root = ReactDom.createRoot(window.root)

class Counter extends Component {
    constructor(props) {
        super();
        this.state = {
            count: props.count
        }
    }
    handler = () => {
        // setTimeout(() => {
        // this.setState({
        //     count: ++this.state.count //替换前就已经执行
        // })
        // this.setState({
        //     count: this.state.count + 3
        // })
        // this.setState({
        //     count: this.state.count + 4
        // })
        // }, 0)
        this.setState((prevState) => ({ count: prevState.count + 1 }))
        this.setState((prevState) => ({ count: prevState.count + 3 }))
        this.setState((prevState) => ({ count: prevState.count + 2 }))
    }
    render() {
        return (<div>
            {this.state.count}
            <button onClick={this.handler}>点击</button>
        </div>)
    }
}
// Root.render(<Counter count="1" />) //如果想传入数字，要 {2}
Root.render(<Counter count={0} />)