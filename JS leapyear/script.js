console.log("find out whether the given input is leap year or not");
let year=prompt("enter a year :");

if((year%4 == 0)&& !(year%100==0)||(year%400==0)){
    console.log("Given year is leap year")
}
else{
    console.log("Given input is not a leap year");
}