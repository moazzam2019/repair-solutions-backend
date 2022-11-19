const mongoose = require("mongoose");
const slugify = require("slugify");
// const validator = require('validator');

const phoneSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A Phone must have a name"],
      unique: true,
      trim: true,
      maxlength: [60, "A tour name must have less or equal then 40 characters"],
      minlength: [6, "A tour name must have more or equal then 10 characters"],
      // validate: [validator.isAlpha, 'Tour name must only contain characters']
    },

    price: {
      type: Number,
      required: [true, "A Phone must have a price"],
    },

    category: {
      type: String,
      required: [true, "A Phone must have a category"],
      enum: {
        values: ["Apple", "Oneplus", "Samsung", "Sony", "Nokia", "Huawei"],
        message:
          "Category is either: Apple, Oneplus, Samsung, Nokia, Huawei, Sony.",
      },
    },
    imageUrl: {
      type: String,
      required: [true, "A Phone must have an ImageUrl"],
    },
  }
  // {
  //   toJSON: { virtuals: true },
  //   toObject: { virtuals: true },
  // }
);
/*
phoneSchema.virtual("durationWeeks").get(function () {
  return this.duration / 7;
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
phoneSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// phoneSchema.pre('save', function(next) {
//   console.log('Will save document...');
//   next();
// });

// phoneSchema.post('save', function(doc, next) {
//   console.log(doc);
//   next();
// });

// QUERY MIDDLEWARE
// phoneSchema.pre('find', function(next) {
phoneSchema.pre(/^find/, function (next) {
  this.find({ secretTour: { $ne: true } });

  this.start = Date.now();
  next();
});

phoneSchema.post(/^find/, function (docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  next();
});

// AGGREGATION MIDDLEWARE
phoneSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });

  console.log(this.pipeline());
  next();
});
*/

const Phone = mongoose.model("Phone", phoneSchema);

module.exports = Phone;
