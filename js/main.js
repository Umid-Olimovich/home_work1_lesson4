const elCountriesList = document.querySelector(".countries_list");
const selectedAdd = document.querySelector(".select_region");



const API_URL = "https://restcountries.com/v2/all";

const array = [];

function getVal(){
    // Selecting the input element and get its value 
    const inputVal = document.querySelector("input").value;
    console.log(inputVal);
}
getVal()

fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    renderCountries(data);
  });
function renderCountries(arr) {
    elCountriesList.innerHTML = ``;
    arr.forEach((element) => {
    // console.log(element);
    array.push(element);
    const elCountriesItem = document.createElement("li");
    elCountriesItem.classList.add("list_items");
    elCountriesItem.innerHTML = `
          <img src="${element.flag}" class="items_img">
          <h3 class="items_name">${element.name}</h3>
          <p class="items_population"><b>Population</b>${element.population}</p>
          <p class="items_region"><b>Region</b> ${element.region}</p> 
          <p class="items_Capital"><b>Capital</b> ${element.capital}</p>
     `;
    // console.log(elCountriesItem);
    elCountriesList.appendChild(elCountriesItem);
  });
}
selectedAdd.addEventListener("change", (event) => {
  function filterArray(arr) {
    const fiteredCountry = arr.filter((i) =>
      i.region.includes(event.target.value)
    );
    console.log(event.target.value);
    if (event.target.value === "all") {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          renderCountries(data);
        });
    } else {
      // console.log(fiteredCountry);
      return fiteredCountry;
    }
  }
  let renderedCountry = filterArray(array);
  // console.log(filterArray(array));
  renderCountries(renderedCountry);
});
renderCountries();



































// function rederNewArray(arr) {
//   elCountriesList.innerHTML = ``;
//   arr.forEach((element) => {
//     // console.log(element);
//     const elCountriesItem = document.createElement("li");
//     elCountriesItem.classList.add("list_items");
//     elCountriesItem.innerHTML = `
//           <img src="${element.flag}" class="items_img">
//           <h3 class="items_name">${element.name}</h3>
//           <p class="items_population"><b>Population</b>${element.population}</p>
//           <p class="items_region"><b>Region</b> ${element.region}</p> 
//           <p class="items_Capital"><b>Capital</b> ${element.capital}</p>
//      `;
//     // console.log(elCountriesItem);
//     elCountriesList.appendChild(elCountriesItem);
//   });
// }
// rederNewArray();

// console.log(URL_API);
// let URL_API=`https://restcountries.com/v2/region/`;
// let selectedValue = ""
// async function update() {
//     select = document.getElementById('countries');
//     option = select.options[select.selectedIndex];
//     return option.value;
// }

//   update();
// // console.log(selectedValue);

//  fetch().then(res => res.json()).then(data => {
//     renderOption(data);
//     // console.log( data);
// });
// async function renderOption(arr) {
//     arr.forEach(element => {
//         // console.log(element);
//         const elCountriesItem = document.createElement('li');
//         elCountriesItem.classList.add('list_items');
//         elCountriesItem.innerHTML=`
//              <img src="${element.flag}" class="items_img">
//              <h3 class="items_name">${element.name}</h3>
//              <p class="items_population"><b>Population</b>${element.population}</p>
//              <p class="items_region"><b>Region</b> ${element.region}</p>
//              <p class="items_Capital"><b>Capital</b> ${element.capital}</p>
//         `;
//         // console.log(elCountriesItem);
//         elCountriesList.appendChild(elCountriesItem);
//     });
// }
