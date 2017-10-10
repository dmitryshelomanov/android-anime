export default (genre, year, type) => {
  let http = "api.animaunt.ru/Anime?Limit=2";
  if (genre !== "") {
    http += `&Genres=${genre}`;
  };
  if (year !== "") {
    http += `&StartYear=${year}`;
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