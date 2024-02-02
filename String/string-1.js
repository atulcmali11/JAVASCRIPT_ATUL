let name1="a9tu2l3ma5l7"

//console.log(name1);
let sum=0;
let t='';
for(let a=0;a<name1.length;a++)
//for(let a=name1.length;a>0;a--)   //for reverse string
{
    let ch=name1.charAt(a)
    if(ch>='0' && ch<='9'){
        t=t+name1.charAt(a)
       // sum+=ch
    }
    else{
        sum=sum+Number(t)
        t='';
    }
    //console.log(name1.charAt(a));
    
    
}
console.log(sum);