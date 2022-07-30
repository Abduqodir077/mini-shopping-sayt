let addBtn = document.querySelector("#add");
let subBtn = document.querySelector("#sub");
let qty = document.querySelector("#qtyBox");

addBtn.addEventListener("click", () => {
  qty.value = parseInt(qty.value) + 1;
});

subBtn.addEventListener("click", () => {
  if (qty.value <= 0) {
    qty.value = 0;
  } else {
    qty.value = parseInt(qty.value) - 1;
  }
});

let adBtn = document.querySelector("#ad");
let supBtn = document.querySelector("#sup");
let qtu = document.querySelector("#qtuBoks");

adBtn.addEventListener("click", () => {
  qtu.value = parseInt(qtu.value) + 1;
});

supBtn.addEventListener("click", () => {
  if (qtu.value <= 0) {
    qty.value = 0;
  } else {
    qtu.value = parseInt(qtu.value) - 1;
  }
});

// -------------------------------------

let adaBtn = document.querySelector("#ada");
let suvBtn = document.querySelector("#suv");
let qti = document.querySelector("#qtiBoks");

adaBtn.addEventListener("click", () => {
  qti.value = parseInt(qti.value) + 1;
});

suvBtn.addEventListener("click", () => {
  if (qti.value <= 0) {
    qty.value = 0;
  } else {
    qti.value = parseInt(qtu.value) - 1;
  }
});

// --------------------------------------


let adaaBtn = document.querySelector("#adaa");
let suaBtn = document.querySelector("#sua");
let qta = document.querySelector("#qtaBox");

adaaBtn.addEventListener("click", () => {
  qta.value = parseInt(qta.value) + 1;
});

suaBtn.addEventListener("click", () => {
  if (qta.value <= 0) {
    qty.value = 0;
  } else {
    qta.value = parseInt(qtu.value) - 1;
  }
});

// --------------------------------------

let adsBtn = document.querySelector("#ads");
let susBtn = document.querySelector("#sus");
let qts = document.querySelector("#qtsBox");

adsBtn.addEventListener("click", () => {
  qts.value = parseInt(qts.value) + 1;
});

susBtn.addEventListener("click", () => {
  if (qts.value <= 0) {
    qty.value = 0;
  } else {
    qts.value = parseInt(qts.value) - 1;
  }
});

// ----------------------------------------

let adxBtn = document.querySelector("#adx");
let suxBtn = document.querySelector("#sux");
let qtx = document.querySelector("#qtxBox");

adxBtn.addEventListener("click", () => {
  qtx.value = parseInt(qtx.value) + 1;
});

suxBtn.addEventListener("click", () => {
  if (qtx.value <= 0) {
    qty.value = 0;
  } else {
    qtx.value = parseInt(qtx.value) - 1;
  }
});

// ----------------------------------------

let adwBtn = document.querySelector("#adw");
let suwBtn = document.querySelector("#suw");
let qtw = document.querySelector("#qtwBox");

adwBtn.addEventListener("click", () => {
  qtw.value = parseInt(qtw.value) + 1;
});

suwBtn.addEventListener("click", () => {
  if (qtw.value <= 0) {
    qty.value = 0;
  } else {
    qtw.value = parseInt(qtw.value) - 1;
  }
});

// ----------------------------------------

let adtBtn = document.querySelector("#adt");
let sutBtn = document.querySelector("#sut");
let qtt = document.querySelector("#qttBox");

adtBtn.addEventListener("click", () => {
  qtt.value = parseInt(qtt.value) + 1;
});

sutBtn.addEventListener("click", () => {
  if (qtt.value <= 0) {
    qtt.value = 0;
  } else {
    qtt.value = parseInt(qtt.value) - 1;
  }
});

// --------------------------------------

let adqBtn = document.querySelector("#adq");
let suqBtn = document.querySelector("#suq");
let qtq = document.querySelector("#qtqBox");

adqBtn.addEventListener("click", () => {
  qtq.value = parseInt(qtq.value) + 1;
});

suqBtn.addEventListener("click", () => {
  if (qtq.value <= 0) {
    qtq.value = 0;
  } else {
    qtq.value = parseInt(qtq.value) - 1;
  }
});

// --------------------------------------

let adzBtn = document.querySelector("#adz");
let suzBtn = document.querySelector("#suz");
let qtz = document.querySelector("#qtzBox");

adzBtn.addEventListener("click", () => {
  qtz.value = parseInt(qtz.value) + 1;
});

suzBtn.addEventListener("click", () => {
  if (qtz.value <= 0) {
    qtz.value = 0;
  } else {
    qtz.value = parseInt(qtz.value) - 1;
  }
});