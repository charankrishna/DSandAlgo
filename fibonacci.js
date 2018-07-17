
function fibonacci(n) {

    var arr=[];

    for(let i=0; i<=n;i++){
        if(i<=1){
            arr.push(i);
        }
        else {
            arr.push(arr[i-1]+arr[i-2]);
        }
    }
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
    for(let i=0;i<n;i++){
        console.log(arr[i]);
    }

}

fibonacci(3)