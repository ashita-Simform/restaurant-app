const users = require('../data/users.json');

exports.getUsers = (req, res) => {
  res.json(users);
};

// Controller to check if a user exists
exports.checkUser = (req, res) => {
  const { email } = req.body;

  // Find user by email
  const user = users.find((u) => u.email === email);

  if (user) {
    res.status(200).json({
      success: true,
      message: 'User found. Access granted.',
      user,
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'User not found. Access denied.',
    });
  }
};