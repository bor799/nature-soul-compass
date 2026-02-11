import { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: "hutiaoxia-half",
    name: "虎跳峡高路（半程版）",
    location: "云南·丽江",
    description: "适合进阶小白的入门级选择，风景壮丽但舒适度高。金沙江峡谷景色震撼，玉龙雪山哈巴雪山夹江对峙。",
    tags: ["入门首选", "摄影圣地", "设施完善"],
    image: "https://images.unsplash.com/photo-1504194911009-bf257e51c113?q=80&w=800&auto=format&fit=crop", // Majestic Canyon & Mountain
    hygiene_score: 4,
    instagrammability: 5,
    social_pressure: 2,
    maturation: 5,
    highlights: ["世界十大经典徒步路线", "沿途客栈设施成熟", "路迹清晰"],
    best_season: ["春季", "秋季"],
    mbti_affinity: { I: 0.4, E: 0.6, N: 0.5, S: 0.5, T: 0.3, F: 0.7, J: 0.7, P: 0.3 },
    survival_requirements: { tolerance_toilet: 2, tolerance_shower: 2, tolerance_bugs: 2, physical_fitness: 2 },
    recommendation_data: {
      score: 9.5,
      reason: "世界十大经典徒步路线之一，既有挑战性又保证了舒适度，完美平衡了探险体验与安全保障。",
      best_for: ["徒步新手", "摄影爱好者", "寻求安全探险的人"],
      experience: "在28道拐俯瞰金沙江如一条金带蜿蜒在峡谷之中，日落的余晖洒在雪山之巅。",
      tips: ["最佳季节：春秋两季", "住宿推荐：Halfway客栈的日落阳台"]
    }
  },
  {
    id: "yubeng-village",
    name: "雨崩村（常规线）",
    location: "云南·德钦",
    description: "朝圣梅里雪山的经典路线，藏族文化浓郁。高原徒步需要一定体能，但风景绝对震撼。",
    tags: ["朝圣路线", "雪山圣地", "文化体验"],
    image: "https://images.unsplash.com/photo-1549594515-d4508216f2c3?q=80&w=800&auto=format&fit=crop", // Holy Snow Mountain vibes
    hygiene_score: 3,
    instagrammability: 5,
    social_pressure: 2,
    maturation: 4,
    highlights: ["天堂在左，雨崩在右", "近距离接触梅里雪山", "神瀑神湖冰湖可选"],
    best_season: ["春季", "秋季"],
    mbti_affinity: { I: 0.5, E: 0.5, N: 0.6, S: 0.4, T: 0.4, F: 0.6, J: 0.5, P: 0.5 },
    survival_requirements: { tolerance_toilet: 2, tolerance_shower: 2, tolerance_bugs: 2, physical_fitness: 3 },
    recommendation_data: {
      score: 9.2,
      reason: "朝圣梅里雪山的经典路线，藏族文化浓郁，是心灵净化的圣地。",
      best_for: ["文化朝圣者", "雪山爱好者", "精神探索者"],
      experience: "清晨站在神瀑下，彩虹在瀑布中若隐若现，阳光穿过经幡洒在脸上。",
      tips: ["最佳季节：春秋两季，避开雨季", "必备：高原反应预防药物"]
    }
  },
  {
    id: "wugong-mountain",
    name: "武功山（轻装版）",
    location: "江西·萍乡",
    description: "网红徒步圣地，云海草甸风光绝美。轻装入住山顶客栈，适合拍照社交。",
    tags: ["网红路线", "云海草甸", "社交氛围"],
    image: "https://images.unsplash.com/photo-1596395819057-df47f6eb8058?q=80&w=800&auto=format&fit=crop", // Rolling Green Meadows
    hygiene_score: 2,
    instagrammability: 5,
    social_pressure: 3,
    maturation: 4,
    highlights: ["万亩高山草甸云海", "日出日落绝美", "帐篷氛围浓厚"],
    best_season: ["夏季", "秋季"],
    mbti_affinity: { I: 0.3, E: 0.7, N: 0.4, S: 0.6, T: 0.3, F: 0.7, J: 0.4, P: 0.6 },
    survival_requirements: { tolerance_toilet: 2, tolerance_shower: 1, tolerance_bugs: 2, physical_fitness: 2 },
    recommendation_data: {
      score: 8.8,
      reason: "网红徒步圣地，万亩高山草甸云海堪称一绝，帐篷氛围浓厚，社交属性强。",
      best_for: ["社交达人", "摄影爱好者", "年轻人群体"],
      experience: "清晨金顶看日出，云海如潮水般在脚下翻滚，第一缕阳光穿透云层。",
      tips: ["最佳季节：6-10月", "住宿：山顶客栈需提前预订"]
    }
  },
  {
    id: "daocheng-yading-short",
    name: "稻城亚丁（短线）",
    location: "四川·甘孜",
    description: "高原圣地，藏族文化浓厚。短线难度适中，适合进阶小白体验高原徒步。",
    tags: ["高原圣地", "三神山", "摄影天堂"],
    image: "https://images.unsplash.com/photo-1547468600-344ec0b4e292?q=80&w=800&auto=format&fit=crop", // Sharp Snow Peak & Sky
    hygiene_score: 3,
    instagrammability: 5,
    social_pressure: 2,
    maturation: 4,
    highlights: ["水蓝色星球的最后一片净土", "三座神山", "牛奶海五色海"],
    best_season: ["秋季"],
    mbti_affinity: { I: 0.6, E: 0.4, N: 0.7, S: 0.3, T: 0.4, F: 0.6, J: 0.6, P: 0.4 },
    survival_requirements: { tolerance_toilet: 2, tolerance_shower: 2, tolerance_bugs: 2, physical_fitness: 2 },
    recommendation_data: {
      score: 9.0,
      reason: "水蓝色星球的最后一片净土，三座神山庄严神圣，湖水颜色变幻令人窒息。",
      best_for: ["高原爱好者", "摄影发烧友", "朝圣者"],
      experience: "站在洛绒牛场，三座神山尽收眼底，央迈勇的雪峰在阳光下闪耀着银光。",
      tips: ["最佳季节：9-10月", "高原反应：提前一周服用红景天"]
    }
  },
  {
    id: "puzhehei",
    name: "云南普者黑",
    location: "云南·文山",
    description: "轻松舒适的田园徒步，住宿条件极佳。适合追求舒适度的进阶小白。",
    tags: ["轻松舒适", "田园风光", "适合全家"],
    image: "https://images.unsplash.com/photo-1523588967965-055a29c97b87?q=80&w=800&auto=format&fit=crop", // Karst mountains & water
    hygiene_score: 5,
    instagrammability: 4,
    social_pressure: 2,
    maturation: 4,
    highlights: ["爸爸去哪儿拍摄地", "喀斯特山水田园", "夏季万亩荷花"],
    best_season: ["夏季", "秋季"],
    mbti_affinity: { I: 0.4, E: 0.6, N: 0.3, S: 0.7, T: 0.2, F: 0.8, J: 0.5, P: 0.5 },
    survival_requirements: { tolerance_toilet: 1, tolerance_shower: 1, tolerance_bugs: 2, physical_fitness: 1 },
    recommendation_data: {
      score: 8.5,
      reason: "真正轻松舒适的田园徒步，泛舟湖上置身粉色花海，宛如人间仙境。",
      best_for: ["家庭出游", "情侣约会", "摄影爱好者"],
      experience: "乘着柳叶小舟穿行在万亩荷塘中，接天莲叶无穷碧，映日荷花别样红。",
      tips: ["最佳季节：7-8月荷花盛开期", "体验：乘船游湖必体验"]
    }
  },
  {
    id: "kanas",
    name: "新疆喀纳斯",
    location: "新疆·阿勒泰",
    description: "北疆最经典的徒步路线，四季风光各异。湖光山色美不胜收。",
    tags: ["北疆风光", "变色神湖", "图瓦文化"],
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=800&auto=format&fit=crop", // Deep Forest & Lake
    hygiene_score: 3,
    instagrammability: 5,
    social_pressure: 2,
    maturation: 4,
    highlights: ["东方瑞士", "喀纳斯湖变色奇观", "图瓦人村落文化"],
    best_season: ["秋季"],
    mbti_affinity: { I: 0.6, E: 0.4, N: 0.5, S: 0.5, T: 0.6, F: 0.4, J: 0.6, P: 0.4 },
    survival_requirements: { tolerance_toilet: 2, tolerance_shower: 2, tolerance_bugs: 2, physical_fitness: 2 },
    recommendation_data: {
      score: 9.3,
      reason: "东方瑞士，神的后花园。湖水随季节变化呈现不同色彩，图瓦人村落保留古老生活方式。",
      best_for: ["摄影爱好者", "文化探索者", "自然爱好者"],
      experience: "站在观鱼台俯瞰喀纳斯湖，湖面如巨大的翡翠镶嵌在群山之中，晨雾缭绕。",
      tips: ["最佳季节：9月中下旬", "住宿：图瓦人木屋体验独特"]
    }
  },
  {
    id: "aershan",
    name: "内蒙古阿尔山",
    location: "内蒙古·兴安盟",
    description: "人少景美的隐秘路线，火山地貌独特。秋色层林尽染，美不胜收。",
    tags: ["火山地貌", "人少景美", "温泉疗愈"],
    image: "https://images.unsplash.com/photo-1504280501179-56589042f1ae?q=80&w=800&auto=format&fit=crop", // Golden Autumn Forest
    hygiene_score: 4,
    instagrammability: 4,
    social_pressure: 1,
    maturation: 4,
    highlights: ["火山天池群", "大兴安岭秋色", "温泉资源丰富"],
    best_season: ["秋季"],
    mbti_affinity: { I: 0.7, E: 0.3, N: 0.4, S: 0.6, T: 0.3, F: 0.7, J: 0.5, P: 0.5 },
    survival_requirements: { tolerance_toilet: 2, tolerance_shower: 2, tolerance_bugs: 2, physical_fitness: 2 },
    recommendation_data: {
      score: 8.7,
      reason: "人少景美的隐秘路线，拥有中国最完整的火山天池群。秋季层林尽染，温泉资源丰富。",
      best_for: ["宁静爱好者", "地质迷", "疗愈度假者"],
      experience: "站在火山口边缘俯瞰天池，湖水如一面镜子倒映着蓝天和五彩森林。",
      tips: ["最佳季节：9-10月", "体验：阿尔山温泉是必体验项目"]
    }
  },
  {
    id: "yangzhuoyongcuo",
    name: "西藏羊卓雍措",
    location: "西藏·山南",
    description: "高原圣湖转湖路线，藏文化浓厚。需要一定体能适应高原。",
    tags: ["圣湖转湖", "藏族文化", "高原挑战"],
    image: "https://images.unsplash.com/photo-1627814420063-e382d56c07a3?q=80&w=800&auto=format&fit=crop", // Blue Holy Lake
    hygiene_score: 2,
    instagrammability: 5,
    social_pressure: 2,
    maturation: 3,
    highlights: ["西藏三大圣湖之一", "湖水颜色变幻莫测", "藏族转湖文化"],
    best_season: ["夏季", "秋季"],
    mbti_affinity: { I: 0.7, E: 0.3, N: 0.7, S: 0.3, T: 0.6, F: 0.4, J: 0.7, P: 0.3 },
    survival_requirements: { tolerance_toilet: 2, tolerance_shower: 2, tolerance_bugs: 2, physical_fitness: 3 },
    recommendation_data: {
      score: 9.1,
      reason: "西藏三大圣湖之一，湖水颜色随光线变化。跟随当地信徒转湖，感受虔诚的宗教氛围。",
      best_for: ["文化朝圣者", "高原爱好者", "精神探索者"],
      experience: "站在岗巴拉山口俯瞰羊湖，湖水如一条碧蓝的丝带蜿蜒在群山之间。",
      tips: ["最佳季节：5-10月", "文化：尊重藏族转湖习俗，顺时针行走"]
    }
  },
  {
    id: "siguniang-dafeng",
    name: "四姑娘山（大峰）",
    location: "四川·阿坝",
    description: "入门级雪山攀登，有向导协助。登顶成就感极强，技术含量适中。",
    tags: ["雪山攀登", "人生首峰", "成就感强"],
    image: "https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?q=80&w=800&auto=format&fit=crop", // *** NEW: Dramatic Snow Peak ***
    hygiene_score: 3,
    instagrammability: 5,
    social_pressure: 3,
    maturation: 5,
    highlights: ["东方阿尔卑斯山", "人生第一座5000米雪山", "大峰二峰可选"],
    best_season: ["秋季"],
    mbti_affinity: { I: 0.4, E: 0.6, N: 0.5, S: 0.5, T: 0.6, F: 0.4, J: 0.7, P: 0.3 },
    survival_requirements: { tolerance_toilet: 2, tolerance_shower: 2, tolerance_bugs: 2, physical_fitness: 3 },
    recommendation_data: {
      score: 9.4,
      reason: "人生第一座5000米雪山。入门级攀登，无需专业技术，登顶成功率高，成就感无与伦比。",
      best_for: ["雪山攀登者", "成就追求者", "冒险爱好者"],
      experience: "凌晨出发，登顶瞬间第一缕阳光照亮雪峰，脚下群山如海。",
      tips: ["最佳季节：9-10月", "体能：提前进行有氧训练"]
    }
  },
  {
    id: "qinghai-lake",
    name: "青海湖环湖",
    location: "青海·海南",
    description: "成熟安全的环湖路线，设施完善。路况平缓，适合进阶小白。",
    tags: ["成熟路线", "油菜花海", "安全舒适"],
    image: "https://images.unsplash.com/photo-1570629206622-0b04c1f964a2?q=80&w=800&auto=format&fit=crop", // Vast Lake
    hygiene_score: 4,
    instagrammability: 4,
    social_pressure: 2,
    maturation: 5,
    highlights: ["中国最大咸水湖", "七月油菜花海", "藏传佛教圣地"],
    best_season: ["夏季"],
    mbti_affinity: { I: 0.5, E: 0.5, N: 0.4, S: 0.6, T: 0.5, F: 0.5, J: 0.7, P: 0.3 },
    survival_requirements: { tolerance_toilet: 2, tolerance_shower: 2, tolerance_bugs: 2, physical_fitness: 2 },
    recommendation_data: {
      score: 8.6,
      reason: "中国最大咸水湖，七月万亩油菜花盛开。路况平缓，设施完善，适合体验高原环湖。",
      best_for: ["环湖爱好者", "花海爱好者", "文化体验者"],
      experience: "骑行在湖岸公路上，左手是湛蓝如洗的青海湖，右手是金黄的油菜花海。",
      tips: ["最佳季节：7-8月", "交通：可骑行或包车环湖"]
    }
  },
  {
    id: "lijiang-river",
    name: "桂林漓江",
    location: "广西·桂林",
    description: "轻松舒适的江边徒步，风景如画。住宿条件极佳，适合追求舒适度。",
    tags: ["轻松舒适", "山水画卷", "适合全家"],
    image: "https://images.unsplash.com/photo-1533038590840-1cde6b418979?q=80&w=800&auto=format&fit=crop", // Guilin Peaks
    hygiene_score: 5,
    instagrammability: 5,
    social_pressure: 2,
    maturation: 5,
    highlights: ["桂林山水甲天下", "九马画山", "20元人民币背景图"],
    best_season: ["春季", "秋季"],
    mbti_affinity: { I: 0.3, E: 0.7, N: 0.3, S: 0.7, T: 0.2, F: 0.8, J: 0.4, P: 0.6 },
    survival_requirements: { tolerance_toilet: 1, tolerance_shower: 1, tolerance_bugs: 2, physical_fitness: 1 },
    recommendation_data: {
      score: 9.0,
      reason: "桂林山水甲天下，每一步都是一幅水墨画卷。住宿条件极佳，适合追求舒适度的旅行者。",
      best_for: ["家庭出游", "情侣约会", "摄影爱好者"],
      experience: "竹筏漂流在漓江上，两岸奇峰倒映水中，仿佛置身水墨画卷之中。",
      tips: ["最佳季节：4-5月、9-10月", "美食：桂林米粉"]
    }
  },
  {
    id: "huangshan-light",
    name: "黄山（轻装）",
    location: "安徽·黄山",
    description: "世界文化与自然双遗产，设施成熟。轻装入住山顶酒店，适合进阶小白。",
    tags: ["世界遗产", "云海奇观", "设施完善"],
    image: "https://images.unsplash.com/photo-1582235948016-1f9e9d6945a0?q=80&w=800&auto=format&fit=crop", // Peak above clouds
    hygiene_score: 4,
    instagrammability: 5,
    social_pressure: 2,
    maturation: 5,
    highlights: ["奇松怪石云海温泉", "五岳归来不看山", "山顶酒店设施完善"],
    best_season: ["春季", "秋季"],
    mbti_affinity: { I: 0.4, E: 0.6, N: 0.6, S: 0.4, T: 0.5, F: 0.5, J: 0.5, P: 0.5 },
    survival_requirements: { tolerance_toilet: 2, tolerance_shower: 2, tolerance_bugs: 2, physical_fitness: 2 },
    recommendation_data: {
      score: 9.2,
      reason: "世界级双遗产，轻装入住山顶酒店，看日出云海无需背负露营装备，体验感极佳。",
      best_for: ["自然爱好者", "文化探索者", "摄影爱好者"],
      experience: "清晨在光明顶等待日出，云海如潮水般翻滚，金色的光芒点亮奇松怪石。",
      tips: ["最佳季节：4-5月、9-10月", "住宿：山顶酒店需提前预订"]
    }
  },
  {
    id: "three-gorges",
    name: "三峡徒步",
    location: "湖北·宜昌",
    description: "长江三峡经典徒步，历史文化厚重。需要一定体能，体验感极佳。",
    tags: ["史诗路线", "历史文化", "峡谷风光"],
    image: "https://images.unsplash.com/photo-1616128618694-96e9e896ecb7?q=80&w=800&auto=format&fit=crop", // River & Mountains
    hygiene_score: 3,
    instagrammability: 4,
    social_pressure: 2,
    maturation: 4,
    highlights: ["长江三峡史诗级风光", "三国文化遗迹", "瞿塘峡巫峡西陵峡"],
    best_season: ["春季", "秋季"],
    mbti_affinity: { I: 0.5, E: 0.5, N: 0.6, S: 0.4, T: 0.6, F: 0.4, J: 0.6, P: 0.4 },
    survival_requirements: { tolerance_toilet: 2, tolerance_shower: 2, tolerance_bugs: 2, physical_fitness: 3 },
    recommendation_data: {
      score: 9.1,
      reason: "史诗级风光与三国文化的完美结合。徒步三峡，近距离感受'两岸猿声啼不住'的意境。",
      best_for: ["历史爱好者", "文学爱好者", "峡谷爱好者"],
      experience: "站在巫峡高处俯瞰长江，江面如碧绿丝带，神女峰在远处静静伫立。",
      tips: ["最佳季节：4-5月、9-10月", "文化：提前了解三国历史"]
    }
  },
  {
    id: "jiankou-greatwall",
    name: "北京箭扣长城",
    location: "北京·怀柔",
    description: "野长城探险，刺激惊险。需要较好体能和胆量，不适合恐高者。",
    tags: ["野长城", "刺激惊险", "摄影圣地"],
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=800&auto=format&fit=crop", // Winding Wall
    hygiene_score: 2,
    instagrammability: 5,
    social_pressure: 3,
    maturation: 3,
    highlights: ["最险峻野性的一段长城", "鹰飞倒仰惊险路段", "摄影发烧友最爱"],
    best_season: ["春季", "秋季"],
    mbti_affinity: { I: 0.5, E: 0.5, N: 0.5, S: 0.5, T: 0.7, F: 0.3, J: 0.4, P: 0.6 },
    survival_requirements: { tolerance_toilet: 3, tolerance_shower: 2, tolerance_bugs: 3, physical_fitness: 4 },
    recommendation_data: {
      score: 8.3,
      reason: "最险峻野性的一段长城，保留了最原始的风貌。鹰飞倒仰等路段考验胆量，是征服者的选择。",
      best_for: ["冒险爱好者", "摄影发烧友", "体能强者"],
      experience: "攀爬在近乎垂直的残垣断壁间，脚下是万丈深渊，狂风呼啸，仿佛穿越回古代。",
      tips: ["安全：必须穿防滑登山鞋", "体能：提前进行核心训练"]
    }
  },
  {
    id: "shenxianju",
    name: "浙江神仙居",
    location: "浙江·台州",
    description: "仙境般的自然风光，设施完善。轻松舒适，适合进阶小白。",
    tags: ["仙境秘境", "网红打卡", "轻松舒适"],
    image: "https://images.unsplash.com/photo-1465433621644-b6574c865f84?q=80&w=800&auto=format&fit=crop", // Foggy Mountain
    hygiene_score: 4,
    instagrammability: 5,
    social_pressure: 1,
    maturation: 5,
    highlights: ["天然观音佛光", "如意桥网红打卡", "李白梦游天姥地"],
    best_season: ["春季", "秋季"],
    mbti_affinity: { I: 0.7, E: 0.3, N: 0.7, S: 0.3, T: 0.3, F: 0.7, J: 0.4, P: 0.6 },
    survival_requirements: { tolerance_toilet: 2, tolerance_shower: 2, tolerance_bugs: 2, physical_fitness: 2 },
    recommendation_data: {
      score: 8.9,
      reason: "李白梦游天姥吟留别的灵感来源。自然风光如仙境般梦幻，如意桥已成为网红打卡圣地。",
      best_for: ["诗意追求者", "摄影爱好者", "轻松出游者"],
      experience: "站在如意桥中央，四周云雾缭绕，天然观音佛光若隐若现，仿佛置身天庭。",
      tips: ["最佳季节：春秋两季", "体验：如意桥、南天顶"]
    }
  },
  {
    id: "maclehose-trail",
    name: "麦理浩径",
    location: "香港·西贡",
    description: "香港最经典的徒步路线，山海相连的美景令人叹为观止。设施完善、交通方便。",
    tags: ["香港经典", "海景徒步", "设施完善"],
    image: "https://images.unsplash.com/photo-1601221763784-25cb2789643b?q=80&w=800&auto=format&fit=crop", // Green Hills & Ocean
    hygiene_score: 4,
    instagrammability: 5,
    social_pressure: 3,
    maturation: 5,
    highlights: ["香港最佳徒步路线", "万宜水库湛蓝湖水", "破边洲六角石柱"],
    best_season: ["秋季", "冬季"],
    mbti_affinity: { I: 0.4, E: 0.6, N: 0.6, S: 0.4, T: 0.5, F: 0.5, J: 0.6, P: 0.4 },
    survival_requirements: { tolerance_toilet: 2, tolerance_shower: 2, tolerance_bugs: 2, physical_fitness: 3 },
    recommendation_data: {
      score: 9.0,
      reason: "香港最佳徒步路线，山海相连，万宜水库与六角石柱奇观必打卡。设施完善，适合周末短途。",
      best_for: ["新手入门", "海景爱好者", "周末短途"],
      experience: "站在万宜水库堤坝，湛蓝湖水如翡翠镶嵌在大海之中，波光粼粼。",
      tips: ["最佳季节：10-3月", "推荐：第一、二段最美"]
    }
  }
];