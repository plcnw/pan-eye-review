window.SCREEN_DATA = {
  "date": "2026-11-18",
  "capturedAt": "2026-11-18T18:23:06+08:00",
  "source": "新浪 A 股行情与腾讯历史日线",
  "marketCount": 5579,
  "limitUpCount": 49,
  "capPassCount": 33,
  "hardExcludedCount": 18,
  "candidateCount": 11,
  "exceptionCount": 5,
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
      "symbol": "sz002685",
      "code": "002685",
      "name": "华东重机",
      "price": 7.37,
      "changePercent": 10.0,
      "turnoverRate": 2.20063,
      "amount": 163417007.0,
      "floatMarketCapYi": 74.26,
      "totalMarketCapYi": 74.27,
      "lookbackDays": 520,
      "boardHeight": 4,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-10-08",
          "runEnd": "2024-10-09",
          "runLength": 2,
          "breakDate": "2024-10-10",
          "evidence": [
            "断板日高开 8.91% 后盘中回落 -15.37%",
            "断板当日下跌 -7.83%",
            "断板后两日累计下跌 -10.00%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2024-10-18",
          "runEnd": "2024-10-23",
          "runLength": 4,
          "breakDate": "2024-10-24",
          "evidence": [
            "断板日高开 9.99% 后盘中回落 -15.34%",
            "断板当日下跌 -6.88%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2024-10-25",
          "runEnd": "2024-10-28",
          "runLength": 2,
          "breakDate": "2024-10-29",
          "evidence": [
            "断板日高开 10.06% 后盘中回落 -5.66%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz301391",
      "code": "301391",
      "name": "卡莱特",
      "price": 46.66,
      "changePercent": 20.01,
      "turnoverRate": 10.14917,
      "amount": 394627715.0,
      "floatMarketCapYi": 43.32,
      "totalMarketCapYi": 44.33,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 19.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002843",
      "code": "002843",
      "name": "泰嘉股份",
      "price": 17.34,
      "changePercent": 10.025,
      "turnoverRate": 27.56611,
      "amount": 1115749025.0,
      "floatMarketCapYi": 43.42,
      "totalMarketCapYi": 44.36,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh600410",
      "code": "600410",
      "name": "华胜天成",
      "price": 16.82,
      "changePercent": 10.007,
      "turnoverRate": 19.02935,
      "amount": 3412211373.0,
      "floatMarketCapYi": 184.43,
      "totalMarketCapYi": 184.43,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-05-06",
          "runEnd": "2025-05-07",
          "runLength": 2,
          "breakDate": "2025-05-08",
          "evidence": [
            "断板日高开 2.55% 后盘中回落 -5.06%",
            "断板后两日累计下跌 -9.28%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-08-18",
          "runEnd": "2025-08-19",
          "runLength": 2,
          "breakDate": "2025-08-20",
          "evidence": [
            "断板当日下跌 -7.30%",
            "断板后两日累计下跌 -10.38%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-01-14",
          "runEnd": "2026-01-15",
          "runLength": 2,
          "breakDate": "2026-01-16",
          "evidence": [
            "断板当日下跌 -9.95%",
            "断板后两日累计下跌 -16.75%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603324",
      "code": "603324",
      "name": "盛剑科技",
      "price": 22.9,
      "changePercent": 9.99,
      "turnoverRate": 1.34459,
      "amount": 44917434.0,
      "floatMarketCapYi": 33.41,
      "totalMarketCapYi": 34.58,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz300324",
      "code": "300324",
      "name": "旋极信息",
      "price": 4.44,
      "changePercent": 20.0,
      "turnoverRate": 18.51461,
      "amount": 1325750085.0,
      "floatMarketCapYi": 75.92,
      "totalMarketCapYi": 76.71,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 19.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz000711",
      "code": "000711",
      "name": "京蓝科技",
      "price": 3.48,
      "changePercent": 10.127,
      "turnoverRate": 3.33901,
      "amount": 263324135.0,
      "floatMarketCapYi": 82.02,
      "totalMarketCapYi": 102.78,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh600336",
      "code": "600336",
      "name": "澳柯玛",
      "price": 6.14,
      "changePercent": 10.036,
      "turnoverRate": 1.3452,
      "amount": 65324435.0,
      "floatMarketCapYi": 49.0,
      "totalMarketCapYi": 49.0,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz000410",
      "code": "000410",
      "name": "沈阳机床",
      "price": 5.71,
      "changePercent": 10.019,
      "turnoverRate": 5.45045,
      "amount": 604185279.0,
      "floatMarketCapYi": 112.55,
      "totalMarketCapYi": 151.26,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002042",
      "code": "002042",
      "name": "华孚时尚",
      "price": 3.96,
      "changePercent": 10.0,
      "turnoverRate": 9.93102,
      "amount": 637167068.0,
      "floatMarketCapYi": 67.35,
      "totalMarketCapYi": 67.35,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002955",
      "code": "002955",
      "name": "鸿合科技",
      "price": 27.39,
      "changePercent": 10.0,
      "turnoverRate": 3.25927,
      "amount": 178355627.0,
      "floatMarketCapYi": 56.33,
      "totalMarketCapYi": 64.82,
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
      "symbol": "sh603629",
      "code": "603629",
      "name": "利通电子",
      "price": 60.93,
      "changePercent": 10.002,
      "turnoverRate": 10.03069,
      "amount": 2115359486.0,
      "floatMarketCapYi": 219.79,
      "totalMarketCapYi": 223.45,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-02-27",
          "runEnd": "2026-03-02",
          "runLength": 2,
          "breakDate": "2026-03-03",
          "evidence": [
            "断板当日下跌 -9.83%",
            "断板后两日累计下跌 -11.15%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-07-21",
          "runEnd": "2026-07-22",
          "runLength": 2,
          "breakDate": "2026-07-23",
          "evidence": [
            "断板后两日累计下跌 -8.23%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz301396",
      "code": "301396",
      "name": "宏景科技",
      "price": 114.6,
      "changePercent": 20.0,
      "turnoverRate": 13.67269,
      "amount": 2021234038.0,
      "floatMarketCapYi": 162.17,
      "totalMarketCapYi": 246.3,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 19.5,
      "aKillEvents": [
        {
          "runStart": "2025-02-13",
          "runEnd": "2025-02-14",
          "runLength": 2,
          "breakDate": "2025-02-17",
          "evidence": [
            "断板日高开 20.27% 后盘中回落 -7.59%"
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
      "price": 53.76,
      "changePercent": 10.006,
      "turnoverRate": 16.12934,
      "amount": 1799247950.0,
      "floatMarketCapYi": 116.46,
      "totalMarketCapYi": 153.94,
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
        },
        {
          "runStart": "2026-11-05",
          "runEnd": "2026-11-06",
          "runLength": 2,
          "breakDate": "2026-11-09",
          "evidence": [
            "断板日高开 7.38% 后盘中回落 -12.94%",
            "断板当日下跌 -6.51%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600186",
      "code": "600186",
      "name": "莲花控股",
      "price": 8.98,
      "changePercent": 10.049,
      "turnoverRate": 10.95931,
      "amount": 1696162775.0,
      "floatMarketCapYi": 160.66,
      "totalMarketCapYi": 160.99,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-12-31",
          "runEnd": "2025-01-02",
          "runLength": 2,
          "breakDate": "2025-01-03",
          "evidence": [
            "断板当日下跌 -10.06%",
            "断板后两日累计下跌 -19.00%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-05-22",
          "runEnd": "2026-05-25",
          "runLength": 2,
          "breakDate": "2026-05-26",
          "evidence": [
            "断板后两日累计下跌 -8.20%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002148",
      "code": "002148",
      "name": "北纬科技",
      "price": 8.92,
      "changePercent": 9.988,
      "turnoverRate": 42.01816,
      "amount": 1676260982.0,
      "floatMarketCapYi": 40.23,
      "totalMarketCapYi": 49.84,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-08-04",
          "runEnd": "2025-08-07",
          "runLength": 4,
          "breakDate": "2025-08-08",
          "evidence": [
            "断板日高开 6.08% 后盘中回落 -14.00%",
            "断板当日下跌 -8.78%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-11-11",
          "runEnd": "2026-11-16",
          "runLength": 4,
          "breakDate": "2026-11-17",
          "evidence": [
            "断板当日下跌 -7.31%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz000815",
      "code": "000815",
      "name": "美利云",
      "price": 14.31,
      "changePercent": 9.992,
      "turnoverRate": 10.52254,
      "amount": 1023883312.0,
      "floatMarketCapYi": 99.49,
      "totalMarketCapYi": 99.49,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-03-05",
          "runEnd": "2026-03-09",
          "runLength": 3,
          "breakDate": "2026-03-10",
          "evidence": [
            "断板日高开 5.97% 后盘中回落 -5.85%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-07-20",
          "runEnd": "2026-07-23",
          "runLength": 4,
          "breakDate": "2026-07-24",
          "evidence": [
            "断板当日下跌 -8.75%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz000158",
      "code": "000158",
      "name": "常山北明",
      "price": 12.43,
      "changePercent": 10.0,
      "turnoverRate": 4.79311,
      "amount": 919356472.0,
      "floatMarketCapYi": 197.72,
      "totalMarketCapYi": 198.71,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-10-30",
          "runEnd": "2024-10-31",
          "runLength": 2,
          "breakDate": "2024-11-01",
          "evidence": [
            "断板日高开 4.70% 后盘中回落 -14.04%",
            "断板当日下跌 -10.00%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603220",
      "code": "603220",
      "name": "中贝通信",
      "price": 15.62,
      "changePercent": 10.0,
      "turnoverRate": 9.78307,
      "amount": 797651527.0,
      "floatMarketCapYi": 83.78,
      "totalMarketCapYi": 83.78,
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
            "断板当日下跌 -9.11%",
            "断板后两日累计下跌 -9.03%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002272",
      "code": "002272",
      "name": "川润股份",
      "price": 12.58,
      "changePercent": 9.965,
      "turnoverRate": 12.4896,
      "amount": 633356770.0,
      "floatMarketCapYi": 52.7,
      "totalMarketCapYi": 61.0,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-10-30",
          "runEnd": "2024-10-31",
          "runLength": 2,
          "breakDate": "2024-11-01",
          "evidence": [
            "断板当日下跌 -10.02%",
            "断板后两日累计下跌 -19.02%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-04-30",
          "runEnd": "2025-05-06",
          "runLength": 2,
          "breakDate": "2025-05-07",
          "evidence": [
            "断板日高开 8.84% 后盘中回落 -7.26%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-05-18",
          "runEnd": "2026-05-20",
          "runLength": 3,
          "breakDate": "2026-05-21",
          "evidence": [
            "断板当日下跌 -9.98%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600162",
      "code": "600162",
      "name": "香江控股",
      "price": 3.29,
      "changePercent": 10.033,
      "turnoverRate": 4.72275,
      "amount": 492627965.0,
      "floatMarketCapYi": 107.53,
      "totalMarketCapYi": 107.53,
      "lookbackDays": 520,
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
      "symbol": "sh600156",
      "code": "600156",
      "name": "华升股份",
      "price": 8.09,
      "changePercent": 10.068,
      "turnoverRate": 14.47458,
      "amount": 448939593.0,
      "floatMarketCapYi": 32.53,
      "totalMarketCapYi": 32.53,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-04-16",
          "runEnd": "2026-04-20",
          "runLength": 3,
          "breakDate": "2026-04-21",
          "evidence": [
            "断板日高开 10.02% 后盘中回落 -12.68%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-04-28",
          "runEnd": "2026-04-29",
          "runLength": 2,
          "breakDate": "2026-04-30",
          "evidence": [
            "断板日高开 5.82% 后盘中回落 -8.64%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-05-13",
          "runEnd": "2026-05-14",
          "runLength": 2,
          "breakDate": "2026-05-15",
          "evidence": [
            "断板日高开 4.86% 后盘中回落 -11.96%",
            "断板当日下跌 -7.68%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603887",
      "code": "603887",
      "name": "城地香江",
      "price": 8.18,
      "changePercent": 9.946,
      "turnoverRate": 7.94147,
      "amount": 381726887.0,
      "floatMarketCapYi": 49.25,
      "totalMarketCapYi": 49.25,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-08-11",
          "runEnd": "2026-08-13",
          "runLength": 3,
          "breakDate": "2026-08-14",
          "evidence": [
            "断板日高开 2.96% 后盘中回落 -7.31%",
            "断板后两日累计下跌 -8.09%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz000980",
      "code": "000980",
      "name": "众泰汽车",
      "price": 1.67,
      "changePercent": 9.868,
      "turnoverRate": 4.50516,
      "amount": 372748468.0,
      "floatMarketCapYi": 84.21,
      "totalMarketCapYi": 84.21,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-09-27",
          "runEnd": "2024-10-08",
          "runLength": 3,
          "breakDate": "2024-10-09",
          "evidence": [
            "断板当日下跌 -10.09%",
            "断板后两日累计下跌 -12.39%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-09-08",
          "runEnd": "2026-09-09",
          "runLength": 2,
          "breakDate": "2026-09-10",
          "evidence": [
            "断板日高开 6.93% 后盘中回落 -10.65%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-09-11",
          "runEnd": "2026-09-14",
          "runLength": 2,
          "breakDate": "2026-09-15",
          "evidence": [
            "断板日高开 3.43% 后盘中回落 -6.22%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002197",
      "code": "002197",
      "name": "证通电子",
      "price": 6.11,
      "changePercent": 10.09,
      "turnoverRate": 7.18699,
      "amount": 229285580.0,
      "floatMarketCapYi": 32.63,
      "totalMarketCapYi": 37.54,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-07-21",
          "runEnd": "2026-07-23",
          "runLength": 3,
          "breakDate": "2026-07-24",
          "evidence": [
            "断板当日下跌 -10.04%",
            "断板后两日累计下跌 -10.56%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603985",
      "code": "603985",
      "name": "恒润股份",
      "price": 14.73,
      "changePercent": 10.007,
      "turnoverRate": 3.25986,
      "amount": 203075333.0,
      "floatMarketCapYi": 64.94,
      "totalMarketCapYi": 64.94,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-03-31",
          "runEnd": "2025-04-02",
          "runLength": 3,
          "breakDate": "2025-04-03",
          "evidence": [
            "断板后两日累计下跌 -12.37%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002194",
      "code": "002194",
      "name": "武汉凡谷",
      "price": 9.31,
      "changePercent": 10.047,
      "turnoverRate": 3.46768,
      "amount": 166126062.0,
      "floatMarketCapYi": 47.91,
      "totalMarketCapYi": 63.61,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-11-19",
          "runEnd": "2024-11-20",
          "runLength": 2,
          "breakDate": "2024-11-21",
          "evidence": [
            "断板日高开 8.91% 后盘中回落 -11.78%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-08-06",
          "runEnd": "2026-08-07",
          "runLength": 2,
          "breakDate": "2026-08-10",
          "evidence": [
            "断板当日下跌 -9.91%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002403",
      "code": "002403",
      "name": "爱仕达",
      "price": 11.36,
      "changePercent": 9.971,
      "turnoverRate": 2.8495,
      "amount": 94921903.0,
      "floatMarketCapYi": 33.76,
      "totalMarketCapYi": 38.7,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-11-04",
          "runEnd": "2024-11-06",
          "runLength": 3,
          "breakDate": "2024-11-07",
          "evidence": [
            "断板日高开 10.03% 后盘中回落 -6.42%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2024-11-19",
          "runEnd": "2024-11-25",
          "runLength": 5,
          "breakDate": "2024-11-26",
          "evidence": [
            "断板当日下跌 -10.03%",
            "断板后两日累计下跌 -19.06%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-09-03",
          "runEnd": "2026-09-08",
          "runLength": 4,
          "breakDate": "2026-09-09",
          "evidence": [
            "断板当日下跌 -9.08%",
            "断板后两日累计下跌 -14.29%"
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
      "price": 33.94,
      "changePercent": 10.016,
      "turnoverRate": 1.19942,
      "amount": 54720248.0,
      "floatMarketCapYi": 45.88,
      "totalMarketCapYi": 45.88,
      "lookbackDays": 521,
      "boardHeight": 1,
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
    }
  ],
  "exceptions": [
    {
      "symbol": "sh600410",
      "code": "600410",
      "name": "华胜天成",
      "price": 16.82,
      "changePercent": 10.007,
      "turnoverRate": 19.02935,
      "amount": 3412211373.0,
      "floatMarketCapYi": 184.43,
      "totalMarketCapYi": 184.43,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-05-06",
          "runEnd": "2025-05-07",
          "runLength": 2,
          "breakDate": "2025-05-08",
          "evidence": [
            "断板日高开 2.55% 后盘中回落 -5.06%",
            "断板后两日累计下跌 -9.28%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-08-18",
          "runEnd": "2025-08-19",
          "runLength": 2,
          "breakDate": "2025-08-20",
          "evidence": [
            "断板当日下跌 -7.30%",
            "断板后两日累计下跌 -10.38%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-01-14",
          "runEnd": "2026-01-15",
          "runLength": 2,
          "breakDate": "2026-01-16",
          "evidence": [
            "断板当日下跌 -9.95%",
            "断板后两日累计下跌 -16.75%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603324",
      "code": "603324",
      "name": "盛剑科技",
      "price": 22.9,
      "changePercent": 9.99,
      "turnoverRate": 1.34459,
      "amount": 44917434.0,
      "floatMarketCapYi": 33.41,
      "totalMarketCapYi": 34.58,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002685",
      "code": "002685",
      "name": "华东重机",
      "price": 7.37,
      "changePercent": 10.0,
      "turnoverRate": 2.20063,
      "amount": 163417007.0,
      "floatMarketCapYi": 74.26,
      "totalMarketCapYi": 74.27,
      "lookbackDays": 520,
      "boardHeight": 4,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-10-08",
          "runEnd": "2024-10-09",
          "runLength": 2,
          "breakDate": "2024-10-10",
          "evidence": [
            "断板日高开 8.91% 后盘中回落 -15.37%",
            "断板当日下跌 -7.83%",
            "断板后两日累计下跌 -10.00%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2024-10-18",
          "runEnd": "2024-10-23",
          "runLength": 4,
          "breakDate": "2024-10-24",
          "evidence": [
            "断板日高开 9.99% 后盘中回落 -15.34%",
            "断板当日下跌 -6.88%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2024-10-25",
          "runEnd": "2024-10-28",
          "runLength": 2,
          "breakDate": "2024-10-29",
          "evidence": [
            "断板日高开 10.06% 后盘中回落 -5.66%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002843",
      "code": "002843",
      "name": "泰嘉股份",
      "price": 17.34,
      "changePercent": 10.025,
      "turnoverRate": 27.56611,
      "amount": 1115749025.0,
      "floatMarketCapYi": 43.42,
      "totalMarketCapYi": 44.36,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz301391",
      "code": "301391",
      "name": "卡莱特",
      "price": 46.66,
      "changePercent": 20.01,
      "turnoverRate": 10.14917,
      "amount": 394627715.0,
      "floatMarketCapYi": 43.32,
      "totalMarketCapYi": 44.33,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 19.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    }
  ],
  "failures": [
    "胜科纳米: 请求失败：https://web.ifzq.gtimg.cn/appstock/app/fqkline/get?param=sh688757,day,,,520,qfq",
    "ST交昂: 请求失败：https://web.ifzq.gtimg.cn/appstock/app/fqkline/get?param=sh600530,day,,,520,qfq",
    "*ST高科: 请求失败：https://web.ifzq.gtimg.cn/appstock/app/fqkline/get?param=sh600730,day,,,520,qfq",
    "*ST香雪: 请求失败：https://web.ifzq.gtimg.cn/appstock/app/fqkline/get?param=sz300147,day,,,520,qfq"
  ]
};
