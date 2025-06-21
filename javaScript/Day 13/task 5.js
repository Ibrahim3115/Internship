function BMI(weight,height){
    var ans=weight/(height*height);
    return Math.round(ans);
}

var ans=BMI(65,1.8);
console.log(ans);