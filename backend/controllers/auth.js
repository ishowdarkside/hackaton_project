const path = require("path");
const User = require(path.join(__dirname, "..", "models", "User"));
const AppError = require(path.join(__dirname, "..", "utilities", "AppError"));
const catchAsync = require(path.join(
  __dirname,
  "..",
  "utilities",
  "catchAsync"
));
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = catchAsync(async (req, res, next) => {
  const { email, fullName, password, role } = req.body;

  const user = await User.create({ email, fullName, password, role });
  const token = await jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );

  res.status(201).json({
    status: "success",
    message: "Signed up successfully!",
    token,
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new AppError(401, "Please provide email and password"));
  const user = await User.findOne({ email });
  if (!user) return next(new AppError(401, "Incorrect email/password"));
  bcrypt.compare(password, user.password, (err, result) => {
    console.log(result);
    if (err || !result)
      return next(new AppError(401, "Incorrect email/passowrd"));
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.status(200).json({
      status: "success",
      message: "Logged in successfully!",
      token,
    });
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")?.at(1);

  if (!token) return next(new AppError(401, "Unauthorized. Please login"));

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (!decoded || !decoded.role)
    return next(new AppError(401, "Unauthorized, please login"));

  const me = await User.findById(decoded.id);
  req.user = me;
  next();
});
