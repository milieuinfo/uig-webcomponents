import { html } from "lit-html";
import "../side-sheet";
import styles from "./styles.scss";

const defaultArgs = {
  enableSwipe: false,
  left: false,
  absolute: false,
  toggleText: "Toggle side sheet",
};

export default {
  title: "custom-elements/vl-side-sheet",
  args: { ...defaultArgs },
  argTypes: {
    enableSwipe: {
      name: "data-vl-enable-swipe",
      type: { summary: "boolean" },
      description:
        "Attribute wordt gebruikt om aan te duiden dat swipe functie toegelaten is.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    left: {
      name: "data-vl-left",
      type: { summary: "boolean" },
      description:
        "Attribute wordt gebruikt om aan te duiden dat de side-sheet de linkererand van het scherm moet plaatsen.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    absolute: {
      name: "data-vl-absolute",
      type: { summary: "boolean" },
      description:
        "Attribute wordt gebruikt om aan te duiden dat de side-sheet absoluut gepositioneerd wordt.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    toggleText: {
      name: "data-vl-toggle-text",
      type: { summary: "string" },
      description:
        "Attribute wordt gebruikt om de toggle knop tekst te wijzigen. (data-vl-visually-hidden element voor screen readers.)",
      table: {
        defaultValue: { summary: "" },
      },
    },
  },
};

const stylesheet = html`<style>
  ${styles}
</style>`;

export const Default = (props) => html`
  ${stylesheet}
  <button
    id="vl-side-sheet-toggle-button"
    is="vl-button"
    type="button"
    onclick="document.getElementById('vl-side-sheet').toggle();"
  >
    Toggle</button
  ><button
    id="vl-side-sheet-open-button"
    is="vl-button"
    type="button"
    onclick="document.getElementById('vl-side-sheet').open();"
  >
    Open</button
  ><button
    id="vl-side-sheet-close-button"
    is="vl-button"
    type="button"
    onclick="document.getElementById('vl-side-sheet').close();"
  >
    Close</button
  ><button
    id="vl-side-sheet-open-button-with-close-listener"
    is="vl-button"
    type="button"
    onclick="document.getElementById('vl-side-sheet-open-button-with-close-listener').innerText='Waiting for close';document.getElementById('vl-side-sheet').open(); document.getElementById('vl-side-sheet').onClose(() => { document.getElementById('vl-side-sheet-open-button-with-close-listener').innerText='Open with close listener';})"
  >
    Open with close listener
  </button>
  <vl-side-sheet
    id="vl-side-sheet"
    ?data-vl-enable-swipe=${props.enableSwipe}
    ?data-vl-absolute=${props.absolute}
    ?data-vl-left=${props.left}
    data-vl-toggle-text=${props.toggleText}
  >
    <h2 is="vl-h2">Lorem ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum
      urna ante. Integer eu sem mollis, ornare libero nec, pulvinar augue. Nunc
      ac rhoncus ipsum. Mauris vitae elementum erat. Donec gravida hendrerit
      magna, quis feugiat felis sodales quis. Sed tempor ornare elit, non
      aliquam urna maximus imperdiet. Suspendisse finibus ullamcorper dictum.
      Sed vehicula tortor quis dignissim tincidunt. Maecenas turpis ante,
      blandit sed efficitur eu, varius vitae nibh. Vivamus porttitor mi in massa
      elementum sollicitudin. Cras id porta nisi, vel pulvinar neque. Mauris
      sodales mi sem, sit amet fringilla tellus ultrices et. Quisque sed
      interdum mauris. Suspendisse rutrum maximus ornare. Morbi sed vestibulum
      magna, a tincidunt mi. Aliquam in imperdiet diam.
    </p>
    <p>
      Nulla mattis eget mi at mattis. Donec ut nisi ipsum. Sed placerat, augue
      vel dapibus blandit, nulla purus hendrerit orci, ut maximus ligula quam at
      sapien. Nunc efficitur augue est, ac laoreet libero blandit in. Aliquam
      non sagittis libero. Fusce posuere magna venenatis, facilisis magna quis,
      dictum risus. In nulla augue, efficitur congue porta sit amet, convallis
      eu justo. Etiam facilisis maximus dolor, a scelerisque sapien fringilla
      non. Quisque vestibulum mauris erat, vel ultrices massa dictum sit amet.
      Integer nec bibendum arcu, sit amet pretium turpis.
    </p>
    <p>
      Vivamus ligula diam, lobortis eget ultricies vitae, varius id arcu. Sed id
      mauris sed augue ultricies luctus. Donec pulvinar a sapien quis posuere.
      Suspendisse non varius dui. Nullam eu posuere neque. Vivamus eget felis
      turpis. Curabitur tortor ante, vulputate vel quam ut, posuere mattis
      ipsum. Maecenas vel metus tortor. Quisque id turpis est. Donec est eros,
      laoreet vel metus id, tempor pulvinar eros. Nam sed semper eros. Aenean
      placerat tellus ex, ac ultricies dui ornare ac. Suspendisse eget semper
      risus. Nullam eleifend leo justo, eu rhoncus erat lacinia quis. Nam
      finibus nunc sit amet justo interdum dignissim.
    </p>
    <p>
      Donec iaculis purus leo. Aliquam pulvinar magna vitae dolor varius auctor.
      Sed dapibus convallis est, non pharetra felis eleifend nec. Donec erat ex,
      tempus in sem quis, imperdiet gravida justo. Morbi sem purus, efficitur
      eget massa ut, molestie placerat orci. Phasellus sollicitudin convallis
      augue, ut tincidunt nulla faucibus ut. Praesent ullamcorper erat sit amet
      nisi venenatis eleifend. Vestibulum vehicula tristique ipsum, vel placerat
      tortor maximus eu. Phasellus mauris purus, semper vulputate maximus sit
      amet, faucibus eget risus. Sed in imperdiet dui, vel suscipit nibh. Nunc
      ac lectus tempus, venenatis mauris non, ornare nunc. Cras at nibh nec sem
      vestibulum facilisis. Curabitur et elit hendrerit, ullamcorper nibh vitae,
      eleifend augue. Aliquam imperdiet eros quis pulvinar suscipit.
    </p>
    <p>
      In dapibus, est eu eleifend vehicula, purus arcu consequat nulla, accumsan
      viverra mi massa vel metus. Vestibulum ut nunc viverra, pellentesque urna
      et, consectetur metus. Quisque bibendum diam non eros porta, non volutpat
      leo commodo. Morbi odio nulla, tempus non lobortis ac, imperdiet vitae
      sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
      per inceptos himenaeos. Fusce ac sodales eros. In hac habitasse platea
      dictumst.
    </p>
  </vl-side-sheet>
`;
