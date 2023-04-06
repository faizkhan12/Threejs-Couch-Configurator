import { proxy } from "valtio";

const state = proxy({
  intro: true, // are we in a home page
  color: "#EFBD48",
  isLogoTexture: false, // are we displaying logo in a t-shirt
  isFullTexture: false,
  logoDecal: "./threejs.png", // initial logo in a t-shirt
  fullDecal: "./react.png", // initial full texture shirt
});

export default state;
