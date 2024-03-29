var socket = io()
$(() => {
    getGifs();
    $("#addGifButton").click(() => {

        var gif = {
            // language=JQuery-CSS
            link: $('#newGifLink').val(),
            title: $('#newGifTitle').val(),
        };
        console.log(gif.link);
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


var path = window.location.origin + "/gifs"

function getGifs() {
    console.log('window.location.origin is' + window.location.origin);
    console.log("path is + " + path);

    $.get(path, (data) => {
        // console.log(data);
        data.forEach(function (element) {
            newGif(element);
        })
    })
}

function postGif(gif) {
    $.post(path, gif);
}
