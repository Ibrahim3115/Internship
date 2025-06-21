var fruit=['apple','banana','mango','orange','cherry']
console.log(fruits[2]);
fruits.push('grapes');
console.log(fruit);
fruit.shift();
console.log(fruit);
console.log(fruit.length);
for (let i=0; i<fruit.length;i++){
    console.log(fruit[i]);
}
fruit.reverse(fruit);
console.log(fruit);
var num=[1,2,3,4,5]
var sum=0;
for(let j=0;j<num.length;j++){
    sum+=num[j];
}
console.log(sum);