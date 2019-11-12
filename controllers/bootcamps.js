const Bootcamp = require("../models/Bootcamp");
/*
 *@desc  Get all bootcamps
 *@route GET /api/v1/bootcamps
 *@access    public
 */
exports.getBootcamps = async (req, res, next) => {
  const bootcamps = await Bootcamp.find();
  try {
    return res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (error) {
    return res.status(400).json({ success: false });
  }
};

/*
 *@desc  Get single bootcamp
 *@route GET /api/v1/bootcamps/:id
 *@access    public
 */
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    return res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    return res.status(400).json({ success: false });
  }
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamp of id ${req.params.id}` });
};

/*
 *@desc  Create new bootcamp
 *@route POST /api/v1/bootcamps/
 *@access    private
 */
exports.createBootcamp = async (req, res, next) => {
  try {
    const data = await Bootcamp.create(req.body);
    res.status(201).send({
      success: true,
      data
    });
  } catch (error) {
    res.status(400).json({ success: false });
    console.log(error);
  }
};

/*
 *@desc  Update new bootcamp
 *@route PUT /api/v1/bootcamps/:id
 *@access    private
 */
exports.updateBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!bootcamp) {
    return res.status(400).json({ success: false });
  }
  return res.status(200).json({ success: true, data: bootcamp });
};

/*
 *@desc  Delete new bootcamp
 *@route DELETE /api/v1/bootcamps/:id
 *@access    private
 */
exports.deleteBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
  if (!bootcamp) {
    return res.status(400).json({ success: false });
  }
  return res.status(200).json({ success: true, data: bootcamp });
};
