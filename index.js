document.addEventListener("DOMContentLoaded", function (event) {
  // Header menu
  document
    .querySelector("span .fa-bars")
    .addEventListener("click", function (event) {
      const ul = document.querySelector(".nav");
      ul.classList.toggle("hide");
    });

  // Calculator
  const main = document.querySelector("main");
  const section = document.createElement("section");
  const sectionDiv = document.createElement("div");
  const h2 = document.createElement("h2");
  const form = document.createElement("form");
  const inputQty = document.createElement("input");
  const inputOrders = document.createElement("input");
  const inputPack = document.createElement("select");
  const placeholderOption = document.createElement("option");
  const basic = document.createElement("option");
  const professional = document.createElement("option");
  const premium = document.createElement("option");
  const inputAcc = document.createElement("div");
  const inputRent = document.createElement("div");
  const inputCheckAcc = document.createElement("input");
  const inputCheckRent = document.createElement("input");
  const textAcc = document.createElement("p");
  const textRent = document.createElement("p");
  const spanAcc = document.createElement("span");
  const spanRent = document.createElement("span");
  const calculatorSummary = document.createElement("div");
  const ulSummary = document.createElement("ul");
  const liProducts = document.createElement("li");
  const liOrders = document.createElement("li");
  const liPackages = document.createElement("li");
  const liAccounting = document.createElement("li");
  const liTerminal = document.createElement("li");
  const liProductsSpan1 = document.createElement("span");
  const liProductsSpan2 = document.createElement("span");
  const liProductsSpan3 = document.createElement("span");
  const liOrdersSpan1 = document.createElement("span");
  const liOrdersSpan2 = document.createElement("span");
  const liOrdersSpan3 = document.createElement("span");
  const liPackagesSpan1 = document.createElement("span");
  const liPackagesSpan2 = document.createElement("span");
  const liPackagesSpan3 = document.createElement("span");
  const liAccountingSpan1 = document.createElement("span");
  const liAccountingSpan2 = document.createElement("span");
  const liAccountingSpan3 = document.createElement("span");
  const liTerminalSpan1 = document.createElement("span");
  const liTerminalSpan2 = document.createElement("span");
  const liTerminalSpan3 = document.createElement("span");
  const total = document.createElement("div");
  const totalSpan1 = document.createElement("span");
  const totalSpan2 = document.createElement("span");

  main.appendChild(section);
  section.appendChild(h2);
  section.appendChild(sectionDiv);
  sectionDiv.appendChild(form);
  sectionDiv.appendChild(calculatorSummary);
  calculatorSummary.appendChild(ulSummary);
  form.appendChild(inputQty);
  form.appendChild(inputOrders);
  form.appendChild(inputPack);
  form.appendChild(inputAcc);
  form.appendChild(inputRent);
  inputAcc.appendChild(inputCheckAcc);
  inputAcc.appendChild(spanAcc);
  inputAcc.appendChild(textAcc);
  inputRent.appendChild(inputCheckRent);
  inputRent.appendChild(spanRent);
  inputRent.appendChild(textRent);
  calculatorSummary.appendChild(ulSummary);
  calculatorSummary.appendChild(total);
  total.appendChild(totalSpan1);
  total.appendChild(totalSpan2);
  ulSummary.appendChild(liProducts);
  ulSummary.appendChild(liOrders);
  ulSummary.appendChild(liPackages);
  ulSummary.appendChild(liAccounting);
  ulSummary.appendChild(liTerminal);
  liProducts.appendChild(liProductsSpan1);
  liProducts.appendChild(liProductsSpan2);
  liProducts.appendChild(liProductsSpan3);
  liOrders.appendChild(liOrdersSpan1);
  liOrders.appendChild(liOrdersSpan2);
  liOrders.appendChild(liOrdersSpan3);
  liPackages.appendChild(liPackagesSpan1);
  liPackages.appendChild(liPackagesSpan2);
  liPackages.appendChild(liPackagesSpan3);
  liAccounting.appendChild(liAccountingSpan1);
  liAccounting.appendChild(liAccountingSpan2);
  liAccounting.appendChild(liAccountingSpan3);
  liTerminal.appendChild(liTerminalSpan1);
  liTerminal.appendChild(liTerminalSpan2);
  liTerminal.appendChild(liTerminalSpan3);

  h2.innerText = "Calculate how much you’ll pay";
  h2.style.textAlign = "center";
  section.style.backgroundColor = "rgb(237, 233, 233)";
  section.style.padding = "1rem";

  sectionDiv.classList.add('sectionDiv');
  form.classList.add('formDiv');
  calculatorSummary.classList.add('calcDiv');

  placeholderOption.innerText = "Choose a package...";
  placeholderOption.value = "Choose a package...";
  placeholderOption.disabled = true;
  placeholderOption.selected = true;
  inputPack.appendChild(placeholderOption);

  basic.innerText = "Basic";
  basic.value = "Basic";
  inputPack.appendChild(basic);
  professional.innerText = "Professional";
  professional.value = "Professional";
  inputPack.appendChild(professional);
  premium.innerText = "Premium";
  premium.value = "Premium";
  inputPack.appendChild(premium);

  inputQty.setAttribute("placeholder", "Enter quantity of products");
  inputQty.setAttribute("type", "number");
  inputOrders.setAttribute("placeholder", "Enter estimated orders in a month");
  inputOrders.setAttribute("type", "number");

  inputCheckAcc.style.width = "20px";
  inputCheckAcc.style.outline = "0";
  inputCheckRent.style.width = "20px";
  inputCheckRent.style.outline = "0";
  textAcc.innerText = "Accounting";
  textAcc.style.display = "inline-block";
  textRent.innerText = "Rental of a payment terminal";
  textRent.style.display = "inline-block";

  function inputStyle(input) {
    input.style.display = "block";
    input.style.width = "100%";
    input.style.padding = "5px";
    input.style.marginBottom = "10px";
    input.style.borderRadius = "5px";
    input.style.border = "1px solid rgb(0, 149, 255)";
    input.style.outline = "0";
    input.style.backgroundColor = "white";
  }
  inputStyle(inputQty);
  inputStyle(inputOrders);
  inputStyle(inputPack);

  function textStyle(text) {
    text.style.color = "rgb(100, 99, 99)";
    text.style.fontSize = ".8rem";
  }
  textStyle(inputPack);
  textStyle(textAcc);
  textStyle(textRent);

  //Accounting & Rent
  function spanStyle(span) {
    span.style.display = "inline-block";
    span.style.height = "20px";
    span.style.width = "20px";
    span.style.backgroundImage = "url(./images/Checkmark.svg)";
    span.style.backgroundRepeat = "no-repeat";
    span.style.position = "relative";
    span.style.right = "15px";
    span.style.top = "10px";
  }
  spanStyle(spanAcc);
  spanStyle(spanRent);

  spanAcc.style.visibility = "hidden";
  spanRent.style.visibility = "hidden";
  inputAcc.addEventListener("click", visibility);
  inputRent.addEventListener("click", visibility);
  function visibility() {
    this.children[1].style.visibility =
      this.children[1].style.visibility === "visible" ? "hidden" : "visible";
  }

  //Events and Calculation:
  liAccounting.style.display = 'none';
  liTerminal.style.display = 'none';

  let value1 = 0, value2 = 0, value3 = 0, value4 = 0, value5 = 0;
  inputAcc.addEventListener("click", function(event) {
    if (this.children[1].style.visibility === "visible") {
        liAccounting.style.display = 'block';
        liAccountingSpan1.innerText = 'Accounting';
        liAccountingSpan3.innerText = '$35';
        value4 = 35;
        calculateTotal();
    } else {
        liAccounting.style.display = 'none';
        value4 = 0;
        calculateTotal();
    }
  });
  inputRent.addEventListener("click", function(event) {
    if (this.children[1].style.visibility === "visible") {
        liTerminal.style.display = 'block';
        liTerminalSpan1.innerText = 'Terminal';
        liTerminalSpan3.innerText = '$5';
        value5 = 5;
        calculateTotal();
    } else {
        liTerminal.style.display = 'none';
        value5 = 0;
        calculateTotal();
    }
  });

  // Events - quantity
  liProducts.style.display = 'none';
  inputQty.addEventListener("change", quantity);
  inputQty.addEventListener("keyup", quantity);
  function quantity(){
    if (this.value > 0) {
        liProducts.style.display = 'block';
        liProductsSpan1.innerText = "Products";
        liProductsSpan2.innerText = `${this.value} * $0.5`;
        liProductsSpan3.innerText = `$${this.value * 0.5}`;
        value1 = parseFloat(liProductsSpan3.innerText.slice(1));
        calculateTotal();
    } else {
        liProducts.style.display = 'none';
        this.value = '';
        value1 = 0;
        calculateTotal();
    }
    return value1;
  }

  // Events - orders
  liOrders.style.display = 'none';
  inputOrders.addEventListener("change", orders);
  inputOrders.addEventListener("keyup", orders);
  function orders() {
    if (this.value > 0) {
        liOrders.style.display = 'block';
        liOrdersSpan1.innerText = "Orders";
        liOrdersSpan2.innerText = `${this.value} * $0.25`;
        liOrdersSpan3.innerText = `$${this.value * 0.25}`;
        value2 = parseFloat(liOrdersSpan3.innerText.slice(1));
        calculateTotal();
    } else {
        liOrders.style.display = 'none';
        this.value = '';
        value2 = 0;
        calculateTotal();
    }
  }

//Events - packages
  liPackages.style.display = 'none';
  inputPack.addEventListener("change", function (event) {
    liPackages.style.display = 'block';
    liPackagesSpan1.innerText = `Package`;
    liPackagesSpan2.innerText = `${this.value}`;
    if (this.value === "Premium") {
      liPackagesSpan3.innerText = `$60`;
      value3 = parseFloat(liPackagesSpan3.innerText.slice(1));
        calculateTotal();
    } else if (this.value === "Professional") {
      liPackagesSpan3.innerText = `$25`;
      value3 = parseFloat(liPackagesSpan3.innerText.slice(1));
        calculateTotal();
    } else {
      liPackagesSpan3.innerText = `$0`;
      value3 = parseFloat(liPackagesSpan3.innerText.slice(1));
        calculateTotal();
    }
  });

  //Adding items for payment:
  function addItem(item) {
    Array.from(item.children).forEach(function (el) {
      el.style.display = "inline-block";
      el.style.width = "33%";
      el.style.textAlign = "center";
      el.style.color = "#fff";
      el.parentElement.style.backgroundColor = "rgb(57, 221, 186)";
      el.parentElement.style.padding = "5px";
      el.parentElement.style.marginTop = ".5rem";
      el.parentElement.style.borderRadius = "5px";
    });
  }
  addItem(liProducts);
  addItem(liOrders);
  addItem(liPackages);
  addItem(liAccounting);
  addItem(liTerminal);

  //Calculating the total
  totalSpan1.innerText = 'TOTAL';
  totalSpan2.style.fontSize = '1.2rem';
  totalSpan2.style.fontWeight = 'bold';
  total.style.backgroundColor = 'rgb(0, 149, 255)';
  total.style.padding = '5px';
  total.style.color = '#fff';
  total.style.borderRadius = '5px';
  total.style.width = '50%';
  total.style.margin = '.5rem auto'
  total.style.display = 'flex';
  total.style.justifyContent = 'space-between';

  function calculateTotal() {
    let total = 0;
    total = total + value1 + value2 + value3 + value4 + value5;
    totalSpan2.innerText = `$${total}`;
  }


  // Contact section
  const sectionContact = document.createElement('section');
  const questionDiv = document.createElement('div');
  const formDiv = document.createElement('form');
  const questH2 = document.createElement('h2');
  const questP = document.createElement('p');
  const formLabelName = document.createElement('label');
  const formInputName = document.createElement('input');
  const formLabelEmail = document.createElement('label');
  const formInputEmail = document.createElement('input');
  const formDivConsent = document.createElement('div');
  const formInputConsent = document.createElement("input");
  const formPDiv = document.createElement('div');
  const formPConsent = document.createElement("p");
  const formSpanConsent = document.createElement("span");
  const infoDiv = document.createElement('div');
  const infoMail = document.createElement('a');
  const infoPhone = document.createElement('a');
  const infoMailImg = document.createElement('img');
  const infoPhoneImg = document.createElement('img');
  const infoMailSpan = document.createElement('span');
  const infoPhoneSpan = document.createElement('span');
  const formBtnDiv = document.createElement('div');
  const formBtn = document.createElement('button');

  main.appendChild(sectionContact);
  sectionContact.appendChild(questionDiv);
  sectionContact.appendChild(formDiv);
  questionDiv.appendChild(questH2);
  questionDiv.appendChild(questP);
  questionDiv.appendChild(infoDiv);
  infoDiv.appendChild(infoMail);
  infoMail.appendChild(infoMailImg);
  infoMail.appendChild(infoMailSpan);
  infoDiv.appendChild(infoPhone);
  infoPhone.appendChild(infoPhoneImg);
  infoPhone.appendChild(infoPhoneSpan);
  formDiv.appendChild(formLabelName);
  formDiv.appendChild(formInputName);
  formDiv.appendChild(formLabelEmail);
  formDiv.appendChild(formInputEmail);
  formDiv.appendChild(formDivConsent);
  formDiv.appendChild(formBtnDiv);
  formBtnDiv.appendChild(formBtn);
  formDivConsent.appendChild(formInputConsent);
  formDivConsent.appendChild(formSpanConsent);
  formDivConsent.appendChild(formPDiv);
  formPDiv.appendChild(formPConsent);
 
  sectionContact.style.padding = '1rem';
  questH2.innerText = 'Any questions?';
  questH2.style.marginBottom = '0';
  questP.innerText = 'Leave your email address or contact us!';
  formLabelName.innerText = 'NAME';
  formLabelEmail.innerText = 'E-MAIL';


  // Info divs
  infoDiv.style.marginTop = '2rem';
  infoMail.setAttribute('href', 'mailto:info@bestshop.xyz');
  infoMail.style.marginBottom = '1rem';
  infoMail.style.marginBottom = '1rem';
  infoPhone.style.position = 'relative';
  infoPhone.style.position = 'relative';
  infoMailImg.style.position = 'absolute';
  infoPhoneImg.style.position = 'absolute';
  infoMailSpan.style.marginLeft = '2.5rem';
  infoMailSpan.style.color = 'gray';
  infoPhoneSpan.style.marginLeft = '2.5rem';
  infoPhoneSpan.style.color = 'gray';

  infoMailSpan.innerText = 'info@bestshop.xyz';
  infoPhone.setAttribute('href', 'tel:123456789');
  infoPhoneSpan.innerText = '123 456 789';

  infoMail.style.display = 'block';
  infoPhone.style.display = 'block';

  infoMailImg.setAttribute('src', './images/Mail Icon.svg');
  infoPhoneImg.setAttribute('src', './images/Phone Icon.svg');

  function formLabelStyle(element) {
    element.style.color = 'rgb(0, 149, 255)';
    element.style.fontSize = '.8rem';
    element.style.display = 'block';
    element.style.marginTop = '1.5rem';
  }
  formLabelStyle(formLabelName);
  formLabelStyle(formLabelEmail);

  function formInputStyle(element) {
    element.style.outline = '0';
    element.style.border = '0';
    element.style.borderBottom = '1px solid gray';
    element.style.width = '100%';
  }
  formInputStyle(formInputName);
  formInputStyle(formInputEmail);

  formDivConsent.style.marginTop = '1.5rem';
  formInputConsent.style.top = '5px';
  formInputConsent.style.width = "20px";
  formInputConsent.style.outline = "0";
  formSpanConsent.style.left = '-15px';
  formPConsent.style.display = "inline-block";
  formPConsent.style.marginLeft = '1rem';
  formPConsent.style.marginBottom = '1rem';
  formPDiv.style.position = 'relative';
  formPDiv.style.left = '20px';
  formPDiv.style.top = '-20px';
  formPDiv.style.paddingRight = '1rem';

  spanStyle(formSpanConsent);
  textStyle(formPConsent);
  formPConsent.innerText = 'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process under the European Parliament’s and Council of the European Union Regulation on the Protection of Natural Persons as of 27 April 2016, with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (Data Protection Directive)';
  formSpanConsent.style.visibility = "hidden";
  formDivConsent.addEventListener("click", visibility);
  formBtnDiv.style.display = 'flex';
  formBtnDiv.style.justifyContent = 'flex-end';
  formBtn.innerText = 'Send';
  formBtn.style.backgroundColor = 'rgb(0, 149, 255)';
  formBtn.style.border = '1px solid rgb(0, 149, 255)';
  formBtn.style.width = '225px';
  formBtn.style.margin = '.5rem 0';

  sectionContact.setAttribute('id', 'sectionContact');
  sectionContact.style.borderBottom = '1px solid gray';
  questionDiv.classList.add('questionDiv');
  formDiv.classList.add('formDiv');

});

 


