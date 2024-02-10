let num=1634;
let originalNumber=num;
let sum=0;
//const len=String(num).length
while(originalNumber>0){
   let d=originalNumber%10;
   sum=sum+(d**4);
   originalNumber=parseInt(originalNumber/10);
}
console.log(sum);
if(num==sum){
    console.log("Armstrong number");
}
else
console.log("Not armstrong");
