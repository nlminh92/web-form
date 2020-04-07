const CurriculumVitaeCms = require("../models").CurriculumVitaeCms;
const ProvinceCms = require("../models").ProvinceCms;
const CareerCms = require("../models").CareerCms;
const CombinationCms = require("../models").CombinationCms;
const CareersFormCms = require("../models").CareersFormCms;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const SessionCms = require("../models").SessionCms;
const {errorSystem, handleSuccessResponse, handleErrorResponse} = require('../helpers/responseHelper');

exports.index = async function(req, res) {
    let session_id = req.query.session_id;
    let result = null;
    console.log(session_id);
    if(session_id) {
        result = await CurriculumVitaeCms.findAll({
            where: {
                session_id: session_id
            },
            raw: true
        });
    } else {
        result = await CurriculumVitaeCms.findAll({
            raw: true
        });
    }

    let data = [];
    for(let i = 0; i < result.length; i ++) {
        let obj = await getData(result[i]);
        data.push(obj);
    }
    return handleSuccessResponse(res, data);
};
// Ma nganh cho Form 2
exports.reportCareersForm = async function(req, res) {
    let session_id = req.query.session_id;

    let careers = await CareersFormCms.findAll({
        raw: true
    });

    let data = [];

    for(let i = 0; i < careers.length; i++) {
        let object = {
            name: careers_form[i].name,
            count: 0
        };

        object.count = await CurriculumVitaeCms.count({
            where: {
                session_id: session_id,
                [Op.or]: [
                    {
                        career_form_1: careers[i].id
                    },
                    {
                        career_form_2: careers[i].id
                    },
                    {
                        career_form_3: careers[i].id
                    },
                    {
                        career_form_4: careers[i].id
                    },
                    {
                        career_form_5: careers[i].id
                    },
                    {
                        career_form_6: careers[i].id
                    },
                    {
                        career_form_7: careers[i].id
                    },
                    {
                        career_form_8: careers[i].id
                    },
                    {
                        career_form_9: careers[i].id
                    },
                    {
                        career_form_10: careers[i].id
                    }
                ]
            }
        });

        data.push(object);
    }
    return handleSuccessResponse(res, data);
};

exports.reportCareer = async function(req, res) {
    let session_id = req.query.session_id;

    let careers = await CareerCms.findAll({
        raw: true
    });

    let data = [];

    for(let i = 0; i < careers.length; i++) {
        let object = {
            name: careers[i].name,
            count: 0
        };

        object.count = await CurriculumVitaeCms.count({
            where: {
                session_id: session_id,
                [Op.or]: [
                    {
                        career_1: careers[i].id
                    },
                    {
                        career_2: careers[i].id
                    },
                    {
                        career_3: careers[i].id
                    },
                    {
                        career_4: careers[i].id
                    }
                ]
            }
        });

        data.push(object);
    }
    return handleSuccessResponse(res, data);
};


exports.reportSession = async function(req, res) {
    let {from_time, to_time} = req.body;
    if(!from_time) from_time = new Date();
    if(!to_time) to_time = new Date();
    from_time = new Date(from_time);
    to_time = new Date(to_time);
    from_time.setHours(7,0,0,0);
    to_time.setDate(to_time.getDate() + 1);
    to_time.setHours(6,59,59,999);
    console.log(from_time);

    let result = await CurriculumVitaeCms.findAll({
        where: {
            [Op.and]: [
                {
                    created_at: {
                        [Op.lte]: to_time
                    }
                },
                {
                    created_at: {
                        [Op.gte]: from_time
                    }
                }
             ]
        },
        raw: true
    });

    // let sessions = await SessionCms.findAll({
    //     raw: true
    // });
    //
    // let data = [];
    //
    // for(let i = 0; i < sessions.length; i++) {
    //     let object = {
    //         name: sessions[i].name,
    //         count: 0
    //     };
    //
    //     object.count = await CurriculumVitaeCms.count({
    //         where: {
    //             session_id: sessions[i].id
    //         }
    //     });
    //
    //     data.push(object);
    // }
    let data = [];
    for(let i = 0; i < result.length; i ++) {
        let obj = await getData(result[i]);
        data.push(obj);
    }
    return handleSuccessResponse(res, data);
};

