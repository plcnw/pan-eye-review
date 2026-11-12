window.SCREEN_DATA = {
  "date": "2026-11-12",
  "capturedAt": "2026-11-12T18:23:17+08:00",
  "source": "新浪 A 股行情与腾讯历史日线",
  "marketCount": 5579,
  "limitUpCount": 41,
  "capPassCount": 35,
  "hardExcludedCount": 16,
  "candidateCount": 16,
  "exceptionCount": 10,
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
      "price": 13.17,
      "changePercent": 10.025,
      "turnoverRate": 19.85522,
      "amount": 2104521385.0,
      "floatMarketCapYi": 107.08,
      "totalMarketCapYi": 107.08,
      "lookbackDays": 521,
      "boardHeight": 5,
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
      "price": 7.18,
      "changePercent": 9.954,
      "turnoverRate": 38.61897,
      "amount": 2292133972.0,
      "floatMarketCapYi": 63.53,
      "totalMarketCapYi": 63.53,
      "lookbackDays": 521,
      "boardHeight": 5,
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
      "symbol": "sh603706",
      "code": "603706",
      "name": "东方环宇",
      "price": 26.87,
      "changePercent": 9.988,
      "turnoverRate": 8.80724,
      "amount": 426106937.0,
      "floatMarketCapYi": 50.89,
      "totalMarketCapYi": 50.89,
      "lookbackDays": 521,
      "boardHeight": 4,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002623",
      "code": "002623",
      "name": "亚玛顿",
      "price": 25.66,
      "changePercent": 9.987,
      "turnoverRate": 0.7862,
      "amount": 38862070.0,
      "floatMarketCapYi": 49.43,
      "totalMarketCapYi": 49.54,
      "lookbackDays": 521,
      "boardHeight": 4,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh603536",
      "code": "603536",
      "name": "惠发食品",
      "price": 13.04,
      "changePercent": 10.042,
      "turnoverRate": 24.02857,
      "amount": 691559478.0,
      "floatMarketCapYi": 31.37,
      "totalMarketCapYi": 31.37,
      "lookbackDays": 521,
      "boardHeight": 3,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-12-09",
          "runEnd": "2024-12-13",
          "runLength": 5,
          "breakDate": "2024-12-16",
          "evidence": [
            "断板后两日累计下跌 -14.14%"
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
      "price": 67.11,
      "changePercent": 9.998,
      "turnoverRate": 1.43637,
      "amount": 126710503.0,
      "floatMarketCapYi": 89.98,
      "totalMarketCapYi": 89.98,
      "lookbackDays": 521,
      "boardHeight": 3,
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
      "symbol": "sh603135",
      "code": "603135",
      "name": "中重科技",
      "price": 10.18,
      "changePercent": 10.054,
      "turnoverRate": 11.23887,
      "amount": 699806173.0,
      "floatMarketCapYi": 64.09,
      "totalMarketCapYi": 64.71,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002148",
      "code": "002148",
      "name": "北纬科技",
      "price": 7.23,
      "changePercent": 10.046,
      "turnoverRate": 30.008,
      "amount": 954756774.0,
      "floatMarketCapYi": 32.61,
      "totalMarketCapYi": 40.4,
      "lookbackDays": 521,
      "boardHeight": 2,
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
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603725",
      "code": "603725",
      "name": "天安新材",
      "price": 13.16,
      "changePercent": 10.033,
      "turnoverRate": 5.96363,
      "amount": 238894772.0,
      "floatMarketCapYi": 40.12,
      "totalMarketCapYi": 40.12,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh603396",
      "code": "603396",
      "name": "金辰股份",
      "price": 32.11,
      "changePercent": 10.003,
      "turnoverRate": 0.89195,
      "amount": 39675116.0,
      "floatMarketCapYi": 44.48,
      "totalMarketCapYi": 44.48,
      "lookbackDays": 521,
      "boardHeight": 2,
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
      "symbol": "sh605222",
      "code": "605222",
      "name": "起帆电缆",
      "price": 20.55,
      "changePercent": 10.011,
      "turnoverRate": 2.81723,
      "amount": 232447598.0,
      "floatMarketCapYi": 84.85,
      "totalMarketCapYi": 84.85,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh603175",
      "code": "603175",
      "name": "超颖电子",
      "price": 99.54,
      "changePercent": 10.001,
      "turnoverRate": 5.03499,
      "amount": 300989403.0,
      "floatMarketCapYi": 60.47,
      "totalMarketCapYi": 435.02,
      "lookbackDays": 256,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh601091",
      "code": "601091",
      "name": "沈鼓集团",
      "price": 20.92,
      "changePercent": 9.989,
      "turnoverRate": 32.9229,
      "amount": 1397162116.0,
      "floatMarketCapYi": 44.18,
      "totalMarketCapYi": 650.61,
      "lookbackDays": 35,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh600558",
      "code": "600558",
      "name": "大西洋",
      "price": 5.96,
      "changePercent": 9.963,
      "turnoverRate": 19.09056,
      "amount": 1009116280.0,
      "floatMarketCapYi": 53.5,
      "totalMarketCapYi": 53.5,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh600853",
      "code": "600853",
      "name": "龙建股份",
      "price": 4.21,
      "changePercent": 9.922,
      "turnoverRate": 9.80647,
      "amount": 406689902.0,
      "floatMarketCapYi": 42.68,
      "totalMarketCapYi": 42.68,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh600569",
      "code": "600569",
      "name": "安阳钢铁",
      "price": 2.0,
      "changePercent": 9.89,
      "turnoverRate": 4.4821,
      "amount": 249681120.0,
      "floatMarketCapYi": 57.45,
      "totalMarketCapYi": 57.45,
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
      "symbol": "sz002086",
      "code": "002086",
      "name": "东方海洋",
      "price": 5.16,
      "changePercent": 10.021,
      "turnoverRate": 35.1421,
      "amount": 2851430017.0,
      "floatMarketCapYi": 81.58,
      "totalMarketCapYi": 101.08,
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
      "symbol": "sh601606",
      "code": "601606",
      "name": "长城军工",
      "price": 32.62,
      "changePercent": 10.017,
      "turnoverRate": 9.50827,
      "amount": 2157328294.0,
      "floatMarketCapYi": 236.24,
      "totalMarketCapYi": 236.24,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-06-30",
          "runEnd": "2025-07-01",
          "runLength": 2,
          "breakDate": "2025-07-02",
          "evidence": [
            "断板当日下跌 -7.39%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2026-07-23",
          "runEnd": "2026-07-27",
          "runLength": 3,
          "breakDate": "2026-07-28",
          "evidence": [
            "断板日高开 6.35% 后盘中回落 -10.53%"
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
      "price": 2.81,
      "changePercent": 10.196,
      "turnoverRate": 20.25686,
      "amount": 1928930079.0,
      "floatMarketCapYi": 98.06,
      "totalMarketCapYi": 98.06,
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
      "symbol": "sh600802",
      "code": "600802",
      "name": "福建水泥",
      "price": 8.59,
      "changePercent": 9.987,
      "turnoverRate": 43.74837,
      "amount": 1688330803.0,
      "floatMarketCapYi": 39.36,
      "totalMarketCapYi": 39.36,
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
            "断板当日下跌 -8.85%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2025-10-27",
          "runEnd": "2025-10-28",
          "runLength": 2,
          "breakDate": "2025-10-29",
          "evidence": [
            "断板日高开 10.00% 后盘中回落 -8.83%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh601188",
      "code": "601188",
      "name": "龙江交通",
      "price": 4.72,
      "changePercent": 10.023,
      "turnoverRate": 26.40704,
      "amount": 1554108410.0,
      "floatMarketCapYi": 61.62,
      "totalMarketCapYi": 61.62,
      "lookbackDays": 521,
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
        },
        {
          "runStart": "2026-11-06",
          "runEnd": "2026-11-10",
          "runLength": 3,
          "breakDate": "2026-11-11",
          "evidence": [
            "断板当日下跌 -6.94%"
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
      "price": 6.66,
      "changePercent": 10.083,
      "turnoverRate": 29.26827,
      "amount": 1461034681.0,
      "floatMarketCapYi": 50.96,
      "totalMarketCapYi": 51.0,
      "lookbackDays": 521,
      "boardHeight": 1,
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
      "symbol": "sz002696",
      "code": "002696",
      "name": "百洋股份",
      "price": 11.68,
      "changePercent": 9.981,
      "turnoverRate": 36.51423,
      "amount": 1412431436.0,
      "floatMarketCapYi": 39.04,
      "totalMarketCapYi": 40.38,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-07-02",
          "runEnd": "2025-07-03",
          "runLength": 2,
          "breakDate": "2025-07-04",
          "evidence": [
            "断板当日下跌 -10.07%",
            "断板后两日累计下跌 -15.78%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-10-09",
          "runEnd": "2026-10-15",
          "runLength": 5,
          "breakDate": "2026-10-16",
          "evidence": [
            "断板当日下跌 -9.97%",
            "断板后两日累计下跌 -19.01%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-10-20",
          "runEnd": "2026-10-21",
          "runLength": 2,
          "breakDate": "2026-10-22",
          "evidence": [
            "断板日高开 7.22% 后盘中回落 -13.03%",
            "断板当日下跌 -6.75%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz000995",
      "code": "000995",
      "name": "皇台酒业",
      "price": 18.32,
      "changePercent": 10.03,
      "turnoverRate": 38.20457,
      "amount": 1168199551.0,
      "floatMarketCapYi": 32.5,
      "totalMarketCapYi": 32.5,
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
      "symbol": "sh601566",
      "code": "601566",
      "name": "九牧王",
      "price": 12.47,
      "changePercent": 9.965,
      "turnoverRate": 12.94326,
      "amount": 881530529.0,
      "floatMarketCapYi": 71.66,
      "totalMarketCapYi": 71.66,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-11-12",
          "runEnd": "2025-11-20",
          "runLength": 7,
          "breakDate": "2025-11-21",
          "evidence": [
            "断板当日下跌 -10.27%",
            "断板后两日累计下跌 -19.54%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-12-18",
          "runEnd": "2025-12-19",
          "runLength": 2,
          "breakDate": "2025-12-22",
          "evidence": [
            "断板日高开 6.19% 后盘中回落 -8.91%",
            "断板后两日累计下跌 -9.89%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002693",
      "code": "002693",
      "name": "双成药业",
      "price": 8.73,
      "changePercent": 9.95,
      "turnoverRate": 11.82077,
      "amount": 415896459.0,
      "floatMarketCapYi": 35.88,
      "totalMarketCapYi": 36.2,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-09-12",
          "runEnd": "2024-10-09",
          "runLength": 13,
          "breakDate": "2024-10-10",
          "evidence": [
            "断板日高开 10.00% 后盘中回落 -18.18%",
            "断板当日下跌 -10.00%",
            "断板后两日累计下跌 -18.99%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2024-10-14",
          "runEnd": "2024-10-22",
          "runLength": 7,
          "breakDate": "2024-10-23",
          "evidence": [
            "断板当日下跌 -9.99%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2024-11-19",
          "runEnd": "2024-11-21",
          "runLength": 3,
          "breakDate": "2024-11-22",
          "evidence": [
            "断板当日下跌 -9.67%",
            "断板后两日累计下跌 -18.71%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600467",
      "code": "600467",
      "name": "好当家",
      "price": 2.48,
      "changePercent": 10.222,
      "turnoverRate": 9.32417,
      "amount": 325056693.0,
      "floatMarketCapYi": 36.23,
      "totalMarketCapYi": 36.23,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-11-07",
          "runEnd": "2024-11-08",
          "runLength": 2,
          "breakDate": "2024-11-11",
          "evidence": [
            "断板当日下跌 -5.98%",
            "断板后两日累计下跌 -8.79%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002021",
      "code": "002021",
      "name": "中捷资源",
      "price": 2.63,
      "changePercent": 10.042,
      "turnoverRate": 8.63373,
      "amount": 257359175.0,
      "floatMarketCapYi": 31.44,
      "totalMarketCapYi": 31.44,
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
            "断板日高开 5.49% 后盘中回落 -12.15%",
            "断板当日下跌 -7.33%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002187",
      "code": "002187",
      "name": "广百股份",
      "price": 6.34,
      "changePercent": 10.069,
      "turnoverRate": 4.46225,
      "amount": 191914395.0,
      "floatMarketCapYi": 44.44,
      "totalMarketCapYi": 44.44,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-01-07",
          "runEnd": "2025-01-08",
          "runLength": 2,
          "breakDate": "2025-01-09",
          "evidence": [
            "断板当日下跌 -5.32%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2025-01-15",
          "runEnd": "2025-01-16",
          "runLength": 2,
          "breakDate": "2025-01-17",
          "evidence": [
            "断板日高开 4.59% 后盘中回落 -10.77%",
            "断板当日下跌 -6.68%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603958",
      "code": "603958",
      "name": "哈森股份",
      "price": 18.38,
      "changePercent": 9.994,
      "turnoverRate": 4.49192,
      "amount": 176905114.0,
      "floatMarketCapYi": 40.32,
      "totalMarketCapYi": 40.32,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-12-11",
          "runEnd": "2024-12-30",
          "runLength": 4,
          "breakDate": "2024-12-31",
          "evidence": [
            "断板日高开 5.21% 后盘中回落 -14.47%",
            "断板当日下跌 -10.02%",
            "断板后两日累计下跌 -19.02%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-03-11",
          "runEnd": "2025-03-12",
          "runLength": 2,
          "breakDate": "2025-03-13",
          "evidence": [
            "断板后两日累计下跌 -13.32%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-08-17",
          "runEnd": "2026-08-18",
          "runLength": 2,
          "breakDate": "2026-08-19",
          "evidence": [
            "断板日高开 7.69% 后盘中回落 -14.59%",
            "断板当日下跌 -8.02%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002628",
      "code": "002628",
      "name": "成都路桥",
      "price": 4.74,
      "changePercent": 9.977,
      "turnoverRate": 3.05439,
      "amount": 108481734.0,
      "floatMarketCapYi": 35.8,
      "totalMarketCapYi": 35.89,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-10-14",
          "runEnd": "2024-10-23",
          "runLength": 8,
          "breakDate": "2024-10-24",
          "evidence": [
            "断板日高开 9.96% 后盘中回落 -7.55%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600857",
      "code": "600857",
      "name": "宁波中百",
      "price": 15.0,
      "changePercent": 9.971,
      "turnoverRate": 3.05785,
      "amount": 99725484.0,
      "floatMarketCapYi": 33.65,
      "totalMarketCapYi": 33.65,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-05-13",
          "runEnd": "2026-05-14",
          "runLength": 2,
          "breakDate": "2026-05-15",
          "evidence": [
            "断板当日下跌 -10.02%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    }
  ],
  "exceptions": [
    {
      "symbol": "sh600327",
      "code": "600327",
      "name": "大东方",
      "price": 7.18,
      "changePercent": 9.954,
      "turnoverRate": 38.61897,
      "amount": 2292133972.0,
      "floatMarketCapYi": 63.53,
      "totalMarketCapYi": 63.53,
      "lookbackDays": 521,
      "boardHeight": 5,
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
      "symbol": "sh603135",
      "code": "603135",
      "name": "中重科技",
      "price": 10.18,
      "changePercent": 10.054,
      "turnoverRate": 11.23887,
      "amount": 699806173.0,
      "floatMarketCapYi": 64.09,
      "totalMarketCapYi": 64.71,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh603366",
      "code": "603366",
      "name": "日出东方",
      "price": 13.17,
      "changePercent": 10.025,
      "turnoverRate": 19.85522,
      "amount": 2104521385.0,
      "floatMarketCapYi": 107.08,
      "totalMarketCapYi": 107.08,
      "lookbackDays": 521,
      "boardHeight": 5,
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
      "symbol": "sh603396",
      "code": "603396",
      "name": "金辰股份",
      "price": 32.11,
      "changePercent": 10.003,
      "turnoverRate": 0.89195,
      "amount": 39675116.0,
      "floatMarketCapYi": 44.48,
      "totalMarketCapYi": 44.48,
      "lookbackDays": 521,
      "boardHeight": 2,
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
      "symbol": "sh603536",
      "code": "603536",
      "name": "惠发食品",
      "price": 13.04,
      "changePercent": 10.042,
      "turnoverRate": 24.02857,
      "amount": 691559478.0,
      "floatMarketCapYi": 31.37,
      "totalMarketCapYi": 31.37,
      "lookbackDays": 521,
      "boardHeight": 3,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-12-09",
          "runEnd": "2024-12-13",
          "runLength": 5,
          "breakDate": "2024-12-16",
          "evidence": [
            "断板后两日累计下跌 -14.14%"
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
      "price": 26.87,
      "changePercent": 9.988,
      "turnoverRate": 8.80724,
      "amount": 426106937.0,
      "floatMarketCapYi": 50.89,
      "totalMarketCapYi": 50.89,
      "lookbackDays": 521,
      "boardHeight": 4,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh603725",
      "code": "603725",
      "name": "天安新材",
      "price": 13.16,
      "changePercent": 10.033,
      "turnoverRate": 5.96363,
      "amount": 238894772.0,
      "floatMarketCapYi": 40.12,
      "totalMarketCapYi": 40.12,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh605255",
      "code": "605255",
      "name": "天普股份",
      "price": 67.11,
      "changePercent": 9.998,
      "turnoverRate": 1.43637,
      "amount": 126710503.0,
      "floatMarketCapYi": 89.98,
      "totalMarketCapYi": 89.98,
      "lookbackDays": 521,
      "boardHeight": 3,
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
      "symbol": "sz002148",
      "code": "002148",
      "name": "北纬科技",
      "price": 7.23,
      "changePercent": 10.046,
      "turnoverRate": 30.008,
      "amount": 954756774.0,
      "floatMarketCapYi": 32.61,
      "totalMarketCapYi": 40.4,
      "lookbackDays": 521,
      "boardHeight": 2,
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
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002623",
      "code": "002623",
      "name": "亚玛顿",
      "price": 25.66,
      "changePercent": 9.987,
      "turnoverRate": 0.7862,
      "amount": 38862070.0,
      "floatMarketCapYi": 49.43,
      "totalMarketCapYi": 49.54,
      "lookbackDays": 521,
      "boardHeight": 4,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    }
  ],
  "failures": [
    "ST亚光: 请求失败：https://web.ifzq.gtimg.cn/appstock/app/fqkline/get?param=sz300123,day,,,520,qfq",
    "ST交昂: 请求失败：https://web.ifzq.gtimg.cn/appstock/app/fqkline/get?param=sh600530,day,,,520,qfq",
    "洪通燃气: 请求失败：https://web.ifzq.gtimg.cn/appstock/app/fqkline/get?param=sh605169,day,,,520,qfq"
  ]
};
