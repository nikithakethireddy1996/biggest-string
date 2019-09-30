function myfunction() {
  let a = document.getElementById("firststring").value;
  let b = document.getElementById("secondstring").value;
  let c = document.getElementById("thirdstring").value;
  let name = document.getElementById("guest").value
  let biggest = '';
  if (a.length > b.length && a.length > c.length) {
    biggest += a;
  } else if (b.length > c.length && b.length > a.length) {
    biggest += b;
  } else {
    biggest += c;
  }
  document.getElementById("result").innerHTML = name+" , the biggest String among three is " +biggest;
}
