import React, { useEffect, useRef, useState } from "react";
import { templates } from "../../configs/templates";
import { Modal } from "@mui/material";
import { PickFontModal } from "../E05";
import styles from "./G98.module.css";
import { dogears } from "../../constants/dogears";

export const PickEarModal = ({
  open,
  earNumber,
  onChangeEar,
  handlePickEar,
  onClose,
}) => {
  const onEnter = (e) => {
    if (e.key === "Enter") {
      onClose();
    }
  };

  const numberRef = useRef(null);

  useEffect(() => {
    // inputRef.current?.focus();
    numberRef.current?.select();
  }, [open]);

  return (
    <div className={"custom-modal"}>
      <input
        type="number"
        autoFocus={true}
        ref={numberRef}
        autoComplete="off"
        className="form-control dark-input mt-3 mb-3"
        value={earNumber}
        onKeyDown={(e) => onEnter(e)}
        onChange={(e) => onChangeEar(e)}
      />
      <div className="grid-container">
        {Object.keys(dogears).map((key) => (
          <div
            key={key}
            className="grid-item"
            onClick={() => handlePickEar(key)}
          >
            <div className="d-block m-auto">
              <svg
                style={{ width: "200px" }}
                dangerouslySetInnerHTML={{
                  __html: `<g transform="scale(0.69)">${dogears[key].tag}</g>`,
                }}
              ></svg>
            </div>
            <span>{key}</span>
            <span>{dogears[key].name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

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
    setEarNumber("");
    setCustomStyle(defaultStyles[0]);
    setCustomName("");
    setCustomQuote("");
  };

  const sizeRef = useRef(null);

  const [openEar, setOpenEar] = useState(false);
  const onCloseEar = () => {
    setOpenEar(!openEar);
  };

  const [earNumber, setEarNumber] = useState("");
  const handlePickEar = (earNumber) => {
    setEarNumber(earNumber);
    onCloseEar();
  };

  const onChangeEar = (e) => {
    const value = e.target.value;
    setEarNumber(value);
  };

  const getCode = () => {
    try {
      return templates.G98.svg(
        fontNumber,
        customStyle,
        customName,
        earNumber,
        customQuote
      );
    } catch (error) {
      console.log(error);
    }
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

            <Modal open={openEar} onClose={onCloseEar}>
              <div>
                <PickEarModal
                  earNumber={earNumber}
                  onChangeEar={onChangeEar}
                  handlePickEar={handlePickEar}
                  onClose={onCloseEar}
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

            <div
              className="w-100 d-flex mb-3 pointer"
              onClick={() => onCloseEar()}
            >
              <label htmlFor="ear-number" className="form-label pointer">
                Ear number
              </label>
              <div className="d-flex ms-3">
                <span># </span>
                <input
                  value={earNumber}
                  className="ms-2 form-control pointer"
                  onChange={() => onChangeEar()}
                />
              </div>
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
