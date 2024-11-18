export const getSums = (array) => array
  .map((el) => Object.values(el.data)
    .reduce((acc, elem) => acc + elem, 0));

export const getDiffs = (array) => {
  const diffs = [];
  array.forEach((el, i, arr) => {
    if (i < arr.length - 1) {
      diffs.push(arr[i + 1] - el);
    }
  });
  return diffs;
};
