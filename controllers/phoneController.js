const Phone = require("../models/phoneModel");
// const APIFeatures = require("../utils/apiFeatures");

exports.getAllPhones = async (req, res) => {
  try {
    // EXECUTE QUERY
    // const features = new APIFeatures(Phone.find(), req.query)
    //   .filter()
    //   .sort()
    //   .limitFields()
    //   .paginate();
    // const phones = await features.query;

    const phones = await Phone.find();

    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: phones.length,
      data: {
        phones,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getPhone = async (req, res) => {
  try {
    const phone = await Phone.findById(req.params.id);
    // Phone.findOne({ _id: req.params.id })

    res.status(200).json({
      status: "success",
      data: {
        phone,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createPhone = async (req, res) => {
  try {
    const newPhone = await Phone.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        phone: newPhone,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updatePhone = async (req, res) => {
  try {
    const phone = await Phone.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        phone,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deletePhone = async (req, res) => {
  try {
    await Phone.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
