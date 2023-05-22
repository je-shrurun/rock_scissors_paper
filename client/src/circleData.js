export function CircleData(items) {
    this.items = items;
  }
  
  CircleData.prototype.getAll = function () {
    return this.items;
  };
  
  CircleData.prototype.getNext = function (item) {
    var index = this.items.indexOf(item);
    // index를 넘어가면 undefined가 나옴
    var next = this.items[index + 1];
    return next ? next : this.items[0];
  };
  