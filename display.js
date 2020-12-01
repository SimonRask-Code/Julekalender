function welcome() {
    let welcome0;
    let welcome1;
    let radius = windowWidth * 0.3

    background(12)
    questionButton.show()
    // Hide what we dont want to see
    passwordInput.hide()
    UserInput.hide()
    loginbutton.hide()
    NewUserbutton.hide()
    if (typeof radio !== 'undefined') {
        radio.hide()
    }

    if (User_name) {
        switchUserButton.show();
        background(LightBackground);
        textSize(windowWidth * 0.1);
        textFont("Tangerine")

        welcome0 = "Velkommen " + User_name + ", til";
        fill(255);
        textAlign(CENTER, CENTER);
        text(welcome0, windowWidth / 2 - 1.2, windowHeight / 6 - 1.2);
        ellipse(windowWidth / 2, windowHeight / 2 - 7, radius);
        fill(LightText);
        textAlign(CENTER, CENTER);
        text(welcome0, windowWidth / 2, windowHeight / 6);

        welcome1 = "Anja's Julekalender!";
        fill(255);
        textAlign(CENTER, CENTER);
        text(welcome1, windowWidth / 2 - 1.2, windowHeight - windowHeight / 6 - 1.2);
        ellipse(windowWidth / 2, windowHeight / 2 - 7, radius);
        fill(LightText);
        textAlign(CENTER, CENTER);
        text(welcome1, windowWidth / 2, windowHeight - windowHeight / 6);

    } else {
        background(LightBackground);
        textSize(windowWidth * 0.1);
        textFont("Tangerine")

        welcome0 = "Velkommen til";
        fill(255);
        textAlign(CENTER, CENTER);
        text(welcome0, windowWidth / 2 - 1.2, windowHeight / 6 - 1.2);
        ellipse(windowWidth / 2, windowHeight / 2 - 7, radius);
        fill(LightText);
        textAlign(CENTER, CENTER);
        text(welcome0, windowWidth / 2, windowHeight / 6);

        welcome1 = "Anja's Julekalender!";
        fill(255);
        textAlign(CENTER, CENTER);
        text(welcome1, windowWidth / 2 - 1.2, windowHeight - windowHeight / 6 - 1.2);
        ellipse(windowWidth / 2, windowHeight / 2 - 7, radius);
        fill(LightText);
        textAlign(CENTER, CENTER);
        text(welcome1, windowWidth / 2, windowHeight - windowHeight / 6);
    }



}

function welcome_page_setup() {
    let d = day();
    let xsize = windowWidth * 0.3;
    let font_size = int(max(windowWidth * 0.05, 36))
    let s2 = 'font-size:' + 0.5 * font_size + 'px;text-align:center;font-family: Abril Fatface;'


    questionButton = createButton('Låge ' + d + '!');
    questionButton.position(windowWidth / 2 - xsize / 2, windowHeight / 2 - xsize / 2);
    questionButton.size(xsize, xsize);
    questionButton.style('border-radius:50%; font-family: Tangerine;  font-size : ' + floor(0.3 * xsize) + 'px');
    questionButton.hide();
    questionButton.mousePressed(function () {
        if (User_name) {
            curPage = 'question';
        } else {
            curPage = 'login';
        }
    });

    switchUserButton = createButton('Skift Bruger');
    switchUserButton.position(20, windowHeight - font_size);
    switchUserButton.size(windowWidth / 5, font_size * 0.8);
    switchUserButton.style(s2)
    switchUserButton.hide();
    switchUserButton.mousePressed(function () {
        curPage = 'login';
    });
}

function show_login_page() {
    background(LightBackground)
    questionButton.hide()
    passwordInput.show()
    UserInput.show()
    loginbutton.show()
    NewUserbutton.show()

    if (typeof radio !== 'undefined') {
        radio.hide();
        submitbutton.hide();
    }

    if (global_error) {
        textSize(windowWidth * 0.1);
        textFont("Tangerine")


        fill(255);
        textAlign(CENTER, TOP);
        text(global_error, windowWidth * 0.2 - 1.2, 2.3 * windowHeight / 4 - 1.2, windowWidth * 0.6, windowHeight);

        fill(errorColor);
        textAlign(CENTER, TOP);
        text(global_error, windowWidth * 0.2, 2.3 * windowHeight / 4, windowWidth * 0.6, windowHeight);

    }
}

