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
            "q": "The omentum or peritoneal grafts may be used to cover raw peritonealized areas.",
            "a": [
                {"option": "True", "correct": false},
                {"option": "False", "correct": true}
            ],
			"select_any": true,
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Wrong.</span>Correct answer: False</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Closing the peritoneum during colorectal procedures is associated with suboptimal healing.",
            "a": [
                {"option": "True", "correct": true},
                {"option": "False", "correct": false},
            ],
           //"select_any": true,
            "correct": "<p><span>Correct!</span> </p>",
            "incorrect": "<p><span>Wrong. </span>Correct answer: True</p>" // no comma here
        }
        /* { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The incidence of postsurgical adhesions following abdominal surgery has been reported to be between ______.",
            "a": [
                {"option": "55% and 100% ", "correct": false},
                {"option": "20% and 30%",                   "correct": false},
                {"option": "67% and 93%",                 "correct": true},
                {"option": "7.3% and 10%",                  "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Wrong. </span>Correct answer: INTANZA 15 µg</p>" // no comma here
        },
        { // Question 4
            "q": "Which of the following is the chronological sequence of the postsurgical healing mechanism?",
            "a": [
                {"option": "Arrival of macrophages and fibroblasts to the wound - development of fibrin matrix - fibrin matrix advancement - increasing vascularization and structural organization.",       "correct": true},
                {"option": "Development of fibrin matrix - fibrin matrix advancement - arrival of macrophages and fibroblasts to the wound - increasing vascularization and structural organization.",       "correct": false},
                {"option": "Fibrin matrix advancement - development of fibrin matrix - arrival of macrophages and fibroblasts to the wound - increasing vascularization and structural organization.",       "correct": false},
                {"option": "Increasing vascularization and structural organization - development of fibrin matrix - fibrin matrix advancement - arrival of macrophages and fibroblasts to the wound.",       "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Wrong. </span>Correct answer: 6 months</p>" // no comma here
        }, */
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
