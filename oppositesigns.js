function oppositesign(x,y){


     if (x>0&&y<0){
            console.log("True");
        }
        else if(x<0&&y<0){
            console.log("False");
        }
        else if (y==0)
            console.log("You entered a non-negative integer")

    else if (x<0&&y>0){
            console.log("True");
        }
        else if(x>0&&y>0){
            console.log("False");
        }
        else if (x==0)
            console.log("You entered a non-negative integer")



}

oppositesign(-1,100)