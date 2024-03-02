import React, { useRef, useState } from "react";
import { templates } from "../../configs/templates";
import { Modal } from "@mui/material";
import { PickFontModal } from "../E05";
import styles from "./G98.module.css";

const G98 = ({ order }) => {
  const [customName, setCustomName] = useState("");
  const onChangeCustomName = (e) => {
    const value = e.target.value;
    setCustomName(value);
  };

  const [customQuote, setCustomQuote] = useState("");
  const specialChars = {
    "&": "&amp;",
    "<": "&lt;",
  };

  const onChangeCustomQuote = (e) => {
    let value = e.target.value;
    setCustomQuote(value.replace(/[&<]/g, (c) => specialChars[c]));
  };

  const [fontNumber, setFontNumber] = useState(order?.properties.font ?? "");
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
    if (fontModal) sizeRef.current?.focus();

    setFontModal(!fontModal);
  };

  const [defaultStyles] = useState([1, 2]);
  const [customStyle, setCustomStyle] = useState(
    order?.properties.style ?? defaultStyles[0]
  );
  const onChangeCustomStyle = (e) => {
    setCustomStyle(parseInt(e.target.value));
  };

  const resetCustom = () => {
    setFontNumber("");
    setCustomStyle(defaultStyles[0]);
    setCustomName("");
    setCustomQuote("");
  };

  const sizeRef = useRef(null);

  const getCode = () => {
    return templates.G98.svg(fontNumber, customStyle, customName, customQuote);
  };

  return (
    <div className={`${styles.modal} d-flex flex-column`}>
      {order && (
        <>
          <div className="d-flex justify-content-between flex-column">
            <div className="d-flex justify-content-between flex-wrap">
              <small className={`${styles.item}`}>{order.id}</small>
              <small className={`${styles.quantity}`}>
                Quantity: {order.quantity}
              </small>
              <small className={`${styles.item}`}>
                Font #{order.properties.font}
              </small>
              <small className={`${styles.item}`}>
                Style {order.properties.style}
              </small>
              <span
                className={`${styles.item}`}
                dangerouslySetInnerHTML={{
                  __html: order.properties.personalization,
                }}
              ></span>
            </div>

            <hr />

            <small>
              Buyer note
              <span
                className={`${styles.item}`}
                dangerouslySetInnerHTML={{
                  __html: order.properties.personalization,
                }}
              ></span>
            </small>
            <hr />

            <small>
              Shop note
              <span
                className={`${styles.item}`}
                dangerouslySetInnerHTML={{
                  __html: order.properties.personalization,
                }}
              ></span>
            </small>
          </div>
          <hr />
        </>
      )}

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

            <div className="d-flex">
              <label htmlFor="sku" className="form-label col-form-label me-3">
                Style
              </label>
              <select
                ref={sizeRef}
                className="form-control form-select"
                value={customStyle}
                onChange={(e) => onChangeCustomStyle(e)}
              >
                {defaultStyles.map((ele) => (
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
              <label htmlFor="Quote" className="form-label text-start">
                Quote
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
          src="https://minhbros.com/upload/product/862/5ec91aac30eae62f4140325d09b9afd0657d4df53e636.jpg"
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

export default G98;
