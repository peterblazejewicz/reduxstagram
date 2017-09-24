import Raven from 'raven-js';
// tslint:disable-next-line:variable-name
const sentry_key = 'cb55d4f05cd443ce82303222f77ef5e0';
// tslint:disable-next-line:variable-name
const sentry_app = '61499';
// tslint:disable-next-line:variable-name
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

// tslint:disable-next-line:no-any
const logException = (ex: Error, context: any) => {
  Raven.captureException(ex, {
    extra: context,
  });
  if (window && window.console && console.error) {
    // tslint:disable-next-line:no-console
    console.error(ex);
  }
};
export default logException;
