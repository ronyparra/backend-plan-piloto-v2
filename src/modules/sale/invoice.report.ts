import { chromium } from 'playwright';
import configuration from 'src/config/configuration';
import * as dayjs from 'dayjs';
import * as numberToLiteral from 'numero-a-letras';

export class InvoiceReport {
  async generateInvoice(sale) {
    const DD_MM_YYYY = 'DD/MM/YYYY';
    const detail = sale.saleConcept.map((concept) => ({
      cant: concept.quantity,
      description: concept.concept.name,
      price: concept.price,
      exentas:
        concept.taxes.taxPercentage === 0
          ? concept.quantity * concept.price
          : 0,
      iva5:
        concept.taxes.taxPercentage === 5
          ? concept.quantity * concept.price
          : 0,
      iva10:
        concept.taxes.taxPercentage === 10
          ? concept.quantity * concept.price
          : 0,
    }));
    const totalAmount = detail.reduce(
      (acc, curr) => (acc += curr.cant * curr.price),
      0,
    );
    const totalIva5 = detail.reduce((acc, curr) => (acc += curr.iva5), 0) / 21;
    const totalIva10 =
      detail.reduce((acc, curr) => (acc += curr.iva10), 0) / 11;
    const totalIva = totalIva5 + totalIva10;
    const invoiceData = {
      stamping: sale.stamping.number,
      start: dayjs(sale.stamping.start_date).format(DD_MM_YYYY),
      end: dayjs(sale.stamping.end_date).format(DD_MM_YYYY),
      invoiceNumber: `${sale.stamping.expeditionPoint.number}-${sale.stamping.establishment.number}-${sale.invoice_number.toString().padStart(7, '0')}`,
      date: dayjs(sale.date).format(DD_MM_YYYY),
      social_reason: sale.customer.social_reason,
      document: sale.customer.document,
      condition: sale.invoiceType.name,
      phone: sale.customer.phone,
      detail: detail,
      subTotals: {
        exentas: detail.reduce((acc, curr) => acc + curr.exentas, 0),
        iva5: detail.reduce((acc, curr) => acc + curr.iva5, 0),
        iva10: detail.reduce((acc, curr) => acc + curr.iva10, 0),
      },
      total: {
        literal: numberToLiteral.NumerosALetras(totalAmount),
        amount: totalAmount,
      },
      iva: {
        iva5: totalIva5,
        iva10: totalIva10,
        total: totalIva,
      },
    };
    const urlParams = encodeURIComponent(JSON.stringify(invoiceData));
    console.log('encodeURIComponent', urlParams);

    // const browser = await chromium.launch();
    // const page = await browser.newPage();
    // await page.goto(`${configuration().report}/invoice`);
    // const buffer = await page.pdf({ format: 'A4' });
    // const base64 = buffer.toString('base64');
    // await browser.close();

    // return `data:application/pdf;base64,${base64}`;

    return ''
  }
}
