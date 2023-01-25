import { c as create_ssr_component } from "../../../../chunks/index.js";
const CELL_SIZE = 20;
const INITIAL_SNAKE_LENGTH = 3;
new Array(INITIAL_SNAKE_LENGTH).fill(1).map((_, i) => ({ x: (INITIAL_SNAKE_LENGTH - i) * CELL_SIZE, y: 0 }));
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-nmnl5o{display:flex;justify-content:center;align-items:center;height:calc(100vh - 24px);flex-direction:column}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"svelte-nmnl5o"}"><h1>Snake</h1>
	<canvas id="${"canvas"}"></canvas>
</div>`;
});
export {
  Page as default
};
