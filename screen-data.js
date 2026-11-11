window.SCREEN_DATA = {
  "date": "2026-11-11",
  "capturedAt": "2026-11-11T17:28:37+08:00",
  "source": "新浪 A 股行情与腾讯历史日线",
  "marketCount": 5350,
  "limitUpCount": 89,
  "capPassCount": 62,
  "hardExcludedCount": 25,
  "candidateCount": 37,
  "exceptionCount": 19,
  "rules": {
    "floatMarketCapYi": [
      30,
      250
    ],
    "aKillScope": "仅当前首板",
    "aKillMethod": "连续至少两个涨停后，断板日下跌超过5%、高开后盘中回落超过5%，或断板后两日累计下跌超过8%。",
    "resonance": "分钟级共振尚未接入，当前仅保留二板以上梯队例外。"
  },
  "candidates": [
    {
      "symbol": "sh603366",
      "code": "603366",
      "name": "日出东方",
      "price": 11.97,
      "changePercent": 10.018,
      "turnoverRate": 1.14871,
      "amount": 111795012.0,
      "floatMarketCapYi": 97.32,
      "totalMarketCapYi": 97.32,
      "lookbackDays": 521,
      "boardHeight": 4,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-11-04",
          "runEnd": "2024-11-08",
          "runLength": 5,
          "breakDate": "2024-11-11",
          "evidence": [
            "断板当日下跌 -8.20%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2024-11-12",
          "runEnd": "2024-11-18",
          "runLength": 5,
          "breakDate": "2024-11-19",
          "evidence": [
            "断板日高开 10.07% 后盘中回落 -7.68%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600327",
      "code": "600327",
      "name": "大东方",
      "price": 6.53,
      "changePercent": 9.933,
      "turnoverRate": 11.70218,
      "amount": 675630365.0,
      "floatMarketCapYi": 57.78,
      "totalMarketCapYi": 57.78,
      "lookbackDays": 521,
      "boardHeight": 4,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-11-20",
          "runEnd": "2024-11-22",
          "runLength": 3,
          "breakDate": "2024-11-25",
          "evidence": [
            "断板当日下跌 -10.12%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2025-11-14",
          "runEnd": "2025-11-17",
          "runLength": 2,
          "breakDate": "2025-11-18",
          "evidence": [
            "断板日高开 5.70% 后盘中回落 -9.86%",
            "断板后两日累计下跌 -11.73%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600715",
      "code": "600715",
      "name": "文投控股",
      "price": 3.14,
      "changePercent": 10.175,
      "turnoverRate": 24.43404,
      "amount": 2177443333.0,
      "floatMarketCapYi": 89.88,
      "totalMarketCapYi": 127.48,
      "lookbackDays": 521,
      "boardHeight": 3,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-10-27",
          "runEnd": "2026-10-29",
          "runLength": 3,
          "breakDate": "2026-10-30",
          "evidence": [
            "断板当日下跌 -10.13%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002708",
      "code": "002708",
      "name": "光洋股份",
      "price": 26.59,
      "changePercent": 10.012,
      "turnoverRate": 18.02035,
      "amount": 2371175384.0,
      "floatMarketCapYi": 135.51,
      "totalMarketCapYi": 149.46,
      "lookbackDays": 521,
      "boardHeight": 3,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-12-03",
          "runEnd": "2024-12-04",
          "runLength": 2,
          "breakDate": "2024-12-05",
          "evidence": [
            "断板后两日累计下跌 -10.35%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-10-26",
          "runEnd": "2026-10-29",
          "runLength": 4,
          "breakDate": "2026-10-30",
          "evidence": [
            "断板当日下跌 -8.69%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002931",
      "code": "002931",
      "name": "锋龙股份",
      "price": 53.08,
      "changePercent": 10.01,
      "turnoverRate": 6.17655,
      "amount": 661944110.0,
      "floatMarketCapYi": 107.53,
      "totalMarketCapYi": 115.98,
      "lookbackDays": 521,
      "boardHeight": 3,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh603706",
      "code": "603706",
      "name": "东方环宇",
      "price": 24.43,
      "changePercent": 9.995,
      "turnoverRate": 8.90263,
      "amount": 389247994.0,
      "floatMarketCapYi": 46.27,
      "totalMarketCapYi": 46.27,
      "lookbackDays": 521,
      "boardHeight": 3,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002623",
      "code": "002623",
      "name": "亚玛顿",
      "price": 23.33,
      "changePercent": 9.995,
      "turnoverRate": 0.43511,
      "amount": 19554879.0,
      "floatMarketCapYi": 44.94,
      "totalMarketCapYi": 45.04,
      "lookbackDays": 521,
      "boardHeight": 3,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz300147",
      "code": "300147",
      "name": "*ST香雪",
      "price": 6.35,
      "changePercent": 13.191,
      "turnoverRate": 5.42367,
      "amount": 213684666.0,
      "floatMarketCapYi": 41.76,
      "totalMarketCapYi": 41.99,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 4.5,
      "aKillEvents": [
        {
          "runStart": "2024-09-27",
          "runEnd": "2024-10-08",
          "runLength": 3,
          "breakDate": "2024-10-09",
          "evidence": [
            "断板当日下跌 -19.40%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2024-10-28",
          "runEnd": "2024-10-30",
          "runLength": 3,
          "breakDate": "2024-10-31",
          "evidence": [
            "断板后两日累计下跌 -17.83%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-10-27",
          "runEnd": "2026-10-28",
          "runLength": 2,
          "breakDate": "2026-10-29",
          "evidence": [
            "断板当日下跌 -5.45%",
            "断板后两日累计下跌 -15.04%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "live"
    },
    {
      "symbol": "sz002425",
      "code": "002425",
      "name": "凯撒文化",
      "price": 3.83,
      "changePercent": 10.057,
      "turnoverRate": 16.37001,
      "amount": 569453884.0,
      "floatMarketCapYi": 35.24,
      "totalMarketCapYi": 36.64,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-08-04",
          "runEnd": "2026-08-06",
          "runLength": 3,
          "breakDate": "2026-08-07",
          "evidence": [
            "断板当日下跌 -8.90%",
            "断板后两日累计下跌 -13.35%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz000678",
      "code": "000678",
      "name": "襄阳轴承",
      "price": 21.19,
      "changePercent": 10.021,
      "turnoverRate": 37.3948,
      "amount": 3450850094.0,
      "floatMarketCapYi": 97.39,
      "totalMarketCapYi": 97.39,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-03-10",
          "runEnd": "2025-03-13",
          "runLength": 4,
          "breakDate": "2025-03-14",
          "evidence": [
            "断板当日下跌 -6.72%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2025-03-17",
          "runEnd": "2025-03-20",
          "runLength": 4,
          "breakDate": "2025-03-21",
          "evidence": [
            "断板当日下跌 -10.00%",
            "断板后两日累计下跌 -18.99%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-09-24",
          "runEnd": "2026-09-30",
          "runLength": 4,
          "breakDate": "2026-10-08",
          "evidence": [
            "断板当日下跌 -5.04%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh601595",
      "code": "601595",
      "name": "上海电影",
      "price": 46.83,
      "changePercent": 10.007,
      "turnoverRate": 6.97084,
      "amount": 1369903395.0,
      "floatMarketCapYi": 209.89,
      "totalMarketCapYi": 209.89,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-02-09",
          "runEnd": "2026-02-10",
          "runLength": 2,
          "breakDate": "2026-02-11",
          "evidence": [
            "断板日高开 2.63% 后盘中回落 -11.67%",
            "断板当日下跌 -9.35%",
            "断板后两日累计下跌 -12.18%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh605255",
      "code": "605255",
      "name": "天普股份",
      "price": 61.01,
      "changePercent": 10.007,
      "turnoverRate": 1.72285,
      "amount": 137305886.0,
      "floatMarketCapYi": 81.8,
      "totalMarketCapYi": 81.8,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-08-22",
          "runEnd": "2025-09-23",
          "runLength": 15,
          "breakDate": "2025-10-16",
          "evidence": [
            "断板当日下跌 -10.01%",
            "断板后两日累计下跌 -19.01%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-12-29",
          "runEnd": "2025-12-30",
          "runLength": 2,
          "breakDate": "2026-01-12",
          "evidence": [
            "断板当日下跌 -10.00%",
            "断板后两日累计下跌 -19.00%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-07-14",
          "runEnd": "2026-07-15",
          "runLength": 2,
          "breakDate": "2026-07-16",
          "evidence": [
            "断板当日下跌 -10.00%",
            "断板后两日累计下跌 -19.00%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz001339",
      "code": "001339",
      "name": "智微智能",
      "price": 69.73,
      "changePercent": 10.002,
      "turnoverRate": 17.83402,
      "amount": 1952354533.0,
      "floatMarketCapYi": 112.89,
      "totalMarketCapYi": 228.04,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh605488",
      "code": "605488",
      "name": "福莱新材",
      "price": 63.03,
      "changePercent": 10.0,
      "turnoverRate": 11.57453,
      "amount": 2120517637.0,
      "floatMarketCapYi": 188.13,
      "totalMarketCapYi": 189.08,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002160",
      "code": "002160",
      "name": "常铝股份",
      "price": 4.4,
      "changePercent": 10.0,
      "turnoverRate": 11.94535,
      "amount": 540989997.0,
      "floatMarketCapYi": 45.35,
      "totalMarketCapYi": 45.44,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-10-29",
          "runEnd": "2025-10-30",
          "runLength": 2,
          "breakDate": "2025-10-31",
          "evidence": [
            "断板当日下跌 -9.92%",
            "断板后两日累计下跌 -8.80%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603466",
      "code": "603466",
      "name": "风语筑",
      "price": 16.86,
      "changePercent": 9.98,
      "turnoverRate": 20.97182,
      "amount": 2034566763.0,
      "floatMarketCapYi": 100.29,
      "totalMarketCapYi": 100.29,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-08-12",
          "runEnd": "2026-08-13",
          "runLength": 2,
          "breakDate": "2026-08-14",
          "evidence": [
            "断板当日下跌 -8.38%",
            "断板后两日累计下跌 -8.53%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002313",
      "code": "002313",
      "name": "日海智能",
      "price": 10.16,
      "changePercent": 9.957,
      "turnoverRate": 8.49289,
      "amount": 321007077.0,
      "floatMarketCapYi": 38.04,
      "totalMarketCapYi": 38.04,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-02-13",
          "runEnd": "2025-02-14",
          "runLength": 2,
          "breakDate": "2025-02-17",
          "evidence": [
            "断板日高开 6.88% 后盘中回落 -5.87%",
            "断板后两日累计下跌 -9.46%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-08-05",
          "runEnd": "2025-08-08",
          "runLength": 4,
          "breakDate": "2025-08-11",
          "evidence": [
            "断板后两日累计下跌 -9.22%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-10-20",
          "runEnd": "2026-10-21",
          "runLength": 2,
          "breakDate": "2026-10-22",
          "evidence": [
            "断板日高开 5.17% 后盘中回落 -10.41%",
            "断板当日下跌 -5.79%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600530",
      "code": "600530",
      "name": "ST交昂",
      "price": 4.71,
      "changePercent": 6.321,
      "turnoverRate": 1.93246,
      "amount": 70744211.0,
      "floatMarketCapYi": 36.5,
      "totalMarketCapYi": 36.5,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 4.5,
      "aKillEvents": [
        {
          "runStart": "2024-12-30",
          "runEnd": "2025-01-03",
          "runLength": 4,
          "breakDate": "2025-01-06",
          "evidence": [
            "断板当日下跌 -9.95%",
            "断板后两日累计下跌 -19.05%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-05-09",
          "runEnd": "2025-05-15",
          "runLength": 5,
          "breakDate": "2025-05-16",
          "evidence": [
            "断板日高开 6.68% 后盘中回落 -10.02%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-07-09",
          "runEnd": "2025-07-10",
          "runLength": 2,
          "breakDate": "2025-07-11",
          "evidence": [
            "断板后两日累计下跌 -11.75%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "live"
    },
    {
      "symbol": "sh603595",
      "code": "603595",
      "name": "ST东尼",
      "price": 30.71,
      "changePercent": 4.884,
      "turnoverRate": 1.33455,
      "amount": 94814533.0,
      "floatMarketCapYi": 71.38,
      "totalMarketCapYi": 71.38,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 4.5,
      "aKillEvents": [
        {
          "runStart": "2024-09-27",
          "runEnd": "2024-10-08",
          "runLength": 3,
          "breakDate": "2024-10-09",
          "evidence": [
            "断板当日下跌 -8.76%",
            "断板后两日累计下跌 -11.23%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-06-18",
          "runEnd": "2026-06-26",
          "runLength": 6,
          "breakDate": "2026-06-29",
          "evidence": [
            "断板日高开 3.70% 后盘中回落 -8.40%",
            "断板当日下跌 -5.00%",
            "断板后两日累计下跌 -9.76%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "live"
    },
    {
      "symbol": "sh688135",
      "code": "688135",
      "name": "利扬芯片",
      "price": 35.02,
      "changePercent": 20.014,
      "turnoverRate": 12.90099,
      "amount": 989370139.0,
      "floatMarketCapYi": 81.63,
      "totalMarketCapYi": 81.63,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 19.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "live"
    },
    {
      "symbol": "sz300473",
      "code": "300473",
      "name": "德尔股份",
      "price": 58.79,
      "changePercent": 20.004,
      "turnoverRate": 18.33089,
      "amount": 1557106069.0,
      "floatMarketCapYi": 90.03,
      "totalMarketCapYi": 101.51,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 19.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz301052",
      "code": "301052",
      "name": "果麦文化",
      "price": 48.96,
      "changePercent": 20.0,
      "turnoverRate": 52.47811,
      "amount": 1837537907.0,
      "floatMarketCapYi": 39.27,
      "totalMarketCapYi": 48.45,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 19.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz301486",
      "code": "301486",
      "name": "致尚科技",
      "price": 160.57,
      "changePercent": 19.999,
      "turnoverRate": 17.07353,
      "amount": 1897553257.0,
      "floatMarketCapYi": 117.09,
      "totalMarketCapYi": 206.72,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 19.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz300990",
      "code": "300990",
      "name": "同飞股份",
      "price": 87.38,
      "changePercent": 19.995,
      "turnoverRate": 13.43147,
      "amount": 898172142.0,
      "floatMarketCapYi": 72.38,
      "totalMarketCapYi": 149.61,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 19.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz000631",
      "code": "000631",
      "name": "顺发恒能",
      "price": 3.14,
      "changePercent": 10.175,
      "turnoverRate": 1.81135,
      "amount": 127392731.0,
      "floatMarketCapYi": 72.22,
      "totalMarketCapYi": 72.22,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh603258",
      "code": "603258",
      "name": "电魂网络",
      "price": 18.32,
      "changePercent": 10.03,
      "turnoverRate": 11.73685,
      "amount": 485867697.0,
      "floatMarketCapYi": 44.21,
      "totalMarketCapYi": 44.47,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh603730",
      "code": "603730",
      "name": "岱美股份",
      "price": 11.19,
      "changePercent": 10.029,
      "turnoverRate": 2.32742,
      "amount": 539980829.0,
      "floatMarketCapYi": 240.43,
      "totalMarketCapYi": 240.43,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh603725",
      "code": "603725",
      "name": "天安新材",
      "price": 11.96,
      "changePercent": 10.028,
      "turnoverRate": 6.71214,
      "amount": 240290230.0,
      "floatMarketCapYi": 36.46,
      "totalMarketCapYi": 36.46,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002957",
      "code": "002957",
      "name": "科瑞技术",
      "price": 28.55,
      "changePercent": 10.019,
      "turnoverRate": 5.09044,
      "amount": 589073762.0,
      "floatMarketCapYi": 119.8,
      "totalMarketCapYi": 120.04,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh603040",
      "code": "603040",
      "name": "新坐标",
      "price": 43.97,
      "changePercent": 10.008,
      "turnoverRate": 5.14365,
      "amount": 439499467.0,
      "floatMarketCapYi": 86.77,
      "totalMarketCapYi": 86.77,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002919",
      "code": "002919",
      "name": "名臣健康",
      "price": 18.36,
      "changePercent": 10.006,
      "turnoverRate": 3.52528,
      "amount": 165898064.0,
      "floatMarketCapYi": 48.51,
      "totalMarketCapYi": 48.86,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002779",
      "code": "002779",
      "name": "中坚科技",
      "price": 100.5,
      "changePercent": 10.004,
      "turnoverRate": 6.91408,
      "amount": 1098068392.0,
      "floatMarketCapYi": 166.64,
      "totalMarketCapYi": 185.72,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002795",
      "code": "002795",
      "name": "永和智控",
      "price": 7.59,
      "changePercent": 10.0,
      "turnoverRate": 6.94952,
      "amount": 220788823.0,
      "floatMarketCapYi": 32.94,
      "totalMarketCapYi": 33.52,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002913",
      "code": "002913",
      "name": "奥士康",
      "price": 65.26,
      "changePercent": 9.995,
      "turnoverRate": 3.08448,
      "amount": 580808292.0,
      "floatMarketCapYi": 199.33,
      "totalMarketCapYi": 207.11,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh603135",
      "code": "603135",
      "name": "中重科技",
      "price": 9.25,
      "changePercent": 9.988,
      "turnoverRate": 2.93245,
      "amount": 169468059.0,
      "floatMarketCapYi": 58.23,
      "totalMarketCapYi": 58.8,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002154",
      "code": "002154",
      "name": "报 喜 鸟",
      "price": 3.89,
      "changePercent": 9.887,
      "turnoverRate": 8.63919,
      "amount": 387164843.0,
      "floatMarketCapYi": 45.91,
      "totalMarketCapYi": 56.77,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002110",
      "code": "002110",
      "name": "三钢闽光",
      "price": 3.01,
      "changePercent": 9.854,
      "turnoverRate": 2.13427,
      "amount": 151906805.0,
      "floatMarketCapYi": 73.12,
      "totalMarketCapYi": 73.12,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    }
  ],
  "hardExcluded": [
    {
      "symbol": "sz002164",
      "code": "002164",
      "name": "宁波东力",
      "price": 21.91,
      "changePercent": 9.99,
      "turnoverRate": 13.14769,
      "amount": 1316557423.0,
      "floatMarketCapYi": 105.12,
      "totalMarketCapYi": 116.6,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-01-13",
          "runEnd": "2025-01-16",
          "runLength": 4,
          "breakDate": "2025-01-17",
          "evidence": [
            "断板当日下跌 -9.96%",
            "断板后两日累计下跌 -16.07%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-03-17",
          "runEnd": "2025-03-20",
          "runLength": 4,
          "breakDate": "2025-03-21",
          "evidence": [
            "断板后两日累计下跌 -8.56%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-08-08",
          "runEnd": "2025-08-11",
          "runLength": 2,
          "breakDate": "2025-08-12",
          "evidence": [
            "断板当日下跌 -6.34%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002703",
      "code": "002703",
      "name": "浙江世宝",
      "price": 16.56,
      "changePercent": 10.033,
      "turnoverRate": 13.09394,
      "amount": 1219601486.0,
      "floatMarketCapYi": 97.05,
      "totalMarketCapYi": 136.23,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-06-24",
          "runEnd": "2025-06-25",
          "runLength": 2,
          "breakDate": "2025-06-26",
          "evidence": [
            "断板当日下跌 -7.24%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600776",
      "code": "600776",
      "name": "东方通信",
      "price": 13.65,
      "changePercent": 9.992,
      "turnoverRate": 8.75064,
      "amount": 1067700027.0,
      "floatMarketCapYi": 130.49,
      "totalMarketCapYi": 171.44,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-11-26",
          "runEnd": "2024-11-27",
          "runLength": 2,
          "breakDate": "2024-11-28",
          "evidence": [
            "断板日高开 5.41% 后盘中回落 -9.92%",
            "断板当日下跌 -5.05%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-09-10",
          "runEnd": "2025-09-11",
          "runLength": 2,
          "breakDate": "2025-09-12",
          "evidence": [
            "断板日高开 5.19% 后盘中回落 -5.89%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002975",
      "code": "002975",
      "name": "博杰股份",
      "price": 88.3,
      "changePercent": 10.004,
      "turnoverRate": 8.7054,
      "amount": 1014465799.0,
      "floatMarketCapYi": 122.06,
      "totalMarketCapYi": 183.75,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-11-14",
          "runEnd": "2024-11-15",
          "runLength": 2,
          "breakDate": "2024-11-18",
          "evidence": [
            "断板当日下跌 -10.05%",
            "断板后两日累计下跌 -8.84%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-05-22",
          "runEnd": "2026-05-25",
          "runLength": 2,
          "breakDate": "2026-05-26",
          "evidence": [
            "断板日高开 3.73% 后盘中回落 -8.47%",
            "断板当日下跌 -5.06%",
            "断板后两日累计下跌 -8.71%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603330",
      "code": "603330",
      "name": "天洋新材",
      "price": 10.53,
      "changePercent": 10.031,
      "turnoverRate": 21.99077,
      "amount": 970933785.0,
      "floatMarketCapYi": 45.56,
      "totalMarketCapYi": 45.56,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-06-01",
          "runEnd": "2026-06-04",
          "runLength": 4,
          "breakDate": "2026-06-05",
          "evidence": [
            "断板日高开 7.86% 后盘中回落 -15.17%",
            "断板当日下跌 -8.50%",
            "断板后两日累计下跌 -17.64%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-08-12",
          "runEnd": "2026-08-17",
          "runLength": 4,
          "breakDate": "2026-08-18",
          "evidence": [
            "断板日高开 10.04% 后盘中回落 -13.46%",
            "断板后两日累计下跌 -14.30%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-10-21",
          "runEnd": "2026-10-22",
          "runLength": 2,
          "breakDate": "2026-10-23",
          "evidence": [
            "断板当日下跌 -6.31%",
            "断板后两日累计下跌 -13.51%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz003032",
      "code": "003032",
      "name": "传智教育",
      "price": 11.11,
      "changePercent": 10.0,
      "turnoverRate": 31.81839,
      "amount": 970107603.0,
      "floatMarketCapYi": 31.61,
      "totalMarketCapYi": 44.71,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-07-27",
          "runEnd": "2026-08-05",
          "runLength": 8,
          "breakDate": "2026-08-06",
          "evidence": [
            "断板当日下跌 -6.65%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2026-10-29",
          "runEnd": "2026-10-30",
          "runLength": 2,
          "breakDate": "2026-11-02",
          "evidence": [
            "断板日高开 7.43% 后盘中回落 -10.56%",
            "断板后两日累计下跌 -9.74%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002980",
      "code": "002980",
      "name": "华盛昌",
      "price": 75.82,
      "changePercent": 9.996,
      "turnoverRate": 12.11638,
      "amount": 893040960.0,
      "floatMarketCapYi": 76.8,
      "totalMarketCapYi": 142.85,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-04-13",
          "runEnd": "2026-04-15",
          "runLength": 3,
          "breakDate": "2026-04-16",
          "evidence": [
            "断板当日下跌 -5.77%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2026-05-22",
          "runEnd": "2026-05-25",
          "runLength": 2,
          "breakDate": "2026-05-26",
          "evidence": [
            "断板日高开 4.32% 后盘中回落 -13.52%",
            "断板当日下跌 -9.78%",
            "断板后两日累计下跌 -8.05%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz000026",
      "code": "000026",
      "name": "飞亚达",
      "price": 23.16,
      "changePercent": 10.024,
      "turnoverRate": 8.42554,
      "amount": 699147509.0,
      "floatMarketCapYi": 84.4,
      "totalMarketCapYi": 93.97,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-06-26",
          "runEnd": "2025-06-30",
          "runLength": 3,
          "breakDate": "2025-07-01",
          "evidence": [
            "断板日高开 10.06% 后盘中回落 -5.15%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-08-11",
          "runEnd": "2025-08-12",
          "runLength": 2,
          "breakDate": "2025-08-13",
          "evidence": [
            "断板后两日累计下跌 -8.49%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600629",
      "code": "600629",
      "name": "华建集团",
      "price": 15.19,
      "changePercent": 9.993,
      "turnoverRate": 3.45295,
      "amount": 592848599.0,
      "floatMarketCapYi": 174.66,
      "totalMarketCapYi": 174.66,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-10-30",
          "runEnd": "2024-10-31",
          "runLength": 2,
          "breakDate": "2024-11-01",
          "evidence": [
            "断板日高开 5.03% 后盘中回落 -10.02%",
            "断板当日下跌 -5.49%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2024-11-13",
          "runEnd": "2024-11-14",
          "runLength": 2,
          "breakDate": "2024-11-15",
          "evidence": [
            "断板当日下跌 -7.72%",
            "断板后两日累计下跌 -17.11%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-07-18",
          "runEnd": "2025-07-22",
          "runLength": 3,
          "breakDate": "2025-07-23",
          "evidence": [
            "断板日高开 3.72% 后盘中回落 -7.26%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600293",
      "code": "600293",
      "name": "三峡新材",
      "price": 4.31,
      "changePercent": 9.949,
      "turnoverRate": 12.09726,
      "amount": 585993583.0,
      "floatMarketCapYi": 50.0,
      "totalMarketCapYi": 50.0,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-10-21",
          "runEnd": "2025-10-22",
          "runLength": 2,
          "breakDate": "2025-10-23",
          "evidence": [
            "断板当日下跌 -6.95%",
            "断板后两日累计下跌 -11.50%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-10-20",
          "runEnd": "2026-10-22",
          "runLength": 3,
          "breakDate": "2026-10-23",
          "evidence": [
            "断板日高开 9.94% 后盘中回落 -14.61%",
            "断板当日下跌 -6.12%",
            "断板后两日累计下跌 -15.49%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002362",
      "code": "002362",
      "name": "汉王科技",
      "price": 18.69,
      "changePercent": 10.006,
      "turnoverRate": 12.80991,
      "amount": 484569748.0,
      "floatMarketCapYi": 38.81,
      "totalMarketCapYi": 45.69,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-09-30",
          "runEnd": "2024-10-08",
          "runLength": 2,
          "breakDate": "2024-10-09",
          "evidence": [
            "断板当日下跌 -8.62%",
            "断板后两日累计下跌 -8.91%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2024-12-05",
          "runEnd": "2024-12-10",
          "runLength": 4,
          "breakDate": "2024-12-11",
          "evidence": [
            "断板当日下跌 -10.01%",
            "断板后两日累计下跌 -18.37%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002886",
      "code": "002886",
      "name": "沃特股份",
      "price": 22.3,
      "changePercent": 10.015,
      "turnoverRate": 10.95027,
      "amount": 481971443.0,
      "floatMarketCapYi": 46.62,
      "totalMarketCapYi": 58.69,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-12-09",
          "runEnd": "2024-12-10",
          "runLength": 2,
          "breakDate": "2024-12-11",
          "evidence": [
            "断板后两日累计下跌 -8.47%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002520",
      "code": "002520",
      "name": "日发精机",
      "price": 7.26,
      "changePercent": 10.0,
      "turnoverRate": 7.95508,
      "amount": 403038673.0,
      "floatMarketCapYi": 51.21,
      "totalMarketCapYi": 54.47,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-11-29",
          "runEnd": "2024-12-06",
          "runLength": 6,
          "breakDate": "2024-12-09",
          "evidence": [
            "断板当日下跌 -10.00%",
            "断板后两日累计下跌 -19.01%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz000407",
      "code": "000407",
      "name": "胜利股份",
      "price": 4.35,
      "changePercent": 10.127,
      "turnoverRate": 10.49628,
      "amount": 392001197.0,
      "floatMarketCapYi": 38.1,
      "totalMarketCapYi": 38.28,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-11-11",
          "runEnd": "2025-11-18",
          "runLength": 6,
          "breakDate": "2025-11-19",
          "evidence": [
            "断板当日下跌 -10.11%",
            "断板后两日累计下跌 -11.02%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002765",
      "code": "002765",
      "name": "蓝黛科技",
      "price": 7.8,
      "changePercent": 10.014,
      "turnoverRate": 8.67216,
      "amount": 391715388.0,
      "floatMarketCapYi": 46.48,
      "totalMarketCapYi": 50.87,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-10-31",
          "runEnd": "2024-11-08",
          "runLength": 7,
          "breakDate": "2024-11-11",
          "evidence": [
            "断板当日下跌 -10.09%",
            "断板后两日累计下跌 -19.12%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz000635",
      "code": "000635",
      "name": "英 力 特",
      "price": 10.21,
      "changePercent": 10.022,
      "turnoverRate": 10.57964,
      "amount": 388274444.0,
      "floatMarketCapYi": 37.45,
      "totalMarketCapYi": 40.24,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-09-01",
          "runEnd": "2026-09-02",
          "runLength": 2,
          "breakDate": "2026-09-03",
          "evidence": [
            "断板日高开 6.42% 后盘中回落 -12.07%",
            "断板当日下跌 -6.42%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600162",
      "code": "600162",
      "name": "香江控股",
      "price": 3.67,
      "changePercent": 9.88,
      "turnoverRate": 3.27269,
      "amount": 372597177.0,
      "floatMarketCapYi": 119.95,
      "totalMarketCapYi": 119.95,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-07-15",
          "runEnd": "2026-07-17",
          "runLength": 3,
          "breakDate": "2026-07-20",
          "evidence": [
            "断板当日下跌 -10.15%",
            "断板后两日累计下跌 -14.73%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-08-11",
          "runEnd": "2026-08-12",
          "runLength": 2,
          "breakDate": "2026-08-13",
          "evidence": [
            "断板日高开 5.93% 后盘中回落 -8.60%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-08-27",
          "runEnd": "2026-08-28",
          "runLength": 2,
          "breakDate": "2026-08-31",
          "evidence": [
            "断板日高开 10.07% 后盘中回落 -15.76%",
            "断板当日下跌 -7.28%",
            "断板后两日累计下跌 -8.21%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz001331",
      "code": "001331",
      "name": "胜通能源",
      "price": 35.28,
      "changePercent": 10.009,
      "turnoverRate": 3.72559,
      "amount": 361869625.0,
      "floatMarketCapYi": 100.84,
      "totalMarketCapYi": 144.38,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-07-30",
          "runEnd": "2025-08-04",
          "runLength": 4,
          "breakDate": "2025-08-05",
          "evidence": [
            "断板日高开 10.05% 后盘中回落 -17.84%",
            "断板当日下跌 -9.58%",
            "断板后两日累计下跌 -18.65%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600103",
      "code": "600103",
      "name": "青山纸业",
      "price": 3.28,
      "changePercent": 10.067,
      "turnoverRate": 4.599,
      "amount": 329408208.0,
      "floatMarketCapYi": 72.56,
      "totalMarketCapYi": 72.56,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-08-25",
          "runEnd": "2026-08-27",
          "runLength": 3,
          "breakDate": "2026-08-28",
          "evidence": [
            "断板日高开 9.95% 后盘中回落 -8.33%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600228",
      "code": "600228",
      "name": "返利科技",
      "price": 9.77,
      "changePercent": 10.023,
      "turnoverRate": 5.38889,
      "amount": 210350702.0,
      "floatMarketCapYi": 40.65,
      "totalMarketCapYi": 40.71,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-11-15",
          "runEnd": "2024-11-18",
          "runLength": 2,
          "breakDate": "2024-11-19",
          "evidence": [
            "断板当日下跌 -10.04%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2024-11-22",
          "runEnd": "2024-11-25",
          "runLength": 2,
          "breakDate": "2024-11-26",
          "evidence": [
            "断板日高开 5.91% 后盘中回落 -14.51%",
            "断板当日下跌 -9.46%",
            "断板后两日累计下跌 -15.13%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-06-16",
          "runEnd": "2026-06-26",
          "runLength": 3,
          "breakDate": "2026-06-29",
          "evidence": [
            "断板日高开 10.01% 后盘中回落 -14.15%",
            "断板当日下跌 -5.56%",
            "断板后两日累计下跌 -13.81%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002713",
      "code": "002713",
      "name": "东易日盛",
      "price": 8.48,
      "changePercent": 9.987,
      "turnoverRate": 1.7869,
      "amount": 76770783.0,
      "floatMarketCapYi": 44.45,
      "totalMarketCapYi": 80.68,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-12-02",
          "runEnd": "2024-12-03",
          "runLength": 2,
          "breakDate": "2024-12-04",
          "evidence": [
            "断板日高开 9.05% 后盘中回落 -13.14%",
            "断板当日下跌 -5.28%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2024-12-05",
          "runEnd": "2024-12-06",
          "runLength": 2,
          "breakDate": "2024-12-09",
          "evidence": [
            "断板日高开 10.04% 后盘中回落 -8.23%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-03-19",
          "runEnd": "2025-03-21",
          "runLength": 3,
          "breakDate": "2025-03-24",
          "evidence": [
            "断板当日下跌 -9.93%",
            "断板后两日累计下跌 -18.86%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002055",
      "code": "002055",
      "name": "ST得润",
      "price": 5.73,
      "changePercent": 4.562,
      "turnoverRate": 1.97535,
      "amount": 65650488.0,
      "floatMarketCapYi": 33.84,
      "totalMarketCapYi": 34.64,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 4.5,
      "aKillEvents": [
        {
          "runStart": "2024-09-30",
          "runEnd": "2024-10-08",
          "runLength": 2,
          "breakDate": "2024-10-09",
          "evidence": [
            "断板当日下跌 -8.42%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2026-05-22",
          "runEnd": "2026-05-26",
          "runLength": 3,
          "breakDate": "2026-05-27",
          "evidence": [
            "断板日高开 5.06% 后盘中回落 -9.51%",
            "断板后两日累计下跌 -9.73%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "live"
    },
    {
      "symbol": "sh603396",
      "code": "603396",
      "name": "金辰股份",
      "price": 29.19,
      "changePercent": 9.985,
      "turnoverRate": 1.46461,
      "amount": 59223241.0,
      "floatMarketCapYi": 40.44,
      "totalMarketCapYi": 40.44,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-11-10",
          "runEnd": "2025-11-11",
          "runLength": 2,
          "breakDate": "2025-11-12",
          "evidence": [
            "断板日高开 9.14% 后盘中回落 -10.84%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-09-23",
          "runEnd": "2026-09-28",
          "runLength": 3,
          "breakDate": "2026-09-29",
          "evidence": [
            "断板当日下跌 -10.00%",
            "断板后两日累计下跌 -14.54%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600876",
      "code": "600876",
      "name": "凯盛新能",
      "price": 7.61,
      "changePercent": 9.971,
      "turnoverRate": 1.54053,
      "amount": 45828738.0,
      "floatMarketCapYi": 30.11,
      "totalMarketCapYi": 49.14,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-09-10",
          "runEnd": "2026-09-14",
          "runLength": 3,
          "breakDate": "2026-09-15",
          "evidence": [
            "断板当日下跌 -6.06%",
            "断板后两日累计下跌 -10.55%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603429",
      "code": "603429",
      "name": "*ST集友",
      "price": 7.25,
      "changePercent": 5.685,
      "turnoverRate": 0.63723,
      "amount": 23670080.0,
      "floatMarketCapYi": 38.03,
      "totalMarketCapYi": 38.03,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 4.5,
      "aKillEvents": [
        {
          "runStart": "2024-12-03",
          "runEnd": "2024-12-04",
          "runLength": 2,
          "breakDate": "2024-12-05",
          "evidence": [
            "断板日高开 9.92% 后盘中回落 -5.16%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-09-08",
          "runEnd": "2025-09-09",
          "runLength": 2,
          "breakDate": "2025-09-10",
          "evidence": [
            "断板当日下跌 -7.04%",
            "断板后两日累计下跌 -8.57%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-07-01",
          "runEnd": "2026-07-02",
          "runLength": 2,
          "breakDate": "2026-07-03",
          "evidence": [
            "断板日高开 4.09% 后盘中回落 -5.67%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "live"
    }
  ],
  "exceptions": [
    {
      "symbol": "sh600327",
      "code": "600327",
      "name": "大东方",
      "price": 6.53,
      "changePercent": 9.933,
      "turnoverRate": 11.70218,
      "amount": 675630365.0,
      "floatMarketCapYi": 57.78,
      "totalMarketCapYi": 57.78,
      "lookbackDays": 521,
      "boardHeight": 4,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-11-20",
          "runEnd": "2024-11-22",
          "runLength": 3,
          "breakDate": "2024-11-25",
          "evidence": [
            "断板当日下跌 -10.12%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2025-11-14",
          "runEnd": "2025-11-17",
          "runLength": 2,
          "breakDate": "2025-11-18",
          "evidence": [
            "断板日高开 5.70% 后盘中回落 -9.86%",
            "断板后两日累计下跌 -11.73%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600715",
      "code": "600715",
      "name": "文投控股",
      "price": 3.14,
      "changePercent": 10.175,
      "turnoverRate": 24.43404,
      "amount": 2177443333.0,
      "floatMarketCapYi": 89.88,
      "totalMarketCapYi": 127.48,
      "lookbackDays": 521,
      "boardHeight": 3,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-10-27",
          "runEnd": "2026-10-29",
          "runLength": 3,
          "breakDate": "2026-10-30",
          "evidence": [
            "断板当日下跌 -10.13%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh601595",
      "code": "601595",
      "name": "上海电影",
      "price": 46.83,
      "changePercent": 10.007,
      "turnoverRate": 6.97084,
      "amount": 1369903395.0,
      "floatMarketCapYi": 209.89,
      "totalMarketCapYi": 209.89,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-02-09",
          "runEnd": "2026-02-10",
          "runLength": 2,
          "breakDate": "2026-02-11",
          "evidence": [
            "断板日高开 2.63% 后盘中回落 -11.67%",
            "断板当日下跌 -9.35%",
            "断板后两日累计下跌 -12.18%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603366",
      "code": "603366",
      "name": "日出东方",
      "price": 11.97,
      "changePercent": 10.018,
      "turnoverRate": 1.14871,
      "amount": 111795012.0,
      "floatMarketCapYi": 97.32,
      "totalMarketCapYi": 97.32,
      "lookbackDays": 521,
      "boardHeight": 4,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-11-04",
          "runEnd": "2024-11-08",
          "runLength": 5,
          "breakDate": "2024-11-11",
          "evidence": [
            "断板当日下跌 -8.20%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2024-11-12",
          "runEnd": "2024-11-18",
          "runLength": 5,
          "breakDate": "2024-11-19",
          "evidence": [
            "断板日高开 10.07% 后盘中回落 -7.68%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603466",
      "code": "603466",
      "name": "风语筑",
      "price": 16.86,
      "changePercent": 9.98,
      "turnoverRate": 20.97182,
      "amount": 2034566763.0,
      "floatMarketCapYi": 100.29,
      "totalMarketCapYi": 100.29,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-08-12",
          "runEnd": "2026-08-13",
          "runLength": 2,
          "breakDate": "2026-08-14",
          "evidence": [
            "断板当日下跌 -8.38%",
            "断板后两日累计下跌 -8.53%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603706",
      "code": "603706",
      "name": "东方环宇",
      "price": 24.43,
      "changePercent": 9.995,
      "turnoverRate": 8.90263,
      "amount": 389247994.0,
      "floatMarketCapYi": 46.27,
      "totalMarketCapYi": 46.27,
      "lookbackDays": 521,
      "boardHeight": 3,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh605255",
      "code": "605255",
      "name": "天普股份",
      "price": 61.01,
      "changePercent": 10.007,
      "turnoverRate": 1.72285,
      "amount": 137305886.0,
      "floatMarketCapYi": 81.8,
      "totalMarketCapYi": 81.8,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-08-22",
          "runEnd": "2025-09-23",
          "runLength": 15,
          "breakDate": "2025-10-16",
          "evidence": [
            "断板当日下跌 -10.01%",
            "断板后两日累计下跌 -19.01%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-12-29",
          "runEnd": "2025-12-30",
          "runLength": 2,
          "breakDate": "2026-01-12",
          "evidence": [
            "断板当日下跌 -10.00%",
            "断板后两日累计下跌 -19.00%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-07-14",
          "runEnd": "2026-07-15",
          "runLength": 2,
          "breakDate": "2026-07-16",
          "evidence": [
            "断板当日下跌 -10.00%",
            "断板后两日累计下跌 -19.00%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh605488",
      "code": "605488",
      "name": "福莱新材",
      "price": 63.03,
      "changePercent": 10.0,
      "turnoverRate": 11.57453,
      "amount": 2120517637.0,
      "floatMarketCapYi": 188.13,
      "totalMarketCapYi": 189.08,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz000678",
      "code": "000678",
      "name": "襄阳轴承",
      "price": 21.19,
      "changePercent": 10.021,
      "turnoverRate": 37.3948,
      "amount": 3450850094.0,
      "floatMarketCapYi": 97.39,
      "totalMarketCapYi": 97.39,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-03-10",
          "runEnd": "2025-03-13",
          "runLength": 4,
          "breakDate": "2025-03-14",
          "evidence": [
            "断板当日下跌 -6.72%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2025-03-17",
          "runEnd": "2025-03-20",
          "runLength": 4,
          "breakDate": "2025-03-21",
          "evidence": [
            "断板当日下跌 -10.00%",
            "断板后两日累计下跌 -18.99%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-09-24",
          "runEnd": "2026-09-30",
          "runLength": 4,
          "breakDate": "2026-10-08",
          "evidence": [
            "断板当日下跌 -5.04%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz001339",
      "code": "001339",
      "name": "智微智能",
      "price": 69.73,
      "changePercent": 10.002,
      "turnoverRate": 17.83402,
      "amount": 1952354533.0,
      "floatMarketCapYi": 112.89,
      "totalMarketCapYi": 228.04,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002160",
      "code": "002160",
      "name": "常铝股份",
      "price": 4.4,
      "changePercent": 10.0,
      "turnoverRate": 11.94535,
      "amount": 540989997.0,
      "floatMarketCapYi": 45.35,
      "totalMarketCapYi": 45.44,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-10-29",
          "runEnd": "2025-10-30",
          "runLength": 2,
          "breakDate": "2025-10-31",
          "evidence": [
            "断板当日下跌 -9.92%",
            "断板后两日累计下跌 -8.80%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002313",
      "code": "002313",
      "name": "日海智能",
      "price": 10.16,
      "changePercent": 9.957,
      "turnoverRate": 8.49289,
      "amount": 321007077.0,
      "floatMarketCapYi": 38.04,
      "totalMarketCapYi": 38.04,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-02-13",
          "runEnd": "2025-02-14",
          "runLength": 2,
          "breakDate": "2025-02-17",
          "evidence": [
            "断板日高开 6.88% 后盘中回落 -5.87%",
            "断板后两日累计下跌 -9.46%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-08-05",
          "runEnd": "2025-08-08",
          "runLength": 4,
          "breakDate": "2025-08-11",
          "evidence": [
            "断板后两日累计下跌 -9.22%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-10-20",
          "runEnd": "2026-10-21",
          "runLength": 2,
          "breakDate": "2026-10-22",
          "evidence": [
            "断板日高开 5.17% 后盘中回落 -10.41%",
            "断板当日下跌 -5.79%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002425",
      "code": "002425",
      "name": "凯撒文化",
      "price": 3.83,
      "changePercent": 10.057,
      "turnoverRate": 16.37001,
      "amount": 569453884.0,
      "floatMarketCapYi": 35.24,
      "totalMarketCapYi": 36.64,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-08-04",
          "runEnd": "2026-08-06",
          "runLength": 3,
          "breakDate": "2026-08-07",
          "evidence": [
            "断板当日下跌 -8.90%",
            "断板后两日累计下跌 -13.35%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002623",
      "code": "002623",
      "name": "亚玛顿",
      "price": 23.33,
      "changePercent": 9.995,
      "turnoverRate": 0.43511,
      "amount": 19554879.0,
      "floatMarketCapYi": 44.94,
      "totalMarketCapYi": 45.04,
      "lookbackDays": 521,
      "boardHeight": 3,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002708",
      "code": "002708",
      "name": "光洋股份",
      "price": 26.59,
      "changePercent": 10.012,
      "turnoverRate": 18.02035,
      "amount": 2371175384.0,
      "floatMarketCapYi": 135.51,
      "totalMarketCapYi": 149.46,
      "lookbackDays": 521,
      "boardHeight": 3,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-12-03",
          "runEnd": "2024-12-04",
          "runLength": 2,
          "breakDate": "2024-12-05",
          "evidence": [
            "断板后两日累计下跌 -10.35%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-10-26",
          "runEnd": "2026-10-29",
          "runLength": 4,
          "breakDate": "2026-10-30",
          "evidence": [
            "断板当日下跌 -8.69%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002931",
      "code": "002931",
      "name": "锋龙股份",
      "price": 53.08,
      "changePercent": 10.01,
      "turnoverRate": 6.17655,
      "amount": 661944110.0,
      "floatMarketCapYi": 107.53,
      "totalMarketCapYi": 115.98,
      "lookbackDays": 521,
      "boardHeight": 3,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh603595",
      "code": "603595",
      "name": "ST东尼",
      "price": 30.71,
      "changePercent": 4.884,
      "turnoverRate": 1.33455,
      "amount": 94814533.0,
      "floatMarketCapYi": 71.38,
      "totalMarketCapYi": 71.38,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 4.5,
      "aKillEvents": [
        {
          "runStart": "2024-09-27",
          "runEnd": "2024-10-08",
          "runLength": 3,
          "breakDate": "2024-10-09",
          "evidence": [
            "断板当日下跌 -8.76%",
            "断板后两日累计下跌 -11.23%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-06-18",
          "runEnd": "2026-06-26",
          "runLength": 6,
          "breakDate": "2026-06-29",
          "evidence": [
            "断板日高开 3.70% 后盘中回落 -8.40%",
            "断板当日下跌 -5.00%",
            "断板后两日累计下跌 -9.76%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "live"
    },
    {
      "symbol": "sh600530",
      "code": "600530",
      "name": "ST交昂",
      "price": 4.71,
      "changePercent": 6.321,
      "turnoverRate": 1.93246,
      "amount": 70744211.0,
      "floatMarketCapYi": 36.5,
      "totalMarketCapYi": 36.5,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 4.5,
      "aKillEvents": [
        {
          "runStart": "2024-12-30",
          "runEnd": "2025-01-03",
          "runLength": 4,
          "breakDate": "2025-01-06",
          "evidence": [
            "断板当日下跌 -9.95%",
            "断板后两日累计下跌 -19.05%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-05-09",
          "runEnd": "2025-05-15",
          "runLength": 5,
          "breakDate": "2025-05-16",
          "evidence": [
            "断板日高开 6.68% 后盘中回落 -10.02%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-07-09",
          "runEnd": "2025-07-10",
          "runLength": 2,
          "breakDate": "2025-07-11",
          "evidence": [
            "断板后两日累计下跌 -11.75%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "live"
    },
    {
      "symbol": "sz300147",
      "code": "300147",
      "name": "*ST香雪",
      "price": 6.35,
      "changePercent": 13.191,
      "turnoverRate": 5.42367,
      "amount": 213684666.0,
      "floatMarketCapYi": 41.76,
      "totalMarketCapYi": 41.99,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 4.5,
      "aKillEvents": [
        {
          "runStart": "2024-09-27",
          "runEnd": "2024-10-08",
          "runLength": 3,
          "breakDate": "2024-10-09",
          "evidence": [
            "断板当日下跌 -19.40%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2024-10-28",
          "runEnd": "2024-10-30",
          "runLength": 3,
          "breakDate": "2024-10-31",
          "evidence": [
            "断板后两日累计下跌 -17.83%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-10-27",
          "runEnd": "2026-10-28",
          "runLength": 2,
          "breakDate": "2026-10-29",
          "evidence": [
            "断板当日下跌 -5.45%",
            "断板后两日累计下跌 -15.04%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "live"
    }
  ],
  "failures": []
};
