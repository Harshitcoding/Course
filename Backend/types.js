const zod = require('zod')

const createSchema = zod.object({
    username : zod.string(),
    email : zod.string(),
    password : zod.string(),
})

module.exports ={
    createSchema
}