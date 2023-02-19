import axios from 'axios';

const API_KEY = '32936203-f995b0120a7e97e60c049aedf';
axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.params = {
  orientation: 'horizontal',
  per_page: 12,
  key: API_KEY,
};

export const getImages = async (value, page) => {
  const params = {
    q: value,
    page,
  };
  const { data } = await axios.get('/', { params });
  return { hits: getNormalizedData(data), total: data.totalHits };
};

const getNormalizedData = ({ hits }) =>
  hits.map(({ id, tag, webformatURL, largeImageURL }) => ({
    id,
    tag,
    webformatURL,
    largeImageURL,
  }));
