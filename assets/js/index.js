/*
//task1
let a, h;
a = parseFloat(prompt('Введите длину стороны треугольника a:'));
h = parseFloat(prompt('Введите длину высоты треугольника h:'));
console.log(`Площадь треугольника равна:`, 1/2*a*h);
*//*
//task2
let b = parseFloat(prompt('Введите длину в метрах:'));
console.log(`${b} метра(ов) равно ${b*100} сантиметр(ов) или ${b*39.37} дюймов`);
*//*
//task3
let i,n;
for (i=1; i<=9; i++){
    for (n=1; n<=9; n++) {
        console.log(`${i} * ${n} = ${i*n}`);
    }
}
*//*
//task4
let price  = parseFloat(prompt('Введите стоимость пиццы за 100 гр., грн. :'));
let ves = parseFloat(prompt('Введите вес пиццы, гр.:'))/100;
let skidka = 3;
if (price*ves > 500 || ves > 10) {
    console.log(`Вам дана скидка 3%, стоимость заказа ${price*ves*(1-skidka*0.01)} грн.`);
} else {
    console.log(`Стоимость заказа ${price*ves} грн.`);
}
*/
//task5
