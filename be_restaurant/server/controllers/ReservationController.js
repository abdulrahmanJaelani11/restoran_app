const Reservation = require('../models/ReservationModel');
const response = require('../response');

exports.create = async (req, res) => {
    const {body} = req
    try {
        await Reservation.create(body);
        return response(200, body, "Berhasil melakukan reservasi", res)
    } catch (error) {
        return response(500, body, "Terjadi kesalahan ketika membuat reservasi", res, error)
    }
}

exports.update = async (req, res) => {
    const {body, params} = req
    try {
        const [cek] = await Reservation.getById(params.reservation_id);
        if(cek.length == 0){
            return response(400, cek, "Data tidak ditemukan", res);
        }
        await Reservation.create(body, params.reservation_id);
        return response(200, body, "Berhasil mengubah reservasi", res);
    } catch (error) {
        return response(500, body, "Terjadi kesalahan ketika membuat reservasi", res, error)
    }
}

exports.getAll = async (req, res) => {
    try {
        const [data] = await Reservation.getAll();
        return response(200, data, "Berhasil mendapatkan data reservasi", res)
    } catch (error) {
        return response(500, null, "Terjadi kesalahan ketika membuat reservasi", res, error)
    }
}

exports.getById = async (req, res) => {
    const {params} = req;
    try {
        const [data] = await Reservation.getById(params.reservation_id);
        return response(200, data, "Berhasil mendapatkan data reservasi", res)
    } catch (error) {
        return response(500, data, "Terjadi kesalahan ketika membuat reservasi", res, error)
    }
}