import { CheckIn, Prisma } from 'generated/prisma'

export interface CheckInsRepository {
  findById(id: string): Promise<CheckIn | null>
  findManyByUserId(userId: string, page: number): Promise<CheckIn[]>
  findByUserIdOnDate(userId: string, date: Date): Promise<CheckIn | null>
  countByUserId(userId: string): Promise<number>
  create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>
  save(data: CheckIn): Promise<CheckIn>
}
