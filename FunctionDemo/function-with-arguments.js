function login(username,password){
    console.log("Enter username:-",username);
    console.log("Enter password:-",password);
    
}
login('Atul','Mali')


function fact(num){
    if(num<0){
        return "Factorial is not done for negative number";
    }
    else if(num===0 || num===1){
        return 1;
    }
    else{
        let result=1;
        for(let i=2;i<=num;i++){
            result=result*i;
        }
        return result;
    }
    
}
console.log(fact(-5));


print('hello',5)
