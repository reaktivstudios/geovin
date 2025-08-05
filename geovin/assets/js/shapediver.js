var GeovinSD = {
    initialized : false,
    activated : false,
    visible : false,
    rendering : false,
    api : {},
    "cameraDefaults" : {
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
            "0772":  { 
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
            "1929" : { 
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
            "1965" : { 
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
        }
    },
    attributeGroups: {
      'finish' : [ 'wood-type', 'finish' ],
      'dimensions' : ['dimensions'],
      'hardware-finish' : [ 'hardware-shape', 'hardware-finish' ],
      'base-finish' : ['base-finish'],
      'doors' : ['doors'],
      'headboard-panel' : ['headboard-panel'],
      'fabric' : ['fabric']
    },
    cameraSettings : {},
    activeScene: '',
    availableScenes: [],
    activeWidth: '',
    activeShape: '',
    geovinCodes : {
      1 : {
        name: 'Shape',
        pattern: 'G##',
        required: true,
        set_by: 'category',
        woo_attribute_name: 'pa_shape',
        sd_name: 'Code-01',
      },
      2 : {
        name: 'Base',
        pattern: '***',
        required: true,
        set_by: 'collection',
        woo_attribute_name: 'pa_base',
        sd_name: 'Code-02',
      },
      3: {
        name: 'Dimension',
        pattern: '###',
        required: true,
        set_by: 'attribute',
        woo_attribute_name: 'pa_dimensions',
        sd_name: 'Code-03',
      },
      4: {
        name: 'Wood Type',
        pattern: 'A',
        required: true,
        set_by: 'attribute',
        woo_attribute_name: 'pa_wood-type',
        sd_name: 'Code-04',
      },
      5: {
        name: 'Wood Finish',
        pattern: 'F##',
        required: true,
        set_by: 'attribute',
        woo_attribute_name: 'pa_finish',
        sd_name: 'Code-05',
      },
      6: {
        name: 'Hardware Shape',
        pattern: 'J##',
        required: false,
        fallback: 'XXX',
        set_by: 'attribute',
        woo_attribute_name: 'pa_hardware-shape',
        sd_name: 'Code-06',
      },
      7: {
        name: 'Hardware Finish',
        pattern: 'A',
        required: false,
        fallback: 'X',
        set_by: 'attribute',
        woo_attribute_name: 'pa_hardware-finish',
        sd_name: 'Code-07',
      },
      8: {
        name: 'Base Finish',
        pattern: 'A',
        required: false,
        fallback: 'X',
        set_by: 'attribute',
        woo_attribute_name: 'pa_base-finish',
        sd_name: 'Code-08',
      },
      9: {
        name: 'Doors',
        pattern: 'D##',
        required: false,
        fallback: 'XXX',
        set_by: 'attribute',
        woo_attribute_name: 'pa_doors',
        sd_name: 'Code-09',
      },
      10: {
        name: 'Headboard Panel',
        pattern: 'P##',
        required: false,
        fallback: 'XXX',
        set_by: 'attribute',
        woo_attribute_name: 'pa_headboard-panel',
        sd_name: 'Code-10',
      },
      11: {
        name: 'Fabric',
        pattern: 'U##',
        required: false,
        fallback: 'XXX',
        set_by: 'attribute',
        woo_attribute_name: 'pa_fabric',
        sd_name: 'Code-11',
      }
    },
    init() {
        $('.sd-curtain span').text('Initializing your model...');
        $('.loading-bar__inner').css({width:'33%'});
        $('.loading-bar__inner').text('33%');
        return new Promise( function(resolve, reject ) {
            //set variables
            var container = document.getElementById('sdv-container');
            var viewerSettings = {
                container: container,
                api: { version: 2 },
                ticket: sd_ticket, // this is set in the product page markup if available for the product
                modelViewUrl: 'eu-central-1', // api endpoint
            };

            GeovinSD.api = new SDVApp.ParametricViewer(viewerSettings);
            GeovinSD.rendering = true;

            GeovinSD.api.scene.addEventListener(GeovinSD.api.scene.EVENTTYPE.VISIBILITY_ON, function () {
                GeovinSD.getLightingScenes();
                GeovinSD.api.scene.addEventListener(GeovinSD.api.scene.EVENTTYPE.RENDER_BEAUTY_END, function(data) {

                    if  ( GeovinSD.initialized ) {
                        resolve('finished'); 
                    } else {
                        GeovinSD.initialized = true;
                        GeovinSD.activated = true;
                        GeovinSD.visible = true;
                        $('body').addClass('noscroll');
                        GeovinSD.api.updateSettingAsync('scene.camera.zoomExtentsFactor',1.4);
                        GeovinSD.disableZoom();
                        
                        var result = GeovinSD.api.scene.removeEventListener(data.token);

                        $('.sd-curtain span').text('Populating controls ...');
                        $('.loading-bar__inner').text('95%');
                        $('.loading-bar__inner').css({width:'95%'});
                        resolve('finished'); 
                    }
                        
                } );
                GeovinSD.updateParametersFromAttributes();
                
            });
        })
    },
    getParameters() {
        var modelParams = GeovinSD.api.parameters.get().data;
        console.log(modelParams);
        return modelParams;
    },
    getLightingScenes() {
        GeovinSD.availableScenes = GeovinSD.api.scene.lights.getAllLightScenes().data;
        GeovinSD.activeScene = GeovinSD.api.scene.lights.getLightScene().data.id;
    },
    setLightingScene( scene ) {
        if ( scene != GeovinSD.activeScene && GeovinSD.availableScenes.includes( scene ) ) {
            var result = GeovinSD.api.scene.lights.setLightSceneFromID( scene );
            GeovinSD.activeScene = scene;
        }
    },
    getCameraDefaultsShape( shape ) {
        return new Promise(function(resolve,reject){
            var shapeObj = GeovinSD.cameraDefaults[shape];
            if ( typeof shapeObj !== 'undefined' ) {
                resolve( shapeObj );
            } else {
                reject('failed');
            }
        })
    },
    getCameraDefaults(shape,width){
        return new Promise(function(resolve,reject){
            var thiswidth = width;
            GeovinSD.getCameraDefaultsShape( shape ).then(function(res,rej){
                var keys = Object.keys(res);
                var value = keys.map(function(i){
                    if ( i == thiswidth ) {
                        if (typeof res[i] !== 'undefined' ) {
                            resolve( res[i] );
                        } else {
                            reject('failed on width');
                        }
                    }
                })
            })    
        })
    },
    adjustCameraForShape( shape, width ) {
        GeovinSD.getCameraDefaults( shape, width ).then(function(res){
            var newSettings = JSON.stringify( res );
            GeovinSD.cameraSettings = newSettings;
            if ( typeof newSettings !== 'undefined' ) {
                var newCameraSettings = JSON.parse( GeovinSD.cameraSettings );
                GeovinSD.api.scene.camera.updateAsync(newCameraSettings).then(function(r){
                    return
                })
            } 
        }).catch(function(e){
            console.log('error',e);
        });  
    },
    adjustZoomForShape( shape ) {
        GeovinSD.api.updateSettingAsync('scene.camera.autoAdjust',true);
    },
    showMattress() {
        GeovinSD.api.parameters.updateAsync({name: "Show Mattress", value: true});
        if ( ! $('#mattress').is(":checked") ) {
            $('#mattress').prop('checked',true);
        }
    },
    hideMattress() {
        return new Promise(function (resolved, rejected) {
            GeovinSD.api.parameters.updateAsync({name: "Show Mattress", value: false}).then(function(res){
                resolved(true);
            });
            if ($('#mattress').is(":checked") ) {
                $('#mattress').prop('checked',false);
            } else {
                resolved(true);
            }
        });
    },
    toggleMattress() {
        if ( $('#mattress').is(":checked") ) {
            GeovinSD.showMattress();
        } else {
            GeovinSD.hideMattress();
        }
    },
    openDrawers() {
        GeovinSD.api.parameters.updateAsync({name: "Drawers", value: 1});
        if ( ! $('#drawers').is(":checked") ) {
            $('#drawers').prop('checked',true);
        }
    },
    closeDrawers() {
        return new Promise(function (resolved, rejected) {
            GeovinSD.api.parameters.updateAsync({name: "Drawers", value: 0}).then(function(res){
                resolved(true);
            });
            if ($('#drawers').is(":checked") ) {
                $('#drawers').prop('checked',false);
            } else {
                resolved(true);
            }
        });
    },
    toggleDrawers() {
        if ( $('#drawers').is(":checked") ) {
            GeovinSD.openDrawers();
        } else {
            GeovinSD.closeDrawers();
        }
    },
    showStorage() {
        GeovinSD.api.parameters.updateAsync({name: "Show Storage", value: true});
        if ( ! $('#storage').is(":checked") ) {
            $('#storage').prop('checked',true);
        }
    },
    hideStorage() {
        return new Promise(function (resolved, rejected) {
            GeovinSD.api.parameters.updateAsync({name: "Show Storage", value: false}).then(function(res){
                resolved(true);
            });
            if ($('#storage').is(":checked") ) {
                $('#storage').prop('checked',false);
            } else {
                resolved(true);
            }
        });
    },
    toggleStorage() {
        if ( $('#storage').is(":checked") ) {
            GeovinSD.showStorage();
        } else {
            GeovinSD.hideStorage();
        }
    },
    updateParametersFromAttributes() {
        var attribute_containers = $('.variations .value');
        var sku = $('.tabs').data('product-sku');
        var base_options = sku.split('-');
        if ( base_options[1] !== 'XXX' ) {
            GeovinSD.updateParameter( 'pa_shape', base_options[0] );
            GeovinSD.updateParameter( 'pa_base', base_options[1] );
        } else {
            GeovinSD.activeShape = base_options[0];
        }
        GeovinSD.adjustZoomForShape( base_options[0] );
        
        for( i = 0; i < attribute_containers.length; i++ ) {
            var select = $(attribute_containers[i]).find('select');
            var this_attribute = select.attr('id');
            var currentOption = $('#' + this_attribute + ' option:selected');
            if (select && currentOption.length > 0 ) {
                if ( select.val() === 'xxx' || select.val() === 'x' ) {
                    //do nothing
                } else {
                    var newValue = currentOption.data('geovin-code-value');
                    console.log('this is the newValue',newValue);
                    GeovinSD.updateParameter( this_attribute, newValue );
                }
            }
        }
    },
    findParameterNameForAttribute( attribute ) {
        for (const [key, value] of Object.entries(GeovinSD.geovinCodes)) {
            if ( value.woo_attribute_name === attribute ) {
              return value.sd_name;
            }
        }
    },
    findParameterChoiceforValue( parameter, newValue ) {
        var choices = GeovinSD.getParameterChoices( parameter );
        for ( var i = 0; i < choices.length; i++ ) {
          if (choices[i] === newValue || choices[i].includes(newValue) ) {
            return i;
          }
        }
    },
    getParameterChoices( parameter ) {
        var data = GeovinSD.api.parameters.get({name: parameter});
        var choices = data.data[0].choices;
        return choices;
    },
    getParameterValue( parameter_name ) {
        var parameter = GeovinSD.api.parameters.get({name: parameter_name});
        var param_value = parameter.data[0].value;
        return param_value;
    },
    getParameterChoice( parameter_name ) {
        var choices = GeovinSD.getParameterChoices( parameter_name );
        var param_value = GeovinSD.getParameterValue( parameter_name );                 
        return choices[param_value].split(' ')[0]; // incase there is a description after the code in SD
    },
    getCurrentChoiceForAttribute( attribute ) {
        var parameter_name = GeovinSD.findParameterNameForAttribute( 'pa_' + attribute );
        return GeovinSD.getParameterChoice( parameter_name );
    },
    updateParameter( attribute, newValue ) {
        console.log('updating parameters',attribute,newValue);
        $('.sd-curtain span').text('Applying selections ...');
        $('.loading-bar__inner').css({width:'66%'});
        $('.loading-bar__inner').text('66%');
        var parameter = GeovinSD.findParameterNameForAttribute( attribute );
        var choice = GeovinSD.findParameterChoiceforValue( parameter, newValue );

        GeovinSD.rendering = true;
        GeovinSD.api.parameters.updateAsync({name: parameter, value: choice});
        if ( attribute === 'pa_shape' ) {
            GeovinSD.activeShape = newValue;
            if ( GeovinSD.activeWidth !== '' ) {
                GeovinSD.adjustCameraForShape( newValue, GeovinSD.activeWidth );
            }
        } else if ( attribute === 'pa_dimensions' ) {
            GeovinSD.activeWidth = newValue;
            if ( GeovinSD.activeShape !== '' ) {
                GeovinSD.adjustCameraForShape( GeovinSD.activeShape, newValue );
            }
        } else if ( attribute === 'pa_wood-type' && newValue === 'P' ) {
            GeovinSD.setLightingScene( 'default' );
            if ( GeovinSD.isBed() ) {
                //apply metalness .35 for fabric and mattress
                GeovinSD.api.parameters.updateAsync({name:'Fabric-Metal',value: 0.35 });
                GeovinSD.api.parameters.updateAsync({name:'Mattress-Metal',value: 0.35 });
            }
        } else if (attribute === 'pa_wood-type' && newValue !== 'P') {
            GeovinSD.setLightingScene( 'scene-v2' );
            if ( GeovinSD.isBed() ) {
                //apply metalness .65 for fabric and mattress
                GeovinSD.api.parameters.updateAsync({name:'Fabric-Metal',value: 0.65 });
                GeovinSD.api.parameters.updateAsync({name:'Mattress-Metal',value: 0.65 });
            }
        }
    },
    isBed() {
        if ( GeovinSD.activeShape === 'G08' || GeovinSD.activeShape === 'G09' || GeovinSD.activeShape === 'G10' || GeovinSD.activeShape === 'G11' ) {
            return true;
        } else {
            return false;
        }
    },
    updateCustomizationTabLabels( data ) {   
        for (const [key, value] of Object.entries(data)) {
            var codes = [];
            i = 0;
            j = Object.keys(value).length;
            $('.sd-controls .sd-control--'+key+' input[type="radio"]:checked').prop('checked',false);

            for (const [subkey, subvalue] of Object.entries(value) ) {
                i++;
                codes.push(subvalue.code);
                if (i === j) {
                    var this_code = typeof codes.join('-') !== 'undefined' ? codes.join('-') : codes[0];
                    //find label for key
                    if ( codes.length > 1 || this_code.includes('D') || this_code.includes('P') || this_code.includes('U') ) {
                        var labelcode = ' &#8212 ' + this_code;
                    } else {
                        var labelcode = '';
                    }

                    var label = available_attributes[key][ this_code ].label + labelcode;
                    var imgsrc = '';
                    if ( typeof available_attributes[key][ this_code ].image !== 'undefined' ) {
                        imgsrc = available_attributes[key][ this_code ].image;
                        var icon = '<div class="quickview__icon"><svg class="icon-svg--view"><use xlink:href="#icon-view"></use></svg><div class="quickview__details"><div class="label">'+label+' </div><img src="' + imgsrc + '"/></div></div>';
                    } else {
                        var icon = '';
                    }
                    if ( key === 'doors' && subvalue.code === 'D00' ) {
                        $('#tab-sd .'+key).hide();
                    } else if ( key === 'doors' ) {
                        $('#tab-sd .'+key).show();
                    }
                    
                    var tabSelectedHTML = icon + '<span class="js-selected-text">' + label + '</span>';
                    var selectedValueHTML = icon + label + ' (selected)';

                    if ( key === 'dimensions' && subvalue.code === 'KKBE' ) {
                        $('#tab-sd .bed-size').remove();
                        var bedSize = '<span class="bed-size"><strong>Bed Size:</strong> King</span>';
                        $('#tab-sd .'+key).prepend(bedSize);
                    } else if ( key === 'dimensions' && subvalue.code === 'QQBE' ) {
                        $('#tab-sd .bed-size').remove();
                        var bedSize = '<span class="bed-size"><strong>Bed Size:</strong> Queen</span>';
                        $('#tab-sd .'+key).prepend(bedSize);
                    } else if ( key === 'dimensions' && subvalue.code === 'FFBE' ) {
                        $('#tab-sd .bed-size').remove();
                        var bedSize = '<span class="bed-size"><strong>Bed Size:</strong> Full</span>';
                        $('#tab-sd .'+key).prepend(bedSize);
                    } else if ( key === 'dimensions' && subvalue.code === 'TTBE' ) {
                        $('#tab-sd .bed-size').remove();
                        var bedSize = '<span class="bed-size"><strong>Bed Size:</strong> Twin</span>';
                        $('#tab-sd .'+key).prepend(bedSize);
                    } else {
                        var bedSize = '';
                    }
                    $('#tab-sd .'+key+' .product-attribute-selected').html( tabSelectedHTML );
                    $('.sd-controls .sd-control--'+key+' .sd-control__selected-value').html( selectedValueHTML );
                    $('.sd-controls .sd-control--'+key+' .sd-control__choices :radio[value="' + subvalue.code + '"]').prop('checked',true);
                }
            }
            
        }
    },
    disableZoom() {
        GeovinSD.api.updateSettingAsync('scene.camera.enableZoom', false);
    },
    enableZoom() {
        GeovinSD.api.updateSettingAsync('scene.camera.enableZoom', true);
    },
    showViewer() {
        $('#sd-wrapper').show();
        $('#sd-wrapper').css({'opacity':'1','pointerEvents':'auto'});
        $('body').addClass('noscroll');
        GeovinSD.activated = true;
        GeovinSD.visible = true;
    },
    closeViewer() {
        if ( GeovinSD.rendering === true ) {
            //we are working dont close
            //add a notice or delay to try again
        } else {
            GeovinSD.takeScreenshot();
            GeovinSD.visible = false;
            $('body').removeClass('noscroll');
        }
    },
    takeScreenshot() {
        console.log('taking screenshot');
        if ( ! GeovinSD.isBed() ) {
            var cameraRepositioned = true;
            var newSettings = JSON.parse(GeovinSD.cameraSettings);

            GeovinSD.api.scene.camera.updateAsync(newSettings).then(function(res){
                setTimeout(function(){
                    if ( cameraRepositioned ) {
                        datauri = GeovinSD.api.scene.getScreenshot();
                            GeovinSD.cropImage(datauri).then(function(res,rej){
                                var image = res;

                                $('.flex-active-slide').find('a').attr('href',image.url)
                                $('.flex-active-slide').find('img').attr('src', image.url )
                                //$('.flex-active-slide').find('img').attr('alt', $image_size.url )
                                $('.flex-active-slide').find('img').attr('srcset','')
                                $('.flex-active-slide').find('img').attr('data-src',image.url)
                                $('.flex-active-slide').find('img').attr('data-large_image',image.url);
                                $('.flex-active-slide').find('img').attr('title',$('.geovin-product-code').text());
                                $('.flex-control-thumbs li:nth-child(7) img').attr('src', image.url );//.attr('alt', $image_size.url );
                                GeovinSD.getImageDimensions(image.url).then(function(r,j){
                                    $image_size = r;
                                    $('.flex-active-slide').find('img').attr('data-large_image_width',$image_size.w);
                                    $('.flex-active-slide').find('img').attr('data-large_image_height',$image_size.h);
                                    $(document).trigger('update_cart_image');
                                });
                            })
                            
                        //}
                        
                    }
                },500)
            });
        } else {
            var cameraRepositioned = false;
            var mattressRemoved = false;
            GeovinSD.api.scene.addEventListener(GeovinSD.api.scene.EVENTTYPE.RENDER_BEAUTY_START, function(){
                if ( cameraRepositioned && mattressRemoved ) {
                    datauri = GeovinSD.api.scene.getScreenshot();
                        GeovinSD.cropImage(datauri).then(function(res,rej){
                            var image = res;
                            $('.flex-active-slide').find('a').attr('href',image.url)
                            $('.flex-active-slide').find('img').attr('src', image.url )
                            //$('.flex-active-slide').find('img').attr('alt', $image_size.url )
                            $('.flex-active-slide').find('img').attr('srcset','')
                            $('.flex-active-slide').find('img').attr('data-src',image.url)
                            $('.flex-active-slide').find('img').attr('data-large_image',image.url);
                            $('.flex-active-slide').find('img').attr('title',$('.geovin-product-code').text());
                            $('.flex-control-thumbs li:nth-child(7) img').attr('src', image.url );//.attr('alt', $image_size.url );
                            GeovinSD.getImageDimensions(image.url).then(function(r,j){
                                $image_size = r;
                                $('.flex-active-slide').find('img').attr('data-large_image_width',$image_size.w);
                                $('.flex-active-slide').find('img').attr('data-large_image_height',$image_size.h);
                                $(document).trigger('update_cart_image');
                            });
                        })
                        cameraRepositioned = false;
                        mattressRemoved = false;
                }
            });
            
            var newSettings = JSON.parse(GeovinSD.cameraSettings);
           
            GeovinSD.closeDrawers();
            GeovinSD.hideStorage();
            GeovinSD.hideMattress().then(function(){
                mattressRemoved = true;
                GeovinSD.api.scene.camera.updateAsync(newSettings).then(function(res){
                    cameraRepositioned = true;
                });
            });   
             
        }
    },
    cropImage(file) {
        return new Promise (function (resolved, rejected) {
            console.log('cropping image');
            var i = new Image();
            var canvas = document.createElement("canvas");
            var context = canvas.getContext('2d');

            canvas.width = canvas.height = 1024;

            i.onload = function(){

                
                var targetWidth = 1024;
                var targetHeight = 1024;

                if ( i.width < i.height ) {
                    //vertical image, width is smaller
                    var scale = targetWidth / i.width;
                } else {
                    //horizontal image, height is smaller
                    var scale = targetHeight / i.height;
                }
                var newWidth = i.width * scale;
                var newHeight = i.height * scale;
                var dx = -Math.abs( ( ( targetWidth - newWidth ) / 2 ) );
                var dy = -Math.abs( ( ( targetHeight - newHeight ) / 2 ) );

                var canvas = document.createElement("canvas");                  
                canvas.width  = 1024;
                canvas.height = 1024;
                    
                canvas.getContext("2d").drawImage(i, dx, dy, newWidth, newHeight );

                dataUrl = canvas.toDataURL('image/jpeg');
                resolved({url:dataUrl})
            };

            i.src = file
        })
    },
    getImageDimensions(file) {
      return new Promise (function (resolved, rejected) {
        var i = new Image();
        i.onload = function(){
          resolved({w: i.width, h: i.height})
        };
        i.src = file
      })
    },
    sortBedSize( a, b ) {
      if ( a[1].label === 'King' ){
        return -1;
      } else if ( b[1].label === 'King' && a[1].label === 'Queen' ) {
        return 1;
      } else if ( b[1].label === 'King' && a[1].label === 'Full' ) {
        return 1;
      } else if ( b[1].label === 'King' && a[1].label === 'Twin' ) {
        return 1;
      } else if ( b[1].label === 'Queen' && a[1].label === 'Full' ) {
        return 1;
      } else if ( b[1].label === 'Queen' && a[1].label === 'Twin' ) {
        return 1;
      } else if ( b[1].label === 'Full' && a[1].label === 'Twin' ) {
        return 1;
      } else {
        return -1;
      }

      return 0;

    },
    populateControls() {
        var controls = $('.sd-control');

        for ( i=0;i < controls.length; i++ ) {
            var attribute = $(controls[i]).data('control');
            var control_options = available_attributes[attribute];
            var markup = '<div class="sd-options__wrapper">';
            if ( typeof control_options === 'object' ) {
                var k = 0;
                var options_presort = attribute === 'dimensions' ? Object.entries(control_options).sort((a, b) => a[0].localeCompare(b[0])) : Object.entries(control_options);
                var options_sorted = typeof control_options.KKBE !== 'undefined' ? Object.entries(control_options).sort( GeovinSD.sortBedSize ) : options_presort;
                for (const [key, value] of options_sorted) {
                    k++;
                    if ( key.includes('-') || attribute === 'doors' || attribute === 'fabric' ) {
                        var keys = key.split('-');
                        var attributes = GeovinSD.attributeGroups[attribute];
                        var combo_codes = [];
                        for ( j = 0; j < attributes.length; j++ ) {
                            
                            var choice = GeovinSD.getCurrentChoiceForAttribute( attributes[j] );
                            combo_codes.push(choice);

                            if ( j+1 === attributes.length ) {
                              var combo_code = typeof combo_codes.join('-') !== 'undefined' ? combo_codes.join('-') : combo_codes[0];
                              var checked = key === combo_code ? 'checked' : '';
                            //   markup = markup + '<div class="sd-option"><input type="radio" name="'+ attribute +'" value="'+ key +'" '+ checked +' data-img="'+ value.image +'" /><label for="'+ key +'"><img src="'+ value.image +'"/><div>'+ value.label +' &#8212 '+ key +'</div></label></div>';

                              markup = markup + '<div class="sd-option"><input type="radio" name="'+ attribute +'" value="'+ key +'" '+ checked +' data-img="'+ value.image +'" /><label for="'+ key +'"><div class="quickview__icon"><img src="'+ value.image +'" class="sd-img" /><div class="quickview__details"><div class="label">'+ value.label +' &#8212 <span class="small-caps">'+key+'</span></div><img src="'+ value.image +'"/></div></div><div class="sd-label">'+ value.label +' &#8212 '+ key +'</div></label></div>';

                              
                              $(controls[i]).find('.sd-control__choices').html(markup)//.hide();
                              if ( checked === 'checked' ) {
                                var keyclass = $(controls[i]).data('control');
                                var icon = '<div class="quickview__icon"><svg class="icon-svg--view"><use xlink:href="#icon-view"></use></svg><div class="quickview__details"><div class="label">'+value.label+' &#8212 <span class="small-caps">'+key+'</span></div><img src="'+value.image+'"/></div></div>';
                                
                                $(controls[i]).find('.sd-control__selected-value').html( icon + value.label + ' &#8212 '+ key +' (selected)').data('thumb',value.image);
                                $('#tab-sd .'+keyclass+' .product-attribute-selected').html( icon + '<span class="js-selected-text">' + value.label + '&#8212 '+ combo_code + '</span>' );
                                if ( keyclass === 'doors' && combo_code === 'D00' ) {
                                    $('#tab-sd .'+keyclass).hide();
                                } else if ( keyclass === 'doors' ) {
                                    $('#tab-sd .'+keyclass).show();
                                }
                              }
                            }
                        }
                    } else {
                        var choice = GeovinSD.getCurrentChoiceForAttribute( attribute );
                        var checked = value.code === choice ? 'checked' : '';
                        markup = markup + '<div class="sd-option"><input type="radio" name="'+ attribute +'" value="'+ value.code +'" '+ checked +' /><label for="'+ value.code +'">'+ value.label +'</label></div>';
                        $(controls[i]).find('.sd-control__choices').html(markup);
                        $(controls[i]).find('.open-options').hide();
                        if ( checked === 'checked' ) {
                            $(controls[i]).find('.sd-control__selected-value').text(value.label + ' (selected)').hide();
                            var keyclass = $(controls[i]).data('control');
                            var icon = '<div class="quickview__icon"><svg class="icon-svg--view"><use xlink:href="#icon-view"></use></svg><div class="quickview__details"><div class="label">'+value.label+' &#8212 <span class="small-caps">'+key+'</span></div><img src="'+value.image+'"/></div></div>';

                            $('#tab-sd .'+keyclass+' .product-attribute-selected').html( '<span class="js-selected-text">' + value.label  + '&#8212 '+ value.code + '</span>' );
                            if ( keyclass === 'dimensions' && value.code === 'KKBE' ) {
                                    var bedSize = '<span class="bed-size"><strong>Bed Size:</strong> King</span>';
                                    $('#tab-sd .'+keyclass).prepend(bedSize);
                                } else if ( keyclass === 'dimensions' && value.code === 'QQBE' ) {
                                    $('#tab-sd .bed-size').remove();
                                    var bedSize = '<span class="bed-size"><strong>Bed Size:</strong> Queen</span>';
                                    $('#tab-sd .'+keyclass).prepend(bedSize);
                                } else if ( keyclass === 'dimensions' && value.code === 'FFBE' ) {
                                    $('#tab-sd .bed-size').remove();
                                    var bedSize = '<span class="bed-size"><strong>Bed Size:</strong> Full</span>';
                                    $('#tab-sd .'+keyclass).prepend(bedSize);
                                } else if ( keyclass === 'dimensions' && value.code === 'TTBE' ) {
                                    $('#tab-sd .bed-size').remove();
                                    var bedSize = '<span class="bed-size"><strong>Bed Size:</strong> Twin</span>';
                                    $('#tab-sd .'+keyclass).prepend(bedSize);
                                } else {
                                    var bedSize = '';
                                }
                            }
                    }
                    if ( Object.keys(control_options).length === k ) {
                        markup = markup + '</div>';
                        $(controls[i]).find('.sd-control__choices').html(markup);
;                    }
                }

            }
            if ( i === controls.length - 1 ) {
                $('.sd-curtain').addClass('open');
                $('.sd-controls__wrapper').focus();
            }
        }
    },
    openControls( control ) {
        $('.sd-close').hide();
        $('.sd-options-panel').html('<div class="sd-options-panel__inner"></div>');
        var innerPanel = $('.sd-options-panel__inner');
        var panel = $('.sd-options-panel');
        if ( panel.hasClass('open') ) {
          GeovinSD.closeControls().then(function(res,rej){
              control.addClass('sd-control--active');
              var choices_markup = control.find('.sd-control__choices').contents();
              innerPanel.html(choices_markup).prepend('<div class="close-options-panel"><div class="icon--arrow"></div><span>back</span></div>');
          });
          
        } else {
          control.addClass('sd-control--active');
          var choices_markup = control.find('.sd-control__choices').contents();
          panel.addClass('open');
          innerPanel.html(choices_markup).prepend('<div class="close-options-panel"><div class="icon--arrow"></div><span>back</span></div>');
        }
    },
    closeControls() {
      return new Promise(function(resolve,reject){
            var innerPanel = $('.sd-options-panel__inner');
            var panel = $('.sd-options-panel');
            var backBtn = panel.find('.close-options-panel');
            panel.removeClass('open');
            backBtn.remove();
            var panel_contents = innerPanel.contents();
            $('.sd-control--active').removeClass('sd-control--active').find('.sd-control__choices').html(panel_contents).promise().done(function(){
                innerPanel.remove();
                $('.sd-close').show();
                resolve('finished')
            });
      })
      
    },
    addEventListeners() {
        GeovinSD.api.scene.addEventListener(GeovinSD.api.scene.EVENTTYPE.RENDER_BEAUTY_START, function(){
            console.log('rendering beauty');
            GeovinSD.rendering = true;
            //$('.sd-wrapper').addClass('busy');
        })
        GeovinSD.api.scene.addEventListener(GeovinSD.api.scene.EVENTTYPE.RENDER_BEAUTY_END, function(){
            console.log('done rendering');
            GeovinSD.rendering = false;
            $('.sd-wrapper').removeClass('busy');
        })
        GeovinSD.api.scene.camera.addEventListener(GeovinSD.api.scene.camera.EVENTTYPE.CAMERA_END, function(data){
            console.log('camera movement ended');
            //$('.sd-wrapper').removeClass('busy');
        })
        GeovinSD.api.scene.camera.addEventListener(GeovinSD.api.scene.camera.EVENTTYPE.CAMERA_START, function(data){
            console.log('camera movement started');
            //$('.sd-wrapper').addClass('busy');
        })
        $('#sd-wrapper').on('click tap','.sd-option input + label',function(){
            $('.sd-wrapper').addClass('busy');
            input = $(this).siblings('input');
            input.trigger('click');
        })
        $('#sd-wrapper').on('click tap','.sd-option input',function(){
            $('.sd-wrapper').addClass('busy');
            var values = $(this).val().split('-');
            var groupName = $(this).attr('name');
            var attributes = GeovinSD.attributeGroups[groupName];
            var data = {};
            data[groupName] = {};
            for ( i = 0; i < values.length; i++ ) {
                var attribute = 'pa_' + attributes[i];
                var newValue = values[i];
                GeovinSD.updateParameter( attribute, newValue );
                data[groupName][attributes[i]] = {name: attribute, code: newValue};
                
                if ( i + 1 === values.length ) {
                    GeovinSD.updateCustomizationTabLabels(data);
                    $(document).trigger('update_attributes', [ data ]);
                    $(document).trigger('update_sku', [ data ]);
                }
            }
        })

        $('#sd-wrapper').on('click tap', '.close-options-panel', function(e) {
            GeovinSD.closeControls();
        } );

        $('.open-options').on('click tap',function(){
            $(this).parents('.sd-control').toggleClass('opened');
        })

        $('.sd-close').on('click tap',function(){
            GeovinSD.closeViewer();
        })

        $('#sd-wrapper').on('click tap', '#mattress', function(e){
            $('.sd-wrapper').addClass('busy');
            GeovinSD.toggleMattress();
        })

        $('#sd-wrapper').on('click tap', '#drawers', function(e){
            $('.sd-wrapper').addClass('busy');
            GeovinSD.toggleDrawers();
        })

        $('#sd-wrapper').on('click tap', '#storage', function(e){
            $('.sd-wrapper').addClass('busy');
            GeovinSD.toggleStorage();
        })

    }
    
}

$(document).on('initSD',function(){
    GeovinSD.init().then(function(res,rej){        
        if ( GeovinSD.activeShape !== '' && GeovinSD.activeWidth !== '' ) {
            GeovinSD.adjustCameraForShape( GeovinSD.activeShape, GeovinSD.activeWidth);
        }
        
        GeovinSD.getParameters(); //uncomment to turn on logging of params on load
        GeovinSD.populateControls();
        GeovinSD.addEventListeners();
        GeovinSD.rendering = false;
        GeovinSD.enableZoom();
    });
});
$(document).on('openSD',function(){
    GeovinSD.showViewer();
});
$(document).on( 'geovin-shapediver-update', function( e, data ) {
    GeovinSD.updateCustomizationTabLabels( data )
    for (const [key, value] of Object.entries(data)) {
        var newValue = '';
        if ( typeof value === 'object' ) {
            var subvalues = Object.values(value);
            for (const [subkey,subvalue] of Object.entries(value) ) {
                var attribute = 'pa_' + subkey;//.replace('_','-');
                var newValue = subvalue.code;
                GeovinSD.updateParameter( attribute, newValue );
            }
        } 
    } 
})







