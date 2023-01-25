import { c as create_ssr_component, d as each, v as validate_component, f as add_attribute, e as escape } from "../../chunks/index.js";
import { S as STUDENT, a as STUDENT$1, C as CodeOnGithub } from "../../chunks/student.js";
const STUDENTS = [STUDENT, STUDENT$1];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Welcome to Logoi Academy</h1>

<h2>Here are the results of coding challenges for students.</h2>

${each(STUDENTS, (student) => {
    return `${student.completed_tasks.length ? `<p><a${add_attribute("href", `/${student.name.toLowerCase()}`, 0)}>${escape(student.name)}</a></p>` : ``}`;
  })}

${validate_component(CodeOnGithub, "CodeOnGithub").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
