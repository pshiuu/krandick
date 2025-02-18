import { onReady } from "@xatom/core";
import { helloWorldRoutes } from "./routes";
import { Slider } from "./modules/slider";
import { gsapAnimations } from "./modules/gsap-animations";

onReady(() => {
  helloWorldRoutes();
  Slider();
  gsapAnimations();
});

