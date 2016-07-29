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
                {"option": "Yes, since James is only presenting data regarding the clinical trials and not promoting the product himself, it is acceptable for Sam to attend the meeting and promote Ipsen’s product",      "correct": false},
                {"option": "Yes, since Sam is relatively new to the organisation, James can take him along to the meeting to introduce him to the physicians and Sam can then use this opportunity to talk to them about Product X",     "correct": false},
                {"option": "No, it is not acceptable for Sam to attend the meeting and promote Ipsen’s product, as non promotional meeting organized by MSL with HCPs (be it individual or collective) in the presence of a sales representative is prohibited and can be done only for the purpose of making an introduction",      "correct": true},
                {"option": "No, it is not acceptable for Sam to attend the meeting as the meeting was requested by Prof Reynolds and sales representatives are not allowed to be a part of such reactive meetings",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Wrong.</span></p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Under what circumstances would it be acceptable for Sam to accompany James to his meeting?",
            "a": [
                {"option": "Sam cannot accompany James to the meeting at any circumstances",               "correct": false},
                {"option": "Sam can attend the meeting with James only for the purpose of being introduced to the physicians. He should not be allowed to actively participate in the meeting or talk to the physicians regarding Product X",              "correct": true},
                {"option": "Sam can attend the meeting with James if Prof Reynolds has no objections to Sam being present at the meeting and speaking to his team of physicians regarding Product X",              "correct": false},
                {"option": "Sam can attend the meeting with James if all the content that he proposes to present at the meeting has been reviewed and approved by Ipsen’s review team",              "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Wrong. </span></p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "At the end of the presentation, one of the physicians requests James for some off-label information regarding the new product. Is it acceptable for James to provide this information? </span>",
            "a": [
                {"option": "No, MSL’s are prohibited from making any response to unsolicited requests for off-label information on an Ipsen product whilst in the presence of a  Commercial colleague",           "correct": true},
                {"option": "Yes, a core activity of the MSL role is to handle all unsolicited requests for off-label information on Ipsen products",                   "correct": false},
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
