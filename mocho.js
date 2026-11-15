// 1-misol
{
  let son = -5;
  if (son > 0) {
    console.log("Son musbat");
  } else if (son < 0) {
    console.log("Son manfiy");
  } else {
    console.log("Son nol");
  }
}

// 2-misol
{
  let a = 12;
  let b = 7;
  if (a > b) {
    console.log("Kattasi:", a);
  } else if (b > a) {
    console.log("Kattasi:", b);
  } else {
    console.log("Sonlar teng");
  }
}

// 3-misol
{
  let son = 0;
  if (son === 0) {
    console.log("Son nol");
  } else {
    console.log("Son nol emas");
  }
}

// 4-misol
{
  let a = 8;
  let b = 8;
  if (a === b) {
    console.log("sonlar teng");
  } else {
    console.log("teng emas");
  }
}

// 5-misol
{
  let son = 15;
  if (son % 3 === 0 && son % 5 === 0) {
    console.log("FIZZBuzz");
  } else if (son % 3 === 0) {
    console.log("FIZZ");
  } else if (son % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(son);
  }
}

// 6-misol
{
  let yosh = 20;
  if (yosh >= 18) {
    console.log("Haydovchilik guvohnomasini olasiz");
  } else {
    console.log("hali yoshsiz");
  }
}

// 7-misol
{
  let kun = 1;
  switch (kun) {
    case 1:
      console.log("Dushanba");
      break;
    case 2:
      console.log("Seshanba");
      break;
    case 3:
      console.log("Chorshanba");
      break;
    case 4:
      console.log("Payshanba");
      break;
    case 5:
      console.log("Juma");
      break;
    case 6:
      console.log("Shanba");
      break;
    case 7:
      console.log("Yakshanba");
      break;
    default:
      console.log("Hafta kuni raqami 1 dan 7 gacha bo'lishi kerak");
  }
}

// 8-misol
{
  let son = 475;
  let oxirgiRaqam = son % 10;
  if (oxirgiRaqam % 2 === 0) {
    console.log("Oxirgi raqam juft");
  } else {
    console.log("Oxirgi raqam toq");
  }
}

// 9-misol
{
  let son = 8;
  if (son > 0) {
    son = son + 1;
  } else {
    son = son - 2;
  }
  console.log(son);
}

// 10-misol
{
  let a = 5;
  let b = -2;
  let c = 9;
  let musbatlar = 0;

  if (a > 0) {
    musbatlar = musbatlar + 1;
  }
  if (b > 0) {
    musbatlar = musbatlar + 1;
  }
  if (c > 0) {
    musbatlar = musbatlar + 1;
  }

  console.log("Musbat sonlar soni:", musbatlar);
}