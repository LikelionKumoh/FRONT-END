//10번
const num = prompt("10번 입력 : ");
let star = '';
for(let i = 0; i < num; i++){
    for(let j = 1; j < (num - i); j++){
        star += ' ';
    }
    for(let k = 0; k < 2 * i - 1; k++){
        star += '*';
    }
    star += '\n';
}
console.log(star);

//42번
const month = prompt("월 입력: ");
const day = prompt("일 입력: ");

const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days = ['WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE'];

function solution(m, d){
    for(let i = 1; i <= m - 1; i++){
        d += months[i];
    }
    return days[d % 7 - 1];
}
console.log(solution(month, day));

//44번
const n = prompt("44번 입력: ");
function q44(n){
    let result = 0;
    while(n != 0){
        result += n % 10;
        n = parseInt(n/10);
    }
    return result;
}
console.log(q44(n));

//57번
let cnt = 0;
let str = '';
for(let i = 0; i <= 1000; i++){
    str += i;
}
for(let j in str){
    if(str[j] == 1) cnt++;
}
console.log(cnt);

//54번
const num54 = prompt("54번 입력: ").split(' ');
function q54(n){
    for(let i = 0; i < n.length; i++){
        if(n[i] + 1 !== n[i + 1]){
            return 'NO';
        }
        return 'YES';
    }
}
console.log(q54(num54));

//58번
const number = prompt("58번 입력: ");
parseInt(number, 10);
console.log(number.toLocaleString());

//59번
const str59 = prompt("59번 입력: ");
const fill = 25 + parseInt((str59.length/2), 10);
const half = str59.padStart(fill, '='); 
console.log(half.padEnd(50, '='));

//60번
const students = ['강은지', '김유정', '박현서', '최성훈', '홍유진', '박지호', '권윤일', '김채리', '한지호', '김진이', '김민호', '강채연'];
students.sort();
for (let key in students){
    console.log(`번호: ${parseInt(key, 10)+1}, 이름: ${students[key]}`);
}

//61번
const str61 = prompt("61번 입력: ").split('');
let result = '';
let cnt61 = 0;
let st = str61[0];
for(let i in str61){
    if(str61[i] == st){
        cnt++;
    } else {
        result += (st + cnt);
        st = str61[i];
        cnt = 1;
    }
}
result += st;
result += cnt;
console.log(result);

//63번
const str63 = prompt("63번 입력: ").split(" ");
let result63 = "";

for (let i of str63) {
    result63 += i[0];
}
console.log(result63);
