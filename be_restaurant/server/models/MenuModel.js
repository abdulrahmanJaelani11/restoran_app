const db = require('../config/database');

class Menu {
    static async getAll() {
        try {
            const sql = 'SELECT * FROM menus';
            return db.execute(sql);
        } catch (error) {
            throw error;
        }
    }

    static async getById(id) {
        try {
            const sql = `SELECT * FROM menus WHERE menu_id = ${id}`;
            return db.execute(sql);
        } catch (error) {
            throw error;
        }
    }

    static async create(data) {
        try {
            const sql = `INSERT INTO menus (name, description, price, category, image_url) VALUES ('${data.name}', '${data.description}', ${data.price}, '${data.category}', '${data.file}')`;
            return db.execute(sql);
        } catch (error) {
            throw error;
        }
    }

    static async update(data, menu_id) {
        try {
            const sql = `UPDATE menus SET name = '${data.name}', description = '${data.description}', price = ${data.price}, category = '${data.category}', image_url = '${data.file}' WHERE menu_id = ${menu_id}`;
            return db.execute(sql);
        } catch (error) {
            throw error;
        }
    }

    static async delete(menu_id) {
        try {
            const sql = `DELETE FROM menus WHERE menu_id = ${menu_id}`;
            return db.execute(sql);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Menu;
