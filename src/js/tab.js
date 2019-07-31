import { MDCSlider } from "@material/slider";
import { MDCTabBar } from "@material/tab-bar";
import numeral from "numeral";
var amount_consumption = 100000;
var month_consumption = 12;
var rate_consumption = 3.5;

var b_amount_consumption = 1000000;
var b_month_consumption = 12;
var b_rate_consumption = 3.2;

var pre_pay = 150000;
var lizing_vne = 3000000;
var zeel_hugacaa = 12;
var zeel_hvv = 2.9;

const panels = document.querySelector(".panels");

// new MDCTabBar(document.querySelector(".mdc-tab-bar"));
const tab = new MDCTabBar(document.querySelector(".mdc-tab-bar"));
tab.listen("MDCTabBar:activated", function({ detail: tabs }) {
  var index = tabs.index;
  updatePanel(index);
  pre_pay_slider.layout();
  lizing_vne_slider.layout();
  zeel_hugacaa_slider.layout();
  zeel_hvv_slider.layout();
  b_amount_consumption_slider.layout();
  b_month_consumption_slider.layout();
  b_rate_consumption_slider.layout();
});

const updatePanel = index => {
  var active = panels.querySelector(".panel.active");
  if (active) {
    active.classList.remove("active");
  }
  var newpanel = panels.querySelector(".panel:nth-child(" + (index + 1) + ")");
  if (newpanel) {
    newpanel.classList.add("active");
  }
};

//
const b_consumption_update = () => {
  var c_interest = b_rate_consumption / 12 / 100;
  var total = 1.0;
  for (var i = 1; i <= b_month_consumption; i++) {
    total = total * (1 + c_interest);
  }
  var result = (b_amount_consumption * c_interest) / (1 - 1 / total);
  var final = numeral(Math.round(result)).format("0,0");
  var total = result * b_month_consumption;
  document.getElementById("b_niit_hvv").innerHTML =
    Math.floor(b_rate_consumption * 12) + " %";
  console.log(b_rate_consumption);
  document.getElementById("b_sard_toloh").innerHTML = final + " ₮";
};
const consumption_update = () => {
  var c_interest = rate_consumption / 12 / 100;
  var total = 1.0;
  for (var i = 1; i <= month_consumption; i++) {
    total = total * (1 + c_interest);
  }
  var result = (amount_consumption * c_interest) / (1 - 1 / total);
  var final = numeral(Math.round(result)).format("0,0");
  var total = result * month_consumption;
  document.getElementById("niit_hvv").innerHTML =
    Math.floor(rate_consumption * 12) + " %";
  document.getElementById("sard_toloh").innerHTML = final + " ₮";
};
const lizing_update = () => {
  var c_amount = lizing_vne;
  var c_prepay = pre_pay;
  var cinterest = zeel_hvv;
  var c_interest = cinterest / 12 / 100;
  var term_request = zeel_hugacaa;
  var total = 1.0;
  for (var i = 1; i <= term_request; i++) {
    total = total * (1 + c_interest);
  }
  c_amount -= c_prepay;
  var r = (c_amount * c_interest) / (1 - 1 / total);
  var result = numeral(Math.round(r)).format("0,0");
  document.getElementById("lizin_niit_hvv").innerHTML =
    Math.floor(zeel_hvv * 12) + " %";
  document.getElementById("lizin_sard_toloh").innerHTML = result + " ₮";
  var lizing = numeral(Math.round(pre_pay)).format("0,0");
  document.getElementById("urid").innerHTML = lizing + " ₮";
};
b_consumption_update();
consumption_update();
lizing_update();
const amount_consumption_input = document.getElementById(
  "amount_consumption_input"
);
const month_consumption_input = document.getElementById(
  "month_consumption_input"
);
const rate_consumption_input = document.getElementById(
  "rate_consumption_input"
);
const pre_pay_input = document.getElementById("pre_pay_input");
const zeel_hugacaa_input = document.getElementById("zeel_hugacaa_input");
const zeel_hvv_input = document.getElementById("zeel_hvv_input");

