var data={
    Fname:"",
    Sname:"",
    DOB:"",
    Age:"",
    Fname:"",
    Mname:"",
    Address:"",
    gend:"",
    certificates:"",
    qualification1:"",
    NOI1:"",
    YOP1:"",
    Percentage1:"",
    qualification2:"",
   NOI2:"",
   YOP2:"",
   Percentage2:"",
   qualification3:"",
   NOI3:"",
   YOP3:"",
   Percentage3:"",
    skill:"",
    hobbie:"",
    pict:"",
    badge:"",
    declare:"",
    signature:""
}





function firstName(event){
    data.Fname=(event.target.value);
}

function secondName(event){
    data.Sname=(event.target.value);
}

function DOB(event){
    data.DOB=(event.target.value);
}

function Age(event){
    data.Age=(event.target.value);
}

function Fname(event){
    data.Fname=(event.target.value);
}

function Mname(event){
    data.Mname=(event.target.value);
}

function Addre(event){
   data.Address=(event.target.value);
}

function gender(event){
    data.gend=(event.target.value);
}

function certificate(event){
    data.certificates=(event.target.value);
}

function q1(event){
    data.qualification1=(event.target.value);
}

function q2(event){
    data.NOI1=(event.target.value);
}

function q3(event){
    data.YOP1=(event.target.value);
}

function q4(event){
    data.Percentage1=(event.target.value);
}

function n1(event){
    data.qualification2=(event.target.value);
}

function n2(event){
    data.NOI2=(event.target.value);
}

function n3(event){
    data.YOP2=(event.target.value);
}

function n4(event){
    data.Percentage2=(event.target.value);
}

function p1(event){
    data.qualification3=(event.target.value);
}

function p2(event){
    data.NOI3=(event.target.value);
}

function p3(event){
    data.YOP3=(event.target.value);
}

function p4(event){
    data.Percentage3=(event.target.value);
}

function skill(event){
    data.skill=(event.target.value);
}

function hobbie(event){
    data.hobbie=(event.target.value);
}

function pict(event){
    data.pict=(event.target.value);
}

function badge(event){
    data.badge=(event.target.value);
}

function declara(event){
    data.declare=(event.target.value);
}

function signat(event){
    data.signature=(event.target.value);
}

function sub(event){
    console.log(data);
}

