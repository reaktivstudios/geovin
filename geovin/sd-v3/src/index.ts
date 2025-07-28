const SDV = (<any>window).SDV;
interface cameraSetting {
    [key: string]: { 
        [key:string]: {
            position: {
                x: number,
                y: number,
                z: number
            },
            target: {
                x: number,
                y: number,
                z: number
            }
        }
    };
  }
const cameraDefaults: cameraSetting = {
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

    private initial_parameter_values: any = {};

    private sd_ticket: string = "";

    public initialized: boolean = false; // it is loaded and ready

    public activated: boolean = false; // we have loaded the current settings to see

    public visible: boolean = false; // we can see it

    public rendering: boolean = false; // it's processing information

    public movingCamera: boolean = false; // we are moving the camera

    private currentSession: any = null;

    private currentViewport: any = null;

    public parameters: any = null;

    public cameraSettings : any;
    public activeScene: string = "";
    public availableScenes: any;
    public activeWidth: string = "";
    public activeShape: string = "";
    private isBed: boolean = false;
    private isPainted: boolean = false;

    constructor(sd_ticket: string ) {
        this.sd_ticket = sd_ticket;
    }
    
    public async init(values: any = {}) {
        this.rendering = true;
        this.initial_parameter_values = values;
        $('.sd-curtain span').text('Initializing your model...');
        $('.loading-bar__inner').css({width:'33%'});
        $('.loading-bar__inner').text('33%');
        
        await this.createViewport();
        await this.createSession( this.sd_ticket );
        this.initialized = true;
        //await this.addDefaultScene();
        this.availableScenes = this.currentViewport.lightScenes;
        this.activeScene = this.currentViewport.lightScene.name;
        $('.sd-curtain span').text('Applying selections ...');
        $('.loading-bar__inner').css({width:'66%'});
        $('.loading-bar__inner').text('66%');

        const task_token = await SDV.addListener(SDV.EVENTTYPE.TASK.TASK_END, (task: any) => {
            if (task.type === 'session_customization') {
                const rendering_token = SDV.addListener(SDV.EVENTTYPE.RENDERING.BEAUTY_RENDERING_FINISHED, (render: any) => {
                    this.rendering = false;
                    this.enableZoom();
                    $(document).trigger('populate-controls-ready');
                    SDV.removeListener(rendering_token);
                    SDV.removeListener(task_token);
                });
            }
        });
            
        await this.adjustPeripherals(); 
        await this.loadInitialValues(values);
        
        this.activated = true;
        await this.adjustZoom();
        await this.adjustCamera();

        const new_task_token = await SDV.addListener(SDV.EVENTTYPE.TASK.TASK_END, (task: any) => {
            console.log('task ended',task);
            if (task.type === 'session_customization') {
                this.rendering = false;
                $('.sd-wrapper').removeClass('busy');
            }
        });

        
    }
    
    private async createViewport() {
        const viewport = await SDV.createViewport({
            canvas: document.getElementById("sdv-canvas"),
            id: "myViewport",
            branding: {
                backgroundColor: "#ffffff",
            }
        });
        this.currentViewport = viewport;
        
    }

    public async adjustPeripherals() {
        console.log('adjusting peripherals',this.isBed,this.isPainted);
        if (this.activeShape === "G08" || this.activeShape === "G09" || this.activeShape === "G19") { //need to figure this out for G10, G11 also adjust value for light scene
            //this.rendering = true;
            const parameterFMetal = await this.currentSession.getParameterByName('Fabric-Metal')[0];
            const parameterMMetal = await this.currentSession.getParameterByName('Mattress-Metal')[0];
            //this isn't resolving and leaving us in rendering state
            if ( this.isPainted ) {
                parameterFMetal.value = 0.65;
                parameterMMetal.value = 0.65;
                await this.currentSession.customize()
            } else {
                parameterFMetal.value = 0.35;
                parameterMMetal.value = 0.35;
                await this.currentSession.customize()
            }
            
            
        }
        if (this.activeScene != 'Scene Geovin') {
            this.rendering = true;
            this.setLightingScene( 'Scene Geovin' );
        }
        /*
        if (this.isPainted) {
            
        } else {
            if (this.activeScene != 'Scene MAW') {
                this.rendering = true;
                this.setLightingScene( 'Scene MAW' );
            }
        }*/
    }

//resolve metalness for beds that have it
    private async setLightingScene( scene: string ) {
        console.log('setting scene',scene );
        await this.currentViewport.assignLightScene( scene );
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
    }

    private async adjustZoom() {
        const camera = this.currentViewport.camera!;
        camera.autoAdjust = true;
        camera.zoomToFactor = 1.4;
        camera.enableZoom = false;
        await this.currentViewport.render();
    }

    private async enableZoom() {
        const camera = this.currentViewport.camera!;
        camera.enableZoom = true;
        await this.currentViewport.render();
    }

    private async adjustCamera() {
        console.log('adjusting camera');
        const cameraSettings = cameraDefaults[this.activeShape][this.activeWidth];
        const camera = this.currentViewport.camera!;
        console.log('adjusting camera',JSON.stringify(camera),JSON.stringify(camera.position),JSON.stringify(camera.target),cameraSettings,this.activeWidth,this.activeShape);
        await camera.animate(
            [
              {
                position: camera.position,
                target: camera.target
              },
              {
                position: [cameraSettings.position.x, cameraSettings.position.y, cameraSettings.position.z],
                target: [cameraSettings.target.x, cameraSettings.target.y, cameraSettings.target.z]
              }
            ],
            { duration: 1000 }
          );
    }
    
    private async createSession( sd_ticket: string ) {
        this.rendering = true;
        const session = await SDV.createSession({
            ticket: sd_ticket,
             // "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", ticket
            modelViewUrl: "https://sdeuc1.eu-central-1.shapediver.com",
            id: "mySession",
          });
        this.currentSession = session;
    }

    private async loadInitialValues(values: any)  {
        this.rendering = true;
        const keys = Object.keys(values);
        await keys.forEach( async (key) => {
            await this.setParameterChoice(key,values[key as keyof typeof values])
        });
        
    }

    private findParameterChoiceforValue( parameter: any, newValue: string ) {
        console.log(parameter,newValue );
        const choices = parameter.choices;
        for (const [key, value] of Object.entries(choices)) {
            if (value === newValue || (value as string).includes(newValue)) {
                return key;
            }
        }
        return null;
    }

    public getParameterChoice( parameter_name: string ) {
        const parameter = this.currentSession.getParameterByName(parameter_name)[0];
        return parameter.choices[parameter.value];
    }

    public async setParameterChoice( parameter_name: string, newValue: string ) {
        if (parameter_name === 'Code-01') {
            this.activeShape = newValue;
            if (['G08','G09','G10','G11','G19'].includes( newValue ) ) {
                this.isBed = true;
                return;
            } else if(['G12','G13','G14','G15','G16','G17','G18','G20','G21','G22','G23'].includes( newValue ) ) {
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
            } else {
                this.isPainted = false;
            }  
        }
        this.rendering = true;
        const parameter = await this.currentSession.getParameterByName(parameter_name)[0];
        const choice = this.findParameterChoiceforValue( parameter, newValue );
        parameter.value = choice;
        await this.currentSession.customize()
    }

    public async showMattress() {
        this.rendering = true;
        const parameter = await this.currentSession.getParameterByName("Show Mattress")[0];
        parameter.value = true;
        await this.currentSession.customize()
        if ( ! $('#mattress').is(":checked") ) {
            $('#mattress').prop('checked',true);
        }
    }

    public async hideMattress() {
        console.log('hide mattress');
        this.rendering = true;
        const parameter = await this.currentSession.getParameterByName("Show Mattress")[0];
        parameter.value = false;
        await this.currentSession.customize()
        if ( $('#mattress').is(":checked") ) {
            $('#mattress').prop('checked',false);
        }
    }

    public async showDrawers() {
        this.rendering = true;
        const parameter = await this.currentSession.getParameterByName("Drawers")[0];
        parameter.value = "1"; // "Out"
        await this.currentSession.customize()
        if ( ! $('#drawers').is(":checked") ) {
            $('#drawers').prop('checked',true);
        }
    }

    public async hideDrawers() {
        this.rendering = true;
        const parameter = await this.currentSession.getParameterByName("Drawers")[0];
        parameter.value = "0"; // "In"
        await this.currentSession.customize()
        if ( $('#drawers').is(":checked") ) {
            $('#drawers').prop('checked',false);
        }
    }

    public async showStorage() {
        this.rendering = true;
        const parameter = await this.currentSession.getParameterByName("Show Storage")[0];
        parameter.value = true;
        await this.currentSession.customize()
        if ( ! $('#storage').is(":checked") ) {
            $('#storage').prop('checked',true);
        }
    }

    public async hideStorage() {
        this.rendering = true;
        const parameter = await this.currentSession.getParameterByName("Show Storage")[0];
        parameter.value = false;
        await this.currentSession.customize()
        if ( $('#storage').is(":checked") ) {
            $('#storage').prop('checked',false);
        }
    }
    private async resetProductView( shape: string ) {
        console.log('resetting');
        switch(shape) {
            case 'G09':
                console.log('1');
                await this.hideMattress();
                break;
            case 'G10':
                console.log('2');
                await this.hideMattress();
                break;
            case 'G11':
                console.log('3');
                await this.hideStorage();
                await this.hideMattress();
                break;
            case 'G12':
                console.log('4');
                await this.hideDrawers();
                await this.hideMattress();
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
    }
    private async getScreenshot() {
        console.log('getting screenshot');
        const datauri = await this.currentViewport.getScreenshot();
        return datauri;
    }

    public async takeScreenshot() {
        

        this.movingCamera = true;
       
        const camera_token = await SDV.addListener(SDV.EVENTTYPE.CAMERA.CAMERA_END, async (camera_move: any) => {
            console.log('cameara ended');
            this.movingCamera = false;
            SDV.removeListener(camera_token);
            const datauri = await this.getScreenshot();
            //console.log('datauri',datauri);
            $(document).trigger('update-cart-image',[datauri]);
            
        });
        await this.adjustCamera();
        await this.resetProductView(this.activeShape); 
        
    }

    
}