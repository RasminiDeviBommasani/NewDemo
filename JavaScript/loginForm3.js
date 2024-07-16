var data={
    name:"",
    Roll_no:0,
    password:0,
    email:""
}
function fun(event){
 data.name=event.target.value;
}
function myfun(event){
    data.Roll_no=event.target.value;
}
function myfrnd(event){
    data.password=event.target.value;
}
function fds(event){
    data.email=event.target.value;
}
function submit_data(event){
    console.log(data);
}