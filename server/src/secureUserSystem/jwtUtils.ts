const jwt = require("jsonwebtoken");

export function generateToken(uuid: String, role: Number, username: String) {
    return jwt.sign({ uuid: uuid, role: role, username: username }, process.env.JWT_SECRET || "shhh");
}

export function verifyToken(_jwt: String) {
    try {
        var result = jwt.verify(_jwt, process.env.JWT_SECRET || "shhh");
        return result || false;
    } catch(err) {
        return false;
    }
}
