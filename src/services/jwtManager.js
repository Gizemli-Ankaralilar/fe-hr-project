// jwtManager.js

// JWT oluşturma
const createJWT = async (id, role) => {
    try {
        const response = await fetch(`http://localhost:9090/api/v1/auth/bana_token_ver?id=${id}&role=${role}`);
        const token = await response.json();

        return token;
    } catch (error) {
        console.error('Token oluşturma hatası:', error);
        return null;
    }
};

// JWT'i çözme
const parseJWT = (token) => {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    } catch (error) {
        return null;
    }
};

export { createJWT, parseJWT };
