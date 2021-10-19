/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-plusplus */
import React, { useCallback } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

import Headers from './Header';
import '../../App.css';

import StandDensityManagementData from '../../data/StandDensityManagementData.json';

type FormValues = {
  region: string;
  SDMD: {
    // eslint-disable-next-line camelcase
    NRf: number;
    H: { value: number }[];
    V: { value: number }[];
    DBH: { value: number }[];
    HF: { value: number }[];
  };
};

const Form = () => {
  const { register, handleSubmit, control, setValue, watch } =
    useForm<FormValues>({
      defaultValues: {
        SDMD: {
          H: [
            { value: StandDensityManagementData.tohoku.SH.SDMD.H[0] },
            { value: StandDensityManagementData.tohoku.SH.SDMD.H[1] },
            { value: StandDensityManagementData.tohoku.SH.SDMD.H[2] },
            { value: StandDensityManagementData.tohoku.SH.SDMD.H[3] },
          ],
          V: [
            { value: StandDensityManagementData.tohoku.SH.SDMD.V[0] },
            { value: StandDensityManagementData.tohoku.SH.SDMD.V[1] },
            { value: StandDensityManagementData.tohoku.SH.SDMD.V[2] },
            { value: StandDensityManagementData.tohoku.SH.SDMD.V[3] },
          ],
          NRf: StandDensityManagementData.tohoku.SH.SDMD.NRf,
          DBH: [
            { value: StandDensityManagementData.tohoku.SH.SDMD.DBH[0] },
            { value: StandDensityManagementData.tohoku.SH.SDMD.DBH[1] },
            { value: StandDensityManagementData.tohoku.SH.SDMD.DBH[2] },
          ],
          HF: [
            { value: StandDensityManagementData.tohoku.SH.SDMD.HF[0] },
            { value: StandDensityManagementData.tohoku.SH.SDMD.HF[1] },
            { value: StandDensityManagementData.tohoku.SH.SDMD.HF[2] },
          ],
        },
      },
    });

  const { fields: HFields } = useFieldArray({
    control,
    name: 'SDMD.H',
  });
  const { fields: VFields } = useFieldArray({ control, name: 'SDMD.V' });
  // eslint-disable-next-line
  const { fields: DBHFields, remove: DBHRemove } = useFieldArray({
    control,
    name: 'SDMD.DBH',
  });
  // eslint-disable-next-line
  const { fields: HFFields, remove: HFRemove } = useFieldArray({
    control,
    name: 'SDMD.HF',
  });

  const onSetValue = useCallback(
    (e) => {
      //  配列の数に応じて、不要なフォームを削除する
      if (
        // eslint-disable-next-line
        // @ts-ignore
        StandDensityManagementData[e.target.value].SH.SDMD.DBH.length === 2 &&
        DBHFields.length === 3
      ) {
        DBHRemove(2);
      }
      if (
        // eslint-disable-next-line
        // @ts-ignore
        StandDensityManagementData[e.target.value].SH.SDMD.HF.length === 2 &&
        HFFields.length === 3
      ) {
        HFRemove(2);
      }

      // SDMDのH,V,DBH,HFは配列なので、まとめて代入
      // eslint-disable-next-line
      const SDMD_Property: string[] = ['H', 'V', 'DBH', 'HF'];
      // eslint-disable-next-line camelcase
      SDMD_Property.map((property) => {
        // eslint-disable-next-line
        // @ts-ignore
        StandDensityManagementData[e.target.value].SH.SDMD[property].map(
          // eslint-disable-next-line array-callback-return
          (value: number, index: number) => {
            // eslint-disable-next-line
            // @ts-ignore
            setValue(`SDMD.${property}.${index}.value`, value);
          },
        );
      });
      // SDMDのNRfの値は配列ではないので、個別で代入
      setValue(
        `SDMD.NRf`,
        // eslint-disable-next-line
        // @ts-ignore
        StandDensityManagementData[e.target.value].SH.SDMD.NRf,
      );
    },
    [DBHFields.length, setValue],
  );
  const watchAllFields = watch();
  console.log('watchAllFields', watchAllFields);
  // eslint-disable-next-line camelcase
  const watchSdmd: any = watch('SDMD');
  console.log(watchSdmd.DBH);

  const onSubmit = (data: FormValues) => {
    const DataSdmdH: number[] = [];
    data.SDMD.H.map((value) => {
      DataSdmdH.push(value.value);
    });
    const DataSdmdV: number[] = [];
    data.SDMD.V.map((value) => {
      DataSdmdV.push(value.value);
    });
    const DataSdmdDBH: number[] = [];
    data.SDMD.DBH.map((value) => {
      DataSdmdDBH.push(value.value);
    });
    const DataSdmdHF: number[] = [];
    data.SDMD.HF.map((value) => {
      DataSdmdHF.push(value.value);
    });

    const Json = {
      //  JAVAのAPIのためにデータの形を変える
      SH: {
        YieldModelType: 'S',
        SAType: '2021',

        SDMD: {
          H: DataSdmdH,
          V: DataSdmdV,
          NRf: data.SDMD.NRf,
          DBH: DataSdmdDBH,
          HF: DataSdmdHF,
        },
      },
    };
    // console.log(JSON.stringify(data.SDMD))
    console.log(JSON.stringify(Json));
  };

  return (
    <div>
      <Headers description="経営に関する数値を入力するだけで、最適な経営方法を提案します" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('SDMD.NRf')} />
        <ul>
          {HFields.map((field, index) => (
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            <li key={field.id}>
              <input {...register(`SDMD.H.${index}.value` as const)} />
            </li>
          ))}
        </ul>
        <ul>
          {VFields.map((field, index) => (
            <li key={field.id}>
              <input {...register(`SDMD.V.${index}.value` as const)} />
            </li>
          ))}
        </ul>
        <ul>
          {DBHFields.map((field, index) => (
            <li key={field.id}>
              <input {...register(`SDMD.DBH.${index}.value` as const)} />
            </li>
          ))}
        </ul>
        <ul>
          {HFFields.map((field, index) => (
            <li key={field.id}>
              <input {...register(`SDMD.HF.${index}.value` as const)} />
            </li>
          ))}
        </ul>
        <select
          {...register('region')}
          onChange={(e) => {
            onSetValue(e);
          }}
        >
          <option value="tohoku">tohoku</option>
          <option value="kyushuShikoku">kyushuShikoku</option>
        </select>
        <br />

        {watchSdmd ? (
          <>
            {/* // eslint-disable-next-line jsx-a11y/label-has-associated-control */}            
            {/* {console.log("出力します",watchSdmd.DBH)} */}
            {/* {watchSdmd.DBH} */}
    
          </>
        ) : (
          ''
        )}

        <br />
        <TeX>{String.raw`G = V/HF`}</TeX>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
