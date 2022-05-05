import * as litHydrateSupportInstalled from "lit/experimental-hydrate-support.js";
import { hydrateShadowRoots } from "@webcomponents/template-shadowroot";

if (!HTMLTemplateElement.prototype.hasOwnProperty("shadowRoot")) {
  hydrateShadowRoots(document.body);
  document.body.removeAttribute("dsd-pending");
}

console.log(litHydrateSupportInstalled);

(litHydrateSupportInstalled as Promise<void>).then(
  () => import("./_site/_components/index.js")
);
