

import { LitElement, html } from 'lit-element';


class MyView3 extends LitElement {
  // Declare the properties of the element
  static get properties() {
    return {
      todos: { type: Array } // An array of todo items
    };
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
