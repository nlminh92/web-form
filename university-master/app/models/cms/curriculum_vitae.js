'use strict';
module.exports = (sequelize, DataTypes) => {
    const CurriculumVitae = sequelize.define('CurriculumVitaeCms', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            // bạn sửa trong này nữa nhé
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        option1: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        option2: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        option3: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        option4: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        option5: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        option6: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        option7: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        option8: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        option9: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        option10: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        nation: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        identity_card_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        identity_card_address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        province_code: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        district_code: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        village_code: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        permanent_residence: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        identity_card: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        place_of_birth: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        place_of_birth2: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        mobilephone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        grade_ten: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        grade_ten_province_code: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        grade_ten_school_code: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        grade_eleven: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        grade_eleven_province_code: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        grade_eleven_school_code: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        grade_twelve: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        grade_twelve_province_code: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        grade_twelve_school_code: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        graduate_year: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        area: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        fixture: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        registration_number: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        point: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        career_1: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        session_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        career_2: {
            type: DataTypes.INTEGER
        },
        career_3: {
            type: DataTypes.INTEGER
        },
        career_4: {
            type: DataTypes.INTEGER
        },
        priority: {
            type: DataTypes.STRING,
        },
        code: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        combination1: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        combination2: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        combination3: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        combination4: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        combination5: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        combination6: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        combination7: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        combination8: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        combination9: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        combination10: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb11: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb12: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb13: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb14: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb15: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb16: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb17: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb18: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb19: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb21: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb22: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb23: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb24: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb25: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb26: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb27: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb28: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb29: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb31: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb32: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb33: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb34: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb35: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb36: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb37: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb38: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb39: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb41: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb42: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb43: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb44: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb45: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb46: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb47: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb48: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb49: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb51: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb52: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb53: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb54: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb55: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb56: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb57: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb58: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb59: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb61: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb62: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb63: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb64: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb65: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb66: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb67: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb68: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb69: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb71: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb72: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb73: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb74: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb75: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb76: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb77: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb78: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb79: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb81: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb82: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb83: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb84: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb85: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb86: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb87: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb88: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb89: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb91: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb92: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb93: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb94: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb95: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb96: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb97: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb98: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb99: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb101: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb102: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb103: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb104: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb105: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb106: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb107: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb108: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb109: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        career_form_1: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        career_form_2: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        career_form_3: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        career_form_4: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        career_form_5: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        career_form_6: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        career_form_7: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        career_form_8: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        career_form_9: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        career_form_10: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        typee: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE(3),
            defaultValue: sequelize.literal('NOW()'),
        },
        updated_at: {
            type: DataTypes.DATE(3),
            defaultValue: sequelize.literal('NOW()'),
        }

    }, {
        tableName: 'curriculum_vitaes'
    });
    return CurriculumVitae;
};
