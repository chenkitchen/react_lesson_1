import React from 'react';
import ReactDom from 'react-dom/client'
import PropTypes from 'prop-types'

const Root = ReactDom.createRoot(window.root)

class Person extends React.Component {
    constructor(props) {
        super();

    }
    static defaultProps = { //添加默认值
        num: '001'
    }
    static propTypes = { //添加校验规则
        name: PropTypes.string
    }
    render() {
        return (<div>
            {Object.values(this.props)}
        </div>)
    }
}
let obj = {
    name: 'zhangsan',
    age: 30,
    gender: 'male'
}

Root.render(<Person {...obj} />)
// Root.render(<Person  />)