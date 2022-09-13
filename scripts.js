const form = document.getElementById("form");

const businessName = document.getElementById("businessName");
const businessCnpj = document.getElementById("businessCnpj");
const businessEmail = document.getElementById("businessEmail");
const businessPhone = document.getElementById("businessPhone");
const address = document.getElementById("address");
const addressNumber = document.getElementById("addressNumber");
const city = document.getElementById("city");
const country = document.getElementById("country");
const state = document.getElementById("state");
const zipCode = document.getElementById("zipCode");

const financialName = document.getElementById("financialName");
const financialEmail = document.getElementById("financialEmail");
const financialPhone = document.getElementById("financialPhone");

const garageCode = document.getElementById("garageCode");
const timeDayInitial = document.getElementById("timeDayInitial");
const timeDayFinal = document.getElementById("timeDayFinal");
const qtyGuest = document.getElementById("qtyGuest");
const eventDay = document.getElementById("eventDay");

const payBusiness = document.getElementById("payBusiness");

const payBusinessContainer = document.getElementById("payBusinessContainer");
const payEmail = document.getElementById("payEmail");
const payCompanyName = document.getElementById("payCompanyName");
const payCompanyCnpj = document.getElementById("payCompanyCnpj");
const payResponsibleName = document.getElementById("payResponsibleName");
const payResponsibleEmail = document.getElementById("payResponsibleEmail");
const generalObservations = document.getElementById("generalObservations");

const token = document.getElementById("token_field");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkInputs();
  setSuccessFor(generalObservations);
});

const checkbox = document.querySelector("input[name=payBusiness]");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    payBusinessContainer.className = "payBusinessChecked";
    console.log("Checkbox is checked..");
  } else {
    payBusinessContainer.className = "payBusiness";
    payEmail.value = "";
    payCompanyName.value = "";
    payCompanyCnpj.value = "";
    payResponsibleName.value = "";
    payResponsibleEmail.value = "";
    generalObservations.value = "";
    console.log("Checkbox is not checked..");
  }
});

