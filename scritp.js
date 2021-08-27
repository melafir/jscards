function arraysort(arr){
    for (let i = arr.length-1; i>0; i--){
        let j = Math.floor(Math.random()*(i + 1)); 
        let temp =arr[i];
        arr[i]=arr[j]
        arr[j]=temp;
    }
}
 function arrays(){
    let arr = [];
    for( let i = 0; i<51;i++){
        arr.push(i+1);
    }
    return arr;
}
let a = arrays()
arraysort(a)
let deck= {
    "step":0,
    "suit":['\u2660','\u2663',"\u2665","\u2666"],
    "card":['A',2,3,4,5,6,7,8,9,10,'J','Q','K']
}
let suit = a[deck.step]%4;
let card= a[deck.step]%13;
let suit2 = a[deck.step+1]%4;
let card2= a[deck.step+1]%13;
let divCard = document.getElementById("card");
let span = document.createElement("div");
span.setAttribute('id','span');
if(suit==0||suit==1){
    span.classList.add('black')
}else{
    span.classList.add('red')
}
divCard.append(span);

let span2 = document.createElement("div");
divCard.append(span2);
span2.setAttribute('id','span2')
span.innerHTML = `${deck.card[card]} ${deck.suit[suit]}`;
span2.innerHTML = `${deck.card[card2]} ${deck.suit[suit2]}`;
