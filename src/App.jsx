import "./App.css";
import { useState, useRef, useEffect } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    if (spanRef.current) {
      inputRef.current.style.width = `${spanRef.current.offsetWidth + 2}px`;
    }
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(inputRef.current.value);
  };

  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [isPopUpVisible2, setIsPopUpVisible2] = useState(true);
  const [isDropDownVisible, setIsDropDownVisible] = useState(false); // For initial dropdown
  const [stepEditorValue, setStepEditorValue] = useState("Step");
  const [isVisibleInput, setIsVisibleInput] = useState(true);

  const [second, setSecond] = useState("Text");
  const [third, setThird] = useState("Text");

  const stepEditorHandleClick = (e) => {
    setIsPopUpVisible(true);
  };

  const handleDeleteBtn = () => {
    setIsPopUpVisible2(true);
    setStepEditorValue("Step");
    setIsDropDownVisible(false);
  };

  const thirdHandle2Double = (e) => {
    setIsDropDownVisible(true);
  };

  const secondHandle2Double = (e) => {
    setIsDropDownVisible(true);
  };

  const handleClickOne = (e) => {
    setStepEditorValue(
      <p>
        Click on{" "}
        <span className="orangeText pointer" onDoubleClick={firstHandleDouble}>
          "Text"
        </span>{" "}
        <button className="deleteBtn" onClick={handleDeleteBtn}>
          X
        </button>
      </p>
    );
    setIsPopUpVisible(false);
    setIsPopUpVisible2(false);
  };
  const handleClickTwo = (e) => {
    setStepEditorValue(
      <>
        <p className="abc">
          Click on{" "}
          <span
            className="orangeText pointer"
            onDoubleClick={secondHandleDouble}
          >
            "Text"
          </span>{" "}
          after "
          <span
            className="orangeText pointer"
            onDoubleClick={secondHandle2Double}
          >
            {second}
          </span>
          "
        </p>
        <button className="deleteBtn2" onClick={handleDeleteBtn}>
          X
        </button>
      </>
    );
    setIsPopUpVisible(false);
    setIsPopUpVisible2(false);
  };
  const handleClickThree = (e) => {
    setStepEditorValue(
      <p>
        Click on{" "}
        <span className="orangeText pointer" onDoubleClick={thirdHandleDouble}>
          "Text"
        </span>{" "}
        for
        <span className="orangeText pointer" onDoubleClick={thirdHandle2Double}>
          "{third}"
        </span>
        <button className="deleteBtn3" onClick={handleDeleteBtn}>
          X
        </button>
      </p>
    );
    setIsPopUpVisible(false);
    setIsPopUpVisible2(false);
  };

  const firstHandleDouble = (e) => {
    console.log(e.target.value);
    setIsVisibleInput(true);
    setStepEditorValue(
      <p>
        Click on "{" "}
        {isVisibleInput ? (
          <>
            <span
              className="orangeText"
              ref={spanRef}
              style={{
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
              }}
            >
              {inputValue || "a"}
              {setInputValue(e.target.value)}
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleChange}
              style={{ boxSizing: "content-box" }}
            />
          </>
        ) : (
          <span className="orangeText">"Text"</span>
        )}{" "}
        "{" "}
        <button className="deleteBtn" onClick={handleDeleteBtn}>
          X
        </button>
      </p>
    );
    setIsPopUpVisible(false);
  };

  const secondHandleDouble = (e) => {
    setIsVisibleInput(true);
    setStepEditorValue(
      <p>
        Click on "{" "}
        {isVisibleInput ? (
          <>
            <span
              className="orangeText"
              ref={spanRef}
              style={{
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
              }}
            >
              {inputValue}
              {setInputValue(e.target.value)}
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleChange}
              style={{ boxSizing: "content-box" }}
            />
          </>
        ) : (
          <span className="orangeText">"Text"</span>
        )}{" "}
        " after <span className="orangeText">"{second}"</span>{" "}
        <button className="deleteBtn2" onClick={handleDeleteBtn}>
          X
        </button>
      </p>
    );
  };
  const thirdHandleDouble = (e) => {
    // console.log(e.target);
    setStepEditorValue(
      <p>
        Click on "{" "}
        {isVisibleInput ? (
          <>
            <span
              className="orangeText"
              ref={spanRef}
              style={{
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
              }}
            >
              {inputValue || "a"}
              {setInputValue(e.target.value)}
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleChange}
              style={{ boxSizing: "content-box" }}
            />
          </>
        ) : (
          <span className="orangeText">"Text"</span>
        )}{" "}
        " for <span className="orangeText">"{third}"</span>{" "}
        <button className="deleteBtn3" onClick={handleDeleteBtn}>
          X
        </button>
      </p>
    );
  };

  const handleDropdown = (e) => {
    const liElement = e.currentTarget;
    let textContent = "";

    liElement.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        textContent += node.textContent.trim();
      }
    });
    setStepEditorValue(
      <>
        <p className="abcd">
          Click on <span onDoubleClick={thirdHandleDouble}>"Text"</span> for{" "}
          <button className="pinkBtnLiInner">G</button>{" "}
          <span className="purpleText" onDoubleClick={thirdHandle2Double}>
            {textContent}
          </span>
        </p>
        <button className="delt" onClick={handleDeleteBtn}>
          X
        </button>
      </>
    );
    setIsDropDownVisible(false);
  };

  const handleDropdown1 = (e) => {
    const liElement = e.currentTarget;
    let textContent = "";

    liElement.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        textContent += node.textContent.trim();
      }
    });
    setStepEditorValue(
      <>
        <p className="abcd">
          Click on <span onDoubleClick={thirdHandleDouble}>"Text"</span> for{" "}
          <button className="pinkBtnLiInner">G</button>{" "}
          <span className="purpleText" onDoubleClick={thirdHandle2Double}>
            {textContent}
          </span>
        </p>
        <button className="delt" onClick={handleDeleteBtn}>
          X
        </button>
      </>
    );
    setIsDropDownVisible(false);
  };

  return (
    <main className="container">
      <section className="border">
        <div onClick={stepEditorHandleClick} className="stepEditor">
          {stepEditorValue}
        </div>

        {isPopUpVisible && isPopUpVisible2 && (
          <div className="popUp">
            <ul className="listStyle">
              <li className="listItem" onClick={handleClickOne}>
                <button className="greenBtnLi">@</button> Click on{" "}
                <span className="orangeText">"Text"</span>{" "}
              </li>
              <li className="listItem" onClick={handleClickTwo}>
                <button className="greenBtnLi">@</button> Click on{" "}
                <span className="orangeText">"Text"</span> after{" "}
                <span className="orangeText">"{second}"</span>
              </li>
              <li className="listItem" onClick={handleClickThree}>
                <button className="greenBtnLi">@</button> Click on{" "}
                <span className="orangeText">"Text"</span> for{" "}
                <span className="orangeText">"{third}"</span>
              </li>
            </ul>
          </div>
        )}

        {isDropDownVisible && (
          <div className="popUp1">
            <input
              className="searchBar"
              placeholder="Search global data"
              type="search"
            />
            <ul className="listStyle">
              <li className="listItem" onClick={handleDropdown}>
                {" "}
                <button className="pinkBtnLi">G</button>test
              </li>
              <li className="listItem" onClick={handleDropdown1}>
                <button className="pinkBtnLi">G</button>test67
              </li>
            </ul>
          </div>
        )}
        <button className="okBtn">Ok</button>
        <button className="cancelBtn">Cancel</button>
      </section>
    </main>
  );
}
