class aboutInfoComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    const src = this.getAttribute("src");
    const aboutInfoTitle = this.getAttribute("aboutInfoTitle");
    const aboutInfoDesc = this.getAttribute("aboutInfoDesc");
    this.innerHTML = `
                <link rel="stylesheet" href="../../Components/aboutInfoComponent/style.css">
                  <div class="aboutInfoContainer">
                    <img src="${src}" alt="">
                    <div>
                        <h3>${aboutInfoTitle}</h3>
                        <p>${aboutInfoDesc}</p>
                    </div>
                 </div>
        `;
  }
}
customElements.define("about-info-component", aboutInfoComponent);
