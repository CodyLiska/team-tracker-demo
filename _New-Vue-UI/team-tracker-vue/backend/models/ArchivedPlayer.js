const mongoose = require("mongoose");
const playerSchema = require("./Player").schema; // Reuse the Player schema

const ArchivedPlayer = mongoose.model("ArchivedPlayer", playerSchema);

module.exports = ArchivedPlayer;
