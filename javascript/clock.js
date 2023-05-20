window.onload = function () {

    function getTime(a) {

        function addZero(i) {
            if (i < 10) { i = "0" + i }
            return i;
        }

        let hh = addZero(a.getHours());
        let mm = addZero(a.getMinutes());
        let ss = addZero(a.getSeconds());
        let time = hh + ':' + mm + ':' + ss;

        document.getElementById("getTime").innerHTML = time;

    }


    function getDate(a) {

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateTimeFormat = new Intl.DateTimeFormat('en-US', options);
        let formattedDate = dateTimeFormat.format(a);

        document.getElementById("getDate").innerHTML = formattedDate;
    }


    setInterval(() => {
        let a = new Date();
        getTime(a);
        getDate(a)
    }, 1000);

    let anthology = {
        0: "जहाँ रहेगा वहीं रौशनी लुटाएगा <br>किसी चराग़ का अपना मकाँ नहीं होता<br><br>~-~-~ Waseem Barelvi ~-~-~",
        1: "बड़े लोगों से मिलने में हमेशा फ़ासला रखना <br>जहाँ दरिया समुंदर से मिला दरिया नहीं रहता<br><br>~-~-~ Basheer Badr ~-~-~",
        2: "वो बात सारे फ़साने में जिस का ज़िक्र न था <br>वो बात उन को बहुत ना-गवार गुज़री है<br><br>~-~-~ Faiz Ahmad Faiz ~-~-~",
        3: "कोई हाथ भी न मिलाएगा जो गले मिलोगे तपाक से <br>ये नए मिज़ाज का शहर है ज़रा फ़ासले से मिला करो<br><br>~-~-~ Basheer Badr ~-~-~",
        4: "सुब्ह होती है शाम होती है <br>उम्र यूँही तमाम होती है<br><br>~-~-~ Munshi Amirullah Tasleem ~-~-~",
        5: "घर से मस्जिद है बहुत दूर चलो यूँ कर लें <br>किसी रोते हुए बच्चे को हँसाया जाए<br><br>~-~-~ Nida Fazli ~-~-~",
        6: "यहाँ लिबास की क़ीमत है आदमी की नहीं <br>मुझे गिलास बड़े दे शराब कम कर दे<br><br>~-~-~ Basheer Badr ~-~-~",
        7: "इशरत-ए-क़तरा है दरिया में फ़ना हो जाना <br>दर्द का हद से गुज़रना है दवा हो जाना <br><br>~-~-~ Mirza Ghalib ~-~-~",
        8: "दिल ना-उमीद तो नहीं नाकाम ही तो है <b>लम्बी है ग़म की शाम मगर शाम ही तो है <br><br>~-~-~ Faiz Ahmad Faiz ~-~-~",
        9: "किसी को घर मिला हिस्से में या कोई दुकाँ आई <br>मैं घर में सब से छोटा था मिरे हिस्से में माँ आई <br><br>~-~-~ Munawwar Rana ~-~-~"
    }

    sher = anthology[parseInt(Math.random() * 10)];
    document.getElementById("sherOfTheDay").innerHTML = sher;
}