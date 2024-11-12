# Using this template

## Creating repo

- Clone this repo from github or local files
- Create a new repo on github
- Point cloned repo to new repo using: `git remote set-url origin [REPO URL]`
- Push up changes: `git push -u origin main`
- If the error 'fatal: the remote end hung up unexpectedly' arises, use `git config http.postBuffer 524288000` and try push again
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

### Hosting

Follow guide at https://callumeddisford.medium.com/deploying-a-next-js-14-app-to-google-cloud-run-c193895f5bd4

# COUNTRY PROJECT

// TO DO - update readme

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