async function getData(item) {

    let data = {
        name: item.name,
        gender: item.gender == "female" ? "Nữ" : "Nam",
        birthday: item.birthday,
        created_at: item.created_at,
        place_of_birth: "",
        place_of_birth2: item.place_of_birth2,
        typee: item.typee,
        identity_card: item.identity_card,
        address: item.address,
        mobilephone: item.mobilephone,
        code: item.code,
        email: item.email,
        grade_ten: item.grade_ten,
        grade_ten_province_code: item.grade_ten_province_code,
        grade_ten_school_code: item.grade_ten_school_code,
        grade_eleven: item.grade_eleven,
        grade_eleven_province_code: item.grade_eleven_province_code,
        grade_eleven_school_code: item.grade_eleven_school_code,
        grade_twelve: item.grade_twelve,
        grade_twelve_province_code: item.grade_twelve_province_code,
        grade_twelve_school_code: item.grade_twelve_school_code,
        graduate_year: item.graduate_year,
        area: item.area,
        priority: item.priority,
        fixture: item.fixture,
        registration_number: item.registration_number,
        point: item.point,
        nation: item.nation,
        identity_card_address: item.identity_card_address,
        identity_card_date: item.identity_card_date,
        province_code: item.province_code,
        district_code: item.district_code,
        village_code: item.village_code,
        permanent_residence: item.permanent_residence,
        career_1_name: "",
        career_1_code: "",
        career_2_name: "",
        career_2_code: "",
        career_3_name: "",
        career_3_code: "",
        career_4_name: "",
        career_4_code: "",
        career_form_1_name: "",
        career_form_1_code: "",
        career_form_2_name: "",
        career_form_2_code: "",
        career_form_3_name: "",
        career_form_3_code: "",
        career_form_4_name: "",
        career_form_4_code: "",
        career_form_5_name: "",
        career_form_5_code: "",
        career_form_6_name: "",
        career_form_6_code: "",
        career_form_7_name: "",
        career_form_7_code: "",
        career_form_8_name: "",
        career_form_8_code: "",
        career_form_9_name: "",
        career_form_9_code: "",
        career_form_10_name: "",
        career_form_10_code: "",
        diemtb11: item.diemtb11,
        diemtb12: item.diemtb12,
        diemtb13: item.diemtb13,
        diemtb21: item.diemtb21,
        diemtb22: item.diemtb22,
        diemtb23: item.diemtb23,
        diemtb31: item.diemtb31,
        diemtb32: item.diemtb32,
        diemtb33: item.diemtb33,
        diemtb41: item.diemtb41,
        diemtb42: item.diemtb42,
        diemtb43: item.diemtb43,
        diemtb51: item.diemtb51,
        diemtb52: item.diemtb52,
        diemtb53: item.diemtb53,
        diemtb61: item.diemtb61,
        diemtb62: item.diemtb62,
        diemtb63: item.diemtb63,
        diemtb71: item.diemtb71,
        diemtb72: item.diemtb72,
        diemtb73: item.diemtb73,
        diemtb81: item.diemtb81,
        diemtb82: item.diemtb82,
        diemtb83: item.diemtb83,
        diemtb91: item.diemtb91,
        diemtb92: item.diemtb92,
        diemtb93: item.diemtb93,
        diemtb101: item.diemtb101,
        diemtb102: item.diemtb102,
        diemtb103: item.diemtb103,
        combination1: item.combination1,
        combination2: item.combination2,
        combination3: item.combination3,
        combination4: item.combination4,
        combination5: item.combination5,
        combination6: item.combination6,
        combination7: item.combination7,
        combination8: item.combination8,
        combination9: item.combination9,
        combination10: item.combination10
    };

    let place_province = await ProvinceCms.findOne({
        id: item.place_of_birth
    });

    data.place_of_birth = place_province.name;

    let career_1_obj = await CareerCms.findOne({
        where: {
            id: item.career_1
        },
        raw: true
    });

    if(career_1_obj) {
        data.career_1_code = career_1_obj.code;
        data.career_1_name = career_1_obj.name;
    }

    let career_2_obj = await CareerCms.findOne({
        where: {
            id: item.career_2
        },
        raw: true
    });

    if(career_2_obj) {
        data.career_2_code = career_1_obj.code;
        data.career_2_name = career_2_obj.name;
    }

    let career_3_obj = await CareerCms.findOne({
        where: {
            id: item.career_3
        },
        raw: true
    });

    if(career_3_obj) {
        data.career_3_code = career_3_obj.code;
        data.career_3_name = career_3_obj.name;
    }

    let career_4_obj = await CareerCms.findOne({
        where: {
            id: item.career_4
        },
        raw: true
    });

    if(career_4_obj) {
        data.career_4_code = career_4_obj.code;
        data.career_4_name = career_4_obj.name;
    }

// Form2
    let career_form_1_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_1
        },
        raw: true
    });

    if(career_form_1_obj) {
        data.career_form_1_code = career_form_1_obj.code;
        data.career_form_1_name = career_form_1_obj.name;
    }

    let combination1_object = await CombinationCms.findOne({
        where: {
            id: item.combination1
        },
        raw: true
    })

    if(career_form_1_obj) {
        data.combination1 = combination1_object.name;
    }

    let career_form_2_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_2
        },
        raw: true
    });

    if(career_form_2_obj) {
        data.career_form_2_code = career_form_2_obj.code;
        data.career_form_2_name = career_form_2_obj.name;
    }

    let career_form_3_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_3
        },
        raw: true
    });

    if(career_form_3_obj) {
        data.career_form_3_code = career_form_3_obj.code;
        data.career_form_3_name = career_form_3_obj.name;
    }

    let career_form_4_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_4
        },
        raw: true
    });

    if(career_form_4_obj) {
        data.career_form_4_code = career_form_4_obj.code;
        data.career_form_4_name = career_form_4_obj.name;
    }

    let career_form_5_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_5
        },
        raw: true
    });

    if(career_form_5_obj) {
        data.career_form_5_code = career_form_5_obj.code;
        data.career_form_5_name = career_form_5_obj.name;
    }

    let career_form_6_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_6
        },
        raw: true
    });

    if(career_form_6_obj) {
        data.career_form_6_code = career_form_6_obj.code;
        data.career_form_6_name = career_form_6_obj.name;
    }

    let career_form_7_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_7
        },
        raw: true
    });

    if(career_form_7_obj) {
        data.career_form_7_code = career_form_7_obj.code;
        data.career_form_7_name = career_form_7_obj.name;
    }

    let career_form_8_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_8
        },
        raw: true
    });

    if(career_form_8_obj) {
        data.career_form_8_code = career_form_8_obj.code;
        data.career_form_8_name = career_form_8_obj.name;
    }

    let career_form_9_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_9
        },
        raw: true
    });

    if(career_form_9_obj) {
        data.career_form_9_code = career_form_9_obj.code;
        data.career_form_9_name = career_form_9_obj.name;
    }

    let career_form_10_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_10
        },
        raw: true
    });

    if(career_form_10_obj) {
        data.career_form_10_code = career_form_10_obj.code;
        data.career_form_10_name = career_form_10_obj.name;
    }

    return data;

}
