var date = new Date();
var month = date.getUTCMonth();
var day = date.getUTCDate();
var year = date.getUTCFullYear();

var user_location = document.querySelector("#location");
var user_country = document.querySelector("#country");
var user_date = document.querySelector("#date");
var user_temp = document.querySelector("#temp_value");
var user_day_desc = document.querySelector("#desc");
var user_waether_icon = document.querySelector("#icons_main");
var user_query = document.querySelector("#input_city");
var user_query_search = document.querySelector("#search_query_runner");
var temp_min = document.querySelector("#temp_min");
var temp_max = document.querySelector("#temp_max");
var humidity = document.querySelector("#humidity");
var wind = document.querySelector("#wind");
var sun_set = document.querySelector("#sun_set");
var sun_rise = document.querySelector("#sun_rise");
user_date.innerText = day + "-" + month + "-" + year;

user_query_search.addEventListener('click', function () {
    console.log(user_query.value);
    const api = "Your api id from openwaether map"; //paste your own api id
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${user_query.value}&appid=${api}&units=metric`;

    // Make a GET request

    async function weather() {
        const response = await fetch(apiUrl);
        var data = await response.json();
        user_location.innerText = data.name;
        user_country.innerText=getCountryFullName(data.sys.country);
        user_temp.innerText = Math.floor(data.main.temp);
        user_day_desc.innerText = data.weather[0].main;
        user_waether_icon.setAttribute("src", "icons/" + data.weather[0].icon + ".svg");
        temp_min.innerText=data.main.temp_min;
        temp_max.innerText=data.main.temp_max;
        humidity.innerText=data.main.humidity;
        wind.innerText=data.wind.speed;
        sun_set.innerText=convertTimestamp(data.sys.sunset);
        sun_rise.innerText=convertTimestamp(data.sys.sunrise);
        console.log(data);
    }
    weather();
    user_query.value="";
});

function convertTimestamp(timestamp) {
    const d = new Date(timestamp * 1000); // Convert the passed timestamp to milliseconds
    const yyyy = d.getFullYear();
    const mm = ('0' + (d.getMonth() + 1)).slice(-2); // Months are zero-based. Add leading zero.
    const dd = ('0' + d.getDate()).slice(-2); // Add leading zero.
    const hh = d.getHours();
    const h = hh;
    const min = ('0' + d.getMinutes()).slice(-2); // Add leading zero.
    const ampm = hh >= 12 ? 'PM' : 'AM'; // Determine AM/PM.
  
    // Format: yyyy-mm-dd, h:mm AM/PM
    const formattedDate = `${dd}-${mm}-${yyyy} , ${h}:${min} ${ampm}`;
    return formattedDate;
  };
  
  function getCountryFullName(shortCode) {
    const countryCodesToNames = {
      AF: 'Afghanistan',
      AL: 'Albania',
      DZ: 'Algeria',
      AD: 'Andorra',
      AO: 'Angola',
      AG: 'Antigua and Barbuda',
      AR: 'Argentina',
      AM: 'Armenia',
      AU: 'Australia',
      AT: 'Austria',
      AZ: 'Azerbaijan',
      BS: 'Bahamas',
      BH: 'Bahrain',
      BD: 'Bangladesh',
      BB: 'Barbados',
      BY: 'Belarus',
      BE: 'Belgium',
      BZ: 'Belize',
      BJ: 'Benin',
      BT: 'Bhutan',
      BO: 'Bolivia',
      BA: 'Bosnia and Herzegovina',
      BW: 'Botswana',
      BR: 'Brazil',
      BN: 'Brunei',
      BG: 'Bulgaria',
      BF: 'Burkina Faso',
      BI: 'Burundi',
      KH: 'Cambodia',
      CM: 'Cameroon',
      CA: 'Canada',
      CV: 'Cape Verde',
      CF: 'Central African Republic',
      TD: 'Chad',
      CL: 'Chile',
      CN: 'China',
      CO: 'Colombia',
      KM: 'Comoros',
      CG: 'Congo (Brazzaville)',
      CD: 'Congo (Kinshasa)',
      CR: 'Costa Rica',
      HR: 'Croatia',
      CU: 'Cuba',
      CY: 'Cyprus',
      CZ: 'Czech Republic',
      DK: 'Denmark',
      DJ: 'Djibouti',
      DM: 'Dominica',
      DO: 'Dominican Republic',
      EC: 'Ecuador',
      EG: 'Egypt',
      SV: 'El Salvador',
      GQ: 'Equatorial Guinea',
      ER: 'Eritrea',
      EE: 'Estonia',
      ET: 'Ethiopia',
      FJ: 'Fiji',
      FI: 'Finland',
      FR: 'France',
      GA: 'Gabon',
      GM: 'Gambia',
      GE: 'Georgia',
      DE: 'Germany',
      GH: 'Ghana',
      GR: 'Greece',
      GD: 'Grenada',
      GT: 'Guatemala',
      GN: 'Guinea',
      GW: 'Guinea-Bissau',
      GY: 'Guyana',
      HT: 'Haiti',
      HN: 'Honduras',
      HU: 'Hungary',
      IS: 'Iceland',
      IN: 'India',
      ID: 'Indonesia',
      IR: 'Iran',
      IQ: 'Iraq',
      IE: 'Ireland',
      IL: 'Israel',
      IT: 'Italy',
      CI: 'Ivory Coast',
      JM: 'Jamaica',
      JP: 'Japan',
      JO: 'Jordan',
      KZ: 'Kazakhstan',
      KE: 'Kenya',
      KI: 'Kiribati',
      KW: 'Kuwait',
      KG: 'Kyrgyzstan',
      LA: 'Laos',
      LV: 'Latvia',
      LB: 'Lebanon',
      LS: 'Lesotho',
      LR: 'Liberia',
      LY: 'Libya',
      LI: 'Liechtenstein',
      LT: 'Lithuania',
      LU: 'Luxembourg',
      MK: 'Macedonia',
      MG: 'Madagascar',
      MW: 'Malawi',
      MY: 'Malaysia',
      MV: 'Maldives',
      ML: 'Mali',
      MT: 'Malta',
      MH: 'Marshall Islands',
      MR: 'Mauritania',
      MU: 'Mauritius',
      MX: 'Mexico',
      FM: 'Micronesia',
      MD: 'Moldova',
      MC: 'Monaco',
      MN: 'Mongolia',
      ME: 'Montenegro',
      MA: 'Morocco',
      MZ: 'Mozambique',
      MM: 'Myanmar',
      NA: 'Namibia',
      NR: 'Nauru',
      NP: 'Nepal',
      NL: 'Netherlands',
      NZ: 'New Zealand',
      NI: 'Nicaragua',
      NE: 'Niger',
      NG: 'Nigeria',
      KP: 'North Korea',
      NO: 'Norway',
      OM: 'Oman',
      PK: 'Pakistan',
      PW: 'Palau',
      PA: 'Panama',
      PE: 'Peru',
      PH: 'Philippines',
      PL: 'Poland',
      PT: 'Portugal',
      QA: 'Qatar',
      RO: 'Romania',
      RU: 'Russia',
      RW: 'Rwanda',
      KN: 'Saint Kitts and Nevis',
      LC: 'Saint Lucia',
      VC: 'Saint Vincent and the Grenadines',
      WS: 'Samoa',
      SM: 'San Marino',
      ST: 'Sao Tome and Principe',
      SA: 'Saudi Arabia',
      SN: 'Senegal',
      RS: 'Serbia',
      SC: 'Seychelles',
      SL: 'Sierra Leone',
      SG: 'Singapore',
      SK: 'Slovakia',
      SI: 'Slovenia',
      SB: 'Solomon Islands',
      SO: 'Somalia',
      ZA: 'South Africa',
      KR: 'South Korea',
      SS: 'South Sudan',
      ES: 'Spain',
      LK: 'Sri Lanka',
      SD: 'Sudan',
      SR: 'Suriname',
      SZ: 'Swaziland',
      SE: 'Sweden',
      CH: 'Switzerland',
      SY: 'Syria',
      TW: 'Taiwan',
      TJ: 'Tajikistan',
      TZ: 'Tanzania',
      TH: 'Thailand',
      TL: 'Timor-Leste',
      TG: 'Togo',
      TO: 'Tonga',
      TT: 'Trinidad and Tobago',
      TN: 'Tunisia',
      TR: 'Turkey',
      TM: 'Turkmenistan',
      TV: 'Tuvalu',
      UG: 'Uganda',
      UA: 'Ukraine',
      AE: 'United Arab Emirates',
      GB: 'United Kingdom',
      US: 'United States',
      UY: 'Uruguay',
      UZ: 'Uzbekistan',
      VU: 'Vanuatu',
      VA: 'Vatican City',
      VE: 'Venezuela',
      VN: 'Vietnam',
      YE: 'Yemen',
      ZM: 'Zambia',
      ZW: 'Zimbabwe',
    };
  
    const fullName = countryCodesToNames[shortCode];
    return fullName || 'Country not found';
  };
  
  