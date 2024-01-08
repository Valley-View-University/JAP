import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import axios from 'axios';
import dotenv from "dotenv";

const router = express.Router();
dotenv.config();

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
}
  try {
    console.log("Creating user:", email);
    const hashedPassword = await bcrypt.hash(password, 10);
    // Add user to database
    const newUser = await User.create({ email, password: hashedPassword });
    console.log("User created:", newUser);
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: 'Error creating user' });
  }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    console.log("Login request:", req.body);
  try {
    const user = await User.findByEmail(email);
    console.log("User found:", user);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch);
    if (isMatch) {
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error logging in' });
  }
});





router.post('/process-gpt', async (req, res) => {
  const { userInput } = req.body;

  const apiKey = process.env.OPENAI_KEY;
  console.log('----------> OpenAI API Key:', process.env.OPENAI_KEY);

  try {
      // const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
          prompt: userInput,
          max_tokens: 150 // Adjust as needed
      }, {
          headers: {
              'Authorization': `Bearer ${apiKey}`
          }
      });

      res.json({ gptResponse: response.data.choices[0].text });
  } catch (error) {
      console.error('Error in /process-gpt:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

// router.post('/process-gpt', (req, res) => {
//   res.json({ message: 'Endpoint reached successfully' });
// });






// Endpoint to change password
// router.post('/change-password', async (req, res) => {
//   const { userId, currentPassword, newPassword } = req.body;

//   try {
//       const user = await User.findById(userId); // Adjust based on your user retrieval method

//       // Verify current password
//       const isMatch = await bcrypt.compare(currentPassword, user.password);
//       if (!isMatch) {
//           return res.status(400).json({ message: 'Current password is incorrect' });
//       }

//       // Hash the new password
//       const hashedPassword = await bcrypt.hash(newPassword, 10);

//       // Update user's password
//       user.password = hashedPassword;
//       await user.save();

//       res.json({ message: 'Password successfully updated' });
//   } catch (error) {
//       console.error('Password change error:', error);
//       res.status(500).json({ message: 'Error changing password' });
//   }
// });

export default router;
