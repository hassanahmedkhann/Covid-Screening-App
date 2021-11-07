// const questions = [
//   {
//     q1: "Do you have Fever above 101.4?",
//     q2: "Do you have Cough - (Dry Cough)?",
//     q3: "Do you have Cough - (Wet Cough)?",
//     q4: "Do you have Shortness of Breath?",
//     q5: "Do you have Flu?",
//     q6: "Have you travelled abroad in the last 15 days?",
//     q7: "Have you been in contact with any person who has recently travelled internationally?",
//     q8: "Do you have chest infection?",
//     q9: "Is your age more than or equal to 60 years of age?",
//     q10: "Due to Co-morbidities, do you take any medicine?",
//   },
// ];
const questions = [
  "",
  "Do you have Cough - (Dry Cough)?",
  "Do you have Cough - (Wet Cough)?",
  "Do you have Shortness of Breath?",
  "Do you have Flu?",
  "Have you travelled abroad in the last 15 days?",
  "Have you been in contact with any person who has recently travelled internationally?",
  "Do you have chest infection?",
  "Is your age more than or equal to 60 years of age?",
  "Due to Co-morbidities, do you take any medicine?",
];
const names = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
const newbtn = `<a href='../index1/index.html'><button class="btn btn-primary btn-sm">Goto Font Page.</button></a>`;
let thediv = document.querySelector(".c2");
let thediv2 = document.querySelector(".c3");
let thebtn1 = document.querySelector(".btn1");
let thebtn2 = document.querySelector(".btn2");
const result1 = `<ul>
<li>1.	Isolate From Others.</li>
<li>2.	Rest and Take Care.</li>
<li>3.	Call Work Health Providers.</li>
<li>4.	Monitor Symptoms.</li>
<li>5.	Talk to Someone About Testing.</li>
<li>6.	Follow Govt Instructions.</li>
<li>As of now, your answers suggest that you may need testing. If anything changes, take the questionnaire again.</li></ul>`;

const result3 = `<ul>
<li>1.	No Test Needed at this time</li>
<li>2.	Maintain Social Distance.</li>
<li>3.	Avoid groups of people and keep six feet apart from anyone who’s not part of the household. Especially avoid those showing symptoms.</li>
<li>As of now, their answers suggest they do not need to get tested. If anything changes, take the questionnaire again.</li></ul>`;

let yesses = 0;
let nos = 0;
let resdatay = [];
let index = 1;
let imgno = 0;
function handlechangeyes() {
  if (imgno >= 9 || index >= 10) {
    Result();
    return;
  }
  thediv.innerHTML = questions[index];
  thediv2.innerHTML = `' \n            <img class="imgc" src="./${names[imgno]}.png" );="">\n        '`;
  yesses = yesses + 1;
  resdatay = resdatay + index;
  index = index + 1;
  imgno = imgno + 1;
}
function handlechangeno() {
  if (imgno >= 9 || index >= 10) {
    console.log("Final: ", resdatay, "Index:", index);
    Result();
    return;
  }

  thediv.innerHTML = questions[index];
  thediv2.innerHTML = `' \n            <img class="imgc" src="./${names[imgno]}.png" );="">\n        '`;
  index = index + 1;
  imgno = imgno + 1;
}
//Result Calculation
function Result(resdata) {
  thebtn1.classList.add("btn3");
  thebtn2.classList.add("btn3");
  thediv2.classList.add("btn3");
  const btn = document.querySelector(".link1");
  const link = document.querySelector(".link2");
  btn.classList.remove("link1");
  link.classList.remove("link2");

  if (resdatay == 124689) {
    thediv.innerHTML = "Result 1: High Probability of Corona!";
    thediv2.classList.remove("btn3");
    thediv2.innerHTML = result1;
  } else if (resdatay == 124) {
    thediv.innerHTML = "Result 2: Suspected for Corona!";
    thediv2.classList.remove("btn3");
    thediv2.innerHTML = result1;
  } else {
    thediv.innerHTML = "Result 3: You are all Good!";
    thediv2.classList.remove("btn3");
    thediv2.innerHTML = result3;
  }
  index = 1;
  imgno = 0;
}
