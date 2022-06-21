const app = require('./app')
const port = process.env.PORT || 5000;

//test route
// app.get('/', (req, res) => {
//   res.status(200).json({
//     message: 'Working on port ' + port
//   })
// })

app.listen(port, () => console.log(`Server has been started on ${port}`))