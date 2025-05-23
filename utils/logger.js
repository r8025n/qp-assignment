const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info', // Minimum level to log
  format: format.combine(
    format.timestamp(),
    format.json() // Output logs in JSON format
  ),
  transports: [
    new transports.Console(), // Log to console
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' }),
  ],
});

module.exports = logger;
