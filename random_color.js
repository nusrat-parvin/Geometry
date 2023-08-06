//function generate random color
function getColor(colorId){
      const randomNumber = Math.floor(Math.random() * 16777215);
      const randomColor = '#' + randomNumber.toString(16);
      colorId.style.backgroundColor = randomColor;
}

//function for access the body where color will be added
function getElementField(elementId){
      const cardBody = document.getElementById(elementId);
      return cardBody;
}

//CARD ONE
document.getElementById('card_one').addEventListener('mouseover' , function(){
      const cardOneBody = getElementField('card_one_color');
      getColor(cardOneBody);
});

//CARD TWO
document.getElementById('card_two').addEventListener('mouseover' , function(){
      const cardTwoBody = getElementField('card_two_color');
      getColor(cardTwoBody);
});

//CARD THREE
document.getElementById('card_three').addEventListener('mouseover' , function(){
      const cardThreeBody = getElementField('card_three_color');
      getColor(cardThreeBody);
});

//CARD FOUR
document.getElementById('card_four').addEventListener('mouseover' , function(){
      const cardFourBody = getElementField('card_four_color');
      getColor(cardFourBody);
});

//CARD FIVE
document.getElementById('card_five').addEventListener('mouseover' , function(){
      const cardFiveBody = getElementField('card_five_color');
      getColor(cardFiveBody);
});

//CARD SIX
document.getElementById('card_six').addEventListener('mouseover' , function(){
      const cardSixBody = getElementField('card_six_color');
      getColor(cardSixBody);
})