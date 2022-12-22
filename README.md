# GraphQL

## 목표
* AWS AppSync 적용을 위한 GraphQL 기본 습득
* GraphQL API 장단점 파악
* 간단한 GraphQL 프로젝트 구축

## Apollo GraphQL
* 가장 대표적인 GraphQL Library 로, GraphQL API 를 활용하여 클라이언트-서버 통신을 기존보다 쉽고 간단하게 만들어준다.
* 클라이언트에서는 React Redux, 서버에서는 REST API 를 대체할 수 있다.
* [기타 GraphQL Solutions](https://graphql.org/code/)

## GraphQL 장점
* REST API 의 한계점
  * 데이터 **OverFetching**
    * 필요한 데이터만이 아닌 필요없는 데이터까지 모두 조회되어 네트워크 비용이 증가
  * 데이터 **UnderFetching**
    * 필요한 데이터가 여러계층에 걸쳐 있을때 여러 API 를 호출해주어야 함
* GraphQL 은 한 번의 요청으로 필요한 데이터만 받아올 수 있음
* 하나의 Endpoint 에서 모든 요청을 처리할 수 있음
  * Request Body 데이터를 변경하는 것 만으로 모든 API 에 접근 가능  
  * API Document 및 Routing 관리에 필요한 자원을 획기적으로 줄일 수 있음 

### CRUD
* READ: `query`
* CREATE, UPDATE, DELETE: `mutation`
* query 및 mutation 도 graphql resolver 를 어떻게 구현하냐에 따라 조회 및 생성이 마음대로 가능하지만, REST API 의 GET POST 처럼 query mutation 또한 역할에 맞게 사용하는 것이 합의된 규칙이다.
