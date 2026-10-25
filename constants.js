export const METADATA = {
  author: "尹晟鸿",
  title: "尹晟鸿 | 全栈开发工程师 · 个人在线简历",
  description:
    "尹晟鸿，全栈开发工程师（3年经验，深圳宝安）。专注于出海独立站矩阵、跨境支付集成、中后台运营数据系统架构及 AI Agent 自动化赋能。",
  siteUrl: "https://chn-yin.github.io",
  twitterHandle: "",
  keywords: [
    "尹晟鸿",
    "全栈开发工程师",
    "前端开发工程师",
    "深圳前端开发",
    "出海独立站",
    "WordPress",
    "WooCommerce",
    "Shopify",
    "React",
    "Vue3",
    "Next.js",
    "GSAP",
    "Node.js",
    "Koa2",
    "Redis",
    "AI Agent",
    "DeepSeek",
    "OpenAI",
    "个人简历",
    "Devfolio",
  ].join(", "),
  image: "/avatar.jpg",
  language: "zh-CN",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "首页",
    ref: "home",
  },
  {
    name: "专业技能",
    ref: "skills",
  },
  {
    name: "项目经验",
    ref: "projects",
  },
  {
    name: "工作经历",
    ref: "work",
  },
  {
    name: "联系方式",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "全栈开发工程师 · 3 年开发经验",
  "熟悉 WordPress / Shopify 独立站开发",
  "熟悉 Vue3 / React 前端框架",
  "熟悉 Node.js / Koa2 服务端开发",
  "熟悉 GSAP 时间轴动画编排与滚动交互",
  "落地 AI Agent 工作流与大模型业务集成",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:yinsh9248@gmail.com",
    title: "邮箱: yinsh9248@gmail.com",
  },
  {
    name: "phone",
    url: "tel:18873172560",
    title: "电话: 18873172560",
  },
  {
    name: "wechat",
    url: "#",
    title: "微信: yinsh1114 (点击查看二维码)",
  },
  {
    name: "github",
    url: "https://github.com/CHN-yin",
    title: "GitHub: https://github.com/CHN-yin",
  },
];

export const PERSONAL_INFO = {
  name: "尹晟鸿",
  gender: "男",
  birth: "2003.11.14",
  city: "深圳宝安",
  phone: "18873172560",
  email: "yinsh9248@gmail.com",
  wechat: "yinsh1114",
  github: "https://github.com/CHN-yin",
  experienceYears: "3年",
  role: "全栈开发工程师",
  education: {
    school: "湖南生物机电职业技术学院",
    major: "软件技术",
    period: "2021.09 ~ 2024.06",
  },
};

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "nodejs",
    "vite",
    "webpack",
    "sass",
  ],
  librariesAndFrameworks: [
    "vue",
    "react",
    "nextjs",
    "tailwindcss",
    "gsap",
    "wordpress",
    "shopify",
    "echarts",
  ],
  databases: ["mysql", "mongodb", "redis"],
  other: ["git", "ai", "seo"],
};

