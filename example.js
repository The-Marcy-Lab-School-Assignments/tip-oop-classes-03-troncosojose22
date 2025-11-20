class Chip {
    constructor(name, flavor){
        this.name = name;
        this.flavor = flavor;
    }

    eat() {
        console.log(`I love eating ${this.name} chips`)
    }

    flavor() {
        console.log(`${this.flavor}`)
    }
}

class Ruffles extends Chip {
    constructor(flavor) {
        super('Ruffles', flavor)
    }

    eat() {
        console.log(`I love eating Ruffles`)
    }

    flavor() {
        console.log(`${super.eat()} flavored Ruffles`)
    }
}