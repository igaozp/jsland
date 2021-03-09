let a = [1, 2, 3, 4];
console.log(a);
a = [];
console.log(a);

a = [1, 2, 3, 4];
console.log(a);
a.length = 0;
console.log(a);

a = [1, 2, 3, 4];
console.log(a);
a.splice(0, a.length);
console.log(a);

a = [1, 2, 3, 4];
console.log(a);
while (a.length) a.pop();
console.log(a);
