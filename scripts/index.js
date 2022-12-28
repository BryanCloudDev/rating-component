let submit = document.getElementById("submit");
let cardTwo = document.querySelector(".card_two");
let cardOne = document.querySelector(".card_one");
let buttons = document.querySelectorAll(".btn");
let rateContainer = document.querySelector('.rate');
let error = document.querySelector(".error");

buttons.forEach(btn => {
  btn.addEventListener('click',(e) =>{
    buttons.forEach((item) => (item.style += "background-color: rgba(124, 135, 152, 0.1);"));
    btn.style = "background-color: #959eac; color: #fff";
    localStorage.setItem('rate',e.target.innerHTML);
  })
})

submit.addEventListener("click", () => {
  let rate = localStorage.getItem('rate');
  if(rate){
    cardTwo.style.display = "flex";
		cardOne.style.display = "none";
    rateContainer.innerHTML += ` ${rate} out of 5`;
    localStorage.clear();
    return;
  }
    error.style.opacity = 1;
    setTimeout(() => {
      error.style.opacity = 0;
      error.style.transition = "ease 1s";
      setTimeout(() => {
        error.style.transition = "";
      }, 1000);
    }, 2500);
});