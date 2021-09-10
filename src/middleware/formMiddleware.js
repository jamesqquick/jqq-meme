import nextConnect from 'next-connect';
import multiparty from 'multiparty';

const formMiddleware = nextConnect();

formMiddleware.use(async (req, res, next) => {
  const form = new multiparty.Form();
  await form.parse(req, function (err, fields, files) {
    req.body = {};
    Object.keys(fields).forEach((key) => {
      // eslint-disable-next-line prefer-destructuring
      req.body[key] = fields[key][0];
    });
    req.files = files;
    next();
  });
});

export default formMiddleware;
