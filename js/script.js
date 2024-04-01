var client = contentful.createClient({
    space: 'ete5e4krj05q',
    accessToken: 'ilii4B8XswOHBvJwyDec5UOSf6a5O-gJPNn4WqKrqBM',
  });

var placeForContent = document.getElementById('place-for-boba-content');

// gets all the entries as a json
client.getEntries({content_type:'bubbleTeaEncyclopedia'}).then(function (entries) {
    console.log(entries);
    // loops through the json to look at one entry at a 
    entries.items.forEach(function (entry) {
        // if statement checks that this field exists 
        var entryDiv = document.createElement('div');
        entryDiv.classList.add('entry-div'); 

        var name = document.createElement('h2');
        name.innerHTML = entry.fields.title;
        entryDiv.appendChild(name);

        var image = document.createElement('img'); 
        if (entry.fields.drinktopping){
            image.src = 'https:' + entry.fields.drinktopping.fields.file.url;
        }
        
        var link = document.createElement('a');
        link.href = "details.html?id="+entry.sys.id;
        link.appendChild(image);
        entryDiv.appendChild(link);


        placeForContent.appendChild(entryDiv);
    });

        
});
