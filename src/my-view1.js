/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { LitElement, html } from "lit";


export class MyView1 extends LitElement {
  render() {
    return html`
      <form @submit=${this._onSubmit}>
        <label>Name: <input type="text" name="name"></label>
        <label>Email: <input type="email" name="email"></label>
        <label>Phone: <input type="tel" name="phone"></label>
        <button type="submit">Submit</button>
      </form>
    `;
  }

  _onSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form element
    const form = event.target;

    // Get the user's input from the form
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const phone = form.elements.phone.value;

    // Display the user's input in the console
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);

    // Display the user's input in an alert box
    alert(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}`);
  }
 
}

customElements.define("my-view1", MyView1);
