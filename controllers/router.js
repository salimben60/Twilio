// Map routes to controller functions
module.exports = function(router) {
  router.get('/error', function(req, resp) {
    throw new Error('Derp. An error occurred.');
  });
  router.get('/page2', function (req, resp) {
    throw new Error('Correct page');
  });
};
