const createReport = require('docx-templates').default;
var PizZip = require('pizzip');
var Docxtemplater = require('docxtemplater');
var fs = require('fs');

const libre = require('libreoffice-convert');

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
        let {name, gender, birthday, place_of_birth, place_of_birth2, identity_card, address, mobilephone, email, nation, area, priority, graduate_year,
            grade_ten, grade_ten_province_code, grade_ten_school_code, grade_eleven, grade_eleven_school_code, grade_eleven_province_code,
            grade_twelve, grade_twelve_school_code, grade_twelve_province_code, identity_card_date,identity_card_address, province_code, district_code, village_code, permanent_residence,
            career_form_2, career_form_3, career_form_4, career_form_5, career_form_6, career_form_7, career_form_8, career_form_9, career_form_10, career_form_1,
            career_form_12, career_form_13, career_form_14, career_form_15, career_form_16, career_form_17, career_form_18, career_form_19, career_form_20, career_form_11,
            combination1, combination2, combination3, combination4, combination5, combination6, combination7, combination8, combination9, combination10,
            combination11, combination12, combination13, combination14, combination15, combination16, combination17, combination18, combination19, combination20,
            diemtb11, diemtb12, diemtb13, diemtb21, diemtb22, diemtb23, diemtb31, diemtb32, diemtb33,
            diemtb14, diemtb15, diemtb16, diemtb17, diemtb18, diemtb19,
            diemtb24, diemtb25, diemtb26, diemtb27, diemtb28, diemtb29,
            diemtb34, diemtb35, diemtb36, diemtb37, diemtb38, diemtb39,
            diemtb44, diemtb45, diemtb46, diemtb47, diemtb48, diemtb49,
            diemtb54, diemtb55, diemtb56, diemtb57, diemtb58, diemtb59,
            diemtb64, diemtb65, diemtb66, diemtb67, diemtb68, diemtb69,
            diemtb74, diemtb75, diemtb76, diemtb77, diemtb78, diemtb79,
            diemtb84, diemtb85, diemtb86, diemtb87, diemtb88, diemtb89,
            diemtb94, diemtb95, diemtb96, diemtb97, diemtb98, diemtb99,
            diemtb104, diemtb105, diemtb106, diemtb107, diemtb108, diemtb109,
            diemtb111, diemtb112, diemtb113, diemtb114, diemtb115, diemtb116, diemtb117, diemtb118, diemtb119,
            diemtb121, diemtb122, diemtb123, diemtb124, diemtb125, diemtb126, diemtb127, diemtb128, diemtb129,
            diemtb131, diemtb132, diemtb133, diemtb134, diemtb135, diemtb136, diemtb137, diemtb138, diemtb139,
            diemtb141, diemtb142, diemtb143, diemtb144, diemtb145, diemtb146, diemtb147, diemtb148, diemtb149,
            diemtb151, diemtb152, diemtb153, diemtb154, diemtb155, diemtb156, diemtb157, diemtb158, diemtb159,
            diemtb161, diemtb162, diemtb163, diemtb164, diemtb165, diemtb166, diemtb167, diemtb168, diemtb169,
            diemtb171, diemtb172, diemtb173, diemtb174, diemtb175, diemtb176, diemtb177, diemtb178, diemtb179,
            diemtb181, diemtb182, diemtb183, diemtb184, diemtb185, diemtb186, diemtb187, diemtb188, diemtb189,
            diemtb191, diemtb192, diemtb193, diemtb194, diemtb195, diemtb196, diemtb197, diemtb198, diemtb199,
            diemtb201, diemtb202, diemtb203, diemtb204, diemtb205, diemtb206, diemtb207, diemtb208, diemtb209,
            // option2, option3, option4, option5, option6, option7, option8, option9, option10,
            diemtb41, diemtb42, diemtb43, diemtb51, diemtb52, diemtb53, diemtb61, diemtb62, diemtb63,
            diemtb71, diemtb72, diemtb73, diemtb81, diemtb82, diemtb83, diemtb91, diemtb92, diemtb93,
            diemtb101, diemtb102, diemtb103, file} = req.body;
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
                },
                type: 2
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

      //   let arr = [career_form_2, career_form_3, career_form_4, career_form_5, career_form_6,
      //     career_form_7, career_form_8, career_form_9, career_form_10, career_form_11,
      //   career_form_12, career_form_13, career_form_14, career_form_15, career_form_16,
      // career_form_17, career_form_18, career_form_19, career_form_20, career_form_1];
      //
      //   let comb = [combination1, combination2, combination3, combination4, combination5,
      //               combination6, combination7, combination8, combination9, combination10,
      //             combination11, combination12, combination13, combination14, combination15,
      //           combination16, combination17, combination18, combination19, combination20];
      //
      //   var filtered = arr.filter(function (el) {
      //     return el != null;
      //   });
      //
      //   var unique = filtered.filter((v, i, a) => a.indexOf(v) === i);
      //
      //   var filtereda = comb.filter(function (ela) {
      //     return ela != null;
      //   });
      //
      //   var uniquea = filtereda.filter((v, i, a) => a.indexOf(v) === i);
      //
      //   if(unique.length != filtered.length && uniquea.length != filtereda.length) {
      //     return handleErrorResponse(res, "Các nguyện vọng đăng ký không được trùng nhau");
      //   }

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

         let career_form_11_code = "";
         let career_form_11_name = "";

         let career_form_20_code = "";
         let career_form_20_name = "";

         let career_form_12_code = "";
         let career_form_12_name = "";

         let career_form_13_code = "";
         let career_form_13_name = "";

         let career_form_14_code = "";
         let career_form_14_name = "";

         let career_form_15_code = "";
         let career_form_15_name = "";

         let career_form_16_code = "";
         let career_form_16_name = "";

         let career_form_17_code = "";
         let career_form_17_name = "";

         let career_form_18_code = "";
         let career_form_18_name = "";

         let career_form_19_code = "";
         let career_form_19_name = "";

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
        //
        let career_form_11_obj = await CareersFormCms.findOne({
            where: {
                id: career_form_11
            },
            raw: true
        });

        if(career_form_11_obj) {
            career_form_11_code = career_form_11_obj.code;
            career_form_11_name = career_form_11_obj.name;
        }
        //
        let career_form_12_obj = await CareersFormCms.findOne({
            where: {
                id: career_form_12
            },
            raw: true
        });

        if(career_form_12_obj) {
            career_form_12_code = career_form_12_obj.code;
            career_form_12_name = career_form_12_obj.name;
        }
        //
        let career_form_13_obj = await CareersFormCms.findOne({
            where: {
                id: career_form_13
            },
            raw: true
        });

        if(career_form_13_obj) {
            career_form_13_code = career_form_13_obj.code;
            career_form_13_name = career_form_13_obj.name;
        }
        //
        let career_form_14_obj = await CareersFormCms.findOne({
            where: {
                id: career_form_14
            },
            raw: true
        });

        if(career_form_14_obj) {
            career_form_14_code = career_form_14_obj.code;
            career_form_14_name = career_form_14_obj.name;
        }
        //
        let career_form_15_obj = await CareersFormCms.findOne({
            where: {
                id: career_form_15
            },
            raw: true
        });

        if(career_form_15_obj) {
            career_form_15_code = career_form_15_obj.code;
            career_form_15_name = career_form_15_obj.name;
        }
        //
        let career_form_16_obj = await CareersFormCms.findOne({
            where: {
                id: career_form_16
            },
            raw: true
        });

        if(career_form_16_obj) {
            career_form_16_code = career_form_16_obj.code;
            career_form_16_name = career_form_16_obj.name;
        }
        //
        let career_form_17_obj = await CareersFormCms.findOne({
            where: {
                id: career_form_17
            },
            raw: true
        });

        if(career_form_17_obj) {
            career_form_17_code = career_form_17_obj.code;
            career_form_17_name = career_form_17_obj.name;
        }
        //
        let career_form_18_obj = await CareersFormCms.findOne({
            where: {
                id: career_form_18
            },
            raw: true
        });

        if(career_form_18_obj) {
            career_form_18_code = career_form_18_obj.code;
            career_form_18_name = career_form_18_obj.name;
        }
        //
        let career_form_19_obj = await CareersFormCms.findOne({
            where: {
                id: career_form_19
            },
            raw: true
        });

        if(career_form_19_obj) {
            career_form_19_code = career_form_19_obj.code;
            career_form_19_name = career_form_19_obj.name;
        }
        //
        let career_form_20_obj = await CareersFormCms.findOne({
            where: {
                id: career_form_20
            },
            raw: true
        });

        if(career_form_20_obj) {
            career_form_20_code = career_form_20_obj.code;
            career_form_20_name = career_form_20_obj.name;
        }

