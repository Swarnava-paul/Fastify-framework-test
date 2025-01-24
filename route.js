const fs = require('node:fs');
const path = require('node:path')

const fp = path.join(__dirname, 'package.json');

const {
    Step1_PatternO,
    Step2_PatternO,
    Step3_PatternO,
    Step4_PatternO,
} = require('./modules/script')

const array = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ];

async function handler (request, reply) {
    /*fs.readFile(fp,'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }
       // console.log(data);
        
    })*/
       (function Pattern_Zero (array) {

        const first = Step1_PatternO(array);
      // steps 1 - print first column of every row except the last row output - 1 4
        const second = Step2_PatternO(array,first);
      // step  2 - print last row output - 7 8 9
        const third = Step3_PatternO(array,second);
      // step 3 -  print last column of every row except last row (reverse) - output 6 3
        const fourth = Step4_PatternO(array,third);
      // step 4 -  print first row except last column (reverse) - output 2 1   
        return reply.send(fourth)
     })(array); // prints o pattern in 2D balanced array

    //return { hello: 'world' }
}

module.exports = handler;


 
