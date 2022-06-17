const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();

var days = null;

var map = new Map();

map.set(0, 31);
map.set(2, 31);
map.set(4, 31);
map.set(6, 31);
map.set(7, 31);
map.set(9, 31);
map.set(11, 31);
map.set(3, 30);
map.set(5, 30);
map.set(8, 30);
map.set(10, 30);
map.set(1, 28);

days = map.get(month);
if (month == 1) {
  if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    days++;
  }
}

console.log(days + " days for " + year + " - " + (month + 1));
