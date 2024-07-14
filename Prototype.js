// 생성자가 실행이 될 때 마다 내가 생성하려고 하는 객체에 sum이라는 생성될 때마다 새로 만들어진다.
// 이렇게 되면 메모리가 낭비가 된다.
function person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
}
// sum이라는 함수의 동작방법을 바꾸고 싶다면 아래의 방법을 사용한다.
// 하지만 이 방법은 여러개가 있을 경우 비효율적이다. 하나하나 수정을 해줘야하기 때문에 생성자안에서 메소드를 만드는 것이 갖는 단점 중 하나.(생산성이 떨어짐)
// ku.sum = function(){
//     return 'modified : ' +(this.first + this.second + this.third);
// };



// person 생성자 함수에 공통적으로 사용할 sum이라는 메소드를 만든다.
// 생성자 함수에 prototype 즉 sum이라는 함수 원형을 정한다.
// 생성자 함수 안에 정의하는 것이 없어서 객체가 만들어질 때 마다 실행되지 않는다. 한번만 실행(성능, 메모리 절약)
// 여러개의 객체를 하나의 함수를 여러개의 객체들이 같이 공유한다.

person.prototype.sum = function(){
    return 'Prototype :' + (this.first + this.second + this.third);
}
// 만약 ku 라는 변수가 가리키는 객체의 sum 메소드만은 다르게 작동하게 하고싶다면
// 이것을 통해 prototype 의 특징을 알 수 있는데 자바스크립트에서는 ku 라는 객체의 sum 이라는 메소드를 호출할 때 
// 제일먼저 그 객체 자신이 sum 이라고 하는 속성을 갖고 있는지를 찾는다 (현재는 함수) 그리고 sum을 실행시키고 종료

let ku = new person('ku', 30, 20, 30);
ku.sum = function(){
    return 'this :' +(this.first, this.second, this.third);
}
// kyo 라고 하는 객체는 객체를 생성한 후에 sum 이라고 하는 메소드를 설정한 적이 없기 때문에 자바스크립트는 내가 찾는 sum이 kyo가 갖고 있지 않으면
// 객체 생성자인 person에 prototype 이라고 하는 것에 sum에 메소드가 정의되어있는지 찾고 있으면 그것을 실행한다.
const kyo = new person('kyo', 20, 30, 40);
console.log(ku.sum());
console.log(kyo.sum());



// prototype 이란 객체들이 공통으로 사용하는 속성