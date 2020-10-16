
fetch("https://games-world.herokuapp.com/games")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonresponse) {
      const fragment = document.createDocumentFragment();

    jsonresponse.forEach(function (item) {
      const node = document.createElement("li");
      //  list items for each game that will contain requested details of the game
      node.innerHTML = `<div class = "list-item"> 
                              <h3> ${item.title}</h3>
                              <label for="title">Change Title:</label>
                              <input id = "title-${item._id}" placeholder="enter new title" value = "" name= "title", type="text"></input><br>
                              <img src = '${item.imageUrl}' style = 'margin-left: 50px; with:100px; height:100px'>
                              <div> <b>Description: </b>${item.description} </div>
                              <button class= "update" id = "${item._id}" >Update game</button>
                              </div>`
                              ;

      fragment.appendChild(node);
    });
    document.querySelector("#list").appendChild(fragment);
    document.querySelectorAll(".update").forEach(function (item) {
      item.addEventListener("click", handleUpdate);
    });

  });

  function handleUpdate(event) {
    let data = "title="
    const title = document.getElementById("title-" + event.target.id).value
    console.log(title);
    if (title !== ""){
      data += title;
      let reguestUrl = "https://games-world.herokuapp.com/games/";
      reguestUrl += event.target.id ;
      fetch(reguestUrl, {
        method: "PUT",
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        },
        body: data
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
         window.location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }else{
      document.getElementById("title-" + event.target.id).style.border = "1px solid red";
    }
   
  }
  
