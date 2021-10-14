'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = (data, className = '') => {
  console.log(data);
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = msg => {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
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
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
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

// btn.addEventListener('click', function () {
//   getCountryData('norway');
// });

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

///////////////////////////////////////
// Coding Challenge #1

/*
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.
*/

const COORD_1 = { lang: 52.508, lng: 13.381 };
const COORD_2 = { lang: 19.037, lng: 72.873 };
const COORD_3 = { lang: -33.933, lng: 18.474 };

/*
 My attempt:
//--- function 'whereAmI(lat, lng)'
// it gets city and country names.
const whereAmI = (lat, lng) => {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => response.json())
    .then(data => {
      return console.log([data.city, data.country]);
    });
};

console.log(whereAmI(TEST_COORD_1.lang, TEST_COORD_1.lng));
*/

/*
PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)


GOOD LUCK 😀
*/
/*
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (!response.ok)
        throw new Error(`Problmem with geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(
        `https://restcountries.com/v2/name/${data.country}?fullText=true`
      );
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found. Status: ${response.status}`);
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.log(`${err.message} 🔴`));
};

whereAmI(COORD_1.lang, COORD_1.lng);

// using the Geolocation API
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function locateMe(position) {
  var crd = position.coords;
  whereAmI(crd.latitude, crd.longitude);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(locateMe, error, options);
*/

/*
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolve promise 1').then(res => console.log(res));
Promise.resolve('Resolve promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {} // this line creates an artificial delay to demonstrate that micro tasks such as Promises have priority. In this case the '0 sec timer' has to wait for the promises to complete before it gets executed.
  console.log(res);
});
console.log('Test end');
*/
/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('awaiting results...');

  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You Win!');
    } else {
      reject(new Error('You lost'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout

const wait = seconds => {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('xyz')).then(x => console.log(x));
*/

// ----- Geolocation API

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.log(err)
// );

/**
 * Promisifying the above function
 */

/*
const getPosition = () => {
  return new Promise((resolve, reject) => {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos)); // GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1632752163306}
getPosition().then(pos => console.log(pos.coords)); // GeolocationCoordinates {latitude: 39.757683, longitude: -104.8908404, altitude: null, accuracy: 20.579, altitudeAccuracy: null, …}

const whereAmI = () => {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Problmem with geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(
        `https://restcountries.com/v2/name/${data.country}?fullText=true`
      );
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found. Status: ${response.status}`);
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.log(`${err.message} 🔴`));
};

btn.addEventListener('click', whereAmI);
*/

///////////////////////////////////////
// Coding Challenge #2

/*
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

// const createImage = imgPath => {
//   const img = document.createElement('img');
//   img.src = imgPath;
//   document.getElementById('.main').appendChild(img);
// };
// createImage('./img/img-1.jpg');

/*
const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = imgPath => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error('Image not found'));
    });
  });
};

// createImage('./img/img-1.jpg');
// createImage('');

let currentImg;

createImage('img/img-3.jpg')
  .then(img => {
    currentImg = img;
    console.log('image 3 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-1.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('image 1 loaded');
    return wait(2);
  })
  .catch(err => console.error(err));

*/

//----------- Async Await
const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async () => {
  // Geolocation
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  // Reverse geocoding
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const dataGeo = await resGeo.json();
  console.log(dataGeo);

  // Country data

  // --- using Promises
  // const res = fetch(`https://restcountries.com/v2/name/${country}`).then(res =>
  //   console.log(res)
  // );
  const res = await fetch(
    `https://restcountries.com/v2/name/${dataGeo.country}`
  );
  const data = await res.json();
  console.log(data);
  renderCountry(data[0]);
};

whereAmI();
// whereAmI('norway');
console.log('FIRST');
