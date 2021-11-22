const mongoose = require('mongoose');

const ReduxQuestionSchema = new mongoose.Schema(
  {
    Question: { type: String, required: true, unique: true },
    correctAnswer: { type: String, required: true },
    wrongAnswers: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Questions', ReduxQuestionSchema);
