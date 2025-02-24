let n =prompt("enter the number :")

let b =parseInt(n)

function factorial(b)
{
   if(b>1)
   {
       return b* factorial(b-1);
   }
   else
   {
       return 1;
   }
}

let x = factorial(b)
document.write(x)