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
    monthly_income: employment_status,
    expense: expense,
    loan_purpose: loan_purpose,
    medical_link: medical_link,
    financial_link: financial_link,
    gender: gender,
    employment_status: employment_status,
  };

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
    fetch("http://ucredit.maxlitemedia.com/api/creditrating/user/create", {
      method: "POST",
      body: message,
      headers: {
        "Content-Type": "application/json",
      },
    }).then(function (message) {
      console.log(message);
      swal("Good job!", "Thanks for submitting you details", "success");
    });
  }
};
