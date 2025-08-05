var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createViewport, createSession } from "@shapediver/viewer";
(() => __awaiter(void 0, void 0, void 0, function* () {
    // create a viewport
    const viewport = yield createViewport({
        canvas: document.getElementById("canvas"),
        id: "myViewport"
    });
    // create a session
    const session = yield createSession({
        ticket: "79df891798a23a8596475596ac590e1c21ff8596b8e23e6422fbf92749a525094fec8d6ab10dc8a8d37ee378f05b5d6fd87f7079791157c6112abfd56a5861280ea3ffef8d7884c224cd37ea09c4a8f365abbfe0ca134e81f357c80fc6225bbc03b2373bcffc5d-e2c3ae5be7eab340af68c56078c2a936",
        modelViewUrl: "https://sdeuc1.eu-central-1.shapediver.com",
        id: "mySession"
    });
    // read out the parameter with the specific name
    const lengthParameter = session.getParameterByName("Length")[0];
    // update the value
    lengthParameter.value = 6;
    // and customize the scene
    yield session.customize();
}))();
