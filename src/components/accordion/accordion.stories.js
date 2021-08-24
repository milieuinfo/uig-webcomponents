import { html } from "lit-html";
import "../accordion";

export default {
  title: "custom-elements/vl-accordion",
  args: {
    toggleText: "Lees meer over de onderwijsdoelstelling",
    content: `Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.`,
  },
};

export const Default = ({ toggleText, content }) => html`<vl-accordion
  data-vl-toggle-text=${toggleText}
>
  ${content}
</vl-accordion>`;
