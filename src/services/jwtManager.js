// jwtManager.js

// JWT oluşturma
const createJWT = (user) => {
    const encodedHeader = btoa(JSON.stringify({ alg: 'none', typ: 'JWT' }));
    const encodedPayload = btoa(JSON.stringify(user));
    const token = `${encodedHeader}.${encodedPayload}.`;

    return token;
};

module.exports = {
    createJWT,
};
