/* =========================================================
   MARVII — MY CUTE BESTIE
   JAVASCRIPT PART 1 — BASIC SETUP
   ========================================================= */

"use strict";


/* =========================
   ELEMENT REFERENCES
   ========================= */

const startButton = document.getElementById("startButton");
const complimentsSection = document.getElementById("compliments");


/* =========================
   SMOOTH SCROLL HELPER
   ========================= */

function scrollToSection(element) {
    if (!element) return;

    element.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================
   START BUTTON
   ========================= */

if (startButton) {
    startButton.addEventListener("click", function () {
        scrollToSection(complimentsSection);
    });
}


/* =========================
   PAGE READY
   ========================= */

document.documentElement.classList.add("js-ready");
/* =========================================================
   JAVASCRIPT PART 2 — RANDOM COMPLIMENTS
   ========================================================= */


/* =========================
   RANDOM COMPLIMENT ELEMENTS
   ========================= */

const complimentButton = document.getElementById("complimentButton");
const randomComplimentText = document.getElementById("randomComplimentText");


/* =========================
   COMPLIMENT COLLECTION
   ========================= */

const compliments = [
    "Your smile could honestly make a boring day feel special. 🌸",

    "You have the kind of vibe people naturally feel comfortable around. 🦋",

    "You're cute without even trying, and that's honestly unfair. 😭💗",

    "Talking to you somehow makes ordinary moments more fun. ✨",

    "You have a genuinely beautiful personality, Marvii. 🌷",

    "Your little reactions are probably cuter than you realize. 🧸",

    "You bring such a nice energy wherever you go. 💫",

    "You're one of those people who are simply easy to appreciate. 💗",

    "Never underestimate how lovely your presence can be. 🎀",

    "You're effortlessly adorable, and yes, that's a compliment. 🥹",

    "Your kindness is one of those little things that makes you special. 🌸",

    "Honestly, being your bestie is a pretty lucky thing. ✨"
];


/* =========================
   RANDOM COMPLIMENT FUNCTION
   ========================= */

function showRandomCompliment() {

    if (!randomComplimentText) return;

    const currentText = randomComplimentText.textContent;

    let randomIndex;

    do {
        randomIndex = Math.floor(
            Math.random() * compliments.length
        );
    } while (
        compliments.length > 1 &&
        compliments[randomIndex] === currentText
    );


    /* Fade out */

    randomComplimentText.style.opacity = "0";
    randomComplimentText.style.transform = "translateY(8px)";


    /* Change text after small delay */

    setTimeout(function () {

        randomComplimentText.textContent =
            compliments[randomIndex];

        randomComplimentText.style.opacity = "1";
        randomComplimentText.style.transform =
            "translateY(0)";

    }, 180);
}


/* =========================
   BUTTON EVENT
   ========================= */

if (complimentButton) {

    complimentButton.addEventListener(
        "click",
        showRandomCompliment
    );

}


/* =========================
   TEXT TRANSITION
   ========================= */

if (randomComplimentText) {

    randomComplimentText.style.transition =
        "opacity 0.18s ease, transform 0.18s ease";

}
/* =========================================================
   JAVASCRIPT PART 3 — SECRET COMPLIMENT & CUTE CHOICES
   ========================================================= */


/* =========================
   SECRET COMPLIMENT
   ========================= */

const revealComplimentButton =
    document.getElementById("revealComplimentButton");

const hiddenCompliment =
    document.getElementById("hiddenCompliment");

const secretIcon =
    document.getElementById("secretIcon");


if (revealComplimentButton && hiddenCompliment) {

    revealComplimentButton.addEventListener("click", function () {

        const isRevealed =
            hiddenCompliment.classList.contains("show");


        if (!isRevealed) {

            hiddenCompliment.classList.add("show");

            hiddenCompliment.setAttribute(
                "aria-hidden",
                "false"
            );

            if (secretIcon) {
                secretIcon.textContent = "💗";
            }

            revealComplimentButton.textContent =
                "Secret Revealed ✨";

        } else {

            hiddenCompliment.classList.remove("show");

            hiddenCompliment.setAttribute(
                "aria-hidden",
                "true"
            );

            if (secretIcon) {
                secretIcon.textContent = "🔐";
            }

            revealComplimentButton.textContent =
                "Reveal It 💌";
        }

    });

}


/* =========================
   CUTE CHOICE ELEMENTS
   ========================= */

const choiceCards =
    document.querySelectorAll(".choice-card");

const choiceResult =
    document.getElementById("choiceResult");

const choiceResultText =
    document.getElementById("choiceResultText");


/* =========================
   CHOICE RESPONSES
   ========================= */

const choiceMessages = {

    pretty:
        "Pretty is definitely one word for you... but honestly, it still doesn't describe the full package. 🌸",

    cute:
        "Cute? Absolutely. The kind of cute that makes people smile without even realizing it. 🧸💗",

    amazing:
        "Amazing fits you pretty well, Marvii. Your personality and your vibe make you genuinely special. ✨"

};


/* =========================
   CHOICE CLICK EVENTS
   ========================= */

choiceCards.forEach(function (card) {

    card.addEventListener("click", function () {

        /* Remove previous selection */

        choiceCards.forEach(function (item) {
            item.classList.remove("selected");
        });


        /* Select current card */

        card.classList.add("selected");


        /* Get selected choice */

        const selectedChoice =
            card.dataset.choice;


        /* Update result */

        if (
            choiceResult &&
            choiceResultText &&
            choiceMessages[selectedChoice]
        ) {

            choiceResultText.textContent =
                choiceMessages[selectedChoice];

            choiceResult.classList.remove("visible");


            /* Restart animation */

            void choiceResult.offsetWidth;

            choiceResult.classList.add("visible");
        }

    });

});
/* =========================================================
   JAVASCRIPT PART 4 — ENDING NAVIGATION & LITTLE EFFECTS
   ========================================================= */


/* =========================
   ENDING ELEMENTS
   ========================= */

const finalTeaserButton =
    document.getElementById("finalTeaserButton");

const endingTeaser =
    document.getElementById("endingTeaser");

const openEndingButton =
    document.getElementById("openEndingButton");

const finalMessage =
    document.getElementById("finalMessage");


/* =========================
   "I'M LISTENING" BUTTON
   ========================= */

if (finalTeaserButton) {

    finalTeaserButton.addEventListener("click", function () {

        /*
         * The button sits near the ending.
         * Scroll slightly down so the next section
         * feels like a continuation of the surprise.
         */

        if (endingTeaser) {

            scrollToSection(endingTeaser);

        }

    });

}


/* =========================
   "CONTINUE" BUTTON
   ========================= */

if (openEndingButton) {

    openEndingButton.addEventListener("click", function () {

        if (finalMessage) {

            scrollToSection(finalMessage);

            createEndingSparkles();

        }

    });

}


/* =========================
   CUTE ENDING SPARKLES
   ========================= */

function createEndingSparkles() {

    const sparkleSymbols = [
        "✨",
        "💗",
        "🌸",
        "💫",
        "🎀"
    ];

    const sparkleCount = 14;


    for (let i = 0; i < sparkleCount; i++) {

        const sparkle =
            document.createElement("span");


        sparkle.className =
            "js-ending-sparkle";


        sparkle.textContent =
            sparkleSymbols[
                Math.floor(
                    Math.random() *
                    sparkleSymbols.length
                )
            ];


        sparkle.style.position = "fixed";
        sparkle.style.left =
            Math.random() * 100 + "vw";

        sparkle.style.top =
            (55 + Math.random() * 35) + "vh";

        sparkle.style.fontSize =
            (12 + Math.random() * 13) + "px";

        sparkle.style.pointerEvents =
            "none";

        sparkle.style.zIndex = "9999";

        sparkle.style.opacity = "0";

        sparkle.style.transform =
            "translateY(0) scale(0.5)";

        sparkle.style.transition =
            "transform 1.4s ease, opacity 1.4s ease";


        document.body.appendChild(sparkle);


        /* Start animation */

        requestAnimationFrame(function () {

            sparkle.style.opacity = "1";

            sparkle.style.transform =
                "translateY(-90px) scale(1.2)";

        });


        /* Remove after animation */

        setTimeout(function () {

            sparkle.style.opacity = "0";

            sparkle.style.transform =
                "translateY(-130px) scale(0.7)";

        }, 850);


        setTimeout(function () {

            sparkle.remove();

        }, 1600);

    }

}
/* =========================================================
   MARVII — MY CUTE BESTIE
   JAVASCRIPT PART 5 — FINAL BUTTON & POLISH
   ========================================================= */


/* =========================
   BACK TO TOP
   ========================= */

const backToTopButton =
    document.getElementById("backToTopButton");

const homeSection =
    document.getElementById("home");


if (backToTopButton) {

    backToTopButton.addEventListener("click", function () {

        if (homeSection) {

            scrollToSection(homeSection);

        } else {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

    });

}


/* =========================
   BUTTON PRESS EFFECT
   ========================= */

const allButtons =
    document.querySelectorAll("button");


allButtons.forEach(function (button) {

    button.addEventListener("pointerdown", function () {

        button.style.transform = "scale(0.97)";

    });


    button.addEventListener("pointerup", function () {

        button.style.transform = "";

    });


    button.addEventListener("pointerleave", function () {

        button.style.transform = "";

    });

});


/* =========================
   FINAL PAGE MESSAGE
   ========================= */

const finalCard =
    document.querySelector(".final-card");


if (finalCard) {

    finalCard.addEventListener("mouseenter", function () {

        finalCard.classList.add("final-card-active");

    });


    finalCard.addEventListener("mouseleave", function () {

        finalCard.classList.remove("final-card-active");

    });

}


/* =========================
   PAGE VISIBILITY
   ========================= */

document.addEventListener(
    "visibilitychange",
    function () {

        if (document.hidden) {

            document.title =
                "Come back, Marvii 💗";

        } else {

            document.title =
                "Marvii — My Cute Bestie 💗";

        }

    }
);


/* =========================
   FINAL CONSOLE CHECK
   ========================= */

console.log(
    "Marvii's Cute Bestie website is ready. 💗✨"
);
