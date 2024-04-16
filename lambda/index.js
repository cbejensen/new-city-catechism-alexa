/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

/**
 * @type {import('ask-sdk-core').RequestHandler}
 */
const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest'
    );
  },
  // use JSDoc to type handlerInput as LaunchRequest
  handle(handlerInput) {
    const speakOutput =
      'Welcome to New City Catechism. To begin with question 1, say, "begin." For a random question, say, "random."';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  },
};

const questions = [
	{
			"part": 1,
			"song": "1",
			"question": "What is our only hope in life and death?",
			"answer": "That we are not our own but belong to God."
	},
	{
			"part": 1,
			"song": "2",
			"question": "What is God?",
			"answer": "God is the creator of everyone and everything."
	},
	{
			"part": 1,
			"song": "3",
			"question": "How many persons are there in God?",
			"answer": "There are three persons in one God: the Father, the Son, and the Holy Spirit."
	},
	{
			"part": 1,
			"song": "4-5",
			"question": "How and why did God create us?",
			"answer": "God created us male and female in his own image to glorify him."
	},
	{
			"part": 1,
			"song": "4-5",
			"question": "What else did God create?",
			"answer": "God created all things and all his creation was very good."
	},
	{
			"part": 1,
			"song": "6",
			"question": "How can we glorify God?",
			"answer": "By loving him and by obeying his commands and law."
	},
	{
			"part": 1,
			"song": "7",
			"question": "What does the law of God require?",
			"answer": "That we love God with all our heart, soul, mind, and strength; and love our neighbor as ourselves."
	},
	{
			"part": 1,
			"song": "8",
			"question": "What is the law of God stated in the Ten Commandments?",
			"answer": "You shall have no other gods before me. You shall not make for yourself an idol. You shall not misuse the name of the <span class='small-caps'>Lord</span> your God. Remember the Sabbath day by keeping it holy. Honor your father and your mother. You shall not murder. You shall not commit adultery. You shall not steal. You shall not give false testimony. You shall not covet."
	},
	{
			"part": 1,
			"song": "9-12",
			"question": "What does God require in the first, second, and third commandments?",
			"answer": "First, that we know God as the only true God. Second, that we avoid all idolatry. Third, that we treat God’s name with fear and reverence."
	},
	{
			"part": 1,
			"song": "9-12",
			"question": "What does God require in the fourth and fifth commandments?",
			"answer": "Fourth, that on the Sabbath day we spend time in worship of God. Fifth, that we love and honor our father and our mother."
	},
	{
			"part": 1,
			"song": "9-12",
			"question": "What does God require in the sixth, seventh, and eighth commandments?",
			"answer": "Sixth, that we do not hurt or hate our neighbor. Seventh, that we live purely and faithfully. Eighth, that we do not take without permission that which belongs to someone else."
	},
	{
			"part": 1,
			"song": "9-12",
			"question": "What does God require in the ninth and tenth commandments?",
			"answer": "Ninth, that we do not lie or deceive. Tenth, that we are content, not envying anyone."
	},
	{
			"part": 1,
			"song": "13",
			"question": "Can anyone keep the law of God perfectly?",
			"answer": "Since the fall, no human has been able to keep the law of God perfectly."
	},
	{
			"part": 1,
			"song": "14",
			"question": "Did God create us unable to keep his law?",
			"answer": "No, but because of the disobedience of Adam and Eve we are all born in sin and guilt, unable to keep God’s law."
	},
	{
			"part": 1,
			"song": "15",
			"question": "Since no one can keep the law, what is its purpose?",
			"answer": "That we may know the holy nature of God, and the sinful nature of our hearts; and thus our need of a Savior. "
	},
	{
			"part": 1,
			"song": "16-17",
			"question": "What is sin?",
			"answer": "Sin is rejecting or ignoring God in the world he created, not being or doing what he requires in his law."
	},
	{
			"part": 1,
			"song": "16-17",
			"question": "What is idolatry?",
			"answer": "Idolatry is trusting in created things rather than the Creator."
	},
	{
			"part": 1,
			"song": "18",
			"question": "Will God allow our disobedience and idolatry to go unpunished?",
			"answer": "No, God is righteously angry with our sins and will punish them both in this life, and in the life to come."
	},
	{
			"part": 1,
			"song": "19",
			"question": "Is there any way to escape punishment and be brought back into God’s favor?",
			"answer": "Yes, God reconciles us to himself by a Redeemer."
	},
	{
			"part": 1,
			"song": "20",
			"question": "Who is the Redeemer?",
			"answer": "The only Redeemer is the Lord Jesus Christ."
	},
	{
			"part": 2,
			"song": "21",
			"question": "What sort of Redeemer is needed to bring us back to God?",
			"answer": "One who is truly human and also truly God."
	},
	{
			"part": 2,
			"song": "22-23",
			"question": "Why must the Redeemer be truly human?",
			"answer": "That in human nature he might on our behalf perfectly obey the whole law and suffer the punishment for human sin."
	},
	{
			"part": 2,
			"song": "22-23",
			"question": "Why must the Redeemer be truly God?",
			"answer": "That because of his divine nature his obedience and suffering would be perfect and effective."
	},
	{
			"part": 2,
			"song": "24",
			"question": "Why was it necessary for Christ, the Redeemer, to die?",
			"answer": "Christ died willingly in our place to deliver us from the power and penalty of sin and bring us back to God."
	},
	{
			"part": 2,
			"song": "25",
			"question": "Does Christ’s death mean all our sins can be forgiven?",
			"answer": "Yes, because Christ’s death on the cross fully paid the penalty for our sin, God will remember our sins no more."
	},
	{
			"part": 2,
			"song": "26",
			"question": "What else does Christ’s death redeem?",
			"answer": "Every part of fallen creation."
	},
	{
			"part": 2,
			"song": "27",
			"question": "Are all people, just as they were lost through Adam, saved through Christ?",
			"answer": "No, only those who are elected by God and united to Christ by faith."
	},
	{
			"part": 2,
			"song": "28",
			"question": "What happens after death to those not united to Christ by faith?",
			"answer": "They will be cast out from the presence of God, into hell, to be justly punished, forever. "
	},
	{
			"part": 2,
			"song": "29",
			"question": "How can we be saved?",
			"answer": "Only by faith in Jesus Christ and in his substitutionary atoning death on the cross."
	},
	{
			"part": 2,
			"song": "30",
			"question": "What is faith in Jesus Christ?",
			"answer": "Receiving and resting on him alone for salvation as he is offered to us in the gospel."
	},
	{
			"part": 2,
			"song": "31",
			"question": "What do we believe by true faith?",
			"answer": "We believe in God the Father Almighty, Maker of heaven and earth; and in Jesus Christ his only Son our Lord, who was conceived by the Holy Spirit, born of the virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried. He descended into hell. The third day he rose again from the dead. He ascended into heaven, and is seated at the right hand of God the Father Almighty; from there he will come to judge the living and the dead. We believe in the Holy Spirit, the holy catholic church, the communion of saints, the forgiveness of sins, the resurrection of the body, and the life everlasting."
	},
	{
			"part": 2,
			"song": "32",
			"question": "What do justification and sanctification mean?",
			"answer": "Justification means our declared righteousness before God. Sanctification means our gradual, growing righteousness."
	},
	{
			"part": 2,
			"song": "33",
			"question": "Should those who have faith in Christ seek their salvation through their own works, or anywhere else?",
			"answer": "No, everything necessary to salvation is found in Christ."
	},
	{
			"part": 2,
			"song": "34",
			"question": "Since we are redeemed by grace alone, through Christ alone, must we still do good works and obey God’s Word?",
			"answer": "Yes, so that our lives may show love and gratitude to God; and so that by our godly behavior others may be won to Christ."
	},
	{
			"part": 2,
			"song": "35",
			"question": "Since we are redeemed by grace alone, through faith alone, where does this faith come from?",
			"answer": "From the Holy Spirit."
	},
	{
			"part": 3,
			"song": "36",
			"question": "What do we believe about the Holy Spirit?",
			"answer": "That he is God, coeternal with the Father and the Son."
	},
	{
			"part": 3,
			"song": "37",
			"question": "How does the Holy Spirit help us?",
			"answer": "The Holy Spirit convicts us of our sin, and he enables us to pray and to understand God’s Word."
	},
	{
			"part": 3,
			"song": "38",
			"question": "What is prayer?",
			"answer": "Prayer is pouring out our hearts to God."
	},
	{
			"part": 3,
			"song": "39",
			"question": "With what attitude should we pray?",
			"answer": "With love, perseverance, and gratefulness."
	},
	{
			"part": 3,
			"song": "40",
			"question": "What should we pray?",
			"answer": "The whole Word of God directs us in what we should pray."
	},
	{
			"part": 3,
			"song": "41",
			"question": "What is the Lord’s Prayer?",
			"answer": "Our Father in heaven, hallowed be your name, your kingdom come, your will be done, on earth as it is in heaven. Give us today our daily bread. And forgive us our debts, as we also have forgiven our debtors. And lead us not into temptation, but deliver us from evil."
	},
	{
			"part": 3,
			"song": "42",
			"question": "How is the Word of God to be read and heard?",
			"answer": "With diligence, preparation, and prayer; so that we may accept it with faith and practice it in our lives."
	},
	{
			"part": 3,
			"song": "43",
			"question": "What are the sacraments or ordinances?",
			"answer": "Baptism and the Lord’s Supper."
	},
	{
			"part": 3,
			"song": "44",
			"question": "What is baptism?",
			"answer": "Baptism is the washing with water in the name of the Father, the Son, and the Holy Spirit."
	},
	{
			"part": 3,
			"song": "45",
			"question": "Is baptism with water the washing away of sin itself?",
			"answer": "No, only the blood of Christ can cleanse us from sin."
	},
	{
			"part": 3,
			"song": "46",
			"question": "What is the Lord’s Supper?",
			"answer": "Christ commanded all Christians to eat bread and to drink from the cup in thankful remembrance of him."
	},
	{
			"part": 3,
			"song": "47",
			"question": "Does the Lord’s Supper add anything to Christ’s atoning work?",
			"answer": "No, Christ died once for all."
	},
	{
			"part": 3,
			"song": "48",
			"question": "What is the church?",
			"answer": "A community elected for eternal life and united by faith, who love, follow, learn from, and worship God together."
	},
	{
			"part": 3,
			"song": "49",
			"question": "Where is Christ now?",
			"answer": "Christ rose bodily from the grave on the third day after his death and is seated at the right hand of the Father."
	},
	{
			"part": 3,
			"song": "50",
			"question": "What does Christ’s resurrection mean for us?",
			"answer": "Christ triumphed over sin and death so that all who trust in him are raised to new life in this world and to everlasting life in the world to come."
	},
	{
			"part": 3,
			"song": "51",
			"question": "Of what advantage to us is Christ’s ascension?",
			"answer": "Christ is now advocating for us in the presence of his Father and also sends us his Spirit."
	},
	{
			"part": 3,
			"song": "52",
			"question": "What hope does everlasting life hold for us?",
			"answer": "That we will live with and enjoy God forever in the new heaven and the new earth, where we will be forever freed from all sin in a renewed, restored creation."
	}
]

