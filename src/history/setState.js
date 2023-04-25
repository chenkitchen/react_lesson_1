function transcation(component) {
    component.state = component.pendingState
    component.render()
}
class A {
    constructor() {
        this.state = {
            num: 0
        };
        this.pendingState = { ...this.state }
    }
    setState(obj) {
        this.pendingState = { ...this.pendingState, ...obj }
    }
    render() {
        console.log(this.state.num);
    }
    updated() {
        setTimeout(() => {
            this.setState({ num: this.state.num + 1 })
            this.setState({ num: this.state.num + 2 })
            this.setState({ num: this.state.num + 3 })
        }, 0)
        transcation(this)
    }
}

let a = new A()
a.updated()