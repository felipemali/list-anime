import React, { useEffect, useState } from "react";
import { Comment, Avatar, Form, Button, List, Input } from "antd";
import moment from "moment";

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment style={{ color: "red" }} {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea
        style={{ width: "500px", height: "130px" }}
        rows={4}
        onChange={onChange}
        value={value}
      />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="danger"
      >
        Adicionar Comentário
      </Button>
    </Form.Item>
  </>
);

export default () => {
  useEffect(() => {
    handleSubmit();
  }, []);

  const [state, setState] = useState({
    comments: [],
    submitting: false,
    value: "muito bom",
  });

  const handleSubmit = () => {
    if (!state.value) {
      return;
    }

    setState({
      ...state,
      submitting: true,
    });

    setTimeout(() => {
      setState({
        submitting: false,
        value: "",
        comments: [
          ...state.comments,
          {
            author: "Eu",
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT84UyIMnOnZsSrMvV5V39VpgEVCKN4t8w6Lg&usqp=CAU",
            content: <p>{state.value}</p>,
            datetime: moment().fromNow(),
          },
        ],
      });
    }, 1000);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      value: e.target.value,
    });
  };

  return (
    <div
      style={{
        background: "#0f0f0f",
        paddingLeft: "3rem",
        paddingBottom: "2rem",
      }}
    >
      {state.comments?.length > 0 && <CommentList comments={state.comments} />}
      <Comment
        style={{
          background: "#0f0f0f",
          padding: "2rem",
        }}
        avatar={
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT84UyIMnOnZsSrMvV5V39VpgEVCKN4t8w6Lg&usqp=CAU"
            alt="Eu"
          />
        }
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={state.submitting}
            value={state.value}
          />
        }
      />
    </div>
  );
};
