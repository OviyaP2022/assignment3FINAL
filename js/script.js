var client = contentful.createClient({
    space: 'ete5e4krj05q',
    accessToken: 'Bb-Y-ihGV2S_IjpzqfnpOdE5hrgWxqe1l3LDqWLL8-8',
  });

var placeForContent = document.getElementById('place-for-boba-content');

// gets all the entries as a json
client.getEntries({content_type:'wellKnownKPopGroups'}).then(function (entries) {
    // loops through the json to look at one entry at a 
    entries.items.forEach(function (entry) {
    // if statement checks that this field exists 
    var entryDiv = document.createElement('div');
    entryDiv.classList.add('entry-div'); 
}

var name = document.createElement('h2');
    name.innerHTML = entry.fields.groupName;
    entryDiv.appendChild(name);
}

var groupimage = document.createElement('img');
    if (entry.fields.drinktopping){
    drinktopping.src = 'https:' + entry.fields.drinktopping.fields.file.url;
}
