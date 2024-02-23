import pino from 'pino';

export function createLogger(): pino.Logger {
  return pino();
}
