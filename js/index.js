let hamburger=document.querySelector(".hamburger");
hamburger.onclick = function () {
let navBar=document.querySelector(".nav-bar1");
navBar.classList.toggle("active");
}

// swiper js for products 

let swiperCard = new Swiper('.card--content', {

    loop: true,
    spaceBetween:32,
    grabCursor:true,
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,

    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  breakPoints:{
600:{
    slidesPerView:2,
},
968:{
    slidesPerView:3,

},
  },
  });
  function sendEmail(){
    Email.send({
      secureToken:"700c70ea-9293-4f17-9783-81019c498237",
      Host:"smtp.gmail.com",
      To : "hossinkubba969@gmail.com",
      From : document.querySelector("#email").value,
      Subject : "new contact from website",
      Body :"name :"+ document.getElementById("name").value
      + "email :"+ document.getElementById("email").value
      + "phone :" + document.getElementById("phone").value
      + "message" + document.getElementById("message").value
  }).then(
    message => alert(" تم الارسال , شكرا لك ")
  );
  }

