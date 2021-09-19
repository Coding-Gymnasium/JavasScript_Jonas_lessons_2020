'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/*
const getCountryData = country => {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
  );
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
  <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('argentina');
getCountryData('norway');
getCountryData('denmark');
getCountryData('usa');
*/

const renderCountry = (data, className = '') => {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbor = country => {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
  );
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // // Get neighbor country 2
    // const neighbor = data.borders[0];

    // if (!neighbor) return;

    // // AJAX call country 2
    // const request2 = new XMLHttpRequest();
    // request2.open(
    //   'GET',
    //   `https://restcountries.eu/rest/v2/alpha/${neighbor}?fullText=true`
    // );
    // request2.send();

    // request2.addEventListener('load', () => {
    //   const data2 = JSON.parse(request2.responseText);
    //   console.log(data2);

    //   renderCountry(data2, 'neighbour');
    // });

    // Get neighboring countries
    data.borders.forEach(neighbor => {
      if (!neighbor) return;

      // AJAX call country 2
      const request2 = new XMLHttpRequest();
      request2.open(
        'GET',
        `https://restcountries.eu/rest/v2/alpha/${neighbor}?fullText=true`
      );
      request2.send();

      request2.addEventListener('load', () => {
        const data2 = JSON.parse(request2.responseText);
        console.log(data2);

        renderCountry(data2, 'neighbour');
      });
    });
  });
};

getCountryAndNeighbor('norway');
