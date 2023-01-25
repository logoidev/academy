import { c as create_ssr_component } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-15i53nf{display:flex;justify-content:center;align-items:center;flex-direction:column;height:calc(100vh - 24px)}canvas.svelte-15i53nf{box-shadow:20px 10px 50px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"svelte-15i53nf"}"><h1>Snake</h1>
	<canvas id="${"canvas"}" class="${"svelte-15i53nf"}"></canvas>
</div>`;
});
export {
  Page as default
};
