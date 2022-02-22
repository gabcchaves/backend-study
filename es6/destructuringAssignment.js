const object = {
  item1: 1,
  item2: 2,
  item3: 3
};

const { item1, item2, item3 } = object;
console.log(item1);
console.log(item2);
console.log(item3);

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
}

const { today, tomorrow } = HIGH_TEMPERATURES;

console.log(today);
console.log(tomorrow);

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
console.log(highToday);
console.log(highTomorrow);

const user = {
  johnDoe: {
    age: 34,
    email: 'johndoe@freeCodeCamp.com'
  }
};

const { johnDoe: { age, email }} = user;
const { johnDoe: { age: userAge, email: userEmail }} = user;
console.log(age);
console.log(userAge);

let [a, b] = [1, 2, 3, 4, 5, 6, 7];
console.log(a, b);
let [x, y,,, z] = [1, 2, 3, 4, 5, 6, 7];
console.log(x, y, z);

a = 8;
b = 6;
[a, b] = [b, a];
console.log(a, b);