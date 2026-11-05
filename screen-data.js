window.SCREEN_DATA = {
  "date": "2026-11-05",
  "capturedAt": "2026-11-05T18:27:33+08:00",
  "source": "新浪 A 股行情与腾讯历史日线",
  "marketCount": 5577,
  "limitUpCount": 102,
  "capPassCount": 75,
  "hardExcludedCount": 43,
  "candidateCount": 32,
  "exceptionCount": 15,
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
      "symbol": "sh601599",
      "code": "601599",
      "name": "浙文影业",
      "price": 4.62,
      "changePercent": 10.0,
      "turnoverRate": 2.74053,
      "amount": 146939118.0,
      "floatMarketCapYi": 53.62,
      "totalMarketCapYi": 53.62,
      "lookbackDays": 521,
      "boardHeight": 4,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002578",
      "code": "002578",
      "name": "闽发铝业",
      "price": 4.55,
      "changePercent": 9.903,
      "turnoverRate": 2.24274,
      "amount": 87876971.0,
      "floatMarketCapYi": 39.18,
      "totalMarketCapYi": 42.71,
      "lookbackDays": 521,
      "boardHeight": 4,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-01-16",
          "runEnd": "2025-01-17",
          "runLength": 2,
          "breakDate": "2025-01-20",
          "evidence": [
            "断板当日下跌 -6.59%",
            "断板后两日累计下跌 -12.91%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-12-05",
          "runEnd": "2025-12-08",
          "runLength": 2,
          "breakDate": "2025-12-09",
          "evidence": [
            "断板当日下跌 -8.06%",
            "断板后两日累计下跌 -11.54%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-03-30",
          "runEnd": "2026-03-31",
          "runLength": 2,
          "breakDate": "2026-04-01",
          "evidence": [
            "断板当日下跌 -6.82%",
            "断板后两日累计下跌 -9.59%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002088",
      "code": "002088",
      "name": "鲁阳节能",
      "price": 10.08,
      "changePercent": 10.044,
      "turnoverRate": 9.80963,
      "amount": 478030874.0,
      "floatMarketCapYi": 51.0,
      "totalMarketCapYi": 51.35,
      "lookbackDays": 520,
      "boardHeight": 3,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002309",
      "code": "002309",
      "name": "中利集团",
      "price": 2.92,
      "changePercent": 10.189,
      "turnoverRate": 6.02338,
      "amount": 414556946.0,
      "floatMarketCapYi": 70.26,
      "totalMarketCapYi": 87.82,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-11-11",
          "runEnd": "2025-11-13",
          "runLength": 3,
          "breakDate": "2025-11-14",
          "evidence": [
            "断板当日下跌 -6.87%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2025-12-11",
          "runEnd": "2025-12-12",
          "runLength": 2,
          "breakDate": "2025-12-15",
          "evidence": [
            "断板当日下跌 -5.25%",
            "断板后两日累计下跌 -14.75%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-03-20",
          "runEnd": "2026-03-25",
          "runLength": 4,
          "breakDate": "2026-03-26",
          "evidence": [
            "断板当日下跌 -6.51%",
            "断板后两日累计下跌 -14.60%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz000017",
      "code": "000017",
      "name": "深中华A",
      "price": 7.02,
      "changePercent": 10.031,
      "turnoverRate": 2.50568,
      "amount": 77540112.0,
      "floatMarketCapYi": 30.95,
      "totalMarketCapYi": 48.38,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-11-19",
          "runEnd": "2025-11-21",
          "runLength": 3,
          "breakDate": "2025-11-24",
          "evidence": [
            "断板当日下跌 -9.97%",
            "断板后两日累计下跌 -13.11%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz000603",
      "code": "000603",
      "name": "盛达资源",
      "price": 26.05,
      "changePercent": 10.008,
      "turnoverRate": 7.8708,
      "amount": 1360657059.0,
      "floatMarketCapYi": 173.68,
      "totalMarketCapYi": 179.74,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-06-30",
          "runEnd": "2026-07-01",
          "runLength": 2,
          "breakDate": "2026-07-02",
          "evidence": [
            "断板日高开 4.76% 后盘中回落 -7.14%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz003033",
      "code": "003033",
      "name": "征和工业",
      "price": 85.09,
      "changePercent": 10.006,
      "turnoverRate": 7.13046,
      "amount": 485479851.0,
      "floatMarketCapYi": 68.9,
      "totalMarketCapYi": 69.56,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-02-28",
          "runEnd": "2025-03-04",
          "runLength": 3,
          "breakDate": "2025-03-05",
          "evidence": [
            "断板日高开 4.80% 后盘中回落 -11.50%",
            "断板当日下跌 -7.26%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-10-27",
          "runEnd": "2025-10-28",
          "runLength": 2,
          "breakDate": "2025-10-29",
          "evidence": [
            "断板当日下跌 -6.63%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603598",
      "code": "603598",
      "name": "引力传媒",
      "price": 21.66,
      "changePercent": 10.005,
      "turnoverRate": 2.92724,
      "amount": 171313078.0,
      "floatMarketCapYi": 58.53,
      "totalMarketCapYi": 58.53,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-01-14",
          "runEnd": "2025-01-16",
          "runLength": 3,
          "breakDate": "2025-01-17",
          "evidence": [
            "断板当日下跌 -9.98%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2026-02-09",
          "runEnd": "2026-02-10",
          "runLength": 2,
          "breakDate": "2026-02-11",
          "evidence": [
            "断板当日下跌 -6.42%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh605488",
      "code": "605488",
      "name": "福莱新材",
      "price": 49.27,
      "changePercent": 10.002,
      "turnoverRate": 13.4658,
      "amount": 1912045145.0,
      "floatMarketCapYi": 147.06,
      "totalMarketCapYi": 147.81,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002081",
      "code": "002081",
      "name": "金 螳 螂",
      "price": 4.73,
      "changePercent": 10.0,
      "turnoverRate": 1.41099,
      "amount": 177030183.0,
      "floatMarketCapYi": 125.47,
      "totalMarketCapYi": 125.6,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-04-17",
          "runEnd": "2026-04-23",
          "runLength": 5,
          "breakDate": "2026-04-24",
          "evidence": [
            "断板当日下跌 -10.19%",
            "断板后两日累计下跌 -18.87%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603657",
      "code": "603657",
      "name": "春光科技",
      "price": 30.8,
      "changePercent": 10.0,
      "turnoverRate": 2.34492,
      "amount": 96514622.0,
      "floatMarketCapYi": 41.64,
      "totalMarketCapYi": 41.64,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-05-06",
          "runEnd": "2025-05-12",
          "runLength": 5,
          "breakDate": "2025-05-13",
          "evidence": [
            "断板日高开 7.83% 后盘中回落 -11.72%",
            "断板后两日累计下跌 -13.30%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh605287",
      "code": "605287",
      "name": "德才股份",
      "price": 55.57,
      "changePercent": 9.996,
      "turnoverRate": 9.36836,
      "amount": 708880050.0,
      "floatMarketCapYi": 77.56,
      "totalMarketCapYi": 77.8,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-10-15",
          "runEnd": "2024-10-16",
          "runLength": 2,
          "breakDate": "2024-10-17",
          "evidence": [
            "断板当日下跌 -10.01%",
            "断板后两日累计下跌 -11.43%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-02-09",
          "runEnd": "2026-02-12",
          "runLength": 4,
          "breakDate": "2026-02-13",
          "evidence": [
            "断板当日下跌 -10.01%",
            "断板后两日累计下跌 -19.02%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-10-09",
          "runEnd": "2026-10-12",
          "runLength": 2,
          "breakDate": "2026-10-13",
          "evidence": [
            "断板日高开 10.00% 后盘中回落 -5.80%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002388",
      "code": "002388",
      "name": "新亚制程",
      "price": 6.06,
      "changePercent": 9.982,
      "turnoverRate": 14.55468,
      "amount": 439097451.0,
      "floatMarketCapYi": 30.68,
      "totalMarketCapYi": 30.7,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-10-30",
          "runEnd": "2024-10-31",
          "runLength": 2,
          "breakDate": "2024-11-01",
          "evidence": [
            "断板日高开 9.69% 后盘中回落 -17.96%",
            "断板当日下跌 -10.02%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-05-25",
          "runEnd": "2026-05-26",
          "runLength": 2,
          "breakDate": "2026-05-27",
          "evidence": [
            "断板日高开 3.42% 后盘中回落 -7.51%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-07-24",
          "runEnd": "2026-07-28",
          "runLength": 3,
          "breakDate": "2026-07-29",
          "evidence": [
            "断板当日下跌 -6.44%",
            "断板后两日累计下跌 -15.72%"
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
      "price": 9.82,
      "changePercent": 9.966,
      "turnoverRate": 21.48105,
      "amount": 2133488304.0,
      "floatMarketCapYi": 104.09,
      "totalMarketCapYi": 104.09,
      "lookbackDays": 521,
      "boardHeight": 2,
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
      "symbol": "sz001337",
      "code": "001337",
      "name": "四川黄金",
      "price": 40.73,
      "changePercent": 9.548,
      "turnoverRate": 6.56882,
      "amount": 1098305994.0,
      "floatMarketCapYi": 171.07,
      "totalMarketCapYi": 171.07,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-01-23",
          "runEnd": "2026-01-29",
          "runLength": 5,
          "breakDate": "2026-01-30",
          "evidence": [
            "断板当日下跌 -10.06%",
            "断板后两日累计下跌 -19.13%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "live"
    },
    {
      "symbol": "sz300709",
      "code": "300709",
      "name": "精研科技",
      "price": 41.38,
      "changePercent": 20.012,
      "turnoverRate": 18.65515,
      "amount": 1105095402.0,
      "floatMarketCapYi": 62.01,
      "totalMarketCapYi": 77.25,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 19.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz301209",
      "code": "301209",
      "name": "联合化学",
      "price": 39.95,
      "changePercent": 20.006,
      "turnoverRate": 7.24418,
      "amount": 344356146.0,
      "floatMarketCapYi": 53.52,
      "totalMarketCapYi": 62.64,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 19.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz300049",
      "code": "300049",
      "name": "福瑞医科",
      "price": 49.32,
      "changePercent": 20.0,
      "turnoverRate": 9.02564,
      "amount": 993418347.0,
      "floatMarketCapYi": 115.21,
      "totalMarketCapYi": 130.2,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 19.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz300093",
      "code": "300093",
      "name": "金刚光伏",
      "price": 18.66,
      "changePercent": 20.0,
      "turnoverRate": 9.25464,
      "amount": 462092300.0,
      "floatMarketCapYi": 52.06,
      "totalMarketCapYi": 103.19,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 19.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz301000",
      "code": "301000",
      "name": "肇民科技",
      "price": 28.08,
      "changePercent": 20.0,
      "turnoverRate": 7.35206,
      "amount": 441562202.0,
      "floatMarketCapYi": 64.58,
      "totalMarketCapYi": 68.4,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 19.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh688109",
      "code": "688109",
      "name": "品茗科技",
      "price": 68.42,
      "changePercent": 19.993,
      "turnoverRate": 3.73777,
      "amount": 186803350.0,
      "floatMarketCapYi": 53.94,
      "totalMarketCapYi": 53.94,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 19.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "live"
    },
    {
      "symbol": "sh688429",
      "code": "688429",
      "name": "时创能源",
      "price": 10.69,
      "changePercent": 19.978,
      "turnoverRate": 0.8305,
      "amount": 34383290.0,
      "floatMarketCapYi": 42.76,
      "totalMarketCapYi": 42.76,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 19.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "live"
    },
    {
      "symbol": "sh600569",
      "code": "600569",
      "name": "安阳钢铁",
      "price": 1.93,
      "changePercent": 10.286,
      "turnoverRate": 3.96183,
      "amount": 208490957.0,
      "floatMarketCapYi": 55.44,
      "totalMarketCapYi": 55.44,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh605339",
      "code": "605339",
      "name": "南侨食品",
      "price": 14.36,
      "changePercent": 10.038,
      "turnoverRate": 0.99166,
      "amount": 59610364.0,
      "floatMarketCapYi": 60.93,
      "totalMarketCapYi": 60.93,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002773",
      "code": "002773",
      "name": "康弘药业",
      "price": 22.28,
      "changePercent": 10.025,
      "turnoverRate": 3.68078,
      "amount": 554735828.0,
      "floatMarketCapYi": 153.03,
      "totalMarketCapYi": 205.27,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002135",
      "code": "002135",
      "name": "东南网架",
      "price": 4.83,
      "changePercent": 10.023,
      "turnoverRate": 1.31559,
      "amount": 63070710.0,
      "floatMarketCapYi": 49.27,
      "totalMarketCapYi": 53.88,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh603737",
      "code": "603737",
      "name": "三棵树",
      "price": 24.06,
      "changePercent": 10.014,
      "turnoverRate": 1.28327,
      "amount": 265888026.0,
      "floatMarketCapYi": 213.02,
      "totalMarketCapYi": 213.02,
      "lookbackDays": 521,
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
      "price": 43.67,
      "changePercent": 10.0,
      "turnoverRate": 12.07414,
      "amount": 1172910607.0,
      "floatMarketCapYi": 99.93,
      "totalMarketCapYi": 135.93,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002318",
      "code": "002318",
      "name": "久立特材",
      "price": 18.39,
      "changePercent": 9.988,
      "turnoverRate": 1.85872,
      "amount": 321450987.0,
      "floatMarketCapYi": 175.45,
      "totalMarketCapYi": 179.7,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh603876",
      "code": "603876",
      "name": "鼎胜新材",
      "price": 15.11,
      "changePercent": 9.971,
      "turnoverRate": 1.99943,
      "amount": 272265586.0,
      "floatMarketCapYi": 140.41,
      "totalMarketCapYi": 140.41,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "live"
    },
    {
      "symbol": "sz002506",
      "code": "002506",
      "name": "协鑫集成",
      "price": 2.54,
      "changePercent": 9.957,
      "turnoverRate": 3.49628,
      "amount": 512058663.0,
      "floatMarketCapYi": 148.45,
      "totalMarketCapYi": 148.6,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh603313",
      "code": "603313",
      "name": "梦百合",
      "price": 6.42,
      "changePercent": 9.932,
      "turnoverRate": 3.96564,
      "amount": 140614407.0,
      "floatMarketCapYi": 36.63,
      "totalMarketCapYi": 36.63,
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
      "symbol": "sz002086",
      "code": "002086",
      "name": "东方海洋",
      "price": 3.61,
      "changePercent": 10.061,
      "turnoverRate": 53.00246,
      "amount": 2919024160.0,
      "floatMarketCapYi": 57.07,
      "totalMarketCapYi": 70.72,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
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
        },
        {
          "runStart": "2026-10-29",
          "runEnd": "2026-11-03",
          "runLength": 4,
          "breakDate": "2026-11-04",
          "evidence": [
            "断板日高开 4.68% 后盘中回落 -8.38%"
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
      "price": 4.91,
      "changePercent": 10.09,
      "turnoverRate": 25.63351,
      "amount": 1534066796.0,
      "floatMarketCapYi": 65.55,
      "totalMarketCapYi": 65.55,
      "lookbackDays": 521,
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
        },
        {
          "runStart": "2026-10-29",
          "runEnd": "2026-11-03",
          "runLength": 4,
          "breakDate": "2026-11-04",
          "evidence": [
            "断板当日下跌 -9.90%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002343",
      "code": "002343",
      "name": "慈文传媒",
      "price": 8.89,
      "changePercent": 10.025,
      "turnoverRate": 35.15554,
      "amount": 1442848968.0,
      "floatMarketCapYi": 42.11,
      "totalMarketCapYi": 42.11,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-02-19",
          "runEnd": "2025-02-21",
          "runLength": 3,
          "breakDate": "2025-02-24",
          "evidence": [
            "断板日高开 7.48% 后盘中回落 -6.41%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-08-18",
          "runEnd": "2025-08-19",
          "runLength": 2,
          "breakDate": "2025-08-20",
          "evidence": [
            "断板当日下跌 -7.63%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz300071",
      "code": "300071",
      "name": "福石控股",
      "price": 4.55,
      "changePercent": 20.053,
      "turnoverRate": 29.08252,
      "amount": 1220204361.0,
      "floatMarketCapYi": 43.02,
      "totalMarketCapYi": 43.86,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 19.5,
      "aKillEvents": [
        {
          "runStart": "2024-12-05",
          "runEnd": "2024-12-09",
          "runLength": 3,
          "breakDate": "2024-12-10",
          "evidence": [
            "断板日高开 9.18% 后盘中回落 -11.36%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-01-14",
          "runEnd": "2025-01-15",
          "runLength": 2,
          "breakDate": "2025-01-16",
          "evidence": [
            "断板后两日累计下跌 -14.70%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "live"
    },
    {
      "symbol": "sz000995",
      "code": "000995",
      "name": "皇台酒业",
      "price": 18.0,
      "changePercent": 10.024,
      "turnoverRate": 39.04846,
      "amount": 1209604024.0,
      "floatMarketCapYi": 31.93,
      "totalMarketCapYi": 31.93,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-09-26",
          "runEnd": "2024-09-30",
          "runLength": 3,
          "breakDate": "2024-10-08",
          "evidence": [
            "断板日高开 9.90% 后盘中回落 -7.75%",
            "断板后两日累计下跌 -8.73%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-10-30",
          "runEnd": "2026-11-03",
          "runLength": 3,
          "breakDate": "2026-11-04",
          "evidence": [
            "断板日高开 7.52% 后盘中回落 -11.33%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002929",
      "code": "002929",
      "name": "润建股份",
      "price": 57.37,
      "changePercent": 10.01,
      "turnoverRate": 9.06824,
      "amount": 1090495970.0,
      "floatMarketCapYi": 124.28,
      "totalMarketCapYi": 164.28,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-06-30",
          "runEnd": "2026-07-01",
          "runLength": 2,
          "breakDate": "2026-07-02",
          "evidence": [
            "断板当日下跌 -5.33%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2026-10-19",
          "runEnd": "2026-10-21",
          "runLength": 3,
          "breakDate": "2026-10-22",
          "evidence": [
            "断板日高开 6.91% 后盘中回落 -5.23%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002421",
      "code": "002421",
      "name": "达实智能",
      "price": 3.18,
      "changePercent": 10.035,
      "turnoverRate": 16.54284,
      "amount": 1047981933.0,
      "floatMarketCapYi": 64.75,
      "totalMarketCapYi": 67.43,
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
            "断板当日下跌 -8.35%",
            "断板后两日累计下跌 -11.44%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-05-15",
          "runEnd": "2026-05-20",
          "runLength": 4,
          "breakDate": "2026-05-21",
          "evidence": [
            "断板日高开 2.58% 后盘中回落 -9.59%",
            "断板当日下跌 -7.26%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-05-22",
          "runEnd": "2026-05-25",
          "runLength": 2,
          "breakDate": "2026-05-26",
          "evidence": [
            "断板日高开 2.29% 后盘中回落 -5.30%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600986",
      "code": "600986",
      "name": "浙文互联",
      "price": 7.65,
      "changePercent": 10.072,
      "turnoverRate": 8.51681,
      "amount": 950298286.0,
      "floatMarketCapYi": 113.78,
      "totalMarketCapYi": 113.78,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-02-12",
          "runEnd": "2025-02-13",
          "runLength": 2,
          "breakDate": "2025-02-14",
          "evidence": [
            "断板日高开 4.99% 后盘中回落 -9.91%",
            "断板当日下跌 -5.41%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-01-23",
          "runEnd": "2026-01-26",
          "runLength": 2,
          "breakDate": "2026-01-27",
          "evidence": [
            "断板日高开 6.94% 后盘中回落 -7.55%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz000700",
      "code": "000700",
      "name": "模塑科技",
      "price": 15.0,
      "changePercent": 9.971,
      "turnoverRate": 6.99281,
      "amount": 904499764.0,
      "floatMarketCapYi": 137.7,
      "totalMarketCapYi": 137.7,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-09-16",
          "runEnd": "2025-09-17",
          "runLength": 2,
          "breakDate": "2025-09-18",
          "evidence": [
            "断板日高开 4.53% 后盘中回落 -5.30%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz001330",
      "code": "001330",
      "name": "博纳影业",
      "price": 6.16,
      "changePercent": 10.0,
      "turnoverRate": 11.07111,
      "amount": 758460579.0,
      "floatMarketCapYi": 71.63,
      "totalMarketCapYi": 84.67,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-08-25",
          "runEnd": "2025-08-26",
          "runLength": 2,
          "breakDate": "2025-08-27",
          "evidence": [
            "断板日高开 7.15% 后盘中回落 -13.05%",
            "断板当日下跌 -6.83%",
            "断板后两日累计下跌 -10.89%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-12-08",
          "runEnd": "2025-12-10",
          "runLength": 3,
          "breakDate": "2025-12-11",
          "evidence": [
            "断板日高开 9.22% 后盘中回落 -5.16%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-08-31",
          "runEnd": "2026-09-01",
          "runLength": 2,
          "breakDate": "2026-09-02",
          "evidence": [
            "断板当日下跌 -6.65%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600865",
      "code": "600865",
      "name": "百大集团",
      "price": 12.56,
      "changePercent": 9.982,
      "turnoverRate": 15.30439,
      "amount": 684652167.0,
      "floatMarketCapYi": 47.26,
      "totalMarketCapYi": 47.26,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-10-28",
          "runEnd": "2024-10-31",
          "runLength": 4,
          "breakDate": "2024-11-01",
          "evidence": [
            "断板当日下跌 -10.14%",
            "断板后两日累计下跌 -8.64%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-04-18",
          "runEnd": "2025-04-22",
          "runLength": 3,
          "breakDate": "2025-04-23",
          "evidence": [
            "断板日高开 4.66% 后盘中回落 -12.88%",
            "断板当日下跌 -8.82%",
            "断板后两日累计下跌 -14.38%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-09-03",
          "runEnd": "2026-09-09",
          "runLength": 5,
          "breakDate": "2026-09-10",
          "evidence": [
            "断板日高开 8.80% 后盘中回落 -10.89%",
            "断板后两日累计下跌 -12.71%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz300493",
      "code": "300493",
      "name": "润欣科技",
      "price": 13.94,
      "changePercent": 19.966,
      "turnoverRate": 9.69282,
      "amount": 671408529.0,
      "floatMarketCapYi": 71.39,
      "totalMarketCapYi": 71.45,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 19.5,
      "aKillEvents": [
        {
          "runStart": "2024-12-11",
          "runEnd": "2024-12-13",
          "runLength": 3,
          "breakDate": "2024-12-16",
          "evidence": [
            "断板日高开 4.84% 后盘中回落 -8.95%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh601929",
      "code": "601929",
      "name": "吉视传媒",
      "price": 2.5,
      "changePercent": 10.132,
      "turnoverRate": 7.17016,
      "amount": 594665267.0,
      "floatMarketCapYi": 87.24,
      "totalMarketCapYi": 87.24,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-11-03",
          "runEnd": "2025-11-05",
          "runLength": 3,
          "breakDate": "2025-11-06",
          "evidence": [
            "断板当日下跌 -9.94%",
            "断板后两日累计下跌 -14.20%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz300010",
      "code": "300010",
      "name": "ST豆神",
      "price": 4.19,
      "changePercent": 8.269,
      "turnoverRate": 8.9024,
      "amount": 589323885.0,
      "floatMarketCapYi": 68.58,
      "totalMarketCapYi": 86.59,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 4.5,
      "aKillEvents": [
        {
          "runStart": "2024-10-28",
          "runEnd": "2024-11-01",
          "runLength": 5,
          "breakDate": "2024-11-04",
          "evidence": [
            "断板当日下跌 -15.62%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2026-09-09",
          "runEnd": "2026-09-10",
          "runLength": 2,
          "breakDate": "2026-09-11",
          "evidence": [
            "断板后两日累计下跌 -19.39%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "live"
    },
    {
      "symbol": "sh600396",
      "code": "600396",
      "name": "华电辽能",
      "price": 10.18,
      "changePercent": 10.054,
      "turnoverRate": 4.04312,
      "amount": 588917345.0,
      "floatMarketCapYi": 149.92,
      "totalMarketCapYi": 149.92,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-04-21",
          "runEnd": "2026-04-23",
          "runLength": 3,
          "breakDate": "2026-04-24",
          "evidence": [
            "断板当日下跌 -6.41%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2026-05-11",
          "runEnd": "2026-05-13",
          "runLength": 3,
          "breakDate": "2026-05-14",
          "evidence": [
            "断板日高开 6.58% 后盘中回落 -5.72%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-07-22",
          "runEnd": "2026-07-23",
          "runLength": 2,
          "breakDate": "2026-07-24",
          "evidence": [
            "断板当日下跌 -9.99%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603990",
      "code": "603990",
      "name": "麦迪科技",
      "price": 22.69,
      "changePercent": 9.985,
      "turnoverRate": 8.02099,
      "amount": 546488453.0,
      "floatMarketCapYi": 69.26,
      "totalMarketCapYi": 69.26,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-12-04",
          "runEnd": "2024-12-05",
          "runLength": 2,
          "breakDate": "2024-12-06",
          "evidence": [
            "断板日高开 10.00% 后盘中回落 -10.49%",
            "断板后两日累计下跌 -10.77%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-01-08",
          "runEnd": "2025-01-10",
          "runLength": 3,
          "breakDate": "2025-01-13",
          "evidence": [
            "断板当日下跌 -6.32%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2025-02-14",
          "runEnd": "2025-02-17",
          "runLength": 2,
          "breakDate": "2025-02-18",
          "evidence": [
            "断板当日下跌 -10.00%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603068",
      "code": "603068",
      "name": "博通集成",
      "price": 37.53,
      "changePercent": 9.994,
      "turnoverRate": 9.80233,
      "amount": 536379249.0,
      "floatMarketCapYi": 56.97,
      "totalMarketCapYi": 56.97,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-01-09",
          "runEnd": "2025-01-10",
          "runLength": 2,
          "breakDate": "2025-01-13",
          "evidence": [
            "断板当日下跌 -9.99%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2025-01-15",
          "runEnd": "2025-01-16",
          "runLength": 2,
          "breakDate": "2025-01-17",
          "evidence": [
            "断板当日下跌 -9.08%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2025-08-27",
          "runEnd": "2025-08-28",
          "runLength": 2,
          "breakDate": "2025-08-29",
          "evidence": [
            "断板日高开 10.00% 后盘中回落 -6.72%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz000710",
      "code": "000710",
      "name": "贝瑞基因",
      "price": 9.99,
      "changePercent": 10.022,
      "turnoverRate": 15.00703,
      "amount": 490401258.0,
      "floatMarketCapYi": 33.52,
      "totalMarketCapYi": 35.32,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-02-14",
          "runEnd": "2025-02-17",
          "runLength": 2,
          "breakDate": "2025-02-18",
          "evidence": [
            "断板当日下跌 -10.00%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2026-08-20",
          "runEnd": "2026-08-21",
          "runLength": 2,
          "breakDate": "2026-08-24",
          "evidence": [
            "断板当日下跌 -5.92%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002759",
      "code": "002759",
      "name": "ST天际",
      "price": 11.74,
      "changePercent": 8.103,
      "turnoverRate": 7.35796,
      "amount": 428259786.0,
      "floatMarketCapYi": 58.82,
      "totalMarketCapYi": 58.86,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 4.5,
      "aKillEvents": [
        {
          "runStart": "2025-06-24",
          "runEnd": "2025-06-26",
          "runLength": 3,
          "breakDate": "2025-06-27",
          "evidence": [
            "断板当日下跌 -9.00%",
            "断板后两日累计下跌 -12.15%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-04-29",
          "runEnd": "2026-05-06",
          "runLength": 3,
          "breakDate": "2026-05-07",
          "evidence": [
            "断板当日下跌 -6.10%",
            "断板后两日累计下跌 -9.39%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-07-27",
          "runEnd": "2026-07-28",
          "runLength": 2,
          "breakDate": "2026-07-29",
          "evidence": [
            "断板当日下跌 -6.41%",
            "断板后两日累计下跌 -8.17%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "live"
    },
    {
      "symbol": "sz002307",
      "code": "002307",
      "name": "北新路桥",
      "price": 3.66,
      "changePercent": 9.91,
      "turnoverRate": 6.51784,
      "amount": 377448866.0,
      "floatMarketCapYi": 59.63,
      "totalMarketCapYi": 60.35,
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
            "断板日高开 8.22% 后盘中回落 -10.27%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2024-12-23",
          "runEnd": "2024-12-24",
          "runLength": 2,
          "breakDate": "2024-12-25",
          "evidence": [
            "断板当日下跌 -7.82%",
            "断板后两日累计下跌 -12.68%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-08-08",
          "runEnd": "2025-08-12",
          "runLength": 3,
          "breakDate": "2025-08-13",
          "evidence": [
            "断板后两日累计下跌 -8.42%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603297",
      "code": "603297",
      "name": "永新光学",
      "price": 105.85,
      "changePercent": 9.997,
      "turnoverRate": 2.94349,
      "amount": 338496019.0,
      "floatMarketCapYi": 117.21,
      "totalMarketCapYi": 117.21,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-09-17",
          "runEnd": "2025-09-19",
          "runLength": 3,
          "breakDate": "2025-09-22",
          "evidence": [
            "断板当日下跌 -7.63%",
            "断板后两日累计下跌 -9.93%"
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
      "price": 8.84,
      "changePercent": 9.95,
      "turnoverRate": 8.66501,
      "amount": 279225738.0,
      "floatMarketCapYi": 33.1,
      "totalMarketCapYi": 33.1,
      "lookbackDays": 521,
      "boardHeight": 1,
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
      "symbol": "sh603956",
      "code": "603956",
      "name": "威派格",
      "price": 6.71,
      "changePercent": 10.0,
      "turnoverRate": 7.34947,
      "amount": 275795258.0,
      "floatMarketCapYi": 38.24,
      "totalMarketCapYi": 38.24,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-02-11",
          "runEnd": "2025-02-18",
          "runLength": 6,
          "breakDate": "2025-02-19",
          "evidence": [
            "断板当日下跌 -9.95%",
            "断板后两日累计下跌 -9.85%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603500",
      "code": "603500",
      "name": "祥和实业",
      "price": 10.29,
      "changePercent": 10.053,
      "turnoverRate": 7.31115,
      "amount": 246356872.0,
      "floatMarketCapYi": 34.24,
      "totalMarketCapYi": 34.24,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-01-06",
          "runEnd": "2025-01-07",
          "runLength": 2,
          "breakDate": "2025-01-08",
          "evidence": [
            "断板当日下跌 -7.39%",
            "断板后两日累计下跌 -15.63%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002596",
      "code": "002596",
      "name": "海南瑞泽",
      "price": 3.33,
      "changePercent": 9.901,
      "turnoverRate": 6.44266,
      "amount": 242131849.0,
      "floatMarketCapYi": 38.18,
      "totalMarketCapYi": 38.21,
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
            "断板当日下跌 -5.38%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2025-11-25",
          "runEnd": "2025-11-26",
          "runLength": 2,
          "breakDate": "2025-11-27",
          "evidence": [
            "断板日高开 3.04% 后盘中回落 -5.57%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-12-19",
          "runEnd": "2025-12-23",
          "runLength": 3,
          "breakDate": "2025-12-24",
          "evidence": [
            "断板后两日累计下跌 -10.65%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz000533",
      "code": "000533",
      "name": "顺钠股份",
      "price": 9.77,
      "changePercent": 10.023,
      "turnoverRate": 3.68975,
      "amount": 241822097.0,
      "floatMarketCapYi": 66.91,
      "totalMarketCapYi": 67.49,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-12-26",
          "runEnd": "2025-01-03",
          "runLength": 6,
          "breakDate": "2025-01-06",
          "evidence": [
            "断板当日下跌 -7.77%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2025-01-07",
          "runEnd": "2025-01-08",
          "runLength": 2,
          "breakDate": "2025-01-09",
          "evidence": [
            "断板日高开 3.41% 后盘中回落 -9.20%",
            "断板当日下跌 -6.10%",
            "断板后两日累计下跌 -15.49%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-03-16",
          "runEnd": "2026-03-17",
          "runLength": 2,
          "breakDate": "2026-03-18",
          "evidence": [
            "断板日高开 2.05% 后盘中回落 -5.73%",
            "断板后两日累计下跌 -9.50%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002045",
      "code": "002045",
      "name": "国光电器",
      "price": 9.9,
      "changePercent": 10.0,
      "turnoverRate": 3.8142,
      "amount": 206783350.0,
      "floatMarketCapYi": 55.62,
      "totalMarketCapYi": 55.69,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-11-15",
          "runEnd": "2024-11-20",
          "runLength": 4,
          "breakDate": "2024-11-21",
          "evidence": [
            "断板日高开 5.37% 后盘中回落 -5.55%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2024-11-22",
          "runEnd": "2024-11-25",
          "runLength": 2,
          "breakDate": "2024-11-26",
          "evidence": [
            "断板当日下跌 -9.99%",
            "断板后两日累计下跌 -10.94%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603185",
      "code": "603185",
      "name": "弘元绿能",
      "price": 14.82,
      "changePercent": 10.022,
      "turnoverRate": 1.95222,
      "amount": 191569347.0,
      "floatMarketCapYi": 100.63,
      "totalMarketCapYi": 101.23,
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
            "断板日高开 9.96% 后盘中回落 -14.20%",
            "断板当日下跌 -5.66%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600481",
      "code": "600481",
      "name": "双良节能",
      "price": 4.11,
      "changePercent": 9.893,
      "turnoverRate": 2.28462,
      "amount": 190812335.0,
      "floatMarketCapYi": 84.84,
      "totalMarketCapYi": 84.84,
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
            "断板当日下跌 -9.25%",
            "断板后两日累计下跌 -9.06%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-02-03",
          "runEnd": "2026-02-04",
          "runLength": 2,
          "breakDate": "2026-02-05",
          "evidence": [
            "断板当日下跌 -9.99%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz000635",
      "code": "000635",
      "name": "英 力 特",
      "price": 8.73,
      "changePercent": 9.95,
      "turnoverRate": 5.80953,
      "amount": 182308115.0,
      "floatMarketCapYi": 32.02,
      "totalMarketCapYi": 34.41,
      "lookbackDays": 520,
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
      "symbol": "sz000428",
      "code": "000428",
      "name": "华天酒店",
      "price": 3.82,
      "changePercent": 10.086,
      "turnoverRate": 4.82385,
      "amount": 179300192.0,
      "floatMarketCapYi": 38.92,
      "totalMarketCapYi": 38.92,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-07-27",
          "runEnd": "2026-07-29",
          "runLength": 3,
          "breakDate": "2026-07-30",
          "evidence": [
            "断板日高开 9.90% 后盘中回落 -13.74%",
            "断板当日下跌 -5.20%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603151",
      "code": "603151",
      "name": "邦基科技",
      "price": 19.68,
      "changePercent": 10.006,
      "turnoverRate": 4.47822,
      "amount": 146752183.0,
      "floatMarketCapYi": 33.92,
      "totalMarketCapYi": 33.92,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-06-04",
          "runEnd": "2025-06-18",
          "runLength": 3,
          "breakDate": "2025-06-19",
          "evidence": [
            "断板日高开 10.17% 后盘中回落 -12.84%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh605188",
      "code": "605188",
      "name": "国光连锁",
      "price": 12.42,
      "changePercent": 10.009,
      "turnoverRate": 2.38058,
      "amount": 144530252.0,
      "floatMarketCapYi": 63.18,
      "totalMarketCapYi": 63.18,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-05-16",
          "runEnd": "2025-05-19",
          "runLength": 2,
          "breakDate": "2025-05-20",
          "evidence": [
            "断板后两日累计下跌 -8.14%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-08-11",
          "runEnd": "2025-08-13",
          "runLength": 3,
          "breakDate": "2025-08-14",
          "evidence": [
            "断板当日下跌 -9.99%",
            "断板后两日累计下跌 -16.63%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-10-13",
          "runEnd": "2025-10-15",
          "runLength": 3,
          "breakDate": "2025-10-16",
          "evidence": [
            "断板后两日累计下跌 -8.67%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz000029",
      "code": "000029",
      "name": "深深房Ａ",
      "price": 20.36,
      "changePercent": 9.995,
      "turnoverRate": 0.75127,
      "amount": 132760561.0,
      "floatMarketCapYi": 181.54,
      "totalMarketCapYi": 205.97,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-06-09",
          "runEnd": "2026-06-10",
          "runLength": 2,
          "breakDate": "2026-06-11",
          "evidence": [
            "断板当日下跌 -5.68%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz300147",
      "code": "300147",
      "name": "*ST香雪",
      "price": 4.85,
      "changePercent": 11.494,
      "turnoverRate": 4.06986,
      "amount": 125359429.0,
      "floatMarketCapYi": 31.89,
      "totalMarketCapYi": 32.07,
      "lookbackDays": 520,
      "boardHeight": 1,
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
      "symbol": "sh688622",
      "code": "688622",
      "name": "*ST禾信",
      "price": 120.0,
      "changePercent": 13.917,
      "turnoverRate": 1.34344,
      "amount": 109925112.0,
      "floatMarketCapYi": 84.56,
      "totalMarketCapYi": 84.56,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 4.5,
      "aKillEvents": [
        {
          "runStart": "2024-09-27",
          "runEnd": "2024-10-08",
          "runLength": 3,
          "breakDate": "2024-10-09",
          "evidence": [
            "断板当日下跌 -7.54%",
            "断板后两日累计下跌 -8.61%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2024-10-17",
          "runEnd": "2024-11-08",
          "runLength": 8,
          "breakDate": "2024-11-11",
          "evidence": [
            "断板当日下跌 -5.39%",
            "断板后两日累计下跌 -11.83%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2024-12-05",
          "runEnd": "2024-12-11",
          "runLength": 5,
          "breakDate": "2024-12-12",
          "evidence": [
            "断板当日下跌 -7.60%",
            "断板后两日累计下跌 -14.18%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "live"
    },
    {
      "symbol": "sh603682",
      "code": "603682",
      "name": "锦和商管",
      "price": 8.23,
      "changePercent": 10.027,
      "turnoverRate": 2.72969,
      "amount": 102287018.0,
      "floatMarketCapYi": 38.89,
      "totalMarketCapYi": 38.89,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-12-13",
          "runEnd": "2024-12-16",
          "runLength": 2,
          "breakDate": "2024-12-17",
          "evidence": [
            "断板日高开 2.63% 后盘中回落 -13.16%",
            "断板当日下跌 -10.88%",
            "断板后两日累计下跌 -18.95%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2024-12-31",
          "runEnd": "2025-01-02",
          "runLength": 2,
          "breakDate": "2025-01-03",
          "evidence": [
            "断板日高开 7.42% 后盘中回落 -16.85%",
            "断板当日下跌 -10.68%",
            "断板后两日累计下跌 -20.31%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600683",
      "code": "600683",
      "name": "京投发展",
      "price": 7.87,
      "changePercent": 10.07,
      "turnoverRate": 1.61854,
      "amount": 92133845.0,
      "floatMarketCapYi": 58.3,
      "totalMarketCapYi": 58.3,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-02-03",
          "runEnd": "2026-02-05",
          "runLength": 3,
          "breakDate": "2026-02-06",
          "evidence": [
            "断板当日下跌 -8.33%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2026-05-08",
          "runEnd": "2026-05-12",
          "runLength": 3,
          "breakDate": "2026-05-13",
          "evidence": [
            "断板当日下跌 -7.63%",
            "断板后两日累计下跌 -15.11%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-08-10",
          "runEnd": "2026-08-13",
          "runLength": 4,
          "breakDate": "2026-08-14",
          "evidence": [
            "断板日高开 9.98% 后盘中回落 -18.14%",
            "断板当日下跌 -9.98%",
            "断板后两日累计下跌 -9.44%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603212",
      "code": "603212",
      "name": "赛伍技术",
      "price": 10.67,
      "changePercent": 10.0,
      "turnoverRate": 1.58134,
      "amount": 72689212.0,
      "floatMarketCapYi": 46.68,
      "totalMarketCapYi": 46.68,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-06-30",
          "runEnd": "2026-07-01",
          "runLength": 2,
          "breakDate": "2026-07-02",
          "evidence": [
            "断板当日下跌 -5.05%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz001269",
      "code": "001269",
      "name": "欧晶科技",
      "price": 19.06,
      "changePercent": 9.983,
      "turnoverRate": 1.48252,
      "amount": 53449745.0,
      "floatMarketCapYi": 36.67,
      "totalMarketCapYi": 36.67,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-04-10",
          "runEnd": "2025-04-11",
          "runLength": 2,
          "breakDate": "2025-04-14",
          "evidence": [
            "断板日高开 6.07% 后盘中回落 -5.76%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603098",
      "code": "603098",
      "name": "森特股份",
      "price": 10.77,
      "changePercent": 10.01,
      "turnoverRate": 0.80035,
      "amount": 45576459.0,
      "floatMarketCapYi": 58.03,
      "totalMarketCapYi": 58.11,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-10-31",
          "runEnd": "2024-11-01",
          "runLength": 2,
          "breakDate": "2024-11-04",
          "evidence": [
            "断板日高开 10.00% 后盘中回落 -6.72%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-08-25",
          "runEnd": "2025-08-26",
          "runLength": 2,
          "breakDate": "2025-08-27",
          "evidence": [
            "断板当日下跌 -9.88%",
            "断板后两日累计下跌 -11.49%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600289",
      "code": "600289",
      "name": "ST信通",
      "price": 5.85,
      "changePercent": 7.735,
      "turnoverRate": 1.12398,
      "amount": 36087281.0,
      "floatMarketCapYi": 33.11,
      "totalMarketCapYi": 36.92,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 4.5,
      "aKillEvents": [
        {
          "runStart": "2025-06-17",
          "runEnd": "2025-06-18",
          "runLength": 2,
          "breakDate": "2025-06-19",
          "evidence": [
            "断板日高开 2.32% 后盘中回落 -6.81%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-06-20",
          "runEnd": "2025-06-25",
          "runLength": 4,
          "breakDate": "2025-06-26",
          "evidence": [
            "断板日高开 4.67% 后盘中回落 -7.40%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-07-09",
          "runEnd": "2025-07-10",
          "runLength": 2,
          "breakDate": "2025-07-11",
          "evidence": [
            "断板日高开 4.87% 后盘中回落 -5.03%"
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
      "price": 4.0,
      "changePercent": 4.987,
      "turnoverRate": 0.81814,
      "amount": 25172482.0,
      "floatMarketCapYi": 31.0,
      "totalMarketCapYi": 31.0,
      "lookbackDays": 520,
      "boardHeight": 1,
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
    }
  ],
  "exceptions": [
    {
      "symbol": "sh601599",
      "code": "601599",
      "name": "浙文影业",
      "price": 4.62,
      "changePercent": 10.0,
      "turnoverRate": 2.74053,
      "amount": 146939118.0,
      "floatMarketCapYi": 53.62,
      "totalMarketCapYi": 53.62,
      "lookbackDays": 521,
      "boardHeight": 4,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh603598",
      "code": "603598",
      "name": "引力传媒",
      "price": 21.66,
      "changePercent": 10.005,
      "turnoverRate": 2.92724,
      "amount": 171313078.0,
      "floatMarketCapYi": 58.53,
      "totalMarketCapYi": 58.53,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-01-14",
          "runEnd": "2025-01-16",
          "runLength": 3,
          "breakDate": "2025-01-17",
          "evidence": [
            "断板当日下跌 -9.98%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2026-02-09",
          "runEnd": "2026-02-10",
          "runLength": 2,
          "breakDate": "2026-02-11",
          "evidence": [
            "断板当日下跌 -6.42%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603657",
      "code": "603657",
      "name": "春光科技",
      "price": 30.8,
      "changePercent": 10.0,
      "turnoverRate": 2.34492,
      "amount": 96514622.0,
      "floatMarketCapYi": 41.64,
      "totalMarketCapYi": 41.64,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-05-06",
          "runEnd": "2025-05-12",
          "runLength": 5,
          "breakDate": "2025-05-13",
          "evidence": [
            "断板日高开 7.83% 后盘中回落 -11.72%",
            "断板后两日累计下跌 -13.30%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh605287",
      "code": "605287",
      "name": "德才股份",
      "price": 55.57,
      "changePercent": 9.996,
      "turnoverRate": 9.36836,
      "amount": 708880050.0,
      "floatMarketCapYi": 77.56,
      "totalMarketCapYi": 77.8,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-10-15",
          "runEnd": "2024-10-16",
          "runLength": 2,
          "breakDate": "2024-10-17",
          "evidence": [
            "断板当日下跌 -10.01%",
            "断板后两日累计下跌 -11.43%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-02-09",
          "runEnd": "2026-02-12",
          "runLength": 4,
          "breakDate": "2026-02-13",
          "evidence": [
            "断板当日下跌 -10.01%",
            "断板后两日累计下跌 -19.02%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-10-09",
          "runEnd": "2026-10-12",
          "runLength": 2,
          "breakDate": "2026-10-13",
          "evidence": [
            "断板日高开 10.00% 后盘中回落 -5.80%"
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
      "price": 49.27,
      "changePercent": 10.002,
      "turnoverRate": 13.4658,
      "amount": 1912045145.0,
      "floatMarketCapYi": 147.06,
      "totalMarketCapYi": 147.81,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz000017",
      "code": "000017",
      "name": "深中华A",
      "price": 7.02,
      "changePercent": 10.031,
      "turnoverRate": 2.50568,
      "amount": 77540112.0,
      "floatMarketCapYi": 30.95,
      "totalMarketCapYi": 48.38,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-11-19",
          "runEnd": "2025-11-21",
          "runLength": 3,
          "breakDate": "2025-11-24",
          "evidence": [
            "断板当日下跌 -9.97%",
            "断板后两日累计下跌 -13.11%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz000603",
      "code": "000603",
      "name": "盛达资源",
      "price": 26.05,
      "changePercent": 10.008,
      "turnoverRate": 7.8708,
      "amount": 1360657059.0,
      "floatMarketCapYi": 173.68,
      "totalMarketCapYi": 179.74,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-06-30",
          "runEnd": "2026-07-01",
          "runLength": 2,
          "breakDate": "2026-07-02",
          "evidence": [
            "断板日高开 4.76% 后盘中回落 -7.14%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002081",
      "code": "002081",
      "name": "金 螳 螂",
      "price": 4.73,
      "changePercent": 10.0,
      "turnoverRate": 1.41099,
      "amount": 177030183.0,
      "floatMarketCapYi": 125.47,
      "totalMarketCapYi": 125.6,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-04-17",
          "runEnd": "2026-04-23",
          "runLength": 5,
          "breakDate": "2026-04-24",
          "evidence": [
            "断板当日下跌 -10.19%",
            "断板后两日累计下跌 -18.87%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002088",
      "code": "002088",
      "name": "鲁阳节能",
      "price": 10.08,
      "changePercent": 10.044,
      "turnoverRate": 9.80963,
      "amount": 478030874.0,
      "floatMarketCapYi": 51.0,
      "totalMarketCapYi": 51.35,
      "lookbackDays": 520,
      "boardHeight": 3,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002309",
      "code": "002309",
      "name": "中利集团",
      "price": 2.92,
      "changePercent": 10.189,
      "turnoverRate": 6.02338,
      "amount": 414556946.0,
      "floatMarketCapYi": 70.26,
      "totalMarketCapYi": 87.82,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-11-11",
          "runEnd": "2025-11-13",
          "runLength": 3,
          "breakDate": "2025-11-14",
          "evidence": [
            "断板当日下跌 -6.87%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2025-12-11",
          "runEnd": "2025-12-12",
          "runLength": 2,
          "breakDate": "2025-12-15",
          "evidence": [
            "断板当日下跌 -5.25%",
            "断板后两日累计下跌 -14.75%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-03-20",
          "runEnd": "2026-03-25",
          "runLength": 4,
          "breakDate": "2026-03-26",
          "evidence": [
            "断板当日下跌 -6.51%",
            "断板后两日累计下跌 -14.60%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002388",
      "code": "002388",
      "name": "新亚制程",
      "price": 6.06,
      "changePercent": 9.982,
      "turnoverRate": 14.55468,
      "amount": 439097451.0,
      "floatMarketCapYi": 30.68,
      "totalMarketCapYi": 30.7,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-10-30",
          "runEnd": "2024-10-31",
          "runLength": 2,
          "breakDate": "2024-11-01",
          "evidence": [
            "断板日高开 9.69% 后盘中回落 -17.96%",
            "断板当日下跌 -10.02%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-05-25",
          "runEnd": "2026-05-26",
          "runLength": 2,
          "breakDate": "2026-05-27",
          "evidence": [
            "断板日高开 3.42% 后盘中回落 -7.51%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-07-24",
          "runEnd": "2026-07-28",
          "runLength": 3,
          "breakDate": "2026-07-29",
          "evidence": [
            "断板当日下跌 -6.44%",
            "断板后两日累计下跌 -15.72%"
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
      "price": 9.82,
      "changePercent": 9.966,
      "turnoverRate": 21.48105,
      "amount": 2133488304.0,
      "floatMarketCapYi": 104.09,
      "totalMarketCapYi": 104.09,
      "lookbackDays": 521,
      "boardHeight": 2,
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
      "symbol": "sz002578",
      "code": "002578",
      "name": "闽发铝业",
      "price": 4.55,
      "changePercent": 9.903,
      "turnoverRate": 2.24274,
      "amount": 87876971.0,
      "floatMarketCapYi": 39.18,
      "totalMarketCapYi": 42.71,
      "lookbackDays": 521,
      "boardHeight": 4,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-01-16",
          "runEnd": "2025-01-17",
          "runLength": 2,
          "breakDate": "2025-01-20",
          "evidence": [
            "断板当日下跌 -6.59%",
            "断板后两日累计下跌 -12.91%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-12-05",
          "runEnd": "2025-12-08",
          "runLength": 2,
          "breakDate": "2025-12-09",
          "evidence": [
            "断板当日下跌 -8.06%",
            "断板后两日累计下跌 -11.54%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-03-30",
          "runEnd": "2026-03-31",
          "runLength": 2,
          "breakDate": "2026-04-01",
          "evidence": [
            "断板当日下跌 -6.82%",
            "断板后两日累计下跌 -9.59%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz003033",
      "code": "003033",
      "name": "征和工业",
      "price": 85.09,
      "changePercent": 10.006,
      "turnoverRate": 7.13046,
      "amount": 485479851.0,
      "floatMarketCapYi": 68.9,
      "totalMarketCapYi": 69.56,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-02-28",
          "runEnd": "2025-03-04",
          "runLength": 3,
          "breakDate": "2025-03-05",
          "evidence": [
            "断板日高开 4.80% 后盘中回落 -11.50%",
            "断板当日下跌 -7.26%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-10-27",
          "runEnd": "2025-10-28",
          "runLength": 2,
          "breakDate": "2025-10-29",
          "evidence": [
            "断板当日下跌 -6.63%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz001337",
      "code": "001337",
      "name": "四川黄金",
      "price": 40.73,
      "changePercent": 9.548,
      "turnoverRate": 6.56882,
      "amount": 1098305994.0,
      "floatMarketCapYi": 171.07,
      "totalMarketCapYi": 171.07,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-01-23",
          "runEnd": "2026-01-29",
          "runLength": 5,
          "breakDate": "2026-01-30",
          "evidence": [
            "断板当日下跌 -10.06%",
            "断板后两日累计下跌 -19.13%"
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
