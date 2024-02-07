let num=123456;
console.log("original number=",num);
console.log(typeof(num));

let strNum=String(num)
console.log("Number to string conversion=",strNum);
console.log(typeof(strNum));

let rev="";
for(let i=strNum.length;i>=0;i--){
    rev=rev+strNum.charAt(i)
}
let Numstr=Number(rev)
console.log(typeof(Numstr));
console.log(rev);