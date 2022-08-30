class Slider {
  constructor(elem, options) {
    this.DOM = {};
    this.DOM.slider = document.querySelector(elem);
    this.page = 0;
    this.total = null;

    // デフォルト
    this.defaultOptions = {
      duration: 5000,
    };

    // オプション
    this.options = Object.assign(this.defaultOptions, options);

    this._init();
  }


  // 初期化メソッド
  _init() {
    if ( !this.DOM.slider ) {
      return false;
    }


    // スライダーのトータル
    this.total = this.DOM.slider.children.length;


    window.addEventListener("load", () => {
      this._setPage();
    });

  }

  // 前のページを取得
  _getPrev() {
    return this.page === 0 ? this.total - 1 : this.page - 1;
  }

  // 次のページを取得
  _getNext() {
    return this.page >= this.total - 1 ? 0 : this.page + 1;
  }

  // ページ遷移
  _setPage() {

    // クラス削除
    Array.from(this.DOM.slider.children).forEach((elem) => {
      elem.classList.remove("is-sliderPrev");
      elem.classList.remove("is-sliderActive");
      elem.classList.remove("is-sliderNext");
    });

    // クラスを付与する
    this.DOM.slider.children[this._getPrev()].classList.add("is-sliderPrev");
    this.DOM.slider.children[this.page].classList.add("is-sliderActive");
    this.DOM.slider.children[this._getNext()].classList.add("is-sliderNext");

    // 自動再生
    this._startPlay();

  }

  // 自動再生の開始
  _startPlay() {
    setTimeout(() => {
      if (this.page < this.total - 1) {
        this.page++;
      } else {
        this.page = 0;
      }

      this._setPage();
    }, this.options.duration);
  }
}

new Slider(".js-heroSlider", {
  duration: 5000,
});
