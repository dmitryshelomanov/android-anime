export default (array = [], field = "name") => { 
  var newData = [];
  array.forEach(function(item) {
     newData.push(item[field]);
  });
  return newData.join(",");
};