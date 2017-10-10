export default (genre, year, type) => {
  let http = "http://api.animaunt.ru/Anime?Limit=15";
  if (genre !== "") {
    http += `&Genres=${genre}`;
  };
  if (year !== "") {
    http += `&Years=${year}`;
  };
  if (type !== "") {
    switch (type) {
      case "Аниме":
        http += "&IsAnime=true";
        break;
      case "Дорама":
        http += "&IsDoorma=true";
        break;
    };
  };
  return http;
};