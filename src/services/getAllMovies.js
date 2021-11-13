import {client} from './client';

export const getAllMovies = async query => {
  const params = {
    s: query,
  };
  try {
    const {data} = await client.get('/', {params});
    if(data.Response === "True"){
      console.log(data);
      return data.Search

    }
  } catch (error) {
    console.log(error);
    return [];

  }
};