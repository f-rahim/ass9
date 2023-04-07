import React from "react";
import { useLoaderData } from "react-router-dom";
import Batch from "../../Batch/Batch";
import SectionHeading from "../../SectionHeading/SectionHeading";
import SingleQuestion from "../../SingleQuestion/SingleQuestion";
import Text from "../../Text/Text";
import Title from "../../Title/Title";
import "./QuizSinglePage.css";
import { showAnswer } from "../../../utility/utility";

const QuizSinglePage = () => {
  const quizInfo = useLoaderData();
  const quizData = quizInfo.data;
  const questions = quizData.questions;

  console.log(questions);

  return quizInfo.status ? (
    <section className="quiz-details">
      <div className="container">
        <div className="quiz-header grid grid-cols-2 py-16">
          <div className="flex items-center quiz-info">
            <div className="quiz-image mr-5">
              <img
                src={quizData.logo}
                alt="quiz logo"
                className="w-20 rounded shadow-lg"
              />
            </div>
            <div className="quiz-basic-info">
              <Title className="text-gray-600" style={{ color: "gray" }}>
                Quiz name: {quizData.name}
              </Title>
              <Text className="text-slate-600">
                Total:{" "}
                <Batch className="bg-blue-50 px-3 py-1 ">
                  {quizData.total} quiz
                </Batch>
              </Text>
            </div>
          </div>

          <div className="user-mark-info text-center">
            <Title className="text-xl" style={{ color: "gray" }}>
              Your total score
            </Title>
            <Text className="text-slate-600">5 out or {quizData.total}</Text>
          </div>
        </div>

        <div className="questions-area">
          <SectionHeading
            title={`${quizData.name}`}
            subtitle="All questions of"
            className="mb-16"
          ></SectionHeading>

          <div className="questions-body mb-20 w-6/12 mx-auto">
            <div className="grid  gap-10">
              {questions.map((question) => (
                <SingleQuestion
                  key={question.id}
                  singleQuestion={question}
                ></SingleQuestion>
              ))}
            </div>

            <div className="submit-answer-button">
              {questions.length === 9 && (
                <button className="rounded px-10 py-3 bg-blue-500 hover:bg-blue-400">
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="answer-popup hidden" id="answer-popup">
        <div className="backdrop" onClick={() => showAnswer(false)}></div>
        <div className="answer-container">
          <div className="content">
            <h5 id="correctAns" className="text-center">
              ...
            </h5>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <section className="no-quiz">
      <div className="conteiner">
        <Title className="text-center py-20 text-slate-600">
          No quiz available
        </Title>
      </div>
    </section>
  );
};

export default QuizSinglePage;
