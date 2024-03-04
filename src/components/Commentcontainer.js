import React from "react";
const comments = [
  {
      name: " Shiva",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
  },
  {
      name: " Shiva",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
          {
              name: " Shiva",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [],
          },
       
      ],
  },

  {
      name: " Shiva",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
  },
  {
      name: " Shiva",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
          {
              name: " Shiva",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [],
          },
          {
              name: "Shiva",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                  {
                      name: " Shiva",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                          {
                              name: " Shiva",
                              text: "Lorem ipsum dolor sit amet, consectetur adip",
                              replies: [
                                  {
                                      name: " Shiva",
                                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                                      replies: [
                                          {
                                              name: "Shiva",
                                              text: "Lorem ipsum dolor sit amet, consectetur adip",
                                              replies: [],
                                          },
                                      ],
                                  },
                                  {
                                      name: "Shiva",
                                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                                      replies: [],
                                  },
                              ],
                          },
                      ],
                  },
              ],
          },
      ],
  },
  {
      name: " Shiva",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
  },
  
];


const Comment = ({ data }) => {
  const { name,  text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 rounded-md  my-2">
      <img
        className="h-10 w-12"
        src="https://a0.anyrgb.com/pngimg/608/1960/user-profile-login-avatar-heroes-user-youtube-male-silhouette-monochrome-smile.png"
      ></img>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const Commentlist = ({ comments }) => {
  return comments.map((comm, i) => (
    <div key={i}>
      <Comment   data={comm} />
      <div className="ml-7 border  border-l-black pl-7">
        <Commentlist comments={comm.replies}/>
      </div>
    </div>
  ));
};
 
 
const Commentcontainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl mb-2">Comments</h1>
      <Commentlist comments={comments} />
    </div>
  );
};

export default Commentcontainer;
