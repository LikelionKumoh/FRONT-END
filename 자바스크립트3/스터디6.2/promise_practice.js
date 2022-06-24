// 실습 1. 양수인지 음수인지 판단

// 1) 콜백 함수 
// function isPositive(num, resolve, reject){
//     //성공 : type number인 경우
//     //실패 : type string, 문자가 들어올 때
//     setTimeout(() => {
//         if( typeof num === 'number'){
//             resolve(num >= 0 ? "양수" : "음수");  //성공
//         }else {
//             reject("숫자가 아닙니다.");   //실패
//         }
//     }, 2000);
// }

// isPositive(3, (res) => {console.log(`${res}`)}, (err) => {console.log(`${err}`)});
// isPositive([], (res) => {console.log(`${res}`)}, (err) => {console.log(`${err}`)});

// 2) promise로 변경
// function isPositiveP(num){
//     return new Promise((resolve, reject) => {
//         //성공 : type number인 경우
//         //실패 : type string, 문자가 들어올 때
//         setTimeout(() => {
//             if( typeof num === 'number'){
//                 resolve(num >= 0 ? "양수" : "음수");  //성공
//             }else {
//                 reject("숫자가 아닙니다.");   //실패
//             }
//         }, 2000);
//     })
// }

// isPositiveP(3)
// .then((res) => {console.log(`${res}`)})
// .catch((err) => {console.log(`${err}`)});
// ----------------------------------------------------------------------------------------------------

// 실습 2. 3가지 일을 연속적으로 수행하기
//  -todo : 비동기 작업을 수행하는 함수 3개를 만들고 순차적으로 진행한다
// taskA : 3초 후 전달받은 인자 2개를 더하는 함수
// taskB : 1초 후 전달받은 인자에 2를 곱하는 함수 
// taskC : 2초 후 전달 받은 인자에 -1을 곱하는 함수

function taskA(a,b){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b);
        }, 3000);
    })
}
function taskB(a){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a*2);
        }, 1000);
    })
}
function taskC(a){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a*-1);
        }, 2000);
    })
}
// 각각의 3가지 일을 연쇄적으로 수행하고 싶다.
taskA(3,5)
.then((a_res) => {
    console.log(`작업 A 완료 : ${a_res}`);
    return taskB(a_res);
}) .then((b_res) => {
    console.log(`작업 B 완료 : ${b_res}`);
    return taskC(b_res);
}) .then((c_res) => {
    console.log(`작업 C 완료 : ${c_res}`);
})

// 실습 3
// fetch('https://jsonplaceholder.typicode.com/posts?id=1')
// .then(response => response.json())
// .then(json => console.log(json))