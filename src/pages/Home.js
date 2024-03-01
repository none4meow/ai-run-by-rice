import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

const Home = () => {
  const [justInput, setJustInput] = useState("");
  const onChangeJustInput = (e) => {
    const value = e.target.value;
    setJustInput(value);
  };

  const [splitByWhom, setSplitByWhom] = useState(0);
  const onChangeSplitByWhom = (e) => {
    setSplitByWhom(parseInt(e.target.value));
  };

  const handleSort = useCallback(() => {
    let value = [];

    if (splitByWhom === 0) {
      value = justInput
        .trim()
        .replace(/\s/g, "")
        .split(",")
        .sort((a, b) => a.localeCompare(b))
        .sort((a, b) => a.length - b.length);

      setJustOutput(value);
    } else if (splitByWhom === 1) {
      value = justInput
        .trim()
        .split("\n")
        .sort((a, b) => a.localeCompare(b))
        .sort((a, b) => a.length - b.length);

      setJustOutput(value);
    } else if (splitByWhom === 2) {
      value = justInput
        .trim()
        .split(" ")
        .sort((a, b) => a.localeCompare(b))
        .sort((a, b) => a.length - b.length);
    }

    setJustOutput(value.filter((ele) => ele.length > 0));
  }, [justInput, splitByWhom]);

  useEffect(() => {
    handleSort();
  }, [handleSort, justInput, splitByWhom]);

  const [justOutput, setJustOutput] = useState([]);

  const [isShowSort, setIsShowSort] = useState(false);

  const [rawHTML, setRawHTML] = useState("");

  const onChangeRawHTML = (e) => {
    setRawHTML(e.target.value);
  };

  const getOrders = useCallback(() => {
    const parser = new DOMParser();
    const orders = parser
      .parseFromString(rawHTML, "text/html")
      .querySelectorAll("table tr");

    const getProperties = (order) => {
      const oderInfo = {};
      // console.log("orders", orders);
      // console.log("order", order);

      for (let o = 0; o < order.length; o++) {
        const value = order[o];

        switch (o) {
          case 0:
            const input = value.querySelector("input");
            oderInfo.id = input.getAttribute("data-id");
            oderInfo.order_id = input.getAttribute("value");

            break;
          case 1:
            oderInfo.exported_date = value.textContent;

            break;
          case 4:
            const spans = value.querySelectorAll("span");
            spans.forEach((ele, index) => {
              switch (index) {
                case 0:
                  oderInfo.shop = ele.textContent;
                  break;

                case 1:
                  break;
                case 2:
                  oderInfo.customer = ele.textContent;
                  break;
                case 3:
                  oderInfo.country = ele.textContent;
                  break;

                default:
                  break;
              }
            });

            break;
          case 5:
            oderInfo.sku = value.querySelector("b").textContent;
            oderInfo.sku_text = value.querySelector("span").textContent;
            break;
          case 6:
            oderInfo.quantity = value
              .querySelector("b")
              .innerText.trim()
              .replace("\n", "");

            break;
          case 8:
            const pros = value.querySelectorAll("p");

            const filter = (sku, pros) => {
              switch (sku) {
                case "G98":
                  const properties = {};
                  pros.forEach((ele, index) => {
                    switch (index) {
                      case 0:
                        const content0 = ele.textContent.trim();
                        properties.font = content0
                          .slice(content0.length - 6)
                          .trim();
                        break;
                      case 1:
                        const content1 = ele.textContent.trim();
                        properties.style = content1
                          .slice(content1.length - 1)
                          .trim();
                        break;
                      case 2:
                        properties.personalization = ele.outerHTML;
                        break;

                      default:
                        break;
                    }
                  });

                  oderInfo.properties = properties;
                  break;

                default:
                  break;
              }
            };

            filter(oderInfo.sku, pros);
            break;
          case 9:
            oderInfo.due_date = value.textContent;
            break;
          case 11:
            // oderInfo.note = value.outerHTML;
            oderInfo.note = value.textContent;
            break;

          default:
            break;
        }
      }

      return oderInfo;
    };

    const orderList = [];
    for (let index = 1; index < orders.length; index++) {
      const res = getProperties(orders[index].querySelectorAll("td"));
      orderList.push(res);
    }

    console.log(
      "orderList",
      orderList.filter((ele) => ele.sku === "G98")
    );
  }, [rawHTML]);

  useEffect(() => {
    try {
      getOrders();
    } catch (error) {}
  }, [getOrders, rawHTML]);

  return (
    <>
      <div className="row g-3 align-items-center mb-3">
        <label htmlFor="rawHTML" className="form-label col-auto col-form-label">
          Raw HTML
        </label>
        <textarea
          type="text"
          id="rawHTML"
          className={`form-control col-auto`}
          autoComplete="off"
          value={rawHTML}
          onChange={(e) => onChangeRawHTML(e)}
        />
      </div>

      <span
        className="btn btn-secondary"
        onClick={() => setIsShowSort(!isShowSort)}
      >
        Sort names
      </span>

      {isShowSort && (
        <div>
          <div className="row g-3 align-items-center mb-3">
            <label
              htmlFor="Input"
              className="form-label col-auto col-form-label"
            >
              Output: {justOutput.length}
            </label>
            <span style={{ width: "50vw", wordWrap: "break-word" }}>
              [{justOutput.map((ele, index) => `${ele},`)}]
            </span>
          </div>
          <div className="row g-3 align-items-center mb-3">
            <label
              htmlFor="Input"
              className="form-label col-auto col-form-label"
            >
              Input
            </label>
            <textarea
              type="text"
              id="Input"
              className={`form-control col-auto`}
              autoComplete="off"
              value={justInput}
              onChange={(e) => onChangeJustInput(e)}
            />
            <select
              className="form-control form-select col-auto"
              onChange={(e) => onChangeSplitByWhom(e)}
              value={splitByWhom}
            >
              <option value={0}>Split by Comma</option>
              <option value={1}>Split by New line</option>
              <option value={2}>Split by Space</option>
            </select>
          </div>

          {/* <button className="btn btn-secondary" onClick={handleSort}>
        Sort
      </button> */}
        </div>
      )}
    </>
  );
};

export default Home;
