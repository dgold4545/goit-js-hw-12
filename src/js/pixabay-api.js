import axios from 'axios';

const baseURL = 'https://pixabay.com/api/';

export function makeFetchRequest(userRequest) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';

  const params = new URLSearchParams({
    key: '44734756-d98c11aebccc1bae684f0851d',
    q: userRequest,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: false,
  });

  const URL = `${BASE_URL}${END_POINT}?${params}`;

  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function makeAxios(userRequest) {
  const params = new URLSearchParams({
    key: '44734756-d98c11aebccc1bae684f0851d',
    q: userRequest,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: false,
  });

  return axios.get(baseURL, { params });
}
