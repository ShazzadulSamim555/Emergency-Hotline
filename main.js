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
    console.log(event);
    // const phoneNum= document.querySelector('.phoneNum').innerText;
    // const card = event.target.closest(".flex.flex-col");

    //find phone number
    const card = event.target.parentElement;
    const actualparent = card.parentElement;
    const phoneNum = actualparent.querySelector(".phoneNum").innerText;

    //find title name
    const card2 = event.target.parentElement;
    const actualparent2 = card2.parentElement;
    const title = actualparent2.querySelector(".title").innerText;

    //Time
    const time = new Date().toLocaleTimeString();
    console.log(time);

    console.log(phoneNum, "hhhh");
    const innerCoin = innertextt("coin-count");
    let innerCoinInt = parseInt(innerCoin);
    if (innerCoinInt >= 20) {
      alert(`📞 Calling ${title} ${phoneNum}`);
      let debitCoin = innerCoinInt - 20;
      document.getElementById("coin-count").innerText = debitCoin;

      const historyContainer = document.getElementById("history-container");
      let div = document.createElement("div");
      div.innerHTML = `<div class="bg-blue-50 p-3 md:p-5 rounded-xl flex justify-between items-center">
                        <div>
                            <h3 class="font-bold text-sm md:text-base">${title}</h3>
                            <p class="text-gray-700 text-sm md:text-base">${phoneNum}</p>
                        </div>
                        <p class="text-xs md:text-sm text-gray-700">${time}</p>
                    </div>`;

      historyContainer.append(div);
    } else {
      alert("Insufficient Balance");
    }
  });
}

const clearBtn=document.getElementById('clear-btn').addEventListener('click', function (event){
   document.getElementById('history-container').innerText="";
})
