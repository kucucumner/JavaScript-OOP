let ku = {
    name : 'ku',
    first : 20,
    second : 30
}

let kyo = {
    name : 'kyo',
    first : 40,
    second : 30
}

function sum(prefix){
    //call 로 인해서 this = ku 가 된다.
    return prefix + (this.first + this.second);
}

// sum 이라는 객체를 실행시킨다. sum(); 과 똑같은 기능하지만
// 모든 함수는 call이라는 메소드를 가지고 있다. 자바스크립트에서는 함수도 객체이기 때문이다.
// 첫번재 인자로 ku 를 주면 this = ku가 된다.
console.log("sum.call(ku)" , sum.call(ku, '=>'));
// 인자를 kyo를 줬기 때문에 sum 안에서 this 는 kyo 가 된다.
console.log('sum.call(kyo)' , sum.call(kyo, ':'));

// call이라고 하는 함수는 첫번째 인자는 그 함수의 내부적으로 this를 무엇으로 할것인지 정하고 두번째 인자부터는 호출하려고 하는 함수에 파라미터에 들어갈 인자값이 들어간다.

// sum 이라는 함수가 호출될 때 마다 this를 바꾸는 것이 아니라 아애 함수에 내부적으로 사용할 this 의 값을 고정시키려면 bind를 사용한다.
// sum 이라는 함수는 똑같지만 this를 ku로 하는 새로운 함수가 만들어진다.
// bind 도 마찬가지로 함수가 호출될 때 마다 사용될 인자를 지정할 수 있다.
let newku = sum.bind(ku, '->');
console.log('newku', newku());

// sum은 바뀌지 않고 sum이 위의 함수의 취지에 맞게 달라진 새로운 함수가 만들어져서 return을 받는다.
// call 과 비슷하지만 call 은 실행할 때 함수의 this 의 값을 바꾼다.
// bind 는 어떤 함수의 내부의 this 의 값을 영구적으로 바꾸는 새로운 함수를 만든다.