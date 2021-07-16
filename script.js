const projectUrls = [
    'https://github.com/That-Cool-Coder',
    'https://replit.com/@ThatCoolCoder',
    'https://thatcoolcoder.itch.io/',
    'https://naltonsoftware.com'
]

function encode() {
    var toEncode = spnr.dom.id('encodeInput').value;
    spnr.dom.id('encodeOutput').value = iicsaEsrever.encode(toEncode);
}

function openMoreProjects() {
    projectUrls.forEach(url => {
        window.open(url, '_blank');
    })
}