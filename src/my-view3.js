import { LitElement, html } from 'lit-element';

class MyView3 extends LitElement {
  render() {
    return html`
      <style>
        /* CSS animations and transitions */
        .card {
          /* Add a transition effect when hovering over the card */
          transition: transform 0.3s;
        }
        .card.animated {
          /* Scale up the card when the 'animated' class is added */
          transform: scale(1.1);
        }
        .image {
          /* Fade in the image when it is loaded */
          opacity: 0;
          transition: opacity 0.3s;
        }
        .image.loaded {
          /* Set the image's opacity to 1 when it is loaded */
          opacity: 1;
        }
      </style>
      <div class="card" @click=${this._onCardClick}>
        <img class="image" src="https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" @load=${this._onImageLoad}>
        <h1>My Element</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <button @click=${this._onButtonClick}>Animate</button>
    `;
  }

  _onCardClick(event) {
    // Add the 'animated' class to the card to trigger the animation
    event.target.classList.add('animated');
  }

  _onImageLoad(event) {
    // Add the 'loaded' class to the image when it is loaded
    event.target.classList.add('loaded');
  }

  _onButtonClick() {
    // Get the card element
    const card = this.shadowRoot.querySelector('.card');

    // Add the 'animated' class to the card to trigger the animation
    card.classList.add('animated');
  }
}
customElements.define('my-view3', MyView3);