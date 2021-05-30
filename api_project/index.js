const getBtn = document.getElementById("getInfo");
const paras = document.getElementById("paras");

// https://thisday-api.herokuapp.com/1.12

function getData() {
  fetch("https://thisday-api.herokuapp.com/1.12")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.data);
      const result = data
        .map((events) => {
          return `<p>Event: ${events.event}</p>`;
        })
        .join("");
      console.log(result);
      paras.innerHTML = `<p>${result}</p>`;
    });
}

getBtn.addEventListener("click", getData);
