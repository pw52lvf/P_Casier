import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      { identifiant: 'pw52lvf', prenom: 'Senna', nom: 'Cruz', email: 'senna.cruz@eduvaud.ch', password: 'etml' },
      { identifiant: 'pb01wvj', prenom: 'Zidane', nom: 'Sahraoui', email: 'zidane.sahraoui@eduvaud.ch', password: 'etml' },
    ])
  }
}