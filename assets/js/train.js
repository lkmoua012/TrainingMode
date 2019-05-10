// for every club card

// for every diamond card

// for every heart card

// for every spade card

var Spade1 = {
    color   :   'black',
    type    :   'ace',
    symbol  :   'spade',
    number  :   1,
    img     :   '<img src="./assets/img/ace_of_spades.png">'
}

var Spade2 = {
    color   :   'black',
    type    :   'two',
    symbol  :   'spade',
    number  :   2,
    img     :   '<img src="./assets/img/2_of_spades.png">'
}

var Spade3 = {
    color   :   'black',
    type    :   'three',
    symbol  :   'spade',
    number  :   3,
    img     :   '<img src="./assets/img/3_of_spades.png">'
}

var Spade4 = {
    color   :   'black',
    type    :   'four',
    symbol  :   'spade',
    number  :   4,
    img     :   '<img src="./assets/img/4_of_spades.png">'
}

var Spade5 = {
    color   :   'black',
    type    :   'five',
    symbol  :   'spade',
    number  :   5,
    img     :   '<img src="./assets/img/5_of_spades.png">'
}

var Spade6 = {
    color   :   'black',
    type    :   'six',
    symbol  :   'spade',
    number  :   6,
    img     :   '<img src="./assets/img/6_of_spades.png">'
}

var Spade7 = {
    color   :   'black',
    type    :   'seven',
    symbol  :   'spade',
    number  :   7,
    img     :   '<img src="./assets/img/7_of_spades.png">'
}

var Spade8 = {
    color   :   'black',
    type    :   'eight',
    symbol  :   'spade',
    number  :   8,
    img     :   '<img src="./assets/img/8_of_spades.png">'
}

var Spade9 = {
    color   :   'black',
    type    :   'nine',
    symbol  :   'spade',
    number  :   9,
    img     :   '<img src="./assets/img/9_of_spades.png">'
}

var Spade10 = {
    color   :   'black',
    type    :   'ten',
    symbol  :   'spade',
    number  :   10,
    img     :   '<img src="./assets/img/10_of_spades.png">'
}

var Spade11 = {
    color   :   'black',
    type    :   'jack',
    symbol  :   'spade',
    number  :   10,
    img     :   '<img src="./assets/img/jack_of_spades.png">'
}

var Spade12 = {
    color   :   'black',
    type    :   'queen',
    symbol  :   'spade',
    number  :   10,
    img     :   '<img src="./assets/img/queen_of_spades.png">'
}

var Spade13 = {
    color   :   'black',
    type    :   'king',
    symbol  :   'spade',
    number  :   10,
    img     :   '<img src="./assets/img/king_of_spades.png">'
}

//

var blackJoker = {
    color   :   'black',
    type    :   'joker',
    symbol  :   'any',
    number  :   0,
    img     :   '<img src="./assets/img/black_joker.png">'
}

var redJoker;

var playingDeck = [];

//

$(document).ready(function() {

$('#playArea').append(Spade1.img);
$('#playArea').append(Spade13.img);
$('#playArea').append(Spade12.img);
$('#playArea').append(Spade11.img);
$('#playArea').append(Spade10.img);
$('#playArea').append(Spade9.img);
$('#playArea').append(Spade8.img);


$('.pgp').click(pgpShuffle());

});

//

function bjShuffle(){

}

//

function bcShuffle(){

}

//

function tcpShuffle(){

}

//

function uthShuffle(){

}

//

function pgpShuffle(){

    // Check to see which parameters are selected.

    addCards()

    console.log(playingDeck);

}

function addCards(){

    for (i = 1; i <14; i++){

        playingDeck.push('Spade'+[i]);

    }

}