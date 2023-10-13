let days=toDays(21);
console.log(days);

function toDays(a)
{
    console.log("given age into days is converted")
    return a*365+" days";
}

let sum=lessThan(40,90);
console.log(sum);
function lessThan(a, b) {
	return (a + b) < 100?true:false;
}
// condition ? exprIfTrue : exprIfFalse

// function lessThan(a, b) {
// 	return (a + b) < 100;
// }
// function lessthan(a,b)
// {
//     if(a+b<100)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }

let hour=toseconds(5);
console.log(hour);

function toseconds(h)
{
    return h*3600+" seconds"
} 

let sumOfAngles=polygon(4);
console.log(sumOfAngles);

function polygon(n)
{
    return (n-2)*180;
}

let text=printSomething("make us special!");
console.log(text);

function printSomething(a)
{
    return "something"+" "+a;
}

let num=lessOrEqual(0);
console.log(num);
function lessOrEqual(n) {
	return (n<=0)?true:false;
}

let operator=and(true , true);
console.log(operator);

function and(a,b)
{
    return a&&b;
}

let sumOfLeg=noOfLeg(5,7,8);
console.log(sumOfLeg);
// console.log(totOfLeg());


function noOfLeg(c,b,a)
{
    console.log(" Total no of chicken legs "+c*2+" Total no of cow legs "+b*4+" Total no of pig legs "+a*4)
    return (c*2)+(b*4)+(a*4);
}

let check=equality(1,"true");
console.log(check);

function equality(a,b)
{
    return a==b;
}

let fix=expressionCheck(1);
console.log(fix);

function expressionCheck(n)
{
    return n==7;
}
