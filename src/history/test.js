class Animal {
    constructor(name) {
        this.name = name
    }
    say() {
        console.log(this);
    }
}

let dog = new Animal('zhangsan')
let fn = dog.say
fn()