# GraphQL

## 목표
* AWS AppSync 적용을 위한 GraphQL 기본 습득
* GraphQL API 장단점 파악
* 간단한 GraphQL 프로젝트 구축

## GraphQL 등장배경
> REST API 의 한계점
* 데이터 **OverFetching**
  * 필요한 데이터만이 아닌 필요없는 데이터까지 모두 조회되어 네트워크 비용이 증가
* 데이터 **UnderFetching**
  * 필요한 데이터가 여러계층에 걸쳐 있을때 여러 API 를 호출해주어야 함

## Apollo GraphQL
* 가장 대표적인 GraphQL Library 로, GraphQL API 를 활용하여 클라이언트-서버 통신을 기존보다 쉽고 간단하게 만들어준다.
* 클라이언트에서는 React Redux, 서버에서는 REST API 를 대체할 수 있다.
