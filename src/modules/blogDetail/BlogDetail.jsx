import React from "react";
import "./BlogDetail.css";
import BlogDetailImg1 from "../../assets/images/blog.jpg";
import Header from "../header/header";
import Footer from "../footer/footerComponent";
import BlogDetailImg2 from "../../assets/images/blog-detail.jpg";
import BlogImg from "../../assets/images/review1.svg";
import Comments from "../home/comments/comments";
import CommentsProfile from "../../assets/images/comments-profile.svg";
import CommonButton from "../commonButton/commonButton";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";

const BlogDetail = () => {
  const reviews = [
    {
      id: "1",
      image: BlogImg,
      head: "Gravida quis blandit",
      para: "Lorem ipsum dolor sit consecteturadipiscing doeiusmod tempor incididunt quisnostrud exercitation ullamco laboris",
    },
    {
      id: "2",
      image: BlogImg,
      head: "Gravida quis blandit",
      para: "Lorem ipsum dolor sit consecteturadipiscing doeiusmod tempor incididunt quisnostrud exercitation ullamco laboris",
    },
    {
      id: "3",
      image: BlogImg,
      head: "Gravida quis blandit",
      para: "Lorem ipsum dolor sit consecteturadipiscing doeiusmod tempor incididunt quisnostrud exercitation ullamco laboris",
    },
  ];
  return (
    <>
      <div className="blog-detail-container">
        <Header />
        <div className="blog-detail-breadcrumbs">
          <BreadCrumbs />
        </div>
        <div className="container mt-5 mb-5">
          <div>
            <img src={BlogDetailImg1} alt="" />
          </div>
          <div className="bd-para">
            <p>
              Neque convallis a cras semper auctor neque vitae. Suspendisse
              faucibus interdum posuere lorem ipsum dolor. Leo integer Sed erat
              mag na, blan dit nec ante tin cid unt, vest ibuum iacu lis dui.
              Aliq uam blan dit aliq uam sce leri sque. Viva mus vel quam risus.
              Pra esent fini bus at nulla eget laci nia. Donec bibe ndum odio
              sit amet erat tem pus, sus cipit tempus erat has. Ut elem um
              turpis lorem, id vul pu tat risus cons equ at vitae. Morbi eget
              urna impe dit, pell ente sque nulla id, tempus ris
            </p>
            <img src={BlogDetailImg2} alt="" className="mt-4 mb-4" />
            <p>
              Phase llus vitae erat, at tem por mi ris laor port tor quam, at
              arcu fac sis. Do nec est erat, ullam corper id ligu la quis, ultri
              cies bibe ndum quam natis, toru non condi men tum frin gilla, elem
              ent um diam ac fa cili sis massa. Viva mus vel quam risus do nec
              est erat, ullam corper id ligu la quis, ultri cies bibe ndum quam
              natis, toru non condi men tum frin gilla pell ente sque nulla id,
              tem pus ris, phase llus vitae erat, at tem por mi ris laor port
              tor quam, at arcu fac sis.
            </p>
            <div className="d-flex mt-4 gap-5">
              <p className="heart-bef ">45 Comments</p>
              <p className="share-bef">18 Shares</p>
            </div>
          </div>
          <h2>Related posts</h2>
          <div className="row mt-3">
            {reviews.map((items) => (
              <div className="col-lg-4 mb-5">
                <Comments
                  imgSrc={items.image}
                  head={items.head}
                  para={items.para}
                />
              </div>
            ))}
          </div>
          <h5>Comments</h5>
          <div className="comments">
            <img src={CommentsProfile} alt="" className="comments-profile" />
            <div className="person-detail">
              <h5>Katherine Pierce</h5>
              <p>1 month ago</p>
              <p>
                Sed sed risus pretium quam vulputate dignissim suspendisse in
                est. In dictum non consectetur a erat nam at lectus.
              </p>
              <div className="likes-reply">
                <p className="likes">158</p>
                <p className="reply">Reply</p>
              </div>
            </div>
          </div>
          <h2>Add comment</h2>
          <div className="add-comment">
            {/* <div class="mb-3"> */}
            <input
              type="text"
              class="form-control"
              id="input-sec"
              placeholder="Your name"
              rows="5"
            />
            <input
              type="email"
              class="form-control"
              id="input-sec"
              placeholder="Your E-mail"
            />
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="10"
              placeholder="Comment"
            ></textarea>
            <CommonButton
              fontClr="white"
              color="#170F58"
              borderClr="#170F58"
              label="Leave a comment"
            />
            {/* </div> */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default BlogDetail;
