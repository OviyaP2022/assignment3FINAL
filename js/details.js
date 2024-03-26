var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');


var client = contentful.createClient({
    space: 'ete5e4krj05q',
    accessToken: 'CFPAT-ftGO8_klmWJQqOztYgYOfo0hD9vtItIwGfeXuDREYNs',
  });

  var name = document.createElement('h2'); {
    name.innerHTML = entry.fields.title; 
    entryDiv.appendChild(name);
  }


  var image = document.createElement('img'); 
  if (entry.fields.drinktopping){
      image.src = 'https:' + entry.fields.drinktopping.fields.file.url;
  }

var description = document.createElement('p'); {
    description.innerHTML = entry.fields.description;
    entryDiv.appendChild(description);
}

var link = document.createElement('a');
    link.href = "details.html?id="+entry.sys.id;
    link.appendChild(drinktopping);
    entryDiv.appendChild(link);
