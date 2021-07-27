export const form = `{
    "title": "林業の経営最適化シミレーション",
    "description": "経営に関する数値を入力するだけで、最適な経営方法を提案します",
    "type": "object",
    "properties": {
      "YieldModelType": {
        "type": "string",
        "title": "モデルタイプ"
      },
      "SAType": {
        "type": "number",
        "title": "SATタイプ"
      },
  
      "SDMD": {
        "title": "SDMDです",
        "type": "object",
        "properties": {
          "H": {
            "title": "H",
            "minItems": 1,
            "type": "array",
            "items": [
              {
                "type": "number",
                "default": 24.72
              },
              {
                "type": "number",
                "default": -1.066
              },
              {
                "type": "number",
                "default": -0.0348
              },
              {
                "type": "number",
                "default": 1
              }
            ]
          },
          "V": {
            "title": "V",
            "minItems": 1,
            "type": "array",
            "items": [
              {
                "type": "number",
                "default": 0.07156
              },
              {
                "type": "number",
                "default": -1.373859
              },
              {
                "type": "number",
                "default": 5062.0
              },
              {
                "type": "number",
                "default": -2.869785
              }
            ]
          },
          "NRF": {
            "type": "number",
            "title": "NRF",
            "default": 5.370947
          },
          "DBH": {
            "title": "DBH",
            "minItems": 1,
            "type": "array",
            "items": [
              {
                "type": "number",
                "default": 0.19385
              },
              {
                "type": "number",
                "default": 0.987164
              },
              {
                "type": "number",
                "default": -0.090657
              }
            ]
          },
          "HF": {
            "title": "HF",
            "minItems": 1,
            "type": "array",
            "items": [
              {
                "type": "number",
                "default": 0.650787
              },
              {
                "type": "number",
                "default": 0.417356
              },
              {
                "type": "number",
                "default": 0.138768
              }
            ]
          }
        }
      },
  
      "Density": {
        "type": "object",
        "title": "植栽密度",
        "properties": {
          "Plant": {
            "title": "Plant",
            "minItems": 1,
            "type": "array",
            "items": [
              {
                "title": "Plantの左側",
                "description": "Plantの左側の項目の説明が入ります",
                "type": "number",
                "default": 1000
              },
              {
                "title": "Plantの右側",
                "description": "Plantの右側の項目の説明が入ります",
                "type": "number",
                "default": 10000
              }
            ]
          },
          "Minimum": {
            "type": "number",
            "title": "MinimumAtClearcut",
            "description": "MinimumAtClearcutの説明が入ります",
            "default": 500
          }
        }
      },
      "RegenerationCost": {
        "title": "RegenerationCost",
        "minItems": 1,
        "type": "array",
        "items": [
          {
            "title": "植栽のコスト",
            "description": "植栽のコストの説明が入ります",
            "type": "number",
            "default": 928070
          },
          {
            "title": "植栽の本数",
            "description": "植栽の本数の説明が入ります",
            "type": "number",
            "default": 128.292
          }
        ]
      },
      "ThinningPercent": {
        "title": "間伐率の割合",
        "minItems": 2,
        "type": "array",
        "items": [
          {
            "title": "最小の間伐率",
            "description": "最小の間伐率の説明が入ります",
            "type": "number",
            "default": 0
          },
          {
            "title": "最大の間伐率",
            "description": "最大の間伐率の説明が入ります",
            "type": "number",
            "default": 50
          }
        ]
      },
      "AnnualInterestPercent": {
        "title": "とちきぼうか",
        "description": "とちきぼうかの説明が入ります",
        "type": "number",
        "title": "AnnualInterestPercent",
        "default": -0.090657
      },
      "HarvestingAges": {
        "title": "",
        "title": "HarvestingAges",
        "minItems": 3,
        "type": "array",
        "items": [
          {
            "title": "間伐を開始する林齢",
            "description": "植林後、一番最初の間伐をするまでの期間です.",
            "type": "number",
            "default": 10
          },
          {
            "title": "最大皆伐林齢",
            "description": "植林から皆伐までの期間です",
            "type": "number",
            "default": 110
          },
          {
            "title": "間伐期間",
            "description": "間伐の間隔の最小期間です。例えば、5年と設定すると、間伐後、5年間は間伐の作業が行われません",
            "type": "number",
            "default": 5
          }
        ]
      },
      "MaxNumOfHarvest": {
        "title": "間伐期間",
        "description": "間伐と皆伐の最大合計回数です。",
        "type": "number",
        "default": 10
      },
  
      "Thinning": {
        "type": "object",
        "title": "間伐材の費用計算について",
        "properties": {
          "YieldRate": {
            "type": "number",
            "title": "使える割合",
            "description": "伐採した木材のうち販売に使える割合",
            "default": 0.58
          },
          "Cost": {
            "type": "number",
            "title": "伐採費用",
            "description": "一回の間伐に必要な経費",
            "default": 5166
          },
          "StumpHeight": {
            "type": "number",
            "title": "切る高さ",
            "description": "どれくらいの高さで木を伐採するか",
            "default": 0.5
          },
          "LogLength": {
            "type": "number",
            "title": "材長",
            "description": "材長の説明が入ります",
            "default": 4.0
          },
          "LoggingPitch": {
            "type": "number",
            "title": "材長",
            "description": "より多くとる材長の説明が入ります",
            "default": 4.1
          },
          "Diameter": {
            "title": "Diameter",
            "minItems": 11,
            "type": "array",
            "items": [
              {
                "type": "number",
                "default": 5
              },
              {
                "type": "number",
                "default": 6
              },
              {
                "type": "number",
                "default": 15
              },
              {
                "type": "number",
                "default": 16
              },
              {
                "type": "number",
                "default": 18
              },
              {
                "type": "number",
                "default": 20
              },
              {
                "type": "number",
                "default": 22
              },
              {
                "type": "number",
                "default": 24
              },
              {
                "type": "number",
                "default": 28
              },
              {
                "type": "number",
                "default": 30
              },
              {
                "type": "number",
                "default": 255
              }
            ]
          },
          "Price": {
            "title": "Price",
            "minItems": 11,
            "type": "array",
            "items": [
              {
                "type": "number",
                "default": 0
              },
              {
                "type": "number",
                "default": 3000
              },
              {
                "type": "number",
                "default": 3000
              },
              {
                "type": "number",
                "default": 8000
              },
              {
                "type": "number",
                "default": 8000
              },
              {
                "type": "number",
                "default": 9500
              },
              {
                "type": "number",
                "default": 9500
              },
              {
                "type": "number",
                "default": 11500
              },
              {
                "type": "number",
                "default": 11500
              },
              {
                "type": "number",
                "default": 12500
              },
              {
                "type": "number",
                "default": 12500
              }
            ]
          }
        }
      },
  
      "Clearcut": {
        "type": "object",
        "title": "皆伐材の費用計算について",
        "properties": {
          "YieldRate": {
            "type": "number",
            "title": "伐採した木材のうち使える割合",
            "default": 0.58
          },
          "Cost": {
            "type": "number",
            "title": "伐採費用",
            "default": 5166
          },
          "StumpHeight": {
            "type": "number",
            "title": "切る高さ",
            "default": 0.5
          },
          "LogLength": {
            "type": "number",
            "title": "材長",
            "default": 4.0
          },
          "LoggingPitch": {
            "type": "number",
            "title": "材長",
            "default": 4.1
          },
          "Diameter": {
            "title": "Diameter",
            "minItems": 11,
            "type": "array",
            "items": [
              {
                "type": "number",
                "default": 5
              },
              {
                "type": "number",
                "default": 6
              },
              {
                "type": "number",
                "default": 15
              },
              {
                "type": "number",
                "default": 16
              },
              {
                "type": "number",
                "default": 18
              },
              {
                "type": "number",
                "default": 20
              },
              {
                "type": "number",
                "default": 22
              },
              {
                "type": "number",
                "default": 24
              },
              {
                "type": "number",
                "default": 28
              },
              {
                "type": "number",
                "default": 30
              },
              {
                "type": "number",
                "default": 255
              }
            ]
          },
          "Price": {
            "title": "Price",
            "minItems": 11,
            "type": "array",
            "items": [
              {
                "type": "number",
                "default": 0
              },
              {
                "type": "number",
                "default": 3000
              },
              {
                "type": "number",
                "default": 3000
              },
              {
                "type": "number",
                "default": 8000
              },
              {
                "type": "number",
                "default": 8000
              },
              {
                "type": "number",
                "default": 9500
              },
              {
                "type": "number",
                "default": 9500
              },
              {
                "type": "number",
                "default": 11500
              },
              {
                "type": "number",
                "default": 11500
              },
              {
                "type": "number",
                "default": 12500
              },
              {
                "type": "number",
                "default": 12500
              }
            ]
          }
        }
      },
  
      "SA": {
        "type": "object",
        "title": "やきなまし法の詳細設定です",
        "properties": {
          "NumRepeat": {
            "type": "number",
            "title": "何回繰り返すのか",
            "default": 40
          },
          "NumTempLevel": {
            "type": "number",
            "title": "温度について",
            "default": 100
          },
          "NumTotalLoopN": {
            "title": "間伐する回数",
            "minItems": 3,
            "type": "array",
            "items": [
              {
                "type": "number",
                "default": 1
              },
              {
                "type": "number",
                "default": 2
              },
              {
                "type": "number",
                "default": 7
              }
            ]
          },
          "NumTotalLoopPow": {
            "title": "上の回数に対して、10のPow乗",
            "minItems": 3,
            "type": "array",
            "items": [
              {
                "type": "number",
                "default": 2.6
              },
              {
                "type": "number",
                "default": 4.26
              },
              {
                "type": "number",
                "default": 5.75
              }
            ]
          },
          "StartTemp": {
            "title": "何度から始めるのか",
            "minItems": 4,
            "type": "array",
            "items": [
              {
                "type": "number",
                "default": 0
              },
              {
                "type": "number",
                "default": -0.6
              },
              {
                "type": "number",
                "default": 0.6
              },
              {
                "type": "number",
                "default": 5
              }
            ]
          },
          "DiffTemp": {
              "title": "何度で終わるのか",
              "minItems": 4,
              "type": "array",
              "items": [
                {
                  "type": "number",
                  "default": 0
                },
                {
                  "type": "number",
                  "default": -3.8
                },
                {
                  "type": "number",
                  "default": 1.4
                },
                {
                  "type": "number",
                  "default": 5
                }
              ]
            },
            "DistScale": {
              "title": "どれくらい強く鉄を叩くのか",
              "minItems": 4,
              "type": "array",
              "items": [
                {
                  "type": "number",
                  "default": 0
                },
                {
                  "type": "number",
                  "default": -1.2
                },
                {
                  "type": "number",
                  "default": 0.6
                },
                {
                  "type": "number",
                  "default": 5
                }
              ]
            }
        }
      }
    }
  }`
  
  export default form;