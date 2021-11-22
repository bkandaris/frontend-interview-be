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

// Read Questions
// by id
router.get('/find/:id', async (req, res) => {
  try {
    const question = await JavaScript.findById(req.params.id);
    res.status(200).json(question);
  } catch (err) {
    res.status(500).json(err);
  }
});

// all questions
router.get('/', async (req, res) => {
  try {
    const questions = await JavaScript.find();
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Questions
router.put('/:id', async (req, res) => {
  try {
    const updatedQuestion = await JavaScript.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedQuestion);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete Questions
router.delete('/:id', async (req, res) => {
  try {
    await JavaScript.findByIdAndDelete(req.params.id);
    res.status(200).json('Question has been deleted');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
