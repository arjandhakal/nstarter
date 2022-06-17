import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';
import Sentry from 'winston-transport-sentry-node';
import { APP_ENV, SENTRY_DSN } from '../helpers/constants';

const { combine, timestamp, printf, errors, colorize, cli } = format;

const formatLog = printf(({ level, message, timestamp: dateTime }) => `${dateTime} [${level}] ${message}`);

const logger = createLogger({
  format: combine(errors({ stack: true }), colorize(), timestamp(), formatLog),
  transports: [
    new transports.DailyRotateFile({
      dirname: './logs/',
      filename: '%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      maxSize: '20m',
      maxFiles: '14d'
    }),
    new Sentry({
      level: 'error',
      sentry: {
        dsn: SENTRY_DSN,
        tracesSampleRate: 1.0,
        environment: APP_ENV
      }
    })
  ]
});

if (APP_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: combine(colorize(), cli())
    })
  );
}

export default logger;
