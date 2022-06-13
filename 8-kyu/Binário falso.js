//usando o loop for 
function fakeBin(bin){

    let res = ''

    for( let i = 0; i < bin.length; i++ ) {

        if( bin[i] <= '4' ){

        res += '0'
        
        }else if( bin[i] >= '5') {

        res += '1'

        }
    }

    return res

  }
  console.log(fakeBin('45385593107843568'))

  //usando o método split, map e join 
  function fakBin(x){

  let bin = x.split('').map(num => num < 5 ? 0 : 1).join('')

  return bin

  }
  console.log(fakBin('45385593107843568'))