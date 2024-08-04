var user_input1 = document.querySelector("#user_queryfrom");
var user_input2 = document.querySelector("#user_queryto");
var user_query = document.querySelector("#user_query_sender");
var user_query_option1 = document.getElementById("country-currency");
var user_query_option2 = document.getElementById("country-currency1");
var user_show1 = document.querySelector("#option1");
var user_show2 = document.querySelector("#option2");
var desc1 = document.querySelector("#desc1");
var desc2 = document.querySelector("#desc2");

const jsonData = `{
    "ADA": {
        "code": "ADA",
        "value": 1.6697908426
    },
    "AED": {
        "code": "AED",
        "value": 3.6716604909
    },
    "AFN": {
        "code": "AFN",
        "value": 73.608721028
    },
    "ALL": {
        "code": "ALL",
        "value": 95.7906881082
    },
    "AMD": {
        "code": "AMD",
        "value": 403.1847410185
    },
    "ANG": {
        "code": "ANG",
        "value": 1.7833102091
    },
    "AOA": {
        "code": "AOA",
        "value": 827.8212449057
    },
    "ARB": {
        "code": "ARB",
        "value": 0.5318559326
    },
    "ARS": {
        "code": "ARS",
        "value": 836.5880472932
    },
    "AUD": {
        "code": "AUD",
        "value": 1.5255502463
    },
    "AVAX": {
        "code": "AVAX",
        "value": 0.0265533146
    },
    "AWG": {
        "code": "AWG",
        "value": 1.79
    },
    "AZN": {
        "code": "AZN",
        "value": 1.7
    },
    "BAM": {
        "code": "BAM",
        "value": 1.7326402038
    },
    "BBD": {
        "code": "BBD",
        "value": 2
    },
    "BDT": {
        "code": "BDT",
        "value": 109.4338140499
    },
    "BGN": {
        "code": "BGN",
        "value": 1.8019802803
    },
    "BHD": {
        "code": "BHD",
        "value": 0.376
    },
    "BIF": {
        "code": "BIF",
        "value": 2851.7086724282
    },
    "BMD": {
        "code": "BMD",
        "value": 1
    },
    "BNB": {
        "code": "BNB",
        "value": 0.0026350694
    },
    "BND": {
        "code": "BND",
        "value": 1.3430401373
    },
    "BOB": {
        "code": "BOB",
        "value": 6.9078912398
    },
    "BRL": {
        "code": "BRL",
        "value": 4.9356307243
    },
    "BSD": {
        "code": "BSD",
        "value": 1
    },
    "BTC": {
        "code": "BTC",
        "value": 1.92628e-5
    },
    "BTN": {
        "code": "BTN",
        "value": 82.9403684636
    },
    "BWP": {
        "code": "BWP",
        "value": 13.6599020681
    },
    "BYN": {
        "code": "BYN",
        "value": 3.2699712034
    },
    "BYR": {
        "code": "BYR",
        "value": 32699.687968293
    },
    "BZD": {
        "code": "BZD",
        "value": 2
    },
    "CAD": {
        "code": "CAD",
        "value": 1.3494501746
    },
    "CDF": {
        "code": "CDF",
        "value": 2657.375531667
    },
    "CHF": {
        "code": "CHF",
        "value": 0.8792101731
    },
    "CLF": {
        "code": "CLF",
        "value": 0.0257900028
    },
    "CLP": {
        "code": "CLP",
        "value": 968.6200716568
    },
    "CNY": {
        "code": "CNY",
        "value": 7.1764011343
    },
    "COP": {
        "code": "COP",
        "value": 3916.9298570485
    },
    "CRC": {
        "code": "CRC",
        "value": 515.3214850851
    },
    "CUC": {
        "code": "CUC",
        "value": 1
    },
    "CUP": {
        "code": "CUP",
        "value": 24
    },
    "CVE": {
        "code": "CVE",
        "value": 101.8981609054
    },
    "CZK": {
        "code": "CZK",
        "value": 23.3809929929
    },
    "DAI": {
        "code": "DAI",
        "value": 0.9994377643
    },
    "DJF": {
        "code": "DJF",
        "value": 177.721
    },
    "DKK": {
        "code": "DKK",
        "value": 6.8873807976
    },
    "DOP": {
        "code": "DOP",
        "value": 58.4977095272
    },
    "DOT": {
        "code": "DOT",
        "value": 0.1338089228
    },
    "DZD": {
        "code": "DZD",
        "value": 134.8496096039
    },
    "EGP": {
        "code": "EGP",
        "value": 30.8542148152
    },
    "ERN": {
        "code": "ERN",
        "value": 15
    },
    "ETB": {
        "code": "ETB",
        "value": 56.6035868985
    },
    "ETH": {
        "code": "ETH",
        "value": 0.0003361348
    },
    "EUR": {
        "code": "EUR",
        "value": 0.9240101663
    },
    "FJD": {
        "code": "FJD",
        "value": 2.2624804318
    },
    "FKP": {
        "code": "FKP",
        "value": 0.791346794
    },
    "GBP": {
        "code": "GBP",
        "value": 0.7912301425
    },
    "GEL": {
        "code": "GEL",
        "value": 2.6436504588
    },
    "GGP": {
        "code": "GGP",
        "value": 0.7913465426
    },
    "GHS": {
        "code": "GHS",
        "value": 12.4213114727
    },
    "GIP": {
        "code": "GIP",
        "value": 0.7913467373
    },
    "GMD": {
        "code": "GMD",
        "value": 58.6094281876
    },
    "GNF": {
        "code": "GNF",
        "value": 8553.4010191758
    },
    "GTQ": {
        "code": "GTQ",
        "value": 7.7900415552
    },
    "GYD": {
        "code": "GYD",
        "value": 208.8807666248
    },
    "HKD": {
        "code": "HKD",
        "value": 7.8173112296
    },
    "HNL": {
        "code": "HNL",
        "value": 24.6416527501
    },
    "HRK": {
        "code": "HRK",
        "value": 6.6981213245
    },
    "HTG": {
        "code": "HTG",
        "value": 133.4507253712
    },
    "HUF": {
        "code": "HUF",
        "value": 357.5174984861
    },
    "IDR": {
        "code": "IDR",
        "value": 15591.444555692
    },
    "ILS": {
        "code": "ILS",
        "value": 3.6666204241
    },
    "IMP": {
        "code": "IMP",
        "value": 0.7913463371
    },
    "INR": {
        "code": "INR",
        "value": 82.8841899169
    },
    "IQD": {
        "code": "IQD",
        "value": 1306.6718370658
    },
    "IRR": {
        "code": "IRR",
        "value": 41930.522301525
    },
    "ISK": {
        "code": "ISK",
        "value": 137.6355177158
    },
    "JEP": {
        "code": "JEP",
        "value": 0.7913469614
    },
    "JMD": {
        "code": "JMD",
        "value": 156.5134022828
    },
    "JOD": {
        "code": "JOD",
        "value": 0.71
    },
    "JPY": {
        "code": "JPY",
        "value": 150.320474377
    },
    "KES": {
        "code": "KES",
        "value": 145.9916405484
    },
    "KGS": {
        "code": "KGS",
        "value": 89.2314162257
    },
    "KHR": {
        "code": "KHR",
        "value": 4071.2268316067
    },
    "KMF": {
        "code": "KMF",
        "value": 454.7585307145
    },
    "KPW": {
        "code": "KPW",
        "value": 899.9762519129
    },
    "KRW": {
        "code": "KRW",
        "value": 1331.4213590537
    },
    "KWD": {
        "code": "KWD",
        "value": 0.3066200408
    },
    "KYD": {
        "code": "KYD",
        "value": 0.83333
    },
    "KZT": {
        "code": "KZT",
        "value": 448.4698547541
    },
    "LAK": {
        "code": "LAK",
        "value": 20843.925810917
    },
    "LBP": {
        "code": "LBP",
        "value": 89404.689939131
    },
    "LKR": {
        "code": "LKR",
        "value": 310.6238455423
    },
    "LRD": {
        "code": "LRD",
        "value": 190.3874022701
    },
    "LSL": {
        "code": "LSL",
        "value": 18.9553425033
    },
    "LTC": {
        "code": "LTC",
        "value": 0.0144944212
    },
    "LTL": {
        "code": "LTL",
        "value": 3.1911287097
    },
    "LVL": {
        "code": "LVL",
        "value": 0.6495378662
    },
    "LYD": {
        "code": "LYD",
        "value": 4.8391307148
    },
    "MAD": {
        "code": "MAD",
        "value": 10.0622716903
    },
    "MATIC": {
        "code": "MATIC",
        "value": 1.0507010771
    },
    "MDL": {
        "code": "MDL",
        "value": 17.8208034399
    },
    "MGA": {
        "code": "MGA",
        "value": 4540.6461192203
    },
    "MKD": {
        "code": "MKD",
        "value": 56.7964100564
    },
    "MMK": {
        "code": "MMK",
        "value": 2091.4977237748
    },
    "MNT": {
        "code": "MNT",
        "value": 3402.554028936
    },
    "MOP": {
        "code": "MOP",
        "value": 8.0423510324
    },
    "MRO": {
        "code": "MRO",
        "value": 356.999828
    },
    "MRU": {
        "code": "MRU",
        "value": 39.7972718183
    },
    "MUR": {
        "code": "MUR",
        "value": 45.6927260449
    },
    "MVR": {
        "code": "MVR",
        "value": 15.378212418
    },
    "MWK": {
        "code": "MWK",
        "value": 1680.5818939376
    },
    "MXN": {
        "code": "MXN",
        "value": 17.0416828667
    },
    "MYR": {
        "code": "MYR",
        "value": 4.7894906077
    },
    "MZN": {
        "code": "MZN",
        "value": 63.581886684
    },
    "NAD": {
        "code": "NAD",
        "value": 18.8562028869
    },
    "NGN": {
        "code": "NGN",
        "value": 1603.4215387921
    },
    "NIO": {
        "code": "NIO",
        "value": 36.7994704674
    },
    "NOK": {
        "code": "NOK",
        "value": 10.473941516
    },
    "NPR": {
        "code": "NPR",
        "value": 132.4102622648
    },
    "NZD": {
        "code": "NZD",
        "value": 1.6179703132
    },
    "OMR": {
        "code": "OMR",
        "value": 0.383420057
    },
    "OP": {
        "code": "OP",
        "value": 0.2655506465
    },
    "PAB": {
        "code": "PAB",
        "value": 0.9989301239
    },
    "PEN": {
        "code": "PEN",
        "value": 3.7947207437
    },
    "PGK": {
        "code": "PGK",
        "value": 3.7473805068
    },
    "PHP": {
        "code": "PHP",
        "value": 55.8990769455
    },
    "PKR": {
        "code": "PKR",
        "value": 279.3173683499
    },
    "PLN": {
        "code": "PLN",
        "value": 3.9880905374
    },
    "PYG": {
        "code": "PYG",
        "value": 7297.5181625649
    },
    "QAR": {
        "code": "QAR",
        "value": 3.6391805285
    },
    "RON": {
        "code": "RON",
        "value": 4.597340858
    },
    "RSD": {
        "code": "RSD",
        "value": 107.905169683
    },
    "RUB": {
        "code": "RUB",
        "value": 92.271312564
    },
    "RWF": {
        "code": "RWF",
        "value": 1272.5936458774
    },
    "SAR": {
        "code": "SAR",
        "value": 3.7440706823
    },
    "SBD": {
        "code": "SBD",
        "value": 8.3250252884
    },
    "SCR": {
        "code": "SCR",
        "value": 14.4944125185
    },
    "SDG": {
        "code": "SDG",
        "value": 601.5
    },
    "SEK": {
        "code": "SEK",
        "value": 10.3563715919
    },
    "SGD": {
        "code": "SGD",
        "value": 1.343720155
    },
    "SHP": {
        "code": "SHP",
        "value": 0.7912301388
    },
    "SLL": {
        "code": "SLL",
        "value": 22742.474629098
    },
    "SOL": {
        "code": "SOL",
        "value": 0.0094630896
    },
    "SOS": {
        "code": "SOS",
        "value": 571.4162015599
    },
    "SRD": {
        "code": "SRD",
        "value": 35.7675762024
    },
    "STD": {
        "code": "STD",
        "value": 22855.130443242
    },
    "STN": {
        "code": "STN",
        "value": 22.8551216361
    },
    "SVC": {
        "code": "SVC",
        "value": 8.75
    },
    "SYP": {
        "code": "SYP",
        "value": 13001.876239199
    },
    "SZL": {
        "code": "SZL",
        "value": 18.8846935778
    },
    "THB": {
        "code": "THB",
        "value": 35.8729668444
    },
    "TJS": {
        "code": "TJS",
        "value": 10.9501119108
    },
    "TMT": {
        "code": "TMT",
        "value": 3.5
    },
    "TND": {
        "code": "TND",
        "value": 3.1230004171
    },
    "TOP": {
        "code": "TOP",
        "value": 2.3386102713
    },
    "TRY": {
        "code": "TRY",
        "value": 31.0069243135
    },
    "TTD": {
        "code": "TTD",
        "value": 6.7656812955
    },
    "TWD": {
        "code": "TWD",
        "value": 31.4618762352
    },
    "TZS": {
        "code": "TZS",
        "value": 2538.1217603215
    },
    "UAH": {
        "code": "UAH",
        "value": 38.5348946115
    },
    "UGX": {
        "code": "UGX",
        "value": 3863.5534633904
    },
    "USD": {
        "code": "USD",
        "value": 1
    },
    "USDC": {
        "code": "USDC",
        "value": 1.0002612107
    },
    "USDT": {
        "code": "USDT",
        "value": 0.999295276
    },
    "UYU": {
        "code": "UYU",
        "value": 39.0343951507
    },
    "UZS": {
        "code": "UZS",
        "value": 12495.372932654
    },
    "VEF": {
        "code": "VEF",
        "value": 3621779.154646
    },
    "VES": {
        "code": "VES",
        "value": 36.2177747952
    },
    "VND": {
        "code": "VND",
        "value": 24480.325665924
    },
    "VUV": {
        "code": "VUV",
        "value": 120.055345425
    },
    "WST": {
        "code": "WST",
        "value": 2.7372474371
    },
    "XAF": {
        "code": "XAF",
        "value": 606.0679917807
    },
    "XAG": {
        "code": "XAG",
        "value": 0.0436649197
    },
    "XAU": {
        "code": "XAU",
        "value": 0.0004936556
    },
    "XCD": {
        "code": "XCD",
        "value": 2.7
    },
    "XDR": {
        "code": "XDR",
        "value": 0.7526701318
    },
    "XOF": {
        "code": "XOF",
        "value": 606.0680041558
    },
    "XPD": {
        "code": "XPD",
        "value": 0.0010578447
    },
    "XPF": {
        "code": "XPF",
        "value": 110.1728188803
    },
    "XPT": {
        "code": "XPT",
        "value": 0.001123571
    },
    "XRP": {
        "code": "XRP",
        "value": 1.8059203054
    },
    "YER": {
        "code": "YER",
        "value": 248.1928767948
    },
    "ZAR": {
        "code": "ZAR",
        "value": 18.897502444
    },
    "ZMK": {
        "code": "ZMK",
        "value": 9001.2
    },
    "ZMW": {
        "code": "ZMW",
        "value": 22.9331644689
    },
    "ZWL": {
        "code": "ZWL",
        "value": 361.9
    }
}`;
;

const data = JSON.parse(jsonData);
console.log(data);

user_query.addEventListener('click', function () {
    console.log(data);
    
    user_show1.innerText = user_query_option1.value;
    user_show2.innerText = user_query_option2.value;
    var a = user_query_option1.value;
    var b = user_query_option2.value;
    var temp1 = data[a].value;
    var temp2 = data[b].value;
    
    if (user_input1.value == "") {
        user_input1.value = 1;
        user_input2.value = temp2 / temp1;
    } else {
        user_input1.value = 1 * user_input1.value;
        user_input2.value = user_input1.value * (temp2 / temp1);

    }
    desc1.innerText = user_input1.value;
    desc2.innerText = user_input2.value;

});

