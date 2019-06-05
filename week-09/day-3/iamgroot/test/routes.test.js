const test = require('tape');
const request = require('supertest');
const app = require('../routes');

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
        "message" : 'Give me valid data!'
      };
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});