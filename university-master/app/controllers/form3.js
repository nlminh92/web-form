const createReport = require('docx-templates').default;
var PizZip = require('pizzip');
var Docxtemplater = require('docxtemplater');
var fs = require('fs');
const word2pdf = require('word2pdf');

const libre = require('libreoffice-convert');

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

const {errorSystem, handleSuccessResponse, handleErrorResponse} = require('../helpers/responseHelper');

exports.saveAndCreateDocx = async function (req, res) {
    try {
      // Đây bạn thay bằng các param clien gửi lên
        let {name, gender, birthday, identity_card, address, mobilephone, email, file} = req.body;
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
               type: 3
           },
            raw: true
        });

        if(!session) {
            return handleErrorResponse(res, "Quá thời gian hoặc chưa đến thời gian đăng ký");
        }

        // rename file
        var extension = path.extname(file);
        var fileName = path.basename(file,extension);
        var newFileName = `${__dirname}/../../upload/${identity_card}-${fileName}${extension}`;
        await fs.rename(`${__dirname}/../..${file}`, newFileName, function(err) {
            if ( err ) console.log('ERROR: ' + err);
        });
        file = newFileName;
        console.log(file);

// Lấy thông tin ngành đăng ký
        let count = await CurriculumVitaeCms.count({});
        let code = (count + 1).toString();

        let length = 5 - code.length;
        code = "0".repeat(length) + code;
        let typee = "NK";

        let data = await CurriculumVitaeCms.findOne({
            where: {
                identity_card: identity_card,
                typee: typee
            }});
        if(data) {
            return res.json({
                code: 2,
                message: "Thông tin đăng ký đã tồn tại trong hệ thống"
            })
        }

        //let session_id = 3;
         let session_id = session.id;

        // Lưu dữ liệu vào bảng
        let result = await CurriculumVitaeCms.create({name, gender, birthday,
          identity_card, address, mobilephone, email, code, session_id, typee, file});
        let gender_text = "0";
        if(gender == "female") {
            gender_text = "1";
        }

        let tmp = birthday.split("-");

        let tmp_2 = "";

        // Từ đây
        var content = fs
            .readFileSync(path.resolve('templates/template_3.docx'), 'binary');

        var zip = new PizZip(content);

        var doc = new Docxtemplater();
        doc.loadZip(zip);
        doc.setData({
            name: name,
            gender: gender_text,
            address: address,
            mobilephone: mobilephone,
            email: email,
            date: tmp[2],
            month: tmp[1],
            year: tmp[0],
            d1: new Date().getDate(),
            m1: new Date().getMonth() + 1,
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
            k1: tmp[0][2] ? tmp[0][2] : '',
            k2: tmp[0][3] ? tmp[0][3] : '',
            x1: code[0] ? code[0] : '',
            x2: code[1] ? code[1] : '',
            x3: code[2] ? code[2] : '',
            x4: code[3] ? code[3] : '',
            x5: code[4] ? code[4] : '',

        });

        doc.render();
        var buf = doc.getZip()
            .generate({type: 'nodebuffer'});
        let file_name = new Date().getTime().toString();
        // await fs.writeFileSync(path.resolve(`public/files/${file_name}.docx`), buf);
        // const dataPdf = await word2pdf(`public/files/${file_name}.docx`);
        // await fs.writeFileSync(`public/files/${file_name}.pdf`, dataPdf);
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
