import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const cardLink = [
    {
      to: "/reactjs",
      title: "React JS Video Tutorials",
      desc:
        "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.",
    },
    {
      to: "/nodejs",
      title: "React JS Video Tutorials",
      desc:
        "A Node.js app is run in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.",
    },
    {
      to: "/entertainment",
      title: "Super Hit Hindi Songs",
      desc: "Entertainement.",
    },
  ];

  return (
    <div className="row">
      <div className="row">
        {cardLink.map((cardItem) => {
          return (
            <Link to={cardItem.to}>
              <div className="col s12 m6">
                <div className="card teal">
                  <div className="card-content white-text">
                    <span className="card-title">{cardItem.title}</span>
                    <p>{cardItem.desc.substr(0, 185)}...</p>
                  </div>
                  <div className="card-action">
                    <button className="waves-effect waves-light btn-small teal">
                      Click here To Learn
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
