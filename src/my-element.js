import { LitElement, html } from "lit";
import './shared-styles.js';


export class MyElement extends LitElement {
  render() {
    return html`
    

       <div class="card">
        <div class="circle">2</div>
        <h1>View 2</h1>
        <p>Modus commodo minimum eum te, vero utinam assueverit per eu.</p>
        <p>Ea duis bonorum nec, falli paulo aliquid ei eum.Has at minim mucius aliquam, est id tempor laoreet.Pro saepe pertinax ei, ad pri animal labores suscipiantur.</p>
      </div>
    `;
  }

  
 
}

customElements.define("my-element", MyElement);