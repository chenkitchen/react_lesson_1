// import React from 'react'; //es6 导入模块
// 导入 react 必须大写
// import ReactDOM from 'react-dom/client'

// import './history/2、jsx'
import './history/3、component'

let h1 = <h1 id="box">hello world <span>你好</span></h1>

console.log(h1);

// ReactDOM.createRoot(document.getElementById('root')).render(h1)

let React = {
    createElement(type, props, children) {
        console.log(type, props, children);
    }
}