const errorController = (err, req, res, next) => {
  if (process.env.NODE_ENV === "dev") {
    return res.status(500).json({
      status: "error",
      name: err.name,
      error: err,
      stack: err.stack,
    });
  }
  if (err.code && err.code === 11000) {
    return res.status(400).json({
      status: "fail",
      message: `${Object.keys(err.keyValue).at(0)} already in use!`,
    });
  }

  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e) => e.message || null);

    return res.status(400).json({
      status: "fail",
      message: messages.at(0),
    });
  }

  if (process.env.NODE_ENV === "production") {
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: "fail",
        message: err.message,
      });
    }

    //else
    return res.status(500).json({
      status: "error",
      message: "Something went really wrong!",
    });
  }
};

module.exports = errorController;
