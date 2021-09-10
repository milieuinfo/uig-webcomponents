import { html } from "lit";
import { version } from "../../package.json";
import "../../src/components/content-header";
import "../../src/components/typography";
import "../../src/components/template";
import "../../src/components/grid";
import "../../src/components/titles";
import "../../src/components/introduction";

export const docsWrap = ({ title, children }) => html`<vl-template>
  <div slot="main">
    <vl-content-header>
      <img
        is="vl-image"
        slot="image"
        sizes="100vw"
        src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        srcset="
          https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80   400w,
          https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80   700w,
          https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80   800w,
          https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80 1000w,
          https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80 1300w,
          https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80 1400w,
          https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,
          https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80 1900w,
          https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w
        "
        alt=""
      />
      <a slot="context-link" href="https://www.vlaanderen.be">
        uig-webcomponents
      </a>
      <a slot="title-link" href="https://www.vlaanderen.be"> ${version} </a>
    </vl-content-header>
    <section is="vl-region">
      <div is="vl-layout">
        <div is="vl-grid" data-vl-is-stacked>
          <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
            <div is="vl-grid" data-vl-is-stacked>
              <div is="vl-column" data-vl-size="8">
                <h1 is="vl-h1" style="margin-bottom: 3rem">${title}</h1>
                <p is="vl-introduction">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ac turpis accumsan, maximus purus sit amet, suscipit elit.
                  Vivamus egestas a diam a luctus. Sed et viverra nibh. Nam sed
                  ipsum felis.
                </p>
              </div>
            </div>
          </div>
          <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
            <vl-typography>
              <hr />
            </vl-typography>
          </div>
        </div>
      </div>
    </section>
    ${children}
  </div>
</vl-template>`;
