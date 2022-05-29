// 정답에 대한 풀이를 적어주세요 !
// 만약 풀이 과정에서 코드가 필요하다면 코드도 작성 부탁드립니다 !

// 1번 문제 : 먼저 html file과 js file 연결하기 !

// <script></script> 태그를 통해 연결한다.
// 1) inline 방식 : html 안에 script태그 작성 후 그 안에 js 코드 작성
// 2) 외부 파일 연결 방식 : html 안에 script태그 작성 후 src속성으로 js 파일 작성

// 2번 문제 : Backend에서 얼마나 많은 프로그래밍 언어들을 사용할까요 ?

// 10개 이상

// 3번 문제 : Frontend에서 얼마나 많은 프로그래밍 언어들을 사용할까요 ?

// js 하나

// 4번 문제 : 자바스크립트로 비디오 게임을 만들 수 있을까요 ?

// yes

// 5번 문제 : 자바스크립트는 모든 브라우저들에 설치되어 있을까요 ?

// yes

// 6번 문제 : 자바스크립트는 만들어진 기간은 얼마일까요 ?

// 10일

// 7번 문제 : 왜 자바스크립트는 만들어졌을까요 ?

// 좀 더 인터렉티브한 웹사이트를 만들기 위해!

// 8번 문제 : 웹사이트에서 자바스크립트를 사용하려면 처음에 다운로드 해야할까요 ?

// no

// 9번 문제 : 자바스크립트를 실행하기위해 브라우저를 열어야할까요 ?

// no

// 10번 문제 : 브라우저에서 자바스크립트 파일을 실행하기위해 어떻게 해야할까요 ?

// HTML file에 JS file을 불러와 연다!

// 11번 문제 : 브라우저에서 console로 무엇을 할 수있을까요 ?

// 자바스크립트 코드 작성!

// 실습 코드 예시
// const a = 1.2;
// const b = 1;
// console.log(a, b)
// console.log(typeof(a), typeof(b)) 

// type을 확인하고 싶으면 ? 
// console로 찍고 싶으면 ? 
// 변수를 선언하고 싶으면 ? 
// 세가지를 잘 생각하며 실습해보세요 ! 

// 12번 문제 : 2와 2.2는 모두 같은 정수들일까 ?

console.log(typeof(2));
console.log(typeof(2.2));
// yes

// 13번 문제 : “2”의 데이터 타입은 무엇일까 ?

console.log(typeof("2"));
// string

// 14번 문제 : ‘hello’ 와 “hello” 는 같은 것일까 ?

console.log('hello' === "hello");
// yes

// 15번 문제 : 변수는 숫자 값만을 저장할 수 있을까 ?

const str = "나는 문자";
console.log(typeof(str));
// no

// 16번 문제 : const 에 값을 저장 후 변경이 가능할까 ?

const a = 3;
console.log(a);
// const는 상수라 변경 불가 !

// 17번 문제 : let 에 값을 저장 후 변경이 가능할까 ?

let b = 2;
b = 3;
console.log(b);
// let은 재정의는 불가능 하지만 변경은 가능 !

// 18번 문제 : “true”는 Boolean 값일까 ?

console.log(typeof("true"));
// string

// 19번 문제 : null과 undefined는 같은 데이터 타입일까 ?

console.log(typeof(null)); // object
console.log(typeof(undefined)); // undefined
// 다르다

// 20번 문제 : 배열을 사용하는 이유는 무엇일까 ?

// 많은 데이터들을 하나의 변수로 접근할 수 있도록 하기 위해
// arr1, arr2, .. arr50 50개의 공간 대신 arr[0], arr[1] 등 하나의 공간만 차지

// 21번 문제 : 배열 두 번째 요소의 값을 어떻게 얻을 수 있을까 ?

// 배열 이름[1]
const arr = [1, 2, 3, 4, 5];
console.log(arr[1]);
	
// 22번 문제 : 객체 player의 name의 값을 어떻게 얻을 수 있을까 ?

const player = {
    name: "이수화",
    age: 24
}
console.log(player.name);
console.log(player["name"]);
console.log(Object.keys(player));
console.log(typeof(Object.keys(player)));
console.log(Object.values(player));
console.log(typeof(Object.values(player)));