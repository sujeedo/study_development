// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strit';

// 2. Variable 변경될 수 있는 값(변수) 
// re(reda/write) 변수는 메모리의 값을 읽고 쓰는게 가능합니다. 값 변경 가능
// let (added in ES6)

let name = 'sujeedo' // name이란 변수에 sujeedo란 값을 할당합니다.

/*
어플리케이션을 실행하면 어플리케이션 마다 사용할 수 있는 메모리가 할당되어집니다.
이 메모리 어딘가에는 비어있는 박스가 있는데, 그 갯수는 제한됩니다.
let이라는 키워드로 변수를 정의하면, 메모리 어딘가에 할당된 박스를 가리키는 포인터가 생기게 됩니다.
이 포인터를 이용해 값을 계속 바꿔나갈 수 있습니다.

전역 변수는 어플리케이션이 실해되는 순간부터 끝나는 순간까지 항상 메모리에 탑재 되어있기 때문에
최소한으로 사용하는게 좋습니다.
가능하면 클래스나 함수 if나 for로 필요한 부분만 정의해서 사용하는게 좋습니다.

hoisting (move declaration from bottom to top)
호이스팅이란, 항상 선언을 제일 위로 끌어올려주는 기능을 말합니다.

Mutable data type :  값이 계속 변경될 수 있는 타입
*/

// 3. Contant 변경 되지 않는 값(상수)
// r(reda onry) 상수는 읽기만 가능합니다. 다시 다른 값을 쓰는건 불가능.
// use const whenever possible. onry use let if variable needs to change.
/* 
favor immutable data type always for a few reaseons:
 - security 해커들이 값을 변경하는것을 방지
 - thread safety 한가지의 프로세스 안에서 다양한 thread들이 동시에 변수에 접근하여 값을 변경할 가능성을 방지
 - reduce human mistakes 실수 방지

const는 박스를 가리키는 포인터가 잠겨있어 할당된 값을 바꿀 수 없습니다.

Mutable data type :  값이 계속 변경될 수 있는 타입 let
Inmutable data type :  값이 절대 변경될 수 없는 타입 const
*/

// 4. Variable types
/*
어떤 프로그램 언어든 primitive, object 두가지 타입으로 나뉘어집니다.
primitive : single item 더이상 작은 단위로 나뉘어지지 않는 한가지의 아이템
            number, string, boolean, null, undefindn, symbol
            값 자체가 메모리에 바로 저장됩니다.
object : box container 싱글 아이템을 묶어 단위 박스로 관리할 수 있게 해주는 것
         용량이 너무 커서 메모리에 한번에 안들어갑니다.
         레퍼런스를 통해 오브젝트가 담긴 메로리를 가리킵니다. 
         즉, 오브젝트가 가리키는 레퍼런스가 메모리에 저장되어 잠기므로
         레퍼런스 안의 데이터는 값이 바뀔 수 있습니다.
function : first-class function
           function도 다른 데이터타입처럼 변수에 할당되고, 
           함수의 파라미터(인자)로도 전달이 되고,
           함수에서 리턴타입으로도 function을 리턴할 수있습니다.

C언어의 경우는 더욱 세세하게 메모리를 관리합니다.
얼마만큼의 사이즈의 메모리를 할당할건지 미리 생각해야합니다.
숫자에 관련된 변수만 보더라도 short, int, long은 정수 float, double은 실수를 할당합니다.
한반에 들어갈 학생들을 정의하는데 long처럼 1000단위의 메모리가 필요하지 않습니다.
하지만 자바스크립트는 얼마나 큰 사이즈를 할당할건지 생각할 필요가 없습니다.
자바스크립트는 타입이 다이나믹하게 결정되기 때문입니다.
*/
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// 4-1. number - speicla numeric values: infinity, negativeInfinity, nAn
// 돔요소를 자바스크립트로 포지션을 바꾸는 등 다양한 계산을 할 때,
// 나누고자 하는 값이 0인지 아닌지 숫자가 아닌지 확인을 안할 경우 아래의 값이 출력됩니다.
const infinity = 1 / 0; // 무한대의 숫자값
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2; // 숫자가 아닌 경우
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairy new, don't use it yet)
const bigInt = 12345690123456789012345678901234567890; 
const bigIntN = 12345690123456789012345678901234567890n; 
// over (-2**53) ~ 2+53) 자바스크립트의 넘버는 마이너스2의 53승부터 2의 53까지 범의만 표시
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
console.log(`value: ${bigIntN}, type: ${typeof bigIntN}`);
Number.MAX_SAFE_INTEGER;

