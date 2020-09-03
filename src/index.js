// export class AnujVarma extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = `<h1>Explo Site</h1>`;
//   }
// }

// customElements.define("anuj-varma", AnujVarma);

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as retargetEvents from "react-shadow-dom-retarget-events";
import ReactComponent from "./react-component";

// class AnujV2 extends HTMLElement {
//   constructor() {
//      super();
//  }
// }

export class AnujV2 extends HTMLElement {
  // static get observedAttributes() {
  //   return ["title"];
  // }

  // mountPoint: HTMLSpanElement;
  mountPoint;
  // title: string;
  // title;

  createCollapsed(title) {
    return React.createElement(
      ReactComponent,
      { title },
      React.createElement("slot")
    );
  }

  connectedCallback() {
    this.mountPoint = document.createElement("span");
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(this.mountPoint);

    const title = this.getAttribute("title");
    ReactDOM.render(this.createCollapsed(title), this.mountPoint);
    retargetEvents(shadowRoot);
  }

  // attributeChangedCallback(name, oldValue, newValue) {
  //   if (name === "title") {
  //     ReactDOM.render(this.createCollapsed(newValue), this.mountPoint);
  //   }
  // }
}

// window.customElements.define('anuj-v2', AnujV2);
