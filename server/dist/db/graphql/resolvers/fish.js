// import models from "../models"
// import uuidv4 from 'uuidv4'
// export default {
//   Query: {
//     fishes: (parent, args, {
//       models
//     }) => {
//       return Object.values(models.fishes)
//     },
//     fish: (parent, {
//       id
//     }, {
//       models
//     }) => {
//       return models.fishes[id]
//     }
//   },
//   Mutation: {
//     addNewFish: (parent, {
//       name
//     }, {
//       models
//     }) => {
//       const id = uuidv4()
//       const newFish = {
//         id,
//         name
//       }
//       models.fishes[id] = newFish
//       return newFish
//     },
//     removeFish: (parent, {
//       id
//     }, {
//       models
//     }) => {
//       const {
//         [id]: fish, ...otherFishes
//       } = models.fishes
//       if (!fish) {
//         return false
//       }
//       models.fishes = otherFishes
//       return true
//     }
//   }
// }
"use strict";