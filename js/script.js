const dropList = document.querySelectorAll(".drop-list select");
const getButton = document.querySelector("form button");
console.log(dropList.length)
for(let i = 0; i < dropList.length; i++){
    for(currency_code in country_list){
        let selected;
        if(i == 0){
            selected = currency_code == "USD"?"selected":"";
        } else if(i == 1){
            selected = currency_code == "GHS"?"selected":"";
        }
        //creating option tag with passing currency code as a text and value
        let optionTag = `<option value = "${currency_code}" ${selected}>${currency_code}</option>`;
        //inserting options tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend",optionTag);
    }
}

getButton.addEventListener("click", e =>{
    e.preventDefault //Prevent form from submitting
    getExchangeRate();
});

function getExchangeRate(){
    const amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }
}