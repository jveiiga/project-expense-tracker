//usando regex 
function replaceDots(str) {

    let res = str.replace( /[.]/g, '-' )

    return res
}
console.log(replaceDots("one.two.three"))

//usando loop for 
function replaceDot(str) {

    let ans = ''

    for( let i = 0; i < str.length; i++ ) {
        ans += str[i] !== '.' ? str[i]: '-'
    }
    return ans
}
console.log(replaceDot("one.two.three"))



