const jsonServer = require('json-server-relationship')
const auth = require('json-server-auth')
const cors = require('cors');

const server = jsonServer.create()
const router = jsonServer.router('src/server/db.json')
const rules = auth.rewriter({
    users: 600,
})

server.use(
    cors({
        origin: true,
        credentials: true,
        preflightContinue: false,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    })
);
server.options('*', cors());

server.use(jsonServer.bodyParser)
server.db = router.db

server.use(rules)
server.use(auth)
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})