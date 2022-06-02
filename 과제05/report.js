const numbers = [1,1,1,2,2,3,3,3,3,9,3,4,4,5,5,5,6,9,6,7,7,7,8,8,9,9]
const newNumbers = [];
let index = 0;

// 과제 1번
// numbers 배열을 기본 반복문 (for,while)을 통해 중복인 숫자를 제거하여 새로운 배열로 만들기 ! 
// ( 제한 : 내장 함수 사용 금지 ! )
for(let i=0;i<numbers.length;i++){
	let flag = 1;
	for(let j=0;j<newNumbers.length;j++){
		if(numbers[i] === newNumbers[j]){
			flag = 0;
		}
	}
	if(flag){
		newNumbers[index] = numbers[i];
		index++;
	}
}
// --------------------------------------------------------------------

// 과제 2번
// numbers 배열을 기본 반복문 (for,while)을 통해 숫자 9의 개수가 몇 개인지 출력하기 ! 
// ( 제한 : 내장 함수 사용 금지 ! )
let num = 0;
for(let i=0;i<numbers.length;i++){
	if(numbers[i] === 9){
		num++;
	}
}
console.log(num);
// --------------------------------------------------------------------

// 과제 3번
// Math.random( ), Math.floor( 값 )함수를 이용하여 중복없는 숫자 10개를 새로운 배열 만들기 !
// : Math.random( )은 0.0~0.999...의 수를 램덤으로 하나 부여하는 함수 !
// : Math.floor(  )은 (  )안에 값을 실수의 값을 넣으면 실수의 최대 정수를 반환하는 함수 !
const ranList = []
while(ranList.length !== 10){
	randInt = Math.floor(Math.random()*100)
	if(!ranList.includes(randInt)){
		ranList.push(randInt)
	}
}
console.log(ranList)
// --------------------------------------------------------------------

const bookCafe_arr = ["아메리카노","바닐라라떼","카라멜모카","카페모카","카푸치노","카페라떼","에스프레소"];

const bookCafe_obj = [ { name : "아메리카노", price : 2200 }, { name : "바닐라라떼", price : 2600 }, { name : "카라멜모카" , price : 2700 },
		{ name : "카페모카" , price : 2700 }, { name : "카푸치노" , price : 2500 }, { name : "카페라떼" , price : 2500 },
		{ name : "에스프레소" , price : 2000 } ] 

// --------------------------------------------------------------------

// 과제 4번
// forEach 순회로 북카페 메뉴 배열 복사하기 !
const newBookCafe_arr = []
bookCafe_arr.forEach((e) => {newBookCafe_arr.push(e)})
console.log(newBookCafe_arr);
//----------------------------------------------------------------------

// 과제 5번 
// forEach 함수로 includes 함수 구현하기 ! ( 메뉴는 _arr 배열 내 아무거나 선택 가능 ! )
function Includes(){
	let flag = 0;
	bookCafe_arr.forEach((e) => {
		if(e === "카페모카"){
			flag = 1;
		}
	})
	if(flag == 1){
		return true;
	} else if(flag == 0){
		return false;
	}
}
//----------------------------------------------------------------------

// 과제 6번 
// findIndex 함수로 _obj의 가격이 2000인 메뉴 찾고 index를 이용하여 메뉴 이름 출력하기 !
const two = bookCafe_obj.findIndex(e => e.price === 2000)
console.log(bookCafe_obj[two].name)
//----------------------------------------------------------------------

// 과제 7번 
// filter 함수로 _obj 북카페 메뉴 2700 인 것 분류하기 !
const over = bookCafe_obj.filter((e) => e.price == 2700);
//----------------------------------------------------------------------

// 과제 8번 
// sort 함수로 _obj 북카페 메뉴 낮은 가격 기준으로 정렬하기 !  
const lowPrice = bookCafe_obj.sort(function (a, b) {
  return a.price - b.price;
});
//----------------------------------------------------------------------

// 과제 9번
// sort 함수로 _obj 북카페 메뉴 이름을 사전식으로 정렬하기 !
const dic = bookCafe_obj.sort(function (a, b) {
  const x = a.name;
	const y = b.name;
	if(x<y){
		return -1;
	}
	else if(x>y){
		return 1;
	}
	return 0;
});
