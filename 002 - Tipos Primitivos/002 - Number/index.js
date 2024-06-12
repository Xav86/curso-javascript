console.log(123);
console.log(Number("123") + 1);

console.log("--------------");

console.log(typeof f123);
console.log(typeof Number("123"));
console.log(typeof "123");

/* 
    Forma correta de usar
    Number 123
    Number 123 + 123 = 246
    Number ("123") - 1 = 122

    Pode gerar bugs
    Number "123" - 1 = 122
    Number "123" * 2 = 246
*/
