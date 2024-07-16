// function fun()
// {
//     var formDetails=retrivingData();
//     var loco=localStorageeData(formDetails);
//     console.log(loco);
// }
// function retrivingData()
// {
//     var name1=document.getElementById("name").value;
//     var roll=document.getElementById("rollno").value;
//     var college=document.getElementById("college").value;
//     var arr=[name1,roll,college];
//     return arr;
// }
// function localStorageeData(formDetails){
//     var n=localStorage.setItem("name1",formDetails[0]);
//     var r=localStorage.setItem("roll",formDetails[1]);
//     var c=localStorage.setItem("college",formDetails[2]);

//     var n1=localStorage.getItem("name1",n);
//     var r1=localStorage.getItem("roll",r);
//     var c1=localStorage.getItem("college",c);
//     var brr=[n1,r1,c1];
//     return brr;
// }






function fun()
{
    var formData=retrivingData();
    var localStorageeData=localing(formData);
    // console.log(localStorageeData);
    inserter(localStorageeData);
    
}


function retrivingData()
{
     var name=document.getElementById("name").value;
     var rollno=document.getElementById("rollnumber").value;
     var college=document.getElementById("college").value;

     var arr=[name,rollno,college];
     return arr;
}
function localing(formData){
    var n=localStorage.setItem("name",formData[0]);
    var r=localStorage.setItem("rollno",formData[1]);
    var c=localStorage.setItem("college",formData[2]);

    var n1=localStorage.getItem("name",n);
    var r1=localStorage.getItem("rollno",r);
    var c1=localStorage.getItem("college",c);
    var brr=[n1,r1,c1];
    return brr;
}

function inserter(localStorageeData)
{
    var Table=document.getElementsByTagName("table")[0];
    var row=Table.insertRow();
    row.insertCell(0).innerHTML=localStorageeData[0];
    row.insertCell(1).innerHTML=localStorageeData[1];
    row.insertCell(2).innerHTML=localStorageeData[2];
    row.insertCell(3).innerHTML="<button>UPDATE</button><button>Delete</button>"

}