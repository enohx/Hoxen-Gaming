let button1 = document.getElementById('button');

button1.onclick = function returnMessage(){
    let name  = document.getElementsByName('fname')[0].value;
    let surname = document.getElementsByName('lname')[0].value;

    let rangeVal = document.getElementById('val').value;

    alert("user: " + name + ' ' + surname);
    setTimeout(function() { alert("the user has given the site a rating of: " + rangeVal); }, 1000);
};