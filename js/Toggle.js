class Toggle {
  constructor(selector, target) {
    this.btn = document.querySelector(selector);
    this.target = document.querySelector(target);
    this.objectName = selector.substring(4);

    this.btn.addEventListener("click", this._toggle.bind(this));
  }

  _toggle() {
    // aria-expanded 属性の切り替え
    const isExpanded = this.btn.getAttribute("aria-expanded") !== "false";
    this.btn.setAttribute("aria-expanded", !isExpanded);

    this.target.classList.toggle(`is-${this.objectName}Active`);
    this.target.classList.toggle("is-fixedActive");
  }
}

new Toggle(".js-drawer", "html");
