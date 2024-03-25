import React, { useEffect, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";
import { skuPreviewImages } from "./PreviewImages";

const FindSKU = () => {
  const [sku, setSKU] = useState("");
  const [urls, setUrls] = useState([]);

  const debounced = useDebounceCallback(setSKU, 500);

  useEffect(() => {
    const skuCap = sku.toUpperCase();

    if (skuPreviewImages.hasOwnProperty(skuCap)) setUrls(skuPreviewImages[skuCap]);
    else setUrls([]);
  }, [sku]);

  return (
    <div>
      <div className="d-flex flex-column align-items-start m-5">
        <label
          htmlFor="sku"
          className="form-label col-auto col-form-label mt-3"
        >
          SKU
        </label>
        <input
          type="text"
          id="sku"
          className={`form-control col-auto`}
          autoComplete="off"
          // value={sku}
          onChange={(e) => debounced(e.target.value)}
        />
      </div>
      <div>
        {urls.length > 0 ? (
          urls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt=""
              style={{
                height: "fit-content",
                maxWidth: "900px",
                // marginTop: "30px",
                marginBottom: "30px",
                borderRadius: "12px",
              }}
            />
          ))
        ) : (
          <span>No photo</span>
        )}
      </div>
    </div>
  );
};

export default FindSKU;
