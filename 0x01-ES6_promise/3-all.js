import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup(){
  const photoPromise = uploadPhoto();

  const userPromise = createUser();

  Promise.all([photoPromise, userPromise])
    .then(([photoResponse, userResponse] => {
      const { body: photoBody } = photoResponse;
      const { body, firstName, lastName } = userResponse;
      
      console.log(`User: ${firstName} ${lastName}, body: ${body},Photo Body: ${photoBody}`);
    })
    .catch(error => {
      console.error('Signup system offline');
    });
}
