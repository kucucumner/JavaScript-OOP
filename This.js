// this는 자기 자신을 가리킨다.
const ku = {
    name : 'ku',
    first : 10,
    second : 20,
    sum : function(f , s){
        return f + s;
    }
}
// this는 어떤 메소드(함수)가 있으면 그 메소드가 자신이 속해있는 객체를 가리키는 특수한 키워드

console.log(ku.sum(ku.first, ku.second));

const kyo = {
    name : 'ku',
    first : 10,
    second : 20,
    sum : function(){
        return this.first + this.second;
    }
}


console.log(kyo.sum());