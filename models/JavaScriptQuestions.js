const mongoose = require('mongoose');

const JavascriptQuestionSchema = new mongoose.Schema(
  {
    question: { type: String, required: true, unique: true },
    correctAnswer: { type: String, required: true },
    wrongAnswers: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Questions', JavascriptQuestionSchema);
