let LightText;
let DarkText;
let LightBackground;
let DarkBackground;
let LatestText;
let LatestBackground;
let errorColor;

let user_url = "https://8z1a0dvami.execute-api.eu-central-1.amazonaws.com/default/ChristmasCalendar"

let global_error;

let User_name;
let User_password;

let invalid_login = false;

let curPage = 'welcome'


let question;
let choise_1;
let choise_2;
let correct;
let global_answer;
let answer_obj;

let fallingSnow = [];
let NotFallingSnow = [];

function preload() {
  ga = document.cookie.split('; ').reduce((prev, current) => {
    const [name, value] = current.split('=');
    prev[name] = value;
    return prev
  }, {});

  // get user from cookies
  get_question()
  get_user(ga._ga) // works!
  login_page_setup()
  welcome_page_setup()


}

function setup() {
  // Set colors
  DarkText = color(255, 160 + 20, 50 + 20)
  LightText = color(255 - 5, 160 - 5, 50 - 5);
  LatestText = color(255, 160 + 20, 50 + 20)
  DarkBackground = color(115, 37, 33);
  errorColor = color(115 + 20, 37 + 20, 33 + 20)
  LightBackground = color(41 - 5, 88 - 5, 73 - 5)
  LatestBackground = color(115, 37, 33);

  // Create canvas
  createCanvas(windowWidth, windowHeight);

  // create snow

  for (i = 0; i < 100; i++) {
    fallingSnow.push(new flake(true));
  }




}

function draw() {


  switch (curPage) {
    case 'welcome':
      welcome()
      break
    case 'login':
      show_login_page()
      break
    case 'question':
      show_question()
  }
  // display and update falling snow
  for (var i = fallingSnow.length - 1; i >= 0; i--) {
    fallingSnow[i].update();
    fallingSnow[i].display();
    // pop the sucker if its not falling
    if (!fallingSnow[i].moving) {
      NotFallingSnow.push(fallingSnow[i]);
      fallingSnow.splice(i, 1);
      fallingSnow.push(new flake())
    }
  }

  // Display and update not falling snow
  for (var j = 0; j < NotFallingSnow.length; j++) {

    NotFallingSnow[j].display();
    NotFallingSnow[j].update();

    // pop the sucker if not showing
    if (NotFallingSnow[j].opacity < 0) {
      NotFallingSnow.splice(j, 1);
    }
  }
}


function mouseClicked() {

}