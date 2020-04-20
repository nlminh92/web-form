const SessionCms = require("../models").SessionCms;
const CurriculumVitaeCms = require("../models").CurriculumVitaeCms;
const {errorSystem, handleSuccessResponse, handleErrorResponse} = require('../helpers/responseHelper');

exports.index = async function(req, res) {
    let result = await SessionCms.findAll({
        raw: true
    });
    return handleSuccessResponse(res, result);
};

exports.create = async function (req, res) {
    let {name, from_time, to_time, type} = req.body;

    from_time = new Date(from_time);
    to_time = new Date(to_time);
    console.log(req.body);

    let result = await SessionCms.create({name, from_time, to_time, type});
    return handleSuccessResponse(res, result);
};

exports.delete = async function(req, res) {
    let id = req.body.id;
    let curriculumVitaeCms = await CurriculumVitaeCms.findOne({
        where: {
            session_id: id
        },
         raw: true
    });
    if(curriculumVitaeCms) {
        return handleErrorResponse(res, "Đợt đăng ký đã có người đăng ký, không thể xóa");
    }

    await SessionCms.destroy({
        where: {
            id: id
        }
    });

    return handleSuccessResponse(res, "Xóa thành công");

}