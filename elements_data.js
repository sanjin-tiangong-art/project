// 三晋天工 · 贴图资产双模自适应配置 (线上 http/https 走 WebP 极速并发，本地 file:// 自动切换 Base64 零跨域)
if (window.location.protocol !== 'file:') {
  window.ELEMENT_ASSETS = {
    "building2_layer2": "assets_elements/building2_layer2.webp",
    "building2_layer1": "assets_elements/building2_layer1.webp",
    "sky_bird_1": "assets_elements/sky_bird_1.webp",
    "sky_bird_2": "assets_elements/sky_bird_2.webp",
    "sky_bird_3": "assets_elements/sky_bird_3.webp",
    "hongyin": "assets_elements/hongyin.webp",
    "panorama_background": "assets_elements/panorama_background.webp",
    "clouds": "assets_elements/clouds.webp",
    "building": "assets_elements/building.webp",
    "building2": "assets_elements/building2.webp",
    "building3_bg": "assets_elements/building3_bg.webp",
    "building3": "assets_elements/building3.webp",
    "chaoyuantu": "assets_elements/chaoyuantu.webp",
    "tree_right": "assets_elements/tree_right.webp",
    "tree": "assets_elements/tree.webp",
    "tree_rock_left": "assets_elements/tree_rock_left.webp",
    "tree_rock_right": "assets_elements/tree_rock_right.webp",
    "crane_tight": "assets_elements/crane_tight.webp"
  };
}
