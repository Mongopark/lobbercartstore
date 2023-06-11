
var firstcategory = document.getElementById('category');


// fetch('sample.txt')
// .then(res=>res.text())
// .then(data=>{
// var firstitem = document.getElementById('item');
//     firstitem.innerText=data;})

// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=> {
// var firstitem = document.getElementById('item');
// firstitem.innerText=json;})

// ACTUAL FUNCTION!!!!!!!!
var title = document.querySelectorAll(".sneaker__name");
var price = document.querySelectorAll("span.price");
var category = document.querySelectorAll(".sneaker__preci");
var description = document.getElementsByTagName("p");
var images = document.querySelectorAll(".fetch__img");
var threetopimages = document.querySelectorAll(".fetch__imgs");
var divbox = document.getElementById("item");


// for (var i = 0; i < title.length; i++) {
//     title[i]
// fetch('https://fakestoreapi.com/products')
// .then(response => response.text())
// .then(data=> {
// title[i].innerHTML=
// `<h1>UserInfo: ${data} </h1>`;})
// .catch(error =>{title[i].innerHTML=error});
// }
for (var i = 0; i < title.length; i++) {
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(dataname => {
let output = '<i></i>';
for (var i = 0; i < dataname.length; i++){
title[i].innerHTML= dataname[i].title
}})
.catch(err=> {title[i].innerHTML=err})
}

for (var i = 0; i < price.length; i++) {
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(dataname => {
let output = '<i></i>';
for (var i = 0; i < dataname.length; i++){
price[i].innerHTML= `$ ${dataname[i].price}`
}})
.catch(err=> {price[i].innerHTML=err})
}

for (var i = 0; i < category.length; i++) {
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(dataname => {
let output = '<i></i>';
for (var i = 0; i < dataname.length; i++){
category[i].innerHTML= dataname[i].category
}})
.catch(err=> {category[i].innerHTML=err})
}

for (var i = 0; i < description.length; i++) {
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(dataname => {
let output = '<i></i>';
for (var i = 0; i < dataname.length; i++){
description[i].innerHTML= dataname[i].description
}})
.catch(err=> {description[i].innerHTML=err})
}

for (var i = 0; i < threetopimages.length; i++) {
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(dataname => {
let output = '<i></i>';
for (var i = 0; i < dataname.length; i++){
threetopimages[0].src= dataname[16].image;
threetopimages[1].src= dataname[17].image;
threetopimages[2].src= dataname[18].image;
}})
.catch(err=> {threetopimages[i].src=err})
}

for (var i = 0; i < images.length; i++) {
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(dataname => {
let output = '<i></i>';
for (var i = 0; i < dataname.length; i++){
images[i].src= dataname[i].image;
}})
.catch(err=> {images[i].innerHTML=err})
}



// var divbox = document.getElementById("item");
// fetch('https://fakestoreapi.com/products')
// .then(res=>res.json())
// .then(dataname => {
// let output = '<i></i>';
// for (var i = 0; i < dataname.length; i++){
// divbox.innerHTML= output +=
// `<ul>
// <li> Id: ${dataname[i].id}</li>
// <li> Title: ${dataname[i].title}</li>
// <li>Price: ${dataname[i].price}</li>
// <li>Category: ${dataname[i].category}</li>
// <li>Description: ${dataname[i].description}</li>
// <li>Image: ${dataname[i].image}</li>
// </ul><br>`;}
// })
// .catch(err=> {divbox.innerHTML=err})












const showMenu = (toggleId, navId)=>{
    const toggle = document. getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click' , ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle' , 'nav-menu' )


    // NAV ICON ///////
const icon = document.getElementById("nav-icon");
icon.addEventListener('click',changeIcon);
var click=0;
function changeIcon(){
click++;
if(click%2===1){
icon.classList.replace('fa-bars','fa-x');
}
else{
  icon.classList.replace('fa-x','fa-bars');
}
}






const navLink = document.querySelectorAll('.nav__link'),
    navMenu = document.getElementById('nav-menu')


    function linkAction(){
        navMenu.classList.remove('show');
        icon.classList.replace('fa-x','fa-bars');
        click++;
    }

    navLink.forEach(n => n.addEventListener('click'
    , linkAction))


    const sections = document.querySelectorAll('section[id]')

    window.addEventListener('scroll' , scrollActive)

    function scrollActive(){
        const scrollY = window.pageYOffset

        sections.forEach(current=>{
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50
            sectionId = current.getAttribute('id') 

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector(".nav__menu a[href*="+ sectionId + "]").classList.add('active')
            
            }else {
                document.querySelector(".nav__menu a[href*="+ sectionId + "]").classList.remove('active')

            }
        })

    }

    window.onscroll = ()=>{
        const nav = document.getElementById('header')
        if(this.scrollY >=200) nav.classList.add('scroll-header'); 
        else nav.classList.remove('scroll-header')
    }












    


    // PRODUCT DETAIL ///////


    const sizes = document.querySelectorAll('.size__tallas');
    const colors = document.querySelectorAll('.product__color');
    const sneaker = document.querySelectorAll('.product-img');
    
    function changeSize(){
        sizes.forEach(size => size.classList.remove('active-1'));
        this.classList.add('active-1');
    }

    
function changeColor(){
    let productColor = this.getAttribute('product-color');
    let color = this.getAttribute('color');
    let sneakerColor = document.querySelector(`.product-img[color="${color}"]`);

    colors.forEach(c => c.classList.remove('active-2'));
    this.classList.add('active-2');

    document.documentElement.style.setProperty('--product-color', productColor);

    sneaker.forEach(s => s.classList.remove('shows'));
    sneakerColor.classList.add('shows')
}

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(c => c.addEventListener('click', changeColor));













// product img 



let modal = document.getElementById('modal')

let closeBtn = document.getElementById('modal-close')

closeBtn.onclick = () => {
	modal.style.display = 'none'
}

let moreImages = document.getElementsByClassName('more-images-item')

let previewImages = document.getElementsByClassName('img-preview')

Array.from(moreImages).forEach((el) => {
	el.onclick = () => {
		let imgItems = el.parentNode.getElementsByTagName('img')

		Array.from(imgItems).forEach((item, index) => {
			previewImages[index].src = item.src
		})

		let img = el.querySelector('img')
		modal.style.display = 'block'

		let modalContent = modal.querySelector('.modal-content')
		modalContent.src = img.src

		let temp = modalContent.cloneNode(true)
		modalContent.parentNode.replaceChild(temp, modalContent)
	}
})







    // FULL PAGE JS SLIDES ////////////
 









