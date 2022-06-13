//usando for e if

function noSpace(str){
    
    let result = ''

    for( let i = 0; i < str.length; i++ ) {
        if( str[i] !== ' ') {
            result += str[i]
        }
    }
    return result
  }
  console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))
  console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'))
  console.log(noSpace('8aaaaa dddd r     '))

  //usando método replaceAll()

  function noSpaces(str) {

    let result = str.replaceAll(' ', '')

    return result

  }
  console.log(noSpaces('8 j 8   mBliB8g  imjB8B8  jl  B'))
  console.log(noSpaces('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'))
  console.log(noSpaces('8aaaaa dddd r     ')) 

   //usando método split() e join() 

  function notSpaces(str) {

    let result = str. split(' ').join('')

    return result

  }
  console.log(notSpaces('8 j 8   mBliB8g  imjB8B8  jl  B'))
  console.log(notSpaces('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'))
  console.log(notSpaces('8aaaaa dddd r     '))



