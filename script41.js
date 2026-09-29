// for(let i=1;i<11;i++)
// {
//     console.log(i);
// }
// for(let i=1;i<11;i++)
// {
//     if(i%2===0){
//     console.log(i);
// }
// }

// for(let i=1;i<11;i++)
// {
//     if(i%2===0)
//     {
//         console.log(`${i}- even`);

//     }
//     else{
//         console.log(`${i}- odd`);
//     }
// }



// let n=Number(prompt("enter a no"));
// if(n>0)
// {
//     console.log("+ve no");
// }
// else if(n<0)
// {
//     console.log("-ve no");
// }
// else{
//     console.log("zero");
// }

// let age=+prompt("enter age");
// if(age>=18)
// {
//     console.log("can vote");
// }
// else{
//     console.log("cannot vote");
// }


// let n=5;
// for(let i=1;i<11;i++)
// {
//     console.log(n*i);
// }


// let age=prompt("age btao");
// if(age===null)
// {
//     console.error("you cancelled it");
// }
// else if(age.trim()==="")
// {
// console.error("bhai  dhng se likhle");
// }
// else{
//     age=Number(age.trim());
//     if(isNaN(age))
//     {
//         console.error("bhai no dall le");
//     }
//     else{
//         console.log("ye confirm no hai");
//     }
// }


//  let count=0;
// for(let i=1;i<16;i++)
// {
//     if(i>8)
//     {
//       count++;
//       console.log(i);
//      }
   
// }
//       console.log(`total count is ${count}`) ;



//ask user for passwod and print acess status
// let passwod="harshraj";
// let pass=prompt("enter password");
// if(pass===passwod)
// {
//     console.log("acess");
// }
// else if(pass===null){
//     console.error("you cancelled it");
    
// }
// else if(pass.trim()==="")
// {
//     console.error("kuch likh le");
// }
// else{
//     console.log("not acess");
// }










//level-2: slightly tougher but easy
//  let pass="rajbhaiii";
//  let attempt=0;
//  let password=prompt("enter password");
//  if(password===pass)
//  {
//     console.log("account opened");
//  }
//  attempt++;
//  while(password!==pass)
//  {
//     if(attempt===3)
//     {
//         console.error("account locked");
//         break;
//     }
//     password=prompt("enter password");
//   if(password===pass)
//  {
//     console.log("account opened");
//  }  
//     attempt++;
//  }

// ask user for words until they type stop .count how many times  they typed yes
// let words=prompt("type word");
// let count=0;
// while(words!=="stop")
// {
//     if(words==="yes")count++;
//     words=prompt('word bolo');
// }
// console.log(`total no of yes count: ${count}`);


// for(let i=1;i<51;i++)
// {
//     if(i%7===0)
//     {
//         console.log(i);
//     } 
// }

// let sum=0;
// for(let i=1;i<31;i++)
// {
//     if(i%2!==0)
//     {
//         sum+=i;
//     }
 
// }
//     console.log(sum);



// let num=+prompt("number bolo");
// while(num%2!==0)
// {
//     num=+prompt("number bolo");

// }
// if(num%2===0)
// {
//     console.log("even no (stop)");
// }



// let start=+prompt("enter start no");
// let end=+prompt("enter end no");
// if(start>end)
// {
//     console.error("you cannt give vice versa");
// }
// for(let i=start;i<end+1;i++)
// {
//     console.log(i);
// }

// let count=0;
// for(let i=1;i<21;i++)
// {
//     if(i%2!==0)
//     {
//    console.log(i);
//    count++;
//    if(count===3)
//    {
//     break;
//    }
//     }
// }

// let count=0;
//  for(let i=0;i<5;i++)
//  {
//     let num=+prompt("enter no");
//    if(num>0)
//    {
//    count++;
 
// }
    
// }
// console.log(count);   


 let balance=1000;
 let count=0;
 let flag=false;
 while(balance>0 && count!==3)
 {
    let withdraw=+prompt("enter amount");
    count++;
    if(balance>=0)
    {
      balance-=withdraw;
    }
    else 
    {
flag=true;
break;
    }
   
    if(flag===true)
    {
      console.log("insufficient bank balance");
    }
 }
 console.log(`balance:${balance}`); 