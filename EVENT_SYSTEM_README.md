# Idle Clicker 이벤트 시스템

## 개요
Idle Clicker에 주기적 이벤트 시스템이 추가되었습니다. 게임 플레이 중 5분마다 4가지 이벤트 중 하나가 무작위로 발생합니다.

## 이벤트 종류

### 1. 골드 러시 (Gold Rush) 💰
- **지속시간**: 30초
- **효과**: 골드 획득량 2배
- **색상**: 황금색 (#fbbf24)
- **설명**: 몬스터 처치 시 골드를 2배로 획득합니다.

### 2. 몬스터 페스티벌 (Monster Festival) ⚡
- **지속시간**: 30초
- **효과**: 몬스터 체력 50% 감소
- **색상**: 분홍색 (#ec4899)
- **설명**: 모든 몬스터의 체력이 50% 감소합니다.

### 3. 장비 할인 (Equipment Sale) 🛍️
- **지속시간**: 30초
- **효과**: 장비 가격 30% 할인
- **색상**: 청록색 (#06b6d4)
- **설명**: 모든 장비를 30% 저렴한 가격에 구매할 수 있습니다.

### 4. 경험치 부스트 (EXP Boost) ✨
- **지속시간**: 30초
- **효과**: 스킬 경험치 2배
- **색상**: 보라색 (#8b5cf6)
- **설명**: 스킬 레벨업에 필요한 골드가 절반이 됩니다.

## UI/UX

### 이벤트 배너
- **위치**: 화면 상단 광고 배너 아래
- **표시**: 이벤트 발생 시 자동으로 나타남
- **애니메이션**: 팝업 효과, 아이콘 바운스, 소멸 시 페이드

### 배너 구성
```
[아이콘] 이벤트명
         설명 텍스트
         카운트다운 타이머
```

## 기술 구현

### 파일 구조
- `js/app.js`: EventSystem 클래스 + 게임 로직 통합
- `css/style.css`: 이벤트 배너 스타일 + 애니메이션
- `js/sound-engine.js`: eventStart(), eventEnd() 사운드
- `js/locales/*.json`: 12개 언어 번역 (모든 언어 지원)

### EventSystem 클래스

주요 메서드:
- `init()`: 이벤트 시스템 초기화
- `update(now)`: 게임 루프에서 호출 (이벤트 발생/종료 체크)
- `startRandomEvent()`: 랜덤 이벤트 시작
- `endEvent()`: 현재 이벤트 종료
- `showEventBanner()`: UI 표시
- `getRemainingTime()`: 남은 시간 반환
- `saveState()`: 세이브 데이터에 포함
- `loadState(data)`: 로드 시 복원

### 게임 루프 통합
- `startGameLoop()` 함수에서 매 프레임 `eventSystem.update(now)` 호출
- 이벤트 배너 카운트다운 실시간 업데이트

### 시스템 상태 변수
- `eventGoldRushMultiplier`: 골드 배수 (1 또는 2)
- `eventMonsterHPMultiplier`: 몬스터 체력 배수 (1 또는 0.5)
- `eventEquipmentCostMultiplier`: 장비 가격 배수 (1 또는 0.7)
- `eventSkillExpMultiplier`: 스킬 경험치 배수 (1 또는 2)

## 적용 위치

### 골드 획득
`onMonsterDeath()` 함수에서 골드 배수 적용

### 몬스터 체력
`spawnMonster()` 함수에서 체력 배수 적용

### 장비 가격
`getEquipmentCost()` 함수에서 가격 배수 적용

## 저장/로드

이벤트 데이터는 자동으로 localStorage에 저장되며, 게임 재시작 후에도 진행 중인 이벤트가 복원됩니다.

## 다국어 지원

모든 이벤트 텍스트는 i18n으로 관리됩니다.

### 지원 언어 (12개)
- 한국어 (ko)
- English (en)
- 日本語 (ja)
- Español (es)
- Português (pt)
- 简体中文 (zh)
- हिन्दी (hi)
- Bahasa Indonesia (id)
- Türkçe (tr)
- Deutsch (de)
- Français (fr)
- Русский (ru)

## 사운드 효과

### eventStart() - 이벤트 시작음
- 700Hz → 900Hz 상승 팬파레
- 밝고 에너지있는 톤

### eventEnd() - 이벤트 종료음
- 800Hz → 600Hz 하강 톤
- 부드러운 종료 신호

## 스타일 특징

### CSS 클래스
- `.event-banner`: 배너 컨테이너
- `.event-icon`: 이벤트 아이콘
- `.event-content`: 텍스트 콘텐츠
- `.event-title`: 이벤트 제목
- `.event-desc`: 이벤트 설명
- `.event-timer`: 카운트다운 타이머
- `.event-countdown`: 숫자 표시

### 애니메이션
- `eventPop`: 배너 등장 애니메이션 (0.4s)
- `eventFade`: 배너 소멸 애니메이션 (0.5s)
- `eventIconBounce`: 아이콘 바운스 (무한 반복)

## 테스트 방법

1. 게임 시작
2. 약 5분 대기 (또는 앱 콘솔에서 `eventSystem.startRandomEvent()` 호출)
3. 이벤트 배너 확인
4. 30초 카운트다운 확인
5. 이벤트 효과 확인

## 기술 스택

- **언어**: JavaScript (ES6+)
- **상태 관리**: 변수 기반
- **저장소**: localStorage (JSON 직렬화)
- **UI**: DOM 조작 + CSS3
- **사운드**: Web Audio API
- **다국어**: i18n 시스템

---

**마지막 업데이트**: 2026-02-10
**버전**: 1.0
