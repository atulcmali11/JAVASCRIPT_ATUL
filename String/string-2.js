//Program to find out count of vowels in string and dispaly it.

let str1="atul mali pandharpur"
let count=0;
const vow="aeiou"
let result="";
for(let a=0;a<str1.length;a++){
    if(vow.includes(str1.charAt(a))){
        count=count+1;
        result=result+str1.charAt(a);
    }
}
console.log(count);
console.log(result);