const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const show = document.getElementById("show");
const color = document.getElementById("color");
const btn = document.getElementById("btn");
const body = document.querySelector('body')
const link = document.getElementById('link');

img1.addEventListener('click',function(){
    show.style.backgroundImage ='url(./img/1.jpg)';
    console.log("click")
});
img2.addEventListener('click',function(){
    show.style.backgroundImage ='url(./img/2.jpg)';
    console.log("click")
});
img3.addEventListener('click',function(){
    show.style.backgroundImage ='url(./img/1-1.jpg)';
    console.log("click")
});
img4.addEventListener('click',function(){
    show.style.backgroundImage ='url(./img/1-2.jpg)';
    console.log("click")
});
btn.addEventListener('click',function () {
    show.style.backgroundImage = 'url('+link.value+')';
    let some = 'url('+link.value+')';
    console.log(some)
})