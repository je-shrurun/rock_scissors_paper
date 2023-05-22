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

  items.getAll().forEach(function (item) {
    item.disable(false);
  });

  timerId = setInterval(function () {
    comCurrentItem = items.getNext(comCurrentItem);
    $com.textContent = comCurrentItem.name;
  }, 100); // ms
};
