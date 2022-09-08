let tomb = []
for (let i = 0; i < 10; i++) {
    tomb.push (Math.random() *100)
    tomb.sort();
    
} 
let macskatomb=[]
for (let m = 0; m < 20; m++) {
    macskatomb[m] = {
    nev: `Cirmos ${m}`,
    eletkor: Math.round(2+Math.random()*8)
    
    }
    
}
for (let k = 0; k < macskatomb.length; k++) {
    if(macskatomb[k].eletkor==2){
        console.log(macskatomb[k])
    }
}

setInterval(()=> console.log("Hurrá"),2000)