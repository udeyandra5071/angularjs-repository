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
            "q": "Is it acceptable for Sam to attend the meeting along with James and promote Product X?",
            "a": [
                {"option": "Yes, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",      "correct": false},
                {"option": "Yes, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",     "correct": false},
                {"option": "No, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",      "correct": true},
                {"option": "No, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Wrong.</span></p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Under what circumstances would it be acceptable for Sam to accompany James to his meeting?",
            "a": [
                {"option": "Sam Lorem Ipsum is simply dummy text of the printing and typesetting industry.",               "correct": false},
                {"option": "Sam Lorem Ipsum is simply dummy text of the printing and typesetting industry.",              "correct": true},
                {"option": "Sam Lorem Ipsum is simply dummy text of the printing and typesetting industry.",              "correct": false},
                {"option": "Sam Lorem Ipsum is simply dummy text of the printing and typesetting industry.",              "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Wrong. </span></p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "At the end of the presentation, one of the physicians requests James for some off-label information regarding the new product. Is it acceptable for James to provide this information? </span>",
            "a": [
                {"option": "No, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",           "correct": true},
                {"option": "Yes, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",                   "correct": false},
                //{"option": "Cytotoxic T cell",                 "correct": false},
                //{"option": "Regulatory T cell",                  "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Wrong. </span></p>" // no comma here
        },
        //{ // Question 4
           // "q": "What is the minimum age requirement for the administration of Imuvac in children?",
          //  "a": [
           //     {"option": "4 months",       "correct": false},
            //    {"option": "6 months",       "correct": true},
             //   {"option": "2 months",       "correct": false},
             //   {"option": "3 months",       "correct": false} // no comma here
         //  ],
            //"correct": "<p><span>Correct!</span></p>",
           // "incorrect": "<p><span>Wrong. </span>Correct answer: 6 months</p>" // no comma here
        //},
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
