'use strict'
// Objects
// one of the JavaScript's data types.
// a collection of realated data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Listerals and Properties
// primitive type은 변수 하나당 값을 하나만 담을 수 있습니다.
const name = 'sujee';
const age = 4;
// 출력하고 싶은 함수를 만들고 싶다면, 이름과 나이를 파라미터로 전달해야합니다.
print1(name, age);
// 함수는 파라미터를 받아 기능을 수행합니다.
// 하지만 입력받아야하는 값 즉, 파라미터가 많아진다면 굉장히 많은 코드가 추가되어야합니다.
function print1(name, age) {
  console.log(`name: ${name}, age: ${age}`); 
}

// 위의 문제를 개선하고자 오브젝트를 사욯하게 됩니다. 변수에 오브젝트를 할당합니다.
const sujee = { name: 'sujeedo', age: 20 }
// 그럼 더이상 파라미터를 일일이 전달하지 않고 사람이라는 데이터를 전달합니다.
print2(sujee);
function print2(person) {
  console.log(`name: ${person.name}, age: ${person.age}`);
}

// 오브젝트 생성하는 방법은 두가지입니다.
// 첫번째, 오브젝트 없이 괄호, 퀄리 브라켓을 이용해 만들거나,
const obj1 = {}; // 'object literal' syntax 문법
// 두번째, new라는 키워드를 이용해 클래스를 템플릿으로 이용하여 만들 수 있습니다.
// new라는 키워드를 이용해 생성하면, 오브젝트에서 정의된 생성자가 호출됩니다.
const obj2 = new Object(); // 'object constructor' syntax 문법

// 자바스크립트는 dynamically typed language으로 
// 타입이 Runtime 프로그램이 동작하고 있을때, 결정되는 언어입니다.
// 그래서 뒤늦게 속성을 추가할 수 있습니다.
// 위에서 사람은 이름과 나이만 있으면 돼.라고 생각했으나
// 나중에 일을 하는지 안하는지도 알수있도록하자.라며 속성을 추가하는게 가능합니다.
// 하지만 이처럼 너무 동적으로 코딩하면 유지보수가 힘들어지고 생각지 못한 에러발생이유가 되기때문에 지양합니다. 
// with JavaScript magic (dynamically typed language)
// can add properties later
sujee.hasJob = true;
console.log(sujee.hasJob); // true
// can dalete properties later
delete sujee.hasJob;
console.log(sujee.hasJob); // undefined

// 여기서 중요하게 짚고 넘어가야할 포인트는. 오브젝트는 키와 밸류의 집합체이다.라는것입니다.
// key: 우리가 접근한 수 있는 속성과 value: 그 속성이 가지고 있는 값 2가지로 나뉘어집니다.

// 2. Computed properties 계산된 속성들
// key should be a always string
// object['key']
// 오브젝트 안의 데이터에 접근하기 위해서는 닷.을 이용하는 방법외에도.
console.log(sujee.name);
// 오브젝트 안에 있는 변수의 이름을 문자열로 접근이 가능합니다.
console.log(sujee['name']);
// 위에서 속성을 지운것과 같이 다시 추가하는것도 가능합니다.
sujee['hasJob'] = true;
console.log(sujee.hasJob); // true

// 데이터 접근을 위한 두가지 방법을 사용하는 시기
// 첫번째, 코딩하는 그 순간 키에 해당하는 값을 받아오고 싶을때(대체로 코딩할때 사용)
// 두번째, 정확하게 어떤 키가 필요한지 모를때, 런타임에서 결정될때(실시간으로 원하는 키를 가져오고싶을때)
// 예를 들면, 값을 출력하는 함수가 있습니다. 이 함수는 오브젝트와 키를 받아서
// 오브젝트에 있는 키에 상응하는 값을 출력합니다.
// 그래서 언제 어떤 키를 받을지 모릅니다. 원하는 키를 사용자에게 입력을 받아 출력해야하는 함수라면,
// 키가 어떤게 출력될지 코딩하는 시점에서는 알수가 없습니다.
function printValue1(obj, key) {
  console.log(obj.key); // 오브젝트에 key라는 이름의 속성이 들어있니?
}
printValue1(sujee, 'name'); // undefined

function printValue2(obj, key) {
  console.log(obj[key]); // 오브젝트에 key라는 이름의 속성이 들어있니?
}
printValue2(sujee, 'name'); // sujeedo

