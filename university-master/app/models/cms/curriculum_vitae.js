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
        // option1: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // option2: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // option3: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // option4: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // option5: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // option6: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // option7: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // option8: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // option9: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // option10: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
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
            type: DataTypes.STRING,
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
        combination11: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        combination12: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        combination13: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        combination14: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        combination15: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        combination16: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        combination17: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        combination18: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        combination19: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        combination20: {
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
        diemtb111: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb112: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb113: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb114: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb115: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb116: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb117: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb118: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb119: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb121: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb122: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb123: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb124: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb125: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb126: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb127: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb128: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb129: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb131: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb132: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb133: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb134: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb135: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb136: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb137: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb138: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb139: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb141: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb142: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb143: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb144: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb145: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb146: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb147: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb148: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb149: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb151: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb152: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb153: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb154: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb155: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb156: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb157: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb158: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb159: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb161: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb162: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb163: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb164: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb165: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb166: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb167: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb168: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb169: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb171: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb172: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb173: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb174: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb175: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb176: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb177: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb178: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb179: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb181: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb182: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb183: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb184: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb185: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb186: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb187: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb188: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb189: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb191: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb192: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb193: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb194: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb195: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb196: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb197: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb198: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb199: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb201: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb202: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb203: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb204: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb205: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb206: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb207: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb208: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diemtb209: {
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
        career_form_12: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        career_form_13: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        career_form_14: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        career_form_15: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        career_form_16: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        career_form_17: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        career_form_18: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        career_form_19: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        career_form_20: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        career_form_11: {
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
