import { c as create_ssr_component } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h3>Vlad</h3>

<h4>Canvas:</h4>
<a href="${"/vlad/tetris"}">Tetris</a>
<a href="${"/vlad/snake"}">Snake</a>

`;
});
export {
  Page as default
};
