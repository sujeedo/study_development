// 1. String concatenation
console.log('hi\nsujeedo'); // 줄바꿈
console.log('hi\tsujeedo'); // 들여쓰기

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder
console.log(1 ** 1); // exponetiaion

// 3. ++ Increment and -- Dcrement oprators
let counter = 2;
const preIncrement = ++counter; // counter = counter + 1; preIncrement = 3
console.log(counter);      // 3 값을 바로 업데이트
console.log(preIncrement); // 3
const posIncrement = counter++; // preIncrement = 3; counter = 3 + 1;
console.log(counter);      // 4 값을 할당한 후 업데이트
console.log(preIncrement); // 3

// 4. = Assigment operators 할당 연산자
let x = 3;
let y = 6;
x += y; //  x = (x + y)
x -= y;
x *= y;
x /= y;

// 5. <= Comparison operators 비교 연산자
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greaer than equal

// 6. Logical oprators: ||(or), &&(and), !(not)
const value1 = true;
const value2 = 4 < 2;

// || (or) finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); 
// 하나라도 true라면 ture이기 때문에 앞에서 ture가 나오면 뒤에는 판단하지 않습니다.
// 연살을 많이 하는 함수를 제일 뒤에 두고 심플한 연산들을 앞에 둬서 먼저 판단하게 해야합니다.

// && (and) finds the first truthy value
console.log(`and: ${value1 && value2 && check()}`); 
// 하나라도 false라면 false이기 때문에 앞에서 false가 나오면 뒤에는 판단하지 않습니다.
// often used to compress long if-statement
// 간편하게 null 체크
// nullableObject && nullableObject.something // null오브젝트가 null이 아닐때만 null오브젝트의 something이라는 value를 받아옵니다.
// if (nullableObject != null) { nullableObject.someting}

// ! (not) 값을 반대로 변경
console.log(!value1); // false

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time 쓸데없이 시간 낭비하다가 결국
    console.log('ㅇㅁㅇ');
  }
  return true; // true를 리턴합니다.
}

// 7. Equality oprators
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion 타입을 변경해거 검사합니다.
// 타입이 달라도 안에 들어있는 값이 같으니까 같다.
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// == strict equality, no type conversion
// 타입을 신경씁니다. 값이 같아도 타입이 다르기 때문에 검사합니다.
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
// 오브젝트는 메모리에 탑재될 때 레퍼런스 형태로 탑재됩니다.
// sujee1 2는 똑같은 데이터가 들어있는 오브젝트지만 실제로 다른 레퍼런스가 들어있어 서로 다른 오브젝트를 가리킵니다.
const sujee1 = { name: 'sujee' };
const sujee2 = { name: 'sujee' };
const sujee3 = sujee1;
console.log(sujee1)
console.log(sujee2)
console.log(sujee3)
console.log(sujee1 == sujee2)  // false 각각 다른 레퍼런스가 저장되어있어 다름.
console.log(sujee1 === sujee2) // false 똑같은 타입이든 레퍼런스가 다르기 때문.
console.log(sujee1 === sujee3) // ture  레퍼런스를 그대로 할당했기에 같음.

// equality - puzzler
console.log(0 == false);         // true
console.log(0 === false);        // false
console.log('' == false);        // true
console.log('' === false);       // false
console.log(null == undefined);  // ture
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
// if 조건이 ture이면 그 안의 블럭을 실행합니다.
const name = 'sujeedo';
if (name === 'sujee') {
  console.log('wellcome, sujee')
} else if (name === 'sujeedo') {
  console.log('you are amazing sujeedo!')
} else {
  console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
// 퀘스천 마크로 조건이 ture라면 오른쪽 값을 아니면 왼쪽 값을.
console.log(name === 'sujee' ? 'yes' : 'no');
// 간혹 Ternary operator를 계속 묶어 사용하는 경우가 있는데, 그럴 경우 가독성이 떨어지므로
// if나 swich를 사용하는게 좋습니다.

// 10. Switch statement
// use for multiple if checks
// use for eunm-like value check
// use for multiple type checks in TS
// if문에서 너무 else if를 반복한다면 swich를 사용하는것을 고려해야합니다.
const browser = 'IE';
switch (browser) {
  case 'IE': 
    console.log('go away!');
    break;
  case 'chrome': 
  case 'Firefox': 
    console.log('love you!');
    break;
  case 'IE': 
    console.log('go away!');
    break;
  default: 
    console.log('go away!');
    break;
}

// 11. Loops
// 11-1. while loop
// while the condition is truthy,
// 조건이 false가 되기 전까지 무한대로 반복합니다.
// body code is executed.
let i = 3;
while (i > 0) {
  // i가 0보다 크니? 물어서 0보다 작아질때까지 1씩 뺍니다.
  console.log(`while: ${i}`)
  i--;
}

// 11-2. do while loop
// body code is executed first,
// then check the condition.
// do while은 블럭을 먼저 실행 한 후 조건이 맞는지 아닌지 검사합니다.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// 11-3. for loop
// for(begin; condition; step)
// 시작지점을 한번만 호출하고, 블럭을 실행하기전 조건을 검사하고, 블럭이 실행되면 스텝을 나아갑니다.
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

// 블럭안에 지역변수를 선언해도 괜찮습니다.
for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
// i가 0일때 j를 0부터 5까지 빙 돕니다.
// 이렇게 작성하는것은 CPU에 좋지 않습니다.
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(`i: ${i}, i: ${j}`);
  }
}

// break: 반복문을 완전히 끝냅니다.
// continue: 지금것만 스킵하고 다음 스텝으로 넘어갑니다.

// 01. iterate from 0 to 10 and print only even numbers (use continue)
// 0부터 10까지 짝수만 출력합니다.
for (i = 0;  i < 11; i++) {
  if ( i % 2 !== 0 ) {
    continue
  }
  console.log(`q1: ${i}`);
}

// 02. iterate from 0 to 10 and print number untill reaching 8 (use break)
// 주어진 숫자의 범위 0부터 10까지 루틴하지만 8이되면 멈춥니다.
for (j = 0; j < 11; j++) {
  if (j === 8) {
    break;
  }
  console.log(`q2: ${j}`);
}