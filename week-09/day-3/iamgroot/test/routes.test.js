const test = require('tape');
const request = require('supertest');
const app = require('../routes');
const {
  connection,
  closeConnection,
  makeSQLQuery
} = require('../mysql');

test('groot endpoint with message', (t) => {
  const message = 'testing';
  request(app)
    .get(`/groot/?message=${message}`)
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, res) => {
      const expected = {
        "received": message,
        "translated": "I am Groot!"
      };
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});

test('groot endpoint without message', (t) => {
  request(app)
    .get(`/groot/`)
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, res) => {
      const expected = {
        "error": "I am Groot!"
      };
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});

test('yondu endpoint with valid data', (t) => {
  request(app)
    .get(`/yondu/?distance=100.0&time=10.0`)
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, res) => {
      const expected = {
        "distance": 100,
        "time": 10,
        "speed": 10
      };
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});

test('yondu endpoint with time zero', (t) => {
  request(app)
    .get(`/yondu/?distance=100.0&time=0`)
    .expect('Content-type', /json/)
    .expect(400)
    .end((err, res) => {
      const expected = {
        "error": "Give me valid data!"
      };
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});

test('yondu endpoint with no data', (t) => {
  request(app)
    .get(`/yondu/`)
    .expect('Content-type', /json/)
    .expect(400)
    .end((err, res) => {
      const expected = {
        "error": "Give me data!"
      };
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});

test('rocket endpoint get initial ship', (t) => {
  request(app)
    .get(`/rocket/`)
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, res) => {
      const expected = {
        "caliber25": 0,
        "caliber30": 0,
        "caliber50": 0,
        "shipstatus": "empty",
        "ready": false
      };
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});

test('rocket endpoint add 5000 .50 caliber', (t) => {
  request(app)
    .get(`/rocket/fill/?caliber=.50&amount=5000`)
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, res) => {
      const expected = {
        "caliber25": 0,
        "caliber30": 0,
        "caliber50": 5000,
        "shipstatus": "40%",
        "ready": false
      };
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});

test('rocket endpoint add 5000 .30 caliber', (t) => {
  request(app)
    .get(`/rocket/fill/?caliber=.30&amount=5000`)
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, res) => {
      const expected = {
        "caliber25": 0,
        "caliber30": 5000,
        "caliber50": 5000,
        "shipstatus": "80%",
        "ready": false
      };
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});

test('rocket endpoint add 2500 .25 caliber make it full', (t) => {
  request(app)
    .get(`/rocket/fill/?caliber=.25&amount=2500`)
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, res) => {
      const expected = {
        "caliber25": 2500,
        "caliber30": 5000,
        "caliber50": 5000,
        "shipstatus": "full",
        "ready": true
      };
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});

test('rocket endpoint add 2500 .25 caliber make it overload', (t) => {
  request(app)
    .get(`/rocket/fill/?caliber=.25&amount=2500`)
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, res) => {
      const expected = {
        "caliber25": 5000,
        "caliber30": 5000,
        "caliber50": 5000,
        "shipstatus": "overloaded",
        "ready": false
      };
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});

test('rocket endpoint no input data', (t) => {
  request(app)
    .get(`/rocket/fill/`)
    .expect('Content-type', /json/)
    .expect(400)
    .end((err, res) => {
      const expected = {
        "message": 'Give me valid data!'
      };
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});

test('drax endpoint get all calories data', (t) => {
  request(app)
    .get(`/drax`)
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, res) => {
      const expected = [{
        "name": "lecso",
        "amount": 2,
        "calorie": 6000,
        "id": 1
      }];
      const actual = res.body;

      t.error(err, 'No error :)');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});

test('drax endpoint post new calorie data', (t) => {
  request(app)
    .post(`/drax`)
    .send({
      name: 'rantotta',
      amount: 1,
      calorie: 2000
    })
    .expect('Content-type', /json/)
    .expect(201)
    .end((err, res) => {
      const expected = [{
        "name": "rantotta",
        "amount": 1,
        "calorie": 2000,
        "id": 2
      }];
      const actual = res.body;

      t.error(err, 'No error :)');
      t.same(actual, expected, 'Received expected answer');
      makeSQLQuery('DROP TABLE DraxCalorie;')
        .then(makeSQLQuery('CREATE TABLE DraxCalorie(name CHAR(255), amount INT(255), calorie INT(255), id INT(255) AUTO_INCREMENT PRIMARY KEY NOT NULL);'))
        .then(makeSQLQuery('INSERT INTO DraxCalorie (name, amount, calorie) VALUES ("lecso", 2, 6000);'))
        .catch(error => console.log(error));
      t.end();
    });
});

test('drax endpoint delete calorie data', (t) => {
  request(app)
    .delete(`/drax`)
    .send({
      id: 1
    })
    .expect(200)
    .expect('Content-type', /json/)
    .end((err, res) => {
      const expected = [{
        name: 'lecso',
        amount: 2,
        calorie: 6000,
        id: 1
      }];
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');

      makeSQLQuery('DROP TABLE DraxCalorie;')
        .then(makeSQLQuery('CREATE TABLE DraxCalorie(name CHAR(255), amount INT(255), calorie INT(255), id INT(255) AUTO_INCREMENT PRIMARY KEY NOT NULL);'))
        .then(makeSQLQuery('INSERT INTO DraxCalorie (name, amount, calorie) VALUES ("lecso", 2, 6000);'))
        .catch(error => console.log(error));
      t.end();
    });
});

test('drax endpoint update calorie data amount', (t) => {
  request(app)
    .patch(`/drax`)
    .send({
      id: 1,
      amount: 3
    })
    .expect(201)
    .expect('Content-type', /json/)
    .end((err, res) => {
      const expected = [{
        name: 'lecso',
        amount: 3,
        calorie: 6000,
        id: 1
      }];
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');

      makeSQLQuery('DROP TABLE DraxCalorie;')
        .then(makeSQLQuery('CREATE TABLE DraxCalorie(name CHAR(255), amount INT(255), calorie INT(255), id INT(255) AUTO_INCREMENT PRIMARY KEY NOT NULL);'))
        .then(makeSQLQuery('INSERT INTO DraxCalorie (name, amount, calorie) VALUES ("lecso", 2, 6000);'))
        .catch(error => console.log(error));
      t.end();
    });
});

test('awesome endpoint get awesome track list', (t) => {
  request(app)
    .get(`/awesome`)
    .expect(200)
    .expect('Content-type', /json/)
    .end((err, res) => {
      const expected = [{
          "id": 1,
          "author": "Blue Swede",
          "title": "Hooked on a Feeling",
          "genre": "pop",
          "year": 1968,
          "rating": 3
        },
        {
          "id": 2,
          "author": "Raspberries",
          "title": "Go All the Way",
          "genre": "pop",
          "year": 1972,
          "rating": 1
        },
        {
          "id": 3,
          "author": "Norman Greenbaum",
          "title": "Spirit in the Sky",
          "genre": "rock",
          "year": 1969,
          "rating": 5
        },
        {
          "id": 4,
          "author": "David Bowie",
          "title": "Moonage Daydream",
          "genre": "rock",
          "year": 1971,
          "rating": 2
        },
        {
          "id": 5,
          "author": "The Jackson 5",
          "title": "I Want You Back",
          "genre": "pop",
          "year": 1969,
          "rating": 4
        }
      ];
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});

test('awesome endpoint post new awesome track', (t) => {
  request(app)
    .post('/awesome')
    .send({
      'author': 'Rupert Holmes',
      'title': 'Escape (The Piña Colada Song)',
      'genre': 'pop',
      'year': 1979,
      'rating': 4
    })
    .expect(201)
    .expect('Content-type', /json/)
    .end((err, res) => {
      const expected = [{
        "id": 6,
        "author": "Rupert Holmes",
        "title": "Escape (The Piña Colada Song)",
        "genre": "pop",
        "year": 1979,
        "rating": 4
      }];
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      makeSQLQuery('DROP TABLE AwesomeMix;')
        .then(makeSQLQuery('CREATE TABLE AwesomeMix(id INT(2) NOT NULL PRIMARY KEY AUTO_INCREMENT, author CHAR(255), title CHAR(255), genre CHAR(255), year INT(4), rating INT(1));'))
        .then(makeSQLQuery('INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("Blue Swede", "Hooked on a Feeling", "pop", 1968, 3);'))
        .then(makeSQLQuery('INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("Raspberries", "Go All the Way", "pop", 1972, 1);'))
        .then(makeSQLQuery('INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("Norman Greenbaum", "Spirit in the Sky", "rock", 1969, 5);'))
        .then(makeSQLQuery('INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("David Bowie", "Moonage Daydream", "rock", 1971, 2);'))
        .then(makeSQLQuery('INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("The Jackson 5", "I Want You Back", "pop", 1969, 4);'))
        .catch(error => console.log(error));
      t.end();
    });
});

test('awesome endpoint delete an awesome track', (t) => {
  request(app)
    .delete('/awesome')
    .send({
      'id': 4
    })
    .expect(200)
    .expect('Content-type', /json/)
    .end((err, res) => {
      const expected = [{
        "id": 4,
        "author": "David Bowie",
        "title": "Moonage Daydream",
        "genre": "rock",
        "year": 1971,
        "rating": 2
      }];
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      makeSQLQuery('DROP TABLE AwesomeMix;')
        .then(makeSQLQuery('CREATE TABLE AwesomeMix(id INT(2) NOT NULL PRIMARY KEY AUTO_INCREMENT, author CHAR(255), title CHAR(255), genre CHAR(255), year INT(4), rating INT(1));'))
        .then(makeSQLQuery('INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("Blue Swede", "Hooked on a Feeling", "pop", 1968, 3);'))
        .then(makeSQLQuery('INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("Raspberries", "Go All the Way", "pop", 1972, 1);'))
        .then(makeSQLQuery('INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("Norman Greenbaum", "Spirit in the Sky", "rock", 1969, 5);'))
        .then(makeSQLQuery('INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("David Bowie", "Moonage Daydream", "rock", 1971, 2);'))
        .then(makeSQLQuery('INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("The Jackson 5", "I Want You Back", "pop", 1969, 4);'))
        .catch(error => console.log(error));
      t.end();
    });
});

test('awesome endpoint update an awesome track', (t) => {
  request(app)
    .patch('/awesome')
    .send({
      'id': 4,
      'rating': 1
    })
    .expect(201)
    .expect('Content-type', /json/)
    .end((err, res) => {
      const expected = [{
        "id": 4,
        "author": "David Bowie",
        "title": "Moonage Daydream",
        "genre": "rock",
        "year": 1971,
        "rating": 1
      }];
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      makeSQLQuery('DROP TABLE AwesomeMix;')
        .then(makeSQLQuery('CREATE TABLE AwesomeMix(id INT(2) NOT NULL PRIMARY KEY AUTO_INCREMENT, author CHAR(255), title CHAR(255), genre CHAR(255), year INT(4), rating INT(1));'))
        .then(makeSQLQuery('INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("Blue Swede", "Hooked on a Feeling", "pop", 1968, 3);'))
        .then(makeSQLQuery('INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("Raspberries", "Go All the Way", "pop", 1972, 1);'))
        .then(makeSQLQuery('INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("Norman Greenbaum", "Spirit in the Sky", "rock", 1969, 5);'))
        .then(makeSQLQuery('INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("David Bowie", "Moonage Daydream", "rock", 1971, 2);'))
        .then(makeSQLQuery('INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("The Jackson 5", "I Want You Back", "pop", 1969, 4);'))
        .catch(error => console.log(error));
      t.end();
    });
});

test('awesome endpoint get the favorite 3 tracks', (t) => {
  request(app)
    .get('/awesome/fav')
    .send({
      'amount': 3
    })
    .expect(200)
    .expect('Content-type', /json/)
    .end((err, res) => {
      const expected = [{
          "id": 3,
          "author": "Norman Greenbaum",
          "title": "Spirit in the Sky",
          "genre": "rock",
          "year": 1969,
          "rating": 5
        },
        {
          "id": 5,
          "author": "The Jackson 5",
          "title": "I Want You Back",
          "genre": "pop",
          "year": 1969,
          "rating": 4
        },
        {
          "id": 1,
          "author": "Blue Swede",
          "title": "Hooked on a Feeling",
          "genre": "pop",
          "year": 1968,
          "rating": 3
        }
      ];
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      makeSQLQuery('DROP TABLE AwesomeMix;')
        .then(makeSQLQuery('CREATE TABLE AwesomeMix(id INT(2) NOT NULL PRIMARY KEY AUTO_INCREMENT, author CHAR(255), title CHAR(255), genre CHAR(255), year INT(4), rating INT(1));'))
        .then(makeSQLQuery('INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("Blue Swede", "Hooked on a Feeling", "pop", 1968, 3);'))
        .then(makeSQLQuery('INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("Raspberries", "Go All the Way", "pop", 1972, 1);'))
        .then(makeSQLQuery('INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("Norman Greenbaum", "Spirit in the Sky", "rock", 1969, 5);'))
        .then(makeSQLQuery('INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("David Bowie", "Moonage Daydream", "rock", 1971, 2);'))
        .then(makeSQLQuery('INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("The Jackson 5", "I Want You Back", "pop", 1969, 4);'))
        .catch(error => console.log(error));
      t.end();
    });
});

test('awesome endpoint get the favorite 5 tracks', (t) => {
  request(app)
    .get('/awesome/fav')
    .send({
      'amount': 5
    })
    .expect(200)
    .expect('Content-type', /json/)
    .end((err, res) => {
      const expected = [{
          "id": 3,
          "author": "Norman Greenbaum",
          "title": "Spirit in the Sky",
          "genre": "rock",
          "year": 1969,
          "rating": 5
        },
        {
          "id": 5,
          "author": "The Jackson 5",
          "title": "I Want You Back",
          "genre": "pop",
          "year": 1969,
          "rating": 4
        },
        {
          "id": 1,
          "author": "Blue Swede",
          "title": "Hooked on a Feeling",
          "genre": "pop",
          "year": 1968,
          "rating": 3
        },
        {
          "id": 4,
          "author": "David Bowie",
          "title": "Moonage Daydream",
          "genre": "rock",
          "year": 1971,
          "rating": 2
        },
        {
          "id": 2,
          "author": "Raspberries",
          "title": "Go All the Way",
          "genre": "pop",
          "year": 1972,
          "rating": 1
        }
      ];
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      makeSQLQuery('DROP TABLE AwesomeMix;')
        .then(makeSQLQuery('CREATE TABLE AwesomeMix(id INT(2) NOT NULL PRIMARY KEY AUTO_INCREMENT, author CHAR(255), title CHAR(255), genre CHAR(255), year INT(4), rating INT(1));'))
        .then(makeSQLQuery('INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("Blue Swede", "Hooked on a Feeling", "pop", 1968, 3);'))
        .then(makeSQLQuery('INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("Raspberries", "Go All the Way", "pop", 1972, 1);'))
        .then(makeSQLQuery('INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("Norman Greenbaum", "Spirit in the Sky", "rock", 1969, 5);'))
        .then(makeSQLQuery('INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("David Bowie", "Moonage Daydream", "rock", 1971, 2);'))
        .then(makeSQLQuery('INSERT INTO AwesomeMix (author, title, genre, year, rating) VALUES ("The Jackson 5", "I Want You Back", "pop", 1969, 4);'))
        .catch(error => console.log(error));
      closeConnection();
      t.end();
    });
});
