const createReport = require('docx-templates').default;
var PizZip = require('pizzip');
var Docxtemplater = require('docxtemplater');
var fs = require('fs');
const word2pdf = require('word2pdf');
var path = require('path');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const UserCms = require("../models").UserCms;
const ProvinceCms = require("../models").ProvinceCms;
const DistrictCms = require("../models").DistrictCms;
const WardCms = require("../models").WardCms;
const CurriculumVitaeCms = require("../models").CurriculumVitaeCms;

const SessionCms = require("../models").SessionCms;
const CareerCms = require("../models").CareerCms;
const CareersFormCms = require("../models").CareersFormCms;
const CombinationCms = require("../models").CombinationCms;

const {errorSystem, handleSuccessResponse, handleErrorResponse} = require('../helpers/responseHelper');

exports.home = async  function(req, res) {
    let result = await ProvinceCms.findAll({
        raw: true
    });
    return res.json({
        code: 1,
        data: result
    })
};

exports.getCareers = async function(req, res) {
    let result = await CareerCms.findAll({
        raw: true
    });
    return res.json({
        code: 1,
        data: result
    })
};

exports.getCareersForm = async function(req, res) {
    let result = await CareersFormCms.findAll({
        raw: true
    });
    return res.json({
        code: 1,
        data: result
    })
};

exports.getCombination = async function(req, res) {
    let result = await CombinationCms.findAll({
        raw: true
    });
    return res.json({
        code: 1,
        data: result
    })
};

exports.provinces = async function(req, res) {
    let result = await ProvinceCms.findAll({
        raw: true
    });
    return res.json({
        code: 1,
        data: result
    })
};

exports.districts = async function(req, res) {
    let result = await DistrictCms.findAll({
        where: {
            province_id: req.query.province_id
        },
        raw: true
    });
    return res.json({
        code: 1,
        data: result
    })
};

exports.wards = async function(req, res) {
    let result = await WardCms.findAll({
        where: {
            district_id: req.query.district_id
        },
        raw: true
    });
    return res.json({
        code: 1,
        data: result
    })
};

