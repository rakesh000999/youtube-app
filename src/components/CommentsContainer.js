import React from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Rakesh Joshi",
    text: "lorem epsom asdf asdfqw4 34 as34g w ge F",
    replies: [],
  },
  {
    name: "Rakesh Joshi",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Rakesh Joshi",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Akshay Saini",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                          {
                            name: "Akshay Saini",
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
        ],
      },
    ],
  },
  {
    name: "Rakesh Joshi",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Rakesh Joshi",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Rakesh Joshi",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Rakesh Joshi",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Rakesh Joshi",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Rakesh Joshi",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Rakesh Joshi",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [{
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },],
  },
];

const CommentsList = ({ comments }) => {
  //  never use key as index
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border-l-2 border-black ml-7">
        <CommentsList comments={comment.replies} />
        {/*  <Comment key={index} data={comment} /> */}
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="mx-10 p-2">
      <h1 className="text-xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
