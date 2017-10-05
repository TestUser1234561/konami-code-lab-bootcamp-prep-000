const code = [65, 66, 67];
let index = 0;

function init() {

  const input = document.getElementsByTagName("BODY")[0];

  input.addEventListener('keydown', function(e) {
    testCode(e.which)
  })

}

function testCode(key) {
  key = parseInt(key)
  console.log(key);
  console.log(index);
  console.log(code[index]);
  if(key == code[index]) {
    index++;
  } else {
    index = 0;
  }
}
