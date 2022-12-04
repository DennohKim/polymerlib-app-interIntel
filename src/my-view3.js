

import { LitElement, html } from 'lit-element';


class MyView3 extends LitElement {
  render() {
    return html`
      

      <div class="card">
        <div class="circle">3</div>
        <h1>View Three</h1>
        <p>Modus commodo minimum eum te, vero utinam assueverit per eu.</p>
        <p>Ea duis bonorum nec, falli paulo aliquid ei eum.Has at minim mucius aliquam, est id tempor laoreet.Pro saepe pertinax ei, ad pri animal labores suscipiantur.</p>
      </div>
    `;
  }

  firstUpdated(changedProperties) {
     // Make a request to the specified URL
     fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
     .then(response => response.json()) // Parse the response as JSON
     .then(data => {
       // Display the response data in the console
       console.log(data);
     });
    
  }
}

customElements.define('my-view3', MyView3);
