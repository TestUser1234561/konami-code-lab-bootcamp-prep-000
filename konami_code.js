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
  } else if(index = code.length - 1) {
    alert("Hurray!")
    console.log("Done!");
    index = 0;
  } else {
    index = 0;
  }
}
