var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');


var client = contentful.createClient({
    space: 'ete5e4krj05q',
    accessToken: 'ilii4B8XswOHBvJwyDec5UOSf6a5O-gJPNn4WqKrqBM',
  });
  
  var type = document.getElementById('type');
  client.getEntry(id).then(function (entry) {
    console.log(entry);
    var name = document.createElement('h2'); {
      name.innerHTML = entry.fields.title; 
      type.appendChild(name);
    }
    var image = document.createElement('img'); 
    image.classList.add('product-image');
    if (entry.fields.drinktopping){
        image.src = 'https:' + entry.fields.drinktopping.fields.file.url;
        type.appendChild(image);

    }

    var description = document.createElement('p'); {
        description.innerHTML = entry.fields.description;
        type.appendChild(description);
    }

    var link = document.createElement('a');
        link.href = "details.html?id="+entry.sys.id;
        link.appendChild(drinktopping);
        type.appendChild(link);
});