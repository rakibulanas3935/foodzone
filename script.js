const row = document.getElementById("row");
const changeValue = document.getElementById("change");

const input = document.getElementById("input");

const displayScearch = () => {
  const inputValue = input.value;
  input.value = "";
  if (inputValue === "") {
    changeValue.innerText = `Please enter value`;
  } else {
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;

    const ul = document.getElementById("scearch");
    ul.innerHTML = `<li class="nav-item text-center">
              <a class="nav-link"  href="#none" onclick="displayCatagoryApi()">categories</a>
            </li>
            <li class="nav-item text-center">
              <a class="nav-link" href="#none" onclick="displayRandom()">random</a>
            </li>
            <li class="nav-item text-center">
              <a class="nav-link" href="#none" onclick="displayScearch()">${inputValue}</a>
            </li>`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => displayScearchValue(data.meals));
  }
};

//create div

const displayScearchValue = (foodname) => {
  row.innerHTML = "";
  const totalmeal = foodname.length;
  const total = parseInt(totalmeal);
  changeValue.innerText = `${totalmeal} result found`;
  if (total === 0) {
    changeValue.innerText = `no result found`;
  }
  for (const displayFood of foodname) {
    const div = document.createElement("div");

    div.classList = "col-md-4 col-6";
    div.innerHTML = `<div class="grid-box p-4 w-100 h-100 mb-5">
            <div class="img-player mb-3">
              <img src="${displayFood.strMealThumb}" class="img-fluid w-100" alt="" />
            </div>
            <div class="player-dealits mt-2 mb-3">
              <h3 class="player-name text-danger text-center fw-bold">${displayFood.strMeal}</h3>
            </div>

            <div class="ingrediant text-center">
              <button type="button" class="btn btn-outline-danger">View details</button>
            </div>

          </div>`;
    row.appendChild(div);
  }
};

// const displayDetails = () => {
//   const inputValueIngredient = input.value;
//   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValueIngredient}`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => displayDetailsVaule(data.meals));
// };

// const displayDetailsVaule = (result) => {
//   const row = document.getElementById("row2");
//   row.innerHTML = "";
//   for (const details of result) {
//     console.log(details);
//     const div = document.createElement("div");

//     div.classList = "col-6 col-md-4";
//     div.innerHTML = `<div class="img">
//                 <img src="https://www.themealdb.com/images/ingredients/${details.strIngredient1}.png" class="img-fluid" />
//               </div>
//               <h3 class="text-center fw-bold text-danger">${details.strIngredient1}</h3>
//           `;
//     row.appendChild(div);
//   }
// };
//start display catagory api

const displayCatagoryApi = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((res) => res.json())
    .then((data) => displayCatagory(data.categories));
};

displayCatagoryApi();

const displayCatagory = (catagory) => {
  row.innerHTML = "";
  for (const catagories of catagory) {
    console.log(1);
    if (catagories.idCategory <= 12) {
      const div = document.createElement("div");
      div.classList = "col-md-4 col-6";
      div.innerHTML = `<div class="catagory mt-3 mb-3">
              <div class="img">
                <a href="##"><img src="${catagories.strCategoryThumb}" class="img-fluid w-100" alt=""></a>
              </div>
              <div class="text-center mt-4 text-danger fw-bold">
              <h5>${catagories.strCategory}</h5>
              </div>
            </div>`;
      row.appendChild(div);
    }
  }
};

const displayRandom = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((data) => displayRandomValue(data.meals));
};

const displayRandomValue = (random) => {
  row.innerHTML = "";
  for (const randoms of random) {
    console.log(randoms);
    const div = document.createElement("div");

    div.classList = "col-6 col-md-4";
    div.innerHTML = `<div class="grid-box p-4 w-100 h-100 mb-5">
            <div class="img-player mb-3">
              <img src="${randoms.strMealThumb}" class="img-fluid w-100" alt="" />
            </div>
            <div class="player-dealits mt-2 mb-3">
              <h3 class="player-name text-danger text-center fw-bold">${randoms.strMeal}</h3>
            </div>

            <div class="ingrediant text-center">
              <button type="button"class="btn btn-outline-danger">View details</button>
            </div>
          </div>`;

    row.appendChild(div);
  }
};

// latest api