function checkInputs() {
  const businessNameValue = businessName.value;
  const businessCnpjValue = businessCnpj.value;
  const businessEmailValue = businessEmail.value;
  const businessPhoneValue = businessPhone.value;
  const addressValue = address.value;
  const addressNumberValue = addressNumber.value;
  const cityValue = city.value;
  const countryValue = country.value;
  const stateValue = state.value;
  const zipCodeValue = zipCode.value;

  const businessDataValues = [
    [businessName, businessNameValue],
    [businessCnpj, businessCnpjValue],
    [businessEmail, businessEmailValue],
    [businessPhone, businessPhoneValue],
    [address, addressValue],
    [addressNumber, addressNumberValue],
    [city, cityValue],
    [country, countryValue],
    [state, stateValue],
    [zipCode, zipCodeValue],
  ];

  for (const value of businessDataValues) {
    if (value[1] === "") {
      setErrorFor(value[0], "Campo obrigatório.");
    } else {
      setSuccessFor(value[0]);
    }
  }

  if ((businessEmailValue !== "") & !checkEmail(businessEmailValue)) {
    setErrorFor(businessEmail, "Email inválido");
  }

  if ((businessCnpjValue !== "") & !checkCnpj(businessCnpjValue)) {
    setErrorFor(businessCnpj, "CNPJ inválido");
  }

  if (zipCodeValue !== "" && !checkCep(zipCodeValue)) {
    setErrorFor(zipCode, "CEP inválido");
  }

  if (businessPhoneValue !== "" && !checkTel(businessPhoneValue)) {
    setErrorFor(businessPhone, "Telefone inválido");
  }

  const financialNameValue = financialName.value;
  const financialEmailValue = financialEmail.value;
  const financialPhoneValue = financialPhone.value;

  const financialDataValues = [
    [financialName, financialNameValue],
    [financialEmail, financialEmailValue],
    [financialPhone, financialPhoneValue],
  ];

  for (const value of financialDataValues) {
    if (value[1] === "") {
      setErrorFor(value[0], "Campo obrigatório.");
    } else {
      setSuccessFor(value[0]);
    }
  }

  if ((financialEmailValue !== "") & !checkEmail(financialEmailValue)) {
    setErrorFor(financialEmail, "Email inválido");
  }

  if (financialPhoneValue !== "" && !checkTel(financialPhoneValue)) {
    setErrorFor(financialPhone, "Telefone inválido");
  }

  const garageCodeValue = garageCode.value;
  const timeDayInitialValue = timeDayInitial.value;
  const timeDayFinalValue = timeDayFinal.value;
  const qtyGuestValue = qtyGuest.value;
  const eventDayValue = eventDay.value;

  const eventAndGarageValues = [
    [garageCode, garageCodeValue],
    [timeDayInitial, timeDayInitialValue],
    [timeDayFinal, timeDayFinalValue],
    [qtyGuest, qtyGuestValue],
    [eventDay, eventDayValue],
  ];

  for (const value of eventAndGarageValues) {
    if (value[1] === "") {
      setErrorFor(value[0], "Campo obrigatório.");
    } else {
      setSuccessFor(value[0]);
    }
  }

  if (garageCodeValue !== "" && garageCodeValue.length !== 3) {
    setErrorFor(garageCode, "Código inválido");
  }

  const payEmailValue = payEmail.value;
  const payCompanyNameValue = payCompanyName.value;
  const payCompanyCnpjValue = payCompanyCnpj.value;
  const payResponsibleNameValue = payResponsibleName.value;
  const payResponsibleEmailValue = payResponsibleEmail.value;
  const generalObservationsValue = generalObservations.value;

  const payCompanyValues = [
    [payEmail, payEmailValue],
    [payCompanyName, payCompanyNameValue],
    [payCompanyCnpj, payCompanyCnpjValue],
    [payResponsibleName, payResponsibleNameValue],
    [payResponsibleEmail, payResponsibleEmailValue],
  ];

  const checkbox = document.querySelector("input[name=payBusiness]");

  if (checkbox.checked) {
    for (const value of payCompanyValues) {
      if (value[1] === "") {
        setErrorFor(value[0], "Campo obrigatório.");
      } else {
        setSuccessFor(value[0]);
      }
    }

    if ((payEmailValue !== "") & !checkEmail(payEmailValue)) {
      setErrorFor(payEmail, "Email inválido");
    }
    if (
      (payResponsibleEmailValue !== "") &
      !checkEmail(payResponsibleEmailValue)
    ) {
      setErrorFor(payResponsibleEmail, "Email inválido");
    }
    if ((payCompanyCnpjValue !== "") & !checkCnpj(payCompanyCnpjValue)) {
      setErrorFor(payCompanyCnpj, "CNPJ inválido");
    }

    setSuccessFor(generalObservations);

    if (generalObservationsValue !== "") {
      payCompanyValues.push([generalObservations, generalObservationsValue]);
    }
  } else {
    for (const value of payCompanyValues) {
      setSuccessFor(value[0]);
    }
  }

  const tokenValue = token.value;
  console.log(tokenValue);

  if (!tokenValue || tokenValue === "") {
    console.log({ internalCode: "131 - erro no Google Recaptcha" });
  } else {
    setSuccessFor(token);
  }

  checkForm([
    { Business: businessDataValues[1] },
    { Financial: financialDataValues[1] },
    { EventGarage: eventAndGarageValues[1] },
    { PayCompany: payCompanyValues[1] },
  ]);
}

const checkForm = (data) => {
  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log({ sucess: "O formulário está 100% preenchido!" });
    postForm(data);
  } else {
    console.log({ internalCode: "999999 - Parâmetros faltantes na chamada" });
  }
};

function postForm(data) {
  alert("Sucess");
  document.getElementById("form").reset();
  console.log(data);
}

function setDefaultFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function checkTel(tel) {
  return /^\(?\d{2}\)? ?\d{4,5}-?\d{4}$/.test(tel);
}

function checkCnpj(cnpj) {
  cnpj = cnpj.replace(/[^\d]+/g, "");

  if (cnpj == "") return false;

  if (cnpj.length != 14) return false;

  if (
    cnpj == "00000000000000" ||
    cnpj == "11111111111111" ||
    cnpj == "22222222222222" ||
    cnpj == "33333333333333" ||
    cnpj == "44444444444444" ||
    cnpj == "55555555555555" ||
    cnpj == "66666666666666" ||
    cnpj == "77777777777777" ||
    cnpj == "88888888888888" ||
    cnpj == "99999999999999"
  )
    return false;

  tamanho = cnpj.length - 2;
  numeros = cnpj.substring(0, tamanho);
  digitos = cnpj.substring(tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(0)) return false;

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(1)) return false;

  return true;
}

function checkCep(cep) {
  cep = cep.replace(/[^\d]+/g, "");

  if (cep.length === 8 && !isNaN(Number(cep))) {
    return true;
  } else {
    return false;
  }
}