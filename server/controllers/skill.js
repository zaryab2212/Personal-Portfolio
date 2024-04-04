const { Project } = require("../models/projects");
const { Skill } = require("../models/skill");
const { cloudinaryUpload } = require("../utils/cloudinaryUpload");

exports.addSkill = async (req, res, next) => {
  try {
    // const imgs = req.files;

    if (!req.isAdmin) {
      return res.status(401).json({
        message: "You are not an admin. Please login with admin account first",
      });
    }

    const result = await cloudinaryUpload(req.files);

    const mskill = await Skill.create({ ...req.body, images: result[0] });
    await mskill.save();

    const skill = await Skill.find();

    res.status(201).json(skill);
  } catch (error) {
    res.status(400).json({
      error,
      message: "new skill is not added some internal error occured",
    });
  }
};

exports.getSkills = async (req, res, next) => {
  try {
    const skill = await Skill.find();

    res.status(200).json({
      success: true,
      message: "All skills fetched successfully",
      skill,
    });
  } catch (error) {
    res.status(400).json({
      error,
      message: "Error orrurd gettin all projects",
      success: false,
    });
  }
};

exports.removeSkill = async (req, res, next) => {
  try {
    // const imgs = req.files;

    if (!req.isAdmin) {
      return res.status(401).json({
        message: "You are not an admin. Please login with admin account first",
      });
    }

    const skill = await Skill.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "skill removed Succesfully", skill });
  } catch (error) {
    res
      .status(400)
      .json({ error, message: "Error orrurd deleting skill", success: false });
  }
};

exports.updateSkill = async (req, res, next) => {
  try {
    // const imgs = req.files;

    if (!req.isAdmin) {
      return res.status(401).json({
        message: "You are not an admin. Please login with admin account first",
      });
    }
    const result = await cloudinaryUpload(req.files);

    const skill = await Skill.findByIdAndUpdate(
      req.body.id,
      { ...req.body, images: result[0] },
      {
        new: true,
      }
    );
    res
      .status(200)
      .json({ success: true, message: "skill edied Succesfully", skill });
  } catch (error) {
    res.status(400).json({
      error,
      message: "An internal server error Updating editing skill",
      success: false,
    });
  }
};