// 3. Property value shorthand
// Lovely shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
// person4를 또 만들기 위해서는 이름과 나이를 또 작성해줘야하는데요.
// 그것을 효율적으로 하기 위해 person을 만드는 함수를 만들어 봅니다.
// 이름과 나이를 파라미터로 받아, 함수안에서 오브젝트를 만들어 리턴합니다.
function makePerson(name, age) {
  return {
    // Property value shorthand 키와 값의 이름이 동일하다면 생략할 수 있습니다.
    //name: name,
    //age: age
    name,
    age
  }
}
const person4 = makePerson('sujee', 28);
console.log(person4) // sujee, 28

// 4. Constructor function
// 오브젝트를 필요할때 일일이 만들다보면 불가피하게 동일한 키와 값을 반복해서 작성해야하는 문제점이 있었습니다.
// 함수를 이용해 값만 전달하면 오브젝트를 만들어주는 함수를 만들었었습니다.
// makePerson()함수는 마치 class와 같은 기능을 하게 됩니다.
// 이런식으로 자바스크립트에 클래스가 없던 시절에는 클래스를 대응할수있는 오브젝트를 만들어 사용했습니다.
// 또 이렇게 순수하게 오브젝트를 만드는 함수들은 이름을 대문자로 시작하도록 만듭니다.
function Person(name, age) {
  // this = { name: 'name'};
  this.name = name;
  this.age = age;
  // return this;
}
const person5 = new Person('sujeeim', 32);
console.log(person5) // sujee, 28


// 5. in operator: property existence check (key in obj)
// 해당하는 오브젝트 안에 키가 있는지 없는지 확인합니다.
console.log('name' in sujee);   // true
console.log('random' in sujee); // false
console.log(sujee.random);      // undefined


// 6. for..in for..of
// for (key in obj)
// 수지가 가지고있는 키들이 블럭을 돌때마다 키라는 지역변수에 할당이 됩니다.
console.clear(); // 콘솔창을 리셋합니다.
for (let key in sujee) {
  console.log(key); // name. age, hasjab
}
// for (value of iterable)
// 오브젝트가 아닌 배열을 사용합니다.
const array = [1, 3, 5];
for (let value of array) {
  console.log(value); // 1, 3, 5
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
// user오브젝트를 만든 후 user2에 할당하였습니다.
// user 오브젝트는 레퍼런스를 가지고있는데 그 레퍼런스는 name과 age값을 가지고 있습니다.
// user2는 user의 레퍼런스의 복제를 가지고 있고 어딘가에 있는 name과 age를 똑같이 가지게 됩니다.
const user = { name: 'sujee', age: '20'}
const user2 = user;
// 같은 레퍼런스를 가지고 있기에 user2의 이름 값을 바꾸면 user의 이름 값도 바뀌게 됩니다.
user2.name = 'sujeedo';
console.log(user);
// 그렇다면 서로 값이 분리된 복제는 할 수 없는걸까요.

// old way
// 예전에는 텅빈 오브젝트를 만들어 for in문을 사용해 오브젝트를 돌면서 key를 수동적으로 할당하였습니다. 
const user3 = {};
for (let key in user) {
  // user안의 key를 검사합니다. 
  // 그리고 user3의 새로운 속성을 해당 key로 할당합니다.
  // 그리곤 user에 있던 value를 할당해줍니다. 
  user3[key] = user[key];
}
console.log(user3); 

// 오브젝트를 복사하는 또 다른 방법으로는 오브젝트에 있는 assign을 사용합니다.
// 새로운 함수나 API를 사용할때는 mdn에서 확인하거나, 
// 컨트롤을 누른채 클릭하여 함수가 정의된 페이지로 이동하여
// 어떤 파라미터를 전달해서 어떤 값이 리턴되는지를 꼭 확인하고 사용해야합니다.
const user4 = {};
Object.assign(user4, user);
console.log(user4);
const user5 = Object.assign({}, user);
console.log(user5);
// assign은 복사하고자 하는 target과 복사를 하려는 source를 같이 전달해줘야하고,
// retrun되는 값은 target과 source가 함께 되는것을 알 수 있습니다.
// 복사되는 source는 여러개도 가능하며, 배열 형태여도 복사가 가능합니다.
// assign<T, U>(target: T, source: U): T & U;
// assign<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
// assign(target: object, ...sources: any[]): any;

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
// 나중에 복사될수록 값을 덮어쓰게 됩니다.
console.log(mixed.color);
console.log(mixed.size);