//
    var extension = path.extname(file);
    var fileName = path.basename(file,extension);
    var newFileName = `${__dirname}/../../uploadfile/${identity_card}-${name}${extension}`;
    await fs.rename(`${__dirname}/../..${file}`, newFileName, function(err) {
      if ( err ) console.log('ERROR: ' + err);
      });
        file1 = newFileName;
        console.log(file);
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

        let typee = "HB";

        let data = await CurriculumVitaeCms.findOne({
            where: {
                identity_card: identity_card,
                typee
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
        let combination11_code = "";
        let combination12_code = "";
        let combination13_code = "";
        let combination14_code = "";
        let combination15_code = "";
        let combination16_code = "";
        let combination17_code = "";
        let combination18_code = "";
        let combination19_code = "";
        let combination20_code = "";

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

        let combination11Obj = await CombinationCms.findOne({
          where: {
            id: combination11
          }
        })
        if(combination11Obj) {
          combination11_code = combination11Obj.name
        }

        let combination12Obj = await CombinationCms.findOne({
          where: {
            id: combination12
          }
        })
        if(combination12Obj) {
          combination12_code = combination12Obj.name
        }

        let combination13Obj = await CombinationCms.findOne({
          where: {
            id: combination13
          }
        })
        if(combination13Obj) {
          combination13_code = combination13Obj.name
        }

        let combination14Obj = await CombinationCms.findOne({
          where: {
            id: combination14
          }
        })
        if(combination14Obj) {
          combination14_code = combination14Obj.name
        }

        let combination15Obj = await CombinationCms.findOne({
          where: {
            id: combination15
          }
        })
        if(combination15Obj) {
          combination15_code = combination15Obj.name
        }

        let combination16Obj = await CombinationCms.findOne({
          where: {
            id: combination16
          }
        })
        if(combination16Obj) {
          combination16_code = combination16Obj.name
        }

        let combination17Obj = await CombinationCms.findOne({
          where: {
            id: combination17
          }
        })
        if(combination17Obj) {
          combination17_code = combination17Obj.name
        }

        let combination18Obj = await CombinationCms.findOne({
          where: {
            id: combination18
          }
        })
        if(combination18Obj) {
          combination18_code = combination18Obj.name
        }

        let combination19Obj = await CombinationCms.findOne({
          where: {
            id: combination19
          }
        })
        if(combination19Obj) {
          combination19_code = combination19Obj.name
        }

        let combination20Obj = await CombinationCms.findOne({
          where: {
            id: combination20
          }
        })
        if(combination20Obj) {
          combination20_code = combination20Obj.name
        }
        //let session_id = 2;
         let session_id = session.id;


// Lưu dữ liệu vào bảng
        let result = await CurriculumVitaeCms.create({name, gender, birthday, place_of_birth, place_of_birth2, identity_card, address, mobilephone, email, nation, graduate_year,
            grade_ten, grade_ten_province_code, grade_ten_school_code, grade_eleven, grade_eleven_school_code, grade_eleven_province_code,
            grade_twelve, grade_twelve_school_code, grade_twelve_province_code, area, priority, identity_card_date,identity_card_address, province_code, district_code, village_code, permanent_residence, career_form_1,
            career_form_2, career_form_3, career_form_4, career_form_5, career_form_6, career_form_7, career_form_8, career_form_9, career_form_10,
            career_form_12, career_form_13, career_form_14, career_form_15, career_form_16, career_form_17, career_form_18, career_form_19, career_form_20, career_form_11,
            combination1, combination2, combination3, combination4, combination5, combination6, combination7, combination8, combination9, combination10,
                        combination11, combination12, combination13, combination14, combination15, combination16, combination17, combination18, combination19, combination20,
            diemtb11, diemtb12, diemtb13, diemtb21, diemtb22, diemtb23, diemtb31, diemtb32, diemtb33,
            diemtb14, diemtb15, diemtb16, diemtb17, diemtb18, diemtb19,
            diemtb24, diemtb25, diemtb26, diemtb27, diemtb28, diemtb29,
            diemtb34, diemtb35, diemtb36, diemtb37, diemtb38, diemtb39,
            diemtb44, diemtb45, diemtb46, diemtb47, diemtb48, diemtb49,
            diemtb54, diemtb55, diemtb56, diemtb57, diemtb58, diemtb59,
            diemtb64, diemtb65, diemtb66, diemtb67, diemtb68, diemtb69,
            diemtb74, diemtb75, diemtb76, diemtb77, diemtb78, diemtb79,
            diemtb84, diemtb85, diemtb86, diemtb87, diemtb88, diemtb89,
            diemtb94, diemtb95, diemtb96, diemtb97, diemtb98, diemtb99,
            diemtb104, diemtb105, diemtb106, diemtb107, diemtb108, diemtb109,
            diemtb111, diemtb112, diemtb113, diemtb114, diemtb115, diemtb116, diemtb117, diemtb118, diemtb119,
            diemtb121, diemtb122, diemtb123, diemtb124, diemtb125, diemtb126, diemtb127, diemtb128, diemtb129,
            diemtb131, diemtb132, diemtb133, diemtb134, diemtb135, diemtb136, diemtb137, diemtb138, diemtb139,
            diemtb141, diemtb142, diemtb143, diemtb144, diemtb145, diemtb146, diemtb147, diemtb148, diemtb149,
            diemtb151, diemtb152, diemtb153, diemtb154, diemtb155, diemtb156, diemtb157, diemtb158, diemtb159,
            diemtb161, diemtb162, diemtb163, diemtb164, diemtb165, diemtb166, diemtb167, diemtb168, diemtb169,
            diemtb171, diemtb172, diemtb173, diemtb174, diemtb175, diemtb176, diemtb177, diemtb178, diemtb179,
            diemtb181, diemtb182, diemtb183, diemtb184, diemtb185, diemtb186, diemtb187, diemtb188, diemtb189,
            diemtb191, diemtb192, diemtb193, diemtb194, diemtb195, diemtb196, diemtb197, diemtb198, diemtb199,
            diemtb201, diemtb202, diemtb203, diemtb204, diemtb205, diemtb206, diemtb207, diemtb208, diemtb209,
            // option2, option3, option4, option5, option6, option7, option8, option9, option10,
            diemtb41, diemtb42, diemtb43, diemtb51, diemtb52, diemtb53, diemtb61, diemtb62, diemtb63,
            diemtb71, diemtb72, diemtb73, diemtb81, diemtb82, diemtb83, diemtb91, diemtb92, diemtb93,
            diemtb101, diemtb102, diemtb103, code, typee, session_id, file});
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
            place_of_birth2: place_of_birth2,
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
            career_form_11: career_form_11_name,
            career_form_12: career_form_12_name,
            career_form_13: career_form_13_name,
            career_form_14: career_form_14_name,
            career_form_15: career_form_15_name,
            career_form_16: career_form_16_name,
            career_form_17: career_form_17_name,
            career_form_18: career_form_18_name,
            career_form_19: career_form_19_name,
            career_form_20: career_form_20_name,
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
            career_form_11_code: career_form_11_code,
            career_form_12_code: career_form_12_code,
            career_form_13_code: career_form_13_code,
            career_form_14_code: career_form_14_code,
            career_form_15_code: career_form_15_code,
            career_form_16_code: career_form_16_code,
            career_form_17_code: career_form_17_code,
            career_form_18_code: career_form_18_code,
            career_form_19_code: career_form_19_code,
            career_form_20_code: career_form_20_code,
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

            u1: province_code[0] ? province_code[0] : '',
            u2: province_code[1] ? province_code[1] : '',
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
            combination11: combination11_code,
            combination12: combination12_code,
            combination13: combination13_code,
            combination14: combination14_code,
            combination15: combination15_code,
            combination16: combination16_code,
            combination17: combination17_code,
            combination18: combination18_code,
            combination19: combination19_code,
            combination20: combination20_code,
            diemtb11: diemtb11,
            diemtb12: diemtb12,
            diemtb13: diemtb13,
            diemtb14: diemtb14,
            diemtb15: diemtb15,
            diemtb16: diemtb16,
            diemtb17: diemtb17,
            diemtb18: diemtb18,
            diemtb19: diemtb19,
            diemtb21: diemtb21 ? diemtb21: "",
            diemtb22: diemtb22 ? diemtb22: "",
            diemtb23: diemtb23 ? diemtb23: "",
            diemtb24: diemtb24 ? diemtb24: "",
            diemtb25: diemtb25 ? diemtb25: "",
            diemtb26: diemtb26 ? diemtb26: "",
            diemtb27: diemtb27 ? diemtb27: "",
            diemtb28: diemtb28 ? diemtb28: "",
            diemtb29: diemtb29 ? diemtb29: "",

            diemtb31: diemtb31 ? diemtb31: "",
            diemtb32: diemtb32 ? diemtb32: "",
            diemtb33: diemtb33 ? diemtb33: "",
            diemtb34: diemtb34 ? diemtb34: "",
            diemtb35: diemtb35 ? diemtb35: "",
            diemtb36: diemtb36 ? diemtb36: "",
            diemtb37: diemtb37 ? diemtb37: "",
            diemtb38: diemtb38 ? diemtb38: "",
            diemtb39: diemtb39 ? diemtb39: "",

            diemtb41: diemtb41 ? diemtb41: "",
            diemtb42: diemtb42 ? diemtb42: "",
            diemtb43: diemtb43 ? diemtb43: "",
            diemtb44: diemtb44 ? diemtb44: "",
            diemtb45: diemtb45 ? diemtb45: "",
            diemtb46: diemtb46 ? diemtb46: "",
            diemtb47: diemtb47 ? diemtb47: "",
            diemtb48: diemtb48 ? diemtb48: "",
            diemtb49: diemtb49 ? diemtb49: "",

            diemtb51: diemtb51 ? diemtb51: "",
            diemtb52: diemtb52 ? diemtb52: "",
            diemtb53: diemtb53 ? diemtb53: "",
            diemtb54: diemtb54 ? diemtb54: "",
            diemtb55: diemtb55 ? diemtb55: "",
            diemtb56: diemtb56 ? diemtb56: "",
            diemtb57: diemtb57 ? diemtb57: "",
            diemtb58: diemtb58 ? diemtb58: "",
            diemtb59: diemtb59 ? diemtb59: "",

            diemtb61: diemtb61 ? diemtb61: "",
            diemtb62: diemtb62 ? diemtb62: "",
            diemtb63: diemtb63 ? diemtb63: "",
            diemtb64: diemtb64 ? diemtb64: "",
            diemtb65: diemtb65 ? diemtb65: "",
            diemtb66: diemtb66 ? diemtb66: "",
            diemtb67: diemtb67 ? diemtb67: "",
            diemtb68: diemtb68 ? diemtb68: "",
            diemtb69: diemtb69 ? diemtb69: "",

            diemtb71: diemtb71 ? diemtb71: "",
            diemtb72: diemtb72 ? diemtb72: "",
            diemtb73: diemtb73 ? diemtb73: "",
            diemtb74: diemtb74 ? diemtb74: "",
            diemtb75: diemtb75 ? diemtb75: "",
            diemtb76: diemtb76 ? diemtb76: "",
            diemtb77: diemtb77 ? diemtb77: "",
            diemtb78: diemtb78 ? diemtb78: "",
            diemtb79: diemtb79 ? diemtb79: "",

            diemtb81: diemtb81 ? diemtb81: "",
            diemtb82: diemtb82 ? diemtb82: "",
            diemtb83: diemtb83 ? diemtb83: "",
            diemtb84: diemtb84 ? diemtb84: "",
            diemtb85: diemtb85 ? diemtb85: "",
            diemtb86: diemtb86 ? diemtb86: "",
            diemtb87: diemtb87 ? diemtb87: "",
            diemtb88: diemtb88 ? diemtb88: "",
            diemtb89: diemtb89 ? diemtb89: "",

            diemtb91: diemtb91 ? diemtb91: "",
            diemtb92: diemtb92 ? diemtb92: "",
            diemtb93: diemtb93 ? diemtb93: "",
            diemtb94: diemtb94 ? diemtb94: "",
            diemtb95: diemtb95 ? diemtb95: "",
            diemtb96: diemtb96 ? diemtb96: "",
            diemtb97: diemtb97 ? diemtb97: "",
            diemtb98: diemtb98 ? diemtb98: "",
            diemtb99: diemtb99 ? diemtb99: "",

            diemtb101: diemtb101 ? diemtb101: "",
            diemtb102: diemtb102 ? diemtb102: "",
            diemtb103: diemtb103 ? diemtb103: "",
            diemtb104: diemtb104 ? diemtb104: "",
            diemtb105: diemtb105 ? diemtb105: "",
            diemtb106: diemtb106 ? diemtb106: "",
            diemtb107: diemtb107 ? diemtb107: "",
            diemtb108: diemtb108 ? diemtb108: "",
            diemtb109: diemtb109 ? diemtb109: "",

            diemtb111: diemtb111 ? diemtb111: "",
            diemtb112: diemtb112 ? diemtb112: "",
            diemtb113: diemtb113 ? diemtb113: "",
            diemtb114: diemtb114 ? diemtb114: "",
            diemtb115: diemtb115 ? diemtb115: "",
            diemtb116: diemtb116 ? diemtb116: "",
            diemtb117: diemtb117 ? diemtb117: "",
            diemtb118: diemtb118 ? diemtb118: "",
            diemtb119: diemtb119 ? diemtb119: "",

            diemtb121: diemtb121 ? diemtb121: "",
            diemtb122: diemtb122 ? diemtb122: "",
            diemtb123: diemtb123 ? diemtb123: "",
            diemtb124: diemtb124 ? diemtb124: "",
            diemtb125: diemtb125 ? diemtb125: "",
            diemtb126: diemtb126 ? diemtb126: "",
            diemtb127: diemtb127 ? diemtb127: "",
            diemtb128: diemtb128 ? diemtb128: "",
            diemtb129: diemtb129 ? diemtb129: "",

            diemtb131: diemtb131 ? diemtb131: "",
            diemtb132: diemtb132 ? diemtb132: "",
            diemtb133: diemtb133 ? diemtb133: "",
            diemtb134: diemtb134 ? diemtb134: "",
            diemtb135: diemtb135 ? diemtb135: "",
            diemtb136: diemtb136 ? diemtb136: "",
            diemtb137: diemtb137 ? diemtb137: "",
            diemtb138: diemtb138 ? diemtb138: "",
            diemtb139: diemtb139 ? diemtb139: "",

            diemtb141: diemtb141 ? diemtb141: "",
            diemtb142: diemtb142 ? diemtb142: "",
            diemtb143: diemtb143 ? diemtb143: "",
            diemtb144: diemtb144 ? diemtb144: "",
            diemtb145: diemtb145 ? diemtb145: "",
            diemtb146: diemtb146 ? diemtb146: "",
            diemtb147: diemtb147 ? diemtb147: "",
            diemtb148: diemtb148 ? diemtb148: "",
            diemtb149: diemtb149 ? diemtb149: "",

            diemtb151: diemtb151 ? diemtb151: "",
            diemtb152: diemtb152 ? diemtb152: "",
            diemtb153: diemtb153 ? diemtb153: "",
            diemtb154: diemtb154 ? diemtb154: "",
            diemtb155: diemtb155 ? diemtb155: "",
            diemtb156: diemtb156 ? diemtb156: "",
            diemtb157: diemtb157 ? diemtb157: "",
            diemtb158: diemtb158 ? diemtb158: "",
            diemtb159: diemtb159 ? diemtb159: "",

            diemtb161: diemtb161 ? diemtb161: "",
            diemtb162: diemtb162 ? diemtb162: "",
            diemtb163: diemtb163 ? diemtb163: "",
            diemtb164: diemtb164 ? diemtb164: "",
            diemtb165: diemtb165 ? diemtb165: "",
            diemtb166: diemtb166 ? diemtb166: "",
            diemtb167: diemtb167 ? diemtb167: "",
            diemtb168: diemtb168 ? diemtb168: "",
            diemtb169: diemtb169 ? diemtb169: "",

            diemtb171: diemtb171 ? diemtb171: "",
            diemtb172: diemtb172 ? diemtb172: "",
            diemtb173: diemtb173 ? diemtb173: "",
            diemtb174: diemtb174 ? diemtb174: "",
            diemtb175: diemtb175 ? diemtb175: "",
            diemtb176: diemtb176 ? diemtb176: "",
            diemtb177: diemtb177 ? diemtb177: "",
            diemtb178: diemtb178 ? diemtb178: "",
            diemtb179: diemtb179 ? diemtb179: "",

            diemtb181: diemtb181 ? diemtb181: "",
            diemtb182: diemtb182 ? diemtb182: "",
            diemtb183: diemtb183 ? diemtb183: "",
            diemtb184: diemtb184 ? diemtb184: "",
            diemtb185: diemtb185 ? diemtb185: "",
            diemtb186: diemtb186 ? diemtb186: "",
            diemtb187: diemtb187 ? diemtb187: "",
            diemtb188: diemtb188 ? diemtb188: "",
            diemtb189: diemtb189 ? diemtb189: "",

            diemtb191: diemtb191 ? diemtb191: "",
            diemtb192: diemtb192 ? diemtb192: "",
            diemtb193: diemtb193 ? diemtb193: "",
            diemtb194: diemtb194 ? diemtb194: "",
            diemtb195: diemtb195 ? diemtb195: "",
            diemtb196: diemtb196 ? diemtb196: "",
            diemtb197: diemtb197 ? diemtb197: "",
            diemtb198: diemtb198 ? diemtb198: "",
            diemtb199: diemtb199 ? diemtb199: "",

            diemtb201: diemtb201 ? diemtb201: "",
            diemtb202: diemtb202 ? diemtb202: "",
            diemtb203: diemtb203 ? diemtb203: "",
            diemtb204: diemtb204 ? diemtb204: "",
            diemtb205: diemtb205 ? diemtb205: "",
            diemtb206: diemtb206 ? diemtb206: "",
            diemtb207: diemtb207 ? diemtb207: "",
            diemtb208: diemtb208 ? diemtb208: "",
            diemtb209: diemtb209 ? diemtb209: "",

            d1: new Date().getDate(),
            m1: new Date().getMonth() + 1
        });

        doc.render();
        var buf = doc.getZip()
            .generate({type: 'nodebuffer'});
        let file_name = new Date().getTime().toString();
        // await fs.writeFileSync(path.resolve(`public/files/${file_name}.docx`), buf);
        // const dataPdf = await word2pdf(`public/files/${file_name}.docx`);
        // fs.writeFileSync(`public/files/${file_name}.pdf`, dataPdf);
        // return res.json({
        //     code: 1,
        //     data: `/files/${file_name}.pdf`
        // })
        libre.convert(buf, '.pdf', undefined, (err, done) => {
          if (err) {
            console.log(`Error converting file: ${err}`);
          }

          // Here in done you have pdf file which you can save or transfer in another stream
          console.log(done);
          fs.writeFileSync(`public/files/${file_name}.pdf`, done);
          return res.json({
              code: 1,
              data: `/files/${file_name}.pdf`
          })
      });
    } catch (error) {
        errorSystem(req, res, error);
    }
};
