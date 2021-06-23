let area_01 = document.getElementById('chall-01-display-area');
var ageInDaysSet = false;

function calculateAgeInDays() {
    var birthYear = document.getElementById('birth-year').value;
    if (document.getElementById('birth-year').value === birthYear && !ageInDaysSet) {
        ageInDays(birthYear);
    } else {
        document.getElementById('ageInDays').remove();
        ageInDays(birthYear);
    }
}

function ageInDays(birthYear) {
    var ageInDays = (new Date().getFullYear() - birthYear) * 365;
    var textAnswer = document.createTextNode('You are now ' + ageInDays + ' days old');
    var h1 = document.createElement('h1');
    h1.setAttribute('id', 'ageInDays');
    ageInDaysSet = true;
    h1.appendChild(textAnswer);
    area_01.style.display = 'flex';
    area_01.style.height = 'auto';
    area_01.appendChild(h1);
}

function reset() {
    if (ageInDaysSet) {
        area_01.style.display = 'none';
        document.getElementById('ageInDays').remove();
        document.getElementById('birth-year').value = '';
        ageInDaysSet = false;
    }
}