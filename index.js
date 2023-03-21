// Code your solutions in this file

    function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }

  function writeCards(names) {
    let arr = [];
    let i = 0;
      while (i < names.length) {
        arr.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        i++
      }
      return arr;
    }
    