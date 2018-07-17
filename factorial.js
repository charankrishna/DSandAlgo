function factorial(n){
    if(n==1||n==0){
        console.log('factorial(' +  n+ ') = ' + n);
        return n;
    }
    else {
        console.log('factorial(' + n + ') = ' + n + ' * ' + 'factorial(' + (n - 1) + ')')
        return n*factorial(n-1);
    }
}

console.log(factorial(3));