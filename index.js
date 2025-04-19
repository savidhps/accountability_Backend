// import json-server 
const jsonserver=require('json-server')

// create server 
const accountabilityServer=jsonserver.create()

// create a middleware

const middleware=jsonserver.defaults()

// set path to store data 
const routes=jsonserver.router("db.json")

accountabilityServer.use(middleware)
accountabilityServer.use(routes)

// server port 
PORT=4000||process.env.PORT

// server run 
accountabilityServer.listen(PORT,()=>{
    console.log(`server running sucessfully ${PORT}`);
    
})

