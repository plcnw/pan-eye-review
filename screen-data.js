window.SCREEN_DATA = {
  "date": "2026-10-29",
  "capturedAt": "2026-10-30T00:03:00+08:00",
  "source": "新浪 A 股行情与腾讯历史日线",
  "marketCount": 5576,
  "limitUpCount": 43,
  "capPassCount": 31,
  "hardExcludedCount": 13,
  "candidateCount": 18,
  "exceptionCount": 9,
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
      "symbol": "sz001219",
      "code": "001219",
      "name": "青岛食品",
      "price": 18.13,
      "changePercent": 10.012,
      "turnoverRate": 1.57402,
      "amount": 54276760.0,
      "floatMarketCapYi": 34.48,
      "totalMarketCapYi": 35.35,
      "lookbackDays": 520,
      "boardHeight": 4,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002708",
      "code": "002708",
      "name": "光洋股份",
      "price": 20.83,
      "changePercent": 9.979,
      "turnoverRate": 27.89837,
      "amount": 2887379413.0,
      "floatMarketCapYi": 106.16,
      "totalMarketCapYi": 117.09,
      "lookbackDays": 520,
      "boardHeight": 4,
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
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600715",
      "code": "600715",
      "name": "文投控股",
      "price": 2.27,
      "changePercent": 10.194,
      "turnoverRate": 17.97071,
      "amount": 1154861101.0,
      "floatMarketCapYi": 64.98,
      "totalMarketCapYi": 92.16,
      "lookbackDays": 520,
      "boardHeight": 3,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh601956",
      "code": "601956",
      "name": "东贝集团",
      "price": 6.7,
      "changePercent": 10.016,
      "turnoverRate": 2.53356,
      "amount": 105518669.0,
      "floatMarketCapYi": 41.65,
      "totalMarketCapYi": 41.65,
      "lookbackDays": 520,
      "boardHeight": 3,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-04-23",
          "runEnd": "2025-04-28",
          "runLength": 4,
          "breakDate": "2025-04-29",
          "evidence": [
            "断板日高开 8.65% 后盘中回落 -7.96%",
            "断板后两日累计下跌 -10.30%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002526",
      "code": "002526",
      "name": "山东矿机",
      "price": 3.28,
      "changePercent": 10.067,
      "turnoverRate": 2.51499,
      "amount": 146112222.0,
      "floatMarketCapYi": 58.1,
      "totalMarketCapYi": 58.48,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-11-27",
          "runEnd": "2024-12-06",
          "runLength": 8,
          "breakDate": "2024-12-09",
          "evidence": [
            "断板当日下跌 -10.02%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002172",
      "code": "002172",
      "name": "澳洋健康",
      "price": 5.37,
      "changePercent": 10.041,
      "turnoverRate": 18.60241,
      "amount": 757232210.0,
      "floatMarketCapYi": 41.09,
      "totalMarketCapYi": 41.12,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-08-12",
          "runEnd": "2026-08-17",
          "runLength": 4,
          "breakDate": "2026-08-18",
          "evidence": [
            "断板当日下跌 -10.02%",
            "断板后两日累计下跌 -19.04%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-09-07",
          "runEnd": "2026-09-08",
          "runLength": 2,
          "breakDate": "2026-09-09",
          "evidence": [
            "断板日高开 8.06% 后盘中回落 -11.27%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603131",
      "code": "603131",
      "name": "上海沪工",
      "price": 15.95,
      "changePercent": 10.0,
      "turnoverRate": 11.12464,
      "amount": 574523833.0,
      "floatMarketCapYi": 53.74,
      "totalMarketCapYi": 53.74,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002943",
      "code": "002943",
      "name": "宇晶股份",
      "price": 27.62,
      "changePercent": 9.996,
      "turnoverRate": 18.05296,
      "amount": 902711421.0,
      "floatMarketCapYi": 52.16,
      "totalMarketCapYi": 73.7,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh603006",
      "code": "603006",
      "name": "联明股份",
      "price": 11.81,
      "changePercent": 9.963,
      "turnoverRate": 2.42311,
      "amount": 72326435.0,
      "floatMarketCapYi": 30.03,
      "totalMarketCapYi": 30.03,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-05-28",
          "runEnd": "2025-05-29",
          "runLength": 2,
          "breakDate": "2025-05-30",
          "evidence": [
            "断板当日下跌 -7.46%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600501",
      "code": "600501",
      "name": "航天晨光",
      "price": 16.89,
      "changePercent": 10.033,
      "turnoverRate": 8.07171,
      "amount": 568768630.0,
      "floatMarketCapYi": 72.26,
      "totalMarketCapYi": 72.26,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh605338",
      "code": "605338",
      "name": "巴比食品",
      "price": 18.98,
      "changePercent": 10.029,
      "turnoverRate": 2.15623,
      "amount": 95984658.0,
      "floatMarketCapYi": 45.47,
      "totalMarketCapYi": 45.47,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh600576",
      "code": "600576",
      "name": "祥源文旅",
      "price": 5.38,
      "changePercent": 10.02,
      "turnoverRate": 3.91958,
      "amount": 135127901.0,
      "floatMarketCapYi": 35.53,
      "totalMarketCapYi": 56.73,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002275",
      "code": "002275",
      "name": "桂林三金",
      "price": 13.62,
      "changePercent": 10.016,
      "turnoverRate": 4.09484,
      "amount": 309836337.0,
      "floatMarketCapYi": 76.92,
      "totalMarketCapYi": 80.03,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh600997",
      "code": "600997",
      "name": "开滦股份",
      "price": 5.39,
      "changePercent": 10.0,
      "turnoverRate": 1.94339,
      "amount": 164820034.0,
      "floatMarketCapYi": 85.58,
      "totalMarketCapYi": 85.58,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002865",
      "code": "002865",
      "name": "钧达股份",
      "price": 38.62,
      "changePercent": 9.997,
      "turnoverRate": 12.87339,
      "amount": 1099486062.0,
      "floatMarketCapYi": 88.37,
      "totalMarketCapYi": 120.21,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz000701",
      "code": "000701",
      "name": "厦门信达",
      "price": 5.62,
      "changePercent": 9.98,
      "turnoverRate": 8.6723,
      "amount": 320283642.0,
      "floatMarketCapYi": 37.53,
      "totalMarketCapYi": 37.56,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002531",
      "code": "002531",
      "name": "天顺风能",
      "price": 7.06,
      "changePercent": 9.969,
      "turnoverRate": 7.86361,
      "amount": 962133673.0,
      "floatMarketCapYi": 126.15,
      "totalMarketCapYi": 126.86,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002277",
      "code": "002277",
      "name": "友阿股份",
      "price": 5.53,
      "changePercent": 9.94,
      "turnoverRate": 5.40902,
      "amount": 413593417.0,
      "floatMarketCapYi": 77.1,
      "totalMarketCapYi": 77.1,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    }
  ],
  "hardExcluded": [
    {
      "symbol": "sz002149",
      "code": "002149",
      "name": "西部材料",
      "price": 32.31,
      "changePercent": 10.01,
      "turnoverRate": 12.06859,
      "amount": 1847363526.0,
      "floatMarketCapYi": 157.72,
      "totalMarketCapYi": 157.74,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-12-18",
          "runEnd": "2025-12-19",
          "runLength": 2,
          "breakDate": "2025-12-22",
          "evidence": [
            "断板日高开 6.10% 后盘中回落 -6.80%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz000530",
      "code": "000530",
      "name": "冰山冷热",
      "price": 8.23,
      "changePercent": 10.027,
      "turnoverRate": 37.92293,
      "amount": 1804942200.0,
      "floatMarketCapYi": 49.39,
      "totalMarketCapYi": 69.4,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-11-06",
          "runEnd": "2024-11-07",
          "runLength": 2,
          "breakDate": "2024-11-08",
          "evidence": [
            "断板日高开 10.27% 后盘中回落 -5.94%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2024-12-12",
          "runEnd": "2024-12-16",
          "runLength": 3,
          "breakDate": "2024-12-17",
          "evidence": [
            "断板日高开 6.10% 后盘中回落 -8.68%",
            "断板后两日累计下跌 -9.76%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002565",
      "code": "002565",
      "name": "顺灏股份",
      "price": 8.14,
      "changePercent": 10.0,
      "turnoverRate": 11.4757,
      "amount": 969166828.0,
      "floatMarketCapYi": 86.28,
      "totalMarketCapYi": 86.28,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-04-21",
          "runEnd": "2025-04-22",
          "runLength": 2,
          "breakDate": "2025-04-23",
          "evidence": [
            "断板日高开 4.10% 后盘中回落 -7.61%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh605179",
      "code": "605179",
      "name": "一鸣食品",
      "price": 23.77,
      "changePercent": 9.995,
      "turnoverRate": 9.71696,
      "amount": 889176464.0,
      "floatMarketCapYi": 95.32,
      "totalMarketCapYi": 95.32,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-01-16",
          "runEnd": "2025-01-17",
          "runLength": 2,
          "breakDate": "2025-01-20",
          "evidence": [
            "断板当日下跌 -6.82%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2026-08-10",
          "runEnd": "2026-08-13",
          "runLength": 4,
          "breakDate": "2026-08-14",
          "evidence": [
            "断板日高开 2.69% 后盘中回落 -7.05%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-08-17",
          "runEnd": "2026-08-18",
          "runLength": 2,
          "breakDate": "2026-08-19",
          "evidence": [
            "断板当日下跌 -10.00%",
            "断板后两日累计下跌 -9.22%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002086",
      "code": "002086",
      "name": "东方海洋",
      "price": 2.57,
      "changePercent": 9.829,
      "turnoverRate": 21.83237,
      "amount": 836997776.0,
      "floatMarketCapYi": 40.63,
      "totalMarketCapYi": 50.34,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-10-22",
          "runEnd": "2024-10-23",
          "runLength": 2,
          "breakDate": "2024-10-24",
          "evidence": [
            "断板日高开 9.24% 后盘中回落 -11.54%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2024-11-06",
          "runEnd": "2024-11-08",
          "runLength": 3,
          "breakDate": "2024-11-11",
          "evidence": [
            "断板后两日累计下跌 -10.00%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-03-13",
          "runEnd": "2025-03-18",
          "runLength": 4,
          "breakDate": "2025-03-19",
          "evidence": [
            "断板当日下跌 -9.22%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh601188",
      "code": "601188",
      "name": "龙江交通",
      "price": 3.5,
      "changePercent": 10.063,
      "turnoverRate": 14.3035,
      "amount": 642104876.0,
      "floatMarketCapYi": 45.69,
      "totalMarketCapYi": 45.69,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-10-13",
          "runEnd": "2026-10-14",
          "runLength": 2,
          "breakDate": "2026-10-15",
          "evidence": [
            "断板当日下跌 -9.92%",
            "断板后两日累计下跌 -10.48%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603703",
      "code": "603703",
      "name": "盛洋科技",
      "price": 10.86,
      "changePercent": 10.03,
      "turnoverRate": 8.25859,
      "amount": 361176215.0,
      "floatMarketCapYi": 45.07,
      "totalMarketCapYi": 45.07,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-12-17",
          "runEnd": "2025-12-18",
          "runLength": 2,
          "breakDate": "2025-12-19",
          "evidence": [
            "断板日高开 9.81% 后盘中回落 -13.29%",
            "断板后两日累计下跌 -9.81%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600261",
      "code": "600261",
      "name": "阳光照明",
      "price": 3.72,
      "changePercent": 10.059,
      "turnoverRate": 5.68457,
      "amount": 278628286.0,
      "floatMarketCapYi": 49.66,
      "totalMarketCapYi": 49.66,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-01-27",
          "runEnd": "2025-02-05",
          "runLength": 2,
          "breakDate": "2025-02-06",
          "evidence": [
            "断板日高开 7.42% 后盘中回落 -9.46%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600643",
      "code": "600643",
      "name": "爱建集团",
      "price": 4.25,
      "changePercent": 10.104,
      "turnoverRate": 4.10998,
      "amount": 276870450.0,
      "floatMarketCapYi": 67.59,
      "totalMarketCapYi": 67.71,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-09-30",
          "runEnd": "2024-10-08",
          "runLength": 2,
          "breakDate": "2024-10-09",
          "evidence": [
            "断板当日下跌 -9.97%",
            "断板后两日累计下跌 -18.91%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600592",
      "code": "600592",
      "name": "龙溪股份",
      "price": 17.41,
      "changePercent": 9.981,
      "turnoverRate": 3.57644,
      "amount": 247028038.0,
      "floatMarketCapYi": 69.56,
      "totalMarketCapYi": 69.56,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-02-26",
          "runEnd": "2025-02-27",
          "runLength": 2,
          "breakDate": "2025-02-28",
          "evidence": [
            "断板日高开 2.38% 后盘中回落 -10.41%",
            "断板当日下跌 -8.28%",
            "断板后两日累计下跌 -10.66%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603103",
      "code": "603103",
      "name": "横店影视",
      "price": 17.44,
      "changePercent": 10.032,
      "turnoverRate": 2.00958,
      "amount": 217694009.0,
      "floatMarketCapYi": 110.6,
      "totalMarketCapYi": 110.6,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-11-26",
          "runEnd": "2024-11-27",
          "runLength": 2,
          "breakDate": "2024-11-28",
          "evidence": [
            "断板当日下跌 -7.23%",
            "断板后两日累计下跌 -9.69%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-01-29",
          "runEnd": "2026-02-03",
          "runLength": 4,
          "breakDate": "2026-02-04",
          "evidence": [
            "断板日高开 9.85% 后盘中回落 -15.10%",
            "断板当日下跌 -6.74%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-02-09",
          "runEnd": "2026-02-10",
          "runLength": 2,
          "breakDate": "2026-02-11",
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
      "symbol": "sh605598",
      "code": "605598",
      "name": "上海港湾",
      "price": 24.9,
      "changePercent": 9.982,
      "turnoverRate": 2.36572,
      "amount": 137500626.0,
      "floatMarketCapYi": 59.98,
      "totalMarketCapYi": 59.98,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-07-21",
          "runEnd": "2025-07-22",
          "runLength": 2,
          "breakDate": "2025-07-23",
          "evidence": [
            "断板日高开 5.48% 后盘中回落 -7.00%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-08-07",
          "runEnd": "2025-08-11",
          "runLength": 3,
          "breakDate": "2025-08-12",
          "evidence": [
            "断板当日下跌 -10.01%",
            "断板后两日累计下跌 -14.61%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603843",
      "code": "603843",
      "name": "*ST正平",
      "price": 5.63,
      "changePercent": 8.897,
      "turnoverRate": 3.14078,
      "amount": 118327718.0,
      "floatMarketCapYi": 39.39,
      "totalMarketCapYi": 39.39,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 4.5,
      "aKillEvents": [
        {
          "runStart": "2026-03-11",
          "runEnd": "2026-03-17",
          "runLength": 5,
          "breakDate": "2026-03-18",
          "evidence": [
            "断板日高开 5.01% 后盘中回落 -5.28%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-03-26",
          "runEnd": "2026-04-03",
          "runLength": 2,
          "breakDate": "2026-04-07",
          "evidence": [
            "断板后两日累计下跌 -9.69%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-07-10",
          "runEnd": "2026-07-13",
          "runLength": 2,
          "breakDate": "2026-07-14",
          "evidence": [
            "断板当日下跌 -5.45%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "live"
    }
  ],
  "exceptions": [
    {
      "symbol": "sh600715",
      "code": "600715",
      "name": "文投控股",
      "price": 2.27,
      "changePercent": 10.194,
      "turnoverRate": 17.97071,
      "amount": 1154861101.0,
      "floatMarketCapYi": 64.98,
      "totalMarketCapYi": 92.16,
      "lookbackDays": 520,
      "boardHeight": 3,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh601956",
      "code": "601956",
      "name": "东贝集团",
      "price": 6.7,
      "changePercent": 10.016,
      "turnoverRate": 2.53356,
      "amount": 105518669.0,
      "floatMarketCapYi": 41.65,
      "totalMarketCapYi": 41.65,
      "lookbackDays": 520,
      "boardHeight": 3,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-04-23",
          "runEnd": "2025-04-28",
          "runLength": 4,
          "breakDate": "2025-04-29",
          "evidence": [
            "断板日高开 8.65% 后盘中回落 -7.96%",
            "断板后两日累计下跌 -10.30%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603006",
      "code": "603006",
      "name": "联明股份",
      "price": 11.81,
      "changePercent": 9.963,
      "turnoverRate": 2.42311,
      "amount": 72326435.0,
      "floatMarketCapYi": 30.03,
      "totalMarketCapYi": 30.03,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-05-28",
          "runEnd": "2025-05-29",
          "runLength": 2,
          "breakDate": "2025-05-30",
          "evidence": [
            "断板当日下跌 -7.46%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603131",
      "code": "603131",
      "name": "上海沪工",
      "price": 15.95,
      "changePercent": 10.0,
      "turnoverRate": 11.12464,
      "amount": 574523833.0,
      "floatMarketCapYi": 53.74,
      "totalMarketCapYi": 53.74,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz001219",
      "code": "001219",
      "name": "青岛食品",
      "price": 18.13,
      "changePercent": 10.012,
      "turnoverRate": 1.57402,
      "amount": 54276760.0,
      "floatMarketCapYi": 34.48,
      "totalMarketCapYi": 35.35,
      "lookbackDays": 520,
      "boardHeight": 4,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002172",
      "code": "002172",
      "name": "澳洋健康",
      "price": 5.37,
      "changePercent": 10.041,
      "turnoverRate": 18.60241,
      "amount": 757232210.0,
      "floatMarketCapYi": 41.09,
      "totalMarketCapYi": 41.12,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-08-12",
          "runEnd": "2026-08-17",
          "runLength": 4,
          "breakDate": "2026-08-18",
          "evidence": [
            "断板当日下跌 -10.02%",
            "断板后两日累计下跌 -19.04%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-09-07",
          "runEnd": "2026-09-08",
          "runLength": 2,
          "breakDate": "2026-09-09",
          "evidence": [
            "断板日高开 8.06% 后盘中回落 -11.27%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002526",
      "code": "002526",
      "name": "山东矿机",
      "price": 3.28,
      "changePercent": 10.067,
      "turnoverRate": 2.51499,
      "amount": 146112222.0,
      "floatMarketCapYi": 58.1,
      "totalMarketCapYi": 58.48,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-11-27",
          "runEnd": "2024-12-06",
          "runLength": 8,
          "breakDate": "2024-12-09",
          "evidence": [
            "断板当日下跌 -10.02%"
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
      "price": 20.83,
      "changePercent": 9.979,
      "turnoverRate": 27.89837,
      "amount": 2887379413.0,
      "floatMarketCapYi": 106.16,
      "totalMarketCapYi": 117.09,
      "lookbackDays": 520,
      "boardHeight": 4,
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
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002943",
      "code": "002943",
      "name": "宇晶股份",
      "price": 27.62,
      "changePercent": 9.996,
      "turnoverRate": 18.05296,
      "amount": 902711421.0,
      "floatMarketCapYi": 52.16,
      "totalMarketCapYi": 73.7,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    }
  ],
  "failures": []
};
