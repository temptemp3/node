const mergeImg = require('merge-img')
const jimp = require('jimp')
mergeImg([
  // image files to merge
  '1.png', 
  '2.png', 
  '3.png', 
  '4.png', 
], {
  // merge vertically
  direction: true,
})
.then((img) => {
  // Save image as file
  img.write('full.png', () => console.log('done'))
　// Resize to fixed width and save as separate file
  img.resize(756, jimp.AUTO)
  img.write("small.png", () => console.log('image resize (done)'))
})
