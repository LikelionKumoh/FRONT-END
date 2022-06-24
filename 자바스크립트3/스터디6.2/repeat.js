// 직접 해보기 복습
// 1. 삼항연산자로 학점 체크하기 (90이상 a+, 50이상 b+, 나머지 f)
let score = 30;

const res = (score >= 90 ? 'A+' : score >= 50 ? 'B+' : 'C+')
console.log(res);
// 2. 단락회로평가로 객체인지 아닌지 구분하는 코드 작성 https://velog.io/@aloha006/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%8B%A8%EB%9D%BD%ED%9A%8C%EB%A1%9C-%ED%8F%89%EA%B0%80
const getName = (person) => {
    const name = person && person.name;
    return name || "객체가 아닙니다"
}
let person;
const name = getName(person);
console.log(name);
// 3. 배열 비구조화할당으로 swap 해보기
let a = 3;
let b = 5;

[a,b] = [b,a];
console.log(a,b);
// 4. 스프레드연산자로 배열 합쳐보기 (단! 결과에서 두 배열 사이에 '+'라는 요소 필수)
let ab = ['1', '2'];
let bc = ['3', '4'];
let ca = [...ab, '+',...bc];

console.log(ca);

// 과제1 챕터 4,5 제출 / 과제 2 선별된 문제 => 6월 29일까지