const getInputData = document.getElementById("submitForm"); // Get Form

getInputData.addEventListener("submit", (e) => {
  e.preventDefault();
});

const submitForm = () => {
  const bvn = document.getElementById("bvn").value;
  const nin = document.getElementById("nin").value;
  const tin = document.getElementById("tin").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const gender = document.getElementById("gender").value;
  const dob = document.getElementById("dob").value;
  const address = document.getElementById("address").value;
  const employment_status = document.getElementById("employment_status").value;
  const monthly_income = document.getElementById("monthly_income").value;
  const loan_amount = document.getElementById("loan_amount").value;
  const expense = document.getElementById("expense").value;
  const loan_purpose = document.getElementById("loan_purpose").value;
  const family_size = document.getElementById("family_size").value;
  const financial_link = document.getElementById("financial_link").value;
  const medical_link = document.getElementById("medical_link").value;

  var message = {
    name: name,
    email: email,
    family_size: family_size,
    address: address,
    dob: dob,
    bvn: bvn,
    tin: tin,
    nin: nin,
    loan_amount: loan_amount,
    monthly_income: monthly_income,
    expense: expense,
    loan_purpose: loan_purpose,
    medical_link: medical_link,
    financial_link: financial_link,
    gender: gender,
    employment_status: employment_status,
  };

  //   var message = {
  //     name: "Arimoro Olamilekan",
  //     email: "arimoroolamilekan1@gmail.com",
  //     family_size: 14,
  //     address: "adreess streer",
  //     dob: 05 - 05 - 2001,
  //     bvn: 145986663,
  //     tin: 1546633,
  //     nin: 2558866322,
  //     loan_amount: 15000,
  //     monthly_income: 40000,
  //     expense: 40000,
  //     loan_purpose: "I am great",
  //     medical_link: "https://arimoroportfolio.netlify.app",
  //     financial_link: "https://arimoroportfolio.netlify.app",
  //     gender: "Male",
  //     employment_status: "Student",
  //   };

  console.log(message);
  if (
    bvn == "" &&
    nin == "" &&
    tin == "" &&
    name == "" &&
    email == "" &&
    gender == "" &&
    dob == "" &&
    address == "" &&
    employment_status == "" &&
    monthly_income == "" &&
    expense == "" &&
    loan_purpose == "" &&
    loan_amount == "" &&
    family_size == "" &&
    financial_link == "" &&
    medical_link == ""
  ) {
    swal("Hey!", "Please fill in your details", "warning");
  } else if (
    bvn &&
    nin &&
    tin &&
    name &&
    email &&
    gender &&
    dob &&
    address &&
    employment_status &&
    monthly_income &&
    expense &&
    loan_purpose &&
    loan_amount &&
    family_size &&
    financial_link &&
    medical_link
  ) {
    axios({
      method: "post",
      url: "http://ucredit.maxlitemedia.com/api/creditrating/user/create",
      data: JSON.stringify(message),
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }
};

// fetch("http://ucredit.maxlitemedia.com/api/creditrating/user/create", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(message),
// }).then((message) => {
//   console.log(message);
//   swal("Good job!", "Thanks for submitting you details", "success");
