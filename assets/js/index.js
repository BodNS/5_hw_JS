/*
//task1
let a, h;
a = parseFloat(prompt('Введите длину стороны треугольника a:'));
h = parseFloat(prompt('Введите длину высоты треугольника h:'));
console.log(`Площадь треугольника равна:`, 1/2*a*h);
*/ /*
//task2
let b = parseFloat(prompt('Введите длину в метрах:'));
console.log(`${b} метра(ов) равно ${b*100} сантиметр(ов) или ${b*39.37} дюймов`);
*/ /*
//task3
let i,n;
for (i=1; i<=9; i++){
    for (n=1; n<=9; n++) {
        console.log(`${i} * ${n} = ${i*n}`);
    }
}
*/ /*
//task4
let price  = parseFloat(prompt('Введите стоимость пиццы за 100 гр., грн. :'));
let ves = parseFloat(prompt('Введите вес пиццы, гр.:'))/100;
let skidka = 3;
if (price*ves > 500 || ves > 10) {
    console.log(`Вам дана скидка 3%, стоимость заказа ${price*ves*(1-skidka*0.01)} грн.`);
} else {
    console.log(`Стоимость заказа ${price*ves} грн.`);
}
*/ /*
//task5
let i, stepen = 1;
for (i = 1; i <= 9; i++) {
  stepen *= 2;
  console.log(`2 в степени ${i} равно ${stepen}`);
}
*/ /*
//task 6
let x;
for (x = -2; x <= 2; x += 0.5) {
  console.log(
    `При х равном ${x} y = -3x*x + 5x - 2 равно ${-3 * x * x + 5 * x - 2}`
  );
}
*//*
//task7
let q = parseFloat(prompt("Введите делимое:"));
let w = parseFloat(prompt("Введите делитель:"));
let answer;
do {
  answer = parseFloat(prompt(`Решите пример ${q} / ${w} =`));
} while (answer != q / w);
alert(`Вы правильно ответили!`);
*//*
//task8
let i, p;
do {
p = parseInt(prompt("Введите целое число больше 0:"));
} while (p <= 0);

if (p==1 || p == 2) {
    console.log(`Число простое`); 
   
} else {
    for (i=2; i < p; i++) {
        if (p % i == 0) {
            console.log(`Число ${p} составное`); 
            break;
        } 
    console.log(`Число ${p} простое`); 
    break;
    }
}
*//*
//task9
let u = -1, k;
k = parseInt(Math.random()*10);
while ( u != k) {
   u = parseInt(prompt("Компъютер загадал число от 1 до 10, угадайте его: "));
   if (u < k) {
       alert('Загаданное число больше');
   } 
   else if (u > k)  {
       alert('Загаданное число меньше');
   }
   else {
       alert ('Вы угадали!');
    }
} 
*/
