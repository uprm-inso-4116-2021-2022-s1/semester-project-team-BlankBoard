import React from 'react'
import "./Feed.css";
import DrawBox from './DrawBox';
import Post from './Post';

function Feed(props) {
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2> Home </h2>
            </div>

            {/* drawBox */}

            <DrawBox user={props.user}/>

            {/* Posts */}

            {/* <Post displayName= ""
                  verified username=""
                  avatar = ""
                  image = ""
                  text = ""
            /> */}

            <Post displayName="Anthony Mendez" 
                  verified username="Water_Kami" 
                  avatar = "http://images6.fanpop.com/image/photos/43100000/so-cute-puppy-mans-best-friend-43117523-736-736.jpg"
                  image="https://i.pinimg.com/originals/4b/10/53/4b1053201e9a572a700afc1981a6419b.jpg"
                  text = "Testing the inks"
            />

            <Post displayName= "Nat"
                  username="RelatableNatalia"
                  avatar = "https://i.pinimg.com/736x/33/32/6d/33326dcddbf15c56d631e374b62338dc.jpg"
                  image = "https://ih1.redbubble.net/image.1348636732.8074/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg"
                  text = "not verified... mood"
            />

            <Post displayName= "Kev"
                  verified username="Purcell"
                  avatar = "https://i1.sndcdn.com/artworks-7Zc6h0hOyAzwkB14-SSs0eQ-t500x500.jpg"
                  image = "https://i.pinimg.com/originals/a1/e3/6b/a1e36bcb8ce179bd8cc8db28ff4ef6fb.jpg"
                  text = "lol"
            />

            <Post displayName= "Jesus"
                  username="RodzAla2"
                  avatar = "https://tse3.mm.bing.net/th?id=OIP.d3xNmsPdaoaFG-YRdkOhEgHaEK&pid=15.1"
                  image = "https://cdn.drawception.com/images/panels/2017/12-24/kxYfEeOfQ8-2.png"
                  text = "taking the skills on a walk xD"
            />

            <Post displayName= "Carlos"
                  verified username="BobRossEnthusiast"
                  avatar = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/energized--abstract-art-by-fidostudio-tom-fedro--fidostudio.jpg"
                  image = "https://i.pinimg.com/originals/c0/46/72/c04672c6ba605b150e71a02ccf1185c0.jpg"
                  text = "something simple"
            />
            <Post displayName= "JBerm"
                  verified username="Udez"
                  avatar = "https://i.pinimg.com/564x/dc/d4/56/dcd4560b69738552600d4b98ae3192bf.jpg"
                  image = "https://i.pinimg.com/736x/cc/c7/6a/ccc76a5288deaa55f053f13ea4859b11.jpg"
                  text = "hahaha :)"
            />

        </div>
    )
}

export default Feed
