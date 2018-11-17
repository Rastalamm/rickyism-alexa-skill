/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
'use strict';
const Alexa = require('alexa-sdk');

const APP_ID = 'xxxx';

const SKILL_NAME = 'Rickyisms';
const GET_FACT_MESSAGE = "Here's your Rickyism: ";
const HELP_MESSAGE = 'You can say tell me a Rickyism, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const data = [
    "A link is only as long as your longest strong chain",
    "All for all and one for one",
    "All in one roof",
    "Awkwardly Situation",
    "Brain Phones",
    "Beauty is in the eye when you hold her",
    "Burn the hatchet at both ends",
    "Brain Compartments and Brain Departments",
    "Can you give me a bit of credjudice?",
    "Catch 23 situation",
    "Looks like a tropical earthquake blew through here",
    "Cock-a-doodle Fucking Ketchup Chips",
    "Come to turns with it",
    "Crystally-clear",
    "Cubic Zarcarbian",
    "Delicately situation",
    "Denial and error",
    "Deerts",
    "Does a bear shit on the pope?",
    "Don't judge a cover of a book by its look",
    "Do onto others as you do onto you",
    "Do you wanna get married by me?",
    "Escape goat",
    "Ever never again",
    "Every kid goes through phrases",
    "False Acriminations",
    "Five-minute rule",
    "For the Gooder of Us All",
    "Friends with the Benedicts",
    "Flying things",
    "Get related",
    "Get Bornt",
    "Get two birds stoned at once",
    "Good things come to those at the gate",
    "Googly search",
    "Gorilla see, Gorilla do",
    "Gram son",
    "Happy however after",
    "Hark attack",
    "Hang your horses",
    "Heart congestion",
    "Hit 'em with everything we caught",
    "Honesty is just a test policy",
    "Honorly system",
    "I do trust his judgmentals",
    "I dont have enough people words to make it understand you the way it understands me",
    "I'm not going to put my dad in jeopardization",
    "Indianapolis Jones",
    "It's better to have a gun and need it than to not have a gun and not need it",
    "It's clear to see who makes the pants here",
    "It doesn't take rocket appliances",
    "I toad a so",
    "Juniper",
    "Keep your friends close, but your enemies toaster",
    "Learnt",
    "Let guy bonds be guy bonds",
    "Long stories get short",
    "Make like a tree and fuck off",
    "Marsmelons",
    "Mating name",
    "Maturinate",
    "My minds started racing against each other",
    "No things attached",
    "North of-Americas",
    "Not in the right frames of the mind",
    "Nulted and void",
    "Off their leeches",
    "On slim ice",
    "One man's garbage is another man person's good ungarbage",
    "Outdoor Curckey Tucker",
    "Passed with flying fuckin' carpets",
    "Pavin' a fuckin' point",
    "Peach'n'cake",
    "People's freedom of choices & voices act",
    "Perspecticts",
    "Pillow berry",
    "Pick someone your own brain size",
    "Plutonium loveship",
    "Praying Atlantis",
    "Refuckulate",
    "Rocket appliances",
    "Samsquatch",
    "Search warranty",
    "Selling me under the bus",
    "Sippy and Garfuckel",
    "Snoopy Dog",
    "Split it 50/50/50",
    "Stretched out",
    "Supply and command",
    "Survival of the fitness",
    "Swallow my prize",
    "Sweet empowered chicken things",
    "Take it and leave it",
    "This deck of the woods",
    "Tempus fuck it",
    "Tropical earthquake",
    "Trying to make my heart attack?",
    "Two turnips in heat",
    "TVs With The Click-Clackers",
    "Water under the fridge",
    "Western Korea",
    "What comes around is all around",
    "Where there's smoke there's wires",
    "Vacational school",
    "Vice Principals",
    "What Julian doesn't grow won't burn him",
    "What Lucy doesn't know won't learn her",
    "What the fuck does that suppose to mean?",
    "Whole different kettle and dish",
    "Worldy Pipe",
    "Worst case Ontario",
    "Scale from one or ten",
    "Spy for a spy",
    "The more thinkings I have about it",
    "What was done was done",
    "Cosby, Bill, and 'Stache"
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
