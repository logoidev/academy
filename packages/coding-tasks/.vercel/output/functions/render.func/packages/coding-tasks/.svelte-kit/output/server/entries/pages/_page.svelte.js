import { c as create_ssr_component } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Welcome to Logoi Academy</h1>
<h2>Here are the results of coding challenges for students.</h2>

<a href="${"/vlad"}">Vlad</a>
<a href="${"/andrew"}">Andrew</a>`;
});
export {
  Page as default
};
