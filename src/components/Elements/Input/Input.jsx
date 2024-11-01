

const Input = ({ type , placeholder , label }) => {
    return (      
        <div className="text-black font-bold">{label}
            <input className="bg-white border-2 border-black p-2 h-14 w-full outline-none"
            type={type} 
            placeholder={placeholder} />
        </div>
    );
};

export default Input