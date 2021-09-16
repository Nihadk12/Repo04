function main() {
    var mX = 12;
    var mY=19;
    var mZ=24;
   //only change code below this line
  mX += 3;
  mY += 17;
  mZ -= 20; 
   //only change code apove this line
   return {
       mX,
       mY,
       mZ
   };
}

console.log(main(5.0,2.0));

module.exports = main;
