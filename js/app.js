/*----- Effects -----*/

const blob = document.getElementById("blob");

function handleMove(event) {
  const { clientX, clientY } = event;
  const blobWidth = blob.offsetWidth;
  const blobHeight = blob.offsetHeight;

  const left = clientX - blobWidth / 2;
  const top = clientY - blobHeight / 2;

  blob.style.left = `${left}px`;
  blob.style.top = `${top}px`;
}

window.addEventListener("mousemove", handleMove);

/*----- Name Glitch -----*/

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 0.25;
  }, 30);
}

window.onmousedown = e => handleOnDown(e);
window.ontouchstart = e => handleOnDown(e.touches[0]);
window.onmouseup = e => handleOnUp(e);
window.ontouchend = e => handleOnUp(e.touches[0]);
window.onmousemove = e => handleOnMove(e);
window.ontouchmove = e => handleOnMove(e.touches[0]);