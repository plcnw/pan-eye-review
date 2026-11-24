window.SCREEN_DATA = {
  "date": "2026-11-24",
  "capturedAt": "2026-11-24T17:28:50+08:00",
  "source": "新浪 A 股行情与腾讯历史日线",
  "marketCount": 5580,
  "limitUpCount": 89,
  "capPassCount": 48,
  "hardExcludedCount": 21,
  "candidateCount": 27,
  "exceptionCount": 24,
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
      "symbol": "sz002579",
      "code": "002579",
      "name": "中京电子",
      "price": 16.2,
      "changePercent": 9.98,
      "turnoverRate": 8.81445,
      "amount": 833115294.0,
      "floatMarketCapYi": 94.52,
      "totalMarketCapYi": 106.86,
      "lookbackDays": 521,
      "boardHeight": 4,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-05-26",
          "runEnd": "2026-05-28",
          "runLength": 3,
          "breakDate": "2026-05-29",
          "evidence": [
            "断板日高开 6.10% 后盘中回落 -11.14%",
            "断板当日下跌 -5.72%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-06-01",
          "runEnd": "2026-06-02",
          "runLength": 2,
          "breakDate": "2026-06-03",
          "evidence": [
            "断板当日下跌 -6.31%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2026-09-07",
          "runEnd": "2026-09-08",
          "runLength": 2,
          "breakDate": "2026-09-09",
          "evidence": [
            "断板日高开 3.99% 后盘中回落 -5.24%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603960",
      "code": "603960",
      "name": "克来机电",
      "price": 16.91,
      "changePercent": 10.02,
      "turnoverRate": 0.58921,
      "amount": 26124259.0,
      "floatMarketCapYi": 44.34,
      "totalMarketCapYi": 44.34,
      "lookbackDays": 521,
      "boardHeight": 3,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh605018",
      "code": "605018",
      "name": "长华集团",
      "price": 12.42,
      "changePercent": 10.009,
      "turnoverRate": 1.05855,
      "amount": 61800616.0,
      "floatMarketCapYi": 58.38,
      "totalMarketCapYi": 58.38,
      "lookbackDays": 521,
      "boardHeight": 3,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-12-04",
          "runEnd": "2024-12-05",
          "runLength": 2,
          "breakDate": "2024-12-06",
          "evidence": [
            "断板当日下跌 -6.28%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2025-01-21",
          "runEnd": "2025-01-22",
          "runLength": 2,
          "breakDate": "2025-01-23",
          "evidence": [
            "断板当日下跌 -7.68%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002086",
      "code": "002086",
      "name": "东方海洋",
      "price": 4.54,
      "changePercent": 9.927,
      "turnoverRate": 35.22725,
      "amount": 2493801449.0,
      "floatMarketCapYi": 71.78,
      "totalMarketCapYi": 88.94,
      "lookbackDays": 521,
      "boardHeight": 3,
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
      "symbol": "sz002548",
      "code": "002548",
      "name": "金新农",
      "price": 4.55,
      "changePercent": 9.903,
      "turnoverRate": 9.75371,
      "amount": 348329744.0,
      "floatMarketCapYi": 36.6,
      "totalMarketCapYi": 37.68,
      "lookbackDays": 521,
      "boardHeight": 3,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-11-13",
          "runEnd": "2026-11-16",
          "runLength": 2,
          "breakDate": "2026-11-17",
          "evidence": [
            "断板当日下跌 -6.89%",
            "断板后两日累计下跌 -10.69%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz301252",
      "code": "301252",
      "name": "同星科技",
      "price": 42.48,
      "changePercent": 20.0,
      "turnoverRate": 7.00288,
      "amount": 388967511.0,
      "floatMarketCapYi": 57.69,
      "totalMarketCapYi": 71.89,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 19.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz301413",
      "code": "301413",
      "name": "安培龙",
      "price": 89.71,
      "changePercent": 19.997,
      "turnoverRate": 24.12457,
      "amount": 1617390092.0,
      "floatMarketCapYi": 68.52,
      "totalMarketCapYi": 123.25,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 19.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh601599",
      "code": "601599",
      "name": "浙文影业",
      "price": 4.02,
      "changePercent": 10.137,
      "turnoverRate": 18.43373,
      "amount": 852419734.0,
      "floatMarketCapYi": 46.65,
      "totalMarketCapYi": 46.65,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002122",
      "code": "002122",
      "name": "汇洲智能",
      "price": 3.26,
      "changePercent": 10.135,
      "turnoverRate": 0.70825,
      "amount": 45873742.0,
      "floatMarketCapYi": 64.77,
      "totalMarketCapYi": 65.25,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-12-05",
          "runEnd": "2024-12-09",
          "runLength": 3,
          "breakDate": "2024-12-10",
          "evidence": [
            "断板日高开 10.09% 后盘中回落 -13.12%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-01-14",
          "runEnd": "2025-01-17",
          "runLength": 4,
          "breakDate": "2025-01-20",
          "evidence": [
            "断板日高开 2.67% 后盘中回落 -6.94%",
            "断板后两日累计下跌 -14.08%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-02-05",
          "runEnd": "2025-02-07",
          "runLength": 3,
          "breakDate": "2025-02-10",
          "evidence": [
            "断板当日下跌 -6.99%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002036",
      "code": "002036",
      "name": "联创电子",
      "price": 5.36,
      "changePercent": 10.062,
      "turnoverRate": 0.79889,
      "amount": 45195809.0,
      "floatMarketCapYi": 56.57,
      "totalMarketCapYi": 56.69,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-02-06",
          "runEnd": "2025-02-11",
          "runLength": 4,
          "breakDate": "2025-02-12",
          "evidence": [
            "断板后两日累计下跌 -8.80%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603926",
      "code": "603926",
      "name": "铁流股份",
      "price": 16.34,
      "changePercent": 10.034,
      "turnoverRate": 2.7002,
      "amount": 100525969.0,
      "floatMarketCapYi": 37.72,
      "totalMarketCapYi": 38.07,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh603666",
      "code": "603666",
      "name": "亿嘉和",
      "price": 27.9,
      "changePercent": 10.016,
      "turnoverRate": 2.00514,
      "amount": 113412551.0,
      "floatMarketCapYi": 57.34,
      "totalMarketCapYi": 57.34,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-10-31",
          "runEnd": "2024-11-06",
          "runLength": 5,
          "breakDate": "2024-11-07",
          "evidence": [
            "断板日高开 9.98% 后盘中回落 -15.36%",
            "断板当日下跌 -6.92%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002931",
      "code": "002931",
      "name": "锋龙股份",
      "price": 46.71,
      "changePercent": 10.009,
      "turnoverRate": 2.55373,
      "amount": 241465082.0,
      "floatMarketCapYi": 94.62,
      "totalMarketCapYi": 102.06,
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
      "price": 51.45,
      "changePercent": 10.006,
      "turnoverRate": 6.61502,
      "amount": 1008343495.0,
      "floatMarketCapYi": 153.57,
      "totalMarketCapYi": 154.35,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-11-10",
          "runEnd": "2026-11-11",
          "runLength": 2,
          "breakDate": "2026-11-12",
          "evidence": [
            "断板当日下跌 -10.00%",
            "断板后两日累计下跌 -16.86%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603040",
      "code": "603040",
      "name": "新坐标",
      "price": 36.39,
      "changePercent": 10.006,
      "turnoverRate": 2.94282,
      "amount": 209523942.0,
      "floatMarketCapYi": 71.82,
      "totalMarketCapYi": 71.82,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002708",
      "code": "002708",
      "name": "光洋股份",
      "price": 23.09,
      "changePercent": 10.005,
      "turnoverRate": 0.84954,
      "amount": 99968155.0,
      "floatMarketCapYi": 117.67,
      "totalMarketCapYi": 129.79,
      "lookbackDays": 521,
      "boardHeight": 2,
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
        },
        {
          "runStart": "2026-11-09",
          "runEnd": "2026-11-11",
          "runLength": 3,
          "breakDate": "2026-11-12",
          "evidence": [
            "断板日高开 3.42% 后盘中回落 -8.73%",
            "断板当日下跌 -5.60%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603516",
      "code": "603516",
      "name": "淳中科技",
      "price": 49.92,
      "changePercent": 10.004,
      "turnoverRate": 1.092,
      "amount": 110234342.0,
      "floatMarketCapYi": 100.95,
      "totalMarketCapYi": 100.95,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-09-09",
          "runEnd": "2025-09-12",
          "runLength": 4,
          "breakDate": "2025-09-15",
          "evidence": [
            "断板日高开 4.78% 后盘中回落 -11.40%",
            "断板当日下跌 -7.17%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603662",
      "code": "603662",
      "name": "柯力传感",
      "price": 53.01,
      "changePercent": 10.002,
      "turnoverRate": 5.93369,
      "amount": 875999069.0,
      "floatMarketCapYi": 148.87,
      "totalMarketCapYi": 149.16,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002724",
      "code": "002724",
      "name": "海洋王",
      "price": 10.56,
      "changePercent": 10.0,
      "turnoverRate": 18.60311,
      "amount": 1030891605.0,
      "floatMarketCapYi": 59.82,
      "totalMarketCapYi": 81.47,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh603103",
      "code": "603103",
      "name": "横店影视",
      "price": 18.26,
      "changePercent": 10.0,
      "turnoverRate": 2.31516,
      "amount": 265833387.0,
      "floatMarketCapYi": 115.8,
      "totalMarketCapYi": 115.8,
      "lookbackDays": 520,
      "boardHeight": 2,
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
      "symbol": "sh600814",
      "code": "600814",
      "name": "杭州解百",
      "price": 7.59,
      "changePercent": 10.0,
      "turnoverRate": 3.76733,
      "amount": 207896088.0,
      "floatMarketCapYi": 55.79,
      "totalMarketCapYi": 55.79,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-12-11",
          "runEnd": "2024-12-12",
          "runLength": 2,
          "breakDate": "2024-12-13",
          "evidence": [
            "断板日高开 7.52% 后盘中回落 -9.96%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-02-04",
          "runEnd": "2026-02-06",
          "runLength": 3,
          "breakDate": "2026-02-09",
          "evidence": [
            "断板后两日累计下跌 -10.70%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603626",
      "code": "603626",
      "name": "科森科技",
      "price": 26.22,
      "changePercent": 9.983,
      "turnoverRate": 2.6034,
      "amount": 377996077.0,
      "floatMarketCapYi": 145.49,
      "totalMarketCapYi": 145.49,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-02-25",
          "runEnd": "2025-02-26",
          "runLength": 2,
          "breakDate": "2025-02-27",
          "evidence": [
            "断板日高开 4.18% 后盘中回落 -6.39%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-09-16",
          "runEnd": "2025-09-18",
          "runLength": 3,
          "breakDate": "2025-09-19",
          "evidence": [
            "断板当日下跌 -10.00%",
            "断板后两日累计下跌 -13.45%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-09-07",
          "runEnd": "2026-09-08",
          "runLength": 2,
          "breakDate": "2026-09-09",
          "evidence": [
            "断板当日下跌 -7.38%",
            "断板后两日累计下跌 -11.89%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002164",
      "code": "002164",
      "name": "宁波东力",
      "price": 19.73,
      "changePercent": 9.978,
      "turnoverRate": 0.52613,
      "amount": 49803334.0,
      "floatMarketCapYi": 94.66,
      "totalMarketCapYi": 105.0,
      "lookbackDays": 521,
      "boardHeight": 2,
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
      "symbol": "sz002685",
      "code": "002685",
      "name": "华东重机",
      "price": 8.95,
      "changePercent": 9.951,
      "turnoverRate": 49.14621,
      "amount": 4291680547.0,
      "floatMarketCapYi": 90.18,
      "totalMarketCapYi": 90.19,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
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
        },
        {
          "runStart": "2026-11-13",
          "runEnd": "2026-11-18",
          "runLength": 4,
          "breakDate": "2026-11-19",
          "evidence": [
            "断板日高开 10.04% 后盘中回落 -5.43%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz300652",
      "code": "300652",
      "name": "雷迪克",
      "price": 29.06,
      "changePercent": 19.983,
      "turnoverRate": 5.72407,
      "amount": 191118536.0,
      "floatMarketCapYi": 34.56,
      "totalMarketCapYi": 38.76,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 19.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz300539",
      "code": "300539",
      "name": "横河精密",
      "price": 22.58,
      "changePercent": 19.979,
      "turnoverRate": 23.33256,
      "amount": 1114006174.0,
      "floatMarketCapYi": 49.32,
      "totalMarketCapYi": 60.67,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 19.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "live"
    },
    {
      "symbol": "sh605222",
      "code": "605222",
      "name": "起帆电缆",
      "price": 19.4,
      "changePercent": 9.977,
      "turnoverRate": 1.25616,
      "amount": 99436426.0,
      "floatMarketCapYi": 80.1,
      "totalMarketCapYi": 80.1,
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
      "symbol": "sh600715",
      "code": "600715",
      "name": "文投控股",
      "price": 3.14,
      "changePercent": 10.175,
      "turnoverRate": 32.77215,
      "amount": 2787488712.0,
      "floatMarketCapYi": 89.88,
      "totalMarketCapYi": 127.48,
      "lookbackDays": 521,
      "boardHeight": 1,
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
        },
        {
          "runStart": "2026-11-09",
          "runEnd": "2026-11-11",
          "runLength": 3,
          "breakDate": "2026-11-12",
          "evidence": [
            "断板日高开 6.69% 后盘中回落 -7.76%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-11-13",
          "runEnd": "2026-11-16",
          "runLength": 2,
          "breakDate": "2026-11-17",
          "evidence": [
            "断板当日下跌 -9.89%",
            "断板后两日累计下跌 -18.98%"
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
      "price": 4.85,
      "changePercent": 9.977,
      "turnoverRate": 24.97516,
      "amount": 1515969652.0,
      "floatMarketCapYi": 64.75,
      "totalMarketCapYi": 64.75,
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
      "symbol": "sh600722",
      "code": "600722",
      "name": "金牛化工",
      "price": 11.95,
      "changePercent": 10.037,
      "turnoverRate": 18.79714,
      "amount": 1452705590.0,
      "floatMarketCapYi": 81.3,
      "totalMarketCapYi": 81.3,
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
            "断板日高开 3.41% 后盘中回落 -8.33%",
            "断板当日下跌 -5.20%",
            "断板后两日累计下跌 -9.27%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002611",
      "code": "002611",
      "name": "东方精工",
      "price": 13.37,
      "changePercent": 10.041,
      "turnoverRate": 8.94777,
      "amount": 1178794189.0,
      "floatMarketCapYi": 134.23,
      "totalMarketCapYi": 162.75,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-11-14",
          "runEnd": "2024-11-25",
          "runLength": 8,
          "breakDate": "2024-11-26",
          "evidence": [
            "断板日高开 2.83% 后盘中回落 -12.73%",
            "断板当日下跌 -10.26%",
            "断板后两日累计下跌 -19.46%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002827",
      "code": "002827",
      "name": "高争民爆",
      "price": 49.06,
      "changePercent": 10.0,
      "turnoverRate": 4.79486,
      "amount": 627158055.0,
      "floatMarketCapYi": 135.41,
      "totalMarketCapYi": 135.92,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-07-21",
          "runEnd": "2025-07-24",
          "runLength": 4,
          "breakDate": "2025-07-25",
          "evidence": [
            "断板后两日累计下跌 -12.84%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-11-02",
          "runEnd": "2026-11-04",
          "runLength": 3,
          "breakDate": "2026-11-05",
          "evidence": [
            "断板日高开 10.03% 后盘中回落 -10.68%",
            "断板后两日累计下跌 -11.59%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002348",
      "code": "002348",
      "name": "高乐股份",
      "price": 8.67,
      "changePercent": 10.025,
      "turnoverRate": 6.18335,
      "amount": 476232494.0,
      "floatMarketCapYi": 78.34,
      "totalMarketCapYi": 87.05,
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
            "断板当日下跌 -10.02%",
            "断板后两日累计下跌 -10.27%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-11-24",
          "runEnd": "2025-12-04",
          "runLength": 4,
          "breakDate": "2025-12-05",
          "evidence": [
            "断板日高开 10.00% 后盘中回落 -11.93%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600189",
      "code": "600189",
      "name": "泉阳泉",
      "price": 8.87,
      "changePercent": 10.05,
      "turnoverRate": 6.60633,
      "amount": 414705919.0,
      "floatMarketCapYi": 63.44,
      "totalMarketCapYi": 63.44,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-10-30",
          "runEnd": "2026-11-02",
          "runLength": 2,
          "breakDate": "2026-11-03",
          "evidence": [
            "断板后两日累计下跌 -12.96%"
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
      "price": 10.09,
      "changePercent": 10.033,
      "turnoverRate": 10.49994,
      "amount": 319243925.0,
      "floatMarketCapYi": 30.76,
      "totalMarketCapYi": 30.76,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-11-11",
          "runEnd": "2026-11-12",
          "runLength": 2,
          "breakDate": "2026-11-13",
          "evidence": [
            "断板日高开 10.03% 后盘中回落 -14.50%",
            "断板当日下跌 -5.93%",
            "断板后两日累计下跌 -15.35%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603030",
      "code": "603030",
      "name": "全筑股份",
      "price": 2.37,
      "changePercent": 10.233,
      "turnoverRate": 10.37891,
      "amount": 306912114.0,
      "floatMarketCapYi": 31.21,
      "totalMarketCapYi": 31.21,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-12-05",
          "runEnd": "2024-12-06",
          "runLength": 2,
          "breakDate": "2024-12-09",
          "evidence": [
            "断板日高开 9.92% 后盘中回落 -7.77%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-04-29",
          "runEnd": "2025-05-07",
          "runLength": 4,
          "breakDate": "2025-05-08",
          "evidence": [
            "断板当日下跌 -10.03%",
            "断板后两日累计下跌 -12.23%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-11-17",
          "runEnd": "2026-11-19",
          "runLength": 3,
          "breakDate": "2026-11-20",
          "evidence": [
            "断板当日下跌 -9.83%",
            "断板后两日累计下跌 -8.12%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh600400",
      "code": "600400",
      "name": "红豆股份",
      "price": 3.62,
      "changePercent": 10.03,
      "turnoverRate": 2.945,
      "amount": 236240428.0,
      "floatMarketCapYi": 82.95,
      "totalMarketCapYi": 82.95,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-08-18",
          "runEnd": "2025-08-19",
          "runLength": 2,
          "breakDate": "2025-08-20",
          "evidence": [
            "断板日高开 3.00% 后盘中回落 -5.82%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-09-18",
          "runEnd": "2025-09-22",
          "runLength": 3,
          "breakDate": "2025-09-23",
          "evidence": [
            "断板日高开 7.65% 后盘中回落 -11.68%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603608",
      "code": "603608",
      "name": "天创股份",
      "price": 15.24,
      "changePercent": 10.036,
      "turnoverRate": 3.36948,
      "amount": 212464982.0,
      "floatMarketCapYi": 64.77,
      "totalMarketCapYi": 64.77,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-12-30",
          "runEnd": "2025-12-31",
          "runLength": 2,
          "breakDate": "2026-01-05",
          "evidence": [
            "断板日高开 10.00% 后盘中回落 -7.59%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002651",
      "code": "002651",
      "name": "利君股份",
      "price": 7.18,
      "changePercent": 9.954,
      "turnoverRate": 5.25675,
      "amount": 208671614.0,
      "floatMarketCapYi": 40.6,
      "totalMarketCapYi": 74.2,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-05-16",
          "runEnd": "2025-05-19",
          "runLength": 2,
          "breakDate": "2025-05-20",
          "evidence": [
            "断板当日下跌 -10.10%",
            "断板后两日累计下跌 -13.21%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-06-30",
          "runEnd": "2025-07-01",
          "runLength": 2,
          "breakDate": "2025-07-02",
          "evidence": [
            "断板当日下跌 -5.81%",
            "断板后两日累计下跌 -8.57%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-08-14",
          "runEnd": "2026-08-17",
          "runLength": 2,
          "breakDate": "2026-08-18",
          "evidence": [
            "断板后两日累计下跌 -12.82%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz301189",
      "code": "301189",
      "name": "奥尼电子",
      "price": 43.72,
      "changePercent": 20.011,
      "turnoverRate": 2.88453,
      "amount": 195937473.0,
      "floatMarketCapYi": 69.29,
      "totalMarketCapYi": 71.78,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 19.5,
      "aKillEvents": [
        {
          "runStart": "2026-04-14",
          "runEnd": "2026-04-15",
          "runLength": 2,
          "breakDate": "2026-04-16",
          "evidence": [
            "断板当日下跌 -5.27%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002387",
      "code": "002387",
      "name": "维信诺",
      "price": 6.37,
      "changePercent": 10.017,
      "turnoverRate": 2.24796,
      "amount": 192470583.0,
      "floatMarketCapYi": 88.86,
      "totalMarketCapYi": 88.98,
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
            "断板日高开 10.05% 后盘中回落 -10.46%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603206",
      "code": "603206",
      "name": "嘉环科技",
      "price": 14.42,
      "changePercent": 9.992,
      "turnoverRate": 3.26791,
      "amount": 137805723.0,
      "floatMarketCapYi": 44.01,
      "totalMarketCapYi": 44.01,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-10-21",
          "runEnd": "2024-10-23",
          "runLength": 3,
          "breakDate": "2024-10-24",
          "evidence": [
            "断板日高开 7.76% 后盘中回落 -16.49%",
            "断板当日下跌 -10.01%",
            "断板后两日累计下跌 -12.08%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-03-11",
          "runEnd": "2025-03-13",
          "runLength": 3,
          "breakDate": "2025-03-14",
          "evidence": [
            "断板当日下跌 -10.04%",
            "断板后两日累计下跌 -14.49%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-05-18",
          "runEnd": "2026-05-19",
          "runLength": 2,
          "breakDate": "2026-05-20",
          "evidence": [
            "断板日高开 3.67% 后盘中回落 -8.05%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603360",
      "code": "603360",
      "name": "百傲化学",
      "price": 9.6,
      "changePercent": 9.966,
      "turnoverRate": 1.64485,
      "amount": 109713836.0,
      "floatMarketCapYi": 67.8,
      "totalMarketCapYi": 67.8,
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
            "断板日高开 10.37% 后盘中回落 -9.77%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2024-11-08",
          "runEnd": "2024-11-11",
          "runLength": 2,
          "breakDate": "2024-11-12",
          "evidence": [
            "断板当日下跌 -6.07%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603595",
      "code": "603595",
      "name": "ST东尼",
      "price": 27.36,
      "changePercent": 7.0,
      "turnoverRate": 1.48546,
      "amount": 92176593.0,
      "floatMarketCapYi": 63.6,
      "totalMarketCapYi": 63.6,
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
      "price": 6.16,
      "changePercent": 10.0,
      "turnoverRate": 1.62883,
      "amount": 75889598.0,
      "floatMarketCapYi": 47.74,
      "totalMarketCapYi": 47.74,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 4.5,
      "aKillEvents": [
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
        },
        {
          "runStart": "2026-11-18",
          "runEnd": "2026-11-19",
          "runLength": 2,
          "breakDate": "2026-11-20",
          "evidence": [
            "断板当日下跌 -10.00%",
            "断板后两日累计下跌 -13.85%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "live"
    },
    {
      "symbol": "sh603956",
      "code": "603956",
      "name": "威派格",
      "price": 6.25,
      "changePercent": 10.035,
      "turnoverRate": 1.88113,
      "amount": 66520775.0,
      "floatMarketCapYi": 35.62,
      "totalMarketCapYi": 35.62,
      "lookbackDays": 521,
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
      "symbol": "sh603001",
      "code": "603001",
      "name": "奥康国际",
      "price": 8.1,
      "changePercent": 10.054,
      "turnoverRate": 1.18659,
      "amount": 38159302.0,
      "floatMarketCapYi": 32.48,
      "totalMarketCapYi": 32.48,
      "lookbackDays": 521,
      "boardHeight": 1,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-03-14",
          "runEnd": "2025-03-17",
          "runLength": 2,
          "breakDate": "2025-03-18",
          "evidence": [
            "断板当日下跌 -5.91%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz300091",
      "code": "300091",
      "name": "*ST金灵",
      "price": 1.99,
      "changePercent": 8.152,
      "turnoverRate": 0.73904,
      "amount": 22953127.0,
      "floatMarketCapYi": 32.28,
      "totalMarketCapYi": 56.56,
      "lookbackDays": 520,
      "boardHeight": 1,
      "limitThreshold": 4.5,
      "aKillEvents": [
        {
          "runStart": "2024-12-02",
          "runEnd": "2024-12-03",
          "runLength": 2,
          "breakDate": "2024-12-04",
          "evidence": [
            "断板当日下跌 -6.10%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2025-03-12",
          "runEnd": "2025-03-13",
          "runLength": 2,
          "breakDate": "2025-03-14",
          "evidence": [
            "断板当日下跌 -6.88%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2026-01-09",
          "runEnd": "2026-01-12",
          "runLength": 2,
          "breakDate": "2026-01-13",
          "evidence": [
            "断板日高开 3.34% 后盘中回落 -7.93%"
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
      "symbol": "sh600814",
      "code": "600814",
      "name": "杭州解百",
      "price": 7.59,
      "changePercent": 10.0,
      "turnoverRate": 3.76733,
      "amount": 207896088.0,
      "floatMarketCapYi": 55.79,
      "totalMarketCapYi": 55.79,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-12-11",
          "runEnd": "2024-12-12",
          "runLength": 2,
          "breakDate": "2024-12-13",
          "evidence": [
            "断板日高开 7.52% 后盘中回落 -9.96%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-02-04",
          "runEnd": "2026-02-06",
          "runLength": 3,
          "breakDate": "2026-02-09",
          "evidence": [
            "断板后两日累计下跌 -10.70%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh601599",
      "code": "601599",
      "name": "浙文影业",
      "price": 4.02,
      "changePercent": 10.137,
      "turnoverRate": 18.43373,
      "amount": 852419734.0,
      "floatMarketCapYi": 46.65,
      "totalMarketCapYi": 46.65,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh603040",
      "code": "603040",
      "name": "新坐标",
      "price": 36.39,
      "changePercent": 10.006,
      "turnoverRate": 2.94282,
      "amount": 209523942.0,
      "floatMarketCapYi": 71.82,
      "totalMarketCapYi": 71.82,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh603103",
      "code": "603103",
      "name": "横店影视",
      "price": 18.26,
      "changePercent": 10.0,
      "turnoverRate": 2.31516,
      "amount": 265833387.0,
      "floatMarketCapYi": 115.8,
      "totalMarketCapYi": 115.8,
      "lookbackDays": 520,
      "boardHeight": 2,
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
      "symbol": "sh603516",
      "code": "603516",
      "name": "淳中科技",
      "price": 49.92,
      "changePercent": 10.004,
      "turnoverRate": 1.092,
      "amount": 110234342.0,
      "floatMarketCapYi": 100.95,
      "totalMarketCapYi": 100.95,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-09-09",
          "runEnd": "2025-09-12",
          "runLength": 4,
          "breakDate": "2025-09-15",
          "evidence": [
            "断板日高开 4.78% 后盘中回落 -11.40%",
            "断板当日下跌 -7.17%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603626",
      "code": "603626",
      "name": "科森科技",
      "price": 26.22,
      "changePercent": 9.983,
      "turnoverRate": 2.6034,
      "amount": 377996077.0,
      "floatMarketCapYi": 145.49,
      "totalMarketCapYi": 145.49,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-02-25",
          "runEnd": "2025-02-26",
          "runLength": 2,
          "breakDate": "2025-02-27",
          "evidence": [
            "断板日高开 4.18% 后盘中回落 -6.39%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-09-16",
          "runEnd": "2025-09-18",
          "runLength": 3,
          "breakDate": "2025-09-19",
          "evidence": [
            "断板当日下跌 -10.00%",
            "断板后两日累计下跌 -13.45%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-09-07",
          "runEnd": "2026-09-08",
          "runLength": 2,
          "breakDate": "2026-09-09",
          "evidence": [
            "断板当日下跌 -7.38%",
            "断板后两日累计下跌 -11.89%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603662",
      "code": "603662",
      "name": "柯力传感",
      "price": 53.01,
      "changePercent": 10.002,
      "turnoverRate": 5.93369,
      "amount": 875999069.0,
      "floatMarketCapYi": 148.87,
      "totalMarketCapYi": 149.16,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh603666",
      "code": "603666",
      "name": "亿嘉和",
      "price": 27.9,
      "changePercent": 10.016,
      "turnoverRate": 2.00514,
      "amount": 113412551.0,
      "floatMarketCapYi": 57.34,
      "totalMarketCapYi": 57.34,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-10-31",
          "runEnd": "2024-11-06",
          "runLength": 5,
          "breakDate": "2024-11-07",
          "evidence": [
            "断板日高开 9.98% 后盘中回落 -15.36%",
            "断板当日下跌 -6.92%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sh603926",
      "code": "603926",
      "name": "铁流股份",
      "price": 16.34,
      "changePercent": 10.034,
      "turnoverRate": 2.7002,
      "amount": 100525969.0,
      "floatMarketCapYi": 37.72,
      "totalMarketCapYi": 38.07,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh603960",
      "code": "603960",
      "name": "克来机电",
      "price": 16.91,
      "changePercent": 10.02,
      "turnoverRate": 0.58921,
      "amount": 26124259.0,
      "floatMarketCapYi": 44.34,
      "totalMarketCapYi": 44.34,
      "lookbackDays": 521,
      "boardHeight": 3,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sh605018",
      "code": "605018",
      "name": "长华集团",
      "price": 12.42,
      "changePercent": 10.009,
      "turnoverRate": 1.05855,
      "amount": 61800616.0,
      "floatMarketCapYi": 58.38,
      "totalMarketCapYi": 58.38,
      "lookbackDays": 521,
      "boardHeight": 3,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-12-04",
          "runEnd": "2024-12-05",
          "runLength": 2,
          "breakDate": "2024-12-06",
          "evidence": [
            "断板当日下跌 -6.28%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2025-01-21",
          "runEnd": "2025-01-22",
          "runLength": 2,
          "breakDate": "2025-01-23",
          "evidence": [
            "断板当日下跌 -7.68%"
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
      "price": 51.45,
      "changePercent": 10.006,
      "turnoverRate": 6.61502,
      "amount": 1008343495.0,
      "floatMarketCapYi": 153.57,
      "totalMarketCapYi": 154.35,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-11-10",
          "runEnd": "2026-11-11",
          "runLength": 2,
          "breakDate": "2026-11-12",
          "evidence": [
            "断板当日下跌 -10.00%",
            "断板后两日累计下跌 -16.86%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002036",
      "code": "002036",
      "name": "联创电子",
      "price": 5.36,
      "changePercent": 10.062,
      "turnoverRate": 0.79889,
      "amount": 45195809.0,
      "floatMarketCapYi": 56.57,
      "totalMarketCapYi": 56.69,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2025-02-06",
          "runEnd": "2025-02-11",
          "runLength": 4,
          "breakDate": "2025-02-12",
          "evidence": [
            "断板后两日累计下跌 -8.80%"
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
      "price": 4.54,
      "changePercent": 9.927,
      "turnoverRate": 35.22725,
      "amount": 2493801449.0,
      "floatMarketCapYi": 71.78,
      "totalMarketCapYi": 88.94,
      "lookbackDays": 521,
      "boardHeight": 3,
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
      "symbol": "sz002122",
      "code": "002122",
      "name": "汇洲智能",
      "price": 3.26,
      "changePercent": 10.135,
      "turnoverRate": 0.70825,
      "amount": 45873742.0,
      "floatMarketCapYi": 64.77,
      "totalMarketCapYi": 65.25,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2024-12-05",
          "runEnd": "2024-12-09",
          "runLength": 3,
          "breakDate": "2024-12-10",
          "evidence": [
            "断板日高开 10.09% 后盘中回落 -13.12%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-01-14",
          "runEnd": "2025-01-17",
          "runLength": 4,
          "breakDate": "2025-01-20",
          "evidence": [
            "断板日高开 2.67% 后盘中回落 -6.94%",
            "断板后两日累计下跌 -14.08%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2025-02-05",
          "runEnd": "2025-02-07",
          "runLength": 3,
          "breakDate": "2025-02-10",
          "evidence": [
            "断板当日下跌 -6.99%"
          ],
          "confidence": "medium"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002164",
      "code": "002164",
      "name": "宁波东力",
      "price": 19.73,
      "changePercent": 9.978,
      "turnoverRate": 0.52613,
      "amount": 49803334.0,
      "floatMarketCapYi": 94.66,
      "totalMarketCapYi": 105.0,
      "lookbackDays": 521,
      "boardHeight": 2,
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
      "symbol": "sz002548",
      "code": "002548",
      "name": "金新农",
      "price": 4.55,
      "changePercent": 9.903,
      "turnoverRate": 9.75371,
      "amount": 348329744.0,
      "floatMarketCapYi": 36.6,
      "totalMarketCapYi": 37.68,
      "lookbackDays": 521,
      "boardHeight": 3,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-11-13",
          "runEnd": "2026-11-16",
          "runLength": 2,
          "breakDate": "2026-11-17",
          "evidence": [
            "断板当日下跌 -6.89%",
            "断板后两日累计下跌 -10.69%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002579",
      "code": "002579",
      "name": "中京电子",
      "price": 16.2,
      "changePercent": 9.98,
      "turnoverRate": 8.81445,
      "amount": 833115294.0,
      "floatMarketCapYi": 94.52,
      "totalMarketCapYi": 106.86,
      "lookbackDays": 521,
      "boardHeight": 4,
      "limitThreshold": 9.5,
      "aKillEvents": [
        {
          "runStart": "2026-05-26",
          "runEnd": "2026-05-28",
          "runLength": 3,
          "breakDate": "2026-05-29",
          "evidence": [
            "断板日高开 6.10% 后盘中回落 -11.14%",
            "断板当日下跌 -5.72%"
          ],
          "confidence": "high"
        },
        {
          "runStart": "2026-06-01",
          "runEnd": "2026-06-02",
          "runLength": 2,
          "breakDate": "2026-06-03",
          "evidence": [
            "断板当日下跌 -6.31%"
          ],
          "confidence": "medium"
        },
        {
          "runStart": "2026-09-07",
          "runEnd": "2026-09-08",
          "runLength": 2,
          "breakDate": "2026-09-09",
          "evidence": [
            "断板日高开 3.99% 后盘中回落 -5.24%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002685",
      "code": "002685",
      "name": "华东重机",
      "price": 8.95,
      "changePercent": 9.951,
      "turnoverRate": 49.14621,
      "amount": 4291680547.0,
      "floatMarketCapYi": 90.18,
      "totalMarketCapYi": 90.19,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [
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
        },
        {
          "runStart": "2026-11-13",
          "runEnd": "2026-11-18",
          "runLength": 4,
          "breakDate": "2026-11-19",
          "evidence": [
            "断板日高开 10.04% 后盘中回落 -5.43%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002708",
      "code": "002708",
      "name": "光洋股份",
      "price": 23.09,
      "changePercent": 10.005,
      "turnoverRate": 0.84954,
      "amount": 99968155.0,
      "floatMarketCapYi": 117.67,
      "totalMarketCapYi": 129.79,
      "lookbackDays": 521,
      "boardHeight": 2,
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
        },
        {
          "runStart": "2026-11-09",
          "runEnd": "2026-11-11",
          "runLength": 3,
          "breakDate": "2026-11-12",
          "evidence": [
            "断板日高开 3.42% 后盘中回落 -8.73%",
            "断板当日下跌 -5.60%"
          ],
          "confidence": "high"
        }
      ],
      "hasSuspectedAKill": true,
      "historySource": "cached"
    },
    {
      "symbol": "sz002724",
      "code": "002724",
      "name": "海洋王",
      "price": 10.56,
      "changePercent": 10.0,
      "turnoverRate": 18.60311,
      "amount": 1030891605.0,
      "floatMarketCapYi": 59.82,
      "totalMarketCapYi": 81.47,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz002931",
      "code": "002931",
      "name": "锋龙股份",
      "price": 46.71,
      "changePercent": 10.009,
      "turnoverRate": 2.55373,
      "amount": 241465082.0,
      "floatMarketCapYi": 94.62,
      "totalMarketCapYi": 102.06,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 9.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz301252",
      "code": "301252",
      "name": "同星科技",
      "price": 42.48,
      "changePercent": 20.0,
      "turnoverRate": 7.00288,
      "amount": 388967511.0,
      "floatMarketCapYi": 57.69,
      "totalMarketCapYi": 71.89,
      "lookbackDays": 520,
      "boardHeight": 2,
      "limitThreshold": 19.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    },
    {
      "symbol": "sz301413",
      "code": "301413",
      "name": "安培龙",
      "price": 89.71,
      "changePercent": 19.997,
      "turnoverRate": 24.12457,
      "amount": 1617390092.0,
      "floatMarketCapYi": 68.52,
      "totalMarketCapYi": 123.25,
      "lookbackDays": 521,
      "boardHeight": 2,
      "limitThreshold": 19.5,
      "aKillEvents": [],
      "hasSuspectedAKill": false,
      "historySource": "cached"
    }
  ],
  "failures": []
};
