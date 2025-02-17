interface ContentHTMLProps {
  content: string;
}

const ContentHTML = ({ content }: ContentHTMLProps) => {
    return (
      <div className="prose prose-sm md:prose-base w-full text-justify max-w-none">
        <div
          className="prose prose-sm md:prose-base max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    );
  };
  
  

export default ContentHTML;
