import { createViewport, createSession } from "@shapediver/viewer";

(async () => {
  // create a viewport
  const viewport = await createViewport({
    canvas: document.getElementById("canvas") as HTMLCanvasElement,
    id: "myViewport"
  });
  // create a session
  const session = await createSession({
    ticket:
      "xxxxxxxx-xxxx-xxxx-xxxxxxxxxxxx", // replace with your session ticket
    modelViewUrl: "https://sdeuc1.eu-central-1.shapediver.com",
    id: "mySession"
  });

  // read out the parameter with the specific name
  const lengthParameter = session.getParameterByName("Length")[0];

  // update the value
  lengthParameter.value = 6;

  // and customize the scene
  await session.customize();
})();