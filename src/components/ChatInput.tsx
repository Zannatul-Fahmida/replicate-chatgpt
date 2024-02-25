import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

interface Props {
  inputValue: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ChatInput: React.FC<Props> = ({ inputValue, handleSubmit, handleInputChange }) => {

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="w-full bg-neutral-800 border border-neutral-600 rounded-xl p-4 focus:outline-none focus:border-neutral-500 text-white"
        placeholder="Message ChatGPT..."
      />
      <button type="submit" className="p-2 bg-white rounded-lg absolute right-3 top-3">
        <FaArrowUpLong />
      </button>
    </form>
  );
};

export default ChatInput;

