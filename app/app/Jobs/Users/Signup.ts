import Redis from '@ioc:Adonis/Addons/Redis'

interface User {
  id: number
  name: string
  email: string
}

export default Redis.subscribe('user:signup', (user: string) => {
  const newUser: User = JSON.parse(user)

  console.log(`\nEmail: ${newUser.email}\n`)
})