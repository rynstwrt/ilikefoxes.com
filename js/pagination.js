// const homeButton = document.querySelector("");
// const aboutButton = document.querySelector("");
// const voteButton = document.querySelector("");
// const storeButton = document.querySelector("");
// const contactButton = document.querySelector("");

const PAGE_MAPPINGS = {
    Home: "home-page",
    About: "about-page"
};


const links = document.querySelectorAll("header nav a");


for (const link of links)
{
    link.addEventListener("click", event =>
    {
        document.querySelector("header nav .selected").classList.remove("selected");
        link.classList.add("selected");

        const newPageID = PAGE_MAPPINGS[link.textContent];
        if (!newPageID) return;

        document.querySelector(".page.active").classList.remove("active");
        document.querySelector(`#${newPageID}`).classList.add("active");
    });
}