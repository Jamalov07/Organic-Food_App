"use strict";

const modalWindow = document.querySelector(".modal-window");
const closeBtn = document.querySelector(".close-btn");
const modalContent = document.querySelector(".modal-content");
const signUpBtn = document.querySelector(".register-btn");
const introProduct = document.querySelector(".intro__product--info");
const wrapperCard = document.querySelector(".wrapper-cards");

signUpBtn.addEventListener("click", () => {
  modalWindow.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  modalWindow.classList.add("hidden");
});

modalWindow.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal-window")) {
    modalContent.classList.toggle("shaker");
  }
});

// =============== DINAMIC ELEMENTS ======================

const cards = [
  {
    id: 1,
    img: "./images/user 1.svg",
    title: "30K",
    description: "User Order",
  },
  {
    id: 2,
    img: "./images/star 7.svg",
    title: "20K",
    description: "Reviews(4.8)",
  },
  {
    id: 3,
    img: "./images/harvest 1.svg",
    title: "300",
    description: "Items",
  },
];

const createElement = (tagName, attrName, attrValues, content) => {
  const element = document.createElement(tagName);

  if (attrName) {
    element.setAttribute(attrName, attrValues);
  }
  if (content) {
    element.innerHTML = content;
  }

  return element;
};

cards.forEach((card) => {
  const newCard = createElement(
    "div",
    "class",
    "card hover:shadow-lg bg-white flex items-center justify-between py-5 pr-11 pl-8 rounded-sm mb-[30px]",

    `<span class="p-4 bg-green-300 rounded-full">
        <img src="${card.img}" alt="img" />
    </span>
    <div class="flex flex-col items-center">
      <h2 class="text-5xl font-normal">${card.title}</h2>
      <p>${card.description}</p>
    </div>`
  );

  introProduct.append(newCard);
});

// let icon = document.querySelector(".icon");
// icon.onclick = function (e) {
//   console.log((this.style.color = "red"));
//   console.log(e.target.style);
// };

// icon.addEventListener("dblclick", (e) => {
//   console.log(e.target.style.border);
// });

// icon.addEventListener("mouseover", (e) => {
//   console.log((e.target.style.borderRadius = "40px"));
// });

// icon.addEventListener("mouseout", (e) => {
//   console.log((e.target.style.borderRadius = "20px"));
// });

// icon.addEventListener("mouseup", (e) => {
//   console.log((e.target.style.backgroundColor = "blue"));
// });

// icon.addEventListener("mousedown", (e) => {
//   console.log((e.target.style.backgroundColor = "yellow"));
// });

// window.addEventListener("mousemove", (e) => {
//   console.log(e);
// });

const services = [
  {
    title: `Fasted delivery Service`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    link: "./images/delivery-man 2.svg",
  },
  {
    title: `Online order Service`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    link: "./images/Vector (2).svg",
  },
  {
    title: `24/8 Service`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    link: "./images/fast-time 1.svg",
  },
];

const innerHTML = (service) => {
  const content = `<img class="text-[#09A66D] bg-[#F3FBF8] p-5 mr-6 rounded-full"
    src="${service.link}"
    alt="img"
  />
  <div class="card-info">
    <h1 class="font-bold text-3xl">${service.title}</h1>
    <small class="text-sm">
      ${service.description}
    </small>
  </div>`;

  const newCard = createElement(
    "div",
    "class",
    "best-card flex items-center py-10 px-14 hover:shadow-lg hover:bg-blue-50",
    content
  );
  return newCard;
};

services.forEach((service) => {
  wrapperCard.append(innerHTML(service));
});