// 4-2. string
const char = 'c';
const sujeedo = 'sujeedo';
const greeting = 'hello' + sujeedo;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const hellosu = `hi ${sujeedo}`; // template literals (string)
console.log(`value: ${hellosu}, type: ${typeof hellosu}`);
// 코트안에 +를 중간에 넣어줘야하면 번거롭지만 `백틱을 이용하면 간편하게 string을 만들 수 있습니다.

// 4-3. boolean
// false: 0, null, undefined, NaN, '';
// ture: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// 4-4. null
let nohting = null; // 너는 텅텅 비어있는 값이야.
console.log(`value: ${nohting}, type: ${typeof nohting}`);

// 4-5. undefined
let x; // 너는 선언은 되었지만 비어있는지 아닌지 정의가 안되어있어.
console.log(`value: ${x}, type: ${typeof x}`);

// 4-6. symbol, create unique identifiers for objects
// 맵이나 자료구조에서 고유의 식별자가 필요하거나,
// 동시에 다발적으로 우선순위를 주고 싶을 때 사용합니다.
// string은 다른 모듈이나 다른 파일에서 동일한 string을 사용하면, 동일한 식별자로 간주됩니다.
// 하지만 반대로 심볼은 동일안 string으로 심볼을 만들어도 고유한 식별자로 만들 수 있습니다.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id'); // 주어진 string에 맞는 심볼을 만들어줘
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
// description을 사용해 string으로 변환하지 않는다면 출력되지 않습니다.

// 4-7. object, real-life object, data structure
// 오브젝트는 우리가 일상생활에서 보는 물건과 물체들을 대표할 수 있는 박스형태를 말합니다.
const sujee = { name: 'sujee', age: 20}; // 수지의 이름은 수지이고 나이는 20살이다.
sujee.age = 21; //내부 값은 바뀝니다.

// 5. Dynamic typing : dynamically typed language
/*
다른 언어들은 변수를 선언하면서 타입도 같이 선언하는 반면에 
자바스크립트는 선언할 때 타입을 선언하지 않고 런타임 프로그램이 동작할때 할당된 값에 따라 타입이 변경됩니다.
좋은 아이디어를 빠르게 프로토타입을 만들 때는 유용합니다만,
다수의 개발자나 규모의 프로젝트는 많은 에러사항을 냅니다.
*/
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; // 문자열에 +가 있으니 문자열끼리 더하자.
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'; // 숫자를 나누는 %연산자와 실제 숫자니까 나눠줍니다.
console.log(`value: ${text}, type: ${typeof text}`);
//console.log(text.charAt(0)); //h
// text라는 변수 이름을 보고 string이라고 생각하여 문자열을 가져왔는데,
// 어느새 타입이 숫자로 바뀌어있어 에러가 발생합니다.
// 런타임에서 타입이 정해지는것에 개발자들이 뒤통수를 많이 맞아서 타입스크립트가 나옵니다.
// 타입스크립트는 자바스크립트 위에 타입이 올려진 언어입니다.
// 타입스크립트는 브라우저가 이해할 수 있는 자바스크립트로 트랜스 컴파일러(babel)을 사용해야합니다.


// 6. data type
// immutavble data types: premitive types, frozen objects (i.e object.freeze())
//                        데이터 자체를 절대 변경하지 못하늩 타입.
// Mutable data type: all objects by default are mutable in JS
//                    오브젝트는 스스로 변경이 계속 가능
// favor immutable data type always for a few reaseons; 