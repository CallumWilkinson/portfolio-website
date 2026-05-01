import type { ReactNode } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import type { PortfolioProject } from "../types/portfolio";

interface ProjectCardProps {
  project: PortfolioProject;
}

function renderFormattedText(text: string) {
  const segments = text.split("**");

  return segments.map((segment, index) => {
    const key = `${index}-${segment}`;

    if (index % 2 === 1) {
      return (
        <Box component="strong" key={key} sx={{ fontWeight: 700 }}>
          {segment}
        </Box>
      );
    }

    return (
      <Box component="span" key={key}>
        {segment}
      </Box>
    );
  });
}

function ProjectCard({ project }: ProjectCardProps) {
  let imageContent: ReactNode = null;
  if (project.imageUrl !== undefined) {
    const imageElement = (
      <Box
        alt={project.imageAlt}
        component="img"
        src={project.imageUrl}
        sx={{
          backgroundColor: "#f4f7f6",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 3,
          display: "block",
          filter: "saturate(1)",
          maxHeight: 220,
          objectFit: "cover",
          objectPosition: "top",
          transition: "transform 0.25s ease, filter 0.25s ease",
          width: "100%",
        }}
      />
    );

    let linkedImageContent = imageElement;

    if (project.liveDemoUrl !== undefined) {
      linkedImageContent = (
        <Box
          component="a"
          href={project.liveDemoUrl}
          rel="noreferrer"
          sx={{
            borderRadius: 3,
            display: "block",
            outline: "2px solid transparent",
            outlineOffset: 4,
            overflow: "hidden",
            transition: "box-shadow 0.25s ease, outline-color 0.25s ease",
            "&:hover": {
              boxShadow: "0 0 0 3px rgba(15, 108, 91, 0.16)",
              outlineColor: "rgba(15, 108, 91, 0.32)",
              "& img": {
                filter: "saturate(1.08)",
                transform: "scale(1.02)",
              },
            },
            "&:focus-visible": {
              boxShadow: "0 0 0 3px rgba(15, 108, 91, 0.2)",
              outlineColor: "rgba(15, 108, 91, 0.4)",
              "& img": {
                filter: "saturate(1.08)",
                transform: "scale(1.02)",
              },
            },
          }}
          target="_blank"
        >
          {imageElement}
        </Box>
      );
    }

    imageContent = (
      <Box
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
          overflow: "hidden",
          px: { xs: 2, md: 3 },
          pt: { xs: 2, md: 3 },
        }}
      >
        {linkedImageContent}
      </Box>
    );
  }

  let featuredChip: ReactNode = null;
  if (project.featured === true) {
    featuredChip = (
      <Chip
        color="primary"
        label="Featured"
        size="small"
        sx={{ alignSelf: "flex-start", fontWeight: 700 }}
      />
    );
  }

  let liveDemoButton: ReactNode = null;
  if (project.liveDemoUrl !== undefined) {
    liveDemoButton = (
      <Button
        component="a"
        href={project.liveDemoUrl}
        rel="noreferrer"
        size="small"
        target="_blank"
        variant="contained"
      >
        Live demo
      </Button>
    );
  }

  return (
    <Card
      sx={{
        backgroundColor: "background.paper",
        border: "1px solid",
        borderColor: project.featured === true ? "primary.light" : "divider",
        borderRadius: 5,
        boxShadow: "none",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {imageContent}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          gap: 3,
          p: { xs: 3, md: 4 },
        }}
      >
        <Stack spacing={2}>
          {featuredChip}
          <Stack spacing={1.5}>
            <Typography component="h3" variant="h5">
              {project.title}
            </Typography>
            <Typography color="text.secondary" sx={{ whiteSpace: "pre-line" }}>
              {renderFormattedText(project.description)}
            </Typography>
          </Stack>
        </Stack>

        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {project.techStack.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                backgroundColor: "rgba(15, 108, 91, 0.08)",
                borderRadius: 999,
                color: "text.primary",
                fontWeight: 600,
              }}
            />
          ))}
        </Box>

        <Stack spacing={1.25}>
          <Typography
            component="h4"
            sx={{ fontSize: "0.95rem", fontWeight: 800 }}
          >
            Technical Details
          </Typography>
          <Stack
            component="ul"
            spacing={1}
            sx={{
              color: "text.secondary",
              m: 0,
              pl: 2.5,
            }}
          >
            {project.engineeringNotes.map((note) => (
              <Typography component="li" key={note} sx={{ pl: 0.25 }}>
                {renderFormattedText(note)}
              </Typography>
            ))}
          </Stack>
        </Stack>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.5,
            mt: "auto",
          }}
        >
          <Button
            component="a"
            href={project.githubUrl}
            rel="noreferrer"
            size="small"
            target="_blank"
            variant="outlined"
          >
            GitHub
          </Button>
          {liveDemoButton}
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
