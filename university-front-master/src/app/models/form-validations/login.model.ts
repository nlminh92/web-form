export const loginValidation = {
    'username': [
        { type: 'required', messageKey: 'form.validation.required' },
        { type: 'email', messageKey: 'form.validation.email' }
    ],
    'password': [
        { type: 'required', messageKey: 'form.validation.required' },
        { type: 'minLength', value: 4, messageKey: 'form.validation.minLength' }
    ]
};

export const passwordRecoveryValidation = {
    'email': [
        { type: 'required', messageKey: 'form.validation.required' },
        { type: 'email', messageKey: 'form.validation.email' }
    ]
};

export const formValidation = {
    'name': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'gender': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'birthday': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    // 'place_of_birth': [
    //     { type: 'required', messageKey: 'form.validation.required' }
    // ],
    'place_of_birth2': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'identity_card': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'address': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'mobilephone': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'email': [
        { type: 'required', messageKey: 'form.validation.required' },
        { type: 'email', messageKey: 'form.validation.email' }
    ],
    'grade_ten': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'grade_ten_province_code': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'grade_ten_school_code': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'grade_eleven': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'grade_eleven_province_code': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'grade_eleven_school_code': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'grade_twelve': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'grade_twelve_province_code': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'grade_twelve_school_code': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'graduate_year': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'area': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'priority': [
    ],
    'fixture': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'registration_number': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'point': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'career_1': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'career_2': [
    ],
    'career_3': [
    ],
    'career_4': [
    ]
};

export const form3Validation = {
    'name': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'gender': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'birthday': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],

    'identity_card': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'address': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'mobilephone': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'email': [
        { type: 'required', messageKey: 'form.validation.required' },
        { type: 'email', messageKey: 'form.validation.email' }
    ]
};

