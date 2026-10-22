export const total = 11;

const foot = (i) => `
  <div class="ft">
    <span>期货分析工具选型指南</span>
    <span class="pg">${String(i).padStart(2,'0')} / ${total}</span>
  </div>
  <div class="bar"><i style="width:${Math.round(i/total*100)}%"></i></div>`;

const chartSvg = `
<svg class="chart" viewBox="0 0 1080 420" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#F5C451" stroke-width="3" opacity=".55">
    <line x1="90" y1="300" x2="90" y2="250"/><line x1="90" y1="270" x2="90" y2="220"/><rect x="76" y="252" width="28" height="14" fill="#F5C451" opacity=".5"/>
    <line x1="180" y1="300" x2="180" y2="220"/><line x1="180" y1="240" x2="180" y2="180"/><rect x="166" y="222" width="28" height="16" fill="#F5C451" opacity=".45"/>
    <line x1="270" y1="300" x2="270" y2="250"/><line x1="270" y1="270" x2="270" y2="200"/><rect x="256" y="232" width="28" height="30" fill="#F5C451" opacity=".55"/>
    <line x1="360" y1="300" x2="360" y2="230"/><line x1="360" y1="250" x2="360" y2="170"/><rect x="346" y="186" width="28" height="46" fill="#F5C451" opacity=".5"/>
    <line x1="450" y1="300" x2="450" y2="200"/><line x1="450" y1="220" x2="450" y2="120"/><rect x="436" y="132" width="28" height="60" fill="#F5C451" opacity=".6"/>
    <line x1="540" y1="300" x2="540" y2="180"/><line x1="540" y1="200" x2="540" y2="90"/><rect x="526" y="150" width="28" height="46" fill="#F5C451" opacity=".5"/>
    <line x1="630" y1="300" x2="630" y2="160"/><line x1="630" y1="180" x2="630" y2="70"/><rect x="616" y="110" width="28" height="56" fill="#35D0A5" opacity=".55"/>
    <line x1="720" y1="300" x2="720" y2="130"/><line x1="720" y1="150" x2="720" y2="60"/><rect x="706" y="80" width="28" height="44" fill="#35D0A5" opacity=".5"/>
    <line x1="810" y1="300" x2="810" y2="110"/><line x1="810" y1="130" x2="810" y2="40"/><rect x="796" y="66" width="28" height="52" fill="#35D0A5" opacity=".6"/>
    <line x1="900" y1="300" x2="900" y2="90"/><line x1="900" y1="110" x2="900" y2="20"/><rect x="886" y="40" width="28" height="48" fill="#35D0A5" opacity=".5"/>
  </g>
  <polyline points="20,330 120,318 200,300 300,312 380,268 470,240 560,262 650,196 740,168 830,140 920,104 1060,70"
    stroke="url(#g)" stroke-width="5" fill="none" opacity=".9"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#F5C451" stop-opacity=".25"/><stop offset="1" stop-color="#35D0A5" stop-opacity="1"/>
  </linearGradient></defs>
</svg>`;

