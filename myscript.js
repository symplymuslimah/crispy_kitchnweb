
  //reservation button section 
  const reserveSection = document.getElementById('reserve-section');
const reserveBtn = document.getElementById('r-btn');
reserveBtn.addEventListener('click',function () {
    reserveSection.style.display = "block";
});
const cancelIcon = document.getElementById('icon-cancel');
cancelIcon.addEventListener('click',function () {
    reserveSection.style.display = "none";
});

// image autoplay js code
const myContent = [
    {
     textName:"Manhattan new york",
     description:"Fine Dining Restaurant",
     img:"imgtext1.jpg"
    },
    {
     textName:"Sausage Pasta",
     description:"4.4/5",
     pricelist:"$28.25",
     img:"imgtext2.jpg"
    },
    {
        textName:"Steak",
     description:"4.3/5",
     pricelist:"$20.25",
     img:"imgtext3.jpg"
     
    },
];

const content = document.querySelector('.image-text-content');
const images = document.getElementById('image');
const textName = document.getElementById('text');
const Price = document.getElementById('price');
const Review = document.getElementById('review');
const IconTag = document.getElementsByTagName('i');
let currentItems = 0;
const interval =5000;

 window.addEventListener('DOMContentLoaded', function () {
     showData(currentItems);
      });

      function showData(){
     const item = myContent[currentItems];
     images.src = item.img;
     textName.textContent = item.textName;
     Review.textContent = item.description;
     Price.textContent = item.pricelist;

     currentItems = (currentItems + 1) % myContent.length;
 }
 setInterval(showData,interval);

 const AllBtn = document.querySelector('.icon-content');
 const NextBtn = document.getElementById('btn-next');
 const PrevBtn = document.getElementById('btn-prev');

    NextBtn.addEventListener('click', function showData() {
    currentItems++;
    if (currentItems > myContent.length) {
       currentItems=0;
    }
    showData(currentItems);
});

  PrevBtn.addEventListener('click', function () {
    currentItems--;
    if(currentItems<0){
        currentItems = myContent.length
    }
    showData(currentItems);
});  


//nav bar code
document.addEventListener('DOMContentLoaded', function () {
    const iconNav = document.querySelector(".icon-nav");
iconNav.addEventListener('click',function() {
  const  navBar = document.querySelector('.nav-bar');
    navBar.classList.add("active");
    
});

const cancelNav = document.querySelector(".cancel-nav");
 cancelNav.addEventListener('click',function () {
    const  navBar = document.querySelector('.nav-bar');
     navBar.classList.remove("active");
 });
});   

 
