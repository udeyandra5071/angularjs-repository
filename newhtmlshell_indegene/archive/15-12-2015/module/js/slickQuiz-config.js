// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "<b>Learning Activity </b>",
        "main":    "<p><b>Choose the best response and click/tap the Submit button.</b></p>",
        "results": "<h3 style='text-align:center;'>Finished</h3><h2 style='text-align:center;'>Congratulations you have completed the test.</h2>",
        "level1":  "Excellent",
        "level2":  "Brilliant",
        "level3":  "Good",
        "level4":  "Average",
        "level5":  "Poor" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following vaccines is manufactured by Abbott?",
            "a": [
                {"option": "Agrippal",      "correct": false},
                {"option": "Influvac",     "correct": true},
                {"option": "Fluad",      "correct": false},
                {"option": "Optaflu",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What is the minimum age requirement for the administration of Agrippal?",
            "a": [
                {"option": "2 months",               "correct": false},
                {"option": "3 months ",              "correct": true},
                {"option": "4 months ",              "correct": false},
                {"option": "6 months ",              "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>That's right!!</span> </p>",
            "incorrect": "<p><span>Uhh no.</span></p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which of the following influenza vaccines is not indicated for use in infants/children?",
            "a": [
                {"option": "INTANZA 15 µg ",           "correct": true},
                {"option": "Imuvac",                   "correct": false},
                {"option": "Influvac",                 "correct": false},
                {"option": "Fluarix",                  "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" // no comma here
        },
        { // Question 4
            "q": "What is the minimum age requirement for the administration of Imuvac in children?",
            "a": [
                {"option": "4 months",       "correct": false},
                {"option": "6 months",       "correct": true},
                {"option": "2 months",       "correct": false},
                {"option": "3 months",       "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" // no comma here
        },
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
