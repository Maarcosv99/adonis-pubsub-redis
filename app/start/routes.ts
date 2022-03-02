import Route from '@ioc:Adonis/Core/Route'
import Redis from '@ioc:Adonis/Addons/Redis'

Route.get('/', async () => {
  await Redis.publish('user:signup', JSON.stringify({ 
    id: 1, 
    name: 'Marcos', 
    email: 'marcosvianacdc@gmail.com' 
  }))

  return { message: 'Task runned' }
})