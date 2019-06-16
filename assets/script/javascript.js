var topics = ['video games', 'dungeons and dragons', 'big bang theory','neil degrasse tyson']
 

function initPage(){
    displayButtons()
}

initPage()

//  thid function adds buttons to the dom
function displayButtons(){
    for(let i = 0; i < topics.length; i++){
        var button = $('<button>');
        button.text(topics[i])
        button.appendTo('.buttons')
        button.attr('data-search',topics[i])
        button.val(topics[i])
    }
    $('button').on('click',function(){
        var search = $(this).val();
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=6t6phxrxukwcrB71KA15xTMFhQQPzBTf&q=" + search + "&limit=5&offset=0&rating=PG&lang=en"
    
        $.ajax({
            url: queryURL,
            method: "GET" }).then(function(response) {
            console.log(response.data)
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










