const path = require("path");
const catchAsync = require(path.join(
  __dirname,
  "..",
  "utilities",
  "catchAsync"
));
const AppError = require(path.join(__dirname, "..", "utilities", "AppError"));
const OpenAI = require("openai");

exports.prompt = catchAsync(async (req, res, next) => {
  const { question } = req.body;
  if (!question)
    return next(
      new AppError(400, "Before prompting AI, please input your question")
    );
  const request = await fetch(`https://api.openai.com/v1/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
      temperature: 0.7,
    }),
  });

  const response = await request.json();

  res.status(200).json({
    status: "success",
    response: response.choices.messages,
  });
});
