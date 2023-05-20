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
        0: "<h3><p>जहाँ रहेगा वहीं रौशनी लुटाएगा,</p>किसी चराग़ का अपना मकाँ नहीं होता।<br><br><footer class='blockquote-footer'>Waseem Barelvi</footer></h3>",
        1: "<h3><p>बड़े लोगों से मिलने में हमेशा फ़ासला रखना,</p>जहाँ दरिया समुंदर से मिला दरिया नहीं रहता।<br><br><footer class='blockquote-footer'>Basheer Badr</footer></h3>",
        2: "<h3><p>वो बात सारे फ़साने में जिस का ज़िक्र न था,</p>वो बात उन को बहुत ना-गवार गुज़री है।<br><br><footer class='blockquote-footer'>Faiz Ahmad Faiz</footer></h3>",
        3: "<h3><p>कोई हाथ भी न मिलाएगा जो गले मिलोगे तपाक से,</p>ये नए मिज़ाज का शहर है ज़रा फ़ासले से मिला करो।<br><br><footer class='blockquote-footer'>Basheer Badr</footer></h3>",
        4: "<h3><p>सुब्ह होती है शाम होती है,</p>उम्र यूँही तमाम होती है।<br><br><footer class='blockquote-footer'>Munshi Amirullah Tasleem</footer></h3>",
        5: "<h3><p>घर से मस्जिद है बहुत दूर चलो यूँ कर लें,</p>किसी रोते हुए बच्चे को हँसाया जाए।<br><br><footer class='blockquote-footer'>Nida Fazli</footer></h3>",
        6: "<h3><p>यहाँ लिबास की क़ीमत है आदमी की नहीं,</p>मुझे गिलास बड़े दे शराब कम कर दे।<br><br><footer class='blockquote-footer'>Basheer Badr</footer></h3>",
        7: "<h3><p>इशरत-ए-क़तरा है दरिया में फ़ना हो जाना,</p>दर्द का हद से गुज़रना है दवा हो जाना।<br><br><footer class='blockquote-footer'>Mirza Ghalib</footer></h3>",
        8: "<h3><p>दिल ना-उमीद तो नहीं नाकाम ही तो है,</p>लम्बी है ग़म की शाम मगर शाम ही तो है।<br><br><footer class='blockquote-footer'>Faiz Ahmad Faiz</footer></h3>",
        9: "<h3><p>किसी को घर मिला हिस्से में या कोई दुकाँ आई,</p>मैं घर में सब से छोटा था मिरे हिस्से में माँ आई।<br><br><footer class='blockquote-footer'>Munawwar Rana</footer></h3>"
    }

    sher = anthology[parseInt(Math.random() * 10)];
    document.getElementById("sherOfTheDay").innerHTML = sher;
}
