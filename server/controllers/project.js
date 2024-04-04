const { Project } = require("../models/projects");
const { cloudinaryUpload } = require("../utils/cloudinaryUpload");

exports.addProject = async (req, res, next) => {
  try {
    // const imgs = req.files;

    if (!req.isAdmin) {
      return res.status(401).json({
        message: "You are not an admin. Please login with admin account first",
      });
    }

    const parseTech = JSON.parse(req.body.technologies);
    const parseFeature = JSON.parse(req.body.feature);
    if (req.files && req.files.length > 0) {
      const result = await cloudinaryUpload(req.files);
      const project = await Project.create({
        ...req.body,
        technologies: parseTech,
        feature: parseFeature,
        images: result,
      });
      await project.save();

      res.status(201).json(project);
    } else {
      const project = await Project.create({
        ...req.body,
        technologies: parseTech,
        feature: parseFeature,
        images: [],
      });
      await project.save();

      res.status(201).json(project);
    }
  } catch (error) {
    res
      .status(400)
      .json({ error, message: "Internal Server Error. Please try again" });
  }
};

exports.removeProject = async (req, res, next) => {
  try {
    // const imgs = req.files;

    if (!req.isAdmin) {
      return res.status(401).json({
        message: "You are not an admin. Please login with admin account first",
      });
    }

    const project = await Project.findByIdAndDelete(req.params.id);

    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ error, message: "Error orrurd deleting images" });
  }
};
exports.getProjects = async (req, res, next) => {
  try {
    const project = await Project.find();

    res.status(200).json(project);
  } catch (error) {
    res
      .status(400)
      .json({ error, message: "Error orrurd gettin all projects" });
  }
};

exports.UpdateProject = async (req, res, next) => {
  try {
    // const imgs = req.files;
    const parseTech = JSON.parse(req.body.technologies);
    const parseFeature = JSON.parse(req.body.feature);
    const prevImg = await Project.findById(req.params.id);
    if (!req.isAdmin) {
      return res.status(401).json({
        message: "You are not an admin. Please login with admin account first",
      });
    }
    if (req.files && req.files.length > 0) {
      const result = await cloudinaryUpload(req.files);
      const project = await Project.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
          technologies: parseTech,
          feature: parseFeature,
          images: result,
        },
        { new: true }
      );
      res.status(200).json(project);
    } else {
      const project = await Project.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
          technologies: parseTech,
          feature: parseFeature,
          images: prevImg.images,
        },
        { new: true }
      );
      res.status(200).json(project);
    }
  } catch (error) {
    res.status(400).json({
      error,
      message: "An internal Server Error, Project not Updated ",
    });
  }
};
