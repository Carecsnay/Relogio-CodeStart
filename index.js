const hoursHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector(".hand.minutes");
const secondsHand = document.querySelector(".hand.seconds");

const audio = document.querySelector("#Test_Audio");
audio.volume = 0.5; //audio 50% pra não assustar os outros.

const setClock = () => {
    const currentDate = new Date();

    const secondsPercentage = currentDate.getSeconds() / 60;
    const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60;
    const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12;

    setRotation(secondsHand, secondsPercentage);
    setRotation(minutesHand, minutesPercentage);
    setRotation(hoursHand, hoursPercentage);

    requestAnimationFrame(setClock);
};

const setRotation = (element, rotationPercentage) => {
    element.style.setProperty("--rotation", rotationPercentage * 360);
};

setClock();

setInterval(setClock, 1000);
