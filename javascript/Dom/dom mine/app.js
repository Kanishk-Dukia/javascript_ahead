// document.getElementById('<id>')
// console.dir("dfa"); to see attribute for the element passsed in

// const allImages = document.getElementsByTagName('img');
// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }

// const squareImages = document.getElementsByClassName('square');
// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

// const links = document.querySelectorAll('p a');
// for (let link of links) {
//     console.log(link.href)
// }

// -------------------------------------------------------

// const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

// document.querySelector("h1").innerText = '<i>dsafadsf</i>';
// document.querySelector("h1").innerHTML =

// document.querySelector('input[type = "text"]')

// input.setAttribute('type' , 'text');
// input.getAttribute() 

// const k = document.querySelector('img');
// k.setAttribute('src','https://devsprouthosting.com/images/chicken.jpg');
// k.setAttribute('alt', 'chicken');

// ---------------------------------------------------------

// h1.style.color = 'green'  //act as a inline style change

// const allLinks = document.querySelectorAll('a');

// below changes all links (a) to red
// for (let link of allLinks) {
//     link.style.color = 'red';
// }       
// const h1 = document.querySelector('h1');
// window.getComputedStyle(h1).color

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// let words = document.querySelectorAll('#ka');

// for(let i= 0;i<7;i++){
//     words[i].style.color = colors[i];
// }

// const h2 = document.querySelector('h2');
// h2.classList
// h2.classList.add('purple');
// h2.classList.add('border');
// h2.classList.remove('border');

// ----------------------------------------------------------------------

// h2.parentElement
// h2.parentElement.parentElement
// h2.parentElement.children
// h2.previousSibling
// h2.nextsibling
// h2.nextElementSibling

// ****** see support for browser before applying below
// const newimg = document.createElement('img');
// newimg.src = 'sdfasffsad'
// document.body.appendChild(newimg);  // decides where the img goes in page
// h2.append('sdfaslfsadf', 'sadflasf');
// h2.prepend('sdfaslfsadf', 'sadflasf');
// h1.insertAdjacentElement('afterend' , h2);

// const firstli = document.querySelector('li');
// const ul = firstli.parentElement;
// ul.removeChild(firstli);
// firstli.remove();   // new way
