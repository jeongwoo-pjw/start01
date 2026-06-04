/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  data.js  ·  이력서 데이터
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

const RESUME = {

  /* ── 기본 정보 ── */
  name:     "박정우",
  role:     "UX/UI Designer",
  email:    "lbaikal1742@gmail.com",
  github:   "https://github.com/jeongwoo-pjw",
  phone:    "010-6332-2723",
  blog:     "",
  linkedin: "",

  /* ── Hero 자기소개 (짧게) ── */
  heroBio: "사용자의 시선으로 생각하고, 디자인으로 소통하는 디자이너입니다.",

  /* ── About 섹션 ── */
  aboutText: `'효용성'을 중시하는 UX/UI 디자이너입니다. 비서학 전공과 실무 경험을 통해 비즈니스 마인드와 이해관계자 소통 역량을 갖추었으며, 온라인 몰 MD로서 사용자 데이터를 기반으로 한 디자인이 매출에 직결됨을 직접 경험했습니다. 사용자 경험을 최우선으로 고려하며, 효용성을 잃지 않는 결과를 만들어 냅니다.`,

  /* ── 통계 숫자 ── */
  stats: {
    years:    4,
    projects: 4,
    certs:    3,
  },

  /* ── 기술 스택 ── */
  skills: [
    { icon: "🎨", name: "Adobe Illustrator", level: 88, category: "Graphic" },
    { icon: "🖼️", name: "Adobe Photoshop",   level: 85, category: "Graphic" },
    { icon: "🖥️", name: "Figma",             level: 100, category: "UX/UI"  },
    { icon: "✦",  name: "Framer",            level: 70, category: "UX/UI"   },
    { icon: "🧊", name: "3D Blender",        level: 60, category: "3D"      },
    { icon: "💻", name: "VS Code",           level: 75, category: "Tools"   },
  ],

  /* ── 경력 ── */
  experience: [
    {
      period:  "2022 – 2024",
      title:   "회장 & 사장 개인 비서",
      org:     "국제산공(주)",
      current: false,
      desc: [
        "회장 및 사장 개인 비서 업무",
        "총무 & 인사 업무 병행",
      ]
    },
    {
      period:  "2020 – 2022",
      title:   "온라인몰 운영 MD",
      org:     "NC백화점",
      current: false,
      desc: [
        "온라인몰 운영 MD (상세페이지 제작, 촬영, CS 등)",
        "고객 요구 반영 상품 정보 기획 및 디자인",
      ]
    },
  ],

  /* ── 학력 / 교육 ── */
  education: [
    {
      period: "2019",
      title:  "비서학과 졸업",
      org:    "인덕대학교",
      desc:   []
    },
    {
      period: "2016",
      title:  "서울여자고등학교 졸업",
      org:    "서울여자고등학교",
      desc:   []
    },
    {
      period: "2024",
      title:  "UXUI 부트캠프 30기",
      org:    "제로베이스",
      desc:   []
    },
  ],

  /* ── 자격증 ── */
  certifications: [
    { period: "2024", title: "GTQ I 1급",       org: "한국생산성본부", icon: "🎨" },
    { period: "2018", title: "전산회계 1급",     org: "한국세무사회",  icon: "📒" },
    { period: "2016", title: "MOS PowerPoint",   org: "Microsoft",    icon: "📊" },
  ],

  /* ── 프로젝트 ── */
  projects: [],
};
