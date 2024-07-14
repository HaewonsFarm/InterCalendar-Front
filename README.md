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
- 유저 정보와 관련된 LoginPage.jsx, Profile.jsx, SignUpPage,jsx 를 제외한 나머지 페이지들 서버 연결
- CreateGroupPage.jsx는 최적화가 안돼있어서 내 컴퓨터에 맞게 scss 파일을 수정함. 중요한 부분은 아니므로 필요하면 없애도 됨.
- reactive-1 버전에서는 CreateGroupPage가 Redux thunk 작업을 수행하게 만들었으므로 백엔드 연결 없이 "Create->" 버튼을 누를 수 없음.

*마지막 커밋된 버전: reactive-1 브랜치
