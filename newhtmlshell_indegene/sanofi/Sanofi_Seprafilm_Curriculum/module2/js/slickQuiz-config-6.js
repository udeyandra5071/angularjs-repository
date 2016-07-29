// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "<b></b>",
        "main":    "<p><b>Choose the correct answer</b></p>",
        "results": "<h3 style='text-align:center;'>Finished</h3><h2 style='text-align:center;'>Congratulations you have completed the test.</h2>",
        "level1":  "Excellent",
        "level2":  "Brilliant",
        "level3":  "Good",
        "level4":  "Average",
        "level5":  "Poor" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "The most common site of adhesion formation among gynecologic procedures is the ________.",
            "a": [
                {"option": "Fallopian tubes",      "correct": false},
                {"option": "Ovaries",     "correct": true},
                {"option": "Small intestine",      "correct": false},
                {"option": "Large intestine",     "correct": false} // no comma here
            ],
            "correct": "<p><b>Correct!</b></p>",
            "incorrect": "<p><b>Wrong.</b><br>Correct answer: b. Ovaries</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the following factors contribute to postsurgical adhesions? (Choose all that apply.)",
            "a": [
                {"option": "Tissue manipulation",               "correct": true},
                {"option": "Desiccation",              "correct": true},
                {"option": "Contact with blood",              "correct": true},
                {"option": "Heat or electrocautery",              "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><b>Correct!</b> </p>",
            "incorrect": "<p><b>Wrong. </b><br>Correct answer: a. Tissue manipulation <br>b. Desiccation <br>c. Contact with blood<br>d. Heat or electrocautery</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The incidence of postsurgical adhesions following abdominal surgery has been reported to be between ______.",
            "a": [
                {"option": "55% and 100% ",           "correct": false},
                {"option": "20% and 30%",                   "correct": false},
                {"option": "67% and 93%",                 "correct": true},
                {"option": "7.3% and 10%",                  "correct": false} // no comma here
            ],
            "correct": "<p><b>Correct!</b></p>",
            "incorrect": "<p><b>Wrong. </b><br>Correct answer: c. 67% and 93%</p>" // no comma here
        },
        { // Question 4
            "q": "Which of the following is the chronological sequence of the postsurgical healing mechanism?",
            "a": [
                {"option": "Arrival of macrophages and fibroblasts to the wound - development of fibrin matrix - fibrin matrix advancement - increasing vascularization and structural organization.",       "correct": true},
                {"option": "Development of fibrin matrix - fibrin matrix advancement - arrival of macrophages and fibroblasts to the wound - increasing vascularization and structural organization.",       "correct": false},
                {"option": "Fibrin matrix advancement - development of fibrin matrix - arrival of macrophages and fibroblasts to the wound - increasing vascularization and structural organization.",       "correct": false},
                {"option": "Increasing vascularization and structural organization - development of fibrin matrix - fibrin matrix advancement - arrival of macrophages and fibroblasts to the wound.",       "correct": false} // no comma here
            ],
            "correct": "<p><b>Correct!</b></p>",
            "incorrect": "<p><b>Wrong. </b><br>Correct answer: a.	Arrival of macrophages and fibroblasts to the wound - development of fibrin matrix - fibrin matrix advancement - increasing vascularization and structural organization.</p>" // no comma here
        }
       // { // Question 5
           // "q": "Is Earth bigger than a basketball?",
           // "a": [
               // {"option": "Yes",    "correct": true},
             //   {"option": "No",     "correct": false} // no comma here
           // ],
           // "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
          //  "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
      //  } // no comma here
    ]
};
