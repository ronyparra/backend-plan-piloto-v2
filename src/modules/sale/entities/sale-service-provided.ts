import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { ServiceProvided } from 'src/modules/service-provided/entities/service-provided.entity';
import { Sale } from './sale.entity';

@Entity()
export class SaleServiceProvided {
  @Column()
  @PrimaryColumn()
  saleId: number;

  @Column()
  @PrimaryColumn()
  serviceProvidedId: number;

  @ManyToOne(() => Sale, (sale) => sale.saleServiceProvided, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'saleId' })
  sale: Sale;

  @ManyToOne(
    () => ServiceProvided,
    (serviceProvided) => serviceProvided.saleServiceProvided,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'serviceProvidedId' })
  serviceProvided: ServiceProvided;
}
