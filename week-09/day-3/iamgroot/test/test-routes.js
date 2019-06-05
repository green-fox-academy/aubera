
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
        "error" : "Give me valid data!"
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
        "error" : "Give me data!"
        };
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});