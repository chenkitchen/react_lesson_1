import React from 'react'
import ReactDom from 'react-dom/client'
import { Clock } from './3、component'


let ele = (
    <>
        <h1 style={{ background: 'green' }}>kk</h1>
        <p className='show'>内容 {fn()} {[] === ![] ? '是的' : '不是的'}</p>
        {/* {{ name: 'zhangsan' }} */}
        <label htmlFor='username'>用户名</label>
        <input type='text' id='username' />
    </>
)

console.log(ele);

function fn() {
    return '输出一段话'
};

let arr = ['吃饭', '喝水', '睡觉']
let renderArr = arr.map((item, idx) => <li key={idx}>{item}</li>)

let container = <ul>{renderArr}<Clock /></ul>

ReactDom.createRoot(window.root).render(container)