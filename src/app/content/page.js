import Link from 'next/link';

const Page = () => {
  return (
    <main className="content">
      <h2 className="">Content</h2>
      <h3>Here is some key content.</h3>
      <Link href={`/content/example-1`}>Example 1</Link>
      <Link href={`/content/example-2`}>Example 2</Link>
      <Link href={`/content/example-3`}>Example 3</Link>
    </main>
  );
};

export default Page;