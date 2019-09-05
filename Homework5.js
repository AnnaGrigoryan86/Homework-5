/* 1. Write a function, which will receive a number between 0 to 999,999  and spell out that number in English. */

obj = {
            0: "zero",
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
            10: "ten",
            11: "eleven",
            12: "twelve",
            13: "thirteen",
            14: "fourteen",
            15: "fifteen",
            16: "sixteen",
            17: "seventeen",
            18: "eighteen",
            19: "nineteen",
            20: "twenty",
            30: "thirty",
            40: "forty",
            50: "fifty",
            60: "sixty",
            70: "seventy",
            80: "eighty",
            90: "ninety",
            100: "hundred",
            1000: "thousand",
        }
        function numbersToWord(num) {
            let unit,
                dec,
                hund,
                spell = "";
            if(num < 1000) {
                if((num >= 0 && num <= 20) || (num % 10 === 0 && num < 100)) {
                    spell = obj[num];
                }
            
                if(num > 20 && num < 100 && !(num % 10 === 0 && num < 100)) {
                    unit = num % 10;
                    dec = num - unit;
                    spell = obj[dec] + " " + obj[unit];
                }
            
                if(num >= 100 && num < 999) {
                    dec = num % 100;
                    hund = Math.floor(num / 100);
                    if(num % 100 === 0) {
                        spell = obj[hund] + " " + obj[100];
                    } else spell = obj[hund] + " " + obj[100] + " " + numbersToWord(dec);
                }   
            } else spell = numbersToWord(Math.floor(num / 1000)) + " " + obj[1000] + " " + numbersToWord(num % 1000);
                return spell;
        }
        
        
        console.log(numbersToWord(5));
        console.log(numbersToWord(25));
        console.log(numbersToWord(504));
        console.log(numbersToWord(9003));
        console.log(numbersToWord(69203));
        console.log(numbersToWord(710520));

/* 2. Write a JavaScript function to get all possible subsets of length 3 of the given array. Assume that all elements in the array are unique. */

function subsetsOfArr(arr) {
    if (arr.length <= 3)
    return arr;
            
    let arrBig = [];
           while(arr.length > 3) {

          for(let i = 1; i < arr.length - 1; i++) {
              
              
              for(let j = 2; j < arr.length; j++) {
                  arrNew =[arr[0]];
                  arrNew.push(arr[i]);
                  arrNew.push(arr[j]);
                  arrBig.push(arrNew);
                  
        }
            arr.shift(arr[0]);

            
        }
            
        }
    return arrBig;
}
    
console.log(subsetsOfArr([1, 2, 3, 4, 5]));
console.log(subsetsOfArr([1, 2]));
console.log(subsetsOfArr([1]));

/* 3. Given a word and a list of possible anagrams, select the correct sublist. */

function posibleAnagram(str, arr) {
            let arrRes = [];
            arr.forEach(function(item) {
                let newStr = '';
                if(item.length === str.length) {
                    for(let i = 0; i < item.length; i++) {
                        if(!(str.includes(item[i]))) {
                          break;  
                        } newStr+=item[i];
                    }
                        if(newStr.length !== 0)
                        arrRes.push(newStr);
                }
            });
            return arrRes;
        }
        console.log(posibleAnagram('listen', ['enlists', 'google', 'inlets', 'banana']));
        console.log(posibleAnagram('pencil', ['licnep', 'circular', 'pupil', 'nilcpe', 'leppnec']));
        console.log(posibleAnagram('pen', ['licnep', 'circular', 'pupil', 'nilcpe', 'leppnec']));

/* 4. Write a function, which receives an array as an argument which elements arrays of numbers. Find biggest negative number of each array. Return product of that numbers.If there is not any negative number in an array, ignore that one. Check that items of the given array are arrays. */

function powMaxNegative(arr=[]) {

      let maxNegativeElem = arr.map(function(item){
          if(Array.isArray(item)) {
             let res = item.filter(i => i < 0 );
              return res;
            } else {
               return "Not Array";             
          }
      } );
        let negArr = maxNegativeElem.map(arrMax)
            return negArr.reduce(function(pow, currI){
                if(negArr.every(elem => elem ===1)){
                    return "No negative";
            } else if(negArr.every(elem => typeof elem !== "number")) {
                return "Invalid argument";
                    } else return pow * currI;
            })
        }
    let arrMax = function(arrx = []) {
        let max;
        if(arrx.length === 0) {
            max = 1;
        } else {
          for(let j = 0; j < arrx.length-1; j++) {
            if(arrx[j] > arrx[j+1]) {
                max = arrx[j];
            } else {
                max = arrx[j+1];
            };
        }
    }
	return max;
};
  
console.log(powMaxNegative([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]));
console.log(powMaxNegative([[3, 4], [11, 0], [5, 6, 7, 8]]));
console.log(powMaxNegative([1, 2, 3]));
