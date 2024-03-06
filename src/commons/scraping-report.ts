import { chromium } from 'playwright';
import configuration from 'src/config/configuration';

const generatePdfBase64FromHtml = async (reportPath) => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(`${configuration().report}${reportPath}`);
  const buffer = await page.pdf({ format: 'A4' });
  const base64 = buffer.toString('base64');
  await browser.close();

  return `data:application/pdf;base64,${base64}`;
};

export { generatePdfBase64FromHtml };
