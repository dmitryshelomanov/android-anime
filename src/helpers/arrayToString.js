export default (array = [], field = "name") => { 
  let string = "";
  array.forEach((item, index) => {
    if (index === array.length - 1) {
      string += `${item[field]}`;
    } else { 
      string += `${item[field]}, `;
    }
  });
  return string;
};