window.SECTOR_DATA = {
  date: "2026-10-29",
  capturedAt: "2026-10-29T20:43:00+08:00",
  market: {
    limitUpCount: 43,
    firstBoardCount: 29,
    maxHeight: 4,
    articleCoveredLimitUps: 39
  },
  ladderFunnel: [
    { from: "首板", to: "二板", base: 63, promoted: 6, rate: 9.52 },
    { from: "二板", to: "三板", base: 5, promoted: 2, rate: 40.0 },
    { from: "三板", to: "四板", base: 2, promoted: 2, rate: 100.0 }
  ],
  sectors: [
    {
      id: "aerospace",
      name: "航天",
      stage: "发酵中",
      count: 12,
      firstBoardCount: 10,
      maxHeight: 2,
      tone: "active",
      members: ["龙溪股份", "阳光照明", "顺灏股份", "邵阳液压", "钧达股份", "上海港湾", "盛洋科技", "中国卫星", "航天晨光", "西部材料", "上海沪工", "宇晶股份"],
      evidence: "机器人不及预期，发酵新品种。持续性角度看沪工即可，理论上是加速预期。",
      nextWatch: "沪工封单强度；机器人是否回流争夺辨识度。"
    },
    {
      id: "consumer",
      name: "消费",
      stage: "高标发酵",
      count: 5,
      firstBoardCount: 4,
      maxHeight: 4,
      tone: "strong",
      members: ["友阿股份", "巴比食品", "惠发食品", "一鸣食品", "青岛食品"],
      evidence: "青岛食品超预期发酵；青岛承接能力不明，一路顺风顺水上来。",
      nextWatch: "青岛四板换手承接；开板换手是机会还是风险。"
    },
    {
      id: "application",
      name: "应用 / 传媒",
      stage: "分歧修复",
      count: 3,
      firstBoardCount: 2,
      maxHeight: 3,
      tone: "mixed",
      members: ["传智教育", "横店影视", "文投控股"],
      evidence: "文投是身位但是烂板；首板表现好一点的话可以取而代之。",
      nextWatch: "文投能否止弱转强；首板是否出现取代者。"
    },
    {
      id: "ice",
      name: "冰雪",
      stage: "避险轮动",
      count: 4,
      firstBoardCount: 3,
      maxHeight: 3,
      tone: "rotation",
      members: ["龙江交通", "冰山冷热", "祥源文旅", "东贝集团"],
      evidence: "不排除是东贝发酵；板块曾经一日游，避险属性。",
      nextWatch: "东贝封单与冰雪首板晋级；警惕一日游。"
    },
    {
      id: "robot",
      name: "机器人",
      stage: "退潮活口",
      count: 2,
      firstBoardCount: 0,
      maxHeight: 3,
      tone: "risk",
      members: ["东贝集团", "山东矿机"],
      evidence: "机器人不及预期；东贝是机器人活口，但发酵的是东北冰雪。",
      nextWatch: "是否回流；若回流，航天与消费承接会受挤压。"
    },
    {
      id: "logistics",
      name: "物流",
      stage: "低位试盘",
      count: 2,
      firstBoardCount: 2,
      maxHeight: 1,
      tone: "weak",
      members: ["中远海特", "厦门信达"],
      evidence: "模型制作，贸易战模型。应该是，不然没理由拉升。",
      nextWatch: "次日能否继续扩散；当前缺少高位确认。"
    },
    {
      id: "risk-off",
      name: "避险独苗",
      stage: "分散轮动",
      count: 8,
      firstBoardCount: 8,
      maxHeight: 1,
      tone: "rotation",
      members: ["爱建集团", "开滦股份", "桂林三金", "和泰机电", "海阳科技", "福建金森", "天顺风能", "东方海洋"],
      evidence: "独苗逻辑清晰点明今日指数走势，覆盖金融、煤炭、医药、农业、风电与羊字联想。",
      nextWatch: "观察避险方向是否形成集中度，而不是继续发散。"
    }
  ]
};
