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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SDV = window.SDV;
const camera_defaults_json_1 = __importDefault(require("../camera-defaults.json"));
class GeovinSD {
    constructor(sd_ticket) {
        this.initial_parameter_values = {};
        this.sd_ticket = "";
        this.initialized = false; // it is loaded and ready
        this.activated = false; // we have loaded the current settings to see
        this.visible = false; // we can see it
        this.rendering = false; // it's processing information
        this.currentSession = null;
        this.currentViewport = null;
        this.parameters = null;
        this.activeScene = "";
        this.activeWidth = "";
        this.activeShape = "";
        //this.init(sd_ticket);
        this.sd_ticket = sd_ticket;
        //this.initial_parameter_values = values;
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
            this.availableScenes = this.currentViewport.lightScenes;
            this.activeScene = this.currentViewport.lightScene;
            //console.log('light scenes',this.availableScenes,this.activeScene);
            $('.sd-curtain span').text('Applying selections ...');
            $('.loading-bar__inner').css({ width: '66%' });
            $('.loading-bar__inner').text('66%');
            const task_token = yield SDV.addListener(SDV.EVENTTYPE.TASK.TASK_END, (task) => {
                //console.log('task token',task_token,task );
                if (task.type === 'session_customization') {
                    const rendering_token = SDV.addListener(SDV.EVENTTYPE.RENDERING.BEAUTY_RENDERING_FINISHED, (render) => {
                        //console.log('event token',rendering_token,render );
                        this.rendering = false;
                        $(document).trigger('populate-controls-ready');
                        SDV.removeListener(rendering_token);
                        SDV.removeListener(task_token);
                    });
                }
            });
            yield this.loadInitialValues(values);
            console.log('setting activated');
            this.activated = true;
            this.adjustCamera();
            // ****NEXT figure out how to get the item to move for it's shape
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
    adjustCamera() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('adjusting camera', this.activeShape, this.activeWidth, camera_defaults_json_1.default);
            const camera = this.currentViewport.camera;
            console.log('camera', camera);
            camera.autoAdjust = true;
            camera.zoomToFactor = 1.4;
            camera.enableZoom = false;
            yield this.currentViewport.render();
        });
    }
    createSession(sd_ticket) {
        return __awaiter(this, void 0, void 0, function* () {
            this.rendering = true;
            const session = yield SDV.createSession({
                ticket: sd_ticket,
                // "79df891798a23a8596475596ac590e1c21ff8596b8e23e6422fbf92749a525094fec8d6ab10dc8a8d37ee378f05b5d6fd87f7079791157c6112abfd56a5861280ea3ffef8d7884c224cd37ea09c4a8f365abbfe0ca134e81f357c80fc6225bbc03b2373bcffc5d-e2c3ae5be7eab340af68c56078c2a936",
                modelViewUrl: "https://sdeuc1.eu-central-1.shapediver.com",
                id: "mySession",
                //initialParameterValues: this.initial_parameter_values,
            });
            this.currentSession = session;
        });
    }
    loadInitialValues(values) {
        return __awaiter(this, void 0, void 0, function* () {
            this.rendering = true;
            const keys = Object.keys(values);
            yield keys.forEach((key) => __awaiter(this, void 0, void 0, function* () {
                //console.log(key,values[key as keyof typeof values]);
                yield this.setParameterChoice(key, values[key]);
            }));
        });
    }
    findParameterChoiceforValue(parameter, newValue) {
        const choices = parameter.choices;
        for (const [key, value] of Object.entries(choices)) {
            //console.log(key,value,newValue);
            if (value === newValue || value.includes(newValue)) {
                //console.log('found',key);
                return key;
            }
        }
        return null;
    }
    getParameterChoice(parameter_name) {
        //console.log(this.currentSession)
        const parameter = this.currentSession.getParameterByName(parameter_name)[0];
        //console.log('parameter',parameter);
        return parameter.choices[parameter.value];
    }
    setParameterChoice(parameter_name, newValue) {
        return __awaiter(this, void 0, void 0, function* () {
            if (parameter_name === 'Code-01') {
                this.activeShape = newValue;
            }
            if (parameter_name === 'Code-03') {
                this.activeWidth = newValue;
            }
            this.rendering = true;
            console.log('setting parameter', parameter_name, newValue);
            const parameter = yield this.currentSession.getParameterByName(parameter_name)[0];
            //console.log('parameter',parameter);
            const choice = this.findParameterChoiceforValue(parameter, newValue);
            //console.log('choice',choice);
            parameter.value = choice;
            yield this.currentSession.customize();
        });
    }
}
/*
class CameraDefaults {

}*/ 
