const affiliateLinks = {
  "ppt-template": "ai-ppt-tools.html",
  resume: "ai-resume-tools.html",
  writing: "ai-writing-tools.html",
  "image-design": "ai-image-tools.html",
  video: "ai-video-tools.html",
  coding: "ai-coding-tools.html",
  office: "#library",
  study: "ai-study-tools.html",
  data: "ai-data-tools.html",
  assets: "#library",
  taobao: "ai-deals.html",
  "ai-deals": "ai-deals.html",
  "daily-tools": "free-ai-tools.html",
};

const labels = {
  writing: "AI写作与改稿",
  "ppt-template": "PPT模板与AI生成",
  "image-design": "AI图片与海报设计",
  video: "AI视频与剪辑工具",
  coding: "AI编程与代码助手",
  office: "文档表格与会议纪要",
  resume: "简历优化与模板",
  study: "AI学习与考试工具",
  data: "数据分析与图表",
  assets: "设计素材与模板库",
  taobao: "AI相关资源入口",
  "ai-deals": "AI相关资源入口",
  "daily-tools": "今日热门AI工具清单",
};

const toolDirectory = [
  { category: "通用对话", name: "ChatGPT", desc: "通用问答、写作、代码、数据和多模态助手。", url: "https://chatgpt.com/" },
  { category: "通用对话", name: "Claude", desc: "长文档理解、写作、分析和代码辅助。", url: "https://claude.ai/" },
  { category: "通用对话", name: "Google Gemini", desc: "Google 生态里的对话、搜索和多模态助手。", url: "https://gemini.google.com/" },
  { category: "通用对话", name: "Perplexity", desc: "带来源的 AI 搜索和资料整理。", url: "https://www.perplexity.ai/" },
  { category: "通用对话", name: "Poe", desc: "聚合多个 AI 模型的聊天入口。", url: "https://poe.com/" },
  { category: "通用对话", name: "Kimi", desc: "长文本阅读、资料总结和中文办公场景。", url: "https://kimi.moonshot.cn/" },

  { category: "写作文案", name: "秘塔写作猫", desc: "中文纠错、改写、润色和办公写作。", url: "https://xiezuocat.com/" },
  { category: "写作文案", name: "Grammarly", desc: "英文语法、表达优化和商务写作。", url: "https://www.grammarly.com/" },
  { category: "写作文案", name: "Jasper", desc: "营销文案、品牌内容和广告文案生成。", url: "https://www.jasper.ai/" },
  { category: "写作文案", name: "Copy.ai", desc: "营销邮件、销售话术和内容模板。", url: "https://www.copy.ai/" },
  { category: "写作文案", name: "Notion AI", desc: "笔记、项目文档、知识库和写作辅助。", url: "https://www.notion.so/product/ai" },
  { category: "写作文案", name: "QuillBot", desc: "英文改写、总结、语法和引用工具。", url: "https://quillbot.com/" },

  { category: "PPT演示", name: "Gamma", desc: "用大纲快速生成演示、网页和文档。", url: "https://gamma.app/" },
  { category: "PPT演示", name: "Tome", desc: "AI 演示和故事型汇报页面。", url: "https://tome.app/" },
  { category: "PPT演示", name: "Beautiful.ai", desc: "商业演示设计和自动排版。", url: "https://www.beautiful.ai/" },
  { category: "PPT演示", name: "Canva Presentations", desc: "模板、演示、海报和品牌素材。", url: "https://www.canva.com/presentations/" },
  { category: "PPT演示", name: "Pitch", desc: "团队协作演示和模板。", url: "https://pitch.com/" },

  { category: "图片设计", name: "Midjourney", desc: "高质量 AI 图像生成。", url: "https://www.midjourney.com/" },
  { category: "图片设计", name: "DALL·E", desc: "OpenAI 图像生成和编辑。", url: "https://openai.com/dall-e/" },
  { category: "图片设计", name: "Adobe Firefly", desc: "商业设计、生成填充和创意素材。", url: "https://firefly.adobe.com/" },
  { category: "图片设计", name: "Canva", desc: "海报、封面、PPT、电商图和社媒设计。", url: "https://www.canva.com/" },
  { category: "图片设计", name: "Leonardo AI", desc: "游戏、美术、电商和创意图像生成。", url: "https://leonardo.ai/" },
  { category: "图片设计", name: "Ideogram", desc: "带文字的海报和图像生成。", url: "https://ideogram.ai/" },

  { category: "视频剪辑", name: "Runway", desc: "AI 视频生成、编辑和创意工具。", url: "https://runwayml.com/" },
  { category: "视频剪辑", name: "Pika", desc: "文本生成视频和创意短片。", url: "https://pika.art/" },
  { category: "视频剪辑", name: "Luma Dream Machine", desc: "高质量视频生成和镜头创作。", url: "https://lumalabs.ai/dream-machine" },
  { category: "视频剪辑", name: "CapCut", desc: "短视频剪辑、字幕、模板和社媒发布。", url: "https://www.capcut.com/" },
  { category: "视频剪辑", name: "Descript", desc: "文字式视频剪辑、播客和转写。", url: "https://www.descript.com/" },
  { category: "视频剪辑", name: "HeyGen", desc: "数字人、配音和营销视频。", url: "https://www.heygen.com/" },

  { category: "音频配音", name: "ElevenLabs", desc: "AI 配音、声音克隆和多语言音频。", url: "https://elevenlabs.io/" },
  { category: "音频配音", name: "Suno", desc: "AI 音乐生成和歌曲创作。", url: "https://suno.com/" },
  { category: "音频配音", name: "Udio", desc: "AI 音乐生成和创作。", url: "https://www.udio.com/" },
  { category: "音频配音", name: "Murf", desc: "商业配音和旁白生成。", url: "https://murf.ai/" },

  { category: "AI搜索引擎", name: "Perplexity", desc: "带来源引用的 AI 搜索和资料整理。", url: "https://www.perplexity.ai/" },
  { category: "AI搜索引擎", name: "秘塔AI搜索", desc: "中文资料搜索、总结和大纲整理。", url: "https://metaso.cn/" },
  { category: "AI搜索引擎", name: "You.com", desc: "搜索、聊天和研究型 AI 助手。", url: "https://you.com/" },
  { category: "AI搜索引擎", name: "Phind", desc: "面向开发者问题的 AI 搜索。", url: "https://www.phind.com/" },

  { category: "编程开发", name: "GitHub Copilot", desc: "代码补全、解释、调试和开发助手。", url: "https://github.com/features/copilot" },
  { category: "编程开发", name: "Cursor", desc: "AI 原生代码编辑器。", url: "https://www.cursor.com/" },
  { category: "编程开发", name: "Replit", desc: "在线开发、部署和 AI 编程助手。", url: "https://replit.com/" },
  { category: "编程开发", name: "v0", desc: "用提示词生成前端界面和组件。", url: "https://v0.dev/" },
  { category: "编程开发", name: "Bolt", desc: "浏览器内生成和运行全栈应用。", url: "https://bolt.new/" },
  { category: "编程开发", name: "Codeium Windsurf", desc: "AI 编程 IDE 和代码代理。", url: "https://windsurf.com/" },

  { category: "开发平台", name: "OpenAI Platform", desc: "模型 API、工具调用和多模态应用开发平台。", url: "https://platform.openai.com/" },
  { category: "开发平台", name: "Anthropic Console", desc: "Claude API、提示词和企业应用开发入口。", url: "https://console.anthropic.com/" },
  { category: "开发平台", name: "Google AI Studio", desc: "Gemini API、提示词测试和应用原型开发。", url: "https://aistudio.google.com/" },
  { category: "开发平台", name: "ModelScope", desc: "中文模型、数据集、应用和开源 AI 社区。", url: "https://www.modelscope.cn/" },

  { category: "办公文档", name: "Microsoft Copilot", desc: "Office、Teams、Word、Excel 和企业办公助手。", url: "https://copilot.microsoft.com/" },
  { category: "办公文档", name: "Google Workspace AI", desc: "Gmail、Docs、Sheets 和协作办公 AI。", url: "https://workspace.google.com/solutions/ai/" },
  { category: "办公文档", name: "飞书", desc: "文档、会议、项目和知识库协作。", url: "https://www.feishu.cn/" },
  { category: "办公文档", name: "Notion", desc: "笔记、知识库、项目管理和 AI 文档。", url: "https://www.notion.so/" },
  { category: "办公文档", name: "ChatPDF", desc: "PDF 阅读、问答和资料摘要。", url: "https://www.chatpdf.com/" },
  { category: "办公文档", name: "Smallpdf", desc: "PDF 转换、压缩、编辑和签名。", url: "https://smallpdf.com/" },

  { category: "学习教育", name: "Duolingo", desc: "语言学习和练习。", url: "https://www.duolingo.com/" },
  { category: "学习教育", name: "Khan Academy", desc: "课程学习和 AI 教育助手。", url: "https://www.khanacademy.org/" },
  { category: "学习教育", name: "Quizlet", desc: "单词卡、测验和学习记忆。", url: "https://quizlet.com/" },
  { category: "学习教育", name: "Elicit", desc: "论文检索、研究问题和文献总结。", url: "https://elicit.com/" },
  { category: "学习教育", name: "Consensus", desc: "基于论文证据的研究搜索。", url: "https://consensus.app/" },

  { category: "数据分析", name: "Tableau", desc: "商业智能、仪表盘和数据可视化。", url: "https://www.tableau.com/" },
  { category: "数据分析", name: "Power BI", desc: "微软数据分析、报表和看板。", url: "https://powerbi.microsoft.com/" },
  { category: "数据分析", name: "Airtable", desc: "表格数据库、流程管理和自动化。", url: "https://www.airtable.com/" },
  { category: "数据分析", name: "Rows", desc: "带 AI 的在线表格和数据工具。", url: "https://rows.com/" },
  { category: "数据分析", name: "Polymer", desc: "无代码数据看板和分析。", url: "https://www.polymersearch.com/" },

  { category: "营销增长", name: "HubSpot", desc: "CRM、邮件营销、销售和自动化。", url: "https://www.hubspot.com/" },
  { category: "营销增长", name: "Semrush", desc: "SEO、关键词、竞品和内容营销。", url: "https://www.semrush.com/" },
  { category: "营销增长", name: "Ahrefs", desc: "SEO、外链、关键词和网站分析。", url: "https://ahrefs.com/" },
  { category: "营销增长", name: "Mailchimp", desc: "邮件营销和自动化。", url: "https://mailchimp.com/" },
  { category: "营销增长", name: "Buffer", desc: "社媒排程、发布和内容管理。", url: "https://buffer.com/" },

  { category: "自动化", name: "Zapier", desc: "跨应用自动化流程。", url: "https://zapier.com/" },
  { category: "自动化", name: "Make", desc: "可视化自动化和业务流程连接。", url: "https://www.make.com/" },
  { category: "自动化", name: "IFTTT", desc: "个人效率和设备自动化。", url: "https://ifttt.com/" },
  { category: "自动化", name: "n8n", desc: "开源工作流自动化。", url: "https://n8n.io/" },

  { category: "内容检测", name: "GPTZero", desc: "AI 生成内容检测和文本分析。", url: "https://gptzero.me/" },
  { category: "内容检测", name: "Originality.ai", desc: "AI 内容检测、抄袭检查和内容质量辅助。", url: "https://originality.ai/" },
  { category: "内容检测", name: "ZeroGPT", desc: "AI 文本检测和改写痕迹检查。", url: "https://www.zerogpt.com/" },

  { category: "提示词资源", name: "PromptHero", desc: "AI 绘画和文本提示词案例库。", url: "https://prompthero.com/" },
  { category: "提示词资源", name: "FlowGPT", desc: "社区提示词、聊天机器人和工作流模板。", url: "https://flowgpt.com/" },
  { category: "提示词资源", name: "Awesome ChatGPT Prompts", desc: "开源 ChatGPT 提示词清单。", url: "https://github.com/f/awesome-chatgpt-prompts" },

  { category: "模型训练评测", name: "Hugging Face", desc: "模型、数据集、Spaces 应用和社区评测。", url: "https://huggingface.co/" },
  { category: "模型训练评测", name: "Open LLM Leaderboard", desc: "开源大模型评测榜单和对比入口。", url: "https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard" },
  { category: "模型训练评测", name: "LMSYS Chatbot Arena", desc: "模型对战评测和用户偏好排名。", url: "https://lmarena.ai/" },

  { category: "GitHub Skills", name: "Awesome Agent Skills", desc: "Agent Skills 和可复用技能清单。", url: "https://github.com/VoltAgent/awesome-agent-skills" },
  { category: "GitHub Skills", name: "Awesome Agents", desc: "AI Agent 框架、项目和资源目录。", url: "https://github.com/kyrolabs/awesome-agents" },
  { category: "GitHub Skills", name: "AutoGen", desc: "多智能体应用开发框架。", url: "https://github.com/microsoft/autogen" },
  { category: "GitHub Skills", name: "OpenHands", desc: "面向软件开发任务的开源 Agent 平台。", url: "https://github.com/All-Hands-AI/OpenHands" },
  { category: "GitHub Skills", name: "CrewAI", desc: "多 Agent 协作和任务编排框架。", url: "https://github.com/crewAIInc/crewAI" },
  { category: "GitHub Skills", name: "Composio", desc: "让 Agent 连接外部应用和工具的集成平台。", url: "https://github.com/ComposioHQ/composio" },

  { category: "模板素材", name: "Envato Elements", desc: "模板、图片、字体、视频和设计素材。", url: "https://elements.envato.com/" },
  { category: "模板素材", name: "Freepik", desc: "矢量图、图片、模板和设计素材。", url: "https://www.freepik.com/" },
  { category: "模板素材", name: "Unsplash", desc: "免费图片素材。", url: "https://unsplash.com/" },
  { category: "模板素材", name: "Pexels", desc: "免费图片和视频素材。", url: "https://www.pexels.com/" },
  { category: "模板素材", name: "Iconfont", desc: "中文图标库和矢量图标资源。", url: "https://www.iconfont.cn/" },

  { category: "电商选品", name: "淘宝联盟", desc: "淘宝客推广、选品和转链入口。", url: "https://pub.alimama.com/" },
  { category: "电商选品", name: "京东联盟", desc: "京东商品推广和 CPS 返佣。", url: "https://union.jd.com/" },
  { category: "电商选品", name: "Amazon Associates", desc: "Amazon 商品联盟推广。", url: "https://affiliate-program.amazon.com/" },
  { category: "电商选品", name: "Impact", desc: "软件、品牌和电商联盟平台。", url: "https://impact.com/" },
  { category: "电商选品", name: "CJ Affiliate", desc: "品牌联盟和 CPS 推广平台。", url: "https://www.cj.com/" },
];

