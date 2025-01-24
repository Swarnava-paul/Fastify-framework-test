function Step1_PatternO(array) {
    let str = "";
    let len = array.length;
    for (let i = 0 ; i <= len - 2 ; i++) {
         for (let j = 0 ; j < array[i].length ; j++) {
            if (j == 0) str+= array[i][j] + " ";
            break;
         }
    };
    return str;
 };

 function Step2_PatternO(array,str) {
    const lastIndex = array.length - 1;
    for (let i = lastIndex ; i >= 0 ; i--) {
        if (i < lastIndex) break;
        for (let j = 0 ; j < array[i].length ; j++) {
            str += array[i][j] + " ";
        }
    };
    return str;
 };
 
 function Step3_PatternO(array,str) {
    const startIndex = array.length - 2; 
    for (let i = startIndex ; i >= 0 ; i--) {
        const innerLastIndex = array[i].length - 1;
        str += array[i][innerLastIndex] + " ";
        continue;
    };
    return str;
 };

 function Step4_PatternO(array,str) {
    
   const firstColumn = array[0];
   const loopStartIndex = firstColumn.length - 2;
   for(let i = loopStartIndex ; i >= 0 ; i--) {
      str += firstColumn[i] + " ";
   };
   return str;
 };


module.exports = {
    Step1_PatternO,
    Step2_PatternO,
    Step3_PatternO,
    Step4_PatternO
 };
