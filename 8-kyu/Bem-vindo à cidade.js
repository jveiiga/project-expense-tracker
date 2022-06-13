//usando loop for e método trimEnd()
function sayHello( name, city, state ) {

    let res = ''
    
    for( let i = 0; i < name.length; i++ ) {

        if( name[i] !== ','  ) {
            
        res += name[i] + ' '
       
        }
    }

    return `Hello, ${res.trimEnd()}! Welcome to ${city}, ${state}!`

  }
  console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'))
  console.log(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'))
  console.log(sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'))
