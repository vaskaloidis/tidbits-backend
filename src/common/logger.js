import winston from "winston";

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  prettyPrint: JSON.stringify,
  defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    // new winston.transports.File({ filename: 'error.log', level: 'error' }),
    // new winston.transports.File({ filename: 'combined.log' })
  ]
});

logger.add(
  new winston.transports.Console({
    format: winston.format.simple()
  })
);

export default logger;
