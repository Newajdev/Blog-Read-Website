
 import girl2 from '/girl2.jpg'

const Header = () => {
    return (
        <div className='flex justify-between items-center pt-12 pb-8 border-b-4'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img className='w-14' src={girl2} alt="" />         
        </div>
    );
};

export default Header;