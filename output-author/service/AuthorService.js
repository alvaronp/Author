'use strict';


/**
 * Create author
 * Creates an author account to enter to Bookify app and publish books.
 *
 * body Author Created author object (optional)
 * returns Author
 **/
exports.createAuthor = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "bankAccount" : "XXXX-XXX-1234",
  "password" : "12345678",
  "books" : [ {
    "coverUrl" : "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Fire_%26_Blood_%282018%29_hardcover.jpg/220px-Fire_%26_Blood_%282018%29_hardcover.jpg",
    "audiobook" : {
      "duration" : 247,
      "narrator" : "John Doe",
      "link" : "https://www.ivoox.com/fuego-sangre-1_md_32713232_1.mp3",
      "status" : "available"
    },
    "author" : "George R.R. Martin",
    "ratings" : [ {
      "rating" : {
        "rate" : 4.7,
        "comment" : "I loved it!",
        "username" : "John"
      }
    }, {
      "rating" : {
        "rate" : 4.7,
        "comment" : "I loved it!",
        "username" : "John"
      }
    } ],
    "name" : "Fire & Blood",
    "genre" : "Fantasy",
    "bookId" : 1,
    "status" : "available"
  }, {
    "coverUrl" : "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Fire_%26_Blood_%282018%29_hardcover.jpg/220px-Fire_%26_Blood_%282018%29_hardcover.jpg",
    "audiobook" : {
      "duration" : 247,
      "narrator" : "John Doe",
      "link" : "https://www.ivoox.com/fuego-sangre-1_md_32713232_1.mp3",
      "status" : "available"
    },
    "author" : "George R.R. Martin",
    "ratings" : [ {
      "rating" : {
        "rate" : 4.7,
        "comment" : "I loved it!",
        "username" : "John"
      }
    }, {
      "rating" : {
        "rate" : 4.7,
        "comment" : "I loved it!",
        "username" : "John"
      }
    } ],
    "name" : "Fire & Blood",
    "genre" : "Fantasy",
    "bookId" : 1,
    "status" : "available"
  } ],
  "authorname" : "grrmart",
  "name" : "George R.R. Martin",
  "id" : 1,
  "email" : "georgerrmartin@email.com",
  "statistics" : [ {
    "unfinishedreads" : 450,
    "nreads" : 2456,
    "lastmonthrating" : 4.7,
    "bookId" : 1,
    "avgrating" : 4.6
  }, {
    "unfinishedreads" : 450,
    "nreads" : 2456,
    "lastmonthrating" : 4.7,
    "bookId" : 1,
    "avgrating" : 4.6
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create author
 * Creates an author account to enter to Bookify app and publish books.
 *
 * body Author Created author object (optional)
 * returns Author
 **/
exports.createAuthor = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "bankAccount" : "XXXX-XXX-1234",
  "password" : "12345678",
  "books" : [ {
    "coverUrl" : "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Fire_%26_Blood_%282018%29_hardcover.jpg/220px-Fire_%26_Blood_%282018%29_hardcover.jpg",
    "audiobook" : {
      "duration" : 247,
      "narrator" : "John Doe",
      "link" : "https://www.ivoox.com/fuego-sangre-1_md_32713232_1.mp3",
      "status" : "available"
    },
    "author" : "George R.R. Martin",
    "ratings" : [ {
      "rating" : {
        "rate" : 4.7,
        "comment" : "I loved it!",
        "username" : "John"
      }
    }, {
      "rating" : {
        "rate" : 4.7,
        "comment" : "I loved it!",
        "username" : "John"
      }
    } ],
    "name" : "Fire & Blood",
    "genre" : "Fantasy",
    "bookId" : 1,
    "status" : "available"
  }, {
    "coverUrl" : "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Fire_%26_Blood_%282018%29_hardcover.jpg/220px-Fire_%26_Blood_%282018%29_hardcover.jpg",
    "audiobook" : {
      "duration" : 247,
      "narrator" : "John Doe",
      "link" : "https://www.ivoox.com/fuego-sangre-1_md_32713232_1.mp3",
      "status" : "available"
    },
    "author" : "George R.R. Martin",
    "ratings" : [ {
      "rating" : {
        "rate" : 4.7,
        "comment" : "I loved it!",
        "username" : "John"
      }
    }, {
      "rating" : {
        "rate" : 4.7,
        "comment" : "I loved it!",
        "username" : "John"
      }
    } ],
    "name" : "Fire & Blood",
    "genre" : "Fantasy",
    "bookId" : 1,
    "status" : "available"
  } ],
  "authorname" : "grrmart",
  "name" : "George R.R. Martin",
  "id" : 1,
  "email" : "georgerrmartin@email.com",
  "statistics" : [ {
    "unfinishedreads" : 450,
    "nreads" : 2456,
    "lastmonthrating" : 4.7,
    "bookId" : 1,
    "avgrating" : 4.6
  }, {
    "unfinishedreads" : 450,
    "nreads" : 2456,
    "lastmonthrating" : 4.7,
    "bookId" : 1,
    "avgrating" : 4.6
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete author
 * This can only be done by the logged in author.
 *
 * authorname String The name that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteAuthor = function(authorname) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get author info
 * Returns an author
 *
 * authorname Long The author name to return
 * returns Author
 **/
exports.getAuthor = function(authorname) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "bankAccount" : "XXXX-XXX-1234",
  "password" : "12345678",
  "books" : [ {
    "coverUrl" : "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Fire_%26_Blood_%282018%29_hardcover.jpg/220px-Fire_%26_Blood_%282018%29_hardcover.jpg",
    "audiobook" : {
      "duration" : 247,
      "narrator" : "John Doe",
      "link" : "https://www.ivoox.com/fuego-sangre-1_md_32713232_1.mp3",
      "status" : "available"
    },
    "author" : "George R.R. Martin",
    "ratings" : [ {
      "rating" : {
        "rate" : 4.7,
        "comment" : "I loved it!",
        "username" : "John"
      }
    }, {
      "rating" : {
        "rate" : 4.7,
        "comment" : "I loved it!",
        "username" : "John"
      }
    } ],
    "name" : "Fire & Blood",
    "genre" : "Fantasy",
    "bookId" : 1,
    "status" : "available"
  }, {
    "coverUrl" : "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Fire_%26_Blood_%282018%29_hardcover.jpg/220px-Fire_%26_Blood_%282018%29_hardcover.jpg",
    "audiobook" : {
      "duration" : 247,
      "narrator" : "John Doe",
      "link" : "https://www.ivoox.com/fuego-sangre-1_md_32713232_1.mp3",
      "status" : "available"
    },
    "author" : "George R.R. Martin",
    "ratings" : [ {
      "rating" : {
        "rate" : 4.7,
        "comment" : "I loved it!",
        "username" : "John"
      }
    }, {
      "rating" : {
        "rate" : 4.7,
        "comment" : "I loved it!",
        "username" : "John"
      }
    } ],
    "name" : "Fire & Blood",
    "genre" : "Fantasy",
    "bookId" : 1,
    "status" : "available"
  } ],
  "authorname" : "grrmart",
  "name" : "George R.R. Martin",
  "id" : 1,
  "email" : "georgerrmartin@email.com",
  "statistics" : [ {
    "unfinishedreads" : 450,
    "nreads" : 2456,
    "lastmonthrating" : 4.7,
    "bookId" : 1,
    "avgrating" : 4.6
  }, {
    "unfinishedreads" : 450,
    "nreads" : 2456,
    "lastmonthrating" : 4.7,
    "bookId" : 1,
    "avgrating" : 4.6
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the statistics for an author's book
 *
 * bookId String Id of the book
 * returns Statistics
 **/
exports.getBookStatistics = function(bookId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "unfinishedreads" : 450,
  "nreads" : 2456,
  "lastmonthrating" : 4.7,
  "bookId" : 1,
  "avgrating" : 4.6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logs author into Bookify app
 *
 * authorname String The author name for login (optional)
 * password String The password for login in clear text (optional)
 * returns String
 **/
exports.loginAuthor = function(authorname,password) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logs out current logged in author session
 *
 * no response value expected for this operation
 **/
exports.logoutAuthor = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update author
 * This can only be done by the logged in author.
 *
 * body Author Update an existent author in the store (optional)
 * authorname String author's username that need to be update
 * no response value expected for this operation
 **/
exports.updateUser = function(body,authorname) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update author
 * This can only be done by the logged in author.
 *
 * body Author Update an existent author in the store (optional)
 * authorname String author's username that need to be update
 * no response value expected for this operation
 **/
exports.updateUser = function(body,authorname) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

