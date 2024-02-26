const AuthModel = require("../model/auth");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")


class Auth {
    static async Login(req,res) {
        try {
            const { username, password } = req.body;
        
            // Find the user in the database
            const user = await AuthModel.findOne({ username });
        
            // If the user is not found
            if (!user) {
              return res.status(404).send('User not found');
            }
        
            // Compare the provided password with the hashed password in the database
            const isPasswordValid = await bcrypt.compare(password, user.password);
        
            // If the password is not valid
            if (!isPasswordValid) {
              return res.status(401).send('Invalid password');
            }
        
            // Create and sign a JWT token
            const token = jwt.sign({ username: user.username }, 'your-secret-key');
        
            res.status(200).json({ token , user });
          } catch (error) {
            console.error(error); // Log the error
            res.status(500).send('Error logging in');
          }
    }
    static async Register(req, res) {
        try {
            const { username, password } = req.body;

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create a new user
            const user = new AuthModel({
                username,
                password: hashedPassword,
            });

            // Save the user to the database
            await user.save();

            res.status(201).send('User registered successfully!');
        } catch (error) {
            res.status(500).send('Error registering user');
        }
    }
}

module.exports = { Auth }