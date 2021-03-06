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
            name: careers[i].name,
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
                    },
                    {
                        career_form_11: careers[i].id
                    },
                    {
                        career_form_12: careers[i].id
                    },
                    {
                        career_form_13: careers[i].id
                    },
                    {
                        career_form_14: careers[i].id
                    },
                    {
                        career_form_15: careers[i].id
                    },
                    {
                        career_form_16: careers[i].id
                    },
                    {
                        career_form_17: careers[i].id
                    },
                    {
                        career_form_18: careers[i].id
                    },
                    {
                        career_form_19: careers[i].id
                    },
                    {
                        career_form_20: careers[i].id
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
        option1: item.option1,
        option2: item.option2,
        option3: item.option3,
        option4: item.option4,
        option5: item.option5,
        option6: item.option6,
        option7: item.option7,
        option8: item.option8,
        option9: item.option9,
        option10: item.option10,
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
        career_form_11_name: "",
        career_form_11_code: "",
        career_form_12_name: "",
        career_form_12_code: "",
        career_form_13_name: "",
        career_form_13_code: "",
        career_form_14_name: "",
        career_form_14_code: "",
        career_form_15_name: "",
        career_form_15_code: "",
        career_form_16_name: "",
        career_form_16_code: "",
        career_form_17_name: "",
        career_form_17_code: "",
        career_form_18_name: "",
        career_form_18_code: "",
        career_form_19_name: "",
        career_form_19_code: "",
        career_form_20_name: "",
        career_form_20_code: "",
        diemtb11: item.diemtb11,
        diemtb12: item.diemtb12,
        diemtb13: item.diemtb13,
        diemtb14: item.diemtb14,
        diemtb15: item.diemtb15,
        diemtb16: item.diemtb16,
        diemtb17: item.diemtb17,
        diemtb18: item.diemtb18,
        diemtb19: item.diemtb19,
        diemtb21: item.diemtb21,
        diemtb22: item.diemtb22,
        diemtb23: item.diemtb23,
        diemtb24: item.diemtb24,
        diemtb25: item.diemtb25,
        diemtb26: item.diemtb26,
        diemtb27: item.diemtb27,
        diemtb28: item.diemtb28,
        diemtb29: item.diemtb29,
        diemtb31: item.diemtb31,
        diemtb32: item.diemtb32,
        diemtb33: item.diemtb33,
        diemtb34: item.diemtb34,
        diemtb35: item.diemtb35,
        diemtb36: item.diemtb36,
        diemtb37: item.diemtb37,
        diemtb38: item.diemtb38,
        diemtb39: item.diemtb39,
        diemtb41: item.diemtb41,
        diemtb42: item.diemtb42,
        diemtb43: item.diemtb43,
        diemtb44: item.diemtb44,
        diemtb45: item.diemtb45,
        diemtb46: item.diemtb46,
        diemtb47: item.diemtb47,
        diemtb48: item.diemtb48,
        diemtb49: item.diemtb49,
        diemtb51: item.diemtb51,
        diemtb52: item.diemtb52,
        diemtb53: item.diemtb53,
        diemtb54: item.diemtb54,
        diemtb55: item.diemtb55,
        diemtb56: item.diemtb56,
        diemtb57: item.diemtb57,
        diemtb58: item.diemtb58,
        diemtb59: item.diemtb59,
        diemtb61: item.diemtb61,
        diemtb62: item.diemtb62,
        diemtb63: item.diemtb63,
        diemtb64: item.diemtb64,
        diemtb65: item.diemtb65,
        diemtb66: item.diemtb66,
        diemtb67: item.diemtb67,
        diemtb68: item.diemtb68,
        diemtb69: item.diemtb69,
        diemtb71: item.diemtb71,
        diemtb72: item.diemtb72,
        diemtb73: item.diemtb73,
        diemtb74: item.diemtb74,
        diemtb75: item.diemtb75,
        diemtb76: item.diemtb76,
        diemtb77: item.diemtb77,
        diemtb78: item.diemtb78,
        diemtb79: item.diemtb79,
        diemtb81: item.diemtb81,
        diemtb82: item.diemtb82,
        diemtb83: item.diemtb83,
        diemtb84: item.diemtb84,
        diemtb85: item.diemtb85,
        diemtb86: item.diemtb86,
        diemtb87: item.diemtb87,
        diemtb88: item.diemtb88,
        diemtb89: item.diemtb89,
        diemtb91: item.diemtb91,
        diemtb92: item.diemtb92,
        diemtb93: item.diemtb93,
        diemtb94: item.diemtb94,
        diemtb95: item.diemtb95,
        diemtb96: item.diemtb96,
        diemtb97: item.diemtb97,
        diemtb98: item.diemtb98,
        diemtb99: item.diemtb99,
        diemtb101: item.diemtb101,
        diemtb102: item.diemtb102,
        diemtb103: item.diemtb103,
        diemtb104: item.diemtb104,
        diemtb105: item.diemtb105,
        diemtb106: item.diemtb106,
        diemtb107: item.diemtb107,
        diemtb108: item.diemtb108,
        diemtb109: item.diemtb109,
        diemtb111: item.diemtb111,
        diemtb112: item.diemtb112,
        diemtb113: item.diemtb113,
        diemtb114: item.diemtb114,
        diemtb115: item.diemtb115,
        diemtb116: item.diemtb116,
        diemtb117: item.diemtb117,
        diemtb118: item.diemtb118,
        diemtb119: item.diemtb129,
        diemtb121: item.diemtb121,
        diemtb122: item.diemtb122,
        diemtb123: item.diemtb123,
        diemtb124: item.diemtb124,
        diemtb125: item.diemtb125,
        diemtb126: item.diemtb126,
        diemtb127: item.diemtb127,
        diemtb128: item.diemtb128,
        diemtb129: item.diemtb129,
        diemtb131: item.diemtb131,
        diemtb132: item.diemtb132,
        diemtb133: item.diemtb133,
        diemtb134: item.diemtb134,
        diemtb135: item.diemtb135,
        diemtb136: item.diemtb136,
        diemtb137: item.diemtb137,
        diemtb138: item.diemtb138,
        diemtb139: item.diemtb139,
        diemtb141: item.diemtb141,
        diemtb142: item.diemtb142,
        diemtb143: item.diemtb143,
        diemtb144: item.diemtb144,
        diemtb145: item.diemtb145,
        diemtb146: item.diemtb146,
        diemtb147: item.diemtb147,
        diemtb148: item.diemtb148,
        diemtb149: item.diemtb149,
        diemtb151: item.diemtb151,
        diemtb152: item.diemtb152,
        diemtb153: item.diemtb153,
        diemtb154: item.diemtb154,
        diemtb155: item.diemtb155,
        diemtb156: item.diemtb156,
        diemtb157: item.diemtb157,
        diemtb158: item.diemtb158,
        diemtb159: item.diemtb159,
        diemtb161: item.diemtb161,
        diemtb162: item.diemtb162,
        diemtb163: item.diemtb163,
        diemtb164: item.diemtb164,
        diemtb165: item.diemtb165,
        diemtb166: item.diemtb166,
        diemtb167: item.diemtb167,
        diemtb168: item.diemtb168,
        diemtb169: item.diemtb169,
        diemtb171: item.diemtb171,
        diemtb172: item.diemtb172,
        diemtb173: item.diemtb173,
        diemtb174: item.diemtb174,
        diemtb175: item.diemtb175,
        diemtb176: item.diemtb176,
        diemtb177: item.diemtb177,
        diemtb178: item.diemtb178,
        diemtb179: item.diemtb179,
        diemtb181: item.diemtb181,
        diemtb182: item.diemtb182,
        diemtb183: item.diemtb183,
        diemtb184: item.diemtb184,
        diemtb185: item.diemtb185,
        diemtb186: item.diemtb186,
        diemtb187: item.diemtb17,
        diemtb188: item.diemtb188,
        diemtb189: item.diemtb189,
        diemtb191: item.diemtb191,
        diemtb192: item.diemtb192,
        diemtb193: item.diemtb193,
        diemtb194: item.diemtb194,
        diemtb195: item.diemtb195,
        diemtb196: item.diemtb196,
        diemtb197: item.diemtb197,
        diemtb198: item.diemtb198,
        diemtb199: item.diemtb199,
        diemtb201: item.diemtb201,
        diemtb202: item.diemtb202,
        diemtb203: item.diemtb203,
        diemtb204: item.diemtb204,
        diemtb205: item.diemtb205,
        diemtb206: item.diemtb206,
        diemtb207: item.diemtb207,
        diemtb208: item.diemtb208,
        diemtb209: item.diemtb209,
        combination1: item.combination1,
        combination2: item.combination2,
        combination3: item.combination3,
        combination4: item.combination4,
        combination5: item.combination5,
        combination6: item.combination6,
        combination7: item.combination7,
        combination8: item.combination8,
        combination9: item.combination9,
        combination10: item.combination10,
        combination11: item.combination11,
        combination12: item.combination12,
        combination13: item.combination13,
        combination14: item.combination14,
        combination15: item.combination15,
        combination16: item.combination16,
        combination17: item.combination17,
        combination18: item.combination18,
        combination19: item.combination19,
        combination20: item.combination20,
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

    let combination2_object = await CombinationCms.findOne({
        where: {
            id: item.combination2
        },
        raw: true
    })



    if(combination1_object) {
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

    if(combination2_object) {
        data.combination2 = combination2_object.name;
    }


    let career_form_3_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_3
        },
        raw: true
    });

    let combination3_object = await CombinationCms.findOne({
        where: {
            id: item.combination3
        },
        raw: true
    })

    if(career_form_3_obj) {
        data.career_form_3_code = career_form_3_obj.code;
        data.career_form_3_name = career_form_3_obj.name;
    }

    if(combination3_object) {
        data.combination3 = combination3_object.name;
    }

    let career_form_4_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_4
        },
        raw: true
    });

    let combination4_object = await CombinationCms.findOne({
        where: {
            id: item.combination4
        },
        raw: true
    })

    if(career_form_4_obj) {
        data.career_form_4_code = career_form_4_obj.code;
        data.career_form_4_name = career_form_4_obj.name;
    }

    if(combination4_object) {
        data.combination4 = combination4_object.name;
    }

    let career_form_5_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_5
        },
        raw: true
    });

    let combination5_object = await CombinationCms.findOne({
        where: {
            id: item.combination5
        },
        raw: true
    })

    if(career_form_5_obj) {
        data.career_form_5_code = career_form_5_obj.code;
        data.career_form_5_name = career_form_5_obj.name;
    }

    if(combination5_object) {
        data.combination5 = combination5_object.name;
    }

    let career_form_6_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_6
        },
        raw: true
    });

    let combination6_object = await CombinationCms.findOne({
        where: {
            id: item.combination6
        },
        raw: true
    })

    if(career_form_6_obj) {
        data.career_form_6_code = career_form_6_obj.code;
        data.career_form_6_name = career_form_6_obj.name;
    }

    if(combination6_object) {
        data.combination6 = combination6_object.name;
    }

    let career_form_7_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_7
        },
        raw: true
    });

    let combination7_object = await CombinationCms.findOne({
        where: {
            id: item.combination7
        },
        raw: true
    })

    if(career_form_7_obj) {
        data.career_form_7_code = career_form_7_obj.code;
        data.career_form_7_name = career_form_7_obj.name;
    }

    if(combination7_object) {
        data.combination7 = combination7_object.name;
    }

    let career_form_8_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_8
        },
        raw: true
    });

    let combination8_object = await CombinationCms.findOne({
        where: {
            id: item.combination8
        },
        raw: true
    })

    if(career_form_8_obj) {
        data.career_form_8_code = career_form_8_obj.code;
        data.career_form_8_name = career_form_8_obj.name;
    }

    if(combination8_object) {
        data.combination8 = combination8_object.name;
    }

    let career_form_9_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_9
        },
        raw: true
    });

    let combination9_object = await CombinationCms.findOne({
        where: {
            id: item.combination9
        },
        raw: true
    })

    if(career_form_9_obj) {
        data.career_form_9_code = career_form_9_obj.code;
        data.career_form_9_name = career_form_9_obj.name;
    }

    if(combination9_object) {
        data.combination9 = combination9_object.name;
    }

    let career_form_10_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_10
        },
        raw: true
    });

    let combination10_object = await CombinationCms.findOne({
        where: {
            id: item.combination10
        },
        raw: true
    })

    if(career_form_10_obj) {
        data.career_form_10_code = career_form_10_obj.code;
        data.career_form_10_name = career_form_10_obj.name;
    }

    if(combination10_object) {
        data.combination10 = combination10_object.name;
    }
    //
    let career_form_11_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_11
        },
        raw: true
    });

    let combination11_object = await CombinationCms.findOne({
        where: {
            id: item.combination11
        },
        raw: true
    })

    if(career_form_11_obj) {
        data.career_form_11_code = career_form_11_obj.code;
        data.career_form_11_name = career_form_11_obj.name;
    }

    if(combination11_object) {
        data.combination11 = combination11_object.name;
    }
    //
    let career_form_12_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_12
        },
        raw: true
    });

    let combination12_object = await CombinationCms.findOne({
        where: {
            id: item.combination12
        },
        raw: true
    })

    if(career_form_12_obj) {
        data.career_form_12_code = career_form_12_obj.code;
        data.career_form_12_name = career_form_12_obj.name;
    }

    if(combination12_object) {
        data.combination12 = combination1_object.name;
    }
    //
    let career_form_13_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_13
        },
        raw: true
    });

    let combination13_object = await CombinationCms.findOne({
        where: {
            id: item.combination13
        },
        raw: true
    })

    if(career_form_13_obj) {
        data.career_form_13_code = career_form_13_obj.code;
        data.career_form_13_name = career_form_13_obj.name;
    }

    if(combination13_object) {
        data.combination13 = combination13_object.name;
    }
    //
    let career_form_14_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_14
        },
        raw: true
    });

    let combination14_object = await CombinationCms.findOne({
        where: {
            id: item.combination14
        },
        raw: true
    })

    if(career_form_14_obj) {
        data.career_form_14_code = career_form_14_obj.code;
        data.career_form_14_name = career_form_14_obj.name;
    }

    if(combination14_object) {
        data.combination14 = combination14_object.name;
    }
    //
    let career_form_15_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_15
        },
        raw: true
    });

    let combination15_object = await CombinationCms.findOne({
        where: {
            id: item.combination15
        },
        raw: true
    })

    if(career_form_15_obj) {
        data.career_form_15_code = career_form_15_obj.code;
        data.career_form_15_name = career_form_15_obj.name;
    }

    if(combination15_object) {
        data.combination15 = combination15_object.name;
    }
    //
    let career_form_16_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_16
        },
        raw: true
    });

    let combination16_object = await CombinationCms.findOne({
        where: {
            id: item.combination16
        },
        raw: true
    })

    if(career_form_16_obj) {
        data.career_form_16_code = career_form_16_obj.code;
        data.career_form_16_name = career_form_16_obj.name;
    }

    if(combination16_object) {
        data.combination16 = combination16_object.name;
    }
    //
    let career_form_17_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_17
        },
        raw: true
    });

    let combination17_object = await CombinationCms.findOne({
        where: {
            id: item.combination17
        },
        raw: true
    })

    if(career_form_17_obj) {
        data.career_form_17_code = career_form_17_obj.code;
        data.career_form_17_name = career_form_17_obj.name;
    }

    if(combination17_object) {
        data.combination17 = combination17_object.name;
    }
    //
    let career_form_18_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_18
        },
        raw: true
    });

    let combination18_object = await CombinationCms.findOne({
        where: {
            id: item.combination18
        },
        raw: true
    })

    if(career_form_18_obj) {
        data.career_form_18_code = career_form_18_obj.code;
        data.career_form_18_name = career_form_18_obj.name;
    }

    if(combination18_object) {
        data.combination1 = combination18_object.name;
    }
    //
    let career_form_19_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_19
        },
        raw: true
    });

    let combination19_object = await CombinationCms.findOne({
        where: {
            id: item.combination19
        },
        raw: true
    })

    if(career_form_19_obj) {
        data.career_form_19_code = career_form_19_obj.code;
        data.career_form_19_name = career_form_19_obj.name;
    }

    if(combination19_object) {
        data.combination19 = combination19_object.name;
    }
    //
    let career_form_20_obj = await CareersFormCms.findOne({
        where: {
            id: item.career_form_20
        },
        raw: true
    });

    let combination20_object = await CombinationCms.findOne({
        where: {
            id: item.combination20
        },
        raw: true
    })

    if(career_form_20_obj) {
        data.career_form_20_code = career_form_20_obj.code;
        data.career_form_20_name = career_form_20_obj.name;
    }

    if(combination20_object) {
        data.combination20 = combination20_object.name;
    }

    return data;

}
