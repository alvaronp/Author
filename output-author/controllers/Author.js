'use strict';

var utils = require('../utils/writer.js');
var Author = require('../service/AuthorService');

module.exports.createAuthor = function createAuthor (req, res, next, body) {
  Author.createAuthor(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.deleteAuthor = function deleteAuthor (req, res, next, authorId) {
  Author.deleteAuthor(authorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAuthor = function getAuthor (req, res, next, authorId) {
  Author.getAuthor(authorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBookStatistics = function getBookStatistics (req, res, next, authorId) {
  Author.getBookStatistics(authorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginAuthor = function loginAuthor (req, res, next, authorname, password) {
  Author.loginAuthor(authorname, password)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.logoutAuthor = function logoutAuthor (req, res, next) {
  Author.logoutAuthor()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAuthor = function updateAuthor (req, res, next, body) {
  Author.updateAuthor(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

