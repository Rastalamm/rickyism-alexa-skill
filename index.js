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
    "Alright, Heisenstein",
    "Astronaut Cock & Snoopy The Fuck Dog",
    "Awkwardly Situation",
    "Bee Suave",
    "Brain Phones",
    "Beauty is in the eye when you hold her",
    "Bottle of joy",
    "Breakfast at bed",
    "Burn the hatchet at both ends",
    "Brain Compartments and Brain Departments",
    "Can you give me a bit of credjudice?",
    "Carbonator",
    "Catch 23 situation",
    "CDR",
    "Cherry Trees",
    "Child Reports",
    "Church of Later Day Saints",
    "Looks like a tropical earthquake blew through here",
    "Cock-a-doodle Fucking Ketchup Chips",
    "Come to turns with it",
    "Crop of Shit",
    "Crystally-clear",
    "Cubic Zarcarbian",
    "Decnals",
    "Delicately situation",
    "Denial and error",
    "Deerts",
    "Disinspect",
    "Does a bear shit on the pope?",
    "Don't judge a cover of a book by its look",
    "Do onto others as you do onto you",
    "Do you wanna get married by me?",
    "Dressed all over",
    "DVD",
    "Elemental school",
    "Escape goat",
    "Ever never again",
    "Every kid goes through phrases",
    "False Acriminations",
    "Fenis",
    "Fire Retarded",
    "Fill my feet",
    "Five-minute rule",
    "For the Gooder of Us All",
    "Forward-Fast",
    "Frog",
    "Frustated",
    "FuckEx",
    "Friends with the Benedicts",
    "Flames were golfing",
    "Flying things",
    "Get related",
    "Get Bornt",
    "Get goodin' at it",
    "Get two birds stoned at once",
    "Getting like Hank at this",
    "Golds",
    "Good things come to those at the gate",
    "Googly search",
    "Gorilla see, Gorilla do",
    "Gram son",
    "Happy however after",
    "Hark attack",
    "Hair Shellac",
    "Hang your horses",
    "Heart congestion",
    "Hit 'em with everything we caught",
    "Hobolo",
    "Home trees",
    "Honesty is just a test policy",
    "Honorly system",
    "Hornse",
    "Hyposuction",
    "I do trust his judgmentals",
    "I dont have enough people words to make it understand you the way it understands me",
    "I'm an Optometrist",
    "I'm just stretched out",
    "I'm not going to put my dad in jeopardization",
    "Incubaker",
    "Indianapolis Jones",
    "Ironland",
    "It's better to have a gun and need it than to not have a gun and not need it",
    "It's clear to see who makes the pants here",
    "I-surance",
    "It doesn't take rocket appliances",
    "I toad a so",
    "Juniper",
    "Keep your friends close, but your enemies toaster",
    "Learnt",
    "Leaves comber",
    "Let guy bonds be guy bonds",
    "Let's make toast",
    "Long stories get short",
    "Looks like we need two turnips and heat",
    "Lurches",
    "Magdolin",
    "Make like a tree and fuck off",
    "Make my words",
    "Man-On Man-On",
    "Marsmelons",
    "Mating name",
    "Maturinate",
    "Meat Dick(s)",
    "Mexicali Stand-on",
    "Middleland",
    "Multi-usefullness",
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
    "PFD",
    "Phill Cosby",
    "Pillow berry",
    "Pick someone your own brain size",
    "Play that 'Diane Sawyer' song",
    "Plutonium loveship",
    "Praying Atlantis",
    "Refuckulate",
    "Reap off",
    "Responsables",
    "Rocket appliances",
    "Samsquatch",
    "Sasparilla",
    "Search warranty",
    "Selling me under the bus",
    "Sippy and Garfuckel",
    "Slidey Things",
    "Snoopy Dog",
    "Specialtilizations",
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
    "Work in process",
    "Worldy Pipe",
    "Worst case Ontario",
    "Scale from one or ten",
    "Spy for a spy",
    "Sudyfeds",
    "The more thinkings I have about it",
    "What was done was done",
    "Your Majesty",
    "Cosby, Bill, and 'Stache",
    "La La Lamp"
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
