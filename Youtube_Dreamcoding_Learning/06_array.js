'user strict'

// TODO: 배열의 개념정리와 활용법을 익히자.
// FIXME:

/*
자료구조: 비슷한 종류의 데이터들을 묶어서 한곳에 보관하는것.
자료구조는 어떤 방식으로 어떤 형식으로 데이터를 담는지에 따라 다양한 타입으로 나뉘어집니다.
비슷한 종류의 데이터를 묶어놓은것을 오브젝트라고 했는데, 자료구조의 차이점은?
예를 들면,
토끼는 동물이고, 당근은 채소입니다.
토끼는 귀가 2개라는 속성이 있고, 먹는다, 뛴다라는 메서드가 있습니다.
당근은 색이 주황색이며 비타민 C라는 속성만 가지고 있습니다. 당근자체는 메서드가 없습니다.
이처럼 오브젝트는 서로 연관된 행동과 특징을 묶어 놓은것을 말합니다.
이런 토끼와 당근처럼 비슷한 타입의 오브젝트를 모아놓은것을 자료구조라고합니다.
보통 자료구조에는 동일한 타입의 오브젝트만 담을 수 있습니다만,
자바스크립트는 타입이 동적으로 정의되기때문에 한바구니 안에 다양한 종류의 데이터를 담을 수 있습니다.
하지만 그렇게 프로그래밍하면 안됩니다.
이렇게 물건들을 한데 담아놓은 자료구조들 중에서도 새로운 데이터를 삽입, 정렬, 삭제, 검색 등을 할때
어떤 알고리즘을 사용하여 효율적으로 작성할 수 있을지 공부해야합니다.
*/

// 배열은 칸칸이 모여있는 자료구조를 말합니다. 0부터 시작하는 인덱스가 부여됩니다.

// 1️⃣ Array Declation 배열 생성
// 1-1. new라는 키워드를 통해 오브젝트를 생성하듯 배열도 생성할 수 있습니다.
const arr1 = new Array();
// 1-2. 대괄호를 이용하여 데이터를 바로 넣는 방법이 있습니다.
const arr2 = [1, 2]

// 2️⃣ Index Position 인덱스 접근
const fruits = ['🍏', '🍑']
console.log(fruits);
console.log(fruits.length);

// 3️⃣ Looping over an array
// print all fruits
for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log('-');
for(fruit of fruits){
  console.log(fruit);
}
console.log('-');

// Performs the specified action for each element in an array.
// 어떤걸 수행하는 함수(콜백함수)인데, 정해진 어떤 액션을 수행한다고해. 배열에 들어있는 각각의 요소마다.
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
// forEach는 총 2가지의 파라미터가 전달되는데,
// 첫번째는 콜백함수로 전달한 함수의 value하나 하나를 호출합니다.
// 콜백함수에는 배열에 있는 값과 값이 들어있는 인덱스와 전체 배열. 총 3가지의 인자가 들어옵니다.
// 두번째는 뭔지 알수 없지만 ?기호가 있다면 전달해도 되고 안해도 되는구나를 알수있습니다.
fruits.forEach(function (fruits, index, array) {
  console.log(fruits,index,array);
});
fruits.forEach((fruits) => {
  console.log(fruits);
});
fruits.forEach((fruits, index) => console.log(index));

// 4️⃣ Addtion, deletion, copy
// push: add an item to the and 아이템을 뒤에서부터 추가
fruits.push('🍋', '🍓');
console.log(fruits);
// pop: remove an item from the end 아이템을 뒤에서부터 제거
fruits.pop();
console.log(fruits);
const poped = fruits.pop(); // 제거된 아이템만 반환
console.log(poped);
// unshift: add an item to the benigging 아이템을 앞에서부터 추가
fruits.unshift('🍋', '🍓');
console.log(fruits);
// shift: remove an item from the benigging 아이템을 앞에서부터 제거
fruits.shift();
console.log(fruits);

/*
note!! shift, unshift are slower than pop, push
시프트와 언시프트는 팝과 푸시보다 느립니다.
뒤에서부터 데이터를 넣고 빼는것은 기존의 데이터를 움직이지 않아도 되기때문에 빠른 연산을 진행할 수 있지만,
앞에서부터 데이터를 넣고 빼기 위해서는 기존의 데이터를 밀거나 당겨야합니다. 인덱스가 계속 바뀝니다.
*/

// splice: remove an item by index position 아이템을 지정된 포지션에서 제거 (splice: 꼬아서잇다. 이어주다)
// 원하는 시작 인덱스를 지정하고, 몇개나 지울지 갯수를 정하지 않으면 지정 인덱스 이후 모두 제거해버립니다.
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 0, '🍍', '🥝');
console.log(fruits);

// concat: combine two arrays 2가지 이상의 배열을 묶음
// concat(...items: ConcatArray<T>[]): T[];
const flower = ['🌼', '🌷'];
const ff = fruits.concat(flower);
console.log(ff);

// 5️⃣ Searching
// indexOf: find the index 배열안에 어떤 값이 몇번째 인덱스에 있는지 알고싶을때 사용합니다.
console.log(fruits.indexOf('🍓'));   // 현재 위치 인덱스 반환
console.log(fruits.indexOf('🍋'));   // 아이템이 없다면 -1을 반환
// includes: 아이템이 있는지 유무 검사
console.log(fruits.includes('🍋'));  // 유무 참 거짓으로 반환

// lastIndexOf
fruits.push('🍓');
console.log(fruits)
console.log(fruits.indexOf('🍓'));     // 0
console.log(fruits.lastIndexOf('🍓')); // 3