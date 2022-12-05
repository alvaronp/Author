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
    var examples = {
    "bankAccount" : body.bankAccount,
    "password" : body.password,
    "books" : [],
    "authorname" : body.authorname,
    "name" : body.name,
    "id" : body.id,
    "email" : body.email,
    "statistics" : []
  };

  if (body.id > 3) {
    if(body.password.length >= 8){
      resolve(examples);
    }
    else{
      reject(JSON.stringify("La contraseña debe tener al menos 8 caracteres"));
    }
  } 
  else {
    reject(JSON.stringify("Ya existen autores con ese ID"));
  }
  });
}


/**
 * Delete author
 * This can only be done by the logged in author.
 *
 * authorId Integer The author's ID that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteAuthor = function(authorId) {
  return new Promise(function(resolve, reject) {
    var examples = [{
      "bankAccount" : "XXXX-XXX-1234",
      "password" : "12345678",
      "books" : [ {
        "bookId" : 1,
      }, {
        "bookId" : 2,
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
    }]
  },{
      "bankAccount" : "XXXX-XXX-3214",
      "password" : "12341209",
      "books" : [ {
        "bookId" : 1,
      }, {
        "bookId" : 2,
      } ],
      "authorname" : "arturopr",
      "name" : "Arturo Pérez Reverte",
      "id" : 2,
      "email" : "arturopr@email.com",
      "statistics" : [ {
        "unfinishedreads" : 542,
        "nreads" : 2451,
        "lastmonthrating" : 4.3,
        "bookId" : 1,
        "avgrating" : 4.4
      }, {
        "unfinishedreads" : 324,
        "nreads" : 1873,
        "lastmonthrating" : 4.8,
        "bookId" : 2,
        "avgrating" : 4.6
      }]
  },{
    "bankAccount" : "XXXX-XXX-8756",
    "password" : "98765432",
    "books" : [ {
      "bookId" : 1,
    }],
    "authorname" : "jkrowling",
    "name" : "J.K. Rowling",
    "id" : 3,
    "email" : "jkrowling@email.com",
    "statistics" : [ {
      "unfinishedreads" : 2314,
      "nreads" : 6789,
      "lastmonthrating" : 4.7,
      "bookId" : 1,
      "avgrating" : 4.6
    }]
  }];
  if (authorId < 4) {
    resolve([JSON.stringify("AUTOR "+ authorId +" ELIMINADO: \n"),examples[authorId-1]]);
  } else {
    reject(JSON.stringify("No existe autor con ID" + authorId));
  }
  });
}


/**
 * Get author info
 * Returns an author
 *
 * authorname Long The author name to return
 * returns Author
 **/
exports.getAuthor = function(authorId) {
  return new Promise(function(resolve, reject) {
    var examples = [{
      "bankAccount" : "XXXX-XXX-1234",
      "password" : "12345678",
      "books" : [ {
        "bookId" : 1,
      }, {
        "bookId" : 2,
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
    }]
  },{
      "bankAccount" : "XXXX-XXX-3214",
      "password" : "12341209",
      "books" : [ {
        "bookId" : 1,
      }, {
        "bookId" : 2,
      } ],
      "authorname" : "arturopr",
      "name" : "Arturo Pérez Reverte",
      "id" : 2,
      "email" : "arturopr@email.com",
      "statistics" : [ {
        "unfinishedreads" : 542,
        "nreads" : 2451,
        "lastmonthrating" : 4.3,
        "bookId" : 1,
        "avgrating" : 4.4
      }, {
        "unfinishedreads" : 324,
        "nreads" : 1873,
        "lastmonthrating" : 4.8,
        "bookId" : 2,
        "avgrating" : 4.6
      }]
  },{
    "bankAccount" : "XXXX-XXX-8756",
    "password" : "98765432",
    "books" : [ {
      "bookId" : 1,
    }],
    "authorname" : "jkrowling",
    "name" : "J.K. Rowling",
    "id" : 3,
    "email" : "jkrowling@email.com",
    "statistics" : [ {
      "unfinishedreads" : 2314,
      "nreads" : 6789,
      "lastmonthrating" : 4.7,
      "bookId" : 1,
      "avgrating" : 4.6
    }]
  }];
    if (authorId < 4) {
      resolve([JSON.stringify("AUTOR " + authorId + ":\n"), examples[authorId-1]]);
    } else {
      reject(JSON.stringify("No existe autor con ID "+ authorId));
    }
  });
}


/**
 * Get the statistics for an author's book
 *
 * bookId String Id of the book
 * returns Statistics
 **/
exports.getBookStatistics = function(authorId) {
  return new Promise(function(resolve, reject) {
    var examples = [{
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
    }]
  },{
      "statistics" : [ {
        "unfinishedreads" : 542,
        "nreads" : 2451,
        "lastmonthrating" : 4.3,
        "bookId" : 1,
        "avgrating" : 4.4
      }, {
        "unfinishedreads" : 324,
        "nreads" : 1873,
        "lastmonthrating" : 4.8,
        "bookId" : 2,
        "avgrating" : 4.6
      }]
  },{
    "statistics" : [ {
      "unfinishedreads" : 2314,
      "nreads" : 6789,
      "lastmonthrating" : 4.7,
      "bookId" : 1,
      "avgrating" : 4.6
    }]
  }];
    if (authorId < 4) {
      resolve([JSON.stringify("ESTADÍSTICAS DE LECTURA DE LIBROS DEL AUTOR " + authorId + "\n"), examples[authorId-1]]);
    } else {
      reject(JSON.stringify("No existe autor con ID "+ authorId));
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
    if (password.length > 7) {
      resolve(JSON.stringify("Sesión de autor iniciada: Bienvenid@ " + authorname));
    } else {
      reject(JSON.stringify("Contraseña incorrecta (PISTA:muy corta...)"));
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
    resolve(JSON.stringify("La sesión se ha cerrado"));
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
exports.updateAuthor = function(body) {
  return new Promise(function(resolve, reject) {
    if (body.id < 4) {
      resolve([JSON.stringify("AUTOR " + body.id + " ACTUALIZADO"), body]);
    } else {
      reject(JSON.stringify("No hay ningún autor con ese ID"));
    }
  });
}

