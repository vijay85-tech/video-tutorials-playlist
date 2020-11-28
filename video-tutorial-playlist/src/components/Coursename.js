import React, { useState, useEffect, Fragment } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
//GET // HTTP/1.1

// Accept: application/json

const Coursename = () => {
  const { coursename } = useParams();
  const [coures, setCourses] = useState([]);
  const [activeClass, setActiveClass] = useState(0);
  useEffect(() => {
    let playlistId = "";
    switch (coursename) {
      case "reactjs": {
        // playlistId = "PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3";
        playlistId = "PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3";
        break;
      }
      case "nodejs": {
        // playlistId = "PLB97yPrFwo5gh4WP-VtwsVJbebyHbxNk6";
        playlistId = "PLS1QulWo1RIb8IwHYfah5pxGU5jgNiEbK";
      }
      case "entertainment": {
        playlistId = "RDgk-Ku7g__Bc";
      }
      default: {
      }
    }

    const key = "AIzaSyCK1TJ1h6v9p5Kz2soRUR5HUfMLsPTUsSQ";
    const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${playlistId}&key=${key}`;

    getVideoList(url);
  }, [null]);

  const getVideoList = async (url) => {
    try {
      const result = await fetch(url);
      const getResult = await result.json();
      const data = getResult.items.map((item) => {
        console.log(item.snippet.title, item.contentDetails.videoId);
        return {
          title: item.snippet.title,
          vid: item.contentDetails.videoId,
        };
      });
      setPlayId(data[0].vid);
      setCurrentTitle(data[0].title);
      setCourses(data);
    } catch (e) {
      console.log(e);
    }
  };

  const [playVid, setPlayId] = useState(null);
  const [currentTitle, setCurrentTitle] = useState(null);

  const watchedVideos = (playVid) => {
    if (localStorage.getItem("savedVid")) {
      if (JSON.parse(localStorage.getItem("savedVid")).includes(playVid)) {
        return true;
      }
      return false;
    }
  };

  const renderVideo = () => {
    return (
      <Fragment>
        <div className="video-container">
          <ReactPlayer
            className="react-player"
            url={`https://www.youtube.com/watch?v=${playVid}`}
            width="100%"
            height="100%"
            controls={true}
            onEnded={() => {
              if (localStorage.getItem("savedVid")) {
                let savedVidData = JSON.parse(localStorage.getItem("savedVid"));
                localStorage.setItem(
                  "savedVid",
                  JSON.stringify([...savedVidData, playVid])
                );
              } else {
                localStorage.setItem("savedVid", JSON.stringify([playVid]));
              }
            }}
          />
        </div>

        <strong>{currentTitle}</strong>
      </Fragment>
    );
  };

  const couresLength = coures.length;
  return (
    <div className="row">
      {couresLength > 0 ? (
        <Fragment>
          <div
            className="col s12 m12 center"
            style={{ padding: "2px", fontSize: "2.6rem" }}
          >
            <strong>{couresLength > 0 && coursename.toUpperCase()}</strong>
          </div>
          <div className="col s12 m4">
            <ul className="collection" style={{ cursor: "pointer" }}>
              {coures.map((item, index) => {
                return (
                  <li
                    key={index + item.title}
                    className={
                      activeClass === index
                        ? "collection-item active"
                        : "collection-item"
                    }
                    onClick={() => {
                      setCurrentTitle(item.title);
                      setPlayId(item.vid);
                      setActiveClass(index);
                    }}
                  >
                    {watchedVideos(item.vid) && (
                      <i class="tiny material-icons">check</i>
                    )}
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col s12 m8" style={{ padding: "10px" }}>
            {coures.length > 0 ? renderVideo() : <h1>Loading...</h1>}
          </div>
        </Fragment>
      ) : (
        <div
          className="col s12 m12 center"
          style={{ padding: "2px", fontSize: "2.6rem" }}
        >
          <strong>Data Not found</strong>
        </div>
      )}
    </div>
  );
};
export default Coursename;
