1. 프로젝트 설명

<br/>

농수산축산물 가격 조회 사이트

<br/>

2. 백엔드 전체 기여도 : 95%
- 세부 기여도 : 백엔드 거의 전반을 담당하여 측정이 어려움

<br/>

3. 프론트엔드 전체 기여도 : 10%
- 세부 기여도
   - 어드민페이지 : 80%
   - 세부 카테고리 조회 후 출력되는 그래프 : 90%

<br/>

4. 구현된 기능
- 회원가입
    - 회원가입 시 이메일 인증
    - 존재하지 않는 이메일에 대한 검증
- 로그인
    - 로그인 실패 횟수 제한
- 농수산축산물 가격 조회
    - 조회 데이터 엑셀 파일로 다운
    - 조회 데이터 그래프로 표현
    - 즐겨찾기 추가/삭제
- 고객센터
    - 게시글 생성/수정/삭제
    - 댓글 생성/수정/삭제
    - 비밀글
    - 관리자 매크로 답변 및 ai 답변
- 마이페이지
    - 계정 정보 확인
    - 회원 탈퇴
    - 내 게시글 화인
    - 내 즐겨찾기 확인
- 관리자페이지
    - 회원 정보 열람
    - 블랙리스트 관리
    - 특정 토큰 리셋
- 보안
    - jwt 기반 보안
- DB
    - 우분투 MYSQL
    - redis
        - 인증이메일, 로그인 실패 횟수, 엑세스 토큰
