import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Purchase } from './purchase.entity';
import { Strongbox } from 'src/modules/strongbox/entities/strongbox.entity';

@Entity()
export class PurchaseMoneyBoxDetail {
  @Column()
  @PrimaryColumn()
  purchaseId: number;

  @Column()
  @PrimaryColumn()
  strongboxId: number;

  @Column({ type: 'numeric' })
  amount: number;

  @ManyToOne(() => Purchase, (purchase) => purchase.purchaseConcept, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'purchaseId' })
  purchase: Purchase;

  @ManyToOne(() => Strongbox, (strongbox) => strongbox.strongboxPurchase)
  @JoinColumn({ name: 'strongboxId' })
  strongbox: Strongbox;
}
