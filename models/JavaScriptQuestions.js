const mongoose = require('mongoose');

const JavascriptQuestionSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    correctAnswer: { type: Object, required: true },
    wrongAnswers: { type: Array, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Questions', JavascriptQuestionSchema);
