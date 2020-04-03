const SessionCms = require("../models").SessionCms;
const {errorSystem, handleSuccessResponse, handleErrorResponse} = require('../helpers/responseHelper');

exports.index = async function(req, res) {
    let result = await SessionCms.findAll({
        raw: true
    });
    return handleSuccessResponse(res, result);
};

exports.create = async function (req, res) {
    let {name, from_time, to_time} = req.body;

    from_time = new Date(from_time);
    to_time = new Date(to_time);
    console.log(req.body);

    let result = await SessionCms.create({name, from_time, to_time});
    return handleSuccessResponse(res, result);
};
