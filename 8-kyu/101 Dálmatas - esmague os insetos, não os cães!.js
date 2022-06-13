function howManyDalmatians(number){

    let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    
    return number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number == 101 ? dogs[3] : dogs[2];
  
  }
  console.log(howManyDalmatians(26))
  console.log(howManyDalmatians(8))
  console.log(howManyDalmatians(14))
  console.log(howManyDalmatians(80))
  console.log(howManyDalmatians(100))
  console.log(howManyDalmatians(101))

//usando if else 

  function howManydalmatiansIf(number){
    let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

    if( number <= 10 ) {
        return dogs[0]
    }else if( number <= 50 ) {
        return dogs[1]
    }else if( number <= 100) {
        return dogs[2]
    }else if( number == 101){
        return dogs[3]
    }
  }
  console.log(howManyDalmatians(26))
  console.log(howManyDalmatians(8))
  console.log(howManyDalmatians(14))
  console.log(howManyDalmatians(80))
  console.log(howManyDalmatians(100))
  console.log(howManyDalmatians(101))



  


