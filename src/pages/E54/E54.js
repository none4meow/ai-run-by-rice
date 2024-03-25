import React, { useState } from "react";
import styles from "./E54.module.css";
import { Modal } from "@mui/material";
import { PickFontModal } from "../E05";
import { skuPreviewImages } from "../Home/PreviewImages";
import { templates } from "../../configs/templates";

const E54 = () => {
  const [defaultSizes] = useState(["S", "M", "L"]);
  const [customSize, setCustomSize] = useState(defaultSizes[0]);
  const onChangeCustomSize = (e) => {
    setCustomSize(e.target.value);
  };

  const [defaultQuotes] = useState([1, 2, 3, 4, 5, 6, "Custom"]);
  const [quoteNumber, setQuoteNumber] = useState(defaultSizes[0]);

  const onChangeQuoteNumber = (e) => {
    setQuoteNumber(e.target.value);
  };

  const [customName, setCustomName] = useState("");
  const onChangeCustomName = (e) => {
    const value = e.target.value;
    setCustomName(value);
  };

  const [customYear, setCustomYear] = useState("");
  const onChangeCustomYear = (e) => {
    const value = e.target.value;
    setCustomYear(value);
  };

  const [customQuote, setCustomQuote] = useState("");
  const onChangeCustomQuote = (e) => {
    setCustomQuote(e.target.value);
  };

  const [fontNumber, setFontNumber] = useState("");
  const handlePickFont = (fontNumber) => {
    setFontNumber(fontNumber);
    handleONCFontModal();
  };

  const onChangeCustomFont = (e) => {
    const value = e.target.value;
    // const intValue = parseInt(value);
    // if (0 < intValue && intValue <= 30)
    setFontNumber(value);
  };

  const [fontModal, setFontModal] = useState(false);
  const handleONCFontModal = () => {
    // if (fontModal) styleRef.current?.focus();

    setFontModal(!fontModal);
  };

  const resetCustom = () => {
    setCustomSize(defaultSizes[0]);
    setQuoteNumber(defaultQuotes[0]);
    setCustomName("");
    setCustomYear("");
    setFontNumber("");
    setCustomQuote("");
  };

  const getCode = () => {
    try {
      return templates.E54.svg(
        customSize,
        quoteNumber,
        customName,
        customYear,
        fontNumber,
        customQuote
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`${styles.modal} d-flex flex-column`}>
      <div className="d-flex justify-content-center flex-row">
        <div className="w-50">
          <div>
            <Modal open={fontModal} onClose={handleONCFontModal}>
              <div>
                <PickFontModal
                  fontNumber={fontNumber}
                  handlePickFont={handlePickFont}
                  onChangeCustomFont={onChangeCustomFont}
                  onClose={handleONCFontModal}
                />
              </div>
            </Modal>

            <div className="d-flex">
              <label htmlFor="Size" className="form-label col-form-label me-3">
                Size
              </label>
              <select
                id="Size"
                className="form-control form-select"
                value={customSize}
                onChange={(e) => onChangeCustomSize(e)}
              >
                {defaultSizes.map((ele) => (
                  <option key={ele} value={ele}>
                    {ele}
                  </option>
                ))}
              </select>
            </div>

            <div className="d-flex">
              <label htmlFor="Quote" className="form-label col-form-label me-3">
                Quote
              </label>
              <select
                id="Quote"
                className="form-control form-select"
                value={quoteNumber}
                onChange={(e) => onChangeQuoteNumber(e)}
              >
                {defaultQuotes.map((ele) => (
                  <option key={ele} value={ele}>
                    {ele}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-100 d-flex flex-column mt-3 mb-3">
              <label htmlFor="Name" className="form-label text-start">
                Name
              </label>
              <textarea
                type="text"
                id="Name"
                className={`form-control`}
                autoComplete="off"
                value={customName}
                onChange={(e) => onChangeCustomName(e)}
              />
            </div>

            <div className="w-100 d-flex flex-column mt-3 mb-3">
              <label htmlFor="Year" className="form-label text-start">
                Year
              </label>
              <textarea
                type="text"
                id="Year"
                className={`form-control`}
                autoComplete="off"
                value={customYear}
                onChange={(e) => onChangeCustomYear(e)}
              />
            </div>

            <div
              className="w-100 d-flex mb-3 pointer"
              onClick={handleONCFontModal}
            >
              <label htmlFor="font-number" className="form-label pointer">
                Font number
              </label>
              <div className="d-flex ms-3">
                <span># </span>
                <input
                  value={fontNumber}
                  className="ms-2 form-control pointer"
                  onChange={() => {}}
                />
              </div>
            </div>

            {quoteNumber === "Custom" && (
              <div className="w-100 d-flex flex-column mt-3 mb-3">
                <label htmlFor="Quote" className="form-label text-start">
                  Custom Quote
                </label>
                <textarea
                  type="text"
                  id="Quote"
                  className={`form-control`}
                  autoComplete="off"
                  value={customQuote}
                  onChange={(e) => onChangeCustomQuote(e)}
                />
              </div>
            )}

            <button
              className="btn btn-secondary mb-5 w-100"
              onClick={() => {
                navigator.clipboard.writeText(getCode());
                resetCustom();
              }}
            >
              Get code
            </button>
          </div>
        </div>

        <img
          src={skuPreviewImages.E54[0]}
          alt=""
          style={{
            height: "fit-content",
            width: "300px",
            marginLeft: "60px",
            borderRadius: "12px",
          }}
        />
      </div>
    </div>
  );
};

export default E54;
