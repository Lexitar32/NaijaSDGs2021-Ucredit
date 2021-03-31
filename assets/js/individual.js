const getInputData = document.getElementById("postForm"); // Get Form

getInputData.addEventListener("submit", (e) => {
  e.preventDefault();
});

const postForm = () => {
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
    axios
      .post("http://ucredit.maxlitemedia.com/api/creditrating/user/create", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        family_size: document.getElementById("family_size").value,
        address: document.getElementById("address").value,
        dob: document.getElementById("dob").value,
        bvn: document.getElementById("bvn").value,
        tin: document.getElementById("tin").value,
        financial_link: document.getElementById("financial_link").value,
        medical_link: document.getElementById("medical_link").value,
        loan_amount: document.getElementById("loan_amount").value,
        loan_purpose: document.getElementById("loan_purpose").value,
        monthly_income: document.getElementById("monthly_income").value,
        expense: document.getElementById("expense").value,
        gender: document.getElementById("gender").value,
        employment_status: document.getElementById("employment_status").value,
        nin: document.getElementById("nin").value,
      })
      .then(function (response) {
        swal("Good job!", "Thanks for submitting you details", "success");
        getInputData.reset();
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }
};

//token: "YYm0I8"
