var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Learn More.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
	"questions": [
        {// Question 1
            "q": " How can false minima be reduced in case of error in recall in feedback neural networks?",
            "a": [
                {"option": " by providing additional units", "correct": false},
                {"option": "by using probabilistic update", "correct": true},
                {"option": "can be either probabilistic update or using additional units", "correct": false},
                {"option": "none of the mentioned", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2
            "q": "What is a Boltzman machine?",
            "a": [
                {"option": "A feedback network with hidden units", "correct": false},
                {"option": "A feedback network with hidden units and probabilistic update", "correct": true},
                {"option": "A feed forward network with hidden units", "correct": false},
                {"option": "A feed forward network with hidden units and probabilistic update", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
    
        {// Question 3 - Multiple Choice, Single True Answer
            "q": "What is objective of linear autoassociative feedforward networks? ",
            "a": [
                {"option": "to associate a given pattern with itself ", "correct": true},
                {"option": "to associate a given pattern with others ", "correct": false},
                {"option": " to associate output with input", "correct": false},
                {"option": " none of the mentioned", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": " What is the objective of a pattern storage task in a network?",
            "a": [
                {"option": "to store a given set of patterns", "correct": false},
                {"option": "to recall a give set of patterns", "correct": false},
                {"option": "both to store and recall", "correct": true},
                {"option": "none of the mentioned", "correct": false},
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 5 - Multiple Choice, Multiple True Answers, Select All
            "q": "What property should a feedback network have, to make it useful for storing information?",
            "a": [
                {"option": "accretive behaviour", "correct": true},
                {"option": "interpolative behaviour", "correct": false},
                {"option": "both accretive and interpolative behaviour", "correct":false},
                {"option": " none of the mentioned", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        }
    ]
};// JavaScript Document