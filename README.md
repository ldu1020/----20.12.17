<!-- @format -->

### 실행 방법

build 폴더를 다운로드 하신 후, build 폴더의 index.html 을 실행하시면 됩니다.

### 코드 설명

주요 기술: react, typescript, styled-componented

Component

##### App :

- props
  - fetchContactList: fetch 를 이용한 네트워크 통신함수 입니다. 컴포넌트의 함수 재생성의 영향을 받지 않도록, 또한 테스트의 용의성을 위해 외부에서 주입시키는 방식을 채택했습니다. 요청이 성공할시 결과를 객체로 변환하여 return하는 promise 함수를 return 합니다.
- state
  - initailContactList : 초기화 및 데이터 검색을 위한 초기 데이터 목록입니다.
  - contactList : 사용자 눈에 보여지는 상시 업데이트되는 데이터 목록입니다.
- side Effect
  - useEffect를 이용해 처음 랜더링 될 시에만 prop으로 받아온 fetch 함수를 실행시키고 이름순으로 정렬합니다. 그후 만약 localStorage에 데이터가 있다면 정렬된 데이터를 업데이트한 후 state에 데이터를 저장하고 그렇지 않다면 업데이트를 하지 않고 저장합니다.
- 하위 컴포넌트
  - header
  - search-bar
  - contact-list

##### header : props 와 state를 가지고 있지 않습니다.

##### search-bar :

- props
  - searchName: input의 change 이벤트를 받아 결과값을 App state의 initailContactList를 대상으로 필터링 한후 정렬하여 contactList를 업데이트 하는 함수입니다.
- <span style="color:orange">주의사항</span>
  - 예시로 제시해주신 input 의 background-color 인 #232323 이 본인의 노트북에서 글자판별이 불가능할 정도로 어둡게 나와서 google의 colorpicker 로 색상을 딴 #dfdfdf 로 변경하여 진행했습니다.

##### contact-list :

- props
  - contactList: 사용자에게 보여지고, 상시 업데이트되는 연락처 data 목록입니다.
  - updateFavorite: 클릭 이벤트가 발생한 컴포넌트의 데이터를 받아 contactList 의 즐겨찾기와 localStroage 를 업데이트 하는 함수입니다.
- 하위 컴포넌트
  - contact-list-item

##### contact-list-item :

- props
  - contactListData: 해당 컴포넌트에 쓰일 연락처 data 객체입니다.
  - updateFavorite: 상위 컴포넌트의 함수와 동일 함수 입니다.
