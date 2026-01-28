console.log("RESULT");

hindi=60;
marathi=60;
english=60;
maths=60;
science=60;
computer=60;
total=hindi+marathi+english+maths+science+computer;
percentage=total/6; 

console.log("Total marks="+total);
console.log("Percentage="+percentage);

grade=percentage;
if(grade>=75){
    console.log("Grade="+"You got A Grade");
}
else if(grade>=60){
    console.log("Grade="+"You got B Grade");
}
else if(grade>=35){
    console.log("Grade="+"You got C Grade");
}

result=total;
if(percentage>=35){
    console.log("Result="+"You are Pass");
}
else{
    console.log("Result="+"You are Fail");
}