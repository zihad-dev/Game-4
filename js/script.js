let box = document.querySelector(".box");
let btn = document.querySelector(".btn");
let error = document.querySelector(".error");
let player = document.querySelector(".player");
let guess = document.querySelector(".guess");
let guess2 = document.querySelector(".guess2");
let namberBox = document.querySelector(".namberBox");
let namberbtn = document.querySelector(".namberbtn");
let updatbtn = document.querySelector(".updatbtn");
let namberBox2 = document.querySelector(".namberBox2");
let namberbtn2 = document.querySelector(".namberbtn2");
let span = document.querySelector("span");
let span2 = document.querySelector(".span2");
let list = document.querySelector(".list");
let img = document.querySelector("img");
let listArr = [];

let count = 5;
let count2 = 5;
let updatindex;
btn.addEventListener("click", function () {
  let inputValue = box.value.trim();
  if (!inputValue) {
    error.innerHTML = "Please Enter Your value";
  } else if (isNaN(box.value)) {
    error.innerHTML = "";
    list.innerHTML = "";
    listArr.push(box.value.trim());
    box.value = "";
    display();

    function display() {
      list.innerHTML = "";
      for (let i = 0; i < listArr.length; i++) {
        list.innerHTML += `<li> ${listArr[i]}<button class="edit">Edit</button><button class="delete">Delete</button></li>`;

        let listBtn = document.querySelectorAll(".delete");
        let btnArr = Array.from(listBtn);
        let editBtn = document.querySelectorAll(".edit");
        let editbtnArr = Array.from(editBtn);
        for (let j = 0; j < btnArr.length; j++) {
          btnArr[j].addEventListener("click", function () {
            listArr.splice(j, 1);
            list.innerHTML = "";
            display();
          });

          for (let j = 0; j < editbtnArr.length; j++) {
            editbtnArr[j].addEventListener("click", function () {
              box.value = listArr[j];
              btn.style.display = "none";
              updatbtn.style.display = "inline-block";
              updatindex = j;
            });
          }
        }
      }
    }
    updatbtn.addEventListener("click", function () {
      listArr[updatindex] = box.value;
      display();
      btn.style.display = "inline-block";
      updatbtn.style.display = "none";
    });
    //////////////////////////////////////
  } else if (box.value < 0 || box.value > 10) {
    list.style.display = "none";
    box.value = "";
    error.innerHTML = "Please Enter less then 10 and greater then 0";
  } else {
    list.style.display = "none";
    error.innerHTML = "";
    box.style.display = "none";
    btn.style.display = "none";
    player.style.display = "block";
    guess.style.display = "block";
    namberBox.style.display = "inline-block";
    namberbtn.style.display = "inline-block";
    span.style.display = "inline-block";
    span.innerHTML = count;
  }
});
namberbtn.addEventListener("click", function () {
  if (isNaN(namberBox.value)) {
    namberBox.value = "";
    console.log("not");
  } else if (namberBox.value < 0 || namberBox.value > 10) {
    namberBox.value = "";
    error.innerHTML = "Please Enter less then 10 and greater then 0";
  } else {
    namberBox.value=""
    error.innerHTML = "";
    if (count > 1) {
      count--;
      span.innerHTML = count;
      if (box.value == namberBox.value) {
        player.innerHTML = "Player-3";
        guess.style.display = "none";
        namberBox.style.display = "none";
        namberbtn.style.display = "none";
        namberBox2.style.display = "inline-block";
        namberbtn2.style.display = "inline-block";
        guess2.style.display = "block";
        span2.style.display = "inline-block";
        span2.innerHTML = count2;
      }
    } else {
      player.innerHTML = "Player-3";
      guess.style.display = "none";
      namberBox.style.display = "none";
      namberbtn.style.display = "none";
      namberBox2.style.display = "inline-block";
      namberbtn2.style.display = "inline-block";
      guess2.style.display = "block";
      span2.style.display = "inline-block";
      span2.innerHTML = count2;
    }
  }
});
namberbtn2.addEventListener("click", function () {
  if (isNaN(namberBox2.value)) {
    namberBox2.value = "";
    console.log("not");
  } else if (namberBox2.value < 0 || namberBox2.value > 10) {
    namberBox2.value = "";
    error.innerHTML = "Please Enter less then 10 and greater then 0";
  } else {
    namberBox2.value = "";
    error.innerHTML = "";
    if (count2 > 1) {
      count2--;
      span2.innerHTML = count2;
      if (box.value == namberBox.value && box.value == namberBox2.value) {
        result("Player 2 & Player 3 win");
      } else if (box.value == namberBox2.value) {
        result("Player 3 win");
      } else if (box.value == namberBox.value) {
        result("Player 2 win");
      }
    } else {
      result("Player 1 win");
    }
  }
});

function result(win) {
  player.innerHTML = win;
  box.style.display = "none";
  btn.style.display = "none";
  guess.style.display = "none";
  namberBox.style.display = "none";
  namberbtn.style.display = "none";
  span.style.display = "none";
  namberBox2.style.display = "";
  namberbtn2.style.display = "none";
  guess2.style.display = "none";
  span2.style.display = "none";
  img.style.display = "block";
}
