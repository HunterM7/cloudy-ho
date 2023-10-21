// import { getUrl } from 'utils'

export function useSearch() {
  //
  // let searchTimeout: string | null = null
  // const searchField = document.querySelector('[data-search-field]')
  // const searchResult = document.querySelector('[data-search-result]')
  // const serachTimeoutDuration = 500
  // searchField.addEventListener('input', function () {
  //   searchTimeout ?? clearTimeout(searchTimeout)
  //   if (!searchField.value) {
  //     searchResult.classList.remove('active')
  //     searchResult.innerHTML = ''
  //     searchField.classList.remove('searching')
  //   } else {
  //     searchField.classList.add('searching')
  //   }
  //   if (searchField.value) {
  //     searchTimeout = setTimeout(() => {
  //       fetchData(getUrl.geo(searchField.value), function (locations) {
  //         searchField.classList.remove('searching')
  //         searchResult.classList.add('active')
  //         searchResult.innerHTML = `
  //         <ul class="view-list" data-search-list></ul>
  //       `
  //         const /** {NodeList} | [] */ items = []
  //         for (const { name, lat, lon, country, state } of locations) {
  //           const searchItem = document.createElement('li')
  //           searchItem.classList.add('view-item')
  //           searchItem.innerHTML = `
  //           <span class="m-icon">location_on</span>
  //           <div>
  //             <p class="item-title">${name}</p>
  //             <p class="label-2 item-subtitle">${state || ''} ${country}</p>
  //           </div>
  //           <a href="#/weather?lat=${lat}&lon=${lon}" class="item-link has-state" aria-label="${name} weather" data-search-toggler></a>
  //         `
  //           searchResult
  //             .querySelector('[data-search-list]')
  //             .appendChild(searchItem)
  //           items.push(searchItem.querySelector('[data-search-toggler]'))
  //         }
  //         addEventOnElements(items, 'click', function () {
  //           toggleSearch()
  //           searchResult.classList.remove('active')
  //         })
  //       })
  //     }, serachTimeoutDuration)
  //   }
  // })
  //
}
