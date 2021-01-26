import { zomato } from '../config'

const requestOptions = {
  method: 'GET',
  headers: { 'user-key': zomato.apiKey },
};

function getFeaturedCities() {
  return new Promise((resolve, reject) => {
    fetch(`${zomato.apiUrl}/cities?city_ids=74,11052,170`, requestOptions)
      .then(handleResponse)
      .then(res => resolve(res))
      .catch(err => {
        console.log(err)
        reject(err)
      })
  })
}

function getCityData(id) {
  return new Promise((resolve, reject) => {
    fetch(`${zomato.apiUrl}/cities?city_ids=${id}`, requestOptions)
      .then(handleResponse)
      .then(res => resolve(res))
      .catch(err => {
        console.log(err)
        reject(err)
      })
  })
}

function getCategories() {
  return new Promise((resolve, reject) => {
    fetch(`${zomato.apiUrl}/categories`, requestOptions)
      .then(handleResponse)
      .then(res => resolve(res))
      .catch(err => {
        console.log(err)
        reject(err)
      })
  })
}


function getSearchCities(keyword) {
  return new Promise((resolve, reject) => {
    fetch(`${zomato.apiUrl}/cities?q=${keyword}`, requestOptions)
      .then(handleResponse)
      .then(res => resolve(res))
      .catch(err => {
        console.log(err)
        reject(err)
      })
  })
}

function getSearchRestaurants(criteria) {

  let params = {}
  for (let c of criteria) {
    switch (c.criteriaName) {
      case 'City':
        params.entity_id = c.data.id
        params.entity_type = 'city'
        break
      case 'Category':
        params.category = c.data.id
        break
      case 'Keyword':
        params.q = c.data.name
        break
      default: break
    }

  }

  params = getQueryParams(params)

  return new Promise((resolve, reject) => {
    fetch(`${zomato.apiUrl}/search?${params}`, requestOptions)
      .then(handleResponse)
      .then(res => resolve(res))
      .catch(err => {
        console.log(err)
        reject(err)
      })
  })
}


function getRestaurantData(id) {
  return new Promise((resolve, reject) => {
    fetch(`${zomato.apiUrl}/restaurant?res_id=${id}`, requestOptions)
      .then(handleResponse)
      .then(res => resolve(res))
      .catch(err => {
        console.log(err)
        reject(err)
      })
  })
}


function getReviewsData(id) {
  return new Promise((resolve, reject) => {
    fetch(`${zomato.apiUrl}/reviews?res_id=${id}`, requestOptions)
      .then(handleResponse)
      .then(res => resolve(res))
      .catch(err => {
        console.log(err)
        reject(err)
      })
  })
}


function handleResponse(res) {
  if (!res.ok) {
    return Promise.reject(res.status)
  }

  return res.json()
}

function getQueryParams(params) {
  return Object.keys(params).map(key => key + '=' + params[key]).join('&')
}


export const zomatoService = {
  getFeaturedCities,
  getSearchCities,
  getCityData,
  getCategories,
  getSearchRestaurants,
  getRestaurantData,
  getReviewsData
}

