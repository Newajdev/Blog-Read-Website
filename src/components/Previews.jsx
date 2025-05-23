import Bookmark from "./Bookmark";


const Previews = ({ReadingTime, bookmarks}) => {

    
    return (
        <div className="w-[410px] fixed right-80 ">
            <div className="w-full py-5 text-center bg-[#6047ec10] border-2 border-[#6047EC] rounded-lg mb-6">
                <h3 className="text-center font-bold text-2xl text-[#6047EC]">Spent time on read : {ReadingTime} min</h3>
            </div>
            <div className="py-5 px-7 bg-[#11111110] rounded-lg">
                <h2 className="text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
                
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
                
            </div>
        </div>
    );
};

export default Previews;