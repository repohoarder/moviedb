import axios from 'axios';

const { MOVIE_DB_API_KEY } = process.env;

export async function handler(event, context) {
  try {
    const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc';

    const response = await axios.get(url, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${MOVIE_DB_API_KEY}`
      }
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(response.data.results)
    };
  } catch (err) {
    console.log(err);

    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ msg: 'could not load data' })
    };
  }
}