const storageKey = "affiliate_click_stats_v1";
const statsBox = document.querySelector("#clickStats");
const resetButton = document.querySelector("#resetStats");
const libraryBox = document.querySelector("#toolLibrary");

function normalizeText(value) {
  return String(value || "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[·’'".,，。/\\|()[\]{}:：;；、_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getToolIcon(tool) {
  try {
    const domain = new URL(tool.url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  } catch {
    return "";
  }
}

function readStats() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
}

function writeStats(stats) {
  localStorage.setItem(storageKey, JSON.stringify(stats));
}

function renderStats() {
  if (!statsBox) return;

  const stats = readStats();
  statsBox.innerHTML = Object.keys(labels)
    .map((id) => {
      const count = stats[id] || 0;
      return `<div><span>${labels[id]}</span><strong>${count}</strong></div>`;
    })
    .join("");
}

function renderLibrary(query = "") {
  if (!libraryBox) return;

  const keywords = normalizeText(query).split(" ").filter(Boolean);
  const tools = toolDirectory.filter((tool) => {
    const aliases = [
      tool.category,
      tool.name,
      tool.desc,
      tool.keywords,
      tool.category === "GitHub Skills" ? "github skill skills agent agents 开源 技能 智能体" : "",
      tool.category === "视频剪辑" ? "video 视频 剪辑 字幕 配音 数字人" : "",
      tool.category === "PPT演示" ? "ppt presentation slides 演示 汇报 模板" : "",
      tool.category === "写作文案" ? "writing write copy 文案 写作 改稿 润色" : "",
      tool.category === "编程开发" ? "code coding dev 编程 代码 开发" : "",
      tool.category === "开发平台" ? "api platform developer console 模型 api 开发平台" : "",
      tool.category === "自动化" ? "automation workflow 自动化 工作流" : "",
      tool.category === "AI搜索引擎" ? "search research 搜索 研究 检索 来源" : "",
      tool.category === "内容检测" ? "detector ai content check 检测 查重 原创" : "",
      tool.category === "提示词资源" ? "prompt prompts 提示词 指令 咒语" : "",
      tool.category === "模型训练评测" ? "model leaderboard eval training 模型 训练 评测 榜单" : "",
    ];
    const haystack = normalizeText(aliases.join(" "));
    return !keywords.length || keywords.every((keyword) => haystack.includes(keyword));
  });

  const grouped = tools.reduce((groups, tool) => {
    groups[tool.category] ||= [];
    groups[tool.category].push(tool);
    return groups;
  }, {});

  libraryBox.innerHTML = tools.length
    ? Object.entries(grouped)
        .map(([category, items]) => {
          const links = items
            .map(
              (tool) => `<a class="tool-row" href="${tool.url}" target="_blank" rel="noopener nofollow" data-tool-name="${tool.name}">
            <img class="tool-icon" src="${getToolIcon(tool)}" alt="" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';" />
            <span class="tool-fallback" aria-hidden="true">${tool.name.slice(0, 1).toUpperCase()}</span>
            <span class="tool-copy">
              <strong>${tool.name}</strong>
              <span>${tool.desc}</span>
            </span>
          </a>`,
            )
            .join("");

          return `<article class="library-card">
        <h3>${category}</h3>
        <div>${links}</div>
      </article>`;
        })
        .join("")
    : `<article class="library-card empty-result">
        <h3>没有找到匹配工具</h3>
        <p>换一个关键词试试，例如 AI、视频、Agent、GitHub、PPT、写作、自动化。</p>
      </article>`;

}

document.querySelectorAll("[data-link-id]").forEach((link) => {
  const id = link.dataset.linkId;
  link.href = affiliateLinks[id] || "#";

  link.addEventListener("click", (event) => {
    const stats = readStats();
    stats[id] = (stats[id] || 0) + 1;
    writeStats(stats);
    renderStats();

    if (!affiliateLinks[id]) {
      event.preventDefault();
    }
  });
});

document.querySelectorAll(".headline-list button").forEach((button) => {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.textContent.trim());
      button.textContent = "已复制标题";
      setTimeout(() => {
        button.textContent = button.dataset.originalText;
      }, 1200);
    } catch {
      alert("浏览器未允许自动复制，请手动复制标题。");
    }
  });
  button.dataset.originalText = button.textContent;
});

resetButton?.addEventListener("click", () => {
  localStorage.removeItem(storageKey);
  renderStats();
});

renderStats();
renderLibrary();