const amount_consumption_slider = new MDCSlider(
  document.getElementById("amount_consumption")
);
const month_consumption_slider = new MDCSlider(
  document.getElementById("month_consumption")
);
const rate_consumption_slider = new MDCSlider(
  document.getElementById("rate_consumption")
);
const b_amount_consumption_slider = new MDCSlider(
  document.getElementById("b_amount_consumption")
);
const b_month_consumption_slider = new MDCSlider(
  document.getElementById("b_month_consumption")
);
const b_rate_consumption_slider = new MDCSlider(
  document.getElementById("b_rate_consumption")
);
const pre_pay_slider = new MDCSlider(document.getElementById("pre_pay"));
const lizing_vne_slider = new MDCSlider(document.getElementById("lizing_vne"));
const zeel_hugacaa_slider = new MDCSlider(
  document.getElementById("zeel_hugacaa")
);
const zeel_hvv_slider = new MDCSlider(document.getElementById("zeel_hvv"));
//
amount_consumption_slider.listen("MDCSlider:change", _ => {
  amount_consumption = amount_consumption_input.value =
    amount_consumption_slider.value;
  consumption_update();
});
month_consumption_slider.listen("MDCSlider:change", _ => {
  month_consumption = month_consumption_input.value =
    month_consumption_slider.value;
  consumption_update();
});
rate_consumption_slider.listen("MDCSlider:change", _ => {
  rate_consumption = rate_consumption_input.value =
    rate_consumption_slider.value / 100;
  consumption_update();
});
b_amount_consumption_slider.listen("MDCSlider:change", _ => {
  b_amount_consumption = b_amount_consumption_input.value =
    b_amount_consumption_slider.value;
  b_consumption_update();
});
b_month_consumption_slider.listen("MDCSlider:change", _ => {
  b_month_consumption = b_month_consumption_input.value =
    b_month_consumption_slider.value;
  b_consumption_update();
});
b_rate_consumption_slider.listen("MDCSlider:change", _ => {
  b_rate_consumption = b_rate_consumption_input.value =
    b_rate_consumption_slider.value / 100;
  b_consumption_update();
});
pre_pay_slider.listen("MDCSlider:change", _ => {
  pre_pay = pre_pay_input.value = pre_pay_slider.value;
  lizing_update();
});
lizing_vne_slider.listen("MDCSlider:change", _ => {
  lizing_vne = lizing_vne_input.value = lizing_vne_slider.value;
  lizing_update();
});
zeel_hugacaa_slider.listen("MDCSlider:change", _ => {
  zeel_hugacaa = zeel_hugacaa_input.value = zeel_hugacaa_slider.value;
  lizing_update();
});
zeel_hvv_slider.listen("MDCSlider:change", _ => {
  zeel_hvv = zeel_hvv_input.value = zeel_hvv_slider.value / 100;
  lizing_update();
});

amount_consumption_input.addEventListener("keyup", e => {
  amount_consumption = e.target.value;
  consumption_update();
});
month_consumption_input.addEventListener("keyup", e => {
  month_consumption = e.target.value;
  consumption_update();
});
rate_consumption_input.addEventListener("keyup", e => {
  rate_consumption = e.target.value;
  consumption_update();
});

b_amount_consumption_input.addEventListener("keyup", e => {
  b_amount_consumption = e.target.value;
  b_consumption_update();
});
b_month_consumption_input.addEventListener("keyup", e => {
  b_month_consumption = e.target.value;
  b_consumption_update();
});
b_rate_consumption_input.addEventListener("keyup", e => {
  b_rate_consumption = e.target.value;
  b_consumption_update();
});

pre_pay_input.addEventListener("keyup", e => {
  pre_pay = e.target.value;
  lizing_update();
});
lizing_vne_input.addEventListener("keyup", e => {
  lizing_vne = e.target.value;
  lizing_update();
  console.log(lizing_vne);
});
zeel_hugacaa_input.addEventListener("keyup", e => {
  zeel_hugacaa = e.target.value;
  lizing_update();
});
zeel_hvv_input.addEventListener("keyup", e => {
  zeel_hvv = e.target.value;
  console.log(zeel_hvv);
  lizing_update();
});
