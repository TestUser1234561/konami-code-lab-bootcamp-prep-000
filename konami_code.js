const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;

function init() {

  const input = document.getElementsByTagName("BODY")[0];

  input.addEventListener('keydown', function(e) {
    testCode(e.which)
  })

}

function testCode(key) {
  key = parseInt(key)
  if(key == code[index]) {
    index++;
  } else if(index = code.length - 1) {
    alert("Hurray!")
    index = 0;
  } else {
    index = 0;
  }
}
