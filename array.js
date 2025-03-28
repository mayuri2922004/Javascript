// Arrays




//  let stud1=89;
//  let stud2 = 90;

//  let marks={
//     stud1:85,
//     stud2 :78,
//     stud3:98
//  };

//  console.log(marks.stud1);

//Arrays: it is collection of data of same type....

// let marks = [89,78,85,98,75,87];
// let arr = ["AK", 74, "ScarL"];// Valid aahe but use naka karu..

// let str = "Hello";
//  str[1]= "a";
//  console.log(str[1]);
//  // String is Immutable // data cannot be change in string..



// // modify the element at index 2
// name[2]="Vision";
// console.log(name[2]);// array is mututable means array element can be modify


//looping on arrays


// let name = ["Ironman","Hulk","Thor","Loki","Spiderman","Thanos","Dr.Doom"];

// for(let i = 0; i<name.length; i++){
//     console.log(name[i]);
// }


// by using for-of
// for(let j of name){
//     console.log(j.toLowerCase());
// }
// console.log('Last Value of j store in memory ',j)

// find a avg number of marks

// let number = prompt("How Many Number Do want in size:")

// let marks=[];
// for(let j=0;j<number;j++){
//     let num = Number(prompt("Enter Numbers: "));
//     marks.push(num);

// }

// console.log(marks);
// let sum =0;
// //  for(let i of marks){
// //     sum = sum+i;
    
// //  }
// for(let i =0; i<marks.length;i++){
//     sum += marks[i];// sum=sum+marks[i];
// }
//  console.log("Total Sum is ",sum);
//  let avg = sum/marks.length
//  console.log("The avg of Marks is ", avg);

 // Assignment 
 // in a given array . make 10% discount in all array element and update a array and print it; using for-of


 let items =[250,650,300,900,400];

    for(let i=0;i<items.length;i++){
        console.log("Price of item is: ",items[i]);//250

        let discount = items[i]*10/100;
        console.log("Discount of item is: ",discount);//25

        items[i] = items[i]- discount;
        console.log("Price After Applying Discount of item is: ",items[i]);
    }
 console.log(items);
// 

// for(let i of obj){
//     console.log("Price of item is: ",i);//250

//     // let discount = i*15/100;

//     // console.log("Discount of item is: ",discount);//25

//     // i -= discount;
//     // console.log("Price After Applying Discount of item is: ",i);

// }


// let city =["nashik","Pune","nagpur","Mumbai"];
// for(let i of city){
//     console.log(i.toUpperCase());
// }


// find a avg of marks in array...

// let marks = [87,98,85,74,70,68];
// let sum = 0;

// for(let i of marks){
//     sum = sum + i;
   
// }

// console.log("Total Marks of Students is :",sum);

// let avg = sum/marks.length;

// console.log("The Avg Marks Of Students is :",avg);


// Assignment// jo nahi karega kal usko yaha baith ke karne bolunga....💀
// In Follwing Array [250,450,650,780,900,200] make 10% discount on each element and give me values after discount









// Array Methods 


// push() // add a element at a end 

//pop()  // delete a element from the end


//unshift() // add element at first


//shift() // delete element from start

//concat // it join two array


// slice() // it cannot change in main array // we need seperate varibale....
//slice(startindx , lastinx+1)


// spilce() // it change main array


// splice(startindx,  delete_elemet,  addelement)
 let marvel = [1,2,3,4,5,6,7,8,9];


 //add element
//  marvel.splice(3,0,101,102);
  
//Delete Element

// marvel.splice(4,3);
  

  //update element
  marvel.splice(0,2);
  console.log(marvel);
  












// let hero =["Ironman","Hulk","Thor","Loki","Spiderman","Thanos","Dr.Doom"];

//splice(startidx, deletenumber, addelement)

// let price =[1,2,3,4,5,6,7,8,9];

// // add element
// price.splice(3,0,101,102);

// console.log(price);

// // delete element
// price.splice(4,3);
// console.log(price);

// //replace element or update

// price.splice(4,3,101,102,103,104,105);
// console.log(price);






// let hero1=hero.slice(2) ;


//  console.log(hero1);
//  console.log(hero);
//  console.log(deletevalue);






















// let marks = [89,85,78,96,75,74];
// marks[4]= 79;
// console.log(marks[4]);



// let name= ["tony","stark","john","thor","tom","loki"];


// // name[1]="Jerry";
// // Arrays are mutable  // it is changeble....
// console.log(name);

// let add= ["Tony", 855, "Nashik"]; Valid but don't use this method..


// let hero= ["ironman","Thor","hulk","Spiderman","Strange","widow"];
// // console.log(hero[0]);
// // console.log(hero.length);


// //Looping on arrays

// for (let i = 0; i <=hero.length-1; i++){
//    console.log(hero[i]);
// }
// let str="JavaScript Mai Swagat hai";


// for(let hero of str){
//     console.log(hero);
// }

