import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      { id: 1, identifiant: 'pw52lvf', prenom: 'Senna', nom: 'Cruz', email: 'senna.cruz@eduvaud.ch', password: 'etml' },
      { id: 1, identifiant: '', prenom: 'Zidane', nom: 'Sahraoui', email: 'zidane.sahraoui@eduvaud.ch', password: 'etml' },
    ])
  }
}