const hoursHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector(".hand.minutes");
const secondsHand = document.querySelector(".hand.seconds");

const audio = document.querySelector("#Test_Audio");

window.addEventListener("load", () => {
    audio.volume = 0.3; // Áudio a 30% para não assustar.
    audio.play();
});

let lastSecondPercentage = 0;

const setClock = () => {
    const currentDate = new Date();

    const secondsPercentage = (currentDate.getSeconds() + currentDate.getMilliseconds() / 1000) / 60;
    const minutesPercentage = (currentDate.getMinutes() + secondsPercentage) / 60;
    const hoursPercentage = (currentDate.getHours() + minutesPercentage) / 12;

    setRotation(secondsHand, secondsPercentage, lastSecondPercentage);
    setRotation(minutesHand, minutesPercentage);
    setRotation(hoursHand, hoursPercentage);

    lastSecondPercentage = secondsPercentage;
    requestAnimationFrame(setClock);
};

const setRotation = (element, rotationPercentage, previousRotation = 0) => {
    if (Math.abs(rotationPercentage - previousRotation) > 0.5) {
        element.style.transition = "none";
    } else {
        element.style.transition = "transform 0.1s linear";
    }

    element.style.setProperty("--rotation", rotationPercentage * 360);
};

setClock();
