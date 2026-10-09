const base = import.meta.env.BASE_URL;

export const site = {
  name: 'ecc 的個人網站',
  shortName: 'ecc',
  description: '作品、學習紀錄與一路走來的成長歷程。',
  email: 'edychie0323@gmail.com',
  heroImages: [
    { src: `${base}images/hero/hero-01.webp`, alt: '主視覺圖片一' },
    { src: `${base}images/hero/hero-02.webp`, alt: '主視覺圖片二' },
    { src: `${base}images/hero/hero-03.webp`, alt: '主視覺圖片三' }
  ]
};

export const projects = [
  {
    title: 'AI智能閱卷系統：AI三秒幫你改考卷',
    description: 'AI 智能閱卷系統的網站展示，將想法實際做成可以使用的作品。',
    tags: ['AI', 'Python'],
    url: 'https://sites.google.com/mcjh.ptc.edu.tw/edychie'
  }
];

export const timeline = [
  { date: '2026', title: '建立個人網站', description: '開始整理作品、學習內容與自己的成長紀錄。' },
  { date: '2026', title: 'AI智能閱卷系統', description: '完成 AI 智能閱卷系統的研究與網站展示。' },
  { date: '至今', title: '持續學習程式設計', description: '持續摸索 Python、網站與人工智慧相關技術。' }
];

export const skills = [
  { name: '國文', score: 40 },
  { name: '數學', score: 60 },
  { name: '英文', score: 0 },
  { name: '自然', score: 50 },
  { name: '社會', score: 50 },
  { name: '筆記', score: 80 },
  { name: '繪畫', score: 20 },
  { name: 'Python', score: 30 },
  { name: 'C++', score: 0 }
];
