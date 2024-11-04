import Image from 'next/image';
import Link from 'next/link';

import Tag from '^/shared/tag';

import { ProjectItem } from '../types';

interface Props {
  projectItem: ProjectItem;
}

export default function ProjectListItem({
  projectItem: { projectId, title, thumbnailUrl, description, techStackTags },
}: Props) {
  return (
    <li className="border-b border-b-gray-400 last:border-b-0 transition hover:bg-green-400/[.5]">
      <Link
        href={`/projects/${projectId}`}
        className="flex flex-col p-8 lg:grid lg:grid-cols-[360px_1fr] gap-4 transition hover:-translate-y-1"
      >
        <Image
          src={thumbnailUrl}
          alt={`${title} - ${description}`}
          className="w-full aspect-3/2 object-cover"
          width={1500}
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
