document.getElementById("submit").addEventListener("click", function (event) {
  let food = document.querySelectorAll("input[name=food]:checked");
  let fname = document.getElementById("first-name");
  let lname = document.getElementById("last-name");
  let pinCode = document.getElementById("pincode");
  let address = document.getElementById("address");
  let state = document.getElementById("state");
  let country = document.getElementById("country");
  let gender = document.querySelector("input[name=gender]:checked");
  let foods = [];
  food.forEach(function (food) {
    foods.push(food.value);
  });
  if (
    fname.value == "" ||
    lname.value == "" ||
    pinCode.value == "" ||
    gender == null
  ) {
    alert("First name,Last name and Pincod are required");
    event.preventDefault();
  } else if (foods.length < 2) {
    alert("Please select at least 2 Food items ");
    event.preventDefault();
  } else {
    document.getElementById("form-data").innerHTML += `
    <tr>
        <td>${fname.value}</td>
        <td>${lname.value}</td>
        <td>${gender.value}</td>
        <td>${foods.join(",")}</td>
        <td>${address.value}</td>
        <td>${pinCode.value}</td>
        <td>${state.value}</td>
        <td>${country.value}</td>
    </tr>
    `;
    document.getElementById("form").reset();
  }
});
