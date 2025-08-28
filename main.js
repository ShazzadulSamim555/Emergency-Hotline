const icons = document.getElementsByClassName("heart-icon");
// console.log(icons);
// console.log(typeof(icons));  object
for (let i = 0; i < icons.length; i++) {
  innertextt("heart-count");
  // console.log(i);
  // console.log(icons[i]);
  icons[i].addEventListener("click", function (event) {
    let innerHeart = innertextt("heart-count");
    let newInnerHeart = parseInt(innerHeart) + 1;
    document.getElementById("heart-count").innerText = newInnerHeart;
  });
}

//call btn
const btnCall = document.getElementsByClassName("btn-call");
for (let i = 0; i < btnCall.length; i++) {
  btnCall[i].addEventListener("click", function (event) {
    console.log(event)
    // const phoneNum= document.querySelector('.phoneNum').innerText;
    // const card = event.target.closest(".flex.flex-col");
    const card = event.target.parentElement;
    const actualparent = card.parentElement;
    const phoneNum= actualparent.querySelector('.phoneNum').innerText;
    
 console.log(phoneNum,'hhhh');
    const innerCoin = innertextt("coin-count");
    let innerCoinInt = parseInt(innerCoin);
    if (innerCoinInt >= 20) {
      alert(`Calling ${phoneNum}`);
      let debitCoin = innerCoinInt - 20;
      document.getElementById("coin-count").innerText = debitCoin;
    } else {
      alert("Insufficient Balance");
    }
  });
}
