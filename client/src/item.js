export function Item(key, name, onClick) {
  this.key = key;
  this.name = name;

  // 버튼 만들기
  this.$btn = document.createElement("button");
  this.$btn.textContent = name;

  // 버튼 클릭 이벤트 핸들링
  // onClick을 직접 할당하면, this가 달라짐
  // this는 함수 호출자
  // 그냥 this.key를 하면, 버튼이 호출한 것으로 되어 $btn이 됨
  var _self = this;
  this.$btn.onclick = function () {
    onClick(_self);
  };
}

// item.render()를 하면, render()를 호출한 item이 this가 됨
Item.prototype.render = function ($parent) {
  $parent.append(this.$btn);
};

Item.prototype.disable = function (value) {
  if (value) {
    this.$btn.setAttribute("disabled", true);
  } else {
    this.$btn.removeAttribute("disabled");
  }
};
