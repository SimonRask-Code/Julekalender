//function get_user(cookie_ga) {
// Gets user from ga
//
//    httpPost(user_url, 'json', {
//       usage: 'ga_fetch',
//        ga: cookie_ga
//    }, (result) => {
//        if (result.statusCode == 200) {
//            User_name = result.body.user_name;
//            User_password = result.body.password;
//        }
//    })
//}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function add_user(UserName, password, cookie_ga) {
    httpPost(user_url, 'json', {
        usage: 'add_user',
        UserName: UserName,
        password: password,
        ga: cookie_ga
    }, (result) => {
        if (result.statusCode == 200) {
            User_name = UserName;
            User_password = password;
            curPage = 'question';
            global_error = undefined;
            document.cookie = "username=" + UserName + "; expires=Fri, 18 Dec 20202 12:00:00 UTC";
            document.cookie = "password=" + password + "; expires=Fri, 18 Dec 20202 12:00:00 UTC";
        } else {
            global_error = 'Ugyldig brugernavn';
        }
    })
}

function get_question() {
    httpPost(user_url, 'json', {
        usage: 'get_question',
        day: day()
    }, (result) => {
        if (result.statusCode == 200) {
            question = result.body.question
            choise_1 = result.body.choise_1
            choise_2 = result.body.choise_2
            correct = result.body.correct
            answer_obj = {
                one: choise_1,
                two: choise_2,
            }
            print('done')
        }
    })
}

function login_user(UserName, password, cookie_ga) {
    let data = {
        usage: 'check_user',
        UserName: UserName,
        password: password,
        ga: cookie_ga
    }
    httpPost(user_url, 'json', data, (result) => {
        if (result.statusCode == 200) {
            User_name = UserName;
            User_password = password;
            curPage = 'question';
            global_error = undefined;
            global_answer = undefined;
            document.cookie = "username=" + UserName + "; expires=Fri, 18 Dec 20202 12:00:00 UTC";
            document.cookie = "password=" + password + "; expires=Fri, 18 Dec 20202 12:00:00 UTC";
        } else {
            global_error = 'Forkert brugernavn eller adgangskode';
        }

    })
}

function submit_ans(UserName, answer, question) {
    let data = {
        usage: 'submit_ans',
        UserName: UserName,
        answer: answer,
        question: question
    }
    if (answer) {
        httpPost(user_url, 'json', data, (result) => {
            if (result.statusCode == 200) {
                if (answer == 1) {
                    global_answer = answer_obj.one;
                } else {
                    global_answer = answer_obj.two;
                };
            } else {
                if (answer == 1) {
                    global_answer = answer_obj.one;
                } else {
                    global_answer = answer_obj.two;
                }

            }
        })
    } else {
        print('no answer')
    }
}