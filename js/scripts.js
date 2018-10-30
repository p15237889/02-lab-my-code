const hello = document.getElementById("hello");

//uncomment below to see what getElementById 'got':
//console.log(hello);

function greeting() {
  alert("Hello!");
  hello.textContent = "Goodbye";
}

hello.addEventListener("click", greeting);
