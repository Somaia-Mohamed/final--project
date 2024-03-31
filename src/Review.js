import React, { useState } from "react";
const reviewList = [
  {
    imgUrl: "/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];
export default function Review() {
  const reviwtitle = "Add a Review";

  const [reviewShow, setReviewShow] = useState(true);
  return (
    <>
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="desc" onClick={() => setReviewShow(!reviewShow)}>
          Description
        </li>
        <li className="rev " onClick={() => setReviewShow(!reviewShow)}>
          Review 4
        </li>
      </ul>
      <div
        className={`review-content ${
          reviewShow ? "review-content-show" : "description-show"
        }`}
      >
        <div className="review-showing  ">
          <ul className="content lab-ul">
            {reviewList.map((el, index) => (
              <li key={index}>
                <div className="post-thumb">
                  <img src={el.imgUrl} alt={el.imgAlt} />
                </div>
                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on">
                      <a href="#">{el.name}</a>
                      <p>{el.date}</p>
                    </div>
                  </div>
                  <div className="entry-content">
                    <p>{el.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="description">
          <p>
            {" "}
            Lorem ipsum" is a placeholder text commonly used in the printing and
            typesetting industry. It's used to demonstrate the visual form of a
            document or a typeface without relying on meaningful content. Here's
            an example of "Lorem ipsum" text: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </p>
        </div>
      </div>
    </>
  );
}
