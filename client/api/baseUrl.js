export default function getBaseUrl() {
    return getQueryStringParameterByName('useMockApi') ?
        'https://mysterious-dawn-16770.herokuapp.com/' :
        'http://localhost:3001/';
}

function getQueryStringParameterByName(name, url) {
    if(typeof(window) === 'undefined') return;
    if(!url) url = window.location.href;

  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
