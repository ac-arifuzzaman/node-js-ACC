const express = require("express");
const toolsControler = require("../../controllers/tools.controllers");
const limiter = require("../../middlewers/limiter");
const viewCount = require("../../middlewers/viewCount");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("Tools found with di");
// });

// router.post("/", (req, res) => {
//   res.send("Tool added");
// });

router
  .route("/")
  /**
   * @api {post} /tools save a tool
   * @apiDescription get all the tools
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization User's access token
   *
   * @apiParam {Nunber{`1-}} [page=1] list page
   * @apiParam {Number{1-100}} [limit=10] Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401) Unauthorized Only authenticated users can access the data
   * @apiError (Forbidden 403) Forbidden       Only admins can access the data
   */
  .get(toolsControler.getAllTools)

  /**
   * @api {post} /tools save a tool
   * @apiDescription get all the tools
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization User's access token
   *
   * @apiParam {Nunber{`1-}} [page=1] list page
   * @apiParam {Number{1-100}} [limit=10] Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401) Unauthorized Only authenticated users can access the data
   * @apiError (Forbidden 403) Forbidden       Only admins can access the data
   */
  .post(toolsControler.addATool);

  // here are we use router level middlewere
router.route("/:id").get(viewCount, limiter, toolsControler.getToolDetails);

module.exports = router;
