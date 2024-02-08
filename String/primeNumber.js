
//Prime numbers check
let num=13;
let flag=1;
if(num<=1){
    console.log("Not a prime number");
}
for(let i=2;i<num;i++){         //i=2
    if(num % i == 0){
        flag=0;
        break;
    }
}
if(flag==0)
console.log("Not Prime");
else
console.log("prime");
