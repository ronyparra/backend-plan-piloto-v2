import * as dayjs from 'dayjs';
import { numberToLetters } from 'src/commons/number-to-letters';
import { generatePdfBase64FromHtml } from 'src/commons/scraping-report';
import { DD_MM_YYYY } from 'src/commons/constants';
import { currencyFormat } from 'src/commons/currency-format';

export class InvoiceReport {
  async generateInvoice(sale) {
    const calcExenta = (concept) =>
      concept.taxes.percentage === 0 ? concept.quantity * concept.price : 0;
    const calcIva5 = (concept) =>
      concept.taxes.percentage === 5 ? concept.quantity * concept.price : 0;
    const calcIva10 = (concept) =>
      concept.taxes.percentage === 10 ? concept.quantity * concept.price : 0;

    const iva5Divisor =
      sale.saleConcept.find(({ taxes }) => taxes.percentage === 5)?.taxes
        .divider || 1;
    const iva10Divisor =
      sale.saleConcept.find(({ taxes }) => taxes.percentage === 10)?.taxes
        .divider || 1;

    const detail = sale.saleConcept.map((concept) => ({
      cant: concept.quantity,
      description: concept.concept.name,
      price: concept.price,
      exentas: calcExenta(concept),
      iva5: calcIva5(concept),
      iva10: calcIva10(concept),
    }));
    const totalAmount = detail.reduce(
      (acc, curr) => (acc += curr.cant * curr.price),
      0,
    );
    const subTotalExt = detail.reduce((acc, curr) => (acc += curr.exentas), 0);
    const subTotalIva5 = detail.reduce((acc, curr) => (acc += curr.iva5), 0);
    const subTotalIva10 = detail.reduce((acc, curr) => (acc += curr.iva10), 0);
    const totalIva5 =
      detail.reduce((acc, curr) => (acc += curr.iva5), 0) / iva5Divisor;
    const totalIva10 =
      detail.reduce((acc, curr) => (acc += curr.iva10), 0) / iva10Divisor;
    const totalIva = totalIva5 + totalIva10;

    const invoiceNumber = `${sale.stamping.expeditionPoint.number}-${sale.stamping.establishment.number}-${sale.invoice_number.toString().padStart(7, '0')}`;

    const invoiceData = {
      stamping: sale.stamping.number,
      start: dayjs(sale.stamping.start_date).format(DD_MM_YYYY),
      end: dayjs(sale.stamping.end_date).format(DD_MM_YYYY),
      invoiceNumber: invoiceNumber,
      date: dayjs(sale.date).format(DD_MM_YYYY),
      social_reason: sale.customer.social_reason,
      document: sale.customer.document,
      condition: sale.invoiceType.name,
      phone: sale.customer.phone,
      detail: detail.map((concept) => ({
        ...concept,
        price: currencyFormat(concept.price),
        exentas: currencyFormat(concept.exentas),
        iva5: currencyFormat(concept.iva5),
        iva10: currencyFormat(concept.iva10),
      })),
      subTotals: {
        exentas: currencyFormat(subTotalExt),
        iva5: currencyFormat(subTotalIva5),
        iva10: currencyFormat(subTotalIva10),
      },
      total: {
        literal: numberToLetters(totalAmount),
        amount: currencyFormat(totalAmount),
      },
      iva: {
        iva5: currencyFormat(totalIva5),
        iva10: currencyFormat(totalIva10),
        total: currencyFormat(totalIva),
      },
    };
    const urlParams = encodeURIComponent(JSON.stringify(invoiceData));
    return generatePdfBase64FromHtml(`/invoice?data=${urlParams}`);
  }
}
