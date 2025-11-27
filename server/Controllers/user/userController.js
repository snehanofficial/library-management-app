import { getAllUsers } from "../../Models/user/getAllUsers.js";
import { getUserByEmail } from "../../Models/user/getUserByEmail.js";
import { insertUser } from "../../Models/user/insertUser.js";
import bcrypt from 'bcrypt';
import { generateToken } from "../../utils/generateToken.js";

export const userSignup = async (req, res) => {
    try {
        const { name, email, password, is_admin } = req.body;
        const existing = await getUserByEmail(email);

        if (existing.length > 0) {
            return res.status(403).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await insertUser({ name, email, password: hashedPassword, is_admin });
        const newUserId = result.insertId;
        const token = generateToken(newUserId);

        return res.status(201).json({
            message: 'User registered successfully',
            token,
            user: {
                id: newUserId,
                name,
                email
            }
        })
    } catch (error) {
        console.error('Signup error: ', error);
        return res.status(500).json({message: 'Server error', error: error.message})
    }
}

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await getUserByEmail(email);
        
        if (user.length === 0) {
            return res.status(401).json({ message: 'User does not exists' })
        }

        const passwordMatch = await bcrypt.compare(password, user[0].password);
        if (!passwordMatch) return res.status(401).json({ message: 'Incorrect password' });

        const token = await generateToken(user[0].id);

        return res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user[0].id,
                name: user[0].name,
                email: user[0].email,
            }
        })
    } catch (error) {
        console.error('Login error: ', error);
        return res.status(500).json({ message: 'Login failed', error: error.message })
    }
}