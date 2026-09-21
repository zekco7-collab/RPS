# 묘수 문제집 관리

게임 실행은 기존처럼 `index.html`을 열면 됩니다. 세 HTML 파일과 `puzzle-studio.css`를 함께 배포하세요.

공통 문제·동작은 `studio-fragment.js`, 화면 스타일은 루트의 `puzzle-studio.css`에서 관리합니다. JS 수정 후 `python tools/build-studio.py`를 실행하면 세 HTML의 게임 클로저에 같은 코드를 반영합니다. 생성된 HTML도 함께 저장하세요.

검증: `npm install`, `npx playwright install chromium`, `npm test`.
브라우저 검증은 PC 두 페이지와 모바일 페이지에서 문제 목록, 힌트, 재시작, 되돌리기, 성공 복기, 저장을 확인합니다. 실제 게임 물리 엔진으로 8개 문제의 제한 수 내 해법도 탐색합니다. 테스트용 접근 코드는 로컬 테스트 서버 응답에만 주입합니다.

새 문제집은 `rps_studies_v2`에 최고 별점을 기록하며 이전 미션 기록은 사용하거나 삭제하지 않습니다. 모든 문제를 자유롭게 선택할 수 있고, 3별은 도움 없이 해결, 2별은 첫 힌트 또는 되돌리기 사용, 1별은 수순 힌트 사용입니다.
