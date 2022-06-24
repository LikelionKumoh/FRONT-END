// async 예시
function nomal(){
    return '일반함수';
}

async function special(){
    return 'async 함수';
}

console.log(nomal());
console.log(special());
special().then((res) => {console.log(res)})


// ------------------------------------------
// -------------------------------------------

// await 예시
function delay(ms){
    return new Promise((resolve) => {
        setTimeout(resolve,ms);
    });
}

// async function testAwait(){
//     return delay(3000).then(() => {
//         return 'test';
//     });
// }
// => 복잡하기 때문에 await을 사용함

async function testAwait(){
    await delay(3000);
    return 'test';
}

// testAwait().then((res) => {console.log(res);})

// 
// 

// 실습 1
async function main(){
    const res = await testAwait();
    console.log(res);
}

main();
