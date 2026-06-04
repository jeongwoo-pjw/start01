/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  data.js  ·  이력서 데이터
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

const RESUME = {

  /* ── 기본 정보 ── */
  name:     "박정우",
  role:     "Designer",
  email:    "lbaikal1742@gmail.com",
  github:   "https://github.com/jeongwoo-pjw",
  phone:    "010-9172-2749",
  blog:     "",
  linkedin: "",

  /* ── Hero 자기소개 (짧게) ── */
  heroBio: "사용자의 시선으로 생각하고, 디자인으로 소통하는 디자이너입니다.",

  /* ── About 섹션 ── */
  aboutText: `안녕하세요, 디자이너 박정우입니다.

저는 브랜드의 가치를 시각적으로 전달하는 것에 집중하며, 사용자 중심의 디자인을 추구합니다. 트렌드를 분석하고 창의적인 아이디어를 구체화하는 과정에서 보람을 느끼며, 팀과의 원활한 소통을 통해 완성도 높은 결과물을 만들어냅니다.

그래픽 디자인부터 영상 편집까지 다양한 분야의 경험을 바탕으로, 클라이언트의 니즈에 맞는 최적의 솔루션을 제안합니다.`,

  /* ── 통계 숫자 ── */
  stats: {
    years:    3,
    projects: 20,
    certs:    2,
  },

  /* ── 기술 스택 ── */
  skills: [
    { icon: "🎨", name: "Adobe Illustrator", level: 90, category: "Graphic" },
    { icon: "🖼️", name: "Adobe Photoshop",   level: 88, category: "Graphic" },
    { icon: "🎬", name: "Adobe Premiere",    level: 75, category: "Video"   },
    { icon: "✏️", name: "Adobe InDesign",    level: 70, category: "Graphic" },
    { icon: "🖥️", name: "Figma",             level: 80, category: "UX/UI"   },
    { icon: "📐", name: "브랜딩 디자인",     level: 85, category: "Design"  },
  ],

  /* ── 경력 ── */
  experience: [
    {
      period:  "2024.01 – 현재",
      title:   "그래픽 디자이너",
      org:     "재직 중",
      current: true,
      desc: [
        "브랜드 아이덴티티 및 시각 디자인 작업",
        "SNS 콘텐츠 및 마케팅 디자인 제작",
        "인쇄물 및 편집 디자인",
      ]
    },
  ],

  /* ── 학력 / 자격증 ── */
  education: [
    {
      period: "2019.03 – 2023.02",
      title:  "시각디자인학과 졸업",
      org:    "세명대학교",
      desc:   []
    },
    {
      period: "2022",
      title:  "GTQ (그래픽기술자격) 1급",
      org:    "한국생산성본부",
      desc:   []
    },
    {
      period: "2023",
      title:  "컴퓨터활용능력 1급",
      org:    "대한상공회의소",
      desc:   []
    },
  ],

  /* ── 프로젝트 ── */
  projects: [],

  /* ── 연락처 아이콘 커스텀 ── */
  // email / github / phone 은 위 기본 정보에서 자동으로 표시됩니다
};
