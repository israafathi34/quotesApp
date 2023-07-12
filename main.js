var array = [
    {
         quote: 'Oh yes, the past can hurt. But the way I see it,you can either run from it or learn from it.',
         author: '—Rafiki, The Lion King'},

    {
        author: '—Fairy Godmother, Cinderella', 
        quote: 'Even miracles take a little time.'
    },
    {
        author: '—The Emperor, Mulan', 
        quote: 'The flower that blooms in adversity is the most rare and beautiful of all.'
    },
    {
        author: '—Rapunzel', 
        quote: 'Venture outside your comfort zone. The rewards are worth it.'
    },
    {
        author: '—Piglet, Winnie the Pooh ', 
        quote: 'The things that make me different are the things that make me.'
    },

    

];

function randomQuote() {
    var random = Math.floor(Math.random() * array.length);
    var quote = array[random].quote;
    var author = array[random].author;
    document.getElementById("demo").innerHTML=(`${quote} `);
    document.getElementById("caption").innerHTML=(`${author} `);

    
  }
  
  document.querySelector('#quoteButton').onclick = randomQuote;
  