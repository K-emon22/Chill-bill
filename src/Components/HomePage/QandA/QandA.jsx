import React from "react";

const QandA = () => {
  const qna = [
    {
      id: 1,
      question: "1. What bill can I pay through WASA?",
      answer: "You can pay your Water Bill through WASA services.",
    },
    {
      id: 2,
      question: "2. How can I pay my BTCL bill?",
      answer:
        "You can pay your Internet Bill through BTCL’s online payment system.",
    },
    {
      id: 3,
      question: "3. What type of bill is associated with Titash Gas?",
      answer: "You can pay your Gas Bill through Titash Gas services.",
    },
    {
      id: 4,
      question: "4. Which bill can I pay through DPDC?",
      answer: "You can pay your Electricity Bill Prepaid via DPDC.",
    },
    {
      id: 5,
      question: "5. What type of bill is managed by DESCO?",
      answer: "You can pay your Electricity Bill through DESCO services.",
    },
    {
      id: 6,
      question: "6. What payment can I make through BD Bank?",
      answer: "You can make your EMI Payment through BD Bank’s platform.",
    },
  ];

  return (
    <div>
      <h1 className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl mb-10">
        {" "}
        QnA section{" "}
      </h1>
      {qna.map((singleQna) => (
        <div key={singleQna.id} className="mb-5">
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              {singleQna.question}
            </div>
            <div className="collapse-content text-sm">{singleQna.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QandA;
