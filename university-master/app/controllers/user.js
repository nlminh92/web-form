const UserCms = require("../models").UserCms;
const bcrypt = require('bcryptjs');
const usersHelper = require("../helpers/usersHelper");
const {errorSystem, handleSuccessResponse, handleErrorResponse} = require('../helpers/responseHelper');

exports.create = async  function(req, res) {
    let {username, password} = req.body;
    username = username.trim();
    let user = await UserCms.findOne({
        where: {
            username: username
        },
        raw: true
    });

    if(!user) {
        return handleErrorResponse(res, "Tên đăng nhập hoặc mật khẩu không chính xác.");
    }

    if(!bcrypt.compare(password, user.encrypted_password)) {
        return handleErrorResponse(res, "Tên đăng nhập hoặc mật khẩu không chính xác.");
    }

    let auth_token = await usersHelper.generateToken(user);

    return handleSuccessResponse(res, {
            token: auth_token,
            user: user,
        },
        "Đăng nhập thành công");
};
