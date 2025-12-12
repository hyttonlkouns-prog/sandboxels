// realistic_fire.js
// Temperature-driven realistic fire: orange -> yellow -> white.
if (!elements) { alert("Elements API not found."); }
elements.realistic_fire = {
  color: ["#ff6b00","#ff9b1a","#ffd24d","#fff4cc","#ffffff"],
  behavior: [
    "XX|M1|XX",
    "M1|CH:realistic_fire%0.7|M1",
    "XX|M1|XX"
  ],
  tick: function(pixel) {
    if (!pixel.temp) pixel.temp = 800;
    // make it hotter if it has fuel around (approx)
    if (pixel.temp < 2500) pixel.temp += 5;
    // color by temperature (rough mapping)
    if (pixel.temp < 1000) pixel.color = "#ff6b00";
    else if (pixel.temp < 1400) pixel.color = "#ff9b1a";
    else if (pixel.temp < 1800) pixel.color = "#ffd24d";
    else if (pixel < 2200) pixel.color = "#fff4cc";
    else pixel.color = "#ffffff";
    // slight upward movement
    if (Math.random() < 0.5) pixel.y -= 1;
  },
  temp: 1000,
  state: "gas",
  category: "energy",
  burn: true,
  burnTime: 100,
  hidden: false,
  glow: "#ffcc66"
};
