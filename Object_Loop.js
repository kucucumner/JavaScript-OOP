// 배열은 반복문에 자주 쓰인다.
const memberArray = ['ku', 'kyo','hyun']
console.group('array loop')
let i = 0;
while(i < memberArray.length){
    console.log(memberArray[i]);
    i = i + 1;
}
console.groupEnd('array loop');

const memberNmae = {
    manager : 'ku',
    designer : 'kyo',
    developer : 'hyun'
}
console.group('object loop');

// 객체에서 사용하는 for문은 문법이 다르다. for in 문이라고 한다.
// in 키워드 뒤에는 객체가 온다. 앞에는 객체가 반복적으로 실행될 때 마다 그 순번에 해당되는 이름이 주입될 변수로 온다.
for(let name in memberNmae){
    // . 뒤에는 변수가 올 수 없기 때문에 배열에서 사용하는 대괄호를 사용하면 된다.
    console.log (name, memberNmae[name]);
}
console.groupEnd('object loop');

// 객체에 있는 값을 모두 꺼내서 반복적인 작업을 처리할 수 있다.
// 반복문과 배열은 반드시 같이써야 하는 존재이다.