function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send('Token not provided');

    jwt.verify(token, 'your-secret-key', (err, decoded) => {
        if (err) return res.status(401).send('Unauthorized');

        req.user = decoded;
        next();
    });
}
module.exports = { verifyToken }