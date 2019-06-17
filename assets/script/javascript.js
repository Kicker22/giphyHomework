var topics = [' Dr House', 'geek and sundry', 'big bang theory','neil degrasse tyson']
 

function initPage(){
    displayButtons()
}

initPage()

//  thid function adds buttons to the dom
function displayButtons() {
    for (let i = 0; i < topics.length; i++) {
        var button = $('<button>');
        button.text(topics[i])
        button.appendTo('.buttons')
        button.attr('data-search', topics[i])
        button.val(topics[i])
    }
    $('button').on('click', function () {
        var search = $(this).attr('data-search');
        console.log(search)
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=6t6phxrxukwcrB71KA15xTMFhQQPzBTf&limit=10"

        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {
                var results = response.data;
                for(var i = 0; i < results.length; i++){
                    if(results[i].rating !=='r' && results[i].rating !== 'pg-13'){
                        console.log(results[i].images.fixed_height.url)
                        var gifDiv = $('<div>');
                        var gifImg = $('<img>');
                        gifImg.attr('src',results[i].images.fixed_height.url)
                        gifDiv.append(gifImg)
                        $('.gifs-container').prepend(gifDiv)
                    }

                }
            })
    })

}

//this function grabs user input from the text box and adds it to our array
//then adds the new button
$('#add-user-meme').on('click',function(event){
    var grabInput = $('#user-input').val().trim()
    event.preventDefault()
    topics.push(grabInput)
    //clears buttons to prevent array repeat
    $('.buttons').empty()
    displayButtons()
})










