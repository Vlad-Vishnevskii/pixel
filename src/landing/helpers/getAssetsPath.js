export const getAssetsPath = (path) => {
  return `${process.env.PUBLIC_URL}/${path}`.replace(/\/+/g, '/');
};
