import dialogflow from './dialogflow';

const botCommunication = (req, res) => {
  dialogflow(req.body.message).then((data) => {
    setTimeout(() => {
      res.json({
        query: data.queryText,
        response: data.fulfillmentText,
        intent: data.intent.displayName,
      });
    }, 700);
  });
}

export { botCommunication };