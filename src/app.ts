import { onReady } from "@xatom/core";
import { helloWorldRoutes } from "./routes";
import { Slider } from "./modules/slider";
import { gsapAnimations } from "./modules/gsap-animations";
import { headerScroll } from "./modules/header";


onReady(() => {
  helloWorldRoutes();
  Slider();
  gsapAnimations();
  headerScroll();
});

