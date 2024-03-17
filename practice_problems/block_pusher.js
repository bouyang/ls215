/*
  returns the state of a board after n moves
  > push right every turn and pushes a block to the right if it occupies the same space
  # block can be pushed and joins a chain
  - empty

  input: 1d array?
        n can be negative, 0?
        what if char other than - # or >
        can there be a < pusher

  for each turn:
  - iterate through each position
    - record current idx and current symbol
    - if - or #, do nothing (set current idx as current symbol)
    - if >, check all spots until the end.
      If there is no blanks, nothing can be done
      If there is a blank:
      
        set current to -, 
        set next to >
        
    -  


*/

function blockPushing(arr, n) {
  
}

console.log(blockPushing(['>', '>', '>', '-'], 3));
console.log(blockPushing(['>', '#', '-', '#', '-', '-', '#'], 10));