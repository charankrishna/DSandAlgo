function palindrome(str){

    let str1 = [...str].reverse().join('');
    if(str===str1){
        console.log(str+" is palindrom")}
    else{
        console.log(str+" Not palindrom")
    }}

palindrome("madam")