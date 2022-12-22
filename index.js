const database = require('./database')
const { ApolloServer, gql } = require('apollo-server')
// GraphQL 명세에서 사용될 데이터, 요청의 타입 지정 -> Swagger + DTO 와 유사
const typeDefs = gql`
  type Query {
    teams: [Team]
    equipments: [Equipment]
    supplies: [Supply]
    team(id: Int): Team
  }
  type Mutation {
      deleteEquipment(id: String!): [Equipment]
      createEquipment(
          id: String!
          used_by: String!
          count: Int!
          new_or_used: EquipmentStatus!
      ): Equipment
      updateEquipment(
          id: String!,
          used_by: String,
          count: Int,
          new_or_used: String
      ): Equipment
  }
  type Team {
    id: ID!
    manager: String
    office: String
    extension_number: String
    mascot: String
    cleaning_duty: String
    project: String
    supplies: [Supply]
  }
  type Equipment {
    id: ID!
    used_by: String
    count: Int
    new_or_used: EquipmentStatus
  }
  type Supply {
      id: String
      team: Int
  }

  enum EquipmentStatus {
      new
      used
  }
`

// 위 typeDef DTO 의 실질적인 구현부
// 서비스 액션들을 함수로 지정 -> Controller 와 유사
// 데이터 CRUD 지정
const resolvers = {
    Query: {
        teams: () => database.teams
            .map((team) => {
                team.supplies = database.supplies.filter((supply) => {
                    return supply.team === team.id;
                })
                return team
            }),
        team: (parent,args, context, info) => database.teams.filter((team) => {
            return team.id === args.id
        })[0],
        equipments: () => database.equipments,
        supplies: () => database.supplies,
    },
    Mutation: {
        deleteEquipment: (parent, args, context, info) => {
            const deleted = database.equipments
                .filter((equipment) => {
                    return equipment.id === args.id
                })
            database.equipments = database.equipments
                .filter((equipment) => {
                    return equipment.id !== args.id
                })
            return deleted
        },
        createEquipment: (parent, args, context, info) => {
            database.equipments.push(args)
            return args
        },
        updateEquipment: (parent, args, context, info) => {
            return database.equipments.filter((equipment) => {
                return equipment.id === args.id
            }).map((equipment) => {
                Object.assign(equipment, args)
                return equipment
            })[0]
        },
    }
}
const server = new ApolloServer({ typeDefs, resolvers }) // 따로 Port를 지정하지 않으면 Apollo Server 내부에서 localhost:4000 으로 서버 시작
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
    // url 로 접속하면 Apollo GraphQL API Sandbox 와 Data Schema 명세를 확인할 수 있다.
})