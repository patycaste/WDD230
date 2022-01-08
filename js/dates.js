const date = new Date();
const year = date.getFullYear();

const lastmod = document.getElementById("lastmod");
lastmod.textContent = `Last update:${document.lastModified}`;

const currentyear = document.querySelector("#currentyear");
currentyear.innerHTML = `&copy; ${year} | Aida Castellanos | El Salvador`;
