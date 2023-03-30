const faq1 = document.getElementById('faq1')
const faq11 = document.querySelectorAll('.faq1')
const answer = document.getElementById('answer')
const buttton = document.getElementById('btn')
const butn = document.querySelectorAll('.btn')
const icon = document.querySelectorAll('.fa-solid')
// const cross = document.querySelector(".fa-caret-down")

// faq11.forEach(element => {
//     element.addEventListener('click' , () =>{
// element.classList.toggle('active')
//     })
// });


butn.forEach(element => {
    element.addEventListener('click' , () =>{
 
element.parentNode.classList.toggle('active')
    })
});

icon.forEach(element => {
    element.addEventListener('click' , () =>{
 
element.classList.toggle('fa-circle-xmark')
    })
});



// buttton.addEventListener('click' , () =>{
       

// })
  



// cross.addEventListener('click' , () => {
//  faq1.style.height = "4rem"
//     answer.style.display = "none"
    
//     icon.classList.toggle('fa-caret-down')
// })