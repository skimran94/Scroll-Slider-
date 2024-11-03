var contents = document.querySelectorAll('.link');

counter =0;

contents.forEach((element)=>{
    element.style.top = counter+`px`;
    counter=counter+50;
}) 


function animation() {
    if (contents[0].style.top === '0px') {
        contents[0].style.opacity = '0';
        contents[0].style.top = '300px'

    } else if (contents[0].style.top === '300px') {
        contents[0].style.opacity = '1';
        contents[0].style.top = '250px'
    } else if (contents[0].style.top === '250px') {
        contents[0].style.top = '200px'
    } else if (contents[0].style.top === '200px') {
        contents[0].style.top = '150px'
    } else if (contents[0].style.top === '150px') {
        contents[0].style.top = '100px'
    } else if (contents[0].style.top === '100px') {
        contents[0].style.top = '50px'
    } else if (contents[0].style.top === '50px') {
         contents[0].style.top = '0px'
    } 

    //Second Element 
    if (contents[1].style.top === '0px') {
        contents[1].style.opacity = '0';
        contents[1].style.top = '300px'
    } else if (contents[1].style.top === '300px') {
        contents[1].style.opacity = '1';
        contents[1].style.top = '250px'
    } else if (contents[1].style.top === '250px') {
        contents[1].style.top = '200px'
    } else if (contents[1].style.top === '200px') {
        contents[1].style.top = '150px'
    } else if (contents[1].style.top === '150px') {
        contents[1].style.top = '100px'
    } else if (contents[1].style.top === '100px') {
        contents[1].style.top = '50px'
    } else if (contents[1].style.top === '50px') {
         contents[1].style.top = '0px'
    } 
    //third element 
    if (contents[2].style.top === '0px') {
        contents[2].style.opacity = '0';
        contents[2].style.top = '300px'
    } else if (contents[2].style.top === '300px') {
        contents[2].style.opacity = '1';
        contents[2].style.top = '250px'
    } else if (contents[2].style.top === '250px') {
        contents[2].style.top = '200px'
    } else if (contents[2].style.top === '200px') {
        contents[2].style.top = '150px'
    } else if (contents[2].style.top === '150px') {
        contents[2].style.top = '100px'
    } else if (contents[2].style.top === '100px') {
        contents[2].style.top = '50px'
    } else if (contents[2].style.top === '50px') {
         contents[2].style.top = '0px'
    } 

    //fourth element 
    if (contents[3].style.top === '0px') {
        contents[3].style.opacity = '0';
        contents[3].style.top = '300px'
    } else if (contents[3].style.top === '300px') {
        contents[3].style.opacity = '1';
        contents[3].style.top = '250px'
    } else if (contents[3].style.top === '250px') {
        contents[3].style.top = '200px'
    } else if (contents[3].style.top === '200px') {
        contents[3].style.top = '150px'
    } else if (contents[3].style.top === '150px') {
        contents[3].style.top = '100px'
    } else if (contents[3].style.top === '100px') {
        contents[3].style.top = '50px'
    } else if (contents[3].style.top === '50px') {
         contents[3].style.top = '0px'
    } 

    //fifth element 

    if (contents[4].style.top === '0px') {
        contents[4].style.opacity = '0';
        contents[4].style.top = '300px'
    } else if (contents[4].style.top === '300px') {
        contents[4].style.opacity = '1';
        contents[4].style.top = '250px'
    } else if (contents[4].style.top === '250px') {
        contents[4].style.top = '200px'
    } else if (contents[4].style.top === '200px') {
        contents[4].style.top = '150px'
    } else if (contents[4].style.top === '150px') {
        contents[4].style.top = '100px'
    } else if (contents[4].style.top === '100px') {
        contents[4].style.top = '50px'
    } else if (contents[4].style.top === '50px') {
         contents[4].style.top = '0px'
    } 

    //sixth element 

    if (contents[5].style.top === '0px') {
        contents[5].style.opacity = '0';
        contents[5].style.top = '300px'
    } else if (contents[5].style.top === '300px') {
        contents[5].style.opacity = '1';
        contents[5].style.top = '250px'
    } else if (contents[5].style.top === '250px') {
        contents[5].style.top = '200px'
    } else if (contents[5].style.top === '200px') {
        contents[5].style.top = '150px'
    } else if (contents[5].style.top === '150px') {
        contents[5].style.top = '100px'
    } else if (contents[5].style.top === '100px') {
        contents[5].style.top = '50px'
    } else if (contents[5].style.top === '50px') {
         contents[5].style.top = '0px'
    } 

    //seventh element 

    if (contents[6].style.top === '0px') {
        contents[6].style.opacity = '0';
        contents[6].style.top = '300px'
    } else if (contents[6].style.top === '300px') {
        contents[6].style.opacity = '1';
        contents[6].style.top = '250px'
    } else if (contents[6].style.top === '250px') {
        contents[6].style.top = '200px'
    } else if (contents[6].style.top === '200px') {
        contents[6].style.top = '150px'
    } else if (contents[6].style.top === '150px') {
        contents[6].style.top = '100px'
    } else if (contents[6].style.top === '100px') {
        contents[6].style.top = '50px'
    } else if (contents[6].style.top === '50px') {
         contents[6].style.top = '0px'
    } 
}
var animationset = setInterval(animation, 3000);


var container = document.getElementsByClassName('container');





function resume() {

    var animationset = setInterval(animation, 3000);
}

 
container[0].addEventListener('mouseover', ()=>{  
    clearInterval(animationset);
    console.log("mouseover working");
})






