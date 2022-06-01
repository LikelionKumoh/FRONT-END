const numbers = [1,1,1,2,2,3,3,3,3,9,3,4,4,5,5,5,6,9,6,7,7,7,8,8,9,9]
const newNumbers = [];

// 과제 1번
// numbers 배열을 기본 반복문 (for,while)을 통해 중복인 숫자를 제거하여 새로운 배열로 만들기 ! 
// ( 제한 : 내장 함수 사용 금지 ! )

// 중복되면 true, 아니면 false return하는 함수
function exist(num){
	for(let j = 0; j<newNumbers.length; j++){
		if(newNumbers[j] === num){
			return true;
		}
	}
	return false;
}

for(let i = 0; i<numbers.length; i++){
	num = numbers[i];
	if(!exist(num)){
		newNumbers.push(num);
	}else {
		continue;
	}
}

// console.log(newNumbers);


// --------------------------------------------------------------------

// 과제 2번
// numbers 배열을 기본 반복문 (for,while)을 통해 숫자 9의 개수가 몇 개인지 출력하기 ! 
// ( 제한 : 내장 함수 사용 금지 ! )

let cnt = 0;
for(let k=0; k<numbers.length; k++){
	if(numbers[k] === 9){
		cnt += 1;
	}
}

// console.log(cnt);

// --------------------------------------------------------------------

// 과제 3번
// Math.random( ), Math.floor( 값 )함수를 이용하여 중복없는 숫자 10개를 새로운 배열 만들기 !
// : Math.random( )은 0.0~0.999...의 수를 램덤으로 하나 부여하는 함수 !
// : Math.floor(  )은 (  )안에 값을 실수의 값을 넣으면 실수의 최대 정수를 반환하는 함수 !

let newArr = [];

for(let l=0; newArr.length !== 10; l++){
	let num;
	num = Math.floor(Math.random()*100);
	if(!newArr.includes(num)){
		newArr.push(num);
	}else{
		continue;
	}
}
// console.log(newArr);



// --------------------------------------------------------------------

const bookCafe_arr = ["아메리카노","바닐라라떼","카라멜모카","카페모카","카푸치노","카페라떼","에스프레소"];

const bookCafe_obj = [ { name : "아메리카노", price : 2200 }, { name : "바닐라라떼", price : 2600 }, { name : "카라멜모카" , price : 2700 },
		{ name : "카페모카" , price : 2700 }, { name : "카푸치노" , price : 2500 }, { name : "카페라떼" , price : 2500 },
		{ name : "에스프레소" , price : 2000 } ] 

// --------------------------------------------------------------------

// 과제 4번
// forEach 순회로 북카페 메뉴 배열 복사하기 !

const newBookarr = [];
bookCafe_arr.forEach(element => newBookarr.push(element));
// console.log(newBookarr);

//----------------------------------------------------------------------

// 과제 5번 
// forEach 함수로 includes 함수 구현하기 ! ( 메뉴는 _arr 배열 내 아무거나 선택 가능 ! )

function isInclude(arr, menu) {
	let flag = false;
	arr.forEach(
		(element) => {
			if (element === menu){
				flag = true;
			}
		}
	)
	return flag;
}

// console.log(isInclude(bookCafe_arr, "아메리카노"));
// console.log(isInclude(bookCafe_arr, "아메리카노르"));
// console.log(isInclude(bookCafe_arr, "에스프레소"));

//----------------------------------------------------------------------

// 과제 6번 
// findIndex 함수로 _obj의 가격이 2000인 메뉴 찾고 index를 이용하여 메뉴 이름 출력하기 !

let idx;
idx = bookCafe_obj.findIndex(element => {return element.price === 2000});
// console.log(bookCafe_obj[idx].name);


//----------------------------------------------------------------------

// 과제 7번 
// filter 함수로 _obj 북카페 메뉴 2700 인 것 분류하기 !

const newFilter = bookCafe_obj.filter(element => element.price === 2700);
// console.log(newFilter);

//----------------------------------------------------------------------

// 과제 8번 
// sort 함수로 _obj 북카페 메뉴 낮은 가격 기준으로 정렬하기 !  

let sortedPrice = [...bookCafe_obj];
console.log(bookCafe_obj);
sortedPrice.sort((a, b) => a.price - b.price);
console.log(sortedPrice);

//----------------------------------------------------------------------

// 과제 9번
// sort 함수로 _obj 북카페 메뉴 이름을 사전식으로 정렬하기 !

let sortedName = [...bookCafe_obj];
sortedName = sortedName.sort((a, b) => {
	let x = a.name.toLowerCase();
	let y = b.name.toLowerCase();
	if(x < y){return -1;}
	if(x > y){return 1;}
	else {return 0;}
});
console.log(sortedName);

