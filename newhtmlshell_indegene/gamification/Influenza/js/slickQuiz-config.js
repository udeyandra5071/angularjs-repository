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
            
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Wrong.</span>Correct answer: Influvac</p>" // no comma here
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
