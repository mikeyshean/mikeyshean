export function TableOfContents({headingText}) {

  const getHeadings = (headingText) => {
    return headingText.map((heading, idx) => {

      const link = "#" + heading.replace(/ /g, "_").toLowerCase();
      return {
        text: heading,
        link,
        order: idx+1
      };
    });
  };
  
  const headings = getHeadings(headingText);

  return (
    <>
      {headings.length > 0 ? (
        <>
          <h2 className='mt-12 mb-5'>Table of Contents</h2>
          <ul className="list-none p-0">
            {headings.map((heading) => (
              <li key={heading.text} className="p-2 m-0">
              <a href={heading.link}>{heading.order}. &nbsp;{heading.text}</a>
              </li>
            ))}
          </ul>
        </>) : null
      }
    </>

  )

}