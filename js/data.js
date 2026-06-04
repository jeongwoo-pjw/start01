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
  heroBio: "'효용성'을 중시하며, 사용자 경험을 최우선으로 고려하는 디자이너입니다.",

  /* ── About 섹션 ── */
  aboutText: `저는 '효용성'을 중시하는 디자이너입니다. 비서학을 전공하며 경영, 경제, 마케팅, 무역, 포토샵, 문서 활용 등 다양한 분야를 배운 덕분에 폭넓은 시각과 비즈니스 마인드를 갖추었습니다.

이후 실무에서 비서로서 회장과 사장을 모시며 결정권자들의 시각을 배울 수 있었고, 이해관계자들과의 소통의 중요성을 깊이 깨닫게 되었습니다. 온라인 몰 운영 경험을 통해 고객층의 요구를 반영한 정보 전달이 매출에 미치는 영향을 실감하며, 효용성을 제공하는 디자인의 힘을 깨달았습니다.

이러한 모든 경험을 바탕으로 사용자의 경험을 최우선으로 고려하는 디자인을 실현하고, 이해관계자들과의 원활한 소통을 통해 더 나은 결과를 이끌어내고자 합니다.`,

  /* ── 통계 숫자 ── */
  stats: {
    years:    4,
    projects: 30,
    certs:    3,
  },

  /* ── 기술 스택 ── */
  skills: [
    { icon: "🎨", name: "Adobe Illustrator", level: 88, category: "Graphic" },
    { icon: "🖼️", name: "Adobe Photoshop",   level: 85, category: "Graphic" },
    { icon: "🎬", name: "Adobe Premiere",    level: 72, category: "Video"   },
    { icon: "🖥️", name: "Figma",             level: 78, category: "UX/UI"   },
    { icon: "📊", name: "MS PowerPoint",     level: 90, category: "Office"  },
    { icon: "📐", name: "브랜딩 / 편집디자인", level: 80, category: "Design" },
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

  /* ── 학력 / 자격증 / 교육 ── */
  education: [
    {
      period: "2019",
      title:  "비서학과 졸업",
      org:    "인덕대학교",
      desc:   []
    },
    {
      period: "2016",
      title:  "졸업",
      org:    "서울여자고등학교",
      desc:   []
    },
    {
      period: "2024",
      title:  "UXUI 부트캠프 30기",
      org:    "제로베이스",
      desc:   []
    },
    {
      period: "2024",
      title:  "GTQ I 1급",
      org:    "한국생산성본부",
      desc:   []
    },
    {
      period: "2018",
      title:  "전산회계 1급",
      org:    "한국세무사회",
      desc:   []
    },
    {
      period: "2016",
      title:  "MOS PowerPoint",
      org:    "Microsoft",
      desc:   []
    },
  ],

  /* ── 프로젝트 ── */
  projects: [],
};
