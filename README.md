# Using this template

- Clone this repo from github or local files
- Create a new repo on github
- Point cloned repo to new repo using:
- Push up changes
- Delete test files if not testing
- Delete this part of readme
- npm i

## Creating a new component

```
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './component.module.css';

const Component = ({ aProp }) => {
  return (
    <div className={styles.image}>
      <Image
        src={aProp.src}
        alt={aProp.alt}
        layout="fill"
        objectFit="cover"
        unoptimized
      />
    </div>
  )
};

Component.propTypes = {
  aProp: PropTypes.string.isRequired,
};

export { Component };
```

# COUNTRY PROJECT

Welcome to [COUNTRY NAMES]'s project: [PROJECT NAME].

[SPIEL]

## Getting Started

First, install all the dependencies using

```bash
npm i
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
