$( document ).ready( readyNow );

function readyNow(){
    console.log( 'JQ' );
    $('#addSongButton').on('click', addSong);
    getSongs();
} // end readynow

function addSong() {
    console.log('in add song');
    // get user inputs packaged in an object
    const objectToSend = {
        artist: $('#artistIn').val(),
        published: $('#publishedIn').val(),
        rank: $('#rankIn').val(),
        track: $('#trackIn').val()
    }
    // send to the server via ajax
    $.ajax({
        method: 'POST',
        url: '/songs',
        data: objectToSend
    }).then( function (response) {
        console.log('back from POST', response);
        getSongs();
    }).catch( function (err) {
        console.log('error with post', err);
    })
}
function getSongs() {
    $.ajax({
        method: 'GET',
        url: '/songs'
    }).then( function(response) {
        console.log('back from GET', response);  
        $('#songList').empty();
        for(let one of response) {
            $('#songList').append(`<li>
            <strong>artist:</strong> ${one.artist}
            <br /><strong>track:</strong> ${one.track}
            <br /><strong>published:</strong> ${one.published}
            <br /><strong>rank:</strong> ${one.rank}
            </li>`);
        }
    }).catch( function(err) {
        console.log('error in client', err);   
    })
}
