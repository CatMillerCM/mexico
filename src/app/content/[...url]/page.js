const Page = ({ params: { url } }) => {
  return (
    <main>
      <h2>{url}</h2>
      <p>Here is information about {url}</p>
    </main>
  );
};

export default Page;
