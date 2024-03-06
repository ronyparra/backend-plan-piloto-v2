import { chromium } from 'playwright';

export class InvoiceReport {
  async generateInvoice(id: number) {
    console.log('id', id);
    const A = 'invoice';
    const htmlContent = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    </head>
    <body>
    <h2>Approve Page ,${A}</h2>
    </body>
    </html>
    `;
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setContent(htmlContent);

    const buffer = await page.pdf({ format: 'A4' });
    const base64 = buffer.toString('base64');
    await browser.close();

    return `data:application/pdf;base64,${base64}`;
  }
}
