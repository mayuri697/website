
var typed = new Typed(".typewriter",
{
    strings:["Smt. Madhuvanti Mohan Dandekar is a classical vocalist and Actress who worked predominantly in  Marathi Sangeet Natak (Marathi Music Dramas). Her Mother and her first Guru was Smt. Manorama Sahasrabudhe who was a Professional Singer. She acted in Marathi Sangeet Natakas with the huge encouragement and support of her husband and guider Mr. Mohan Jagannath Dandekar. He guided her about Music Dramas and songs to grow on. She has contributed immeasurably to the field of Marathi Music Drama as a Singer and Actress. She first made her mark with the beautiful rendition of Ruturaj Aaj Vani Aala. In her career spanning over Six decades, she has recieved several awards including the Lifetime Achievement from Maharashtra Government."],
    typeSpeed:40,
    loop:false
});


var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



  
  