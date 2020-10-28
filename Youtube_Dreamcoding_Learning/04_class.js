/*
Class 객체 지향 언어
목표: class와 object의 차이

Q. 만약 JS에 class나 object가 없다면?
우리가 정의한 변수들이 여기저기 떠다니면서 규모있는 프로젝트를 만들기 힘들게됩니다.
클래스는 연관있는 변수나 함수들을 한곳에 묶어 놓는 컨테이너입니다.
class = fields + methods;
메서드 없이 속성만 존재하는 클래스는 데이터 클래스라고 말합니다.
class person {
  name; // field 속성
  age;
  speak(); // method 행동
}

세상에 사물과 물체가 존재하듯, 프로그래밍 세상에는 클래스나 오브젝트로 정의되어있습니다.
객체 지향 언어로 프로그래밍을 잘한다는것은 풀어야 하는 문제나 구현 기능을 객체로 잘 정의하는걸 말합니다.
어떻게 클래스로 만들 수 있을지 연습을 해보길 바랍니다.

class
- template 붕어빵을 만드는 틀, 청사진
- declare once 한번만 선언
- no data in 틀만 정의하고 데이터를 넣지 않은 상태. 어떤 데이터가 들어 올 수 있는지 정의
클래스는 정의만 한것이라 실제로 메모리에 탑재되지 않습니다.

object
- instance of a class 팥 또는 크림 또는 피자 붕어빵
  클래스를 이용해 새로운 인스턴스를 생성하면 오브젝트가 됩니다.
- created many times
- data in
실제로 데이터가 들어가기에 메모리에 탑재됩니다.

object-oriandted programing
class: template
object: instance of a class
JavaScript classes
- introduced in ES6
- syntactical sugar over prototype-based inheritance
기존의 프로토타입을 기반으로 편의를 위해 문법상 클래스가 추가되었습니다.
*/

// 1. 클래스 선언 class declarations
class person { // 클래스라는 키워드를 이용해 사람이라는 클래스를 만듭니다.
  // constructor 생성자
  constructor(name, age) { // 생성자를 이용해 오브젝트에 필요한 데이터를 전달합니다.
    // fields
    this.name = name; // 전달받은 데이터를 클래스에 존재하는 속성에 바로 할당합니다. 
    this.age = age;
  }
  // methods
  speak() {
    // 클래스에 있는 이름을 출력하며 인사합니다.
    console.log(`${this.name}: hello!`);
    // this라는것은 생성된 오브젝트를 의미합니다.
  }
}

// 새로운 오브젝트를 만들때는 new라는 키워드를 사용합니다.
const sujee = new person('sujee', 20);
console.log(sujee.name);
console.log(sujee.age);
sujee.speak();

// 2. Cetter & Setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    // 말이 안되는 값이 들어왔을 때 해당 값을 return 합니다.
    return this._age;
  }
  set age(value) {
    // 값을 새로 설정합니다.
    // if (value < 0) {
    //   throw Error('age can not be negative')
    // }
    this._age = value < 0 ? 0 : value;
  }
}
const user1 = new User('Steve', 'job', -1);
console.log(user1.age) // -1
// C언어는 함수를 호출하여 실행하는 프로그램이라면,
// JS는 오브젝트가 서로 인터랙션해서 돌아가는 프로그램입니다.
// 우리가 자주 마시는 자판기 커피를 예로 들어봅시다.
// 자판기 커피에서 커피를 뽑을 때, 동전을 넣으면 커피를 한잔 뽑을 수 있습니다.
// 풋 코인, 메이크 커피, 커피 갯수가 메서드와 속성으로 들어가있습니다.
// 여기서 커피 갯수가 -1이 되는건 옳지 못하니 사용자가 -1로 설정해도 0으로 만들어줘야합니다.
// 더 나아가 누군가 커피갯수를 수정하는게 옳지 못하기 때문에 비공개로 만듭니다. 

// 3. Fields (Public, Private)
// Too soon!
class Experiment {
  publicField = 2; // 외부에서 접근 가능
  #PrivateField = 0; // 해시기호를 붙이면 클래스 내부에서만 리드 및 변경 가능
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.PrivateField);

// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = 'sujeedo';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  static printPublisher() {
    console.log(Article.publisher);
  }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // 오브젝트안의 퍼블리셔는 값이 지정되지 않았다고 나옵니다.
console.log(Article.publisher);
Article.printPublisher();
// 스태틱은 오브젝트마다 할당되어지는것이 아니라 클래스 자체에 붙어있습니다.
// 스태틱이 붙은 속성이나 함수를 호출하려면 클래스로 호출해야합니다.

// 클래스 안에 있는 속성과 메서드는 새로운 오브젝트를 만들때마다
// 그대로 복제되어 값만 변경하여 만듭니다.
// 간혹 오브젝트에 또는 데이터에 상관없이 클래스 고유 값과 
// 동일하게 반복되어지는 메서드는 스태틱이라는 키워드를 붙여주면
// 오브젝트에 상관없이 클래스 자체에 연결됩니다.

// 들어오는 데이터에 상관없이 공통적으로 클래스에서 쓸 수 있는거라면 
// 스태틱을 사용해 메모리 사용을 줄여줍니다.

// 5. 상속, 다양성
// 브라우저에 다양한 도형을 그릴 수 있는 웹 어플리케이션을 만든다고 가정합니다.
// 직사각형, 삼각형, 원을 그릴 수 있다고 합니다.
// 이런 아이들을 클래스로 어떻게 정의할까요.
// 각각 나타내는 속성을 보면 너비 높이 색상이 존재합니다.
// 공통적으로 드로잉, 그리고 페인팅 색을 칠하는 메서드들도 존재합니다.
// 공통으로 반복되어지는 것들을 따로 만들어 반복하는것보다
// 관련성있는것들을 속성들을 shape에 모아 재사용하는게 좋습니다.

// Inheritance
// a way for one class to axtend another class.
class Shape {
  // 모양이라는 클래스 안에는 너비, 높이, 색상의 총 3가지 속성이 들어있습니다.
  // 그리는 메서드 영역을 가져오는 메서드 2개도 있습니다.
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  getArea() {
    return this.width * this.height;
  }
} 
class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    // 함수를 재정의하면서 부모의 메서드도 같이 사용하고 싶다면,
    super.draw(); // 부모의 메서드를 호출하면 됩니다.
    console.log('▲')
  }
  // 삼각형의 면적을 구하는 식은 다르기 때문에 곱한것을 2로 나눠야합니다.
  // 이렇게 필요한 함수만 재정의하여 사용하는걸 오버라이딩이라고 합니다. 
  getArea() {
    return (this.width * this.height) / 2;
  }
  // 클래스 오브젝트를 상속하고 있기에 클래스 오브젝트 함수를 재정의할 수 있습니다.
  toString() {
    return `Triangle coler: ${this.color}`
  }
}
// 새로운 클래스를 만들 때 익스텐스라는 키워드를 이용해 모양 클래스를 연장합니다.
// 이렇게 정의하면 모양에서 정의한 속성과 메서드가 포함되게 됩니다.
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());
// 이렇게 상속을 이용하면 공통부분을 일일이 작성하지 않은채 재사용할 수 있습니다.

// 6. Class cheking: instanceOf
// 왼쪽의 오브젝트가 오른쪽의 클래스를 이용해서 만들어진 인스턴스인지 아닌지 불리언으로 표시됩니다.
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle);  // false
console.log(triangle instanceof Triangle);   // true
console.log(triangle instanceof Shape);      // true
console.log(triangle instanceof Object);     // true JS의 모든 오브젝트 클래스는 JS의 오브젝트를 상속하니다. 
// 클래스에 커맨드나 컨트롤키를 누른채 클릭하면 정보가 보입니다.
console.log(triangle.toString()); // 클래스 오브젝트의 메서드를 사용할 수 있습니다.

// 7. JavaScript MDN Reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
// 자바스크립트 내부의 포함되어있는 오브젝트가 어떤게 있는 카테고리화로 한번에 볼 수 있습니다.
// 