export const slides = [
  // 1 封面
  {
    cls: 'cover',
    html: `
    <div class="hd"><span class="chip">期货新手必看</span><span class="chip ghosty">工具选型</span></div>
    <h1>期货分析工具<br><span class="hl">怎么选</span>？</h1>
    <div class="lead">5类常用经典工具，<b>一篇讲明白</b></div>
    <div class="rule"></div>
    <div class="tags">
      <div class="tagb hot">看盘下单</div>
      <div class="tagb">盯盘抢单</div>
      <div class="tagb">产业数据</div>
      <div class="tagb">量化回测</div>
      <div class="tagb">期权波动率</div>
    </div>
    <div class="swipe"><span class="arrow">→</span> 下滑，一页一类工具</div>
    ${chartSvg}
    ${foot(1)}`
  },

  // 2 痛点
  {
    cls: 'dense',
    html: `
    <div class="ghost">?</div>
    <div class="hd"><span class="chip">先说个扎心的事实</span></div>
    <h1>“随便下一个软件”<br>分析行情<span class="hl">大概率不够用</span></h1>
    <div class="lead">同样叫“分析工具”，其实干的是<b>五种完全不同的活</b>：</div>
    <div class="items">
      <div class="item"><div class="num">01</div><div><div class="tt">看行情、画K线、顺手下单</div><div class="tx">→ 属于<em>综合看盘终端</em>的活</div></div></div>
      <div class="item"><div class="num">02</div><div><div class="tt">盯盘口、快速报单撤单</div><div class="tx">→ 属于<em>交易执行工具</em>的活</div></div></div>
      <div class="item"><div class="num">03</div><div><div class="tt">查现货、库存、基差</div><div class="tx">→ 属于<em>产业数据工具</em>的活</div></div></div>
      <div class="item"><div class="num">04</div><div><div class="tt">写策略、跑历史回测</div><div class="tx">→ 属于<em>量化平台</em>的活</div></div></div>
      <div class="item"><div class="num">05</div><div><div class="tt">算IV、画波动率曲线</div><div class="tx">→ 属于<em>期权分析工具</em>的活</div></div></div>
    </div>
    ${foot(2)}`
  },

  // 3 全景
  {
    cls: 'dense',
    html: `
    <div class="hd"><span class="chip">全景速览</span><span class="chip ghosty">先对号，再挑功能</span></div>
    <h1>五类工具，<span class="hl">一张图</span>看懂分工</h1>
    <div class="facts">
      <div class="fact"><div class="fk">01</div><div class="fv"><b>综合看盘交易终端</b> — 看实时报价、画K线、设预警、直接下单<br><span class="tag">期货公司App</span><span class="tag">文华财经</span><span class="tag">博易大师</span><span class="tag">同花顺期货通</span><span class="tag">易盛极星</span></div></div>
      <div class="fact"><div class="fk">02</div><div class="fv"><b>盘口与交易执行工具</b> — 快速报单撤单、盯委托与持仓<br><span class="tag">快期</span><span class="tag">无限易</span></div></div>
      <div class="fact"><div class="fk">03</div><div class="fv"><b>产业基本面数据工具</b> — 现货价、库存产量、消费、基差<br><span class="tag">钢联数据等</span></div></div>
      <div class="fact"><div class="fk">04</div><div class="fv"><b>量化研究与策略平台</b> — 写策略、历史回测、模拟与自动执行<br><span class="tag">易盛极智量化</span><span class="tag">无限易量化模块</span></div></div>
      <div class="fact"><div class="fk">05</div><div class="fv"><b>期权波动率分析工具</b> — IV/HV、波动率曲线、组合风险<br><span class="tag">专业终端内置期权模块</span></div></div>
    </div>
    <div class="callout gold"><div class="lb">核心逻辑</div><div class="tx">场景不同，工具就不一样。别拿同一个软件硬扛所有活。</div></div>
    ${foot(3)}`
  },

  // 4 类别一
  {
    html: `
    <div class="ghost left">01</div>
    <div class="hd"><span class="chip">场景 01 / 05</span><span class="chip ghosty">日常看盘下单</span></div>
    <h1>综合看盘<br><span class="hl">交易终端</span></h1>
    <div class="lead">基础但高频的活：看实时报价、画K线、加指标、设价格预警，顺带把单也下了。</div>
    <div class="facts">
      <div class="fact"><div class="fk g">适合</div><div class="fv">普通交易者、靠<b>技术分析</b>做判断的人</div></div>
      <div class="fact"><div class="fk g">常见</div><div class="fv"><span class="tag">期货公司官方App</span><span class="tag">文华财经</span><span class="tag">博易大师</span><span class="tag">同花顺期货通</span><span class="tag">易盛极星</span></div></div>
      <div class="fact"><div class="fk g">挑时</div><div class="fv">图表顺不顺手、品种覆盖全不全、支不支持<b>条件单</b>、能否直连自己的交易账户、哪些功能要<b>收费</b></div></div>
    </div>
    <div class="callout"><div class="lb">选择重点</div><div class="tx">日常看盘下单顺不顺畅，功能跟自己的交易习惯合不合拍。</div></div>
    ${foot(4)}`
  },

  // 5 类别二
  {
    html: `
    <div class="ghost left">02</div>
    <div class="hd"><span class="chip">场景 02 / 05</span><span class="chip ghosty">短线抢单盯盘口</span></div>
    <h1>盘口与<br><span class="hl">交易执行工具</span></h1>
    <div class="lead">核心是<b>快速报单、快速撤单</b>，顺带把委托和持仓盯住。</div>
    <div class="facts">
      <div class="fact"><div class="fk g">适合</div><div class="fv">做短线的、特别在意<b>盘口细微变化</b>的人</div></div>
      <div class="fact"><div class="fk g">常见</div><div class="fv"><span class="tag">快期</span><span class="tag">无限易</span>，以及部分专业终端自带的相关功能</div></div>
      <div class="fact"><div class="fk g">挑时</div><div class="fv">下单交互顺不顺手、能不能<b>批量操作</b>、订单状态看不看得清、<b>断线后能不能顺利恢复</b></div></div>
    </div>
    <div class="callout"><div class="lb">选择重点</div><div class="tx">别只看“快不快”——真出事时，救你的是下单流程、订单核对和异常处理。</div></div>
    ${foot(5)}`
  },

  // 6 类别三
  {
    html: `
    <div class="ghost left">03</div>
    <div class="hd"><span class="chip">场景 03 / 05</span><span class="chip ghosty">做产业研究</span></div>
    <h1>产业基本面<br><span class="hl">数据工具</span></h1>
    <div class="lead">跟产业链挂钩的数据：现货价格、库存、产量、消费、基差。</div>
    <div class="facts">
      <div class="fact"><div class="fk g">适合</div><div class="fv">产业客户、靠<b>基本面</b>吃饭的研究者</div></div>
      <div class="fact"><div class="fk g">常见</div><div class="fv"><span class="tag">钢联数据</span>，以及对应品种的专业数据服务商</div></div>
      <div class="fact"><div class="fk g">挑时</div><div class="fv">来源可不可靠、统计样本够不够大、更新频率快不快、发布时间准不准时、历史数据存得够不够长</div></div>
    </div>
    <div class="callout"><div class="lb">选择重点</div><div class="tx">数据口径够不够明确，能不能持续跟上你要盯的品种的供需变化。</div></div>
    ${foot(6)}`
  },

  // 7 类别四
  {
    html: `
    <div class="ghost left">04</div>
    <div class="hd"><span class="chip">场景 04 / 05</span><span class="chip ghosty">跑策略做回测</span></div>
    <h1>量化研究与<br><span class="hl">策略平台</span></h1>
    <div class="lead">写策略 → 历史回测 → 模拟盘验证 → 自动化监控与执行。</div>
    <div class="facts">
      <div class="fact"><div class="fk g">适合</div><div class="fv">量化研究者、做<b>程序化交易</b>的人</div></div>
      <div class="fact"><div class="fk g">常见</div><div class="fv"><span class="tag">易盛极智量化</span><span class="tag">无限易量化模块</span>，主要面向有一定经验、需用程序化管理策略的用户</div></div>
      <div class="fact"><div class="fk g">挑时</div><div class="fv">历史数据质量、回测机制是否合理、<b>手续费和滑点</b>算没算、实盘<b>风控开关</b>灵不灵</div></div>
    </div>
    <div class="callout"><div class="lb">选择重点</div><div class="tx">回测结果靠不靠谱，实盘风控做得扎不扎实。</div></div>
    ${foot(7)}`
  },

  // 8 类别五
  {
    html: `
    <div class="ghost left">05</div>
    <div class="hd"><span class="chip">场景 05 / 05</span><span class="chip ghosty">做期权分析</span></div>
    <h1>期权波动率<br><span class="hl">分析工具</span></h1>
    <div class="lead">专门分析隐含波动率、历史波动率、波动率曲线，以及组合持仓的整体风险。</div>
    <div class="facts">
      <div class="fact"><div class="fk g">适合</div><div class="fv">期权交易者、研究<b>波动率</b>的人</div></div>
      <div class="fact"><div class="fk g">常见</div><div class="fv">部分具备<b>期权分析功能</b>的专业终端，是这一类的经典选择</div></div>
      <div class="fact"><div class="fk g">挑时</div><div class="fv">IV和HV做得细不细、波动率曲线画得准不准、能否从<b>单个合约延伸到组合</b>风险评估、数据更新及时不及时</div></div>
    </div>
    <div class="callout"><div class="lb">选择重点</div><div class="tx">能不能从单一合约分析扩展到组合风险评估，数据及不及时。</div></div>
    ${foot(8)}`
  },

  // 9 自查清单
  {
    html: `
    <div class="hd"><span class="chip">5秒自查</span><span class="chip ghosty">你该看哪一类</span></div>
    <h1>对号入座，<span class="hl">一眼定位</span></h1>
    <div class="lead">先看自己平时主要在哪个场景里折腾：</div>
    <div class="items" style="margin-top:36px">
      <div class="chk"><div class="mk">✓</div><div class="c1">日常看盘、做技术分析</div><div class="ar">→</div><div class="c2">综合看盘交易终端</div></div>
      <div class="chk"><div class="mk">✓</div><div class="c1">盯盘口、频繁报撤单</div><div class="ar">→</div><div class="c2">交易执行工具</div></div>
      <div class="chk"><div class="mk">✓</div><div class="c1">研究现货、库存和供需</div><div class="ar">→</div><div class="c2">产业基本面数据工具</div></div>
      <div class="chk"><div class="mk">✓</div><div class="c1">写策略、跑历史回测</div><div class="ar">→</div><div class="c2">量化研究平台</div></div>
      <div class="chk"><div class="mk">✓</div><div class="c1">分析期权和波动率</div><div class="ar">→</div><div class="c2">期权波动率分析工具</div></div>
    </div>
    <div class="callout gold"><div class="lb">别再走弯路</div><div class="tx">不用在错的软件里死磕功能。</div></div>
    ${foot(9)}`
  },

  // 10 提醒
  {
    html: `
    <div class="hd"><span class="chip">选之前必看</span></div>
    <h1>有几件事<br>得<span class="hl">提前说清楚</span></h1>
    <div class="facts">
      <div class="fact"><div class="fk">01</div><div class="fv">不同软件的<b>具体功能、权限范围、账户接入方式和支持的品种</b>，都可能随时间调整，各家软件也在不停迭代。</div></div>
      <div class="fact"><div class="fk">02</div><div class="fv">具体请以<b>软件官方说明</b>和相关服务方的最新信息为准，别拿一篇文章当长期不变的标准。</div></div>
      <div class="fact"><div class="fk">03</div><div class="fv">核对方式：看<b>官网/帮助文档</b>的功能与权限说明、翻<b>版本更新日志</b>，再用自己熟悉的品种<b>上手试一遍</b>下单与回测流程。</div></div>
    </div>
    <div class="callout"><div class="lb">一句话</div><div class="tx">工具会变，判断标准更耐看。</div></div>
    ${foot(10)}`
  },

  // 11 结尾
  {
    cls: 'end',
    html: `
    <div class="hd"><span class="chip">最后一句</span></div>
    <div class="bigq">选期货软件，<br>从来不是<br><span>功能越多越好</span>，<br>而是工具跟你的<br>交易场景<span>对得上</span>。</div>
    <div class="endq">对上了，用起来才顺手；<br>对不上，功能再花哨也是摆设。</div>
    <div class="tags" style="margin-top:48px">
      <div class="tagb hot">收藏这张清单</div>
      <div class="tagb">选软件前先对一遍</div>
    </div>
    <div class="disclaimer">本文为期货工具科普与选型思路整理，不构成任何投资建议。文中软件的功能、权限、账户接入方式与支持品种以各官方最新说明为准；市场有风险，决策需谨慎。</div>
    ${foot(11)}`
  }
];
