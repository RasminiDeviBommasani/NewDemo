var data={
    name:" ",
    rollno:0,
    email:"",
}


function fun(event){
 data.name=event.target.value;
}


function myfun(event){
    data.rollno=event.target.value;
   }

   function few(event){
    data.email=event.target.value;
   }
   function moto(event){
    console.log(data);
   }