var socket = io()
$(() => {
  getGifs();
  $("#addGifButton").click(() => {

    var gif = {
      link : $("#newGifLink").val(),
      title: $("#newGifTitle").val(),
    };
    console.log(gif.link);
    newGif(gif);
    postGif(gif);
  })
  // newGif('', 'first gif/first image');
  // newGif('', 'second gif/second image');
})

socket.on('gif', newGif) 

function newGif(gif) {
  $("#gifList").append(`<a href=""><div class="list-group-item list-group-item-action" >
  <img src="${gif.link}" /> <h6>${gif.title}</h6><br />
  </div></a>`);
}

function getGifs(){
  $.get('http://localhost:3500/gifs', (data) => {
    // console.log(data);
    data.forEach(function(element){
      newGif(element);
    })
  })
}

function postGif(gif){
  $.post('http://localhost:3500/gifs', gif);
}
