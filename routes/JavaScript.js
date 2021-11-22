const JavaScript = require('../models/JavaScriptQuestions');
const router = require('express').Router();

// Create Questions
router.post('/', async (req, res) => {
  const newQuestion = new JavaScript(req.body);

  try {
    const savedQuestion = await newQuestion.save();
    res.status(200).json(savedQuestion);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
