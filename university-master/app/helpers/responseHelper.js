const { format, createLogger, transports } = require('winston');

const logger = createLogger({
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.printf(log => `${log.timestamp} ${log.level}:\n${log.message}`)
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: './errors.log' })

  ],
  exitOnError: false
});

// Handle error system here
exports.errorSystem = (req, res, err) => {
  logger.error(req.method + " " + req.originalUrl + "\n" + err.stack);
  if (res) res.send({
    code: 0,
    message: err.message
  });
}
// Handle success here
exports.handleSuccessResponse = async function (res, data = null, message = null){
  return res.send({
    code: 1,
    message: message,
    data: data
  })
}
// Handle error here
exports.handleErrorResponse = async function (res, message = null){
  return res.send({
    code: 2,
    message: message
  })
}

