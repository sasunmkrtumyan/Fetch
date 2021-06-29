const search = document.querySelector(".input")
const button = document.querySelector(".btn")
button.addEventListener("submit", (e)=>{
    e.preventDefault()
})
button.addEventListener("click", ()=>{
    fetch(`https://restcountries.eu/rest/v2/name/${}`)
  .then(response => response.json())
  .then( response => response.filter(
      (el) => {
        el.includes(search.value)
      }
  ));  
})

function fetching(str){
    fetch(`https://restcountries.eu/rest/v2/name/${str}`)
    .then(response => response.json())
    .then(data)
}

function render(data){
data.forEach(el => {
    const html = `
            <div class="body"> 
                 <div class="card">
                    <img src="${el.flag}">
                    <h3>Name - ${el.name}</h3>
                    <h4>Capital - ${el.capital}</h4>
                    <h4>Population - ${el.population}</h4>
                    <h4>Area - ${el.area}</h4>
                    <h4>Region - ${el.region}</h4>
                </div>
            </div>

    `;
body.insertAdjacentHTML('beforend', html);
});
};