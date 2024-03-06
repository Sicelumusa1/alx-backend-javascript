export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    const error = new Error(`${fileName} cannot be processed`);
    reject(error);
  });
}
