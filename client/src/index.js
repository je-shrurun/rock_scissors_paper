// 파일을 14KB 미만으로 관리함.
// TCP 및 이더넷 패킷 사이즈 때문
// hand shake 등 단게가 있기 때문
// 번들링으로 관리
// 이카운트 3.0 프레임워크는 자체 ES5 번들러를 만들어서 사용중 => 그래서 ES6가 안되는 이유...

// webpack 사용법
// 중심이 되는 import하는 주체의 파일은 index로 설정해야 함
// 병합할 파일들을 src 폴더에 넣음
// npx webpack을 실행하면 dist 폴더에 생성됨 (npm i webpack webpack-cli 로 미리 설치해야 함)
// 원래 webpack 설정을 해야하는데 최대한 기본 설정으로 실행함

import { CircleData } from "./circleData.js";
import { Item } from "./item.js";

function game(item) {
  clearInterval(timerId);

  if (comCurrentItem == item) {
    alert("비겼습니다.");
  } else if (comCurrentItem == items.getNext(item)) {
    alert("졌습니다.");
  } else {
    alert("이겼습니다");
  }

  $start.removeAttribute("disabled");
  items.getAll().forEach(function (item) {
    item.disable(true);
  });
}

var $start = document.getElementById("start");
var $com = document.getElementById("com");
var $itemBtns = document.getElementById("item-buttons");

var items = new CircleData([
  new Item("scissor", "가위", game),
  new Item("rock", "바위", game),
  new Item("paper", "보", game),
]);

items.getAll().forEach(function (item) {
  item.render($itemBtns);
  item.disable(true);
});
var comCurrentItem = items.getAll()[0];
var timerId;

$start.onclick = function () {
  $start.setAttribute("disabled", true);
  // disbled는 아예 없애야 함
  items.getAll().forEach(function (item) {
    item.disable(false);
  });

  // 싱글스레드이기 때문에 콜스택이 끝난 후 렌더링이 이루어짐
  // 함수를 종료하여 렌더링 할 수 있는 시간을 줘야 함
  // => setInterval
  timerId = setInterval(function () {
    comCurrentItem = items.getNext(comCurrentItem);
    $com.textContent = comCurrentItem.name;
  }, 100); // ms
};
