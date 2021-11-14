import { React, useState, useRef, useEffect } from "react";
import axios from "axios";
import { Button, Fab, Slider, Grid, Card } from "@mui/material";
import { BiUndo, BiTrash } from "react-icons/bi";
import { BsEraserFill } from "react-icons/bs";
import { RiPencilFill } from "react-icons/ri";
import "./Canvas.css";

function Canvas(props) {
  const [tool, setTool] = useState("pencil");
  const toolOptions = () => {
    if (tool === "pencil") {
      return (
        <div>
          <RiPencilFill className="toolSelected" style={{ color: color }} onClick={() => setTool("pencil")} />
          <BsEraserFill className="toolNotSelected" style={{ color: "whitesmoke" }} onClick={() => setTool("eraser")} />
        </div>
      );
    }
    else if (tool === "eraser") {
      return (
        <div>
          <RiPencilFill className="toolNotSelected" style={{ color: color }} onClick={() => setTool("pencil")} />
          <BsEraserFill className="toolSelected" style={{ color: "whitesmoke" }} onClick={() => setTool("eraser")} />
        </div>
      );
    }
  }

  const [color, setColor] = useState("black");
  const colors = ["black", "red", "blue", "deepskyblue", "darkorange", "gold", "sienna", "forestgreen", "limegreen", "darkorchid", "violet", "pink"];
  const colorOptions = () => {
    return (colors.map((color, i) => (
      <Fab className="colorButton" children="" size="small" style={{ backgroundColor: color}} key={i} value={color} onClick={() => setColor(color)} />
    )));
  }

  const [thickness, setThickness] = useState(8);
  const updateThickness = (e, thck) => setThickness(thck);
  const sliderOptions = () => {
    return (<Slider style={{ color: "#ffa7a7" }} min={2} max={56} value={thickness} onChange={updateThickness} />);
  }

  const [paths, setPaths] = useState([]);
  const [pathSizes, setPathSizes] = useState([]);
  const [prevLen, setPrevLen] = useState(0);

  const [isDrawing, setIsDrawing] = useState(false);
  const contextRef = useRef(null);

  const canvasDimensions = 320;
  const [canvasReady, setCanvasReady] = useState(false);
  const [bgReady, setBgReady] = useState(false);
  const initCanvas = () => setCanvasReady(true);

  useEffect(() => {
    console.log(props.user, props.thread, props.options, props.visible);
    if (props.visible) return;
    setCanvasReady(false);
    setBgReady(false);
  }, [props]);

  useEffect(() => {
    if (!canvasReady) return;
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "whitesmoke";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = color;
    ctx.lineWidth = thickness;
    if (!bgReady) {
      ctx.fillRect(0, 0, canvasDimensions, canvasDimensions);
      setBgReady(true);
    }
    if (tool === "pencil") ctx.strokeStyle = color;
    if (tool === "eraser") ctx.strokeStyle = "whitesmoke";
    contextRef.current = ctx;
  }, [tool, color, thickness, bgReady, canvasReady, canvasDimensions]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    setPrevLen(paths.length);
    setPaths((state) => [...state, { offsetX, offsetY, tool, color, thickness }]);
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    setIsDrawing(true);
  }

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    setPaths((state) => [...state, { offsetX, offsetY, tool, color, thickness }]);
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  }

  const lastTool = tool;
  const lastColor = color;
  const lastThck = thickness;
  const endDrawing = () => {
    if (!isDrawing) return;
    contextRef.current.closePath();
    var lineLen = paths.length - prevLen;
    setPathSizes((state) => [...state, lineLen]);
    setIsDrawing(false);
  }

  const undoDrawing = () => {
    // remove last path created
    const pathSizeRemoved = pathSizes.pop();
    const prevPathLen = paths.length - pathSizeRemoved;
    paths.splice(prevPathLen, pathSizeRemoved);

    // clears all paths previously created on canvas
    contextRef.current.clearRect(0, 0, canvasDimensions, canvasDimensions);
    contextRef.current.fillRect(0, 0, canvasDimensions, canvasDimensions);

    // redraw canvas
    let i = 0;
    let counter = 0;
    for (let pt = 0; pt < paths.length; pt++) {
      if (counter === 0) {
        if (paths[pt].tool === "pencil") contextRef.current.strokeStyle = paths[pt].color;
        else if (paths[pt].tool === "eraser") contextRef.current.strokeStyle = "whitesmoke";
        contextRef.current.lineWidth = paths[pt].thickness;
        contextRef.current.beginPath();
        contextRef.current.moveTo(paths[pt].offsetX, paths[pt].offsetY);
      }
      contextRef.current.lineTo(paths[pt].offsetX, paths[pt].offsetY);
      contextRef.current.stroke();
      counter++;
      if (counter === pathSizes[i]) {
        contextRef.current.closePath();
        counter = 0;
        i++;
      }
    }
    setTool(lastTool);
    contextRef.current.strokeStyle = lastColor;
    contextRef.current.lineWidth = lastThck;
  }

  const clearDrawing = () => {
    contextRef.current.clearRect(0, 0, canvasDimensions, canvasDimensions);
    setBgReady(false);
    setPaths([]);
    setPathSizes([]);
  }

  const drawingToCloud = () => {
    const canvas = document.querySelector("canvas");
    canvas.toBlob(blob => {
      const file = new File([blob], "drawing.png");
      console.log(file);
      uploadDrawing(file);
    });
  }

  const uploadDrawing = async (img) => {
    const formData = new FormData();
    formData.append('file', img);
    formData.append('upload_preset', 'blankboard');
    await axios.post('https://api.cloudinary.com/v1_1/dsunqodr1/image/upload', formData)
      .then(res => { props.canvasCall(res.data.url) })
      .catch(e => {
        console.log(e);
      });
  }

  return (
    <>
      <Card className="canvas">
        <Grid container onMouseEnter={initCanvas}>
          <Grid container item xs={7}>
            <Grid container item xs={12} justifyContent="center">
              <canvas
                id="canvas"
                className="whiteboard"
                width={canvasDimensions}
                height={canvasDimensions}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={endDrawing}
                onMouseLeave={endDrawing}
              />
            </Grid>
            <Grid className="colors" container item xs={12} justifyContent="center">
              <Grid item xs={1}>
                <BiUndo className="bi_btn" onClick={undoDrawing} />
                <BiTrash className="bi_btn" onClick={clearDrawing} />
              </Grid>
              <Grid item xs={11}>
                <div className="colorsGrid">{colorOptions()}</div>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={5}>
            <Grid item xs={12}>
              <div className="optionText">TOOLS</div>
              <div className="modalTools">{toolOptions()}</div>
            </Grid>
            <Grid item xs={12}>
              <div className="optionText">THICKNESS</div>
              <div className="modalSlider">{sliderOptions()} </div>
            </Grid>
            <Grid container item xs={12} justifyContent="center">
              <Button variant="filled" className="submitButton" onClick={drawingToCloud}>
                SAVE
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Card>
      {/* <div className="modalBg" onMouseEnter={initCanvas}>
        <div className="modalNavbar">
          <div className="navLeft">
            <BiUndo style={{ fontSize: "36px", color: "#ffa7a7", marginLeft: "10%", cursor: "pointer" }} onClick={undoDrawing} />
            <Button style={{ backgroundColor: "#ffa7a7", color: "black", fontFamily: "Caveat Brush", marginLeft: "32px", cursor: "pointer" }} onClick={clearDrawing}>CLEAR</Button>
          </div>
          <div className="navRight">
            <Button className="submitButton" style={{ backgroundColor: "#ffa7a7", color: "black", fontFamily: "Caveat Brush", marginRight: "10%" }} onClick={drawingToCloud}>SUBMIT</Button>
          </div>
        </div>
        <div className="modalContent">
          <div className="options">
            <div className="optionText">TOOLS</div>
            <div className="modalTools">{toolOptions()}</div>
          </div>
          <div>
            <canvas
              id="canvas"
              className="whiteboard"
              width={canvasDimensions}
              height={canvasDimensions}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={endDrawing}
              onMouseLeave={endDrawing}
            />
          </div>
          <div className="options">
            <div className="optionText">COLORS</div>
            <div className="colorsGrid">{colorOptions()}</div>
            <div className="optionText">THICKNESS</div>
            <div className="modalSlider">{sliderOptions()} </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Canvas;