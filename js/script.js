const dicimal = 'dicimal';
const hectare = 'hectare';
const acre = 'acre';
const bigha = 'bigha';
const biswa = 'biswa';
const sqft = 'sqft';
const sqmtr = 'sqmtr';

const fixUpto = 6;

const baseUnit = {
    'hectare': {
        'acre': 2.47105,
        'bigha': 5,
        'biswa': 100,
        'sqft' : 107639,
        'sqmtr' : 10000,
    },
    'acre': {
        'hectare': 0.404686,
        'bigha': 1.618744,
        'biswa': 32.37488
    },
    'bigha' : {
        'hectare': '0.25',
        'acre': '1.618744',
        'biswa': '32.37488'
    }
};


function unitConverter(source, valNum) {
    valNum = parseFloat(valNum);
    var hectareEle = document.getElementById(hectare);
    var acreEle = document.getElementById(acre);
    var bighaEle = document.getElementById(bigha);
    var biswaEle = document.getElementById(biswa);
    var sqftEle = document.getElementById(sqft);
    var sqmtrEle = document.getElementById(sqmtr);
    var inputMiles = document.getElementById("inputMiles");

    if (source == hectare) {
        acreEle.value = (valNum * baseUnit[hectare][acre]).toFixed(fixUpto);
        bighaEle.value = (valNum * baseUnit[hectare][bigha]).toFixed(fixUpto);
        biswaEle.value = (valNum * baseUnit[hectare][biswa]).toFixed(fixUpto);
        sqftEle.value = (valNum * baseUnit[hectare][sqft]).toFixed(fixUpto);
        sqmtrEle.value = (valNum * baseUnit[hectare][sqmtr]).toFixed(fixUpto);
    }

    if (source == acre) {
        hectareEle.value = (valNum * baseUnit[acre][hectare]).toFixed(fixUpto);
        bighaEle.value = (valNum * baseUnit[acre][bigha]).toFixed(fixUpto);
        biswaEle.value = (valNum * baseUnit[acre][biswa]).toFixed(fixUpto);
    }

    if (source == bigha) {
        hectareEle.value = (valNum / baseUnit[hectare]).toFixed(2);
        acreEle.value = (valNum / baseUnit[acre]).toFixed(2);
        biswaEle.value = (valNum * baseUnit[biswa]).toFixed(2);
    }

    if (source == biswa) {
        hectareEle.value = (valNum / baseUnit[hectare]).toFixed(2);
        acreEle.value = (valNum / baseUnit[acre]).toFixed(2);
        bighaEle.value = (valNum * baseUnit[bigha]).toFixed(2);
    }

    if (source == "inputYards") {
        inputFeet.value = (valNum * 3).toFixed();
        inputMeters.value = (valNum / 1.0936).toFixed(2);
        inputInches.value = (valNum * 36).toFixed();
        inputcm.value = (valNum / 0.010936).toFixed();
        inputKilometers.value = (valNum / 1093.6).toFixed(5);
        inputMiles.value = (valNum * 0.00056818).toFixed(5);
    }

    if (source == "inputKilometers") {
        inputFeet.value = (valNum * 3280.8).toFixed();
        inputMeters.value = (valNum * 1000).toFixed();
        inputInches.value = (valNum * 39370).toFixed();
        inputcm.value = (valNum * 100000).toFixed();
        inputYards.value = (valNum * 1093.6).toFixed();
        inputMiles.value = (valNum * 0.62137).toFixed(2);
    }

    if (source == "inputMiles") {
        inputFeet.value = (valNum * 5280).toFixed();
        inputMeters.value = (valNum / 0.00062137).toFixed();
        inputInches.value = (valNum * 63360).toFixed();
        inputcm.value = (valNum / 0.0000062137).toFixed();
        inputYards.value = (valNum * 1760).toFixed();
        inputKilometers.value = (valNum / 0.62137).toFixed(2);
    }
}