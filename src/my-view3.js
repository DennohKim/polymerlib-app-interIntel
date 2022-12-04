

import { LitElement, html } from 'lit-element';


class MyView3 extends LitElement {
  // Declare the properties of the element
  static get properties() {
    return {
      todos: { type: Array } // An array of todo items
    };
  }

  constructor() {
    super();
    this.todos = []; // Initialize the todos property as an empty array
  }

  render() {
    return html`
      <style>
        /* CSS styles for the todo cards */
        .card {
          margin: 10px;
          padding: 10px;
          border: 1px solid #ccc;
        }
      </style>
      <h1>My Todos</h1>
      ${this.todos.map(todo => html`
        <div class="card">
          <h2>${todo.title}</h2>
          <p>Complete: ${todo.completed}</p>
        </div>
      `)}
    `;
  }


  firstUpdated(changedProperties) {
     // Make a request to the specified URL
     fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
     .then(response => response.json()) // Parse the response as JSON
     .then(data => {
      // Set the todos property with the response data
      this.todos = data;
    });
    
  }
}

customElements.define('my-view3', MyView3);
