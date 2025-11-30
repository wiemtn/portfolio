import {
  SiPython,
  SiPostgresql,
  SiDocker,
  SiReact,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiJenkins,
  SiApacheairflow,
  SiApachekafka,
  SiN8N,
  SiPytorch,
  SiJupyter,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import React from "react";
import StorageIcon from "@mui/icons-material/Storage";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import TerminalIcon from "@mui/icons-material/Terminal";
import CloudIcon from "@mui/icons-material/Cloud";

const ICON_SIZE = 50;

const skillsConfig = {
  mainSkills: [
    { id: "skills-main-python", className: "skill-icon", icon: <SiPython size={ICON_SIZE} />, text: "Python" },
    { id: "skills-main-mysql", className: "skill-icon", icon: <GrMysql size={ICON_SIZE} />, text: "MySQL" },
    { id: "skills-main-docker", className: "skill-icon", icon: <SiDocker size={ICON_SIZE} />, text: "Docker" },
    { id: "skills-main-git", className: "skill-icon", icon: <FaGitAlt size={ICON_SIZE} />, text: "Git" },
    { id: "skills-main-ml", className: "skill-icon", icon: <QueryStatsIcon sx={{ fontSize: ICON_SIZE }} />, text: "ML" },
    { id: "skills-main-jenkins", className: "skill-icon", icon: <SiJenkins size={ICON_SIZE} />, text: "Jenkins" },
  ],
  complementarySkills: [
    { id: "skills-comp-bash", className: "skill-icon", icon: <TerminalIcon sx={{ fontSize: ICON_SIZE }} />, text: "Bash / Terminal" },
    { id: "skills-comp-js", className: "skill-icon", icon: <SiJavascript size={ICON_SIZE} />, text: "JavaScript" },
    { id: "skills-comp-css", className: "skill-icon", icon: <SiCss3 size={ICON_SIZE} />, text: "CSS 3" },
    { id: "skills-comp-html", className: "skill-icon", icon: <SiHtml5 size={ICON_SIZE} />, text: "HTML 5" },
    { id: "skills-comp-postgres", className: "skill-icon", icon: <SiPostgresql size={ICON_SIZE} />, text: "PostgreSQL" },
    { id: "skills-comp-n8n", className: "skill-icon", icon: <SiN8N size={ICON_SIZE} />, text: "n8n" },
    { id: "skills-comp-pytorch", className: "skill-icon", icon: <SiPytorch size={ICON_SIZE} />, text: "PyTorch" },
    { id: "skills-comp-jupyter", className: "skill-icon", icon: <SiJupyter size={ICON_SIZE} />, text: "Jupyter" },
    { id: "skills-comp-azure", className: "skill-icon", icon: <CloudIcon sx={{ fontSize: ICON_SIZE }} />, text: "Azure" },
    { id: "skills-comp-react", className: "skill-icon", icon: <SiReact size={ICON_SIZE} />, text: "React" },
    { id: "skills-comp-powerbi", className: "skill-icon", icon: <QueryStatsIcon sx={{ fontSize: ICON_SIZE }} />, text: "Power BI" },
  ],
};

export default skillsConfig;