var twilioClient = require('../twilioClient');
var fs = require('fs');
var admins = require('../config/administrators.json');

function formatMessage(errorToReport) {
  return 'Attention MobileIron Admin' +
    'Someone locked in to your Tenant' + errorToReport +
    '. Go to: http://login.mobileiron.com ' +
    'for more details.';
}

exports.notifyOnError = function(appError, request, response, next) {
  admins.forEach(function(admin) {
    var messageToSend = formatMessage(appError.message);
    twilioClient.sendSms(admin.phoneNumber, messageToSend);
  });
  next(appError);
};
   