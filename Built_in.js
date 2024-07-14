// 객체는 정리정돈의 도구이다.
// Math 라는 객체의 안에는 여러 수학과 관련된 변수, 함수를 그루핑 해서 정리정돈을 해놓았다.
console.log(Math.PI);

// 객체를 만들 수 있다.

const MyMath = {
    PI : Math.PI,
    // 메소드를 만들 수 있다.
    random : function(){
        return Math.random();
    },
    floor : function(val){
        return Math.floor(val);
    }
}
// MyMath 라는 객체를 만들었다.
console.log("MyMath.PI".MyMath.PI);
console.log(MyMath.random);
console.log(MyMath.floor(3.9));

// 객체라는 것은 같은 취지의 서로 연관된 변수와 함수들을 객체라는것으로 그루핑하여 이름을 붙인 것.