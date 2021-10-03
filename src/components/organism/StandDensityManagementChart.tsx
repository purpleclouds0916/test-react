// eslint-disable-next-line
import React, { useMemo, useState, useCallback, useEffect } from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';

import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// eslint-disable-next-line
// @ts-ignore
// import { InlineMath } from 'react-katex';
import Select from 'react-select';

import StandDensityManagementData from '../../data/StandDensityManagementData.json';

const StandDensity = () => {
  const [value, setValue] = useState<string>('tohoku');
  //   const [update,setUpdata]=useState<boolean>(false)
  const options = useMemo(
    () => [
      // { value: 'tohoku-sugi', label: '東北地方 スギ林分密度管理図' },

      { value: 'tohoku', label: '東北地方' },
      { value: 'kyushuShikoku', label: '九州四国地方' },
    ],
    [],
  );

  const handleChange = useCallback((inputValue) => {
    setValue(inputValue.value); // eslint-disable-line
    // eslint-disable-next-line
  }, []); // eslint-disable-line

  // eslint-disable-next-line
  const H: Array<number> = [];
  // eslint-disable-next-line
  for (let index = 0; index < 4; index++) {
    // eslint-disable-next-line
    // @ts-ignore
    H[index] = StandDensityManagementData[value]['SH']['SDMD']['H'][index]; // eslint-disable-line
  }

  // eslint-disable-next-line
  const V: Array<number> = [];
  // eslint-disable-next-line
  for (let index = 0; index < 4; index++) {
    // eslint-disable-next-line
    // @ts-ignore
    V[index] = StandDensityManagementData[value]['SH']['SDMD']['V'][index]; // eslint-disable-line
  }

  // eslint-disable-next-line
  // @ts-ignore
  const NRf: number = StandDensityManagementData[value]['SH']['SDMD']['NRf']; // eslint-disable-line
  // eslint-disable-next-line
  const DBH: Array<number> = [];
  // eslint-disable-next-line
  for (let index = 0; index < 3; index++) {
    // eslint-disable-next-line
    // @ts-ignore
    DBH[index] = StandDensityManagementData[value]['SH']['SDMD']['DBH'][index]; // eslint-disable-line
  }
  console.log(DBH);

  // eslint-disable-next-line
  const HF: Array<number> = [];
  // eslint-disable-next-line
  for (let index = 0; index < 3; index++) {
    // eslint-disable-next-line
    // @ts-ignore
    HF[index] = StandDensityManagementData[value]['SH']['SDMD']['HF'][index]; // eslint-disable-line
  }

  useEffect(() => {
    // eslint-disable-next-line
    for (let index = 0; index < V.length; index++) {
      const name = `root_SDMD_V_${index}`;

      // eslint-disable-next-line
      const inputId = document.getElementById(name); // eslint-disable-line
      console.log(inputId);
      // eslint-disable-next-line
      // @ts-ignore
    //   inputId._valueTracker.setValue(''); // eslint-disable-line
      // eslint-disable-next-line
      // @ts-ignore
      inputId.value = V[index];
      //   eslint-disable-next-line
      //   @ts-ignore
      console.log(inputId.value);

      //    以下のコードがまとめれてされるため、上手く値が変更されない
      // eslint-disable-next-line
      // @ts-ignore
      inputId._valueTracker.setValue(''); // eslint-disable-line

      // eslint-disable-next-line
      // @ts-ignore
      inputId!.dispatchEvent(new Event('input', { bubbles: true })); // eslint-disable-line
    }
    // //   eslint-disable-next-line
    // V.map((num: number, index: number) => {
    //   const name = `root_SDMD_V_${index}`;

    //   // eslint-disable-next-line
    //   const inputId = document.getElementById(name); // eslint-disable-line
    //   console.log(inputId);
    //   // eslint-disable-next-line
    //   // @ts-ignore
    //   inputId._valueTracker.setValue(''); // eslint-disable-line
    //   // eslint-disable-next-line
    //   // @ts-ignore
    //   inputId.value = num;
    //   //   eslint-disable-next-line
    //   //   @ts-ignore
    //   console.log(inputId.value);

    //   //    以下のコードがまとめれてされるため、上手く値が変更されない
    //   // eslint-disable-next-line
    //   // @ts-ignore
    //   inputId._valueTracker.setValue(''); // eslint-disable-line

    //   // eslint-disable-next-line
    //   // @ts-ignore
    //   inputId!.dispatchEvent(new Event('input', { bubbles: true })); // eslint-disable-line
    // });
  });

  return (
    <div id="StandDensityManagement">
      <div className="SDMD-item">
        <p className="control-label">地域を選択する</p>
        {/* <p>{value}</p> */}
        <p className="field-description">
          地域を選択する事で、最適な林分密度管理図を利用することができるようになります。
        </p>
        <Select
          options={options}
          defaultValue={options[0]}
          onChange={handleChange}
          className=""
        />
      </div>
      <div className="katexs SDMD-item">
        <TeX>{String.raw`V = ({${V[0]}}H^{{${V[1]}}}{${
          V[2] > 0 ? `+${V[2]}` : `${V[2]}`
        }}H^{{${V[3]}}}/N)^{-1}`}</TeX>
        <br />
        <TeX>{String.raw`HF = {${HF[0]}}{${
          HF[1] > 0 ? `+${HF[1]}` : `${HF[1]}`
        }}H{${HF[2] > 0 ? `+${HF[2]}` : `${HF[2]}`}}\sqrt{N}\cdot{H/100}`}</TeX>
        <br />
        <TeX>{String.raw`G = V/HF`}</TeX>
        <br />
        <TeX>{String.raw`\overline{d}g = 200\sqrt{G/(\pi\cdot{N})}`}</TeX>
        <br />
        <TeX>{String.raw`\overline{d} = {{${DBH[0]}}}{${
          DBH[1] > 0 ? `+${DBH[1]}` : `${DBH[1]}`
        }}\overline{d}g{${
          typeof DBH[2] === 'undefined'
            ? ``
            : `${
                DBH[2] > 0
                  ? `+${DBH[2]}${String.raw`\sqrt{N}\cdot{H/100}`}`
                  : `${DBH[2]}${String.raw`\sqrt{N}\cdot{H/100}`}`
              }`
        }}`}</TeX>
        <br />
        <TeX>{String.raw`\overline{R\footnotesize{y}} = V/V\tiny {Rf}`}</TeX>
        <br />
        <TeX>{String.raw`{V\tiny{Rf}} = ({${V[0]}}H^{${V[1]}}{${
          V[2] > 0 ? `+${V[2]}` : `${V[2]}`
        }}H^{${V[3]}}/{N\tiny{Rf}})^{-1}`}</TeX>
        <br />
        <TeX>{String.raw`\log{N\tiny{Rf}} = {${NRf}}{${
          Math.round((V[3] - V[1]) * 100000) / 100000
        }}\log{H}`}</TeX>
      </div>
      <div className="SDMD-item SDMD-explanation-items">
        <div className="explanation-item">
          <TeX>{String.raw`{\text{V:ha当たり材積}}`}</TeX>
        </div>
        <div className="explanation-item">
          <TeX>{String.raw`{\text{H:上層樹高}}`}</TeX>
        </div>
        <div className="explanation-item">
          <TeX>{String.raw`{\text{N:ha当たり本数}}`}</TeX>
        </div>
        <div className="explanation-item">
          <TeX>{String.raw`{\text{HF:林分形状高}}`}</TeX>
        </div>
        <div className="explanation-item">
          <TeX>{String.raw`{\text{G:ha当たり断面積}}`}</TeX>
        </div>

        <div className="explanation-item">
          <TeX>{String.raw`\overline{d}g{\text{:断面積平均直径}}`}</TeX>
        </div>

        <div className="explanation-item">
          <TeX>{String.raw`\overline{d}{\text{:平均胸腔直径}}`}</TeX>
        </div>

        <div className="explanation-item">
          <TeX>{String.raw`\overline{R\footnotesize{y}}{\text{:収穫比数}}`}</TeX>
        </div>

        <div className="explanation-item">
          <TeX>{String.raw`{V\tiny{Rf}}{\text{:最多密度におけるha当たり材積}}`}</TeX>
        </div>

        <div className="explanation-item">
          <TeX>{String.raw`{N\tiny{Rf}}{\text{:最多密度におけるha当たり本数}}`}</TeX>
        </div>
      </div>
    </div>
  );
};

export default StandDensity;
