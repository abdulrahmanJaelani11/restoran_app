const db = require('../config/database')
const { getById } = require('./MenuModel')

class Order {

    static async create(data){
        try {
            const sql = `INSERT INTO orders (user_id, reservation_id, order_date, status, total_amount) VALUES (${data.user_id}, ${data.reservation_id}, '${data.order_date}', ${data.status}, ${data.total_amount})`
            return db.execute(sql)
        } catch (error) {
            throw error
        }
    }

    static async update(data, order_id){
        try {
            const sql = `UPDATE orders SET user_id = ${data.user_id}, reservation_id = ${data.reservation_id}, order_date = '${data.order_date}', status = ${data.status}, total_amount = ${data.total_amount} WHERE order_id = ${order_id}`
            return db.execute(sql)
        } catch (error) {
            throw error
        }
    }

    static async getAll(){
        try {
            const sql = `SELECT * FROM orders a LEFT JOIN users b ON a.user_id = b.user_id LEFT JOIN reservations c ON a.reservation_id = c.reservation_id`
            return db.execute(sql)
        } catch (error) {
            throw error
        }
    }

    static async getById(order_id){
        try {
            const sql = `SELECT * FROM orders a LEFT JOIN users b ON a.user_id = b.user_id LEFT JOIN reservations c ON a.reservation_id = c.reservation_id WHERE a.order_id = ${order_id}`
            return db.execute(sql)
        } catch (error) {
            throw error
        }
    }
    
}

module.exports = Order