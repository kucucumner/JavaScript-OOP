// 클래스가 아닌 인스턴스 즉 객체를 직접 다른 객체에 자식으로 만들어버릴 수 있다.
const superObj = {superVal : 'Super'}
// const subObj = {subVal : 'sub'}

// subObj.__proto__ = superObj;

// __proto__ 통해서 다른 객체를 상속받을 수 있다.
// __proto__ 값만 바꾸면 그 객체는 다른 객체의 자식이 된다. 굉장히 유연한 특징이 있다.

// 이 메소드가 새로운 객체를 만드는데 그 새로운 객체는 superObj를 부모로 하는 새로운 객체다.
const subObj = Object.create(superObj);
subObj.subVal = 'sub';
console.log('superObj.subVal =' , subObj.subVal);
// 즉 __proto__ 라고 프로토타입 링크를 통해 subObj 가 superObj 의 자식이다 라는 링크를 걸어줬다.
// 자바스크립트는 먼저 superVal 이라는 프로퍼티가 있는지 subObj 에서 찾아본다. 하지만 없기 때문에 링크에 걸려있는 superObj 에서는 존재하기 때문에 그것을 사용한다.
console.log('superObj.superVal =' , subObj.superVal);
subObj.superVal = 'sub';
console.log('superObj.superVal =' , superObj.superVal);

// __proto__ 통해서 다른 객체를 상속받을 수 있다.
// __proto__ 값만 바꾸면 그 객체는 다른 객체의 자식이 된다. 굉장히 유연한 특징이 있다.


// 응용
let hyun = {
    name : 'hyun',
    first : 20, second: 30,
    sum: function(){
        return this.first + this.second
    }
}
let kim = Object.create(hyun);
    kim.name = 'kim';
    kim.first = 20;
    kim.second = 30;
    kim.avg = function(){
        return(this.first + this.second)/2;
    }
console.log('kim' , kim.avg());