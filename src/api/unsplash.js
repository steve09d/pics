import axios from 'axios';

//get images
export const getImages = async term => {
  try {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID gzVY-pNdzo-l6tmB78gznRHYOwjpsdM2Pz9YbJ7ku0U',
      },
    });

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID gzVY-pNdzo-l6tmB78gznRHYOwjpsdM2Pz9YbJ7ku0U',
  },
});
