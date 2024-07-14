// person에 sum() 을 제외한 다른 메소드를 추가하고 싶다면 person에 직접 쓰는 방법도 있지만 클래스가 다른 사람이 만든 것이나 라이브러리라면 코드를 수정했을 때 애로사항이 발생한다.
// 자기가 짠 코드더라도 모든 객체에 적용하기 애매할때가 존재한다. 이럴 때 상속을 사용한다.
class person{

    constructor(name, first, second, third){
        this.name = name;
        this.first = first;
        this.second = second;
        this.third = third;
        console.log('Hello')
    }
    sum(){
        return 'Prototype :' + (this.first + this.second + this.third);
}
}
// extends 를 사용하여 person 클래스의 기능을 그대로 갖는, 그리고 추가적인 기능을 추가할 수 있다. (중복 제거)
// person을 수정하게 되면 personPlus도 수정이된다.
class personPlus extends person{
    avg(){
        return(this.first + this.second + this.third)/3;
    }
}

let ku = new person('ku', 10, 20, 30);
console.log(ku);

console.log(ku.sum());

let kyo = new personPlus('kyo', 20 , 30, 40);
console.log(kyo.avg());