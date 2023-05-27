class Pet{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        return `${this.name} is eating`
    }
}

class Cat extends Pet{
    constructor(name,age,livesLeft=0){
        super(name,age)
        this.livesLeft=livesLeft;
    }
    meow(){
        return 'MEOWWWWWW!!'
    }
}

class Dog extends Pet{
    bark(){
        return 'WOOFWOOF!'
    }
    eat(){
        return `${this.name} is glabbing its food! `
    }
}
const d1=new Dog('Silly Shibe',4);
const c1=new Cat('Garfield',35)