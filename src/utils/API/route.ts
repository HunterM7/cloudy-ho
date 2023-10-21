// import { updateWeather, error404 } from './app.ts'

// const defaultLocation = '#/weather?lat=55.4507&lon=37.3656' // Moscow

// function currentLocation() {
//   window.navigator.geolocation.getCurrentPosition(
//     (res) => {
//       const { latitude, longitude } = res.coords

//       updateWeather(`lat=${latitude}`, `lon=${longitude}`)
//     },
//     (err) => {
//       window.location.hash = defaultLocation
//     },
//   )
// }

// /**
//  * @param {string} query Searched query
//  */
// const searchedLocation = (query: string) => updateWeather(...query.split('&'))
// // updateWeather("lat=51.5073219", "lon=-0.1276474")

// const routes = new Map([
//   ['/current-location', currentLocation],
//   ['/weather', searchedLocation],
// ])

// const checkHash = function () {
//   const requestURL = window.location.hash.slice(1)

//   const [route, query] = requestURL.includes
//     ? requestURL.split('?')
//     : [requestURL]

//   routes.get(route) ? routes.get(route)(query) : error404()
// }

// window.addEventListener('hashchange', checkHash)

// window.addEventListener('load', function () {
//   if (!window.location.hash) {
//     window.location.hash = '#/current-location'
//   } else {
//     checkHash()
//   }
// })
