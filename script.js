const messages = [
    "¿Estás seguro?",
    "¿De verdad seguro?",
    "¿Estás seguro?",
    "Pookie, por favor...",
    "¡Piénsalo!",
    "Si dices que no, me pondré muy triste...",
    "Me pondré muy triste...",
    "Me pondré muy, muy triste...",
    "Está bien, dejaré de preguntar...",
    "¡Es broma, di que sí, por favor! ❤️" 
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}