export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    const error = new Error(`The file ${filename} cannot be processed`);
    reject(error);
  });
}
