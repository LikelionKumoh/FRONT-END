const problem10 = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }
};

const problem42 = (a, b) => {
  const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const dayOfWeek = ["WED", "THU", "FRI", "SAT", "SUN", "MON", "TUE"];
  let totalDay = 0;
  for (let i = 0; i < a - 1; i++) {
    totalDay += days[i];
  }
  totalDay += b;
  console.log(dayOfWeek[(totalDay - 1) % 7]);
};

const problem44 = (n) => {
  let sum = 0;
  while (n > 9) {
    sum += n % 10;
    n = Math.trunc(n / 10);
  }
  sum += n;
  return console.log(sum);
};

const problem54 = (input) => {
  let result = "YES";
  const nums = input.split(" ").map((num) => parseInt(num));
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      result = "NO";
      break;
    }
  }
  console.log(result);
};

const problem57 = () => {
  let s = "";
  for (let i = 0; i <= 1000; i++) {
    s += i;
  }
  return console.log(s.match(/1/g).length);
};

const problem58 = (input) => {
  console.log(parseInt(input).toLocaleString("ko-KR"));
};

const problem59 = (input) => {
  if (input.length > 50) {
    console.log("too long.");
  } else if (input.length % 2 === 0) {
    const temp = "=".repeat((50 - input.length) / 2);
    console.log(temp + input + temp);
  } else {
    console.log(
      "=".repeat(Math.floor((50 - input.length) / 2)) +
        input +
        "=".repeat(Math.ceil((50 - input.length) / 2))
    );
  }
};

const problem60 = (students) => {
  students.sort().forEach((student, i) => {
    console.log(`$번호: ${i + 1}, 이름: ${student}`);
  });
};

const problem61 = (input) => {
  let result = "";
  let count = 1;
  for (let i = 0; i < input.length; ) {
    if (input[i] === input[i + count]) {
      count++;
    } else {
      result += input[i] + count;
      i += count;
      count = 1;
    }
  }
  console.log(result);
};

const problem63 = (input) => {
  console.log(
    Object.values(input.split(" "))
      .map((w) => w[0])
      .join("")
  );
};

//결과

console.log("문제10 : 별찍기");
problem10(5);

console.log("문제42 : 2020년");
problem42(5, 24);

console.log("문제44 : 각 자리수의 합");
problem44(18234);
problem44(3849);

console.log("문제54 : 연속되는 수");
problem54("1 2 3 4 5");
problem54("1 4 2 6 3");

console.log("문제57 : 1의 개수");
problem57();

console.log("문제58 : 콤마찍기");
problem58(123456789);

console.log("문제59 : 빈칸채우기");
problem59("hi");

console.log("문제60 : 번호 매기기");
const students = [
  "강은지",
  "김유정",
  "박현서",
  "최성훈",
  "홍유진",
  "박지호",
  "권윤일",
  "김채리",
  "한지호",
  "김진이",
  "김민호",
  "강채연",
];
problem60(students);

console.log("문제61 : 문자열 압축하기");
problem61("aaabbbbcdddd");

console.log("문제63 : 친해지고 싶어");
problem63("복잡한 세상 편하게 살자");
