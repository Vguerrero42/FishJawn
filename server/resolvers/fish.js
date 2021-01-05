export default {
  Query: {
    fishes: (parent, args, {
      models
    }) => {
      return Object.values(models.fishes)
    },
    fish: (parent, {
      id
    }, {
      models
    }) => {
      return models.fishes[id]
    }
  }
}