const express = require("express");
const router = express.Router();
const screenCtrl = require("../controller/screenCtrl");


router.get("/getled", screenCtrl.selled);

router.get("/getinfo", screenCtrl.selinfo);

router.get("/getac", screenCtrl.selac);

router.get("/getfengshan", screenCtrl.selfengshan);

router.get("/getcsp", screenCtrl.selcsp);

router.get("/getfsp", screenCtrl.selfsp);

router.get("/getcalarm", screenCtrl.selcalarm);

router.get("/getcamera", screenCtrl.selcamera);

router.get("/getcurtain", screenCtrl.selcurtain);

router.get("/getwindow", screenCtrl.selwindow);

router.get("/getdoor", screenCtrl.seldoor);

router.put("/alisetled", screenCtrl.alisetLED);

module.exports = router;