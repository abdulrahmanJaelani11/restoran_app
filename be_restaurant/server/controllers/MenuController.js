const Menu = require('../models/MenuModel');
const response = require('../response');
const upload = require('../config/upload');
const url_pic_product = 'http://localhost:3000/pic-product/';

exports.getAll = async (req, res) => {
    try {
        const [menus] = await Menu.getAll();
        menus.forEach((menu) => {
            menu.image_url = `${url_pic_product}${menu.image_url}`;
        });
        return response(200, menus, 'Berhasil mendapatkan data menu', res);
    } catch (error) {
        console.log('error:', error);
        return response(500, null, 'Terjadi kesalahan ketika mengambil data', res, error);
    }
};

exports.getDataCarousel = async (req, res) => {
    try {
        const [menus] = await Menu.getAll();
        let result = []
        let tmp = Array()
        for(let i = 0; i < menus.length; i++){
            menus[i].image_url = `${url_pic_product}${menus[i].image_url}`;
            tmp.push(menus[i])

            if(tmp.length == 5){
                result.push(tmp)
                tmp = []
            }
        }
        return response(200, result, 'Berhasil mendapatkan data menu', res);
    } catch (error) {
        console.log('error:', error);
        return response(500, null, 'Terjadi kesalahan ketika mengambil data', res, error);
    }
};

exports.getById = async (req, res) => {
    try {
        const [menu] = await Menu.getById(req.params.id);
        return response(200, menu, 'Berhasil mendapatkan data menu', res);
    } catch (error) {
        return response(500, null, 'Terjadi kesalahan ketika mengambil data', res, error);
    }
};

exports.create = async (req, res) => {
    upload.single('file')(req, res, async (err) => {
        if (err) {
          return res.status(400).json({ message: err });
        }

        const imagePath = `${req.file.filename}`;
        const { body} = req;
        body.file = imagePath;
        try {
            await Menu.create(body);
            return response(200, body, 'Berhasil menambahkan data menu', res);
        } catch (error) {
            return response(500, body, 'Terjadi kesalahan ketika menambahkan data menu', res, error);
        }
    });
    
};

exports.update = async (req, res) => {
    console.log(req.body)
    const { body, params} = req;
    return
    upload.single('file')(req, res, async (err) => {
        if (err) {
          return res.status(400).json({ message: err });
        }

        const imagePath = `${req.file.filename}`;
        try {
            const [cek] = await Menu.getById(params.menu_id)
            if(cek.length == 0){
                return response(400, body, 'Data tidak ditemukan', res);
            }
            body.file = imagePath;
            await Menu.update(body, params.menu_id);
            return response(200, body, 'Berhasil mengubah data menu', res);
        } catch (error) {
            return response(500, body, 'Terjadi kesalahan ketika menambahkan data menu', res, error);
        }
    });
};

exports.delete = async (req, res) => {
    const {params} = req;
    try {
        await Menu.delete(params.menu_id);
        return response(200, null, 'Berhasil menghapus data menu', res);
    } catch (error) {
        return response(500, null, 'Terjadi kesalahan ketika menambahkan data menu', res, error);
    }
};
