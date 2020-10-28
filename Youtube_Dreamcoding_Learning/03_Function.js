// 프로그램안에서 각각의 작은 기능을 수행하는것을 함수라고 합니다.
// 함수는 인풋 파라미터를 받아서 잘 처리한 후 아웃풋으로 리턴하는것이 함수의 프로세스입니다.
// 함수의 이름을 보고 함수의 기능을 유추할 수 있어야합니다.
// 전달해야하는 파라미터들이 무엇인지 어떤 값이 리턴되기를 기대해야하는지 인터페이스를 보고 해당 기능을 유추할 수 있어야합니다.
// 그래서 함수에는 인풋과 아웃풋과 이름이 중요합니다.

// Function
// - fundamental building block in the program 기본적인 빌디 블럭
// - subprogram can be used multiple times 여러번 재사용 가능
// - performs a task or calculrates a value 한가지의 태스크, 어떠한 값을 계산

// 1. Funtion declaration 정의
// function name(param1, param2) { body...return;}
// function 키워드 다음 함수의 이름을 지정후 파라미터를 나열한 다음
// 함수안의 기본적인 비지니스 로직을 작성한 후 리턴을 해줍니다.
// one function === one thing 
// 하나의 함수는 한가지의 일만 해야합니다.
// naming: doSomething, command, verb
// 함수는 무언가를 동작하는것이기에 커맨드 또는 동사형태로 지정해야합니다.
// 이름을 정하기 어렵다면 함수가 하는 일이 많은건 아닌지 걱정해야합니다.
// e.g. createCardAndPoint -> createCard, createPoint
// 2가지의 기능이 있다면 분리해야합니다.
// function is object in JS
// 자바스크립트에서 함수는 오브젝트입니다. 그래서 변수에 할당, 파라미터 전달, 함수 리턴도 가능합니다.
function printHello() {
  // 함수의 이름은  printHello이고 파라미터는 하나도 받지 않고, 출력하는 기능이 있습니다.
  console.log('Hello');
};
printHello();

function log(message) {
  // 파라미터로 메세지를 전달받아 출력하는게 더 좋은 함수입니다.
  console.log(message);
};
log('Hello@');

// 타입 스크립트는 함수의 인터페이스만 딱 봐도
// 함수의 이름과 전달되어야 하는 파라미터와 그 데이터 타입 그리고 어떤 값이 리턴되는지 정확히 명시되어있습니다.
// 반대로 자바스크립트는 인터페이스만으로는 기능을 확실히 알 수 없습니다.

// 2. Parameters
// premitive parameters: passed by value
// 메모리에 값이 그대로 저장되어있기 때문에 값이 전달되고
// object parameters: passed by reference
// 오브젝트는 메모리에 레퍼런스가 저장되어있기 때문에 레퍼런스가 전달됩니다.
function changeName(obj) {
  // 전달된 이름을 sujeedo로 바꿔주는 함수
  obj.name = 'sujeedo';
};
const sujee = { name: 'sujee'};
changeName(sujee)
console.log(sujee)

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
  // 두가지의 파라미터를 받아 출력하는 함수입니다.
  // if (from === undefined) {
  //   form = 'unknown'; // 파라미터 값이 없다면 해당 값을 출력해라.
  // }
  console.log(`${message} by ${from}`);
};
showMessage('Hi!')

// 4. Rest parameters (added in ES6)
// ...3개를 작성하면 파라미터가 배열 형태로 전달됩니다.
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i])
  }

  for(const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg))
  
  return undefined; // return값이 없다면 값이 없음으로 정의되어있는것과 같습니다. 생략 가능
};
printAll('dream', 'coding', 'sujee');

// 5. Return a value
function sum(a, b) {
  return a + b; // 파라미터 값을 전달받아 계산된 값을 리턴합니다.
};
const result = sum(1, 2); // 3
console.log(`sum: ${result}`);

// 6. Early return, early axit
// bad
function upgradeUser(user) {
  // 유저의 포인트가 10이상일때 무언가 업그레이드를 진행하는 로직을 실행해라.
  // 이렇게 코드를 계속해서 블럭안에서만 작성하면 가독성이 떨어집니다.
  if (user.point > 10) {
    // long upgrade logic...
  }
};

// good
function upgradeUser(user) {
  // 조건이 맞지 않을때는 리턴해서 함수를 종료하고 조건이 맞을 때만 로직을 실행하게 합니다. 
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
};

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function
// 함수는 다른 변수와 마찬가지로 변수에 할당이되고, 파라미터로 전달이 되고, 리턴 값으로도 리턴이됩니다.

// 7. Function Expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function Expression is created when the execution reaches it.
const print = function () {
  // 함수를 선언함과 동시에 프린트란 변수에 함수를 바로 할당합니다. ( anonymous function 익명 함수)
  console.log('print');
};
print(); 
const printAgain = print;
printAgain;
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 8. callback function using function expression
// 함수를 전달하는걸 콜백 함수라고 합니다.
function randomeQuiz(answer, printYes, printNo) {
  // 정답이면, yes함수를 아니면 no함수를 호출합니다.
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
};

const printYes = function () {
  console.log('yes!')
};

const printNo = function print () {
  // named function 이름이 있는 함수는
  // better debugging in debugger's stack traces
  // 디버깅의 스택 트라이스에 함수의 이름이 나오도록 하기 위해 시용합니다.
  // recursion 또 함수안에서 또 함수를 호출하기위해서도 사용합니다.
  console.log('no!')
};
randomeQuiz('wrong', printYes, printNo);
randomeQuiz('love you', printYes, printNo);

// 9. Arrow function
// always anonymous 항상 익명함수이며 함수를 간단히 만들 수 있습니다.
const slmplePrint = function () {
  console.log('slmplePrint!')
};

const slmplePrint2 = () => console.log('slmplePrint2!');
const add = function (a, b) { 
  return a + b
};
const add2 = (a, b) => a + b;

// 10. IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE')
})();
// hello();라고 함수를 호출하지 않고 바로 호출하려면 위처럼 괄호로 한번더 감싸면됩니다.

// fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
// 입력 받은 command에 따라 입력 받은 숫자를 연산하는 함수를 만들어보세요.
// 원하는 command가 아니라면 어떻게 해야할지 고민해보세요.


function calculate1(command, a, b) {
  switch (command) {
    case '+':
      return a + b 
    case '-':
      return a - b     
    case '/':
      return a / b
    case '*':
      return a * b 
    case '%':
      return a % b
    default:
      return Error('not operator!')
  }
}
function calculate2(command, a, b) {
  if (command === '+') {
    return a + b;
  } else if (command === '-') {
    return a - b;
  } else if (command === '/') {
    return a / b;
  } else if (command === '*') {
    return a * b;
  } else if (command === '%') {
    return a % b;
  } else {
    return 'not operator!'
  }
}
const calculate01 = calculate1('*', 2, 8);
const calculate02 = calculate2('/', 2, 4);
console.log(calculate01)
console.log(calculate02)

