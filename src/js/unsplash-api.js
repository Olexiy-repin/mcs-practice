import axios from 'axios';

export const fetchPhotosByQuery = (searchedQuery, currentPage) => {
  const requestOptions = {
    params: {
      query: searchedQuery,
      orientation: 'portrait',
      page: currentPage,
      per_page: 10,
      client_id: 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg',
    },
  };

  return axios.get('https://api.unsplash.com/search/photos', requestOptions);
};
