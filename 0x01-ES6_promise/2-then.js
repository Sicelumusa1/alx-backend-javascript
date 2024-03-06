export default function handleResponseFromAPI(promise) {
  return promise
      .then((response) => ({
        status: 200,
        body: 'success',
      }))
      .catch((error) => new Error('The fake API is not working currently'))
      .finally(() => {
        console.log('Got a response from the API');
      });
}
