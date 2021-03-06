const conn = require('../config/db')

module.exports = {
  getAll: (query) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM users', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  getUserById: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM users WHERE ?', [id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  getEmail: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM users WHERE email =?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  register: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO users SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  login: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM users WHERE email =?', [data.email], (err, result) => {
        if (!err && result.length > 0) {
          console.log("ok")
          resolve(result)
        } else {
          err = {
            status: 404,
            errMsg: 'Your Email or Password Incorrect.'
          }
          reject(err)
        }
      })
    })
  },
  deleteUsers: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM users WHERE ?', [id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  }

}
