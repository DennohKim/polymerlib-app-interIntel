import { LitElement } from "lit-element";
import { html } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat.js';

class MyView3 extends LitElement {
  // Declare the properties of the element
  static get properties() {
    return {
      todos: { type: Array }, // An array of todo items
      sortedDictionary: { type: Object }, // The sorted object
    };
  }

  constructor() {
    super();
    this.todos = []; // Initialize the todos property as an empty array
    const dictionary = {
      34: "thirty-four",
      90: "ninety",
      91: "ninety-one",
      21: "twenty-one",
      61: "sixty-one",
      9: "nine",
      2: "two",
      6: "six",
      3: "three",
      8: "eight",
      80: "eighty",
      81: "eighty-one",
      "Ninety-Nine": "99",
      "nine-hundred": "900",
    };
    const sortedDictionary = {};

    Object.keys(dictionary)
      .sort((a, b) => {
        // Compare the keys as numbers if they are both numeric
        if (isNaN(a) && isNaN(b)) {
          return a - b;
        }
        // Compare the keys as strings if they are not numeric
        return a.localeCompare(b);
      })
      .forEach((key) => {
        // Add the sorted keys and values to the new object
        sortedDictionary[key] = dictionary[key];
      });

    this.sortedDictionary = sortedDictionary; // Set the sortedDictionary property with the sorted object

    console.log(sortedDictionary);
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
      ${this.todos.map(
        (todo) => html`
          <div class="card">
            <h2>${todo.title}</h2>
            <p>Complete: ${todo.completed}</p>
          </div>
        `
      )}

      <h1>Dictionary</h1>
      ${repeat(
        Object.keys(this.sortedDictionary),
        (key) => key,
        (key) => html`
          <div class="card">
            <h2>${key}: ${this.sortedDictionary[key]}</h2>
          </div>
        `
      )}
    `;
  }

  firstUpdated(changedProperties) {
    // Make a request to the specified URL
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        // Set the todos property with the response data
        this.todos = data;
      });
  }
}

customElements.define("my-view3", MyView3);
