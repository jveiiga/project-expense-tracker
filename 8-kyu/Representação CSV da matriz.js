// usando o método join()
function toCsvText(array) {

    let arr = array.join('\n')

    return arr
}
 console.log(toCsvText([[ 0, 1, 2, 3, 45], [ 10,11,12,13,14 ], [ 20,21,22,23,24 ],[ 30,31,32,33,34 ]]))

//usando o for in 
function toCsvTexts(array) {

    let res = ''

    for( let i in array ) {
        console.log(array[i])
        res += array[i] + '\n'
    }
    return res
}
console.log(toCsvTexts([[ 0, 1, 2, 3, 45], [ 10,11,12,13,14 ], [ 20,21,22,23,24 ],[ 30,31,32,33,34 ]]))

//usando o for 
function toCsvsTexts(array) {

    let res = ''

    for( let i = 0; i < array.length; i++ ) {

        res += array[i] + '\n'

    }
    return res
}
console.log(toCsvsTexts([[ 0, 1, 2, 3, 45], [ 10,11,12,13,14 ], [ 20,21,22,23,24 ],[ 30,31,32,33,34 ]]))