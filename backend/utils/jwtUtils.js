const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production',
    { 
      expiresIn: process.env.JWT_EXPIRE || '7d' 
    }
  );
};

const verifyToken = (token) => {
  try {
    return jwt.verify(
      token, 
      process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production'
    );
  } catch (error) {
    throw new Error('Invalid token');
  }
};

const generateRefreshToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production',
    { 
      expiresIn: '30d' 
    }
  );
};

module.exports = {
  generateToken,
  verifyToken,
  generateRefreshToken
}; 