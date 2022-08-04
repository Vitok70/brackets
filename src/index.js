module.exports = function check(str, config) {

let stack = [];
let trigger = 0; // контроль внесения закрывающей скобки в stack.
let even = 0;  // контрольчетности символа строки в случае равенства скобокэлемента массива

if (str.length % 2 !== 0) { return false;}

else { 
        for (i=0; i<str.length; i++){ //перебор символов строки str
          for (j=0; j<config.length; j++){ //перебор элементов массива
              if (str[i] === config[j][0]) {
                if (config[j][0] !== config[j][1]) {stack.push(str[i]); j = config.length;}
                else if (even % 2 == 0) {stack.push(str[i]); j = config.length; even=1}  
                    else if (stack[stack.length-1] === config[j][0]){
                              stack.pop(stack[stack.length-1]);
                              j = config.length; even = 0;
                            } 
              }
              else if (str[i] === config[j][1]){
                    if (stack[stack.length-1] === config[j][0]){
                        stack.pop(stack[stack.length-1]);
                        j = config.length;
                      } 
                      else {j = config.length; i = str.length; trigger = 1; }
                  }
          }
        }
     
        if (trigger == 1 || stack.length !== 0) { return false; } 
        else { return true;}
     } 
}
