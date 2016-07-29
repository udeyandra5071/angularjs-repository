// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "<b>Learning Activity </b>",
        "main":    "<p>Help Sarah determine her goals of MNT by solving the puzzle.</p>",
        "results": "<h3 style='text-align:center;'>Finished</h3><h2 style='text-align:center;'>Congratulations you have completed the test.</h2>",
        "level1":  "Excellent",
        "level2":  "Brilliant",
        "level3":  "Good",
        "level4":  "Average",
        "level5":  "Poor" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Pick the right ones by clicking/tapping on the individual pieces. There can be more than one correct answer.",
            "a": [
                {"option": "To give no focus on the pleasure of eating",      "correct": false},
                {"option": "To promote and support healthful eating patterns",     "correct": true},
                {"option": "To address individual nutrition needs",      "correct": true},
                {"option": "To maintain the pleasure of eating",     "correct": true},
                {"option": "Use practical tools for developing healthful eating patterns", "correct": true} 
            ],
            "select_any": true,
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<div class='row'><div class='col s6'><h3>You are wrong! <br>Correct Answer</h3><img src='images/complete-pzl.png' /></div><div class='col s6 padding-top-54 offset6'><h3>Feedback:</h3><h3>The goals of MNT for adults with diabetes are:</h3><p>To promote and support healthful eating patterns, emphasizing a variety of nutrient-dense foods in appropriate portion sizes, in order to improve overall health and specifically to</p><ul class='list-type'><li>Achieve and maintain body-weight goals</li><li>Attain individualized glycemic, blood pressure, and lipid goals</li><li>Delay or prevent complications of diabetes</li></ul><p>To address individual nutrition needs based on personal and cultural preferences, health literacy and numeracy, access to healthful foods, willingness and ability to make behavioral changes, and barriers to change</p><p>To maintain the pleasure of eating by providing non-judgmental messages about food choices</p><p>To provide an individual with diabetes with practical tools for developing healthful eating patterns rather than focusing on individual macronutrients, micronutrients, or single foods </p></div></div>" },
{ // Question 1 - Multiple Choice, Single True Answer
            "q": "Carbohydrate sources high in protein should not be used to treat/prevent hypoglycaemia.",
            "a": [
                {"option": "True",      "correct": true},
                {"option": "False",     "correct": false}
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<div class='row'><div class='col s6'><h3>You are wrong! <br>Correct Answer : True</h3></div><div class='col s6 padding-top-54 offset6'><h3>Feedback:</h3><p>In individuals with type 2 diabetes, ingested protein appears to increase insulin response without increasing plasma glucose concentrations. Therefore, carbohydrate sources high in protein should not be used to treat or prevent hypoglycemia</p></div></div>"}   
]
};
