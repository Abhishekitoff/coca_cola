let tl = gsap.timeline()



function loder() {

   tl.from('.nav-bottom .box1 h1', {
      x: -100,
      opacity: 0,
      duration: .5,

   }).to('.nav-bottom .box1 h1', {
      x: 100,
      opacity: 0,
      duration: .5,

   })
   tl.from('.nav-bottom .box2 h1', {
      x: -100,
      opacity: 0,
      duration: .5,

   }).to('.nav-bottom .box2 h1', {
      x: 100,
      opacity: 0,
      duration: .5,

   })
   tl.from('.nav-bottom .box3 h1', {
      x: -100,
      opacity: 0,
      duration: .5,

   }).to('.nav-bottom .box3 h1', {
      x: 100,
      opacity: 0,
      duration: .5,

   })
   tl.from('.nav-bottom .box4 h1', {
      x: -100,
      opacity: 0,
      duration: .5,

   }).to('.nav-bottom .box4 h1', {
      x: 100,
      opacity: 0,
      duration: .5,

   }).to('.star .star1', {
      scale: 30,
      opacity: 1,
      duration: .5

   }).to('.star .star2 ', {
      scale: 20,
      opacity: 1,
      duration: .5

   }).to('.star .star3 ', {
      scale: 20,
      opacity: 1,


   }).to('.star .star4 ', {
      scale: 20,
      opacity: 1,


   })
      .to('.nav-animation', {
         display: 'none'
      })
      .to('.cursor', {
         opacity: 1
      })
     

}

loder()
let cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (det) => {
   cursor.style.left = `${det.x}px`
   cursor.style.top = `${det.y}px`


})

// let img = document.querySelector(".box img")
// let img1 = document.querySelector(".box .img1")
// console.log(img);
// let page1 = document.querySelector("#page1")

// document.addEventListener('click', (det)=>{
//    tl.to(img,{
//       x:`${det.x - 150}px`,
//       y:`${det.y -210}px`
//    }).to(img,{
//       opacity:1,
//       y:-800,
//       duration:3
//    })

// })

document.getElementById("page1").addEventListener("click", function (event) {
   var newDiv = document.createElement("div");
   newDiv.classList.add("box");
   var posX = event.clientX - this.offsetLeft;
   var posY = event.clientY - this.offsetTop;
   newDiv.style.left = posX + "px";
   newDiv.style.top = posY + "px";


   var images = ["1.webp", "2.webp", "3.webp", "4.webp", "6.webp", "5.jpg", "7.jpg",];
   var randomIndex = Math.floor(Math.random() * images.length);
   var imagePath = "assets/" + images[randomIndex];


   var img = document.createElement("img");
   img.src = imagePath;


   newDiv.appendChild(img);

   document.getElementById("page1").appendChild(newDiv);


   setTimeout(function () {
      gsap.to(newDiv, {
         opacity: 0,
         scale: 1.3,
         y: -400,
         duration: 3,
         onComplete: function () {
            newDiv.remove();
         }
      });
   }, 100);
});

tl.from('#page1', {
   scale:.3,
   opacity:0,
   delay:-.5
  
  })