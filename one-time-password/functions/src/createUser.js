const createUser = (req, res) => {
  // req, res modeled like express API
  res.send(req.body);

  // firebase project
  // through service client they can manipulate data
  // add, edit, etc to data store
};

module.exports = createUser;
