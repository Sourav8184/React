import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";
import { createRef } from "react";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";

function EditPage() {
  const [params] = useSearchParams();
  const [counttext, setCountText] = useState(0);

  const memeRef = createRef();

  const addText = () => {
    setCountText(counttext + 1);
  };

  return (
    <div className="memes">
      <div>
        <div ref={memeRef} className="meme">
          <img src={params.get("URL")} width={"300px"} />
          {Array(counttext)
            .fill(0)
            .map((e) => (
              <Text />
            ))}
        </div>
        <div className="btndiv">
          <Button onClick={addText}>Add text</Button>
          <Button
            variant="success"
            onClick={() => exportComponentAsJPEG(memeRef)}>
            Export As JPEG
          </Button>
          <Button
            variant="success"
            onClick={() => exportComponentAsPDF(memeRef)}>
            Export As PDF
          </Button>
          <Button
            variant="success"
            onClick={() => exportComponentAsPNG(memeRef)}>
            Export As PNG
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditPage;
