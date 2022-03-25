const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://sample-project:sample-project@sample-project.crjc5.mongodb.net/my-data?retryWrites=true&w=majority");
}