//window.addEventListener('load', getQuote);

const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const endpoint = "https://api.breakingbadquotes.xyz/v1/quotes";

// async function getQuote() {
//     //console.log('test click worked');
//     let text =  await fetch(endpoint);
//     let response = await text.text();
    
//     let json_response = JSON.parse(response);
//     //console.log (json_response);
//     console.log(json_response['message']);

//     displayQuote (json_response['message']);
// }

function getQuote()
{
    let text = fetch(endpoint)
    .then(response=>response.text())
    .then(text=>displayQuote(text))
}




function displayQuote(x) {
    //const quoteBox = document.querySelector('#js-quote-text');
    //console.log('display quote working');
    //const textMessage = document.createTextNode(x);

    //quoteBox.appendChild(textMessage);
    let text = JSON.parse(x);
    document.getElementById('js-quote-text').textContent = text['quote'];
}


getQuote();