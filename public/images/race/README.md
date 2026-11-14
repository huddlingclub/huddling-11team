# 레이싱 에셋

사용자가 첨부한 `figma-racing-assets.zip`의 PNG를 원본 그대로 사용합니다.

| 위치 | 내용 |
|---|---|
| `penguins/` | 개발·디자인·문서·기획 × Lv.1~5, 총 20종 |
| `props/` | 출발 신호·깃발·장애물 등 레이싱 소품 |
| `scenes/` | 1MB 이하 장면 이미지 |
| `manifest.json` | 실제 파일 경로, 웹 주소, 원본 경로, 제공된 Figma 정보 |

웹에서 `/images/race/penguins/penguin-development-level-1.png`처럼 사용합니다.
펭귄 경로 연결은 기본 화면의 `src/lib/raceAssets.ts`와 중계판의 `race-wireframe/src/assets.ts`에 있습니다. 두 화면은 같은 PNG 파일을 참조합니다.

1MB가 넘는 장면 원본은 `design/may-july-racing-reference/scenes/`에 보관합니다. 웹에 연결하기 전에는 용량 조정이 필요합니다. 이미지는 편집하거나 재생성하지 않았습니다.

중복 SVG, 추출용 원본 스프라이트 시트, UI 미리보기 캡처, 빈 폴더, ZIP 복사본은 보관하지 않습니다. 이전 커스텀 AnimatedPenguin·GIF 애니메이션은 사용하지 않습니다. 원본 ZIP에는 GIF가 없습니다.

기본 외형은 네 역할의 Lv.1을 순환 배정합니다. 실제 팀 역할이나 성장 레벨을 뜻하지 않습니다. 나머지 Lv.2~5와 소품은 적용할 수 있도록 준비한 파일이며, 새 레벨업 규칙이나 화면 연출을 추가하지 않았습니다.

중계판 코드를 바꾼 뒤에는 `race-wireframe/`에서 다음 명령으로 배포 파일을 갱신합니다.

```bash
npm run build -- --base=/race/ --outDir ../public/race --emptyOutDir
```

원본 출처: https://www.figma.com/design/BdKxgMVSZi3BnovHsktZrx
