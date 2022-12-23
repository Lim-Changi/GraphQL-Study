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

### AppSync
* 참고 - AWS 공식 문서 
  * [1](https://docs.aws.amazon.com/ko_kr/appsync/latest/devguide/what-is-appsync.html) 
  * [2](https://aws.amazon.com/ko/appsync/)
* AWS 에서 제공하는 자체 관리 GraphQL 서비스
  * 인프라, 서버, 통신, 인증, 캐싱등 여러 복잡한 세팅이 필요한 작업을 서버리스의 형태로 간단하게 제공한다. -> 요청수에 따라 과금
  * GraphQL 스키마 정의와 Resolver 만 작성해주면 쉽게 구축이 가능하다.
  * 단, VTL 이라는 템플릿 언어를 활용하여 Resolver를 작성해야 한다.

### AppSync vs Lambda+Apollo
* AppSync 에서 자체적으로 제공하는 기능들이 많은데 굳이 Apollo 를 Lambda 에 띄워서 사용하는 이유?
  * AppSync 에서는 커스텀 scalar type 을 사용할 수 없다.
  * AppSync 를 사용하기 위한 VTL Template 을 따로 학습해야 한다.
  * Middleware 및 Pre-Resolver 를 세팅하려면 모든 AppSync API 에 하나씩 전부 붙여주어야 한다.
* AppSync 의 장점
  * AppSync 는 GraphQL Schema 를 개별적으로 관리하기 때문에, API 간 의존성을 분리하기 편하다.  
  * AppSync 자체적으로 제공하는 기능들이 많다 -> Apollo 의 경우, 직접 세팅해주어야 함.
    * DDB, RDS 연동
    * Logging
    * Caching
    * Cognito 사용자 인증 등등..
  * Faster Lambda ColdStart 및 요금적인 장점이 있다.
* 결론
  * GraphQL 서비스를 구축할 때, AppSync 를 사용할 지 Apollo 와 Lambda 를 연동하여 사용할지는 서비스의 규모, 작업 기한, 필요한 기능들에 맞게 잘 고려하여 선택해야 한다.