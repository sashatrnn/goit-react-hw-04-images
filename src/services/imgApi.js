import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';
const API_KEY = '36228966-b16b8f4a94cb64b768634e65a';

async function getImages(query, page = 1) {
  try {
    const res = await axios.get('/api/', {
      params: {
        key: API_KEY,
        q: query,
        orientation: 'horizontal',
        image_type: 'photo',
        page,
        per_page: 12,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export default getImages;
