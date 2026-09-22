import React from "react";

function App() {
  const projects = [
    {
      title: "Heart Disease Prediction",
      description:
        "ML model to predict heart disease using patient data. Built with Streamlit and Scikit-learn.",
      link: "https://github.com/patilshubham0003/Heart_Disease_Prediction_System",
      live: "https://heart-disease-prediction-system-4eiy.onrender.com/",
    },
    {
      title: "Titanic Survival Prediction",
      description:
        "A machine learning project that analyzes Titanic passenger data and predicts survival using classification models.",
      link: "https://github.com/patilshubham0003/Titanic_Passenger_Survival_Analysis",
      live:"https://titanicpassengersurvivalanalysis.streamlit.app/"
    },
    {
      title: "Customer Segmentation",
      description:
        "K-Means clustering to segment customers based on behavior.",
      link: "https://github.com/patilshubham0003/Smart_Cart_Segmentation_System",
    },
     {
      title: "Credit Wise Loan System",
      description:
        "Built an end-to-end supervised ML pipeline using KNN, Logistic Regression and Naive Bayes to predict loan approval. Implemented Binary classification along with EDA, feature engineering & model evaluation (Precision, Recall, F1).",
      link: "https://github.com/patilshubham0003/Credit_Wise_Loan_System",
      live:"https://credit-wise-loan-system.onrender.com/"
    },
    {
      title: "Chai_Receipt_AI",
      description:
        "AI-powered Chai Receipt Generator built with Python and Streamlit. It allows users to enter customer details, select chai items, calculate bills, generate personalized quotes using a Generative AI LLM, and download the generated receipt for a unique customer experience",
      link: "https://github.com/patilshubham0003/Chai_Receipt_AI",
      live:"https://chaibillgenerator-cj3sdjdompq6typebzhsgn.streamlit.app/"
    }
    ,
    {
      title: "AI Chatbot Genai",
      description:
        "This project is an AI-powered chatbot built using Streamlit and Google GenAI, leveraging a Large Language Model (LLM) to generate real-time responses to user queries. It provides a simple and interactive web interface where users can ask questions and receive intelligent, human-like answers powered by the Gemini model. The project demonstrates how LLMs can be integrated into web applications with secure API handling and easy deployment",
      link: "https://github.com/patilshubham0003/ai_chatbot_genai",
      live:"https://aichatbotgenai-ajmpgucchynw7hf6uvnncs.streamlit.app/"
    },
    {
      title: "Loan Default Prediction System",
      description:
        "A Machine Learning system that predicts whether a customer is likely to default on a loan. It analyzes customer and loan-related information to identify potential loan default risk. The project also includes an integrated chatbot to explain the project, features, and prediction process.",
      link: "https://github.com/patilshubham0003/loan_default_prediction_system",
      live:"https://loandefaultpredictionsystem-drwt8ma9ktu8euipvrjfzq.streamlit.app/"
    }
  ];

  return (
    <div className="px-5  py-5  text-white ">
      <h1 id="project"  className="text-4xl font-bold text-center mb-10">
        My Projects
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div key={index} className="relative group w-72">

            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-xl blur opacity-0 group-hover:opacity-80 transition duration-300 group-active:opacity-80 transition duration-300"></div>

            {/* Card */}
            <div className="relative bg-gray-900 p-6 rounded-xl h-full shadow-lg transition duration-300 transform group-hover:scale-105 group-active:scale-105  flex flex-col justify-between">

              <div>
                <h2 className="text-xl font-semibold mb-3">
                  {project.title}
                </h2>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 font-semibold hover:underline"
                >
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-400 font-semibold hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
