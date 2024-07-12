import axios from 'axios';

const baseURL = 'https://pixabay.com/api/';

export async function makeAxios(userRequest) {
  const params = new URLSearchParams({
    key: '44734756-d98c11aebccc1bae684f0851d',
    q: userRequest,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: false,
  });

  return await axios.get(baseURL, { params });
}
