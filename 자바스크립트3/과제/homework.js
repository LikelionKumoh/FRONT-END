// 1. 문제 10번
const n = prompt('10번 문제 별찍기 숫자를 입력하세요.');
let tree = '';
for(let i=0;i<n;i++){
  a = '';
  for(let j=0;j<(n-1)-i;j++){
    a += ' ';
  }
  for(let k=0;k<2*i+1;k++){
    a += '*';
  }
  tree += a + '\n';
}
console.log(tree);

// 2. 문제 42번 
const month = prompt('42번 문제 몇월?');
const date = prompt('42번 문제 몇일?');

function solution(a,b){
  const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  const c = new Date('2020-'+a+'-'+b);
  return day[c.getDay()];
}
console.log(solution(month,date));

// 3. 문제 44번
let math = prompt('44번 문제 각 자리수 합 숫자')
let sum = 0;

while(math !== 0){
  sum += (math % 10);
  math = Math.floor(math/10);
}
console.log(sum);

// 4. 문제 57번 
let arr = Array.from({length: 1000}, (v , i) => i + 1);
let count = arr.join('').match(/1/g).length;
console.log(count);

// 5. 문제 54번
const num = prompt('54번 문제 연속되는지 숫자를 공백으로 구분 입력').split(' ').map((a) => Number(a));

function result(){
    for(let i=0; i<num.length-1; i++){
        if((num[i]+1) != (num[i+1])) return 'NO'
    }
    return 'YES'
}

console.log(result())

// 6. 문제 58번
let price = prompt('58번 문제 콤마 찍을 숫자 입력');
let comma = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
console.log(comma);

// 7. 문제 59번
const str = prompt('59번 문제 빈칸 채울 문자 입력');
const fill = 25 + parseInt((str.length/2), 10);
const same = str.padStart(fill, '='); 
console.log(same.padEnd(50, '='));

// 8. 문제 60번
const students = ["강은지", "김유정", "박현서", "최성훈", "홍유진", "박지호", "권윤일",
                  "김채리", "한지호", "김진이", "김민호", "강채연"];
const sortedStudents = students.sort();

sortedStudents.map((s, i) => console.log(`번호: ${i + 1}, 이름: ${s}`));
// 9. 문제 61번
const user_s = new String(prompt('61번 문제 압축할 문자 입력'));
let result_s = '';
let store_s = user_s[0];
let count_s = 0;

for (let i of user_s){
  if (i === store_s){
    count_s += 1;
  } else{
    result_s += store_s + String(count_s);
    store_s = i;
    count_s = 1;
  }
}

result_s += store_s + String(count_s);
console.log(result_s);

// 10. 문제 63번
const user_input = prompt('63번 문제 줄일 문자 입력').split(' ');
let result_a = '';

for (let s of user_input){
  result_a += s.slice(0, 1);
}

console.log(result_a);