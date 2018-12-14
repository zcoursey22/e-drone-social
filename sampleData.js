const users = [
  {
    id: 0,
    email: 'user0@email.com',
    username: 'user0',
    password: 'pass0',
    location: {
      lon: 61,
      lat: 53
    },
    droneLocation: {
      lon: 35,
      lat: 2
    }
  },
  {
    id: 1,
    email: 'user1@email.com',
    username: 'user1',
    password: 'pass1',
    location: {
      lon: 37,
      lat: 10
    },
    droneLocation: {
      lon: 23,
      lat: -76
    }
  },
  {
    id: 2,
    email: 'user2@email.com',
    username: 'user2',
    password: 'pass2',
    location: {
      lon: 10,
      lat: 42
    },
    droneLocation: {
      lon: -57,
      lat: 65
    }
  }
]

module.exports.users = users;
