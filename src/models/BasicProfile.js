const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");

const basicProfileSchema = mongoose.Schema({
  userId: {
    type: ObjectId,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
    trim: true,
  },
  lifeStyle: {
    type: String,
    required: true,
    trim: true,
  },
  roommateOrHousemate: {
    type: String,
    required: true,
    trim: true,
  },
  bio: {
    type: String,
    required: true,
    trim: true,
  },
  currentCity: {
    type: String,
    required: true,
    trim: true,
  },
  newCity: {
    type: String,
    required: true,
    trim: true,
  },
  budget: {
    type: Number,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
  },
  houseMateGender: {
    type: String,
    required: true,
    trim: true,
  },
  moveInDay: {
    type: Date,
    required: true,
    trim: true,
  },
  numberInHome: {
    type: Number,
    required: true,
    trim: true,
  },
  preferredNeighborhoods: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      if (!validator.isEmail(value)) {
        throw new Error({ error: "Invalid Email address" });
      }
    },
  },
});

const BasicProfile = mongoose.model("BasicProfile", basicProfileSchema);

module.exports = BasicProfile;
