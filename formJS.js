function submitClick() {
    var dis = document.getElementById('display');
    dis.style.display = "inline-block";

    var pass = document.getElementById('password').value;
    var cnfpass = document.getElementById('ConfrimPassword').value;
    if (pass != cnfpass) {
        alert("Password dint match");
    }
    else {

        var firstName = document.getElementById('FirstName').value;
        document.getElementById('fstNme').innerHTML = firstName;

        var DoB = document.getElementById('DoB').value;
        document.getElementById('birth').innerHTML = DoB;

        var mobile = document.getElementById('Mobile').value;
        document.getElementById('mbl').innerHTML = mobile;
        var email = document.getElementById('email').value;
        document.getElementById('emil').innerHTML = email;
        var Address = document.getElementById('Address').value;
        document.getElementById('add').innerHTML = Address;

        if (document.getElementById('Male').checked) {
            var sex = document.getElementById('Male').value;
            document.getElementById('ml').innerHTML = sex;
        }
        else {
            var sex = document.getElementById('Female').value;
            document.getElementById('ml').innerHTML = sex;
        }


        if (document.getElementById('tam').checked) {
            var tamil = document.getElementById('tam').value
            document.getElementById('langT').innerHTML = tamil;
        }

        if (document.getElementById('eng').checked) {
            var english = document.getElementById('eng').value
            document.getElementById('langE').innerHTML = english;
        }

        if (document.getElementById('fre').checked) {
            var french = document.getElementById('fre').value
            document.getElementById('langF').innerHTML = french;
        }

        if (document.getElementById('hin').checked) {
            var hindi = document.getElementById('hin').value
            document.getElementById('langH').innerHTML = hindi;
        }
    }

}




