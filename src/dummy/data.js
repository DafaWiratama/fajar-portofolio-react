import html from '../assets/icons/html.png';
import css from '../assets/icons/css.webp';
import react from '../assets/icons/react.png';
import reactNative from '../assets/icons/rn.webp';
import next from '../assets/icons/nextjs.png';
import nuxt from '../assets/icons/nuxtjs.webp';
import express from '../assets/icons/express.png';
import mysql from '../assets/icons/mysql.png';
import bootstrap from '../assets/icons/bootstrap.png';
import tailwind from '../assets/icons/tailwind.webp';
import vue from '../assets/icons/vue.png';
import docker from '../assets/icons/docker.png';

const data = [
  {
    id: 'fe',
    name: 'Frontend Developer',
    skills: [
      {
        name: 'HTML',
        img: html,
      },
      {
        name: 'CSS',
        img: css,
      },
      {
        name: 'Bootstrap',
        img: bootstrap,
      },
      {
        name: 'Tailwind CSS',
        img: tailwind,
      },
      {
        name: 'React',
        img: react,
      },
      {
        name: 'Vue JS',
        img: vue,
      },
      {
        name: 'React Native',
        img: reactNative,
      },
      {
        name: 'Next JS',
        img: next,
      },
      {
        name: 'Nuxt JS',
        img: nuxt,
      },
    ],
  },
  {
    id: 'be',
    name: 'Backend Developer',
    skills: [
      {
        name: 'MySQL',
        img: mysql,
      },
      {
        name: 'Express JS',
        img: express,
      },
      {
        name: 'Docker',
        img: docker,
      },
    ],
  },
];

export default { data };
