function fn(a){
    return function fn1(b){
        return function fn2(c){
            const a=1
        }
    }
}
console.log(fn(10))