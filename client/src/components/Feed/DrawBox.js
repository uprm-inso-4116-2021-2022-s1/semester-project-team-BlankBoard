import React, { useState } from 'react'
import "./DrawBox.css";
import { Avatar, Button, Grid, Typography, Modal} from "@mui/material";
import Canvas from "../../components/Canvas/Canvas";

function DrawBox(props) {
    const [drawing, setDrawing] = useState("https://res.cloudinary.com/dsunqodr1/image/upload/v1636918991/blankboard/xq6laesvfqfpoomvsumd.png");
    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    const canvasCall = (newDrawing) => { setDrawing(newDrawing) };

    const createPost = () => {
        //make a post with the drawing state as it's "post_content" field, and make this post tied to 
        // use whose id is props.user.user_id as "user_id"
    }

    return (
        <>
            <Grid container className="dbox">
                <Grid container item xs={3} alignItems="top" justifyContent="center">
                    <Avatar className="dbox_profile" src={props.user.profile ? props.user.profile : ""}></Avatar>
                </Grid>
                <Grid container item xs={6} justifyContent="center">
                    <Grid item>
                        <Button onClick={openModal}>
                        <img alt="post" id="dbd" className="dbox_drawing" src={drawing} />
                        </Button>
                    </Grid>
                </Grid>
                <Grid container item xs={3}>
                    <Grid item xs={12}>
                        <Typography color="gray">
                            You can click on this image to begin drawing. Press the button below to post your drawing on BlankBoard!
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={createPost}>Post</Button> {/**/}
                    </Grid>
                </Grid>
            </Grid>
            <Modal className="modalWindow" open={showModal} onClose={closeModal}>
                <Canvas canvasCall={canvasCall} user={props.user} thread={0} options={"pfp"} visible={showModal} />
            </Modal>
            {/* <div className="drawBox">
                <form>
                    <div className="drawBox__input">

                        <input placeholder="Drawing 'box' Location Placeholder" />
                    </div>
                    <Button className="drawBox__drawButton">Draw</Button>
                </form>
            </div> */}
        </>
    );
}

export default DrawBox;
