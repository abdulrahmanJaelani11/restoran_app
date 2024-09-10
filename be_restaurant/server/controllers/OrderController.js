const Order = require('../models/OrderModels')
const response = require('../response')

exports.create = async (req, res) => {
    const {body} = req
    try {
        await Order.create(body)
        return response(200, body, "Berhasil membuat pesanan", res);
    } catch (error) {
        return response(500, body, "Gagal membuat pesanan", res, error);
    }
}

exports.update = async (req, res) => {
    const {body, params} = req
    try {
        const [cek] = await Order.getById(params.order_id)
        if(cek.length == 0){
            return response(400, body, "Data tidak ditemukan", res);
        }
        await Order.update(body, params.order_id)
        return response(200, body, "Berhasil mengubah pesanan", res);
    } catch (error) {
        return response(500, body, "Gagal mengubah pesanan", res, error);
    }
}

exports.getAll = async (req, res) => {
    try {
        const [data] = await Order.getAll()
        return response(200, data, "Berhasil mendapatkan data pesanan", res);
    } catch (error) {
        return response(500, data, "Gagal mendapatkan data pesanan", res, error);
    }
}

exports.getById = async (req, res) => {
    const {params} = req;
    try {
        const [data] = await Order.getById(params.order_id)
        return response(200, data, "Berhasil mendapatkan data pesanan", res);
    } catch (error) {
        return response(500, data, "Gagal mendapatkan data pesanan", res, error);
    }
}