function show_question() {
    let d = day()
    let welcome;
    let theText = 'Dagens Spørgsmål Er:';
    background(LightBackground)
    questionButton.hide()
    passwordInput.hide()
    UserInput.hide()
    loginbutton.hide()
    NewUserbutton.hide()
    switchUserButton.show()

    background(LightBackground)

    if (typeof global_answer === 'undefined') {
        if (question && typeof radio === 'undefined') {
            question_page_setup()
            radio.show()
            submitbutton.show();
        } else {
            radio.show()
            submitbutton.show();
        }
    } else {
        radio.hide()
        submitbutton.hide();

        textSize(windowWidth * 0.06);
        fill(LightText);
        textAlign(CENTER, TOP);
        let resp = 'Tak for dit svar, leg med igen imorgen!'
        text(resp, windowWidth / 2, 2 * windowHeight / 3);
    }





    // welcome
    if (User_name) {
        welcome = 'Glædelig ' + d + '. december ' + User_name + '!'
    } else {
        welcome = 'Glædelig ' + d + '. december!'
    }
    textSize(windowWidth * 0.1);
    textFont("Tangerine")

    fill(255);
    textAlign(CENTER, CENTER);
    text(welcome, windowWidth / 2 - 1.2, windowHeight * 0.1 - 1.2);

    fill(LightText);
    textAlign(CENTER, CENTER);
    text(welcome, windowWidth / 2, windowHeight * 0.1);;


    // question
    textSize(windowWidth * 0.05);
    textFont("Tangerine")
    fill(255);
    textAlign(CENTER, TOP);
    text(theText, windowWidth * 0.2 - 1.2, windowHeight * 0.2 - 1.2, windowWidth * 0.6, windowHeight);
    fill(LightText);
    textAlign(CENTER, TOP);
    text(theText, windowWidth * 0.2, windowHeight * 0.2 - 1.2, windowWidth * 0.6, windowHeight);



    if (question) {
        textSize(windowWidth * 0.06);
        fill(LightText);
        textAlign(CENTER, TOP);
        //question = 'Pyrus har i mange år været et kæmpe hit hos børn. Men hvor mange julekalendere er der egentlig lavet om Pyrus?'
        text(question, 0, windowHeight / 3, windowWidth, windowHeight);
    }
}

function question_page_setup() {
    let font_size = int(max(windowWidth * 0.05, 36))

    let s2 = 'font-size:' + 0.5 * font_size + 'px;text-align:center;font-family: Abril Fatface;'
    radio = createRadio();

    textSize(0.9 * font_size)
    textFont("Tangerine")
    let tSize = max(textWidth(choise_1), textWidth(choise_2));

    if (textWidth(choise_1) < textWidth(choise_2)) {
        radio.option(2, choise_2);
        radio.option(1, choise_1);
    } else {
        radio.option(1, choise_1);
        radio.option(2, choise_2);
    }



    radio.style('color: rgb(250, 155, 45); font-family:Tangerine;font-size:' + 0.8 * font_size + 'px')
    if (tSize > windowWidth / 2) {
        radio.style('width', tSize + 'px')
    }

    // Set the width
    radio.position(1, windowHeight * 0.65).center('horizontal')

    submitbutton = createButton('Send Svar');
    submitbutton.style(s2)

    submitbutton.size(windowWidth / 4, windowWidth * 0.05);
    submitbutton.position(0, radio.y + windowWidth * 0.13).center('horizontal');


    submitbutton.mousePressed(function () {
        submit_ans(User_name, radio.value(), day())
    });

    submitbutton.hide();
    radio.hide()
}

