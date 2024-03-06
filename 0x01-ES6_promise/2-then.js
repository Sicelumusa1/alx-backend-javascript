function handleResponsefromAPI(promise) {
  return promise
    .then(response => {
      return {
        status: 200,
	body: 'success'
      };
    })
    .catch(error => {
      return new Error('The fake API is not working currently');
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}
