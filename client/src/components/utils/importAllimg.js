import React from 'react'

function importAllimg(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAllimg(require.context('.../uploads/', false, /\.(png|jpe?g|svg)$/));


export default importAllimg