function login_page_setup() {
    let font_size = int(max(windowWidth * 0.05, 36))
    let s = 'font-size:' + font_size + 'px;text-align:center;border:none;'
    let s2 = 'font-size:' + 0.5 * font_size + 'px;text-align:center;font-family: Abril Fatface;'
    let thisWidth = windowWidth / 2 - 0.25 * windowWidth;
    let thisHeight = windowHeight / 4
    passwordInput = createInput('Password', 'password')
    passwordInput.position(thisWidth, thisHeight).size(0.5 * windowWidth, font_size * 1.5)
    passwordInput.mouseClicked(function () { passwordInput.value('') })
    passwordInput.style(s).style(st('Inset'))
    //passwordInput.elt.focus()

    UserInput = createInput('Bruger Navn', 'text')
    UserInput.position(thisWidth, thisHeight - 2 * font_size).size(0.5 * windowWidth, font_size * 1.5)
    UserInput.style(s).style(st('Inset'))
    UserInput.mouseClicked(function () { UserInput.value('') })
    passwordInput.hide()
    UserInput.hide()

    loginbutton = createButton('Login');
    loginbutton.position(passwordInput.x, passwordInput.y + 2 * font_size);
    loginbutton.size(passwordInput.width / 3, font_size * 0.8);
    loginbutton.style(s2)

    loginbutton.hide();
    loginbutton.mousePressed(function () {
        login_user(UserInput.value(), passwordInput.value(), ga._ga)
    });


    NewUserbutton = createButton('Ny bruger');
    NewUserbutton.size(passwordInput.width / 3, font_size * 0.8);
    NewUserbutton.position(
        passwordInput.x + passwordInput.width - NewUserbutton.width,
        passwordInput.y + 2 * font_size
    );
    NewUserbutton.style(s2);
    NewUserbutton.hide()
    NewUserbutton.mousePressed(function () {
        if (UserInput.value() != 'Bruger Navn') {
            add_user(UserInput.value(), passwordInput.value(), ga._ga)
        }
    });
}


function st(name) {
    s = {
        'Simple Shadow': 'color: #ffffff;background-color: transparent;text-shadow: #474747 3px 5px 2px;',
        'Inset': 'color: #616161; border-radius:16px;',
        'Neon': 'color: #ffffff;text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #49ff18, 0 0 30px #49ff18, 0 0 40px #49ff18, 0 0 55px #49ff18, 0 0 75px #49ff18;',
        'Fire': 'color: #ffffff;text-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px;',
        'Blur': 'color: rgba(255,255,255,.3);text-shadow: rgba(255,255,255,.5) 0 0 15px, rgba(255,255,255,.5) 0 0 10px;',
        'Realistic Emboss': 'color: rgba(0,0,0,.6);text-shadow: rgba(0,0,0,.2) 2px 6px 5px,rgba(255,255,255,.4) 0 -4px 30px;',
        'Artistic Emboss': 'color:  #d9d9d9;text-shadow: rgba(255,255,255,.1) -1px -1px 1px,rgba(0,0,0,.5) 1px 1px 1px;',
        'Simple 3D': 'color:  #ffffff;text-shadow: #969696 1px 3px 0, #aba8a8 1px 13px 5px;',
        'Soft 3D': 'color:  #ffffff; text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);',
        'Realistic 3D': 'color:  #ffffff;text-shadow: #ccc 0 1px 0, #c9c9c9 0 2px 0, #bbb 0 3px 0, #b9b9b9 0 4px 0, #aaa 0 5px 0,rgba(0,0,0,.1) 0 6px 1px, rgba(0,0,0,.1) 0 0 5px, rgba(0,0,0,.3) 0 1px 3px, rgba(0,0,0,.15) 0 3px 5px, rgba(0,0,0,.2) 0 5px 10px, rgba(0,0,0,.2) 0 10px 10px, rgba(0,0,0,.1) 0 20px 20px;',
        'Bold and Sharp': 'color:  #d9d9d9;text-shadow: #2e2e2e 0 4px 5px;',
        'Classic Movie': 'color:  #000000;text-shadow: 2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c;'
    }
    return s[name]
}