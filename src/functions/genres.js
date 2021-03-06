import axios from 'axios';

const { MOVIE_DB_API_KEY, CORS_ORIGIN } = process.env;

export async function handler(event, context) {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': CORS_ORIGIN || '*'
  };

  try {
    const url = 'https://api.themoviedb.org/3/genre/movie/list';

    const response = await axios.get(url, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${MOVIE_DB_API_KEY}`
      }
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(response.data)
    };
  } catch (err) {
    console.log(err);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ msg: 'could not load data' })
    };
  }
}
