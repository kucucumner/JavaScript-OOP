// 생성자 함수는 두 가지 일을 한다. 1. 객체를 만든다. 2. 객체의 초기 상태를 세팅한다.
// let ku = new person('ku', 30, 20, 30);
// ku.sum = function(){
//     return 'this :' +(this.first, this.second, this.third);
// }
// const kyo = new person('kyo', 20, 30, 40);
// console.log(ku.sum());
// console.log(kyo.sum());



// class

// 클래스는 객체를 만드는 공장이다.
class person{
    // 클래스로 객체를 만들 때는 객체에 속하는 함수(메소드)를 만들 때는 function을 사용하지 않는다.
    // 객체가 생성될 때 초기상태를 지정하기 위한 객체가 만들어지기 직전에 실행되도록 약속되어 있는 함수는 contructor 를 사용한다.
    // 자바스크립트는 객체를 생성할 때 contructor 함수를 자동으로 호출한다.
    // Hello라는 결과가 먼저 나왔다는것은 이 함수가 객체가 생성되는 과정에서 실행됐다는 것이다.
    // et ku = new person 에 입력값을 주는것을 통해서 ku 라는 객체의 초기값을 세팅하고 싶다면 그 다음은 쉽다. constructor ()에 값을 주기만 하면 된다.
    constructor(name, first, second, third){
        this.name = name;
        this.first = first;
        this.second = second;
        this.third = third;
        console.log('Hello')
    }
    // person 이라는 컨스트럭터를 통해 만들어진 모든 객체가 공유하는 함수를 만드는 방법은 동일하다.
    // 같은 클래스에 속해있는 모든 객체가 공유하는 함수가 된다.(메소드)
    sum(){
        return 'Prototype :' + (this.first + this.second + this.third);
}
}

let ku = new person('ku', 10, 20, 30);
// person 이라는 이름의 객체가 생성된 것을 알 수 있다.
console.log(ku);

console.log(ku.sum());