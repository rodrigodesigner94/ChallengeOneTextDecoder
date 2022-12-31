var textInput = document.querySelector("#textToDecode")

function crypt () {
    var text = textInput.value;

    var cryptedText = text.replace(/a/i, "xal@d").replace(/i/s, "w%alt1b.").replace(/o/ , "br 1&w&")
    .replace(/c/i, "df d").replace(/e/d, "trx f").replace(/u/g, " gd").replace(/ss/i, "f jf5")
    

    document.getElementById('searcherscream').innerHTML = '<textarea  readonly class="newText" >' + cryptedText + 
    '</textarea>' + '<button class="btnCopy" id="copy" onclick="copy()">Copiar</button>'
}

function decrypt () {
    var text = textInput.value;

    var decryptedText = text.replace(/xal@d/i, "a").replace(/w%alt1b./s, "i").replace(/br 1&w&/ , "o")
    .replace(/df d/i, "c").replace(/trx f/d, "e").replace(/ gd/g, "u").replace(/f jf5/i, "ss")

    document.getElementById('searcherscream').innerHTML = '<textarea readonly class="newText" >' + decryptedText + 
    '</textarea>' + '<button class="btnCopy" id="copy" onclick="copy()">Copiar</button>'
}

function copy() {
    var textoCop = document.querySelector('.newText');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
} 
