function BMI(weight,height){
    var ans=(weight/(height)**2).toFixed(1);
    if(ans<18.5)
        return `Your BMI is ${ans}, so you have a underweight.`;
    else if(ans>=18.5 && ans<=24.9)
        return `Your BMI is ${ans}, so you have a normalweight.`;
    else
        return `Your BMI is ${ans}, so you have a overweight.`;
}
var ans=BMI(60,1.7);
console.log(ans);