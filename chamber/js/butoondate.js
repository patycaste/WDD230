// Toggle nav menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}

//Button nav
const active = document.getElementById("hamburgerBtn");
    active.onclick = toggleMenu;

//Footer year
const date = new Date();
const year = date.getFullYear();

//Footer last modification
const lastmod = document.getElementById("lastmodify");
    lastmod.textContent = `Last modification : ${document.lastModified}`;

    //Write full year in DOM
const currentyear = document.querySelector("#actualyear");
    currentyear.innerHTML = `&copy; ${year} Suchitoto Chamber`;

// Full date
const date1 = new Date();
const month = date1.getMonth();
const day = date1.getDate();
const weekday =date1.getDay();
const year1 = date1.getFullYear();

let wd =['Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let my =['January', 'February','March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const fulldate = document.querySelector("#completedate");
    fulldate.textContent = `${wd[weekday]}, ${day} ${my[month]} ${year1}`