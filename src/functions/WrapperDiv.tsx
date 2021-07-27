export const WrapperDiv = (WhereclassName: string, appendClassName: string, parentElement: any, CreateBeforeElement: any = null) => {
    // 囲む要素の作成
    const div = document.createElement('div');
    // 全てのdiv要素を取得
    const divs = document.getElementsByTagName('div');

    // クラスの割り当て
    div.setAttribute('class', appendClassName);

    // 指定したクラス名に一致するdivsの要素を配列で返す ①
    const ClassMatchedToDiv = []; 
    for (let i = 0; i < divs.length; i++) {　      // eslint-disable-line
      if (divs[i].classList.contains(WhereclassName)) {
        ClassMatchedToDiv.push(i);
      }
    }

    // fragmentの作成
    const fragment = document.createDocumentFragment();
    //  ①で取得した配列を元に、fragmentsの配列にdiv要素を入れる
    const fragments = [];
    for (let i = 0; i < ClassMatchedToDiv.length; i++) {       // eslint-disable-line
      fragments.push(divs[ClassMatchedToDiv[i]]);
    }
    // 全ての要素をfragmentでつなげる
    fragments.map((i) => { // eslint-disable-line
      fragment.appendChild(i);
    });
    
    div.appendChild(fragment);
    // 最後に、任意の親要素につける
    parentElement.insertBefore(div, CreateBeforeElement);  // eslint-disable-line
  }

  export default WrapperDiv;