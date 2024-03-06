import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.uj';

export function handleProfileSignup(firstName, lastName, fileName) {
  // Create promises for signUpUser and uploadPhoto
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  // Wait for both promises to settle
  return Promise.allSettled([userPromise, photoPromise])
      .then((results) => results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason,
      })))
      .catch((error) => {
        console.error('Error during profile signup', error.message);
        return [];
      });
}
