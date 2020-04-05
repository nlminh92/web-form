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
var dateFormat = require('dateformat');

const SessionCms = require("../models").SessionCms;
const CareerCms = require("../models").CareerCms;
const CareersFormCms = require("../models").CareersFormCms;
const CombinationCms = require("../models").CombinationCms;

const {errorSystem, handleSuccessResponse, handleErrorResponse} = require('../helpers/responseHelper');

exports.getCareersForm = async function(req, res) {
    let result = await CareersCms.findAll({
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

exports.saveAndCreateDocx = async function (req, res) {
    try {
        // Đây bạn thay bằng các param clien gửi lên
        let {name, gender, birthday, place_of_birth, identity_card, address, mobilephone, email, nation, area, priority, graduate_year,
            grade_ten, grade_ten_province_code, grade_ten_school_code, grade_eleven, grade_eleven_school_code, grade_eleven_province_code,
            grade_twelve, grade_twelve_school_code, grade_twelve_province_code, identity_card_date,identity_card_address, province_code, district_code, village_code, permanent_residence,
            career_form_2, career_form_3, career_form_4, career_form_5, career_form_6, career_form_7, career_form_8, career_form_9, career_form_10, career_form_1,
            combination1, combination2, combination3, combination4, combination5, combination6, combination7, combination8, combination9, combination10,
            diemtb11, diemtb12, diemtb13, diemtb21, diemtb22, diemtb23, diemtb31, diemtb32, diemtb33,
            diemtb41, diemtb42, diemtb43, diemtb51, diemtb52, diemtb53, diemtb61, diemtb62, diemtb63,
            diemtb71, diemtb72, diemtb73, diemtb81, diemtb82, diemtb83, diemtb91, diemtb92, diemtb93,
            diemtb101, diemtb102, diemtb103} = req.body;
// Chỗ này là xóa khoảng cách thừa thôi
        identity_card = identity_card.trim();
        // Check xem quá giờ đăng ký chưa?
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

         let career_form_1_obj = await CareersFormCms.findOne({
             where: {
                 id: career_form_1
             },
             raw: true
         });

         // chỗ này bạn phải khai báo biến trước khi dùng
         let career_form_1_code = "";
         let career_form_1_name = "";

         let career_form_2_code = "";
         let career_form_2_name = "";

         let career_form_3_code = "";
         let career_form_3_name = "";

         let career_form_4_code = "";
         let career_form_4_name = "";

         let career_form_5_code = "";
         let career_form_5_name = "";

         let career_form_6_code = "";
         let career_form_6_name = "";

         let career_form_7_code = "";
         let career_form_7_name = "";

         let career_form_8_code = "";
         let career_form_8_name = "";

         let career_form_9_code = "";
         let career_form_9_name = "";

         let career_form_10_code = "";
         let career_form_10_name = "";

         if(career_form_1_obj) {
             career_form_1_code = career_form_1_obj.code;
             career_form_1_name = career_form_1_obj.name;
         }
        // máy chỗ này b phải dùng careform chứ
         let career_form_2_obj = await CareersFormCms.findOne({
             where: {
                 id: career_form_2
             },
             raw: true
         });

         if(career_form_2_obj) {
             career_form_2_code = career_form_2_obj.code;
             career_form_2_name = career_form_2_obj.name;
         }

         let career_form_3_obj = await CareersFormCms.findOne({
             where: {
                 id: career_form_3
             },
             raw: true
         });

         if(career_form_3_obj) {
             career_form_3_code = career_form_3_obj.code;
             career_form_3_name = career_form_3_obj.name;
         }
        //
        let career_form_4_obj = await CareersFormCms.findOne({
            where: {
                id: career_form_4
            },
            raw: true
        });

        if(career_form_4_obj) {
            career_form_4_code = career_form_4_obj.code;
            career_form_4_name = career_form_4_obj.name;
        }
        //
        let career_form_5_obj = await CareersFormCms.findOne({
            where: {
                id: career_form_5
            },
            raw: true
        });

        if(career_form_5_obj) {
            career_form_5_code = career_form_5_obj.code;
            career_form_5_name = career_form_5_obj.name;
        }
        //
        let career_form_6_obj = await CareersFormCms.findOne({
            where: {
                id: career_form_6
            },
            raw: true
        });

        if(career_form_6_obj) {
            career_form_6_code = career_form_6_obj.code;
            career_form_6_name = career_form_6_obj.name;
        }//
        //
        let career_form_7_obj = await CareersFormCms.findOne({
            where: {
                id: career_form_7
            },
            raw: true
        });

        if(career_form_7_obj) {
            career_form_7_code = career_form_7_obj.code;
            career_form_7_name = career_form_7_obj.name;
        }
        //
        let career_form_8_obj = await CareersFormCms.findOne({
            where: {
                id: career_form_8
            },
            raw: true
        });

        if(career_form_8_obj) {
            career_form_8_code = career_form_8_obj.code;
            career_form_8_name = career_form_8_obj.name;
        }
        //
        let career_form_9_obj = await CareersFormCms.findOne({
            where: {
                id: career_form_9
            },
            raw: true
        });

        if(career_form_9_obj) {
            career_form_9_code = career_form_9_obj.code;
            career_form_9_name = career_form_9_obj.name;
        }
        //
        let career_form_10_obj = await CareersFormCms.findOne({
            where: {
                id: career_form_10
            },
            raw: true
        });

        if(career_form_10_obj) {
            career_form_10_code = career_form_10_obj.code;
            career_form_10_name = career_form_10_obj.name;
        }

// combination

        // Lay thong tin noi SINH
        let place_province = await ProvinceCms.findOne({
            id: place_of_birth
        });
// Lấy thông tin ngành đăng ký
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

        let combination1_code = "";
        let combination2_code = "";
        let combination3_code = "";
        let combination4_code = "";
        let combination5_code = "";
        let combination6_code = "";
        let combination7_code = "";
        let combination8_code = "";
        let combination9_code = "";
        let combination10_code = "";

        let combination1Obj = await CombinationCms.findOne({
          where: {
            id: combination1
          }
        })
        if(combination1Obj) {
          combination1_code = combination1Obj.name
        }

        let combination2Obj = await CombinationCms.findOne({
          where: {
            id: combination2
          }
        })
        if(combination2Obj) {
          combination2_code = combination2Obj.name
        }

        let combination3Obj = await CombinationCms.findOne({
          where: {
            id: combination3
          }
        })
        if(combination3Obj) {
          combination3_code = combination3Obj.name
        }

        let combination4Obj = await CombinationCms.findOne({
          where: {
            id: combination4
          }
        })
        if(combination4Obj) {
          combination4_code = combination4Obj.name
        }

        let combination5Obj = await CombinationCms.findOne({
          where: {
            id: combination5
          }
        })
        if(combination5Obj) {
          combination5_code = combination5Obj.name
        }

        let combination6Obj = await CombinationCms.findOne({
          where: {
            id: combination6
          }
        })
        if(combination6Obj) {
          combination6_code = combination6Obj.name
        }

        let combination7Obj = await CombinationCms.findOne({
          where: {
            id: combination7
          }
        })
        if(combination7Obj) {
          combination7_code = combination7Obj.name
        }

        let combination8Obj = await CombinationCms.findOne({
          where: {
            id: combination8
          }
        })
        if(combination8Obj) {
          combination8_code = combination8Obj.name
        }

        let combination9Obj = await CombinationCms.findOne({
          where: {
            id: combination9
          }
        })
        if(combination9Obj) {
          combination9_code = combination9Obj.name
        }

        let combination10Obj = await CombinationCms.findOne({
          where: {
            id: combination10
          }
        })
        if(combination10Obj) {
          combination10_code = combination10Obj.name
        }
        //let session_id = 2;
         let session_id = session.id;

        let typee = 2;

// Lưu dữ liệu vào bảng
        let result = await CurriculumVitaeCms.create({name, gender, birthday, place_of_birth, identity_card, address, mobilephone, email, nation, graduate_year,
            grade_ten, grade_ten_province_code, grade_ten_school_code, grade_eleven, grade_eleven_school_code, grade_eleven_province_code,
            grade_twelve, grade_twelve_school_code, grade_twelve_province_code, area, priority, identity_card_date,identity_card_address, province_code, district_code, village_code, permanent_residence, career_form_1,
            career_form_2, career_form_3, career_form_4, career_form_5, career_form_6, career_form_7, career_form_8, career_form_9, career_form_10,
            combination1, combination2, combination3, combination4, combination5, combination6, combination7, combination8, combination9, combination10,
            diemtb11, diemtb12, diemtb13, diemtb21, diemtb22, diemtb23, diemtb31, diemtb32, diemtb33,
            diemtb41, diemtb42, diemtb43, diemtb51, diemtb52, diemtb53, diemtb61, diemtb62, diemtb63,
            diemtb71, diemtb72, diemtb73, diemtb81, diemtb82, diemtb83, diemtb91, diemtb92, diemtb93,
            diemtb101, diemtb102, diemtb103, code, typee, session_id});
        let gender_text = "0";
        if(gender == "female") {
            gender_text = "1";
        }

        let tmp = birthday.split("-");

        let tmp_2 = "";
        console.log(identity_card_date);

// Từ đây
        var day=dateFormat(new Date(identity_card_date), "dd/mm/yyyy");
        var content = fs
            .readFileSync(path.resolve('templates/template_2.docx'), 'binary');

        var zip = new PizZip(content);

        var doc = new Docxtemplater();
        doc.loadZip(zip);
        doc.setData({
            name: name,
            gender: gender_text,
            address: address,
            mobilephone: mobilephone,
            date: tmp[2],
            month: tmp[1],
            year: tmp[0],
            email: email,
            nation: nation,
            grade_ten: grade_ten,
            grade_eleven: grade_eleven,
            grade_twelve: grade_twelve,
            code: code,
            birthday: birthday,
            province: place_province.name,
          //  place_of_birth: place_province ? place_province.name : "",
            identity_card_date: day,
            identity_card_address: identity_card_address,
            province_code: province_code,
            district_code: district_code,
            village_code: village_code,
            permanent_residence: permanent_residence,
            career_form_1: career_form_1_name,
            career_form_2: career_form_2_name,
            career_form_3: career_form_3_name,
            career_form_4: career_form_4_name,
            career_form_5: career_form_5_name,
            career_form_6: career_form_6_name,
            career_form_7: career_form_7_name,
            career_form_8: career_form_8_name,
            career_form_9: career_form_9_name,
            career_form_10: career_form_10_name,
            career_form_1_code: career_form_1_code,
            career_form_2_code: career_form_2_code,
            career_form_3_code: career_form_3_code,
            career_form_4_code: career_form_4_code,
            career_form_5_code: career_form_5_code,
            career_form_6_code: career_form_6_code,
            career_form_7_code: career_form_7_code,
            career_form_8_code: career_form_8_code,
            career_form_9_code: career_form_9_code,
            career_form_10_code: career_form_10_code,
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
            g1: tmp[2][0] ? tmp[2][0] : '',
            g2: tmp[2][1] ? tmp[2][1] : '',
            h1: tmp[1][0] ? tmp[1][0] : '',
            h2: tmp[1][1] ? tmp[1][1] : '',
            k1: tmp[0][0] ? tmp[0][0] : '',
            k2: tmp[0][1] ? tmp[0][1] : '',
            k3: tmp[0][2] ? tmp[0][2] : '',
            k4: tmp[0][3] ? tmp[0][3] : '',

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

            m1: province_code[0] ? province_code[0] : '',
            m2: province_code[1] ? province_code[1] : '',
            n1: district_code[0] ? district_code[0] : '',
            n2: district_code[1] ? district_code[1] : '',
            o1: village_code[0] ? village_code[0] : '',
            o2: village_code[1] ? village_code[1] : '',
            combination1: combination1_code,
            combination2: combination2_code,
            combination3: combination3_code,
            combination4: combination4_code,
            combination5: combination5_code,
            combination6: combination6_code,
            combination7: combination7_code,
            combination8: combination8_code,
            combination9: combination9_code,
            combination10: combination10_code,
            diemtb11: diemtb11,
            diemtb12: diemtb12,
            diemtb13: diemtb13,
            diemtb21: diemtb21 ? diemtb21: "",
            diemtb22: diemtb22 ? diemtb22: "",
            diemtb23: diemtb23 ? diemtb23: "",
            diemtb31: diemtb31 ? diemtb31: "",
            diemtb32: diemtb32 ? diemtb32: "",
            diemtb33: diemtb33 ? diemtb33: "",
            diemtb41: diemtb41 ? diemtb41: "",
            diemtb42: diemtb42 ? diemtb42: "",
            diemtb43: diemtb43 ? diemtb43: "",
            diemtb51: diemtb51 ? diemtb51: "",
            diemtb52: diemtb52 ? diemtb52: "",
            diemtb53: diemtb53 ? diemtb53: "",
            diemtb61: diemtb61 ? diemtb61: "",
            diemtb62: diemtb62 ? diemtb62: "",
            diemtb63: diemtb63 ? diemtb63: "",
            diemtb71: diemtb71 ? diemtb71: "",
            diemtb72: diemtb72 ? diemtb72: "",
            diemtb73: diemtb73 ? diemtb73: "",
            diemtb81: diemtb81 ? diemtb81: "",
            diemtb82: diemtb82 ? diemtb82: "",
            diemtb83: diemtb83 ? diemtb83: "",
            diemtb91: diemtb91 ? diemtb91: "",
            diemtb92: diemtb92 ? diemtb92: "",
            diemtb93: diemtb93 ? diemtb93: "",
            diemtb101: diemtb101 ? diemtb101: "",
            diemtb102: diemtb102 ? diemtb102: "",
            diemtb103: diemtb103 ? diemtb103: "",
            d1: new Date().getDate(),
            m1: new Date().getMonth() + 1
        });

        doc.render();
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
