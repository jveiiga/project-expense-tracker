//menor número usando loop for
function minimum(list){
    
  let min = list[0]

  for( let i = 1; i < list.length; i++ ) {

    if( list[i] < min ) {
        min = list[i]
    }

  }

  return min

}
console.log(minimum([-52, 56, 30, 29, -54, 0, -110]))
console.log(minimum([42, 54, 65, 87, 0]))
//maior número usando loop for
function maximum(list){
    
    let max = list[0]

    for( let i = 1; i < list.length; i++ ) {

        if( list[i] > max ) {
            max = list[i]
        }
    }

    return max

}
console.log(maximum([4,6,2,1,9,63,-134,566]))
console.log(maximum([5]))
//menor número usando Math.min
function mini(list){
    
    return Math.min(...list) 
  
  }
  console.log(mini([-52, 56, 30, 29, -54, 0, -110]))
  console.log(mini([42, 54, 65, 87, 0]))
//maior número usando Math.max
  function maxi(list){
    
    return Math.max(...list)

}
console.log(maxi([4,6,2,1,9,63,-134,566]))
console.log(maxi([5]))


