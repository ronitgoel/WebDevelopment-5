const mongoose = require('mongoose');
const conn = mongoose.createConnection(process.env.MONGODB_URI1, { useNewUrlParser: true, useUnifiedTopology: true });
export default conn;