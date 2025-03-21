import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Donation, DonationStatus, DonationType, Prisma } from "@prisma/client";

@Injectable()
export class DonationsService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    amount: number;
    type: DonationType;
    donorId: string;
    beneficiaryId: string;
  }): Promise<Donation> {
    return this.prisma.donation.create({
      data: {
        ...data,
        amount: new Prisma.Decimal(data.amount),
        status: DonationStatus.PENDING,
      },
      include: {
        donor: true,
        beneficiary: true,
      },
    });
  }

  async findAll(): Promise<Donation[]> {
    return this.prisma.donation.findMany({
      include: {
        donor: true,
        beneficiary: true,
      },
    });
  }

  async findOne(id: string): Promise<Donation | null> {
    return this.prisma.donation.findUnique({
      where: { id },
      include: {
        donor: true,
        beneficiary: true,
      },
    });
  }

  async updateStatus(id: string, status: DonationStatus): Promise<Donation> {
    return this.prisma.donation.update({
      where: { id },
      data: { status },
      include: {
        donor: true,
        beneficiary: true,
      },
    });
  }
}
