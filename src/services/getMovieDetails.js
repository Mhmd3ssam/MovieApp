import {client} from './client';

export const getMovieDetails = async id => {
  const params = {
    i: id,
    plot: 'full',
  };
  try {
    const {data} = await client.get('/', {params});
    if(data.Response === "True"){
      console.log(data);
      return data

    }
  } catch (error) {
    console.log(error);
    return [];

  }
};