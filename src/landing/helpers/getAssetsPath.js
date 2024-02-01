export const getAssetsPath = (path) => {
  return `${document.location.pathname}/${path}`.replace(/\/+/g, '/');
};
