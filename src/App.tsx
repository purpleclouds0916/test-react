import { VFC } from 'react';

import { JsonForm } from './components/pages/JsonForm';
import './App.css';
import WrapperDiv from './functions/WrapperDiv';
import LineChart from './components/organism/LineChart';
import StandDensity from './components/organism/StandDensityManagementChart';

const App: VFC = () => (
  <div className="App">
    <JsonForm />
    <StandDensity />
    <LineChart description="" title="" loggingMethod="Thinning" />
    <LineChart
      description="皆伐材の木材価格の説明が入ります"
      title="皆伐材の木材価格"
      loggingMethod="Clearcut"
    />
  </div>
);

// react-json-formのDOMツリーを修正するコード
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

  const elementBefore = document.getElementsByClassName('Density')[0];
  const parents = document.getElementsByClassName('form-card-item')[1];
  const div = document.createElement('div');
  div.setAttribute('class', 'card-title');
  parents.insertBefore(div, elementBefore);

  //  間伐のグラフの移動
  // eslint-disable-next-line
  // @ts-ignore
  const ThinningparentElement: any = document.getElementById('root_Thinning'); // eslint-disable-line
  // eslint-disable-next-line
  // @ts-ignore
  const ThinningLineChartElement: any =
    document.getElementsByClassName('lineChart')[0]; // eslint-disable-line
  ThinningLineChartElement.setAttribute('class', 'lineChart'); // eslint-disable-line
  ThinningparentElement.appendChild(ThinningLineChartElement); // eslint-disable-line

  // 皆伐のグラフの移動
  // eslint-disable-next-line
  // @ts-ignore
  const ClearcutparentElement: any = document.getElementById('root_Clearcut'); // eslint-disable-line
  // eslint-disable-next-line
  // @ts-ignore
  const ClearcutLineChartElement: any =
    document.getElementsByClassName('lineChart')[1]; // eslint-disable-line
  ClearcutLineChartElement.setAttribute('class', 'lineChart'); // eslint-disable-line
  ClearcutparentElement.appendChild(ClearcutLineChartElement); // eslint-disable-line

  //  SDMDの要素の移動
  // eslint-disable-next-line
  // @ts-ignore
  const SDMDparentElement: any = document.getElementById('root_SDMD'); // eslint-disable-line
  // eslint-disable-next-line
  // @ts-ignore
  // eslint-disable-next-line
  const SDMDLineChartElement: any = document.getElementById(
    'StandDensityManagement', // eslint-disable-line
  );

  SDMDparentElement.appendChild(SDMDLineChartElement); // eslint-disable-line

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
};

export default App;
