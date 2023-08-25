const messageContainer = document.querySelector(".messages");
const messages = messageContainer.querySelectorAll(".message");

let scrollPosition = 0;

function animateMessages() {
  messages.forEach((message, index) => {
    const offset = (scrollPosition + index) % messages.length;
    const visibility = offset >= 0 && offset < 3 ? "visible" : "hidden";
    message.style.visibility = visibility;
  });

  scrollPosition++;
  requestAnimationFrame(animateMessages);
}

animateMessages();