var array = [
    {
        quote: 'Oh yes, the past can hurt. But the way I see it,you can either run from it or learn from it.',
        author: '—Rafiki, The Lion King'},

    { 
        quote: 'Even miracles take a little time.',
        author: '—Fairy Godmother, Cinderella'
    },
    { 
        quote: 'The flower that blooms in adversity is the most rare and beautiful of all.',
        author: '—The Emperor, Mulan'
    },
    {
        quote: 'Venture outside your comfort zone. The rewards are worth it.',
        author: '—Rapunzel'
    },
    {
        quote: 'The things that make me different are the things that make me.',
        author: '—Piglet, Winnie the Pooh '

    }

    

];



function randomQuote() {
    var random = 0;
    var quote = "";
    var author = "";
  
    do {
      random = Math.floor(Math.random() * array.length);
      quote = array[random].quote;
      author = array[random].author;
    } while (document.getElementById("demo").innerHTML.includes(quote));
  
    
    document.getElementById("demo").innerHTML = quote;
    document.getElementById("caption").innerHTML = author;
  }
  

// function randomQuote() {
//     var random = Math.floor(Math.random() * array.length);
//     var quote = array[random].quote;
//     var author = array[random].author;
//     document.getElementById("demo").innerHTML=(`${quote} `);
//     document.getElementById("caption").innerHTML=(`${author} `);

    
//   }