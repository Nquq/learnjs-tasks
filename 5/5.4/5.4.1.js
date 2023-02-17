let fruits = ['Яблоки', 'Груша', 'Апельсин'];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push('Банан');

console.log(fruits.length); //Выведет 4, так как мы добавили в копию "Банан", то это добавилось и в оригинальный массив, так как в shoppingCart хранится ссылка на fruits