export const form2Validation = {
    'name': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'gender': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'option1': [
    ],
    'option2': [
    ],
    'option3': [
    ],
    'option4': [
    ],
    'option5': [
    ],
    'option6': [
    ],
    'option7': [
    ],
    'option8': [
    ],
    'option9': [
    ],
    'option10': [
    ],
    'birthday': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    // 'place_of_birth': [
    //     { type: 'required', messageKey: 'form.validation.required' }
    // ],
    'place_of_birth2': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'nation': [
      { type: 'required', messageKey: 'form.validation.required' }
    ],
    'identity_card_date': [
      { type: 'required', messageKey: 'form.validation.required' }
    ],
    'area': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'graduate_year': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'priority': [
    ],
    'combination1': [
    ],
    'combination2': [
    ],
    'combination3': [
    ],
    'combination4': [
    ],
    'combination5': [
    ],
    'combination6': [
    ],
    'combination7': [
    ],
    'combination8': [
    ],
    'combination9': [
    ],
    'combination10': [
    ],
    'identity_card_address': [
      { type: 'required', messageKey: 'form.validation.required' }
    ],
    'permanent_residence': [
      { type: 'required', messageKey: 'form.validation.required' }
    ],
    'province_code': [
      { type: 'required', messageKey: 'form.validation.required' }
    ],
    'diemtb11': [
      { type: 'required', messageKey: 'form.validation.required' }
    ],
    'diemtb12': [
      { type: 'required', messageKey: 'form.validation.required' }
    ],
    'diemtb13': [
      { type: 'required', messageKey: 'form.validation.required' }
    ],
    'diemtb14': [
      { type: 'required', messageKey: 'form.validation.required' }
    ],
    'diemtb15': [
      { type: 'required', messageKey: 'form.validation.required' }
    ],
    'diemtb16': [
      { type: 'required', messageKey: 'form.validation.required' }
    ],
    'diemtb17': [
      { type: 'required', messageKey: 'form.validation.required' }
    ],
    'diemtb18': [
      { type: 'required', messageKey: 'form.validation.required' }
    ],
    'diemtb19': [
      { type: 'required', messageKey: 'form.validation.required' }
    ],
    'diemtb21': [
    ],
    'diemtb22': [
    ],
    'diemtb23': [
    ],
    'diemtb24': [
    ],
    'diemtb25': [
    ],
    'diemtb26': [
    ],
    'diemtb27': [
    ],
    'diemtb28': [
    ],
    'diemtb29': [
    ],
    'diemtb31': [
    ],
    'diemtb32': [
    ],
    'diemtb33': [
    ],
    'diemtb34': [
    ],
    'diemtb35': [
    ],
    'diemtb36': [
    ],
    'diemtb37': [
    ],
    'diemtb38': [
    ],
    'diemtb39': [
    ],
    'diemtb41': [
    ],
    'diemtb42': [
    ],
    'diemtb43': [
    ],
    'diemtb44': [
    ],
    'diemtb45': [
    ],
    'diemtb46': [
    ],
    'diemtb47': [
    ],
    'diemtb48': [
    ],
    'diemtb49': [
    ],
    'diemtb51': [
    ],
    'diemtb52': [
    ],
    'diemtb53': [
    ],
    'diemtb54': [
    ],
    'diemtb55': [
    ],
    'diemtb56': [
    ],
    'diemtb57': [
    ],
    'diemtb58': [
    ],
    'diemtb59': [
    ],
    'diemtb61': [
    ],
    'diemtb62': [
    ],
    'diemtb63': [
    ],
    'diemtb64': [
    ],
    'diemtb65': [
    ],
    'diemtb66': [
    ],
    'diemtb67': [
    ],
    'diemtb68': [
    ],
    'diemtb69': [
    ],
    'diemtb71': [
    ],
    'diemtb72': [
    ],
    'diemtb73': [
    ],
    'diemtb74': [
    ],
    'diemtb75': [
    ],
    'diemtb76': [
    ],
    'diemtb77': [
    ],
    'diemtb78': [
    ],
    'diemtb79': [
    ],
    'diemtb81': [
    ],
    'diemtb82': [
    ],
    'diemtb83': [
    ],
    'diemtb84': [
    ],
    'diemtb85': [
    ],
    'diemtb86': [
    ],
    'diemtb87': [
    ],
    'diemtb88': [
    ],
    'diemtb89': [
    ],
    'diemtb91': [
    ],
    'diemtb92': [
    ],
    'diemtb93': [
    ],
    'diemtb94': [
    ],
    'diemtb95': [
    ],
    'diemtb96': [
    ],
    'diemtb97': [
    ],
    'diemtb98': [
    ],
    'diemtb99': [
    ],
    'diemtb101': [
    ],
    'diemtb102': [
    ],
    'diemtb103': [
    ],
    'diemtb104': [
    ],
    'diemtb105': [
    ],
    'diemtb106': [
    ],
    'diemtb107': [
    ],
    'diemtb108': [
    ],
    'diemtb109': [
    ],
    'career_form_1': [
      { type: 'required', messageKey: 'form.validation.required' }
    ],
    'career_form_2': [
    ],
    'career_form_3': [
    ],
    'career_form_4': [
    ],
    'career_form_5': [
    ],
    'career_form_6': [
    ],
    'career_form_7': [
    ],
    'career_form_8': [
    ],
    'career_form_9': [
    ],
    'career_form_10': [
    ],
    'district_code': [
      { type: 'required', messageKey: 'form.validation.required' }
    ],
    'village_code': [
      { type: 'required', messageKey: 'form.validation.required' }
    ],
    'grade_ten': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'grade_ten_province_code': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'grade_ten_school_code': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'grade_eleven': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'grade_eleven_province_code': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'grade_eleven_school_code': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'grade_twelve': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'grade_twelve_province_code': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'grade_twelve_school_code': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'identity_card': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'address': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'mobilephone': [
        { type: 'required', messageKey: 'form.validation.required' }
    ],
    'email': [
        { type: 'required', messageKey: 'form.validation.required' },
        { type: 'email', messageKey: 'form.validation.email' }
    ]
};
