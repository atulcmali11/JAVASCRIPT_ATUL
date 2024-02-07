let str="121"
let rev="";
for(let i=str.length-1;i>=0;i--){
    rev=rev+str.charAt(i)
}
console.log(rev);
if(Number(rev)==Number(str)){
    console.log("String is palindrome",rev);
    }
    else{
        console.log("String is not palindrome",rev);
    }

       