export const PROJECTS = [
  {
    name: "出海电商独立站",
    imageKey: "ecommerce",
    description:
      "面向澳洲市场的品牌独立站集群。落地单站点多城市隔离运营机制；二次开发 WooCommerce 深度改造结账流程与订单校验；对接多套跨境支付网关及库存管理；将 PageSpeed 稳定调优至 90+，配置结构化数据助力 GSC 收录。",
    gradient: ["#09203F", "#537895"],
    url: null,
    tech: ["wordpress", "shopify", "javascript", "sass", "seo"],
  },
  {
    name: "跨境运营数据中台",
    imageKey: "dataplatform",
    description:
      "对接 8 个独立站后台的订单聚合分析中台，基于 Vue3 + Pinia + Element Plus + ECharts 与 Koa2 + Sequelize + MySQL + Redis + BullMQ 从 0 到 1 独立开发。modified_after 水位增量同步 + 唯一索引幂等 upsert 实现订单零丢失；归集订单 10w+、客户画像 2w+，RFM 每日自动分级；看板查询由 3s+ 优化至 500ms 内，站点巡检告警时延降至 10 分钟内。",
    gradient: ["#243949", "#517FA4"],
    url: null,
    tech: ["vue", "vite", "echarts", "mysql", "redis", "nodejs"],
  },
  {
    name: "企业级私有化 EDM 平台",
    imageKey: "edm",
    description:
      "基于开源 Mautic 与 Amazon SES 构建私有化邮件营销体系，配置独立 IP 与 SPF/DKIM/DMARC 邮件身份验证。深度接入 AI Agent 工作流（集成 DeepSeek / OpenAI API）自动更新人群分段、生成优化文案，日均投递 5000+ 封，送达率 95%+，打开率 20%+。",
    gradient: ["#141E30", "#243B55"],
    url: null,
    tech: ["ai", "mysql", "redis"],
  },
  {
    name: "AI 自动化运营系统",
    imageKey: "automation",
    description:
      "面向独立站矩阵的 AI 自动化系统：WhatsApp 智能客服直连 WooCommerce，7×24 小时响应售前业务问答，凭邮箱 / 订单号实时查询订单与物流状态，复杂咨询自动转接人工；新订单、派送通知与转人工提醒实时推送飞书群，运营不漏单不掉线；Agent 工作流自动完成 SEO 文章撰写、外链建设与营销邮件等日常运营，持续为独立站引流。",
    gradient: ["#0F2027", "#2C5364"],
    url: null,
    tech: ["ai", "wordpress", "woocommerce"],
  },
  {
    name: "Alpha3.0 智慧出租平台",
    imageKey: "fleet",
    description:
      "参与锐明技术商用车领域 Alpha3.0 智慧出租平台前端开发。聚焦车载终端设备监控、车辆运行状态分布、ADAS 与 AEB 异常告警可视化，基于 Vue 与 ECharts 开发复杂数据看板与综合报表，优化海量数据下的渲染流畅度。",
    gradient: ["#000428", "#004e92"],
    url: null,
    tech: ["vue", "javascript", "echarts"],
  },
];

