import React from 'react';
import { Box, Button, Chip, Container, Stack, Typography, Avatar } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SecurityIcon from '@mui/icons-material/Security';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useLang } from '../utils/i18n';
import { withUtm } from '../utils/withUtm';

const UI = {
  en: {
    h1_a: 'Build ',
    h1_b: 'AI That ',
    h1_c: 'Works',
    sub: 'I turn data into real impact: LLM assistants for field, automated accessibility audits, MLOps and DevOps pipelines, and anomaly detection — from idea to production.',
    bullets: [
      { icon: <RocketLaunchIcon />, label: 'Weeks, not months' },
      { icon: <AutoAwesomeIcon />, label: 'LLM, RAG, Computer Vision' },
      { icon: <SecurityIcon />, label: 'Deployed in real projects' },
    ],
    ctaPrimary: 'Book a Free Intro Call',
    ctaSecondary: 'See Projects',
    subject: 'Consulting Inquiry',
    seenIn: 'Experience at',
    intro: {
      name: 'Wiem Zakraoui',
      title: 'Future AI & Data Science Engineer',
      location: 'Ariana Soghra, Tunis',
      email: 'wiem.zakraoui@esprit.tn',
      github: 'github.com/wiemtn',
      linkedin: 'linkedin.com/in/wiem-zakraoui-628041240/',
    },
  },
  fr: {
    h1_a: 'Construire ',
    h1_b: 'l’IA qui ',
    h1_c: 'fonctionne',
    sub: 'Je transforme les données en solutions concrètes : assistants LLM pour tout terrain, audits d’accessibilité automatisés, pipelines DevOps et MLOps, et détection des anomalies — de l’idée à la production.',
    bullets: [
      { icon: <RocketLaunchIcon />, label: 'Semaines, pas mois' },
      { icon: <AutoAwesomeIcon />, label: 'LLM, RAG, Vision IA' },
      { icon: <SecurityIcon />, label: 'Déployé en conditions réelles' },
    ],
    ctaPrimary: 'Prendre RDV',
    ctaSecondary: 'Voir mes projets',
    subject: 'Demande de consulting',
    seenIn: 'Expérience chez',
    intro: {
      name: 'Wiem Zakraoui',
      title: 'Future Ingénieure en Intelligence Artificielle & Data Science',
      location: 'Ariana Soghra, Tunis',
      email: 'wiem.zakraoui@esprit.tn',
      github: 'github.com/wiemtn',
      linkedin: 'linkedin.com/in/wiem-zakraoui',
    },
  },
};

export default function Hero() {
  const [lang] = useLang();
  const t = UI[lang] || UI.en;
  const intro = t.intro;

  const EMAIL = process.env.EMAIL || intro.email;
  const mailHref = withUtm(`mailto:${EMAIL}?subject=${encodeURIComponent(t.subject)}`, 'hero_cta');

  return (
    <Box
      sx={(theme) => ({
        position: 'relative',
        color: '#fff',
        py: { xs: 8, md: 12 },
        background: `radial-gradient(1200px 600px at 20% -10%, ${theme.palette.secondary.main}33, transparent 60%),
                     linear-gradient(180deg, ${theme.palette.primary.main} 0%, #0b1220 60%, #08101a 100%)`,
        overflow: 'hidden',
      })}
    >
      {/* Subtle glow */}
      <Box sx={{
        position: 'absolute',
        width: 280,
        height: 280,
        right: -80,
        top: -80,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.35) 0%, rgba(6,182,212,0) 60%)',
        filter: 'blur(6px)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center" textAlign="center">
          {/* Headline */}
          <Typography variant="h1" sx={{ fontWeight: 900, letterSpacing: -1, lineHeight: 1.1, fontSize: { xs: 36, md: 56 } }}>
            {t.h1_a}
            <Box component="span" sx={{
              background: (th) => `linear-gradient(90deg, ${th.palette.secondary.main}, #7dd3fc)`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 0 24px rgba(125,211,252,.25)'
            }}>
              {t.h1_b}
            </Box>
            {t.h1_c}
          </Typography>

          {/* Subheadline */}
          <Typography sx={{ maxWidth: 900, fontSize: { xs: 16, md: 18 }, color: 'rgba(255,255,255,.86)' }}>
            {t.sub}
          </Typography>

          {/* === NOUVELLE SECTION : Présentation + Contact === */}
          <Box sx={{ maxWidth: 1000, p: 3, borderRadius: 3, bgcolor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="center">
              <Avatar
                src="https://i.ibb.co/4g0hmyhM/wiem.png"
              alt={intro.name}
                sx={{ width: 400, height: 356 }}
              />
              <Stack spacing={1} textAlign={{ xs: 'center', sm: 'left' }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {intro.name}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {intro.title}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>
                  {intro.location}
                </Typography>

                {/* Contact Icons */}
                <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'center', sm: 'flex-start' }} sx={{ mt: 1 }}>
                  <Button
                    href={mailHref}
                    size="small"
                    startIcon={<EmailIcon />}
                    sx={{ color: '#fff', textTransform: 'none' }}
                  >
                    {intro.email}
                  </Button>
                  <Button
                    href={`https://${intro.github}`}
                    target="_blank"
                    size="small"
                    startIcon={<GitHubIcon />}
                    sx={{ color: '#fff', textTransform: 'none' }}
                  >
                    GitHub
                  </Button>
                  <Button
                    href={`https://${intro.linkedin}`}
                    target="_blank"
                    size="small"
                    startIcon={<LinkedInIcon />}
                    sx={{ color: '#fff', textTransform: 'none' }}
                  >
                    LinkedIn
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Box>

          {/* Proof points */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} alignItems="center" justifyContent="center">
            {t.bullets.map((b, i) => (
              <Chip key={i} icon={b.icon} label={b.label} color="default" sx={{
                bgcolor: 'rgba(255,255,255,0.12)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.25)',
                fontWeight: 700,
              }} />
            ))}
          </Stack>

          {/* CTAs */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button href={mailHref} variant="contained" color="secondary" size="large" aria-label={t.ctaPrimary}>
              {t.ctaPrimary}
            </Button>
            <Button component="a" href="/projects" variant="outlined" size="large" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,.5)' }}>
              {t.ctaSecondary}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}