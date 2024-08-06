```sh
    npx nodemon index.js
```

# Query
```sh
query ReviewQuery($id: ID!) {
  review(id: $id) {
   rating
   game {
     title
     platform
     reviews {
       rating
     }
   }
  }
}
```

# Add Mutation
```sh
mutation AddMutation($game: AddGameInput!) {
  addGame(game: $game) {
    id
    title
    platform
  }
}

variables
{
  "game": {
    "title": "New game",
    "platform": ["Switch", "Temp"]
  }
}
```


# Detele Mutation
```sh
mutation DeleteMutation($id: ID!) {
  deleteGame(id: $id) {
    id
    title
    platform
  }
}

variables
{
  "id": "2"
}
```

# Update Mutation
```sh
mutation updateGame($id: ID!, $edits: EditGameInput){
  updateGame(id: $id, edits: $edits){
    id,
    title,
    platform
  }
}

variables
{
  "id": "1",
  "edits": {
    "title": "updated title - 1",
    "platform" : ["Platform - 2"]
  }
}
```
