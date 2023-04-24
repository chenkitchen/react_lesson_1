import React from "react";
import ReactDom from "react-dom/client"

function Clock() {
    return <h1>点击按钮</h1>
}

ReactDom.createRoot(window.root).render(<><Clock></Clock><Clock></Clock></>)
// export default {
//     Clock
// } 