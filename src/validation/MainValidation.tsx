/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-unused-expressions */

import * as yup from 'yup';

const schema = yup
  .object({
    Density: yup.object({
      Minimum: yup
        .number()
        .positive('プラスの値を入れてください')

        .required('必須項目です')
        .typeError('数字を入力してください'),
      Plant: yup.array().of(
        yup.object().shape({
          value: yup
            .number()
            .typeError('Amount must be a number')
            .required('Please provide plan cost.')
            .positive('プラスの値を入れてください'),
        }),
      ),
    }),
    RegenerationCost: yup.array().of(
      yup.object().shape({
        value: yup
          .number()
          .typeError('Amount must be a number')
          .required('Please provide plan cost.')
          .positive('プラスの値を入れてください'),
      }),
    ),
    ThinningPercent: yup.array().of(
      yup.object().shape({
        value: yup
          .number()
          .typeError('Amount must be a number')
          .required('Please provide plan cost.')
          .positive('プラスの値を入れてください'),
      }),
    ),
    AnnualInterestPercent: yup
      .number()
      .positive('プラスの値を入れてください')
      .required('必須項目です')
      .typeError('数字を入力してください'),
    HarvestingAges: yup.array().of(
      yup.object().shape({
        value: yup
          .number()
          .typeError('Amount must be a number')
          .required('Please provide plan cost.')
          .positive('プラスの値を入れてください'),
      }),
    ),
    MaxNumOfHarvest: yup
      .number()
      .positive('プラスの値を入れてください')
      .required('必須項目です')
      .typeError('数字を入力してください'),
    Thinning: yup.object({
      YieldRate: yup
        .number()
        .positive('プラスの値を入れてください')

        .required('必須項目です')
        .typeError('数字を入力してください'),
      Cost: yup
        .number()
        .positive('プラスの値を入れてください')

        .required('必須項目です')
        .typeError('数字を入力してください'),
      StumpHeight: yup
        .number()
        .positive('プラスの値を入れてください')

        .required('必須項目です')
        .typeError('数字を入力してください'),
      LogLength: yup
        .number()
        .positive('プラスの値を入れてください')

        .required('必須項目です')
        .typeError('数字を入力してください'),
      LoggingPitch: yup
        .number()
        .positive('プラスの値を入れてください')

        .required('必須項目です')
        .typeError('数字を入力してください'),
      Diameter: yup.array().of(
        yup.object().shape({
          value: yup
            .number()
            .test(
              'increase-left-diamter',
              '左の値以下の数字を入力してください',
              (value, id) => {
                console.log(id);
                const diamterId = Number(id.path.replace(/[^0-9]/g, ''));
                if (diamterId !== 0 && 10) {
                  if (
                    // @ts-ignore
                    id.options.from[1].value.Diameter[diamterId - 1].value >
                    id.parent.value
                  ) {
                    return false;
                  }
                }

                return true;
              },
            )
            .test(
              'increase-right-diamter',
              '右の値以上の数字を入力してください',
              (value, id) => {
                console.log(id);
                const diamterId = Number(id.path.replace(/[^0-9]/g, ''));
                if (diamterId !== 10) {
                  if (
                    // @ts-ignore
                    id.options.from[1].value.Diameter[diamterId + 1].value <
                    id.parent.value
                  ) {
                    return false;
                  }
                }

                return true;
              },
            )
            .typeError('Amount must be a number')
            .required('Please provide plan cost.')
            .positive('プラスの値を入れてください'),
        }),
      ),
      Price: yup.array().of(
        yup.object().shape({
          value: yup
            .number()
            .typeError('Amount must be a number')
            .required('Please provide plan cost.')
            .positive('プラスの値を入れてください'),
        }),
      ),
    }),
    Clearcut: yup.object({
      YieldRate: yup
        .number()
        .positive('プラスの値を入れてください')

        .required('必須項目です')
        .typeError('数字を入力してください'),
      Cost: yup
        .number()
        .positive('プラスの値を入れてください')

        .required('必須項目です')
        .typeError('数字を入力してください'),
      StumpHeight: yup
        .number()
        .positive('プラスの値を入れてください')

        .required('必須項目です')
        .typeError('数字を入力してください'),
      LogLength: yup
        .number()
        .positive('プラスの値を入れてください')

        .required('必須項目です')
        .typeError('数字を入力してください'),
      LoggingPitch: yup
        .number()
        .positive('プラスの値を入れてください')

        .required('必須項目です')
        .typeError('数字を入力してください'),
      Diameter: yup.array().of(
        yup.object().shape({
          value: yup
            .number()
            .typeError('Amount must be a number')
            .required('Please provide plan cost.')
            .test(
              'increase-left-diamter',
              '左の値以下の数字を入力してください',
              (value, id) => {
                console.log(id);
                const diamterId = Number(id.path.replace(/[^0-9]/g, ''));
                if (diamterId !== 0 && 10) {
                  if (
                    // @ts-ignore
                    id.options.from[1].value.Diameter[diamterId - 1].value >
                    id.parent.value
                  ) {
                    return false;
                  }
                }

                return true;
              },
            )
            .test(
              'increase-right-diamter',
              '右の値以上の数字を入力してください',
              (value, id) => {
                console.log(id);
                const diamterId = Number(id.path.replace(/[^0-9]/g, ''));
                if (diamterId !== 10) {
                  if (
                    // @ts-ignore
                    id.options.from[1].value.Diameter[diamterId + 1].value <
                    id.parent.value
                  ) {
                    return false;
                  }
                }

                return true;
              },
            )
            .positive('プラスの値を入れてください'),
        }),
      ),
      Price: yup.array().of(
        yup.object().shape({
          value: yup
            .number()
            .typeError('Amount must be a number')
            .required('Please provide plan cost.')
            .positive('プラスの値を入れてください'),
        }),
      ),
    }),
  })
  .required();

export default schema;
