const ipSection = document.querySelector("#landing-ip-section");
const copyText = document.querySelector("#copy-text");


const IP = "play.ilovefoxes.com";
const COPIED_TEXT = "Copied!";
const SHOW_COPIED_DURATION_MS = 2500;


const startText = copyText.textContent;
let copying = false;


ipSection.addEventListener("click", () =>
{
    if (copying) return;
    copying = true;

    navigator.clipboard.writeText(IP).then(() =>
    {
        copyText.textContent = COPIED_TEXT;

        setTimeout(() =>
        {
            copyText.textContent = startText;
            copying = false;
        }, SHOW_COPIED_DURATION_MS);
    });
});