var topics = ['video games', 'dungeons and dragons', 'big bang theory','neil degrasse tyson']

//  thid function adds buttons to the dom
function displayButtons(){
    for(let i = 0; i < topics.length; i++){
        var button = $('<button>');
        button.text(topics[i])
        button.appendTo('.buttons')
        button.val(topics[i])
    }
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



displayButtons()