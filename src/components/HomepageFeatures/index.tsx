import React from 'react';
import clsx from 'clsx';
import memberPhoto from '@site/static/img/docusaurus.png';
import styles from './styles.module.css';

type MemberItem = {
  title: string;
  role: string;
  imageUrl: string;
  description: JSX.Element;
};

const TeamList: MemberItem[] = [
  {
    title: 'Ing. Jakub Dubec',
    role: 'Product Owner',
    imageUrl: memberPhoto,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Bc. Rastislav Balcerčík',
    role: 'Project Manager',
    imageUrl: memberPhoto,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Bc. Juraj Valiček',
    role: 'Web Developer',
    imageUrl: memberPhoto,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Bc. Jakub Sorád',
    role: 'Software Developer & Tester',
    imageUrl: memberPhoto,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Bc. Róbert Szabó',
    role: 'Software Developer',
    imageUrl: memberPhoto,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Bc. Daniel Cok',
    role: 'Software Developer',
    imageUrl: memberPhoto,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Bc. Matej Lánik',
    role: 'Software Developer',
    imageUrl: memberPhoto,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({title, role, imageUrl, description}: MemberItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img src={imageUrl} className={styles.imageStyle} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <h4>{role}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <p><h1 className="hero__title">Náš tím</h1></p>
        <div className="row">
          {TeamList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
