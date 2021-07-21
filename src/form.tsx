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
        "title": "Densityです",
        "properties": {
          "Plant": {
            "title": "Plant",
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
              }
            ]
          },
          "Minimum": {
            "type": "number",
            "title": "MinimumAtClearcut",
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
            "type": "number",
            "default": 24.72
          },
          {
            "type": "number",
            "default": -1.066
          }
        ]
      },
      "ThinningPercent": {
        "title": "ThinningPercent",
        "minItems": 2,
        "type": "array",
        "items": [
          {
            "type": "number",
            "default": 24.72
          },
          {
            "type": "number",
            "default": -1.066
          }
        ]
      },
      "AnnualInterestPercent": {
        "type": "number",
        "title": "AnnualInterestPercent",
        "default": -0.090657
      },
      "HarvestingAges": {
        "title": "HarvestingAges",
        "minItems": 3,
        "type": "array",
        "items": [
          {
            "title": "間伐する最初の林齢",
            "type": "number",
            "default": 10
          },
          {
            "title": "最大皆伐林齢",
            "type": "number",
            "default": 110
          },
          {
            "title": "間伐期間",
            "type": "number",
            "default": 5
          }
        ]
      },
      "MaxNumOfHarvest": {
        "type": "number",
        "title": "MaxNumOfHarvest",
        "default": 10
      },
  
      "Thinning": {
        "type": "object",
        "title": "間伐です",
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
  
      "Clearcut": {
        "type": "object",
        "title": "皆伐です",
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