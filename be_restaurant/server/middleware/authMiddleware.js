module.exports = (req, res, next) => {
    // Contoh: jika pengguna tidak terautentikasi, kirim 401
    if (!req.menu) {
      return res.status(401).json({ message: 'Not authenticated' });
    }
    next();
  };
  