import { TailwindComponent } from '@/src/components/TailwindComponent';
import { SectionStyles } from './styles';

export function ExperiencesSection() {
  return (
    <TailwindComponent as="section" styles={SectionStyles}>
      Octostar – Senior Software Developer Feb 2025 – Present (Contract)
      Developing and improving frontend architecture while collaborating across
      teams to deliver core features in a hybrid product company. QA Ltd / Cloud
      Academy – Senior Software Engineer Oct 2021 – Jan 2025 Led accessibility
      improvements (WCAG), mentored teams on modern TypeScript patterns, and
      drove consistency across multiple frontend codebases. Whereby – Software
      Engineer Jan 2021 – Jul 2021 Delivered video conferencing features,
      reviewed architecture (React, Redux, Storybook), and collaborated remotely
      from Sweden and Italy. Scorey – Software Engineer (Seasonal) Nov 2020 –
      Jun 2021 Volunteered as part of a small team on a sports-oriented startup,
      contributing React-based features and frontend support. Twitch – Frontend
      Engineer Sep 2019 – Dec 2020 Collaborated closely with AWS teams and
      leadership to optimize app delivery. Built features using React,
      TypeScript, and Ruby on Rails. IGDB.com – Frontend Engineer Aug 2019 – Dec
      2020 Owned frontend UI and code quality for a community-driven games
      database. Introduced impactful features and improved dev workflows. Just
      For The Win – Framework & Game Developer May 2017 – Aug 2019 First in game
      QA, then in framework development. Built tooling and maintained frameworks
      that powered game dev pipelines. Shipped successful casino titles.
    </TailwindComponent>
  );
}
