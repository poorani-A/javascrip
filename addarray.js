// function marge_array(arr1, arr2){
//     arr=[];
//     var x=arr1.concat(arr2);
//     var y=x.filter(item,pos)
//     indexof(item==pos);
//     document.getElementById("h1id").innerHTML=c;

// }
// marge_array(arr1, arr2)marge_array(arr1, arr2)




// marge_array(arr1, arr2)marge_array(arr1, arr2)
// {
// let array1 = ['a','b','c']
// let array2 = ['c','c','d','e'];
function marge_array(array1,array2)
{
var array3 = array1.concat(array2);

array3 = array3.filter((item,index)=>{
   return (array3.indexOf(item) == index)
})
}