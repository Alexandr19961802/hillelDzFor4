let n=Number(prompt())
for(let i=1;i<n;i++){
    let isPrime=true
    if(i<=1){
        isPrime=false
    }
    else {
        for(let j=2;j<i;j++){
            if(i%j===0){
                isPrime=false
            }
        }
    }
    if(isPrime){
        console.log(i+"Простое")

    }
    else{(console.log(i+"Не простое"))}
}

