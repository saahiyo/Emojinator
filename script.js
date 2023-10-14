document.addEventListener("DOMContentLoaded", function () {
  const encryption = document.querySelector(".encryption");
  const decryption = document.querySelector(".decryption");
  const encbtn = document.querySelector(".encBtn");
  const decbtn = document.querySelector(".decBtn");
  const arrow = document.querySelector("h1 span img");
  let clutter = "";

  function encryption2() {
    document.querySelector(".encrypt-btn").addEventListener("click", function () {
      const input = document.querySelector(".txtmsg").value;
      const password = document.querySelector(".password").value;
      const str = input.split("");

    str.forEach(element => {
    clutter += `&#128${(element.charCodeAt())} `
    });

      document.querySelector(".results").innerHTML = clutter;

      let dataarr = JSON.parse(localStorage.getItem('data1')) || [];

      dataarr.push({ "pass": password, "input": input, "clutter": clutter });
      localStorage.setItem('data1', JSON.stringify(dataarr));
    });

  }

  encryption2();

function decryption2() {
  document.querySelector(".decrypt-btn").addEventListener("click", function () {
    let clutter2 = "";
    const input2 = document.querySelector(".emojiMsg").value.trim();
    const pass2 = document.querySelector(".password2").value.trim();
    const user = JSON.parse(localStorage.getItem('data1')) || [];

  //  console.log("Entered Clutter2:", clutter2);
   console.log("Entered Password2:", pass2);

    const str2 = input2.split(" ");
    str2.forEach((element) => {
        clutter2 += `&#${(element.codePointAt(0))} `
    });

  //  console.log("Processed Clutter2:", clutter2);

    let found = null;
    for (let i of user) {
      if (i.clutter == clutter2 && i.pass == pass2) {
        found = i;
        break;
      }
    }

  //  console.log("Found Data:", found);  this line for debugging

    if (found) {
      document.querySelector(".results").style.display = "block";
      document.querySelector(".results").style.color = "#eee";
      document.querySelector(".results").innerHTML = found.input;
    } else {
      document.querySelector(".results").innerHTML = "Wrong password or input";
      document.querySelector(".results").style.display = "block";
      document.querySelector(".results").style.color = "red";
    }
  });
}

  decryption2();

  decbtn.addEventListener("click", function () {
    encryption.style.display = "none";
    decryption.style.display = "block";
    encbtn.style.backgroundColor = "#222";
    encbtn.style.color = "#9A9A9A";
    decbtn.style.color = "#EDEDED";
    decbtn.style.backgroundColor = "#2e2e2e";
    arrow.style.transform = "rotate(180deg)";
    document.querySelector(".results").style.display = "none";
  });

  encbtn.addEventListener("click", function () {
    encryption.style.display = "block";
    decryption.style.display = "none";
    encbtn.style.backgroundColor = "#2e2e2e";
    decbtn.style.backgroundColor = "#222";
    encbtn.style.color = "#EDEDED";
    decbtn.style.color = "#9A9A9A";
    arrow.style.transform = "rotate(360deg)";
    document.querySelector(".results").style.display = "none";
  });

  document.querySelector(".encrypt-btn").addEventListener("click", function () {
    document.querySelector(".results").style.display = "block";
  });

  document.querySelector(".decrypt-btn").addEventListener("click", function () {
    document.querySelector(".results").style.display = "block";
  });
});