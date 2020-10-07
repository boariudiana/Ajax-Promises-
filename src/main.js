fetch('https://games-world.herokuapp.com/games')
.then(function(response){
   return response.json();
}).then(function(jsonresponse){
    console.log(jsonresponse);
    jsonresponse.forEach(item => {
        var node = document.createElement("li");
        node.innerHTML = `<div> <h3> ${item.title}</h3> <img src = '${item.imageUrl}' 
        style = 'margin-left: 50px; with:100px; height:100px'>
        </div> <div> <b>Description: </b>${item.description} </div>`;
        document.querySelector("#list").appendChild(node)
    });

});