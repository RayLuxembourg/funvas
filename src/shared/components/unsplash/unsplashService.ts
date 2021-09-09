import type { Unsplash } from './types';

const key = process.env.REACT_APP_UNSPLASH_KEY;
// const key = 'flCc36_tZ4EN4oHp2irl3rvLkRmb3S0D8JMEoYzcgmk';
// const secret = 'J3rd2izdOxxWjJI2k6zlTZFbPMS9RHUMqUskZ8OPXwo';

const searchImage = async (query: string) => {
  const res = await fetch(`https://api.unsplash.com/search/photos?client_id=${key}&query=${query}`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const { results }: Unsplash.RootObject = await res.json();
  return results;
};

export default searchImage;
