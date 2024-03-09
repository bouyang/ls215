/*
  return the chapter which is nearest to the page
  chapters and their beginning page are recorded as attributes in an object

  extract page numbers from the obj
    iterate through obj.keys
  find abs value of difference between page and input
  find smallest by comparing current smallest to current
  if tie, record the second one
*/


function nearestChapter(chapt, page) {
  
  let min = Math.min(...Object.keys(chapt).map(chapterName => {
    return Math.abs(chapt[chapterName] - page);
  }));

  let results = Object.entries(chapt).filter(entry => {
    return (Math.abs(entry[1] - page) === min);
  });

  return results[results.length - 1][0];
}


console.log(nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10));

console.log(nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3));

console.log(nearestChapter({"New Beginnings" : 1, "Strange Developments" : 62, "The End?" : 194, "The True Ending" : 460}, 200));