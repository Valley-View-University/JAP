import pool from '../config/dbConfig.js';

class User {
    // Method to create a new user
    static async create({ email, password }) {
        const query = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *;';
        const values = [email, password];

        try {
            const { rows } = await pool.query(query, values);
            return rows[0];
        } catch (error) {
            throw error;
        }
    }

    // Method to find a user by email
    static async findByEmail(email) {
        const query = 'SELECT * FROM users WHERE email = $1;';
        const values = [email];

        try {
            const { rows } = await pool.query(query, values);
            if (rows.length > 0) {
                return rows[0];
            } else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }
}

export default User;
