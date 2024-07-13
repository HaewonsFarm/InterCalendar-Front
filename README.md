# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### 진행 상황: 

- MainPage 토글 버튼 생성 후 캘린더, 스케줄러에 적용
- MainPage 캘린더/스케줄러 관련 서버 통신
- redux 디렉토리 생성 후 calendar Actions/Reducer, groupSlice, itemSlice 파일 생성 -> 변동사항에 맞춰 slice.js 파일 수정
- kakao map api key 넣고 그룹 페이지 확인
- GroupPage, ItemPage 엔드 포인트 맞춰서 서버 통신
- CreateGroupPage와 GroupPage의 역할 분리 필요
