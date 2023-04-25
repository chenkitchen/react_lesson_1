import React from "react";
import ReactDom from "react-dom/client"

function Clock(props) {
    console.log(props);
    let local = props.data
    function text() {
        return local.name
    }
    return <h1>
        点击按钮
        {text()}
        {props.data.name}
    </h1>
}

ReactDom.createRoot(window.root).render(<>
    <Clock data={{ name: 'zhangsan' }}></Clock>
    {/* <Clock></Clock> */}
</>)
// export default {
//     Clock
// } 