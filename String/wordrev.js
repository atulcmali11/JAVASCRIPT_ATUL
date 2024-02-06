let str1="atul mali pandharpur";
let str2=str1.split(" ");
//console.log(str2);
let rev="";
for(let i=0;i<str2.length;i++){
    for(let j=str2[i].length-1;j>=0;j--){
        rev=rev+str2[i].charAt(j);
        }
    rev=rev+" ";
}
console.log(rev);