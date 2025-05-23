import { FaBookmark  } from "react-icons/fa";



const Blogs = ({blog, hendlerRead, hendlerBookmark}) => {

    const {id, cover_img, author, author_img, reading_time, title, hashtags, post_time }=blog;

    

    return (
        <div className="w-[845px] space-y-6 border-b-2 pb-8 pt-4">

            <img className="w-full h-[450px] bg-black rounded-xl" src={cover_img} alt="" />
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                        <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='font-bold text-2xl'>{author}</h3>
                        <p className='font-semibold text-base text-[rgba(17,17,17,0.6)]'>{post_time}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 font-semibold text-lg text-[rgba(17,17,17,0.6)]">
                    <p>{reading_time} min read</p>
                    <button onClick={()=>hendlerBookmark(blog)} className={`hover:text-[#6047EC] disabled`} ><FaBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold">{title}</h2>
            <div className="font-semibold text-lg text-[rgba(17,17,17,0.6)] flex gap-2">
                {
                    hashtags.map((hashtag, idx) => <span key={idx}>{hashtag}</span>)
                }
            </div>
            <button onClick={()=>hendlerRead(id, reading_time)} className="text-[#6047EC] text-xl font-semibold underline">Mark as read</button>

        </div>
    );
};

export default Blogs; 