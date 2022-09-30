const config = {
  fileSystem: {
    path: "./DB",
  },
  mongodb: {
    cnxStr: "mongodb+srv://milo:milo@cluster0.3s9n9pv.mongodb.net/test",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    },
  },
  firebase: {},
};

module.exports = config;
