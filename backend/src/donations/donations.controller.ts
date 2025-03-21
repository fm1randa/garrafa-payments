import { Controller, Get, Post, Body, Param, Patch, NotFoundException } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Donation, DonationStatus, DonationType } from '@prisma/client';

@ApiTags('donations')
@Controller('donations')
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new donation' })
  @ApiResponse({ status: 201, description: 'Donation created successfully' })
  async create(
    @Body()
    createDonationDto: {
      amount: number;
      type: DonationType;
      donorId: string;
      beneficiaryId: string;
    },
  ): Promise<Donation> {
    return this.donationsService.create(createDonationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all donations' })
  @ApiResponse({ status: 200, description: 'Return all donations' })
  async findAll(): Promise<Donation[]> {
    return this.donationsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a donation by id' })
  @ApiResponse({ status: 200, description: 'Return the donation' })
  @ApiResponse({ status: 404, description: 'Donation not found' })
  async findOne(@Param('id') id: string): Promise<Donation> {
    const donation = await this.donationsService.findOne(id);
    if (!donation) {
      throw new NotFoundException(`Donation with ID ${id} not found`);
    }
    return donation;
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Update donation status' })
  @ApiResponse({ status: 200, description: 'Donation status updated successfully' })
  @ApiResponse({ status: 404, description: 'Donation not found' })
  async updateStatus(
    @Param('id') id: string,
    @Body() updateStatusDto: { status: DonationStatus },
  ): Promise<Donation> {
    const donation = await this.donationsService.updateStatus(id, updateStatusDto.status);
    if (!donation) {
      throw new NotFoundException(`Donation with ID ${id} not found`);
    }
    return donation;
  }
}