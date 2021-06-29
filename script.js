const search = document.querySelector(".input");
const button = document.querySelector(".btn");
const body = document.querySelector(".body");
button.addEventListener("submit", (e) => {
  e.preventDefault();
});
button.addEventListener("click", () => {
  fetch(`https://restcountries.eu/rest/v2/name/${search.value}`)
    .then((response) => response.json())
    .then((response) => render(response));
});

function fetching(str) {
  fetch(`https://restcountries.eu/rest/v2/name/${str}`)
    .then((response) => response.json())
    .then(data);
}

function render(data) {
  data.forEach((el) => {
    const html = `
            <div class="body"> 
                 <div class="card">
                    <img class="img" src="${el.flag}">
                    <h3>Name - ${el.name}</h3>
                    <h4>Capital - ${el.capital}</h4>
                    <h4>Population - ${el.population/1000000} mln</h4>
                    <h4>Area - ${el.area}</h4>
                    <h4>Region - ${el.region}</h4>
                </div>
            </div>

    `;
    body.insertAdjacentHTML("beforeEnd", html);
  });
}
