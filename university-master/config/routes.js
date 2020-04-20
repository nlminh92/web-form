// Controller
var home = require('../app/controllers/home');
var form3 = require('../app/controllers/form3');
var form2 = require('../app/controllers/form2');
var user = require('../app/controllers/user');
var session = require('../app/controllers/sessions');
var curriculumn = require('../app/controllers/curriculums');

module.exports = function (app) {
  app.get('/', home.home);
  app.get('/provinces', home.provinces);
  app.get('/districts', home.districts);
  app.get('/wards', home.wards);
  app.get('/careers', home.getCareers);
  app.get('/careers-form', home.getCareersForm);
  app.get('/combination', home.getCombination);
  // Router lưu data nó sẽ ở đây, gọi đến hàm saveAndCreateDocx
  app.post('/saveData', home.saveAndCreateDocx);
  app.post('/saveDataForm', form3.saveAndCreateDocx);
  app.post('/saveForm', form2.saveAndCreateDocx);
  app.post('/sign_in', user.create);

  app.get('/sessions', session.index);
  app.post('/session_destroy', session.delete);
  app.post('/sessions', session.create);
  app.get('/curriculumns', curriculumn.index);
  app.get('/report-careers', curriculumn.reportCareer);
  app.get('/report-careers-form', curriculumn.reportCareersForm);
  app.post('/report-sessions', curriculumn.reportSession);
};
