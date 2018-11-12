const { db, Gardener, Plot, Vegetable } = require('./model');
db.sync({ force: true})
 .then( Vegetable.create({
    name: 'carrot', 
    color: 'orange',
    planted_on: new Date()
  }))
.then(() => {
    console.log('Database synced!')
    db.close();
  })
  .catch(err => {
    console.log('Disaster!')
    console.error(err);
    db.close();
  })
