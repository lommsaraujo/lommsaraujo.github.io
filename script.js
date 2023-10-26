// Voice Acting Language Button

function toggleLanguage(lang) {
    if (lang =='en') {
       document.getElementById("audios-en").style.display="inline";
       document.getElementById("audios-pt").style.display="none";
       document.getElementById("btn-en").style.backgroundColor = '#624cab';
       document.getElementById("btn-en").style.color = 'white';
       document.getElementById("btn-pt").style.backgroundColor = 'white';
       document.getElementById("btn-pt").style.color = 'black';
    }
    else if (lang == 'pt') {
        document.getElementById("audios-en").style.display="none";
        document.getElementById("audios-pt").style.display="inline";
        document.getElementById("btn-en").style.backgroundColor = 'white';
       document.getElementById("btn-en").style.color = 'black';
        document.getElementById("btn-pt").style.backgroundColor = '#624cab';
       document.getElementById("btn-pt").style.color = 'white';
    };
  }