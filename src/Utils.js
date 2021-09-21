
export const shuffleArray = (array) => {
  let ctr = array.length;
  let temp;
  let index;

  while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = array[ctr];
      array[ctr] = array[index];
      array[index] = temp;
  }
  return array;
}

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}