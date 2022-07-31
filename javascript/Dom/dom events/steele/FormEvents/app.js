

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}







// const form = document.querySelector('form');
// const last = document.querySelector('#list');

// form.addEventListener('submit' , function(e){
//     e.preventDefault();
//     const productinput = form.elements.product;
//     const quantityinput = form.elements.qty;
//     funk(productinput.value, quantityinput.value);
//     form.appendChild(newlist);
//     productinput.value = '';
//     quantityinput.value = '';
    
// })


// const funk = (product, quantity) => {
//     const newlist = document.createElement('li');
//     newlist.innerText = `${quantity} ${product}s`;
//     last.appendChild(newlist);

//     //below is wrong becasue appendchild require node input if string it will not work
//     // newlist.appendChild(q);
//     // newlist.appendChild(` ${p}`);
//     // document.getElementById('list').appendChild(`${newlist}`);
    

// }