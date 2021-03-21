const dicimal = 'dicimal';
const hectare = 'hectare';
const acre = 'acre';
const bigha = 'bigha';
const biswa = 'biswa';
const sqmtr = 'sqmtr';
const gaj = 'gaj';
const sqft = 'sqft';

const fixUpto = 10;

const baseUnit = {
    'hectare': {
        'acre': 2.47105,
        'bigha': 30.888125,
        'biswa': 617.7625,
        'sqmtr': 61776.250,
        'sqft': 664953.377375
    },
    'acre': {
        'hectare': 0.404686,
        'bigha': 12.5,
        'biswa': 250.00,
        'sqmtr': 25000.00,
        'sqft': 269097.50
    },
    'bigha': {
        'hectare': 0.032374901,
        'acre': 0.07999999,
        'biswa': 20,
        'sqmtr': 2000,
        'sqft': 21527.8
    },
    'biswa': {
        'hectare': 0.0016187451,
        'acre': 0.0040000001,
        'bigha': 0.05,
        'sqmtr': 100.00,
        'sqft': 1076.390
    },
    'sqmtr': {
        'hectare': 0.000016187,
        'acre': 0.0000399989,
        'bigha': 0.0004999861,
        'biswa': 0.0099997216,
        'sqft': 10.7639
    },
    'gaj': {
        'hectare': 0.008281,
        'acre': 0.0204627651,
        'bigha': 0.041405,
        'biswa': 0.8281,
        'sqmtr': 82.81,
        'sqft': 891.358559
    },
    'sqft': {
        'hectare': 0.00000150386,
        'acre': 0.0000037161,
        'bigha': 0.0000464514,
        'biswa': 0.0009290283,
        'sqmtr': 0.0929028313
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
    var gajEle = document.getElementById(gaj);

    if (source == hectare) {
        acreEle.value = (valNum * baseUnit[hectare][acre]).toFixed(fixUpto);
        bighaEle.value = (valNum * baseUnit[hectare][bigha]).toFixed(fixUpto);
        biswaEle.value = (valNum * baseUnit[hectare][biswa]).toFixed(fixUpto);
        sqftEle.value = (valNum * baseUnit[hectare][sqft]).toFixed(fixUpto);
        gajEle.value = (valNum * baseUnit[hectare][gaj]).toFixed(fixUpto);
        sqmtrEle.value = (valNum * baseUnit[hectare][sqmtr]).toFixed(fixUpto);
    }

    if (source == acre) {
        hectareEle.value = (valNum * baseUnit[acre][hectare]).toFixed(fixUpto);
        bighaEle.value = (valNum * baseUnit[acre][bigha]).toFixed(fixUpto);
        biswaEle.value = (valNum * baseUnit[acre][biswa]).toFixed(fixUpto);
        sqmtrEle.value = (valNum * baseUnit[acre][sqmtr]).toFixed(fixUpto);
        gajEle.value = (valNum * baseUnit[acre][gaj]).toFixed(fixUpto);
        sqftEle.value = (valNum * baseUnit[acre][sqft]).toFixed(fixUpto);
    }

    if (source == bigha) {
        hectareEle.value = (valNum * baseUnit[bigha][hectare]).toFixed(fixUpto);
        acreEle.value = (valNum * baseUnit[bigha][acre]).toFixed(fixUpto);
        biswaEle.value = (valNum * baseUnit[bigha][biswa]).toFixed(fixUpto);
        sqmtrEle.value = (valNum * baseUnit[bigha][sqmtr]).toFixed(fixUpto);
        gajEle.value = (valNum * baseUnit[bigha][gaj]).toFixed(fixUpto);
        sqftEle.value = (valNum * baseUnit[bigha][sqft]).toFixed(fixUpto);
    }

    if (source == biswa) {
        hectareEle.value = (valNum * baseUnit[biswa][hectare]).toFixed(fixUpto);
        acreEle.value = (valNum * baseUnit[biswa][acre]).toFixed(fixUpto);
        bighaEle.value = (valNum * baseUnit[biswa][bigha]).toFixed(fixUpto);
        sqmtrEle.value = (valNum * baseUnit[biswa][sqmtr]).toFixed(fixUpto);
        gajEle.value = (valNum * baseUnit[biswa][gaj]).toFixed(fixUpto);
        sqftEle.value = (valNum * baseUnit[biswa][sqft]).toFixed(fixUpto);
    }

    if (source == sqmtr) {
        hectareEle.value = (valNum * baseUnit[sqmtr][hectare]).toFixed(fixUpto);
        acreEle.value = (valNum * baseUnit[sqmtr][acre]).toFixed(fixUpto);
        bighaEle.value = (valNum * baseUnit[sqmtr][bigha]).toFixed(fixUpto);
        biswaEle.value = (valNum * baseUnit[sqmtr][biswa]).toFixed(fixUpto);
        gajEle.value = (valNum * baseUnit[biswa][gaj]).toFixed(fixUpto);
        sqftEle.value = (valNum * baseUnit[sqmtr][sqft]).toFixed(fixUpto);
    }
    if (source == gaj) {
        hectareEle.value = (valNum * baseUnit[gaj][hectare]).toFixed(fixUpto);
        acreEle.value = (valNum * baseUnit[gaj][acre]).toFixed(fixUpto);
        bighaEle.value = (valNum * baseUnit[gaj][bigha]).toFixed(fixUpto);
        biswaEle.value = (valNum * baseUnit[gaj][biswa]).toFixed(fixUpto);
        sqmtrEle.value = (valNum * baseUnit[gaj][sqmtr]).toFixed(fixUpto);
        sqftEle.value = (valNum * baseUnit[gaj][sqft]).toFixed(fixUpto);
    }

    if (source == sqft) {
        hectareEle.value = (valNum * baseUnit[sqft][hectare]).toFixed(fixUpto);
        acreEle.value = (valNum * baseUnit[sqft][acre]).toFixed(fixUpto);
        bighaEle.value = (valNum * baseUnit[sqft][bigha]).toFixed(fixUpto);
        biswaEle.value = (valNum * baseUnit[sqft][biswa]).toFixed(fixUpto);
        sqmtrEle.value = (valNum * baseUnit[sqft][sqmtr]).toFixed(fixUpto);
    }

}