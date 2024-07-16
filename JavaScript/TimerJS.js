function starting()
{
function fun()
{
    document.getElementsByClassName("hours")[0].innerHTML= parseInt(document.getElementsByClassName("hours")[0].innerHTML)+1;
    if(document.getElementsByClassName("hours")[0].innerHTML==24)
    {
        document.getElementsByClassName("hours")[0].innerHTML=="00";
    }
}

setInterval(fun,600000);

function mini()
{
document.getElementsByClassName("minutes")[0].innerHTML= parseInt(document.getElementsByClassName("minutes")[0].innerHTML)+1;
if(document.getElementsByClassName("minutes")[0].innerHTML==60)
{
    document.getElementsByClassName("minutes")[0].innerHTML=="00";
}
}
setInterval(mini,60000);

function secc()
{
    document.getElementsByClassName("seconds")[0].innerHTML=parseInt(document.getElementsByClassName("seconds")[0].innerHTML)+1;
    if(document.getElementsByClassName("seconds")[0].innerHTML==60)
        {
            document.getElementsByClassName("seconds")[0].innerHTML="00";
        }
} 
setInterval(secc,1000);
}
function restarting()
{
    document.getElementsByClassName("seconds")[0].innerHTML=="00";
    document.getElementsByClassName("minutes")[0].innerHTML=="00";
    document.getElementsByClassName("")   
}