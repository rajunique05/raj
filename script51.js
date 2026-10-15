//write a higher-order function runTwice(fn)that takes another function 
  //and excutes it two times
//---------------------------------------------------------------------

function runTwice(fn)
{
fn();
fn();
}
runTwice(function()
{
    console.log("hello");
});


//creat one pure function that always returns 
// the same output for given input and one impure function using a global variable
//----------------------------------------------------------------------

 