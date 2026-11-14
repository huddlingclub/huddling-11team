// 첨부된 Figma PNG만 사용한다. 전체 목록은 public/images/race/manifest.json 참고.
// 역할 순환은 기본 외형 배정이며 실제 팀의 직무·레벨 판정은 아니다.
const PENGUINS = [
  '/images/race/penguins/penguin-development-level-1.png',
  '/images/race/penguins/penguin-design-level-1.png',
  '/images/race/penguins/penguin-documentation-level-1.png',
  '/images/race/penguins/penguin-planning-level-1.png',
]

export function penguinFor(teamNo: number): string {
  return PENGUINS[((Math.trunc(teamNo) - 1) % PENGUINS.length + PENGUINS.length) % PENGUINS.length]
}
