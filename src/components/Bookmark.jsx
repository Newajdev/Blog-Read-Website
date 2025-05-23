

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    
    
    return (
        <div className="p-5 bg-white rounded-lg mt-4">
            <h3 className="font-semibold text-lg">{title}</h3>           
        </div>
    );
};

export default Bookmark;