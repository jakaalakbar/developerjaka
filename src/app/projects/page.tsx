import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { ProjectCard } from "@/components/ProjectCard";

const project = {
  title: "ET Academy — Eduvance Talent",
  description:
    "Portal pembelajaran bahasa Inggris untuk melanjutkan kelas dan memantau perkembangan belajar.",
  link: "https://etacademy.co/",
};

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: "/projects",
  });
}

export default function ProjectsPage() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects"
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {work.title}
      </Heading>
      <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
        <ProjectCard
          title={project.title}
          description={project.description}
          link={project.link}
          href={project.link}
          images={[]}
          avatars={[]}
          content=""
        />
      </Column>
    </Column>
  );
}
