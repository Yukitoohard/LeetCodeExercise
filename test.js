class Animal{
    static changeAnimal(newAnimal) {
        this.newAnimal = newAnimal;
        return this.newAnimal;
    }
    construtor({newAnimal = 'cat'} = {}) {
        this.newAnimal = newAnimal;
    }
}

const animal = new Animal({newAnimal: 'dog'});
console.log(animal.changeAnimal('bird'));
