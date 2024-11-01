

const Input = ({label , ...props }) => {
    return (
        <div className="text-black font-bold">{label}
            <input className="bg-white border-2 border-black p-2 h-14 w-full outline-none"
            {...props} />
        </div>
    );
};

export default Input