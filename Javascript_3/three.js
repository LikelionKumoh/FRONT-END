//  //문제 10 
// var number = prompt("트리의 높이는?")
// var star = '';

// for (var i = 1; i <= number; i++) {
//   for (var k = number; k >= i; k--) { 
//     star += " ";
//   }
//   for (var j = 1; j <= i; j++) {
//     star += "* ";
//   }
//   star += "\n";
// }
// console.log(star);

// //문제 42
// const month = prompt("몇월?");
// const day = prompt("몇일?");

//     const arrweek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//     const x = new Date(`2020-${month}-${date}`);
//     const day = x.getDay()
// }
// console.log(arrweek[day]);

// //문제 44
// var num = prompt("양의 정수:");

// function solution1(num){
//     var sum = 0;
//     do{
//         sum+=num%10
//         num = Math.floor(num/10);

//     }while(num>0);
//     return sum;
// }
// console.log(solution1(num));


// 문제 57
// let n = '';
// for(let i - 0; i< 17; i++){
//     n += i;
// }
// console.log(n);
// let count = 0;
// for(let k in n){
//     console.log(k);
// }
// console.log(count);

//문제 54
// const num = prompt("숫자를 넣어주세요").split('').map((a)=>Number(a));

// function result(){
//     for(let i = 0; i<num.length-1; i++){
//         if((num[i]+1)!=(num[i+1]))return 'No'
//     }
//     return 'Yes'
// }
// console.log(result())

//문제 58
// const num = prompt("숫자 입력하세요")
// function comma(num){
//     var len, point, str;  
      
//     num = num + "";  
//     point = num.length % 3 ;
//     len = num.length;  
  
//     str = num.substring(0, point);  
//     while (point < len) {  
//         if (str != "") str += ",";  
//         str += num.substring(point, point + 3);  
//         point += 3;  
//     }  
    
//     return str;

// }

// //문제59
// const str = prompt("문자를 입력하세요.");
// const a = str.padStart(25 + Math.floor(str.length / 2), "=");
// console.log(a.padEnd(50, "="));

//문제60
// const students = ['강은지', '김유정', '박현서', '최성훈', '홍유진', '박지호', '권윤일',
//      '김채리', '한지호', '김진이', '김민호', '강채연']
// students.sort()
// students.forEach((n, index) => console.log(`번호: ${index+1}, 이름: ${n}`))

//문제61
// const alphas = prompt("알파벳을 입력하세요.");
// let count = 0;
// let currentStr = alphas[0];
// let str = "";

// for (let i of alphas) {
//   if (i === currentStr) {
//     count++;
//   } else {
//     str += currentStr + count;
//     currentStr = i;
//     count = 1;
//   }
// }
// str += currentStr + count;
// console.log(str);

//문제63
// const arr = prompt("문장을 입력하세요:").split(" ");
// let str = "";

// for (let i = 0; i < arr.length; i++) {
//   str += arr[i][0];
// }

// console.log(str);