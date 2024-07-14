// personPlus 에만 sum의 값을 수정하고 하려면 중복이 발생하게 된다.
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
// 이럴 떄 사용하는것이 super이다. super를 이용하면 부모가 가지고 있는 기능을 실현가능하다.
// 부모와 자식이 갖고있는 중복을 제거할 때 사용한다.
// super 뒤에 ()가 있다면 부모 클래스의 생성자이다.
class personPlus extends person{
    constructor(name, first, second, third, four){
        super(name, first, second, third);
        this.four = four;
    }
    // 부모클래스에 있는 sum을 호출하고 싶을 때
    sum(){
        return super.sum() + this.four;
    }
    avg(){
        return(this.first + this.second + this.third + this.four)/4;
    }
}

let ku = new person('ku', 10, 20, 30, 40);
console.log(ku);

console.log(ku.sum());

let kyo = new personPlus('kyo', 20 , 30, 40, 20);
console.log(kyo.avg());