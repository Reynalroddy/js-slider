// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

//declare all variables and grab all ui

let img = document.querySelector(".img");
let name = document.querySelector(".name-info");
let job = document.querySelector(".job-title");
let para = document.querySelector(".content");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let currentItem = 0;
let review = reviews[currentItem];

window.addEventListener("DOMContentLoaded", displayInfo);
nextBtn.addEventListener("click", slideNext);
prevBtn.addEventListener("click", slidePrev);
function slideNext() {
  currentItem++;
  review = reviews[currentItem];
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
    review = reviews[currentItem];
  }
  displayInfo();
}

function displayInfo() {
  img.src = review.img;
  name.textContent = review.name;
  job.textContent = review.job;
  para.textContent = review.text;
}

function slidePrev() {
  currentItem--;
  review = reviews[currentItem];
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
    review = reviews[currentItem];
  }
  displayInfo();
}