exports.saveAndCreateDocx = async function (req, res) {
    try {
        // Đây là param do client gửi lên, chính là các formControlName ở front ấy
        let {name, gender, birthday, place_of_birth, identity_card, address, mobilephone, email, grade_ten,
            grade_ten_province_code, grade_ten_school_code, grade_eleven, grade_eleven_province_code, grade_eleven_school_code,
            grade_twelve, grade_twelve_province_code, grade_twelve_school_code, graduate_year, area, priority, fixture,
            registration_number, point, career_1, career_2, career_3, career_4} = req.body;
        identity_card = identity_card.trim();
        let career_1_code = "";
        let career_2_code = "";
        let career_3_code = "";
        let career_4_code = "";

        let career_1_name = "";
        let career_2_name = "";
        let career_3_name = "";
        let career_4_name = "";

        let session = await SessionCms.findOne({
           where: {
               from_time: {
                   [Op.lte]: new Date()
               },
               to_time: {
                   [Op.gte]: new Date()
               }
           },
            raw: true
        });

        if(!session) {
            return handleErrorResponse(res, "Quá thời gian hoặc chưa đến thời gian đăng ký");
        }

        let career_1_obj = await CareerCms.findOne({
            where: {
                id: career_1
            },
            raw: true
        });

        if(career_1_obj) {
            career_1_code = career_1_obj.code;
            career_1_name = career_1_obj.name;
        }

        let career_2_obj = await CareerCms.findOne({
            where: {
                id: career_2
            },
            raw: true
        });

        if(career_2_obj) {
            career_2_code = career_1_obj.code;
            career_2_name = career_2_obj.name;
        }

        let career_3_obj = await CareerCms.findOne({
            where: {
                id: career_3
            },
            raw: true
        });

        if(career_3_obj) {
            career_3_code = career_3_obj.code;
            career_3_name = career_3_obj.name;
        }

        let career_4_obj = await CareerCms.findOne({
            where: {
                id: career_4
            },
            raw: true
        });

        if(career_4_obj) {
            career_4_code = career_4_obj.code;
            career_4_name = career_4_obj.name;
        }
        console.log(career_1_name);

        var content = fs
            .readFileSync(path.resolve('templates/template_1.docx'), 'binary');

        var zip = new PizZip(content);

        var doc = new Docxtemplater();
        doc.loadZip(zip);

        let count = await CurriculumVitaeCms.count({});
        let code = (count + 1).toString();

        let length = 5 - code.length;
        code = "0".repeat(length) + code;

        let data = await CurriculumVitaeCms.findOne({
            where: {
                identity_card: identity_card
            }});
        if(data) {
            return res.json({
                code: 2,
                message: "Thông tin đăng ký đã tồn tại trong hệ thống"
            })
        }

         let session_id = session.id;
        // console.log(session_id);
        // console.log(session);
        //  let session_id = 1  ;

          let typee = 1;

        let result = await CurriculumVitaeCms.create({name, gender, birthday, place_of_birth, identity_card, address, mobilephone, email, grade_ten,
            grade_ten_province_code, grade_ten_school_code, grade_eleven, grade_eleven_province_code, grade_eleven_school_code,
            grade_twelve, grade_twelve_province_code, grade_twelve_school_code, graduate_year, area, priority, fixture,
            registration_number, point, career_1, career_2, career_3, career_4, code, typee, session_id});
        let gender_text = "Nam";
        if(gender == "female") {
            gender_text = "Nữ";
        }

        let tmp = birthday.split("-");
        let place_province = await ProvinceCms.findOne({
            id: place_of_birth
        });

        let tmp_2 = fixture.split("-");

        doc.setData({
            name: name,
            gender: gender_text,
            date: tmp[2],
            month: tmp[1],
            year: tmp[0],
            province: place_province.name,
            address: address,
            mobilephone: mobilephone,
            email: email,
            grade_ten: grade_ten,
            grade_eleven: grade_eleven,
            grade_twelve: grade_twelve,
            graduate_year: graduate_year,
            area: area,
            priority: priority ? priority: "",
            fixture_d: tmp_2[2],
            fixture_m: tmp_2[1],
            fixture_y: tmp_2[0],
            registration_number: registration_number,
            point: point,
            career_1: career_1_name,
            career_2: career_2_name,
            career_3: career_3_name,
            career_4: career_4_name,
            i0: identity_card[0] ? identity_card[0] : '',
            i1: identity_card[1] ? identity_card[1] : '',
            i2: identity_card[2] ? identity_card[2] : '',
            i3: identity_card[3] ? identity_card[3] : '',
            i4: identity_card[4] ? identity_card[4] : '',
            i5: identity_card[5] ? identity_card[5] : '',
            i6: identity_card[6] ? identity_card[6] : '',
            i7: identity_card[7] ? identity_card[7] : '',
            i8: identity_card[8] ? identity_card[8] : '',
            i9: identity_card[9] ? identity_card[9] : '',
            j1: identity_card[10] ? identity_card[10] : '',
            j2: identity_card[11] ? identity_card[11] : '',
            t1: grade_ten_province_code[0] ? grade_ten_province_code[0] : '',
            t2: grade_ten_province_code[1] ? grade_ten_province_code[1] : '',
            t3: grade_eleven_province_code[0] ? grade_eleven_province_code[0] : '',
            t4: grade_eleven_province_code[1] ? grade_eleven_province_code[1] : '',
            t5: grade_twelve_province_code[0] ? grade_twelve_province_code[0] : '',
            t6: grade_twelve_province_code[1] ? grade_twelve_province_code[1] : '',
            l1: grade_ten_school_code[0] ? grade_ten_school_code[0] : '',
            l2: grade_ten_school_code[1] ? grade_ten_school_code[1] : '',
            l3: grade_ten_school_code[2] ? grade_ten_school_code[2] : '',

            l4: grade_eleven_school_code[0] ? grade_eleven_school_code[0] : '',
            l5: grade_eleven_school_code[1] ? grade_eleven_school_code[1] : '',
            l6: grade_eleven_school_code[2] ? grade_eleven_school_code[2] : '',

            l7: grade_twelve_school_code[0] ? grade_twelve_school_code[0] : '',
            l8: grade_twelve_school_code[1] ? grade_twelve_school_code[1] : '',
            l9: grade_twelve_school_code[2] ? grade_twelve_school_code[2] : '',

            c11: career_1_code && career_1_code[0] ? career_1_code[0] : '',
            c12: career_1_code && career_1_code[1] ? career_1_code[1] : '',
            c13: career_1_code && career_1_code[2] ? career_1_code[2] : '',
            c14: career_1_code && career_1_code[3] ? career_1_code[3] : '',
            c15: career_1_code && career_1_code[4] ? career_1_code[4] : '',
            c16: career_1_code && career_1_code[5] ? career_1_code[5] : '',
            c17: career_1_code && career_1_code[6] ? career_1_code[6] : '',

            c21: career_2_code && career_2_code[0] ? career_2_code[0] : '',
            c22: career_2_code && career_2_code[1] ? career_2_code[1] : '',
            c23: career_2_code && career_2_code[2] ? career_2_code[2] : '',
            c24: career_2_code && career_2_code[3] ? career_2_code[3] : '',
            c25: career_2_code && career_2_code[4] ? career_2_code[4] : '',
            c26: career_2_code && career_2_code[5] ? career_2_code[5] : '',
            c27: career_2_code && career_2_code[6] ? career_2_code[6] : '',

            c31: career_3_code && career_3_code[0] ? career_3_code[0] : '',
            c32: career_3_code && career_3_code[1] ? career_3_code[1] : '',
            c33: career_3_code && career_3_code[2] ? career_3_code[2] : '',
            c34: career_3_code && career_3_code[3] ? career_3_code[3] : '',
            c35: career_3_code && career_3_code[4] ? career_3_code[4] : '',
            c36: career_3_code && career_3_code[5] ? career_3_code[5] : '',
            c37: career_3_code && career_3_code[6] ? career_3_code[6] : '',

            c41: career_4_code && career_4_code[0] ? career_4_code[0] : '',
            c42: career_4_code && career_4_code[1] ? career_4_code[1] : '',
            c43: career_4_code && career_4_code[2] ? career_4_code[2] : '',
            c44: career_4_code && career_4_code[3] ? career_4_code[3] : '',
            c45: career_4_code && career_4_code[4] ? career_4_code[4] : '',
            c46: career_4_code && career_4_code[5] ? career_4_code[5] : '',
            c47: career_4_code && career_4_code[6] ? career_4_code[06] : '',
            d1: new Date().getDate(),
            m1: new Date().getMonth() + 1,
        //    y1: new Date().getFullYear()
        });

        try {
            doc.render()
        }
        catch (error) {
            function replaceErrors(key, value) {
                if (value instanceof Error) {
                    return Object.getOwnPropertyNames(value).reduce(function(error, key) {
                        error[key] = value[key];
                        return error;
                    }, {});
                }
                return value;
            }

            if (error.properties && error.properties.errors instanceof Array) {
                const errorMessages = error.properties.errors.map(function (error) {
                    return error.properties.explanation;
                }).join("\n");
                console.log('errorMessages', errorMessages);
            }
            throw error;
        }

        var buf = doc.getZip()
            .generate({type: 'nodebuffer'});
        let file_name = new Date().getTime().toString();
        await fs.writeFileSync(path.resolve(`public/files/${file_name}.docx`), buf);
        const dataPdf = await word2pdf(`public/files/${file_name}.docx`);
        fs.writeFileSync(`public/files/${file_name}.pdf`, dataPdf);
        return res.json({
            code: 1,
            data: `/files/${file_name}.pdf`
        })
    } catch (error) {
        errorSystem(req, res, error);
    }
};
