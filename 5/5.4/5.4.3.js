let arr = ['a', 'b'];

arr.push(function () {
	alert(this);
});

arr[2](); // Выведет весь массив ['a', 'b', function(){...}]
