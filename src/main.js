// --- Media Assets ---
const moveItSong = new Audio('./public/i-like-to-move-it.mp3');
const celebrationVideo = document.getElementById('celebrationVideo');

// --- UI Elements ---
const msg1 = document.getElementById('message1');
const msg2 = document.getElementById('message2');
const msg3 = document.getElementById('message3');
const msg4 = document.getElementById('message4');
const msg5 = document.getElementById('message5');

const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');
const btnRow = document.getElementById('buttonRow');

const julienLaying = document.getElementById('julienLaying');
const julienDancing = document.getElementById('julienDancing');

// STEP 1: Let's Move It!
btn1.addEventListener('click', () => {
    moveItSong.currentTime = 3; 
    moveItSong.play();

    msg1.classList.add('hidden');
    msg2.classList.remove('hidden');

    btn1.classList.add('hidden');
    btn2.classList.remove('hidden');

    julienLaying.classList.add('hidden');
    julienDancing.classList.remove('hidden');
});

// STEP 2: Wait, what are you asking?
btn2.addEventListener('click', () => {
    msg2.classList.add('hidden');
    msg3.classList.remove('hidden');

    btn2.classList.add('hidden');
    btn3.classList.remove('hidden');
});

// STEP 3: The Reveal (Julien stops dancing)
btn3.addEventListener('click', () => {
    msg3.classList.add('hidden');
    msg4.classList.remove('hidden');

    btn3.classList.add('hidden');
    btnRow.classList.remove('hidden');

    julienDancing.classList.add('hidden');
    julienLaying.classList.remove('hidden');
});

// FINAL STEP: The Yes!
const celebrate = () => {
    // Music stop & reset
    moveItSong.pause();
    moveItSong.currentTime = 0; 

    // UI Cleanup
    btnRow.classList.add('hidden');
    msg4.classList.add('hidden');
    msg5.classList.remove('hidden');

    // Video play (if the element exists)
    if (celebrationVideo) celebrationVideo.play();
};

document.getElementById('yesButton1').addEventListener('click', celebrate);
document.getElementById('yesButton2').addEventListener('click', celebrate);