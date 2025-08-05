"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const SDV = window.SDV;
const cameraDefaults = {
    "G01": {
        "0457": {
            "position": {
                "x": -339.02302736222987,
                "y": -1573.0089058932379,
                "z": 720.9873646514143
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 317.2894859313965
            }
        },
        "0583": {
            "position": {
                "x": -328.00694668948455,
                "y": -1522.6307360794847,
                "z": 707.8697648411687
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 317.2894859313965
            }
        },
        "0772": {
            "position": {
                "x": -337.1596174837967,
                "y": -1564.4872563086828,
                "z": 718.7684752120693
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 317.2894859313965
            }
        }
    },
    "G02": {
        "0457": {
            "position": {
                "x": -356.20343354306567,
                "y": -1575.12580339961,
                "z": 697.3672890566987
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 317.2894859313965
            }
        },
        "0583": {
            "position": {
                "x": -345.11429070464476,
                "y": -1526.7935629737126,
                "z": 685.5349015733809
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 317.2894859313965
            }
        },
        "0772": {
            "position": {
                "x": -354.9799664027611,
                "y": -1569.793298548693,
                "z": 696.0618195999393
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 317.2894859313965
            }
        }
    },
    "G03": {
        "0914": {
            "position": {
                "x": -611.5780881073982,
                "y": -2031.8101135008642,
                "z": 909.6802762548646
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 418.7894859313965
            }
        },
        "1118": {
            "position": {
                "x": -591.5316494405516,
                "y": -1965.951998536018,
                "z": 893.58975190205
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 418.7894859313965
            }
        }
    },
    "G04": {
        "1321": {
            "position": {
                "x": -760.5325704391531,
                "y": -2221.7899366024944,
                "z": 883.8191973527387
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 406.2894859313965
            }
        },
        "1525": {
            "position": {
                "x": -775.4135660780335,
                "y": -2264.820363766209,
                "z": 893.1628044897665
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 406.2894859313965
            }
        },
        "0914": {
            "position": {
                "x": -609.0998119535449,
                "y": -2544.2645739505097,
                "z": 1384.5490521441623
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 646.7894859313965
            }
        },
        "1118": {
            "position": {
                "x": -607.0140493990074,
                "y": -2535.6295683275175,
                "z": 1382.0227153316073
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 646.7894859313965
            }
        }
    },
    "G05": {
        "0914": {
            "position": {
                "x": -598.1586425875126,
                "y": -2570.151503129709,
                "z": 1299.6844911835533
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 646.7894859313965
            }
        },
        "1118": {
            "position": {
                "x": -597.3042956491026,
                "y": -2566.512857379186,
                "z": 1298.7519645775208
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 646.7894859313965
            }
        }
    },
    "G06": {
        "1321": {
            "position": {
                "x": -357.361913079555,
                "y": -2100.7977410571752,
                "z": 725.6507064317163
            },
            "target": {
                "x": -0.25,
                "y": -20.907226596027613,
                "z": 305
            }
        },
        "1525": {
            "position": {
                "x": -438.1244728322898,
                "y": -2571.1748855908413,
                "z": 820.7828668804029
            },
            "target": {
                "x": -0.25,
                "y": -20.907226596027613,
                "z": 305
            }
        },
        "1929": {
            "position": {
                "x": -525.0760175360476,
                "y": -3077.5979043233588,
                "z": 923.2051814695507
            },
            "target": {
                "x": -0.25,
                "y": -20.907226596027613,
                "z": 305
            }
        }
    },
    "G07": {
        "1525": {
            "position": {
                "x": -243.53867567345355,
                "y": -2397.990497320506,
                "z": 952.6789641679504
            },
            "target": {
                "x": -0.25,
                "y": -20.907226596027613,
                "z": 406.5
            }
        },
        "1929": {
            "position": {
                "x": -311.6493173793785,
                "y": -3063.474275015012,
                "z": 1105.5862034086624
            },
            "target": {
                "x": -0.25,
                "y": -20.907226596027613,
                "z": 406.5
            }
        }
    },
    "G08": {
        "KKBE": {
            "position": {
                "x": -5.532464463254838,
                "y": -5432.92682026053,
                "z": 902.9194904796906
            },
            "target": {
                "x": 0,
                "y": -1080.4560496807098,
                "z": 587.8906860351562
            }
        },
        "QQBE": {
            "position": {
                "x": -4.693012704241335,
                "y": -4772.517834593315,
                "z": 854.1682538890526
            },
            "target": {
                "x": 0,
                "y": -1080.4560496807098,
                "z": 586.9393920898438
            }
        },
        "FFBE": {
            "position": {
                "x": -4.561580809353841,
                "y": -4604.118439148631,
                "z": 847.6355715725585
            },
            "target": {
                "x": 0,
                "y": -1015.4560496807098,
                "z": 587.8906860351562
            }
        },
        "TTBE": {
            "position": {
                "x": -4.561042874809499,
                "y": -4603.695238168981,
                "z": 847.6049405802587
            },
            "target": {
                "x": 0,
                "y": -1015.4560496807098,
                "z": 587.8906860351562
            }
        }
    },
    "G09": {
        "KKBE": {
            "position": {
                "x": -5.532464463254838,
                "y": -5432.92682026053,
                "z": 902.9194904796906
            },
            "target": {
                "x": 0,
                "y": -1080.4560496807098,
                "z": 587.8906860351562
            }
        },
        "QQBE": {
            "position": {
                "x": -4.693012704241335,
                "y": -4772.517834593315,
                "z": 854.1682538890526
            },
            "target": {
                "x": 0,
                "y": -1080.4560496807098,
                "z": 586.9393920898438
            }
        },
        "FFBE": {
            "position": {
                "x": -4.561580809353841,
                "y": -4604.118439148631,
                "z": 847.6355715725585
            },
            "target": {
                "x": 0,
                "y": -1015.4560496807098,
                "z": 587.8906860351562
            }
        },
        "TTBE": {
            "position": {
                "x": -4.561042874809499,
                "y": -4603.695238168981,
                "z": 847.6049405802587
            },
            "target": {
                "x": 0,
                "y": -1015.4560496807098,
                "z": 587.8906860351562
            }
        }
    },
    "G10": {
        "KKBE": {
            "position": {
                "x": -5.532464463254838,
                "y": -5432.92682026053,
                "z": 902.9194904796906
            },
            "target": {
                "x": 0,
                "y": -1080.4560496807098,
                "z": 587.8906860351562
            }
        },
        "QQBE": {
            "position": {
                "x": -4.693012704241335,
                "y": -4772.517834593315,
                "z": 854.1682538890526
            },
            "target": {
                "x": 0,
                "y": -1080.4560496807098,
                "z": 586.9393920898438
            }
        }
    },
    "G11": {
        "KKBE": {
            "position": {
                "x": -5.532464463254838,
                "y": -5432.92682026053,
                "z": 902.9194904796906
            },
            "target": {
                "x": 0,
                "y": -1080.4560496807098,
                "z": 587.8906860351562
            }
        },
        "QQBE": {
            "position": {
                "x": -4.693012704241335,
                "y": -4772.517834593315,
                "z": 854.1682538890526
            },
            "target": {
                "x": 0,
                "y": -1080.4560496807098,
                "z": 586.9393920898438
            }
        },
        "FFBE": {
            "position": {
                "x": -4.561580809353841,
                "y": -4604.118439148631,
                "z": 847.6355715725585
            },
            "target": {
                "x": 0,
                "y": -1015.4560496807098,
                "z": 587.8906860351562
            }
        },
        "TTBE": {
            "position": {
                "x": -4.561042874809499,
                "y": -4603.695238168981,
                "z": 847.6049405802587
            },
            "target": {
                "x": 0,
                "y": -1015.4560496807098,
                "z": 587.8906860351562
            }
        }
    },
    "G12": {
        "0493": {
            "position": {
                "x": -339.02302736222987,
                "y": -1573.0089058932379,
                "z": 720.9873646514143
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 317.2894859313965
            }
        },
        "0619": {
            "position": {
                "x": -328.00694668948455,
                "y": -1522.6307360794847,
                "z": 707.8697648411687
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 317.2894859313965
            }
        },
        "0808": {
            "position": {
                "x": -337.1596174837967,
                "y": -1564.4872563086828,
                "z": 718.7684752120693
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 317.2894859313965
            }
        }
    },
    "G13": {
        "0493": {
            "position": {
                "x": -339.02302736222987,
                "y": -1573.0089058932379,
                "z": 720.9873646514143
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 317.2894859313965
            }
        },
        "0619": {
            "position": {
                "x": -328.00694668948455,
                "y": -1522.6307360794847,
                "z": 707.8697648411687
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 317.2894859313965
            }
        },
        "0808": {
            "position": {
                "x": -337.1596174837967,
                "y": -1564.4872563086828,
                "z": 718.7684752120693
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 317.2894859313965
            }
        }
    },
    "G14": {
        "0950": {
            "position": {
                "x": -611.5780881073982,
                "y": -2031.8101135008642,
                "z": 909.6802762548646
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 418.7894859313965
            }
        },
        "1154": {
            "position": {
                "x": -591.5316494405516,
                "y": -1965.951998536018,
                "z": 893.58975190205
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 418.7894859313965
            }
        }
    },
    "G15": {
        "1357": {
            "position": {
                "x": -760.5325704391531,
                "y": -2221.7899366024944,
                "z": 883.8191973527387
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 406.2894859313965
            }
        },
        "1561": {
            "position": {
                "x": -775.4135660780335,
                "y": -2264.820363766209,
                "z": 893.1628044897665
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 406.2894859313965
            }
        }
    },
    "G16": {
        "0950": {
            "position": {
                "x": -598.1586425875126,
                "y": -2570.151503129709,
                "z": 1299.6844911835533
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 646.7894859313965
            }
        },
        "1154": {
            "position": {
                "x": -597.3042956491026,
                "y": -2566.512857379186,
                "z": 1298.7519645775208
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 646.7894859313965
            }
        }
    },
    "G17": {
        "1357": {
            "position": {
                "x": -357.361913079555,
                "y": -2100.7977410571752,
                "z": 725.6507064317163
            },
            "target": {
                "x": -0.25,
                "y": -20.907226596027613,
                "z": 305
            }
        },
        "1561": {
            "position": {
                "x": -438.1244728322898,
                "y": -2571.1748855908413,
                "z": 820.7828668804029
            },
            "target": {
                "x": -0.25,
                "y": -20.907226596027613,
                "z": 305
            }
        },
        "1965": {
            "position": {
                "x": -525.0760175360476,
                "y": -3077.5979043233588,
                "z": 923.2051814695507
            },
            "target": {
                "x": -0.25,
                "y": -20.907226596027613,
                "z": 305
            }
        }
    },
    "G18": {
        "1561": {
            "position": {
                "x": -243.53867567345355,
                "y": -2397.990497320506,
                "z": 952.6789641679504
            },
            "target": {
                "x": -0.25,
                "y": -20.907226596027613,
                "z": 406.5
            }
        },
        "1845": {
            "position": {
                "x": -311.6493173793785,
                "y": -3063.474275015012,
                "z": 1105.5862034086624
            },
            "target": {
                "x": -0.25,
                "y": -20.907226596027613,
                "z": 406.5
            }
        }
    },
    "G19": {
        "KKBE": {
            "position": {
                "x": -5.532464463254838,
                "y": -5432.92682026053,
                "z": 902.9194904796906
            },
            "target": {
                "x": 0,
                "y": -1080.4560496807098,
                "z": 587.8906860351562
            }
        },
        "QQBE": {
            "position": {
                "x": -4.693012704241335,
                "y": -4772.517834593315,
                "z": 854.1682538890526
            },
            "target": {
                "x": 0,
                "y": -1080.4560496807098,
                "z": 586.9393920898438
            }
        },
        "FFBE": {
            "position": {
                "x": -4.561580809353841,
                "y": -4604.118439148631,
                "z": 847.6355715725585
            },
            "target": {
                "x": 0,
                "y": -1015.4560496807098,
                "z": 587.8906860351562
            }
        },
        "TTBE": {
            "position": {
                "x": -4.561042874809499,
                "y": -4603.695238168981,
                "z": 847.6049405802587
            },
            "target": {
                "x": 0,
                "y": -1015.4560496807098,
                "z": 587.8906860351562
            }
        }
    },
    "G20": {
        "0550": {
            "position": {
                "x": -339.02302736222987,
                "y": -1573.0089058932379,
                "z": 720.9873646514143
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 317.2894859313965
            }
        },
        "0676": {
            "position": {
                "x": -328.00694668948455,
                "y": -1522.6307360794847,
                "z": 707.8697648411687
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 317.2894859313965
            }
        },
        "0865": {
            "position": {
                "x": -337.1596174837967,
                "y": -1564.4872563086828,
                "z": 718.7684752120693
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 317.2894859313965
            }
        }
    },
    "G21": {
        "1007": {
            "position": {
                "x": -611.5780881073982,
                "y": -2031.8101135008642,
                "z": 909.6802762548646
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 418.7894859313965
            }
        }
    },
    "G22": {
        "1570": {
            "position": {
                "x": -775.4135660780335,
                "y": -2264.820363766209,
                "z": 893.1628044897665
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 406.2894859313965
            }
        },
        "1774": {
            "position": {
                "x": -775.4135660780335,
                "y": -2264.820363766209,
                "z": 893.1628044897665
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 406.2894859313965
            }
        }
    },
    "G23": {
        "1007": {
            "position": {
                "x": -598.1586425875126,
                "y": -2570.151503129709,
                "z": 1299.6844911835533
            },
            "target": {
                "x": 0,
                "y": -22.60634888556615,
                "z": 646.7894859313965
            }
        }
    }
};
class GeovinSD {
    constructor(sd_ticket) {
        this.initial_parameter_values = {};
        this.sd_ticket = "";
        this.initialized = false; // it is loaded and ready
        this.activated = false; // we have loaded the current settings to see
        this.visible = false; // we can see it
        this.rendering = false; // it's processing information
        this.movingCamera = false; // we are moving the camera
        this.currentSession = null;
        this.currentViewport = null;
        this.parameters = null;
        this.activeScene = "";
        this.activeWidth = "";
        this.activeShape = "";
        this.isBed = false;
        this.isPainted = false;
        this.sd_ticket = sd_ticket;
    }
    init(values = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            this.rendering = true;
            this.initial_parameter_values = values;
            $('.sd-curtain span').text('Initializing your model...');
            $('.loading-bar__inner').css({ width: '33%' });
            $('.loading-bar__inner').text('33%');
            yield this.createViewport();
            yield this.createSession(this.sd_ticket);
            this.initialized = true;
            //await this.addDefaultScene();
            this.availableScenes = this.currentViewport.lightScenes;
            this.activeScene = this.currentViewport.lightScene.name;
            $('.sd-curtain span').text('Applying selections ...');
            $('.loading-bar__inner').css({ width: '66%' });
            $('.loading-bar__inner').text('66%');
            const task_token = yield SDV.addListener(SDV.EVENTTYPE.TASK.TASK_END, (task) => {
                if (task.type === 'session_customization') {
                    const rendering_token = SDV.addListener(SDV.EVENTTYPE.RENDERING.BEAUTY_RENDERING_FINISHED, (render) => {
                        this.rendering = false;
                        this.enableZoom();
                        $(document).trigger('populate-controls-ready');
                        SDV.removeListener(rendering_token);
                        SDV.removeListener(task_token);
                    });
                }
            });
            yield this.adjustPeripherals();
            yield this.loadInitialValues(values);
            this.activated = true;
            yield this.adjustZoom();
            yield this.adjustCamera();
            const new_task_token = yield SDV.addListener(SDV.EVENTTYPE.TASK.TASK_END, (task) => {
                console.log('task ended', task);
                if (task.type === 'session_customization') {
                    this.rendering = false;
                    $('.sd-wrapper').removeClass('busy');
                }
            });
        });
    }
    createViewport() {
        return __awaiter(this, void 0, void 0, function* () {
            const viewport = yield SDV.createViewport({
                canvas: document.getElementById("sdv-canvas"),
                id: "myViewport",
                branding: {
                    backgroundColor: "#ffffff",
                }
            });
            this.currentViewport = viewport;
        });
    }
    adjustPeripherals() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('adjusting peripherals', this.isBed, this.isPainted);
            if (this.activeShape === "G08" || this.activeShape === "G09" || this.activeShape === "G19") { //need to figure this out for G10, G11 also adjust value for light scene
                //this.rendering = true;
                const parameterFMetal = yield this.currentSession.getParameterByName('Fabric-Metal')[0];
                const parameterMMetal = yield this.currentSession.getParameterByName('Mattress-Metal')[0];
                //this isn't resolving and leaving us in rendering state
                if (this.isPainted) {
                    parameterFMetal.value = 0.65;
                    parameterMMetal.value = 0.65;
                    yield this.currentSession.customize();
                }
                else {
                    parameterFMetal.value = 0.35;
                    parameterMMetal.value = 0.35;
                    yield this.currentSession.customize();
                }
            }
            if (this.activeScene != 'Scene Geovin') {
                this.rendering = true;
                this.setLightingScene('Scene Geovin');
            }
            /*
            if (this.isPainted) {
                
            } else {
                if (this.activeScene != 'Scene MAW') {
                    this.rendering = true;
                    this.setLightingScene( 'Scene MAW' );
                }
            }*/
        });
    }
    //resolve metalness for beds that have it
    setLightingScene(scene) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('setting scene', scene);
            yield this.currentViewport.assignLightScene(scene);
            this.activeScene = scene;
            /*
            await Object.values(this.availableScenes).forEach( async (value:any) => {
                if (value.name === scene) {
                    console.log('assigning scene',value);
                    await this.currentViewport.assignLightScene( value.name );
                    this.activeScene = value.name;
                    //const lightScene = this.currentViewport.lightScene!;
                    //console.log('lightscene',lightScene);
                    //lightScene.environmentMap = "default";
                    //lightScene.environmentMapIntensity = 0;
                    //lightScene.environmentMapAsBackground = true;
                }
            } );*/
        });
    }
    adjustZoom() {
        return __awaiter(this, void 0, void 0, function* () {
            const camera = this.currentViewport.camera;
            camera.autoAdjust = true;
            camera.zoomToFactor = 1.4;
            camera.enableZoom = false;
            yield this.currentViewport.render();
        });
    }
    enableZoom() {
        return __awaiter(this, void 0, void 0, function* () {
            const camera = this.currentViewport.camera;
            camera.enableZoom = true;
            yield this.currentViewport.render();
        });
    }
    adjustCamera() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('adjusting camera');
            const cameraSettings = cameraDefaults[this.activeShape][this.activeWidth];
            const camera = this.currentViewport.camera;
            console.log('adjusting camera', JSON.stringify(camera), JSON.stringify(camera.position), JSON.stringify(camera.target), cameraSettings, this.activeWidth, this.activeShape);
            yield camera.animate([
                {
                    position: camera.position,
                    target: camera.target
                },
                {
                    position: [cameraSettings.position.x, cameraSettings.position.y, cameraSettings.position.z],
                    target: [cameraSettings.target.x, cameraSettings.target.y, cameraSettings.target.z]
                }
            ], { duration: 1000 });
        });
    }
    createSession(sd_ticket) {
        return __awaiter(this, void 0, void 0, function* () {
            this.rendering = true;
            const session = yield SDV.createSession({
                ticket: sd_ticket,
                // "xxxx-xxxx-xxxx-xxxx" is a placeholder ticket, replace it with your actual ticket
                modelViewUrl: "https://sdeuc1.eu-central-1.shapediver.com",
                id: "mySession",
            });
            this.currentSession = session;
        });
    }
    loadInitialValues(values) {
        return __awaiter(this, void 0, void 0, function* () {
            this.rendering = true;
            const keys = Object.keys(values);
            yield keys.forEach((key) => __awaiter(this, void 0, void 0, function* () {
                yield this.setParameterChoice(key, values[key]);
            }));
        });
    }
    findParameterChoiceforValue(parameter, newValue) {
        console.log(parameter, newValue);
        const choices = parameter.choices;
        for (const [key, value] of Object.entries(choices)) {
            if (value === newValue || value.includes(newValue)) {
                return key;
            }
        }
        return null;
    }
    getParameterChoice(parameter_name) {
        const parameter = this.currentSession.getParameterByName(parameter_name)[0];
        return parameter.choices[parameter.value];
    }
    setParameterChoice(parameter_name, newValue) {
        return __awaiter(this, void 0, void 0, function* () {
            if (parameter_name === 'Code-01') {
                this.activeShape = newValue;
                if (['G08', 'G09', 'G10', 'G11', 'G19'].includes(newValue)) {
                    this.isBed = true;
                    return;
                }
                else if (['G12', 'G13', 'G14', 'G15', 'G16', 'G17', 'G18', 'G20', 'G21', 'G22', 'G23'].includes(newValue)) {
                    return;
                }
            }
            if (parameter_name === 'Code-03') {
                this.activeWidth = newValue;
            }
            if (parameter_name === 'Code-04') {
                if (newValue === 'P') {
                    console.log('setting to paint');
                    this.isPainted = true;
                }
                else {
                    this.isPainted = false;
                }
            }
            this.rendering = true;
            const parameter = yield this.currentSession.getParameterByName(parameter_name)[0];
            const choice = this.findParameterChoiceforValue(parameter, newValue);
            parameter.value = choice;
            yield this.currentSession.customize();
        });
    }
    showMattress() {
        return __awaiter(this, void 0, void 0, function* () {
            this.rendering = true;
            const parameter = yield this.currentSession.getParameterByName("Show Mattress")[0];
            parameter.value = true;
            yield this.currentSession.customize();
            if (!$('#mattress').is(":checked")) {
                $('#mattress').prop('checked', true);
            }
        });
    }
    hideMattress() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('hide mattress');
            this.rendering = true;
            const parameter = yield this.currentSession.getParameterByName("Show Mattress")[0];
            parameter.value = false;
            yield this.currentSession.customize();
            if ($('#mattress').is(":checked")) {
                $('#mattress').prop('checked', false);
            }
        });
    }
    showDrawers() {
        return __awaiter(this, void 0, void 0, function* () {
            this.rendering = true;
            const parameter = yield this.currentSession.getParameterByName("Drawers")[0];
            parameter.value = "1"; // "Out"
            yield this.currentSession.customize();
            if (!$('#drawers').is(":checked")) {
                $('#drawers').prop('checked', true);
            }
        });
    }
    hideDrawers() {
        return __awaiter(this, void 0, void 0, function* () {
            this.rendering = true;
            const parameter = yield this.currentSession.getParameterByName("Drawers")[0];
            parameter.value = "0"; // "In"
            yield this.currentSession.customize();
            if ($('#drawers').is(":checked")) {
                $('#drawers').prop('checked', false);
            }
        });
    }
    showStorage() {
        return __awaiter(this, void 0, void 0, function* () {
            this.rendering = true;
            const parameter = yield this.currentSession.getParameterByName("Show Storage")[0];
            parameter.value = true;
            yield this.currentSession.customize();
            if (!$('#storage').is(":checked")) {
                $('#storage').prop('checked', true);
            }
        });
    }
    hideStorage() {
        return __awaiter(this, void 0, void 0, function* () {
            this.rendering = true;
            const parameter = yield this.currentSession.getParameterByName("Show Storage")[0];
            parameter.value = false;
            yield this.currentSession.customize();
            if ($('#storage').is(":checked")) {
                $('#storage').prop('checked', false);
            }
        });
    }
    resetProductView(shape) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('resetting');
            switch (shape) {
                case 'G09':
                    console.log('1');
                    yield this.hideMattress();
                    break;
                case 'G10':
                    console.log('2');
                    yield this.hideMattress();
                    break;
                case 'G11':
                    console.log('3');
                    yield this.hideStorage();
                    yield this.hideMattress();
                    break;
                case 'G12':
                    console.log('4');
                    yield this.hideDrawers();
                    yield this.hideMattress();
                    break;
                default:
                    console.log('5');
            }
            /*
            await ( this.activeShape === 'G10' ? this.hideDrawers() : this.hideMattress() );
                
            if ( this.activeShape === 'G11') {
                await this.hideStorage();
            }
            if ( this.isBed) {
                await this.hideMattress();
            }
            await this.adjustCamera();*/
        });
    }
    getScreenshot() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('getting screenshot');
            const datauri = yield this.currentViewport.getScreenshot();
            return datauri;
        });
    }
    takeScreenshot() {
        return __awaiter(this, void 0, void 0, function* () {
            this.movingCamera = true;
            const camera_token = yield SDV.addListener(SDV.EVENTTYPE.CAMERA.CAMERA_END, (camera_move) => __awaiter(this, void 0, void 0, function* () {
                console.log('cameara ended');
                this.movingCamera = false;
                SDV.removeListener(camera_token);
                const datauri = yield this.getScreenshot();
                //console.log('datauri',datauri);
                $(document).trigger('update-cart-image', [datauri]);
            }));
            yield this.adjustCamera();
            yield this.resetProductView(this.activeShape);
        });
    }
}
