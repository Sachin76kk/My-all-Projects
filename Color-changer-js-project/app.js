const btn = document.querySelectorAll(".button");
const body = document.querySelector("body");

btn.forEach((buttons) => {
  console.log(buttons);
  buttons.addEventListener("click", function (e) {
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }else if(e.target.id === "white"){
        body.style.backgroundColor=e.target.id
    }else if(e.target.id === "blue"){
        body.style.backgroundColor=e.target.id
    }else if(e.target.id === "yellow"){
        body.style.backgroundColor=e.target.id
    }
  });
});
