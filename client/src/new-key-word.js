function myNew(constructor) {
    var obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    return constructor.apply(obj, Array.prototype.slice.call(arguments, 1)) || obj
}

function Animal(sound) {
    this.sound = sound;
}

Animal.prototype.makeSoiund = function () {
    console.log(this.sound);
};

const Doggo = new Animal('wooof');
const Cotto = myNew(Animal, 'meeeow');

Doggo.makeSoiund();
Cotto.makeSoiund();
