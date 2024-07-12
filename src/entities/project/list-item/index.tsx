import Link from 'next/link';
import Image from 'next/image';

import Tag from '^/shared/tag';

import { ProjectItem } from '../types';

interface Props {
  projectItem: ProjectItem;
}

export default function ProjectListItem({
  projectItem: { projectId, title, thumbnailUrl, description, techStackTags },
}: Props) {
  return (
    <li className="py-8 border-b last:border-b-0">
      <Link
        href={`/projects/${projectId}`}
        className="flex flex-col md:flex-row gap-4"
      >
        <Image
          src={thumbnailUrl}
          alt={`${title} - ${description}`}
          className="w-full aspect-3/2 object-cover md:w-1/3 md:max-w-2xl"
          width={300}
          height={300}
        />
        <div className="flex flex-col justify-center gap-1 md:py-3">
          <span className="font-bold text-2xl md:text-3xl">{title}</span>
          <span className="pb-3">{description}</span>
          <div className="flex flex-row flex-wrap gap-1">
            {techStackTags.map((stackName, index) => (
              <Tag key={`tech-stack-tag-${index}`}>{stackName}</Tag>
            ))}
          </div>
        </div>
      </Link>
    </li>
  );
}
