const exp = require('express')
const router = exp.Router();
const userCtrl = require("../controller/userCtrl")
const acCtrl = require("../controller/acCtrl")
const fengshanCtrl = require("../controller/fengshanCtrl")
const ledCtrl = require("../controller/ledCtrl")
const tempCtrl = require("../controller/tempCtrl")
const humCtrl = require("../controller/humCtrl")
const eqCtrl = require("../controller/eqCtrl");
const fspCtrl = require('../controller/fspCtrl');
const cspCtrl = require('../controller/cspCtrl');
const doorCtrl = require('../controller/doorCtrl');
const calarmCtrl = require('../controller/calarmCtrl');
const cameraCtrl = require('../controller/cameraCtrl');
const curtainCtrl = require('../controller/curtainCtrl');
const windowCtrl = require('../controller/windowCtrl');



router.put('/led/:id/:status', ledCtrl.led)
router.put('/ledon', ledCtrl.ledon)
router.put('/ledoff', ledCtrl.ledoff)
router.put('/temp/:id/:values', tempCtrl.temp)
router.put('/hum/:id/:values', humCtrl.hum)

router.put('/fan/:id/:status', fengshanCtrl.fan)
router.put('/fan/off', fengshanCtrl.fanoff)
router.put('/fan/low', fengshanCtrl.fanlow)
router.put('/fan/high', fengshanCtrl.fanhigh)

router.put('/ac/:id/:status', acCtrl.ac)
router.put('/ac/acon', acCtrl.acon)
router.put('/ac/acoff', acCtrl.acoff)

router.post("/login", userCtrl.login);
router.post("/zhuce", userCtrl.zhuce);
router.get("/checks", userCtrl.checks);
router.post("/delete", userCtrl.delete);
router.post("/update", userCtrl.update);

router.post("/add", eqCtrl.add)
router.get("/checks1", eqCtrl.serch)
router.get("/checks2/:id", eqCtrl.search)
router.post("/change1", eqCtrl.update)
router.post("/delete1", eqCtrl.delete)
router.put("/env/:id/:temp/:humd", eqCtrl.echarts)
router.get("/env/:id/:count", eqCtrl.echarts1)

router.put('/fsp/:id/:status', fspCtrl.fsp)
router.put('/fsp/fspon', fspCtrl.fspon)
router.put('/fsp/fspoff', fspCtrl.fspoff)

router.put('/door/:id/:status', doorCtrl.door)
router.put('/door/dooron', doorCtrl.dooron)
router.put('/door/dooroff', doorCtrl.dooroff)

router.put('/csp/:id/:status', cspCtrl.csp)
router.put('/csp/cspon', cspCtrl.cspon)
router.put('/csp/cspoff', cspCtrl.cspoff)

router.put('/calarm/:id/:status', calarmCtrl.calarm)
router.put('/calarm/calarmon', calarmCtrl.calarmon)
router.put('/calarm/calarmoff', calarmCtrl.calarmoff)

router.put('/camera/:id/:status', cameraCtrl.camera)
router.put('/camera/cameraon', cameraCtrl.cameraon)
router.put('/camera/cameraoff', cameraCtrl.cameraoff)

router.put('/curtain/:id/:status', curtainCtrl.curtain)
router.put('/curtain/curtainon', curtainCtrl.curtainon)
router.put('/curtain/curtainoff', curtainCtrl.curtainoff)

router.put('/window/:id/:status', windowCtrl.window)
router.put('/window/windowon', windowCtrl.windowon)
router.put('/window/windowoff', windowCtrl.windowoff)

module.exports = router;