export const funcImg = (url) => {
  let img = '';
  if (url != '') {
    img = `/cgu.github.io${url}`;
    //img = `${url}`;
    return img;
  }
};
