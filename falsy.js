// function myarray(Array1) {
//     var NewArray2 = [];
//     for (var i = 0; i < Array1.length; i++) {
//         !!Array1[i] ? NewArray2.push(Array1[i]) : NewArray2
//     }

//     console.log(NewArray2);
    
// }


function myfunction(){

    var array=[10,20,30,40,50,60,70];
     var target=50;

    for(var i=0;i<array.length;i++)
    {
        for(var j=i+1;j<array.length;j++)
        {
            if(array[i]+array[j]==target)
            {
            console.log("sum of two numbers"+array[i]+ "and" +array[j] );
            }
        }

    }
}