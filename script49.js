function sayhello()
{
    console.log("hello js");
}
sayhello();



function add(a,b)
{
    return a+b;
}
console.log(add(1,2));

function greetings(guest="guest")
{
    console.log(`hi ${guest}`);
}
greetings();


function addunlimited(...nums)
{ 
    let sum =0;
 nums.forEach(function(val)
{
    sum+=val;
})
console.log(sum);
}
addunlimited(1,2,3,4,5,6);


function addunlimited(...nums)
{ 
    let sum =0;
 
  for(let i=0;i<nums.length;i++)
  {
  sum+=nums[i];
  }
console.log(sum);
}

function addunlimited(...nums){
    let ans=nums.reduce(function(acc,val)
{
    return acc+val;
},0)
console.log(ans);
}
addunlimited(1,2,3,4)


let arr=["apple","guava","orange","banana","mango"];
arr.push("grapes");
arr.unshift("apple");
arr.shift("apple");


let arr=[1,2,3,7,5,6]
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

