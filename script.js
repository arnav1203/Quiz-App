let button = document.querySelector('button');
button.addEventListener('click', function () {
    var c = 0;
    var res='';
    let u = document.getElementById('result');
    let a = ['ans1', 'ans2', 'ans3', 'ans4', 'ans5', 'ans6', 'ans7', 'ans8', 'ans9', 'ans10'];
    for (var i = 0; i < a.length; i++) {
        var radio = document.getElementsByName(a[i]);
        val = '';
        for (var j = 0; j < radio.length; j++) {
            if (radio[j].checked) {
                val = radio[j].value;
                if (i == 0) {
                    if (val == '1960s')
                        c++;
                }
                else if (i == 1) {
                    if (val == "Internet Service Provider")
                        c++;
                }
                else if (i == 2) {
                    if (val == 'sun')
                        c++;
                }
                else if (i == 3) {
                    if (val == 'OS-2')
                        c++;
                }
                else if (i == 4) {
                    if (val == "subject directories")
                        c++;
                }
                else if (i == 5) {
                    if (val == "temporary file")
                        c++;
                }
                else if (i == 6) {
                    if (val == "LAN")
                        c++;
                }
                else if (i == 7) {
                    if (val == "image")
                        c++;
                }
                else if (i == 8) {
                    if (val == "74")
                        c++;
                }
                else if (i == 9) {
                    if (val == "backup file")
                        c++;
                }
            }
        }
    }
    res=res.concat('You got ',c,' marks out of 10.');
    u.innerText=res;
})