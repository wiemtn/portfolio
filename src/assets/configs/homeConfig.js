import React from "react";
import { BsClipboardData } from "react-icons/bs";
import { DiCodeigniter } from "react-icons/di";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";
import { Accessibility, CarCrashOutlined, CarRepair, MobileFriendly } from "@mui/icons-material";

const homeConfig = {
  greeting_i18n: {
    en: (
      <h1 className="heading">
        Hi! I'm <strong className="main-name"> Wiem Zakraoui</strong>
      </h1>
    ),
    fr: (
      <h1 className="heading">
        Slu! Je suis <strong className="main-name"> Wiem Zakraoui</strong>
      </h1>
    ),
  },

  titles_i18n: {
    en: [
      "IA engineer",
     "Open Source Contributor",
      "Backend Developer",
      "Data Scientist",
      "Machine Learning Specialist",
      "Accesibility expert",
      "Tunisian",
    ],
    fr: [
      "Ingénieure IA",
      "Contributrice Open Source",
      "Développeuse Backend",
      "Data Scientist",
      "Spécialiste en Machine Learning",
      "Experte en Accessibilité",
      "Tunisienne",
    ],
  },
about_i18n: {
  en: {
    start:
      "Future AI & Data Science Engineer , I turn complex data into real-world impact through LLM assistants, automated accessibility tools, and MLOps pipelines.",
    exit:
      "Fluent in Python (TensorFlow, PyTorch, Scikit-learn), MLOps (Docker, MLflow, Jenkins), and building production-ready AI.",
  },
  fr: {
    start:
      "Future Ingénieure en IA & Data Science , je transforme les données en solutions concrètes : assistants LLM pour journalistes, audits RGAA automatisés, et pipelines MLOps.",
    exit:
      "Maîtrise de Python (TensorFlow, PyTorch, Scikit-learn), MLOps (Docker, MLflow, Jenkins), et déploiement d’IA en production .",
  },
},


  workTimeline: [
    {
      id: "work-2",
      title: "Stagiaire Ingénieure en IA",
      title_i18n: { en: "AI intern", fr: "Stagiaire IA" },
      company: "Talan Group",
      description_i18n: {
        en: "Contributed to machine learning and MLOps-based automation solutions. Also integrated AI model monitoring and optimization tools in production.",
        fr: "Contribution à des solutions d’automatisation basées sur le machine learning et le MLOps Aussi Intégration d’outils de monitoring et d’optimisation de modèles IA en production.",
      },
      date: "06/2025-09/2025",
      icon: <Accessibility />,
      tags: ["OpenIA", "Docker", "python", "type Script", "Vs Extension", "RGAA", "SonarQube","jenkins"],
    },
    {
      id: "work-1",
      title: "Stage de développement mobile",
      title_i18n: { en: "Mobile Developer intern", fr: "Stagaire de développement mobile" },
      company: "Appaxis Innovations",
      description_i18n: {
        en: "developed a cross-platform mobile application with secure JWT architecture and MongoDB database",
        fr: " Développement d'une application mobile multiplateforme avec architecture sécurisée JWT et base de données MongoDB",
      },
      date: "06/2024-09/2024",
      icon: <MobileFriendly />,
      tags: ["Node.js","flutter","MongoDB","docker", "Android Studio", "kotlin",  "firebase"],
    },
    {
      id: "work-0",
      title: "Stagaire Data Analyst",
      title_i18n: { en: "Data Analyst intern", fr: "Stagaire Data Analyst" },
      company: "Draxlmaier Group",
      description_i18n: {
        en: "Industry 4.0 immersion and exploration of data usage for predictive maintenance.",
        fr: "Immersion dans l’industrie 4.0 et découverte de l’usage des données pour la maintenance prédictive.",
      },
      date: "06/2024-09/2024",
      icon: <CarRepair />,
      tags: ["python", "mysql", "pbi","power_apps", "excel"],
    },
  ],
};

export default homeConfig;
