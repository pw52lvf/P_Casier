import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Eleve extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare prenom: string | null

  @column()
  declare nom: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}