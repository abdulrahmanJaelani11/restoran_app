const db = require('../config/database');

class Reservation {
    static async create(data) {
        try{
            const sql = `INSERT INTO reservations (user_id, reservation_date, number_of_guests, status) VALUES (${data.user_id}, '${data.reservation_date}', '${data.number_of_guest}', ${data.status})`
            return db.execute(sql)
        }catch(error){
            throw error
        }
    }

    static async update(data, reservation_id) {
        try{
            const sql = `UPDATE reservations SET user_id = ${data.user_id}, reservation_date = '${data.reservation_date}', number_of_guests = '${data.number_of_guest}', status = ${data.status} WHERE reservation_id = ${reservation_id} `
            return db.execute(sql)
        }catch(error){
            throw error
        }
    }

    static async getAll() {
        try{
            const sql = `SELECT * FROM reservations a LEFT JOIN users b ON a.user_id = b.user_id`
            return db.execute(sql)
        }catch(error){
            throw error
        }
    }

    static async getById(reservation_id) {
        try{
            const sql = `SELECT * FROM reservations a LEFT JOIN users b ON a.user_id = b.user_id WHERE a.reservation_id = ${reservation_id}`
            return db.execute(sql)
        }catch(error){
            throw error
        }
    }
}

module.exports = Reservation