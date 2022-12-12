
//adding activve class on hoverer item
let list = document.querySelectorAll('li');
for(let i = 0; i < list.length; ++i)
{
    list[i].onmouseover = function()
    {
        let j = 0;
        while( j < list.length)
        {
           list[j++].className = 'list' 
        }
        list[i].className = 'list active';
    }
}


let gameHolder1 = document.getElementById("witcher");
let gameHolder2 = document.getElementById("midnights");
let gameHolder3 = document.getElementById("valhalla");
let gameHolder4 = document.getElementById("ghostbuster");
let gameHolder5 = document.getElementById("spiderman");

gameHolder1.onmouseover = function increaseOpacity()
{
    gameHolder1.style.opacity = 0.8;
}
gameHolder1.onmouseleave = function decreaseOpacity()
{
    gameHolder1.style.opacity = 0.3;
}
gameHolder1.onclick = function redirect(){
    location.href = 'page2.html'
}


gameHolder2.onmouseover = function increaseOpacity()
{
    gameHolder2.style.opacity = 0.8;
}
gameHolder2.onmouseleave = function decreaseOpacity()
{
    gameHolder2.style.opacity = 0.3;
}
gameHolder2.onclick = function redirect(){
    location.href = 'page3.html'
}


gameHolder3.onmouseover = function increaseOpacity()
{
    gameHolder3.style.opacity = 0.8;
}
gameHolder3.onmouseleave = function decreaseOpacity()
{
    gameHolder3.style.opacity = 0.3;
}
gameHolder3.onclick = function redirect(){
    location.href = 'page4.html'
}


gameHolder4.onmouseover = function increaseOpacity()
{
    gameHolder4.style.opacity = 0.8;
}
gameHolder4.onmouseleave = function decreaseOpacity()
{
    gameHolder4.style.opacity = 0.3;
}
gameHolder4.onclick = function redirect(){
    location.href = 'page5.html'
}


gameHolder5.onmouseover = function increaseOpacity()
{
    gameHolder5.style.opacity = 0.8;
}
gameHolder5.onmouseleave = function decreaseOpacity()
{
    gameHolder5.style.opacity = 0.3;
}
gameHolder5.onclick = function redirect(){
    location.href = 'page6.html'
}



 
