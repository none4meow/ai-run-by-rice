// import axios from "axios";
import styles from "./Home.module.css";
import React, { useCallback, useEffect, useState } from "react";
import { Modal } from "@mui/material";
import G98 from "../G98/G98";
import FindSKU from "./FindSKU";

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

  const [data, setData] = useState([
    {
      id: "3217147574",
      order_id: "52835",
      exported_date: "18-02-2024",
      shop: "GẤU",
      customer: "Melissa Forever Thompson",
      country: "United States",
      sku: "G98",
      sku_text: "Bảng gỗ tưởng niệm chó mèo G98",
      quantity: "1",
      properties: {
        font: "13",
        style: "1",
        personalization:
          '<p class="marginbottom0">\n                    <b>Personalization :&nbsp;&nbsp;</b>\n                    Ruby<br>\n                    Beagle 13<br>2024\n                </p>',
      },
      due_date: "2024-02-21",
      note: "\n                \n                \n                    \n                \n            ",
    },
    {
      id: "3208365359",
      order_id: "52833",
      exported_date: "18-02-2024",
      shop: "GẤU",
      customer: "Lisa & Ronnie Scopellite",
      country: "United States",
      sku: "G98",
      sku_text: "Bảng gỗ tưởng niệm chó mèo G98",
      quantity: "1",
      properties: {
        font: "2",
        style: "1",
        personalization:
          '<p class="marginbottom0">\n                    <b>Personalization :&nbsp;&nbsp;</b>\n                    1. Sadie<br>\n                    2. Dog ear #64<br>3. 2009-2024\n                </p>',
      },
      due_date: "2024-02-21",
      note: "\n                \n                \n                    \n                \n            ",
    },
    {
      id: "3208212275",
      order_id: "52809",
      exported_date: "18-02-2024",
      shop: "GẤU",
      customer: "Lisa Oberg",
      country: "United States",
      sku: "G98",
      sku_text: "Bảng gỗ tưởng niệm chó mèo G98",
      quantity: "1",
      properties: {
        font: "15",
        style: "1",
        personalization:
          '<p class="marginbottom0">\n                    <b>Personalization :&nbsp;&nbsp;</b>\n                    Violet - puggle 93. Forever in our hearts\n                </p>',
      },
      due_date: "2024-02-20",
      note: "\n                \n                \n                    \n                \n            ",
    },
    {
      id: "3208176429",
      order_id: "52802",
      exported_date: "18-02-2024",
      shop: "GẤU",
      customer: "Celsey Bolick",
      country: "United States",
      sku: "G98",
      sku_text: "Bảng gỗ tưởng niệm chó mèo G98",
      quantity: "1",
      properties: {
        font: "20",
        style: "1",
        personalization:
          '<p class="marginbottom0">\n                    <b>Personalization :&nbsp;&nbsp;</b>\n                    Remi<br>\n                    #89<br>2022-2024\n                </p>',
      },
      due_date: "2024-02-20",
      note: "\n                \n                \n                    \n                \n            ",
    },
    {
      id: "3208138409",
      order_id: "52797",
      exported_date: "18-02-2024",
      shop: "GẤU",
      customer: "Ian Rullan",
      country: "United States",
      sku: "G98",
      sku_text: "Bảng gỗ tưởng niệm chó mèo G98",
      quantity: "1",
      properties: {
        font: "25",
        style: "2",
        personalization:
          '<p class="marginbottom0">\n                    <b>Personalization :&nbsp;&nbsp;</b>\n                    1. Cash<br>\n                    2. 25<br>3. 2018-2024\n                </p>',
      },
      due_date: "2024-02-20",
      note: "\n                \n                \n                    \n                \n            ",
    },
    {
      id: "3208127845",
      order_id: "52794",
      exported_date: "18-02-2024",
      shop: "GẤU",
      customer: "Jade Clarkson",
      country: "Australia",
      sku: "G98",
      sku_text: "Bảng gỗ tưởng niệm chó mèo G98",
      quantity: "1",
      properties: {
        font: "3X",
        style: "2",
        personalization:
          '<p class="marginbottom0">\n                    <b>Personalization :&nbsp;&nbsp;</b>\n                    Axel<br>\n                    American staffy<br>\n                    Dog ears - 56<br>2019-2024\n                </p>',
      },
      due_date: "2024-02-20",
      note: "\n                \n                \n                    \n                \n            ",
    },
    {
      id: "3208098805",
      order_id: "52789",
      exported_date: "18-02-2024",
      shop: "GẤU",
      customer: "BRANDI MCLEAN",
      country: "United States",
      sku: "G98",
      sku_text: "Bảng gỗ tưởng niệm chó mèo G98",
      quantity: "1",
      properties: {
        font: "44",
        style: "2",
        personalization:
          '<p class="marginbottom0">\n                    <b>Personalization :&nbsp;&nbsp;</b>\n                    Chase<br>\n                    Golden retriever<br>Tater Tot, we love a lot\n                </p>',
      },
      due_date: "2024-02-20",
      note: "\n                \n                \n                    \n                \n            ",
    },
    {
      id: "3216872112",
      order_id: "52788",
      exported_date: "18-02-2024",
      shop: "GẤU",
      customer: "Christina Herrera",
      country: "United States",
      sku: "G98",
      sku_text: "Bảng gỗ tưởng niệm chó mèo G98",
      quantity: "1",
      properties: {
        font: "1",
        style: "1",
        personalization:
          '<p class="marginbottom0">\n                    <b>Personalization :&nbsp;&nbsp;</b>\n                    1. Elvis (#33 font)<br>\n                    2. #93 (Puggle)<br>\n                    3. Furever in our heart<br>4.\n                </p>',
      },
      due_date: "2024-02-20",
      note: "\n                \n                \n                    \n                \n            ",
    },
    {
      id: "3207977229",
      order_id: "52774",
      exported_date: "18-02-2024",
      shop: "GẤU",
      customer: "BRANDI-LEA RUSSELL",
      country: "Canada",
      sku: "G98",
      sku_text: "Bảng gỗ tưởng niệm chó mèo G98",
      quantity: "1",
      properties: {
        font: "13",
        style: "1",
        personalization:
          '<p class="marginbottom0">\n                    <b>Personalization :&nbsp;&nbsp;</b>\n                    Loki<br>Dog ear #10\n                </p>',
      },
      due_date: "2024-02-20",
      note: "\n                \n                \n                    \n                \n            ",
    },
    {
      id: "3207869785",
      order_id: "52761",
      exported_date: "18-02-2024",
      shop: "GẤU",
      customer: "Laurie Baxter",
      country: "United States",
      sku: "G98",
      sku_text: "Bảng gỗ tưởng niệm chó mèo G98",
      quantity: "1",
      properties: {
        font: "8",
        style: "1",
        personalization:
          '<p class="marginbottom0">\n                    <b>Personalization :&nbsp;&nbsp;</b>\n                    Elsa, Dog ear 82, 2014 - 2024\n                </p>',
      },
      due_date: "2024-02-20",
      note: "\n                \n                \n                    \n                \n            ",
    },
    {
      id: "3207674763",
      order_id: "52730",
      exported_date: "18-02-2024",
      shop: "GẤU",
      customer: "Work",
      country: "United States",
      sku: "G98",
      sku_text: "Bảng gỗ tưởng niệm chó mèo G98",
      quantity: "1",
      properties: {
        font: "11",
        style: "1",
        personalization:
          '<p class="marginbottom0">\n                    <b>Personalization :&nbsp;&nbsp;</b>\n                    Baxter\n                </p>',
      },
      due_date: "2024-02-20",
      note: "\n                \n                \n                    \n                \n            ",
    },
    {
      id: "3207643715",
      order_id: "52726",
      exported_date: "18-02-2024",
      shop: "GẤU",
      customer: "Stephanie Heley",
      country: "United Kingdom",
      sku: "G98",
      sku_text: "Bảng gỗ tưởng niệm chó mèo G98",
      quantity: "1",
      properties: {
        font: "8",
        style: "1",
        personalization:
          '<p class="marginbottom0">\n                    <b>Personalization :&nbsp;&nbsp;</b>\n                    Brodie<br>\n                    Labrador 70<br>Forever in our hearts\n                </p>',
      },
      due_date: "2024-02-20",
      note: "\n                \n                \n                    \n                \n            ",
    },
    {
      id: "3216390858",
      order_id: "52714",
      exported_date: "18-02-2024",
      shop: "GẤU",
      customer: "Cheyenne Jones",
      country: "United States",
      sku: "G98",
      sku_text: "Bảng gỗ tưởng niệm chó mèo G98",
      quantity: "1",
      properties: {
        font: "2",
        style: "1",
        personalization:
          '<p class="marginbottom0">\n                    <b>Personalization :&nbsp;&nbsp;</b>\n                    Riley<br>\n                    German shepherd<br>2018-2024\n                </p>',
      },
      due_date: "2024-02-20",
      note: "\n                \n                \n                    \n                \n            ",
    },
  ]);

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

    // setData(orderList.filter((ele) => ele.sku === "G98"));
  }, [rawHTML]);

  useEffect(() => {
    try {
      getOrders();
    } catch (error) {}
  }, [getOrders, rawHTML]);

  const showEditor = (order) => {
    if (order.sku === "G98") {
      setEditor(<G98 order={order} />);
      handleONCEditModal();
    }
  };

  const [editModal, setEditModal] = useState(false);
  const [editor, setEditor] = useState(<></>);

  const handleONCEditModal = () => {
    setEditModal(!editModal);
  };

  return (
    <>
      <Modal open={editModal} onClose={handleONCEditModal}>
        {editor}
      </Modal>

      <FindSKU />

      {/* <div className="row g-3 align-items-center mb-3">
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
      <div>
        {data.map((ele, index) => (
          <div
            className={`${styles.row}`}
            key={index}
            onClick={() => showEditor(ele)}
          >
            <small className={`${styles.item}`}>{ele.id}</small>
            <small className={`${styles.item}`}>{ele.exported_date}</small>
            <small className={`${styles.item}`}>{ele.sku}</small>
            <small className={`${styles.item}`}>
              Font #{ele.properties.font}
            </small>
            <small className={`${styles.item}`}>
              Style {ele.properties.style}
            </small>
            <span
              className={`${styles.item}`}
              dangerouslySetInnerHTML={{
                __html: ele.properties.personalization,
              }}
            ></span>
          </div>
        ))}
      </div> */}
      
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
