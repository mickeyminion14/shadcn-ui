"use client";
const DynamicPage = () => {
  let content: any;
  async function getServerSideProps() {
    const res = await fetch(
      `https://maxxxdevadmin.appskeeper.in/static-content?contentType=TERMS_AND_CONDITIONS&entityType=PLAYER`
    );
    const content = await res.json();
    console.log(content);
    return {
      props: {
        content,
      },
    };
  }

  getServerSideProps();

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default DynamicPage;
