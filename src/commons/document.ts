export const getDocumentNumber = (stamping: any, document_number: any) => {
  const expeditionPoint = stamping.expeditionPoint.number;
  const establishment = stamping.establishment.number;
  const doc = document_number.toString().padStart(7, '0');
  return `${expeditionPoint}-${establishment}-${doc}`;
};
