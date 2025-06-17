import { Card } from '@/src/components/Card';
import { TailwindComponent } from '@/src/components/TailwindComponent';
import { Typography } from '@/src/components/Typography';
import Image from 'next/image';
import { experienceCardStyles } from './styles';

type ExperienceCardProps = {
  company: string;
  companyLogo: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
};

export const ExperienceCard = ({
  company,
  companyLogo,
  title,
  startDate,
  endDate,
  description,
}: ExperienceCardProps) => {
  return (
    <Card styles={experienceCardStyles.root}>
      <TailwindComponent styles={experienceCardStyles.header}>
        <TailwindComponent
          as={Image}
          styles={experienceCardStyles.logo}
          src={companyLogo}
          alt={company}
          width={100}
          height={100}
        />
        <TailwindComponent>
          <TailwindComponent as="h3">{company}</TailwindComponent>
          <TailwindComponent as="p">{title}</TailwindComponent>
          <TailwindComponent as="p">
            {startDate} - {endDate}
          </TailwindComponent>
        </TailwindComponent>
      </TailwindComponent>
      <Typography as="p">{description}</Typography>
    </Card>
  );
};
