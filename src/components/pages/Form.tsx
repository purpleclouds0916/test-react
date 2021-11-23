/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/no-cycle */
/* eslint-disable array-callback-return */

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../validation/MainValidation';

import 'katex/dist/katex.min.css';
import Headers from './Header';
import './Form.css';
import StandDensityManagementData from '../../data/StandDensityManagementData.json';
import Management from '../organism/ManagementForm';
import DensityManagement from '../organism/DensityManagement';
import LoggingCostCalculator from '../organism/LoggingCostCalculator';

export type FormValues = {
  firstName: string;
  age: number;
  region: string;
  SDMD: {
    NRf: number;
    H: { value: number }[];
    V: { value: number }[];
    DBH: { value: number }[];
    HF: { value: number }[];
  };

  Density: { Plant: { value: number }[]; Minimum: number };
  RegenerationCost: { value: number }[];
  ThinningPercent: { value: number }[];
  AnnualInterestPercent: number;
  HarvestingAges: { value: number }[];
  MaxNumOfHarvest: number;
  Thinning: {
    YieldRate: number;
    Cost: number;
    StumpHeight: number;
    LogLength: number;
    LoggingPitch: number;
    Diameter: { value: number }[];
    Price: { value: number }[];
  };
  Clearcut: {
    YieldRate: number;
    Cost: number;
    StumpHeight: number;
    LogLength: number;
    LoggingPitch: number;
    Diameter: { value: number }[];
    Price: { value: number }[];
  };
};

// interface IFormInputs {
//   firstName: string;
//   age: number;
// }

const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
    clearErrors,
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: yupResolver(schema),
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
      Density: { Plant: [{ value: 1000 }, { value: 10000 }], Minimum: 500 },
      RegenerationCost: [{ value: 928070 }, { value: 128.292 }],
      ThinningPercent: [{ value: 0 }, { value: 50 }],
      AnnualInterestPercent: -0.090657,
      HarvestingAges: [{ value: 10 }, { value: 110 }, { value: 5 }],
      MaxNumOfHarvest: 10,
      Thinning: {
        YieldRate: 0.58,
        Cost: 5166,
        StumpHeight: 0.5,
        LogLength: 4,
        LoggingPitch: 4.1,
        Diameter: [
          { value: 5 },
          { value: 6 },
          { value: 15 },
          { value: 16 },
          { value: 18 },
          { value: 20 },
          { value: 22 },
          { value: 24 },
          { value: 28 },
          { value: 30 },
          { value: 40 },
        ],
        Price: [
          { value: 0 },
          { value: 3000 },
          { value: 3000 },
          { value: 8000 },
          { value: 8000 },
          { value: 9500 },
          { value: 9500 },
          { value: 11500 },
          { value: 11500 },
          { value: 12500 },
          { value: 12500 },
        ],
      },
      Clearcut: {
        YieldRate: 0.58,
        Cost: 5166,
        StumpHeight: 0.5,
        LogLength: 4,
        LoggingPitch: 4.1,
        Diameter: [
          { value: 5 },
          { value: 6 },
          { value: 15 },
          { value: 16 },
          { value: 18 },
          { value: 20 },
          { value: 22 },
          { value: 24 },
          { value: 28 },
          { value: 30 },
          { value: 40 },
        ],
        Price: [
          { value: 0 },
          { value: 3000 },
          { value: 3000 },
          { value: 8000 },
          { value: 8000 },
          { value: 9500 },
          { value: 9500 },
          { value: 11500 },
          { value: 11500 },
          { value: 12500 },
          { value: 12500 },
        ],
      },
    },
  });

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
        Density: {
          Plant: [data.Density.Plant[0].value, data.Density.Plant[1].value],
          Minimum: data.Density.Minimum,
        },
        RegenerationCost: [
          data.RegenerationCost[0].value,
          data.RegenerationCost[1].value,
        ],
        ThinningPercent: [
          data.ThinningPercent[0].value,
          data.ThinningPercent[1].value,
        ],
        AnnualInterestPercent: data.AnnualInterestPercent,
        HarvestingAges: [
          data.HarvestingAges[0].value,
          data.HarvestingAges[1].value,
          data.HarvestingAges[2].value,
        ],
        MaxNumOfHarvest: data.MaxNumOfHarvest,
        Thinning: {
          YieldRate: data.Thinning.YieldRate,
          Cost: data.Thinning.Cost,
          StumpHeight: data.Thinning.StumpHeight,
          LogLength: data.Thinning.LogLength,
          LoggingPitch: data.Thinning.LoggingPitch,
          Diameter: [
            data.Thinning.Diameter[0].value,
            data.Thinning.Diameter[1].value,
            data.Thinning.Diameter[2].value,
            data.Thinning.Diameter[3].value,
            data.Thinning.Diameter[4].value,
            data.Thinning.Diameter[5].value,
            data.Thinning.Diameter[6].value,
            data.Thinning.Diameter[7].value,
            data.Thinning.Diameter[8].value,
            data.Thinning.Diameter[9].value,
            data.Thinning.Diameter[10].value,
          ],
          Price: [
            data.Thinning.Price[0].value,
            data.Thinning.Price[1].value,
            data.Thinning.Price[2].value,
            data.Thinning.Price[3].value,
            data.Thinning.Price[4].value,
            data.Thinning.Price[5].value,
            data.Thinning.Price[6].value,
            data.Thinning.Price[7].value,
            data.Thinning.Price[8].value,
            data.Thinning.Price[9].value,
            data.Thinning.Price[10].value,
          ],
        },
        Clearcut: {
          YieldRate: data.Clearcut.YieldRate,
          Cost: data.Clearcut.Cost,
          StumpHeight: data.Clearcut.StumpHeight,
          LogLength: data.Clearcut.LogLength,
          LoggingPitch: data.Clearcut.LoggingPitch,
          Diameter: [
            data.Clearcut.Diameter[0].value,
            data.Clearcut.Diameter[1].value,
            data.Clearcut.Diameter[2].value,
            data.Clearcut.Diameter[3].value,
            data.Clearcut.Diameter[4].value,
            data.Clearcut.Diameter[5].value,
            data.Clearcut.Diameter[6].value,
            data.Clearcut.Diameter[7].value,
            data.Clearcut.Diameter[8].value,
            data.Clearcut.Diameter[9].value,
            data.Clearcut.Diameter[10].value,
          ],
          Price: [
            data.Clearcut.Price[0].value,
            data.Clearcut.Price[1].value,
            data.Clearcut.Price[2].value,
            data.Clearcut.Price[3].value,
            data.Clearcut.Price[4].value,
            data.Clearcut.Price[5].value,
            data.Clearcut.Price[6].value,
            data.Clearcut.Price[7].value,
            data.Clearcut.Price[8].value,
            data.Clearcut.Price[9].value,
            data.Clearcut.Price[10].value,
          ],
        },
      },
    };
    console.log(JSON.stringify(Json));
    // console.log(JSON.stringify(data));
  };

  return (
    <div>
      <Headers description="経営に関する数値を入力するだけで、最適な経営方法を提案します" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <DensityManagement
          register={register}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
          watch={watch}
        />
        <Management
          register={register}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
          watch={watch}
          errors={errors}
        />
        <LoggingCostCalculator
          register={register}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
          watch={watch}
          loggingMethod="Thinning"
          errors={errors}
          clearErrors={clearErrors}
        />
        <LoggingCostCalculator
          register={register}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
          watch={watch}
          loggingMethod="Clearcut"
          errors={errors}
          clearErrors={clearErrors}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
