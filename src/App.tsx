import { VFC } from 'react';
import { Growth } from './components/pages/Growth';
import './App.css';
import { WrapperDiv } from './functions/WrapperDiv';

const App: VFC = () => (
  <div className="App">
    <Growth />
  </div>
);

// 作成したdivのクラス名とまとめる要素のクラス名とどこの前にdivを挿入するのかを変数で追加できるようにする

window.onload = () => {
  const ClassManagement = 'Management';
  const appendClassManagement = 'form-card-item';
  const parentManagement =
    document.getElementsByClassName('form-items')[0].children[0];
  const beforeManagement = document.getElementsByClassName('Thinning')[0];

  WrapperDiv(
    ClassManagement,
    appendClassManagement,
    parentManagement,
    beforeManagement,
  );

  const ClassThinningFlexItem = 'Thinning-flex-item';
  const appendClassThinningFlexItem = 'Thinning-flex-items';
  const parentThinningFlexItem = document.getElementById('root_Thinning');
  const beforeThinningFlexItem = document.getElementsByClassName('Diameter')[0];

  WrapperDiv(
    ClassThinningFlexItem,
    appendClassThinningFlexItem,
    parentThinningFlexItem,
    beforeThinningFlexItem,
  );

  const ClassClearcutFlexItem = 'Clearcut-flex-item';
  const appendClassClearcutFlexItem = 'Clearcut-flex-items';
  const parentClearcutFlexItem = document.getElementById('root_Clearcut');
  const beforeClearcutFlexItem = document.getElementsByClassName('Diameter')[1];

  WrapperDiv(
    ClassClearcutFlexItem,
    appendClassClearcutFlexItem,
    parentClearcutFlexItem,
    beforeClearcutFlexItem,
  );

  const elementBefore = document.getElementsByClassName('Density')[0];
  const parents = document.getElementsByClassName('form-card-item')[0];
  const div = document.createElement('div');
  div.setAttribute('class', 'card-title');
  parents.insertBefore(div, elementBefore);
};

export default App;