export const WORK_CONTENTS = {
  ZHAOCHUANG: [
    {
      title: "深圳市兆创科技有限责任公司",
      description:
        "2024.08 ~ 2026.09 担任全栈开发工程师。公司主营跨境电商，面向澳洲市场做自有品牌批发与零售。全面负责公司独立站集群开发、跨境支付集成，及 CRM、EDM 等平台的开发架构，同时主导 AI Agent 的设计与业务落地。",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-white px-6 text-center">
          <span className="text-2xl font-bold mb-2 tracking-wide">深圳市兆创科技</span>
          <span className="text-sm text-gray-light-2">全栈开发工程师 · 2024.08 ~ 2026.09</span>
          <span className="mt-4 inline-block text-xs px-3 py-1 bg-white/90 rounded-full font-semibold" style={{ color: "#2b0e51" }}>跨境出海 · 交易闭环 · 运营中台 · AI Agent</span>
        </div>
      ),
    },
    {
      title: "出海独立站",
      description:
        "精准还原 UI 设计效果并实现全端响应式适配。封装 WordPress Shortcode 与 Elementor Widget 模块化组件；基于 WooCommerce 深度定制改造结账流程、自定义字段与下单业务逻辑；实现单站点多城市隔离运营机制，根据用户访问地域匹配定价与库存；开发支付网关适配插件与库存变更日志，保障高并发交易稳定。",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-white px-6 text-center">
          <span className="text-xl font-bold mb-2">独立站 & 跨境交易</span>
          <p className="text-xs text-gray-light-2 leading-relaxed">
            建站 · WooCommerce 深度二次开发 · 跨境支付网关 · 库存追溯插件
          </p>
        </div>
      ),
    },
    {
      title: "运营数据中台",
      description:
        "主导中台全栈技术选型与实现（Vue3 + Vite + Pinia + Vue Router + Element Plus + ECharts + Koa2 + Sequelize + MySQL + Redis + BullMQ）。设计多站点订单增量同步机制（modified_after 水位 + 唯一索引幂等 upsert + 每日对账兜底），归集订单 10w+、沉淀客户画像 2w+；构建时间、站点、状态联动看板，预聚合 + Redis 缓存将大区间查询由 3s+ 降至 500ms 内；基于 RFM 分位打分实现客户价值自动分级；开发 5 分钟间隔自动巡检与连续异常告警防抖，故障发现时延降至 10 分钟内；实现三级 RBAC 权限管控保障数据安全。",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-white px-6 text-center">
          <span className="text-xl font-bold mb-2">运营数据中台架构</span>
          <p className="text-xs text-gray-light-2 leading-relaxed">
            多站订单增量聚合 · RFM客户画像分级 · 自动化健康巡检邮件告警 · 三级 RBAC 管控
          </p>
        </div>
      ),
    },
    {
      title: "私有化 EDM 平台与 AI Agent",
      description:
        "基于 Mautic 搭建私有化 EDM 平台并对接 Amazon SES API，配置独立发送 IP 与自定义发信域名，完成 SPF/DKIM/DMARC 邮件身份认证；深度接入 AI Agent（Hermes Agent / 自动化 Skill 设计，集成 DeepSeek / OpenAI 大模型 API），实现客户人群智能分段、AI 生成与优化邮件模板并触发自动发布；日均稳定投递 5000+ 封，送达率 95%+、打开率 20%+，大幅降低营销运营成本。",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-white px-6 text-center">
          <span className="text-xl font-bold mb-2">智能 EDM & AI Agent 落地</span>
          <p className="text-xs text-gray-light-2 leading-relaxed">
            Mautic + Amazon SES · 自动化 Agent 工作流 · DeepSeek/OpenAI 对接 · 日均 5000+ 封
          </p>
        </div>
      ),
    },
    {
      title: "性能优化与 SEO 增长",
      description:
        "构建完整前端性能调优链路，通过代码分割、静态资源预加载、WebP 格式压缩、高效缓存策略等手段，将移动端与桌面端 PageSpeed 评分稳定优化至 90 分以上；部署 Schema 结构化数据，结合 GSC 持续监控并提升搜索引擎自然曝光与收录转化。",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-white px-6 text-center">
          <span className="text-xl font-bold mb-2">PageSpeed 90+ & SEO 体系</span>
          <p className="text-xs text-gray-light-2 leading-relaxed">
            代码分割 · 资源预加载 · 结构化数据 Schema · PageSpeed 90+
          </p>
        </div>
      ),
    },
  ],
  STREAMAX: [
    {
      title: "深圳市锐明科技技术股份有限公司",
      description:
        "2023.12 ~ 2024.05（实习经历）担任前端开发工程师。公司聚焦商用车领域，业务涉及车载终端、ADAS 与 AEB 等智能安全系统。深度参与 Alpha3.0 智慧出租平台前端开发，负责车载终端监控、数据看板及报表等核心模块。",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-white px-6 text-center">
          <span className="text-2xl font-bold mb-2 tracking-wide">深圳市锐明科技技术 (Streamax)</span>
          <span className="text-sm text-gray-light-2">前端开发工程师（实习） · 2023.12 ~ 2024.05</span>
          <span className="mt-4 inline-block text-xs px-3 py-1 bg-white/90 rounded-full font-semibold" style={{ color: "#2b0e51" }}>Alpha3.0 智慧出租平台 · 车载监控 · ADAS/AEB 看板</span>
        </div>
      ),
    },
    {
      title: "Alpha3.0 智慧出租平台监控与看板",
      description:
        "负责 Alpha3.0 智慧出租平台前端核心模块开发，实现出租车车辆实时在线监控、高频状态上报展示、车载智能终端 ADAS 与 AEB 告警事件追踪等功能，保障海量并发设备状态下的页面高响应度与低时延渲染。",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-white px-6 text-center">
          <span className="text-xl font-bold mb-2">Alpha3.0 智慧出租监控看板</span>
          <p className="text-xs text-gray-light-2 leading-relaxed">
            车载终端监控 · 出租车状态流实时渲染 · ADAS/AEB 告警跟踪
          </p>
        </div>
      ),
    },
    {
      title: "数据报表与组件模块封装",
      description:
        "基于 Vue + ECharts 开发综合数据报表与运营趋势分析模块，封装通用图表与筛选组件，提升团队组件复用率；优化报表大数据量分页与渲染性能，保证良好的用户交互体验。",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-white px-6 text-center">
          <span className="text-xl font-bold mb-2">综合报表与性能优化</span>
          <p className="text-xs text-gray-light-2 leading-relaxed">
            Vue + ECharts · 高复用组件库 · 大数据报表性能优化
          </p>
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
