'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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
  // countriesContainer.style.opacity = 1;
};

const renderError = msg => {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

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

/*
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
*/

//// ------------------- Lesson 248 ------------------------ ////
//// ------------------- Using Fetch and Promises  ------------------------ ////

// const country = 'norway';

// const request = fetch(
//   `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
// );
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
//     .then(response => {
//       console.log(response);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

/*
const getCountryData = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};
*/

//// -------------- Flat Chaining Promises ---------------------- ////

const getCountryData = function (country) {
  // Country 1
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })

    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('norway');
});

/*
const getCountryData = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found. Status: ${response.status}`);
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      // Country 2
      return fetch(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}?fullText=true`
      );

      // data[0].borders.forEach(neighbor => {
      //   if (!neighbor) return;
      //   return fetch( `https://restcountries.eu/rest/v2/alpha/${neighbor}?fullText=true`)
      //     .then(response => response.json())
      //     .then(neighbor => renderCountry(neighbor, 'neighbour'));
      // });
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err}`);
      renderError(`Something went wrong. Error message: ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', () => {
  getCountryData('norway');
});

getCountryData('fdjfalj');
*/
