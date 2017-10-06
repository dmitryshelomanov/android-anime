export default (text) => {
  let txt = text.replace(/<[^>]+>/g, "");
  let lnOrig = txt.length;
  let ln = txt.replace(/Описание:.*/gi, "").length;
  if (ln === lnOrig) { 
    return txt;
  };
  return txt.substr(ln + 10, lnOrig);
};