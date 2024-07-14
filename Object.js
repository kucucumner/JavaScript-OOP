// 배열
const member = ['ku', 'kyo','hyun']
// 2번째 값 출력
console.log(member[1]);

// 객체 객체에서는 . 을 사용한다. 배열(대괄호) 로 접근도 가능한다.
const memberNmae = {
    manager : 'ku',
    designer : 'kyo',
    developer : 'hyun'
}
// 객체에 저장된 원소의 값을 수정(update) 할 수 있다.
memberNmae.manager = 'KU';

console.log(memberNmae.manager);
// 삭제
delete memberNmae.designer

// 객체는 이름이 있는 정보를 정리정돈하는 도구다.

// 객체를 읽을 때 . 이나 []로 통해서 읽을 수 있다.

// 정보를 수정, 삭제가 가능하다.

