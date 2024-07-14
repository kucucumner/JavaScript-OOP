function person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}

// person 이라는 컨스트럭션 함수에 프로토 타입으로 sum 이라는 메소드를 지정
person.prototype.sum = function(){
    return this.first + this.second;
}

// person 이라는 컨스트럭션 함수를 상속한 생성자 생성
function personPlus(name,first,second,third){
    // call 을 사용하게 되면 첫번째 인자로 personPlus라고 하는 생성자가 new를 통해서 호출될 때 만들어지는 객체를 this에 담는다.
    person.call(this, name, first, second)
    this.third = third;
}
// personPlus.prototype.__proto__ = person.prototype;


// person.prototype 객체를 __proto__ 라 하는 새로운 객체가 만들어진다.
// 새로운 객체는 person.prototype 가리키게 되기 때문에 잘 작동된다.
personPlus.prototype = Object.create(person.prototype);
// kyo의 constructor function
personPlus.prototype.constructor = personPlus;
personPlus.prototype.avg = function(){
    return (this.first + this.second + this.third)/3;
}

let kyo = new personPlus('kyo', 20 , 30, 40);
console.log(kyo.sum());
console.log(kyo.avg());
console.log("kyo.constructor", kyo.constructor);