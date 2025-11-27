import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Authorization token required' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user_id = decoded.id;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Authorization token expired or invalid' });
    }
}