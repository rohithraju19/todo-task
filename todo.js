var arrCheckList=[];
var count=0;
var xhttp= new XMLHttpRequest();

xhttp.onload = function() 
{
    var result= this.responseText;
    result=JSON.parse(result);
    
    let table=document.getElementById('tdata');
  
    for(i=0;i<result.length;i++)
    {
            
        var row=table.insertRow(i+1);
        var cell1=row.insertCell(0);
        cell1.innerText=result[i].id;
        var cell2=row.insertCell(1);
        cell2.innerText=result[i].title;
        var cell3=row.insertCell(2);
        checkbox(cell3,result[i].completed,i);
       
    } 
    
}

xhttp.open('GET','https://jsonplaceholder.typicode.com/todos',true);
xhttp.send();


function checkbox(cell,val,j)
{
   var check= document.createElement("input");
   check.id="incheck"+j;
   check.type="checkbox";
   check.checked=val
   if(!val)
   {
    arrCheckList.push("incheck"+j);
   }
   cell.appendChild(check);
}

console.log(arrCheckList);

function taskCompleted()
{
    
        var tab=document.getElementById('tdata');
        tab.addEventListener("change",(event)=>
        {   
            let promise=new Promise((resolve,reject)=>
            {
            console.log("value changed" + event.target.checked);
            if(event.target.checked)
                {count++;}
            if(count==5)
                {resolve("Congrats 5 task has been completed");}
            else
                {reject("not yet")}
            });
            promise.then(data=>alert(data)).catch(error=>console.log(error));

        });
        
    
}
taskCompleted();

    










// function completedStatus()
// {
//     var promise =new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>
//             {
//                 var len=arrCheckList.length;
//                 var count=0;
//                 for(k=0;k<len;k++)
//                 {
//                 var ele=document.getElementById(arrCheckList[k]);
//                 var valueCheckBox=ele.checked;
//                 console.log(arrCheckList[k]+"  "+valueCheckBox);
//                 if(valueCheckBox)
//                     {
//                         count++;
//                     }
//                 }
//                 console.log(count + "=count");

//             if(count==5)
//                 {
//             resolve("Congrats 5 task has been completed")
//                 }
//             else
//                 {
//             reject("not yet")
//                 }
//             },200);
        
//     });
//     promise.then(data=>console.log(data)).catch(error=>console.log(error));
//     console.log("completed status function called");
//     setTimeout(completedStatus, 3000);
// }

// completedStatus();