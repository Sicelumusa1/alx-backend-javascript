const weakMap = new WeakMap();
const getKey = (endpoint) => JSON.stringify(endpoint);

export const queryAPI = (endpoint) => {
  const { protocol, name } = endpoint;
  const key = getKey(endpoint);

  let count = weakMap.get(key) || 0;
  count++;

  weakMap.set(key, count);

  if (count >= 5) {
    throw new Error(`Endpoint load is high: ${protocol} - ${name}`);
  }
};

export { weakMap };
