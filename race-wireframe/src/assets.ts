/**
 * 첨부 Figma PNG 경로. 실제 파일은 레포 루트 public/images/race/ 한 곳에 둔다.
 * 전체 목록은 /images/race/manifest.json. 역할 순환은 기본 외형 배정이다.
 */
export const PENGUINS = [
  '/images/race/penguins/penguin-development-level-1.png',
  '/images/race/penguins/penguin-design-level-1.png',
  '/images/race/penguins/penguin-documentation-level-1.png',
  '/images/race/penguins/penguin-planning-level-1.png',
];

/** 조 번호(0부터)에 펭귄을 배정한다. 같은 조는 늘 같은 펭귄이다. */
export const penguinFor = (teamIndex: number) => PENGUINS[teamIndex % PENGUINS.length];
