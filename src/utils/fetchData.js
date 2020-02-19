export const fetchData = async url => {
  try {
    const request = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);

    if (!request.ok) {
      throw new Error('Ответ сети был не ok.');
    }

    const result = await request.json();

    return result;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
