//  Declare    Stopping Con. Updation
// for(let i=2;    i<=50;        i=i+2  )//i = i+2;//i+=2
// {
//     //operation
//     console.log(i);
// }

// let num = 0;  // declare
// while(num <= 50)//condition
// {
//     //opertaion
//     console.log(num);
//     num += 2;// updation num =num+2   
// }

// // console.log("Outside the loop:",num);

// let sum=0;
// let i=0;
// while(i<=6)
// {
    
//     sum= sum+i;
//     i++;
//     console.log(sum);
// }

// let a = 0;
// let b = 1;
// let c;
// let n = 0;
// while(n<=10){
//     c = a+b;
//     a = b;
//     b = c;
//     n++;
//     console.log(b);
// }

// let num = "Hello";
// let orgnum = num;
// let rev = 0;
// while(num > 0){
//     let x = num % 10;
//     rev = rev * 10 + x;
//     num = (num - x) /10;
// }

// console.log(rev);

// if(rev == orgnum){
//     console.log(orgnum+" It is a Palindrome Number..");
// }
// else{
//     console.log(orgnum+" It is Not a Palindrome Number..");
// }

// let str= "";
// let rev ="";
// for(let i = str.length-1 ; i>=0;i--){
//     rev = rev + str[i];
// }

// console.log("The Reveserd string is :", rev);

// let str="HELLO";
// let rev="";
// let i=str.length-1
// while(i>=0)
// {
//     rev=rev+str[i];
//     i--;
// }

// console.log("The Reveserd string is :", rev);



// if (str==rev)
// {
//     console.log("it is a palindrome");

// }
// else{
//     console.log("it is not a palindrome");
// }




//  for(let i of str)
//  {
//     console.log(i);
    
//  }
// console.log(str.length)

// while(i<=6)
// {
    
//     sum= sum+i;
//     i++;
//     console.log(sum);
// }

// let n = 0;
// do{
    
//     console.log(n);
//     n++;
// }while(n<=10);


//     while(n<=6)
// {
//     console.log(n);
// }

//Num Reverse...
// let num = 4224;
// let orignal = num;

// let rev=0;
//  while(num>0){
//     let x = num %10;
//     rev = rev*10+x;
//     num = (num-x)/10;
//  }
 

//  console.log("The Reversed value is :",rev);

//  if(orignal==rev){

//    console.log("the num is palindrome");

//  }
//  else{
//     console.log("the num is not palindrome");
//  }


// string

// let str ="JavaScript";
// console.log(str.length);
// console.log(str[4] + str[0]);
// console.log(str.slice(4));


// hello    ---> olleh

// let str = "nitin";
// let rev = "";
//  for(let i = str.length-1; i>=0; i--){
//     rev=rev+str[i];
//  }

//  console.log(rev);

//  if(str==rev){

//        console.log("the string is palindrome");
    
//      }
//      else{
//         console.log("the string is not palindrome");
//      }

// let num = 94704;
// let y=num;
// let numstr = num.toString();
// let power = numstr.length;
// let sum = 0;

// while(num>0){
//     let digit = num %10;
//     sum = sum +(digit ** power);
//     num=(num-digit)/10;
// }
// console.log("The addition of Power is : ", sum);

// if(y==sum){
//     console.log("the no is armstrong");
// }
// else{
//     console.log("the no is not armstrong");
// }





















// // String Reverse...
// let str = "level"; // olleH
// let rev = "";

// for(let j = str.length -1;j>=0;j--){
//     rev = rev +str[j];
// }

// console.log("Reversed String is :",rev);

// if (str==rev){
//     console.log("the String is palindrome");
// }
// else{
//        console.log("the String is not palindrome");
// }


// Strings

// let str = "JavaScirpt";
// console.log(str.slice(4));
// console.log(str.length);
// let num = prompt("Enter Your Number :");
// let num1=num;
// let numstr = num.toString();
// let power = numstr.length;//3
// let sum = 0;

// while(num>0){
//     let digit = num %10;//3
//     sum = sum + (digit ** power);
//     num = (num - digit ) /10;
// }

// console.log(sum);
// if(sum==num1)
// {
//     console.log("Number is Armstrong",num1);
// }else
// {
//     console.log("Number is not Armstrong",num1);
// }