
function prod(n){
    if (Number.isInteger(n)){
        let multiply=(n<<1)+(n<<3);
        console.log(multiply);
    }
    else{
        console.log("Please enter Valid Number")
    }
}

prod(6);