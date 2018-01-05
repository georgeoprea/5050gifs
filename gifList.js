$(() => {
  getGifs();
  $("#addGifButton").click(() => {

    var gif = {
      link : $("#newGifLink").val(),
      title: $("#newGifTitle").val(),
    };
    console.log(gif.link);
    newGif(gif);
  })
  // newGif('', 'first gif/first image');
  // newGif('', 'second gif/second image');
})

function newGif(gif) {
  $("#gifList").append(`<a href=""><div class="list-group-item list-group-item-action" >
  <img src="${gif.link}" /> <h6>${gif.title}</h6><br />
  </div></a>`);
}

function getGifs(){
  $.get('http://localhost:2530/gifs', (data) => {
    // console.log(data);
    data.forEach(function(element){
      newGif(element);
    })
  })
}

function postGifs(gif){
  $.post('http://localhost:2530/gifs', gif, (data) => {
    // console.log(data);
    data.forEach(function(element){
      newGif(element);
    })
  })
}
