// 객체의 내용이나 동작하는 방법이 바뀌었다면 
// var ku = {
//     name : 'ku',
//     first : 10,
//     second : 20,
//     third : 30,
//     sum : function(){
//         return this.first + this.second + this.third;
//     }
//}

// console.log(ku.sum());

// 이 객체도 형식이 바뀌어야 한다. 같은 형태, 취지의 객체에 모두 적용을 해야한다.
// var kyo = {
//     name : 'kyo',
//     first : 10,
//     second : 20,
//     third : 20,
//     sum : function(){
//         return this.first + this.second + this.third;
//     }
// }


// console.log(kyo.sum());

// new 를 썼을 때 객체를 만들어서 우리에게 리턴해준다. 이렇게 되면 코드가 깔끔해지고 변경한다 하더라도 모든 객체가 자동으로 다르게 생산된다.
const d1 = new Date('2024-7-8')

console.log(d1.getFullYear());
console.log(d1.getMonth());

// 함수를 이용해서 객체를 만들 때 만들어진 객체를 사용할 때 this 사용
// 자신이 기대하는 각각의 값을 만드려면 함수에 인자를 받으면 된다. ex) name, first , second ...
function person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function(){
        return this.first + this.second + this.third;
    }
}
// 아무것도 리턴하고 있지 않기 때문에 undefined가 출력된다.
console.log('error', person());
// new 사용하게 된다면 함수가 완전히 다른 존재가 된다.
// new를 사용하게 된다면 일반적인 함수가 아니라 객체를 생성하는 생성자가 된다.(constructor)
console.log(new person());

// new를 사용하게 되면 맨 위에 있던 코드가 이렇게 간단하게 바뀐다.
const ku = new person('ku', 30, 20, 30);
const kyo = new person('kyo', 10, 20, 30);
console.log(ku.sum());
console.log(kyo.sum());


// 생성자를 만들면 좋은점은 {} 통해서 객체를 만들 때마다 그 객체를 다시 정의해줘야 하지만 생성자를 만들면 new를 사용함으로써 객체가 양산된다.
// 생성자 함수의 내용을 바꾸면 모든 객체가 한번에 바뀌는 폭발적인 효과가 나온다.