/**
 * @type {import('ask-sdk-core').RequestHandler}
 */
const NextQuestionIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'NextQuestionIntent'
    );
  },
  handle(handlerInput) {
    const attributesManager = handlerInput.attributesManager;
    const sessionAttributes = attributesManager.getSessionAttributes();
    let currentQuestion = (sessionAttributes['currentQuestion'] || 0) + 1;
		if (currentQuestion > questions.length) {
			currentQuestion = 1;
		}
		sessionAttributes['currentQuestion'] = currentQuestion;
    
    const speakOutput = `Question ${currentQuestion}: ${questions[currentQuestion - 1].question}`;

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  },
};

/**
 * @type {import('ask-sdk-core').RequestHandler}
 */
const AnswerIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'AnswerIntent'
    );
  },
  handle(handlerInput) {
    const attributesManager = handlerInput.attributesManager;
    const sessionAttributes = attributesManager.getSessionAttributes();
    const currentQuestion = sessionAttributes['currentQuestion']
    
		let speakOutput;
    if (!currentQuestion) {
			speakOutput = 'Sorry, something went wrong. Please say, "begin" or "random."';
    } else {
			speakOutput = `The answer is: ${questions[currentQuestion - 1].answer} Say "next" for the next question.`;
		}

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  },
};

/**
 * @type {import('ask-sdk-core').RequestHandler}
 */
const QuestionNumberIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) ===
        'QuestionNumberIntent'
    );
  },
  handle(handlerInput) {
    const speakOutput =
      'That is not supported at this time. Please say, "begin" or "random."';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  },
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent'
    );
  },
  handle(handlerInput) {
    const speakOutput = 'You can say hello to me! How can I help?';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      (Alexa.getIntentName(handlerInput.requestEnvelope) ===
        'AMAZON.CancelIntent' ||
        Alexa.getIntentName(handlerInput.requestEnvelope) ===
          'AMAZON.StopIntent')
    );
  },
  handle(handlerInput) {
    const speakOutput = 'Goodbye!';

    return handlerInput.responseBuilder.speak(speakOutput).getResponse();
  },
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet
 * */
const FallbackIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) ===
        'AMAZON.FallbackIntent'
    );
  },
  handle(handlerInput) {
    const speakOutput = "Sorry, I don't know about that. Please try again.";

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  },
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs
 * */
const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) ===
      'SessionEndedRequest'
    );
  },
  handle(handlerInput) {
    console.log(
      `~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`
    );
    // Any cleanup logic goes here.
    return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
  },
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents
 * by defining them above, then also adding them to the request handler chain below
 * */
const IntentReflectorHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
    );
  },
  handle(handlerInput) {
    const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
    const speakOutput = `You just triggered ${intentName}`;

    return (
      handlerInput.responseBuilder
        .speak(speakOutput)
        //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
        .getResponse()
    );
  },
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below
 * */
const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    const speakOutput =
      'Sorry, I had trouble doing what you asked. Please try again.';
    console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  },
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom
 * */
exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    NextQuestionIntentHandler,
		AnswerIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    FallbackIntentHandler,
    SessionEndedRequestHandler,
    IntentReflectorHandler
  )
  .addErrorHandlers(ErrorHandler)
  .withCustomUserAgent('sample/hello-world/v1.2')
  .lambda();
