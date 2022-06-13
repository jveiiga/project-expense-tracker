// usando o loop for 
function doubleChar(str) {

    let res = ''

    for(let i = 0; i < str.length; i++ ) {

      res += str[i] + str[i]

    }

    return res

  }
 console.log(doubleChar("abcd"))
 console.log(doubleChar("Adidas"))
 console.log(doubleChar("1337"))
 console.log(doubleChar("illuminati"))
 console.log(doubleChar("123456"))
 console.log(doubleChar("%^&*("))

//usando método split, map e join 
 function doubleChars(str) {

    return str.split('').map(function(s){
    
    return s + s

    })
    
    .join('')

}
 console.log(doubleChars("abcd"))
 console.log(doubleChars("Adidas"))
 console.log(doubleChars("1337"))
 console.log(doubleChars("illuminati"))
 console.log(doubleChars("123456"))
 console.log(doubleChars("%^&*("))



