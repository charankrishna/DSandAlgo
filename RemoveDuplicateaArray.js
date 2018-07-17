let array=[1,1,1,1,2,4,3,5,2]
function removeDuplicates(arr){
    let orginalarray = []
    for(let i = 0;i < arr.length; i++){
        if(orginalarray.indexOf(arr[i]) == -1){
            orginalarray.push(arr[i])
        }
    }
    return orginalarray
}

console.log(removeDuplicates(array));