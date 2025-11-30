import { BiGitRepoForked } from "react-icons/bi";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { ImBook } from "react-icons/im";

import sklearnGenetic from "../images/sklearn_genetic_opt.png";
import kafkaMl from "../images/kafkaml.png";
import portfolio from "../images/portfolio.png";
import news from "../images/news.png";
import farm from "../images/farm.png";

import React from 'react';

const projectConfig = [
  {
    id: "project-1",
    title: "NewsBot AI",
    category: { en: "LLm", fr: "LLm" },
    description_i18n: {
      en: "A Python-based AI assistant for journalists, leveraging LLMs to detect breaking news, summarize articles, and flag risk-related content . Built with Hugging Face, BeautifulSoup,and FastAPI, deployed with Docker for real-time alerts. Implemented safety layers for prompt injection prevention and hallucination control.",
      fr: "Un assistant IA pour les journalistes, utilisant des LLM pour détecter les dernières nouvelles, résumer des articles et signaler le contenu à risque. Construit avec Hugging Face, BeautifulSoup et FastAPI, déployé avec Docker pour des alertes en temps réel. Mise en place de couches de sécurité pour prévenir l'injection de prompts et contrôler les hallucinations."
    },
    links: [
      { name: "repo", url: "https://github.com/wiemtn/NewsBotIA", icon: <AiFillGithub/> },
      { name: "fork", url: "https://github.com/wiemtn/NewsBotIA/fork", icon: <BiGitRepoForked/> },
      { name: "subscription", url: "https://github.com/wiemtn/NewsBotIA/subscription", icon: <AiFillEye/> }
    ],
    image: news,
    target: "_blank"
  },{
    id: "project-5",
    title: "MLops churn prediction",
    category: { en: "MLOps & Production", fr: "MLOps & Production" },
    description_i18n: {
      en: "Predict whether a customer will churn using historical features. Deployed with FastAPI, Docker, and Jenkins.",
      fr: "Prédire si un client va quitter en utilisant des caractéristiques historiques. Déployé avec FastAPI, Docker et Jenkins."
    },
    links: [
      { name: "repo", url: "https://github.com/wiemtn/MLops-ChurnPredection", icon: <AiFillGithub/> },
      { name: "fork", url: "https://github.com/wiemtn/MLops-ChurnPredection/fork", icon: <BiGitRepoForked/> },
      { name: "subscription", url: "https://github.com/wiemtn/MLops-ChurnPredection/subscription", icon: <AiFillEye/> },
        ],
    image: sklearnGenetic,
    target: "_blank"
  },
  {
    id: "project-3",
    title: "RGIAA VSCode Extension",
    category: { en: "Accessibility", fr: "Accessibilité" },
    description_i18n: {
      en: "A Visual Studio Code extension to help you ensure your HTML code complies with RGAA accessibility standards using both HTMLHint and AI-powered (LLM) analysis.",
      es: "Une extension Visual Studio Code pour vous aider à garantir que votre code HTML est conforme aux normes d'accessibilité RGAA en utilisant à la fois HTMLHint et une analyse alimentée par l'IA (LLM)."
    },
    links: [
      { name: "repo", url: "https://github.com/wiemtn/Rgaa", icon: <AiFillGithub/> },
      { name: "fork", url: "https://github.com/wiemtn/Rgaa/fork", icon: <BiGitRepoForked/> },
      { name: "subscription", url: "https://github.com/wiemtn/Rgaa/subscription", icon: <AiFillEye/> }
    ],
    image: kafkaMl,
    target: "_blank"
  },
  {
    id: "project-2",
    title: "FarmWise",
    category: { en: "Computer Vision", fr: "Computer Vision" },
    description_i18n: {
      en: "A platform that leverages computer vision to optimize workforce management in agriculture.",
      fr: "Une plateforme qui exploite la vision par ordinateur pour optimiser la gestion de la main-d'œuvre dans l'agriculture."
    },
    links: [
      { name: "repo", url: "https://github.com/wiemtn/FarmWise", icon: <AiFillGithub/> },
      { name: "fork", url: "https://github.com/wiemtn/FarmWise/fork", icon: <BiGitRepoForked/> },
      { name: "subscription", url: "https://github.com/wiemtn/FarmWise/subscription", icon: <AiFillEye/> },
    ],
    image: farm,
    target: "_blank"
  },
  {
    id: "project-1",
    title: "Portfolio",
    category: { en: "Website", fr: "Site Web" },
    description_i18n: {
      en: "Source code for my personal portfolio website.",
      fr: "Code source de mon site web personnel."
    },
    links: [
      { name: "repo", url: "https://github.com/wiemtn/portfolio", icon: <AiFillGithub/> },
      { name: "fork", url: "https://github.com/wiemtn/portfolio/fork", icon: <BiGitRepoForked/> },
      { name: "subscription", url: "https://github.com/wiemtn/portfolio/subscription", icon: <AiFillEye/> }
    ],
    image: portfolio,
    target: "_blank"
  }
];

export default projectConfig;

