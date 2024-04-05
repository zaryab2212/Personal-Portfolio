const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dvv4ffhvi",
  api_key: "467479789366527",
  api_secret: "omveynTqndXu9lAWONOuSfthJU8",
  // cloud_name: process.env.CLOU_NAME,
  // api_key: process.env.API_KEY,
  // api_secret: process.env.API_SEC,
});

exports.cloudinaryUpload = async (files) => {
  const finalRes = [];

  for (let file of files) {
    const base64 = file.buffer.toString("base64");
    try {
      const res = await cloudinary.uploader.upload(
        `data:${file.mimetype};base64,${base64}`,
        {
          resource_type: "auto",
        }
      );
      finalRes.push(res.url);
    } catch (error) {
      return res
        .status(401)
        .json({ message: "Unable to Upload your image. Please try again" });
    }
  }

  return finalRes;
};
