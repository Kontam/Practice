import { PdfDownloadButton } from "../../src/components/PdfDownlodButton";

export const Detail = () => {
  const handleClick = () => {
    window.print()
  };
  return (
    <div>
      <h1>Detail</h1>     
      <button type="button" onClick={handleClick}>preview</button>
      <PdfDownloadButton />
    </div>
  );
}

export default Detail;

