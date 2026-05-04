import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {
  getModuleLabel,
  getNextStudyId,
  nextModules,
  type NextModule,
} from '@site/src/data/nextModules';
import styles from './styles.module.css';

type HomepageFeaturesProps = {
  CategorySvg: React.ComponentType<React.ComponentProps<'svg'>>;
};

function Feature({
  module,
  CategorySvg,
}: {
  module: NextModule;
} & HomepageFeaturesProps) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className="text--center">
          <Link to={`/docs/${getNextStudyId(module.start)}`}>
            <CategorySvg className={styles.featureSvg} role="img" />
          </Link>
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{module.title}</Heading>
          <p>
            {getModuleLabel(module)}を第{module.start}章から第{module.end}章までで学びます。
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures({
  CategorySvg,
}: HomepageFeaturesProps): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.intro}>
          <Heading as="h1">挫折しない Next.js 入門</Heading>
          <p>App Router を中心に、基礎からデプロイ、状態管理、Panda CSS、Valibot まで進む全284章の教材です。</p>
          <Link className="button button--primary button--lg" to="/docs/next_index">
            ロードマップを見る
          </Link>
        </div>
        <div className="row">
          {nextModules.map((module) => (
            <Feature key={module.title} module={module} CategorySvg={CategorySvg} />
          ))}
        </div>
      </div>
    </section>
  );
}
