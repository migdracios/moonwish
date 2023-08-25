const messages = [
    "행운과 함께하는 모든 순간을 소원합니다.",
    "건강과 행복이 당신과 함께하길 바랍니다.",
    "모든 꿈이 이뤄지는 삶을 소망합니다.",
    "미소가 끊이지 않는 날들이 되기를 바랍니다.",
    "세계를 여행하며 멋진 경험을 쌓기를 소원합니다.",
    "주변의 따뜻한 사람들과 함께하는 시간을 소망합니다.",
    "어려움을 극복하며 성장하는 기회가 가득한 시기를 기원합니다.",
    "당신의 열정과 노력이 큰 성과를 이루길 바랍니다.",
    "새로운 시작이 더 나은 미래를 열어주길 소망합니다.",
    "영감과 창의력이 넘치는 날들이 가득하기를 바랍니다.",
    "좋은 사람들에게 둘러싸여 있는 행복한 인생을 소원합니다.",
    "모든 어려움을 극복하는 강한 내면을 갖기를 바랍니다.",
    "매일매일이 사랑으로 가득한 날들이 되기를 소망합니다.",
    "웃음이 넘치는 일상을 함께하길 바랍니다.",
    "가장 소중한 사람들과 더 많은 순간을 공유하기를 소원합니다.",
    "지혜와 인내로 가득한 삶을 살기를 바랍니다.",
    "새로운 기회가 문득 열릴 수 있는 기다림을 소망합니다.",
    "모든 노력이 인정받는 빛나는 시간을 기대합니다.",
    "현재의 즐거움을 간직하며 더 나은 미래를 준비하길 바랍니다.",
    "성공적인 결과가 당신의 노력을 따라오기를 기원합니다.",
    "자신을 사랑하며 자신의 가치를 믿는 시간을 갖기를 소망합니다.",
    "어떤 상황에서도 긍정적인 마음가짐을 유지할 수 있는 힘을 얻기를 바랍니다."
  ];
  
  const moonBackground = document.querySelector('.moon-background');
  
// Function to create and position messages
function createMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message';
    messageElement.textContent = message;
    moonBackground.appendChild(messageElement);
    positionMessage(messageElement);
  }

  // Function to set initial position of messages
function positionMessage(messageElement) {
    messageElement.style.left = `${Math.random() * (window.innerWidth - 200)}px`;
    messageElement.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
  }
  
  // Initial positioning of messages
messages.forEach(message => createMessage(message));

// Mousemove event handler
moonBackground.addEventListener('wheel', event => {
  const moveAmount = (event.clientX / window.innerWidth) * 10;
  moonBackground.style.backgroundPositionX = `${moveAmount}%`;
  document.querySelectorAll('.message').forEach(message => {
    const left = parseFloat(message.style.left);
    message.style.left = `${left + moveAmount * 0.5}px`;
    if (left > window.innerWidth) {
      message.remove();
      createMessage(messages[Math.floor(Math.random() * messages.length)]);
    }
  });
});
  