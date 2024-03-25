var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');


var client = contentful.createClient({
    space: 'ete5e4krj05q',
    accessToken: 'Bb-Y-ihGV2S_IjpzqfnpOdE5hrgWxqe1l3LDqWLL8-8',
  });