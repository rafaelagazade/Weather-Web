const search = document.querySelector(".search input");
const loc = document.querySelector(".location h1");
const clo = document.querySelector(".cloudAnimation");
const temp = document.querySelector(".temperature h1");
const body = document.querySelector("body");
const measure = document.querySelector(".measure");
const unit = document.querySelector(".temperature");

// "https://api.openweathermap.org/data/2.5/weather?q=baku&units=imperial&appid=895284fb2d2c50a520ea537456963d9c"

search.addEventListener("change", async (e) => {
  let val = e.target.value;

  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${val}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
  );

  res = await res.json();

  loc.innerHTML = res.name;
  temp.innerHTML = Math.trunc((res.main.temp - 32) * 0.5);
  measure.innerHTML = '<i class="fa-solid fa-c"></i>';

  if (res.weather[0].main === "Clouds") {
    clo.innerHTML = " <i class='fa-solid fa-cloud-sun'></i> ";
  } else if (res.weather[0].main === "Clear") {
    clo.innerHTML = "<i class='fa-solid fa-sun'></i>";
  } else if (res.weather[0].main === "Snow") {
    clo.innerHTML = "<i class='fa-solid fa-snowflake'></i>";
  } else {
    clo.innerHTML = "<i class='fa-solid fa-cloud-rain'></i>";
  }

  let far = true;

  unit.onclick = () => {
    far = !far;
    if (far === true) {
      temp.innerHTML = Math.trunc(res.main.temp);
      measure.innerHTML = "<i class='fa-solid fa-f'></i>";
    } else {
      temp.innerHTML = Math.trunc((res.main.temp - 32) * 0.5);
      measure.innerHTML = '<i class="fa-solid fa-c"></i>';
    }
  };
});

search.addEventListener("search", () => {
  temp.innerHTML = Math.trunc((res.main.temp - 32) * 0.5);
  measure.innerHTML = '<i class="fa-solid fa-c"></i>';
});

window.addEventListener("load", async () => {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=baku&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
  );

  res = await res.json();

  loc.innerHTML = res.name;
  temp.innerHTML = Math.trunc((res.main.temp - 32) * 0.5);

  if (res.weather[0].main === "Clouds") {
    clo.innerHTML = " <i class='fa-solid fa-cloud-sun'></i> ";
  } else if (res.weather[0].main === "Clear") {
    clo.innerHTML = "<i class='fa-solid fa-sun'></i>";
  } else if (res.weather[0].main === "Snow") {
    clo.innerHTML = "<i class='fa-solid fa-snowflake'></i>";
  } else {
    clo.innerHTML = "<i class='fa-solid fa-cloud-rain'></i>";
  }

  let far = true;

  unit.onclick = () => {
    far = !far;
    if (far) {
      temp.innerHTML = Math.trunc(res.main.temp);
      measure.innerHTML = "<i class='fa-solid fa-f'></i>";
    } else {
      temp.innerHTML = Math.trunc((res.main.temp - 32) * 0.5);
      measure.innerHTML = '<i class="fa-solid fa-c"></i>';
    }
  };
});

const searchBtn = document.querySelector(".container .search .search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const lupa = document.querySelector(".fa-magnifying-glass");

searchBtn.addEventListener("click", () => {
  const L = window.matchMedia("(max-width: 768px)");
  const XL = window.matchMedia("(max-width: 1024px)");

  setTimeout(() => {
    searchBtn.style.marginLeft = "300px";
    cancelBtn.style.transform = "rotateZ(45deg)";
    setTimeout(() => {
      searchBtn.style.display = "none";
      cancelBtn.style.transform = "rotateZ(145deg)";
      setTimeout(() => {
        search.style.display = "flex";
        cancelBtn.style.transform = "rotateZ(0deg)";
        setTimeout(() => {
          cancelBtn.style.display = "flex";
          cancelBtn.style.marginLeft = "290px";
          if (L.matches) {
            cancelBtn.style.marginLeft = "470px";
          } else if (XL.matches) {
            cancelBtn.style.marginLeft = "700px";
          }
        }, 50);
      }, 50);
    }, 100);
  }, 100);
});

cancelBtn.addEventListener("click", () => {
  setTimeout(() => {
    search.style.display = "none";
    setTimeout(() => {
      cancelBtn.style.marginLeft = "0";
      cancelBtn.style.transform = "rotateZ(145deg)";
      setTimeout(() => {
        searchBtn.style.marginLeft = "0";
        setTimeout(() => {
          cancelBtn.style.display = "none";
          setTimeout(() => {
            searchBtn.style.display = "flex";
          });
        }, 10);
      }, 50);
    }, 100);
  }, 100);
});

const btn = document.querySelector(".name button");
const main = document.querySelector(".main");

let bg = true;

btn.onclick = () => {
  // const xs = window.matchMedia("(max-width: 320px)");
  // const x = window.matchMedia("(max-width: 375px)");
  // const M = window.matchMedia("(max-width: 425px)");
  // const L = window.matchMedia("(max-width: 768px)");
  // const XL = window.matchMedia("(max-width: 1024px)");

  if (bg) {
    main.style.background =
      "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 43, 121, 1)";
    btn.style.background = "rgba(9, 43, 121, 1)";
    btn.style.border = "3px solid rgb(221, 216, 216)";
    btn.style.color = "white";
  } else {
    main.style.background =
      "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 43, 121, 1) 17%, rgba(0, 212, 255, 1) 100%)";
    btn.style.background = "rgba(207, 207, 207, 0.5)";
    btn.style.border = "unset";
    btn.style.color = "black";
    // if (xs.matches) {
    //   btn.style.color = "white";
    // } else if (x.matches) {
    //   btn.style.color = "white";
    // } else if (M.matches) {
    //   btn.style.color = "white";
    // } else if (L.matches) {
    //   btn.style.color = "white";
    // } else if (XL.matches) {
    //   btn.style.color = "white";
    // }
  }

  bg = !bg;
};
