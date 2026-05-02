import { Box, Container, Stack, Typography } from "@mui/material";

import ContactLinkButton from "../components/ContactLinkButton";
import SectionHeading from "../components/SectionHeading";
import type { ContactLink } from "../types/portfolio";

interface ContactSectionProps {
  title: string;
  summary: string;
  links: ContactLink[];
}

function ContactSection({ title, summary, links }: ContactSectionProps) {
  const rows = [1, 2, 3, 4].map((row) =>
    links.filter((link) => (link.row ?? 1) === row),
  );
  const emailRow = rows[3];
  const buttonRows = rows.slice(0, 3);

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundColor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 5,
            p: { xs: 3, md: 5 },
          }}
        >
          <SectionHeading eyebrow="Next Step" title={title} />
          <Stack spacing={3}>
            <Typography
              color="text.secondary"
              sx={{ fontSize: { xs: "1rem", md: "1.05rem" }, maxWidth: 760 }}
            >
              {summary}
            </Typography>

            <Stack spacing={1.5}>
              {emailRow.length > 0 ? (
                <Typography color="text.secondary" sx={{ fontSize: "0.95rem" }}>
                  {emailRow.map((link) => link.label).join("")}
                </Typography>
              ) : null}

              {buttonRows.map((rowLinks, index) => {
                if (rowLinks.length === 0) {
                  return null;
                }

                return (
                  <Box
                    key={index}
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      gap: 1.5,
                    }}
                  >
                    {rowLinks.map((link) => (
                      <ContactLinkButton
                        href={link.href}
                        key={link.id}
                        label={link.label}
                        tone={link.tone}
                        variant={link.variant}
                      />
                    ))}
                  </Box>
                );
              })}
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactSection;
