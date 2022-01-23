const date = new Date();
const year = date.getFullYear();

const lastmod = document.getElementById("lastmodify");
lastmod.textContent = `Last update:${document.lastModified}`;

const currentyear = document.querySelector("#actualyear");
currentyear.innerHTML = `&copy; ${year} | Suchitoto Chamber of Commerce | El Salvador`;

