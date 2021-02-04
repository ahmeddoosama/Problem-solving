/*
 * Title:
    99 bottles of beer


 * Description:
    Complete the function sing that returns the lyrics for the song 99 Bottles of Beer as a sequence. There is a code length limit depending on the language.

 * Lyrics
    | "99 bottles of beer on the wall, 99 bottles of beer.
    | Take one down and pass it around, 98 bottles of beer on the wall.
    |
    | 98 bottles of beer on the wall, 98 bottles of beer.
    | Take one down and pass it around, 97 bottles of beer on the wall.
    |
    | ...and so on...
    |
    | 3 bottles of beer on the wall, 3 bottles of beer.
    | Take one down and pass it around, 2 bottles of beer on the wall.
    |
    | 2 bottles of beer on the wall, 2 bottles of beer.
    | Take one down and pass it around, 1 bottle of beer on the wall.
    |
    | 1 bottle of beer on the wall, 1 bottle of beer.
    | Take one down and pass it around, no more bottles of beer on the wall.
    |
    | No more bottles of beer on the wall, no more bottles of beer.
    | Go to the store and buy some more, 99 bottles of beer on the wall."

 * Result
    The returned result should be an array of all the lines in the song.

 * Examples:
    [ "99 bottles of beer on the wall, 99 bottles of beer.",
      "Take one down and pass it around, 98 bottles of beer on the wall.",
      "98 bottles of beer on the wall, 98 bottles of beer.",

      ...and so on...

      "3 bottles of beer on the wall, 3 bottles of beer.",
      "Take one down and pass it around, 2 bottles of beer on the wall.",
      "2 bottles of beer on the wall, 2 bottles of beer.",
      "Take one down and pass it around, 1 bottle of beer on the wall.",
      "1 bottle of beer on the wall, 1 bottle of beer.",
      "Take one down and pass it around, no more bottles of beer on the wall.",
      "No more bottles of beer on the wall, no more bottles of beer.",
      "Go to the store and buy some more, 99 bottles of beer on the wall." ]

 * Input
    describe("Sample test", function() {
        it("Test", function() {
            let song = sing();
            assert.equal(song[0], '99 bottles of beer on the wall, 99 bottles of beer.');
            assert.equal(song[199], 'Go to the store and buy some more, 99 bottles of beer on the wall.');
        });
    });

 * Kata Link:
    https://www.codewars.com/kata/52a723508a4d96c6c90005ba/train/javascript
*/

// Short Solution
const sing = function () {

    let song = [];
    
    for (let i = 99; i >= 3; i--) {
        song.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`, `Take one down and pass it around, ${i - 1} bottles of beer on the wall.`);
    }
    
    return song.concat([
      '2 bottles of beer on the wall, 2 bottles of beer.',
      'Take one down and pass it around, 1 bottle of beer on the wall.',
      '1 bottle of beer on the wall, 1 bottle of beer.',
      'Take one down and pass it around, no more bottles of beer on the wall.',
      'No more bottles of beer on the wall, no more bottles of beer.',
      'Go to the store and buy some more, 99 bottles of beer on the wall.'
    ]);
  };
