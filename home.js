// para = document.getElementById('mypara').innerHTML;
// document.getElementById('mypara').addEventListener('click', function(){
//     console.log(e.target.innerText);
// })
// document.getElementById('btn').addEventListener('click', function(a){
//     // a.stopPropagation();
//     alert('you clicked');
// })
// document.getElementById('container').addEventListener('click', function(){
//     alert('container clicked');
// })

// container = document.getElementById('container2');
// h1 = document.createElement('h1');
// h1.innerText = 'dkjfbdskfndsknfkdsnf';
// h1.id = 'myid'
// container.appendChild(h1);

// CHANGING THE BACKGROUND COLOR:
const colorbtn = document.querySelector('#colorbtn');
const bodybg = document.querySelector('body');
const colors = ['red', 'blue', 'palegreen', 'green', 'brown', 'orange'];
colorbtn.addEventListener('click', changecolor)
function changecolor(){
        let random = Math.floor(Math.random()*colors.length);
        bodybg.style.backgroundColor = colors[random];
}

//CHANGING THE BACKGROUND COLOR USING HEXVALUES:
// const hexnumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
// const hexbtn = document.querySelector('#hexbtn');
// const bodybg = document.querySelector('body');
// const hex = document.querySelector('#hexvalue');

// hexbtn.addEventListener('click',varyhex);
// function varyhex(){
//     let hexcol = '#'
//     for(let i=0; i<6; i++){
//         let random = Math.floor(Math.random()*hexnumbers.length);
//         hexcol +=hexnumbers[random];
//     }
//     bodybg.style.backgroundColor = hexcol;
//     hex.innerHTML = hexcol;
// }

// CHANGING QUOTES
// quotes = [
//     {
//        quote:'A writer is someone for whom writing is more difficult than it is for other people.',
//         author:'Thomas Mann'
//     },
//     {
//         quote:'Quiet people have the loudest minds.',
//         author:'Stephen King'
//     },
//     {
//         quote:'When male authors write love stories, the heroine tends to end up dead.',
//         author:'Susan Elizabeth Phillips'
//     },
//     {
//         quote:'What I like in a good author is not what he says, but what he whispers.',
//         author:'Logan Pearsall Smith'
//     },
//     {
//         quote:'We write to taste life twice, in the moment and in retrospect.',
//         author:'Anaïs Nin'
//     }
// ]
// const quotebtn = document.getElementById('quotebtn');
// const quote = document.getElementById('quote');
// const quoteauthor = document.getElementById('quoteauthor');

// quotebtn.addEventListener('click', getquote);
// function getquote(){
//     let random = Math.floor(Math.random()*quotes.length);
//     quoteauthor.innerHTML = quotes[random].author;
//     quote.innerHTML = quotes[random].quote;
// }

// DELIVERING MESSAGE
// const messageinput = document.getElementById('messageinput');
// const messagebtn = document.getElementById('messagebtn');
// const clearbtn = document.getElementById('clearbtn');
// const message = document.getElementById('message');

// messagebtn.addEventListener('click',getmessage);
// function getmessage(){
//     let content = messageinput.value;
//     if (content === ''){
//         alert('Please Enter A Message')
//     }
//     else{
//         message.innerHTML = content;
//         messageinput.value = ''
//     }
// }

// COUNTER
// const counter = document.getElementById('counter');
// const addbtn = document.getElementById('addbtn');
// const minusbtn = document.getElementById('minusbtn');
// let count = 0;
// addbtn.addEventListener('click', increment);
// function increment(){
//     count++;
//     counter.innerHTML = count;
//     if(counter.innerHTML>'0'){
//         counter.style.color = 'blue';
//     }
//     else if(counter.innerHTML==='0'){
//         counter.style.color = 'black'
//     }
// }
// minusbtn.addEventListener('click', decrement);
// function decrement(){
//     count--;
//     counter.innerHTML = count;
//     if(counter.innerHTML<'0'){
//         counter.style.color = 'red';
//     }
//     else if(counter.innerHTML==='0'){
//         counter.style.color = 'black'
//     }
// }
