import React, { useMemo } from 'react';
import { Container, Box, Typography, Button, Stack } from '@mui/material';
import FooterItems from './FooterItems';
import { useLang } from '../../utils/i18n';
import { withUtm } from '../../utils/withUtm';

const COPY = {
  en: {
    headline: "Looking to turn your data into performance drivers?",
    sub: "That’s my playground",
    cta: "Book a Call",
    projects: "View Projects",
    subject: "Consulting Inquiry",
  },
  fr: {
    headline: "Vous cherchez à transformer vos données en leviers de performance ?",
    sub: "J’en fais mon terrain de jeu",
    cta: "Réserver un appel",
    projects: "Voir mes projets",
    subject: "Demande de consultation",
  },
};

export default function Footer() {
  const [lang] = useLang();
  const t = COPY[lang] || COPY.en;

  // Ton email réel (fallback si .env manquant)
  const EMAIL = process.env.EMAIL || 'wiem.zakraoui@esprit.tn';

  const emailHref = useMemo(() => {
    const subject = encodeURIComponent(t.subject);
    return withUtm(`mailto:${EMAIL}?subject=${subject}`, 'footer_cta');
  }, [EMAIL, t.subject]);

  return (
    <Box sx={{ bgcolor: 'primary.main', color: '#fff', mt: 6 }}>
      <Container maxWidth="lg" sx={{ py: 5, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
          {t.headline}
        </Typography>
        <Typography sx={{ opacity: 0.9, mb: 2 }}>
          {t.sub}
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
          <Button
            href={emailHref}
            variant="contained"
            color="secondary"
            aria-label={t.cta}
          >
            {t.cta}
          </Button>
          <Button
            href="/projects"
            variant="outlined"
            sx={{ color: '#fff', borderColor: 'rgba(255,255,255,.4)' }}
          >
            {t.projects}
          </Button>
        </Stack>
        <FooterItems />
        <Typography variant="caption" sx={{ display: 'block', mt: 2, opacity: 0.75 }}>
          © {new Date().getFullYear()} Wiem Zakraoui
        </Typography>
      </Container>
    </Box>
  );
}